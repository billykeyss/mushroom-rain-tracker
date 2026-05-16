"use client";

import { useEffect, useRef, useState } from "react";
import { REGIONS, useRegion, type RegionId } from "@/lib/region-context";

interface Props {
  /** "pill" = inline pill button; "inline" = full-width row of pill buttons */
  variant?: "pill" | "inline";
  /** Which edge of the trigger the dropdown panel anchors to. Only applies to "pill". */
  align?: "left" | "right";
}

export default function RegionPicker({ variant = "pill", align = "left" }: Props) {
  const { region, def, setRegion } = useRegion();
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  if (variant === "inline") {
    return (
      <div className="flex flex-wrap gap-1.5">
        {REGIONS.map((r) => (
          <button
            key={r.id}
            onClick={() => setRegion(r.id)}
            className={`metric-tab${region === r.id ? " on" : ""}`}
            title={r.blurb}
          >
            {r.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={wrap} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="pill"
        style={{ cursor: "pointer" }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          style={{ color: "var(--rust)" }}
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3 Q6 12 12 21 Q18 12 12 3 Z" />
          <line x1="3" y1="12" x2="21" y2="12" />
        </svg>
        <strong style={{ color: "var(--moss)", fontWeight: 600 }}>
          {def.label}
        </strong>
        <span
          style={{
            marginLeft: 4,
            opacity: 0.55,
            display: "inline-block",
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.18s",
            fontSize: 9,
          }}
        >
          ▾
        </span>
      </button>

      {open && (
        <div
          className={`absolute z-30 mt-2 ${align === "right" ? "right-0" : "left-0"}`}
          style={{
            width: 300,
            maxWidth: "calc(100vw - 32px)",
            background: "var(--parchment)",
            border: "1px solid var(--line)",
            borderRadius: 18,
            boxShadow: "0 18px 40px -16px rgba(26, 20, 16, 0.35)",
            padding: 8,
          }}
        >
          <div
            className="font-mono"
            style={{
              fontSize: 9,
              letterSpacing: "0.22em",
              color: "var(--ink-soft)",
              textTransform: "uppercase",
              padding: "8px 8px 4px",
              opacity: 0.6,
            }}
          >
            Filter catalog by region
          </div>
          {REGIONS.map((r) => {
            const active = r.id === region;
            return (
              <button
                key={r.id}
                type="button"
                onClick={() => {
                  setRegion(r.id);
                  setOpen(false);
                }}
                className="w-full text-left"
                style={{
                  padding: "10px 12px",
                  borderRadius: 10,
                  background: active
                    ? "rgba(44, 58, 42, 0.08)"
                    : "transparent",
                  cursor: "pointer",
                }}
              >
                <div className="flex justify-between items-baseline">
                  <span
                    className="font-display italic"
                    style={{
                      fontSize: 16,
                      color: "var(--moss)",
                      fontWeight: active ? 450 : 350,
                    }}
                  >
                    {r.label}
                  </span>
                  {active && (
                    <span
                      style={{
                        color: "var(--rust)",
                        fontSize: 12,
                      }}
                    >
                      ✓
                    </span>
                  )}
                </div>
                <div
                  className="font-mono"
                  style={{
                    fontSize: 9.5,
                    color: "var(--ink-soft)",
                    letterSpacing: "0.04em",
                    opacity: 0.7,
                    marginTop: 2,
                  }}
                >
                  {r.blurb}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export type { RegionId };
