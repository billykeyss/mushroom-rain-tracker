"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const KEY = "foray.anthropic-key.v1";

interface ApiKeyState {
  apiKey: string | null;
  hasKey: boolean;
  loaded: boolean;
  setApiKey: (k: string | null) => void;
}

const Ctx = createContext<ApiKeyState | null>(null);

export function ApiKeyProvider({ children }: { children: React.ReactNode }) {
  const [apiKey, setApiKeyState] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw && raw.startsWith("sk-")) setApiKeyState(raw);
    } catch {}
    setLoaded(true);
  }, []);

  const setApiKey = useCallback((k: string | null) => {
    setApiKeyState(k);
    try {
      if (k) localStorage.setItem(KEY, k);
      else localStorage.removeItem(KEY);
    } catch {}
  }, []);

  const value = useMemo<ApiKeyState>(
    () => ({ apiKey, hasKey: !!apiKey, loaded, setApiKey }),
    [apiKey, loaded, setApiKey]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useApiKey() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useApiKey must be inside ApiKeyProvider");
  return ctx;
}
