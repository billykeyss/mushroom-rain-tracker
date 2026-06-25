import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { PNW_CATALOG } from "../lib/species-catalog.ts";
import { SPECIES_IMAGES } from "../lib/species-images.ts";
import { SPECIES_GALLERY } from "../lib/species-gallery.ts";

const ROOT = path.resolve(import.meta.dirname, "..");
const ID_TO_SPECIES = new Map(PNW_CATALOG.map((s) => [s.id, s]));
const hasImage = (id) =>
  Boolean(SPECIES_IMAGES[id] || (SPECIES_GALLERY[id]?.length ?? 0) > 0);

test("every lookalike catalogId points to a real catalog species", () => {
  const bad = [];
  for (const s of PNW_CATALOG) {
    for (const l of s.lookalikes) {
      if (l.catalogId && !ID_TO_SPECIES.has(l.catalogId)) {
        bad.push(`${s.id}: ${l.scientific} -> ${l.catalogId}`);
      }
    }
  }
  assert.deepEqual(bad, [], `dangling catalogId pointers:\n${bad.join("\n")}`);
});

test("every linked lookalike resolves to a species that has a photo", () => {
  // A deep link is only worth showing if the destination has a thumbnail.
  const noPhoto = [];
  for (const s of PNW_CATALOG) {
    for (const l of s.lookalikes) {
      if (l.catalogId && !hasImage(l.catalogId)) {
        noPhoto.push(`${l.scientific} -> ${l.catalogId}`);
      }
    }
  }
  assert.deepEqual(noPhoto, [], `linked lookalikes lacking a photo:\n${noPhoto.join("\n")}`);
});

test("keyFeatures, when present, are 1-4 non-empty short cues", () => {
  const bad = [];
  for (const s of PNW_CATALOG) {
    for (const l of s.lookalikes) {
      if (l.keyFeatures === undefined) continue;
      const ok =
        Array.isArray(l.keyFeatures) &&
        l.keyFeatures.length >= 1 &&
        l.keyFeatures.length <= 4 &&
        l.keyFeatures.every((c) => typeof c === "string" && c.trim().length > 0 && c.length <= 60);
      if (!ok) bad.push(`${s.id}: ${l.scientific} -> ${JSON.stringify(l.keyFeatures)}`);
    }
  }
  assert.deepEqual(bad, [], `malformed keyFeatures:\n${bad.join("\n")}`);
});

test("no UNREVIEWED auto-compiled dangerous species is published", () => {
  // Review gate: pipeline-generated dangerous species stay in pending-review until
  // they pass safety review (their id is recorded in approved.json).
  const GATED = new Set(["toxic", "deadly", "psychoactive"]);
  const approved = new Set(
    JSON.parse(readFileSync(path.join(ROOT, "lib/catalog/pending-review/approved.json"), "utf8")),
  );
  const leaked = PNW_CATALOG
    .filter((s) => s.autoCompiled && GATED.has(s.edibility) && !approved.has(s.id))
    .map((s) => s.id);
  assert.deepEqual(leaked, [], `unreviewed dangerous species leaked into catalog: ${leaked.join(", ")}`);
});

test("no two catalog species share the same binomial", () => {
  const norm = (x) =>
    x.toLowerCase().replace(/[()=].*/g, "").replace(/[^a-z ]/g, " ").split(/\s+/).filter(Boolean).slice(0, 2).join(" ");
  const byBinomial = new Map();
  for (const s of PNW_CATALOG) {
    const k = norm(s.scientific);
    if (!byBinomial.has(k)) byBinomial.set(k, []);
    byBinomial.get(k).push(s.id);
  }
  const dups = [...byBinomial.entries()].filter(([, v]) => v.length > 1).map(([k, v]) => `${k}: ${v.join("/")}`);
  assert.deepEqual(dups, [], `duplicate species:\n${dups.join("\n")}`);
});

test("a lookalike badged safe never links to a toxic/deadly species", () => {
  const SAFE = new Set(["edible", "choice", "edible-when-cooked"]);
  const DANG = new Set(["toxic", "deadly", "psychoactive"]);
  const bad = [];
  for (const s of PNW_CATALOG) {
    for (const l of s.lookalikes) {
      if (!l.catalogId) continue;
      const t = ID_TO_SPECIES.get(l.catalogId);
      if (t && SAFE.has(l.danger) && DANG.has(t.edibility)) {
        bad.push(`${s.id}: "${l.name}" (${l.danger}) -> ${t.id} (${t.edibility})`);
      }
    }
  }
  assert.deepEqual(bad, [], `safe-badged lookalike links to dangerous species:\n${bad.join("\n")}`);
});

test("every generated species with regions is visible in at least one region filter", () => {
  const TERMS = [
    "olympic", "cascade", "coast range", "puget", "willamette", "oregon", "washington",
    "vancouver", "british columbia", "california", "sierra", "tahoe", "carson",
    "great basin", "nevada", "ruby", "sagebrush", "intermountain", "bay area",
    "north coast", "redwood", "mendocino", "snowbank", "subalpine", "mountain",
  ];
  const hidden = PNW_CATALOG.filter(
    (s) => s.autoCompiled && s.regionsPNW.length > 0 &&
      !s.regionsPNW.some((r) => TERMS.some((t) => r.toLowerCase().includes(t))),
  ).map((s) => `${s.id}: ${JSON.stringify(s.regionsPNW)}`);
  assert.deepEqual(hidden, [], `generated species invisible in all region filters:\n${hidden.join("\n")}`);
});

test("every lookalike has keyFeatures cues (catches a missing inject-features run)", () => {
  // keyFeatures are injected for every lookalike's prose; a lookalike without any
  // means codegen regenerated a catalog file and inject-features wasn't re-run.
  const missing = [];
  for (const s of PNW_CATALOG) {
    for (const l of s.lookalikes) {
      if (!(l.keyFeatures && l.keyFeatures.length > 0)) missing.push(`${s.id}: ${l.scientific}`);
    }
  }
  assert.deepEqual(missing, [], `${missing.length} lookalikes missing keyFeatures (re-run inject-features):\n${missing.slice(0, 10).join("\n")}`);
});

test("a lookalike never points at its own parent species", () => {
  const selfLinks = [];
  for (const s of PNW_CATALOG) {
    for (const l of s.lookalikes) {
      if (l.catalogId === s.id) selfLinks.push(`${s.id}: ${l.scientific}`);
    }
  }
  assert.deepEqual(selfLinks, [], `self-referential lookalikes:\n${selfLinks.join("\n")}`);
});
