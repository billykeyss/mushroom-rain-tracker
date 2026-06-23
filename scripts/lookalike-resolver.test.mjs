import { test } from "node:test";
import assert from "node:assert/strict";
import {
  normalizeScientific,
  isGenusOnly,
  buildResolver,
} from "../lib/lookalike-resolver.ts";

test("normalizeScientific lowercases and keeps a clean binomial", () => {
  assert.equal(normalizeScientific("Boletus edulis"), "boletus edulis");
  assert.equal(normalizeScientific("Amanita virosa"), "amanita virosa");
});

test("normalizeScientific strips authorship", () => {
  assert.equal(normalizeScientific("Amanita muscaria (L.) Lam."), "amanita muscaria");
});

test("normalizeScientific strips synonym parentheticals", () => {
  assert.equal(
    normalizeScientific("Agaricus urinascens (= A. macrosporus)"),
    "agaricus urinascens",
  );
  assert.equal(
    normalizeScientific("Cerioporus squamosus (Polyporus squamosus)"),
    "cerioporus squamosus",
  );
});

test("normalizeScientific strips group/complex/sensu-lato qualifiers", () => {
  assert.equal(normalizeScientific("Amanita gemmata group"), "amanita gemmata");
  assert.equal(
    normalizeScientific("Lepiota cristata complex"),
    "lepiota cristata",
  );
  assert.equal(
    normalizeScientific("Amanita pantherina (sensu lato) / A. pantherinoides"),
    "amanita pantherina",
  );
});

test("isGenusOnly flags spp. / genus-level names", () => {
  assert.equal(isGenusOnly("Russula spp."), true);
  assert.equal(isGenusOnly("Cortinarius spp."), true);
  assert.equal(isGenusOnly("Lycoperdon spp. / Calvatia spp."), true);
  assert.equal(isGenusOnly("Amanita virosa"), false);
});

test("buildResolver resolves an exact catalog scientific name to its id", () => {
  const catalog = [
    { id: "boletus-edulis", scientific: "Boletus edulis" },
    { id: "amanita-muscaria", scientific: "Amanita muscaria" },
  ];
  const resolve = buildResolver(catalog);
  assert.equal(resolve("Boletus edulis"), "boletus-edulis");
});

test("buildResolver resolves via normalization (synonym parenthetical)", () => {
  const catalog = [{ id: "amanita-muscaria", scientific: "Amanita muscaria" }];
  const resolve = buildResolver(catalog);
  assert.equal(resolve("Amanita muscaria (L.) Lam."), "amanita-muscaria");
});

test("buildResolver returns null for genus-only and unknown names", () => {
  const catalog = [{ id: "boletus-edulis", scientific: "Boletus edulis" }];
  const resolve = buildResolver(catalog);
  assert.equal(resolve("Russula spp."), null);
  assert.equal(resolve("Amanita virosa"), null);
});
