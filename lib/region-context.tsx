"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

/**
 * Coarse user-facing regions. Each one maps to a set of substring filter terms
 * that get matched against MushroomSpecies.regionsPNW (case-insensitive).
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
  /** terms matched against species.regionsPNW */
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

interface RegionState {
  region: RegionId;
  def: RegionDef;
  setRegion: (id: RegionId) => void;
  /** terms used to filter species; null = match everything */
  filterTerms: string[] | null;
}

const KEY = "foray.region.v1";
const Ctx = createContext<RegionState | null>(null);

export function RegionProvider({ children }: { children: React.ReactNode }) {
  const [region, setRegionState] = useState<RegionId>("sierra-nevada");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw && REGIONS.some((r) => r.id === raw)) {
        setRegionState(raw as RegionId);
      }
    } catch {}
  }, []);

  const setRegion = useCallback((id: RegionId) => {
    setRegionState(id);
    try {
      localStorage.setItem(KEY, id);
    } catch {}
  }, []);

  const def = useMemo(
    () => REGIONS.find((r) => r.id === region) ?? REGIONS[0],
    [region]
  );

  const value = useMemo<RegionState>(
    () => ({ region, def, setRegion, filterTerms: def.terms }),
    [region, def, setRegion]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useRegion() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useRegion must be inside RegionProvider");
  return ctx;
}
