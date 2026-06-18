"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  lat: number | null;
  lon: number | null;
  onSelect: (lat: number, lon: number) => void;
}

declare global {
  interface Window {
    L: any;
  }
}

const PIN_HTML = `
<div style="position:relative;display:flex;flex-direction:column;align-items:center;">
  <div style="
    position:absolute;width:48px;height:48px;border-radius:50%;
    border:1px solid rgba(189,122,18,0.45);top:-13px;left:-13px;
    animation:mp 2.4s ease-out infinite;"></div>
  <div style="
    width:22px;height:22px;border-radius:50%;
    background:#bd7a12;
    box-shadow:
      0 0 0 3px rgba(250,245,233,0.9),
      0 0 0 8px rgba(189,122,18,0.25),
      0 6px 14px -3px rgba(44,38,32,0.5);"></div>
</div>
<style>
@keyframes mp {
  0%   { transform: scale(0.7); opacity: 0.8; }
  100% { transform: scale(1.6); opacity: 0; }
}
</style>
`;

// Year → fill colour. 2024/25 (1–2 years old) are prime morel years —
// keep them prominent. 2026 is fresh, useful for "where is it currently
// burning" context but no morels yet.
const BURN_STYLE: Record<number, { fill: string; stroke: string; fillOp: number }> = {
  2024: { fill: "#7d3418", stroke: "#7d3418", fillOp: 0.32 }, // rust-deep — prime
  2025: { fill: "#bd7a12", stroke: "#bd7a12", fillOp: 0.42 }, // chanterelle — peak
  2026: { fill: "#9a3a2a", stroke: "#9a3a2a", fillOp: 0.18 }, // cinnabar — fresh
};
const BURN_STYLE_DEFAULT = { fill: "#7d3418", stroke: "#7d3418", fillOp: 0.25 };

let burnsCache: any | null = null;
async function loadBurns(): Promise<any> {
  if (burnsCache) return burnsCache;
  const res = await fetch("/data/burns.geojson");
  if (!res.ok) throw new Error(`burns.geojson HTTP ${res.status}`);
  burnsCache = await res.json();
  return burnsCache;
}

export default function ForageMap({ lat, lon, onSelect }: Props) {
  const elRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const burnLayerRef = useRef<any>(null);

  const [showBurns, setShowBurns] = useState(false);
  const [burnCount, setBurnCount] = useState<number | null>(null);
  const [burnsLoading, setBurnsLoading] = useState(false);

  // Load Leaflet once
  useEffect(() => {
    if (typeof window === "undefined") return;

    let cancelled = false;
    const init = async () => {
      if (!window.L) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);

        await new Promise<void>((resolve) => {
          const s = document.createElement("script");
          s.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
          s.onload = () => resolve();
          document.head.appendChild(s);
        });
      }
      if (cancelled || !elRef.current || mapRef.current) return;

      const L = window.L;
      const start: [number, number] =
        lat != null && lon != null ? [lat, lon] : [37.9235, -122.5965];

      mapRef.current = L.map(elRef.current, {
        zoomControl: false,
        attributionControl: true,
      }).setView(start, 11);

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png",
        {
          attribution: "© OpenStreetMap · CARTO",
          maxZoom: 19,
        }
      ).addTo(mapRef.current);

      L.control.zoom({ position: "bottomright" }).addTo(mapRef.current);

      mapRef.current.on("click", (e: any) => {
        onSelect(e.latlng.lat, e.latlng.lng);
      });
    };

    init();
    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync marker + view when lat/lon change
  useEffect(() => {
    if (!mapRef.current || !window.L || lat == null || lon == null) return;
    const L = window.L;
    const pos: [number, number] = [lat, lon];

    if (!markerRef.current) {
      const icon = L.divIcon({
        html: PIN_HTML,
        className: "",
        iconSize: [22, 22],
        iconAnchor: [11, 11],
      });
      markerRef.current = L.marker(pos, { icon }).addTo(mapRef.current);
    } else {
      markerRef.current.setLatLng(pos);
    }
    mapRef.current.setView(pos, mapRef.current.getZoom(), { animate: true });
  }, [lat, lon]);

  // Burn perimeter layer — load on first toggle, add/remove on toggle
  useEffect(() => {
    if (!mapRef.current || !window.L) return;
    const L = window.L;
    const map = mapRef.current;
    let cancelled = false;

    const apply = async () => {
      if (!showBurns) {
        if (burnLayerRef.current) {
          map.removeLayer(burnLayerRef.current);
        }
        return;
      }
      // building the layer
      if (!burnLayerRef.current) {
        setBurnsLoading(true);
        try {
          const data = await loadBurns();
          if (cancelled) return;
          const layer = L.geoJSON(data, {
            style: (f: any) => {
              const y = Number(f?.properties?.year);
              const s = BURN_STYLE[y] ?? BURN_STYLE_DEFAULT;
              return {
                color: s.stroke,
                weight: 1,
                fillColor: s.fill,
                fillOpacity: s.fillOp,
              };
            },
            onEachFeature: (f: any, lyr: any) => {
              const p = f.properties || {};
              const name = String(p.name || "Unnamed fire").replace(/[<>]/g, "");
              const year = p.year ?? "?";
              const acres = p.acres
                ? Number(p.acres).toLocaleString() + " ac"
                : "—";
              const ageYrs = Number(p.year)
                ? Math.max(0, 2026 - Number(p.year))
                : null;
              const morelHint =
                ageYrs === 1 || ageYrs === 2
                  ? '<span style="color:#bd7a12;font-weight:600">★ prime morel window</span>'
                  : ageYrs === 0
                    ? '<span style="opacity:0.75">too fresh for morels</span>'
                    : '<span style="opacity:0.75">past peak morel window</span>';
              lyr.bindPopup(
                `<div style="font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size:11px; line-height:1.6;">
                   <div style="font-family: Newsreader, Spectral, Georgia, serif; font-size:16px; font-weight:500; letter-spacing:-0.01em;">${name}</div>
                   <div style="opacity:0.7; letter-spacing:0.08em; text-transform:uppercase; margin-top:2px;">${year} · ${acres}</div>
                   <div style="margin-top:6px;">${morelHint}</div>
                 </div>`,
              );
            },
          });
          burnLayerRef.current = layer;
          setBurnCount(data?.features?.length ?? 0);
        } catch (e) {
          console.warn("burn layer load failed", e);
          setBurnCount(0);
        } finally {
          setBurnsLoading(false);
        }
      }
      if (burnLayerRef.current) {
        burnLayerRef.current.addTo(map);
      }
    };

    apply();
    return () => {
      cancelled = true;
    };
  }, [showBurns]);

  return (
    <>
      <div
        ref={elRef}
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--parchment-deep)",
        }}
      />

      {/* Burn-perimeter toggle (top-right) */}
      <button
        type="button"
        onClick={() => setShowBurns((v) => !v)}
        className="font-mono"
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          zIndex: 1000,
          padding: "8px 12px",
          background: showBurns ? "var(--rust)" : "rgba(250,245,233,0.94)",
          color: showBurns ? "#faf5e9" : "var(--ink)",
          border: showBurns
            ? "1px solid var(--rust-deep)"
            : "1px solid var(--line)",
          borderRadius: 999,
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          cursor: "pointer",
          boxShadow: "0 2px 8px -2px rgba(44,38,32,0.25)",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
        aria-pressed={showBurns}
      >
        <span
          style={{
            display: "inline-block",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: showBurns ? "#faf5e9" : "var(--rust)",
            opacity: burnsLoading ? 0.4 : 1,
          }}
        />
        {burnsLoading
          ? "Loading burns…"
          : showBurns
            ? `Burns ON${burnCount != null ? ` · ${burnCount}` : ""}`
            : "Show burns"}
      </button>

      {/* Burn legend (only when on) */}
      {showBurns && !burnsLoading && burnCount != null && burnCount > 0 && (
        <div
          className="font-mono"
          style={{
            position: "absolute",
            top: 56,
            right: 12,
            zIndex: 1000,
            padding: "10px 14px",
            background: "rgba(250,245,233,0.94)",
            border: "1px solid var(--line)",
            borderRadius: 10,
            fontSize: 9.5,
            letterSpacing: "0.08em",
            color: "var(--ink-soft)",
            lineHeight: 1.6,
            boxShadow: "0 2px 8px -2px rgba(44,38,32,0.18)",
          }}
        >
          <div
            style={{
              fontSize: 9,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              opacity: 0.7,
              marginBottom: 6,
            }}
          >
            Wildfire perimeters
          </div>
          {[2024, 2025, 2026].map((y) => {
            const s = BURN_STYLE[y];
            const age = 2026 - y;
            const note =
              age === 1 || age === 2 ? "morel window" : age === 0 ? "fresh" : "";
            return (
              <div
                key={y}
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                <span
                  style={{
                    width: 14,
                    height: 10,
                    background: s.fill,
                    opacity: s.fillOp + 0.35,
                    border: `1px solid ${s.stroke}`,
                    borderRadius: 2,
                  }}
                />
                <span>{y}</span>
                {note && (
                  <span style={{ opacity: 0.65, fontStyle: "italic" }}>
                    {note}
                  </span>
                )}
              </div>
            );
          })}
          <div
            style={{
              marginTop: 6,
              opacity: 0.55,
              fontSize: 8.5,
              letterSpacing: "0.1em",
            }}
          >
            ≥500 ac · NIFC
          </div>
        </div>
      )}
    </>
  );
}
