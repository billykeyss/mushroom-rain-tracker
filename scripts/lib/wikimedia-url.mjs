import { createHash } from "node:crypto";

export function stripQuery(url) {
  const i = url.indexOf("?");
  return i === -1 ? url : url.slice(0, i);
}

/** Pixel width if `url` is a `…/<n>px-Name.ext` thumbnail rendition, else null. */
export function thumbWidth(url) {
  const m = stripQuery(url).match(/\/(\d+)px-[^/?]+$/);
  return m ? Number.parseInt(m[1], 10) : null;
}

/** Parse a Commons upload URL into { a, b, file }, or null if unrecognized. */
function parseCommons(cleanUrl) {
  let m = cleanUrl.match(
    /\/wikipedia\/commons\/thumb\/([0-9a-f])\/([0-9a-f]{2})\/([^/]+)\/\d+px-[^/]+$/i,
  );
  if (m) return { a: m[1], b: m[2], file: m[3] };
  m = cleanUrl.match(/\/wikipedia\/commons\/([0-9a-f])\/([0-9a-f]{2})\/([^/?]+)$/i);
  if (m) return { a: m[1], b: m[2], file: m[3] };
  return null;
}

/** Build a `<width>px` thumbnail rendition URL for a Commons image, or null. */
export function cappedThumbUrl(url, width) {
  const parsed = parseCommons(stripQuery(url));
  if (!parsed) return null;
  const { a, b, file } = parsed;
  const rend = /\.svg$/i.test(file) ? `${file}.png` : file;
  return `https://upload.wikimedia.org/wikipedia/commons/thumb/${a}/${b}/${file}/${width}px-${rend}`;
}

/** Lowercased file extension of the source URL (svg renditions are saved as png by the caller). */
export function extFor(url) {
  const clean = stripQuery(url);
  if (/\.svg$/i.test(clean)) return "svg";
  const m = clean.match(/\.([a-z0-9]+)$/i);
  return m ? m[1].toLowerCase() : "jpg";
}

/** Stable 12-char hex id for a URL (used for local filenames). */
export function hashUrl(url) {
  return createHash("sha1").update(url).digest("hex").slice(0, 12);
}
