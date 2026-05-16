"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type ElevationUnit = "m" | "ft";

interface UnitsState {
  elevation: ElevationUnit;
  toggleElevation: () => void;
  setElevation: (u: ElevationUnit) => void;
  formatElevation: (
    range: { min: number; max: number } | null,
    /** options: { withUnit?: boolean } */
    opts?: { withUnit?: boolean }
  ) => string;
}

const KEY = "mycelium.units.v1";
const Ctx = createContext<UnitsState | null>(null);

export function UnitsProvider({ children }: { children: React.ReactNode }) {
  const [elevation, setElevationState] = useState<ElevationUnit>("m");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw === "ft" || raw === "m") setElevationState(raw);
    } catch {}
  }, []);

  const setElevation = useCallback((u: ElevationUnit) => {
    setElevationState(u);
    try {
      localStorage.setItem(KEY, u);
    } catch {}
  }, []);

  const toggleElevation = useCallback(() => {
    setElevation(elevation === "m" ? "ft" : "m");
  }, [elevation, setElevation]);

  const formatElevation = useCallback(
    (
      range: { min: number; max: number } | null,
      opts: { withUnit?: boolean } = { withUnit: true }
    ): string => {
      if (!range) return "—";
      const conv = (v: number) =>
        elevation === "ft" ? Math.round(v * 3.28084) : Math.round(v);
      const min = conv(range.min);
      const max = conv(range.max);
      const unit = elevation === "ft" ? "ft" : "m";
      return opts.withUnit ? `${min}–${max} ${unit}` : `${min}–${max}`;
    },
    [elevation]
  );

  const value = useMemo(
    () => ({ elevation, toggleElevation, setElevation, formatElevation }),
    [elevation, toggleElevation, setElevation, formatElevation]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useUnits() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useUnits must be inside UnitsProvider");
  return ctx;
}
