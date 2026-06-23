import { SPECIES_IMAGES, type SpeciesImage } from "@/lib/species-images";
import { SPECIES_GALLERY } from "@/lib/species-gallery";
import { localImage } from "@/lib/image-src";

interface Props {
  speciesId: string;
  scientific: string;
  /** "thumb" = small list-card thumbnail; "hero" = detail page; "tiny" = inline square */
  variant: "thumb" | "hero" | "tiny";
  /** edge length in px for the "tiny" square variant (default 40) */
  size?: number;
  className?: string;
}

export default function SpeciesPhoto({
  speciesId,
  scientific,
  variant,
  size = 40,
  className,
}: Props) {
  const img: SpeciesImage | undefined =
    SPECIES_IMAGES[speciesId] ?? galleryLead(speciesId);

  if (!img) {
    return (
      <PlaceholderTile variant={variant} size={size} className={className} />
    );
  }

  const src = localImage(variant === "hero" ? img.url : (img.thumb ?? img.url));

  if (variant === "tiny") {
    return (
      <img
        src={src}
        alt={scientific}
        width={size}
        height={size}
        loading="lazy"
        style={{
          width: size,
          height: size,
          objectFit: "cover",
          borderRadius: 8,
          background: "rgba(26,20,16,0.06)",
        }}
        className={className}
      />
    );
  }

  if (variant === "thumb") {
    return (
      <img
        src={src}
        alt={scientific}
        loading="lazy"
        style={{
          width: "100%",
          aspectRatio: "4 / 3",
          objectFit: "cover",
          borderRadius: 14,
          background: "rgba(26,20,16,0.06)",
          display: "block",
        }}
        className={className}
      />
    );
  }

  // hero
  return (
    <figure className={className} style={{ margin: 0 }}>
      <img
        src={src}
        alt={scientific}
        loading="eager"
        style={{
          width: "100%",
          aspectRatio: "16 / 10",
          objectFit: "cover",
          borderRadius: 16,
          background: "rgba(26,20,16,0.06)",
          display: "block",
        }}
      />
      <figcaption
        className="font-mono"
        style={{
          fontSize: 9.5,
          letterSpacing: "0.1em",
          color: "var(--ink-soft)",
          opacity: 0.75,
          marginTop: 8,
          lineHeight: 1.4,
        }}
      >
        {img.artist ? (
          <>Photo: {truncate(img.artist, 80)}</>
        ) : (
          <>Photo: Wikimedia Commons</>
        )}
        {img.license && <> · {img.license}</>}
        {img.sourceUrl && (
          <>
            {" · "}
            <a
              href={img.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--rust)",
                textDecoration: "underline",
                textDecorationStyle: "dotted",
              }}
            >
              source ↗
            </a>
          </>
        )}
      </figcaption>
    </figure>
  );
}

/** Fallback hero/thumbnail for the ~33 species without a dedicated lead image:
 *  use the first gallery photo, preferring a whole-mushroom shot. */
function galleryLead(speciesId: string): SpeciesImage | undefined {
  const gal = SPECIES_GALLERY[speciesId];
  if (!gal || gal.length === 0) return undefined;
  return gal.find((g) => g.kind === "whole") ?? gal[0];
}

function truncate(s: string, max: number) {
  if (s.length <= max) return s;
  return s.slice(0, max - 1).trimEnd() + "…";
}

function PlaceholderTile({
  variant,
  size: tinySize = 40,
  className,
}: {
  variant: "thumb" | "hero" | "tiny";
  size?: number;
  className?: string;
}) {
  const size =
    variant === "tiny"
      ? { width: tinySize, height: tinySize, borderRadius: 8 }
      : variant === "thumb"
        ? { width: "100%", aspectRatio: "4 / 3" as const, borderRadius: 14 }
        : { width: "100%", aspectRatio: "16 / 10" as const, borderRadius: 16 };
  return (
    <div
      aria-hidden
      className={className}
      style={{
        ...size,
        background:
          "linear-gradient(135deg, rgba(44,58,42,0.08), rgba(161,74,42,0.06))",
        border: "1px dashed var(--line)",
        display: "grid",
        placeItems: "center",
        color: "var(--ink-soft)",
        fontFamily: "JetBrains Mono, monospace",
        fontSize: variant === "tiny" ? 8 : 10,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        opacity: 0.6,
      }}
    >
      {variant === "tiny" ? "🍄" : "No photo"}
    </div>
  );
}
