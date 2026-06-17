import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { LOCAL_IMAGES } from "../lib/local-images.ts";

const ROOT = path.resolve(import.meta.dirname, "..");

test("every localized path exists on disk", async () => {
  for (const localPath of Object.values(LOCAL_IMAGES)) {
    const abs = path.join(ROOT, "public", localPath.replace(/^\//, ""));
    await assert.doesNotReject(access(abs, constants.F_OK), `missing ${abs}`);
  }
});

test("at least 90% of catalog Wikimedia URLs are localized", async () => {
  const re = /"(?:url|thumb)":"(https:\/\/upload\.wikimedia\.org\/[^"]+)"/g;
  const urls = new Set();
  for (const f of ["lib/species-images.ts", "lib/tree-catalog.ts"]) {
    const text = await readFile(path.join(ROOT, f), "utf8");
    for (const m of text.matchAll(re)) urls.add(m[1]);
  }
  const mapped = [...urls].filter((u) => LOCAL_IMAGES[u]).length;
  assert.ok(mapped / urls.size >= 0.9, `only ${mapped}/${urls.size} localized`);
});
