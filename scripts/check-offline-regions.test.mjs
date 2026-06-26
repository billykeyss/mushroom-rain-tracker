import { test } from "node:test";
import assert from "node:assert/strict";
import { OFFLINE_REGION_GROUPS } from "../lib/offline-regions.ts";
import { OFFLINE_IMAGE_URLS } from "../lib/local-images.ts";
import { REGIONS } from "../lib/regions.ts";

const ALL = new Set(OFFLINE_IMAGE_URLS);

test("there is one offline group per real region (excluding 'all')", () => {
  const expected = REGIONS.filter((r) => r.id !== "all").map((r) => r.id).sort();
  const got = OFFLINE_REGION_GROUPS.map((g) => g.id).sort();
  assert.deepEqual(got, expected);
});

test("every region group is non-empty and a subset of the full offline set", () => {
  for (const g of OFFLINE_REGION_GROUPS) {
    assert.ok(g.urls.length > 0, `${g.id} has no photos`);
    const stray = g.urls.filter((u) => !ALL.has(u));
    assert.deepEqual(stray, [], `${g.id} has URLs not in OFFLINE_IMAGE_URLS`);
  }
});

test("each region group carries a label and no duplicate URLs", () => {
  for (const g of OFFLINE_REGION_GROUPS) {
    assert.ok(typeof g.label === "string" && g.label.length > 0, `${g.id} missing label`);
    assert.equal(new Set(g.urls).size, g.urls.length, `${g.id} has duplicate URLs`);
  }
});
