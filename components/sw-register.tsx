"use client";
import { useEffect } from "react";

export default function SwRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    if (process.env.NODE_ENV !== "production") {
      // Dev runs on the same origin (localhost:1245) as a production test would,
      // so a previously-installed prod SW can hijack dev and 404 its chunks.
      // Tear down any stale SW + caches when running the dev server.
      navigator.serviceWorker.getRegistrations().then((regs) => regs.forEach((r) => r.unregister()));
      if ("caches" in window) caches.keys().then((ks) => ks.forEach((k) => k.startsWith("foray-") && caches.delete(k)));
      return;
    }
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  }, []);
  return null;
}
