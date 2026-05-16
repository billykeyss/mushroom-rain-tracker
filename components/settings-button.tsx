"use client";

import { useState } from "react";
import { useApiKey } from "@/lib/api-key-context";
import ApiKeyDialog from "@/components/api-key-dialog";

interface Props {
  /** "icon" = circular button (TopBar); "full" = labeled row (SideNav) */
  variant?: "icon" | "full";
}

export default function SettingsButton({ variant = "icon" }: Props) {
  const { hasKey } = useApiKey();
  const [open, setOpen] = useState(false);

  return (
    <>
      {variant === "icon" ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Settings"
          style={{
            background: "transparent",
            border: "1px solid var(--line)",
            borderRadius: "50%",
            width: 32,
            height: 32,
            display: "grid",
            placeItems: "center",
            color: "var(--ink-soft)",
            cursor: "pointer",
            position: "relative",
            flex: "none",
          }}
        >
          <GearIcon />
          {!hasKey && (
            <span
              aria-hidden
              style={{
                position: "absolute",
                top: -2,
                right: -2,
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--rust)",
                border: "1.5px solid var(--parchment)",
              }}
            />
          )}
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex items-center justify-between w-full group"
          style={{
            padding: "12px 14px",
            borderRadius: 12,
            background: "transparent",
            color: "var(--moss)",
            cursor: "pointer",
            border: 0,
            textAlign: "left",
          }}
        >
          <span className="flex items-center gap-2.5">
            <GearIcon />
            <span
              className="font-display"
              style={{
                fontSize: 16,
                fontWeight: 350,
                letterSpacing: "-0.01em",
              }}
            >
              Settings
            </span>
          </span>
          <span
            className="font-mono"
            style={{
              fontSize: 9.5,
              letterSpacing: "0.2em",
              color: hasKey ? "var(--moss-soft)" : "var(--rust)",
              opacity: hasKey ? 0.6 : 1,
              textTransform: "uppercase",
            }}
          >
            {hasKey ? "Key set" : "Add key"}
          </span>
        </button>
      )}
      <ApiKeyDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function GearIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      aria-hidden
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9 1.65 1.65 0 0 0 4.27 7.18l-.06-.06A2 2 0 1 1 7.04 4.29l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
