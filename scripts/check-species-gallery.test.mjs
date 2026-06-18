import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { SPECIES_GALLERY } from "../lib/species-gallery.ts";
import { SPECIES_IMAGES } from "../lib/species-images.ts";
import { licenseAllowed } from "./lib/gallery.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const KINDS = new Set(["whole", "cap", "gills", "stem", "spore-print", "in-situ"]);

test("every gallery key is a real catalog species id", async () => {
  const cat = await readFile(path.join(ROOT, "lib/species-catalog.ts"), "utf8");
  const ids = new Set([...cat.matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1]));
  for (const id of Object.keys(SPECIES_GALLERY)) assert.ok(ids.has(id), `unknown id ${id}`);
});

test("each image is well-formed, licensed, <=6/species and <=2/kind", () => {
  for (const [id, imgs] of Object.entries(SPECIES_GALLERY)) {
    assert.ok(imgs.length <= 6, `${id} has ${imgs.length} images`);
    const perKind = {};
    for (const img of imgs) {
      assert.ok(img.url && img.url.startsWith("http"), `${id} bad url`);
      assert.ok(KINDS.has(img.kind), `${id} bad kind ${img.kind}`);
      assert.ok(licenseAllowed(img.license), `${id} bad license ${img.license}`);
      perKind[img.kind] = (perKind[img.kind] || 0) + 1;
      assert.ok(perKind[img.kind] <= 2, `${id} >2 of ${img.kind}`);
    }
  }
});

test("every catalog species resolves to a photo (lead image or gallery)", async () => {
  const cat = await readFile(path.join(ROOT, "lib/species-catalog.ts"), "utf8");
  const ids = [...cat.matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1]);
  for (const id of ids) {
    const hasLead = Boolean(SPECIES_IMAGES[id]);
    const hasGallery = (SPECIES_GALLERY[id]?.length ?? 0) > 0;
    assert.ok(hasLead || hasGallery, `${id} has no photo (no lead and empty gallery)`);
  }
});
