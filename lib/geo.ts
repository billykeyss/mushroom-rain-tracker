"use client";

export interface GpsFix {
  lat: number;
  lon: number;
  /** Horizontal accuracy in metres (lower = better). */
  accuracy: number;
}

/** Wrap navigator.geolocation.getCurrentPosition as a promise. */
export function getCurrentGps(): Promise<GpsFix> {
  return new Promise((resolve, reject) => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      return reject(new Error("Geolocation not available on this device"));
    }
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        resolve({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        }),
      (err) => reject(err),
      { enableHighAccuracy: true, timeout: 12_000, maximumAge: 0 },
    );
  });
}

/** Format a lat/lon pair for display. */
export function formatLatLon(lat: number, lon: number, precision = 4): string {
  const latStr = `${Math.abs(lat).toFixed(precision)}°${lat >= 0 ? "N" : "S"}`;
  const lonStr = `${Math.abs(lon).toFixed(precision)}°${lon >= 0 ? "E" : "W"}`;
  return `${latStr}, ${lonStr}`;
}
