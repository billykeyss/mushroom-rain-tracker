"use client";

import { useEffect, useRef } from "react";

interface MapProps {
  lat: string;
  lon: string;
  stationLat?: string;
  stationLon?: string;
  onLocationSelect: (lat: number, lon: number) => void;
}

export default function MapComponent({
  lat,
  lon,
  stationLat,
  stationLon,
  onLocationSelect,
}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const userMarkerRef = useRef<any>(null);
  const stationMarkerRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadLeaflet = async () => {
      if (!window.L) {
        const linkEl = document.createElement("link");
        linkEl.rel = "stylesheet";
        linkEl.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(linkEl);

        const scriptEl = document.createElement("script");
        scriptEl.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        document.head.appendChild(scriptEl);

        await new Promise((resolve) => (scriptEl.onload = resolve));
      }

      if (mapRef.current && !mapInstanceRef.current) {
        const L = window.L;
        const position: [number, number] =
          lat && lon
            ? [parseFloat(lat), parseFloat(lon)]
            : [37.7749, -122.4194];

        // Create custom icons
        const redIcon = L.divIcon({
          html: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF0000">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          `,
          className: "",
          iconSize: [24, 24],
          iconAnchor: [12, 24],
        });

        const blueIcon = L.divIcon({
          html: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#0000FF">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          `,
          className: "",
          iconSize: [24, 24],
          iconAnchor: [12, 24],
        });

        // Initialize map
        mapInstanceRef.current = L.map(mapRef.current).setView(position, 10);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapInstanceRef.current);

        // Add user-selected location marker (red)
        if (lat && lon) {
          userMarkerRef.current = L.marker([parseFloat(lat), parseFloat(lon)], {
            icon: redIcon,
          }).addTo(mapInstanceRef.current);
        }

        // Add station location marker (blue)
        if (stationLat && stationLon) {
          stationMarkerRef.current = L.marker(
            [parseFloat(stationLat), parseFloat(stationLon)],
            {
              icon: blueIcon,
            }
          ).addTo(mapInstanceRef.current);
        }

        // Add click handler
        mapInstanceRef.current.on("click", (e: any) => {
          onLocationSelect(e.latlng.lat, e.latlng.lng);
        });
      }
    };

    loadLeaflet();

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [lat, lon, stationLat, stationLon, onLocationSelect]);

  // Update markers when coordinates change
  useEffect(() => {
    if (!mapInstanceRef.current || !window.L) return;

    const L = window.L;

    // Update user marker
    if (lat && lon) {
      const position: [number, number] = [parseFloat(lat), parseFloat(lon)];

      if (userMarkerRef.current) {
        userMarkerRef.current.setLatLng(position);
      } else {
        const redIcon = L.divIcon({
          html: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF0000">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          `,
          className: "",
          iconSize: [24, 24],
          iconAnchor: [12, 24],
        });
        userMarkerRef.current = L.marker(position, { icon: redIcon }).addTo(
          mapInstanceRef.current
        );
      }
    }

    // Update station marker
    if (stationLat && stationLon) {
      const stationPosition: [number, number] = [
        parseFloat(stationLat),
        parseFloat(stationLon),
      ];

      if (stationMarkerRef.current) {
        stationMarkerRef.current.setLatLng(stationPosition);
      } else {
        const blueIcon = L.divIcon({
          html: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#0000FF">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          `,
          className: "",
          iconSize: [24, 24],
          iconAnchor: [12, 24],
        });
        stationMarkerRef.current = L.marker(stationPosition, {
          icon: blueIcon,
        }).addTo(mapInstanceRef.current);
      }
    }
  }, [lat, lon, stationLat, stationLon]);

  return <div ref={mapRef} style={{ height: "300px", width: "100%" }} />;
}
