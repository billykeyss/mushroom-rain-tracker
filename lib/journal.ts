"use client";

import { useEffect, useState } from "react";

export interface JournalEntry {
  id: string;
  date: string; // ISO date
  species: string;
  location: string;
  notes: string;
  lat?: number;
  lon?: number;
  score?: number;
  rain7d?: number;
}

const KEY = "mycelium.journal.v1";

const SEED: JournalEntry[] = [
  {
    id: "seed-1",
    date: "2026-05-14",
    species: "Golden chanterelle",
    location: "East Peak · 37.95°N",
    notes:
      "Cluster of seven below the live oak. 4 days after 18mm rainfall. Soil felt warm.",
    score: 76,
    rain7d: 18,
  },
  {
    id: "seed-2",
    date: "2026-04-29",
    species: "Black trumpet",
    location: "Bolinas Ridge · 38.04°N",
    notes:
      "Heavy duff under bay laurel. Three days after a soaking storm. Almost missed them.",
    score: 84,
    rain7d: 32,
  },
  {
    id: "seed-3",
    date: "2026-04-22",
    species: "Hedgehog (spiny milkcap?)",
    location: "Mt. Tam South · 37.91°N",
    notes:
      "Small flush along the fire road. Needed ID help. Posting to iNat.",
    score: 62,
    rain7d: 14,
  },
];

export function useJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        setEntries(JSON.parse(raw));
      } else {
        setEntries(SEED);
        localStorage.setItem(KEY, JSON.stringify(SEED));
      }
    } catch {
      setEntries(SEED);
    }
    setLoaded(true);
  }, []);

  const persist = (next: JournalEntry[]) => {
    setEntries(next);
    localStorage.setItem(KEY, JSON.stringify(next));
  };

  const add = (e: Omit<JournalEntry, "id">) => {
    const entry: JournalEntry = {
      ...e,
      id: `e-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    };
    persist([entry, ...entries]);
  };

  const remove = (id: string) => {
    persist(entries.filter((e) => e.id !== id));
  };

  return { entries, loaded, add, remove };
}
