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
  | "edible-when-cooked";

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
}
