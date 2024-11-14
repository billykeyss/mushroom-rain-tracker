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
import type { LatLngExpression, LeafletMouseEvent } from "leaflet";
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

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

interface WeatherData {
  timezone: string;
  daily: Array<{
    dt: number;
    temp: { day: number };
    humidity: number;
    rain?: number;
  }>;
}

export default function WeatherApp() {
  const [lat, setLat] = useState<string>("");
  const [lon, setLon] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherData = async (lat: number, lon: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=${API_KEY}`
      );
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to fetch weather data: ${errorMessage}`);
      }
      const data: WeatherData = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      console.error(err); // Log the error for debugging
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    if (lat && lon) {
      await fetchWeatherData(parseFloat(lat), parseFloat(lon));
    } else if (city) {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );
        const data = await res.json();
        if (data.coord) {
          fetchWeatherData(data.coord.lat, data.coord.lon);
        } else {
          setError("City not found");
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      }
    }
  };

  const MapEvents = () => {
    useMapEvents({
      click(e: LeafletMouseEvent) {
        setLat(e.latlng.lat.toFixed(6));
        setLon(e.latlng.lng.toFixed(6));
        fetchWeatherData(e.latlng.lat, e.latlng.lng);
      },
    });
    return null;
  };

  const center: LatLngExpression = [0, 0];

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
          <Input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City Name"
          />
        </div>
        <Button type="submit" className="mt-2">
          Get Weather
        </Button>
      </form>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Select Location on Map</CardTitle>
        </CardHeader>
        <CardContent>
          <MapContainer
            center={center}
            zoom={2}
            style={{ height: "400px" }}
            scrollWheelZoom={true}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapEvents />
            {lat && lon && (
              <Marker position={[parseFloat(lat), parseFloat(lon)]} />
            )}
          </MapContainer>
        </CardContent>
      </Card>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {weatherData && (
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Weather Data for {weatherData.timezone}
          </h2>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Temperature and Precipitation</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weatherData.daily.slice(0, 10)}>
                  <XAxis
                    dataKey="dt"
                    tickFormatter={(unixTime: number) =>
                      new Date(unixTime * 1000).toLocaleDateString()
                    }
                  />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip />
                  <Legend />
                  <Bar
                    yAxisId="left"
                    dataKey="temp.day"
                    fill="#8884d8"
                    name="Temperature (°C)"
                  />
                  <Bar
                    yAxisId="right"
                    dataKey="rain"
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
                  {weatherData.daily.slice(0, 10).map((day) => (
                    <TableRow key={day.dt}>
                      <TableCell>
                        {new Date(day.dt * 1000).toLocaleDateString()}
                      </TableCell>
                      <TableCell>{day.temp.day.toFixed(1)}</TableCell>
                      <TableCell>{day.humidity}</TableCell>
                      <TableCell>{day.rain || 0}</TableCell>
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
