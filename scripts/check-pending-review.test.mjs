import { test } from "node:test";
import assert from "node:assert/strict";
import { readdir } from "node:fs/promises";
import path from "node:path";
import { PNW_CATALOG } from "../lib/species-catalog.ts";
import { PENDING_SPECIES } from "../lib/catalog/pending-review/generated-pending.ts";

const ROOT = path.resolve(import.meta.dirname, "..");
const PENDING_DIR = path.join(ROOT, "lib/catalog/pending-review");
const PUBLISHED = new Set(PNW_CATALOG.map((s) => s.id));

// Deadly/toxic drafts staged for human review must never reach the live catalog.
test("no pending-review species is published in PNW_CATALOG", async () => {
  let files;
  try {
    files = await readdir(PENDING_DIR);
  } catch {
    return; // no pending-review dir yet
  }
  const pendingIds = files
    .filter((f) => f.endsWith(".ts") && f !== "index.ts")
    .map((f) => f.replace(/\.ts$/, ""));
  const leaked = pendingIds.filter((id) => PUBLISHED.has(id));
  assert.deepEqual(leaked, [], `pending-review species leaked into catalog: ${leaked.join(", ")}`);
});

test("no codegen'd pending species is published in PNW_CATALOG", () => {
  // The core invariant: review-gated species (dangerous edibility OR flagged in
  // the worklist review gate) must never reach the live catalog.
  const leaked = PENDING_SPECIES.filter((s) => PUBLISHED.has(s.id)).map((s) => s.id);
  assert.deepEqual(leaked, [], `gated species leaked into catalog: ${leaked.join(", ")}`);
});
