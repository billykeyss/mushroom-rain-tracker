import { build } from "esbuild";
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT = path.join(ROOT, "out");

// Precache the same-origin app shell: every HTML page, Next static JS/CSS,
// icons, manifest, offline page. Photos live in GCS and are runtime-cached.
const INCLUDE = [
  /\.html$/i,
  /^_next\/static\/.+\.(js|css)$/i,
  /^icons\/.+\.png$/i,
  /^manifest\.webmanifest$/i,
];
const EXCLUDE = [/^sw\.js$/i, /\.map$/i, /^img\//i];

async function walk(dir, base = "") {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) out.push(...(await walk(path.join(dir, entry.name), rel)));
    else out.push(rel);
  }
  return out;
}

async function precacheEntries() {
  const files = await walk(OUT);
  const picked = files.filter(
    (f) => INCLUDE.some((re) => re.test(f)) && !EXCLUDE.some((re) => re.test(f)),
  );
  const entries = [];
  for (const rel of picked) {
    const buf = await readFile(path.join(OUT, rel));
    const revision = createHash("md5").update(buf).digest("hex");
    entries.push({ url: `/${rel}`, revision });
  }
  return entries.sort((a, b) => a.url.localeCompare(b.url));
}

const entries = await precacheEntries();
await build({
  entryPoints: [path.join(ROOT, "sw/index.ts")],
  outfile: path.join(OUT, "sw.js"),
  bundle: true,
  minify: true,
  format: "iife",
  target: "es2020",
  define: { __SERWIST_MANIFEST: JSON.stringify(entries) },
});
const bytes = entries.reduce((n, e) => n + e.url.length, 0);
console.log(`SW built: ${entries.length} precache entries (${bytes} url bytes) → out/sw.js`);
