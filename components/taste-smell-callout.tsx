import type { Edibility } from "@/lib/species-types";

interface Props {
  odor: string;
  flavor: string;
  edibility: Edibility;
}

export default function TasteSmellCallout({ odor, flavor, edibility }: Props) {
  // Only show if both fields have content
  if (!odor || !flavor) return null;

  const accent =
    edibility === "choice"
      ? "var(--rust)"
      : edibility === "edible"
        ? "var(--moss-mid)"
        : "var(--ink-soft)";

  return (
    <section
      className="mt-8"
      style={{
        background:
          "linear-gradient(135deg, rgba(161, 74, 42, 0.06), rgba(44, 58, 42, 0.04))",
        border: `1px solid var(--line)`,
        borderLeft: `3px solid ${accent}`,
        borderRadius: 14,
        padding: "20px 22px",
      }}
    >
      <div
        className="font-mono mb-4"
        style={{
          fontSize: 10,
          letterSpacing: "0.28em",
          color: accent,
          textTransform: "uppercase",
        }}
      >
        Taste & Smell
      </div>
      <div className="grid sm:grid-cols-[80px_1fr] gap-x-5 gap-y-3 items-baseline">
        <Label>Aroma</Label>
        <Body>{odor}</Body>
        <Label>Flavor</Label>
        <Body>{flavor}</Body>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="font-mono"
      style={{
        fontSize: 9.5,
        letterSpacing: "0.22em",
        color: "var(--ink-soft)",
        textTransform: "uppercase",
        opacity: 0.7,
        paddingTop: 2,
      }}
    >
      {children}
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-body"
      style={{
        fontSize: 15,
        lineHeight: 1.5,
        color: "var(--ink)",
        margin: 0,
      }}
    >
      {children}
    </p>
  );
}
