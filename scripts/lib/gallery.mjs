// Pure build-time helpers for assembling species identification galleries.

const ALLOWED = new Set([
  "cc0", "pd", "cc-by", "cc-by-sa", "cc-by-nc", "cc-by-nc-sa",
]);

/** Normalize a Commons LicenseShortName or iNat license_code to a canonical token. */
export function normalizeLicense(raw) {
  if (!raw) return null;
  const s = String(raw).toLowerCase().trim();
  if (s.includes("cc0") || s.includes("cc-zero") || s.includes("zero")) return "cc0";
  if (s.includes("public domain") || s === "pd" || s.includes("publicdomain")) return "pd";
  const m = s.match(/cc[\s_-]?by(?:[\s_-]?nc)?(?:[\s_-]?sa)?(?:[\s_-]?nd)?/);
  if (!m) return null;
  return m[0].replace(/[\s_]+/g, "-").replace(/-+/g, "-");
}

/** True if the license permits non-commercial reuse with attribution (no ND / ARR). */
export function licenseAllowed(raw) {
  const n = normalizeLicense(raw);
  if (!n) return false;
  if (n.includes("nd")) return false;
  return ALLOWED.has(n);
}

const KIND_PATTERNS = [
  ["spore-print", /spore[\s_-]?print|sporeprint/i],
  ["gills", /gill|lamella|underside|hymenium|pore[\s-]?surface|\bpores?\b/i],
  ["stem", /stipe|\bstem\b|volva|\bring\b|annulus|\bbase\b/i],
  ["cap", /pileus|\bcap\b/i],
  ["in-situ", /habitat|in[\s_-]?situ|growing|forest[\s-]?floor|in the wild/i],
];

/** Classify a photo's feature from its filename + description text. */
export function classifyKind(text) {
  const t = (text || "").toLowerCase();
  for (const [kind, re] of KIND_PATTERNS) if (re.test(t)) return kind;
  return "whole";
}

/** Choose up to `cap` images: lead first, cover distinct kinds, then backfill. */
export function selectImages(lead, candidates, { cap = 6, maxPerKind = 2 } = {}) {
  const chosen = [];
  const seen = new Set();
  const perKind = {};
  const add = (img) => {
    if (chosen.length >= cap) return;
    if (!img || !img.url || seen.has(img.url)) return;
    const k = img.kind || "whole";
    if ((perKind[k] || 0) >= maxPerKind) return;
    chosen.push(img);
    seen.add(img.url);
    perKind[k] = (perKind[k] || 0) + 1;
  };
  if (lead) add({ ...lead, kind: lead.kind || "whole" });
  // Commons before iNaturalist for cleaner attribution
  const sorted = [...candidates].sort(
    (a, b) => (a.source === b.source ? 0 : a.source === "commons" ? -1 : 1),
  );
  for (const img of sorted) if (!((img.kind || "whole") in perKind)) add(img); // cover kinds
  for (const img of sorted) add(img); // backfill
  return chosen;
}
