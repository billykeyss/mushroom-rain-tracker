"use client";

import dayjs from "dayjs";
import Link from "next/link";
import { useMemo } from "react";
import { useClipboard } from "@/lib/clipboard-context";
import { useJournal } from "@/lib/journal";
import { useLocation } from "@/lib/location-context";
import {
  computeSporeScore,
  scoreSpecies,
  suggestSpeciesList,
} from "@/lib/weather";
import { useRegion } from "@/lib/region-context";

/**
 * The persistent right rail that appears at 2xl: and above.
 * Travels with the reader across screens, accumulating context:
 *  · A pulse card up top (the day's headline)
 *  · This week's likely flushes for the current spot
 *  · Recent species the user has viewed
 *  · A few recent journal entries
 */
export default function FieldClipboard() {
  const { weather, label } = useLocation();
  const { recent } = useClipboard();
  const { entries, loaded } = useJournal();
  const { filterTerms } = useRegion();

  const reading = useMemo(
    () => (weather.length ? computeSporeScore(weather) : null),
    [weather]
  );
  const likely = useMemo(
    () => (reading ? suggestSpeciesList(reading, filterTerms, 3) : []),
    [reading, filterTerms]
  );

  return (
    <aside
      className="hidden 2xl:flex flex-col fixed right-0 top-0 bottom-0 z-30"
      style={{
        width: 300,
        borderLeft: "1px solid var(--line)",
        background: "rgba(184, 148, 90, 0.06)",
        padding: "32px 22px",
        overflowY: "auto",
      }}
    >
      <div
        className="flex items-baseline justify-between mb-5 pb-3"
        style={{ borderBottom: "1px solid rgba(26, 20, 16, 0.07)" }}
      >
        <h2
          className="font-display italic"
          style={{
            fontSize: 22,
            fontWeight: 380,
            color: "var(--moss)",
            letterSpacing: "-0.01em",
            lineHeight: 1,
          }}
        >
          Field Clipboard
        </h2>
        <span
          className="font-mono"
          style={{
            fontSize: 9,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--ink-soft)",
            opacity: 0.65,
          }}
        >
          ·
        </span>
      </div>

      {reading && (
        <div
          style={{
            background: "var(--moss)",
            color: "var(--parchment)",
            borderRadius: 12,
            padding: "14px 14px 12px",
            position: "relative",
            overflow: "hidden",
            marginBottom: 18,
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 95% 0%, rgba(200, 122, 74, 0.32), transparent 55%)",
              pointerEvents: "none",
            }}
          />
          <div
            className="font-mono"
            style={{
              fontSize: 8.5,
              letterSpacing: "0.28em",
              color: "var(--cap)",
              textTransform: "uppercase",
              position: "relative",
            }}
          >
            The day's reading
          </div>
          <div
            className="font-display italic mt-1"
            style={{
              fontSize: 17,
              fontWeight: 400,
              color: "var(--parchment)",
              lineHeight: 1.15,
              position: "relative",
            }}
          >
            {reading.label} — {reading.score}/100
          </div>
          <div
            className="font-body mt-1.5"
            style={{
              fontSize: 13,
              color: "rgba(239, 226, 195, 0.72)",
              lineHeight: 1.4,
              position: "relative",
              fontStyle: "italic",
            }}
          >
            {reading.blurb}
          </div>
        </div>
      )}

      {likely.length > 0 && reading && (
        <>
          <SectionLabel>This week, {label || "here"}</SectionLabel>
          {likely.map((s) => {
            const m = scoreSpecies(s, reading);
            return (
              <Link
                key={s.id}
                href={`/catalog/${s.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="grid"
                  style={{
                    gridTemplateColumns: "32px 1fr",
                    gap: 10,
                    padding: "8px 0 10px",
                    borderBottom: "1px dotted rgba(26, 20, 16, 0.08)",
                  }}
                >
                  <div
                    className="font-mono text-center"
                    style={{
                      fontSize: 15,
                      color:
                        m.match >= 4
                          ? "var(--rust)"
                          : m.match >= 3
                            ? "var(--moss)"
                            : "var(--moss-soft)",
                      letterSpacing: "0.04em",
                      paddingTop: 3,
                    }}
                  >
                    {m.match}/{m.total}
                  </div>
                  <div>
                    <div
                      className="font-display italic"
                      style={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: "var(--moss)",
                        lineHeight: 1.15,
                      }}
                    >
                      {s.commonNames[0]}
                    </div>
                    <div
                      className="font-display italic"
                      style={{
                        fontSize: 11.5,
                        color: "var(--rust)",
                        opacity: 0.8,
                        marginTop: 1,
                      }}
                    >
                      {s.scientific}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </>
      )}

      {recent.length > 0 && (
        <>
          <SectionLabel style={{ marginTop: 22 }}>Recently viewed</SectionLabel>
          {recent.map((e) => (
            <Link
              key={e.id}
              href={`/catalog/${e.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  padding: "6px 0 8px",
                  borderBottom: "1px dotted rgba(26, 20, 16, 0.08)",
                }}
              >
                <div
                  className="font-display italic"
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: "var(--moss)",
                    lineHeight: 1.15,
                  }}
                >
                  {e.commonName}
                </div>
                <div
                  className="font-display italic"
                  style={{
                    fontSize: 11.5,
                    color: "var(--rust)",
                    opacity: 0.8,
                    marginTop: 1,
                  }}
                >
                  {e.scientific}
                </div>
              </div>
            </Link>
          ))}
        </>
      )}

      {loaded && entries.length > 0 && (
        <>
          <SectionLabel style={{ marginTop: 22 }}>Journal</SectionLabel>
          {entries.slice(0, 3).map((e) => (
            <div
              key={e.id}
              className="grid"
              style={{
                gridTemplateColumns: "32px 1fr",
                gap: 10,
                padding: "8px 0 10px",
                borderBottom: "1px dotted rgba(26, 20, 16, 0.08)",
              }}
            >
              <div className="text-center">
                <div
                  className="font-display"
                  style={{
                    fontSize: 17,
                    fontWeight: 400,
                    color: "var(--moss)",
                    lineHeight: 1,
                  }}
                >
                  {dayjs(e.date).format("DD")}
                </div>
                <div
                  className="font-mono"
                  style={{
                    fontSize: 7,
                    letterSpacing: "0.2em",
                    color: "var(--ink-soft)",
                    textTransform: "uppercase",
                    marginTop: 2,
                    opacity: 0.65,
                  }}
                >
                  {dayjs(e.date).format("MMM")}
                </div>
              </div>
              <div>
                <div
                  className="font-display italic"
                  style={{
                    fontSize: 13.5,
                    color: "var(--moss)",
                    lineHeight: 1.15,
                  }}
                >
                  {e.species}
                </div>
                <div
                  className="font-mono mt-0.5"
                  style={{
                    fontSize: 8,
                    letterSpacing: "0.14em",
                    color: "var(--ink-soft)",
                    textTransform: "uppercase",
                    opacity: 0.7,
                  }}
                >
                  {e.location}
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      <div style={{ flex: 1 }} />

      <div
        className="font-mono"
        style={{
          marginTop: 24,
          paddingTop: 12,
          borderTop: "1px solid rgba(26, 20, 16, 0.07)",
          fontSize: 8,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: "var(--ink-soft)",
          opacity: 0.45,
          lineHeight: 1.8,
        }}
      >
        <div>⌘1—6  ·  Switch screens</div>
        <div>⌘K   ·  Quick search</div>
      </div>
    </aside>
  );
}

function SectionLabel({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="font-mono"
      style={{
        fontSize: 8.5,
        letterSpacing: "0.32em",
        textTransform: "uppercase",
        color: "var(--ink-soft)",
        opacity: 0.55,
        margin: "0 0 8px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
