import type { MushroomSpecies } from "../species-types";
import { SYNTHESIZED_SPECIES } from "./lookalikes/synthesized.ts";

/**
 * Species added by the lookalike research pipeline (scripts/lookalikes/*).
 * Each entry is source-derived (Wikipedia / iNaturalist / GBIF), carries
 * `autoCompiled: true`, an honest `verification` block, and real `sources[]`.
 * Per-species `conditions` are genus/habitat-typical estimates, NOT field-
 * measured — see each `verification.disputeNotes`. Deadly/toxic drafts are held
 * in lib/catalog/pending-review/ and are NOT exported here until approved.
 *
 * PILOT_SPECIES were hand-authored as the pipeline pilot; SYNTHESIZED_SPECIES
 * are codegen'd from subagent-authored JSON (scripts/lookalikes/codegen-synthesized.mjs).
 */
const PILOT_SPECIES: MushroomSpecies[] = [
  {
    id: "suillus-luteus",
    commonNames: ["Slippery Jack", "Sticky Bun", "Pine Bolete"],
    scientific: "Suillus luteus",
    family: "Suillaceae",
    order: "Boletales",
    trophicMode: "mycorrhizal",
    mycorrhizalPartners: ["Pinus"],
    hostTrees: [{ common: "Pines", scientific: "Pinus" }],
    substrate: "Soil and needle duff under pines; ectomycorrhizal.",
    habitat:
      "Coniferous forests and pine plantations, fruiting gregariously in soil and needle litter after wet weather. Native to Eurasia and widely naturalized in North America wherever pines grow, including PNW pine stands and plantations.",
    elevationM: null,
    regionsPNW: [
      "Puget Sound lowlands",
      "Willamette Valley",
      "Vancouver Island",
      "Oregon Coast Range",
    ],
    fruitingMonths: [6, 7, 8, 9, 10, 11],
    peakMonths: [9, 10],
    conditions: {
      minRain7d: 20,
      idealDaysSinceRain: [5, 14],
      tempRangeC: [7, 18],
      humidityMinPct: 80,
    },
    identification: {
      cap: "Chestnut to dark or olive-brown, 4–10 cm (rarely to 20), conical then flattening; slimy and glossy with an easily peeled cuticle.",
      underside:
        "Pores, not gills: small, pale yellow ageing to olive/dark yellow; tubes 3–7 mm, adnate to slightly decurrent, readily peeled from the flesh.",
      stem: "5–10 cm tall, pale yellow with dark glandular dots above a prominent membranous ring (white above, brown-to-violet below); dingy white below the ring.",
      fleshColor: "White, unchanging when cut.",
      sporePrintColor: "Ochre to clay-brown.",
      odor: "Mild, not distinctive.",
      sizeCm: "Cap 4–10 cm; stem 5–10 × 2–3 cm.",
    },
    edibility: "edible",
    toxicityNotes:
      "The slimy cap cuticle can cause indigestion if not removed; peel before cooking. Otherwise considered safe when well cooked.",
    lookalikes: [
      {
        name: "Granulated Slippery Jack",
        scientific: "Suillus granulatus",
        catalogId: "suillus-granulatus",
        danger: "edible",
        keyFeatures: ["slimy cap, pine habitat","no veil/ring","milky droplets on young pores"],
        distinguishingFeature:
          "Same slimy cap and pine habitat but lacks a partial veil and ring; young pores exude milky droplets.",
      },
      {
        name: "Larch Bolete",
        scientific: "Suillus grevillei",
        catalogId: "suillus-grevillei",
        danger: "edible",
        keyFeatures: ["bright yellow-orange cap","with larch not pine"],
        distinguishingFeature:
          "Bright yellow to orange cap; grows specifically with larch rather than pine.",
      },
      {
        name: "Slimy Spike",
        scientific: "Gomphidius glutinosus",
        catalogId: "gomphidius-glutinosus",
        danger: "edible",
        keyFeatures: ["slimy cap","decurrent gills not pores"],
        distinguishingFeature:
          "Comparable slimy look from above, but has decurrent gills underneath rather than pores.",
      },
    ],
    culinary: {
      flavor: "Mild, pleasant.",
      preparation:
        "Edible; peel off the slimy cap cuticle, then use in soups, stews, or fried dishes. Lower-regarded than firmer boletes.",
      preservation: "Commonly sold and stored dried.",
    },
    conservationNotes: null,
    sources: [
      { name: "Wikipedia — Suillus luteus", url: "https://en.wikipedia.org/wiki/Suillus_luteus" },
      { name: "iNaturalist — Suillus luteus", url: "https://www.inaturalist.org/taxa/53488" },
      { name: "GBIF — Suillus luteus", url: "https://www.gbif.org/species/7777157" },
    ],
    spores: {
      lengthMicrons: [7, 10],
      widthMicrons: [3, 3.5],
      shape: "elongated ellipsoid",
      ornamentation: "smooth",
      reaction: null,
      notes: "Spore print ochre to clay-brown.",
    },
    autoCompiled: true,
    verification: {
      sourcesAgreeing: 3,
      lastVerified: "2026-06-22",
      consensus: "moderate",
      disputeNotes:
        "Auto-compiled from Wikipedia/iNaturalist/GBIF. Identification, edibility, and ecology are source-derived; the `conditions` (rain/temperature/humidity) are genus/habitat-typical estimates, not field-measured for this species.",
    },
  },
  {
    id: "hygrophoropsis-aurantiaca",
    commonNames: ["False Chanterelle"],
    scientific: "Hygrophoropsis aurantiaca",
    family: "Hygrophoropsidaceae",
    order: "Boletales",
    trophicMode: "saprotrophic",
    mycorrhizalPartners: null,
    hostTrees: [],
    substrate:
      "Conifer litter and decaying wood/woodchips; also heathland. Saprotrophic.",
    habitat:
      "Common in coniferous woodland and on woodchips in gardens and landscaping, fruiting in conifer litter from late summer into late autumn/early winter. Widespread across the PNW.",
    elevationM: null,
    regionsPNW: [
      "Olympic Peninsula",
      "Washington Cascades",
      "Oregon Coast Range",
      "Coastal British Columbia",
      "Vancouver Island",
    ],
    fruitingMonths: [8, 9, 10, 11, 12],
    peakMonths: [10, 11],
    conditions: {
      minRain7d: 20,
      idealDaysSinceRain: [5, 16],
      tempRangeC: [5, 16],
      humidityMinPct: 80,
    },
    identification: {
      cap: "Orange to orange-brown, 2–8 cm, soft and finely velvety, dry; margin inrolled then flat to slightly funnel-shaped.",
      underside:
        "True gills (not ridges): bright saffron-orange, crowded, repeatedly forked, and decurrent — the key separator from true chanterelles.",
      stem: "Orange, 1.5–8 × 0.5–1 cm, often off-centre and without a ring, frequently with a darker brown base.",
      fleshColor: "Soft and thin, white to yellow-orange.",
      sporePrintColor: "White to cream (spores dextrinoid).",
      odor: "Indistinct to faintly earthy or unpleasant.",
      sizeCm: "Cap 2–8 cm; stem 1.5–8 × 0.5–1 cm.",
    },
    edibility: "edible-with-caution",
    toxicityNotes:
      "Edibility reports vary; historically eaten but now widely regarded as poisonous, with documented gastrointestinal and occasional hallucinogenic/CNS reactions. Best avoided — especially by novices confusing it with true chanterelles.",
    lookalikes: [
      {
        name: "Pacific Golden Chanterelle",
        scientific: "Cantharellus formosus",
        catalogId: "cantharellus-formosus",
        danger: "edible",
        keyFeatures: ["blunt forked ridges not gills","firm pale flesh","apricot smell"],
        distinguishingFeature:
          "The prized PNW edible it mimics: true chanterelles have blunt, forked RIDGES (not true gills), firmer paler flesh, and a fruity apricot smell. False chanterelle has thin, crowded, repeatedly forked TRUE gills, deeper orange colour, soft flesh, and no apricot odour.",
      },
      {
        name: "Golden Chanterelle",
        scientific: "Cantharellus cibarius",
        danger: "edible",
        keyFeatures: ["egg-yolk color","blunt decurrent ridges not gills","firm flesh","apricot smell"],
        distinguishingFeature:
          "Same ridge-not-gill distinction: egg-yolk colour, blunt decurrent ridges, firm flesh, apricot smell.",
      },
      {
        name: "Jack-o'-lantern",
        scientific: "Omphalotus olearius",
        danger: "toxic",
        keyFeatures: ["true non-forked gills","clustered on wood","orange","toxic"],
        distinguishingFeature:
          "Also orange, but has true straight (non-forked) gills, grows in clusters on wood, and is toxic.",
      },
    ],
    culinary: {
      flavor: "Indistinct.",
      preparation:
        "Best avoided. Despite historical use, reactions are reported and it is easily confused with true chanterelles.",
      preservation: null,
    },
    conservationNotes: null,
    sources: [
      { name: "Wikipedia — Hygrophoropsis aurantiaca", url: "https://en.wikipedia.org/wiki/Hygrophoropsis_aurantiaca" },
      { name: "iNaturalist — Hygrophoropsis aurantiaca", url: "https://www.inaturalist.org/taxa/63538" },
      { name: "GBIF — Hygrophoropsis aurantiaca", url: "https://www.gbif.org/species/2525710" },
    ],
    autoCompiled: true,
    verification: {
      sourcesAgreeing: 3,
      lastVerified: "2026-06-22",
      consensus: "moderate",
      disputeNotes:
        "Auto-compiled from Wikipedia/iNaturalist/GBIF. Edibility is genuinely disputed in the literature (treated here as edible-with-caution / best avoided). The `conditions` (rain/temperature/humidity) are genus/habitat-typical estimates, not field-measured for this species.",
    },
  },
];

export const GENERATED_CATALOG: MushroomSpecies[] = [
  ...PILOT_SPECIES,
  ...SYNTHESIZED_SPECIES,
];
