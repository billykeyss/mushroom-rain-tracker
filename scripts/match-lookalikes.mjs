/**
 * Bakes explicit `catalogId` pointers into lib/species-catalog.ts for every
 * lookalike whose scientific name resolves to a catalog species.
 *
 * Safe, idempotent codemod via a full-text regex. A lookalike object — single-
 * or multi-line — is the only place where `scientific: "…"` is immediately
 * followed by `danger:` (host-trees end after `scientific`; sources use `url:`;
 * species-level `scientific` is followed by `family:`). We insert/refresh a
 * `catalogId:` between them, reusing the existing separator so the original
 * single-line vs. multi-line formatting is preserved. Re-running is a no-op for
 * already-correct entries. Verify with `git diff` + the integrity test.
 *
 *   node --experimental-strip-types scripts/match-lookalikes.mjs
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { PNW_CATALOG } from "../lib/species-catalog.ts";
import { buildResolver, isGenusOnly } from "../lib/lookalike-resolver.ts";

const ROOT = path.resolve(import.meta.dirname, "..");
// Files holding species literals (the aggregator lib/species-catalog.ts has none).
const SOURCES = [
  path.join(ROOT, "lib/catalog/curated.ts"),
  path.join(ROOT, "lib/catalog/generated.ts"),
  path.join(ROOT, "lib/catalog/lookalikes/synthesized.ts"),
];

const resolve = buildResolver(PNW_CATALOG);

function unquote(literal) {
  try {
    return JSON.parse(`"${literal}"`);
  } catch {
    return literal;
  }
}

// g1 = `scientific: "…"`, g2 = separator (`, ` or `,\n      `), g3 = `danger:`.
// An existing `catalogId: "…",<sep>` between them is consumed so re-runs refresh it.
const LOOKALIKE =
  /(scientific: "(?:[^"\\]|\\.)*")(,\s*)(?:catalogId: "(?:[^"\\]|\\.)*",\s*)?(danger:)/g;

/** Index of [offset, speciesId] for each top-level catalog entry (`  id: "…"`). */
function speciesIdAt(src) {
  const marks = [];
  for (const m of src.matchAll(/^\s+id: "([^"]+)"/gm)) marks.push([m.index, m[1]]);
  return (offset) => {
    let id = null;
    for (const [at, sid] of marks) {
      if (at > offset) break;
      id = sid;
    }
    return id;
  };
}

async function main() {
  const stats = { total: 0, matched: 0, genusOnly: 0, selfLink: 0, unmatched: [] };

  for (const file of SOURCES) {
    let src;
    try {
      src = await readFile(file, "utf8");
    } catch {
      continue; // optional source
    }
    const parentAt = speciesIdAt(src);
    const next = src.replace(
      LOOKALIKE,
      (_full, sciField, sep, dangerKey, offset) => {
        stats.total++;
        const scientific = unquote(sciField.slice('scientific: "'.length, -1));
        const id = resolve(scientific);
        const passthrough = `${sciField}${sep}${dangerKey}`; // strips any stale catalogId
        if (id && id === parentAt(offset)) {
          stats.selfLink++; // a variety of the parent species — don't link to its own page
          return passthrough;
        }
        if (id) {
          stats.matched++;
          return `${sciField}${sep}catalogId: ${JSON.stringify(id)}${sep}${dangerKey}`;
        }
        if (isGenusOnly(scientific)) stats.genusOnly++;
        else stats.unmatched.push(scientific);
        return passthrough;
      },
    );
    if (next !== src) await writeFile(file, next);
  }

  const distinctUnmatched = [...new Set(stats.unmatched)].sort();
  console.log(`lookalike entries:        ${stats.total}`);
  console.log(`  matched -> catalogId:   ${stats.matched}`);
  console.log(`  self-link (skipped):    ${stats.selfLink}`);
  console.log(`  genus-only (skipped):   ${stats.genusOnly}`);
  console.log(`  unmatched (text-only):  ${stats.unmatched.length} (${distinctUnmatched.length} distinct)`);
  console.log(`\nUpdated ${SOURCES.map((f) => path.relative(ROOT, f)).join(", ")}. Review with: git diff`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
