/**
 * Lists every distinct lookalike `distinguishingFeature` prose (with scientific
 * name + danger for context) so subagents can distill 2–4 key cues from each.
 * Deduped by prose, since the same text under multiple parents needs extracting
 * only once.
 *
 *   node --experimental-strip-types scripts/lookalikes/extract-feature-worklist.mjs
 *
 * Writes .cache/lookalikes/feature-worklist.json: [{ key, scientific, name, danger, prose }]
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { PNW_CATALOG } from "../../lib/species-catalog.ts";

const ROOT = path.resolve(import.meta.dirname, "../..");
const OUT = path.join(ROOT, ".cache/lookalikes/feature-worklist.json");

async function main() {
  const byProse = new Map();
  for (const s of PNW_CATALOG) {
    for (const l of s.lookalikes) {
      if (byProse.has(l.distinguishingFeature)) continue;
      byProse.set(l.distinguishingFeature, {
        key: byProse.size, // stable ordinal key
        scientific: l.scientific,
        name: l.name,
        danger: l.danger,
        prose: l.distinguishingFeature,
      });
    }
  }
  const list = [...byProse.values()];
  await mkdir(path.dirname(OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify(list, null, 2));
  console.log(`distinct distinguishingFeature prose: ${list.length}`);
  console.log(`Wrote ${path.relative(ROOT, OUT)}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
