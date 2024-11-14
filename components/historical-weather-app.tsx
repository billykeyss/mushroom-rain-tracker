"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import dayjs from "dayjs";
import type { LatLngExpression, LeafletMouseEvent } from "leaflet";
import { Icon } from "leaflet";
import { useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Material-UI pin icon for Leaflet
const pinIcon = new Icon({
  iconUrl:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FF0000' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
});

// const API_KEY = process.env.NEXT_PUBLIC_TOMORROW_API_KEY;
const API_KEY = "0pTh9b5wUYK8sjfWIjh0VKMDUORJz49V";

interface HistoricalWeatherData {
  time: string;
  temperature: number;
  precipitation: number;
  humidity: number;
}

interface WeatherInterval {
  startTime: string;
  values: {
    temperature: number;
    precipitationIntensity: number;
    humidity: number;
  };
}

interface WeatherApiResponse {
  data: {
    timelines: Array<{
      intervals: WeatherInterval[];
    }>;
  };
}

export default function WeatherApp() {
  const [lat, setLat] = useState<string>("");
  const [lon, setLon] = useState<string>("");
  const [weatherData, setWeatherData] = useState<HistoricalWeatherData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchHistoricalWeatherData = async (lat: number, lon: number) => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = API_KEY;
      if (!apiKey) {
        throw new Error("Tomorrow.io API key is missing.");
      }

      // Step 1: Define the date range for historical data
      const endDate = dayjs().toISOString();
      const startDate = dayjs().subtract(1, "day").toISOString();

      // Step 2: Fetch historical data from Tomorrow.io
      const weatherResponse = await fetch(
        `https://api.tomorrow.io/v4/timelines?location=${lat},${lon}&fields=temperature,precipitationIntensity,humidity&timesteps=1d&startTime=${startDate}&endTime=${endDate}&units=metric`,

        // `https://api.tomorrow.io/v4/timelines?location=${lat},${lon}&fields=temperature,precipitationIntensity,humidity&timesteps=1d&units=metric`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            apikey: apiKey,
          },
        }
      );

      if (!weatherResponse.ok) {
        const errorMessage = await weatherResponse.text();
        throw new Error(`Failed to fetch weather data: ${errorMessage}`);
      }

      const weatherData = await weatherResponse.json();
      const transformedData = (
        weatherData as WeatherApiResponse
      ).data.timelines[0].intervals.map((interval: WeatherInterval) => ({
        time: interval.startTime,
        temperature: interval.values.temperature,
        precipitation: interval.values.precipitationIntensity || 0,
        humidity: interval.values.humidity,
      }));

      console.log("Weather Data:", weatherData);
      console.log("Transformed Data:", transformedData);

      setWeatherData(transformedData);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    if (lat && lon) {
      await fetchHistoricalWeatherData(parseFloat(lat), parseFloat(lon));
    }
  };

  const MapEvents = () => {
    useMapEvents({
      click(e: LeafletMouseEvent) {
        setLat(e.latlng.lat.toFixed(6));
        setLon(e.latlng.lng.toFixed(6));
        fetchHistoricalWeatherData(e.latlng.lat, e.latlng.lng);
      },
    });
    return null;
  };

  const center: LatLngExpression = [37.788081, -122.277832];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Weather App</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            type="text"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            placeholder="Latitude"
          />
          <Input
            type="text"
            value={lon}
            onChange={(e) => setLon(e.target.value)}
            placeholder="Longitude"
          />
        </div>
        <Button type="submit" className="mt-2">
          Get Historical Weather
        </Button>
      </form>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Select Location on Map</CardTitle>
        </CardHeader>
        <CardContent>
          <MapContainer
            center={center}
            zoom={7}
            style={{ height: "400px" }}
            scrollWheelZoom={true}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapEvents />
            {lat && lon && (
              <Marker
                position={[parseFloat(lat), parseFloat(lon)]}
                icon={pinIcon}
              />
            )}
          </MapContainer>
        </CardContent>
      </Card>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {weatherData.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-2">Historical Weather Data</h2>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Temperature and Precipitation</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weatherData}>
                  <XAxis dataKey="time" />
                  <YAxis yAxisId="left" orientation="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Bar
                    yAxisId="left"
                    dataKey="temperature"
                    fill="#8884d8"
                    name="Temperature (°C)"
                  />
                  <Bar
                    yAxisId="right"
                    dataKey="precipitation"
                    fill="#82ca9d"
                    name="Precipitation (mm)"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Detailed Weather Data</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Temperature (°C)</TableHead>
                    <TableHead>Humidity (%)</TableHead>
                    <TableHead>Precipitation (mm)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {weatherData.map((day) => (
                    <TableRow key={day.time}>
                      <TableCell>{day.time}</TableCell>
                      <TableCell>
                        {day.temperature?.toFixed(1) || "N/A"}
                      </TableCell>
                      <TableCell>{day.humidity || "N/A"}</TableCell>
                      <TableCell>{day.precipitation || "N/A"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
