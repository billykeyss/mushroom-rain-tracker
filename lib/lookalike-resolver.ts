/**
 * Resolves a lookalike's free-text scientific name to a catalog species id.
 *
 * Used at BUILD time by scripts/match-lookalikes.mjs to propose the explicit
 * `catalogId` pointers that get baked into the catalog source data — not at
 * render time. Kept pure and dependency-free so it is trivially testable.
 */

/** Tokens that are qualifiers, not part of the binomial. */
const STOPWORDS = new Set([
  "spp", "sp", "group", "complex", "agg", "var", "subsp", "ssp",
  "sensu", "lato", "stricto", "auct", "amer", "formerly", "cf", "aff",
  "s", "l", "syn",
]);

/** Genus-level names (`Russula spp.`) cannot resolve to a single species. */
export function isGenusOnly(scientific: string): boolean {
  if (/\bspp?\.?\b/i.test(scientific)) return true;
  return binomialTokens(scientific).length < 2;
}

/** Lowercased, qualifier-stripped tokens of a scientific name. */
function binomialTokens(scientific: string): string[] {
  return scientific
    .toLowerCase()
    .replace(/\(.*?\)/g, " ") // drop parentheticals: "(= A. macrosporus)", "(L.) Lam."
    .replace(/=.*/, " ") // drop a trailing "= synonym" not in parens
    .replace(/[^a-z]+/g, " ") // punctuation/abbrev dots -> spaces
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOPWORDS.has(t)); // drop single-letter abbrevs ("A.") + qualifiers
}

/** Reduce any catalog/lookalike scientific name to its bare lowercased binomial. */
export function normalizeScientific(scientific: string): string {
  return binomialTokens(scientific).slice(0, 2).join(" ");
}

/**
 * Old/alternate binomials (normalized) that should resolve to a current catalog
 * species' binomial — used when a lookalike cites a synonym of a species that is
 * catalogued under its accepted name (avoids duplicate entries / dropped links).
 */
const SYNONYMS: Record<string, string> = {
  "pholiota mutabilis": "kuehneromyces mutabilis",
  "boletus rubripes": "caloboletus rubripes",
  "fomitopsis officinalis": "laricifomes officinalis",
  "chlorophyllum rachodes": "chlorophyllum rhacodes", // orthographic variant
  "boletus pulcherrimus": "rubroboletus pulcherrimus", // current accepted genus
};

export interface ResolvableSpecies {
  id: string;
  scientific: string;
}

/** Build a `resolve(scientific) -> id | null` closure from a catalog. */
export function buildResolver(
  catalog: ResolvableSpecies[],
): (scientific: string) => string | null {
  const byExact = new Map<string, string>();
  const byNormalized = new Map<string, string>();
  for (const s of catalog) {
    byExact.set(s.scientific.toLowerCase(), s.id);
    const norm = normalizeScientific(s.scientific);
    if (norm) byNormalized.set(norm, s.id);
  }
  return (scientific: string): string | null => {
    if (isGenusOnly(scientific)) return null;
    const exact = byExact.get(scientific.toLowerCase());
    if (exact) return exact;
    const norm = normalizeScientific(scientific);
    return byNormalized.get(SYNONYMS[norm] ?? norm) ?? null;
  };
}
