/**
 * Safety reconciliation: a lookalike card that deep-links to a catalog species
 * must never show a "safe" danger badge when that species is actually
 * toxic/deadly/psychoactive. This rewrites only the unsafe SAFE->DANGEROUS
 * mismatches (never the reverse, never within-band), keyed off the species the
 * catalogId points to. Idempotent. Run AFTER match-lookalikes, before inject.
 *
 *   node --experimental-strip-types scripts/lookalikes/reconcile-danger.mjs
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { PNW_CATALOG } from "../../lib/species-catalog.ts";

const ROOT = path.resolve(import.meta.dirname, "../..");
const SOURCES = [
  path.join(ROOT, "lib/catalog/curated.ts"),
  path.join(ROOT, "lib/catalog/generated.ts"),
  path.join(ROOT, "lib/catalog/lookalikes/synthesized.ts"),
];

const SAFE = new Set(["edible", "choice", "edible-when-cooked"]);
const EDIBILITY_TO_DANGER = { deadly: "deadly", toxic: "toxic", psychoactive: "toxic" };
const dangerForTarget = new Map(
  PNW_CATALOG.map((s) => [s.id, EDIBILITY_TO_DANGER[s.edibility]]).filter(([, d]) => d),
);

// catalogId immediately precedes danger (match-lookalikes inserts it there).
const RE = /(catalogId: "([^"]+)"(,\s*)danger: )"((?:[^"\\]|\\.)*)"/g;

async function main() {
  let fixed = 0;
  for (const file of SOURCES) {
    let src;
    try { src = await readFile(file, "utf8"); } catch { continue; }
    const next = src.replace(RE, (full, head, id, _sep, danger) => {
      const target = dangerForTarget.get(id); // set only for dangerous targets
      if (target && SAFE.has(danger)) {
        fixed++;
        return `${head}"${target}"`;
      }
      return full;
    });
    if (next !== src) await writeFile(file, next);
  }
  console.log(`reconciled ${fixed} unsafe danger badges (safe -> dangerous target)`);
}

main().catch((e) => { console.error(e); process.exit(1); });
