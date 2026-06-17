import Link from "next/link";
import { notFound } from "next/navigation";
import { PNW_CATALOG } from "@/lib/species-catalog";
import {
  TREE_CATALOG,
  TREES_BY_ID,
  type ConfusableNote,
  type TreeDetailImage,
  type TreeIdentification,
} from "@/lib/tree-catalog";
import { localImage } from "@/lib/image-src";

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

      {tree.images && tree.images.length > 1 ? (
        <PhotoGallery images={tree.images} scientific={tree.scientific} />
      ) : (
        tree.image && (
          <figure className="mt-7" style={{ margin: 0 }}>
            <img
              src={localImage(tree.image.url)}
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
        )
      )}

      {tree.identification && (
        <IdentificationBlock id={tree.identification} />
      )}

      {tree.confusableWith && tree.confusableWith.length > 0 && (
        <ConfusableBlock items={tree.confusableWith} />
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

/* ════════ Multi-photo gallery ════════ */

const KIND_LABEL: Record<TreeDetailImage["kind"], string> = {
  whole: "Whole tree",
  bark: "Bark",
  needles: "Needles",
  cone: "Cone",
  leaf: "Leaf",
  flower: "Flower",
  fruit: "Fruit",
  habitat: "Habitat",
};

function PhotoGallery({
  images,
  scientific,
}: {
  images: TreeDetailImage[];
  scientific: string;
}) {
  return (
    <section className="mt-7">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {images.map((img) => (
          <figure
            key={img.url}
            style={{ margin: 0, display: "flex", flexDirection: "column" }}
          >
            <a
              href={img.sourceUrl ?? img.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block" }}
            >
              <img
                src={localImage(img.thumb ?? img.url)}
                alt={`${scientific} — ${KIND_LABEL[img.kind]}`}
                loading="lazy"
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  borderRadius: 10,
                  background: "rgba(26,20,16,0.06)",
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
              {KIND_LABEL[img.kind]}
            </figcaption>
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
              {img.caption ?? ""}
            </figcaption>
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

/* ════════ Identification block ════════ */

function IdentificationBlock({ id }: { id: TreeIdentification }) {
  return (
    <section className="mt-10">
      <div
        className="font-mono mb-3"
        style={{
          fontSize: 10,
          letterSpacing: "0.28em",
          color: "var(--rust)",
          textTransform: "uppercase",
        }}
      >
        Field key
      </div>

      {id.keyTell && (
        <p
          className="font-display italic"
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: "var(--moss)",
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
            margin: "0 0 18px",
            paddingBottom: 14,
            borderBottom: "1px dotted var(--line)",
          }}
        >
          “{id.keyTell}”
        </p>
      )}

      <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
        {id.needles && (
          <IDRow label="Needles">
            {id.needles.perBundle && (
              <strong>{id.needles.perBundle} per fascicle</strong>
            )}
            {id.needles.lengthCm && <> · {id.needles.lengthCm} cm</>}
            {id.needles.color && <> · {id.needles.color}</>}
            {id.needles.persistenceYears && (
              <> · persists {id.needles.persistenceYears} yr</>
            )}
            {id.needles.notes && (
              <span
                className="font-body italic block"
                style={{ marginTop: 4, opacity: 0.85, fontSize: 14 }}
              >
                {id.needles.notes}
              </span>
            )}
          </IDRow>
        )}

        {id.bark && (
          <IDRow label="Bark">
            <strong>{id.bark.pattern ?? "—"}.</strong>{" "}
            <span style={{ fontStyle: "italic" }}>{id.bark.description}</span>
          </IDRow>
        )}

        {id.cones && (
          <IDRow label="Cones">
            {id.cones.sizeCm && <strong>{id.cones.sizeCm} cm</strong>}
            {id.cones.behavior && <> · {id.cones.behavior}</>}
            <span
              className="font-body italic block"
              style={{ marginTop: 4, opacity: 0.85, fontSize: 14 }}
            >
              {id.cones.description}
            </span>
          </IDRow>
        )}

        {id.crown && <IDRow label="Crown">{id.crown}</IDRow>}

        {(id.matureHeightM || id.matureDbhCm) && (
          <IDRow label="Mature size">
            {id.matureHeightM && <strong>{id.matureHeightM} m</strong>}
            {id.matureHeightM && id.matureDbhCm && <> tall · </>}
            {id.matureDbhCm && (
              <>
                <strong>{id.matureDbhCm} cm</strong> trunk
              </>
            )}
          </IDRow>
        )}

        {(id.range || id.elevationM) && (
          <IDRow label="Range">
            {id.range && <>{id.range}</>}
            {id.elevationM && (
              <span
                className="font-mono block"
                style={{
                  marginTop: 4,
                  fontSize: 11,
                  letterSpacing: "0.06em",
                  color: "var(--ink-soft)",
                }}
              >
                {id.elevationM.min}–{id.elevationM.max} m
              </span>
            )}
          </IDRow>
        )}
      </dl>
    </section>
  );
}

function IDRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt
        className="font-mono"
        style={{
          fontSize: 9.5,
          letterSpacing: "0.22em",
          color: "var(--ink-soft)",
          textTransform: "uppercase",
          marginBottom: 4,
          opacity: 0.7,
        }}
      >
        {label}
      </dt>
      <dd
        className="font-body"
        style={{
          fontSize: 15,
          color: "var(--ink)",
          lineHeight: 1.45,
          margin: 0,
        }}
      >
        {children}
      </dd>
    </div>
  );
}

/* ════════ Confusables block ════════ */

function ConfusableBlock({ items }: { items: ConfusableNote[] }) {
  const tellsByTree = items
    .map((i) => ({ note: i, target: TREES_BY_ID.get(i.treeId) }))
    .filter((x) => x.target);

  if (!tellsByTree.length) return null;

  return (
    <section className="mt-10 pt-2">
      <div
        className="font-mono mb-3"
        style={{
          fontSize: 10,
          letterSpacing: "0.28em",
          color: "var(--rust)",
          textTransform: "uppercase",
        }}
      >
        Often confused with
      </div>
      <ul className="space-y-3">
        {tellsByTree.map(({ note, target }) => (
          <li key={note.treeId}>
            <Link
              href={`/trees/${note.treeId}`}
              className="block"
              style={{
                padding: 16,
                border: "1px solid var(--line)",
                borderRadius: 12,
                textDecoration: "none",
                color: "inherit",
                background: "rgba(255,255,255,0.22)",
              }}
            >
              <div className="flex items-baseline gap-3">
                <div
                  className="font-display italic"
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: "var(--moss)",
                    lineHeight: 1.1,
                  }}
                >
                  {target!.common}
                </div>
                <div
                  className="font-display italic"
                  style={{
                    fontSize: 14,
                    color: "var(--rust)",
                    opacity: 0.85,
                  }}
                >
                  {target!.scientific}
                </div>
              </div>
              <p
                className="font-body mt-2"
                style={{
                  fontSize: 14.5,
                  color: "var(--ink)",
                  lineHeight: 1.45,
                  margin: 0,
                }}
              >
                {note.distinguishingFeature}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
