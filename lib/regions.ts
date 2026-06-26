/**
 * Coarse user-facing regions. Each maps to a set of substring filter terms
 * matched (case-insensitively) against MushroomSpecies.regionsPNW. Kept in a
 * plain module (no JSX) so both the React region context and build scripts
 * (e.g. scripts/build-offline-regions.mjs) share one source of truth.
 */
export type RegionId =
  | "sierra-nevada"
  | "pacific-northwest"
  | "california-coast"
  | "great-basin"
  | "all";

export interface RegionDef {
  id: RegionId;
  label: string;
  blurb: string;
  /** terms matched against species.regionsPNW; null = match everything */
  terms: string[] | null;
}

export const REGIONS: RegionDef[] = [
  {
    id: "sierra-nevada",
    label: "Sierra Nevada & Great Basin",
    blurb: "Reno, Tahoe, Eastern Sierra, Carson Range",
    terms: [
      "sierra",
      "tahoe",
      "carson",
      "great basin",
      "eastern sierra",
      "cascade east",
      "snowbank",
      "subalpine",
      "mountain",
      "ruby",
    ],
  },
  {
    id: "pacific-northwest",
    label: "Pacific Northwest",
    blurb: "Olympics, Cascades west, Coast Range",
    terms: [
      "olympic",
      "cascade",
      "coast range",
      "puget",
      "willamette",
      "oregon",
      "washington",
      "vancouver",
      "british columbia",
    ],
  },
  {
    id: "california-coast",
    label: "California Coast",
    blurb: "Bay Area, North Coast, redwood",
    terms: [
      "california",
      "bay area",
      "north coast",
      "redwood",
      "coastal oak",
      "mendocino",
    ],
  },
  {
    id: "great-basin",
    label: "Great Basin",
    blurb: "Nevada, sagebrush, Ruby Mtns",
    terms: ["great basin", "nevada", "ruby", "sagebrush", "intermountain"],
  },
  {
    id: "all",
    label: "All regions",
    blurb: "Don't filter by location",
    terms: null,
  },
];
