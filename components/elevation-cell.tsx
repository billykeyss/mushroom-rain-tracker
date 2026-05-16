"use client";

import { useUnits } from "@/lib/units-context";

interface Props {
  range: { min: number; max: number } | null;
  inline?: boolean;
}

export default function ElevationCell({ range, inline }: Props) {
  const { elevation, toggleElevation, formatElevation } = useUnits();
  if (!range) return <span>—</span>;
  return (
    <span
      className={inline ? "" : "inline-flex items-center gap-2 flex-wrap"}
      style={{ fontSize: 14.5, color: "var(--ink)" }}
    >
      <span className="font-body">{formatElevation(range)}</span>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleElevation();
        }}
        aria-label={`Switch to ${elevation === "m" ? "feet" : "meters"}`}
        className="font-mono"
        style={{
          background: "transparent",
          border: "1px solid var(--line)",
          borderRadius: 100,
          padding: "2px 8px",
          fontSize: 9,
          letterSpacing: "0.18em",
          color: "var(--rust)",
          textTransform: "uppercase",
          cursor: "pointer",
          lineHeight: 1.4,
        }}
      >
        {elevation === "m" ? "→ ft" : "→ m"}
      </button>
    </span>
  );
}
