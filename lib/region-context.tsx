"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { REGIONS, type RegionDef, type RegionId } from "./regions";

export { REGIONS };
export type { RegionDef, RegionId };

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
