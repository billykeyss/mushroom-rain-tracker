// Scan the catalogs for image URLs that cannot be fetched (dead links).
// Only probes URLs NOT already localized into LOCAL_IMAGES (those are known-good),
// so it is fast and precise. Classifies 400/403/404/410 as dead vs 429/5xx as
// rate-limited (inconclusive). Run: node --experimental-strip-types scripts/find-dead-images.mjs
import { readFile } from "node:fs/promises";
import path from "node:path";
import { stripQuery, cappedThumbUrl } from "./lib/wikimedia-url.mjs";
import { LOCAL_IMAGES } from "../lib/local-images.ts";

const ROOT = path.resolve(import.meta.dirname, "..");
const UA = "ForayFieldGuide/1.0 (info@gocapsule.ai) link-check";
const SOURCES = ["lib/species-images.ts", "lib/tree-catalog.ts", "lib/species-gallery.ts"];
const HOST_RE = /(https:\/\/(?:upload\.wikimedia\.org|inaturalist-open-data\.s3\.amazonaws\.com)\/[^"]+)/;
const ID_RE = /"id":"([^"]+)"|^\s*"([a-z0-9][a-z0-9-]*)":\s*[[{]/;
const URL_FIELD_RE = /"(url|thumb)":"(https:\/\/[^"]+)"/g;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Collect { url, field, id, source } for every catalog image, attributing each
// URL to the nearest preceding id/key token in the file.
async function collect() {
  const rows = [];
  for (const rel of SOURCES) {
    let text;
    try { text = await readFile(path.join(ROOT, rel), "utf8"); } catch { continue; }
    const lines = text.split("\n");
    let curId = "?";
    for (const line of lines) {
      const idm = line.match(ID_RE);
      if (idm) curId = idm[1] || idm[2] || curId;
      for (const m of line.matchAll(URL_FIELD_RE)) {
        const [, field, url] = m;
        if (HOST_RE.test(url)) rows.push({ url, field, id: curId, source: rel });
      }
    }
  }
  return rows;
}

async function probe(url, attempt = 0) {
  let res;
  try {
    res = await fetch(url, { method: "HEAD", headers: { "User-Agent": UA } });
  } catch {
    return attempt < 2 ? (await sleep(400 * 2 ** attempt), probe(url, attempt + 1)) : "neterr";
  }
  if (res.status === 429 || res.status >= 500) {
    return attempt < 3 ? (await sleep(800 * 2 ** attempt), probe(url, attempt + 1)) : "ratelimited";
  }
  if (res.ok) return "ok";
  return res.status; // 400/403/404/410 etc.
}

// A URL is dead only if every rendition the localizer would try also fails.
async function candidatesFor(url, field) {
  const c = [stripQuery(url)];
  const cap = cappedThumbUrl(url, field === "thumb" ? 330 : 960);
  if (cap) c.push(cap);
  const results = [];
  for (const u of c) results.push(await probe(u));
  if (results.includes("ok")) return "ok";
  if (results.some((r) => r === "ratelimited" || r === "neterr")) return "inconclusive";
  return results[0]; // a definitive failure status
}

async function main() {
  const rows = await collect();
  const candidates = rows.filter((r) => !LOCAL_IMAGES[r.url]);
  const uniq = [...new Map(candidates.map((r) => [r.url, r])).values()];
  console.log(`Catalog image URLs: ${rows.length} (${new Set(rows.map((r) => r.url)).size} unique).`);
  console.log(`Already localized: ${rows.length - candidates.length}. Probing ${uniq.length} un-localized URLs...\n`);

  const dead = [];
  const inconclusive = [];
  const CONC = 3; // gentle: avoid Wikimedia rate-limiting false-inconclusives
  let i = 0;
  async function worker() {
    while (i < uniq.length) {
      const r = uniq[i++];
      const verdict = await candidatesFor(r.url, r.field);
      if (verdict === "ok") continue;
      if (verdict === "inconclusive") inconclusive.push(r);
      else dead.push({ ...r, status: verdict });
      await sleep(250);
    }
  }
  await Promise.all(Array.from({ length: CONC }, worker));

  dead.sort((a, b) => (a.source + a.id).localeCompare(b.source + b.id));
  console.log(`\n=== DEAD images (${dead.length}) ===`);
  for (const d of dead) console.log(`  [${d.source.replace("lib/", "")}] ${d.id}  (${d.status})  ${d.url}`);
  if (inconclusive.length) {
    console.log(`\n=== INCONCLUSIVE (rate-limited; re-run to confirm) (${inconclusive.length}) ===`);
    for (const d of inconclusive) console.log(`  [${d.source.replace("lib/", "")}] ${d.id}  ${d.url}`);
  }
  const byEntry = [...new Set(dead.map((d) => `${d.source.replace("lib/", "")}:${d.id}`))];
  console.log(`\nSummary: ${dead.length} dead URL(s) across ${byEntry.length} catalog entr(y/ies).`);
}

main().catch((e) => { console.error(e); process.exit(1); });
