import { localImage } from "@/lib/image-src";

export interface GalleryImage {
  url: string;
  thumb?: string | null;
  kind: string;
  caption?: string;
  artist?: string | null;
  license?: string | null;
  sourceUrl?: string | null;
}

function truncate(s: string, max: number) {
  return s.length <= max ? s : s.slice(0, max - 1).trimEnd() + "…";
}

export default function PhotoGallery({
  images,
  scientific,
  kindLabel,
}: {
  images: GalleryImage[];
  scientific: string;
  kindLabel: Record<string, string>;
}) {
  return (
    <section className="mt-7">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {images.map((img) => (
          <figure key={img.url} style={{ margin: 0, display: "flex", flexDirection: "column" }}>
            <a
              href={img.sourceUrl ?? img.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block" }}
            >
              <img
                src={localImage(img.thumb ?? img.url)}
                alt={`${scientific} — ${kindLabel[img.kind] ?? img.kind}`}
                loading="lazy"
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  borderRadius: 10,
                  background: "rgba(44,38,32,0.06)",
                  display: "block",
                }}
              />
            </a>
            <figcaption
              className="font-mono"
              style={{
                fontSize: 8.5,
                letterSpacing: "0.22em",
                color: "var(--rust)",
                textTransform: "uppercase",
                marginTop: 6,
                opacity: 0.8,
              }}
            >
              {kindLabel[img.kind] ?? img.kind}
            </figcaption>
            {img.caption && (
              <figcaption
                className="font-body"
                style={{
                  fontSize: 12,
                  color: "var(--ink)",
                  lineHeight: 1.35,
                  marginTop: 2,
                  fontStyle: "italic",
                  opacity: 0.85,
                }}
              >
                {img.caption}
              </figcaption>
            )}
            <figcaption
              className="font-mono"
              style={{
                fontSize: 8,
                letterSpacing: "0.06em",
                color: "var(--ink-soft)",
                opacity: 0.6,
                marginTop: 3,
                lineHeight: 1.35,
              }}
            >
              {img.license ?? ""}
              {img.artist ? ` · ${truncate(img.artist, 36)}` : ""}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
