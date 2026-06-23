/**
 * Aggregated mushroom catalog. The hand-curated species live in
 * `lib/catalog/curated.ts`; species added by the lookalike research pipeline
 * live in `lib/catalog/generated.ts`. Consumers import `PNW_CATALOG` from here
 * and need not care about the split.
 */
import type { MushroomSpecies } from "./species-types";
import { CURATED_CATALOG } from "./catalog/curated.ts";
import { GENERATED_CATALOG } from "./catalog/generated.ts";

export const PNW_CATALOG: MushroomSpecies[] = [
  ...CURATED_CATALOG,
  ...GENERATED_CATALOG,
];

export type { MushroomSpecies } from "./species-types";
