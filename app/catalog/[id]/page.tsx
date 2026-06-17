import Link from "next/link";
import { notFound } from "next/navigation";
import { PNW_CATALOG } from "@/lib/species-catalog";
import type {
  Danger,
  Edibility,
  MushroomSpecies,
} from "@/lib/species-types";
import SpeciesPhoto from "@/components/species-photo";
import ElevationCell from "@/components/elevation-cell";
import TasteSmellCallout from "@/components/taste-smell-callout";
import ClipboardTouch from "@/components/clipboard-touch";
import { TREES_BY_SCIENTIFIC } from "@/lib/tree-catalog";

/** Roman numeral for plate-of-the-day style numbering, indexed off catalog order. */
function plateNumeral(id: string): string {
  const idx = PNW_CATALOG.findIndex((s) => s.id === id);
  const n = idx >= 0 ? idx + 1 : 1;
  const map: [number, string][] = [
    [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
  ];
  let r = "", x = n;
  for (const [v, s] of map) {
    while (x >= v) { r += s; x -= v; }
  }
  return r;
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function generateStaticParams() {
  return PNW_CATALOG.map((s) => ({ id: s.id }));
}

export default async function SpeciesDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const s = PNW_CATALOG.find((x) => x.id === id);
  if (!s) notFound();

  return (
    <main className="relative z-10 px-6 pt-14 pb-6 lg:px-12 lg:pt-16 lg:max-w-[1280px] 2xl:max-w-none 2xl:px-16">
      <ClipboardTouch
        id={s.id}
        commonName={s.commonNames[0]}
        scientific={s.scientific}
      />

      <div className="running-head">
        <span className="chapter">Chapter V · Plate {plateNumeral(s.id)}</span>
        <span className="center">{s.family} · {s.commonNames[0]}</span>
        <span className="right">003</span>
      </div>

      <Link
        href="/catalog"
        className="font-mono inline-flex items-center gap-2"
        style={{
          fontSize: 10,
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: "var(--rust)",
          textDecoration: "none",
        }}
      >
        ← Catalog
      </Link>

      <header className="mt-5">
        <div className="eyebrow mb-3">
          {s.family} · {s.trophicMode}
          {s.order ? ` · ${s.order}` : ""}
        </div>
        <span className="plate-no mb-3">Plate {plateNumeral(s.id)} · {s.family}</span>
        <h1 className="title-hero" style={{ fontSize: "clamp(34px, 6vw, 96px)" }}>
          {s.commonNames[0]}
        </h1>
        <div
          className="font-display italic mt-2"
          style={{
            fontSize: 22,
            fontWeight: 350,
            color: "var(--rust)",
            letterSpacing: "-0.01em",
          }}
        >
          {s.scientific}
        </div>
        {s.commonNames.length > 1 && (
          <div
            className="font-body italic mt-2"
            style={{ fontSize: 14, color: "var(--ink-soft)" }}
          >
            Also: {s.commonNames.slice(1).join(", ")}
          </div>
        )}
      </header>

      <div className="mt-7 lg:mt-8">
        <SpeciesPhoto
          speciesId={s.id}
          scientific={s.scientific}
          variant="hero"
        />
      </div>

      {/* Season strip */}
      <SeasonStrip
        fruiting={s.fruitingMonths}
        peak={s.peakMonths}
        currentMonth={new Date().getMonth() + 1}
      />

      <TasteSmellCallout
        odor={s.identification.odor}
        flavor={s.culinary.flavor}
        edibility={s.edibility}
      />

      <div className="lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-12 mt-10">
        {/* Left column */}
        <div className="space-y-8">
          <Section title="Habitat">
            <p
              className="font-body 2xl:dropcap"
              style={{
                fontSize: 16,
                lineHeight: 1.55,
                color: "var(--ink)",
              }}
            >
              {s.habitat}
            </p>
            <KVRow label="Substrate" value={s.substrate} />
            {s.elevationM && (
              <div
                className="grid grid-cols-[110px_1fr] gap-3 py-2"
                style={{ borderBottom: "1px solid var(--line-soft)" }}
              >
                <div
                  className="font-mono"
                  style={{
                    fontSize: 9.5,
                    letterSpacing: "0.18em",
                    color: "var(--ink-soft)",
                    textTransform: "uppercase",
                    opacity: 0.7,
                    paddingTop: 2,
                  }}
                >
                  Elevation
                </div>
                <div>
                  <ElevationCell range={s.elevationM} />
                </div>
              </div>
            )}
            {s.regionsPNW.length > 0 && (
              <KVRow label="Regions" value={s.regionsPNW.join(" · ")} />
            )}
          </Section>

          {s.hostTrees.length > 0 && (
            <Section
              title={
                s.trophicMode === "mycorrhizal"
                  ? "Mycorrhizal partners"
                  : s.trophicMode === "parasitic"
                    ? "Host trees"
                    : "Substrate trees"
              }
            >
              <ul className="space-y-1.5 mt-1">
                {s.hostTrees.map((h) => {
                  const tree = TREES_BY_SCIENTIFIC.get(
                    h.scientific.toLowerCase()
                  );
                  const inner = (
                    <span className="flex items-baseline gap-3">
                      <span
                        className="font-body"
                        style={{ color: "var(--ink)" }}
                      >
                        {h.common}
                      </span>
                      <span
                        className="font-display italic"
                        style={{
                          color: "var(--rust)",
                          opacity: 0.85,
                          fontSize: 14,
                        }}
                      >
                        {h.scientific}
                      </span>
                      {tree && (
                        <span
                          className="font-mono"
                          style={{
                            fontSize: 9,
                            letterSpacing: "0.18em",
                            color: "var(--rust)",
                            opacity: 0.5,
                            textTransform: "uppercase",
                          }}
                        >
                          ID →
                        </span>
                      )}
                    </span>
                  );
                  return (
                    <li key={h.scientific} style={{ fontSize: 15 }}>
                      {tree ? (
                        <Link
                          href={`/trees/${tree.id}`}
                          className="hover:underline decoration-dotted"
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                          }}
                        >
                          {inner}
                        </Link>
                      ) : (
                        inner
                      )}
                    </li>
                  );
                })}
              </ul>
            </Section>
          )}

          <Section title="Identification">
            <KVRow label="Cap" value={s.identification.cap} />
            <KVRow label="Underside" value={s.identification.underside} />
            <KVRow label="Stem" value={s.identification.stem} />
            <KVRow label="Flesh" value={s.identification.fleshColor} />
            <KVRow
              label="Spore print"
              value={s.identification.sporePrintColor}
            />
            <KVRow label="Odor" value={s.identification.odor} />
            <KVRow label="Size" value={s.identification.sizeCm} />
          </Section>

          <Section title="Fruiting conditions">
            <KVRow
              label="Min 7-day rain"
              value={`${s.conditions.minRain7d} mm`}
            />
            <KVRow
              label="Days since rain"
              value={`${s.conditions.idealDaysSinceRain[0]}–${s.conditions.idealDaysSinceRain[1]}`}
            />
            <KVRow
              label="Temperature"
              value={`${s.conditions.tempRangeC[0]}–${s.conditions.tempRangeC[1]} °C`}
            />
            {s.conditions.humidityMinPct != null && (
              <KVRow
                label="Min humidity"
                value={`${s.conditions.humidityMinPct}%`}
              />
            )}
            <p
              className="font-body italic mt-3"
              style={{
                fontSize: 12.5,
                color: "var(--ink-soft)",
                opacity: 0.7,
                lineHeight: 1.5,
              }}
            >
              Heuristic values, derived from fruiting-trigger literature for
              this species. The Today screen uses these to score conditions.
            </p>
          </Section>
        </div>

        {/* Right column */}
        <div className="space-y-8 mt-8 lg:mt-0">
          <EdibilityBlock
            edibility={s.edibility}
            toxicityNotes={s.toxicityNotes}
          />

          {s.lookalikes.length > 0 && (
            <Section title={`Lookalikes (${s.lookalikes.length})`}>
              <ul className="space-y-3 mt-2">
                {s.lookalikes.map((l) => (
                  <li
                    key={l.scientific}
                    style={{
                      padding: 14,
                      borderRadius: 12,
                      background: dangerBg(l.danger),
                      border: `1px solid ${dangerBorder(l.danger)}`,
                    }}
                  >
                    <div className="flex justify-between items-start gap-3">
                      <div>
                        <div
                          className="font-display italic"
                          style={{
                            fontSize: 17,
                            color: "var(--moss)",
                            lineHeight: 1.1,
                          }}
                        >
                          {l.name}
                        </div>
                        <div
                          className="font-display italic mt-0.5"
                          style={{
                            fontSize: 13,
                            color: "var(--rust)",
                            opacity: 0.85,
                          }}
                        >
                          {l.scientific}
                        </div>
                      </div>
                      <DangerBadge danger={l.danger} />
                    </div>
                    <p
                      className="font-body mt-2"
                      style={{
                        fontSize: 13.5,
                        lineHeight: 1.5,
                        color: "var(--ink)",
                      }}
                    >
                      {l.distinguishingFeature}
                    </p>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          <Section title="Culinary">
            <KVRow label="Flavor" value={s.culinary.flavor} />
            <KVRow label="Preparation" value={s.culinary.preparation} />
            {s.culinary.preservation && (
              <KVRow label="Preservation" value={s.culinary.preservation} />
            )}
          </Section>

          {s.conservationNotes && (
            <Section title="Conservation">
              <p
                className="font-body"
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.5,
                  color: "var(--ink)",
                }}
              >
                {s.conservationNotes}
              </p>
            </Section>
          )}

          <Section title={`Sources (${s.sources.length})`}>
            <ul className="space-y-1.5 mt-1">
              {s.sources.map((src) => (
                <li key={src.url}>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body"
                    style={{
                      fontSize: 13.5,
                      color: "var(--rust)",
                      textDecoration: "underline",
                      textDecorationStyle: "dotted",
                      textUnderlineOffset: 3,
                    }}
                  >
                    {src.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div
        className="font-mono mb-3"
        style={{
          fontSize: 10,
          letterSpacing: "0.28em",
          color: "var(--rust)",
          textTransform: "uppercase",
        }}
      >
        {title}
      </div>
      {children}
    </section>
  );
}

function KVRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="grid grid-cols-[110px_1fr] gap-3 py-2"
      style={{ borderBottom: "1px solid var(--line-soft)" }}
    >
      <div
        className="font-mono"
        style={{
          fontSize: 9.5,
          letterSpacing: "0.18em",
          color: "var(--ink-soft)",
          textTransform: "uppercase",
          opacity: 0.7,
          paddingTop: 2,
        }}
      >
        {label}
      </div>
      <div
        className="font-body"
        style={{
          fontSize: 14.5,
          lineHeight: 1.5,
          color: "var(--ink)",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function SeasonStrip({
  fruiting,
  peak,
  currentMonth,
}: {
  fruiting: number[];
  peak: number[];
  currentMonth: number;
}) {
  return (
    <div className="mt-8">
      <div
        className="font-mono mb-2"
        style={{
          fontSize: 10,
          letterSpacing: "0.24em",
          color: "var(--ink-soft)",
          textTransform: "uppercase",
          opacity: 0.7,
        }}
      >
        Season
      </div>
      <div className="grid grid-cols-12 gap-[3px]">
        {MONTHS.map((m, i) => {
          const month = i + 1;
          const isFruit = fruiting.includes(month);
          const isPeak = peak.includes(month);
          const isToday = month === currentMonth;
          return (
            <div
              key={m}
              className="text-center"
              style={{
                padding: "10px 2px 6px",
                borderRadius: 8,
                background: isPeak
                  ? "var(--rust)"
                  : isFruit
                    ? "rgba(107, 125, 93, 0.55)"
                    : "rgba(26, 20, 16, 0.05)",
                color: isPeak || isFruit ? "var(--parchment)" : "var(--ink-soft)",
                outline: isToday ? "1.5px solid var(--rust)" : "none",
                outlineOffset: 2,
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: 9,
                  letterSpacing: "0.14em",
                  opacity: 0.85,
                }}
              >
                {m.toUpperCase()}
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="flex gap-4 mt-3 font-mono"
        style={{
          fontSize: 9,
          letterSpacing: "0.18em",
          color: "var(--ink-soft)",
          textTransform: "uppercase",
          opacity: 0.7,
        }}
      >
        <Legend swatch="var(--rust)" label="Peak" />
        <Legend swatch="rgba(107, 125, 93, 0.55)" label="Fruiting" />
      </div>
    </div>
  );
}

function Legend({ swatch, label }: { swatch: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        style={{
          width: 10,
          height: 10,
          borderRadius: 3,
          background: swatch,
          display: "inline-block",
        }}
      />
      {label}
    </span>
  );
}

function EdibilityBlock({
  edibility,
  toxicityNotes,
}: {
  edibility: Edibility;
  toxicityNotes: string | null;
}) {
  const map: Record<Edibility, { label: string; sub: string; bg: string; fg: string }> = {
    choice: {
      label: "Choice edible",
      sub: "Highly prized when correctly identified and cooked.",
      bg: "rgba(161, 74, 42, 0.1)",
      fg: "var(--rust)",
    },
    edible: {
      label: "Edible",
      sub: "Safe to eat when correctly identified.",
      bg: "rgba(63, 82, 56, 0.1)",
      fg: "var(--moss-mid)",
    },
    "edible-when-cooked": {
      label: "Edible — cook fully",
      sub: "Toxic raw or undercooked. Always heat thoroughly.",
      bg: "rgba(46, 68, 82, 0.1)",
      fg: "var(--rain-deep)",
    },
    "edible-with-caution": {
      label: "Edible with caution",
      sub: "Has caused reactions; eat in small portions or avoid if naive.",
      bg: "rgba(168, 116, 44, 0.12)",
      fg: "#a8742c",
    },
    inedible: {
      label: "Inedible",
      sub: "Not poisonous, but not eaten — bitter, woody, or unpalatable.",
      bg: "rgba(107, 107, 107, 0.1)",
      fg: "#6b6b6b",
    },
    psychoactive: {
      label: "Psychoactive — do not eat",
      sub: "Contains neurotoxins (ibotenic acid, muscimol). Severe GI distress and delirium common.",
      bg: "rgba(125, 74, 143, 0.12)",
      fg: "#7d4a8f",
    },
    "medicinal-only": {
      label: "Medicinal only",
      sub: "Not eaten as food — too woody or bitter — but used as tea, tincture, or extract.",
      bg: "rgba(63, 82, 56, 0.1)",
      fg: "var(--moss-mid)",
    },
    toxic: {
      label: "Toxic — do not eat",
      sub: "Causes severe illness. Will cause hospitalization in most adults; can be fatal in vulnerable patients.",
      bg: "rgba(192, 84, 32, 0.12)",
      fg: "#c05420",
    },
    deadly: {
      label: "DEADLY — do not eat",
      sub: "Contains lethal toxins (amatoxins, orellanine, etc.) with delayed onset. No reliable antidote.",
      bg: "rgba(160, 40, 40, 0.13)",
      fg: "#a02828",
    },
  };
  const m = map[edibility];
  return (
    <section
      style={{
        padding: 20,
        borderRadius: 14,
        background: m.bg,
        border: `1px solid ${m.fg}33`,
      }}
    >
      <div
        className="font-mono"
        style={{
          fontSize: 10,
          letterSpacing: "0.28em",
          color: m.fg,
          textTransform: "uppercase",
        }}
      >
        Edibility
      </div>
      <div
        className="font-display italic mt-2"
        style={{
          fontSize: 22,
          fontWeight: 350,
          color: m.fg,
          letterSpacing: "-0.01em",
        }}
      >
        {m.label}
      </div>
      <p
        className="font-body mt-1"
        style={{
          fontSize: 14,
          color: "var(--ink)",
          opacity: 0.8,
          lineHeight: 1.5,
        }}
      >
        {m.sub}
      </p>
      {toxicityNotes && (
        <p
          className="font-body italic mt-3"
          style={{
            fontSize: 13.5,
            color: "var(--ink)",
            lineHeight: 1.5,
            borderTop: "1px solid var(--line)",
            paddingTop: 12,
          }}
        >
          {toxicityNotes}
        </p>
      )}
    </section>
  );
}

function DangerBadge({ danger }: { danger: Danger }) {
  const colors: Record<Danger, string> = {
    deadly: "#a02828",
    toxic: "#c05420",
    "GI-upset": "#a8742c",
    inedible: "#6b6b6b",
    edible: "var(--moss-mid)",
    "edible-when-cooked": "var(--rain-deep)",
    "edible-with-caution": "#a8742c",
  };
  return (
    <span
      className="font-mono"
      style={{
        flex: "none",
        fontSize: 9,
        letterSpacing: "0.2em",
        color: "var(--parchment)",
        background: colors[danger],
        padding: "4px 9px",
        borderRadius: 100,
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}
    >
      {danger}
    </span>
  );
}

function dangerBg(d: Danger): string {
  switch (d) {
    case "deadly":
      return "rgba(160, 40, 40, 0.08)";
    case "toxic":
      return "rgba(192, 84, 32, 0.07)";
    case "GI-upset":
      return "rgba(168, 116, 44, 0.07)";
    default:
      return "rgba(255, 255, 255, 0.22)";
  }
}
function dangerBorder(d: Danger): string {
  switch (d) {
    case "deadly":
      return "rgba(160, 40, 40, 0.4)";
    case "toxic":
      return "rgba(192, 84, 32, 0.32)";
    case "GI-upset":
      return "rgba(168, 116, 44, 0.32)";
    default:
      return "var(--line)";
  }
}
