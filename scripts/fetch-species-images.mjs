import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { licenseAllowed, classifyKind, selectImages } from "./lib/gallery.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const UA = "MushroomRainTracker/1.0 (personal field guide; contact info@gocapsule.ai)";
const CACHE = path.join(ROOT, ".cache/gallery");
const CAP = 6;
const PER_KIND = 2;
const ALLOWED_INAT = "cc0,cc-by,cc-by-sa,cc-by-nc,cc-by-nc-sa";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getJSON(url) {
  await mkdir(CACHE, { recursive: true });
  const key = path.join(CACHE, Buffer.from(url).toString("base64url").slice(0, 180) + ".json");
  try { return JSON.parse(await readFile(key, "utf8")); } catch {}
  const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "application/json" } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const json = await res.json();
  await writeFile(key, JSON.stringify(json));
  await sleep(350); // be polite
  return json;
}

/** Reduce a catalog scientific name to the bare binomial for API queries. */
function cleanName(sci) {
  return String(sci)
    .replace(/\(.*?\)/g, " ")                                            // drop parentheticals
    .replace(/;.*$/, " ")                                                // drop trailing notes
    .replace(/\b(sensu\s+(?:lato|stricto)|s\.\s?[ls]\.|group|complex|agg\.?)\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stripHtml(s) { return String(s).replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim(); }
function truncate(s, n) { return s.length <= n ? s : s.slice(0, n - 1).trimEnd() + "…"; }

/** Clean a Commons ImageDescription: drop embedded CSS/templates; keep only if descriptive. */
function cleanDesc(html) {
  let s = String(html);
  s = s.replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<script[\s\S]*?<\/script>/gi, " ");
  s = s.replace(/<[^>]*>/g, " ");                       // remaining tags
  s = s.replace(/@media[^{]*\{[\s\S]*?\}/gi, " ");      // media-query CSS blocks
  s = s.replace(/\{[^}]*\}/g, " ");                     // any other braced CSS
  s = s.replace(/[.#]?mw-[\w-]+|body\.skin[\w-]*|\.skin--[\w-]+|\.client-[\w-]+|@media[^,;]*/gi, " ");
  s = s.replace(/\s+/g, " ").trim();
  if (/@media|mw-parser|skin--|client-js|min-width/i.test(s)) return ""; // still CSS-ish
  if (!/[a-z]{4,}/i.test(s) || s.length < 8) return "";  // not descriptive enough
  return s;
}

// Filenames that are typically not clean single-specimen ID shots.
const JUNK_FILENAME =
  /bucket|basket|market|for[\s_-]?sale|risotto|\bdish\b|\bplate\b|drying|dried|illustration|distribution|range[\s_-]?map|\bmap\b|stamp|\bcoin\b|\blabel\b|diagram|chart/i;

function normalizeCommonsItem(p) {
  const ii = p.imageinfo?.[0];
  if (!ii) return null;
  const title = (p.title ?? "").replace(/^File:/, "");
  if (!/\.(jpe?g|png)$/i.test(title)) return null;   // photos only (skip svg/gif/tif maps)
  if (JUNK_FILENAME.test(title)) return null;         // skip market/illustration/map shots
  const meta = ii.extmetadata ?? {};
  const license = meta.LicenseShortName?.value ?? meta.License?.value ?? null;
  if (!licenseAllowed(license)) return null;
  const desc = cleanDesc(meta.ImageDescription?.value ?? "");
  return {
    url: ii.url,
    thumb: ii.thumburl ?? null,
    width: ii.width ?? 0, height: ii.height ?? 0,
    thumbWidth: ii.thumbwidth ?? null, thumbHeight: ii.thumbheight ?? null,
    artist: stripHtml(meta.Artist?.value ?? "") || null,
    credit: stripHtml(meta.Credit?.value ?? "") || null,
    license, sourceUrl: ii.descriptionurl ?? null, pageUrl: null,
    kind: classifyKind(`${title} ${desc}`),
    caption: desc ? truncate(desc, 140) : undefined,
    source: "commons",
  };
}

// ---- Wikimedia Commons -------------------------------------------------
async function fromCommons(scientific) {
  const api = "https://commons.wikimedia.org/w/api.php";
  const imgProps = { prop: "imageinfo", iiprop: "url|size|extmetadata", iiurlwidth: "1024" };
  const seen = new Set();
  const out = [];
  const collect = (pages) => {
    for (const p of Object.values(pages ?? {})) {
      const item = normalizeCommonsItem(p);
      if (item && !seen.has(item.url)) { seen.add(item.url); out.push(item); }
    }
  };
  // 1) Species category — precise (members are curated as this species)
  const catQ = new URLSearchParams({
    action: "query", format: "json",
    generator: "categorymembers", gcmtitle: `Category:${scientific}`,
    gcmtype: "file", gcmlimit: "40", ...imgProps,
  });
  try { collect((await getJSON(`${api}?${catQ}`))?.query?.pages); } catch {}
  // 2) Fall back to full-text search only if the category was thin
  if (out.length < 4) {
    const sQ = new URLSearchParams({
      action: "query", format: "json",
      generator: "search", gsrsearch: scientific, gsrnamespace: "6", gsrlimit: "25",
      ...imgProps,
    });
    try { collect((await getJSON(`${api}?${sQ}`))?.query?.pages); } catch {}
  }
  return out;
}

// ---- iNaturalist -------------------------------------------------------
async function fromINat(scientific) {
  const taxa = await getJSON(
    `https://api.inaturalist.org/v1/taxa?q=${encodeURIComponent(scientific)}&rank=species&per_page=1`,
  ).catch(() => null);
  const taxon = taxa?.results?.[0];
  if (!taxon) return [];
  const obs = await getJSON(
    `https://api.inaturalist.org/v1/observations?taxon_id=${taxon.id}` +
    `&photo_license=${ALLOWED_INAT}&quality_grade=research&per_page=20&order_by=votes&order=desc`,
  ).catch(() => null);
  const out = [];
  for (const o of obs?.results ?? []) {
    for (const ph of o.photos ?? []) {
      if (!licenseAllowed(ph.license_code)) continue;
      const big = (ph.url ?? "").replace("/square.", "/large.");
      out.push({
        url: big, thumb: (ph.url ?? "").replace("/square.", "/medium."),
        width: ph.original_dimensions?.width ?? 0, height: ph.original_dimensions?.height ?? 0,
        thumbWidth: null, thumbHeight: null,
        artist: ph.attribution ? stripHtml(ph.attribution) : null, credit: "iNaturalist",
        license: ph.license_code, sourceUrl: `https://www.inaturalist.org/photos/${ph.id}`,
        pageUrl: `https://www.inaturalist.org/taxa/${taxon.id}`,
        kind: classifyHint(o, ph), caption: undefined, source: "inat",
      });
    }
  }
  return out;
}

// iNat photos rarely carry feature text; default to in-situ (observations are field shots)
function classifyHint(o, ph) {
  const t = `${o.description ?? ""} ${ph.attribution ?? ""}`;
  const k = classifyKind(t);
  return k === "whole" ? "in-situ" : k;
}

// ---- Lead images (single-image map) ------------------------------------
async function loadLeads() {
  // Read the generated file as text to avoid depending on TS import support.
  try {
    const text = await readFile(path.join(ROOT, "lib/species-images.ts"), "utf8");
    const start = text.indexOf("{", text.indexOf("SPECIES_IMAGES"));
    const body = text.slice(start, text.lastIndexOf("};") + 1);
    // The object literal is valid JSON5-ish; entries are JSON. Parse leniently.
    const leads = {};
    const re = /"([a-z0-9-]+)":\s*(\{[^\n]*?\})\s*,?\n/g;
    for (const m of body.matchAll(re)) {
      try { leads[m[1]] = JSON.parse(m[2]); } catch {}
    }
    return leads;
  } catch { return {}; }
}

// ---- Driver ------------------------------------------------------------
async function main() {
  const catalog = await readFile(path.join(ROOT, "lib/species-catalog.ts"), "utf8");
  const LEADS = await loadLeads();
  const species = [...catalog.matchAll(/id:\s*"([^"]+)"[\s\S]{0,400}?scientific:\s*"([^"]+)"/g)]
    .map((m) => ({ id: m[1], scientific: cleanName(m[2]) }));
  const only = process.env.ONLY ? new Set(process.env.ONLY.split(",")) : null;

  const gallery = {};
  for (const { id, scientific } of species) {
    if (only && !only.has(id)) continue;
    // The lead (SPECIES_IMAGES) is shown by the hero <SpeciesPhoto>; keep it OUT of the
    // gallery (dedupe by URL) so we don't duplicate it and so every gallery image is
    // license-filtered (leads are not).
    const leadUrl = LEADS[id]?.url ?? null;
    const [c, i] = await Promise.all([fromCommons(scientific), fromINat(scientific)]);
    const cands = [...c, ...i].filter((x) => x.url && x.url !== leadUrl);
    const picked = selectImages(null, cands, { cap: CAP, maxPerKind: PER_KIND })
      .map(({ source, ...keep }) => keep); // drop internal `source` field
    gallery[id] = picked;
    console.log(`${id}: ${picked.length} (commons ${c.length}, inat ${i.length})`);
  }

  const body = Object.entries(gallery)
    .map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`)
    .join("\n");
  const file =
`/**
 * AUTO-GENERATED by scripts/fetch-species-images.mjs. Do not edit by hand.
 * Feature-grouped identification photos from Wikimedia Commons + iNaturalist.
 */
import type { SpeciesDetailImage } from "./species-image-types";

export const SPECIES_GALLERY: Record<string, SpeciesDetailImage[]> = {
${body}
};
`;
  await writeFile(path.join(ROOT, "lib/species-gallery.ts"), file);
  console.log(`\nwrote lib/species-gallery.ts (${Object.keys(gallery).length} species)`);
}

main().catch((e) => { console.error(e); process.exit(1); });
