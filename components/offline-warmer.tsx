"use client";
import { useEffect } from "react";
import { OFFLINE_IMAGE_URLS } from "@/lib/local-images";

const FLAG = "foray-offline-warmed-v1";

export default function OfflineWarmer() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;
    if (!navigator.onLine) return;
    if (localStorage.getItem(FLAG) === "done") return;

    let cancelled = false;
    (async () => {
      await navigator.serviceWorker.ready;
      const queue = [...OFFLINE_IMAGE_URLS];
      const worker = async () => {
        while (!cancelled && queue.length) {
          const p = queue.shift();
          if (!p) break;
          try {
            await fetch(p);
          } catch {
            /* will retry on a future session */
          }
        }
      };
      // Four parallel workers warm the CacheFirst photo cache in the background.
      await Promise.all([worker(), worker(), worker(), worker()]);
      if (!cancelled) localStorage.setItem(FLAG, "done");
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
