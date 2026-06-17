import { test } from "node:test";
import assert from "node:assert/strict";
import { licenseAllowed, classifyKind, selectImages } from "./lib/gallery.mjs";

test("licenseAllowed: permits CC incl. non-commercial, rejects ND / ARR", () => {
  for (const ok of ["CC BY-SA 3.0", "cc-by", "CC BY-NC 4.0", "cc-by-nc-sa",
                     "CC0 1.0", "Public domain"]) {
    assert.equal(licenseAllowed(ok), true, ok);
  }
  for (const no of ["CC BY-ND 4.0", "cc-by-nc-nd", "All rights reserved", "", null]) {
    assert.equal(licenseAllowed(no), false, String(no));
  }
});

test("classifyKind: maps feature keywords, defaults to whole", () => {
  assert.equal(classifyKind("Amanita muscaria spore print on glass"), "spore-print");
  assert.equal(classifyKind("close-up of gills / lamellae"), "gills");
  assert.equal(classifyKind("stipe and volva at the base"), "stem");
  assert.equal(classifyKind("pileus surface detail"), "cap");
  assert.equal(classifyKind("growing in forest floor habitat"), "in-situ");
  assert.equal(classifyKind("Boletus edulis"), "whole");
});

test("selectImages: lead first, caps total and per-kind, dedupes, covers kinds", () => {
  const lead = { url: "L", kind: "whole", source: "commons" };
  const cands = [
    { url: "a", kind: "gills", source: "commons" },
    { url: "b", kind: "gills", source: "inat" },
    { url: "c", kind: "gills", source: "inat" },     // 3rd gills -> dropped (maxPerKind 2)
    { url: "d", kind: "cap", source: "inat" },
    { url: "a", kind: "gills", source: "inat" },      // dup url -> dropped
    { url: "e", kind: "spore-print", source: "commons" },
    { url: "f", kind: "stem", source: "inat" },
    { url: "g", kind: "in-situ", source: "inat" },
    { url: "h", kind: "cap", source: "inat" },
  ];
  const out = selectImages(lead, cands, { cap: 6, maxPerKind: 2 });
  assert.equal(out[0].url, "L");                       // lead first
  assert.ok(out.length <= 6);                          // capped
  const gills = out.filter((i) => i.kind === "gills");
  assert.ok(gills.length <= 2);                        // per-kind cap
  assert.equal(new Set(out.map((i) => i.url)).size, out.length); // unique
  const kinds = new Set(out.map((i) => i.kind));
  assert.ok(kinds.has("gills") && kinds.has("cap") && kinds.has("spore-print"));
});
