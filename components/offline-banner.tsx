"use client";
import { useOnline } from "@/lib/use-online";

export default function OfflineBanner() {
  const online = useOnline();
  if (online) return null;
  return (
    <div
      role="status"
      className="font-mono"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "var(--moss)",
        color: "var(--parchment)",
        textAlign: "center",
        fontSize: 11,
        letterSpacing: "0.08em",
        padding: "6px 12px",
      }}
    >
      OFFLINE · guide &amp; journal available — weather and map need a signal
    </div>
  );
}
