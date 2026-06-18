import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { LOCAL_IMAGES, OFFLINE_IMAGE_URLS } from "../lib/local-images.ts";

const ROOT = path.resolve(import.meta.dirname, "..");
const GCS_PREFIX = "https://storage.googleapis.com/foray-field-guide/img/";

test("every mapped value is a GCS bucket URL", () => {
  for (const url of Object.values(LOCAL_IMAGES)) {
    assert.ok(url.startsWith(GCS_PREFIX), `not a bucket URL: ${url}`);
  }
});

test("OFFLINE_IMAGE_URLS covers every unique mapped URL", () => {
  const unique = new Set(Object.values(LOCAL_IMAGES));
  assert.equal(OFFLINE_IMAGE_URLS.length, unique.size);
  for (const u of OFFLINE_IMAGE_URLS) assert.ok(unique.has(u));
});

test("at least 90% of catalog photo URLs are localized", async () => {
  const re =
    /"(?:url|thumb)":"(https:\/\/(?:upload\.wikimedia\.org|inaturalist-open-data\.s3\.amazonaws\.com)\/[^"]+)"/g;
  const urls = new Set();
  for (const f of ["lib/species-images.ts", "lib/tree-catalog.ts", "lib/species-gallery.ts"]) {
    let text;
    try {
      text = await readFile(path.join(ROOT, f), "utf8");
    } catch {
      continue;
    }
    for (const m of text.matchAll(re)) urls.add(m[1]);
  }
  const mapped = [...urls].filter((u) => LOCAL_IMAGES[u]).length;
  assert.ok(mapped / urls.size >= 0.9, `only ${mapped}/${urls.size} localized`);
});
