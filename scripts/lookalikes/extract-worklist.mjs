/**
 * Builds the research worklist: every distinct lookalike species that is NOT yet
 * in the catalog and is not genus-only. Deduped by binomial, with the parent
 * species that reference it, each parent's distinguishing note, and the most
 * severe danger seen. Deadly/toxic species are flagged for the review gate.
 *
 *   node --experimental-strip-types scripts/lookalikes/extract-worklist.mjs
 *
 * Writes .cache/lookalikes/worklist.json (sorted, reproducible).
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { PNW_CATALOG } from "../../lib/species-catalog.ts";
import { buildResolver, isGenusOnly, normalizeScientific } from "../../lib/lookalike-resolver.ts";

const ROOT = path.resolve(import.meta.dirname, "../..");
const OUT = path.join(ROOT, ".cache/lookalikes/worklist.json");

const resolve = buildResolver(PNW_CATALOG);

// Most-severe-wins ordering for collapsing a lookalike seen under several parents.
const SEVERITY = [
  "deadly", "toxic", "GI-upset", "edible-with-caution",
  "inedible", "edible-when-cooked", "edible",
];
const worseThan = (a, b) => SEVERITY.indexOf(a) < SEVERITY.indexOf(b);

const slugFor = (binomial) => binomial.replace(/\s+/g, "-");

async function main() {
  const byBinomial = new Map();

  for (const parent of PNW_CATALOG) {
    for (const l of parent.lookalikes) {
      if (resolve(l.scientific) || isGenusOnly(l.scientific)) continue; // already catalogued / genus-only
      const binomial = normalizeScientific(l.scientific);
      if (!binomial) continue;

      let entry = byBinomial.get(binomial);
      if (!entry) {
        entry = {
          id: slugFor(binomial),
          binomial,
          rawNames: new Set(),
          commonNames: new Set(),
          danger: l.danger,
          parents: [],
        };
        byBinomial.set(binomial, entry);
      }
      entry.rawNames.add(l.scientific);
      entry.commonNames.add(l.name);
      if (worseThan(l.danger, entry.danger)) entry.danger = l.danger;
      entry.parents.push({
        id: parent.id,
        commonName: parent.commonNames[0],
        note: l.distinguishingFeature,
      });
    }
  }

  const all = [...byBinomial.values()]
    .map((e) => ({
      ...e,
      rawNames: [...e.rawNames].sort(),
      commonNames: [...e.commonNames].sort(),
      reviewGate: e.danger === "deadly" || e.danger === "toxic",
    }))
    .sort((a, b) => a.binomial.localeCompare(b.binomial));

  const reviewGate = all.filter((e) => e.reviewGate);
  await mkdir(path.dirname(OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify(all, null, 2));

  const byDanger = {};
  for (const e of all) byDanger[e.danger] = (byDanger[e.danger] ?? 0) + 1;
  console.log(`distinct species to research: ${all.length}`);
  console.log(`  review-gate (deadly/toxic): ${reviewGate.length}`);
  console.log(`  publish directly:           ${all.length - reviewGate.length}`);
  console.log(`  by danger:`, byDanger);
  console.log(`\nWrote ${path.relative(ROOT, OUT)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
