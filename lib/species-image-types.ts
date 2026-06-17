import type { SpeciesImage } from "./species-images";

/** Identification feature a photo depicts. */
export type SpeciesImageKind =
  | "whole"
  | "cap"
  | "gills"
  | "stem"
  | "spore-print"
  | "in-situ";

/** A species photo tagged with the feature it shows, for the detail-page gallery. */
export interface SpeciesDetailImage extends SpeciesImage {
  kind: SpeciesImageKind;
  caption?: string;
}
