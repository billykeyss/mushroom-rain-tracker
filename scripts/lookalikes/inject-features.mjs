/**
 * Injects `keyFeatures: [...]` into each lookalike object in curated.ts +
 * generated.ts, keyed by the exact `distinguishingFeature` prose. Safe and
 * idempotent: matches the danger→distinguishingFeature span (only lookalikes
 * have it), consumes any existing keyFeatures, and re-emits from the map.
 *
 *   node --experimental-strip-types scripts/lookalikes/inject-features.mjs
 *
 * Reads .cache/lookalikes/key-features.json = { "<exact prose>": ["cue", ...] }.
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "../..");
const MAP = path.join(ROOT, ".cache/lookalikes/key-features.json");
const SOURCES = [
  path.join(ROOT, "lib/catalog/curated.ts"),
  path.join(ROOT, "lib/catalog/generated.ts"),
  path.join(ROOT, "lib/catalog/lookalikes/synthesized.ts"),
];

const unquote = (lit) => {
  try { return JSON.parse(`"${lit}"`); } catch { return lit; }
};

// g1 danger field, g2 separator, (optional existing keyFeatures consumed),
// g3 distinguishingFeature field, g4 prose.
const SPAN =
  /(danger: "[^"]*")(,\s*)(?:keyFeatures: \[[\s\S]*?\],\s*)?(distinguishingFeature:\s*"((?:[^"\\]|\\.)*)")/g;

async function main() {
  const map = JSON.parse(await readFile(MAP, "utf8"));
  const stats = { total: 0, injected: 0, missing: 0 };

  for (const file of SOURCES) {
    let src;
    try { src = await readFile(file, "utf8"); } catch { continue; }
    const next = src.replace(SPAN, (_full, danger, sep, dfField, prose) => {
      stats.total++;
      const cues = map[unquote(prose)];
      if (Array.isArray(cues) && cues.length) {
        stats.injected++;
        return `${danger}${sep}keyFeatures: ${JSON.stringify(cues)}${sep}${dfField}`;
      }
      stats.missing++;
      return `${danger}${sep}${dfField}`; // strip any stale keyFeatures
    });
    if (next !== src) await writeFile(file, next);
  }

  console.log(`lookalike occurrences:    ${stats.total}`);
  console.log(`  keyFeatures injected:   ${stats.injected}`);
  console.log(`  no map entry (skipped): ${stats.missing}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
