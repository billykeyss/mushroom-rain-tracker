# Offline Field Guide PWA — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the Foray field guide (species, trees, and their photos) fully usable offline and installable on any device, by localizing Wikimedia photos into the static export and adding a Serwist-powered service worker.

**Architecture:** A build-time script downloads every species/tree photo (330px thumbnail + a ~1280px-capped "full" image, obtained from Wikimedia's own thumbnailer — no `sharp` dependency) into `public/img/`, and emits a `lib/local-images.ts` URL→local-path map consumed by a `localImage()` helper at the ~5 render sites. A service worker (built with the `serwist` library, bundled by esbuild, with the precache manifest injected from the real `out/` directory in a post-build step) precaches the app shell, every exported HTML page, and all thumbnails; full images are cached `CacheFirst` at runtime and warmed in the background after first load. Weather/map/spot-finder stay online-only and show a graceful offline banner.

**Tech Stack:** Next.js 15 (App Router, `output: "export"`), `serwist` (service worker library), `esbuild` (devDependency, bundles the SW), Node's built-in `node:test` runner, macOS `sips` (one-time icon generation).

**Deviation from spec (flagged):** The spec named `@serwist/next`. During planning we found its webpack plugin precaches the `.next` build, not the exported `out/` directory, so detail pages might not be precached. We instead use the `serwist` library + a post-build `injectManifest`-style step over `out/`. Same approved decision (Serwist, not hand-rolled Cache API), more correct for static export.

---

## File Structure

**Created:**
- `scripts/lib/wikimedia-url.mjs` — pure URL helpers (derive capped thumbnail renditions). Unit-tested.
- `scripts/lib/wikimedia-url.test.mjs` — unit tests for the above.
- `scripts/localize-images.mjs` — downloads photos, writes `public/img/**`, generates `lib/local-images.ts`.
- `scripts/check-local-images.test.mjs` — guard test: every catalog Wikimedia URL is mapped + file exists.
- `scripts/build-sw.mjs` — post-build: glob `out/` for precache manifest, esbuild-bundle the SW to `out/sw.js`.
- `lib/local-images.ts` — AUTO-GENERATED `LOCAL_IMAGES` map + `FULL_IMAGE_PATHS` array.
- `lib/image-src.ts` — `localImage()` helper.
- `lib/use-online.ts` — `useOnline()` React hook.
- `sw/index.ts` — service worker source (Serwist config + runtime caching rules).
- `public/manifest.webmanifest` — PWA manifest.
- `public/icons/icon-192.png`, `public/icons/icon-512.png`, `public/icons/maskable-512.png` — generated icons.
- `app/~offline/page.tsx` — offline navigation fallback page.
- `components/sw-register.tsx` — registers the service worker (production only).
- `components/offline-warmer.tsx` — background-warms full images into the SW cache.
- `components/offline-banner.tsx` — graceful "you're offline" banner.

**Modified:**
- `package.json` — add deps + scripts.
- `tsconfig.json` — webworker lib + exclude SW build artifacts.
- `.gitignore` — ignore `out/sw.js` (built artifact), keep `public/img/**` tracked.
- `components/species-photo.tsx:25` — wrap src with `localImage()`.
- `app/trees/page.tsx:112` — wrap src with `localImage()`.
- `app/trees/[id]/page.tsx:81,300` + `PhotoGallery` — wrap srcs with `localImage()`.
- `app/catalog/[id]/page.tsx` — wrap any host-tree image srcs with `localImage()` (audit during the task).
- `app/layout.tsx` — manifest/appleWebApp/icons metadata; mount `SwRegister`, `OfflineWarmer`, `OfflineBanner`.
- `components/settings-button.tsx` — show "Offline guide: N/total photos saved" status.

---

## Task 1: Dependencies, scripts, and config scaffolding

**Files:**
- Modify: `package.json`, `tsconfig.json`, `.gitignore`

- [ ] **Step 1: Install runtime + dev dependencies**

```bash
pnpm add serwist
pnpm add -D esbuild
```

Expected: `serwist` in `dependencies`, `esbuild` in `devDependencies`. (No `@serwist/next`, no `sharp`.)

- [ ] **Step 2: Add npm scripts**

Edit `package.json` `scripts` to read exactly:

```json
"scripts": {
  "dev": "next dev --turbopack -p 1245",
  "build": "next build --no-lint && node scripts/build-sw.mjs",
  "start": "next start -p 1245",
  "lint": "next lint",
  "test": "node --test",
  "localize:images": "node scripts/localize-images.mjs"
}
```

- [ ] **Step 3: tsconfig — webworker types + exclude SW artifacts**

In `tsconfig.json`, add `"webworker"` to `compilerOptions.lib` (keep existing entries such as `dom`, `dom.iterable`, `esnext`), and add `"out"` and `"sw/index.ts"` is INCLUDED for type-checking but the built `out/sw.js` is excluded. Set `exclude` to include `"out"`:

```jsonc
// compilerOptions.lib example (merge with existing):
"lib": ["dom", "dom.iterable", "esnext", "webworker"],
// top-level:
"exclude": ["node_modules", "out"]
```

- [ ] **Step 4: .gitignore — ignore the built SW, keep images tracked**

Add to `.gitignore`:

```
# Service worker is generated at build time into out/ (out/ already ignored).
# Source-of-truth localized images ARE committed:
!public/img/
```

(`out/` is already ignored at line 76, so `out/sw.js` is covered. The `!public/img/` line is defensive in case a broad `public` rule is ever added — verify no existing rule ignores `public/img`.)

- [ ] **Step 5: Commit**

```bash
git add package.json pnpm-lock.yaml tsconfig.json .gitignore
git commit -m "Add serwist + esbuild deps and PWA build scripts"
```

---

## Task 2: Wikimedia URL helper (pure, unit-tested)

**Files:**
- Create: `scripts/lib/wikimedia-url.mjs`
- Test: `scripts/lib/wikimedia-url.test.mjs`

- [ ] **Step 1: Write the failing test**

Create `scripts/lib/wikimedia-url.test.mjs`:

```js
import { test } from "node:test";
import assert from "node:assert/strict";
import { cappedThumbUrl, stripQuery, thumbWidth, hashUrl, extFor } from "./wikimedia-url.mjs";

test("stripQuery removes query string", () => {
  assert.equal(
    stripQuery("https://upload.wikimedia.org/x/Foo.jpg?utm_source=en"),
    "https://upload.wikimedia.org/x/Foo.jpg",
  );
});

test("thumbWidth detects rendition width", () => {
  assert.equal(
    thumbWidth("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Foo.jpg/330px-Foo.jpg"),
    330,
  );
  assert.equal(thumbWidth("https://upload.wikimedia.org/wikipedia/commons/3/3a/Foo.jpg"), null);
});

test("cappedThumbUrl from a direct file URL", () => {
  assert.equal(
    cappedThumbUrl("https://upload.wikimedia.org/wikipedia/commons/3/3a/Agaricus_campestris.jpg", 1280),
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Agaricus_campestris.jpg/1280px-Agaricus_campestris.jpg",
  );
});

test("cappedThumbUrl from an existing thumbnail URL (rewrites width)", () => {
  assert.equal(
    cappedThumbUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Agaricus_augustus_2011_G1.jpg/3840px-Agaricus_augustus_2011_G1.jpg", 1280),
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Agaricus_augustus_2011_G1.jpg/1280px-Agaricus_augustus_2011_G1.jpg",
  );
});

test("cappedThumbUrl strips query before deriving", () => {
  assert.equal(
    cappedThumbUrl("https://upload.wikimedia.org/wikipedia/commons/2/2a/Abies.jpg?utm_source=en", 1280),
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Abies.jpg/1280px-Abies.jpg",
  );
});

test("cappedThumbUrl rasterizes SVG to png rendition", () => {
  assert.equal(
    cappedThumbUrl("https://upload.wikimedia.org/wikipedia/commons/1/12/Map.svg", 1280),
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Map.svg/1280px-Map.svg.png",
  );
});

test("cappedThumbUrl returns null for non-Commons URLs", () => {
  assert.equal(cappedThumbUrl("https://example.com/x.jpg", 1280), null);
});

test("extFor returns lowercased extension", () => {
  assert.equal(extFor("https://upload.wikimedia.org/x/Foo.JPG"), "jpg");
  assert.equal(extFor("https://upload.wikimedia.org/x/Map.svg"), "svg");
});

test("hashUrl is stable and 12 hex chars", () => {
  const h = hashUrl("https://upload.wikimedia.org/x/Foo.jpg");
  assert.match(h, /^[0-9a-f]{12}$/);
  assert.equal(h, hashUrl("https://upload.wikimedia.org/x/Foo.jpg"));
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test scripts/lib/wikimedia-url.test.mjs`
Expected: FAIL — cannot find module `./wikimedia-url.mjs`.

- [ ] **Step 3: Implement the helper**

Create `scripts/lib/wikimedia-url.mjs`:

```js
import { createHash } from "node:crypto";

export function stripQuery(url) {
  const i = url.indexOf("?");
  return i === -1 ? url : url.slice(0, i);
}

/** Pixel width if `url` is a `…/<n>px-Name.ext` thumbnail rendition, else null. */
export function thumbWidth(url) {
  const m = stripQuery(url).match(/\/(\d+)px-[^/?]+$/);
  return m ? Number.parseInt(m[1], 10) : null;
}

/** Parse a Commons upload URL into { a, b, file }, or null if unrecognized. */
function parseCommons(cleanUrl) {
  let m = cleanUrl.match(
    /\/wikipedia\/commons\/thumb\/([0-9a-f])\/([0-9a-f]{2})\/([^/]+)\/\d+px-[^/]+$/i,
  );
  if (m) return { a: m[1], b: m[2], file: m[3] };
  m = cleanUrl.match(/\/wikipedia\/commons\/([0-9a-f])\/([0-9a-f]{2})\/([^/?]+)$/i);
  if (m) return { a: m[1], b: m[2], file: m[3] };
  return null;
}

/** Build a `<width>px` thumbnail rendition URL for a Commons image, or null. */
export function cappedThumbUrl(url, width) {
  const parsed = parseCommons(stripQuery(url));
  if (!parsed) return null;
  const { a, b, file } = parsed;
  const rend = /\.svg$/i.test(file) ? `${file}.png` : file;
  return `https://upload.wikimedia.org/wikipedia/commons/thumb/${a}/${b}/${file}/${width}px-${rend}`;
}

/** Lowercased file extension of the rendition that will be saved locally. */
export function extFor(url) {
  const clean = stripQuery(url);
  if (/\.svg$/i.test(clean)) return "svg"; // rasterized rendition is png, handled by caller
  const m = clean.match(/\.([a-z0-9]+)$/i);
  return m ? m[1].toLowerCase() : "jpg";
}

/** Stable 12-char hex id for a URL (used for local filenames). */
export function hashUrl(url) {
  return createHash("sha1").update(url).digest("hex").slice(0, 12);
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `node --test scripts/lib/wikimedia-url.test.mjs`
Expected: PASS — all tests green.

- [ ] **Step 5: Commit**

```bash
git add scripts/lib/wikimedia-url.mjs scripts/lib/wikimedia-url.test.mjs
git commit -m "Add Wikimedia thumbnail URL helper with tests"
```

---

## Task 3: Localize-images script + generated map

**Files:**
- Create: `scripts/localize-images.mjs`
- Test: `scripts/check-local-images.test.mjs`
- Generates: `lib/local-images.ts`, `public/img/thumb/*`, `public/img/full/*`

- [ ] **Step 1: Implement the localize script**

Create `scripts/localize-images.mjs`:

```js
import { mkdir, readFile, writeFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { cappedThumbUrl, stripQuery, extFor, hashUrl } from "./lib/wikimedia-url.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const FULL_CAP_PX = 1280;
const SOURCES = [
  path.join(ROOT, "lib/species-images.ts"),
  path.join(ROOT, "lib/tree-catalog.ts"),
];
const THUMB_DIR = path.join(ROOT, "public/img/thumb");
const FULL_DIR = path.join(ROOT, "public/img/full");
const FORCE = process.argv.includes("--force");

const URL_RE = /"(url|thumb)":"(https:\/\/upload\.wikimedia\.org\/[^"]+)"/g;

async function collectUrls() {
  const full = new Set();
  const thumb = new Set();
  for (const file of SOURCES) {
    const text = await readFile(file, "utf8");
    for (const m of text.matchAll(URL_RE)) {
      const [, field, url] = m;
      (field === "thumb" ? thumb : full).add(url);
    }
  }
  return { full: [...full], thumb: [...thumb] };
}

async function exists(p) {
  try { await access(p, constants.F_OK); return true; } catch { return false; }
}

async function download(url, destAbs) {
  if (!FORCE && (await exists(destAbs))) return true;
  const res = await fetch(url, { headers: { "User-Agent": "Foray/1.0 (offline field guide)" } });
  if (!res.ok) return false;
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(destAbs, buf);
  return true;
}

async function main() {
  await mkdir(THUMB_DIR, { recursive: true });
  await mkdir(FULL_DIR, { recursive: true });
  const { full, thumb } = await collectUrls();
  const map = {};
  const fullPaths = [];
  let ok = 0, failed = 0;

  for (const url of thumb) {
    const ext = extFor(url) === "svg" ? "png" : extFor(url);
    const name = `${hashUrl(stripQuery(url))}.${ext}`;
    const got = await download(stripQuery(url), path.join(THUMB_DIR, name));
    if (got) { map[url] = `/img/thumb/${name}`; ok++; } else { failed++; console.warn("thumb FAIL", url); }
  }

  for (const url of full) {
    const ext = extFor(url) === "svg" ? "png" : extFor(url);
    const name = `${hashUrl(stripQuery(url))}.${ext}`;
    const dest = path.join(FULL_DIR, name);
    const capped = cappedThumbUrl(url, FULL_CAP_PX);
    let got = capped ? await download(capped, dest) : false;
    if (!got) got = await download(stripQuery(url), dest); // fallback to original
    if (got) { map[url] = `/img/full/${name}`; fullPaths.push(`/img/full/${name}`); ok++; }
    else { failed++; console.warn("full FAIL", url); }
  }

  const uniqueFullPaths = [...new Set(fullPaths)].sort();
  const entries = Object.keys(map).sort().map((k) => `  ${JSON.stringify(k)}: ${JSON.stringify(map[k])},`).join("\n");
  const out = `// AUTO-GENERATED by scripts/localize-images.mjs. Do not edit by hand.
// Maps remote Wikimedia URLs (as they appear in the catalogs) to local paths.
export const LOCAL_IMAGES: Record<string, string> = {
${entries}
};

// Capped full-resolution photos to warm into the offline cache after first load.
export const FULL_IMAGE_PATHS: string[] = ${JSON.stringify(uniqueFullPaths, null, 2)};
`;
  await writeFile(path.join(ROOT, "lib/local-images.ts"), out);
  console.log(`Localized ${ok} images (${failed} failed). Map: ${Object.keys(map).length} entries, ${uniqueFullPaths.length} full.`);
  if (failed > 0) process.exitCode = 0; // non-fatal; unmapped URLs fall back to remote
}

main().catch((e) => { console.error(e); process.exit(1); });
```

- [ ] **Step 2: Run the script (requires network)**

Run: `pnpm localize:images`
Expected: console line like `Localized NNN images (0 failed). Map: NNN entries, NNN full.`; `lib/local-images.ts` created; `public/img/thumb/` and `public/img/full/` populated. A few `FAIL` lines are acceptable (those URLs fall back to remote).

> If this environment has no outbound network, the human operator runs `pnpm localize:images` locally and commits the results; the rest of the plan continues unchanged.

- [ ] **Step 3: Write the guard test**

Create `scripts/check-local-images.test.mjs`:

```js
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
```

> Note: importing a `.ts` file from `node --test` requires Node 22.6+ with `--experimental-strip-types`, OR change the test to read+parse `lib/local-images.ts` as text. Node here is v22.17 — run with `node --test --experimental-strip-types`. Add this flag to the `test` script if needed: `"test": "node --test --experimental-strip-types"`.

- [ ] **Step 4: Run the guard test**

Run: `pnpm test scripts/check-local-images.test.mjs` (or `node --test --experimental-strip-types scripts/check-local-images.test.mjs`)
Expected: PASS.

- [ ] **Step 5: Commit (images + generated map)**

```bash
git add public/img lib/local-images.ts scripts/localize-images.mjs scripts/check-local-images.test.mjs package.json
git commit -m "Localize species/tree photos for offline use"
```

---

## Task 4: `localImage()` helper + wire render sites

**Files:**
- Create: `lib/image-src.ts`
- Modify: `components/species-photo.tsx:25`, `app/trees/page.tsx:112`, `app/trees/[id]/page.tsx:81,300` (+ `PhotoGallery`), `app/catalog/[id]/page.tsx`

- [ ] **Step 1: Create the helper**

Create `lib/image-src.ts`:

```ts
import { LOCAL_IMAGES } from "./local-images";

/** Return the bundled local path for a known remote image URL, else the URL itself. */
export function localImage(remoteUrl: string | null | undefined): string {
  if (!remoteUrl) return "";
  return LOCAL_IMAGES[remoteUrl] ?? remoteUrl;
}
```

- [ ] **Step 2: Wire `components/species-photo.tsx`**

At line 25, change:

```ts
const src = variant === "hero" ? img.url : (img.thumb ?? img.url);
```

to:

```ts
import { localImage } from "@/lib/image-src"; // add at top with other imports
// ...
const src = localImage(variant === "hero" ? img.url : (img.thumb ?? img.url));
```

- [ ] **Step 3: Wire the tree pages**

In `app/trees/page.tsx` add `import { localImage } from "@/lib/image-src";` and change line 112 `src={t.image.thumb ?? t.image.url}` → `src={localImage(t.image.thumb ?? t.image.url)}`.

In `app/trees/[id]/page.tsx` add the same import; change line 81 `src={tree.image.url}` → `src={localImage(tree.image.url)}`, and line ~300 `src={img.thumb ?? img.url}` → `src={localImage(img.thumb ?? img.url)}`. Locate the `PhotoGallery` component (defined in this file) and wrap its `<img src>` with `localImage(...)` too.

- [ ] **Step 4: Audit `app/catalog/[id]/page.tsx`**

Run: `grep -nE "\.image\.|img\.url|\.thumb" app/catalog/[id]/page.tsx`
For any `<img src>` that uses a tree/host-tree image URL, wrap it with `localImage(...)` and add the import. (Species photos already go through `SpeciesPhoto`, now wrapped.)

- [ ] **Step 5: Verify build + local fallback**

Run: `pnpm build`
Expected: build succeeds. Spot-check a generated page in `out/` (e.g. `grep -o '/img/thumb/[^"]*' out/catalog.html | head`) to confirm local paths render.

- [ ] **Step 6: Commit**

```bash
git add lib/image-src.ts components/species-photo.tsx app/trees app/catalog
git commit -m "Serve localized photos via localImage() helper"
```

---

## Task 5: PWA manifest, icons, and layout metadata

**Files:**
- Create: `public/icons/icon-192.png`, `public/icons/icon-512.png`, `public/icons/maskable-512.png`, `public/manifest.webmanifest`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Generate icons from the existing mark (macOS `sips`)**

```bash
mkdir -p public/icons
sips -s format png -z 512 512 public/foray-mark.png --out public/icons/icon-512.png
sips -s format png -z 192 192 public/foray-mark.png --out public/icons/icon-192.png
# Maskable: pad to a square safe-zone on the parchment background, then size to 512.
sips -s format png -p 1400 1400 --padColor F0E4C8 public/foray-mark.png --out /tmp/foray-pad.png
sips -z 512 512 /tmp/foray-pad.png --out public/icons/maskable-512.png
```

Expected: three PNGs in `public/icons/`. (If `sips` padding behaves oddly, ship `icon-192`/`icon-512` with `purpose: "any"` and reuse `icon-512` as maskable — document the choice.)

- [ ] **Step 2: Create the manifest**

Create `public/manifest.webmanifest`:

```json
{
  "name": "Foray · A Mushrooming Field Book",
  "short_name": "Foray",
  "description": "A field book for the rain — species, trees, and a spore forecast.",
  "start_url": "/",
  "scope": "/",
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#f0e4c8",
  "theme_color": "#f0e4c8",
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any" },
    { "src": "/icons/maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
```

- [ ] **Step 3: Add metadata to `app/layout.tsx`**

Extend the existing `metadata` export and add Apple/manifest fields:

```ts
export const metadata: Metadata = {
  title: "Foray · A Mushrooming Field Book",
  description: "A field book for the rain.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Foray",
  },
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/icon-192.png",
  },
};
```

(Keep the existing `viewport` export with `themeColor: "#f0e4c8"`.)

- [ ] **Step 4: Verify**

Run: `pnpm build && ls out/manifest.webmanifest out/icons/`
Expected: manifest + icons present in `out/`.

- [ ] **Step 5: Commit**

```bash
git add public/manifest.webmanifest public/icons app/layout.tsx
git commit -m "Add PWA manifest and app icons"
```

---

## Task 6: Service worker + post-build precache + registration

**Files:**
- Create: `sw/index.ts`, `scripts/build-sw.mjs`, `app/~offline/page.tsx`, `components/sw-register.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create the offline fallback page**

Create `app/~offline/page.tsx`:

```tsx
export const metadata = { title: "Offline · Foray" };

export default function OfflinePage() {
  return (
    <main style={{ padding: "3rem 1.5rem", maxWidth: 480, margin: "0 auto" }}>
      <h1 style={{ fontFamily: "var(--font-display)", color: "var(--moss)" }}>
        You&rsquo;re offline
      </h1>
      <p style={{ color: "var(--ink-soft)" }}>
        The field guide, species, and trees are saved on your device. Weather,
        the map, and the spot-finder need a signal — they&rsquo;ll come back when
        you do.
      </p>
    </main>
  );
}
```

- [ ] **Step 2: Create the service worker source**

Create `sw/index.ts`:

```ts
import {
  Serwist,
  CacheFirst,
  NetworkFirst,
  NetworkOnly,
  ExpirationPlugin,
  type PrecacheEntry,
} from "serwist";

declare const self: ServiceWorkerGlobalScope;
// Injected at build time by scripts/build-sw.mjs (esbuild `define`).
declare const __SERWIST_MANIFEST: (PrecacheEntry | string)[];

const serwist = new Serwist({
  precacheEntries: __SERWIST_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  precacheOptions: { cleanupOutdatedCaches: true },
  runtimeCaching: [
    {
      matcher: ({ url }) => url.pathname.startsWith("/img/full/"),
      handler: new CacheFirst({
        cacheName: "foray-photos-full",
        plugins: [new ExpirationPlugin({ maxEntries: 400, maxAgeSeconds: 60 * 60 * 24 * 365, purgeOnQuotaError: true })],
      }),
    },
    {
      matcher: ({ url }) => url.hostname === "upload.wikimedia.org",
      handler: new CacheFirst({
        cacheName: "foray-wikimedia",
        plugins: [new ExpirationPlugin({ maxEntries: 400, maxAgeSeconds: 60 * 60 * 24 * 180, purgeOnQuotaError: true })],
      }),
    },
    {
      matcher: ({ url }) => url.hostname === "api.open-meteo.com",
      handler: new NetworkFirst({
        cacheName: "foray-weather",
        networkTimeoutSeconds: 6,
        plugins: [new ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 60 * 60 * 12, purgeOnQuotaError: true })],
      }),
    },
    {
      matcher: ({ url }) => url.hostname.endsWith("basemaps.cartocdn.com"),
      handler: new CacheFirst({
        cacheName: "foray-tiles",
        plugins: [new ExpirationPlugin({ maxEntries: 600, maxAgeSeconds: 60 * 60 * 24 * 30, purgeOnQuotaError: true })],
      }),
    },
    {
      matcher: ({ url }) => url.hostname === "api.anthropic.com",
      handler: new NetworkOnly(),
    },
  ],
  fallbacks: {
    entries: [
      { url: "/~offline", matcher: ({ request }) => request.destination === "document" },
    ],
  },
});

serwist.addEventListeners();
```

- [ ] **Step 3: Create the post-build SW bundler**

Create `scripts/build-sw.mjs`:

```js
import { build } from "esbuild";
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT = path.join(ROOT, "out");

// Precache: every HTML page, Next static JS/CSS, thumbnails, icons, manifest, offline page.
const INCLUDE = [/\.html$/i, /^_next\/static\/.+\.(js|css)$/i, /^img\/thumb\/.+\.(jpg|png)$/i, /^icons\/.+\.png$/i, /^manifest\.webmanifest$/i];
const EXCLUDE = [/^sw\.js$/i, /\.map$/i, /^img\/full\//i];

async function walk(dir, base = "") {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) out.push(...(await walk(path.join(dir, entry.name), rel)));
    else out.push(rel);
  }
  return out;
}

async function precacheEntries() {
  const files = await walk(OUT);
  const picked = files.filter(
    (f) => INCLUDE.some((re) => re.test(f)) && !EXCLUDE.some((re) => re.test(f)),
  );
  const entries = [];
  for (const rel of picked) {
    const buf = await readFile(path.join(OUT, rel));
    const revision = createHash("md5").update(buf).digest("hex");
    entries.push({ url: `/${rel}`, revision });
  }
  return entries.sort((a, b) => a.url.localeCompare(b.url));
}

const entries = await precacheEntries();
await build({
  entryPoints: [path.join(ROOT, "sw/index.ts")],
  outfile: path.join(OUT, "sw.js"),
  bundle: true,
  minify: true,
  format: "iife",
  target: "es2020",
  define: { __SERWIST_MANIFEST: JSON.stringify(entries) },
});
const bytes = entries.reduce((n, e) => n + 0, 0);
console.log(`SW built: ${entries.length} precache entries → out/sw.js`);
```

- [ ] **Step 4: Create the registration component**

Create `components/sw-register.tsx`:

```tsx
"use client";
import { useEffect } from "react";

export default function SwRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  }, []);
  return null;
}
```

- [ ] **Step 5: Mount registration in `app/layout.tsx`**

Add `import SwRegister from "@/components/sw-register";` and render `<SwRegister />` just inside `<body>` (before the providers is fine).

- [ ] **Step 6: Build and verify the SW**

Run: `pnpm build`
Expected: `next build` succeeds, then `SW built: N precache entries → out/sw.js`. Confirm: `test -f out/sw.js && grep -c "url" out/sw.js` (manifest inlined). Confirm `out/~offline.html` exists (or `out/~offline/index.html`).

- [ ] **Step 7: Commit**

```bash
git add sw scripts/build-sw.mjs app/~offline components/sw-register.tsx app/layout.tsx
git commit -m "Add Serwist service worker with out/ precache and registration"
```

---

## Task 7: Background-warm full images + Settings status

**Files:**
- Create: `components/offline-warmer.tsx`
- Modify: `app/layout.tsx`, `components/settings-button.tsx`

- [ ] **Step 1: Create the warmer**

Create `components/offline-warmer.tsx`:

```tsx
"use client";
import { useEffect } from "react";
import { FULL_IMAGE_PATHS } from "@/lib/local-images";

const FLAG = "foray-offline-warmed-v1";

export default function OfflineWarmer() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;
    if (!navigator.onLine) return;
    if (localStorage.getItem(FLAG) === "done") return;

    let cancelled = false;
    (async () => {
      await navigator.serviceWorker.ready;
      const queue = [...FULL_IMAGE_PATHS];
      const worker = async () => {
        while (!cancelled && queue.length) {
          const p = queue.shift();
          if (!p) break;
          try { await fetch(p); } catch { /* will retry next session */ }
        }
      };
      await Promise.all([worker(), worker(), worker(), worker()]); // concurrency 4
      if (!cancelled) localStorage.setItem(FLAG, "done");
    })();

    return () => { cancelled = true; };
  }, []);

  return null;
}
```

- [ ] **Step 2: Mount the warmer in `app/layout.tsx`**

Add `import OfflineWarmer from "@/components/offline-warmer";` and render `<OfflineWarmer />` next to `<SwRegister />`.

- [ ] **Step 3: Add an offline-status readout to Settings**

In `components/settings-button.tsx`, inside the settings dialog/panel body, add a small client-side status line that counts cached full photos:

```tsx
// near other hooks in the dialog component:
const [saved, setSaved] = useState<number | null>(null);
useEffect(() => {
  let alive = true;
  (async () => {
    if (!("caches" in window)) return;
    try {
      const cache = await caches.open("foray-photos-full");
      const keys = await cache.keys();
      if (alive) setSaved(keys.length);
    } catch { /* ignore */ }
  }, []);
  return () => { alive = false; };
}, []);
// in JSX:
<p className="font-mono" style={{ fontSize: 11, color: "var(--ink-soft)" }}>
  Offline guide: {saved === null ? "—" : `${saved}/${FULL_IMAGE_PATHS.length}`} photos saved
</p>
```

Add imports `import { useState, useEffect } from "react";` (merge with existing) and `import { FULL_IMAGE_PATHS } from "@/lib/local-images";`. Ensure the file is a client component (`"use client"` at top — it already uses interactivity).

- [ ] **Step 4: Verify build**

Run: `pnpm build`
Expected: success.

- [ ] **Step 5: Commit**

```bash
git add components/offline-warmer.tsx components/settings-button.tsx app/layout.tsx
git commit -m "Background-warm full photos and show offline status in Settings"
```

---

## Task 8: Graceful offline banner for online-only features

**Files:**
- Create: `lib/use-online.ts`, `components/offline-banner.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create the `useOnline` hook**

Create `lib/use-online.ts`:

```ts
"use client";
import { useEffect, useState } from "react";

export function useOnline(): boolean {
  const [online, setOnline] = useState(true); // assume online for SSR/first paint
  useEffect(() => {
    const update = () => setOnline(navigator.onLine);
    update();
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, []);
  return online;
}
```

- [ ] **Step 2: Create the banner**

Create `components/offline-banner.tsx`:

```tsx
"use client";
import { useOnline } from "@/lib/use-online";

export default function OfflineBanner() {
  const online = useOnline();
  if (online) return null;
  return (
    <div
      role="status"
      className="font-mono"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "var(--moss)",
        color: "#f0e4c8",
        textAlign: "center",
        fontSize: 11,
        letterSpacing: "0.08em",
        padding: "6px 12px",
      }}
    >
      OFFLINE · guide &amp; journal available — weather and map need a signal
    </div>
  );
}
```

- [ ] **Step 3: Mount the banner in `app/layout.tsx`**

Add `import OfflineBanner from "@/components/offline-banner";` and render `<OfflineBanner />` just inside `<body>`.

- [ ] **Step 4: Verify build**

Run: `pnpm build`
Expected: success.

- [ ] **Step 5: Commit**

```bash
git add lib/use-online.ts components/offline-banner.tsx app/layout.tsx
git commit -m "Show graceful offline banner when connectivity drops"
```

---

## Task 9: Full verification

**Files:** none (verification only)

- [ ] **Step 1: Clean build + run all unit/guard tests**

```bash
pnpm test
pnpm build
```
Expected: tests PASS; build completes; `out/sw.js`, `out/manifest.webmanifest`, `out/icons/`, `out/img/thumb/`, `out/img/full/` all present.

- [ ] **Step 2: Serve the export locally over a SW-eligible origin**

```bash
npx serve out -l 5055   # or: python3 -m http.server --directory out 5055
```
Open `http://localhost:5055` (localhost is a secure context, so the SW registers).

- [ ] **Step 3: Confirm the service worker + precache**

In Chrome DevTools → Application → Service Workers: `sw.js` is "activated and running". Application → Cache Storage: `serwist-precache-*` populated; after a moment `foray-photos-full` fills (warmer).

- [ ] **Step 4: Offline test**

DevTools → Network → check **Offline**. Hard-navigate to `/catalog`, open a species you have NOT visited, open a tree page. Expected: pages render, thumbnails AND hero photos show (full images warmed). Toggling a never-cached cross-origin resource (weather/map) shows the offline banner / empty state, not a crash.

- [ ] **Step 5: Lighthouse PWA + install**

Run Lighthouse (Installable / PWA category). Expected: installable (manifest + SW + icons valid). On a phone on the same network (or the deployed Render URL), use Add to Home Screen / install, enable airplane mode, and confirm the guide + photos work.

- [ ] **Step 6: Final commit / branch ready**

```bash
git status   # working tree clean
```
The branch `offline-field-guide-pwa` is ready for PR/merge.

---

## Self-Review (completed)

**Spec coverage:**
- Localize photos (thumb + 1280px cap, no `sharp`) → Tasks 2–3. ✔
- `localImage()` helper at render sites, attribution preserved → Task 4. ✔
- Manifest + icons + layout meta (iOS tags) → Task 5. ✔
- Serwist SW: precache shell + thumbnails; CacheFirst full images; runtime rules for weather/tiles/wikimedia/anthropic; offline fallback → Task 6. ✔ (Refined: library + esbuild + out/ glob instead of `@serwist/next`; flagged in header.)
- Background-warm full images + Settings status → Task 7. ✔
- Deploy/"everywhere": no infra change — existing Render static export; install steps verified → Task 9. ✔
- Graceful offline for online-only features → Task 8. ✔
- Testing/verification (unit, guard, manual offline, Lighthouse) → Tasks 2, 3, 9. ✔

**Placeholder scan:** No TBD/TODO; every code step has complete code. The one environmental branch (no outbound network for image download) has an explicit human-operator fallback in Task 3 Step 2.

**Type consistency:** `LOCAL_IMAGES` (Record<string,string>) and `FULL_IMAGE_PATHS` (string[]) defined in Task 3, consumed identically in Tasks 4 and 7. SW manifest placeholder `__SERWIST_MANIFEST` defined in `sw/index.ts` and injected by the same name in `build-sw.mjs`. Cache name `foray-photos-full` defined in Task 6 and read in Task 7 Settings status. Consistent.
