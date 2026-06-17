# Offline-capable Foray field guide — Design

**Date:** 2026-06-17
**Status:** Approved (pending spec review)

## Goal

Make the **field guide** — species, trees, and their photos — fully usable with
**zero signal**, and installable on any device (phone, tablet, desktop). Foray is
a Next.js 15 static-export app already deployed to Render's global CDN, so the
catalog *text* is already bundled and offline-capable. The two missing pieces:

1. Guide **photos** are hot-linked from `upload.wikimedia.org` at runtime, so they
   vanish without signal.
2. There is no service worker / install manifest, so the app shell is not cached
   and the site is not installable.

### In scope
- Pull every species/tree photo local (thumbnail + a size-capped full image).
- Add a PWA layer (manifest + service worker) that caches the app shell and all
  guide assets for full offline use.
- Installable on Android, desktop, and iOS ("Add to Home Screen").

### Out of scope (degrade gracefully, do not break)
- **Weather** (`api.open-meteo.com`), **map tiles** (Leaflet/OSM), and the
  **LLM spot-finder** stay online-only. When offline they show a small
  "needs signal" / "showing last data" state instead of broken UI. These are
  things you check before heading out, not in the field.

## Current architecture (as found)

- Next.js 15, `output: "export"` → fully static site in `./out`, deployed as a
  Render Static Site (`render.yaml`), served over HTTPS.
- Photos rendered with plain `<img>` tags (not `next/image`); `images.unoptimized`.
- Two image data sources:
  - `lib/species-images.ts` — `SPECIES_IMAGES` map, 71 species, each with
    `url` (full) + `thumb` (330px) pointing at `upload.wikimedia.org`.
  - `lib/tree-catalog.ts` — ~94 tree entries, each with `image.url` + `image.thumb`.
- Photo render sites (~5): `components/species-photo.tsx`, `app/trees/page.tsx`,
  `app/trees/[id]/page.tsx`, `app/catalog/[id]/page.tsx`.
- Local state already offline-friendly: journal + API key in `localStorage`;
  catalog text bundled into JS.
- `out/` is gitignored; `public/` ships into the export.

## Approach

**Approach A** (chosen): bundle photos locally + PWA precache, with background
cache-warming of full images (no manual download button). Footprint target:
~30–60MB total (all thumbnails + size-capped full images).

Approaches considered and rejected:
- **B — runtime caching only (no bundling):** smallest change, but a species not
  already opened while online shows no photo in the field. Fails "offline everywhere".
- **C — thumbnails only:** browse works offline but the large detail photo needs
  signal. Lighter, but the user wants full photos offline too.

## Components

### 1. Image localization script — `scripts/localize-images.mjs`

Committed Node script (run manually / when the catalog changes; not part of every build).

- Reads image URLs from `lib/species-images.ts` and `lib/tree-catalog.ts`.
- For each entry, downloads two renditions:
  - **thumbnail** — the existing 330px `thumb` URL.
  - **full (capped ~1280px)** — derived from Wikimedia's thumbnailer by rewriting
    the URL width segment (`…/330px-Name.jpg` → `…/1280px-Name.jpg`; for direct
    file URLs, construct the `…/thumb/<hash>/<file>/1280px-<file>` form).
    **No `sharp` / image-processing dependency** — Wikimedia renders the cap for us.
  - Fallback: if a 1280px rendition 404s (original smaller than the cap), download
    the original `url` instead.
- Writes to:
  - `public/img/species/<id>.jpg` and `public/img/species/<id>.thumb.jpg`
  - `public/img/trees/<id>.jpg` and `public/img/trees/<id>.thumb.jpg`
- **Idempotent**: skips files that already exist unless `--force`.
- Emits a generated `lib/local-images.ts` mapping remote URL → local path, and
  preserves original URLs in a manifest (e.g. `scripts/image-sources.json`) so
  re-fetching stays reproducible.
- `public/img/` is **committed** so the static export and CDN always carry the
  photos.

### 2. `localImage()` helper

A small helper: `localImage(remoteUrl: string): string` returns the local path if
the URL was localized, else returns the original remote URL (graceful fallback for
any image not yet downloaded).

Applied at the ~5 render sites so `src` resolves to a same-origin local file:
- `components/species-photo.tsx` (thumb / hero / tiny variants)
- `app/trees/page.tsx`
- `app/trees/[id]/page.tsx`
- `app/catalog/[id]/page.tsx`

**Attribution is preserved.** The artist / license / source-link fields already
render in `species-photo.tsx` and the tree pages; they must stay, since we are now
self-hosting CC-BY-SA / CC-BY images and attribution is a redistribution
requirement. Best-effort for entries where the source data has `artist/license: null`.

### 3. PWA layer

- **`public/manifest.webmanifest`**: `name`/`short_name` "Foray",
  `display: standalone`, `start_url`, `theme_color` + `background_color` from the
  existing design tokens, and 192 + 512 (maskable) icons derived from
  `public/foray-mark.png`.
- **`app/layout.tsx`** additions: `<link rel="manifest">`, `theme-color` meta,
  Apple touch-icon and `apple-mobile-web-app-capable` / status-bar meta for iOS
  "Add to Home Screen".
- **Service worker via `@serwist/next`** (Workbox successor; supports
  `output: export`). A hand-rolled SW is rejected because it cannot cleanly track
  Next's hashed `_next/static` chunk filenames — Serwist's `injectManifest` solves
  exactly that.
  - **Precache (on install — kept light & reliable):** app shell, JS/CSS, and
    **all thumbnails**. Browsing/identifying works offline immediately after install.
  - **Full images:** same-origin static files served `CacheFirst`. After the first
    online load, the SW **warms the full-image cache in the background**
    (idempotent / resumable) so the whole guide goes offline with no manual step.
  - **Background-warm status:** a small indicator in Settings —
    "Offline guide: downloading 60% / ready".
  - **Runtime caching rules:**
    - weather API → `NetworkFirst` (short TTL; last forecast shows offline)
    - map tiles → `CacheFirst` (entry cap)
    - spot-finder LLM → `NetworkOnly` (never cached)
    - any non-localized `upload.wikimedia.org` image → `CacheFirst` fallback
  - **Offline navigation fallback** page for unmatched routes.

### 4. Deploy / "everywhere"

No new infrastructure. The existing static export deploys to Render's global CDN
over HTTPS, which is all a service worker and PWA install require. Installable on
Android (install prompt), desktop Chrome/Edge, and iOS (Add to Home Screen).

**iOS caveat (documented, not fixed):** Safari may evict cached storage under
device storage pressure or long disuse, and historically capped per-site storage.
30–60MB is usually fine on modern iOS but is not guaranteed permanent; the
background-warm routine re-populates anything evicted on the next online load.

## Data flow

1. **Build time / occasional:** `localize-images.mjs` → `public/img/*` +
   `lib/local-images.ts` (committed).
2. **`next build`** → static export in `out/`, including `public/img/*`,
   `manifest.webmanifest`, and the Serwist-generated `sw.js` + precache manifest.
3. **Runtime, first visit (online):** SW installs, precaches shell + thumbnails,
   then background-warms full images.
4. **Runtime, offline:** shell + all guide photos served from cache; weather/map/
   spot-finder show "needs signal" states.

## Error handling

- Localize script: per-image try/catch; 404 on the 1280px cap → fall back to
  original `url`; network errors logged and the run continues (re-runnable).
- `localImage()`: unknown URL → return remote URL (no crash).
- SW: failed precache entry must not wedge install (non-fatal where possible);
  runtime fetch failures fall through to cache, then to the offline fallback page.

## Testing / verification

- **Unit:** URL-derivation logic (330px ↔ 1280px rewrite; direct-file → thumb form;
  fallback selection).
- **Guard test:** every catalog image referenced resolves to a real file under
  `public/img/` after the script runs.
- **Manual:** `next build`; serve `out/` on localhost (HTTPS or localhost so the SW
  registers); Lighthouse PWA audit; DevTools → Application → toggle **Offline** and
  confirm species + tree photos still render; install on a real phone and confirm
  offline use in airplane mode.

## Notable decisions (called out for review)

1. **Serwist** for the service worker (vs hand-rolled) — needed to track hashed
   Next chunks.
2. **Wikimedia thumbnailer** for the size cap (vs adding a `sharp` dependency) —
   zero new build-time image deps.
3. **Background cache-warming** of full images (vs an explicit "Download for
   offline" button) — delivers whole-guide-offline without a heavy install or a
   manual tap.
