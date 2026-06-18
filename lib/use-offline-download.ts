"use client";
import { useCallback, useEffect, useState } from "react";
import { OFFLINE_IMAGE_URLS } from "./local-images";

const CACHE = "foray-photos";
const FLAG = "foray-offline-warmed-v1";

export type OfflineStatus = "checking" | "idle" | "downloading" | "ready" | "unsupported";

/**
 * Drives an opt-in "download all photos for offline" action. The service worker
 * caches each photo (CacheFirst) as we fetch it; progress is read back from the
 * Cache Storage API so it survives reloads.
 */
export function useOfflineDownload() {
  const total = OFFLINE_IMAGE_URLS.length;
  const [saved, setSaved] = useState(0);
  const [status, setStatus] = useState<OfflineStatus>("checking");

  useEffect(() => {
    let alive = true;
    (async () => {
      if (typeof window === "undefined" || !("caches" in window) || !("serviceWorker" in navigator)) {
        if (alive) setStatus("unsupported");
        return;
      }
      try {
        const cache = await caches.open(CACHE);
        const n = (await cache.keys()).length;
        if (!alive) return;
        setSaved(n);
        setStatus(n >= total || localStorage.getItem(FLAG) === "done" ? "ready" : "idle");
      } catch {
        if (alive) setStatus("idle");
      }
    })();
    return () => {
      alive = false;
    };
  }, [total]);

  const start = useCallback(async () => {
    if (!("caches" in window) || !("serviceWorker" in navigator)) return;
    setStatus("downloading");
    await navigator.serviceWorker.ready;
    const cache = await caches.open(CACHE);
    const queue = [...OFFLINE_IMAGE_URLS];
    let processed = 0;
    const worker = async () => {
      while (queue.length) {
        const url = queue.shift();
        if (!url) break;
        try {
          if (!(await cache.match(url))) await fetch(url); // SW stores it CacheFirst
        } catch {
          /* skipped; user can re-run */
        }
        if (++processed % 8 === 0) setSaved((await cache.keys()).length);
      }
    };
    await Promise.all(Array.from({ length: 5 }, worker)); // 5 parallel fetchers
    setSaved((await cache.keys()).length);
    localStorage.setItem(FLAG, "done");
    setStatus("ready");
  }, []);

  return { status, saved, total, start, estMb: Math.round(total * 0.26) };
}
