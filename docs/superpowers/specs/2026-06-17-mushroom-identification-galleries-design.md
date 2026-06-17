# Mushroom Identification Galleries — Design Spec

- **Date:** 2026-06-17
- **Status:** Approved (pending spec review → implementation plan)
- **Author:** Yichen Huang (with Claude)

## Summary

Give each mushroom species in the catalog a gallery of multiple, feature-grouped
identification photos (cap, gills/underside, stem & base, spore print, in-situ),
mirroring the existing tree pages' `PhotoGallery`. Today every species has at most
a single lead image (70 of 103 species have one; 33 have none). Photos are sourced
programmatically from Wikimedia Commons and iNaturalist, heuristically labeled by
feature, and rendered on the species detail page using a shared gallery component.

## Goals

- Multiple ID-feature photos for **all 103 species** in `PNW_CATALOG`.
- Photos grouped by identification feature where determinable (cap, gills, stem,
  spore print, whole, in-situ).
- Proper attribution + license recorded and displayed for every photo.
- Additive: the existing single lead image (`SPECIES_IMAGES`) keeps working unchanged.
- Consistent with the current Chanterelle theme and the trees' gallery UX.

## Non-goals

- Hand-curating/verifying every photo's feature label by eye (heuristic labeling only;
  no vision-model classification in this pass).
- Changing the species text data (cap/gills/spore descriptions etc.) — untouched.
- Owning the offline-cache localizer (a concurrent feature owns that; see Coordination).

## Current state

- `lib/species-images.ts` — **auto-generated** `SPECIES_IMAGES: Record<string, SpeciesImage>`,
  exactly one lead image per species. `SpeciesImage` = `{ url, thumb, width, height,
  thumbWidth, thumbHeight, artist, credit, license, sourceUrl, pageUrl }`.
- `components/species-photo.tsx` — the **only** consumer of `SPECIES_IMAGES`
  (renders the hero/lead via `<SpeciesPhoto variant="hero">`). Confirms an additive
  approach is safe.
- `app/catalog/[id]/page.tsx` (741 lines) — species detail page; shows the lead image
  through `SpeciesPhoto`. Will gain a gallery section.
- `app/trees/[id]/page.tsx:280` — `PhotoGallery` defined **inline**; trees use feature
  `kind`s (`whole`, `bark`, `needles`, `cone`, `leaf`, `flower`, `fruit`, `habitat`)
  with captions. To be extracted and reused.
- `lib/image-src.ts` / `lib/local-images.ts` / `scripts/localize-images.mjs` — the
  offline image-localization pipeline (owned by a concurrent in-progress feature);
  currently maps Wikimedia URLs → local `/public/img/...` files.

## Data model (additive)

Add to the image types (alongside `SpeciesImage`):

```ts
export type SpeciesImageKind =
  | "whole" | "cap" | "gills" | "stem" | "spore-print" | "in-situ";

export interface SpeciesDetailImage extends SpeciesImage {
  kind: SpeciesImageKind;
  caption?: string;
}
```

New **auto-generated** `lib/species-gallery.ts`:

```ts
export const SPECIES_GALLERY: Record<string, SpeciesDetailImage[]> = { ... };
```

- One entry per species id; the existing lead image is included as the first item
  (so the detail page renders the gallery alone, no composition needed).
- `SPECIES_IMAGES` is left intact for `SpeciesPhoto` and all list/lead consumers.

## Sourcing pipeline — `scripts/fetch-species-images.mjs`

A build-time Node script (same spirit as the other generated data files). For each
species, keyed by scientific name:

1. **Wikimedia Commons** (MediaWiki API): resolve the species' Commons category /
   search by binomial; collect candidate images with `imageinfo` (url, thumburl,
   dimensions, extmetadata → artist, license short name, license URL, description,
   canonical file page URL).
2. **iNaturalist** (API v1): look up the taxon by name, then collect photos from the
   taxon and/or research-grade observations, capturing `url` (sized variants),
   `attribution`, `license_code`, observer login, and the observation/photo URL.
3. **Filter by license** (see Licensing policy) — drop anything not permitted.
4. **Dedupe** across sources by file hash / normalized URL / title.
5. **Heuristic-label** each surviving photo's `kind` + `caption` (see Heuristic labeling).
6. **Select & cap** per species (see Selection):
7. Emit `lib/species-gallery.ts` (stable key order, formatted like `species-images.ts`,
   with the `AUTO-GENERATED` header).

The script is polite to APIs (sequential with small delays / batching, a descriptive
User-Agent, and on-disk response caching so re-runs are cheap and reproducible).

### Selection / cap

- Target **up to 6 images per species**.
- Always include the existing lead image first (`kind: "whole"` unless metadata says
  otherwise).
- Prefer breadth: at most one image per `kind` until each feature is represented, then
  backfill; **never more than 2 of the same `kind`**.
- Prefer Commons over iNaturalist when two candidates are near-duplicates (cleaner
  licensing/attribution), otherwise interleave for variety.

### Heuristic labeling

Lower-cased match against filename + title + description + tags, first match wins:

| `kind`        | Triggers (regex, case-insensitive) |
|---------------|------------------------------------|
| `spore-print` | `spore[\s-]?print`, `sporeprint` |
| `gills`       | `gill`, `lamella(e)?`, `underside`, `hymenium`, `pore surface`, `pores` |
| `stem`        | `stipe`, `stem`, `volva`, `ring`, `annulus`, `base` |
| `cap`         | `pileus`, `\bcap\b`, `cap surface` |
| `in-situ`     | `habitat`, `in situ`, `growing`, `forest floor` |
| `whole`       | default fallback |

Caption: prefer the source's own short description/title (sanitized, ≤140 chars);
otherwise synthesize `"{Common name} — {kind label}"`.

## Licensing policy

**Allowed** (non-commercial use confirmed): `CC0`, `Public domain`, `CC BY`,
`CC BY-SA`, **`CC BY-NC`**, `CC BY-NC-SA`. Every image stores `license` + attribution
(`artist`/observer) + `sourceUrl`, all displayed in the UI.

**Excluded:** any `-ND` (no-derivatives), `All rights reserved` / `C`, and anything
with missing/unknown license.

## Rendering / UI

1. Extract the inline tree `PhotoGallery` into a shared `components/photo-gallery.tsx`,
   generic over the image shape (`{ url, thumb, kind, caption, artist, license,
   sourceUrl }`), with an optional ordered list of `kind`s for grouping/labels.
2. Refactor `app/trees/[id]/page.tsx` to consume the shared component (no visual change).
3. Add a feature-grouped gallery section to `app/catalog/[id]/page.tsx`, reading
   `SPECIES_GALLERY[id]`, with per-photo caption + credit + license, styled to match the
   trees and the Chanterelle theme.

## Offline-cache coordination

- Gallery image URLs route through the existing `lib/image-src.ts` resolver so the
  concurrent offline feature can localize them without special-casing.
- **iNaturalist images are on different hosts** (`*.inaturalist.org`,
  `inaturalist-open-data.s3.amazonaws.com`) than Wikimedia. The localizer
  (`scripts/localize-images.mjs`) will need those hosts allowed to cache them offline.
  That file is owned by the in-progress offline feature, so this is a **coordination
  point**, not a change we make in this work; until then, iNat images hot-link.

## Testing

- `scripts/check-species-gallery.test.mjs` (Node test, like `check-local-images.test.mjs`):
  - every `SPECIES_GALLERY` key is a real species id in the catalog;
  - every image has a non-empty `url`, an **allowed** `license`, non-empty attribution,
    and a `kind` in the allowed set;
  - per-species count ≤ 6 and ≤ 2 of any `kind`;
  - lead image present as the first entry.
- Type-check (`tsc`) covers the new types and generated file.

## Risks & open questions

- **Coverage variance:** obscure species (incl. the 33 with no current image) may yield
  few photos even across both sources; the script logs per-species counts so gaps are
  visible. Species with zero results keep their current (empty) state — no regression.
- **Label accuracy:** heuristic labels will misfile some photos (e.g. a whole-mushroom
  shot whose filename mentions "cap"). Accepted for this pass; vision labeling is a
  possible future upgrade.
- **API drift / rate limits:** mitigated by on-disk caching and polite request pacing.
- **Generated-file size:** `species-gallery.ts` will be larger than `species-images.ts`
  (~6×); acceptable as static data (trees already ship a 850KB catalog).

## Rollout / ordering

1. Types + shared `PhotoGallery` extraction (no behavior change; trees still work).
2. `fetch-species-images.mjs` + generate `lib/species-gallery.ts`.
3. Catalog detail page gallery rendering.
4. Validation test.
5. (Coordination) offline localizer host allowlist — separate, with the offline feature.
