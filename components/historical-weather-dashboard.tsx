"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import dayjs from "dayjs";
import { useState } from "react";
import {
  Bar,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import dynamic from "next/dynamic";
import MapComponent from "./map-component";

declare global {
  interface Window {
    L: any;
  }
}

interface WeatherData {
  time: string;
  temperature: number;
  temperature_2m_min: number;
  temperature_2m_mean: number;
  precipitation: number;
  windSpeed: number;
  humidity: number;
  pressure: number;
}

const metricGroups = {
  temperature: [
    { key: "temperature", name: "Temperature (°C)", color: "#ff7c43" },
    {
      key: "temperature_2m_min",
      name: "Min Temperature (°C)",
      color: "#faa6ff",
    },
    {
      key: "temperature_2m_mean",
      name: "Mean Temperature (°C)",
      color: "#f25c54",
    },
  ],
  precipitation: [
    { key: "precipitation", name: "Precipitation (mm)", color: "#00b4d8" },
  ],
  wind: [{ key: "windSpeed", name: "Wind Speed (km/h)", color: "#4CAF50" }],
  humidity: [{ key: "humidity", name: "Humidity (%)", color: "#8884d8" }],
  pressure: [{ key: "pressure", name: "Pressure (hPa)", color: "#82ca9d" }],
};

// Make sure this matches your existing metric keys
const availableMetrics = Object.values(metricGroups).flat();

// Add this helper function
const parseCoordinateString = (
  input: string
): { lat: string; lon: string } | null => {
  // Match format (latitude, longitude)
  const match = input.match(
    /^\s*\(\s*(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)\s*\)\s*$/
  );
  if (match) {
    return {
      lat: match[1],
      lon: match[2],
    };
  }
  return null;
};

export default function HistoricalWeatherDashboard() {
  const [coordinateInput, setCoordinateInput] = useState<string>("");
  const [lat, setLat] = useState<string>("");
  const [lon, setLon] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [stationLocation, setStationLocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([
    "temperature",
    "precipitation",
    "windSpeed",
  ]);

  const fetchWeatherData = async (lat: number, lon: number) => {
    setLoading(true);
    setError(null);
    try {
      // Define the date range for both past and future data
      const pastStartDate = dayjs().subtract(10, "day").format("YYYY-MM-DD");
      const futureEndDate = dayjs().add(10, "day").format("YYYY-MM-DD");

      // Fetch data from Open-Meteo API for both past and future dates
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&start_date=${pastStartDate}&end_date=${futureEndDate}&daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean,precipitation_sum,windspeed_10m_max,relative_humidity_2m_mean,surface_pressure_mean&timezone=auto`
      );

      if (!weatherResponse.ok) {
        const errorMessage = await weatherResponse.text();
        throw new Error(`Failed to fetch weather data: ${errorMessage}`);
      }

      const weatherData = await weatherResponse.json();
      const transformedData = weatherData.daily.time.map(
        (time: string, index: number) => ({
          time,
          temperature: weatherData.daily.temperature_2m_max[index],
          temperature_2m_min: weatherData.daily.temperature_2m_min[index],
          temperature_2m_mean: weatherData.daily.temperature_2m_mean[index],
          precipitation: weatherData.daily.precipitation_sum[index] || 0,
          windSpeed: weatherData.daily.windspeed_10m_max[index] || 0,
          humidity: weatherData.daily.relative_humidity_2m_mean[index] || 0,
          pressure: weatherData.daily.surface_pressure_mean[index] || 0,
        })
      );

      console.log("Transformed Weather Data:", transformedData);

      setWeatherData(transformedData);
      setStationLocation({
        lat: weatherData.latitude,
        lon: weatherData.longitude,
      }); // Set station location from API response
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCoordinateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const coords = parseCoordinateString(coordinateInput);
    if (coords) {
      setLat(coords.lat);
      setLon(coords.lon);
      fetchWeatherData(parseFloat(coords.lat), parseFloat(coords.lon));
    }
  };

  return (
    <div className="container mx-auto p-1 sm:p-4">
      <div className="space-y-4">
        {/* Title with location info */}
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold">Weather Dashboard</h1>
          {weatherData.length > 0 && (
            <p className="text-muted-foreground">
              Lat: {lat}°, Lon: {lon}°
            </p>
          )}
        </div>

        {/* Location Input Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Location</CardTitle>
            <CardDescription>
              Enter coordinates in format (latitude, longitude) or select on map
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCoordinateSubmit} className="space-y-2">
              <Input
                type="text"
                value={coordinateInput}
                onChange={(e) => setCoordinateInput(e.target.value)}
                placeholder="(37.9512341, -122.2791672)"
                className="w-full"
              />
              <div className="grid grid-cols-2 gap-2">
                <Input
                  type="text"
                  value={lat}
                  onChange={(e) => setLat(e.target.value)}
                  placeholder="Latitude"
                  className="w-full"
                />
                <Input
                  type="text"
                  value={lon}
                  onChange={(e) => setLon(e.target.value)}
                  placeholder="Longitude"
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full">
                Get Weather Data
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Map Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">
              Select Location
            </CardTitle>
            <CardDescription>
              Click on the map or enter coordinates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] rounded-md overflow-hidden">
              <MapComponent
                lat={lat}
                lon={lon}
                stationLat={stationLocation?.lat.toString()}
                stationLon={stationLocation?.lon.toString()}
                onLocationSelect={(newLat, newLon) => {
                  setLat(newLat.toFixed(6));
                  setLon(newLon.toFixed(6));
                  fetchWeatherData(newLat, newLon);
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Loading and Error states */}
        {loading && <div className="text-center p-4">Loading...</div>}
        {error && <div className="text-red-500 text-center p-4">{error}</div>}

        {weatherData.length > 0 && (
          <>
            {/* Metrics Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">
                  Data Selection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="w-full">
                  <div className="flex flex-wrap gap-2">
                    {availableMetrics.map((metric) => (
                      <Button
                        key={metric.key}
                        variant={
                          selectedMetrics.includes(metric.key)
                            ? "default"
                            : "outline"
                        }
                        size="sm"
                        onClick={() => {
                          setSelectedMetrics((prev) =>
                            prev.includes(metric.key)
                              ? prev.filter((m) => m !== metric.key)
                              : [...prev, metric.key]
                          );
                        }}
                      >
                        {metric.name}
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">
                  Weather Data
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 sm:p-6">
                <div className="flex flex-col gap-1">
                  {/* Temperature Chart */}
                  {selectedMetrics.includes("temperature") && (
                    <div>
                      <h3 className="font-semibold text-lg mb-2 px-6">
                        Temperature
                      </h3>
                      <ResponsiveContainer width="100%" height={400}>
                        <LineChart
                          data={weatherData}
                          margin={{ top: 20, right: 50, bottom: 90, left: 50 }}
                        >
                          <XAxis
                            dataKey="time"
                            tick={(props) => {
                              const { x, y, payload } = props;
                              return (
                                <g transform={`translate(${x},${y})`}>
                                  <text
                                    x={0}
                                    y={0}
                                    dy={16}
                                    textAnchor="end"
                                    transform="rotate(-45)"
                                    style={{ fontSize: 12 }}
                                  >
                                    {dayjs(payload.value).format("MMM D")}
                                  </text>
                                </g>
                              );
                            }}
                            height={70}
                          />
                          <YAxis yAxisId="temperature" />
                          <Tooltip />
                          <Legend verticalAlign="top" height={36} />
                          <ReferenceLine
                            x={dayjs().format("YYYY-MM-DD")}
                            stroke="#666"
                            strokeDasharray="3 3"
                            label={{
                              value: "Today",
                              position: "top",
                              fill: "#666",
                            }}
                            yAxisId="temperature"
                          />
                          <Line
                            type="monotone"
                            dataKey="temperature"
                            yAxisId="temperature"
                            stroke="#ff7c43"
                            name="Temperature (°C)"
                            strokeWidth={2}
                            dot={{ r: 3 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  )}

                  {/* Precipitation Chart */}
                  {selectedMetrics.includes("precipitation") && (
                    <div>
                      <h3 className="font-semibold text-lg mb-2 px-6">
                        Precipitation
                      </h3>
                      <ResponsiveContainer width="100%" height={300}>
                        <ComposedChart
                          data={weatherData}
                          margin={{ top: 20, right: 50, bottom: 90, left: 50 }}
                        >
                          <XAxis
                            dataKey="time"
                            tick={(props) => {
                              const { x, y, payload } = props;
                              return (
                                <g transform={`translate(${x},${y})`}>
                                  <text
                                    x={0}
                                    y={0}
                                    dy={16}
                                    textAnchor="end"
                                    transform="rotate(-45)"
                                    style={{ fontSize: 12 }}
                                  >
                                    {dayjs(payload.value).format("MMM D")}
                                  </text>
                                </g>
                              );
                            }}
                            height={70}
                          />
                          <YAxis yAxisId="precipitation" />
                          <Tooltip />
                          <Legend verticalAlign="top" height={36} />
                          <ReferenceLine
                            x={dayjs().format("YYYY-MM-DD")}
                            stroke="#666"
                            strokeDasharray="3 3"
                            label={{
                              value: "Today",
                              position: "top",
                              fill: "#666",
                            }}
                            yAxisId="precipitation"
                          />
                          <Bar
                            yAxisId="precipitation"
                            dataKey="precipitation"
                            fill="#00b4d8"
                            name="Precipitation (mm)"
                            barSize={20}
                          />
                        </ComposedChart>
                      </ResponsiveContainer>
                    </div>
                  )}

                  {/* Wind Speed Chart */}
                  {selectedMetrics.includes("windSpeed") && (
                    <div>
                      <h3 className="font-semibold text-lg mb-2 px-6">
                        Wind Speed
                      </h3>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                          data={weatherData}
                          margin={{ top: 20, right: 50, bottom: 90, left: 50 }}
                        >
                          <XAxis
                            dataKey="time"
                            tick={(props) => {
                              const { x, y, payload } = props;
                              return (
                                <g transform={`translate(${x},${y})`}>
                                  <text
                                    x={0}
                                    y={0}
                                    dy={16}
                                    textAnchor="end"
                                    transform="rotate(-45)"
                                    style={{ fontSize: 12 }}
                                  >
                                    {dayjs(payload.value).format("MMM D")}
                                  </text>
                                </g>
                              );
                            }}
                            height={70}
                          />
                          <YAxis yAxisId="windSpeed" />
                          <Tooltip />
                          <Legend verticalAlign="top" height={36} />
                          <ReferenceLine
                            x={dayjs().format("YYYY-MM-DD")}
                            stroke="#666"
                            strokeDasharray="3 3"
                            label={{
                              value: "Today",
                              position: "top",
                              fill: "#666",
                            }}
                            yAxisId="windSpeed"
                          />
                          <Line
                            type="monotone"
                            dataKey="windSpeed"
                            yAxisId="windSpeed"
                            stroke="#4CAF50"
                            name="Wind Speed (km/h)"
                            strokeWidth={2}
                            dot={{ r: 3 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  )}

                  {/* Humidity Chart */}
                  {selectedMetrics.includes("humidity") && (
                    <div>
                      <h3 className="font-semibold text-lg mb-2 px-6">
                        Humidity
                      </h3>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                          data={weatherData}
                          margin={{ top: 20, right: 50, bottom: 90, left: 50 }}
                        >
                          <XAxis
                            dataKey="time"
                            tick={(props) => {
                              const { x, y, payload } = props;
                              return (
                                <g transform={`translate(${x},${y})`}>
                                  <text
                                    x={0}
                                    y={0}
                                    dy={16}
                                    textAnchor="end"
                                    transform="rotate(-45)"
                                    style={{ fontSize: 12 }}
                                  >
                                    {dayjs(payload.value).format("MMM D")}
                                  </text>
                                </g>
                              );
                            }}
                            height={70}
                          />
                          <YAxis yAxisId="humidity" />
                          <Tooltip />
                          <Legend verticalAlign="top" height={36} />
                          <ReferenceLine
                            x={dayjs().format("YYYY-MM-DD")}
                            stroke="#666"
                            strokeDasharray="3 3"
                            label={{
                              value: "Today",
                              position: "top",
                              fill: "#666",
                            }}
                            yAxisId="humidity"
                          />
                          <Line
                            type="monotone"
                            dataKey="humidity"
                            yAxisId="humidity"
                            stroke="#8884d8"
                            name="Humidity (%)"
                            strokeWidth={2}
                            dot={{ r: 3 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  )}

                  {/* Pressure Chart */}
                  {selectedMetrics.includes("pressure") && (
                    <div>
                      <h3 className="font-semibold text-lg mb-2 px-6">
                        Pressure
                      </h3>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                          data={weatherData}
                          margin={{ top: 20, right: 50, bottom: 90, left: 50 }}
                        >
                          <XAxis
                            dataKey="time"
                            tick={(props) => {
                              const { x, y, payload } = props;
                              return (
                                <g transform={`translate(${x},${y})`}>
                                  <text
                                    x={0}
                                    y={0}
                                    dy={16}
                                    textAnchor="end"
                                    transform="rotate(-45)"
                                    style={{ fontSize: 12 }}
                                  >
                                    {dayjs(payload.value).format("MMM D")}
                                  </text>
                                </g>
                              );
                            }}
                            height={70}
                          />
                          <YAxis yAxisId="pressure" />
                          <Tooltip />
                          <Legend verticalAlign="top" height={36} />
                          <ReferenceLine
                            x={dayjs().format("YYYY-MM-DD")}
                            stroke="#666"
                            strokeDasharray="3 3"
                            label={{
                              value: "Today",
                              position: "top",
                              fill: "#666",
                            }}
                            yAxisId="pressure"
                          />
                          <Line
                            type="monotone"
                            dataKey="pressure"
                            yAxisId="pressure"
                            stroke="#82ca9d"
                            name="Pressure (hPa)"
                            strokeWidth={2}
                            dot={{ r: 3 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Data Table */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">
                  Detailed Data
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="sticky left-0 bg-background whitespace-nowrap">
                          Date
                        </TableHead>
                        {availableMetrics.map((metric) => (
                          <TableHead
                            key={metric.key}
                            className="whitespace-nowrap"
                          >
                            {metric.name}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {weatherData.map((data, index) => (
                        <TableRow key={index}>
                          <TableCell className="sticky left-0 bg-background whitespace-nowrap">
                            {dayjs(data.time).format("MMM D, YYYY")}
                          </TableCell>
                          {availableMetrics.map((metric) => (
                            <TableCell
                              key={metric.key}
                              className="whitespace-nowrap"
                            >
                              {typeof data[metric.key as keyof typeof data] ===
                              "number"
                                ? Number(
                                    data[metric.key as keyof typeof data]
                                  ).toFixed(1)
                                : data[metric.key as keyof typeof data]}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
