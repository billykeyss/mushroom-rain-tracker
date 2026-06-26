"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { OFFLINE_IMAGE_URLS } from "./local-images";
import { OFFLINE_REGION_GROUPS } from "./offline-regions";

const CACHE = "foray-photos";
const MB_PER_PHOTO = 0.26;

export type OfflineStatus = "checking" | "idle" | "downloading" | "ready" | "unsupported";

export interface OfflineGroup {
  id: string;
  label: string;
  urls: string[];
  total: number;
  saved: number;
  estMb: number;
  status: OfflineStatus;
  start: () => void;
}

/** The download targets: the full guide first, then each region. */
const TARGETS: { id: string; label: string; urls: string[] }[] = [
  { id: "all", label: "Everything", urls: OFFLINE_IMAGE_URLS },
  ...OFFLINE_REGION_GROUPS.map((g) => ({ id: g.id, label: g.label, urls: g.urls })),
];

/**
 * Drives the opt-in "download photos for offline" actions. The service worker
 * caches each photo (CacheFirst) as we fetch it; saved counts are read back from
 * the Cache Storage API (per target) so they survive reloads and reflect reality.
 */
export function useOfflineDownload() {
  const [supported, setSupported] = useState(true);
  const [cached, setCached] = useState<Set<string>>(new Set());
  const [busy, setBusy] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  const refresh = useCallback(async () => {
    if (typeof window === "undefined" || !("caches" in window)) {
      setSupported(false);
      return new Set<string>();
    }
    try {
      const cache = await caches.open(CACHE);
      const keys = await cache.keys();
      const set = new Set(keys.map((r) => r.url));
      setCached(set);
      return set;
    } catch {
      return new Set<string>();
    }
  }, []);

  useEffect(() => {
    let alive = true;
    (async () => {
      await refresh();
      if (alive) setReady(true);
    })();
    return () => { alive = false; };
  }, [refresh]);

  const start = useCallback(
    async (urls: string[], id: string) => {
      if (!("caches" in window) || !("serviceWorker" in navigator)) return;
      setBusy(id);
      try {
        await navigator.serviceWorker.ready;
        const cache = await caches.open(CACHE);
        const queue = urls.filter((u) => !cached.has(u));
        let i = 0;
        const worker = async () => {
          while (queue.length) {
            const url = queue.shift();
            if (!url) break;
            try {
              if (!(await cache.match(url))) await fetch(url); // SW stores it CacheFirst
            } catch { /* skipped; user can re-run */ }
            if (++i % 8 === 0) await refresh();
          }
        };
        await Promise.all(Array.from({ length: 5 }, worker));
        await refresh();
      } finally {
        setBusy(null);
      }
    },
    [cached, refresh],
  );

  const groups: OfflineGroup[] = useMemo(
    () =>
      TARGETS.map((t) => {
        const total = t.urls.length;
        const saved = t.urls.reduce((n, u) => (cached.has(u) ? n + 1 : n), 0);
        const status: OfflineStatus = !supported
          ? "unsupported"
          : busy === t.id
            ? "downloading"
            : !ready
              ? "checking"
              : saved >= total
                ? "ready"
                : "idle";
        return {
          id: t.id,
          label: t.label,
          urls: t.urls,
          total,
          saved,
          estMb: Math.round(total * MB_PER_PHOTO),
          status,
          start: () => start(t.urls, t.id),
        };
      }),
    [cached, supported, busy, ready, start],
  );

  return { supported, anyBusy: busy !== null, groups };
}
