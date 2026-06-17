"use client";

import { useEffect, useRef } from "react";

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

export default function ForageMap({ lat, lon, onSelect }: Props) {
  const elRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

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

      // Vintage-toned tiles via Stadia Stamen Watercolor; fallback to CartoDB
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

  return (
    <div
      ref={elRef}
      style={{
        position: "absolute",
        inset: 0,
        background: "var(--parchment-deep)",
      }}
    />
  );
}
