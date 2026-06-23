/**
 * Pacific Northwest edible mushroom catalog — type definitions.
 * Data sourced from MykoWeb, PNW Key Council, MushroomExpert.com, IUCN,
 * USDA PNW research stations, and peer-reviewed mycology literature.
 */

export type TrophicMode =
  | "mycorrhizal"
  | "saprotrophic"
  | "parasitic"
  | "mixed";

export type Edibility =
  | "choice"
  | "edible"
  | "edible-with-caution"
  | "edible-when-cooked"
  | "inedible"
  | "psychoactive"
  | "medicinal-only"
  | "toxic"
  | "deadly";

export type Danger =
  | "deadly"
  | "toxic"
  | "inedible"
  | "edible"
  | "edible-with-caution"
  | "edible-when-cooked"
  | "GI-upset";

export interface HostTree {
  common: string;
  scientific: string;
}

export interface Lookalike {
  name: string;
  scientific: string;
  danger: Danger;
  distinguishingFeature: string;
  /**
   * Explicit pointer to the catalog species this lookalike *is*, so its card can
   * show a photo and deep-link to `/catalog/[catalogId]`. Populated by
   * scripts/match-lookalikes.mjs. Absent = not yet catalogued or genus-only
   * (e.g. "Russula spp.") → the card renders text-only.
   */
  catalogId?: string;
  /**
   * The 2–4 most important diagnostic cues to look out for, distilled from
   * `distinguishingFeature` for at-a-glance scanning. Rendered as chips on the
   * card. Populated by scripts/lookalikes/inject-features.mjs.
   */
  keyFeatures?: string[];
}

export interface Source {
  name: string;
  url: string;
}

export interface SpeciesConditions {
  /** mm of rain cumulated over the prior 7 days for fruiting trigger */
  minRain7d: number;
  /** [min, max] days since the triggering rainfall when flushes commonly appear */
  idealDaysSinceRain: [number, number];
  /** [min, max] °C — mean daily temperature range */
  tempRangeC: [number, number];
  /** % minimum relative humidity for fruiting (null = unknown) */
  humidityMinPct: number | null;
}

export interface Identification {
  cap: string;
  underside: string;
  stem: string;
  fleshColor: string;
  sporePrintColor: string;
  odor: string;
  sizeCm: string;
}

export interface Culinary {
  flavor: string;
  preparation: string;
  preservation: string | null;
}

/* ─────────── Enrichment fields (optional, added 2026) ─────────── */

/** Microscopy data — useful for definitive ID under a scope */
export interface SporeMicroscopy {
  /** [min, max] long axis in microns */
  lengthMicrons: [number, number];
  /** [min, max] short axis in microns */
  widthMicrons: [number, number];
  /** ellipsoid, subglobose, fusiform, citriform, etc. */
  shape: string;
  /** smooth, warty, reticulate, echinulate, ridged */
  ornamentation: string;
  /** Melzer's reaction: amyloid, dextrinoid, inamyloid, or null */
  reaction: string | null;
  /** spore print color confirmation, basidia, cystidia notes */
  notes: string | null;
}

/** Beyond habitat description — concrete microsite preferences */
export interface Microhabitat {
  /** "north-facing", "any", "ridge-top", "drainage bottom", etc. */
  slopeAspect: string | null;
  /** [min, max] soil pH preference */
  soilPh: [number, number] | null;
  /** "sandy loam", "duff-rich", "decomposed granite", etc. */
  soilTexture: string | null;
  /** "consistently moist", "well-drained", "boggy" */
  moisturePreference: string | null;
  /** common-name plants frequently co-occurring at fruiting sites */
  indicatorPlants: string[];
  notes: string | null;
}

/** Phenological correlations — when other plants/events signal a flush */
export interface PhenologyCue {
  cue: string;
  reliability: "strong" | "moderate" | "anecdotal";
}

/** Bioactive compounds — medicinal and toxic both */
export interface Bioactive {
  /** named compounds isolated from this species */
  compounds: string[];
  /** documented or studied therapeutic uses */
  medicinalUses: string[];
  /** named toxins (amatoxins, orellanine, muscarine, etc.) */
  toxinsOfNote: string[];
  notes: string | null;
}

/** Molecular ID metadata */
export interface DnaBarcode {
  /** ITS clade / section assignment per recent phylogeny */
  itsClade: string | null;
  /** key paper / monograph anchor for the modern concept */
  keyPaper: string | null;
  notes: string | null;
}

/** Cross-source verification status */
export interface Verification {
  /** how many independent reputable sources agree on the core facts */
  sourcesAgreeing: number;
  /** YYYY-MM-DD of most recent verification pass */
  lastVerified: string;
  /** are sources broadly in agreement, mixed, or actively disputed */
  consensus: "strong" | "moderate" | "disputed";
  /** what's being disputed, if anything */
  disputeNotes: string | null;
}

/* ─────────── The main entry ─────────── */

export interface MushroomSpecies {
  id: string;
  commonNames: string[];
  scientific: string;
  family: string;
  order: string | null;
  trophicMode: TrophicMode;
  /** scientific names of tree species forming ectomycorrhiza (null if not mycorrhizal) */
  mycorrhizalPartners: string[] | null;
  /** trees this species associates with (mycorrhizal partner OR substrate host) */
  hostTrees: HostTree[];
  substrate: string;
  habitat: string;
  elevationM: { min: number; max: number } | null;
  regionsPNW: string[];
  /** months 1-12 in which fruiting is observed in the Pacific Northwest */
  fruitingMonths: number[];
  /** months 1-12 of peak abundance */
  peakMonths: number[];
  conditions: SpeciesConditions;
  identification: Identification;
  edibility: Edibility;
  toxicityNotes: string | null;
  lookalikes: Lookalike[];
  culinary: Culinary;
  conservationNotes: string | null;
  sources: Source[];

  /**
   * True for entries produced by the lookalike research pipeline (vs. the
   * hand-curated original catalog). Drives the "auto-compiled — verify before
   * foraging" note on the detail page.
   */
  autoCompiled?: boolean;

  /* Enrichment fields — all optional so old entries remain valid */
  spores?: SporeMicroscopy;
  microhabitat?: Microhabitat;
  phenologyCues?: PhenologyCue[];
  bioactive?: Bioactive;
  dnaBarcode?: DnaBarcode;
  verification?: Verification;
}
