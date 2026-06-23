import Link from "next/link";
import type { Danger, Lookalike } from "@/lib/species-types";
import SpeciesPhoto from "@/components/species-photo";

/**
 * One lookalike entry on a species detail page. When the lookalike resolves to a
 * catalog species (`catalogId`), the whole card becomes a deep link to that
 * species' page and shows its thumbnail; otherwise it renders text-only.
 */
export default function LookalikeCard({ lookalike: l }: { lookalike: Lookalike }) {
  const linked = Boolean(l.catalogId);

  const body = (
    <>
      <div className="flex items-start gap-3">
        {linked && (
          <SpeciesPhoto
            speciesId={l.catalogId as string}
            scientific={l.scientific}
            variant="tiny"
            size={64}
            className="flex-none"
          />
        )}
        <div className="min-w-0 flex-1">
          <div className="flex justify-between items-start gap-3">
            <div className="min-w-0">
              <div
                className="font-display italic"
                style={{ fontSize: 17, color: "var(--moss)", lineHeight: 1.1 }}
              >
                {l.name}
              </div>
              <div
                className="font-display italic mt-0.5"
                style={{ fontSize: 13, color: "var(--rust)", opacity: 0.85 }}
              >
                {l.scientific}
              </div>
            </div>
            <DangerBadge danger={l.danger} />
          </div>
          {l.keyFeatures && l.keyFeatures.length > 0 && (
            <ul className="flex flex-wrap gap-1.5 mt-2" style={{ listStyle: "none", padding: 0, margin: "8px 0 0" }}>
              {l.keyFeatures.map((f) => (
                <li
                  key={f}
                  className="font-mono"
                  style={{
                    fontSize: 9.5,
                    lineHeight: 1.3,
                    letterSpacing: "0.02em",
                    color: "var(--ink)",
                    background: "rgba(26,20,16,0.05)",
                    border: "1px solid var(--line)",
                    borderRadius: 100,
                    padding: "2.5px 8px",
                  }}
                >
                  {f}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex items-end justify-between gap-3">
        <p
          className="font-body mt-2"
          style={{ fontSize: 13.5, lineHeight: 1.5, color: "var(--ink)" }}
        >
          {l.distinguishingFeature}
        </p>
        {linked && (
          <span
            aria-hidden
            className="font-mono flex-none"
            style={{
              fontSize: 9,
              letterSpacing: "0.18em",
              color: "var(--rust)",
              opacity: 0.6,
              textTransform: "uppercase",
              paddingBottom: 2,
            }}
          >
            ID →
          </span>
        )}
      </div>
    </>
  );

  const style: React.CSSProperties = {
    display: "block",
    padding: 14,
    borderRadius: 12,
    background: dangerBg(l.danger),
    border: `1px solid ${dangerBorder(l.danger)}`,
  };

  if (linked) {
    return (
      <Link
        href={`/catalog/${l.catalogId}`}
        style={{ ...style, textDecoration: "none", color: "inherit" }}
      >
        {body}
      </Link>
    );
  }
  return <div style={style}>{body}</div>;
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
