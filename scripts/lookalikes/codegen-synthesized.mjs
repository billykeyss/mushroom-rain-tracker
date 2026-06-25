/**
 * Reads subagent-authored species JSON from .cache/lookalikes/synth/*.json,
 * validates each against the MushroomSpecies shape, and emits the typed
 * lib/catalog/lookalikes/synthesized.ts. Invalid/incomplete records are
 * reported and skipped (never silently shipped).
 *
 *   node --experimental-strip-types scripts/lookalikes/codegen-synthesized.mjs
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "../..");
const SYNTH_DIR = path.join(ROOT, ".cache/lookalikes/synth");
const OUT = path.join(ROOT, "lib/catalog/lookalikes/synthesized.ts");
const PENDING_OUT = path.join(ROOT, "lib/catalog/pending-review/generated-pending.ts");

const REQUIRED = [
  "id", "commonNames", "scientific", "family", "order", "trophicMode",
  "mycorrhizalPartners", "hostTrees", "substrate", "habitat", "elevationM",
  "regionsPNW", "fruitingMonths", "peakMonths", "conditions", "identification",
  "edibility", "toxicityNotes", "lookalikes", "culinary", "conservationNotes",
  "sources",
];
const EDIBILITY = new Set([
  "choice", "edible", "edible-with-caution", "edible-when-cooked", "inedible",
  "psychoactive", "medicinal-only", "toxic", "deadly",
]);
const DANGER = new Set([
  "deadly", "toxic", "inedible", "edible", "edible-with-caution",
  "edible-when-cooked", "GI-upset",
]);
const ID_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

function validate(s, file) {
  const errs = [];
  for (const k of REQUIRED) if (!(k in s)) errs.push(`missing ${k}`);
  if (s.id && !ID_RE.test(s.id)) errs.push(`bad id "${s.id}"`);
  if (s.edibility && !EDIBILITY.has(s.edibility)) errs.push(`bad edibility "${s.edibility}"`);
  if (s.identification) {
    for (const k of ["cap", "underside", "stem", "fleshColor", "sporePrintColor", "odor", "sizeCm"])
      if (typeof s.identification[k] !== "string") errs.push(`identification.${k} missing`);
  }
  if (s.conditions) {
    const c = s.conditions;
    if (typeof c.minRain7d !== "number") errs.push("conditions.minRain7d");
    if (!Array.isArray(c.idealDaysSinceRain)) errs.push("conditions.idealDaysSinceRain");
    if (!Array.isArray(c.tempRangeC)) errs.push("conditions.tempRangeC");
  }
  if (!Array.isArray(s.sources) || s.sources.length === 0) errs.push("sources empty");
  if (s.verification && !["strong", "moderate", "disputed"].includes(s.verification.consensus))
    errs.push(`bad consensus "${s.verification?.consensus}"`);
  if (Array.isArray(s.lookalikes)) {
    for (const l of s.lookalikes) {
      if (!DANGER.has(l.danger)) errs.push(`lookalike "${l.scientific}" bad danger "${l.danger}"`);
    }
  }
  if (!s.autoCompiled) errs.push("autoCompiled must be true");
  return errs;
}

async function main() {
  let files = [];
  try { files = (await readdir(SYNTH_DIR)).filter((f) => f.endsWith(".json")).sort(); } catch {}
  const ok = [];
  const seen = new Set();
  let skipped = 0;
  for (const f of files) {
    let s;
    try { s = JSON.parse(await readFile(path.join(SYNTH_DIR, f), "utf8")); }
    catch (e) { console.warn(`SKIP ${f}: invalid JSON (${e.message})`); skipped++; continue; }
    const errs = validate(s, f);
    if (errs.length) { console.warn(`SKIP ${f}: ${errs.join("; ")}`); skipped++; continue; }
    if (seen.has(s.id)) { console.warn(`SKIP ${f}: duplicate id ${s.id}`); skipped++; continue; }
    seen.add(s.id);
    ok.push(s);
  }
  // Coerce null/missing non-nullable string fields to "Not documented" so the
  // emitted TS satisfies MushroomSpecies (some sources lack family/substrate/etc).
  const ND = "Not documented";
  for (const s of ok) {
    for (const k of ["scientific", "family", "substrate", "habitat"]) {
      if (typeof s[k] !== "string") s[k] = ND;
    }
    if (s.identification) {
      // Rebuild with ONLY the known Identification keys (drops stray fields like
      // "taste" a source pass may add) and coerce each to a string.
      const idf = {};
      for (const k of ["cap", "underside", "stem", "fleshColor", "sporePrintColor", "odor", "sizeCm"]) {
        idf[k] = typeof s.identification[k] === "string" ? s.identification[k] : ND;
      }
      s.identification = idf;
    }
  }

  // Drop any keys not in the MushroomSpecies / Lookalike shape (source passes
  // occasionally add stray fields like "authority"), so the emitted TS typechecks.
  const SPECIES_KEYS = new Set([
    "id", "commonNames", "scientific", "family", "order", "trophicMode",
    "mycorrhizalPartners", "hostTrees", "substrate", "habitat", "elevationM",
    "regionsPNW", "fruitingMonths", "peakMonths", "conditions", "identification",
    "edibility", "toxicityNotes", "lookalikes", "culinary", "conservationNotes",
    "sources", "autoCompiled", "spores", "microhabitat", "phenologyCues",
    "bioactive", "dnaBarcode", "verification",
  ]);
  const LOOKALIKE_KEYS = new Set(["name", "scientific", "danger", "distinguishingFeature", "catalogId", "keyFeatures"]);
  const prune = (obj, allowed) => {
    for (const k of Object.keys(obj)) if (!allowed.has(k)) delete obj[k];
  };
  for (const s of ok) {
    prune(s, SPECIES_KEYS);
    if (Array.isArray(s.lookalikes)) for (const l of s.lookalikes) prune(l, LOOKALIKE_KEYS);
  }

  ok.sort((a, b) => a.id.localeCompare(b.id));

  // Review gate: held out of the catalog (NOT imported) if EITHER the species'
  // own edibility is dangerous OR the worklist flagged it deadly/toxic. The
  // worklist set guarantees every safety-critical lookalike stays staged for
  // human sign-off even if its synthesized edibility came out milder.
  const GATED = new Set(["toxic", "deadly", "psychoactive"]);
  let reviewGateIds = new Set();
  try {
    reviewGateIds = new Set(
      JSON.parse(await readFile(path.join(ROOT, ".cache/lookalikes/review-gate-ids.json"), "utf8")),
    );
  } catch {}
  // Human sign-off: ids in approved.json have passed safety review and publish
  // even though they're dangerous/review-gated. (Committed = the sign-off record.)
  let approvedIds = new Set();
  try {
    approvedIds = new Set(
      JSON.parse(await readFile(path.join(ROOT, "lib/catalog/pending-review/approved.json"), "utf8")),
    );
  } catch {}
  const isPending = (s) =>
    (GATED.has(s.edibility) || reviewGateIds.has(s.id)) && !approvedIds.has(s.id);
  const published = ok.filter((s) => !isPending(s));
  const pending = ok.filter((s) => isPending(s));

  // Emit unquoted-key TS object literals (matching the hand-written catalog files
  // so the shared match-lookalikes / inject-features codemods apply uniformly).
  // Safe: JSON.stringify escapes newlines, so only formatting line-starts match.
  const unquoteKeys = (s) => s.replace(/^(\s*)"([A-Za-z_][\w]*)":/gm, "$1$2:");
  const emit = (list) =>
    list.map((s) => "  " + unquoteKeys(JSON.stringify(s, null, 2)).replace(/\n/g, "\n  ")).join(",\n");

  const file = `// AUTO-GENERATED by scripts/lookalikes/codegen-synthesized.mjs. Do not edit by hand.
import type { MushroomSpecies } from "../../species-types";

export const SYNTHESIZED_SPECIES: MushroomSpecies[] = [
${emit(published)}${published.length ? "," : ""}
];
`;
  await writeFile(OUT, file);

  // pending-review file is intentionally NOT imported by lib/catalog/generated.ts.
  const pendingFile = `// AUTO-GENERATED by scripts/lookalikes/codegen-synthesized.mjs. Do not edit by hand.
// PENDING HUMAN REVIEW — toxic/deadly/psychoactive species held out of the live
// catalog. Not imported anywhere until individually approved.
import type { MushroomSpecies } from "../../species-types";

export const PENDING_SPECIES: MushroomSpecies[] = [
${emit(pending)}${pending.length ? "," : ""}
];
`;
  await writeFile(PENDING_OUT, pendingFile);
  console.log(
    `codegen: ${published.length} published, ${pending.length} -> pending-review, ${skipped} skipped`,
  );
}

main().catch((e) => { console.error(e); process.exit(1); });
