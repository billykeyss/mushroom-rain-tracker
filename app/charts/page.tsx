"use client";

import dayjs from "dayjs";
import { useMemo, useState } from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Area,
  AreaChart,
} from "recharts";
import { useLocation } from "@/lib/location-context";
import { computeSporeScore, DailyWeather } from "@/lib/weather";

const METRICS = [
  { key: "rain", label: "Rain" },
  { key: "temp", label: "Temp" },
  { key: "humidity", label: "Humidity" },
  { key: "wind", label: "Wind" },
  { key: "pressure", label: "Pressure" },
] as const;
type MetricKey = (typeof METRICS)[number]["key"];

export default function ChartsPage() {
  const { weather, label, loading } = useLocation();
  const [active, setActive] = useState<MetricKey>("rain");

  const reading = useMemo(
    () => (weather.length ? computeSporeScore(weather) : null),
    [weather]
  );

  const today = dayjs().format("YYYY-MM-DD");

  return (
    <main className="relative z-10 px-6 pt-14 pb-6 lg:px-12 lg:pt-16 lg:max-w-[1320px]">
      <div className="eyebrow mb-3">
        {label || "—"} · {weather.length} days
      </div>
      <h1
        className="title-hero"
        style={{ fontSize: "clamp(34px, 7vw, 72px)" }}
      >
        The shape <em>of the season.</em>
      </h1>
      <p
        className="font-body italic mt-2"
        style={{ fontSize: 15, color: "var(--ink-soft)" }}
      >
        10 days back · 10 days forward · today marked in rust.
      </p>

      {/* mobile-only metric tabs */}
      <div className="lg:hidden flex gap-1.5 mt-5 mb-3 overflow-x-auto no-scrollbar pb-1">
        {METRICS.map((m) => (
          <button
            key={m.key}
            onClick={() => setActive(m.key)}
            className={`metric-tab${active === m.key ? " on" : ""}`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {loading && !weather.length && (
        <div
          className="text-center py-20 font-mono"
          style={{ fontSize: 11, letterSpacing: "0.22em", opacity: 0.6 }}
        >
          GATHERING DATA…
        </div>
      )}

      {weather.length > 0 && (
        <>
          {/* mobile single-chart view */}
          <div className="lg:hidden">
            {active === "rain" && <RainChart data={weather} today={today} />}
            {active === "temp" && <TempChart data={weather} today={today} />}
            {active === "humidity" && (
              <SingleLineChart
                data={weather}
                today={today}
                dataKey="humidity"
                unit="%"
                label="Humidity"
                color="var(--moss-mid)"
                fill="rgba(63, 82, 56, 0.15)"
              />
            )}
            {active === "wind" && (
              <SingleLineChart
                data={weather}
                today={today}
                dataKey="windSpeed"
                unit="km/h"
                label="Wind"
                color="var(--moss-soft)"
                fill="rgba(107, 125, 93, 0.18)"
              />
            )}
            {active === "pressure" && (
              <SingleLineChart
                data={weather}
                today={today}
                dataKey="pressure"
                unit="hPa"
                label="Pressure"
                color="var(--rain-deep)"
                fill="rgba(46, 68, 82, 0.15)"
              />
            )}
          </div>

          {/* desktop all-charts grid */}
          <div className="hidden lg:grid grid-cols-2 gap-6 mt-10">
            <RainChart data={weather} today={today} height={220} />
            <TempChart data={weather} today={today} height={220} />
            <SingleLineChart
              data={weather}
              today={today}
              dataKey="humidity"
              unit="%"
              label="Humidity"
              color="var(--moss-mid)"
              fill="rgba(63, 82, 56, 0.15)"
              height={220}
            />
            <SingleLineChart
              data={weather}
              today={today}
              dataKey="windSpeed"
              unit="km/h"
              label="Wind"
              color="var(--moss-soft)"
              fill="rgba(107, 125, 93, 0.18)"
              height={220}
            />
            <SingleLineChart
              data={weather}
              today={today}
              dataKey="pressure"
              unit="hPa"
              label="Pressure"
              color="var(--rain-deep)"
              fill="rgba(46, 68, 82, 0.15)"
              height={220}
            />
            {reading && <SummaryPanel reading={reading} weather={weather} />}
          </div>

          {reading && (
            <div className="lg:hidden grid grid-cols-3 gap-2.5 mt-5">
              <Tile
                num={`${countWetDays(weather)}/${weather.length}`}
                label="Wet days"
                tone="rain"
              />
              <Tile
                num={`${avgTemp(weather).toFixed(1)}°`}
                label="Avg temp"
                tone="rust"
              />
              <Tile
                num={`${reading.daysSinceRain}d`}
                label="Since rain"
                tone="moss"
              />
            </div>
          )}
        </>
      )}
    </main>
  );
}

function countWetDays(d: DailyWeather[]) {
  return d.filter((x) => x.precipitation >= 1).length;
}
function avgTemp(d: DailyWeather[]) {
  return d.reduce((s, x) => s + x.tempMean, 0) / d.length;
}

function Tile({
  num,
  label,
  tone,
}: {
  num: string;
  label: string;
  tone: "rain" | "rust" | "moss";
}) {
  const bg =
    tone === "rain"
      ? "rgba(72,100,118,0.1)"
      : tone === "rust"
        ? "rgba(161,74,42,0.1)"
        : "rgba(44,58,42,0.1)";
  const fg =
    tone === "rain"
      ? "var(--rain-deep)"
      : tone === "rust"
        ? "var(--rust-deep)"
        : "var(--moss)";
  return (
    <div className="p-3" style={{ background: bg, borderRadius: 14 }}>
      <div
        className="font-display"
        style={{
          fontWeight: 350,
          fontSize: 22,
          color: fg,
          lineHeight: 1,
        }}
      >
        {num}
      </div>
      <div
        className="font-mono mt-1.5"
        style={{
          fontSize: 8.5,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--ink-soft)",
        }}
      >
        {label}
      </div>
    </div>
  );
}

function SummaryPanel({
  reading,
  weather,
}: {
  reading: ReturnType<typeof computeSporeScore>;
  weather: DailyWeather[];
}) {
  return (
    <div className="card-paper" style={{ padding: 28 }}>
      <div
        className="font-mono mb-4"
        style={{
          fontSize: 9.5,
          letterSpacing: "0.24em",
          color: "var(--rust)",
          textTransform: "uppercase",
        }}
      >
        20-day summary
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-5">
        <SumStat
          num={reading.score}
          unit=""
          label="Spore score"
        />
        <SumStat
          num={`${countWetDays(weather)}/${weather.length}`}
          unit=""
          label="Wet days"
        />
        <SumStat
          num={avgTemp(weather).toFixed(1)}
          unit="°C"
          label="Avg temp"
        />
        <SumStat
          num={String(reading.daysSinceRain)}
          unit="d"
          label="Since rain"
        />
        <SumStat
          num={reading.rain7d.toFixed(0)}
          unit="mm"
          label="7-day rain"
        />
        <SumStat
          num={reading.humidityToday.toFixed(0)}
          unit="%"
          label="Today RH"
        />
      </div>
    </div>
  );
}

function SumStat({
  num,
  unit,
  label,
}: {
  num: string | number;
  unit: string;
  label: string;
}) {
  return (
    <div>
      <div
        className="font-display"
        style={{
          fontWeight: 350,
          fontSize: 32,
          color: "var(--moss)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {num}
        <sup
          className="font-mono"
          style={{
            fontSize: 12,
            marginLeft: 2,
            color: "var(--moss-soft)",
            top: 4,
          }}
        >
          {unit}
        </sup>
      </div>
      <div
        className="font-mono mt-1.5"
        style={{
          fontSize: 9,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--ink-soft)",
          opacity: 0.7,
        }}
      >
        {label}
      </div>
    </div>
  );
}

const sharedAxis = {
  axisLine: { stroke: "rgba(26,20,16,0.18)" },
  tickLine: false,
  tick: { fill: "var(--ink-soft)", fontSize: 9, fontFamily: "IBM Plex Mono" },
};

function chartTooltip(unit: string) {
  return (
    <Tooltip
      cursor={{ stroke: "var(--rust)", strokeWidth: 1, strokeDasharray: "3 3" }}
      contentStyle={{
        background: "rgba(240, 228, 200, 0.97)",
        border: "1px solid var(--line)",
        borderRadius: 10,
        fontFamily: "JetBrains Mono, monospace",
        fontSize: 10,
        color: "var(--moss)",
        letterSpacing: "0.04em",
      }}
      labelStyle={{
        color: "var(--ink-soft)",
        fontSize: 9,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        marginBottom: 4,
      }}
      formatter={(v: any) => [`${Number(v).toFixed(1)}${unit}`, ""]}
      labelFormatter={(l) => dayjs(l).format("ddd, MMM D")}
    />
  );
}

function ChartCard({
  title,
  reading,
  height,
  children,
}: {
  title: string;
  reading: string;
  height?: number;
  children: React.ReactNode;
}) {
  return (
    <div className="card-paper">
      <div className="flex justify-between items-baseline mb-3 px-1">
        <span
          className="font-display italic"
          style={{ fontSize: 17, fontWeight: 350, color: "var(--moss)" }}
        >
          {title}
        </span>
        <span
          className="font-display"
          style={{ fontSize: 22, fontWeight: 350, color: "var(--rust)" }}
        >
          {reading}
        </span>
      </div>
      <div style={{ width: "100%", height: height ?? 180 }}>{children}</div>
    </div>
  );
}

function RainChart({
  data,
  today,
  height,
}: {
  data: DailyWeather[];
  today: string;
  height?: number;
}) {
  const rain7 = data
    .filter((d) => {
      const diff = dayjs(today).diff(dayjs(d.time), "day");
      return diff >= 0 && diff < 7;
    })
    .reduce((s, d) => s + d.precipitation, 0);
  return (
    <ChartCard
      title="Precipitation"
      reading={`${rain7.toFixed(0)} mm · 7d`}
      height={height}
    >
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 12, right: 4, bottom: 22, left: -22 }}
        >
          <CartesianGrid stroke="rgba(26,20,16,0.06)" vertical={false} />
          <XAxis
            dataKey="time"
            {...sharedAxis}
            tickFormatter={(v) => dayjs(v).format("M/D")}
            interval={2}
          />
          <YAxis {...sharedAxis} width={42} />
          {chartTooltip(" mm")}
          <ReferenceLine
            x={today}
            stroke="var(--rust)"
            strokeWidth={1}
            strokeDasharray="3 3"
            label={{
              value: "TODAY",
              position: "top",
              fill: "var(--rust)",
              fontSize: 8,
              fontFamily: "IBM Plex Mono",
              letterSpacing: "0.2em",
            }}
          />
          <Bar
            dataKey="precipitation"
            fill="var(--rain)"
            radius={[2, 2, 0, 0]}
            name="Rain"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

function TempChart({
  data,
  today,
  height,
}: {
  data: DailyWeather[];
  today: string;
  height?: number;
}) {
  const todayDay = data.find((d) => d.time === today) ?? data[0];
  return (
    <ChartCard
      title="Temperature"
      reading={`${todayDay.tempMax.toFixed(0)}° max`}
      height={height}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 12, right: 4, bottom: 22, left: -22 }}
        >
          <CartesianGrid stroke="rgba(26,20,16,0.06)" vertical={false} />
          <XAxis
            dataKey="time"
            {...sharedAxis}
            tickFormatter={(v) => dayjs(v).format("M/D")}
            interval={2}
          />
          <YAxis {...sharedAxis} width={42} />
          {chartTooltip("°C")}
          <ReferenceLine
            x={today}
            stroke="var(--rust)"
            strokeWidth={1}
            strokeDasharray="3 3"
            label={{
              value: "TODAY",
              position: "top",
              fill: "var(--rust)",
              fontSize: 8,
              fontFamily: "IBM Plex Mono",
              letterSpacing: "0.2em",
            }}
          />
          <Line
            type="monotone"
            dataKey="tempMax"
            stroke="var(--rust)"
            strokeWidth={2}
            dot={{ r: 3, fill: "var(--rust)" }}
            name="High"
          />
          <Line
            type="monotone"
            dataKey="tempMin"
            stroke="rgba(125, 52, 24, 0.5)"
            strokeWidth={1.5}
            strokeDasharray="3 3"
            dot={false}
            name="Low"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

function SingleLineChart({
  data,
  today,
  dataKey,
  unit,
  label,
  color,
  fill,
  height,
}: {
  data: DailyWeather[];
  today: string;
  dataKey: keyof DailyWeather;
  unit: string;
  label: string;
  color: string;
  fill: string;
  height?: number;
}) {
  const todayDay = data.find((d) => d.time === today) ?? data[0];
  return (
    <ChartCard
      title={label}
      reading={`${Number(todayDay[dataKey]).toFixed(0)} ${unit}`}
      height={height}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 12, right: 4, bottom: 22, left: -22 }}
        >
          <CartesianGrid stroke="rgba(26,20,16,0.06)" vertical={false} />
          <XAxis
            dataKey="time"
            {...sharedAxis}
            tickFormatter={(v) => dayjs(v).format("M/D")}
            interval={2}
          />
          <YAxis {...sharedAxis} width={42} />
          {chartTooltip(unit)}
          <ReferenceLine
            x={today}
            stroke="var(--rust)"
            strokeWidth={1}
            strokeDasharray="3 3"
            label={{
              value: "TODAY",
              position: "top",
              fill: "var(--rust)",
              fontSize: 8,
              fontFamily: "IBM Plex Mono",
              letterSpacing: "0.2em",
            }}
          />
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={2}
            fill={fill}
            dot={{ r: 2.5, fill: color }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
