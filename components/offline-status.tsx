"use client";
import { useEffect, useState } from "react";
import { OFFLINE_IMAGE_URLS } from "@/lib/local-images";

/** Shows how many full-resolution photos are saved for offline use. */
export default function OfflineStatus() {
  const [saved, setSaved] = useState<number | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      if (typeof window === "undefined" || !("caches" in window)) return;
      try {
        const cache = await caches.open("foray-photos");
        const keys = await cache.keys();
        if (alive) setSaved(keys.length);
      } catch {
        /* caches unavailable (e.g. dev / private mode) */
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const total = OFFLINE_IMAGE_URLS.length;
  const ready = saved !== null && saved >= total;

  return (
    <div
      className="font-mono mt-4 pt-4"
      style={{
        borderTop: "1px solid var(--line)",
        fontSize: 10,
        letterSpacing: "0.06em",
        color: "var(--ink-soft)",
        opacity: 0.8,
        lineHeight: 1.5,
      }}
    >
      <span style={{ textTransform: "uppercase", letterSpacing: "0.18em" }}>
        Offline guide
      </span>{" "}
      ·{" "}
      {saved === null
        ? "checking…"
        : ready
          ? `ready — ${total} photos saved`
          : `saving photos ${saved}/${total}`}
    </div>
  );
}
