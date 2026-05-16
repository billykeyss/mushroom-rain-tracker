import Link from "next/link";
import { notFound } from "next/navigation";
import { PNW_CATALOG } from "@/lib/species-catalog";
import { TREE_CATALOG, TREES_BY_ID } from "@/lib/tree-catalog";

export function generateStaticParams() {
  return TREE_CATALOG.map((t) => ({ id: t.id }));
}

export default async function TreeDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tree = TREES_BY_ID.get(id);
  if (!tree) notFound();

  // Map back to the full mushroom records this tree is referenced by
  const mushrooms = tree.speciesRefs
    .map((sid) => PNW_CATALOG.find((m) => m.id === sid))
    .filter(Boolean) as typeof PNW_CATALOG;

  return (
    <main className="relative z-10 px-6 pt-14 pb-6 lg:px-12 lg:pt-16 lg:max-w-[1280px]">
      <Link
        href="/trees"
        className="font-mono inline-flex items-center gap-2"
        style={{
          fontSize: 10,
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: "var(--rust)",
          textDecoration: "none",
        }}
      >
        ← Trees
      </Link>

      <header className="mt-5">
        <div className="eyebrow mb-3">Tree partner</div>
        <h1
          className="title-hero"
          style={{ fontSize: "clamp(34px, 6vw, 64px)" }}
        >
          {tree.common}
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
          {tree.scientific}
        </div>
        {tree.description && (
          <div
            className="font-body italic mt-2"
            style={{ fontSize: 15, color: "var(--ink-soft)" }}
          >
            {tree.description}
          </div>
        )}
      </header>

      {tree.image && (
        <figure className="mt-7" style={{ margin: 0 }}>
          <img
            src={tree.image.url}
            alt={tree.scientific}
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
            {tree.image.artist && (
              <>Photo: {truncate(tree.image.artist, 80)} · </>
            )}
            {tree.image.license ?? "Wikimedia Commons"}
            {tree.image.sourceUrl && (
              <>
                {" · "}
                <a
                  href={tree.image.sourceUrl}
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
      )}

      <div className="lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-12 mt-10">
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
            Identification
          </div>
          <p
            className="font-body"
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: "var(--ink)",
            }}
          >
            {tree.summary ??
              "No summary available. See Wikipedia for full identification details."}
          </p>
          {tree.pageUrl && (
            <a
              href={tree.pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono inline-block mt-4"
              style={{
                fontSize: 10,
                letterSpacing: "0.22em",
                color: "var(--rust)",
                textTransform: "uppercase",
                textDecoration: "underline",
                textDecorationStyle: "dotted",
              }}
            >
              Full Wikipedia article ↗
            </a>
          )}
        </section>

        <section className="mt-8 lg:mt-0">
          <div
            className="font-mono mb-3"
            style={{
              fontSize: 10,
              letterSpacing: "0.28em",
              color: "var(--rust)",
              textTransform: "uppercase",
            }}
          >
            Hosts {mushrooms.length} mushroom
            {mushrooms.length === 1 ? "" : "s"}
          </div>
          {mushrooms.length === 0 ? (
            <p
              className="font-body italic"
              style={{ fontSize: 14, color: "var(--ink-soft)" }}
            >
              No catalog entries reference this tree yet.
            </p>
          ) : (
            <ul className="space-y-2.5">
              {mushrooms.map((m) => (
                <li key={m.id}>
                  <Link
                    href={`/catalog/${m.id}`}
                    className="block"
                    style={{
                      padding: "10px 14px",
                      border: "1px solid var(--line)",
                      borderRadius: 12,
                      textDecoration: "none",
                      color: "inherit",
                      background: "rgba(255,255,255,0.22)",
                    }}
                  >
                    <div
                      className="font-display italic"
                      style={{
                        fontSize: 17,
                        fontWeight: 350,
                        color: "var(--moss)",
                        lineHeight: 1.1,
                      }}
                    >
                      {m.commonNames[0]}
                    </div>
                    <div
                      className="font-display italic mt-0.5"
                      style={{
                        fontSize: 13,
                        color: "var(--rust)",
                        opacity: 0.85,
                      }}
                    >
                      {m.scientific}
                    </div>
                    <div
                      className="font-mono mt-1.5"
                      style={{
                        fontSize: 9,
                        letterSpacing: "0.18em",
                        color: "var(--ink-soft)",
                        textTransform: "uppercase",
                        opacity: 0.7,
                      }}
                    >
                      {m.trophicMode} · {m.edibility.replace(/-/g, " ")}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

function truncate(s: string, max: number) {
  if (s.length <= max) return s;
  return s.slice(0, max - 1).trimEnd() + "…";
}
