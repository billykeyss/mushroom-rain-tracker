// Scan every species lead + gallery image for dead links.
//
// Resolves each URL the same way the app does (LOCAL_IMAGES -> self-hosted GCS,
// else the original remote), so it tests exactly what the browser loads. Uses a
// small concurrency pool and retries 429/5xx with backoff so rate-limiting is
// NOT mistaken for a dead image.
//
// Run: node --experimental-strip-types scripts/check-dead-images.mjs
// Exit code: number of dead images (0 = all good), capped at 255.

import { SPECIES_IMAGES } from "../lib/species-images.ts";
import { SPECIES_GALLERY } from "../lib/species-gallery.ts";
import { LOCAL_IMAGES } from "../lib/local-images.ts";

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/120 Safari/537.36";
const POOL = 8;
const MAX_RETRIES = 3;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const resolve = (u) => (u ? (LOCAL_IMAGES[u] ?? u) : null);
const hostOf = (u) => {
  try { return new URL(u).host; } catch { return "?"; }
};

// resolvedUrl -> [{ id, role, kind, field }]
const owners = new Map();
function addImage(id, role, kind, img) {
  for (const field of ["url", "thumb"]) {
    const r = resolve(img[field]);
    if (!r) continue;
    if (!owners.has(r)) owners.set(r, []);
    owners.get(r).push({ id, role, kind, field });
  }
}
for (const [id, img] of Object.entries(SPECIES_IMAGES)) addImage(id, "lead", "whole", img);
for (const [id, arr] of Object.entries(SPECIES_GALLERY))
  for (const img of arr) addImage(id, "gallery", img.kind, img);

const urls = [...owners.keys()];

async function check(u, attempt = 0) {
  try {
    const res = await fetch(u, {
      method: "GET",
      headers: { "User-Agent": UA, Range: "bytes=0-1" },
    });
    const s = res.status;
    if ((s === 429 || s >= 500) && attempt < MAX_RETRIES) {
      await sleep(700 * (attempt + 1) * (attempt + 1));
      return check(u, attempt + 1);
    }
    if (s === 429) return { status: s, cls: "throttled" };
    if (s >= 500) return { status: s, cls: "error" };
    if (s === 404 || s === 410 || s === 403) return { status: s, cls: "dead" };
    if (s >= 200 && s < 300) return { status: s, cls: "ok" };
    return { status: s, cls: "other" };
  } catch (e) {
    if (attempt < MAX_RETRIES) {
      await sleep(700 * (attempt + 1) * (attempt + 1));
      return check(u, attempt + 1);
    }
    return { status: "ERR:" + (e.code || e.name), cls: "dead" };
  }
}

async function main() {
  console.log(
    `Checking ${urls.length} unique image URLs ` +
      `(${Object.keys(SPECIES_IMAGES).length} leads + ` +
      `${Object.values(SPECIES_GALLERY).reduce((n, a) => n + a.length, 0)} gallery photos)\n`,
  );
  const hosts = {};
  for (const u of urls) hosts[hostOf(u)] = (hosts[hostOf(u)] || 0) + 1;
  console.log("by host:", JSON.stringify(hosts), "\n");

  const results = new Map();
  let done = 0;
  async function runPool(list, concurrency, pacingMs) {
    let idx = 0;
    async function worker() {
      while (idx < list.length) {
        const u = list[idx++];
        results.set(u, await check(u));
        done++;
        if (done % 50 === 0) process.stderr.write(`\r  checked ${done}/${urls.length}`);
        if (pacingMs) await sleep(pacingMs);
      }
    }
    await Promise.all(Array.from({ length: concurrency }, worker));
  }
  const isGcs = (u) => hostOf(u) === "storage.googleapis.com";
  await runPool(urls.filter(isGcs), POOL + 2, 0);        // GCS: fast, no rate limits
  await runPool(urls.filter((u) => !isGcs(u)), 1, 500);  // remote: serial + paced, avoids 429s
  process.stderr.write("\r" + " ".repeat(40) + "\r");

  const by = { ok: 0, dead: 0, throttled: 0, error: 0, other: 0 };
  const dead = [];
  for (const [u, r] of results) {
    by[r.cls] = (by[r.cls] || 0) + 1;
    if (r.cls === "dead") dead.push([u, r.status]);
  }

  console.log("=== results ===");
  console.log(JSON.stringify(by, null, 0));
  if (by.throttled) console.log(`\n(${by.throttled} URLs still rate-limited after retries — re-run to confirm; not counted as dead)`);

  if (dead.length) {
    console.log(`\n=== ${dead.length} DEAD images ===`);
    for (const [u, status] of dead) {
      const who = owners.get(u).map((o) => `${o.id}/${o.role}/${o.kind}/${o.field}`).join(", ");
      console.log(`  [${status}] ${u}`);
      console.log(`        ${who}`);
    }
  } else {
    console.log("\nNo dead images. ✓");
  }
  process.exit(Math.min(dead.length, 255));
}

main();
