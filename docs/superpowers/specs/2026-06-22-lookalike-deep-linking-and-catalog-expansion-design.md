# Lookalike Photos, Deep-Linking & Catalog Expansion — Design Spec

- **Date:** 2026-06-22
- **Status:** Approved (pending spec review → implementation plan)
- **Author:** Yichen Huang (with Claude)

## Summary

Make every lookalike on a species detail page show a photo (a compact thumbnail on
the left of each card) and deep-link straight to that mushroom's own `/catalog/[id]`
page. Lookalikes reference the catalog by an **explicit pointer** (`catalogId`) baked
into the source data. To guarantee every lookalike has a target, expand the catalog
from 103 species to cover the **327 distinct lookalike species not yet catalogued**,
generated via a sourced research pipeline (the same method used to build the original
103) with a **human-review gate** for the 53 deadly/toxic additions.

## Goals

- Each lookalike card on `app/catalog/[id]/page.tsx` shows a ~64px thumbnail (left)
  and the whole card links to the referenced species' `/catalog/[id]` page.
- A `Lookalike.catalogId` pointer in the source data is the single, hand-checkable
  link mechanism (no fuzzy runtime matching at render time).
- Full coverage: all 640 lookalike entries resolve to a catalog species — the 185
  existing matches plus the 327 newly-added species.
- New species are **sourced** (real `sources[]` + honest `verification` block);
  nothing safety-relevant is fabricated.
- Deadly/toxic additions never go live without explicit human review.
- Additive and non-breaking: existing consumers of `PNW_CATALOG` are untouched.

## Non-goals

- Pointing a lookalike at a *different* species as a stand-in (misleading; unsafe).
  A lookalike with no genuine catalog target stays text-only until its species is added.
- Genus-only lookalikes (`Russula spp.`, `Cortinarius spp.`, `Amanita spp.`) — these
  cannot resolve to a single species and intentionally remain text-only (no pointer).
- Hand-authoring the 327 new entries from memory. All new data is source-derived.
- Inventing per-species fruiting `conditions` heuristics for new species (set
  conservatively and flagged, not fabricated as precise values).
- External (Wikipedia/iNaturalist) deep links — superseded by internal catalog pages.

## Current state

- `lib/species-types.ts` — `Lookalike = { name, scientific, danger, distinguishingFeature }`.
  `MushroomSpecies` carries `lookalikes: Lookalike[]`, `sources: Source[]`, and an
  optional `verification` block (`sourcesAgreeing`, `consensus`, `lastVerified`,
  `disputeNotes`).
- `lib/species-catalog.ts` — **single** `export const PNW_CATALOG: MushroomSpecies[]`
  literal, 103 species, 11,837 lines. AUTO-GENERATED via Parallel.ai web-search
  research with per-entry sources. Imported by `app/catalog/*`, `app/trees/*`,
  `lib/spot-finder.ts`, `lib/weather.ts`.
- `app/catalog/[id]/page.tsx` (802 lines) — species detail page. The Lookalikes
  section (lines ~326–378) renders each lookalike inline as a danger-colored card
  (`dangerBg`/`dangerBorder`/`DangerBadge`); **no image, no link** today.
- `components/species-photo.tsx` — `<SpeciesPhoto speciesId scientific variant>` with
  `tiny` (40px) / `thumb` (4:3) / `hero` (16:10) variants. Resolves
  `SPECIES_IMAGES[id] ?? galleryLead(id)`, so any species with a gallery gets a
  thumbnail even without a dedicated lead image. Renders a placeholder if neither.
- Image pipeline: `scripts/fetch-species-images.mjs` (Commons + iNaturalist →
  `lib/species-gallery.ts`, keyed by id), `scripts/localize-images.mjs` (self-host to
  GCS → `lib/local-images.ts`: `LOCAL_IMAGES` map + `OFFLINE_IMAGE_URLS`),
  `lib/image-src.ts` `localImage()` rewrites remote→GCS at render.
- Photos are **runtime-cached, not precached** (`scripts/build-sw.mjs` excludes
  `^img/`); offline use is opt-in via `useOfflineDownload` warming `OFFLINE_IMAGE_URLS`.
- **Coverage facts** (measured): 640 lookalike entries; 185 already match a catalog
  species (all 185 have images already localized to GCS); 455 do not → 327 distinct
  species, of which 53 are deadly/toxic (10 deadly, 43 toxic). The marquee killers
  (*A. phalloides, A. ocreata, A. muscaria, Galerina marginata, Cortinarius rubellus,
  Pleurocybella porrigens, Paxillus involutus, Gyromitra esculenta*) are already in
  the catalog; remaining safety gaps include *A. virosa, A. pantherina,
  Cortinarius orellanus, Pholiotina filaris, Russula subnigricans, Chlorophyllum
  molybdites, Clitocybe dealbata, Entoloma sinuatum*.
- Scripts that parse the catalog as **text** (regex): `scripts/fetch-species-images.mjs`,
  `scripts/check-species-gallery.test.mjs` — these break if the file is split and must
  switch to importing via `node --experimental-strip-types`.

## Data model (additive)

Add an optional pointer to `Lookalike` in `lib/species-types.ts`:

```ts
export interface Lookalike {
  name: string;
  scientific: string;
  danger: Danger;
  distinguishingFeature: string;
  /** Explicit pointer to the catalog species this lookalike *is*. Absent =
   *  not yet catalogued / genus-only → renders text-only. */
  catalogId?: string;
}
```

Mark generated species so the UI can show a provenance note and so the review gate is
machine-checkable. Reuse the existing `verification` block plus one flag on
`MushroomSpecies`:

```ts
  /** True for entries produced by the lookalike research pipeline (vs. the
   *  hand-curated original 103). Drives the "auto-compiled" detail-page note. */
  autoCompiled?: boolean;
```

## Architecture

### 1. Lookalike → catalog resolver (`lib/lookalike-resolver.ts`)

Pure, tested normalization + lookup used by the **match script** (build-time) to
*propose* `catalogId` values — not at render. `normalizeScientific(s)` strips
parentheticals, `= synonym`, `sensu lato/stricto`, `group/complex/agg./var.`, and
authorship down to the binomial. `buildResolver(catalog)` returns
`resolve(scientific): string | null`. Genus-only (`spp.`) → `null`.

### 2. Match script (`scripts/match-lookalikes.mjs`)

Imports `PNW_CATALOG` (strip-types), runs the resolver over every lookalike, and:
- prints a report: matched / unmatched (grouped by danger), genus-only set;
- writes proposed `catalogId` patches that are **applied into the source data** and
  committed (so pointers are explicit and reviewable). Re-runnable after the catalog
  grows to pick up newly-addable pointers.

### 3. Lookalike card (`components/lookalike-card.tsx`)

Extract the inline card from `app/catalog/[id]/page.tsx`. Props: the `Lookalike` plus
the resolved species' `scientific` (for `<SpeciesPhoto>` alt). Behavior:
- `catalogId` set → `<Link href={`/catalog/${catalogId}`}>` wrapping the whole card;
  ~64px square thumb on the left (`<SpeciesPhoto variant="tiny|thumb">`), name +
  scientific + `DangerBadge`, distinguishing feature, `→` affordance.
- absent → today's text-only card (no thumb, no link).
- Danger background/border preserved (`dangerBg`/`dangerBorder` move into the component
  or a shared `lib/danger-style.ts`).

### 4. Catalog split (`lib/catalog/`)

`lib/species-catalog.ts` becomes a thin aggregator that still
`export const PNW_CATALOG` (consumers unchanged) and re-exports `MushroomSpecies`:

```
lib/catalog/
  curated.ts              # the existing 103, moved verbatim
  lookalikes/<genus>.ts   # generated entries, grouped by genus
  lookalikes/index.ts     # concatenates published generated arrays
  pending-review/<...>.ts  # deadly/toxic drafts, NOT imported by the aggregate
```

`PNW_CATALOG = [...CURATED, ...GENERATED_PUBLISHED]`. `pending-review/` is excluded
until promoted. Update the two text-parsing scripts to import the module instead.

### 5. Research + synthesis pipeline (`scripts/lookalikes/`)

Mirrors how the original 103 were built.
- **Fetch (cached)** `fetch-lookalike-sources.mjs`: for each of 327 distinct names,
  pull Wikipedia REST/summary, iNaturalist taxa, GBIF species, and targeted
  MushroomExpert/MykoWeb pages → raw bundles in `.cache/lookalikes/`.
- **Synthesize**: turn each bundle into a `MushroomSpecies` draft, filling fields
  **only** from sourced text, attaching real `sources[]` and an honest `verification`
  block (`sourcesAgreeing` = actual source count; `consensus`; `lastVerified` =
  build date; `disputeNotes` lists gaps). `edibility`/`danger` seeded from the
  lookalike's existing `danger` + sources. `conditions` set conservatively and noted.
  `autoCompiled: true`.
- **Review gate**: deadly/toxic drafts → `lib/catalog/pending-review/`, excluded from
  the live catalog. The pipeline emits a per-species diff/checklist for sign-off;
  approval moves a file into `lookalikes/`.

### 6. Images for new species

Re-run `fetch-species-images.mjs` (now import-based) for new ids → galleries;
thumbnails come free via `SpeciesPhoto`'s `galleryLead` fallback (dedicated lead
images optional). Then `localize:images` (self-host new photos to GCS, extend
`OFFLINE_IMAGE_URLS`) and `sync:images` (gcloud rsync — operator's account).

### 7. Auto-compiled note

On `/catalog/[id]` for `autoCompiled` species, render a subtle banner:
"Auto-compiled from public sources — verify before foraging." Deadly/toxic never
auto-publish regardless.

## Data flow

Detail page render → for each `lookalike`, read `catalogId` → if set, `<SpeciesPhoto
speciesId={catalogId}>` (→ `SPECIES_IMAGES`/gallery → `localImage()` → GCS) and
`<Link href="/catalog/[catalogId]">`; else text-only. No network/resolution at render.

## Testing

- **Resolver units** (`node --test`): normalization for synonyms (`= X`), `group`,
  `var.`, authorship, `sensu lato`, genus-only `spp.` → null.
- **`catalogId` integrity**: every populated `catalogId` points to a real species that
  has an image (extends `check-species-gallery`); fails CI otherwise.
- **Unlinked report**: a test/script that lists lookalikes without a `catalogId`, so
  the remaining gap stays visible (and shrinks as the catalog grows).
- **`check:images`**: no dead/broken image URLs after new images land.
- **Frontend screenshots**: dev server, open a species with rich lookalikes (e.g. a
  chanterelle / a bolete), confirm thumbnails render and cards link through.

## Delivery phasing

1. **Visible feature (screenshot-testable):** `Lookalike.catalogId` type, match script,
   pointers for the 185, `LookalikeCard` render, resolver + integrity tests. Ships the
   photos + deep links immediately. *No catalog split or pipeline needed yet.*
2. **Catalog split** groundwork + import-based scripts (prereq for bulk additions).
3. **Pipeline → 274 non-deadly** species published; re-run match script to wire their
   pointers; fetch + localize their images.
4. **Deadly/toxic 53** → pipeline → review gate → publish → pointers → images.
5. **GCS sync + offline warm** (operator step).

## Risks & open questions

- Genus-only `spp.` lookalikes never deep-link (text-only) — accepted.
- Static export grows from ~103 to ~430 pages (`generateStaticParams`); watch build time.
- Pipeline accuracy ceiling: obscure species yield thin, low-`consensus` data — flagged,
  not hidden; never published for deadly/toxic without review.
- Splitting the catalog must keep the `PNW_CATALOG` export identical for all consumers.
