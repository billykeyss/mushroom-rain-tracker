"use client";

import dayjs from "dayjs";
import { DailyWeather } from "@/lib/weather";

export default function ForecastStrip({ days }: { days: DailyWeather[] }) {
  if (!days.length) return null;
  const today = dayjs().format("YYYY-MM-DD");
  const todayIdx = Math.max(
    0,
    days.findIndex((d) => d.time === today)
  );
  const window = days.slice(
    Math.max(0, todayIdx - 1),
    Math.max(0, todayIdx - 1) + 7
  );
  const maxRain = Math.max(...window.map((d) => d.precipitation), 1);

  return (
    <div className="grid grid-cols-7 gap-[2px]">
      {window.map((d) => {
        const isToday = d.time === today;
        const barH = Math.max(2, (d.precipitation / maxRain) * 26);
        return (
          <div
            key={d.time}
            className="text-center py-2 px-0.5 rounded-lg"
            style={{
              background: isToday ? "var(--moss)" : "transparent",
              color: isToday ? "var(--parchment)" : "var(--moss)",
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: 8.5,
                letterSpacing: "0.14em",
                opacity: isToday ? 0.7 : 0.55,
                marginBottom: 4,
              }}
            >
              {dayjs(d.time).format("ddd").toUpperCase()}
            </div>
            <div
              className="font-display"
              style={{ fontSize: 16, fontWeight: 400, marginBottom: 6 }}
            >
              {dayjs(d.time).format("D")}
            </div>
            <div className="h-7 flex flex-col justify-end items-center">
              <div
                style={{
                  width: 4,
                  height: barH,
                  borderRadius: 2,
                  background: isToday ? "var(--cap)" : "var(--rain)",
                  opacity: d.precipitation < 0.5 ? 0.25 : 1,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
