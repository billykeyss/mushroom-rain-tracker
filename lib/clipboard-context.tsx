"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface ClipboardEntry {
  id: string;
  commonName: string;
  scientific: string;
  viewedAt: number;
}

interface ClipboardState {
  recent: ClipboardEntry[];
  /** Push a species to the head of the recent stack (or move it there). */
  touch: (id: string, commonName: string, scientific: string) => void;
  clear: () => void;
}

const KEY = "foray.clipboard.v1";
const MAX = 6;

const Ctx = createContext<ClipboardState | null>(null);

export function ClipboardProvider({ children }: { children: React.ReactNode }) {
  const [recent, setRecent] = useState<ClipboardEntry[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) setRecent(arr.slice(0, MAX));
      }
    } catch {
      /* noop */
    }
  }, []);

  const persist = useCallback((next: ClipboardEntry[]) => {
    setRecent(next);
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* noop */
    }
  }, []);

  const touch = useCallback(
    (id: string, commonName: string, scientific: string) => {
      setRecent((cur) => {
        const filtered = cur.filter((e) => e.id !== id);
        const next: ClipboardEntry[] = [
          { id, commonName, scientific, viewedAt: Date.now() },
          ...filtered,
        ].slice(0, MAX);
        try {
          localStorage.setItem(KEY, JSON.stringify(next));
        } catch {
          /* noop */
        }
        return next;
      });
    },
    []
  );

  const clear = useCallback(() => persist([]), [persist]);

  const value = useMemo(() => ({ recent, touch, clear }), [recent, touch, clear]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useClipboard() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useClipboard must be inside ClipboardProvider");
  return ctx;
}
