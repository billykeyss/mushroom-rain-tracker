/**
 * Fetches structured source bundles for worklist species from authoritative
 * APIs (Wikipedia, iNaturalist, GBIF). Cached per-species so re-runs are cheap
 * and the bulk synthesis pass is reproducible.
 *
 *   node --experimental-strip-types scripts/lookalikes/fetch-sources.mjs            # all
 *   ONLY=amanita-virosa,suillus-luteus node ... scripts/lookalikes/fetch-sources.mjs # subset
 *
 * Writes .cache/lookalikes/sources/<id>.json = { wikipedia, inat, gbif }.
 */
import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "../..");
const WORKLIST = path.join(ROOT, ".cache/lookalikes/worklist.json");
const OUT_DIR = path.join(ROOT, ".cache/lookalikes/sources");
const UA = "ForayFieldGuide/1.0 (info@gocapsule.ai) lookalike-research";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const exists = (p) => access(p, constants.F_OK).then(() => true, () => false);

async function getJSON(url, headers = {}) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "application/json", ...headers } });
    if (!res.ok) return { error: `${res.status}`, url };
    return await res.json();
  } catch (e) {
    return { error: String(e), url };
  }
}

function title(binomial) {
  return binomial.charAt(0).toUpperCase() + binomial.slice(1).replace(/\s+/g, "_");
}

async function wikipedia(binomial) {
  const t = encodeURIComponent(title(binomial));
  const summary = await getJSON(`https://en.wikipedia.org/api/rest_v1/page/summary/${t}`);
  await sleep(200);
  const extractQ = new URLSearchParams({
    action: "query", format: "json", prop: "extracts", explaintext: "1",
    redirects: "1", titles: title(binomial),
  });
  const ex = await getJSON(`https://en.wikipedia.org/w/api.php?${extractQ}`);
  const pages = ex?.query?.pages ?? {};
  const extract = Object.values(pages)[0]?.extract ?? null;
  return {
    title: summary?.title ?? null,
    description: summary?.description ?? null,
    summary: summary?.extract ?? null,
    extract,
    pageUrl: summary?.content_urls?.desktop?.page ?? null,
  };
}

async function inat(binomial) {
  const taxa = await getJSON(
    `https://api.inaturalist.org/v1/taxa?q=${encodeURIComponent(binomial)}&rank=species&per_page=1`,
  );
  const t = taxa?.results?.[0];
  if (!t) return { error: "no taxon", binomial };
  return {
    id: t.id,
    name: t.name,
    preferredCommonName: t.preferred_common_name ?? null,
    wikipediaSummary: t.wikipedia_summary ?? null,
    observationsCount: t.observations_count ?? null,
    ancestors: (t.ancestors ?? []).map((a) => ({ rank: a.rank, name: a.name })),
    pageUrl: `https://www.inaturalist.org/taxa/${t.id}`,
    photoUrl: t.default_photo?.medium_url ?? null,
  };
}

async function gbif(binomial) {
  const m = await getJSON(`https://api.gbif.org/v1/species/match?name=${encodeURIComponent(binomial)}`);
  return {
    usageKey: m?.usageKey ?? null,
    scientificName: m?.scientificName ?? null,
    rank: m?.rank ?? null,
    family: m?.family ?? null,
    order: m?.order ?? null,
    genus: m?.genus ?? null,
    matchType: m?.matchType ?? null,
    confidence: m?.confidence ?? null,
  };
}

async function main() {
  const worklist = JSON.parse(await readFile(WORKLIST, "utf8"));
  const only = process.env.ONLY ? new Set(process.env.ONLY.split(",")) : null;
  const force = process.argv.includes("--force");
  await mkdir(OUT_DIR, { recursive: true });

  let done = 0;
  for (const sp of worklist) {
    if (only && !only.has(sp.id)) continue;
    const dest = path.join(OUT_DIR, `${sp.id}.json`);
    if (!force && (await exists(dest))) { done++; continue; }

    const [wiki, ina, gb] = await Promise.all([
      wikipedia(sp.binomial),
      inat(sp.binomial),
      gbif(sp.binomial),
    ]);
    await writeFile(
      dest,
      JSON.stringify(
        { id: sp.id, binomial: sp.binomial, danger: sp.danger, reviewGate: sp.reviewGate, wikipedia: wiki, inat: ina, gbif: gb },
        null,
        2,
      ),
    );
    done++;
    console.log(`${sp.id}: wiki=${wiki.extract ? "ok" : "—"} inat=${ina.id ? "ok" : "—"} gbif=${gb.usageKey ? "ok" : "—"}`);
    await sleep(400); // politeness
  }
  console.log(`\nFetched/cached ${done} species → ${path.relative(ROOT, OUT_DIR)}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
