import { test } from "node:test";
import assert from "node:assert/strict";
import { cappedThumbUrl, stripQuery, thumbWidth, hashUrl, extFor } from "./wikimedia-url.mjs";

test("stripQuery removes query string", () => {
  assert.equal(
    stripQuery("https://upload.wikimedia.org/x/Foo.jpg?utm_source=en"),
    "https://upload.wikimedia.org/x/Foo.jpg",
  );
});

test("thumbWidth detects rendition width", () => {
  assert.equal(
    thumbWidth("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Foo.jpg/330px-Foo.jpg"),
    330,
  );
  assert.equal(thumbWidth("https://upload.wikimedia.org/wikipedia/commons/3/3a/Foo.jpg"), null);
});

test("cappedThumbUrl from a direct file URL", () => {
  assert.equal(
    cappedThumbUrl("https://upload.wikimedia.org/wikipedia/commons/3/3a/Agaricus_campestris.jpg", 1280),
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Agaricus_campestris.jpg/1280px-Agaricus_campestris.jpg",
  );
});

test("cappedThumbUrl from an existing thumbnail URL (rewrites width)", () => {
  assert.equal(
    cappedThumbUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Agaricus_augustus_2011_G1.jpg/3840px-Agaricus_augustus_2011_G1.jpg", 1280),
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Agaricus_augustus_2011_G1.jpg/1280px-Agaricus_augustus_2011_G1.jpg",
  );
});

test("cappedThumbUrl strips query before deriving", () => {
  assert.equal(
    cappedThumbUrl("https://upload.wikimedia.org/wikipedia/commons/2/2a/Abies.jpg?utm_source=en", 1280),
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Abies.jpg/1280px-Abies.jpg",
  );
});

test("cappedThumbUrl rasterizes SVG to png rendition", () => {
  assert.equal(
    cappedThumbUrl("https://upload.wikimedia.org/wikipedia/commons/1/12/Map.svg", 1280),
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Map.svg/1280px-Map.svg.png",
  );
});

test("cappedThumbUrl returns null for non-Commons URLs", () => {
  assert.equal(cappedThumbUrl("https://example.com/x.jpg", 1280), null);
});

test("extFor returns lowercased extension", () => {
  assert.equal(extFor("https://upload.wikimedia.org/x/Foo.JPG"), "jpg");
  assert.equal(extFor("https://upload.wikimedia.org/x/Map.svg"), "svg");
});

test("hashUrl is stable and 12 hex chars", () => {
  const h = hashUrl("https://upload.wikimedia.org/x/Foo.jpg");
  assert.match(h, /^[0-9a-f]{12}$/);
  assert.equal(h, hashUrl("https://upload.wikimedia.org/x/Foo.jpg"));
});
