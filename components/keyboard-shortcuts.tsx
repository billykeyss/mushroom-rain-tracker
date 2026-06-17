"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SHORTCUTS: Record<string, string> = {
  "1": "/",
  "2": "/map",
  "3": "/charts",
  "4": "/journal",
  "5": "/catalog",
  "6": "/trees",
};

/** Global ⌘1–6 navigation shortcuts. Mounted once in the root layout. */
export default function KeyboardShortcuts() {
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Only handle meta/ctrl combinations
      if (!(e.metaKey || e.ctrlKey)) return;
      // Skip when typing in a field
      const t = e.target as HTMLElement | null;
      const tag = t?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea" || t?.isContentEditable) return;

      const dest = SHORTCUTS[e.key];
      if (dest) {
        e.preventDefault();
        router.push(dest);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  return null;
}
