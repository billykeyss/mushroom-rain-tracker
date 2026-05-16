"use client";

import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { useJournal } from "@/lib/journal";
import { useLocation } from "@/lib/location-context";
import { computeSporeScore } from "@/lib/weather";

export default function JournalPage() {
  const { entries, loaded, add, remove } = useJournal();
  const { lat, lon, label, weather } = useLocation();
  const reading = useMemo(
    () => (weather.length ? computeSporeScore(weather) : null),
    [weather]
  );

  const [open, setOpen] = useState(false);
  const [species, setSpecies] = useState("");
  const [notes, setNotes] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!species.trim()) return;
    add({
      date: dayjs().format("YYYY-MM-DD"),
      species: species.trim(),
      location: label || "Unnamed spot",
      notes: notes.trim(),
      lat: lat ?? undefined,
      lon: lon ?? undefined,
      score: reading?.score,
      rain7d: reading?.rain7d,
    });
    setSpecies("");
    setNotes("");
    setOpen(false);
  };

  return (
    <main className="relative z-10 px-6 pt-14 pb-6 lg:px-12 lg:pt-16 lg:max-w-[1280px]">
      <div className="eyebrow mb-3" style={{ color: "var(--moss)" }}>
        {entries.length} entries · This season
      </div>
      <h1
        className="title-hero"
        style={{ fontSize: "clamp(34px, 7vw, 72px)" }}
      >
        Things I have <em>found</em>.
      </h1>
      <p
        className="font-mono mt-2"
        style={{
          fontSize: 9.5,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--ink-soft)",
          opacity: 0.7,
        }}
      >
        Pin a spot. Log what fruited. Watch the patterns.
      </p>

      {!loaded && (
        <div
          className="text-center py-20 font-mono"
          style={{ fontSize: 11, letterSpacing: "0.22em", opacity: 0.6 }}
        >
          OPENING JOURNAL…
        </div>
      )}

      {loaded && entries.length === 0 && (
        <div
          className="card-paper mt-6 text-center"
          style={{ padding: 28 }}
        >
          <div
            className="font-display italic"
            style={{
              fontSize: 19,
              color: "var(--moss)",
              marginBottom: 6,
            }}
          >
            The pages are blank.
          </div>
          <p
            className="font-body"
            style={{ fontSize: 14, color: "var(--ink-soft)" }}
          >
            Tap + to log your first find.
          </p>
        </div>
      )}

      <ul className="mt-5 lg:mt-10 lg:grid lg:grid-cols-2 lg:gap-x-12 xl:grid-cols-3 lg:gap-y-0">
        {entries.map((e) => (
          <li
            key={e.id}
            className="grid grid-cols-[56px_1fr] gap-3.5 py-5"
            style={{ borderBottom: "1px solid var(--line)" }}
          >
            <div
              className="text-center pt-0.5 pr-3"
              style={{ borderRight: "1px solid var(--line-soft)" }}
            >
              <div
                className="font-display"
                style={{
                  fontSize: 26,
                  fontWeight: 350,
                  color: "var(--moss)",
                  lineHeight: 1,
                }}
              >
                {dayjs(e.date).format("DD")}
              </div>
              <div
                className="font-mono mt-1"
                style={{
                  fontSize: 8.5,
                  letterSpacing: "0.22em",
                  color: "var(--ink-soft)",
                  textTransform: "uppercase",
                }}
              >
                {dayjs(e.date).format("MMM")}
              </div>
            </div>
            <div className="relative">
              <div
                className="font-display italic"
                style={{
                  fontSize: 19,
                  fontWeight: 350,
                  color: "var(--moss)",
                  lineHeight: 1.15,
                  paddingRight: 24,
                }}
              >
                {e.species}
              </div>
              <div
                className="font-mono mt-1.5"
                style={{
                  fontSize: 9.5,
                  letterSpacing: "0.16em",
                  color: "var(--ink-soft)",
                  textTransform: "uppercase",
                  opacity: 0.75,
                }}
              >
                {e.location}
              </div>
              {e.notes && (
                <p
                  className="font-body mt-2"
                  style={{
                    fontSize: 14,
                    color: "var(--ink)",
                    lineHeight: 1.4,
                  }}
                >
                  {e.notes}
                </p>
              )}
              <div
                className="flex gap-3.5 mt-2.5 font-mono"
                style={{
                  fontSize: 9.5,
                  color: "var(--moss-soft)",
                  letterSpacing: "0.1em",
                }}
              >
                {e.rain7d != null && (
                  <span>☂ {e.rain7d.toFixed(0)}mm</span>
                )}
                {e.score != null && <span>● {e.score} score</span>}
              </div>
              {!e.id.startsWith("seed-") && (
                <button
                  onClick={() => remove(e.id)}
                  aria-label="Delete entry"
                  className="absolute top-0 right-0"
                  style={{
                    background: "transparent",
                    border: 0,
                    color: "var(--ink-soft)",
                    opacity: 0.4,
                    cursor: "pointer",
                    fontSize: 18,
                    lineHeight: 1,
                    padding: 0,
                  }}
                >
                  ×
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* FAB */}
      <button
        onClick={() => setOpen(true)}
        aria-label="New entry"
        className="fixed z-[60] grid place-items-center fab-position"
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "var(--rust)",
          color: "var(--parchment)",
          border: "2px solid var(--parchment)",
          boxShadow: "0 12px 28px -8px rgba(125, 52, 24, 0.5)",
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M12 5 L12 19 M5 12 L19 12" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[70] grid items-end"
          style={{ background: "rgba(26, 20, 16, 0.45)" }}
          onClick={() => setOpen(false)}
        >
          <form
            onSubmit={submit}
            onClick={(e) => e.stopPropagation()}
            className="mx-auto w-full max-w-[480px] p-6"
            style={{
              background: "var(--parchment)",
              borderTopLeftRadius: 28,
              borderTopRightRadius: 28,
              boxShadow: "0 -30px 60px -30px rgba(0,0,0,0.4)",
              paddingBottom: "max(24px, env(safe-area-inset-bottom))",
            }}
          >
            <div
              className="mx-auto mb-4"
              style={{
                width: 36,
                height: 4,
                borderRadius: 4,
                background: "var(--line)",
              }}
            />
            <h2
              className="title-hero"
              style={{ fontSize: 28, marginBottom: 4 }}
            >
              New <em>finding</em>.
            </h2>
            <p
              className="font-mono mb-5"
              style={{
                fontSize: 9.5,
                letterSpacing: "0.2em",
                color: "var(--ink-soft)",
                textTransform: "uppercase",
              }}
            >
              {label || "Set location first"}
              {reading && ` · Score ${reading.score}`}
            </p>
            <label
              className="font-mono block mb-1.5"
              style={{
                fontSize: 9,
                letterSpacing: "0.22em",
                color: "var(--ink-soft)",
                textTransform: "uppercase",
              }}
            >
              Species
            </label>
            <input
              autoFocus
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
              placeholder="Golden chanterelle"
              className="field-input mb-4"
            />
            <label
              className="font-mono block mb-1.5"
              style={{
                fontSize: 9,
                letterSpacing: "0.22em",
                color: "var(--ink-soft)",
                textTransform: "uppercase",
              }}
            >
              Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Habitat, count, conditions…"
              rows={3}
              className="field-input mb-5"
              style={{ resize: "none" }}
            />
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="btn-ghost"
              >
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                Save entry
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}
