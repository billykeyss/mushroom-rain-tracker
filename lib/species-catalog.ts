/**
 * AUTO-GENERATED. Edible mushroom catalog for the Western US.
 *
 * 70 species researched via Parallel.ai web searches against MykoWeb,
 * PNW Key Council, MushroomExpert.com, IUCN, USDA, Kuo & Trudell/Ammirati,
 * and peer-reviewed mycology literature. See each entry's `sources` field.
 *
 * Covers the Pacific Northwest, Sierra Nevada, California Coast, and
 * Great Basin. Filter by region via lib/region-context. Per-species
 * `conditions` are heuristic — derived from fruiting-trigger literature,
 * not field-measured. Treat as a starting point, not a guarantee.
 */

import type { MushroomSpecies } from "./species-types";

export const PNW_CATALOG: MushroomSpecies[] = [
{
  id: "agaricus-augustus",
  commonNames: [
    "The Prince",
    "Prince Mushroom",
    "Almond Mushroom (loose usage)"
  ],
  scientific: "Agaricus augustus",
  family: "Agaricaceae",
  order: "Agaricales",
  trophicMode: "saprotrophic",
  mycorrhizalPartners: null,
  hostTrees: [
    { common: "Western Redcedar", scientific: "Thuja plicata" },
    { common: "Sitka Spruce", scientific: "Picea sitchensis" },
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Western Hemlock", scientific: "Tsuga heterophylla" },
    { common: "Grand Fir", scientific: "Abies grandis" },
    { common: "Coast Live Oak / mixed hardwoods (occasional)", scientific: "Quercus spp." }
  ],
  substrate: "Humus-rich soil, deep conifer duff, leaf litter, well-rotted woodchips, bark mulch, compost piles, and disturbed/anthropogenic soils. Not wood-decaying in the strict sense - acts as a litter and humus saprotroph.",
  habitat: "Strongly associated with disturbed and anthropogenic ground: gardens, hedgerows, parks, urban landscaping mulch beds, trail edges, road verges, and compacted forest edges. Also fruits in undisturbed conifer forests under cedar, spruce, hemlock, and Douglas-fir, frequently emerging from deep duff. Often gregarious in clusters or arcs and tends to recur in the same spot year after year.",
  elevationM: { min: 0, max: 1800 },
  regionsPNW: [
    "Puget Sound lowlands and urban Seattle/Tacoma",
    "Portland metro and Willamette Valley",
    "Olympic Peninsula (coastal conifer forests)",
    "Oregon and Washington Coast Range",
    "Cascades (west slope, low to mid elevations)",
    "Southern Oregon mixed-conifer",
    "Coastal and southern British Columbia (incl. Vancouver Island)",
    "Inland Northwest (N. Idaho, NE Washington - more sporadic)"
  ],
  fruitingMonths: [5, 6, 7, 8, 9, 10, 11],
  peakMonths: [6, 7, 9, 10],
  conditions: {
    minRain7d: 10,
    idealDaysSinceRain: [3, 10],
    tempRangeC: [10, 24],
    humidityMinPct: 65
  },
  identification: {
    cap: "8-30 cm (sometimes to 40 cm), hemispherical to convex when young then broadly convex to nearly flat in age; dry, densely covered with concentrically arranged tawny to cinnamon-brown fibrillose scales on a pale yellowish to whitish background (the 'toasted-marshmallow' look); surface and flesh bruise slowly yellowish (mild reaction, not the intense chrome-yellow of Xanthodermati).",
    underside: "Free, crowded gills; pallid/whitish-grey when very young, soon turning pink, then maturing through chocolate-brown to dark blackish-brown as spores ripen. Never white at maturity.",
    stem: "10-25 cm long x 2-4 cm thick, equal or slightly bulbous at the base; whitish, smooth above the ring and conspicuously shaggy/scaly below it; bears a large, persistent, pendant skirt-like ring with brownish patches on the underside. Cut flesh may stain pale yellow, especially toward the base, but never bright chrome-yellow.",
    fleshColor: "Thick, firm, white; may slowly discolor pale yellowish on cutting, especially in the stem base. Lacks the immediate vivid chrome-yellow stain of A. xanthodermus.",
    sporePrintColor: "Dark chocolate brown to purple-brown (never white, pink, or green)",
    odor: "Strong, pleasant, sweet bitter-almond / anise / marzipan scent (diagnostic). Often noticeable from a distance and intensifies on cooking - reminiscent of almond extract or toasted marzipan. NOT phenolic, NOT inky, NOT like carbolic soap.",
    sizeCm: "Cap 8-30 cm; stem 10-25 cm tall x 2-4 cm thick; one of the largest Agaricus species."
  },
  edibility: "choice",
  toxicityNotes: "A choice edible for most foragers, but several caveats: (1) Agaricus species are well-documented heavy-metal and cadmium accumulators - avoid fruitings from roadsides, industrial sites, treated lawns, old orchards, and contaminated urban soils, since A. augustus's affinity for disturbed/anthropogenic ground places it in exactly these settings. (2) A small minority of individuals experience GI upset even with well-identified, well-cooked specimens. (3) Always cook thoroughly. (4) The single most important safety check is to rule out the phenolic-smelling Xanthodermatei lookalikes by odor and yellow-staining behavior before eating.",
  lookalikes: [
    {
      name: "Yellow-Staining Agaricus / Yellow-Stainer",
      scientific: "Agaricus xanthodermus",
      danger: "toxic",
      distinguishingFeature: "Smooth whitish cap (lacks the dense brown concentric scales of augustus); flesh at the stem base stains immediate, vivid chrome-yellow on cutting (fades to dingy brown); strong PHENOLIC / ink / carbolic-soap odor (especially at stem base and when cooked) - the opposite of augustus's sweet almond scent. Causes significant gastrointestinal illness."
    },
    {
      name: "Moller's Agaricus / Inky Agaricus",
      scientific: "Agaricus moelleri (= A. praeclaresquamosus, formerly A. placomyces sensu auct. amer.)",
      danger: "toxic",
      distinguishingFeature: "Cap covered with DARK GREY to blackish-brown small scales on a pale background (not warm tawny/cinnamon); flesh stains yellow at stem base; PHENOLIC / ink-like odor. Member of the toxic Xanthodermatei. Distinguish from augustus by greyer scale color, smaller stature, yellow-staining base, and the foul phenolic smell vs augustus's almond/anise scent."
    },
    {
      name: "Flat-topped Agaricus",
      scientific: "Agaricus praeclaresquamosus",
      danger: "toxic",
      distinguishingFeature: "Another phenolic Xanthodermatei member with dark grey-brown radial scales, yellow-staining stem base, and an inky/carbolic odor. Lacks the almond scent of augustus."
    },
    {
      name: "Almond Mushroom",
      scientific: "Agaricus subrufescens (= A. brasiliensis auct.)",
      danger: "edible",
      distinguishingFeature: "Also has a sweet almond/anise odor and similar reddish-brown scaly cap; generally smaller, scales finer and more uniformly reddish-brown, smaller spores (6-7.5 x 4-5 um), and tends to fruit in compost/woodchip piles. Edible (cultivated as a medicinal); no safety risk if confused."
    },
    {
      name: "Horse Mushroom",
      scientific: "Agaricus arvensis",
      danger: "edible",
      distinguishingFeature: "Whitish, smooth or slightly scaly cap (lacks dense brown scales of augustus), anise-almond odor, double cogwheel ring; grassland/pasture species rather than forest/duff. Edible."
    },
    {
      name: "Wood Mushroom",
      scientific: "Agaricus sylvicola",
      danger: "edible",
      distinguishingFeature: "Smaller, smooth whitish to cream cap that bruises faintly yellow; sweet anise odor; conifer-forest saprotroph. Edible but easier to confuse with the phenolic species - always confirm the sweet (not phenolic) smell."
    },
    {
      name: "Smooth Lepiota / Smooth Parasol",
      scientific: "Leucoagaricus leucothites (= Lepiota naucina)",
      danger: "GI-upset",
      distinguishingFeature: "Whitish cap, free gills, ring on stem - superficially Agaricus-like - but spore print is WHITE to pinkish-cream, not chocolate brown; gills stay pale pinkish, never going chocolate. Always take a spore print."
    },
    {
      name: "Destroying Angel",
      scientific: "Amanita ocreata / A. bisporigera-group",
      danger: "deadly",
      distinguishingFeature: "Pure white cap, WHITE gills that never turn pink or brown, WHITE spore print, sack-like volva at the stem base, ring on stem. Always check spore print color and look for a volva before eating any white-gilled / ringed mushroom. Spring-fruiting A. ocreata overlaps the early-season window of augustus in the PNW."
    }
  ],
  culinary: {
    flavor: "One of the most prized edible Agaricus - rich, nutty, sweet almond-marzipan aroma carries into cooking; flavor is meaty and deeply savory, often described as 'better than a portobello.' Young firm buttons are best; older specimens can be soft and bug-ridden.",
    preparation: "Slice and saute in butter or olive oil over medium-high heat to drive off water and concentrate flavor; outstanding on toast, in omelets, cream sauces, risotto, and pasta. The almond aroma pairs especially well with butter, cream, sherry, leeks, and roasted poultry. Always cook thoroughly - never eat raw. Discard maggoty stems (a common problem in this species).",
    preservation: "Dries very well and retains the marzipan aroma; rehydrated pieces and the soaking liquid both make excellent stock. Also sautees-and-freezes well. Duxelles freeze especially nicely. Pickling is less common but possible with young buttons."
  },
  conservationNotes: "Globally widespread, common, and not of conservation concern. In the PNW it is locally abundant in urban and suburban landscapes as well as conifer forests, and tolerates - even favors - human-disturbed habitats. No harvest restrictions. The primary stewardship concern is the species' tendency to bioaccumulate cadmium and other heavy metals from contaminated soils; foragers are advised to avoid roadsides, treated lawns, old industrial or orchard sites, and other urban locations with possible soil contamination.",
  sources: [
    { name: "MykoWeb - California Fungi: Agaricus augustus (M. Wood & F. Stevens)", url: "https://www.mykoweb.com/CAF/species/Agaricus_augustus.html" },
    { name: "MushroomExpert.com - Agaricus augustus (Michael Kuo)", url: "https://www.mushroomexpert.com/agaricus_augustus.html" },
    { name: "PNW Key Council / SVIMS - Key to Agaricus of the Pacific Northwest", url: "https://www.svims.ca/council/Agaric.htm" },
    { name: "Kerrigan, R.W. (2016) Agaricus of North America - Memoirs of the New York Botanical Garden Vol. 114", url: "https://www.nybgpress.org/products/agaricus-of-north-america" },
    { name: "Kerrigan, R.W. et al. (2005) Studies on the Xanthodermatei (Agaricus) - Mycologia 97(6):1292-1315", url: "https://doi.org/10.1080/15572536.2006.11832738" },
    { name: "PNW Fungi Forager - The Prince (Agaricus augustus) PNW Foraging Guide", url: "https://www.pnwfungiforager.com/post/the-prince-agaricus-augustus-pnw-foraging-guide-how-to-spot-the-almond-scented-toasted-marshma" },
    { name: "First Nature - Agaricus augustus, The Prince", url: "https://www.first-nature.com/fungi/agaricus-augustus.php" },
    { name: "iNaturalist - Agaricus augustus taxon page", url: "https://www.inaturalist.org/taxa/49547-Agaricus-augustus" },
    { name: "Wikipedia - Agaricus xanthodermus (lookalike reference)", url: "https://en.wikipedia.org/wiki/Agaricus_xanthodermus" },
    { name: "Wikipedia - Agaricus augustus", url: "https://en.wikipedia.org/wiki/Agaricus_augustus" }
  ]
}
,
{
  id: "agaricus-campestris",
  commonNames: ["Meadow Mushroom", "Field Mushroom", "Pink Bottom"],
  scientific: "Agaricus campestris",
  family: "Agaricaceae",
  order: "Agaricales",
  trophicMode: "saprotrophic",
  mycorrhizalPartners: null,
  hostTrees: [],
  substrate: "Grass thatch, decomposing organic matter, and rich soil in grasslands; not associated with woody substrates. Often in soils enriched by livestock/manure or longstanding turf.",
  habitat: "Open grassy habitats: pastures, meadows, lawns, road verges, parks, and old fields. Fruits alone, gregariously, or in arcs and fairy rings after sustained rain. Rarely found in woodland.",
  elevationM: { min: 0, max: 1500 },
  regionsPNW: [
    "Western Washington lowlands",
    "Puget Sound region",
    "Kitsap Peninsula",
    "Willamette Valley",
    "Oregon coast pastures",
    "Southern British Columbia (Fraser Valley, Vancouver Island)",
    "Columbia Basin irrigated pastures"
  ],
  fruitingMonths: [5, 6, 7, 8, 9, 10, 11],
  peakMonths: [9, 10, 11],
  conditions: {
    minRain7d: 15,
    idealDaysSinceRain: [2, 6],
    tempRangeC: [10, 22],
    humidityMinPct: 70
  },
  identification: {
    cap: "3-12 cm; hemispherical when young, expanding to convex then nearly flat; white (sometimes discoloring grey-brown); bald and glossy to finely silky or with small fibrous scales; margin sometimes with hanging veil remnants",
    underside: "Free gills, crowded; bright deep pink when young, maturing through red-brown to dark chocolate brown; covered by a thin white partial veil in button stage",
    stem: "3-10 cm long, 1-2.5 cm thick; more or less equal or tapering slightly to base; white, smooth above the ring, sometimes slightly scaly below; bears a single thin, fragile, quickly collapsing ring; NO volva or sack at base",
    fleshColor: "Thick and white throughout; not bruising yellow anywhere (including stem base); may very slowly bruise a faint dingy pinkish or reddish-brown in wet weather",
    sporePrintColor: "Dark chocolate brown",
    odor: "Pleasant, classic 'mushroomy' (not phenolic, not anise, not of ink/iodine)",
    sizeCm: "Cap 3-12 cm; stem 3-10 x 1-2.5 cm"
  },
  edibility: "choice",
  toxicityNotes: "Should always be cooked before consumption. Take great care to distinguish from deadly Amanita species (especially in young button stage) and from yellow-staining Agaricus species. Always check for a volva at the base by digging up the full specimen, confirm pink-to-chocolate gills (never white), and verify no yellow staining when cut at the stem base.",
  lookalikes: [
    {
      name: "Destroying Angel",
      scientific: "Amanita ocreata",
      danger: "deadly",
      distinguishingFeature: "Pure white gills that remain white at all ages (never pink or brown), a sack-like volva at the base of the stem (must dig up entire specimen to see), and a persistent membranous ring. In the button/egg stage it most closely resembles A. campestris and is the single most dangerous confusion in PNW pastures and lawns."
    },
    {
      name: "Eastern Destroying Angel",
      scientific: "Amanita virosa",
      danger: "deadly",
      distinguishingFeature: "White gills that never turn pink or brown, white spore print, and a basal volva/cup. Causes amatoxin poisoning with delayed-onset liver and kidney failure. Young buttons can be intermixed in the same grassy habitat."
    },
    {
      name: "Yellow Stainer",
      scientific: "Agaricus xanthodermus",
      danger: "toxic",
      distinguishingFeature: "Stains bright chrome yellow when cut or bruised, especially at the base of the stem; smells strongly of phenol/iodine/ink/hospital. Causes GI distress. A. campestris does NOT stain yellow and smells pleasantly mushroomy."
    },
    {
      name: "Horse Mushroom",
      scientific: "Agaricus arvensis",
      danger: "edible",
      distinguishingFeature: "Larger (cap to 20+ cm), with an anise/almond odor, double 'cogwheel' ring, and gills that start grayish rather than bright pink. Edible and choice, but distinct."
    },
    {
      name: "Western Flat-Top Agaricus",
      scientific: "Agaricus porphyrocephalus var. pallidus",
      danger: "edible",
      distinguishingFeature: "Very similar grassland Agaricus in western North America; reliably separated only microscopically by shorter spores (6-6.5 µm vs 6.5-8.5 µm in A. campestris). Also edible."
    },
    {
      name: "Spring Agaricus",
      scientific: "Agaricus bitorquis",
      danger: "edible",
      distinguishingFeature: "Stockier, often emerging through hard-packed soil or pavement edges, with a double ring and gills that start grayish-pink rather than vivid pink. Edible."
    }
  ],
  culinary: {
    flavor: "Classic, rich mushroom flavor; considered superior to the cultivated button mushroom (A. bisporus) to which it is closely related. Mild, savory, and versatile.",
    preparation: "Always cook before eating. Excellent sauteed in butter, in omelets, soups, sauces, gravies, and on pizza. Use young specimens with pink (not dark brown) gills for the cleanest flavor; older specimens with chocolate gills can darken dishes. Brush clean rather than washing.",
    preservation: "Best fresh and refrigerated for only 2-3 days due to delicate texture. Can be sauteed and frozen, dried (though texture suffers), or used in duxelles. Does not preserve as well as firmer wild species."
  },
  conservationNotes: "Listed as Least Concern (IUCN). Globally widespread, but has become noticeably less common in many regions due to loss of traditional pasture habitat, conversion of grasslands, decline of horse-grazed pastures, fertilizer/herbicide use, and lawn chemical treatments. PNW populations remain healthy in unsprayed pastures and old lawns.",
  sources: [
    { name: "MushroomExpert.Com - Agaricus campestris (Michael Kuo)", url: "https://www.mushroomexpert.com/agaricus_campestris.html" },
    { name: "Kitsap Peninsula Mycological Society - Meadow Mushroom (photo courtesy of MykoWeb)", url: "https://kitsapmushrooms.org/edible-mushrooms/meadow-mushroom/" },
    { name: "Burke Herbarium Image Collection - Agaricus campestris (PNW records)", url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Agaricus+campestris" },
    { name: "Kerrigan, R. W. (2016). Agaricus of North America. New York Botanical Garden Press.", url: "https://www.nybgpress.org/Items.aspx?id=406" }
  ]
}
,
{
  id: "albatrellus-flettii",
  commonNames: ["Blue Albatrellus", "Blue-capped Polypore", "Blue Knight", "Flett's Polypore"],
  scientific: "Albatrellus flettii",
  family: "Albatrellaceae",
  order: "Russulales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: [
    "Tsuga (hemlock)",
    "Pseudotsuga (Douglas-fir)",
    "Picea (spruce)",
    "Chrysolepis (golden chinquapin, possible)"
  ],
  hostTrees: [
    { common: "Western hemlock", scientific: "Tsuga heterophylla" },
    { common: "Mountain hemlock", scientific: "Tsuga mertensiana" },
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Sitka spruce", scientific: "Picea sitchensis" },
    { common: "Pacific silver fir", scientific: "Abies amabilis" },
    { common: "Golden chinquapin", scientific: "Chrysolepis chrysophylla" }
  ],
  substrate: "Terrestrial; on soil and conifer duff in mature coniferous forests; a ground-dwelling, ectomycorrhizal polypore (no wood decay).",
  habitat: "Mid- to high-elevation coniferous forests in the Cascades, Sierra Nevada, Olympics, and coastal PNW ranges; mossy duff under western hemlock, mountain hemlock, and Douglas-fir; from coastal old-growth into subalpine conifer stands; solitary, scattered, or in small troops.",
  elevationM: { min: 300, max: 2400 },
  regionsPNW: [
    "PNW",
    "Cascade Range",
    "Sierra Nevada",
    "Olympic Peninsula",
    "Coastal BC",
    "Klamath / Siskiyou",
    "subalpine"
  ],
  fruitingMonths: [8, 9, 10, 11, 12],
  peakMonths: [9, 10, 11],
  conditions: {
    minRain7d: 30,
    idealDaysSinceRain: [5, 14],
    tempRangeC: [4, 16],
    humidityMinPct: 75
  },
  identification: {
    cap: "5-20 cm broad, convex becoming flat or centrally depressed with age; striking sky-blue to blue-green or steel-blue when fresh and young, fading to dingy tan, ochre, or buff with age and often developing a pattern of small cracks revealing the pale flesh beneath; sometimes washed pink, salmon, or brick-red when dry; margin incurved, often lobed or wavy.",
    underside: "White to creamy poroid surface, becoming pinkish-buff, apricot, or salmon when mature (brick-red when dry); pores small and circular to angular, 1-4 per mm; tubes short and decurrent, not easily separable from the cap flesh.",
    stem: "Central to eccentric or lateral, 3-10 cm tall, 1.5-4 cm thick, stout and firm; whitish to pale blue tinged near the apex, often stained ochre or pinkish toward the base.",
    fleshColor: "White, thick, and firm; unchanging or only slowly developing pinkish to pale salmon tones; does not bruise blue.",
    sporePrintColor: "White (sometimes described as pinkish-buff in mass)",
    odor: "Mild, not distinctive; taste mild raw but turning markedly bitter, especially in mature specimens.",
    sizeCm: "Cap 5-20 cm; stem 3-10 x 1.5-4 cm"
  },
  edibility: "edible-when-cooked",
  toxicityNotes: "Not toxic, but bitterness develops with age and often persists through cooking; widely considered mediocre and rarely collected for the table. Young, firm specimens with bright blue caps are the most palatable; older, faded fruitbodies are usually too bitter to enjoy. Now placed by some authors in the segregate genus Albatrellopsis (A. flettii).",
  lookalikes: [
    { name: "Blue-pored Polypore", scientific: "Albatrellus caeruleoporus", danger: "edible", distinguishingFeature: "Eastern North American species; both cap AND pore surface are indigo-blue (pores of A. flettii are white to salmon, never blue); typically smaller (cap to ~6 cm) and associated with eastern hemlock." },
    { name: "Sheep Polypore", scientific: "Albatrellus ovinus", danger: "edible-when-cooked", distinguishingFeature: "Cream to buff cap (never blue); pores bruise lemon-yellow; associated mainly with spruce." },
    { name: "Pink-tinged Polypore", scientific: "Albatrellopsis confluens", danger: "edible-when-cooked", distinguishingFeature: "Pinkish-tan to apricot cap without any blue tones; often in fused clusters; persistently bitter." },
    { name: "Scaly Yellow Polypore", scientific: "Albatrellus ellisii", danger: "edible", distinguishingFeature: "Yellow-green to olive-brown scaly cap; bruises green; high-elevation Sierra/Cascade conifer forests." },
    { name: "Western Albatrellus", scientific: "Albatrellus subrubescens", danger: "edible", distinguishingFeature: "Cap creamy to pinkish or pale violet (no blue); flesh bruises orange; usually under pines." },
    { name: "Blue Chanterelle", scientific: "Polyozellus multiplex", danger: "edible", distinguishingFeature: "Deep purple-blue throughout, with wrinkled/veined underside (not true pores), grows in dense fused rosettes; superficially similar color but very different structure." }
  ],
  culinary: {
    flavor: "Mild and faintly nutty when very young, but quickly develops a lingering bitterness as it ages; texture firm and meaty. Most foragers rate it as mediocre table fare and value it more as a beautiful find than a meal.",
    preparation: "Use only young, firm, brightly colored specimens. Slice thin and parboil 5-10 minutes (discarding the water) to leach bitterness, then saute in butter or add to mixed mushroom dishes, soups, or stews. Discard the tough stem base. Avoid older fruitbodies that have faded to tan.",
    preservation: "Drying is possible but tends to concentrate the bitterness; sauteing then freezing is preferable for short-term storage. Not commonly preserved due to mediocre flavor."
  },
  conservationNotes: "Assessed as Least Concern on the IUCN Red List (as Albatrellopsis flettii, Siegel 2021); widespread but uncommon throughout coastal and montane Pacific Northwest and northern California forests. Listed in past US Forest Service Northwest Forest Plan Survey & Manage / Special Concern documents due to its association with mature/old-growth conifer stands; populations may decline locally with clear-cut logging of mature forest habitat.",
  sources: [
    { name: "MykoWeb - Albatrellus flettii (California Fungi)", url: "https://www.mykoweb.com/CAF/species/Albatrellus_flettii.html" },
    { name: "MushroomExpert.com - The Genus Albatrellus (Michael Kuo)", url: "https://www.mushroomexpert.com/albatrellus.html" },
    { name: "Burke Herbarium Image Collection - Albatrellus flettii", url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Albatrellus+flettii" },
    { name: "IUCN Red List - Albatrellopsis flettii (Siegel 2021, LC)", url: "https://www.iucnredlist.org/species/195921742/195927227" },
    { name: "Wikipedia - Albatrellus flettii", url: "https://en.wikipedia.org/wiki/Albatrellus_flettii" },
    { name: "USFS / Oregon State INR - Albatrellus flettii Washington Status Factors (NW Forest Plan)", url: "https://inr.oregonstate.edu/sites/inr.oregonstate.edu/files/albatrellus_flettii_wa.pdf" }
  ]
}
,
{
  id: "albatrellus-ovinus",
  commonNames: ["Sheep Polypore", "Sheep's Foot", "Forest Lamb", "Sheep Mushroom"],
  scientific: "Albatrellus ovinus",
  family: "Albatrellaceae",
  order: "Russulales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Picea (spruce)", "possibly other conifers"],
  hostTrees: [
    { common: "Engelmann spruce", scientific: "Picea engelmannii" },
    { common: "Sitka spruce", scientific: "Picea sitchensis" },
    { common: "White spruce", scientific: "Picea glauca" }
  ],
  substrate: "Terrestrial; on moss-covered duff and soil in conifer (especially spruce) forests; unusual among polypores in being mycorrhizal and ground-dwelling rather than wood-decaying.",
  habitat: "Mature montane and subalpine spruce forests, often in mossy ground with deep duff; frequently fruits in dense clusters or troops, sometimes with caps fused together.",
  elevationM: { min: 600, max: 2200 },
  regionsPNW: [
    "Cascades (WA, OR)",
    "Olympic Peninsula",
    "Coastal BC",
    "Interior BC",
    "Northern Rockies (ID, MT)",
    "Blue Mountains (OR/WA)"
  ],
  fruitingMonths: [7, 8, 9, 10, 11],
  peakMonths: [9, 10],
  conditions: {
    minRain7d: 25,
    idealDaysSinceRain: [4, 10],
    tempRangeC: [5, 18],
    humidityMinPct: 70
  },
  identification: {
    cap: "7-18 cm across, irregular and often distorted or lobed, creamy white to pale grey or buff-brown, convex then flattening with a central depression; surface dry, smooth becoming cracked with age or in dry weather; margin wavy, incurved; multiple caps frequently fuse together.",
    underside: "Small white to creamy yellow decurrent pores (2-4 per mm), oval, staining lemon to greenish-yellow when bruised or cut; tubes short (1-4 mm).",
    stem: "Central or off-center, 3-7 cm tall, 1-3 cm thick, whitish to pale tan, smooth or finely velvety, often short and stout.",
    fleshColor: "White, firm and brittle; stains/discolors yellow to lemon-yellow (sometimes greenish-yellow) when cut or bruised, especially in the tubes and near the cuticle.",
    sporePrintColor: "White",
    odor: "Mild, sometimes faintly fruity or pleasant; not distinctive; taste mild to slightly bitter when raw.",
    sizeCm: "Cap 7-18 cm; stem 3-7 x 1-3 cm"
  },
  edibility: "edible-when-cooked",
  toxicityNotes: "Bitter and unpalatable when raw; bitterness largely diminishes with cooking. No significant toxicity reported, but easily confused with the bitter, inedible Albatrellus confluens / Albatrellopsis confluens; misidentification can lead to disappointing or GI-upsetting meals. North American collections historically called 'A. ovinus' may represent A. avellaneus, A. confluens, or sister species - molecular work suggests true A. ovinus sensu stricto is largely European/Eurasian and Picea-restricted; verify with local experts.",
  lookalikes: [
    { name: "Pink-tinged Polypore (Forager's Polypore)", scientific: "Albatrellopsis confluens (=Albatrellus confluens)", danger: "inedible", distinguishingFeature: "Pinkish-tan to apricot or salmon cap, flesh distinctly bitter even after cooking, less pronounced yellow staining; often grows in fused clusters and overlaps in habitat." },
    { name: "Western Albatrellus", scientific: "Albatrellus subrubescens", danger: "edible", distinguishingFeature: "Cap often with violet or pinkish tinge, bruises orange; spores amyloid (vs. inamyloid in A. ovinus); usually under pines." },
    { name: "Blue-capped Polypore", scientific: "Albatrellus flettii (=Albatrellopsis flettii)", danger: "edible", distinguishingFeature: "Distinct blue to blue-green cap when young, fading to buff; common PNW species under conifers." },
    { name: "Wood Hedgehog", scientific: "Hydnum repandum", danger: "edible", distinguishingFeature: "Underside with soft white teeth/spines rather than pores; cap typically tan-orange, never stains yellow." },
    { name: "Lemon-yellow Albatrellus", scientific: "Albatrellus citrinus", danger: "inedible", distinguishingFeature: "More strongly yellow-pigmented overall, also Picea-associated; recently segregated from A. ovinus in Europe by molecular data." }
  ],
  culinary: {
    flavor: "Mild, nutty and pleasantly mushroomy when cooked; bright yellow color develops on sauteing; can carry a faint bitterness depending on age and collection - young specimens are best.",
    preparation: "Always cook thoroughly; bitter raw. Slice thinly and saute in butter (often after a brief parboil to reduce any residual bitterness). Holds shape well; good in soups, stews, sauces, and alongside game. Discard tough stem bases.",
    preservation: "Dries well when sliced thin; can also be sauteed and frozen. Pickling is used in parts of Europe (notably Scandinavia)."
  },
  conservationNotes: "Not formally threatened across its Holarctic range, but locally tied to mature/old-growth spruce forests; populations sensitive to clear-cutting and loss of mossy duff layer. North American taxonomy unresolved - field guides increasingly note that 'A. ovinus' in NA may represent multiple species (A. avellaneus, A. confluens s.l., or undescribed sister taxa), so collections contribute to ongoing molecular study.",
  sources: [
    { name: "First Nature - Albatrellus ovinus (Forest Lamb / Sheep Polypore)", url: "https://www.first-nature.com/fungi/albatrellus-ovinus.php" },
    { name: "Mushroom World - Albatrellus ovinus", url: "https://www.mushroom.world/show?n=Albatrellus-ovinus" },
    { name: "Wu et al. 2024 - Diversity, divergence time, and biogeography of the genus Albatrellus (Mycology)", url: "https://www.tandfonline.com/doi/full/10.1080/21501203.2024.2386021" },
    { name: "NCBI Taxonomy - Albatrellus ovinus", url: "https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=139090" },
    { name: "Wild Food Girl - Albatrellus confluens / ovinus discussion", url: "https://wildfoodgirl.com/2011/albatrellus-confluens-conference" },
    { name: "Wikipedia - Albatrellus subrubescens (taxonomy of Albatrellus clade)", url: "https://en.wikipedia.org/wiki/Albatrellus_subrubescens" }
  ]
}
,
{
  id: "armillaria-solidipes",
  commonNames: ["Dark Honey Mushroom", "PNW Honey Mushroom", "Honey Fungus", "Shoestring Root Rot"],
  scientific: "Armillaria solidipes",
  family: "Physalacriaceae",
  order: "Agaricales",
  trophicMode: "mixed",
  mycorrhizalPartners: null,
  hostTrees: [
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Grand fir", scientific: "Abies grandis" },
    { common: "White fir", scientific: "Abies concolor" },
    { common: "Western hemlock", scientific: "Tsuga heterophylla" },
    { common: "Engelmann spruce", scientific: "Picea engelmannii" },
    { common: "Ponderosa pine", scientific: "Pinus ponderosa" },
    { common: "Lodgepole pine", scientific: "Pinus contorta" },
    { common: "Western red cedar", scientific: "Thuja plicata" }
  ],
  substrate: "Conifer wood (living roots, stumps, buried roots, fallen logs); spreads tree-to-tree via black rhizomorphs (shoestrings) under bark and through soil",
  habitat: "Coniferous forests; serious parasite of living conifers (causes Armillaria root disease) and saprotroph on dead conifer wood. Common in cespitose clusters at the base of infected trees, stumps, and snags. The Malheur National Forest (Blue Mountains, eastern Oregon) hosts a single individual covering ~2,385 acres (~3.5 sq mi / 9.1 sq km), estimated 2,400+ years old and weighing up to 35,000 tons - the largest known organism on Earth by area and mass.",
  elevationM: { min: 0, max: 2200 },
  regionsPNW: ["Western Oregon", "Eastern Oregon (Blue Mountains, Malheur NF)", "Cascade Range", "Western Washington", "Eastern Washington", "Northern Idaho", "British Columbia (Interior Cedar-Hemlock zone and coast)", "Northern California"],
  fruitingMonths: [9, 10, 11],
  peakMonths: [10, 11],
  conditions: {
    minRain7d: 25,
    idealDaysSinceRain: [3, 10],
    tempRangeC: [4, 16],
    humidityMinPct: 75
  },
  identification: {
    cap: "3-15 cm broad, convex becoming flat or shallowly depressed with age; pinkish-brown to reddish-brown or dark honey-brown, often darker at center; surface covered with prominent small, dark erect scales (especially toward center), most persistent on dry caps",
    underside: "White to cream gills, broadly attached (adnate) to slightly decurrent, becoming pinkish-tan or rust-spotted with age",
    stem: "5-15 cm long, 1-3 cm thick, solid, sturdy, with a well-developed persistent membranous white ring (annulus) that often has dark brown or blackish scales on its underside; base typically rounded (not pointed), often with numerous fibrous scales below the ring; clustered stems may fuse at the base",
    fleshColor: "White, firm, not staining",
    sporePrintColor: "White",
    odor: "Mild, slightly mushroomy or faintly sweet; not distinctive",
    sizeCm: "Cap 3-15 cm; stem 5-15 x 1-3 cm"
  },
  edibility: "edible-when-cooked",
  toxicityNotes: "Must be thoroughly cooked - causes gastrointestinal distress (cramps, nausea, vomiting, diarrhea) when consumed raw, undercooked, or eaten in excess. Many Europeans parboil/blanch in boiling water (discarding water) before final preparation or pickling. Individual sensitivity varies; some people experience GI upset even when properly cooked. Tough stems are typically discarded. Avoid specimens from buckeye or hemlock substrates (greater GI risk).",
  lookalikes: [
    {
      name: "Deadly Galerina",
      scientific: "Galerina marginata",
      danger: "deadly",
      distinguishingFeature: "Contains lethal amatoxins. Much smaller (cap 1-4 cm), thin-fleshed, rusty-brown spore print (vs. white in Armillaria), brown gills at maturity, smaller fragile ring, no dark scales on cap, grows in small troops or scattered on rotting wood (often the same logs as honeys). ALWAYS take a spore print - white = safe from Galerina."
    },
    {
      name: "Honey mushroom",
      scientific: "Armillaria mellea",
      danger: "edible-when-cooked",
      distinguishingFeature: "Yellower (honey-colored) cap, stipe tapered/pointed at base (not rounded), lacks clamp connections, more often on hardwoods; primarily eastern North America, uncommon in the PNW"
    },
    {
      name: "Yellow-veiled honey mushroom",
      scientific: "Armillaria sinapina",
      danger: "edible-when-cooked",
      distinguishingFeature: "Brown cap with prominent pointed scales, white cobwebby (rather than membranous) partial veil, distinctive yellow fibril ring at stipe apex, fruits singly or in small clusters"
    },
    {
      name: "Bulbous honey mushroom",
      scientific: "Armillaria gallica",
      danger: "edible-when-cooked",
      distinguishingFeature: "Smoother cap with few scales, distinctly bulbous (swollen) stem base, weaker partial veil leaving only a cobwebby ring zone, primarily weak parasite/saprobe on hardwoods"
    },
    {
      name: "Sheathed woodtuft",
      scientific: "Kuehneromyces mutabilis",
      danger: "edible",
      distinguishingFeature: "Smaller, hygrophanous two-toned cap (darker margin when moist), rusty-brown spore print, scaly stem below the ring; superficially similar but lacks dark scales on cap center"
    },
    {
      name: "Deadly webcaps",
      scientific: "Cortinarius spp.",
      danger: "deadly",
      distinguishingFeature: "Rusty-brown spore print, cobwebby cortina (not a true membranous ring), gills brown at maturity, usually grow on ground (mycorrhizal) rather than clustered on wood"
    }
  ],
  culinary: {
    flavor: "Earthy, distinctive, nutty with a slightly chewy-to-crunchy texture; some specimens have a faint bitterness that is removed by parboiling. Caps are preferred; stems are tough and often discarded.",
    preparation: "MUST be thoroughly cooked - never eat raw. Best to parboil 5-10 minutes in salted water (discard water) before sauteing, roasting, or adding to soups/stews/sauces. Use only young, firm buttons; mature specimens with dropped spores or deteriorated caps should be passed by. Start with a small portion the first time to test personal tolerance.",
    preservation: "Dries well - drying intensifies the earthy flavor (reconstituted texture is tough but good in stocks and braises). Can be pickled after parboiling. Freezes well after parboiling and sauteing. Not recommended for raw freezing."
  },
  conservationNotes: "Extremely abundant and not of conservation concern - in fact considered a serious forest pathogen causing Armillaria root disease across PNW conifer forests, killing Douglas-fir, true firs, and other commercial timber species. Forage freely; harvesting has no negative ecological impact. The Malheur National Forest 'Humongous Fungus' individual (eastern Oregon Blue Mountains) is the largest known living organism on Earth by area, mass, and volume, covering ~2,385 acres (~9.1 sq km), estimated 2,400+ years old at ~35,000 tons. A second giant individual on Mount Adams, Washington covers ~1,500 acres and is estimated 400-1,000 years old.",
  sources: [
    { name: "MykoWeb - Armillaria solidipes (California Fungi)", url: "https://www.mykoweb.com/CAF/species/Armillaria_solidipes.html" },
    { name: "MushroomExpert.com - Armillaria ostoyae (Michael Kuo)", url: "https://www.mushroomexpert.com/armillaria_ostoyae.html" },
    { name: "MykoWeb - Toxic Fungi of Western North America (GI reactions)", url: "https://www.mykoweb.com/TFWNA/P-52.html" },
    { name: "Wikipedia - Armillaria ostoyae (synonym A. solidipes)", url: "https://en.wikipedia.org/wiki/Armillaria_ostoyae" },
    { name: "Scientific American - The Largest Organism on Earth Is a Fungus", url: "https://www.scientificamerican.com/article/strange-but-true-largest-organism-is-fungus" },
    { name: "USDA Forest Service - Armillaria Root Disease", url: "https://www.fs.usda.gov/r10/natural-resources/forest-health/armillaria-root-disease" },
    { name: "Burdsall & Volk (2008) - Armillaria solidipes, an older name for A. ostoyae. North American Fungi 3(7): 261-267", url: "https://drive.google.com/file/d/1N4Y59KXkt-zgURDFu0RWLs1eEdIpj4sc/view" }
  ]
}
,
{
  id: "auricularia-americana",
  commonNames: ["American wood ear", "Wood ear", "Tree ear", "Jelly ear", "Conifer wood ear"],
  scientific: "Auricularia americana",
  family: "Auriculariaceae",
  order: "Auriculariales",
  trophicMode: "saprotrophic",
  mycorrhizalPartners: null,
  hostTrees: [
    { common: "Western hemlock", scientific: "Tsuga heterophylla" },
    { common: "Mountain hemlock", scientific: "Tsuga mertensiana" },
    { common: "Sitka spruce", scientific: "Picea sitchensis" },
    { common: "Engelmann spruce", scientific: "Picea engelmannii" },
    { common: "Subalpine fir", scientific: "Abies lasiocarpa" },
    { common: "Pacific silver fir", scientific: "Abies amabilis" },
    { common: "Grand fir", scientific: "Abies grandis" },
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Lodgepole pine", scientific: "Pinus contorta" }
  ],
  substrate: "Dead, dying, or recently fallen coniferous wood: logs, large branches, snags, and stumps with bark still intact and early-stage decay. A white-rot wood-decay saprotroph; the strict-sense A. americana (Looney et al. 2013; Wu et al. 2015) is the only North American Auricularia restricted to conifer substrates and is microscopically distinguished by the absence of a medullary zone in cross-section.",
  habitat: "Solitary, clustered, or in shelving rows on the underside and sides of fallen conifer logs and standing snags in shaded, humid old-growth and mature mixed-conifer forests. Most abundant in coastal hemlock-spruce rainforest and montane spruce-fir stands following soaking rains. Fruit bodies are remarkably desiccation-tolerant: they shrivel to hard, dark, cartilaginous flakes in dry weather and rehydrate within hours of rain, resuming spore production from the same basidiocarp across multiple wet/dry cycles over weeks.",
  elevationM: { min: 0, max: 2200 },
  regionsPNW: ["Coastal British Columbia", "Vancouver Island", "Olympic Peninsula", "Western Washington Cascades", "Western Oregon Cascades", "Oregon Coast Range", "Puget Sound lowlands", "Columbia River Gorge", "Northern Idaho panhandle", "Inland Northwest montane forests"],
  fruitingMonths: [3, 4, 5, 6, 7, 8, 9, 10, 11],
  peakMonths: [4, 5, 10, 11],
  conditions: {
    minRain7d: 10,
    idealDaysSinceRain: [0, 5],
    tempRangeC: [2, 22],
    humidityMinPct: 75
  },
  identification: {
    cap: "Ear-, disc-, or cup-shaped when young, becoming irregular, lobed, wavy, or floppy with age; 2-10 cm across; upper (sterile) surface brown to reddish-brown or purplish-brown, finely tomentose with short pale hairs, often appearing minutely velvety; surface often frosted with a whitish bloom when fresh. Attached laterally to wood by a small contracted point.",
    underside: "Fertile hymenial surface smooth to wrinkled or veined, lacking true gills or pores; grey-brown to reddish-brown, sometimes with a faint whitish dusting from spores when mature.",
    stem: "Absent or reduced to a small lateral attachment point fusing the fruitbody to the wood substrate.",
    fleshColor: "Translucent reddish-brown to amber; gelatinous and rubbery when fresh, cartilaginous-firm when partially dried, becoming hard, dark, and brittle when fully desiccated and rehydrating to the gelatinous state.",
    sporePrintColor: "White.",
    odor: "Mild, faintly earthy or fungal; not distinctive.",
    sizeCm: "Individual ears 2-10 cm (occasionally to 15 cm); thickness 1-3 mm; often fused in overlapping clusters spanning 20+ cm of substrate."
  },
  edibility: "edible-when-cooked",
  toxicityNotes: "Always cook before eating. Raw or undercooked wood ears (including the closely related Asian A. heimuer/A. polytricha used in Chinese cuisine) contain compounds with mild anticoagulant/antiplatelet activity (adenosine analogs and polysaccharides); habitual large raw consumption has been associated with prolonged bleeding times. Cook thoroughly and avoid in large quantities if on blood-thinning medication.",
  lookalikes: [
    { name: "American hardwood wood ear", scientific: "Auricularia angiospermarum", danger: "edible", distinguishingFeature: "Morphologically nearly identical but grows exclusively on hardwoods (oak, alder, maple, elder); previously lumped under A. auricula-judae; equally edible." },
    { name: "European jelly ear", scientific: "Auricularia auricula-judae", danger: "edible", distinguishingFeature: "Old name historically applied to all North American material; true A. auricula-judae is now restricted to Europe (especially on elder, Sambucus) and is genetically distinct from A. americana." },
    { name: "Cloud ear / black fungus", scientific: "Auricularia polytricha (= A. cornea / A. heimuer complex)", danger: "edible", distinguishingFeature: "Asian commercial species used in Chinese cooking; thicker, more conspicuously hairy/velvety upper surface, often greyer; not native to the PNW." },
    { name: "Amber jelly roll", scientific: "Exidia recisa", danger: "edible", distinguishingFeature: "Smaller, more blob- or top-shaped (not ear-shaped), softer and more squishy, grows on hardwood twigs (especially willow and oak); edible but bland." },
    { name: "Leafy brain / black witch's butter", scientific: "Exidia glandulosa / Exidia nigricans", danger: "edible", distinguishingFeature: "Black, brain-like convoluted folds rather than ear shape; grows on hardwoods; edible but tasteless." },
    { name: "Witch's butter", scientific: "Tremella mesenterica", danger: "edible", distinguishingFeature: "Bright yellow to orange brain-like jelly; parasitizes crust fungi (Peniophora) on hardwoods rather than directly decaying wood." },
    { name: "Brown cup fungi", scientific: "Peziza spp. / Gyromitra perlata", danger: "GI-upset", distinguishingFeature: "Grow terrestrially from soil or duff, not on wood; flesh is brittle/waxy rather than rubbery-gelatinous; some Gyromitra contain gyromitrin and should be avoided." },
    { name: "Wood ear mimics on conifer", scientific: "Pseudohydnum gelatinosum", danger: "edible", distinguishingFeature: "Toothed (spiny) hymenial surface, translucent white to grey, tongue-shaped on conifer wood; edible jelly tooth, easy to separate by the soft spines." }
  ],
  culinary: {
    flavor: "Very mild, almost neutral in flavor; prized instead for its distinctive crunchy-gelatinous, slightly snappy texture that readily absorbs surrounding flavors and broths.",
    preparation: "Clean thoroughly (sediment lodges in folds), trim the tough attachment point, and slice into thin strips. Always cook: blanch 3-5 minutes or simmer/saute for at least 10 minutes. Classic uses include Chinese hot and sour soup, mu shu pork, stir-fries, Korean japchae, Vietnamese spring rolls, and braised dishes. Rehydrate dried specimens 20-30 minutes in warm water before cooking; reserve the soaking liquid for broth.",
    preservation: "Dehydrates exceptionally well due to its natural desiccation-tolerance; air-dry or dehydrate at 40-50 C until crisp and store airtight indefinitely (the standard commercial form). Rehydrates to near-fresh texture. Freezing is unnecessary and degrades texture; pickling in soy/vinegar brine is a good short-term option."
  },
  conservationNotes: "Not of conservation concern: widely distributed across coniferous forests of North America from Alaska through the Rockies and Pacific Northwest, common wherever suitable downed conifer wood persists. Strict-sense A. americana was only formally recircumscribed in 2013-2015, so older records under A. auricula-judae or A. auricula conflate it with the hardwood-loving A. angiospermarum. Reliant on coarse woody debris, so old-growth retention and snag/log preservation in managed forests support populations.",
  sources: [
    { name: "MushroomExpert.com - Auricularia americana by Michael Kuo", url: "https://www.mushroomexpert.com/auricularia_americana.html" },
    { name: "MykoWeb - Auricularia americana (California Fungi)", url: "https://www.mykoweb.com/CAF/species/Auricularia_americana.html" },
    { name: "Looney, Birkebak & Matheny 2013 - Systematics of the genus Auricularia with an emphasis on species from the southeastern United States (North American Fungi)", url: "https://pnwfungi.org/index.php/pnwfungi/article/view/1191" },
    { name: "Wu, Yuan, Kivlin, Bishop, Volk & Dai 2015 - Multi-locus phylogeny and taxonomy of the wood ear mushroom genus Auricularia", url: "https://www.sciencedirect.com/science/article/abs/pii/S1878614615000379" },
    { name: "Wikipedia - Auricularia", url: "https://en.wikipedia.org/wiki/Auricularia" },
    { name: "Forage Colorado - Foraging Wood Ear Mushrooms, Auricularia americana", url: "https://www.foragecolorado.com/post/foraging-wood-ear-mushrooms-auricularia-americana" }
  ]
}
,
{
  id: "boletus-barrowsii",
  commonNames: ["White King Bolete", "Barrows' Bolete", "Chuck Barrows' Bolete", "White Cep"],
  scientific: "Boletus barrowsii",
  family: "Boletaceae",
  order: "Boletales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Pinus ponderosa", "Pinus monticola", "Pinus jeffreyi", "Quercus agrifolia", "Quercus gambelii"],
  hostTrees: [
    { common: "Ponderosa pine", scientific: "Pinus ponderosa" },
    { common: "Western white pine", scientific: "Pinus monticola" },
    { common: "Jeffrey pine", scientific: "Pinus jeffreyi" },
    { common: "Coast live oak", scientific: "Quercus agrifolia" },
    { common: "Gambel oak", scientific: "Quercus gambelii" }
  ],
  substrate: "Sandy or gravelly mineral soils with pine needle duff in open conifer woodlands; in California also found in leaf litter under live oak. Fruits singly, scattered, or in small groups, often along forest edges, roadsides, and disturbed ground.",
  habitat: "Open ponderosa pine and mixed yellow-pine woodlands of the inland Southwest and Great Basin; also coastal/foothill live oak woodlands in California. Favors edge habitats - trail margins, roadsides, and gaps in pine forest - over deep closed-canopy stands. Strongly tied to summer monsoon storms in AZ/NM/CO and to autumn rains farther west.",
  elevationM: { min: 1500, max: 2700 },
  regionsPNW: ["Southwestern US", "Sierra Nevada", "Eastern Sierra", "Great Basin", "ponderosa pine zone", "Southern California mountains", "Colorado Rockies (southern)", "Mogollon Rim"],
  fruitingMonths: [7, 8, 9, 10, 11],
  peakMonths: [8, 9],
  conditions: {
    minRain7d: 20,
    idealDaysSinceRain: [5, 14],
    tempRangeC: [12, 24],
    humidityMinPct: 60
  },
  identification: {
    cap: "7-25 cm (up to 30 cm); convex becoming broadly convex to plane; dry, finely tomentose to nearly smooth; pale whitish, buff, cream, or pale grayish-tan, sometimes developing pinkish-buff to pale-brown tones with age; margin often incurved when young.",
    underside: "Pore surface white when young, slowly aging cream, then yellow, finally olive-yellow to dingy yellow-brown; pores small and round, slightly depressed around the stem; does NOT bruise or stain blue when cut or handled.",
    stem: "8-25 cm long, 2-7 cm thick; solid, firm, often club-shaped or bulbous at the base; whitish to pale buff, sometimes pinkish-tan in age; conspicuously reticulated (raised net pattern) over upper portion or full length, with white reticulation against a pale ground.",
    fleshColor: "Thick, firm, white throughout; unchanging when cut (no blueing). FeSO4 (iron salts) on cap flesh turns gray.",
    sporePrintColor: "Olive-brown",
    odor: "Mild, pleasantly mushroomy / classic porcini aroma; taste mild and nutty, never bitter.",
    sizeCm: "Cap 7-25 cm; stem 8-25 cm long x 2-7 cm thick - a large, robust bolete"
  },
  edibility: "choice",
  toxicityNotes: "No toxins known; considered one of the finest edible boletes. As with all king boletes, fruitbodies are frequently infested with fly larvae - inspect the stem base by slicing and discard worm-tunneled tissue. Always cook thoroughly; try a small portion first if you have not eaten king boletes before.",
  lookalikes: [
    {
      name: "King Bolete",
      scientific: "Boletus edulis",
      danger: "edible",
      distinguishingFeature: "Cap brown to reddish-brown (not whitish); otherwise very similar in structure (white reticulated stem, non-bluing flesh, olive-brown spores). B. barrowsii is essentially a pale-capped western counterpart; both are choice edibles."
    },
    {
      name: "Queen Bolete",
      scientific: "Boletus regineus",
      danger: "edible",
      distinguishingFeature: "Darker brown cap with white bloom when young; associated with oak/mixed hardwoods in coastal California; lacks the pale whitish cap of B. barrowsii."
    },
    {
      name: "Spring King Bolete",
      scientific: "Boletus rex-veris",
      danger: "edible",
      distinguishingFeature: "Fruits in spring (May-June) after snowmelt under true firs and pines; cap tan to brown with pinkish tints, not white; often clustered and partially buried as 'mushrumps'."
    },
    {
      name: "Bitter Bolete",
      scientific: "Tylopilus felleus",
      danger: "inedible",
      distinguishingFeature: "Pink to flesh-colored pore surface at maturity; pinkish-brown spore print; coarse dark reticulation on the stem; flesh intensely bitter (a tiny taste-test ruins a whole dish). Eastern species; rare in the Southwest but worth knowing."
    },
    {
      name: "Bitter Bolete (western)",
      scientific: "Caloboletus rubripes",
      danger: "inedible",
      distinguishingFeature: "Yellow flesh that bruises blue, red stem base, bitter taste; lacks reticulation. Easily separated from B. barrowsii by blueing and bitterness."
    },
    {
      name: "Satan's Bolete",
      scientific: "Rubroboletus satanas",
      danger: "toxic",
      distinguishingFeature: "Red pore surface, red reticulated stem, flesh strongly blues when cut; causes severe gastrointestinal poisoning. Not normally in the same ponderosa-pine habitat but worth knowing as a Boletus-lookalike."
    }
  ],
  culinary: {
    flavor: "Rich, meaty, nutty porcini flavor - widely considered equal to or even surpassing Boletus edulis. Highly prized in New Mexico, Arizona, and Colorado, where it has been gathered for generations (originally as a 'form' of B. edulis).",
    preparation: "Slice young firm buttons and saute in butter or olive oil; excellent in risottos, cream sauces, pasta, soups, omelets, and atop grilled meats. Remove the spongy pore layer on older specimens for better fresh texture. Always cook thoroughly. Trim insect damage carefully; the white flesh shows worm tunnels clearly.",
    preservation: "Excellent for drying - slice 6-10 mm thick and dehydrate at low heat; drying intensifies the aroma. Dried slices reconstitute well in warm water and can be ground into porcini powder for soups, gravies, and rubs. Also freezes well after a quick saute. Older or partly worm-eaten specimens (after trimming) are best dried rather than eaten fresh."
  },
  conservationNotes: "Locally common in monsoon years across AZ/NM/CO and seasonally abundant in southern California oak woodlands; not formally listed. Subject to harvest pressure where commercially gathered. Foragers should avoid raking duff (damages mycelium), follow USFS/BLM permit requirements on public lands, and leave mature specimens to release spores. Climate-driven shifts in summer monsoon timing may affect future fruiting reliability in the Southwest.",
  sources: [
    { name: "MykoWeb - California Fungi: Boletus barrowsii", url: "https://www.mykoweb.com/CAF/species/Boletus_barrowsii.html" },
    { name: "MushroomExpert.com - Boletus barrowsii", url: "https://www.mushroomexpert.com/boletus_barrowsii.html" },
    { name: "Wikipedia - Boletus barrowsii", url: "https://en.wikipedia.org/wiki/Boletus_barrowsii" },
    { name: "Tom Volk's Fungus of the Month - Boletus barrowsii (Aug 2004)", url: "https://botit.botany.wisc.edu/toms_fungi/aug2004.html" },
    { name: "Thiers, H.D. (1976). Boletes of the Southwestern United States. Mycotaxon 3(2): 261-273", url: "https://www.mykoweb.com/CAF/protologue/Boletus_barrowsii.pdf" },
    { name: "Dentinger et al. (2010). Molecular phylogenetics of porcini mushrooms (Boletus section Boletus). Mol. Phylogenetics & Evolution 57(3): 1276-1292", url: "https://www.mykoweb.com/CAF/species/Boletus_barrowsii.html" },
    { name: "WPA Mushroom Club - Bolete Filter: Boletus barrowsii", url: "https://boletes.wpamushroomclub.org/product/boletus-barrowsii" }
  ]
}
,
{
  id: "boletus-edulis",
  commonNames: ["King Bolete", "Porcini", "Cep", "Cepe", "Steinpilz", "Pacific King Bolete"],
  scientific: "Boletus edulis",
  family: "Boletaceae",
  order: "Boletales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Picea sitchensis", "Picea engelmannii", "Tsuga heterophylla", "Tsuga mertensiana", "Abies amabilis", "Abies procera", "Abies grandis", "Pseudotsuga menziesii", "Pinus contorta"],
  hostTrees: [
    { common: "Sitka spruce", scientific: "Picea sitchensis" },
    { common: "Engelmann spruce", scientific: "Picea engelmannii" },
    { common: "Western hemlock", scientific: "Tsuga heterophylla" },
    { common: "Mountain hemlock", scientific: "Tsuga mertensiana" },
    { common: "Pacific silver fir", scientific: "Abies amabilis" },
    { common: "Noble fir", scientific: "Abies procera" },
    { common: "Grand fir", scientific: "Abies grandis" },
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Lodgepole/shore pine", scientific: "Pinus contorta" }
  ],
  substrate: "duff and mineral soil under conifers; often pushing up through moss, needle litter, or along forest road edges",
  habitat: "Ectomycorrhizal with a wide range of PNW conifers. The principal autumn PNW collection is Boletus edulis var. grandedulis (Pacific king bolete, Arora & Simonini 2008), fruiting in coastal Sitka spruce/western hemlock forests, subalpine true-fir and mountain hemlock stands, and in coastal lodgepole/shore pine on dunes. Frequently along logging roads, trail edges, and forest openings where soil is disturbed but mycorrhizal partners are intact. Note: the PNW spring 'kings' from montane true-fir and lodgepole pine stands are a separate species, Boletus rex-veris.",
  elevationM: { min: 0, max: 2200 },
  regionsPNW: ["Oregon Coast Range", "Washington Coast", "Olympics", "Cascades (both slopes)", "Vancouver Island", "British Columbia Coast", "Blue Mountains", "northeast Washington/Idaho Panhandle"],
  fruitingMonths: [8, 9, 10, 11, 12],
  peakMonths: [9, 10, 11],
  conditions: {
    minRain7d: 20,
    idealDaysSinceRain: [5, 14],
    tempRangeC: [8, 20],
    humidityMinPct: 75
  },
  identification: {
    cap: "Greasy to tacky when wet, dry and bald when dry; reddish-brown, chestnut, tan to dark brown, often paler near margin; convex becoming broadly convex to nearly flat; 7-30+ cm across",
    underside: "Tubes/pores; pore surface white and 'stuffed' (cottony, almost closed) when young, aging through pale yellow to olive-yellow; in var. grandedulis the mature pore surface becomes brownish to cinnamon brown; pores small, round, not bruising blue",
    stem: "Stout, club-shaped to bulbous when young, often elongating in age; whitish to pale tan, with fine raised white reticulation (netting) at least on the upper portion; 8-25 cm long x 3-10+ cm thick; firm and solid",
    fleshColor: "White, unchanging when cut (no blueing or other color change); firm in young specimens",
    sporePrintColor: "Olive-brown",
    odor: "Mild, pleasant, faintly nutty or mushroomy; taste mild (never bitter)",
    sizeCm: "Cap 7-30+ cm; stem 8-25 cm x 3-10 cm; frequently exceeds 1 kg in PNW var. grandedulis"
  },
  edibility: "choice",
  toxicityNotes: null,
  lookalikes: [
    { name: "Spring King Bolete", scientific: "Boletus rex-veris", danger: "edible", distinguishingFeature: "Fruits in spring/early summer (May-July) often gregariously or in clusters in montane true-fir and lodgepole pine stands; very similar microscopically and an equally choice edible" },
    { name: "Queen Bolete", scientific: "Boletus regineus", danger: "edible", distinguishingFeature: "Darker, more chocolate-brown cap with a whitish bloom when young; associated with mixed hardwood/conifer woods (oak, tanoak); choice edible" },
    { name: "Butter-foot Bolete", scientific: "Boletus fibrillosus", danger: "edible", distinguishingFeature: "Dry, finely hairy/velvety dark-brown cap; brownish (not whitish) stem with darker reticulation; edible" },
    { name: "Admirable Bolete", scientific: "Aureoboletus mirabilis", danger: "edible", distinguishingFeature: "Dark reddish-brown shaggy/fibrillose dry cap, yellow pores, often fruits on rotten hemlock logs (saprotrophic-leaning); edible" },
    { name: "Bitter Bolete", scientific: "Tylopilus felleus", danger: "inedible", distinguishingFeature: "Pore surface becomes pink with age, dark brown coarse reticulation on stem, pink spore print, intensely bitter taste; primarily eastern N. America but worth checking - a nibble test reveals it" },
    { name: "Red-pored Bolete", scientific: "Rubroboletus pulcherrimus", danger: "toxic", distinguishingFeature: "Bright red to orange-red pore surface, flesh stains blue instantly when cut, stem with reddish reticulation; causes severe GI distress (one historical fatality)" },
    { name: "Bitter Beach Bolete", scientific: "Caloboletus rubripes", danger: "inedible", distinguishingFeature: "Yellow pore surface bruising blue, red base of stem, intensely bitter taste; associated with conifers on the West Coast" },
    { name: "Zeller's Bolete", scientific: "Xerocomellus zelleri", danger: "edible", distinguishingFeature: "Much smaller, dry black to dark-brown cap with red marginal cracks, yellow pores, slender stem; edible but mediocre" }
  ],
  culinary: {
    flavor: "Rich, deeply savory and nutty with strong umami; the benchmark gourmet wild mushroom and the European porcini of commerce",
    preparation: "Slice and saute fresh in butter or olive oil with garlic; use in risotto, pasta sauces, omelets, soups, and on steaks. Younger 'buttons' (with white stuffed pores) are prime; remove tubes in older specimens as they go slimy when cooked. Always inspect for fly larvae - cut lengthwise.",
    preservation: "Excellent dried (the classic preservation method): slice 5-8 mm thick and dehydrate at 40-50 C until cracker-dry, then store airtight; rehydrated dried kings have an intensified flavor used in stocks and sauces. Also good frozen after a dry saute. Pickling and porcini powder/salt are common."
  },
  conservationNotes: "IUCN Red List: Least Concern globally. Commercially harvested at significant volume from PNW national forests (especially in Oregon and Washington), with permit systems administered by USFS districts. Studies indicate harvest by careful plucking does not appear to suppress future fruiting, but soil disturbance, raking, and habitat loss (clearcut/old-growth removal) reduce mycorrhizal partners. Sensitive to drought trends in the PNW.",
  sources: [
    { name: "MushroomExpert.com - Boletus edulis (Michael Kuo)", url: "https://www.mushroomexpert.com/boletus_edulis.html" },
    { name: "MykoWeb - California Fungi: Boletus edulis var. grandedulis", url: "https://www.mykoweb.com/CAF/species/Boletus_edulis.html" },
    { name: "MushroomExpert.com - Boletus edulis var. grandedulis", url: "https://www.mushroomexpert.com/boletus_edulis_grandedulis.html" },
    { name: "Salish Mushrooms - PNW Boletes overview", url: "https://salishmushrooms.com/boletes/" },
    { name: "Arora, D. & Simonini, G. (2008) - Boletus edulis var. grandedulis, a new species description from western North America. Economic Botany 62(3): 374.", url: "https://link.springer.com/article/10.1007/s12231-008-9038-3" },
    { name: "Pilz, D., Molina, R., et al. (2003) - Ecology and Management of Commercially Harvested Mushrooms (USDA PNW-GTR-576)", url: "https://www.fs.fed.us/pnw/pubs/pnw_gtr576.pdf" }
  ]
}
,
{
  id: "boletus-mirabilis",
  commonNames: ["Admirable Bolete", "Bragger's Bolete", "Velvet Top"],
  scientific: "Boletus mirabilis",
  family: "Boletaceae",
  order: "Boletales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Tsuga heterophylla", "Tsuga mertensiana", "Pseudotsuga menziesii", "Thuja plicata"],
  hostTrees: [
    { common: "Western hemlock", scientific: "Tsuga heterophylla" },
    { common: "Mountain hemlock", scientific: "Tsuga mertensiana" },
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Western red cedar", scientific: "Thuja plicata" }
  ],
  substrate: "Unusual among boletes - often fruits directly on or beside well-decayed conifer logs and stumps (especially hemlock) showing advanced brown cubical rot; also terrestrial on mossy soil and duff near rotting wood. The rotten wood typically contains abundant conifer roots, and the species is thought to form mycorrhizae with those roots reaching into the log.",
  habitat: "Mature and old-growth coastal coniferous forests dominated by western hemlock; classic PNW species that surprises foragers by appearing to grow saprobically on rotten hemlock logs. Fruits singly, scattered, or in small groups shortly after fall rains. Also reported from Douglas-fir and western red cedar associations, and from mountain hemlock at higher elevations.",
  elevationM: { min: 0, max: 1800 },
  regionsPNW: ["Oregon Coast Range", "Oregon Cascades", "Washington Coast", "Olympic Peninsula", "Washington Cascades", "Vancouver Island", "British Columbia Coast", "Northern California coast (Mendocino northward)"],
  fruitingMonths: [9, 10, 11],
  peakMonths: [10],
  conditions: {
    minRain7d: 25,
    idealDaysSinceRain: [4, 12],
    tempRangeC: [7, 18],
    humidityMinPct: 80
  },
  identification: {
    cap: "Dark reddish-brown, maroon to purple-brown; dry, coarsely tomentose to squamulose (felty/grainy, developing scales with age); convex becoming broadly convex; margin often with a sterile (pore-less) hanging flap; 7-15 cm across",
    underside: "Tubes/pores; pore surface bright yellow when young, aging to greenish-yellow or olive-yellow; pores small, angular to round; tubes up to ~2 cm deep; not bruising blue (or only very weakly so)",
    stem: "7-14 cm long x 2-4 cm thick, narrowed above and enlarged below with a clavate/bulbous base; colored like the cap (reddish-brown to maroon) with conspicuous coarse reticulation at the apex over a paler pinkish ground; lower stem with raised purple-brown fibrils; mycelium at base yellow",
    fleshColor: "Cream to pale yellow, often pinkish toward the stem base; unchanging or with at most a very weak bluing in the cap of some collections",
    sporePrintColor: "Olive-brown",
    odor: "Mild, pleasant, not distinctive; taste mild, sometimes described as slightly lemony when cooked",
    sizeCm: "Cap 7-15 cm; stem 7-14 cm x 2-4 cm"
  },
  edibility: "choice",
  toxicityNotes: null,
  lookalikes: [
    { name: "Butter-foot Bolete / Fir King", scientific: "Boletus fibrillosus", danger: "edible", distinguishingFeature: "Fibrillose dark-brown cap (lacks the maroon/reddish-purple tones), grows terrestrially under conifers rather than on rotten wood, smaller spores (9-13 x 4-5.5 microns)" },
    { name: "King Bolete", scientific: "Boletus edulis", danger: "edible", distinguishingFeature: "Greasy/tacky (not dry-felty) chestnut to tan cap, whitish stem with fine white reticulation, pore surface white when young aging to olive-yellow; never grows on rotten wood" },
    { name: "Zeller's Bolete", scientific: "Xerocomellus zelleri", danger: "edible", distinguishingFeature: "Much smaller; dark black to dark-brown dry cap, often with red marginal cracks; slender stem; yellow pores; terrestrial in conifer duff" },
    { name: "Bitter Bolete", scientific: "Tylopilus felleus", danger: "inedible", distinguishingFeature: "Pore surface aging pink (not yellow/olive), pink spore print, intensely bitter taste; primarily eastern North America" },
    { name: "Sheep Polypore", scientific: "Albatrellus pes-caprae", danger: "edible", distinguishingFeature: "Superficially similar matted-tomentose maroon-brown cap, but is a polypore with a tough leathery context and a typically eccentric stipe; pore surface white to cream, not yellow" },
    { name: "Red-pored Bolete", scientific: "Rubroboletus pulcherrimus", danger: "toxic", distinguishingFeature: "Bright red to orange-red pore surface, flesh instantly bruises deep blue, reddish stem reticulation; causes severe GI illness (one historical fatality)" }
  ],
  culinary: {
    flavor: "Pleasantly mild with a characteristic lemony note when cooked; texture can be juicy to slightly slimy. Considered a choice edible by modern PNW field guides (Arora, Trudell & Ammirati), though Murrill historically called it 'tasteless'.",
    preparation: "Slice and saute in butter; pairs well with cream sauces, pasta, and risotto. The juicy flesh benefits from a dry saute first to drive off water before adding fat. Always check for fly larvae - cut the stem lengthwise. Susceptible to Hypomyces mold; discard moldy specimens.",
    preservation: "Difficult to preserve due to extremely juicy consistency (Murrill noted this is 'one of the most difficult species to preserve'). Drying is possible but the mushroom shrinks dramatically and can become leathery; thin slices dehydrated at 45-50 C work best. Freezing after a dry saute is more reliable than drying."
  },
  conservationNotes: "Not formally assessed by IUCN. Locally common in mature coastal hemlock forests of the PNW and dependent on coarse woody debris (decaying hemlock logs and stumps) - therefore sensitive to loss of old-growth and intensive salvage logging that removes large down wood. Considered an indicator of structurally intact, moist hemlock forest.",
  sources: [
    { name: "MykoWeb - California Fungi: Aureoboletus mirabilis (Michael Wood & Fred Stevens)", url: "https://www.mykoweb.com/CAF/species/Aureoboletus_mirabilis.html" },
    { name: "Wikipedia - Aureoboletus mirabilis (with citations to Arora, Bessette et al., Halling)", url: "https://en.wikipedia.org/wiki/Aureoboletus_mirabilis" },
    { name: "Salish Mushrooms - Admirable Bolete (PNW observations)", url: "https://salishmushrooms.com/mushrooms/admirable-bolete/" },
    { name: "WPA Mushroom Club Bolete Filter - Aureoboletus mirabilis", url: "https://boletes.wpamushroomclub.org/product/boletus-mirabilis/" },
    { name: "Mushroom Tracker - How to Identify Admirable Bolete", url: "https://www.mushroomtracker.ca/mushrooms/aureoboletus-mirabilis.html" },
    { name: "ArborTrue - Mushroom Monday: Admirable Bolete", url: "https://arbortrue.com/mushroom-monday-admirable-bolete-aureoboletus-mirabilis/" }
  ]
}
,
{
  id: "boletus-regineus",
  commonNames: ["Queen Bolete", "Dark Bolete", "California Queen Bolete"],
  scientific: "Boletus regineus",
  family: "Boletaceae",
  order: "Boletales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: [
    "Quercus chrysolepis (canyon live oak)",
    "Quercus kelloggii (California black oak)",
    "Quercus agrifolia (coast live oak)",
    "Notholithocarpus densiflorus (tanoak)",
    "Arbutus menziesii (Pacific madrone)",
    "Chrysolepis chrysophylla (golden chinquapin)",
    "Arctostaphylos spp. (manzanita)"
  ],
  hostTrees: [
    { common: "Canyon live oak", scientific: "Quercus chrysolepis" },
    { common: "California black oak", scientific: "Quercus kelloggii" },
    { common: "Coast live oak", scientific: "Quercus agrifolia" },
    { common: "Tanoak", scientific: "Notholithocarpus densiflorus" },
    { common: "Pacific madrone", scientific: "Arbutus menziesii" },
    { common: "Golden chinquapin", scientific: "Chrysolepis chrysophylla" },
    { common: "Manzanita", scientific: "Arctostaphylos spp." }
  ],
  substrate: "Soil and duff beneath hardwoods, especially oak, tanoak, and madrone; often near root zones and along ridge tops where duff is shallow.",
  habitat: "Mixed hardwood and oak-madrone woodlands, mixed evergreen forest, and oak-conifer transition zones; common in the California Coast Ranges and Sierra Nevada foothills, extending into oak woodlands of the Lake Tahoe Basin and east slope at lower elevations. Fruits solitary, scattered, or in small groups, typically after the first sustained fall rains.",
  elevationM: { min: 150, max: 1800 },
  regionsPNW: [
    "Sierra Nevada",
    "Sierra Nevada foothills (western slope)",
    "Sierra Nevada east slope",
    "Lake Tahoe Basin",
    "California foothills",
    "California Coast Ranges",
    "Northern California oak woodlands",
    "Klamath Mountains",
    "Southern Cascades (CA/OR)",
    "Southwest Oregon (Siskiyous, Rogue Valley)",
    "Great Basin oak-conifer ecotone (rare)"
  ],
  fruitingMonths: [10, 11, 12, 1, 4, 5],
  peakMonths: [11, 12],
  conditions: {
    minRain7d: 25,
    idealDaysSinceRain: [5, 14],
    tempRangeC: [7, 18],
    humidityMinPct: 70
  },
  identification: {
    cap: "5-18 cm wide, convex becoming broadly convex to flat; very dark mahogany, chocolate-brown to nearly black, often with a distinctive whitish bloom or powdery dusting when young that wears away with age; surface dry, smooth to slightly wrinkled, often with a paler margin.",
    underside: "Tubes and pores white when young, becoming cream then dull yellow to olive-yellow with age; pores small and round, do NOT stain blue when bruised (unlike many other boletes); tube layer depressed around the stem.",
    stem: "5-15 cm long, 3-6 cm thick, stout and clavate (club-shaped) when young, becoming more equal with age; whitish to pale tan or buff, often with a fine white to pale brown reticulation (net pattern) over the upper portion; firm and solid.",
    fleshColor: "Thick, firm, white and unchanging when cut (no blue staining); remains white in both cap and stem.",
    sporePrintColor: "Olive-brown to olive-yellow",
    odor: "Mild, pleasant, faintly nutty or mushroomy; taste mild and pleasant (do not consume raw).",
    sizeCm: "Cap 5-18 cm; stem 5-15 x 3-6 cm; medium to large, stout-bodied bolete."
  },
  edibility: "choice",
  toxicityNotes: "Excellent edible with no known toxicity when properly identified and cooked. Should not be eaten raw. Older specimens are frequently riddled with insect larvae and should be discarded or trimmed carefully. As with all wild boletes, eat a small portion first to test individual tolerance.",
  lookalikes: [
    {
      name: "King Bolete (American porcini)",
      scientific: "Boletus edulis",
      danger: "edible-when-cooked",
      distinguishingFeature: "B. edulis has a paler reddish-brown to tan cap without the dark mahogany color or whitish bloom of B. regineus; typically associated with conifers (spruce, pine) rather than oak/madrone."
    },
    {
      name: "Spring King Bolete",
      scientific: "Boletus rex-veris",
      danger: "edible-when-cooked",
      distinguishingFeature: "Fruits in spring at higher Sierra Nevada elevations under conifers (fir, pine); cap reddish-brown not blackish; lacks the whitish bloom and oak/madrone association of B. regineus."
    },
    {
      name: "Butter Bolete",
      scientific: "Butyriboletus persolidus (formerly B. appendiculatus group)",
      danger: "edible-when-cooked",
      distinguishingFeature: "Has bright yellow pores that often stain blue, and yellow flesh, versus white non-bluing pores and white flesh of B. regineus."
    },
    {
      name: "Satan's Bolete",
      scientific: "Rubroboletus satanas",
      danger: "toxic",
      distinguishingFeature: "Has bright red to orange pores and instantly blue-staining flesh; pale chalky cap rather than dark mahogany; causes severe GI illness."
    },
    {
      name: "Bitter Bolete",
      scientific: "Tylopilus felleus",
      danger: "inedible",
      distinguishingFeature: "Pores pinkish at maturity (not yellow-olive), spore print pink-brown, and flesh has an intensely bitter taste; reticulation on stem is dark and coarse."
    },
    {
      name: "Red-pored Bolete",
      scientific: "Boletus pulcherrimus",
      danger: "toxic",
      distinguishingFeature: "Red to orange pores, instantly and strongly blue-staining flesh; can cause severe GI distress and has been implicated in a fatality."
    },
    {
      name: "Manzanita Bolete",
      scientific: "Leccinum manzanitae",
      danger: "edible-with-caution",
      distinguishingFeature: "Has dark scabers (tufts) on the stem rather than fine reticulation; flesh stains pinkish then grayish; associated specifically with manzanita."
    }
  ],
  culinary: {
    flavor: "Rich, deeply nutty, savory porcini flavor; widely considered equal to or surpassing B. edulis by many California foragers due to denser flesh and concentrated aroma.",
    preparation: "Excellent sauteed in butter, in risottos, pasta sauces, soups, and cream-based dishes. Young firm specimens can be sliced and grilled. Always cook thoroughly. Clean dry with a brush; avoid washing.",
    preservation: "Dries exceptionally well; slice thin and dehydrate at low heat - drying intensifies the porcini aroma and reconstituted slices are prized for sauces and broths. Can also be frozen after sauteing or duxelles preparation. Powdered dried caps make a potent seasoning."
  },
  conservationNotes: "Listed as Least Concern (LC) on the IUCN Red List (Siegel 2021). Locally common across California hardwood forests with no significant population threats identified, though habitat is affected by drought, wildfire (high-severity fire damages mycorrhizal partners), and oak woodland conversion. Practice sustainable harvest: take only firm specimens, leave young and old fruitbodies, avoid disturbing the duff layer.",
  sources: [
    { name: "MykoWeb - California Fungi: Boletus regineus", url: "https://www.mykoweb.com/CAF/species/Boletus_regineus.html" },
    { name: "Arora, D. & Simonini, G. (2008) - California Porcini: Three New Taxa (Economic Botany)", url: "https://www.researchgate.net/publication/303854685_California_Porcini_Three_New_Taxa_Observations_on_Their_Harvest_and_the_Tragedy_of_No_Commons_1" },
    { name: "IUCN Red List - Boletus regineus (Siegel 2021)", url: "https://redlist.info/iucn/species_view/509546/" },
    { name: "Burke Herbarium Image Collection - Boletus regineus", url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Boletus+regineus" },
    { name: "Bay Area Mycological Society", url: "https://bayareamushrooms.org/" },
    { name: "Wikipedia - Boletus regineus", url: "https://en.wikipedia.org/wiki/Boletus_regineus" }
  ]
}
,
{
  id: "boletus-rex-veris",
  commonNames: ["Spring King Bolete", "Spring King", "Spring Porcini"],
  scientific: "Boletus rex-veris",
  family: "Boletaceae",
  order: "Boletales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Abies concolor", "Abies grandis", "Abies magnifica", "Pinus ponderosa", "Pinus contorta subsp. murrayana"],
  hostTrees: [
    { common: "White fir", scientific: "Abies concolor" },
    { common: "Grand fir", scientific: "Abies grandis" },
    { common: "Red fir", scientific: "Abies magnifica" },
    { common: "Ponderosa pine", scientific: "Pinus ponderosa" },
    { common: "Lodgepole pine", scientific: "Pinus contorta subsp. murrayana" }
  ],
  substrate: "Sandy or gravelly mineral soils under conifer duff; fruitings often buried beneath needle litter, producing 'mushrumps' (cracked mounds) before emerging.",
  habitat: "Montane and subalpine conifer forests, particularly mixed true fir and pine stands; commonly along dirt roads, trail edges, and disturbed forest floor in the snowmelt zone. Tends to fruit in clusters a few weeks after snow recedes.",
  elevationM: { min: 910, max: 2130 },
  regionsPNW: ["Oregon Cascades", "Washington Cascades", "Eastern Washington", "Eastern Oregon", "Olympic Peninsula (higher elevations)", "British Columbia interior", "Northern Idaho"],
  fruitingMonths: [5, 6, 7],
  peakMonths: [5, 6],
  conditions: {
    minRain7d: 15,
    idealDaysSinceRain: [7, 21],
    tempRangeC: [5, 18],
    humidityMinPct: 70
  },
  identification: {
    cap: "9-18 cm (up to 35 cm); convex becoming plane; viscid when moist, otherwise smooth with shallow depressions, wrinkles, or pits. Young unexposed caps nearly white, turning pinkish-tan with a silvery bloom, maturing to drab olive-brown to dark-brown with mustard tints; sometimes with an orange-red tinge.",
    underside: "Pore surface white when young, becoming cream-yellow, eventually yellowish-olive to yellowish-brown; pores small and round, depressed adjacent to the stem; does NOT bruise or stain blue when cut.",
    stem: "5-10 cm long, 2-6 cm (up to 10 cm) thick; solid, firm, often swollen or bulbous at the base; white to cream or pale brown; upper half conspicuously reticulated (fine raised net pattern).",
    fleshColor: "Thick, firm, white; unchanging when cut (no blueing or other color change).",
    sporePrintColor: "Olive-brown",
    odor: "Mild, pleasant, characteristic 'porcini' aroma; taste mild and nutty (not bitter).",
    sizeCm: "Cap 9-18 cm typical, up to 35 cm; stem 5-10 cm long x 2-6 cm thick"
  },
  edibility: "choice",
  toxicityNotes: "Generally safe; however, fruitbodies are frequently infested with fly larvae (cut the stem base to inspect for worm tunnels). As with all wild mushrooms, cook thoroughly and try a small portion first when consuming for the first time.",
  lookalikes: [
    {
      name: "Bitter Bolete",
      scientific: "Boletus rubripes",
      danger: "inedible",
      distinguishingFeature: "Stem reddish at the base and yellowish at the apex, lacking reticulation; pores bruise blue; flesh intensely bitter."
    },
    {
      name: "Red-capped Butter Bolete",
      scientific: "Boletus regius (Butyriboletus regius)",
      danger: "edible",
      distinguishingFeature: "Cap pinkish when young (similar to B. rex-veris), but pores are bright yellow and bruise blue."
    },
    {
      name: "King Bolete",
      scientific: "Boletus edulis",
      danger: "edible",
      distinguishingFeature: "More clavate (club-shaped) stipe; brownish cap lacking pinkish tints when young; rarely clustered; fruits late summer/fall, not spring."
    },
    {
      name: "Queen Bolete",
      scientific: "Boletus regineus",
      danger: "edible",
      distinguishingFeature: "Darker cap with white bloom; usually associated with oak/mixed hardwoods; fruits in fall/early winter at lower elevation."
    },
    {
      name: "Satan's Bolete",
      scientific: "Rubroboletus satanas",
      danger: "toxic",
      distinguishingFeature: "Red pore surface, stem with red reticulation, flesh bruises blue; causes severe gastrointestinal distress. Not typically found in PNW spring montane habitat, but worth noting."
    }
  ],
  culinary: {
    flavor: "Rich, meaty, nutty porcini flavor; aromatic and savory; mild without bitterness. Considered an excellent edible, on par with Boletus edulis and commercially harvested.",
    preparation: "Slice young firm buttons and saute in butter or olive oil; excellent in risottos, pasta sauces, soups, and cream sauces. Remove the spongy pore layer on older specimens for fresh cooking (texture). Always cook thoroughly. Trim worm-damaged areas; younger 'mushrump' buttons are typically least infested.",
    preservation: "Excellent for drying - slice thinly and dehydrate; drying concentrates the flavor and ameliorates any slight bitterness. Dried slices reconstitute well; can also be ground into porcini powder for soups, gravies, and sauces. Older specimens (after trimming) are particularly well-suited for drying."
  },
  conservationNotes: "Commercially harvested in Oregon and Washington; significant economic value in some regions. Subject to harvest pressure on public lands; foragers should follow USFS/BLM permit requirements, avoid raking duff (which damages mycelium), and leave mature specimens to release spores. Described as a distinct species only in 2008 (Arora & Simonini); ongoing population monitoring is limited.",
  sources: [
    { name: "MykoWeb - California Fungi: Boletus rex-veris", url: "https://www.mykoweb.com/CAF/species/Boletus_rex-veris.html" },
    { name: "Wikipedia - Boletus rex-veris", url: "https://en.wikipedia.org/wiki/Boletus_rex-veris" },
    { name: "Kitsap Peninsula Mycological Society - Spring King Bolete", url: "https://kitsapmushrooms.org/edible-mushrooms/spring-king-bolete/" },
    { name: "Puget Sound Mycological Society (Alpental) - PNW Boletes Pictorial Key", url: "https://www.alpental.com/psms/PNWMushrooms/PictorialKey/Boletes.htm" },
    { name: "Arora, D. (2008). California Porcini: Three New Taxa. Economic Botany 62(3): 356-375", url: "https://www.mykoweb.com/CAF/species/Boletus_rex-veris.html" },
    { name: "Salish Mushrooms - Spring King", url: "https://salishmushrooms.com/mushrooms/boletus-rex-veris/" }
  ]
}
,
{
  id: "calbovista-subsculpta",
  commonNames: ["Sculptured Giant Puffball", "Sculptured Puffball", "Warted Giant Puffball", "Western Sculptured Puffball"],
  scientific: "Calbovista subsculpta",
  family: "Agaricaceae",
  order: "Agaricales",
  trophicMode: "saprotrophic",
  mycorrhizalPartners: null,
  hostTrees: [],
  substrate: "Mineral soil, often gravelly or broken-rock substrates along dirt roads, trails, and open areas; decomposes buried plant debris.",
  habitat: "Open coniferous forests, road cuts, trail edges, and openings in subalpine and high-montane zones; common in spring snowmelt areas alongside morels.",
  elevationM: { min: 900, max: 3400 },
  regionsPNW: ["Sierra Nevada", "Eastern Sierra", "Great Basin", "subalpine", "high country"],
  fruitingMonths: [4, 5, 6, 7, 8],
  peakMonths: [5, 6, 7],
  conditions: {
    minRain7d: 8,
    idealDaysSinceRain: [3, 14],
    tempRangeC: [4, 22],
    humidityMinPct: 50
  },
  identification: {
    cap: "Subglobose to slightly compressed fruiting body 8-15 cm across, white to cream when young becoming brownish with age; surface covered in broad, low, felty pyramidal warts up to ~1.5 cm wide and ~0.5 cm tall - diagnostic.",
    underside: "Prominent sterile base (subgleba) comprising roughly one-quarter to one-third of the height, attached to substrate by a long, root-like mycelial cord.",
    stem: "No true stem; rooted base/pseudostipe rather than a stipe.",
    fleshColor: "Gleba pure white and firm when young (edible stage), turning yellow, then olive, then dark brown and powdery as spores mature.",
    sporePrintColor: "Blackish-brown (spore mass)",
    odor: "Mild, pleasant, mushroomy when fresh; no distinctive smell",
    sizeCm: "8-15 cm diameter, 6-10 cm tall (grapefruit-sized)"
  },
  edibility: "edible",
  toxicityNotes: "Only eat when the interior flesh (gleba) is pure white and firm throughout. Once flesh shows any yellow, olive, or brown discoloration, discard - mature spore mass can cause GI upset. Always slice top-to-bottom to confirm uniform white interior and to rule out developing Amanita button (which would show gill outlines).",
  lookalikes: [
    {
      name: "Sculptured Puffball",
      scientific: "Calvatia sculpta",
      danger: "edible",
      distinguishingFeature: "Tall, hooked/pointed pyramidal warts that remain prominent in age; more erect stature with distinct pseudostipe; lacks the rooted mycelial base of C. subsculpta."
    },
    {
      name: "Western Giant Puffball",
      scientific: "Calvatia booniana",
      danger: "edible",
      distinguishingFeature: "Much larger (to 60 cm), broadly flattened, with smoother surface and only thin flat patches rather than pyramidal warts; lacks well-developed sterile subgleba."
    },
    {
      name: "Gem-studded Puffball",
      scientific: "Lycoperdon perlatum",
      danger: "edible",
      distinguishingFeature: "Much smaller (2-6 cm), pear-shaped with conical spines that rub off leaving a netted pattern; lower elevations and woodlands."
    },
    {
      name: "Amanita button (Death Cap / Destroying Angel)",
      scientific: "Amanita spp.",
      danger: "deadly",
      distinguishingFeature: "When sliced vertically, an Amanita button shows the outline of a developing cap, gills, and stem inside a universal veil - a true puffball is uniformly solid white flesh with no internal structure. ALWAYS slice every puffball before eating."
    },
    {
      name: "Earthball",
      scientific: "Scleroderma spp.",
      danger: "toxic",
      distinguishingFeature: "Thick, hard, leathery rind; interior turns purple-black very early even when small; smaller and lacks pyramidal warts; causes GI poisoning."
    }
  ],
  culinary: {
    flavor: "Mild, slightly nutty, sponge-like texture; takes on flavors of butter, garlic, and seasonings well. Considered good but not choice.",
    preparation: "Peel off the warty outer skin, slice into 1-2 cm steaks, and pan-fry in butter until golden on both sides. Excellent breaded and sauteed, or cubed into stews, soups, and scrambles. Cook thoroughly.",
    preservation: "Best eaten fresh - high water content makes it poor for drying. Can be sauteed and frozen in portions, or sliced and dehydrated though texture suffers."
  },
  conservationNotes: "Common in suitable subalpine and montane habitat throughout western North America; no conservation concern. Practice low-impact harvesting on fragile high-elevation soils and stay on durable surfaces near trails and road cuts where it often fruits.",
  sources: [
    { name: "MykoWeb - California Fungi: Calbovista subsculpta", url: "https://www.mykoweb.com/CAF/species/Calbovista_subsculpta.html" },
    { name: "Wikipedia - Calbovista", url: "https://en.wikipedia.org/wiki/Calbovista" },
    { name: "Burke Herbarium Image Collection - Calbovista subsculpta", url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Calbovista+subsculpta" }
  ]
}
,
{
  id: "calvatia-booniana",
  commonNames: ["Western Giant Puffball", "Boone's Puffball"],
  scientific: "Calvatia booniana",
  family: "Agaricaceae",
  order: "Agaricales",
  trophicMode: "saprotrophic",
  mycorrhizalPartners: null,
  hostTrees: [],
  substrate: "Composted/rich soil in open grassy or arid ground; sagebrush flats, pastures, roadsides, meadows, and dry forest openings.",
  habitat: "Arid sagebrush steppe, semi-desert grasslands, pastures, fairy rings in dry meadows, and subalpine meadows at higher elevations. Characteristic of the dry interior west of the Rockies, occurring east of the Cascades in the PNW.",
  elevationM: { min: 200, max: 2800 },
  regionsPNW: [
    "Eastern Washington (Columbia Basin, sagebrush steppe)",
    "Eastern Oregon (high desert, Blue Mountains)",
    "Southern Interior British Columbia (Okanagan, Thompson)",
    "Southern Idaho",
    "Eastern slope of the Cascades"
  ],
  fruitingMonths: [6, 7, 8, 9, 10],
  peakMonths: [8, 9],
  conditions: {
    minRain7d: 15,
    idealDaysSinceRain: [3, 10],
    tempRangeC: [10, 28],
    humidityMinPct: null
  },
  identification: {
    cap: "No true cap; fruit body is a large round to flattened-spherical puffball, white to tan, with surface prominently sculpted into broad polygonal warts, plaques, or flat scales (NOT smooth like C. gigantea).",
    underside: "Sits directly on the ground with a small basal attachment; no gills, pores, or distinct underside.",
    stem: "No stipe; attached to substrate by a small cord-like mycelial base.",
    fleshColor: "Interior (gleba) firm and pure white when young and edible; becomes yellow then olive-brown and slimy, finally powdery brown at spore maturity (inedible once any yellow/olive color develops).",
    sporePrintColor: "Olive-brown to brown in mass (spores released as powdery dust at maturity)",
    odor: "Mild, pleasant, mushroomy when young; becoming unpleasant as gleba yellows.",
    sizeCm: "10-70 cm in diameter (commonly 20-60 cm); one of the largest mushrooms in western North America."
  },
  edibility: "edible",
  toxicityNotes: "Edible ONLY when interior flesh is pure homogeneous white throughout. Any yellow, olive, greenish, or brown discoloration of the gleba indicates the puffball is past its edible stage and may cause GI upset. CRITICAL SAFETY CHECK: Always slice every puffball vertically from top to bottom before eating. If you see the outline of a developing mushroom (cap, stem, gills) inside, it is NOT a puffball — it is an Amanita button stage, which can be deadly. True puffball flesh is uniform white marshmallow-like tissue with no internal structures.",
  lookalikes: [
    {
      name: "Amanita button stage (e.g., Death Cap, Destroying Angel)",
      scientific: "Amanita spp. (A. phalloides, A. ocreata, A. smithiana)",
      danger: "deadly",
      distinguishingFeature: "Amanita buttons are MUCH smaller (golf-ball to tennis-ball size) and, when sliced vertically, reveal the silhouette of a developing gilled mushroom (cap, stem, gills) inside the universal veil. A true Calvatia booniana sliced in half shows ONLY uniform white marshmallow-like flesh with no internal structure. ALWAYS slice every puffball from top to bottom before eating."
    },
    {
      name: "Giant Puffball",
      scientific: "Calvatia gigantea",
      danger: "edible",
      distinguishingFeature: "Surface is smooth (not warty/scaly); occurs east of the Rockies, not in the interior PNW."
    },
    {
      name: "Sculptured Puffball",
      scientific: "Calvatia subsculpta",
      danger: "edible",
      distinguishingFeature: "Smaller fruiting body with large pyramidal warts (vs. broad flat polygonal scales of C. booniana); typically subalpine."
    },
    {
      name: "Thick-skinned Puffball",
      scientific: "Calvatia pachyderma",
      danger: "edible",
      distinguishingFeature: "Softball-sized with a thick rind-like peridium and no subgleba; smaller and globose."
    },
    {
      name: "Pestle Puffball",
      scientific: "Lycoperdon utriforme (Handkea utriformis)",
      danger: "edible",
      distinguishingFeature: "Has a thick stem-like pseudostipe and develops a crater-like apical opening in age; C. booniana lacks any pseudostipe."
    },
    {
      name: "Common Earthball",
      scientific: "Scleroderma citrinum",
      danger: "toxic",
      distinguishingFeature: "Thick, tough leathery rind; interior quickly turns purplish-black (not white); causes GI upset. Much smaller than C. booniana."
    }
  ],
  culinary: {
    flavor: "Mild, slightly nutty, marshmallow-like spongy texture; absorbs surrounding flavors well. A blank canvas often compared to tofu or eggplant.",
    preparation: "Peel off tough outer skin if present. Slice into thick steaks or cubes. Best battered and fried, sauteed in butter, or used as a meat substitute (e.g., 'puffball parmesan,' breaded cutlets, pizza base). Do NOT wash in water — the spongy flesh becomes soggy; brush clean or wipe with damp cloth. Trim any buggy or tough portions.",
    preservation: "Does not preserve well due to high water content. Can be dehydrated into powder for flavoring soups/stocks, or frozen after sauteing. Best eaten fresh within 1-2 days of harvest."
  },
  conservationNotes: "Not of conservation concern; locally common in suitable arid habitat. Sustainable harvest impact is minimal as a single mature fruit body releases trillions of spores; harvest while pure white and leave older specimens to sporulate.",
  sources: [
    { name: "MushroomExpert.Com - Calvatia booniana (Michael Kuo)", url: "https://www.mushroomexpert.com/calvatia_booniana.html" },
    { name: "MykoWeb California Fungi - Calvatia booniana", url: "https://www.mykoweb.com/CAF/species/Calvatia_booniana.html" },
    { name: "Wikipedia - Calvatia booniana", url: "https://en.wikipedia.org/wiki/Calvatia_booniana" },
    { name: "Northern Bushcraft - Western Giant Puffball (BC)", url: "https://northernbushcraft.com/mushrooms/westernGiantPuffball/bc.htm" },
    { name: "Fungus Fact Friday #156: Calvatia gigantea (Amanita button safety check)", url: "https://www.fungusfactfriday.com/156-calvatia-gigantea/" },
    { name: "Forager Chef - Puffball Mushrooms (Amanita lookalike guide)", url: "https://foragerchef.com/puffball-mushrooms" }
  ]
}
,
{
  id: "cantharellus-cascadensis",
  commonNames: ["Cascade Chanterelle", "Hybrid Chanterelle"],
  scientific: "Cantharellus cascadensis",
  family: "Hydnaceae",
  order: "Cantharellales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Pseudotsuga menziesii", "Tsuga heterophylla"],
  hostTrees: [
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Western hemlock", scientific: "Tsuga heterophylla" }
  ],
  substrate: "Forest floor duff and moss under conifers",
  habitat: "Scattered to gregarious on the forest floor in moist coniferous forests, especially second-growth Douglas-fir and western hemlock stands; type locality H.J. Andrews Experimental Forest, central Oregon Cascades",
  elevationM: { min: 100, max: 1500 },
  regionsPNW: ["Oregon Cascades", "Oregon Coast Range", "Washington Cascades", "Northern California (Mendocino Co. and northward, Sierra Nevada)", "Southwest British Columbia"],
  fruitingMonths: [9, 10, 11, 12],
  peakMonths: [10, 11],
  conditions: { minRain7d: 25, idealDaysSinceRain: [5, 14], tempRangeC: [7, 18], humidityMinPct: 80 },
  identification: {
    cap: "Bright yellow to orange-yellow, 4-12 cm broad, convex becoming flat to shallowly depressed with wavy/lobed margin; surface smooth to slightly wooly (less scaly than C. formosus)",
    underside: "Pallid to pale yellow shallow decurrent ridges (false gills/folds), often forked and cross-veined, running down the stem",
    stem: "Solid, often clavate or bulbous at the base, whitish to pale yellow, 3-8 cm long",
    fleshColor: "Whitish to pale yellow, firm and solid",
    sporePrintColor: "Pale yellow to pale orange-yellow",
    odor: "Mildly fragrant, fruity (apricot-like, typical of chanterelles)",
    sizeCm: "Cap 4-12 cm; stem 3-8 cm long, 1-3 cm thick"
  },
  edibility: "choice",
  toxicityNotes: null,
  lookalikes: [
    { name: "Pacific Golden Chanterelle", scientific: "Cantharellus formosus", danger: "edible", distinguishingFeature: "Yellowish-orange to salmon cap with ochraceous scales that bruises brownish; more slender, tapered stipe; pinkish-tinged gill folds" },
    { name: "Rainbow Chanterelle", scientific: "Cantharellus roseocanus", danger: "edible", distinguishingFeature: "Pink bloom on young cap margin; bright orange gill folds contrasting with cap; associated primarily with spruce" },
    { name: "White Chanterelle", scientific: "Cantharellus subalbidus", danger: "edible", distinguishingFeature: "Creamy white cap and overall pallid coloration, bruises yellowish-orange" },
    { name: "False Chanterelle", scientific: "Hygrophoropsis aurantiaca", danger: "GI-upset", distinguishingFeature: "True forked gills (not blunt folds); deeper orange color; lacks apricot odor; often grows on rotting wood/duff" },
    { name: "Western Jack-O'-Lantern", scientific: "Omphalotus olivascens", danger: "toxic", distinguishingFeature: "True thin sharp gills (not folds); grows in clusters from wood/stumps or buried roots; olive-orange tones; bioluminescent gills; causes severe GI distress" }
  ],
  culinary: {
    flavor: "Fruity, mildly peppery, apricot-like aroma; excellent edible regarded as equivalent in quality to C. formosus",
    preparation: "Dry-saute first to release water, then finish with butter or oil; pairs well with eggs, cream, poultry, and pasta; do not eat raw",
    preservation: "Best fresh; can be dry-sauteed and frozen, pickled, or duxelles-preserved; does not dry as well as boletes (becomes leathery)"
  },
  conservationNotes: "Not formally listed; locally common in PNW conifer forests. As an ectomycorrhizal species dependent on mature/second-growth conifers, populations are vulnerable to clear-cut logging and forest conversion. Commercially harvested in the PNW; sustainable picking practices recommended.",
  sources: [
    { name: "MykoWeb - California Fungi: Cantharellus cascadensis", url: "https://www.mykoweb.com/CAF/species/Cantharellus_cascadensis.html" },
    { name: "Dunham, S.M., O'Dell, T.E. & Molina, R. (2003) - Mycological Research 107(10): 1163-1177 (protologue)", url: "https://www.sciencedirect.com/science/article/abs/pii/S0953756208613167" },
    { name: "Burke Herbarium Image Collection - Cantharellus cascadensis", url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Cantharellus+cascadensis" },
    { name: "GBIF - Cantharellus cascadensis Dunham, O'Dell & R.Molina", url: "https://www.gbif.org/species/5249497" },
    { name: "Wikipedia - Cantharellus cascadensis", url: "https://en.wikipedia.org/wiki/Cantharellus_cascadensis" }
  ]
}
,
{
  id: "cantharellus-formosus",
  commonNames: ["Pacific Golden Chanterelle", "Pacific Chanterelle", "Golden Chanterelle"],
  scientific: "Cantharellus formosus",
  family: "Cantharellaceae",
  order: "Cantharellales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Pseudotsuga menziesii", "Tsuga heterophylla", "Picea sitchensis"],
  hostTrees: [
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Western hemlock", scientific: "Tsuga heterophylla" },
    { common: "Sitka spruce", scientific: "Picea sitchensis" }
  ],
  substrate: "moss and duff under conifers",
  habitat: "Ectomycorrhizal with conifers in moist coastal and montane forests, especially young to mid-seral (40-60 year) Douglas-fir and western hemlock stands. Fruits from soil, often hidden under moss, sword fern, salal, and Oregon grape, typically on shaded north-facing slopes.",
  elevationM: { min: 0, max: 1500 },
  regionsPNW: ["Coast Range", "Cascades west slope", "Olympics", "Puget lowlands", "Vancouver Island", "Oregon Coast"],
  fruitingMonths: [7, 8, 9, 10, 11, 12],
  peakMonths: [10, 11],
  conditions: {
    minRain7d: 25,
    idealDaysSinceRain: [7, 14],
    tempRangeC: [7, 18],
    humidityMinPct: 80
  },
  identification: {
    cap: "Yellowish-orange to salmon, fading to grayish-brown with age; dry, finely felted to smooth surface; convex when young, expanding to flat then funnel-shaped with wavy inrolled margins; 2-14 cm across",
    underside: "False gills - blunt, forked, decurrent ridges/veins with cross-veins (not true gills); orangey-yellow to salmon-pink, paler than cap, easily peeled from cap",
    stem: "Whitish to pale yellow, cylindrical or tapering downward, solid, fibrous; 4-10 cm long x 0.4-2.2 cm thick; bruises yellowish to ochre",
    fleshColor: "White to pale yellow, firm and solid",
    sporePrintColor: "Pale yellow to creamy yellow",
    odor: "Mild, sweet, fruity - reminiscent of apricots",
    sizeCm: "2-14 cm cap, 4-10 cm stem"
  },
  edibility: "choice",
  toxicityNotes: null,
  lookalikes: [
    { name: "False Chanterelle", scientific: "Hygrophoropsis aurantiaca", danger: "GI-upset", distinguishingFeature: "True forked gills (not blunt ridges), deeper orange color, soft thin flesh, brown stem base, no apricot odor" },
    { name: "Jack O'Lantern", scientific: "Omphalotus olivascens", danger: "toxic", distinguishingFeature: "Grows in clusters on wood (sometimes buried), has true sharp gills with greenish cast, orange inner flesh, bioluminescent gills" },
    { name: "Woolly Chanterelle", scientific: "Turbinellus floccosus", danger: "GI-upset", distinguishingFeature: "Deeply vase-shaped with scaly orange-red interior, hollow center, causes GI upset in many people" },
    { name: "Rainbow Chanterelle", scientific: "Cantharellus roseocanus", danger: "edible", distinguishingFeature: "Stockier with thicker stem relative to length, brighter orange gills, pinkish cap margin when young; associated with spruce/pine" },
    { name: "Cascade Chanterelle", scientific: "Cantharellus cascadensis", danger: "edible", distinguishingFeature: "Gills and stipe lighter than cap (more two-toned), often larger with thinner wavy caps fading white in center, later fruiting season" },
    { name: "White Chanterelle", scientific: "Cantharellus subalbidus", danger: "edible", distinguishingFeature: "Pale ivory to white cap, gills, and stem; bruises yellow-orange to rust" }
  ],
  culinary: {
    flavor: "Delicate, mildly peppery with a fruity apricot aroma; rich umami when cooked",
    preparation: "Dry-saute first to release water, then finish with butter, shallots, thyme, or cream; pairs with eggs, pasta, poultry, and white wine. Avoid washing - brush clean.",
    preservation: "Best preserved by sauteing then freezing, or by duxelles; can be dehydrated but loses texture; pickling in vinegar/oil also common"
  },
  conservationNotes: "IUCN Red List status: Least Concern. Populations are stable or expanding in managed second-growth forests. Commercially harvested at scale across the PNW; long-term studies show plucking does not suppress fruiting, though stem-cutting may slightly depress biomass. Sensitive to soil compaction and clearcut disturbance.",
  sources: [
    { name: "MykoWeb - California Fungi: Cantharellus formosus", url: "https://www.mykoweb.com/CAF/species/Cantharellus_formosus.html" },
    { name: "UBC Beaty Museum - Mushrooms Up!: Cantharellus formosus", url: "https://explore.beatymuseum.ubc.ca/mushroomsup/C_formosus.html" },
    { name: "Pilz, Norvell, Danell et al. (2003) - Ecology and Management of Commercially Harvested Chanterelle Mushrooms, USDA PNW-GTR-576", url: "https://www.fs.fed.us/pnw/pubs/pnw_gtr576.pdf" },
    { name: "Dunham, O'Dell & Molina (2006) - Forest stand age and occurrence of chanterelle species in Oregon's central Cascades, Mycological Research 110(12):1433-40", url: "https://pubmed.ncbi.nlm.nih.gov/17123812" },
    { name: "IUCN Red List - Cantharellus formosus", url: "https://redlist.info/iucn/species_view/327480/" }
  ]
}
,
{
  id: "cantharellus-roseocanus",
  commonNames: ["Rainbow Chanterelle", "Pink Chanterelle"],
  scientific: "Cantharellus roseocanus",
  family: "Cantharellaceae",
  order: "Cantharellales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Picea sitchensis", "Picea engelmannii", "Pinus muricata", "Pinus banksiana", "Abies spp."],
  hostTrees: [
    { common: "Sitka spruce", scientific: "Picea sitchensis" },
    { common: "Engelmann spruce", scientific: "Picea engelmannii" },
    { common: "Bishop pine", scientific: "Pinus muricata" },
    { common: "Shore pine", scientific: "Pinus contorta var. contorta" },
    { common: "Western hemlock", scientific: "Tsuga heterophylla" },
    { common: "Pacific silver fir", scientific: "Abies amabilis" }
  ],
  substrate: "mossy soil and conifer duff",
  habitat: "Ectomycorrhizal with conifers, most reliably with spruce (Sitka spruce in coastal forests, Engelmann spruce at montane elevations) and with pines in some ranges. Fruits solitary to gregarious, often in small clusters, on mossy soil or in needle/leaf litter, particularly along the immediate coast in Sitka spruce-hemlock rainforest and in the high Cascades and Rocky Mountains under spruce.",
  elevationM: { min: 0, max: 2200 },
  regionsPNW: ["Pacific Coast", "Vancouver Island", "Olympic Peninsula", "Oregon Coast", "Cascades high elevations", "British Columbia coast", "Coastal Alaska", "Rocky Mountains"],
  fruitingMonths: [7, 8, 9, 10, 11, 12, 1],
  peakMonths: [9, 10],
  conditions: {
    minRain7d: 20,
    idealDaysSinceRain: [7, 14],
    tempRangeC: [5, 18],
    humidityMinPct: 80
  },
  identification: {
    cap: "Bright yellow-orange to peachy or salmon-orange; young caps notably covered with a pinkish-buff bloom or pinkish blush, especially near the inrolled margin; smooth to faintly felted, convex becoming flat to shallowly depressed with wavy margin; bruises little compared to C. formosus; 3-12 cm across",
    underside: "False gills - blunt, decurrent, forked ridges with cross-veins (not true gills); brilliant peachy-orange to bright orange, the most vividly pigmented hymenophore of any PNW chanterelle, contrasting strongly with the paler cap",
    stem: "Whitish to pale yellow or pale orange, often stockier and thicker relative to length than C. formosus; cylindrical to slightly tapering, solid, firm; 3-8 cm long x 1-3 cm thick",
    fleshColor: "White to pale yellowish, firm and solid",
    sporePrintColor: "Pale yellow to creamy",
    odor: "Mild, sweet, fruity-apricot",
    sizeCm: "3-12 cm cap, 3-8 cm stem"
  },
  edibility: "choice",
  toxicityNotes: null,
  lookalikes: [
    { name: "Pacific Golden Chanterelle", scientific: "Cantharellus formosus", danger: "edible", distinguishingFeature: "Lacks pinkish bloom on cap; develops grayish-brown shades with age; readily bruises yellow to ochraceous; paler gill folds (often with pink tones); thinner-stemmed; more typically with Douglas-fir and hemlock" },
    { name: "Cascade Chanterelle", scientific: "Cantharellus cascadensis", danger: "edible", distinguishingFeature: "Gills and stipe distinctly paler than cap (more two-toned); lacks pinkish cap bloom; bruises yellow more readily; thinner cap that often fades whitish in center" },
    { name: "White Chanterelle", scientific: "Cantharellus subalbidus", danger: "edible", distinguishingFeature: "Pale ivory to white cap, gills, and stem; bruises orange to rust; lacks bright orange hymenophore" },
    { name: "False Chanterelle", scientific: "Hygrophoropsis aurantiaca", danger: "GI-upset", distinguishingFeature: "True forked gills (sharp-edged, not blunt ridges), thin soft flesh, deeper orange overall, brown stem base, no apricot odor" },
    { name: "Woolly Chanterelle", scientific: "Turbinellus floccosus", danger: "GI-upset", distinguishingFeature: "Deeply vase-shaped with scaly orange-red interior, hollow center; causes GI upset in many people" },
    { name: "Jack O'Lantern", scientific: "Omphalotus olivascens", danger: "toxic", distinguishingFeature: "Clusters on wood (often buried roots), true sharp gills with greenish cast, orange flesh, bioluminescent gills" }
  ],
  culinary: {
    flavor: "Rich, fruity-apricot aroma with mild peppery sweetness; considered among the most flavorful PNW chanterelles, with firm meaty texture from its stockier build",
    preparation: "Dry-saute first to drive off moisture, then finish with butter, shallots, garlic, thyme, or cream; excellent with eggs, pasta, risotto, poultry, and white wine. Brush clean rather than wash.",
    preservation: "Best sauteed then frozen, or made into duxelles; can be dehydrated though texture suffers; pickling in vinegar/oil works well"
  },
  conservationNotes: "IUCN Red List status: Least Concern (Siegel 2021). Considered the 'third PNW chanterelle' alongside C. formosus and C. subalbidus, formally elevated from a variety of C. cibarius to species rank by Redhead, Norvell & Moncalvo (2012). Commercially harvested across its range; populations appear stable in mature spruce stands but locally sensitive to coastal habitat loss and soil disturbance.",
  sources: [
    { name: "MykoWeb - California Fungi: Cantharellus roseocanus", url: "https://www.mykoweb.com/CAF/species/Cantharellus_roseocanus.html" },
    { name: "UBC Beaty Museum - Mushrooms Up!: Cantharellus roseocanus", url: "https://explore.beatymuseum.ubc.ca/mushroomsup/C_roseocanus.html" },
    { name: "Burke Herbarium Image Collection - Cantharellus roseocanus", url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Cantharellus+roseocanus" },
    { name: "IUCN Red List - Cantharellus roseocanus (Siegel 2021)", url: "https://redlist.info/iucn/species_view/550056/" },
    { name: "Redhead, S.A. (2012) - Nomenclatural Novelties, Index Fungorum 5: 1", url: "http://www.indexfungorum.org/Publications/Index%20Fungorum%20no.5.pdf" },
    { name: "Redhead, Norvell & Danell (1997) - Cantharellus formosus and the Pacific golden chanterelle harvest in western North America, Mycotaxon 65: 285-322 (protologue)", url: "http://www.cybertruffle.org.uk/cyberliber/59575/0065/0285.htm" }
  ]
}
,
{
  id: "cantharellus-subalbidus",
  commonNames: ["White Chanterelle", "Pacific White Chanterelle"],
  scientific: "Cantharellus subalbidus",
  family: "Cantharellaceae",
  order: "Cantharellales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Pseudotsuga menziesii", "Tsuga heterophylla", "Pinus ponderosa", "Pinus contorta", "Arbutus menziesii"],
  hostTrees: [
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Western hemlock", scientific: "Tsuga heterophylla" },
    { common: "Pacific madrone", scientific: "Arbutus menziesii" },
    { common: "Ponderosa pine", scientific: "Pinus ponderosa" },
    { common: "Lodgepole pine", scientific: "Pinus contorta" }
  ],
  substrate: "soil and duff under conifers and mixed conifer-madrone forests",
  habitat: "Ectomycorrhizal with conifers and Pacific madrone, strongly associated with mature to old-growth coniferous forests (typically 200-1000 years old) at low to mid elevations. Fruits singly, scattered, or in small clusters in deep duff, often partially buried so only the cap dome is visible at the surface.",
  elevationM: { min: 0, max: 1200 },
  regionsPNW: ["Coast Range", "Cascades west slope", "Olympics", "Puget lowlands", "Vancouver Island", "Oregon Coast", "Klamath-Siskiyou", "northern California"],
  fruitingMonths: [8, 9, 10, 11, 12, 1],
  peakMonths: [10, 11],
  conditions: {
    minRain7d: 25,
    idealDaysSinceRain: [7, 14],
    tempRangeC: [5, 17],
    humidityMinPct: 80
  },
  identification: {
    cap: "White to creamy white when fresh, developing yellowish to orange-buff stains where bruised or aged; convex when young, becoming flat then depressed to funnel-shaped with wavy, inrolled margins; dry, smooth to finely matted; often partially buried in duff; 5-15 cm (occasionally to 25 cm) across",
    underside: "False gills - blunt, shallow, forked decurrent ridges with cross-veins (not true gills); white to pale cream, bruising yellowish-orange to rust",
    stem: "White to cream, bruising orange to ochre; thick, stout, solid, often tapering downward; 2-7 cm long x 1-3 cm thick",
    fleshColor: "White, thick, firm and solid; staining yellow-orange where cut or bruised",
    sporePrintColor: "White to very pale cream",
    odor: "Mild, faintly sweet - lacks the strong apricot aroma typical of other chanterelles",
    sizeCm: "5-15 cm cap (up to 25 cm), 2-7 cm stem"
  },
  edibility: "choice",
  toxicityNotes: null,
  lookalikes: [
    { name: "Pacific Golden Chanterelle", scientific: "Cantharellus formosus", danger: "edible", distinguishingFeature: "Yellowish-orange to salmon cap (not white), pale yellow spore print, distinct apricot odor" },
    { name: "California Chanterelle", scientific: "Cantharellus californicus", danger: "edible", distinguishingFeature: "Evenly yellow to orange-yellow coloration, associated with oaks rather than conifers/madrone" },
    { name: "Matsutake / American Pine Mushroom", scientific: "Tricholoma magnivelare", danger: "edible", distinguishingFeature: "Has true plate-like gills (not blunt ridges), a well-developed partial veil/ring, and a strong spicy cinnamon-Red-Hots odor; gills are not decurrent" },
    { name: "Leucopaxillus albissimus", scientific: "Leucopaxillus albissimus", danger: "inedible", distinguishingFeature: "True, crowded, subdecurrent gills (not blunt ridges); tough bitter flesh; typically associated with redwood or eucalyptus duff" },
    { name: "Angel Wings", scientific: "Pleurocybella porrigens", danger: "toxic", distinguishingFeature: "White shelving fruitbodies growing directly on conifer wood with true thin gills; no stipe in soil; implicated in fatal encephalopathy" },
    { name: "Destroying Angel", scientific: "Amanita ocreata", danger: "deadly", distinguishingFeature: "True white plate-like gills (free from stem), white spore print, partial veil/ring, basal volva/cup; never has blunt decurrent ridges" }
  ],
  culinary: {
    flavor: "Mild, sweet, nutty with a meaty, firm texture; considered by many foragers to be superior to golden chanterelles - sweeter and silkier when fresh and firm",
    preparation: "Dry-saute first to drive off water, then finish with butter, shallots, cream, or wine; excellent in pasta, risotto, omelets, and cream-based sauces. Brush clean rather than washing; thicker flesh holds up to longer cooking than golden chanterelles.",
    preservation: "Best preserved by sauteing then freezing, or by making duxelles; can be dehydrated but loses some texture; pickling and confit also used commercially"
  },
  conservationNotes: "Listed as a Survey and Manage Strategy 1 species under the Northwest Forest Plan due to association with old-growth forests; more abundant in mature/old-growth stands than in young second-growth. Sensitive to clearcut harvest and soil compaction; commercially harvested in the PNW alongside other chanterelle species.",
  sources: [
    { name: "MykoWeb - California Fungi: Cantharellus subalbidus", url: "https://www.mykoweb.com/CAF/species/Cantharellus_subalbidus.html" },
    { name: "MushroomExpert.com - Cantharellus subalbidus", url: "http://www.mushroomexpert.com/cantharellus_subalbidus.html" },
    { name: "Castellano, Smith, O'Dell, Cazares & Nugent (1999) - Handbook to Strategy 1 Fungal Species in the Northwest Forest Plan, USDA PNW-GTR (includes C. subalbidus)", url: "https://www.fs.fed.us/pnw/pubs/pnw_gtr476.pdf" },
    { name: "Oregon Discovery - Oregon Chanterelles: White Chanterelle", url: "https://oregondiscovery.com/chanterelles" },
    { name: "iNaturalist - Cantharellus subalbidus", url: "https://www.inaturalist.org/taxa/54132-Cantharellus-subalbidus" }
  ]
}
,
{
  id: "catathelasma-ventricosum",
  commonNames: [
    "Swollen-stalked Cat",
    "Swollen-stalked Catathelasma",
    "Western Catathelasma",
    "Cat Mushroom",
    "Mock Matsutake",
    "Momitake"
  ],
  scientific: "Catathelasma ventricosum",
  family: "Biannulariaceae",
  order: "Agaricales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: [
    "Picea engelmannii",
    "Abies lasiocarpa",
    "Abies amabilis",
    "Tsuga heterophylla",
    "Pseudotsuga menziesii"
  ],
  hostTrees: [
    { common: "Engelmann spruce", scientific: "Picea engelmannii" },
    { common: "Subalpine fir", scientific: "Abies lasiocarpa" },
    { common: "Pacific silver fir", scientific: "Abies amabilis" },
    { common: "Western hemlock", scientific: "Tsuga heterophylla" },
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" }
  ],
  substrate: "Soil (often calcareous) in coniferous forests; the rooting stipe is frequently buried so only the cap and upper stem are visible above ground.",
  habitat: "Mature montane and subalpine conifer forests, typically on calcareous or well-drained mineral soils. Often fruits in large local populations forming arcs, rings, or troops beneath spruce and fir.",
  elevationM: { min: 600, max: 2200 },
  regionsPNW: [
    "Cascades (WA)",
    "Cascades (OR)",
    "Olympic Peninsula",
    "Northern Rockies (ID/MT)",
    "British Columbia interior",
    "Blue Mountains"
  ],
  fruitingMonths: [8, 9, 10, 11],
  peakMonths: [9, 10],
  conditions: {
    minRain7d: 25,
    idealDaysSinceRain: [5, 14],
    tempRangeC: [4, 16],
    humidityMinPct: 75
  },
  identification: {
    cap: "8-30+ cm broad; convex becoming broadly convex to nearly flat; dry; smooth or with scattered pressed-down fibrils in age; whitish overall, developing grayish areas, fibrils, and spots; margin strongly inrolled when young.",
    underside: "Gills decurrent (running down the stem) or beginning to do so; close to crowded; narrow; whitish, sometimes discoloring grayish with age.",
    stem: "Up to 15 cm long, 5 cm wide; often distinctly swollen (ventricose) in the middle; tapering at the base and rooting, sometimes almost entirely buried; whitish, discoloring brownish or grayish; bearing a flaring, conspicuous double ring formed by two distinct veils.",
    fleshColor: "White; hard and tough; not changing on exposure.",
    sporePrintColor: "white",
    odor: "Mild, not distinctive, or slightly unpleasant; not strongly mealy/farinaceous (distinguishing it from C. imperiale) and lacking the spicy-cinnamon fragrance of true matsutake.",
    sizeCm: "Cap 8-30+ cm; stem 6-15 cm tall x 3-5 cm wide (swollen middle)."
  },
  edibility: "edible",
  toxicityNotes: "Reported edible but considered tough and of mediocre quality by many foragers; slow-cooked or pickled preparations are typically preferred. Some individuals find the slightly unpleasant or bitter taste off-putting. As with any large fleshy mushroom, eat only well-cooked, fresh specimens in moderation.",
  lookalikes: [
    {
      name: "Imperial Cat",
      scientific: "Catathelasma imperiale",
      danger: "edible",
      distinguishingFeature: "Larger overall, with a sticky brownish to reddish-brown cap (vs. whitish/pale gray) and a strongly mealy/cucumber-like odor and taste."
    },
    {
      name: "Western Matsutake (American Matsutake / Pine Mushroom)",
      scientific: "Tricholoma murrillianum",
      danger: "edible",
      distinguishingFeature: "Has a single (not double) ring, gills that are adnate/notched rather than long-decurrent, no rooting tapered stem base, and a strongly spicy-cinnamon/sweet fragrance absent in C. ventricosum."
    },
    {
      name: "Caligatum-group Matsutake",
      scientific: "Tricholoma caligatum",
      danger: "edible",
      distinguishingFeature: "Cap with brown fibrillose scales, single sheathing ring, and a strong matsutake-like odor; lacks the decurrent gills and double ring of Catathelasma."
    },
    {
      name: "Smith's Amanita",
      scientific: "Amanita smithiana",
      danger: "toxic",
      distinguishingFeature: "Whitish cap with cottony warts, free (not decurrent) gills, a basal bulb/volva rather than a rooting tapered base, and a single ring. Contains nephrotoxins causing delayed kidney failure - critical to distinguish."
    },
    {
      name: "White Matsutake / Deadly Parasol confusion",
      scientific: "Amanita silvicola",
      danger: "toxic",
      distinguishingFeature: "Free gills, fragile single veil remnants and a basal volva/bulb; lacks the rooting stem, double ring, and decurrent gills of Catathelasma."
    }
  ],
  culinary: {
    flavor: "Mild to slightly bitter or unpleasant raw; develops a savory, somewhat nutty flavor when slow-cooked. Texture is firm and chewy, holding up well to long cooking.",
    preparation: "Best sliced and slow-braised, simmered in soups and stews, or sauteed long and slowly with aromatics. Salt-water soaking or parboiling can reduce any bitterness. Prized in some East Asian cuisines (Japanese 'momitake') for soups and rice dishes.",
    preservation: "Pickles well in brine or vinegar; can also be dried or frozen after cooking. Dried specimens rehydrate to a chewy texture suitable for stocks."
  },
  conservationNotes: "Listed as 'Not of concern' by the Burke Herbarium. Not currently considered threatened in the PNW, though localized populations depend on mature calcareous conifer stands; sensitive to soil disturbance and clearcutting.",
  sources: [
    { name: "MushroomExpert.com - Catathelasma ventricosum (Michael Kuo)", url: "https://www.mushroomexpert.com/catathelasma_ventricosum.html" },
    { name: "MykoWeb - California Fungi: Catathelasma ventricosum", url: "https://www.mykoweb.com/CAF/species/Catathelasma_ventricosum.html" },
    { name: "Burke Herbarium Image Collection - Catathelasma ventricosum (citing Trudell & Ammirati, Mushrooms of the Pacific Northwest)", url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Catathelasma%20ventricosum" },
    { name: "MushroomExpert.com - Catathelasma imperiale (lookalike comparison)", url: "https://www.mushroomexpert.com/catathelasma_imperiale.html" },
    { name: "Mushroom Appreciation - Mock Matsutake Identification", url: "https://www.mushroom-appreciation.com/mock-matsutake-identification.html" }
  ]
}
,
{
  id: "coprinus-comatus",
  commonNames: ["Shaggy Mane", "Shaggy Ink Cap", "Lawyer's Wig", "Shaggy Inkcap"],
  scientific: "Coprinus comatus",
  family: "Agaricaceae",
  order: "Agaricales",
  trophicMode: "saprotrophic",
  mycorrhizalPartners: null,
  hostTrees: [],
  substrate: "Disturbed soils rich in decaying organic matter and buried wood/roots; thrives in compacted, hard-packed, or recently graded ground, gravelly fill, lawn thatch, and roadside verges. Not associated with living trees. Also reported as a facultative endoparasitic, nematode-trapping fungus in soil.",
  habitat: "Lawns, parks, playing fields, schoolyards, cemeteries, roadsides, gravel paths, dirt road edges, recently disturbed construction sites, wood-chip mulch beds, and pastures. Fruits solitary, gregariously, or in lines, troops, and arcs/fairy rings, often emerging through asphalt cracks or compacted soil after autumn rains.",
  elevationM: { min: 0, max: 2500 },
  regionsPNW: [
    "Western Washington lowlands",
    "Puget Sound urban areas (Seattle, Tacoma, Olympia)",
    "Willamette Valley",
    "Portland metro lawns and parks",
    "Oregon coast",
    "Southern British Columbia (Lower Mainland, Vancouver Island)",
    "Columbia Basin irrigated areas",
    "Inland Northwest (Spokane, Boise foothills)"
  ],
  fruitingMonths: [4, 5, 6, 7, 8, 9, 10, 11, 12],
  peakMonths: [9, 10, 11],
  conditions: {
    minRain7d: 10,
    idealDaysSinceRain: [1, 5],
    tempRangeC: [5, 20],
    humidityMinPct: 70
  },
  identification: {
    cap: "5-15 cm tall, 2.5-6 cm wide; distinctly cylindrical to columnar ('shaggy drumstick' shape) when young, becoming bell-shaped and finally flaring upward as the margin deliquesces; mostly white with a pale brown apical disc; surface covered in coarse, shaggy, recurved white-to-pale-brown scales that give the mushroom its name; entire cap auto-digests (deliquesces) into a black inky liquid from the margin inward, usually within 24-48 hours of emergence",
    underside: "Free, extremely crowded gills; white when very young, rapidly turning pink, then black before liquefying from the rim inward into an inky fluid loaded with spores; a thin white membranous partial veil covers the gills in the button stage and typically slides down the stem to form a movable ring",
    stem: "8-30 cm long, 1-2.5 cm thick; tall, slender, white, smooth, hollow, fibrous, with an equal to slightly bulbous base; bears a thin, easily detached, often free-sliding ring (annulus) near the bottom that frequently falls to the base; pulls cleanly free of the cap",
    fleshColor: "Thin, soft, white throughout; not bruising; flesh of the stem hollow and fibrous",
    sporePrintColor: "Black (occasionally described as blackish-brown); spores ellipsoidal with a central apical germ pore, 10-16 x 6.5-8.5 microns",
    odor: "Mild, pleasant, indistinct mushroomy odor; taste mild",
    sizeCm: "Cap 5-15 cm tall x 2.5-6 cm wide; stem 8-30 x 1-2.5 cm"
  },
  edibility: "choice",
  toxicityNotes: "MUST be eaten very fresh - ideally within a few hours of harvest, before deliquescence begins. Once the gills start turning pink or black, autolysis is underway and the mushroom rapidly liquefies into inedible black ink (often within 24 hours, sometimes faster in warm conditions). Refrigeration only briefly slows the process. Unlike its lookalike Coprinopsis atramentaria, Coprinus comatus is NOT known to contain coprine and is generally considered safe to consume with alcohol; however, some sources advise caution due to historical confusion and rare individual sensitivities. Avoid specimens from roadsides or lawns treated with pesticides, herbicides, or near heavy traffic, as Coprinus species readily accumulate heavy metals (notably mercury, lead, and cadmium) from contaminated substrates.",
  lookalikes: [
    {
      name: "Common Ink Cap / Tippler's Bane / Alcohol Inky Cap",
      scientific: "Coprinopsis atramentaria",
      danger: "toxic",
      distinguishingFeature: "Smooth grey-brown cap WITHOUT the shaggy recurved scales of C. comatus; cap is bell-shaped to convex (not cylindrical/columnar), gills attached rather than fully free, no persistent ring, stem grey-tinged, and typically grows in dense clusters from buried wood or stumps. CRITICAL: contains coprine, an amino acid that inhibits acetaldehyde dehydrogenase in the same way as the anti-alcoholism drug disulfiram (Antabuse). If consumed within roughly 48-72 hours before OR after drinking any alcohol, it triggers a coprine/alcohol reaction with facial flushing, headache, palpitations, nausea, vomiting, tingling, and sweating. Symptoms can recur on re-exposure to alcohol for several days after eating the mushroom. C. comatus does NOT cause this reaction, but the two are commonly confused by beginners."
    },
    {
      name: "Mica Cap",
      scientific: "Coprinellus micaceus",
      danger: "edible",
      distinguishingFeature: "Much smaller (cap 1-4 cm), tawny-orange to honey-brown, with a finely pleated/lined cap surface dusted with fine mica-like granules (no shaggy scales); always grows in dense clusters on or around buried hardwood and stumps; deliquesces but is much shorter-lived."
    },
    {
      name: "Magpie Inkcap",
      scientific: "Coprinopsis picacea",
      danger: "toxic",
      distinguishingFeature: "Striking 'magpie' pattern of large irregular WHITE patches on a BLACKISH-brown background (not white with brown scales); grows in deciduous woodland (especially beech) rather than on lawns; reported to cause GI upset and sometimes confused with shaggy mane in field guides."
    },
    {
      name: "Hare's Foot Inkcap",
      scientific: "Coprinopsis lagopus",
      danger: "inedible",
      distinguishingFeature: "Much more delicate, with a thin, grey, deeply pleated cap covered in soft white woolly fibrils (not coarse recurved scales); very short-lived; grows on wood chips and humus; too thin and fragile to bother with."
    },
    {
      name: "Scaly Lepiota / Shaggy Parasol (button stage confusion)",
      scientific: "Chlorophyllum brunneum",
      danger: "GI-upset",
      distinguishingFeature: "Cap has flat brown scales on a pale background but is hemispherical to convex (never cylindrical), gills remain white and never deliquesce, has a thick double-edged ring, and the flesh bruises reddish-orange when cut. Spore print is white/cream, not black. Can cause significant GI upset in many people."
    }
  ],
  culinary: {
    flavor: "Mild, delicate, somewhat sweet and creamy flavor with a tender, almost asparagus- or oyster-like texture when young; considered choice but ephemeral. Releases dark juices when cooked.",
    preparation: "Harvest only firm, fully white specimens with white or just-pinkening gills - reject any showing black margins. Cook within a few hours of picking. Best lightly sauteed in butter (often releases substantial dark liquid that can be used as a 'shaggy mane sauce'), in cream soups, omelets, risotto, or simply on toast. Does not require peeling. Slice lengthwise and cook quickly over moderate heat; overcooked or aged specimens turn into unappetizing black slurry.",
    preservation: "Notoriously difficult to preserve due to rapid autolysis. Best option is to saute immediately upon return from foraging and then freeze the cooked product (or its juices) in portions. Duxelles freezes well. Dehydration is generally unsuccessful as the mushroom liquefies before drying. Some foragers blanch briefly to halt deliquescence prior to freezing."
  },
  conservationNotes: "Listed as Least Concern (IUCN). Cosmopolitan and abundant throughout the Northern Hemisphere, particularly thriving in human-disturbed habitats; populations are stable to increasing as urbanization expands suitable substrate. No conservation concerns in the PNW. Cultivated commercially in parts of Europe and Asia.",
  sources: [
    { name: "MushroomExpert.Com - Coprinus comatus: The Shaggy Mane (Michael Kuo)", url: "https://www.mushroomexpert.com/coprinus_comatus.html" },
    { name: "MykoWeb California Fungi - Coprinus comatus (Fred Stevens / Michael Wood)", url: "https://www.mykoweb.com/CAF/species/Coprinus_comatus.html" },
    { name: "MushroomExpert.Com - Coprinopsis atramentaria (lookalike & coprine reference)", url: "https://www.mushroomexpert.com/coprinopsis_atramentaria.html" },
    { name: "Burke Herbarium Image Collection (University of Washington) - Coprinopsis atramentaria", url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Coprinopsis%20atramentaria" },
    { name: "Trudell, S. & Ammirati, J. (2009). Mushrooms of the Pacific Northwest. Timber Press Field Guides, pp. 196-197.", url: "https://books.google.com/books?id=WevHvt6Tr8kC" },
    { name: "Wikipedia - Coprinus comatus (taxonomy and description, sourced from peer-reviewed mycology)", url: "https://en.wikipedia.org/wiki/Coprinus_comatus" }
  ]
}
,
{
  id: "cortinarius-caperatus",
  commonNames: ["Gypsy Mushroom", "The Gypsy", "Wrinkled Cort", "Gypsy Nightcap"],
  scientific: "Cortinarius caperatus",
  family: "Cortinariaceae",
  order: "Agaricales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Picea (spruce)", "Abies (fir)", "Pinus (pine)", "Tsuga (hemlock)", "Betula (birch)", "Fagus (beech)"],
  hostTrees: [
    { common: "Sitka spruce", scientific: "Picea sitchensis" },
    { common: "Engelmann spruce", scientific: "Picea engelmannii" },
    { common: "Pacific silver fir", scientific: "Abies amabilis" },
    { common: "Subalpine fir", scientific: "Abies lasiocarpa" },
    { common: "Western hemlock", scientific: "Tsuga heterophylla" },
    { common: "Lodgepole pine", scientific: "Pinus contorta" },
    { common: "Paper birch", scientific: "Betula papyrifera" }
  ],
  substrate: "Soil and duff in coniferous and mixed forests, often among mosses or sphagnum; previously known as Rozites caperatus before molecular studies placed it within Cortinarius",
  habitat: "Coniferous forests (especially with spruce and fir), mixed conifer-hardwood forests, subalpine birch zones, and heath/sphagnum-rich areas; scattered to gregarious in soil",
  elevationM: { min: 0, max: 2200 },
  regionsPNW: ["Cascade Range (WA, OR)", "Olympic Peninsula", "Coast Range", "Northern California Coast (Mendocino northward)", "British Columbia", "Northern Idaho", "Western Montana", "Subalpine zones throughout"],
  fruitingMonths: [8, 9, 10, 11],
  peakMonths: [9, 10],
  conditions: {
    minRain7d: 20,
    idealDaysSinceRain: [5, 14],
    tempRangeC: [5, 18],
    humidityMinPct: 75
  },
  identification: {
    cap: "5-12 cm broad, ochre to tan or yellowish-brown, ovoid to convex becoming broadly convex with a low umbo; surface distinctively wrinkled or rugose-radially, often with whitish silky-fibrillose veil remnants ('hoarfrost') on the disc when young; dry, fibrous-tomentose",
    underside: "Gills attached (adnate to adnexed), pale clay-buff when young, becoming rusty-brown to cinnamon-brown as spores mature; edges may be finely scalloped or whitish",
    stem: "5-12 cm tall, 1-2.5 cm thick, pale buff to whitish, equal or slightly enlarged at base; with a PERSISTENT MEMBRANOUS RING (annulus) on the upper stem - unusual for Cortinarius, which typically has only a cobwebby cortina; also typically shows a basal sheath/ring from a partial veil",
    fleshColor: "White to pale buff; firm; unchanging when cut",
    sporePrintColor: "Rusty brown to ochraceous-brown (diagnostic Cortinarius spore color)",
    odor: "Mild, pleasant, slightly mushroomy or earthy; not distinctive",
    sizeCm: "Cap 5-12 cm; stem 5-12 cm x 1-2.5 cm"
  },
  edibility: "choice",
  toxicityNotes: "Cortinarius caperatus is THE ONLY species in the genus Cortinarius widely recommended for the table. The vast majority of Cortinarius species are inedible, and several (notably C. orellanus, C. rubellus, C. speciosissimus, and members of subgenus Orellani/Leprocybe) contain the deadly nephrotoxin ORELLANINE, which causes irreversible kidney failure with symptoms delayed 2-20 days after ingestion. Beginners should not collect any Cortinarius without expert verification. Positive ID of C. caperatus REQUIRES: persistent membranous ring (not just cobwebby cortina), wrinkled ochre cap with whitish veil remnants, rusty-brown spore print, and habitat. Some people experience GI upset; always cook thoroughly and try a small amount first",
  lookalikes: [
    { name: "Deadly Webcap", scientific: "Cortinarius orellanus", danger: "deadly", distinguishingFeature: "Contains lethal orellanine toxin; reddish-brown to tawny cap (not ochre/wrinkled), only a cobwebby cortina (NO persistent membranous ring), more orange-rust gills early; primarily European but the related deadly C. rubellus/C. speciosissimus occur in North America" },
    { name: "Fool's Webcap", scientific: "Cortinarius rubellus", danger: "deadly", distinguishingFeature: "Contains orellanine; tawny-orange to foxy-red cap, pointed umbo, only cobwebby cortina (no membranous ring), associated with conifers and sphagnum - found in PNW. Smaller and more reddish than C. caperatus" },
    { name: "Other Cortinarius species (webcaps)", scientific: "Cortinarius spp.", danger: "toxic", distinguishingFeature: "Hundreds of species, most untested or toxic; lack the persistent membranous ring of C. caperatus and the distinctive wrinkled ochre cap with whitish bloom; have only a cobwebby cortina that disappears" },
    { name: "Fibrecaps", scientific: "Inocybe spp.", danger: "toxic", distinguishingFeature: "Muscarine-containing; typically smaller, fibrous-radially-streaked caps, often unpleasant or spermatic odor, lack persistent ring; dull brown spore print" },
    { name: "Honey Mushroom", scientific: "Armillaria spp.", danger: "edible", distinguishingFeature: "Grows in dense clusters on wood (not solitary in soil), white spore print, white gills, lacks wrinkled cap texture" },
    { name: "Shaggy Pholiota / scalycaps", scientific: "Pholiota spp.", danger: "GI-upset", distinguishingFeature: "Usually grow on wood, often scaly or slimy caps, brown spore print but lack the membranous ring + wrinkled ochre cap combination" }
  ],
  culinary: {
    flavor: "Mild, pleasant, nutty to slightly sweet flavor with firm texture; highly regarded in northern European cuisine (especially Poland, Finland, Russia, and the Baltics where it is a traditional favorite)",
    preparation: "Always cook thoroughly - never eat raw. Excellent sauteed in butter, in cream sauces, soups, stews, and stuffings. Pairs well with potatoes, onions, and game. Remove tough stem bases. Try a small portion first as some individuals report GI sensitivity",
    preservation: "Dries very well, retaining flavor; also suitable for pickling and freezing (after cooking). Traditional Eastern European preservation includes salt-curing"
  },
  conservationNotes: "IUCN Red List status: Least Concern (2018). Widespread and locally abundant where suitable habitat exists; no evidence of population decline. In the PNW, common in certain years but less abundant inland and to the south. Foragers should harvest sustainably and leave mature specimens to spore",
  sources: [
    { name: "MykoWeb - California Fungi: Cortinarius caperatus", url: "https://www.mykoweb.com/CAF/species/Cortinarius_caperatus.html" },
    { name: "Burke Herbarium Image Collection (University of Washington) - Cortinarius caperatus", url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Cortinarius+caperatus" },
    { name: "iNaturalist - Wrinkled Cortinarius (Cortinarius caperatus)", url: "https://www.inaturalist.org/taxa/125364-Cortinarius-caperatus" },
    { name: "IUCN Red List - Cortinarius caperatus assessment", url: "https://redlist.info/iucn/species_view/201073" },
    { name: "Trudell, S. & Ammirati, J. (2009). Mushrooms of the Pacific Northwest. Timber Press", url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Cortinarius+caperatus" },
    { name: "Mycologia - Orellanine in Cortinarius orellanus and C. rubellus (toxicity reference)", url: "https://www.tandfonline.com/doi/abs/10.1080/15572536.2003.11833168" }
  ]
}
,
{
  id: "craterellus-cornucopioides",
  commonNames: ["Black Trumpet", "Horn of Plenty", "Trumpet of the Dead", "Black Chanterelle"],
  scientific: "Craterellus cornucopioides",
  family: "Cantharellaceae",
  order: "Cantharellales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Quercus spp.", "Notholithocarpus densiflorus", "Arbutus menziesii", "Fagaceae"],
  hostTrees: [
    { common: "Tanoak", scientific: "Notholithocarpus densiflorus" },
    { common: "Pacific madrone", scientific: "Arbutus menziesii" },
    { common: "Oregon white oak (Garry oak)", scientific: "Quercus garryana" },
    { common: "Coast live oak", scientific: "Quercus agrifolia" },
    { common: "Canyon live oak", scientific: "Quercus chrysolepis" },
  ],
  substrate: "Humus and leaf litter on well-drained forest soils, often on mossy banks, in duff beneath hardwoods; fruits scattered to gregariously, frequently in troops or fairy-ring clusters.",
  habitat: "Mixed hardwood and hardwood-conifer forests; in the Pacific Northwest the species most foragers encounter is the sister taxon Craterellus calicornucopioides (Western black trumpet, described 2015), which is morphologically near-identical (white spore print) and replaces C. cornucopioides sensu stricto (a European/Asian taxon) along the West Coast. Most reliable PNW productivity is in oak/tanoak/madrone woodlands of southwest Oregon and northern California, with scattered occurrences north into western Washington and the BC coast where suitable hardwood hosts exist.",
  elevationM: { min: 0, max: 1200 },
  regionsPNW: ["Southwest Oregon (Klamath-Siskiyou, Umpqua, Rogue Valley)", "Oregon Coast Range", "Willamette Valley oak woodlands", "Western Washington (Puget Sound lowlands, locally)", "Southwest British Columbia (rare)"],
  fruitingMonths: [10, 11, 12, 1, 2, 3],
  peakMonths: [11, 12, 1],
  conditions: { minRain7d: 25, idealDaysSinceRain: [5, 14], tempRangeC: [4, 15], humidityMinPct: 80 },
  identification: {
    cap: "Deeply funnel- to trumpet-shaped, hollow down the stem; 3-8 cm wide at the flaring, wavy, often split or lobed margin; inner (upper) surface dark gray-brown to sooty black, dry, finely scaly to fibrillose.",
    underside: "Smooth to faintly wrinkled or shallowly veined (no true gills); ash-gray to bluish-gray or pale gray-brown, becoming darker with age; hymenium runs decurrently down the outer surface.",
    stem: "Not differentiated from the cap; the entire fruitbody is a hollow tube tapering to a narrow blackish base.",
    fleshColor: "Very thin, brittle, pliable; grayish-black, almost membranous.",
    sporePrintColor: "White to cream to pale buff (C. calicornucopioides and true C. cornucopioides have white-to-cream spores; the eastern C. fallax has ochraceous/salmon spores).",
    odor: "Pleasant, fragrant and fruity (often likened to apricot or plum), intensifying when dried.",
    sizeCm: "3-12 cm tall, 1-8 cm wide at the flared mouth",
  },
  edibility: "choice",
  toxicityNotes: null,
  lookalikes: [
    { name: "Western black trumpet", scientific: "Craterellus calicornucopioides", danger: "edible", distinguishingFeature: "Essentially the PNW/West Coast sister species — same edible quality; separated only by ITS DNA and slight microscopic features (described Pilz et al. / Dahlman 2015). Functionally interchangeable for the forager." },
    { name: "Fragrant black trumpet", scientific: "Craterellus foetidus (= C. cinereus group)", danger: "edible", distinguishingFeature: "More distinctly wrinkled/veined outer (hymenial) surface, often growing in fused clusters; equally edible." },
    { name: "Blue chanterelle", scientific: "Polyozellus multiplex", danger: "edible", distinguishingFeature: "Deep blue-violet to blue-black clustered rosette of fan-shaped caps on a common base, found with conifers; edible choice, not a true funnel." },
    { name: "Devil's urn", scientific: "Urnula craterium", danger: "inedible", distinguishingFeature: "Tough, leathery black cup (an ascomycete) on woody debris in spring; never a thin pliable trumpet from soil; smooth interior, no fruity odor." },
    { name: "Pig's ear / gray chanterelle", scientific: "Gomphus clavatus / Cantharellus cinereus", danger: "edible", distinguishingFeature: "Gomphus has purplish-violet ridged hymenium; Cantharellus cinereus is grayer with strong forked ridges on the underside and is solid, not deeply hollow to the base." },
  ],
  culinary: {
    flavor: "Rich, smoky, fruity-buttery with notes of black truffle and apricot; one of the most aromatic edible fungi, intensifies dramatically when dried.",
    preparation: "Brush or rinse carefully (interiors collect duff and small insects — split lengthwise to clean). Dry-sauté briefly to release water, then finish in butter or cream. Excellent in cream sauces, risotto, omelets, pasta, with eggs, white fish, poultry, and goat cheese. Pairs beautifully with shallots, thyme, sherry, and brown butter.",
    preservation: "Dries exceptionally well and is arguably better dried than fresh — flavor concentrates and rehydration is fast. Store dried in airtight jars away from light; can also be ground to a powder used as a seasoning or made into duxelles and frozen.",
  },
  conservationNotes: "Not formally listed; IUCN status Least Concern globally. Locally uncommon to rare in much of the PNW outside oak/tanoak strongholds — fruiting is highly weather-dependent and patchy. Harvest sustainably by cutting or pinching at the base, leaving small specimens, and avoiding raking duff or disturbing the mycelial mat.",
  sources: [
    { name: "Wikipedia — Craterellus cornucopioides", url: "https://en.wikipedia.org/wiki/Craterellus_cornucopioides" },
    { name: "Matheny et al. 2010, Mycorrhiza — Craterellus fallax host range (referenced via Wikipedia/MykoWeb)", url: "http://www.bio.utk.edu/matheny/Site/Publications_files/Matheny_etal_Craterellus_fallax_M.2010.pdf" },
    { name: "MykoWeb California Fungi — Craterellus cornucopioides", url: "https://web.archive.org/web/20091003025535/http://www.mykoweb.com/CAF/species/Craterellus_cornucopioides.html" },
    { name: "Practical Self Reliance — Foraging Black Trumpets (covers C. calicornucopioides PNW distinction)", url: "https://practicalselfreliance.com/black-trumpet-mushrooms/" },
    { name: "PMC / Nutrients 2024 — Black Trumpet bioactive properties and ecology review", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11085333" },
    { name: "GroCycle — Black Trumpet guide (West Coast winter fruiting season)", url: "https://grocycle.com/black-trumpet-mushroom" },
  ],
}
,
{
  id: "craterellus-tubaeformis",
  commonNames: ["Yellowfoot", "Winter Chanterelle", "Funnel Chanterelle", "Trumpet Chanterelle", "Yellow Foot", "Yellow Legs"],
  scientific: "Craterellus tubaeformis",
  family: "Cantharellaceae",
  order: "Cantharellales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Tsuga heterophylla", "Pseudotsuga menziesii", "Picea sitchensis"],
  hostTrees: [
    { common: "Western hemlock", scientific: "Tsuga heterophylla" },
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Sitka spruce", scientific: "Picea sitchensis" }
  ],
  substrate: "Well-decayed coarse woody debris (rotten conifer logs) and mossy duff; frequently fruits directly from moss-covered, well-rotted logs and stumps",
  habitat: "Ectomycorrhizal, strongly associated with western hemlock in cool, wet conifer forests of the PNW; rarely encountered in stands lacking a hemlock component. Volume of well-decayed coarse woody debris is the strongest predictor of occurrence in stands <100 yr old (88% of sporocarps fruit from well-decayed CWD per Trappe 2004). Favors mossy, shaded microsites in cold conifer bogs, riparian flats, and old second-growth. Hydnum spp. presence is a good co-occurrence indicator.",
  elevationM: { min: 0, max: 1200 },
  regionsPNW: ["Oregon Coast Range", "Cascades west slope", "Olympic Peninsula", "Puget lowlands", "Vancouver Island", "BC South Coast", "Northern California redwood belt"],
  fruitingMonths: [9, 10, 11, 12, 1, 2],
  peakMonths: [11, 12],
  conditions: {
    minRain7d: 30,
    idealDaysSinceRain: [3, 10],
    tempRangeC: [2, 12],
    humidityMinPct: 85
  },
  identification: {
    cap: "Yellowish-brown to dark brown, sometimes greyish with age; 2-7 cm across; initially convex, soon becoming deeply depressed, funnel- or trumpet-shaped, frequently perforated at the center (hollow down through the stem); margin wavy and inrolled when young; surface dry to faintly waxy, bald to finely scaly",
    underside: "False gills - blunt, widely spaced, forked decurrent ridges/veins with cross-veins (not true gills); yellow to pale yellow when young, developing distinctive grayish to lilac-gray shades with age - a key field mark",
    stem: "Bright yellow to orange-yellow, hollow throughout, smooth to longitudinally grooved, often twisted or compressed, sometimes appearing as a pair of legs; 2-9 cm long x 0.3-1 cm thick; no ring; base sometimes swollen",
    fleshColor: "Pale yellow to whitish, thin, brittle; does not change color when cut",
    sporePrintColor: "White to cream, sometimes faintly pale yellow or salmon-tinted",
    odor: "Mild, faintly fruity or earthy; taste mild",
    sizeCm: "Cap 2-7 cm; stem 2-9 cm long x 0.3-1 cm thick; total height 3-10 cm"
  },
  edibility: "choice",
  toxicityNotes: "Reported to bioaccumulate heavy metals - avoid collecting from roadsides, industrial sites, or contaminated soils. Always cook thoroughly.",
  lookalikes: [
    { name: "Deadly Webcap", scientific: "Cortinarius rubellus", danger: "deadly", distinguishingFeature: "True crowded rust-brown gills (not blunt ridges), rusty-brown spore print, cortina (cobwebby partial veil) when young, scaly orange-brown stem - causes irreversible kidney failure; habitat overlap in mossy conifer woods" },
    { name: "Jelly Baby", scientific: "Leotia lubrica", danger: "inedible", distinguishingFeature: "Smooth gelatinous underside with no ridges/veins; convex olive-yellow head not funnel-shaped; rubbery texture; ascomycete" },
    { name: "False Chanterelle", scientific: "Hygrophoropsis aurantiaca", danger: "GI-upset", distinguishingFeature: "True thin forked orange gills (not blunt ridges); deep orange throughout; solid stem (not hollow); often on woody debris but more orange than yellow-brown" },
    { name: "Smooth Chanterelle", scientific: "Cantharellus lateritius / Craterellus ignicolor", danger: "edible", distinguishingFeature: "Orange-yellow throughout (not brown cap with yellow stem); nearly smooth or weakly ridged hymenium; eastern/southern distribution mostly" },
    { name: "Pig's Ear / Violet Chanterelle", scientific: "Gomphus clavatus", danger: "edible", distinguishingFeature: "Larger, club-shaped to clavate; purple to violet tones on ridged hymenium; thicker fleshier stipe; cespitose growth in conifer duff" }
  ],
  culinary: {
    flavor: "Mild, delicately earthy and slightly fruity; less pungent than golden chanterelles but excellent texture; absorbs surrounding flavors well",
    preparation: "Brush clean - do not soak (hollow stems retain water). Dry-saute briefly to drive off moisture, then finish in butter with shallots, garlic, thyme, or cream. Excellent in soups, cream sauces, risotto, omelets, and game dishes. Their small size makes them ideal whole as a garnish.",
    preservation: "Dries exceptionally well - one of the best chanterelles for dehydration, retaining flavor and rehydrating to good texture. Can also be sauteed and frozen, pickled, or duxelle'd. Dried specimens keep flavor for over a year."
  },
  conservationNotes: "IUCN Red List status: Least Concern. Locally abundant across the PNW. Habitat dependent on retention of well-decayed coarse woody debris and mature hemlock cover; clearcutting and removal of down wood significantly reduces fruiting. Trappe (2004) recommends managing for downed log retention in second-growth stands to sustain populations. Genetic evidence suggests western North American, eastern North American, and European populations may represent distinct species.",
  sources: [
    { name: "MushroomExpert.com - Craterellus tubaeformis (Kuo, 2015)", url: "https://www.mushroomexpert.com/craterellus_tubaeformis.html" },
    { name: "MykoWeb - California Fungi: Craterellus tubaeformis", url: "https://www.mykoweb.com/CAF/species/Craterellus_tubaeformis.html" },
    { name: "Trappe, M.J. (2004) - Habitat and host associations of Craterellus tubaeformis in northwestern Oregon, Mycologia 96(3):498-509", url: "https://research.fs.usda.gov/treesearch/27151" },
    { name: "USDA PNW Research Station PDF - Trappe 2004", url: "https://www.fs.usda.gov/pnw/pubs/journals/pnw_2004_trappe001.pdf" },
    { name: "Wikipedia - Craterellus tubaeformis", url: "https://en.wikipedia.org/wiki/Craterellus_tubaeformis" },
    { name: "Northern Bushcraft - Winter Chanterelle in British Columbia", url: "https://northernbushcraft.com/mushrooms/_winter_chanterelle/bc.htm" }
  ]
}
,
{
  id: "floccularia-luteovirens",
  commonNames: ["Yellow Floccularia", "Saffron Parasol", "Golden Mushroom", "Grassland Yellow Mushroom", "Yellow Mushroom", "Huang Mogu"],
  scientific: "Floccularia luteovirens",
  family: "Agaricaceae",
  order: "Agaricales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Populus tremuloides", "Picea engelmannii", "Abies lasiocarpa", "Pinus contorta var. latifolia", "Pseudotsuga menziesii (occasional)"],
  hostTrees: [
    { common: "Quaking aspen", scientific: "Populus tremuloides" },
    { common: "Engelmann spruce", scientific: "Picea engelmannii" },
    { common: "Subalpine fir", scientific: "Abies lasiocarpa" },
    { common: "Lodgepole pine", scientific: "Pinus contorta var. latifolia" },
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" }
  ],
  substrate: "Terrestrial in grassy/herbaceous soil under or at the margins of aspen groves and spruce-fir stands, and in adjoining subalpine and alpine meadows. Most PNW collections are from rich, deep, well-drained mountain meadow soils with a strong grass/forb cover; the mycelium associates with nearby tree roots even when fruitbodies emerge several meters out into open grassland. Note: in its much-better-studied Qinghai-Tibet Plateau range, it fruits in pure alpine meadow at 3200-4800 m and forms ectomycorrhizal associations primarily with Kobresia and other meadow plants; some authors therefore classify it as a meadow mycorrhizal species rather than a forest one. Genomic/phylogenomic work (Xing et al. 2021; Liu et al. 2020) confirms an ectomycorrhizal lifestyle, contradicting older treatments that called it saprotrophic.",
  habitat: "In western North America a montane to subalpine species of the Rocky Mountains, Intermountain West, and east-slope Cascades. In the PNW the great majority of collections come from east of the Cascade crest in the high-elevation aspen parklands and spruce-fir/subalpine meadow mosaics of the Wallowas, Blue Mountains, Ochocos, eastern Cascades (Deschutes/Fremont-Winema/Okanogan-Wenatchee NFs), and the Okanagan highlands of BC; rare to absent on the wet, low-elevation west side. Fruits scattered, gregariously, or in fairy rings in grassy openings, along aspen-grove edges, and out into open subalpine meadows; favors stable, mature meadow systems and is most abundant in cool summers following heavy late-summer monsoonal/thunderstorm rains. Strikingly visible from a distance as a bright golden-yellow shaggy mushroom standing 10-20 cm above the grass.",
  elevationM: { min: 1500, max: 3500 },
  regionsPNW: ["Eastern Cascades (Okanogan-Wenatchee NF, Fremont-Winema NF, Deschutes NF)", "Wallowa Mountains", "Blue Mountains (NE Oregon / SE Washington)", "Ochoco Mountains", "Okanagan Highlands (BC interior)", "Kettle Range / Selkirks (NE Washington)", "East-slope subalpine meadows (Mount Adams / Goat Rocks eastern aspect)", "Steens Mountain (high elevations)"],
  fruitingMonths: [7, 8, 9],
  peakMonths: [8, 9],
  conditions: {
    minRain7d: 15,
    idealDaysSinceRain: [5, 12],
    tempRangeC: [4, 18],
    humidityMinPct: 65
  },
  identification: {
    cap: "5-13 cm broad; convex when young, expanding to plano-convex and finally nearly flat in age; dry; ground color whitish to pale yellow but almost entirely covered by bright golden-yellow to chrome-yellow, appressed-fibrillose to slightly raised scales (most conspicuous on the disc and toward the margin), the whitish ground only becoming visible in old specimens; cap margin shaggy with yellow partial-veil remnants hanging off the edge",
    underside: "Gills attached to the stem, usually by a notch (sinuate-adnexed); close to crowded with frequent short-gills; pale yellow to greenish-yellow, often with finely jagged/eroded edges; covered when very young by a thick yellow partial veil",
    stem: "5-12 cm long x 1.5-3.5 cm thick; equal or slightly enlarged toward the base; white and smooth/bald above a prominent shaggy double ring; sheathed below the ring with conspicuous shaggy yellow scales over a whitish ground (matching the cap); basal mycelium white and prominent, often binding soil and grass roots",
    fleshColor: "White throughout; firm when young and fresh; unchanging on exposure (does not bruise yellow, red, or brown)",
    sporePrintColor: "White",
    odor: "Mild and pleasantly mushroomy; not distinctive; not farinaceous, not spicy. Taste mild to faintly sweet/nutty.",
    sizeCm: "Cap 5-13 cm; stem 5-12 cm x 1.5-3.5 cm; medium-large, robust, Tricholoma-like in stature"
  },
  edibility: "edible",
  toxicityNotes: "Long-established edible in Asia (the famed 'Huang Mogu' / Yellow Mushroom of the Qinghai-Tibet Plateau, harvested commercially and studied for medicinal/antitumor compounds) and historically consumed in Europe. North American collections are eaten by some foragers but reports of mild GI upset exist, possibly from confusion with other shaggy yellow agarics or from individual sensitivity; cook thoroughly and try a small portion first. Not recommended for beginners because of confusion with potentially toxic yellow Cortinarius species and immature yellow Amanita.",
  lookalikes: [
    { name: "Death Cap (yellow forms) / Yellow-yellow Amanita group", scientific: "Amanita gemmata / Amanita aprica / Amanita pantherinoides", danger: "toxic", distinguishingFeature: "Yellow to ochre Amanitas in PNW conifer/mixed forests can be superficially similar from above. Differences: FREE gills (vs. attached/sinuate in Floccularia), a true basal volva/cup or bulb with patches (vs. fibrillose sheath and basal mycelium pad), warts on the cap (not appressed yellow fibrillose scales) that wash off, white spore print (same) but spores NON-amyloid (vs. amyloid in Floccularia). Contains ibotenic acid/muscimol (or for Amanita phalloides yellow forms, amatoxins - deadly)." },
    { name: "Deadly Webcaps (yellow forms)", scientific: "Cortinarius rubellus / Cortinarius orellanus group", danger: "deadly", distinguishingFeature: "Some yellow-brown Cortinarius species cause fatal kidney failure (orellanine). Differences: RUSTY-BROWN spore print (vs. white in Floccularia), cobwebby cortina (not a shaggy membranous double ring), gills rusty-brown at maturity (not pale yellow), no shaggy yellow scales sheathing the stem." },
    { name: "Honey Mushroom", scientific: "Armillaria ostoyae / A. solidipes", danger: "edible-when-cooked", distinguishingFeature: "Also has a ring and grows in groups, but cap is honey-brown to tawny (not bright golden-yellow), scales are dark and tuft-like (not yellow fibrillose), gills white-cream becoming pinkish-stained, grows in clusters at the base of conifers or from buried wood (not in open meadows), and is parasitic/saprotrophic on wood rather than mycorrhizal in grassland" },
    { name: "Shaggy Parasol", scientific: "Chlorophyllum olivieri / C. brunneum", danger: "edible-with-caution", distinguishingFeature: "Also has shaggy scaly cap and ring, but ground color whitish-grey/tan with brown scales (not yellow), FREE gills, flesh stains reddish then brown when cut, taller and more slender, common in disturbed soils/gardens at lower elevations" },
    { name: "Gypsy Mushroom", scientific: "Cortinarius caperatus", danger: "edible", distinguishingFeature: "Also has a yellowish ring and can be ochre-yellow, but cap is wrinkled-radial (not shaggy-scaly), RUSTY-BROWN spore print, cobwebby cortina rather than a double membranous ring, no yellow scales sheathing the stem" },
    { name: "Yellow Knight / Man on Horseback", scientific: "Tricholoma equestre (= T. flavovirens)", danger: "edible-with-caution", distinguishingFeature: "Also bright yellow with a Tricholoma stature and white spores; but cap is smooth to finely fibrillose (NOT shaggy-scaly), NO ring, NO sheathing yellow scales on stem, occurs in sandy conifer (pine) forests rather than subalpine meadows. Implicated in rhabdomyolysis poisonings in Europe - no longer recommended for the table." }
  ],
  culinary: {
    flavor: "Mild, pleasantly mushroomy, slightly sweet/nutty when fresh; not strongly flavored. In Tibetan and Qinghai cuisine it is highly prized for its delicate flavor, firm texture, and brilliant yellow color, which it retains on cooking. Considered a premium wild mushroom in China and exported dried.",
    preparation: "Clean by brushing or wiping; remove any grass and soil from the shaggy stem base. Slice and saute in butter or neutral oil; works well in soups, stir-fries, rice dishes, and dumplings (a traditional Tibetan preparation is in butter-tea broth or steamed momos). Always cook thoroughly - do not eat raw. Try a small portion the first time as North American foragers occasionally report mild GI upset.",
    preservation: "Dries very well, retaining bright yellow color and concentrating flavor (this is the standard commercial preservation method on the Qinghai-Tibet Plateau); reconstitute in warm water 20-30 minutes before use. Can also be sliced and frozen after a brief saute. Not commonly pickled."
  },
  conservationNotes: "Globally not formally listed but considered a slow-growing, habitat-specific species. In its main range on the Qinghai-Tibet Plateau, populations are under heavy harvest pressure (a major income source for local herders) and have shown declines, prompting genomic conservation studies. In the PNW it is uncommon and patchily distributed, restricted to mature subalpine aspen/meadow ecosystems east of the Cascades; populations are vulnerable to grazing intensification, meadow conversion, aspen decline, and climate-driven loss of snowpack/summer moisture in subalpine meadows. Best practice: photograph for records, harvest sparingly, leave the shaggy base and surrounding mycelial pad intact, and do not rake or disturb the meadow turf.",
  sources: [
    { name: "MushroomExpert.Com - Floccularia luteovirens (Kuo 2020)", url: "https://www.mushroomexpert.com/floccularia_luteovirens.html" },
    { name: "Burke Herbarium Image Collection (University of Washington) - Floccularia luteovirens", url: "http://biology.burke.washington.edu/herbarium/imagecollection/taxon.php?Taxon=Floccularia+luteovirens" },
    { name: "GBIF Backbone Taxonomy - Floccularia luteovirens (Alb. & Schwein.) Pouzar", url: "https://www.gbif.org/species/3333955" },
    { name: "Liu et al. (2020) Draft Genome Assembly of Floccularia luteovirens, an Edible and Symbiotic Mushroom on Qinghai-Tibet Plateau (PMC)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7144084/" },
    { name: "Xing et al. (2021) Genomic and Transcriptomic Analyses of Floccularia luteovirens (PMC)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8618933/" },
    { name: "Research Status and Prospects of Floccularia luteovirens (2023, PMC)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10672661/" }
  ]
}
,
{
  id: "gomphus-clavatus",
  commonNames: ["Pig's Ear", "Pig's Ears", "Violet Chanterelle", "Clustered Chanterelle"],
  scientific: "Gomphus clavatus",
  family: "Gomphaceae",
  order: "Gomphales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Picea", "Abies", "Tsuga heterophylla", "Pseudotsuga menziesii", "Pinus"],
  hostTrees: [
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Western hemlock", scientific: "Tsuga heterophylla" },
    { common: "Pacific silver fir", scientific: "Abies amabilis" },
    { common: "Grand fir", scientific: "Abies grandis" },
    { common: "Engelmann spruce", scientific: "Picea engelmannii" },
    { common: "Sitka spruce", scientific: "Picea sitchensis" }
  ],
  substrate: "Deep conifer duff, moss, and humus over well-drained loamy or calcareous soils, often near tree trunks and roots",
  habitat: "Ectomycorrhizal with mature and old-growth conifers, especially spruces, firs, hemlock, and Douglas-fir in cool, shaded, moist montane forests. Strong preference for undisturbed, late-successional stands on calcareous or loamy soils with abundant leaf litter and decaying wood debris. Often fruits in fairy rings, arcs, or cespitose clusters singly to gregariously near host root systems.",
  elevationM: { min: 600, max: 2000 },
  regionsPNW: ["Cascades", "Olympics", "Coast Range", "Blue Mountains", "Vancouver Island montane", "Rocky Mountains (Idaho/Montana)", "Northern California Klamath"],
  fruitingMonths: [8, 9, 10, 11, 12, 1],
  peakMonths: [10, 11],
  conditions: {
    minRain7d: 30,
    idealDaysSinceRain: [7, 14],
    tempRangeC: [5, 16],
    humidityMinPct: 80
  },
  identification: {
    cap: "Lobed, irregular, vase- to fan-shaped with wavy edges; one, two, or more caps arising from a shared stem and often fusing at their margins; broadly convex becoming shallowly to deeply depressed; dry, smooth to minutely scaly; pale brown with lilac or purplish-tan shades when fresh, fading to creamy tan or ochre; 2.5-15 cm wide",
    underside: "Deeply wrinkled and cross-veined ridges (not true gills), running decurrent down the stem; dark lilac to violet-purple when young, fading to pale lilac or pinkish-buff with age - the most distinctive feature",
    stem: "Short, often curved, solid (sometimes hollow at maturity), 1-5 cm long x 1-3 cm thick; tapering downward; central to laterally attached and merging indistinguishably with the cap; lilac-brown above, whitish to pale buff below; often fused at base with adjacent fruiting bodies; sometimes bruising reddish-brown",
    fleshColor: "Whitish to pale pink or pale lilac, unchanging when cut",
    sporePrintColor: "Pale yellowish-buff to ochre",
    odor: "Mild, faintly mushroomy to none; taste mild and pleasant",
    sizeCm: "Fruiting body up to 15-20 cm tall and 15-20 cm wide overall, individual caps 2.5-10 cm"
  },
  edibility: "edible-with-caution",
  toxicityNotes: "Generally considered edible and rated 'choice' by some authors, but reports indicate it can cause gastric disturbances in sensitive individuals. Frequently infested with fly larvae unless collected very young - inspect carefully before cooking. Sample a small portion the first time.",
  lookalikes: [
    { name: "Scaly Chanterelle / Woolly Chanterelle", scientific: "Turbinellus floccosus", danger: "GI-upset", distinguishingFeature: "Deeply vase-shaped hollow center with prominent orange-red scales on inner surface; pale buff (not lilac) ridged underside; causes GI upset in many people" },
    { name: "Western Wooly Gomphus", scientific: "Turbinellus kauffmanii", danger: "GI-upset", distinguishingFeature: "Larger, dry yellow-brown scaly cap, hollow funnel shape, ridged underside is pale buff/tan rather than lilac" },
    { name: "Violet-toothed Polypore", scientific: "Trichaptum biforme", danger: "inedible", distinguishingFeature: "Grows as thin shelves on hardwood logs; tough leathery flesh; pore/tooth underside; not vase-shaped or fleshy" },
    { name: "Gomphus bonari", scientific: "Turbinellus bonarii", danger: "GI-upset", distinguishingFeature: "Scaly orange-brown cap, no lilac coloration anywhere, deeper vase shape" },
    { name: "Violet cort", scientific: "Cortinarius violaceus", danger: "inedible", distinguishingFeature: "Has true gills (not ridges), rusty-brown spore print, distinct cap and stem with cobwebby cortina, dark violet throughout" }
  ],
  culinary: {
    flavor: "Mild, mushroomy, slightly musky; firm meaty texture similar to chanterelles; flavor described variously as rich to mediocre depending on age and habitat",
    preparation: "Clean carefully and inspect for insect larvae. Slice thin and dry-saute to release moisture, then finish with butter, shallots, and herbs; holds up well in braises, cream sauces, and pairs with game, blood sausage, or eggs. Always cook thoroughly and sample a small portion first.",
    preservation: "Best sauteed then frozen; can be dehydrated but texture suffers. Not recommended for raw preservation due to larval infestation risk."
  },
  conservationNotes: "Conservation-sensitive: red-listed in 17 European countries and proposed for international protection under the Bern Convention; assessed by IUCN with declining populations in Europe (Near Threatened in Norway, Vulnerable in Sweden) due to old-growth logging on calcareous soils and poor re-establishment after clear-cutting. In the Pacific Northwest, listed as a Category B Survey-and-Manage species under the Northwest Forest Plan - rare and requiring monitoring, with an estimated 46-52 known sites in Oregon. Foragers should harvest sparingly, avoid disturbing duff layers, and leave specimens in old-growth stands to support spore dispersal and mycelium persistence.",
  sources: [
    { name: "MykoWeb - California Fungi: Gomphus clavatus", url: "https://www.mykoweb.com/CAF/species/Gomphus_clavatus.html" },
    { name: "MushroomExpert.com - Gomphus clavatus (Michael Kuo)", url: "https://www.mushroomexpert.com/gomphus_clavatus.html" },
    { name: "IUCN Red List - Gomphus clavatus", url: "https://redlist.info/iucn/species_view/356880/" },
    { name: "USDA Forest Service - Northwest Forest Plan Survey and Manage Species (Handbook to Additional Fungal Species of Special Concern)", url: "https://www.fs.usda.gov/r6/reo/survey-and-manage/2001/surveymanage-2001-fseis-rod.pdf" },
    { name: "Kitsap Peninsula Mycological Society - Pig's Ear", url: "https://kitsapmushrooms.org/edible-mushrooms/pigs-ear/" },
    { name: "Wikipedia - Gomphus clavatus (peer-reviewed source aggregation)", url: "https://en.wikipedia.org/wiki/Gomphus_clavatus" }
  ]
}
,
{
  id: "helvella-vespertina",
  commonNames: ["Western Black Elfin Saddle", "Western Fluted Black Elfin Saddle", "Black Elfin Saddle (western)", "Fluted Black Helvella"],
  scientific: "Helvella vespertina",
  family: "Helvellaceae",
  order: "Pezizales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Pseudotsuga menziesii", "Pinus contorta", "Pinus ponderosa", "Tsuga heterophylla", "Picea sitchensis", "Abies grandis"],
  hostTrees: [
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Lodgepole/Shore pine", scientific: "Pinus contorta" },
    { common: "Ponderosa pine", scientific: "Pinus ponderosa" },
    { common: "Western hemlock", scientific: "Tsuga heterophylla" },
    { common: "Sitka spruce", scientific: "Picea sitchensis" },
    { common: "Grand fir", scientific: "Abies grandis" }
  ],
  substrate: "Mineral soil and conifer duff under living conifers; forms ectomycorrhizal associations with Douglas-fir, pines, hemlock, spruce, and other conifers. Frequent in disturbed soil along trail edges, road cuts, landscaped areas with planted conifers, and occasionally on burnt or recently disturbed ground.",
  habitat: "Scattered, gregarious, or cespitose (clustered) on the ground under conifers - especially Douglas-fir and pine - in coastal forests, mixed conifer forests, urban parks, cemeteries, and landscape plantings where conifers are present. A late-season species: most abundant from mid-fall through early winter, often continuing to fruit into December and January after the main chanterelle and bolete flushes have ended. Tolerates cool, wet conditions and short day length better than most fall mushrooms.",
  elevationM: { min: 0, max: 1500 },
  regionsPNW: ["Oregon Coast Range", "Cascade Range (west slope)", "Puget Sound lowlands", "Olympic Peninsula", "Willamette Valley conifer plantings", "southwestern British Columbia", "Vancouver Island", "northern California coast", "urban Seattle/Portland conifer plantings", "Siskiyou Mountains"],
  fruitingMonths: [10, 11, 12, 1],
  peakMonths: [11, 12],
  conditions: {
    minRain7d: 15,
    idealDaysSinceRain: [3, 10],
    tempRangeC: [2, 14],
    humidityMinPct: 75
  },
  identification: {
    cap: "Irregularly saddle-shaped to two- or three-lobed, often folded, contorted, or convoluted; 2-6 cm wide and 2-5 cm tall; upper (fertile) surface smooth to undulating, dark gray, charcoal, slate-black, to nearly jet black, sometimes paler gray-brown when young or sun-bleached; margin of the cap is usually fused or appressed to the upper stem in places (not free like a Verpa)",
    underside: "Sterile underside paler than the fertile surface - whitish, pale gray, to medium gray, smooth to minutely pruinose (NOT pubescent/fuzzy like Helvella maculata); not pitted or fluted",
    stem: "Distinctively deeply fluted, ribbed, and pocketed (lacunose) with prominent longitudinal ridges and chambers (lacunae) running the full length; 3-10 cm tall x 1-3 cm thick; whitish to pale gray when young, darkening to gray or grayish-black with age; interior chambered/hollow within the fluting; the deep stem ribs are a key genus character for Helvella",
    fleshColor: "Thin, brittle, waxy; whitish to pale gray throughout, not changing on exposure",
    sporePrintColor: "White to pale cream",
    odor: "Mild and indistinct, not distinctive; taste mild but reportedly chewy and bland",
    sizeCm: "Total height 5-15 cm; cap 2-6 cm wide; stem 3-10 cm long x 1-3 cm thick"
  },
  edibility: "edible-with-caution",
  toxicityNotes: "Contains gyromitrin / monomethylhydrazine (MMH)-type hydrazine compounds similar to those in false morels (Gyromitra esculenta). MMH is acutely toxic, hepatotoxic, neurotoxic, and a known animal carcinogen; it is also volatile. RAW or undercooked specimens can cause vomiting, headache, vertigo, hemolysis, and in severe cases liver/kidney damage or death. MUST be cooked thoroughly - parboiled in plenty of water with the cooking liquid discarded, then sauteed - and ALWAYS prepared with strong ventilation (open windows or outdoors) because MMH is released as vapor during cooking and is inhalation-toxic to the cook. Toxin content is variable between collections and individuals and tolerance differs widely between people. Cumulative toxicity is possible with repeated meals. Many modern authorities (MykoWeb 'Toxic Fungi of Western North America', Trudell & Ammirati, UBC 'Mushrooms Up!') recommend AVOIDING this species entirely. Never serve to children, pregnant individuals, the elderly, or first-time mushroom eaters. Do not consume with alcohol.",
  lookalikes: [
    { name: "Oak-loving Elfin Saddle", scientific: "Helvella dryophila", danger: "edible-with-caution", distinguishingFeature: "Nearly identical in appearance but ectomycorrhizal with oaks (Quercus spp.) rather than conifers - habitat is the single most reliable separator; range largely south of the main PNW conifer zone but overlaps in southern Oregon and California oak woodlands; carries the same MMH toxicity concerns" },
    { name: "European Elfin Saddle", scientific: "Helvella lacunosa", danger: "edible-with-caution", distinguishingFeature: "True H. lacunosa is a European species now considered absent or very rare in western North America; western collections previously called H. lacunosa are nearly all H. vespertina (with conifers) or H. dryophila (with oaks); separable reliably only by DNA and geography" },
    { name: "Fluted White Elfin Saddle", scientific: "Helvella crispa", danger: "edible-with-caution", distinguishingFeature: "Same deeply fluted lacunose stem and saddle-shaped cap, but cap and stem are creamy white to pale buff (NOT black/gray); cap underside is finely pubescent/fuzzy; cap margins typically inrolled when young; also contains MMH-type toxins and requires the same precautions" },
    { name: "Fluted Brown Elfin Saddle", scientific: "Helvella maculata", danger: "edible-with-caution", distinguishingFeature: "Cap grayish-brown to medium brown, sometimes mottled, with a margin that is NOT attached to the stipe (free margin); underside whitish and distinctly pubescent/fuzzy; deeply ribbed white to grayish-brown stem; same MMH concerns" },
    { name: "Compressed Elfin Saddle", scientific: "Helvella compressa", danger: "edible-with-caution", distinguishingFeature: "Much smaller and slenderer; stem cylindrical and only faintly grooved (NOT deeply lacunose); cap small, smooth, gray to brown saddle; same MMH concerns" },
    { name: "False Morel / Brain Mushroom", scientific: "Gyromitra esculenta", danger: "deadly", distinguishingFeature: "Cap reddish-brown to chestnut, brain-like with tightly convoluted lobes (NOT a clean saddle); stem stout, whitish, chambered internally with folds but NOT deeply fluted/lacunose on the outside; primarily a spring species (April-June) rather than fall/winter; contains higher concentrations of gyromitrin/MMH and is potentially lethal" },
    { name: "Snowbank False Morel", scientific: "Gyromitra montana (= Gyromitra gigas)", danger: "toxic", distinguishingFeature: "Robust, stocky; tan to reddish-brown brain-like lobed cap; thick whitish stem chambered internally; fruits near melting snow in spring at higher elevations; not saddle-shaped and not deeply lacunose-stemmed" },
    { name: "Hooded False Morel", scientific: "Gyromitra infula", danger: "toxic", distinguishingFeature: "Saddle-shaped cap somewhat similar in outline, but cap reddish-brown to chestnut (NOT black/gray) and smooth-to-folded rather than convoluted; stem smooth or only faintly grooved, NOT deeply fluted; fall fruiting on rotten wood and conifer debris; contains MMH" }
  ],
  culinary: {
    flavor: "Mild, chewy, and bland according to Arora and other PNW authors; flavor is not a compelling reason to risk the toxicity. Texture is described as rubbery to slightly crisp after thorough cooking",
    preparation: "If consumed despite cautions: parboil twice in large volumes of water for 5-10 minutes each time, discarding ALL cooking liquid between parboils, then saute thoroughly in butter or oil for an additional 10-15 minutes. ALWAYS cook outdoors or with windows open and strong ventilation - MMH vapor released during cooking is itself toxic by inhalation. Serve in small portions; never on consecutive days; never to children, pregnant individuals, or first-time eaters. Discard any specimens that smell off or are past their prime. Most modern PNW authorities recommend avoiding this species entirely",
    preservation: "Drying is sometimes practiced for Helvella, but drying does NOT reliably eliminate MMH and may concentrate the toxin by weight; rehydration water must always be discarded. Given the toxicity profile, preservation is not recommended"
  },
  conservationNotes: "Common to locally abundant under conifers throughout its range in the PNW, both in wild forests and in urban/suburban conifer plantings; not of conservation concern. The species was formally described only in 2013 (Nguyen & Vellinga) after molecular work showed that western North American 'Helvella lacunosa' actually comprises multiple distinct species, of which H. vespertina is the conifer-associated western entity. Often parasitized by the bonnet mold Hypomyces cervinigenus, which produces tan to whitish growth over the fruiting body.",
  sources: [
    { name: "MykoWeb - California Fungi: Helvella vespertina", url: "https://www.mykoweb.com/CAF/species/Helvella_vespertina.html" },
    { name: "Nguyen, N.H., Landeros, F., Garibay-Orijel, R., Hansen, K. & Vellinga, E.C. (2013) - The Helvella lacunosa species complex in western North America: cryptic species, misapplied names and parasites. Mycologia 105(5): 1275-1286", url: "https://nature.berkeley.edu/brunslab/papers/nguyen2013b.pdf" },
    { name: "Burke Herbarium Image Collection - Helvella vespertina", url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Helvella+vespertina" },
    { name: "UBC Mushrooms Up! Edible and Poisonous Species of Coastal BC and the PNW - Helvella vespertina", url: "https://www.zoology.ubc.ca/~biodiv/mushroom/H_vespertina.html" },
    { name: "Santa Cruz Mycoflora Project - Genus Helvella", url: "https://scmycoflora.org/genera/helvella/helvella-species.php" },
    { name: "Salish Mushrooms - Helvella (Elfin Saddles) PNW Guide", url: "https://salishmushrooms.com/mushrooms/helvella/" },
    { name: "MykoWeb - Toxic Fungi of Western North America (Michael W. Beug)", url: "https://www.mykoweb.com/TFWNA" },
    { name: "Wikipedia - Helvella lacunosa (taxonomic background and western species split)", url: "https://en.wikipedia.org/wiki/Helvella_lacunosa" },
    { name: "Wikipedia - Monomethylhydrazine (MMH toxicity and gyromitrin)", url: "https://en.wikipedia.org/wiki/Monomethylhydrazine" },
    { name: "Trudell, S. & Ammirati, J. (2009) - Mushrooms of the Pacific Northwest, Timber Press Field Guide", url: "https://www.timberpress.com/books/mushrooms_pacific_northwest/trudell/9780881929355" }
  ]
}
,
{
  id: "hericium-abietis",
  commonNames: ["Western conifer coral", "Bear's head tooth", "Conifer coral hericium", "Conifer coral tooth", "Western bear's head"],
  scientific: "Hericium abietis",
  family: "Hericiaceae",
  order: "Russulales",
  trophicMode: "saprotrophic",
  mycorrhizalPartners: null,
  hostTrees: [
    { common: "Grand fir", scientific: "Abies grandis" },
    { common: "Pacific silver fir", scientific: "Abies amabilis" },
    { common: "Noble fir", scientific: "Abies procera" },
    { common: "Subalpine fir", scientific: "Abies lasiocarpa" },
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Western hemlock", scientific: "Tsuga heterophylla" },
    { common: "Mountain hemlock", scientific: "Tsuga mertensiana" },
    { common: "Sitka spruce", scientific: "Picea sitchensis" }
  ],
  substrate: "Dead, dying, and downed conifer wood: large fallen logs, snags, stumps, and occasionally wounds on living trees; a white-rot wood-decay fungus that fruits from a hidden, knob-like attachment point embedded in the wood. Strongly favors true firs (Abies spp.) but very common on Douglas-fir and hemlock as well.",
  habitat: "Old-growth and mature coniferous forests, especially moist westside Cascade, Coast Range, and Olympic forests with abundant large-diameter down wood. Fruits singly or in widely scattered individual basidiomes on large conifer logs, often appearing high on the side of a log or near the cut end of a stump. Specimens are often very large for the genus (commonly basketball- to soccer-ball sized; record specimens 5-25+ pounds). Fruiting is a late-season event tied to autumn rains and the first cool nights, with the species fruiting later in the year than most other PNW edibles and sometimes persisting into early winter at the edge of snowpack.",
  elevationM: { min: 0, max: 1800 },
  regionsPNW: ["Western Washington", "Western Oregon", "Coastal British Columbia", "Cascade Range", "Olympic Peninsula", "Coast Range", "Vancouver Island", "Southeast Alaska", "Northern California (Klamath/Siskiyou)", "Northern Idaho"],
  fruitingMonths: [9, 10, 11, 12],
  peakMonths: [10, 11],
  conditions: {
    minRain7d: 25,
    idealDaysSinceRain: [4, 14],
    tempRangeC: [2, 14],
    humidityMinPct: 80
  },
  identification: {
    cap: "No true cap; fruiting body is a large, cascading, cauliflower-like cluster of tightly packed, repeatedly branching white limbs arising from a single hidden knob-like attachment in the wood. Branches 2-3 cm thick, smooth, creamy white when fresh and young, sometimes faintly pinkish, discoloring yellowish to brownish-tan in age or where bruised.",
    underside: "The branches are entirely hung with soft, fleshy, downward-pointing spines (teeth) 0.5-1 cm long and up to ~1 mm wide; spines white when young, yellowing then browning with age; these spines bear the spore-producing surface (no gills or pores).",
    stem: "No true stem; the entire structure arises from a concealed, knob-like rooting base attached to or buried in the host log.",
    fleshColor: "White throughout; does not change color when sliced or bruised when fresh (yellows slowly with age).",
    sporePrintColor: "White.",
    odor: "Mild, not distinctive; taste mild and pleasant.",
    sizeCm: "Fruiting bodies typically 10-30 cm across; record specimens reach 75-90 cm (30+ inches) and 2-12 kg (5-25+ lb)."
  },
  edibility: "choice",
  toxicityNotes: "No known toxins. As with all Hericium, best eaten young while pure white and the spines are still firm; older specimens that have yellowed or browned become sour, bitter, and tough, and may cause mild GI upset. Cook thoroughly. Rare allergic reactions reported.",
  lookalikes: [
    { name: "Lion's mane", scientific: "Hericium erinaceus", danger: "edible", distinguishingFeature: "Unbranched (or sparsely branched) single rounded mass with much longer (1-5 cm) hanging spines; grows on hardwoods (especially oak, beech, maple), not conifers; rare in the PNW." },
    { name: "Coral tooth / comb tooth", scientific: "Hericium coralloides", danger: "edible", distinguishingFeature: "More openly and delicately branched with short (under 1 cm) teeth arranged in rows along the underside of branches; grows on hardwood logs (alder, maple, cottonwood) rather than conifers; smaller and more lace-like." },
    { name: "Bear's head tooth (eastern)", scientific: "Hericium americanum", danger: "edible", distinguishingFeature: "Branched with long (1-4 cm) teeth in tufts at branch tips; an eastern North American hardwood species, not expected in the PNW on conifers." },
    { name: "Cauliflower mushroom", scientific: "Sparassis radicata", danger: "edible", distinguishingFeature: "Pale yellow to cream rosette of flat, wavy, noodle-like or leaf-like lobes (not spines/teeth); grows from buried conifer roots at the base of Douglas-fir and other conifers; entirely different texture." },
    { name: "Cauliflower coral", scientific: "Ramaria botrytis", danger: "edible", distinguishingFeature: "Terrestrial (grows from soil), upright coral-like cluster of fleshy branches with pink-tipped tips; no teeth/spines; mycorrhizal." },
    { name: "False coral / Tremellodendron", scientific: "Tremellodendron schweinitzii", danger: "inedible", distinguishingFeature: "Small, tough, gelatinous-rubbery white coral on the ground in eastern hardwoods; tiny, not on conifer logs." }
  ],
  culinary: {
    flavor: "Mild, sweet, and seafood-like; often compared to lobster, crab, or scallop; tender and slightly chewy with a stringy/shreddable texture when young.",
    preparation: "Tear (do not chop) along the natural grain into bite-sized pieces, dry-saute in a hot pan first to drive off water, then finish with butter, salt, garlic, and a splash of white wine or lemon. Excellent in crab-cake-style patties, pasta, risotto, cream sauces, miso soup, or simply pan-seared as 'mushroom scallops'. Pick only pure white specimens; trim away any yellowed or browned portions, which turn bitter. Always cook thoroughly.",
    preservation: "Best eaten fresh. Sauteed pieces freeze well for several months. Dehydration at 45-55 C is possible but the texture suffers; the dried product is best ground into powder for stocks. Pickling works for small portions. Also widely cultivated, and the fresh or dried mycelium is sold for purported nootropic/nerve-growth effects shared with H. erinaceus."
  },
  conservationNotes: "Not formally listed as threatened, but strongly dependent on the presence of large-diameter coarse woody debris in mature and old-growth conifer forests, which have declined sharply across the PNW due to industrial forestry. Locally less common in young, even-aged plantations. Forage by cutting cleanly at the attachment with a knife and leaving the substrate undisturbed so the mycelium can re-fruit; the same log can produce for several consecutive autumns.",
  sources: [
    { name: "MushroomExpert.com - Hericium abietis by Michael Kuo", url: "https://www.mushroomexpert.com/hericium_abietis.html" },
    { name: "MykoWeb - California Fungi: Hericium erinaceus (with H. abietis comparison)", url: "https://www.mykoweb.com/CAF/species/Hericium_erinaceus.html" },
    { name: "Burke Herbarium Image Collection - Hericium abietis", url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Hericium+abietis" },
    { name: "Out-Grow - What Is the Bear's Head Mushroom? (Hericium abietis) Complete Guide", url: "https://www.out-grow.com/blogs/growing-mushrooms/what-is-the-bears-head-mushroom" },
    { name: "iNaturalist - Hericium abietis taxon page", url: "https://www.inaturalist.org/taxa/55187-Hericium-abietis" }
  ]
}
,
{
  id: "hericium-coralloides",
  commonNames: ["Coral tooth fungus", "Comb tooth", "Comb coral mushroom", "Comb Hericium"],
  scientific: "Hericium coralloides",
  family: "Hericiaceae",
  order: "Russulales",
  trophicMode: "saprotrophic",
  mycorrhizalPartners: null,
  hostTrees: [
    { common: "Bigleaf maple", scientific: "Acer macrophyllum" },
    { common: "Red alder", scientific: "Alnus rubra" },
    { common: "Black cottonwood", scientific: "Populus trichocarpa" },
    { common: "Quaking aspen", scientific: "Populus tremuloides" },
    { common: "Oregon white oak", scientific: "Quercus garryana" },
    { common: "Pacific madrone", scientific: "Arbutus menziesii" },
    { common: "American beech", scientific: "Fagus grandifolia" },
    { common: "Birch", scientific: "Betula spp." }
  ],
  substrate: "Decaying hardwood: fallen logs, large branches, stumps, and standing dead trunks of deciduous broadleaf trees. A white-rot wood-decay fungus; possibly weakly parasitic on stressed living hardwoods. Strongly prefers hardwoods, separating it from the conifer-loving H. abietis.",
  habitat: "Solitary or in small groups on dead and dying hardwood in moist mixed and deciduous forests, especially older second-growth and old-growth stands with abundant coarse woody debris. In the PNW it occurs on fallen bigleaf maple, alder, and cottonwood logs in shaded riparian and bottomland forests; less commonly on oak and madrone in drier inland areas. Fruits after the start of fall rains and continues into early winter west of the Cascades. Often visible from a distance as bright white, cascading branched masses on dark wet wood.",
  elevationM: { min: 0, max: 1400 },
  regionsPNW: ["Western Washington", "Western Oregon", "Coastal British Columbia", "Puget Sound lowlands", "Willamette Valley", "Olympic Peninsula", "Columbia River Gorge", "Vancouver Island", "Cascade foothills"],
  fruitingMonths: [9, 10, 11, 12, 1, 2, 3],
  peakMonths: [10, 11],
  conditions: {
    minRain7d: 25,
    idealDaysSinceRain: [4, 12],
    tempRangeC: [5, 18],
    humidityMinPct: 80
  },
  identification: {
    cap: "No true cap; fruiting body is a loosely branched, coral-like structure 8-40 cm broad and up to 20 cm tall, arising from a short tough lateral attachment to the wood; branches slender, brittle, repeatedly forking; pure white when young, aging cream to buff, yellowish-tan, or pale brownish.",
    underside: "Hymenium is on the surface of pendant, slender, tapering spines (teeth) 3-10 mm long, arranged in rows along the underside of the branches like teeth on a comb, with small tufted clusters of slightly longer spines (up to ~25 mm) at branch tips; white aging to cream-buff.",
    stem: "No true stem; attached to the substrate by a short, tough, lateral basal stub.",
    fleshColor: "White and soft throughout the branches, becoming tough at the base; does not stain or change color when cut.",
    sporePrintColor: "White.",
    odor: "Mild, faintly mushroomy; taste mild and pleasant (not bitter or acrid).",
    sizeCm: "Fruiting body 8-40 cm broad, 10-20 cm tall; individual spines 0.3-1.0 cm (occasionally to 2.5 cm in terminal tufts)."
  },
  edibility: "choice",
  toxicityNotes: "No known toxicity. Should be cooked; like other Hericium species, raw or very old specimens may cause mild GI upset in sensitive individuals. Older yellowing specimens can become bitter and tough.",
  lookalikes: [
    { name: "Bear's head tooth", scientific: "Hericium americanum", danger: "edible", distinguishingFeature: "Also hangs spines from branches, but spines are typically longer than 1 cm and spores are substantially larger under the microscope; intermediate between H. coralloides and H. erinaceus in form. Historically called 'H. coralloides' in older North American treatments." },
    { name: "Conifer coral Hericium", scientific: "Hericium abietis", danger: "edible", distinguishingFeature: "Long (1-6 cm) hanging icicle-like spines clustered mainly at branch tips rather than arrayed in rows along branches; grows on conifer wood (true firs, hemlock, spruce, Douglas-fir), not hardwoods." },
    { name: "Lion's mane", scientific: "Hericium erinaceus", danger: "edible", distinguishingFeature: "Unbranched single cushion-shaped mass with very long (1-5 cm) pendant spines hanging from a compact base; not coral-branched." },
    { name: "Coral fungi", scientific: "Ramaria spp.", danger: "GI-upset", distinguishingFeature: "Branched coral-shaped fruiting bodies but lack hanging teeth/spines; surface smooth or wrinkled; many grow from soil rather than wood; some species (e.g., R. formosa) cause GI distress." },
    { name: "Crown-tipped coral", scientific: "Artomyces pyxidatus", danger: "edible", distinguishingFeature: "Branched coral form on hardwood but each branch tip ends in a tiny crown-like cup of points; no hanging spines; smaller and yellowish-tan." },
    { name: "Cauliflower mushroom", scientific: "Sparassis radicata", danger: "edible", distinguishingFeature: "Cream-colored flattened leafy or noodle-like lobes (not spines) arising from a buried rooting base at the base of conifers." }
  ],
  culinary: {
    flavor: "Mild, sweet, and delicate with a flavor and texture often compared to crab, lobster, or scallop; tender and slightly springy when properly cooked. Considered one of the choicest edible mushrooms.",
    preparation: "Tear or slice into bite-sized chunks and dry-saute first to release water, then finish with butter, olive oil, or ghee and a light pinch of salt to develop browning and concentrate flavor. Excellent in cream sauces, risotto, pasta, scrambled eggs, omelets, and as a seafood substitute (mock crab cakes, lobster rolls). Avoid heavy spice masking; pairs with butter, garlic, shallots, lemon, white wine, thyme, and chives. Collect only young, pure-white specimens; pass on yellowing or buff-brown fruitings, which turn bitter.",
    preservation: "Sauteed and frozen for up to 6 months retains texture better than drying. Dehydrating is possible but the delicate texture suffers; reconstituted dried material is best used in stocks and soups. Can also be tinctured (dual-extracted) for medicinal use; Hericium species are studied for nerve growth factor (NGF) activity."
  },
  conservationNotes: "Not formally listed as threatened in the PNW but is dependent on large-diameter coarse woody debris of hardwoods, which is reduced in managed forests. North American collections under the name H. coralloides may represent a cryptic species complex; molecular work suggests true H. coralloides (European concept) may differ from some North American populations. Forage sustainably by cutting at the base, leaving the substrate intact for repeat flushes in subsequent years.",
  sources: [
    { name: "MykoWeb - Hericium coralloides (California Fungi, Michael Wood)", url: "https://www.mykoweb.com/CAF/species/Hericium_coralloides.html" },
    { name: "MushroomExpert.com - Hericium coralloides by Michael Kuo", url: "https://www.mushroomexpert.com/hericium_coralloides.html" },
    { name: "Pacific Northwest Key Council - Trial Field Key to Toothed Fungi (Ian Gibson)", url: "https://www.svims.ca/council/Toothe.htm" },
    { name: "Wikipedia - Hericium coralloides", url: "https://en.wikipedia.org/wiki/Hericium_coralloides" },
    { name: "GBIF - Hericium coralloides (Scop.) Pers.", url: "https://www.gbif.org/species/5248532" }
  ]
}
,
{
  id: "hericium-erinaceus",
  commonNames: ["Lion's mane", "Pom pom mushroom", "Pom pom blanc", "Bearded tooth", "Bearded hedgehog", "Monkey head", "Yamabushitake", "Old man's beard"],
  scientific: "Hericium erinaceus",
  family: "Hericiaceae",
  order: "Russulales",
  trophicMode: "mixed",
  mycorrhizalPartners: null,
  hostTrees: [
    { common: "Bigleaf maple", scientific: "Acer macrophyllum" },
    { common: "Oregon white oak", scientific: "Quercus garryana" },
    { common: "American beech", scientific: "Fagus grandifolia" },
    { common: "Red oak", scientific: "Quercus rubra" },
    { common: "Black walnut", scientific: "Juglans nigra" },
    { common: "Maple", scientific: "Acer spp." },
    { common: "Birch", scientific: "Betula spp." },
    { common: "Ash", scientific: "Fraxinus spp." }
  ],
  substrate: "Living, wounded, dying, and recently dead hardwood; emerges from branch scars, frost cracks, broken limbs, and lightning wounds on standing trees and from fallen logs. Acts as a weak necrotrophic parasite and saprotroph, causing a white pocket rot in the heartwood. Restricted to deciduous wood; in the PNW most commonly found on bigleaf maple (Acer macrophyllum), distinguishing it from the conifer-associated H. abietis.",
  habitat: "Solitary, single unbranched 'pom pom' fruiting bodies arising from wounds high on the trunks and large branches of living and recently dead hardwood trees, especially bigleaf maple in the PNW; also on fallen hardwood logs. Often perennial at the same site, fruiting in the same wound for several consecutive years. Prefers temperate hardwood and mixed forests with moderate-to-high humidity. Considerably less common in the Pacific Northwest than the conifer-loving H. abietis, but occurs throughout the lowland deciduous forests west of the Cascades, particularly in mixed riparian and oak-maple woodlands.",
  elevationM: { min: 0, max: 1200 },
  regionsPNW: ["Western Washington", "Western Oregon", "Coastal British Columbia", "Puget Sound lowlands", "Willamette Valley", "Columbia River Gorge", "Vancouver Island", "Southwestern Oregon"],
  fruitingMonths: [9, 10, 11, 12, 1, 2],
  peakMonths: [10, 11, 12],
  conditions: {
    minRain7d: 25,
    idealDaysSinceRain: [5, 14],
    tempRangeC: [5, 18],
    humidityMinPct: 80
  },
  identification: {
    cap: "No true cap; the fruiting body is a single rounded, unbranched 'pom pom' or 'bearded' mass of pendant spines, 10-30 cm broad (typically 15-20 cm), all hanging from one short, thick, unbranched tubercle attached directly to the wood; white to cream when fresh, yellowing then browning with age.",
    underside: "The entire visible surface consists of soft, slender, downward-hanging spines (teeth) 1-6 cm long with pointed tips; spines are white when fresh, becoming yellowish to yellowish-brown with age; all spines originate from the same point (single unbranched base), not from multiple branches.",
    stem: "No true stem; attached to the substrate by a very short, broad, sometimes rooted stalk-like tubercle from which all the spines emerge.",
    fleshColor: "White to cream throughout; tough, fibrous, and rubbery; does not stain or change color when cut or bruised.",
    sporePrintColor: "White",
    odor: "Mild, not distinctive when fresh; when cooked the flavor is famously compared to lobster, crab, or scallop.",
    sizeCm: "Whole fruiting body 10-30 cm broad (occasionally to 40 cm); individual spines 1-6 cm long; spores 5-6 x 4-5.5 micrometers, subglobose, smooth to faintly roughened, amyloid."
  },
  edibility: "choice",
  toxicityNotes: "No known toxicity; safe and choice when young and white. Best harvested while the spines are still bright white and firm - older specimens that have yellowed or browned become sour, bitter, and unpleasantly tough. Extensively studied for nootropic effects: contains hericenones and erinacines, compounds that stimulate Nerve Growth Factor (NGF) synthesis and are under active investigation for neuroprotective, cognitive, and nerve-regeneration applications, though clinical efficacy and supplement safety remain unproven.",
  lookalikes: [
    { name: "Bear's head tooth (western)", scientific: "Hericium abietis", danger: "edible", distinguishingFeature: "Branched, coral-like or cauliflower-like structure with multiple branches each tipped by clusters of spines; grows exclusively on conifer wood (especially Douglas-fir, hemlock, true fir); far more common in the PNW than H. erinaceus." },
    { name: "Coral tooth", scientific: "Hericium coralloides", danger: "edible", distinguishingFeature: "Open, branching coral-like fruiting body with short spines (under 1 cm) lining the undersides of the branches rather than hanging as a single mass; on hardwood logs." },
    { name: "Bear's head tooth (eastern)", scientific: "Hericium americanum", danger: "edible", distinguishingFeature: "Multiple thick branches with long spines (1-4 cm) clustered at the branch tips; on hardwoods, mainly eastern North America; lacks the single unbranched ball form." },
    { name: "Comb tooth", scientific: "Hericium cirrhatum (Creolophus cirrhatus)", danger: "edible", distinguishingFeature: "Tiered, bracket-like overlapping caps with short spines on the undersurface; not a single ball; rare in North America." },
    { name: "Hedgehog mushroom", scientific: "Hydnum repandum", danger: "edible", distinguishingFeature: "Has a true cap on a true central stem with short downward-pointing spines on the underside; grows on the ground, not on wood." }
  ],
  culinary: {
    flavor: "Sweet, mild, and famously seafood-like when cooked - frequently compared to lobster, crab, or scallop in both flavor and texture; dense, meaty, slightly fibrous chew that holds up to high-heat cooking.",
    preparation: "Tear into bite-sized chunks (don't slice cleanly - the torn surface browns better) and dry-saute in a hot pan first to release internal water, then add butter or oil and brown until golden on all sides; salt at the end. Excellent in 'crab cakes,' creamy pastas, risottos, butter-poached preparations, scallop substitutes, and Asian stir-fries. Always cook thoroughly; never eat raw. Avoid overcrowding the pan, which causes steaming and a soggy texture.",
    preservation: "Dehydrate sliced or torn pieces at 45-55 C until cracker-dry, then store airtight; reconstitute in warm water or stock (reconstituted texture is somewhat spongy). Cooked pieces freeze well for 4-6 months. Also tinctured (dual-extracted in alcohol and hot water) for medicinal preparations targeting the water-soluble polysaccharides and alcohol-soluble erinacines."
  },
  conservationNotes: "Listed on the IUCN Global Fungal Red List and considered uncommon to rare across much of its native range due to its dependence on old, large-diameter hardwood trees with wounds - a habitat reduced by modern forestry. In the Pacific Northwest it is markedly less common than H. abietis. Because the species is easily cultivated commercially, wild foraging for culinary or medicinal use is discouraged; harvest only mature specimens, cut cleanly at the base, and leave the wood substrate undisturbed to allow re-fruiting. Cultivation using non-native strains near wild populations may pose a genetic risk to local mycelia.",
  sources: [
    { name: "MykoWeb - Hericium erinaceus (California Fungi)", url: "https://www.mykoweb.com/CAF/species/Hericium_erinaceus.html" },
    { name: "MushroomExpert.com - Hericium erinaceus by Michael Kuo", url: "https://www.mushroomexpert.com/hericium_erinaceus.html" },
    { name: "First Nature - Hericium erinaceus, Bearded Tooth fungus", url: "https://www.first-nature.com/fungi/hericium-erinaceus.php" },
    { name: "Wikipedia - Hericium erinaceus", url: "https://en.wikipedia.org/wiki/Hericium_erinaceus" },
    { name: "IUCN Global Fungal Red List - Hericium erinaceus", url: "https://redlist.info/iucn/species_view/356812" },
    { name: "PMC - Lion's Mane Mushroom (Hericium erinaceus): A Neuroprotective Fungus (Narrative Review, 2025)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12030463" },
    { name: "Boddy, Crockatt & Ainsworth (2011) - Ecology of Hericium cirrhatum, H. coralloides and H. erinaceus in the UK, Fungal Ecology 4:163-173", url: "https://doi.org/10.1016/j.funeco.2010.10.001" }
  ]
}
,
{
  id: "hydnum-repandum",
  commonNames: ["Hedgehog Mushroom", "Sweet Tooth", "Wood Hedgehog", "Hedgehog"],
  scientific: "Hydnum repandum",
  family: "Hydnaceae",
  order: "Cantharellales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Pseudotsuga menziesii", "Tsuga heterophylla", "Picea sitchensis", "Lithocarpus densiflorus", "Arbutus menziesii", "Quercus garryana", "Fagus sylvatica"],
  hostTrees: [
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Western hemlock", scientific: "Tsuga heterophylla" },
    { common: "Sitka spruce", scientific: "Picea sitchensis" },
    { common: "Tanoak", scientific: "Notholithocarpus densiflorus" },
    { common: "Pacific madrone", scientific: "Arbutus menziesii" },
    { common: "Garry/Oregon white oak", scientific: "Quercus garryana" }
  ],
  substrate: "soil, leaf litter, moss, and conifer duff",
  habitat: "Ectomycorrhizal in mixed conifer and conifer-hardwood forests; fruits scattered to gregarious on mossy, leafy, or needle-covered ground, frequently in the same habitats as Pacific golden chanterelles. Common in coastal forests, the Cascades, and the Coast Range; often near Douglas-fir, western hemlock, madrone, and tanoak. Recent molecular work (Niskanen, Liimatainen & Norvell 2018) shows PNW collections traditionally called 'Hydnum repandum' actually represent several regional species - primarily Hydnum washingtonianum (the larger buff-orange 'true' hedgehog of the PNW) and Hydnum oregonense (the smaller umbilicate 'belly button' form, long misapplied as H. umbilicatum). True H. repandum sensu stricto is now considered restricted to Europe, though the name remains in widespread use in field guides and citizen-science records.",
  elevationM: { min: 0, max: 1800 },
  regionsPNW: ["Oregon Coast", "Coast Range", "Cascades west slope", "Olympics", "Puget lowlands", "Vancouver Island", "Southern Oregon Coast", "Northern California redwood belt"],
  fruitingMonths: [9, 10, 11, 12, 1, 2],
  peakMonths: [10, 11],
  conditions: {
    minRain7d: 25,
    idealDaysSinceRain: [7, 14],
    tempRangeC: [4, 16],
    humidityMinPct: 80
  },
  identification: {
    cap: "Cream, buff, pale yellow to buff-orange or pale tawny; 3-17 cm broad; flattened-convex becoming centrally depressed and often irregular or lobed; dry surface, velvety at first then suede-like; margin inrolled when young, becoming undulate; bruises slowly orange-brown",
    underside: "DIAGNOSTIC: soft, brittle, downward-pointing spines or 'teeth' 3-6 mm long (not gills, not pores), cream to pale orange, sometimes decurrent on the stem; teeth easily rub off",
    stem: "3-10 cm long, 1-3 cm thick, often off-center, solid, dry, smooth; whitish to colored like the cap; bruises dull orange",
    fleshColor: "White to pale cream, thick and brittle; slowly stains orange-brown when cut or bruised",
    sporePrintColor: "White to cream",
    odor: "Mild, pleasant, faintly fruity",
    sizeCm: "Cap 3-17 cm; stem 3-10 cm x 1-3 cm"
  },
  edibility: "choice",
  toxicityNotes: "No toxic lookalikes thanks to diagnostic teeth, making it one of the safest mushrooms for beginners; older or large specimens can develop a slight bitterness, mitigated by removing teeth and cooking thoroughly. Raw consumption may cause mild GI upset in some individuals.",
  lookalikes: [
    { name: "Belly Button Hedgehog (PNW form)", scientific: "Hydnum oregonense", danger: "edible", distinguishingFeature: "Smaller (2.5-5 cm cap) with an umbilicate/navel-like central depression, paler cream-buff, hollow or thinner stem, often with tanoak and madrone; fruits mid-winter to spring. Long misapplied as H. umbilicatum in the West." },
    { name: "Washington Hedgehog", scientific: "Hydnum washingtonianum", danger: "edible", distinguishingFeature: "The likely 'true' PNW hedgehog now segregated from H. repandum - very similar buff-orange cap and teeth, separable mostly by ITS sequencing and subtle micromorphology; treated as edible-choice identically to H. repandum" },
    { name: "Olympic Hedgehog", scientific: "Hydnum olympicum", danger: "edible", distinguishingFeature: "Recently described PNW segregate, paler and often associated with spruce/hemlock; edible like other hedgehogs" },
    { name: "Giant Hedgehog", scientific: "Hydnum albomagnum", danger: "edible", distinguishingFeature: "Substantially larger, paler/whitish cap, thicker fleshy stem; edible but less choice and reportedly tougher" },
    { name: "Terracotta Hedgehog", scientific: "Hydnum rufescens", danger: "edible", distinguishingFeature: "Deeper orange to reddish-orange cap, teeth not decurrent on stem, slimmer build; primarily European but North American look-alikes exist" },
    { name: "Pacific Golden Chanterelle", scientific: "Cantharellus formosus", danger: "edible", distinguishingFeature: "Has blunt forked ridges/false gills on the underside instead of teeth, brighter yellow-orange, apricot odor; often shares habitat" },
    { name: "Bear's Head Tooth / coral tooth fungi", scientific: "Hericium spp.", danger: "edible", distinguishingFeature: "Grow on wood (logs/snags) in clustered icicle-like masses rather than as a capped mushroom on the ground" }
  ],
  culinary: {
    flavor: "Mild, slightly sweet and nutty with a peppery finish when raw; firm crunchy texture that holds shape with cooking; old specimens can turn bitter (trim teeth)",
    preparation: "Dry-saute to release moisture, then finish in butter with garlic, thyme, or shallots; excellent with eggs, pasta, risotto, cream sauces, poultry, and pork. Brush clean - avoid soaking since they absorb water readily. Teeth can be scraped off older specimens to reduce any bitterness.",
    preservation: "Sauteed and frozen, or made into duxelles; dries acceptably but loses some texture; pickling in vinegar with herbs is traditional in Europe"
  },
  conservationNotes: "Considered moderately common to locally rare in the PNW; not currently listed as threatened. Recent taxonomic splits (Niskanen, Liimatainen & Norvell 2018, Mycologia 110(5)) reveal that western North American collections under the H. repandum name comprise several endemic species (H. washingtonianum, H. oregonense, H. olympicum, H. melleopallidum), each with narrower ranges and ecological niches than the historical broad concept implies - which may warrant re-evaluation of conservation status as records are sorted out.",
  sources: [
    { name: "MykoWeb - California Fungi: Hydnum repandum", url: "https://www.mykoweb.com/CAF/species/Hydnum_repandum.html" },
    { name: "MykoWeb - California Fungi: Hydnum oregonense", url: "https://www.mykoweb.com/CAF/species/Hydnum_oregonense.html" },
    { name: "Kitsap Peninsula Mycological Society - Hedgehog Mushroom", url: "https://kitsapmushrooms.org/edible-mushrooms/hedgehog-mushroom/" },
    { name: "Oregon Discovery - Hedgehog Mushroom aka Sweet Tooth", url: "https://oregondiscovery.com/hedgehog-mushroom" },
    { name: "Niskanen, Liimatainen, Norvell et al. (2018) - Identifying and naming the currently known diversity of the genus Hydnum, Mycologia 110(5): 890-918", url: "https://www.tandfonline.com/doi/full/10.1080/00275514.2018.1477004" },
    { name: "Practical Self Reliance - Foraging Hedgehog Mushrooms (Hydnum sp.)", url: "https://practicalselfreliance.com/hedgehog-mushrooms-hydnum/" }
  ]
}
,
{
  id: "hydnum-umbilicatum",
  commonNames: ["Belly Button Hedgehog", "Bellybutton Hedgehog", "Depressed Hedgehog", "Sweet Tooth", "Navel Hedgehog"],
  scientific: "Hydnum umbilicatum",
  family: "Hydnaceae",
  order: "Cantharellales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Tsuga heterophylla", "Picea sitchensis", "Pseudotsuga menziesii", "Pinus contorta", "Picea mariana"],
  hostTrees: [
    { common: "Western hemlock", scientific: "Tsuga heterophylla" },
    { common: "Sitka spruce", scientific: "Picea sitchensis" },
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Shore pine / Lodgepole pine", scientific: "Pinus contorta" },
    { common: "Black spruce", scientific: "Picea mariana" }
  ],
  substrate: "Sphagnum moss, conifer duff, and waterlogged humus on the floor of coniferous forests; scattered to gregarious, sometimes nearly buried in moss",
  habitat: "Ectomycorrhizal with conifers, classically in cool, wet, mossy coniferous woods. In the PNW it is reported from boggy or sphagnum-dominated low-elevation conifer flats, lake-edge hemlock-spruce forests, and damp, mossy duff in older second-growth stands. Recent DNA work treats true H. umbilicatum as primarily eastern North American/European boreal, with most PNW collections of the 'belly button hedgehog' morphotype now segregated as H. oregonense; the name H. umbilicatum is still widely used in PNW field guides and club checklists for small, centrally depressed Hydnum in sphagnum/wet-conifer habitat.",
  elevationM: { min: 0, max: 1200 },
  regionsPNW: ["Coast Range", "Olympic Peninsula", "Puget lowlands", "Cascades west slope", "Vancouver Island", "BC coast", "Southeast Alaska"],
  fruitingMonths: [10, 11, 12, 1, 2, 3, 4],
  peakMonths: [11, 12, 1],
  conditions: {
    minRain7d: 25,
    idealDaysSinceRain: [5, 14],
    tempRangeC: [2, 14],
    humidityMinPct: 85
  },
  identification: {
    cap: "3-6 cm (occasionally to 7 cm) across; convex becoming flat and then centrally depressed, often with a deep, distinct 'belly button' navel or even a small perforation; margin incurved then decurved, sometimes wavy; surface smooth, dry, cream-buff to pale orange-tan, darkening and bruising dull orange",
    underside: "Crowded, soft, brittle downward-pointing spines (teeth) up to 6 mm long, cream-buff and bruising dull orange; teeth break off easily and may run slightly down the stem",
    stem: "2-6 cm long x 0.5-1 cm thick; central, more or less equal but sometimes tapering up or down; smooth, dry, lighter than the cap (whitish to cream), bruising dull orange",
    fleshColor: "Dull white, brittle, bruising dull orange to ochre",
    sporePrintColor: "White",
    odor: "Mild, not distinctive (sometimes slightly fruity); taste mild, occasionally slightly peppery or bitter (bitterness lost on thorough cooking)",
    sizeCm: "Cap 3-6 cm; stem 2-6 x 0.5-1 cm"
  },
  edibility: "choice",
  toxicityNotes: "Some populations can be slightly bitter raw; cooking thoroughly removes bitterness. No known toxicity, but as with all wild edibles a small first-time portion is advised.",
  lookalikes: [
    { name: "Hedgehog Mushroom", scientific: "Hydnum repandum (sensu lato) / H. washingtonianum", danger: "edible", distinguishingFeature: "Larger (cap 5-15+ cm), stockier, with a flat to broadly convex cap usually lacking a true central depression or perforation; stem often off-center. Same culinary use." },
    { name: "Western Belly Button Hedgehog", scientific: "Hydnum oregonense", danger: "edible", distinguishingFeature: "PNW segregate that most field 'H. umbilicatum' collections now key to: very similar small depressed-capped hedgehog of western conifer/tanoak forests; separated by DNA and slightly more orange-brown cap and pale-staining white stem." },
    { name: "Terracotta Hedgehog", scientific: "Hydnum rufescens (sensu lato)", danger: "edible", distinguishingFeature: "Darker orange to terracotta cap, lacks the deep central navel/perforation, spines do not run down the stem as strongly." },
    { name: "Hawk's Wing / Scaly Hedgehog", scientific: "Sarcodon imbricatus / S. squamosus", danger: "GI-upset", distinguishingFeature: "Much larger, brown coarsely scaly cap with a deeply depressed center; tough flesh, bitter taste, can cause GI upset." },
    { name: "Bitter Hedgehog", scientific: "Hydnellum / Phellodon spp.", danger: "inedible", distinguishingFeature: "Tough, woody/corky flesh that does not crumble; often zoned cap with bitter, peppery, or fragrant taste; spines smaller and not soft-brittle." }
  ],
  culinary: {
    flavor: "Sweet, mildly nutty and slightly peppery; firm meaty texture similar to chanterelle, and reliably bug-free even late in the season",
    preparation: "Dry-saute first to release water, then finish with butter and shallots; excellent in cream sauces, risotto, pasta, omelets, and on pizza. Cook thoroughly to eliminate any bitterness. Brush spines clean rather than washing.",
    preservation: "Best sauteed and then frozen; also good pickled. Dehydrates acceptably but loses some texture; can be powdered for stocks."
  },
  conservationNotes: "Not formally assessed by IUCN under this name in the PNW; locally common in suitable sphagnum/wet-conifer habitat but those habitats (low-elevation bog edges, old mossy conifer flats) are themselves vulnerable to logging, drainage, and development. Recent taxonomic revisions move most PNW material to H. oregonense, so regional population data under the name 'H. umbilicatum' should be interpreted with caution.",
  sources: [
    { name: "Kitsap Peninsula Mycological Society - Bellybutton Hedgehog Mushroom (Hydnum umbilicatum)", url: "https://kitsapmushrooms.org/edible-mushrooms/bellybutton-hedgehog-mushroom/" },
    { name: "Mushroom Appreciation - Hedgehog Mushrooms: Identification, Foraging, and Cooking", url: "https://www.mushroom-appreciation.com/hedgehog-mushrooms.html" },
    { name: "Practical Self Reliance - Foraging Hedgehog Mushrooms (Hydnum sp.)", url: "https://practicalselfreliance.com/hedgehog-mushrooms-hydnum/" },
    { name: "Galloway Wild Foods - Hedgehog mushroom (incl. Hydnum umbilicatum 'Depressed Hedgehog')", url: "https://gallowaywildfoods.com/october-hedgehog-mushroom/" },
    { name: "MushroomExpert.com - Hydnum umbilicatum (Michael Kuo)", url: "https://www.mushroomexpert.com/hydnum_umbilicatum.html" }
  ]
}
,
{
  id: "hygrophorus-hypothejus",
  commonNames: [
    "Herald of Winter",
    "Olive-yellow Waxy Cap",
    "Olive-brown Waxy Cap",
    "Late Fall Waxy Cap",
    "Pine-wood Hygrophorus",
  ],
  scientific: "Hygrophorus hypothejus",
  family: "Hygrophoraceae",
  order: "Agaricales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: [
    "Pinus contorta",
    "Pinus contorta var. contorta",
    "Pinus muricata",
    "Pinus ponderosa",
  ],
  hostTrees: [
    { common: "Shore pine / Beach pine", scientific: "Pinus contorta var. contorta" },
    { common: "Lodgepole pine", scientific: "Pinus contorta var. latifolia" },
    { common: "Bishop pine", scientific: "Pinus muricata" },
    { common: "Ponderosa pine", scientific: "Pinus ponderosa" },
  ],
  substrate: "Soil and conifer duff/needle litter beneath pines, often along forest tracks, paths, and dune-edge pine stands.",
  habitat: "Coastal and montane pine forests, especially stands of two-needle pines; scattered to gregarious in needle duff. A signature late-season species that flushes after the first hard frosts and cold autumn rains.",
  elevationM: { min: 0, max: 1800 },
  regionsPNW: [
    "Pacific coast (OR, WA, BC)",
    "Puget Sound lowlands",
    "Willamette Valley pine pockets",
    "Olympic Peninsula coastal pine",
    "Vancouver Island and BC south coast",
    "Eastern Cascades / ponderosa pine belt",
  ],
  fruitingMonths: [10, 11, 12, 1, 2],
  peakMonths: [11, 12, 1],
  conditions: {
    minRain7d: 20,
    idealDaysSinceRain: [3, 12],
    tempRangeC: [-2, 10],
    humidityMinPct: 80,
  },
  identification: {
    cap: "2.5-7 cm broad, convex then plano-convex to slightly depressed or umbonate; surface viscid to glutinous when moist; disc olive-brown to dark olive or umber, fading to yellow-brown, apricot, or olive-yellow toward the margin; margin inrolled when young, often paler.",
    underside: "Gills decurrent, subdistant, thick and waxy; cream to pale yellow at first, aging yellowish, peach, to orange-yellow.",
    stem: "4-8 cm long, 0.5-1.2 cm thick, equal or tapering at base; pale yellow to cream above, viscid-glutinous below from a glutinous partial veil that leaves an evanescent slime ring or ring-zone high on the stipe; lower stem often picks up olive or apricot tones; solid.",
    fleshColor: "White to pale yellow, soft and relatively thin.",
    sporePrintColor: "White",
    odor: "Mild, not distinctive (taste also mild).",
    sizeCm: "Cap 2.5-7 cm; stem 4-8 x 0.5-1.2 cm",
  },
  edibility: "edible",
  toxicityNotes: "No known toxins; widely eaten in Europe. Sliminess of cap and veil is the main objection — peel the cap or wipe off the gluten before cooking. As with all wild mushrooms, cook thoroughly and try a small portion first.",
  lookalikes: [
    {
      name: "Almond-scented waxy cap",
      scientific: "Hygrophorus agathosmus",
      danger: "edible",
      distinguishingFeature: "Gray cap (not olive-brown), pale gills and stem without yellow tones, and a strong bitter-almond / marzipan odor; associated with spruce rather than pine.",
    },
    {
      name: "Dingy waxy cap",
      scientific: "Hygrophorus olivaceoalbus",
      danger: "edible",
      distinguishingFeature: "Olive-brown viscid cap and a conspicuously sheathed, banded (snake-skin) glutinous stem; gills and stem apex stay white — no yellow flush. Found under spruce/fir, not pine.",
    },
    {
      name: "Tephroleucus waxy cap",
      scientific: "Hygrophorus tephroleucus",
      danger: "edible",
      distinguishingFeature: "Cap darker grey-brown without yellow/olive margin; gills and stem pure white, lacking the yellow tones diagnostic of H. hypothejus.",
    },
    {
      name: "Heath waxy cap",
      scientific: "Hygrophorus laetus",
      danger: "edible",
      distinguishingFeature: "Smaller and slimmer; dull olive-brown cap but gills and stem pink to pale grayish-lavender (never yellow).",
    },
    {
      name: "Dry-stemmed waxy cap",
      scientific: "Hygrophorus siccipes",
      danger: "edible",
      distinguishingFeature: "Very similar olive-yellow appearance but stem is dry (not glutinous) — closely related and sometimes confused with PNW collections labeled H. hypothejus.",
    },
  ],
  culinary: {
    flavor: "Mild and unassuming; pleasant nutty-sweet flavor when the slime is removed. Texture is firm and slightly gelatinous.",
    preparation: "Wipe or peel off the glutinous cap surface and slime ring before cooking. Excellent sauteed in butter with garlic and thyme, added to omelets, or used in cream-based pasta sauces and winter mushroom soups. Pairs well with onions and dry white wine.",
    preservation: "Best fresh; can be sauteed and frozen. Pickling in vinegar handles the slimy texture well. Drying is generally not recommended due to the high water and gluten content.",
  },
  conservationNotes: "Locally common and widespread across northern-hemisphere pine forests; not of conservation concern. As a key late-season ectomycorrhizal partner of two-needle pines, populations depend on retention of mature pine stands and undisturbed needle duff.",
  sources: [
    {
      name: "MykoWeb — California Fungi: Hygrophorus hypothejus (Fred Stevens / Michael Wood)",
      url: "https://www.mykoweb.com/CAF/species/Hygrophorus_hypothejus.html",
    },
    {
      name: "SVIMS / PSMS — Trial Key to Hygrophorus in the Pacific Northwest (Ian Gibson, rev. 2003)",
      url: "https://www.svims.ca/council/Hygrop.htm",
    },
    {
      name: "Ultimate Mushroom — Hygrophorus hypothejus (Herald of Winter)",
      url: "https://ultimate-mushroom.com/edible/237-hygrophorus-hypothejus.html",
    },
    {
      name: "Wikipedia — Hygrophorus (genus overview, ecology, spore characters)",
      url: "https://en.wikipedia.org/wiki/Hygrophorus",
    },
  ],
}
,
{
  id: "hygrophorus-marzuolus",
  commonNames: ["March Mushroom", "March Waxy Cap", "Marzuolo", "Hygrophore de mars", "Charbonnier de printemps", "Dormiente", "März-Schneckling"],
  scientific: "Hygrophorus marzuolus",
  family: "Hygrophoraceae",
  order: "Agaricales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Abies", "Picea", "Pinus", "Pseudotsuga", "Fagus", "Castanea", "Quercus"],
  hostTrees: [
    { common: "Silver fir / Pacific silver fir", scientific: "Abies spp. (e.g., A. alba in Europe, A. amabilis/A. lasiocarpa in PNW)" },
    { common: "Engelmann spruce", scientific: "Picea engelmannii" },
    { common: "Norway spruce", scientific: "Picea abies" },
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Scots / mountain pine", scientific: "Pinus sylvestris / P. mugo" },
    { common: "European beech", scientific: "Fagus sylvatica" }
  ],
  substrate: "Coniferous duff, leaf litter and moss on forest floor; often hidden beneath leaves or emerging through melting snow. Calcareous to acidic/siliceous soils.",
  habitat: "Old-growth or near-natural montane to subalpine conifer (and occasionally mixed beech) forests; snowbank mushroom fruiting at or near edges of melting snowbanks under fir, spruce, and Douglas-fir.",
  elevationM: { min: 700, max: 2000 },
  regionsPNW: ["Washington Cascades", "Oregon Cascades", "Northern Idaho", "Western Montana"],
  fruitingMonths: [2, 3, 4, 5],
  peakMonths: [3, 4],
  conditions: {
    minRain7d: 0,
    idealDaysSinceRain: [1, 14],
    tempRangeC: [0, 12],
    humidityMinPct: 80
  },
  identification: {
    cap: "4-12 cm broad, broadly convex becoming irregular/lobed; smooth and slightly viscid when wet; pale grayish-white when young, soon dark gray to blackish, often mottled or marbled with paler patches and a paler center.",
    underside: "Distant, thick, waxy gills, decurrent to adnate-decurrent; white at first, then turning pale gray to bluish-gray with age.",
    stem: "3-8 cm tall, 1.5-3 cm thick, stout and often curved at base; white to grayish, dry, fibrillose-streaked, often gray-tinted in middle and paler at apex and base.",
    fleshColor: "White, thick and firm; unchanging.",
    sporePrintColor: "White",
    odor: "Mild, indistinct (no strong odor); taste sweet and mild.",
    sizeCm: "Cap 4-12 cm; stem 3-8 x 1.5-3 cm"
  },
  edibility: "choice",
  toxicityNotes: null,
  lookalikes: [
    { name: "Sooty Hygrophorus", scientific: "Hygrophorus camarophyllus", danger: "edible", distinguishingFeature: "Fruits in autumn in acid spruce forests; cap uniformly dark sooty-brown and not marbled; lacks the early-spring/snowmelt fruiting habit." },
    { name: "Olive-brown Waxy Cap", scientific: "Hygrophorus olivaceoalbus", danger: "edible", distinguishingFeature: "Distinctly viscid, sheathed stem with olive-brown girdles; smaller and slimmer; autumn-fruiting under spruce." },
    { name: "Fried-chicken mushroom", scientific: "Lyophyllum decastes", danger: "edible-with-caution", distinguishingFeature: "Grows in dense clusters from disturbed ground, not solitary in snow-melt conifer duff; gills crowded and non-waxy; later season." },
    { name: "Clouded agaric", scientific: "Clitocybe nebularis", danger: "edible-with-caution", distinguishingFeature: "Strong sweet-mealy odor, crowded narrow decurrent gills (not waxy), cream spore print, autumn fruiting in leaf litter." },
    { name: "Deadly fibrecap", scientific: "Inocybe erubescens", danger: "deadly", distinguishingFeature: "Smaller, fibrillose/silky cap that bruises reddish; brown spore print; gills not waxy; spring fruiting in broadleaf woods (rare overlap but a serious risk for novices)." }
  ],
  culinary: {
    flavor: "Mild and delicate with firm, white flesh; not strongly aromatic but prized for its texture and earliness in the season. Highly esteemed in Italy, France, and Switzerland.",
    preparation: "Clean thoroughly (often gritty from snow/duff). Excellent sautéed in butter, simmered with cream and garlic, in risottos, pasta sauces, frittatas, or gratins. Cooks down well and holds its texture.",
    preservation: "Best fresh; can be sautéed and frozen, or dried (though flavor is delicate)."
  },
  conservationNotes: "Listed on multiple European national Red Lists as threatened; restricted to old, natural forests. Populations declining (>30% over 50 years per IUCN) due to loss of old-forest habitat and nitrogen deposition. Commercial sale prohibited in several European countries. Rare overall; collect sparingly.",
  sources: [
    { name: "Wikipedia - Hygrophorus marzuolus", url: "https://en.wikipedia.org/wiki/Hygrophorus_marzuolus" },
    { name: "IUCN Red List - Hygrophorus marzuolus", url: "https://redlist.info/iucn/species_view/181113/" },
    { name: "MycoDB - Hygrophorus marzuolus", url: "https://www.mycodb.fr/fiche.php?espece=marzuolus&genre=Hygrophorus" },
    { name: "Ultimate Mushroom - Hygrophorus marzuolus", url: "https://ultimate-mushroom.com/edible/356-hygrophorus-marzuolus.html" },
    { name: "Healing Mushrooms - March Mushroom Identification & Look Alikes", url: "https://healing-mushrooms.net/hygrophorus-marzuolus" },
    { name: "SVIMS - Hygrophorus in the Pacific Northwest", url: "https://www.svims.ca/council/Hygrop.htm" }
  ]
}
,
{
  id: "hypomyces-lactifluorum",
  commonNames: ["Lobster Mushroom", "Lobster", "Lobster Fungus"],
  scientific: "Hypomyces lactifluorum",
  family: "Hypocreaceae",
  order: "Hypocreales",
  trophicMode: "parasitic",
  mycorrhizalPartners: null,
  hostTrees: [
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Western hemlock", scientific: "Tsuga heterophylla" },
    { common: "Sitka spruce", scientific: "Picea sitchensis" },
    { common: "Grand fir", scientific: "Abies grandis" },
    { common: "Ponderosa pine", scientific: "Pinus ponderosa" },
    { common: "Lodgepole pine", scientific: "Pinus contorta" }
  ],
  substrate: "Parasitic on the fruitbodies of host mushrooms in the Russulaceae, especially Russula brevipes and members of the Lactarius/Lactifluus piperatus complex (e.g., Lactifluus piperatus). The host mushroom is itself ectomycorrhizal with conifers, so lobster mushrooms appear in the duff and needle litter where infected hosts emerge.",
  habitat: "An ascomycete parasite rather than a true mushroom: H. lactifluorum colonizes the fruitbody of a host Russula or Lactarius, encrusting it in a bright orange-red perithecial layer that aborts gill development and transforms the host into the 'lobster mushroom.' Found in mature, often older-growth conifer and mixed conifer forests where Russula brevipes is common, fruiting in duff under Douglas-fir, hemlock, spruce, true fir, and pines. The host is mycorrhizal with conifers; the lobster itself is strictly parasitic on the host basidiocarp. Often solitary, scattered, or gregarious, sometimes only partially emergent from the duff (look for orange humps).",
  elevationM: { min: 0, max: 2000 },
  regionsPNW: [
    "Oregon Coast Range",
    "Oregon Cascades",
    "Washington Cascades",
    "Olympic Peninsula",
    "Puget Sound lowlands",
    "Vancouver Island",
    "British Columbia coast",
    "Northern California redwood coast",
    "Klamath-Siskiyou",
    "Inland Northwest conifer forests"
  ],
  fruitingMonths: [7, 8, 9, 10, 11],
  peakMonths: [9, 10],
  conditions: {
    minRain7d: 20,
    idealDaysSinceRain: [7, 21],
    tempRangeC: [7, 18],
    humidityMinPct: 75
  },
  identification: {
    cap: "No true cap of its own: the host Russula or Lactarius is encased in a bright orange to orange-red, finely pimpled crust (perithecia). The original cap shape (convex to funnel-shaped) is often distorted and contorted with age; older specimens fade toward pink, purplish, or brownish.",
    underside: "Gills of the host are aborted, reduced to blunt ridges, folds, or a nearly smooth surface, all covered by the same orange parasitic crust. No free gills or pores.",
    stem: "Stubby, thick, solid stem inherited from the host (typically Russula brevipes), also coated orange. Often more than half buried in duff.",
    fleshColor: "Internal flesh of the host remains white to off-white and firm/dense; if the host is a Lactarius, cut surfaces may exude white latex. The orange coloration is confined to the outer crust, usually penetrating only 1-3 mm.",
    sporePrintColor: "white (spore print impractical; H. lactifluorum's own ascospores are hyaline, spindle-shaped, warted, two-celled, ~35-45 x 6-7.5 µm)",
    odor: "Initially mild and fungal, becoming distinctly seafood-like (shellfish/lobster) with age or cooking; taste mild when host is R. brevipes, potentially peppery if host is a Lactarius/Lactifluus piperatus.",
    sizeCm: "Whole transformed fruitbody 5-20 cm across, 4-15 cm tall; some specimens reach 25+ cm."
  },
  edibility: "choice",
  toxicityNotes: "Generally safe and choice when the host can be confirmed as Russula brevipes or the Lactifluus piperatus group, the firm white interior shows no decay, and the specimen is bright orange (not faded purple/brown). Older, decomposing lobsters can cause GI upset and should be avoided. A small theoretical risk exists that Hypomyces could parasitize a toxic host; while this has not been documented for H. lactifluorum (which is highly host-specific to Russulaceae), some foragers recommend caution if the host is unidentifiable. Always cook thoroughly.",
  lookalikes: [
    {
      name: "Amanita-parasitizing Hypomyces",
      scientific: "Hypomyces hyalinus",
      danger: "deadly",
      distinguishingFeature: "Parasitizes Amanita species (including potentially deadly Amanitas), not Russula/Lactarius. Forms a smooth, whitish to pinkish, powdery or felt-like coating (NOT bright orange, NOT pimpled with perithecia). Host retains a visible stem-ring/volva structure. Never consume any Hypomyces growing on Amanita - amatoxins from the host may persist."
    },
    {
      name: "Bolete eater",
      scientific: "Hypomyces chrysospermus",
      danger: "GI-upset",
      distinguishingFeature: "Parasitizes boletes (Boletaceae), starting white and powdery, then turning bright golden-yellow, finally reddish-brown. Host is a pored bolete, not a gilled Russula/Lactarius. Considered inedible and reportedly causes GI upset."
    },
    {
      name: "Green-spored Hypomyces / cobweb mold",
      scientific: "Hypomyces luteovirens",
      danger: "inedible",
      distinguishingFeature: "Also parasitizes Russulaceae but forms a yellow-green to olive crust on the stipe and gills, never the bright orange of H. lactifluorum. Inedible."
    },
    {
      name: "Uninfected short-stemmed russula",
      scientific: "Russula brevipes",
      danger: "edible",
      distinguishingFeature: "White, unparasitized host with normal brittle gills and no orange crust. Edible but bland or acrid; lacks the seafood odor and firm dense flesh of a true lobster."
    },
    {
      name: "Peppery milkcap",
      scientific: "Lactifluus piperatus",
      danger: "GI-upset",
      distinguishingFeature: "Uninfected white milkcap with crowded gills exuding white, acrid latex. No orange crust. Considered inedible or causing GI upset when raw or undercooked due to acrid latex."
    }
  ],
  culinary: {
    flavor: "Firm, dense, slightly crunchy texture with a mild seafood-like flavor often compared to lobster or shellfish; mildly nutty and umami. Holds up well to cooking and absorbs flavors readily.",
    preparation: "Brush or peel off embedded duff and trim any soft or discolored portions; the firm white interior is the prize. Slice and saute in butter or oil; excellent in chowders, bisques, risotto, pasta, and seafood-style preparations (mock lobster rolls, scampi). Always cook thoroughly. Pairs with cream, sherry, tarragon, and dill.",
    preservation: "Dehydrates well; rehydrated lobsters retain firm texture and concentrated flavor. Also freezes well after sauteing. Some foragers preserve in butter or as duxelles. Old/faded specimens, even if inedible, yield strong orange-pink natural dyes."
  },
  conservationNotes: "Not listed as rare; locally common to occasional across the PNW. Indirectly dependent on healthy mature conifer forests that support the mycorrhizal host (Russula brevipes and relatives). Forest management that retains older conifer stands, undisturbed duff, and Douglas-fir/hemlock canopy supports both host and parasite. No formal conservation status.",
  sources: [
    { name: "MykoWeb - California Fungi: Hypomyces lactifluorum (Michael Wood, Fred Stevens)", url: "https://www.mykoweb.com/CAF/species/Hypomyces_lactifluorum.html" },
    { name: "MushroomExpert.com - Hypomyces lactifluorum (Michael Kuo)", url: "https://www.mushroomexpert.com/hypomyces_lactifluorum.html" },
    { name: "Burke Herbarium Image Collection (University of Washington) - Hypomyces lactifluorum", url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Hypomyces+lactifluorum" },
    { name: "Tom Volk's Fungus of the Month: Hypomyces lactifluorum (Aug 2001, University of Wisconsin)", url: "https://botit.botany.wisc.edu/toms_fungi/aug2001.html" },
    { name: "Rogerson, C.T. & Samuels, G.J. (1994). Agaricicolous species of Hypomyces. Mycologia 86(6): 839-866.", url: "https://www.jstor.org/stable/3760597" }
  ]
}
,
{
  id: "lactarius-deliciosus",
  commonNames: ["Saffron Milk Cap", "Pine Milk Cap", "Delicious Milk Cap", "Red Pine Mushroom", "Saffron Milky Cap"],
  scientific: "Lactarius deliciosus",
  family: "Russulaceae",
  order: "Russulales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Pinus contorta", "Pinus ponderosa", "Pinus sylvestris (introduced)", "Pinus radiata (planted)", "Pinus spp. (hard, 2- and 3-needled pines)"],
  hostTrees: [
    { common: "Shore pine", scientific: "Pinus contorta var. contorta" },
    { common: "Lodgepole pine", scientific: "Pinus contorta var. latifolia" },
    { common: "Ponderosa pine", scientific: "Pinus ponderosa" },
    { common: "Scots pine (planted/introduced)", scientific: "Pinus sylvestris" },
    { common: "Monterey pine (planted)", scientific: "Pinus radiata" }
  ],
  substrate: "Acidic, often sandy or duff-covered soil and needle litter under hard (2- and 3-needled) pines; frequently fruits in mossy ground, grassy openings at forest edges, along roads and trails, and in planted/ornamental pine stands (parks, Christmas tree farms, shelter belts, cemeteries) as well as natural shore-pine and lodgepole-pine forests",
  habitat: "Strictly ectomycorrhizal with pines (Pinus spp.). Considered native to Eurasia; in much of the Pacific Northwest the bulk of records traditionally called 'L. deliciosus' are now thought to represent either (a) an introduced European population associated with planted Scots/Monterey/Austrian pines in urban and ornamental settings, or (b) a complex of look-alike native North American species (notably L. rubrilacteus with Douglas-fir, plus L. deliciosus var. areolatus, var. olivaceosordidus, and var. piceus reported from the PNW). Molecular studies have not recovered the true European L. deliciosus from native NA forests, so PNW collections under this name are best regarded as a species complex pending further work. Fruits in late summer through fall, gregarious to scattered, sometimes in fairy rings under planted pines.",
  elevationM: { min: 0, max: 2000 },
  regionsPNW: ["Oregon Coast (shore pine)", "Willamette Valley (planted pines, parks)", "Puget Sound lowlands (urban/planted pines)", "Olympic Peninsula", "Vancouver Island and BC Coast", "Cascades (east slope, lodgepole and ponderosa)", "Eastern Washington/Oregon ponderosa belt", "BC Interior", "northern Idaho"],
  fruitingMonths: [8, 9, 10, 11],
  peakMonths: [9, 10],
  conditions: {
    minRain7d: 20,
    idealDaysSinceRain: [5, 12],
    tempRangeC: [6, 18],
    humidityMinPct: 75
  },
  identification: {
    cap: "5-15 cm across; convex with an inrolled margin when young, expanding to broadly convex, then becoming flat and finally vase-shaped/funnel-shaped with a depressed center in age; surface smooth, viscid when moist, bright carrot-orange to salmon-orange, conspicuously zoned with concentric darker orange to orange-brown bands and often small darker spots/pits; bruises and ages green - mature specimens are often blotched with green stains, especially on the disc",
    underside: "Gills decurrent (running down the stem), close, sometimes forked near the stem, pale orange to carrot-orange, slowly staining dingy green where bruised or in age; exude bright orange to carrot-colored latex (milk) when cut - the latex does not change color appreciably or only slowly darkens to dull red over many minutes (distinguishing it from L. rubrilacteus, whose latex is dark red from the start)",
    stem: "3-8 cm long x 1.5-3 cm thick; cylindrical or tapering downward, often hollow at maturity; concolorous with the cap - orange to salmon - and frequently marked with small darker orange to wine-colored 'scrobicules' (pit-like depressions); bruises green where handled and develops extensive green stains in age; no ring/veil",
    fleshColor: "Pale orange to whitish in the interior, exuding bright orange/carrot-colored latex when cut; flesh and latex stain the cut surface slowly green within 10-30 minutes (diagnostic, together with orange latex and pine habitat)",
    sporePrintColor: "Cream to pale yellow-buff (sometimes with a faint pinkish tint)",
    odor: "Mild, faintly fruity or resinous, not distinctive; taste mild to slightly bitter or grainy",
    sizeCm: "Cap 5-15 cm; stem 3-8 cm x 1.5-3 cm"
  },
  edibility: "edible",
  toxicityNotes: "Widely eaten in Europe and considered choice there; in North America reactions are more mixed - the flesh is somewhat brittle/grainy and some people find it bitter, and rare cases of mild GI upset have been reported, particularly from raw or undercooked specimens. Always cook thoroughly. Be aware that 'L. deliciosus' in the PNW is a taxonomic catch-all that may include several distinct species, not all of which are equally palatable. The harmless reddish color the latex can impart to urine and stool is a known and benign cosmetic effect.",
  lookalikes: [
    { name: "Bleeding Milk Cap", scientific: "Lactarius rubrilacteus", danger: "edible", distinguishingFeature: "Latex DARK RED (wine/blood-red) from the moment of cutting rather than orange; cap more reddish-orange/brick and often less brightly zoned; associated with DOUGLAS-FIR (Pseudotsuga menziesii) rather than pines; the more commonly encountered native 'milk cap' in PNW Douglas-fir forests and frequently mistaken for L. deliciosus" },
    { name: "Orange-latex Milky / Spruce Milk Cap", scientific: "Lactarius deterrimus", danger: "edible", distinguishingFeature: "Very similar orange latex and green-staining, but associated with SPRUCE (Picea); latex slowly turns wine-red on exposure; flesh often more bitter; primarily a European species, reported from eastern NA spruce plantations" },
    { name: "Red-hot Milk Cap", scientific: "Lactarius rufus", danger: "toxic", distinguishingFeature: "Cap uniformly brick-red to reddish-brown without orange zonation; latex WHITE (not orange); taste extremely acrid/peppery after a delay; associated with pines and birch; causes severe GI upset if eaten raw or undercooked" },
    { name: "Woolly Milk Cap", scientific: "Lactarius torminosus", danger: "toxic", distinguishingFeature: "Cap pink to pinkish-buff with a distinctly WOOLLY/hairy inrolled margin; latex WHITE and unchanging; associated with birch; causes severe gastrointestinal symptoms (the name 'torminosus' means 'causing colic')" },
    { name: "Fenugreek Milk Cap", scientific: "Lactarius helvus", danger: "toxic", distinguishingFeature: "Cap dull yellow-brown to cinnamon, NOT zoned bright orange; latex WATERY/whey-like and clear, not orange; strong distinctive smell of fenugreek/maple syrup, especially when dried; contains toxins causing severe GI symptoms" },
    { name: "Bearded Milk Cap", scientific: "Lactarius scrobiculatus", danger: "GI-upset", distinguishingFeature: "Cap yellow with a hairy/bearded inrolled margin; latex WHITE quickly turning sulfur-yellow on exposure; acrid; associated with conifers" },
    { name: "Lactarius deliciosus var. areolatus / var. piceus / var. olivaceosordidus", scientific: "Lactarius deliciosus (varieties)", danger: "edible", distinguishingFeature: "Several poorly delimited varieties have been reported from PNW (Hesler & Smith); separable mainly on microscopic features and subtle differences in latex color change; all are similarly edible but reflect the unresolved nature of the L. deliciosus species complex in North America" }
  ],
  culinary: {
    flavor: "When properly prepared, mild, slightly resinous and 'piney' with a firm-to-grainy texture; not as rich or buttery as European specimens are reputed to be. North American collections are often described as merely 'fair' compared to chanterelles or boletes. Slow, thorough cooking improves texture and reduces any slight bitterness.",
    preparation: "Long, slow cooking is essential - sauteing briefly leaves the flesh squeaky and grainy. Slice thickly and pan-fry in olive oil and butter over moderate heat for 15-20 minutes until edges crisp; excellent grilled whole over coals (a traditional Catalan/Spanish preparation as 'rovellons a la brasa') with olive oil, garlic, and parsley. Also good in stews, paellas, and slow-braised dishes where the firm texture is an asset. Discard tough stem bases and any green-stained or insect-ridden tissue.",
    preservation: "Best preserved by pickling in vinegar with garlic and herbs (a traditional eastern European method) or by confit in oil; does not dry as well as boletes - the rehydrated texture is rubbery. Can be sauteed and frozen for short-term storage."
  },
  conservationNotes: "Not of conservation concern; globally common and locally abundant, especially in association with planted pines. In the PNW its status is complicated by ongoing taxonomic uncertainty: collections labeled 'L. deliciosus' may represent a mix of introduced European populations (with planted Scots, Monterey, and Austrian pines) and several native or co-introduced species in a species complex. Improved molecular sampling of PNW Lactarius is needed to clarify which species are actually present.",
  sources: [
    { name: "MykoWeb - California Fungi: Lactarius deliciosus (notes on species complex and L. rubrilacteus distinction)", url: "https://www.mykoweb.com/CAF/species/Lactarius_deliciosus.html" },
    { name: "Pacific Northwest Key Council - Key to Lactarius in the PNW (Fred Stevens, lists var. areolatus, var. olivaceosordidus, var. piceus reported from PNW)", url: "https://www.svims.ca/council/Lactar.htm" },
    { name: "MushroomExpert.com - Lactarius deliciosus (Michael Kuo)", url: "https://www.mushroomexpert.com/lactarius_deliciosus.html" },
    { name: "Oregon Discovery - Delicious Milk Cap / Saffron Milk Cap (PNW habitat and identification)", url: "https://oregondiscovery.com/delicious-milk-cap" },
    { name: "Wikipedia - Lactarius deliciosus", url: "https://en.wikipedia.org/wiki/Lactarius_deliciosus" },
    { name: "Wikipedia - Lactarius rubrilacteus (PNW Douglas-fir associate frequently confused with L. deliciosus)", url: "https://en.wikipedia.org/wiki/Lactarius_rubrilacteus" }
  ]
}
,
{
  id: "lactarius-rubidus",
  commonNames: ["Candy Cap", "Curry Milkcap", "Maple Syrup Milky"],
  scientific: "Lactarius rubidus",
  family: "Russulaceae",
  order: "Russulales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Quercus agrifolia", "Notholithocarpus densiflorus", "Arbutus menziesii", "Pseudotsuga menziesii", "Pinus spp."],
  hostTrees: [
    { common: "Coast live oak", scientific: "Quercus agrifolia" },
    { common: "Tanoak", scientific: "Notholithocarpus densiflorus" },
    { common: "Pacific madrone", scientific: "Arbutus menziesii" },
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Bishop / Monterey / shore pine", scientific: "Pinus spp." }
  ],
  substrate: "Humus, moss, leaf litter, well-rotted conifer wood, and along trail and road banks in mixed evergreen forest duff",
  habitat: "Ectomycorrhizal in mixed hardwood/conifer woodlands - especially the California mixed evergreen forest of coast live oak, tanoak, and madrone, and also with Douglas-fir and pines. Solitary to scattered, gregarious, or in loose clusters, often fruiting in large numbers in humus, moss, on rotting conifer wood, and along trails and road banks. Far more abundant in coastal Northern and Central California (where it is the iconic late-fall/winter dessert mushroom) than in the PNW proper; the range extends north along the SW Oregon coast into the mixed-evergreen pockets of the Klamath and southern Coast Range, becoming uncommon and patchy northward. Older sources also list Washington, but most authentic 'candy cap' records north of southern Oregon should be verified against more common look-alikes.",
  elevationM: { min: 0, max: 1200 },
  regionsPNW: ["SW Oregon coast", "Klamath-Siskiyou", "Southern Oregon Coast Range", "Northern California coast (extending into PNW catchment)", "Rogue/Umpqua valleys (uncommon)"],
  fruitingMonths: [11, 12, 1, 2, 3],
  peakMonths: [12, 1],
  conditions: {
    minRain7d: 25,
    idealDaysSinceRain: [7, 14],
    tempRangeC: [4, 15],
    humidityMinPct: 80
  },
  identification: {
    cap: "2-8 cm broad; convex becoming flat to shallowly vase-shaped/centrally depressed; dry or slightly sticky, dull, often somewhat wrinkled or uneven but otherwise smooth; reddish brown to rusty orange-brown, evenly colored (not zonate); margin inrolled when young then straightening",
    underside: "Gills attached to slightly decurrent, close to nearly distant; very pale orange to pinkish buff, developing cinnamon stains in age but NOT staining yellow from the latex; exudes a scanty watery-to-whey-like (skim-milk consistency) white latex when cut - a key diagnostic feature",
    stem: "2-7 cm long, up to 1.5 cm thick, more or less equal, brittle and easily crushed, smooth, colored like the cap or paler, often with orangish fuzz/tomentum at the base; becomes hollow with age",
    fleshColor: "Very pale orange, brittle, not staining when sliced; latex stays white/watery and does not turn yellow",
    sporePrintColor: "Pale yellow to whitish (pale buff)",
    odor: "Faint and sweet when fresh; when dried develops an intense, persistent maple-syrup / burnt-sugar / fenugreek aroma that is fully DIAGNOSTIC and can last decades in storage (herbarium specimens retain it after 60+ years)",
    sizeCm: "Cap 2-8 cm; stem 2-7 cm x up to 1.5 cm"
  },
  edibility: "choice",
  toxicityNotes: "No serious toxicity, but candy caps are easily confused with several inedible, acrid, or mildly poisonous orange-brown Lactarius species on the West Coast. Always verify with the watery-white latex (not yellow-staining, not acrid) and confirm the maple-syrup odor on dried specimens before eating. Some foragers report mild GI upset from large quantities. Like all wild mushrooms, eat a small portion first and cook thoroughly.",
  lookalikes: [
    { name: "Rufous Candy Cap", scientific: "Lactarius rufulus", danger: "edible", distinguishingFeature: "Larger and redder, oak-associated (often under coast live oak), less pronounced maple aroma, solid (not hollow) stem, slightly acrid taste possible; still edible and used similarly but less prized" },
    { name: "Yellow-staining Milkcap", scientific: "Lactarius xanthogalactus", danger: "toxic", distinguishingFeature: "Very common Northern California mis-collection; latex turns rapidly bright yellow on exposure (candy cap latex stays watery white), cap more grayish-orange and faintly zonate, taste bitter to acrid - considered poisonous (causes GI upset)" },
    { name: "Rufous Milkcap", scientific: "Lactarius rufus", danger: "toxic", distinguishingFeature: "Larger, darker brick-red cap, white unchanging latex that stains paper yellow, intensely acrid 'habanero' taste (wait a minute when chewing) - inedible/poisonous raw, causes GI upset" },
    { name: "Subviscid Milkcap", scientific: "Lactarius subviscidus", danger: "inedible", distinguishingFeature: "Viscid/sticky cap when wet, deep orange, scanty white latex, slightly acrid taste after chewing; not a candy cap" },
    { name: "Orange Milkcap", scientific: "Lactarius substriatus", danger: "inedible", distinguishingFeature: "Viscid cap with a striate margin, scarlet-orange to brownish-orange, latex slowly stains yellow, slightly peppery taste" },
    { name: "Luculent Milkcap", scientific: "Lactarius luculentus var. laetus", danger: "inedible", distinguishingFeature: "Brightest/palest orange, viscid cap, bitter taste after chewing; no maple smell when dried" },
    { name: "Deadly Galerina", scientific: "Galerina marginata", danger: "deadly", distinguishingFeature: "Brown LBM on wood with a ring on the stem, rusty-brown spore print, flexible (not brittle) stem, NO latex at all; contains amatoxins. Always check for latex and a brittle stem to rule out Galerina." }
  ],
  culinary: {
    flavor: "Mild and faintly sweet raw; when dried and rehydrated (or used as a powder) develops an extraordinary maple syrup, butterscotch, fenugreek, curry flavor that is the entire reason for picking the species. Powerful even in small amounts - a few grams of dried caps can flavor an entire batch of cookies or ice cream.",
    preparation: "Almost always dried first to intensify the maple-syrup aroma, then used whole, chopped, or ground into a powder. Famous in sweet applications: candy cap ice cream, cheesecake, panna cotta, shortbread, cookies, custards, creme brulee, and pastries; also excellent in savory uses like braises, glazes for pork or duck, mushroom syrup, infused cream, and butterscotch sauces. Often steeped in cream or milk to infuse, then strained. A small handful goes a long way.",
    preservation: "Drying is the standard and is REQUIRED to develop full flavor - dehydrate on low heat (35-40 C) until brittle, then store airtight in a cool dark place; aroma persists for years (decades in herbarium material). Also commonly preserved as candy cap sugar (dried powder blended with sugar), infused syrup, infused alcohol/liqueur, or candy cap honey."
  },
  conservationNotes: "Not formally listed; locally abundant in good years in Northern California and adjacent SW Oregon. Becomes uncommon and patchy in the rest of the PNW. As a mycorrhizal partner of coast live oak, tanoak, and Douglas-fir, populations are tied to the health of California mixed evergreen forest, which is threatened by Sudden Oak Death (Phytophthora ramorum) - long-term population declines are plausible where tanoak/oak hosts are dying back. Pick the cap (leave the mycelium), and avoid raking duff.",
  sources: [
    { name: "MykoWeb - California Fungi: Lactarius rubidus", url: "https://www.mykoweb.com/CAF/species/Lactarius_rubidus.html" },
    { name: "MykoWeb - The Candy Cap Complex (article)", url: "https://www.mykoweb.com/articles/CandyCapComplex.html" },
    { name: "MushroomExpert.Com - Lactarius rubidus (Michael Kuo)", url: "https://www.mushroomexpert.com/lactarius_rubidus.html" },
    { name: "Bay Area Mycological Society - Lactarius rubidus and Lactarius rufulus, the 'Candy Cap'", url: "https://bayareamushrooms.org/mushroommonth/candy_cap.html" },
    { name: "Puget Sound Mycological Society - Pictorial Key to PNW Lactarius", url: "https://www.alpental.com/psms/PNWMushrooms/PictorialKey/Lactarius.htm" },
    { name: "Tom Volk's Fungus of the Month, October 2005 - Lactarius rubidus", url: "https://botit.botany.wisc.edu/toms_fungi/oct2005.html" },
    { name: "Fungi Perfecti - Mushrooms for Dessert? (Lactarius rubidus)", url: "https://fungi.com/blogs/articles/mushrooms-for-dessert" }
  ]
}
,
{
  id: "lactarius-rubrilacteus",
  commonNames: [
    "Bleeding Milk Cap",
    "Bleeding Milkcap",
    "Red-juice Milk Cap",
    "Bleeding Lactarius",
  ],
  scientific: "Lactarius rubrilacteus",
  family: "Russulaceae",
  order: "Russulales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Pseudotsuga menziesii", "Pinus spp."],
  hostTrees: [
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Ponderosa Pine", scientific: "Pinus ponderosa" },
  ],
  substrate:
    "Conifer needle duff and forest soil; mycorrhizal with Douglas-fir primarily, sometimes with associated pines.",
  habitat:
    "Scattered to gregarious on the ground under Douglas-fir, especially in younger stands; also in mixed conifer forests with Douglas-fir present; tolerates a range of habitats from coastal forests to drier interior conifer stands.",
  elevationM: { min: 0, max: 2000 },
  regionsPNW: [
    "Coastal British Columbia",
    "Puget Sound lowlands",
    "Olympic Peninsula",
    "Cascade Range (WA & OR)",
    "Willamette Valley",
    "Oregon Coast Range",
    "Northern California (extends south)",
    "Eastern Cascades/dry interior Douglas-fir forests",
  ],
  fruitingMonths: [9, 10, 11, 12, 1],
  peakMonths: [10, 11],
  conditions: {
    minRain7d: 20,
    idealDaysSinceRain: [3, 10],
    tempRangeC: [4, 16],
    humidityMinPct: 70,
  },
  identification: {
    cap: "5-12 cm broad, convex with an inrolled margin when young, becoming plano-convex to shallowly funnel-shaped (infundibuliform) in age; surface viscid when moist, banded concentrically with shades of orange to orange-red (carrot to dull orange), with lighter zones between; often develops dingy green discolorations in age.",
    underside:
      "Gills decurrent, narrow, close to crowded, dull orange to pinkish cinnamon, becoming dull purplish red under a hoary sheen; bleed a dark blood-red to purplish-red latex when cut; stain greenish where bruised.",
    stem: "2-6 cm tall, 1-3 cm thick, equal to tapering at the base; solid and brittle when young, becoming hollow in age; surface smooth and dull orange-buff, often a paler shade than the cap, sometimes with scrobiculate (pitted) patches; bruises green where handled.",
    fleshColor:
      "Thick, brittle, dingy yellow to whitish; bleeds a sparse, dark blood-red to purplish-red latex when cut (paler dingy orangish-red in older specimens); flesh and all parts stain green with age or handling.",
    sporePrintColor: "Pale yellow to creamy buff",
    odor: "Mild, sometimes faintly subaromatic or of conifer needles; taste mild.",
    sizeCm: "Cap 5-12 cm; stipe 2-6 x 1-3 cm",
  },
  edibility: "edible",
  toxicityNotes:
    "Edible but generally considered of low culinary interest; can have a slightly bitter or acrid taste and a grainy/brittle texture. Some individuals may experience mild gastrointestinal upset. Always cook thoroughly; eat only young, firm specimens free of insect damage. Frequently collected and eaten on the West Coast as the local 'saffron milk cap' analog.",
  lookalikes: [
    {
      name: "Saffron Milk Cap (Delicious Milk Cap)",
      scientific: "Lactarius deliciosus",
      danger: "edible",
      distinguishingFeature:
        "Has bright carrot-orange latex (not dark blood-red); associated with pines rather than Douglas-fir; cap zonation tends to be brighter orange. The true L. deliciosus of Europe likely does not occur in North America; West Coast collections labelled 'deliciosus' are typically L. rubrilacteus or related species.",
    },
    {
      name: "Bloody Milk Cap",
      scientific: "Lactarius sanguifluus",
      danger: "edible",
      distinguishingFeature:
        "European species; L. rubrilacteus has historically been misapplied this name. True L. sanguifluus is a Mediterranean pine associate and not present in the PNW.",
    },
    {
      name: "Western Painted Suillus",
      scientific: "Suillus lakei",
      danger: "edible",
      distinguishingFeature:
        "Has pores (not gills) on the cap underside; no milky latex; dry scaly cap; also a Douglas-fir associate but completely different fruit-body structure.",
    },
    {
      name: "Orange-latex Milky",
      scientific: "Lactarius xanthogalactus",
      danger: "GI-upset",
      distinguishingFeature:
        "Smaller, with white latex that quickly turns bright sulfur-yellow on exposure (not red); cap pinkish-orange without strong concentric zonation; acrid taste; reportedly causes gastrointestinal upset in some.",
    },
    {
      name: "Bearded Milk Cap",
      scientific: "Lactarius torminosus",
      danger: "GI-upset",
      distinguishingFeature:
        "Pinkish zoned cap with conspicuous shaggy/hairy inrolled margin; white latex (not red); associated with birch; acrid and reported toxic raw.",
    },
  ],
  culinary: {
    flavor:
      "Mild to slightly bitter or peppery; somewhat brittle/grainy texture characteristic of Lactarius; can be improved significantly with slow, thorough cooking; flavor described as woodsy and earthy but not strong.",
    preparation:
      "Best when long, slow-cooked (sautéed in butter or olive oil, or braised) to break down the grainy texture and reduce slight bitterness. Excellent grilled brushed with oil, used in stews, paella-style rice dishes, or pickled. Young specimens are far preferred over older greening ones. Pairs well with garlic, thyme, and other strong aromatics.",
    preservation:
      "Pickling is a traditional and recommended preservation method (especially for the European saffron-milk-cap relatives, which are typically marinated). Can be dried but flavor and texture suffer compared to fresh. Sauté before freezing rather than freezing raw.",
  },
  conservationNotes:
    "Common and widespread throughout its range wherever Douglas-fir grows; not of conservation concern. Sustained populations depend on the health of mature and young Douglas-fir forests.",
  sources: [
    {
      name: "MykoWeb California Fungi - Lactarius rubrilacteus",
      url: "https://www.mykoweb.com/CAF/species/Lactarius_rubrilacteus.html",
    },
    {
      name: "Pacific Northwest Key Council (SVIMS) - Key to Lactarius in the Pacific Northwest",
      url: "https://www.svims.ca/council/Lactar.htm",
    },
    {
      name: "Burke Herbarium (University of Washington) - Lactarius rubrilacteus",
      url: "https://biology.burke.washington.edu/herbarium/imagecollection/taxon.php?Taxon=Lactarius+rubrilacteus",
    },
    {
      name: "MykoWeb California Fungi - Lactarius deliciosus (comparison notes)",
      url: "https://www.mykoweb.com/CAF/species/Lactarius_deliciosus.html",
    },
    {
      name: "Wikipedia - Lactarius rubrilacteus",
      url: "https://en.wikipedia.org/wiki/Lactarius_rubrilacteus",
    },
  ],
}
,
{
  id: "laetiporus-conifericola",
  commonNames: ["Conifer sulfur shelf", "Western conifer chicken-of-the-woods", "Conifer chicken of the woods", "Western sulphur shelf", "Sulfur shelf (conifer)"],
  scientific: "Laetiporus conifericola",
  family: "Laetiporaceae",
  order: "Polyporales",
  trophicMode: "mixed",
  mycorrhizalPartners: null,
  hostTrees: [
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Western hemlock", scientific: "Tsuga heterophylla" },
    { common: "Mountain hemlock", scientific: "Tsuga mertensiana" },
    { common: "Sitka spruce", scientific: "Picea sitchensis" },
    { common: "Engelmann spruce", scientific: "Picea engelmannii" },
    { common: "Lutz spruce (type host)", scientific: "Picea x lutzii" },
    { common: "Grand fir", scientific: "Abies grandis" },
    { common: "Pacific silver fir", scientific: "Abies amabilis" },
    { common: "Noble fir", scientific: "Abies procera" },
    { common: "Subalpine fir", scientific: "Abies lasiocarpa" },
    { common: "Red fir", scientific: "Abies magnifica" },
    { common: "White fir", scientific: "Abies concolor" },
    { common: "Coast redwood", scientific: "Sequoia sempervirens" },
    { common: "Ponderosa pine", scientific: "Pinus ponderosa" },
    { common: "Lodgepole pine", scientific: "Pinus contorta" },
    { common: "Sugar pine", scientific: "Pinus lambertiana" }
  ],
  substrate: "Brown-rot wood-decay fungus on conifer wood: living, dying, and recently dead standing trees, snags, large fallen logs, and stumps. Acts as both a parasite (heart-rot causing brown cubical rot in living host heartwood) and a saprotroph (continuing to fruit on the same wood after host death). Strictly confined to conifers, especially true firs (Abies), spruce (Picea), hemlock (Tsuga), Douglas-fir, redwood, and pines.",
  habitat: "Coniferous forests throughout western North America from California to Alaska, including throughout the PNW. Fruits in overlapping shelving clusters, often quite high on the trunks of standing live or dead conifers, sometimes also at the base of trees and from large downed logs and stumps. Most common in mature and old-growth forests where large-diameter conifer wood is abundant, but also found in younger forests on Douglas-fir stumps and infected trees. Fruiting is annual (fruitbodies do not persist multiple years), generally late summer through fall, sometimes after the first significant fall rains. Old, overwintered remnants turn chalky white and crumbly.",
  elevationM: { min: 0, max: 2200 },
  regionsPNW: ["Western Washington", "Western Oregon", "Eastern Washington (Cascades)", "Eastern Oregon (Cascades/Blues)", "Coastal British Columbia", "Vancouver Island", "Cascade Range", "Olympic Peninsula", "Coast Range", "Southeast Alaska", "Northern California (Klamath/Siskiyou and Sierra Nevada)", "Northern Idaho"],
  fruitingMonths: [7, 8, 9, 10, 11],
  peakMonths: [9, 10],
  conditions: {
    minRain7d: 15,
    idealDaysSinceRain: [3, 14],
    tempRangeC: [8, 22],
    humidityMinPct: 70
  },
  identification: {
    cap: "Overlapping shelving fruitbodies (brackets) in dense clusters; individual caps fan-shaped to dimidiate (semicircular), smooth to finely wrinkled, sometimes weakly zoned, bright orange to salmon-orange or orange-yellow when fresh, fading to pale orange, buff, then chalky white with age. Margins often more yellow and softer than the rest. No upper-surface scales.",
    underside: "Fertile pore surface bright sulfur-yellow to lemon-yellow, becoming paler with age and white when old/weathered. Pores small and circular, 2-4 per mm, not bruising noticeably. (This sulfur-yellow underside is the key field character distinguishing Laetiporus from other orange brackets.)",
    stem: "No true stem; brackets attach broadly and laterally to the wood, often with a slightly narrowed lateral base or fused as a thick rosette of overlapping shelves.",
    fleshColor: "Flesh pale yellow to whitish, soft and watery when young, becoming firm, then dry, chalky, and crumbly with age. Does not change color appreciably when cut.",
    sporePrintColor: "White.",
    odor: "Pleasant, faintly fungal/lemony when fresh; sour and unpleasant in old or decaying specimens. Taste mild to slightly sour.",
    sizeCm: "Individual caps 7-30 cm wide and up to 4 cm thick; entire clusters commonly 30-60 cm across and can exceed 60 cm (24 in)."
  },
  edibility: "edible-with-caution",
  toxicityNotes: "Laetiporus conifericola causes gastrointestinal upset (nausea, vomiting, diarrhea, lip/tongue swelling, dizziness) noticeably more often than its hardwood-growing relatives (L. sulphureus, L. cincinnatus, L. gilbertsonii). The cause is poorly understood but appears related to (a) terpenoid/resinous compounds absorbed from conifer hosts, (b) eating old or insufficiently cooked specimens, and (c) individual sensitivity. Some PNW field guides and clubs (e.g., PSMS, OMS) recommend treating this species as suspect or eating only with great caution. Best practices: eat ONLY the young, soft, growing margins of fresh fruitbodies; cook thoroughly (15+ minutes); start with a very small portion the first time; never eat raw; avoid old, dry, or whitening specimens. Avoid pairing with alcohol on first trials. A small fraction of people will react regardless of preparation.",
  lookalikes: [
    { name: "Sulphur shelf / chicken of the woods", scientific: "Laetiporus sulphureus", danger: "edible", distinguishingFeature: "Eastern/central North American hardwood species; very similar in color and shelving habit but grows on oak and other hardwoods, not conifers. Not reliably present in the PNW; western records on conifers are almost always L. conifericola." },
    { name: "White-pored chicken of the woods", scientific: "Laetiporus cincinnatus", danger: "edible", distinguishingFeature: "Forms terrestrial rosettes at the base of hardwoods (oak) with a WHITE pore surface; eastern species, hardwood substrate." },
    { name: "Hardwood western chicken of the woods", scientific: "Laetiporus gilbertsonii", danger: "edible-with-caution", distinguishingFeature: "Nearly identical-looking but grows on hardwoods (eucalyptus, oak, cottonwood) rather than conifers; substrate is the critical separator. Some reports of GI upset as well." },
    { name: "Velvet-top fungus / dyer's polypore", scientific: "Phaeolus schweinitzii", danger: "inedible", distinguishingFeature: "Also a conifer-base parasite (Douglas-fir, pine), but caps are velvety/hairy yellow-brown to rust-brown (not bright orange/yellow), with a dingy yellow then brown pore surface that bruises brown; tough and woody, not fleshy." },
    { name: "Cinnabar polypore", scientific: "Pycnoporus / Trametes cinnabarinus", danger: "inedible", distinguishingFeature: "Small (less than 10 cm) bright cinnabar/orange-red bracket with an orange-red (not sulfur-yellow) pore surface; tough and leathery, on hardwoods." },
    { name: "Berkeley's polypore", scientific: "Bondarzewia berkeleyi", danger: "edible", distinguishingFeature: "Massive cream to tan terrestrial rosettes at base of oaks; not orange/yellow; eastern hardwood species." },
    { name: "Jack-o'-lantern (western)", scientific: "Omphalotus olivascens", danger: "toxic", distinguishingFeature: "Has true gills (not pores), grows in clusters at the base of hardwoods/oaks, orange to olive-tinged; only superficially similar in color but completely different morphology - always check for pores vs gills." }
  ],
  culinary: {
    flavor: "Mild, lemony, faintly meaty 'chicken-like' flavor with a firm, fibrous texture when young; can be acceptable but is widely regarded as inferior in flavor and reliability to the hardwood Laetiporus species. Older specimens become sour, chalky, and unpalatable.",
    preparation: "Use only the young, soft, brightly colored growing margins; cut away anything that is firm, fibrous, dry, or whitening. Slice thin and cook thoroughly - sauteed in butter with garlic for at least 15 minutes, or simmered in soups/stews/curries. Often dredged and fried as a 'chicken' substitute. ALWAYS test-eat a very small portion the first time and wait 24 hours before consuming more, as GI reactions are common with this species. Do not eat raw or undercooked. Avoid drinking alcohol with your first meals of it.",
    preservation: "Sauteed pieces freeze well for several months; freezing also helps tenderize. Dehydration is possible but the dried product can be tough and chalky; powder form is most useful. Pickling and pressure canning are both used. Not recommended for preservation if you have ever had a GI reaction to fresh specimens."
  },
  conservationNotes: "Not listed as threatened; widespread and locally common throughout western North America wherever mature conifer hosts are present. As a heart-rot agent it is ecologically important - hollowed-out trees and snags it creates provide critical cavity-nesting habitat for woodpeckers, owls, martens, and many other forest vertebrates. Harvesters should cut cleanly at the base of brackets with a knife and leave the substrate undisturbed; the same tree may re-fruit for many years until the host falls.",
  sources: [
    { name: "MykoWeb - California Fungi: Laetiporus conifericola", url: "https://www.mykoweb.com/CAF/species/Laetiporus_conifericola.html" },
    { name: "Burdsall, H.H. Jr. & Banik, M.T. (2001). The Genus Laetiporus in North America. Harvard Papers in Botany 6(1): 43-55.", url: "https://www.biodiversitylibrary.org/part/250851" },
    { name: "Wikipedia - Laetiporus conifericola", url: "https://en.wikipedia.org/wiki/Laetiporus_conifericola" },
    { name: "Burke Herbarium Image Collection - Laetiporus conifericola", url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Laetiporus+conifericola" },
    { name: "GBIF - Laetiporus conifericola Burds. & Banik", url: "https://www.gbif.org/species/3362030" },
    { name: "Ginns, J. (2017). Polypores of British Columbia (Fungi: Basidiomycota). B.C. Min. For., Lands, Nat. Resour. Oper. & Rural Dev., Victoria, B.C. Tech. Rep. 104.", url: "https://www2.gov.bc.ca/assets/gov/environment/natural-resource-stewardship/nr-laws-policy/risk-management/tr_104_polypores_of_british_columbia.pdf" }
  ]
}
,
{
  id: "laetiporus-gilbertsonii",
  commonNames: [
    "Pacific Sulfur Shelf",
    "Western Sulphur Shelf",
    "Western Chicken-of-the-Woods",
    "West Coast Chicken of the Woods",
    "Sulphur Shelf",
  ],
  scientific: "Laetiporus gilbertsonii",
  family: "Laetiporaceae",
  order: "Polyporales",
  trophicMode: "parasitic",
  mycorrhizalPartners: null,
  hostTrees: [
    { common: "Coast live oak", scientific: "Quercus agrifolia" },
    { common: "Tanoak", scientific: "Notholithocarpus densiflorus" },
    { common: "Eucalyptus (blue gum)", scientific: "Eucalyptus globulus" },
    { common: "California black oak", scientific: "Quercus kelloggii" },
    { common: "Oregon white oak (Garry oak)", scientific: "Quercus garryana" },
  ],
  substrate:
    "Living trunks, wounds, stumps, and downed logs of hardwoods; causes a brown cubical rot of heartwood. Fruitings often recur year after year from the same stump or log.",
  habitat:
    "Coastal hardwood forests, oak woodlands, urban parks and eucalyptus groves; on living trees, stumps, and large fallen logs in lowland to low-montane settings west of the Cascade crest, especially in coastal and valley oak/tanoak habitats.",
  elevationM: { min: 0, max: 1200 },
  regionsPNW: [
    "Oregon Coast Range",
    "Willamette Valley",
    "Umpqua Valley",
    "Rogue Valley / Southwest Oregon",
    "Puget Sound lowlands (Garry oak habitats)",
    "Southwest Washington",
  ],
  fruitingMonths: [7, 8, 9, 10, 11],
  peakMonths: [9, 10],
  conditions: {
    minRain7d: 10,
    idealDaysSinceRain: [3, 14],
    tempRangeC: [10, 24],
    humidityMinPct: 60,
  },
  identification: {
    cap:
      "Overlapping, rounded fleshy shelves 7–55 cm broad, sessile to substipitate; upper surface smooth to roughened, pale salmon-orange to yellow-orange with reddish-orange to orange banding near the margin; margin paler yellow and irregular. In age fades to dingy greyish-white, becoming dry and crumbly.",
    underside:
      "Finely poroid, bright sulphur-yellow to lemon-yellow (paler than L. conifericola), 2–3 pores per mm; pore surface fades whitish with age.",
    stem: "Absent or rudimentary; fruiting bodies are sessile shelves attached laterally to the substrate.",
    fleshColor:
      "White to pale yellow when fresh, soft and watery (often exuding moisture in young specimens); becomes chalky white and crumbly with age.",
    sporePrintColor: "White",
    odor: "Mild, pleasant, slightly fungal; not distinctive.",
    sizeCm: "Individual caps 7–55 cm broad, 2–3 cm thick; clusters can be massive, weighing many kilograms.",
  },
  edibility: "edible-with-caution",
  toxicityNotes:
    "Choice when young, fresh, and thoroughly cooked, but documented to cause idiosyncratic gastrointestinal upset (nausea, vomiting within 5–45 minutes) in a small subset of consumers, particularly with old, raw, or undercooked specimens. Reactions have historically been reported more often from collections on eucalyptus, though this is not strictly substrate-bound. Eat only young, fresh, actively growing margins; cook fully; try a small amount the first time.",
  lookalikes: [
    {
      name: "Conifer Sulphur Shelf",
      scientific: "Laetiporus conifericola",
      danger: "edible",
      distinguishingFeature:
        "Brighter pure orange caps with lemon-yellow pores; grows exclusively on conifers (fir, hemlock, pine); larger basidiospores (6.5–8.0 × 4.0–5.0 µm) vs. L. gilbertsonii (5–7 × 4–5 µm); more frequently bitter/sour.",
    },
    {
      name: "White-pored Chicken of the Woods",
      scientific: "Laetiporus gilbertsonii var. pallidus",
      danger: "edible",
      distinguishingFeature:
        "Cream to pale salmon caps with a white pore surface rather than yellow; primarily reported from the Gulf Coast on oaks/eucalyptus, not the PNW.",
    },
    {
      name: "Berkeley's Polypore",
      scientific: "Bondarzewia berkeleyi / B. mesenterica",
      danger: "edible",
      distinguishingFeature:
        "Pale tan to buff (not orange/yellow); large rosette at base of hardwoods; flesh tough and less brightly colored; pore surface whitish.",
    },
    {
      name: "Jack-O-Lantern",
      scientific: "Omphalotus olivascens",
      danger: "toxic",
      distinguishingFeature:
        "Orange but gilled (not poroid) with a central stipe; grows in clumps at base of hardwoods; gills may glow faintly green in dark. Causes severe GI illness.",
    },
    {
      name: "Velvet-Top Fungus / Dyer's Polypore",
      scientific: "Phaeolus schweinitzii",
      danger: "inedible",
      distinguishingFeature:
        "Velvety brown to rusty-yellow zoned cap on conifer roots, not on hardwoods; pore surface greenish-yellow bruising brown; tough and corky.",
    },
  ],
  culinary: {
    flavor:
      "Mild, faintly lemony, with a meaty chicken-like texture when young; older specimens become woody, chalky, and sour. Best when actively growing, soft, and dripping moisture at the margin.",
    preparation:
      "Trim away tough basal portions and use only tender outer growing edges. Slice and sauté in butter or oil over medium-high heat for 8–15 minutes until fully cooked; also excellent breaded and fried, in curries, soups, or as a chicken substitute in tacos and sandwiches. Always cook thoroughly — never eat raw. Try a small portion the first time to test individual tolerance.",
    preservation:
      "Best fresh. Can be sautéed and frozen, or dehydrated (rehydrates somewhat chewy); pickling and pressure-canning are also used. Does not store well raw in the refrigerator beyond a few days.",
  },
  conservationNotes:
    "Common and not of conservation concern; widespread on hardwood hosts in coastal western North America. As a parasite causing brown cubical rot, repeated fruitings indicate substantial heartwood decay and can be a hazard-tree indicator on urban oaks and eucalyptus. Harvest sustainably by leaving older specimens to sporulate.",
  sources: [
    {
      name: "MykoWeb — California Fungi: Laetiporus gilbertsonii (Fred Stevens & Michael Wood)",
      url: "https://www.mykoweb.com/CAF/species/Laetiporus_gilbertsonii.html",
    },
    {
      name: "MykoWeb — Toxic Fungi of Western North America: Laetiporus GI reactions",
      url: "https://www.mykoweb.com/TFWNA/P-52.html",
    },
    {
      name: "Burdsall & Banik (2001) — The genus Laetiporus in North America, Harvard Papers in Botany 6(1): 43–55 (protologue PDF)",
      url: "https://www.mykoweb.com/CAF/protologue/Laetiporus_gilbertsonii.pdf",
    },
    {
      name: "Bay Area Mycological Society — Western Sulphur Shelf (Laetiporus gilbertsonii & L. conifericola)",
      url: "https://bayareamushrooms.org/mushroommonth/sulphur_shelf.html",
    },
    {
      name: "GBIF — Laetiporus gilbertsonii Burds. taxonomy and distribution",
      url: "https://www.gbif.org/species/6016762",
    },
  ],
}
,
{
  id: "leccinum-manzanitae",
  commonNames: ["Manzanita Bolete"],
  scientific: "Leccinum manzanitae",
  family: "Boletaceae",
  order: "Boletales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: [
    "Arctostaphylos (manzanita)",
    "Arbutus menziesii (Pacific madrone)",
  ],
  hostTrees: [
    { common: "Manzanita (various spp.)", scientific: "Arctostaphylos spp." },
    { common: "Common Manzanita", scientific: "Arctostaphylos manzanita" },
    { common: "Hairy Manzanita", scientific: "Arctostaphylos columbiana" },
    { common: "Pacific Madrone", scientific: "Arbutus menziesii" },
  ],
  substrate: "Soil under manzanita and madrone; duff and humus in chaparral and mixed evergreen forest.",
  habitat: "Chaparral, manzanita thickets, and mixed evergreen / hardwood forests dominated by Arctostaphylos and Arbutus; coastal to foothill belts of the West Coast.",
  elevationM: { min: 0, max: 1500 },
  regionsPNW: [
    "Southern Oregon",
    "Western Oregon (less common northward)",
    "Washington (uncommon, scattered records)",
    "Southwestern British Columbia (rare)",
  ],
  fruitingMonths: [10, 11, 12, 1, 2],
  peakMonths: [11, 12, 1],
  conditions: {
    minRain7d: 25,
    idealDaysSinceRain: [4, 12],
    tempRangeC: [4, 15],
    humidityMinPct: 75,
  },
  identification: {
    cap: "5-18 cm (occasionally to 20+ cm) broad; rounded to convex, finally broadly convex; dark red to reddish-brown; surface pitted with appressed innate fibrils; viscid/sticky when moist; margin incurved when young with hanging fragments of sterile tissue.",
    underside: "Fine pores; pallid to pale olive-buff, darkening with age; staining dark brown when bruised.",
    stem: "9-17 cm long, 2-4 cm thick, club-shaped to ventricose, solid; whitish ground color ornamented with small black scabers (scales); base sometimes bruising blue/blue-green.",
    fleshColor: "Thick, white, darkening (pinkish to grayish then blackish) when cut, especially in young specimens.",
    sporePrintColor: "Brown (olive-brown)",
    odor: "Mild, not distinctive",
    sizeCm: "Cap 5-18 cm; stem 9-17 cm long x 2-4 cm thick; fruit bodies occasionally massive, several pounds.",
  },
  edibility: "edible-with-caution",
  toxicityNotes: "Edible when thoroughly cooked, but quality is debated (some rate it highly, others bland; drying often improves flavor). As with other Leccinum spp., undercooked specimens have been linked to gastrointestinal distress, and field guides advise caution because Leccinum poisonings have been reported in the Rocky Mountains and Pacific Northwest from similar-looking species. Always cook thoroughly and start with a small portion to test individual tolerance.",
  lookalikes: [
    {
      name: "Ponderous Bolete",
      scientific: "Leccinum ponderosum",
      danger: "edible",
      distinguishingFeature: "Also has a dark red sticky cap, but flesh does not darken upon exposure and cap is smooth when young (not pitted-fibrillose).",
    },
    {
      name: "Apricot Leccinum",
      scientific: "Leccinum armeniacum",
      danger: "edible",
      distinguishingFeature: "Also grows with manzanita/madrone but cap is more orange (apricot) rather than dark red-brown.",
    },
    {
      name: "Bronze Leccinum",
      scientific: "Leccinum aeneum",
      danger: "edible",
      distinguishingFeature: "California-only associate of manzanita/madrone; smaller, with a darker bronze-brown cap and different microscopic features.",
    },
    {
      name: "Aspen Bolete / Red-capped Scaber Stalk",
      scientific: "Leccinum insigne",
      danger: "GI-upset",
      distinguishingFeature: "Reddish-orange cap with scabers, but associates with aspen/birch (not manzanita/madrone); implicated in GI poisoning cases in the Rockies and PNW when undercooked.",
    },
    {
      name: "Orange Birch Bolete",
      scientific: "Leccinum versipelle",
      danger: "GI-upset",
      distinguishingFeature: "Orange cap with dark scabers, but obligate associate of birch (Betula); flesh blackens; can cause GI upset if undercooked.",
    },
  ],
  culinary: {
    flavor: "Mild, somewhat bland to nutty/earthy; opinions vary — some foragers rate the flavor highly while others find it unremarkable. Flesh blackens noticeably on cooking.",
    preparation: "Cook thoroughly (sauté or simmer at least 15-20 minutes) — never eat raw or undercooked. Best collected young and firm; older specimens are often waterlogged or buggy. Remove pore layer if soft.",
    preservation: "Dries well; many consider it best dried, with drying said to improve and concentrate the flavor. Can also be frozen after cooking.",
  },
  conservationNotes: "Not listed as threatened. Locally common in California chaparral; comparatively uncommon to rare in the northern PNW (Washington, BC). Habitat tied to manzanita/madrone stands, which can be impacted by fire regime changes and development.",
  sources: [
    {
      name: "MykoWeb — California Fungi: Leccinum manzanitae (Wood & Stevens)",
      url: "https://www.mykoweb.com/CAF/species/Leccinum_manzanitae.html",
    },
    {
      name: "Wikipedia — Leccinum manzanitae",
      url: "https://en.wikipedia.org/wiki/Leccinum_manzanitae",
    },
    {
      name: "Burke Herbarium Image Collection — Leccinum manzanitae",
      url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Leccinum+manzanitae",
    },
    {
      name: "MushroomExpert.Com — The Genus Leccinum (Kuo)",
      url: "https://www.mushroomexpert.com/leccinum.html",
    },
    {
      name: "iNaturalist — Leccinum manzanitae",
      url: "https://www.inaturalist.org/taxa/54204-Leccinum-manzanitae",
    },
  ],
}
,
{
  id: "leucangium-carthusianum",
  commonNames: ["Oregon Black Truffle", "Pacific Northwest Black Truffle"],
  scientific: "Leucangium carthusianum",
  family: "Morchellaceae",
  order: "Pezizales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Pseudotsuga menziesii"],
  hostTrees: [
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
  ],
  substrate: "Hypogeous (underground); fruits 0-15 cm (0-6 in) deep in dark, fluffy, well-drained forest duff and humus-rich soil beneath Douglas-fir.",
  habitat: "Young to mid-aged Douglas-fir forests and plantations (typically 15-40 years old, though sometimes found in younger Christmas-tree stands), west of the Cascade crest in the Pacific Northwest. Prefers fluffy, organic-rich soils rather than dense red clays favored by Oregon white truffles.",
  elevationM: { min: 0, max: 900 },
  regionsPNW: ["Oregon (Willamette Valley and Coast Range)", "Western Washington", "Southwestern British Columbia", "Northern California"],
  fruitingMonths: [1, 2, 3, 4, 9, 10, 11, 12],
  peakMonths: [1, 2, 3],
  conditions: {
    minRain7d: 25,
    idealDaysSinceRain: [2, 10],
    tempRangeC: [2, 12],
    humidityMinPct: 80,
  },
  identification: {
    cap: "No cap; hypogeous ascocarp. Peridium (skin) is charcoal-black to brownish-black, warty to nearly smooth, often with pyramidal or polygonal warts; subglobose to irregularly lobed potato-like form.",
    underside: "No hymenium exposed; entire fruiting body is enclosed. Cut surface reveals solid gleba.",
    stem: "None (sessile, underground fruiting body).",
    fleshColor: "Gleba is firm and solid, light gray to dark gray or olive-brown at maturity, conspicuously marbled with white sterile veins.",
    sporePrintColor: "Spore print not applicable; spores are produced internally in asci, fusiform, hyaline to pale yellow.",
    odor: "Intensely aromatic when mature: ripe pineapple and tropical fruit with cocoa, raisin, and creamy-cheese notes; becomes pungent and earthy with age.",
    sizeCm: "2-7 cm across, occasionally to 10 cm; weight typically 10-100 g.",
  },
  edibility: "choice",
  toxicityNotes: "Generally considered choice and safe, but a minority of individuals report gastrointestinal upset; sample a small amount first. Immature (under-ripe) specimens lack aroma and flavor and may be more likely to cause GI complaints.",
  lookalikes: [
    {
      name: "Oregon Winter White Truffle",
      scientific: "Tuber oregonense",
      danger: "edible",
      distinguishingFeature: "Pale tan to brownish exterior (not black), tan/marbled gleba without bold white veining, garlicky-cheesy aroma; occupies similar Douglas-fir habitat but usually denser clay soils and shallower depth.",
    },
    {
      name: "Oregon Spring White Truffle",
      scientific: "Tuber gibbosum",
      danger: "edible",
      distinguishingFeature: "Whitish to ochre exterior, marbled tan gleba, spring fruiting (January-June); never with black peridium or pineapple aroma.",
    },
    {
      name: "Oregon Brown Truffle",
      scientific: "Kalapuya brunnea",
      danger: "edible",
      distinguishingFeature: "Reddish-brown to chocolate-brown peridium (not black), garlic/cheese aroma, gleba lacks the prominent white marbling of L. carthusianum.",
    },
    {
      name: "Perigord Black Truffle",
      scientific: "Tuber melanosporum",
      danger: "edible",
      distinguishingFeature: "European species, cultivated in some PNW orchards on inoculated oak/hazel; pyramidal-warted black peridium but gleba is purplish-black with fine white veins and the aroma is musky/earthy rather than pineapple-cocoa.",
    },
    {
      name: "False truffles (Rhizopogon spp.)",
      scientific: "Rhizopogon spp.",
      danger: "inedible",
      distinguishingFeature: "Pale, tan, or yellowish peridium with chambered/spongy gleba (not solid with white veins); no fruity aroma; not culinary.",
    },
  ],
  culinary: {
    flavor: "Distinctive and prized: ripe pineapple, tropical fruit, dark cocoa, and creamy cheese, with an earthy finish. Considered the most aromatic and most prized native PNW truffle.",
    preparation: "Use only fully ripe specimens (assessed by aroma). Shave raw over warm dishes such as scrambled eggs, risotto, pasta, polenta, butter, or soft cheeses so volatile aromatics are not destroyed. Infuse into cream, butter, honey, or neutral oil. Never deeply cook; brief warming releases aroma without driving it off.",
    preservation: "Best used fresh within 1-2 weeks, stored in a sealed jar with eggs or arborio rice (which absorb the aroma) under refrigeration. Can be frozen whole for later shaving (texture softens). Often preserved in butter, cream, or honey; flavor degrades quickly in dried form, so drying is not recommended.",
  },
  conservationNotes: "Not formally listed as threatened, but populations and habitat are tied to mature and second-growth Douglas-fir forests west of the Cascades. Best practice is to harvest only ripe truffles using trained dogs rather than raking, which damages mycelium, host roots, and unripe truffles and reduces future production.",
  sources: [
    { name: "Wikipedia: Leucangium carthusianum", url: "https://en.wikipedia.org/wiki/Leucangium_carthusianum" },
    { name: "Oregon Truffle Festival - FAQs About Oregon Truffles", url: "https://oregontrufflefestival.org/faqs" },
    { name: "Kitsap Peninsula Mycological Society - Oregon Black Truffle", url: "https://kitsapmushrooms.org/edible-mushrooms/oregon-black-truffle/" },
    { name: "Mushroaming - Truffles in the Pacific Northwest (Winkler, Fungi 2013)", url: "http://www.mushroaming.com/sites/default/files/Winkler_PNW_Truffles_Fungi_2013%20S.pdf" },
  ],
}
,
{
  id: "lycoperdon-perlatum",
  commonNames: ["Gem-studded Puffball", "Common Puffball", "Devil's Snuffbox", "Warted Puffball"],
  scientific: "Lycoperdon perlatum",
  family: "Agaricaceae",
  order: "Agaricales",
  trophicMode: "saprotrophic",
  mycorrhizalPartners: null,
  hostTrees: [
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Western Hemlock", scientific: "Tsuga heterophylla" },
    { common: "Sitka Spruce", scientific: "Picea sitchensis" },
    { common: "Western Red Cedar", scientific: "Thuja plicata" },
    { common: "Red Alder", scientific: "Alnus rubra" },
    { common: "Bigleaf Maple", scientific: "Acer macrophyllum" }
  ],
  substrate: "Forest duff, humus, well-decomposed leaf/needle litter; occasionally on well-decayed wood or mulch; common in disturbed soils along forest roadsides and trails.",
  habitat: "Coniferous and mixed woodlands; also urban settings, lawns, roadsides, and clearings. Grows solitary, scattered, gregariously, or in clusters on the ground.",
  elevationM: { min: 0, max: 2000 },
  regionsPNW: ["Oregon Coast Range", "Washington Coast Range", "Olympic Peninsula", "Puget Sound Lowlands", "Willamette Valley", "Western Cascades", "Eastern Cascades", "British Columbia Coast", "Vancouver Island", "Columbia River Gorge"],
  fruitingMonths: [7, 8, 9, 10, 11],
  peakMonths: [9, 10],
  conditions: {
    minRain7d: 15,
    idealDaysSinceRain: [3, 10],
    tempRangeC: [5, 20],
    humidityMinPct: 70
  },
  identification: {
    cap: "Round to pear- or turban-shaped fruit body, 2-6 cm wide, with an elongated stalk-like sterile base. Surface white when young, covered with conical white spines/warts (the 'gems') of varying sizes — larger cone-shaped spines surrounded by shorter spines and granules. Spines fall off with age leaving a pattern of pock-mark scars or net-like reticulation on a yellow-brown to tan surface. A single apical pore (ostiole) opens at maturity for spore release.",
    underside: "No gills, pores, or teeth — this is a puffball. Interior gleba (spore mass) is solid, moist, and pure white when young/edible; becomes yellow, then olive-brown and powdery at maturity. A sterile stalk-like base supports the upper fertile portion.",
    stem: "Sterile stalk-like base 2.5-8 cm tall total (including head); base often somewhat pinched and chambered internally, turning brownish with age. Not a true stem — continuous with the fruiting body.",
    fleshColor: "Pure white when young and edible; yellows then turns olive to olive-brown and powdery as spores mature.",
    sporePrintColor: "Olive-brown (gleba color at maturity; spores not deposited as a print but puffed through the ostiole)",
    odor: "Mild, indistinct, sometimes faintly mushroomy; not strong.",
    sizeCm: "2-6 cm wide, 2.5-8 cm tall"
  },
  edibility: "edible-with-caution",
  toxicityNotes: "Edible ONLY when the interior flesh (gleba) is pure, uniform white throughout. Once the gleba shows any yellow, olive, or brown discoloration, the puffball is past edibility and may cause GI upset. ALWAYS slice every specimen in half top-to-bottom before eating to (1) confirm interior is solid uniform white with no internal mushroom structure (rules out deadly Amanita button stage), (2) confirm thin eggshell-like outer rind (rules out toxic Scleroderma earthballs), and (3) rule out other puffball species.",
  lookalikes: [
    { name: "Amanita button (Death Cap, Destroying Angel, etc.)", scientific: "Amanita phalloides / Amanita ocreata / Amanita spp.", danger: "deadly", distinguishingFeature: "CRITICAL: Young Amanitas in their universal veil 'egg' stage can look like small puffballs from the outside. ALWAYS slice the specimen vertically in half — an Amanita button will reveal a developing mushroom inside (outline of cap, gills, and stem visible as tissue differentiation). A true puffball is solid uniform white interior with no internal structure." },
    { name: "Common Earthball", scientific: "Scleroderma citrinum", danger: "toxic", distinguishingFeature: "Outer rind is thick and tough (not eggshell-thin); interior turns purplish-black to dark grey/black very early, with marbled appearance; no apical pore (splits open irregularly). Grows on similar substrates and frequently mistaken for puffballs — causes GI illness." },
    { name: "Pear-shaped Puffball", scientific: "Apioperdon pyriforme (syn. Lycoperdon pyriforme)", danger: "edible", distinguishingFeature: "Grows in clusters on rotting wood (not soil); pear-shaped with smoother surface bearing only fine granules, lacking the prominent conical spines/gems of L. perlatum; visible white mycelial cords at base." },
    { name: "Umber-brown Puffball", scientific: "Lycoperdon umbrinum", danger: "edible", distinguishingFeature: "Has softer, skinnier, darker brown spines that don't leave the clear pock-mark scars when shed; overall darker coloration." },
    { name: "Beautiful Puffball", scientific: "Lycoperdon pulcherrimum", danger: "edible", distinguishingFeature: "Long, slender, often curved spines that converge at tips; less robust conical 'gem' pattern than L. perlatum." },
    { name: "Pigskin Poison Puffball", scientific: "Scleroderma areolatum", danger: "toxic", distinguishingFeature: "Thick leathery rind, dark purple-black interior at maturity, small scaly markings rather than conical spines; causes GI upset." }
  ],
  culinary: {
    flavor: "Mild, bland, somewhat nutty; not a prized edible but pleasant. Texture is firm marshmallow-like when young; readily absorbs flavors of accompanying ingredients.",
    preparation: "Use only specimens with pure-white interior. Peel off the outer skin (with warts), slice thickly. Pan-fry in butter with garlic, use in stir-fries, breaded and sautéed cutlet-style, added to soups, or as a meat substitute due to spongy texture. Best fresh — does not keep long.",
    preservation: "Poor keeping quality fresh — best consumed within 1-2 days of harvest. Can be sliced and dried for use as a thickener in soups and stews; rehydrate before use. Freezing not generally recommended due to texture loss."
  },
  conservationNotes: "Abundant and widespread throughout temperate North America including the Pacific Northwest. No conservation concern. Common in both natural forests and human-disturbed habitats; often one of the first fungi to appear along trails and roadsides.",
  sources: [
    { name: "MushroomExpert.com — Lycoperdon perlatum (Michael Kuo)", url: "https://www.mushroomexpert.com/lycoperdon_perlatum.html" },
    { name: "MykoWeb — California Fungi: Lycoperdon perlatum", url: "https://www.mykoweb.com/CAF/species/Lycoperdon_perlatum.html" },
    { name: "Burke Herbarium Image Collection — Lycoperdon perlatum (UW)", url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Lycoperdon+perlatum" },
    { name: "Mushrooms Up! UBC Beaty Museum — Puffballs (Lycoperdon spp.) of Coastal BC/PNW with Amanita lookalike warning", url: "https://explore.beatymuseum.ubc.ca/mushroomsup/L_pyriforme.html" },
    { name: "MushroomExpert.com — Fungi on Wood: Lycoperdon perlatum", url: "https://mushroomexpert.com/fungionwood/puffball%20and%20cushion/species%20pages/Lycoperdon%20perlatum.htm" }
  ]
}
,
{
  id: "lyophyllum-decastes",
  commonNames: [
    "Fried Chicken Mushroom",
    "Clustered Domecap",
    "Chicken of the Gravel",
    "Chicken of the Road"
  ],
  scientific: "Lyophyllum decastes",
  family: "Lyophyllaceae",
  order: "Agaricales",
  trophicMode: "saprotrophic",
  mycorrhizalPartners: null,
  hostTrees: [],
  substrate: "Disturbed soil, often rich in decomposed wood and leaf litter; grows from buried wood debris and humus in compacted or disturbed ground",
  habitat: "Clustered on the ground in disturbed areas — lawns, gravel drives, roadsides, trail edges, dirt parking lots, landscaped beds, and edges of paths. Forms large bouquet-like clusters with stems fused at the base.",
  elevationM: { min: 0, max: 1500 },
  regionsPNW: [
    "Western Washington",
    "Western Oregon",
    "Puget Sound lowlands",
    "Willamette Valley",
    "Coastal British Columbia",
    "Olympic Peninsula",
    "Cascade foothills",
    "Urban/suburban PNW"
  ],
  fruitingMonths: [8, 9, 10, 11, 12],
  peakMonths: [9, 10, 11],
  conditions: {
    minRain7d: 20,
    idealDaysSinceRain: [3, 10],
    tempRangeC: [7, 18],
    humidityMinPct: 70
  },
  identification: {
    cap: "4-14 cm broad, convex becoming plane; margin incurved when young, often lobed or irregular from clustered growth, sometimes upturned in age; surface smooth, moist to lubricous, grey to grey-brown (occasionally tan)",
    underside: "Gills adnate to subdecurrent, close to crowded, white to cream, not staining when bruised; may age slightly clay-colored",
    stem: "5-10 cm long, 1-3 cm thick, white to pallid (sometimes brown-discolored below), smooth, fibrous, tough, ringless; equal to tapered at base; stems fused together at the base in dense bouquet-like clusters",
    fleshColor: "White, firm, not staining",
    sporePrintColor: "White",
    odor: "Mild, slightly sweet or farinaceous; not distinctive",
    sizeCm: "Cap 4-14 cm; stem 5-10 cm x 1-3 cm; clusters can exceed 30 cm across"
  },
  edibility: "edible-when-cooked",
  toxicityNotes: "Must be cooked thoroughly. Some individuals experience GI upset; a tolerance test (small portion first) is recommended on first consumption. Several cryptic forms exist within the L. decastes species complex; edibility of all local PNW forms is not fully characterized. Never consume raw.",
  lookalikes: [
    {
      name: "Livid Pinkgill / Lead Poisoner",
      scientific: "Entoloma sinuatum",
      danger: "toxic",
      distinguishingFeature: "CRITICAL: Pink to salmon spore print (vs. white in L. decastes) and gills that turn pink with maturity. Causes severe gastrointestinal poisoning. Always take a spore print before eating any white-gilled clustered mushroom — pink spores = do not eat."
    },
    {
      name: "Other Entoloma species",
      scientific: "Entoloma spp.",
      danger: "toxic",
      distinguishingFeature: "Pink/salmon spore print and pinkish mature gills; many Entoloma are toxic. White spore print of L. decastes is the single most important separator."
    },
    {
      name: "Cucumber Cap",
      scientific: "Macrocystidia cucumis",
      danger: "inedible",
      distinguishingFeature: "Strong cucumber/fishy odor, cream-colored gills free from the stem, smaller size, dark velvety brown cap"
    },
    {
      name: "Honey Mushroom",
      scientific: "Armillaria mellea group",
      danger: "edible",
      distinguishingFeature: "Grows clustered on/near wood with a partial veil/ring on stem, honey-yellow to tawny cap often with small scales, attaches to tree roots via black rhizomorphs"
    },
    {
      name: "Clustered Woodlover",
      scientific: "Hypholoma fasciculare",
      danger: "toxic",
      distinguishingFeature: "Sulfur-yellow gills aging greenish then purple-brown, purple-brown spore print, bitter taste, grows on wood — not in disturbed ground"
    },
    {
      name: "Deadly Galerina",
      scientific: "Galerina marginata",
      danger: "deadly",
      distinguishingFeature: "Rust-brown spore print, ring on stem, grows on wood (not lawns/gravel), smaller and more slender — but always confirm spore print color before consuming any clustered mushroom"
    }
  ],
  culinary: {
    flavor: "Mild, savory, firm-textured; texture compared to fried chicken when cooked (hence the name). Good absorber of other flavors.",
    preparation: "Cook thoroughly — sauté, fry, or use in stews. Stems are tough and fibrous; reserve them for stocks or discard. Pair well with butter, garlic, and herbs. Excellent in stir-fries and tempura. Always cook fully — never eat raw.",
    preservation: "Dehydrates reasonably well; can be sautéed and frozen. Also pickles well. Cultivated commercially in Asia (sold as 'hon-shimeji'-style or 'buna-shimeji'-related products in some markets)."
  },
  conservationNotes: "Globally Apparently Secure (NatureServe G4/G5). Common and widespread in disturbed anthropogenic habitats; not of conservation concern in the PNW.",
  sources: [
    {
      name: "MykoWeb — California Fungi: Lyophyllum decastes",
      url: "https://www.mykoweb.com/CAF/species/Lyophyllum_decastes.html"
    },
    {
      name: "MushroomExpert.com — Lyophyllum decastes (Michael Kuo)",
      url: "https://www.mushroomexpert.com/lyophyllum_decastes.html"
    },
    {
      name: "Trudell & Ammirati, Mushrooms of the Pacific Northwest (Timber Press, 2009), pp. 112-113",
      url: "https://books.google.com/books?id=WevHvt6Tr8kC"
    },
    {
      name: "Wikipedia — Lyophyllum decastes",
      url: "https://en.wikipedia.org/wiki/Lyophyllum_decastes"
    },
    {
      name: "Foraging Course Company — Fried Chicken Mushroom identification",
      url: "https://www.foragingcoursecompany.co.uk/post/foraging-guide-fried-chicken-mushroom"
    }
  ]
}
,
{
  id: "marasmius-oreades",
  commonNames: ["Fairy Ring Mushroom", "Fairy Ring Champignon", "Scotch Bonnet", "Mousseron"],
  scientific: "Marasmius oreades",
  family: "Marasmiaceae",
  order: "Agaricales",
  trophicMode: "saprotrophic",
  mycorrhizalPartners: null,
  hostTrees: [],
  substrate: "Grass thatch, lawn turf, pasture sod, and decaying grass roots; the mycelium grows outward through soil and grass litter, killing or stimulating turf and forming the characteristic darker green or browned arcs known as fairy rings. Not associated with wood.",
  habitat: "Lawns, parks, golf courses, pastures, meadows, cemeteries, road shoulders, and other grassy areas; fruits in arcs, partial rings, or full fairy rings, typically after warm rain or where lawns are irrigated. Often found in disturbed urban/suburban turf and well-grazed pastures.",
  elevationM: { min: 0, max: 2000 },
  regionsPNW: [
    "Puget Sound lowlands",
    "Willamette Valley",
    "Portland metro",
    "Seattle metro",
    "Lower Columbia River",
    "Olympic Peninsula (lowlands)",
    "Vancouver Island (lowlands)",
    "Lower Fraser Valley",
    "Okanagan",
    "Inland Northwest (Spokane/Palouse, irrigated lawns)",
    "Southern Oregon valleys"
  ],
  fruitingMonths: [4, 5, 6, 7, 8, 9, 10, 11],
  peakMonths: [6, 9, 10],
  conditions: {
    minRain7d: 10,
    idealDaysSinceRain: [1, 5],
    tempRangeC: [12, 26],
    humidityMinPct: 65
  },
  identification: {
    cap: "1.5-5 cm; convex to broadly bell-shaped, expanding to nearly flat but almost always retaining a distinct broad central umbo (bump); surface dry, smooth, hygrophanous, tan to cinnamon-brown or buff when moist, fading to pale buff or cream when dry; margin striate (faintly lined) when wet, often upturned with age. Flesh revives and rehydrates after drying.",
    underside: "Gills attached (adnexed) to nearly free from the stem, fairly well-spaced (subdistant) with shorter intermediate gills, cream to pale buff, never decurrent (an important contrast with toxic Clitocybe lookalikes).",
    stem: "2-7 cm long, 2-5 mm thick; equal, slender, tough, pliant, and wiry (will twist without snapping); cream to buff, often slightly darker and finely pruinose at the base; no ring, no volva.",
    fleshColor: "Whitish to cream; thin in the cap, very tough and fibrous in the stem.",
    sporePrintColor: "White to pale cream",
    odor: "Pleasant, mild, sweet and slightly almond- or cyanide-like to some collectors; never strongly mealy/farinaceous (a useful contrast with Clitocybe dealbata).",
    sizeCm: "Cap 1.5-5 cm; stem 2-7 cm long x 0.2-0.5 cm thick"
  },
  edibility: "choice",
  toxicityNotes: "Caps are a choice edible with a sweet, nutty flavor, but the tough wiry stems should be discarded. Critical caveats: (1) be absolutely certain of identification because the deadly-similar Clitocybe dealbata occurs in the same lawn habitats and fairy rings; (2) avoid collecting from lawns treated with herbicides, pesticides, or fertilizers, and from roadsides where automotive contaminants accumulate.",
  lookalikes: [
    {
      name: "Sweating Mushroom / Ivory Funnel",
      scientific: "Clitocybe dealbata",
      danger: "toxic",
      distinguishingFeature: "MOST DANGEROUS LOOKALIKE. Also grows in lawn fairy rings and is similar in size. Distinguished by: chalky white to dull grayish-white cap (never warm cinnamon-tan) with NO central umbo; gills crowded/close and clearly DECURRENT (running down the stem) versus Marasmius oreades' well-spaced adnexed-to-nearly-free gills; mealy/farinaceous odor (not sweet); brittle (not pliant) stem that snaps rather than twists. Contains muscarine, causing severe SLUDGE/cholinergic poisoning (sweating, salivation, lacrimation, bradycardia, GI distress) within 15-90 minutes."
    },
    {
      name: "Pinwheel Marasmius / Marasmielloid species",
      scientific: "Marasmiellus spp.",
      danger: "inedible",
      distinguishingFeature: "Smaller, more delicate, often whitish with a pleated cap; typically grow on woody debris, twigs, or grass stems rather than from lawn soil; gills usually more widely spaced and often forked or pleated; stem more fragile and lacks the wiry-pliant toughness of M. oreades."
    },
    {
      name: "Oak-loving Collybia",
      scientific: "Gymnopus dryophilus",
      danger: "edible-with-caution",
      distinguishingFeature: "Similar tan to reddish-tan cap and pale gills, but grows in forest leaf litter under oaks and conifers (not in open grass), has crowded (close) gills rather than well-spaced ones, and a smoother less wiry stem; some people experience GI upset."
    },
    {
      name: "Deadly Fibrecap",
      scientific: "Inocybe spp. (e.g., Inocybe geophylla)",
      danger: "deadly",
      distinguishingFeature: "Can appear in lawns and grassy areas with conical/umbonate caps; distinguished by silky-fibrillose or scaly cap surface (not smooth), crowded gills, brown spore print (NOT white), and strong spermatic/mealy odor. Contains lethal levels of muscarine."
    },
    {
      name: "Green-spored Parasol",
      scientific: "Chlorophyllum molybdites",
      danger: "toxic",
      distinguishingFeature: "Also forms lawn fairy rings but is MUCH larger (cap 10-30 cm), with a scaly white-and-tan cap, a prominent ring on the stem, and a diagnostic green spore print; gills turn greenish in age. The most common cause of mushroom poisoning in North America (severe GI distress)."
    },
    {
      name: "Meadow Mushroom",
      scientific: "Agaricus campestris",
      danger: "edible",
      distinguishingFeature: "Also fruits in lawn/pasture rings but is larger, has pink-then-chocolate-brown free gills, a chocolate-brown spore print, and a ring on the stem; cap is white and smooth rather than tan and umbonate."
    }
  ],
  culinary: {
    flavor: "Sweet, nutty, slightly almond-like with a pleasant chewy texture; concentrated savory flavor that intensifies on drying; widely considered one of the best wild edible mushrooms in Europe.",
    preparation: "Discard the tough wiry stems and use only the caps. Excellent sauteed in butter, simmered into soups and stews (where the slight chewiness becomes pleasant), folded into omelets, added to sauces for poultry and rabbit, or used in risottos. A staple of French cooking under the name 'mousseron'.",
    preservation: "Dries exceptionally well; thread caps on string or use a dehydrator. Dried caps store for years and rehydrate quickly in warm water or directly in simmering sauces. Can also be frozen after a brief saute. The mushroom famously revives in shape even from a fully dried state when moistened."
  },
  conservationNotes: "Not of conservation concern. Abundant and widespread on every inhabited continent; among the most common lawn mushrooms in the Pacific Northwest. Considered a turf 'pest' by lawn-care professionals because the fairy rings disrupt grass growth, though they are ecologically benign and recycle nutrients.",
  sources: [
    { name: "MushroomExpert.com - Marasmius oreades (Michael Kuo)", url: "https://www.mushroomexpert.com/marasmius_oreades.html" },
    { name: "Trudell, S. & Ammirati, J. (2009). Mushrooms of the Pacific Northwest. Timber Press Field Guides, pp. 113-114.", url: "https://books.google.com/books?id=WevHvt6Tr8kC" },
    { name: "Burke Herbarium Image Collection - Marasmius oreades (Univ. of Washington)", url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Marasmius%20oreades" },
    { name: "MykoWeb / California Fungi - Marasmius oreades", url: "https://www.mykoweb.com/CAF/species/Marasmius_oreades.html" },
    { name: "E-Flora BC Atlas - Marasmius oreades (UBC)", url: "https://linnet.geog.ubc.ca/Atlas/Atlas.aspx?sciname=Marasmius+oreades&noTransfer=0" },
    { name: "Tom Volk's Fungus of the Month, March 2003 - Marasmius oreades", url: "http://botit.botany.wisc.edu/toms_fungi/mar2003.html" }
  ]
}
,
{
  id: "morchella-americana",
  commonNames: [
    "Yellow Morel",
    "American Yellow Morel",
    "Blonde Morel",
    "White Morel",
    "Common Morel",
    "American Blond Morel"
  ],
  scientific: "Morchella americana",
  family: "Morchellaceae",
  order: "Pezizales",
  trophicMode: "mixed",
  mycorrhizalPartners: [
    "Populus trichocarpa",
    "Populus tremuloides",
    "Fraxinus latifolia",
    "Ulmus spp.",
    "Malus domestica"
  ],
  hostTrees: [
    { common: "Black Cottonwood", scientific: "Populus trichocarpa" },
    { common: "Quaking Aspen", scientific: "Populus tremuloides" },
    { common: "Oregon Ash", scientific: "Fraxinus latifolia" },
    { common: "American Elm", scientific: "Ulmus americana" },
    { common: "Apple", scientific: "Malus domestica" }
  ],
  substrate: "Sandy alluvial river-bottom soils, leaf litter, and grassy duff beneath hardwoods; also dying or recently dead roots of cottonwood and elm; occasionally orchards and disturbed ground.",
  habitat: "Riparian hardwood corridors along rivers, streams, and floodplains; sandbars and gravel bars under cottonwood/ash/aspen; old orchards and urban hardwood plantings. Most common true yellow morel in North America; forms a facultative association that is partly mycorrhizal and partly saprotrophic, often fruiting heavily when host trees become stressed or die.",
  elevationM: { min: 0, max: 1200 },
  regionsPNW: [
    "Columbia River corridor",
    "Willamette Valley",
    "Snake River drainage",
    "Yakima River valley",
    "Okanogan",
    "Puget Sound lowlands",
    "Rogue and Umpqua river valleys"
  ],
  fruitingMonths: [3, 4, 5, 6],
  peakMonths: [4, 5],
  conditions: {
    minRain7d: 15,
    idealDaysSinceRain: [2, 7],
    tempRangeC: [10, 21],
    humidityMinPct: 65
  },
  identification: {
    cap: "Conical to broadly egg-shaped, 2–7 cm tall, with a network of vertically elongated pits and ridges; pits pale yellow, tan, cream, or grayish when young, becoming distinctly yellow-tan to ochre at maturity; ridges paler, often whitish, and not darkening with age (key contrast vs. black morels).",
    underside: "Cap fully fused to the stem at the base; cap and stem together form a single continuous hollow chamber when sliced lengthwise.",
    stem: "Whitish to pale cream or pale yellow-tan, 3–9 cm long and 1.5–4 cm thick, hollow, finely granular-mealy, often enlarged or somewhat lobed at the base; sometimes longer than the cap in mature specimens.",
    fleshColor: "Thin, whitish to pale cream, brittle, hollow throughout.",
    sporePrintColor: "Cream to pale yellow",
    odor: "Mild, pleasantly mushroomy; not distinctive",
    sizeCm: "Overall 5–18 cm tall; cap 2–7 cm wide"
  },
  edibility: "edible-when-cooked",
  toxicityNotes: "Toxic raw — contains heat-labile hemolysins that cause gastrointestinal distress when eaten uncooked or undercooked. Must be thoroughly cooked. A subset of people experience GI intolerance even when cooked; try a small portion first. Avoid alcohol with first tastings. Morels harvested from old orchards or industrial sites can bioaccumulate lead and arsenic from historic pesticide residues. A 2023 Montana outbreak linked to morels (CDC MMWR 2024) underscored that raw or lightly cooked morels can cause significant illness.",
  lookalikes: [
    {
      name: "Brain False Morel",
      scientific: "Gyromitra esculenta",
      danger: "deadly",
      distinguishingFeature: "Cap is reddish-brown, lobed, brain-like and convoluted rather than pitted; stem stuffed/chambered, not a single hollow cavity. Contains gyromitrin (metabolizes to monomethylhydrazine); can be fatal."
    },
    {
      name: "Snowbank False Morel",
      scientific: "Gyromitra montana",
      danger: "toxic",
      distinguishingFeature: "Lobed saddle-shaped cap, not pitted; stout chambered (not fully hollow) stem; fruits near snowmelt in PNW conifer forests. Contains gyromitrin."
    },
    {
      name: "Bull-nose False Morel",
      scientific: "Gyromitra korfii",
      danger: "toxic",
      distinguishingFeature: "Brain-like wrinkled (not pitted) reddish-brown cap; chambered stem interior."
    },
    {
      name: "Wrinkled Thimble-cap",
      scientific: "Verpa bohemica",
      danger: "GI-upset",
      distinguishingFeature: "Cap is wrinkled/longitudinally ribbed rather than pitted, and hangs free from the stem like a thimble (attached only at the apex); stem stuffed with cottony pith. Causes loss of muscular coordination in some eaters."
    },
    {
      name: "Smooth Thimble-cap",
      scientific: "Verpa conica",
      danger: "GI-upset",
      distinguishingFeature: "Smooth, unpitted thimble-like cap attached only at apex; pithy (not hollow) stem."
    },
    {
      name: "Half-free Morel",
      scientific: "Morchella populiphila",
      danger: "edible",
      distinguishingFeature: "Pitted cap attached to stem only at its midpoint (skirt-like lower half hangs free); also a PNW cottonwood associate, edible when cooked. Not dangerous, just a different species."
    },
    {
      name: "Black Morel",
      scientific: "Morchella snyderi / M. brunnea",
      danger: "edible",
      distinguishingFeature: "Ridges darken to black or dark brown at maturity; associated with conifers rather than riparian hardwoods. Edible when cooked."
    }
  ],
  culinary: {
    flavor: "Rich, earthy, nutty, with a distinctive savory umami; considered a choice edible despite the 'edible-when-cooked' classification. Hollow cap traps butter and cream sauces.",
    preparation: "Slice lengthwise, brush out debris and insects (or quick rinse and dry), then sauté in butter until any released liquid evaporates and edges crisp. Always cook thoroughly (8+ minutes). Excellent with cream, sherry, eggs, pasta, and steak. Never eat raw and avoid alcohol on first tasting.",
    preservation: "Dries exceptionally well — string or dehydrate at low heat; rehydrate in warm water or stock (reserve the liquid). Can also be frozen after a quick sauté. Avoid pickling raw."
  },
  conservationNotes: "Not listed on IUCN Red List or NatureServe; common and widespread across North America. PNW populations along the Columbia, Willamette, and Snake rivers can be locally heavily harvested. Riparian habitat loss, dam-driven flow regulation, and bank development pose the main long-term threats. Forage sustainably: cut at the base, leave small specimens, avoid trampling soil.",
  sources: [
    {
      name: "Kuo, M. (2012). Morchella esculentoides / Morchella americana. MushroomExpert.Com",
      url: "http://www.mushroomexpert.com/morchella_esculentoides.html"
    },
    {
      name: "Kuo, M., Dewsbury, D.R., O'Donnell, K., et al. (2012). Taxonomic revision of true morels (Morchella) in Canada and the United States. Mycologia 104(5): 1159–1177",
      url: "https://doi.org/10.3852/11-375"
    },
    {
      name: "Mushroom Marauder — How to Find Yellow Morels: A Guide to Riparian Morels of the Pacific Northwest",
      url: "https://mushroommarauder.com/blogs/morel-mushroom-hunting/how-to-find-yellow-morels"
    },
    {
      name: "Salish Mushrooms — Morels of the Pacific Northwest",
      url: "https://salishmushrooms.com/mushrooms/morels/"
    },
    {
      name: "Midwest American Mycological Information — Morchella americana & Morchella Look-alikes",
      url: "https://midwestmycology.org/morchella-americana/morchella-look-alikes/"
    },
    {
      name: "ForageSF — Morchella americana: California's Only True Blonde Morel",
      url: "https://www.foragesf.com/blog/2020/4/1/morchella-americana-californias-only-true-blonde-morel"
    },
    {
      name: "Minnesota Seasons — Yellow Morel (Morchella americana)",
      url: "https://www.minnesotaseasons.com/Fungi/Yellow_Morel.html"
    },
    {
      name: "Demorest, H. (2024). Outbreak Linked to Morel Mushroom Exposure — Montana, 2023. MMWR 73",
      url: "https://doi.org/10.15585/mmwr.mm7310a1"
    }
  ]
}
,
{
  id: "morchella-importuna",
  commonNames: ["Landscape Black Morel", "Landscape Morel", "Northwest Landscape Morel", "Cosmopolitan Morel", "Black Landscape Morel"],
  scientific: "Morchella importuna",
  family: "Morchellaceae",
  order: "Pezizales",
  trophicMode: "saprotrophic",
  mycorrhizalPartners: null,
  hostTrees: [],
  substrate: "hardwood chips, bark mulch, aged wood-chip mulch beds, disturbed soil with woody debris, fire pits, planters",
  habitat: "Distinctly urban/suburban species - the most common landscape morel in the Pacific Northwest. Saprotrophic (facultatively saprotrophic, with some weak mycorrhizal tendencies near trees per Kuo). Fruits prolifically in fresh-to-aged wood-chip mulch beds, ornamental landscaping, gardens, planters, parking-lot islands, fire pits, and almost any disturbed urban ground. Rarely found in natural forest settings, distinguishing it from native black morels of the M. elata clade.",
  elevationM: { min: 0, max: 800 },
  regionsPNW: ["Puget lowlands", "Seattle metro", "Portland metro", "Willamette Valley", "Vancouver Island", "Lower Mainland BC", "Oregon Coast", "western Cascades foothills"],
  fruitingMonths: [2, 3, 4, 5, 6],
  peakMonths: [3, 4],
  conditions: {
    minRain7d: 10,
    idealDaysSinceRain: [3, 10],
    tempRangeC: [7, 18],
    humidityMinPct: 70
  },
  identification: {
    cap: "Conical to elongated-conical, 3-9 cm tall x 2-5 cm wide; pits and ridges arranged in a distinctive regular ladder-like (vertically aligned) pattern, with parallel vertical primary ridges connected by shorter horizontal cross-ridges; ridges initially pale gray-brown to yellow-brown, darkening with age to dark brown or nearly black; pits pale tan to grayish-brown, often darker than ridges in age; cap continuous with stem (no skirt or free margin); completely hollow inside",
    underside: "Not applicable - morels have no gills or pores; the entire pitted-and-ridged exterior of the cap is the fertile spore-bearing surface (asci on the pit linings)",
    stem: "Whitish to pale cream, becoming dingy with age; cylindrical to slightly enlarged at base; 2-8 cm long x 1-3 cm thick; finely granular-mealy surface; entirely hollow and continuous with the hollow cap interior (single chamber)",
    fleshColor: "Whitish to pale cream, thin, brittle, hollow throughout",
    sporePrintColor: "Cream to pale yellow-ochre",
    odor: "Mild, pleasant, faintly earthy/nutty; not distinctive when raw",
    sizeCm: "5-17 cm total height, cap 3-9 cm tall"
  },
  edibility: "edible-when-cooked",
  toxicityNotes: "MUST be thoroughly cooked - raw or undercooked morels (including M. importuna) contain heat-labile hemolysins and can cause significant gastrointestinal distress, and have been linked to a neurological/cerebellar toxicity syndrome when consumed raw or in large quantities. Never eat raw, even as a tasting. Cook for at least 10-15 minutes. Some individuals are sensitive even to cooked morels, especially when combined with alcohol. Always start with a small portion when trying for the first time. Discard the cooking water and ensure good ventilation when cooking (steam can carry irritants).",
  lookalikes: [
    { name: "Half-free Morel", scientific: "Morchella punctipes / Morchella populiphila", danger: "edible-when-cooked", distinguishingFeature: "Cap attached to stem only at its midpoint, leaving the lower half of the cap hanging free like a skirt; smaller cap relative to stem length" },
    { name: "Wrinkled Thimble-cap / Early Morel", scientific: "Verpa bohemica", danger: "GI-upset", distinguishingFeature: "Cap attached to stem ONLY at the very apex (hangs like a thimble/skirt); cap surface is wrinkled-brain-like with longitudinal folds rather than true pits-and-ridges; stem stuffed with cottony pith, NOT a single hollow chamber; causes GI upset and incoordination in many people" },
    { name: "Smooth Thimble-cap", scientific: "Verpa conica", danger: "GI-upset", distinguishingFeature: "Cap smooth or only faintly wrinkled, attached only at apex; stem stuffed with cottony fibers, not hollow" },
    { name: "False Morel / Brain Mushroom", scientific: "Gyromitra esculenta", danger: "deadly", distinguishingFeature: "Cap reddish-brown, irregularly wrinkled and brain-like or saddle-shaped (NOT pitted with discrete pits/ridges); interior of cap and stem chambered/stuffed with cottony tissue rather than a single hollow chamber; contains gyromitrin (MMH) which is potentially lethal and a carcinogen" },
    { name: "Snowbank False Morel", scientific: "Gyromitra montana / Gyromitra gigas", danger: "toxic", distinguishingFeature: "Cap tan to reddish-brown, irregularly lobed/brain-like and saddle-shaped, not regularly pitted; stem stout, chambered/stuffed with internal folds; fruits near melting snow at higher elevations" },
    { name: "Elfin Saddle", scientific: "Helvella lacunosa", danger: "inedible", distinguishingFeature: "Cap saddle-shaped or irregularly lobed (not pitted), gray to black; stem deeply fluted/ribbed with longitudinal channels" },
    { name: "Blonde Morel", scientific: "Morchella rufobrunnea", danger: "edible-when-cooked", distinguishingFeature: "Similar urban/landscape habitat but pallid cream to pale gray-brown when young (not blackening), pits often slowly bruising orange-red; ridges paler than pits (opposite of importuna in age)" },
    { name: "Western Black Morel", scientific: "Morchella snyderi / Morchella brunnea", danger: "edible-when-cooked", distinguishingFeature: "Forest-dwelling natural black morels associated with conifers; irregular (non-laddered) pit arrangement; not found in landscape/woodchip habitats" }
  ],
  culinary: {
    flavor: "Rich, deep, earthy-nutty and savory with notes of forest floor and roasted meat; one of the most prized culinary mushrooms in the world; concentrated umami when dried then rehydrated",
    preparation: "Always cook thoroughly (minimum 10-15 minutes). Slice lengthwise to inspect the hollow interior and rinse out grit, sand, and any insects; pat dry. Classic preparations include sauteing in butter with shallots, cream sauces over pasta or steak, stuffing with cheese or sausage, and deglazing with sherry or Madeira. Pairs beautifully with eggs, asparagus, fiddleheads, and spring lamb. Avoid raw consumption and avoid alcohol with large servings.",
    preservation: "Dries exceptionally well - thread on string or use a dehydrator at low heat; dried morels rehydrate in warm water or stock and the soaking liquid (strained) is a prized broth ingredient. Can also be sauteed and then frozen. Pickling is less common but possible."
  },
  conservationNotes: "Not of concern (Burke Herbarium). Described as a new species only in 2012 (Kuo, O'Donnell & Volk). Anthropogenic-habitat specialist that appears to have expanded with urban landscaping and the wood-chip mulch industry; possibly spread between continents (now reported from Europe, Turkey, and China) via the nursery/landscape trade. One of the few morels successfully under commercial outdoor cultivation, particularly in China.",
  sources: [
    { name: "MushroomExpert.com - Morchella importuna (Michael Kuo)", url: "https://www.mushroomexpert.com/morchella_importuna.html" },
    { name: "MykoWeb - California Fungi: Morchella importuna", url: "https://www.mykoweb.com/CAF/species/Morchella_importuna.html" },
    { name: "Burke Herbarium Image Collection - Morchella importuna (northwest landscape morel)", url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Morchella%20importuna" },
    { name: "Kuo, Dewsbury, O'Donnell, Carter, Rehner, Moore, Moncalvo, Canfield, Stephenson, Methven & Volk (2012) - Taxonomic revision of true morels (Morchella) in Canada and the United States, Mycologia 104(5):1159-1177", url: "https://www.tandfonline.com/doi/pdf/10.3852/11-375" },
    { name: "Pilz, McLain, Alexander, Villarreal-Ruiz, Berch, Wurtz, Parks, McFarlane, Baker, Molina & Smith (2007) - Ecology and Management of Morels Harvested from the Forests of Western North America, USDA PNW-GTR-710", url: "https://www.fs.fed.us/pnw/pubs/pnw_gtr710.pdf" },
    { name: "Wikipedia - Morchella importuna", url: "https://en.wikipedia.org/wiki/Morchella_importuna" },
    { name: "Northern Bushcraft - Black Landscape Morel (Washington)", url: "https://www.northernbushcraft.com/mushrooms/_black_landscape_morel/wa.htm" },
    { name: "Saviuc P, Harry P, Pulce C, Garnier R, Cochet A. (2010) - Can morels (Morchella sp.) induce a toxic neurological syndrome? Clin Toxicol (Phila) 48(4):365-72", url: "https://pubmed.ncbi.nlm.nih.gov/20507248" }
  ]
}
,
{
  id: "morchella-snyderi",
  commonNames: ["Snyder's Morel", "Natural Black Morel", "Mountain Black Morel"],
  scientific: "Morchella snyderi",
  family: "Morchellaceae",
  order: "Pezizales",
  trophicMode: "mixed",
  mycorrhizalPartners: ["Pseudotsuga menziesii", "Pinus ponderosa", "Abies concolor", "Abies grandis"],
  hostTrees: [
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Ponderosa pine", scientific: "Pinus ponderosa" },
    { common: "White fir", scientific: "Abies concolor" },
    { common: "Grand fir", scientific: "Abies grandis" }
  ],
  substrate: "Forest duff and mineral soil under mature, undisturbed montane conifers; not associated with burns, logging slash, landscaping, or cottonwood riparian bottoms",
  habitat: "A 'natural' (non-burn, non-disturbance) western black morel of mid-elevation conifer forests. Fruits solitary, scattered, or gregariously on the ground in mature, intact Douglas-fir/white fir/ponderosa pine stands. Suspected to be both saprobic and mycorrhizal at different life-cycle stages (Kuo et al. 2012), with at least a mycorrhizal-leaning, site-faithful lifestyle that allows the same patches to produce annually in undisturbed forest. Strongly contrasts with 'burn morels' (M. tomentosa, M. exuberans, M. sextelata, M. eximia, M. capitata) that flush massively the spring after wildfire, and with 'landscape' morels (M. importuna) of wood-chip beds and gardens.",
  elevationM: { min: 300, max: 2200 },
  regionsPNW: ["Oregon Cascades (both slopes)", "Washington Cascades (east slope predominant)", "southern Oregon (Klamath/Siskiyou)", "Blue Mountains", "Wallowas", "Okanogan", "northeast Washington", "Idaho Panhandle", "interior British Columbia", "Vancouver Island (uncommon)"],
  fruitingMonths: [4, 5, 6, 7],
  peakMonths: [5, 6],
  conditions: {
    minRain7d: 10,
    idealDaysSinceRain: [3, 10],
    tempRangeC: [8, 22],
    humidityMinPct: 60
  },
  identification: {
    cap: "Conical to narrowly egg-shaped, 3-9 cm tall x 2-5 cm wide, completely attached to the stem at the base (no skirt). Pits and ridges are arranged predominantly longitudinally (vertical), with shorter cross-ridges; pits are somewhat elongated vertically. Young caps yellowish to pale tan with finely tomentose pits; ridges darken with age, becoming smoky brown to nearly black at maturity (and especially when dried), while the pits remain paler tan to grayish-brown. Fruit bodies in transition often show a dark upper half and a still-pale lower half.",
    underside: "Hymenium lines the pits (the entire outer surface of the cap is fertile). Cap is hollow and continuous with the hollow stem in cross-section - a critical diagnostic separating true Morchella from Verpa, Gyromitra, and Helvella.",
    stem: "Whitish to pale brownish, 3.5-7 cm long x 2.5-4 cm wide, more or less equal or slightly thickening toward the base. Surface initially covered with whitish granules; with age becomes strongly granular and develops prominent ridges and pits (lacunose) - this lacunose stem is a key field character. Hollow inside; the base often becomes layered/chambered with multiple cavities.",
    fleshColor: "Whitish throughout; cap wall 1-2 mm thick; hollow",
    sporePrintColor: "Cream to pale yellowish (rarely taken; spores produced from ascus)",
    odor: "Mild, pleasantly mushroomy/earthy; taste mild when cooked",
    sizeCm: "Total height 5-14 cm; cap 3-9 cm x 2-5 cm; stem 3.5-7 cm x 2.5-4 cm"
  },
  edibility: "edible-when-cooked",
  toxicityNotes: "Like all true morels, M. snyderi MUST be thoroughly cooked - raw or undercooked morels cause GI distress (likely from heat-labile hemolysins). Avoid alcohol with the meal, as morel-alcohol interactions have been reported. Always cook a small portion first when trying any morel for the first time. Do not consume specimens collected near roadsides or polluted sites, as morels can accumulate heavy metals.",
  lookalikes: [
    { name: "Mountain Blonde Morel", scientific: "Morchella tridentina", danger: "edible", distinguishingFeature: "Resembles young M. snyderi but cap ridges do NOT darken to black at maturity (stay pale brown), smaller ascospores (20-29 x 14-19 um), and tends to associate with true firs; also a 'natural' morel and equally edible when cooked" },
    { name: "Western Brown Morel", scientific: "Morchella brunnea", danger: "edible", distinguishingFeature: "Younger fruit bodies have a distinctly browner overall color; stem does NOT become lacunose/pitted in age (remains relatively smooth-granular); a California-centric natural black morel" },
    { name: "Landscape Morel", scientific: "Morchella importuna", danger: "edible", distinguishingFeature: "Strongly ladder-like (regularly rectangular) pit arrangement on cap; fruits in wood-chip beds, gardens, landscape mulch, and disturbed urban sites - not in intact forest" },
    { name: "Fire/Burn Morel", scientific: "Morchella tomentosa", danger: "edible", distinguishingFeature: "'Gray morel' of post-fire conifer forests; cap and young stem covered in fine grayish tomentum (hair); restricted to the first 1-2 springs after wildfire" },
    { name: "Pink-foot Burn Morel", scientific: "Morchella exuberans", danger: "edible", distinguishingFeature: "Burn-associated black morel of the first post-fire spring; stem often pinkish-tinged at base; not in unburned forest" },
    { name: "Half-free Morel", scientific: "Morchella populiphila", danger: "edible", distinguishingFeature: "Cap attached to stem only at the midpoint, leaving a skirt-like lower half of the cap hanging free; associated with cottonwoods (Populus) in riparian areas; smaller and more delicate" },
    { name: "Wrinkled Thimble-cap / False Morel", scientific: "Verpa bohemica", danger: "GI-upset", distinguishingFeature: "Cap is attached only at the very TOP of the stem and hangs free like a thimble (sliced longitudinally, the cap is clearly skirt-like, not fused to the stem); causes muscular incoordination and GI upset in many people" },
    { name: "Brain-shaped False Morel", scientific: "Gyromitra esculenta", danger: "deadly", distinguishingFeature: "Cap is BRAIN-LIKE / convoluted / wrinkled (NOT pitted with ridges and pits like a true morel); cap and stem are chambered with cottony tissue (NOT a single hollow cavity) in cross-section; cap reddish-brown to dark brown; contains gyromitrin (a hydrazine) - has caused fatalities; never eat any 'morel' whose cap is wrinkled rather than pitted" },
    { name: "Snow False Morel", scientific: "Gyromitra montana (G. gigas)", danger: "toxic", distinguishingFeature: "Large brain-like / saddle-shaped wrinkled cap (not pitted); thick chambered white stem; fruits near melting snowbanks in spring montane conifer forest - same timing/elevation as M. snyderi; contains gyromitrin" },
    { name: "Elfin Saddle", scientific: "Helvella lacunosa", danger: "edible-when-cooked", distinguishingFeature: "Saddle-shaped or lobed (NOT conical-pitted) gray-to-black cap on a deeply ribbed/fluted (not pitted) stem; same forests but different silhouette" }
  ],
  culinary: {
    flavor: "Classic morel flavor: deep, earthy, nutty, almost meaty/umami with a faint smokiness; among the more strongly flavored North American morels because of the darker mature cap. Excellent texture - firm and chewy when cooked.",
    preparation: "MUST be cooked thoroughly (8+ minutes in a hot pan) - never eat raw. Slice in half lengthwise to inspect the hollow interior (confirms a true morel) and to evict any insects, then soak briefly in salted water if gritty. Classic preparations: sauteed in butter with shallots, salt, and a splash of cream/sherry; stuffed; folded into pasta, risotto, or a cream sauce for steak/chicken; on toast. Avoid alcohol with the meal until you know how you react.",
    preservation: "Dries exceptionally well - thread on string or use a dehydrator at low heat until cracker-dry; the darkening of the cap on drying actually intensifies the flavor. Rehydrate in warm water and reserve the soaking liquid for stock. Also freezes well after a brief saute in butter."
  },
  conservationNotes: "Not formally listed. As a 'natural' (non-disturbance) morel tied to mature, undisturbed conifer forest, M. snyderi populations are sensitive to clearcut logging, intensive forest-floor disturbance, and stand-replacing fire (which favors the unrelated burn-morel species). Site-faithful patches can produce for many years if the forest floor and host trees remain intact. The PNW spring morel commercial harvest is dominated by post-fire flushes of other species (M. tomentosa, M. exuberans, M. sextelata), so M. snyderi is mostly a recreational find. Practice conservative harvest: cut or pinch above ground, leave young and over-mature specimens, and do not rake duff.",
  sources: [
    { name: "MykoWeb - Morchella snyderi (California Fungi)", url: "https://www.mykoweb.com/CAF/species/Morchella_snyderi.html" },
    { name: "MushroomExpert.com - Morchella snyderi (Kuo, 2012)", url: "https://www.mushroomexpert.com/morchella_snyderi.html" },
    { name: "Kuo, M. et al. (2012). Taxonomic revision of true morels (Morchella) in Canada and the United States. Mycologia 104(5): 1159-1177", url: "https://thekeep.eiu.edu/cgi/viewcontent.cgi?article=1192&context=bio_fac" },
    { name: "Wikipedia - Morchella snyderi", url: "https://en.wikipedia.org/wiki/Morchella_snyderi" },
    { name: "Pilz, D. et al. (2007). Ecology and Management of Morels Harvested from the Forests of Western North America. USFS PNW-GTR-710", url: "https://www.fs.fed.us/pnw/publications/gtr710/" },
    { name: "Pacific Northwest Key Council - Morchellaceae in the Pacific Northwest", url: "http://www.svims.ca/council/Morche.htm" },
    { name: "iNaturalist - Morchella snyderi (Natural Black Morel)", url: "https://www.inaturalist.org/taxa/473933-Morchella-snyderi" }
  ]
}
,
{
  id: "morchella-tomentosa",
  commonNames: ["Gray Morel", "Burn Morel", "Fuzzy Foot Morel", "Black Foot Morel", "Fuzzy Morel"],
  scientific: "Morchella tomentosa",
  family: "Morchellaceae",
  order: "Pezizales",
  trophicMode: "mixed",
  mycorrhizalPartners: ["Pinus contorta", "Abies concolor", "Abies lasiocarpa", "Pseudotsuga menziesii", "Picea engelmannii"],
  hostTrees: [
    { common: "Lodgepole pine", scientific: "Pinus contorta" },
    { common: "White fir", scientific: "Abies concolor" },
    { common: "Subalpine fir", scientific: "Abies lasiocarpa" },
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Engelmann spruce", scientific: "Picea engelmannii" },
    { common: "Ponderosa pine", scientific: "Pinus ponderosa" }
  ],
  substrate: "Burned mineral soil, ash layer, and charred duff in recently incinerated montane conifer forests. Fruits up out of blackened ground, often beside burned-out root systems and standing dead conifers; produces unique melanized sclerotia-like underground structures (a feature unusual within Morchella) that likely persist in the duff and enable the massive post-fire flush.",
  habitat: "Obligate pyrophilic / fire-associated morel of western North American conifer forests. The defining feature of its life history is the post-fire fruiting trigger: it appears in abundance the FIRST SPRING following a previous-summer/fall wildfire, with diminishing flushes possible in the second spring. Moderate- to high-intensity stand-replacing burns in lodgepole pine, white fir, subalpine fir, Douglas-fir, and mixed-conifer stands produce the biggest crops. The alkaline shift in soil pH from wood ash and the elimination of competing soil microbes are believed to trigger fruiting. M. tomentosa tends to fruit later in the burn-morel season than its co-occurring relatives (M. exuberans, M. sextelata, M. eximia / septimelata, M. capitata), and is often the LAST flush in a given burn. Does not fruit in unburned forest.",
  elevationM: { min: 600, max: 2800 },
  regionsPNW: ["Oregon Cascades (east slope burns)", "Washington Cascades (east slope burns)", "southern Oregon (Klamath/Siskiyou)", "Blue Mountains", "Wallowas", "Okanogan", "northeast Washington", "Idaho Panhandle", "western Montana", "interior British Columbia", "northern California (Sierra/Cascade burns)"],
  fruitingMonths: [4, 5, 6, 7, 8],
  peakMonths: [5, 6, 7],
  conditions: {
    minRain7d: 10,
    idealDaysSinceRain: [3, 12],
    tempRangeC: [7, 24],
    humidityMinPct: 55
  },
  identification: {
    cap: "Conical to elongated-conical or narrowly ovate, 3-12 cm tall x 2-6 cm wide, completely attached to the stem at the base (no skirt - a true morel). Pits and ridges form a densely pitted honeycomb pattern; ridge orientation somewhat irregular to vaguely vertical. DIAGNOSTIC FEATURE: young fruit bodies are densely covered in fine grayish-to-blackish hairs (tomentum) over both ridges and pits, giving a fuzzy, velvety, sooty, or 'dipped-in-soot' appearance - best seen with a hand lens. The tomentum gradually wears off with age, exposing the underlying surface, but dark tufts of hyphae often persist in pits and at the stem base even on old specimens. Color highly variable and shifts with age: typically very dark (black, sooty-gray, smoky-brown) when young, lightening to gray, brown, yellowish, or even whitish with maturity.",
    underside: "Hymenium lines the entire outer surface of the pitted cap (ascomycete - asci produce spores outward from the pits). Cap is hollow and continuous with the hollow stem in cross-section - a critical diagnostic separating true Morchella from Verpa, Gyromitra, and Helvella.",
    stem: "3-12 cm long x 1.5-4 cm wide, thick, sturdy, and unusually heavy for a morel; often darker than the stems of other morels (hence 'black foot'). Surface finely tomentose when young, especially at the base where dark fuzzy hyphae are most persistent. DIAGNOSTIC: stem frequently has a thick, 'double-walled' construction - in cross-section the wall is noticeably layered/chambered rather than a single thin sheet, making the mushroom dense and durable. Hollow inside; base may be enlarged and is often blackened or sooty.",
    fleshColor: "Whitish to pale grayish; firm and thick (notably thicker than most morels because of the doubled stem wall); hollow",
    sporePrintColor: "Cream to pale yellowish (rarely taken)",
    odor: "Mild, pleasantly mushroomy/earthy; taste mild when cooked",
    sizeCm: "Total height 5-15 cm; cap 3-12 cm x 2-6 cm; stem 3-12 cm x 1.5-4 cm"
  },
  edibility: "edible-when-cooked",
  toxicityNotes: "MUST be thoroughly cooked - never eat raw or undercooked. Like all true morels, M. tomentosa contains heat-labile compounds (likely hemolysins) that cause GI distress when raw. Avoid alcohol with the meal, as morel-alcohol interactions have been documented. Always cook a small test portion the first time. Because M. tomentosa fruits in burn sites, be aware that burned landscapes can have residual hazards (ash, standing dead 'widow-maker' snags, retained fire suppression chemicals) and that fungi may accumulate heavy metals from burned debris - avoid collecting near burned structures, vehicles, or industrial sites.",
  lookalikes: [
    { name: "Pink-foot Burn Morel / Exuberant Morel", scientific: "Morchella exuberans", danger: "edible", distinguishingFeature: "Co-occurs in the same burns and fruits earlier in the season; lacks the fine fuzzy tomentum on cap and stem; stem wall is single (NOT doubled); often pinkish-tinged at the base; lighter overall weight" },
    { name: "Six-celled Burn Morel", scientific: "Morchella sextelata", danger: "edible", distinguishingFeature: "Co-occurring burn morel; surface is glabrous (smooth, NOT fuzzy/tomentose); stem wall single, not doubled; pits sometimes pinkish; nearly impossible to separate from M. eximia/septimelata without DNA, but cleanly separated from M. tomentosa by the lack of hairs" },
    { name: "Seven-celled Burn Morel / Fire Morel", scientific: "Morchella eximia (= M. septimelata)", danger: "edible", distinguishingFeature: "Another co-occurring burn morel; smooth (non-tomentose) cap and stem; pits can develop greenish or pinkish hues ('green morel' / 'pickle'); single-walled stem" },
    { name: "Capitate Burn Morel", scientific: "Morchella capitata", danger: "edible", distinguishingFeature: "Burn-associated; lacks the diagnostic fuzzy/tomentose surface of M. tomentosa; single stem wall; smaller and less robust" },
    { name: "Snyder's Morel / Natural Black Morel", scientific: "Morchella snyderi", danger: "edible", distinguishingFeature: "A 'natural' (non-burn) western black morel; fruits in intact unburned conifer forest, NOT in burn sites; lacks fuzzy tomentum; stem becomes lacunose (pitted-ridged) with age" },
    { name: "Landscape Morel", scientific: "Morchella importuna", danger: "edible", distinguishingFeature: "Strongly ladder-like (regularly rectangular) pit arrangement; fruits in wood-chip beds, gardens, and landscape mulch in urban/disturbed lowland sites - not in mountain burns; smooth (non-fuzzy) surface" },
    { name: "Wrinkled Thimble-cap / False Morel", scientific: "Verpa bohemica", danger: "GI-upset", distinguishingFeature: "Cap attached only at the very top of the stem and hangs free like a thimble/skirt; cap is wrinkled-ribbed rather than truly pitted; causes muscular incoordination and GI upset in many people; not fire-associated" },
    { name: "Brain-shaped False Morel", scientific: "Gyromitra esculenta", danger: "deadly", distinguishingFeature: "Cap is BRAIN-LIKE / convoluted / wrinkled (NOT pitted with ridges and pits); cap and stem chambered with cottony tissue (NOT a single hollow cavity) in cross-section; reddish-brown to dark brown; contains gyromitrin (a hydrazine) - has caused fatalities; can occur in conifer burns and recently disturbed ground" },
    { name: "Snow False Morel", scientific: "Gyromitra montana (G. gigas)", danger: "toxic", distinguishingFeature: "Large brain-like / saddle-shaped wrinkled cap (not pitted); thick chambered white stem; fruits near melting snowbanks in montane conifer forest at the same time/elevation as burn morels; contains gyromitrin" },
    { name: "Elfin Saddle", scientific: "Helvella lacunosa", danger: "edible-when-cooked", distinguishingFeature: "Saddle-shaped or lobed (NOT conical-pitted) gray-to-black cap on a deeply ribbed/fluted (not pitted) stem; can appear in burn sites but unmistakably different silhouette" }
  ],
  culinary: {
    flavor: "Classic deep morel flavor with a slightly smokier, more robust profile than other morels - often considered the most flavorful and meaty of the western burn morels because of its dense, thick double-walled flesh. Earthy, nutty, umami; holds its texture in cooking better than thinner-walled morels.",
    preparation: "MUST be cooked thoroughly (8+ minutes in a hot pan) - never eat raw. Slice in half lengthwise to confirm a single hollow cavity (rules out Gyromitra) and to evict ash, grit, and insects, then rinse or briefly soak in salted water - burn-site morels are often gritty with ash. Classic preparations: sauteed in butter with shallots, salt, and a splash of cream or sherry; folded into pasta, risotto, or cream sauce for steak/chicken/eggs; stuffed; on toast. Pairs especially well with rich dairy and dry sherry. Avoid alcohol with the meal until you know how you react.",
    preservation: "Dries exceptionally well - the double-walled flesh makes M. tomentosa one of the best morels for drying. Thread on string or use a dehydrator at low heat until cracker-dry. Drying intensifies the flavor and dried specimens keep for years in an airtight container. Rehydrate in warm water and reserve the dark, fragrant soaking liquid for stock. Also freezes well after a brief saute in butter; raw freezing is not recommended."
  },
  conservationNotes: "Not formally listed. As an obligate pyrophilic species, M. tomentosa populations are tied to the natural wildfire regime of western montane conifer forests; fire suppression reduces fruiting opportunities, while large stand-replacing wildfires (increasingly common with climate change) create boom crops the following spring. Commercial morel harvesters travel to fresh PNW and Cascade burns each summer, and large commercial harvests are regulated by USFS/BLM permits on federal land. Practice safe harvest in burn sites: watch for falling snags, hot spots, and unstable footing; cut or pinch above ground; leave young and over-mature specimens; and check post-fire access rules before entering closed areas.",
  sources: [
    { name: "MushroomExpert.com - Morchella tomentosa (Kuo, 2008)", url: "https://www.mushroomexpert.com/morchella_tomentosa.html" },
    { name: "Kuo, M. (2008). Morchella tomentosa, a new species from western North America, and notes on M. rufobrunnea. Mycotaxon 105: 441-446", url: "https://mushroomexpert.com/Kuo_M_2008_Morchella_tomentosa.pdf" },
    { name: "McFarlane, E.M., Pilz, D., Weber, N.S. (2005). High-elevation gray morels and other Morchella species harvested as non-timber forest products in Idaho and Montana. Mycologist 19(2): 62-68", url: "http://www.fsl.orst.edu/mycology/PilzPage_files/McFarlandEtal05GrayMorels.pdf" },
    { name: "Pilz, D. et al. (2007). Ecology and Management of Morels Harvested from the Forests of Western North America. USFS PNW-GTR-710", url: "https://modern-forager.com/wp-content/uploads/2023/05/pnw_gtr710-pnw-gtr-710-morel-publication.pdf" },
    { name: "Kuo, M. et al. (2012). Taxonomic revision of true morels (Morchella) in Canada and the United States. Mycologia 104(5): 1159-1177", url: "https://www.tandfonline.com/doi/full/10.3852/11-375" },
    { name: "Pacific Northwest Key Council - Morchellaceae in the Pacific Northwest", url: "http://www.svims.ca/council/Morche.htm" },
    { name: "Wikipedia - Morchella tomentosa", url: "https://en.wikipedia.org/wiki/Morchella_tomentosa" },
    { name: "Modern Forager - Burn Morel Taxonomy", url: "https://modern-forager.com/all-about-burn-morels/" }
  ]
}
,
{
  id: "phaeolepiota-aurea",
  commonNames: ["Golden Bootleg", "Golden Cap", "Gold Cup", "Alaskan Gold", "Golden False Pholiota"],
  scientific: "Phaeolepiota aurea",
  family: "Squamanitaceae",
  order: "Agaricales",
  trophicMode: "saprotrophic",
  mycorrhizalPartners: null,
  hostTrees: [
    { common: "Red Alder", scientific: "Alnus rubra" },
    { common: "Sitka Alder", scientific: "Alnus viridis ssp. sinuata" },
    { common: "Bigleaf Maple", scientific: "Acer macrophyllum" },
    { common: "Western Hemlock", scientific: "Tsuga heterophylla" },
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" }
  ],
  substrate: "Rich organic soil, leaf litter, and disturbed ground; often in nitrogen-enriched sites near nettles, along road and trail edges, and at the bases of alders.",
  habitat: "Gregarious to caespitose on the ground in disturbed forest edges, roadsides, ditches, riparian alder thickets, landscaped areas, and nutrient-rich soil under mixed deciduous and coniferous cover.",
  elevationM: { min: 0, max: 1200 },
  regionsPNW: [
    "Coastal Oregon",
    "Western Washington (Puget Sound lowlands)",
    "Olympic Peninsula",
    "Cascade foothills (OR/WA)",
    "Vancouver Island",
    "Coastal British Columbia",
    "Southeast Alaska"
  ],
  fruitingMonths: [8, 9, 10, 11],
  peakMonths: [9, 10],
  conditions: {
    minRain7d: 20,
    idealDaysSinceRain: [3, 10],
    tempRangeC: [5, 16],
    humidityMinPct: 75
  },
  identification: {
    cap: "7-20 cm wide (occasionally to 30 cm), rounded to convex becoming nearly flat with a low central umbo; dry, golden-brown to orange-tan, entirely covered with a fine granular-floccose powdery coating; margin often fringed with golden veil remnants.",
    underside: "Gills adnate to slightly decurrent with a tooth, close to crowded, pale yellow when young, becoming rusty ochre to orange-brown in age.",
    stem: "10-20 cm tall x 1.5-3 cm thick, enlarging downward and somewhat club-shaped; bears a persistent membranous skirt-like ring high on the stem; surface above the ring smooth and paler, below the ring concolorous with the cap and coated with the same golden granules; light yellow flesh that darkens when cut or bruised.",
    fleshColor: "Pallid whitish to pale yellow, deepening to ochre/rusty when bruised or cut.",
    sporePrintColor: "Yellow-brown to ochraceous (sometimes reported as reddish-brown).",
    odor: "Faintly of bitter almonds (suggesting hydrocyanic acid); taste mild and slightly sweet.",
    sizeCm: "Cap 7-20 cm (rarely to 30 cm); stem 10-20 x 1.5-3 cm"
  },
  edibility: "edible-with-caution",
  toxicityNotes: "Historically eaten and listed as edible, but now considered unsafe. Reports of gastrointestinal distress (Wells & Kempton, 1965) and the detection of hydrocyanic acid (HCN) (Heinemann, 1942) have led most modern authorities (Trudell & Ammirati; MykoWeb; First Nature) to recommend against consumption. Reactions appear idiosyncratic - some foragers tolerate it while others suffer significant GI upset. Cooking reduces but does not reliably eliminate the cyanogenic compounds.",
  lookalikes: [
    {
      name: "Big Laughing Gym",
      scientific: "Gymnopilus junonius",
      danger: "toxic",
      distinguishingFeature: "Grows on wood (stumps, buried roots) rather than soil; cap surface fibrillose-scaly rather than granular-powdery; spore print rust-brown and much darker; contains psilocybin/other toxins in some populations."
    },
    {
      name: "Sharp-scaly Pholiota",
      scientific: "Pholiota squarrosa",
      danger: "toxic",
      distinguishingFeature: "Densely clustered on wood at base of conifers or hardwoods; dry recurved scales (not granular powder); smaller stature; causes GI upset, especially with alcohol."
    },
    {
      name: "Powder Cap",
      scientific: "Cystoderma amianthinum",
      danger: "inedible",
      distinguishingFeature: "Much smaller (cap 2-5 cm); similar granular ochre surface but lacks the large skirt-like ring and giant size; grows in moss."
    },
    {
      name: "Honey Mushroom",
      scientific: "Armillaria solidipes",
      danger: "edible-when-cooked",
      distinguishingFeature: "Grows in clusters on/near wood; cap with fine dark scales (not golden powder); white spore print; well-developed but non-granular ring."
    }
  ],
  culinary: {
    flavor: "When eaten by tolerant individuals, reported mild, slightly sweet and nutty; however, due to documented toxicity and variable individual reactions, it is no longer considered a culinary mushroom.",
    preparation: "Not recommended for consumption. If historically prepared, it was always thoroughly cooked (never raw), but cooking does not reliably remove the hydrocyanic acid content. Modern field guides advise leaving it for photography only.",
    preservation: null
  },
  conservationNotes: "Locally uncommon but can be locally abundant in disturbed alder-rich habitats. Was previously Red Data listed in parts of Europe. No special PNW conservation status; populations appear stable in suitable disturbed nitrogen-rich habitats.",
  sources: [
    { name: "MykoWeb - Toxic Fungi of Western North America", url: "https://www.mykoweb.com/TFWNA" },
    { name: "Burke Herbarium Image Collection (University of Washington)", url: "http://biology.burke.washington.edu/herbarium/imagecollection/taxon.php?Taxon=Phaeolepiota+aurea" },
    { name: "First Nature - Phaeolepiota aurea", url: "https://www.first-nature.com/fungi/phaeolepiota-aurea.php" },
    { name: "Mushroom Appreciation - Golden Bootleg Mushroom", url: "https://www.mushroom-appreciation.com/golden-bootleg-mushroom.html" },
    { name: "Ultimate Mushroom - Phaeolepiota aurea", url: "https://ultimate-mushroom.com/poisonous/324-phaeolepiota-aurea.html" },
    { name: "Trudell, S. & Ammirati, J. (2009). Mushrooms of the Pacific Northwest. Timber Press.", url: "https://www.timberpress.com/books/mushrooms_pacific_northwest/trudell/9780881929355" }
  ]
}
,
{
  id: "pleurotus-ostreatus",
  commonNames: ["Oyster mushroom", "Grey oyster mushroom", "Oyster fungus", "Hiratake", "Pearl oyster mushroom"],
  scientific: "Pleurotus ostreatus",
  family: "Pleurotaceae",
  order: "Agaricales",
  trophicMode: "saprotrophic",
  mycorrhizalPartners: null,
  hostTrees: [
    { common: "Red alder", scientific: "Alnus rubra" },
    { common: "Bigleaf maple", scientific: "Acer macrophyllum" },
    { common: "Black cottonwood", scientific: "Populus trichocarpa" },
    { common: "American beech", scientific: "Fagus grandifolia" },
    { common: "Quaking aspen", scientific: "Populus tremuloides" },
    { common: "Willow", scientific: "Salix spp." },
    { common: "Oak", scientific: "Quercus spp." }
  ],
  substrate: "Dead and dying hardwood: standing snags, fallen logs, stumps, and large branches; a white-rot wood-decay fungus that primarily decomposes lignin in deciduous wood, occasionally on conifers (pine, true fir).",
  habitat: "Shelf-like, shingled clusters on the sides of hardwood stumps, logs, and snags in moist deciduous and mixed forests, especially riparian corridors along streams and rivers. The true P. ostreatus is the cold-fruiting member of the oyster complex: fruiting is triggered by a sharp temperature drop (cold snap) following rain, which is why it appears primarily from late autumn through early spring. In the Pacific Northwest the type species is largely replaced by P. pulmonarius (summer/warm fruiter) and P. populinus (on aspen), with cold-weather P. ostreatus-group collections occurring on alder, maple, and cottonwood in lowland riparian forest.",
  elevationM: { min: 0, max: 1500 },
  regionsPNW: ["Western Washington", "Western Oregon", "Coastal British Columbia", "Puget Sound lowlands", "Willamette Valley", "Olympic Peninsula", "Columbia River Gorge", "Vancouver Island"],
  fruitingMonths: [1, 2, 3, 4, 10, 11, 12],
  peakMonths: [11, 12, 3, 4],
  conditions: {
    minRain7d: 20,
    idealDaysSinceRain: [3, 10],
    tempRangeC: [2, 15],
    humidityMinPct: 80
  },
  identification: {
    cap: "Shell-, fan-, or oyster-shaped; 5-25 cm across; smooth, moist but not sticky; color ranges from dark brown to grey-brown when young, fading to tan, buff, or nearly white with age; margin inrolled when young, becoming wavy.",
    underside: "White to cream decurrent gills running down onto the stub of a stem; gills close, narrow, with smooth (not jagged) edges.",
    stem: "Lateral, eccentric, or essentially absent; when present short, stubby, white, often hairy at the base where clusters fuse; up to 3 cm long.",
    fleshColor: "White, thick at the base, thinning toward the margin; does not stain on bruising.",
    sporePrintColor: "White to pale lilac or lilac-grey (a key separator from white-spored lookalikes).",
    odor: "Distinctive sweet, anise- or licorice-like 'oyster smell'; pleasant and considered diagnostic when present.",
    sizeCm: "Caps 5-25 cm wide; clusters frequently exceed 30 cm across and several kilograms in mass."
  },
  edibility: "choice",
  toxicityNotes: "Generally safe and widely cultivated, but raw or undercooked specimens can cause mild GI upset in some individuals; rare contact dermatitis and respiratory sensitivity to spores reported in commercial growers exposed to heavy spore loads.",
  lookalikes: [
    { name: "Angel wings", scientific: "Pleurocybella porrigens", danger: "deadly", distinguishingFeature: "Pure white, thinner and more fragile flesh; grows exclusively on conifer wood (especially hemlock); smaller (2-10 cm); implicated in fatal encephalopathy in susceptible individuals." },
    { name: "Western jack-o'-lantern", scientific: "Omphalotus olivascens", danger: "toxic", distinguishingFeature: "Orange to olive-orange coloration, true central stem, gills not truly decurrent in the same way; contains muscarine causing severe GI distress; grows on hardwood roots/stumps in California (rare in PNW)." },
    { name: "Mock oyster", scientific: "Phyllotopsis nidulans", danger: "inedible", distinguishingFeature: "Bright orange to salmon hairy cap, foul cabbage-like odor, pinkish spore print." },
    { name: "Lung oyster", scientific: "Pleurotus pulmonarius", danger: "edible", distinguishingFeature: "Paler (whitish to pale tan) cap, thinner flesh, fruits in warm season (late April-September); not dangerous, simply a sister species." },
    { name: "Aspen oyster", scientific: "Pleurotus populinus", danger: "edible", distinguishingFeature: "Restricted to quaking aspen (Populus tremuloides) wood; paler cap; edible." },
    { name: "Elm oyster", scientific: "Hypsizygus ulmarius", danger: "edible", distinguishingFeature: "True central stem, gills adnate (not decurrent), grows from wounds high on living hardwoods." },
    { name: "Ivory funnel", scientific: "Clitocybe dealbata", danger: "toxic", distinguishingFeature: "Small, grows on the ground (not wood), funnel-shaped; contains muscarine." },
    { name: "Toxic sawgill", scientific: "Lentinellus ursinus", danger: "GI-upset", distinguishingFeature: "Gills with jagged/serrate edges, finely hairy cap, very bitter taste." }
  ],
  culinary: {
    flavor: "Mild, slightly sweet and savory with a faint anise note; tender when young, chewier and more substantial when mature or cold-grown.",
    preparation: "Tear into strips along the natural grain and saute in butter or oil over high heat until edges crisp; excellent in stir-fries, cream sauces, risotto, soups, and as a meat substitute. Always cook thoroughly; pair well with garlic, shallots, thyme, and white wine. Inspect for beetle larvae in older specimens.",
    preservation: "Dehydrate at 45-55 C until cracker-dry then store airtight; reconstitute in warm water. Sauteed mushrooms freeze well for up to 6 months. Pickling and powdering for stocks are also common; not recommended for raw preservation."
  },
  conservationNotes: "Not of conservation concern: globally widespread, abundant on common hardwood debris, and one of the most heavily cultivated edible mushrooms in the world. Sustainable to forage by cutting at the base and leaving the substrate intact to allow repeat flushes.",
  sources: [
    { name: "MushroomExpert.com - Pleurotus ostreatus by Michael Kuo", url: "https://www.mushroomexpert.com/pleurotus_ostreatus.html" },
    { name: "Pacific Northwest Key Council - Trial Field Key to Pleurotoid Species (Ian Gibson)", url: "https://www.svims.ca/council/Pleuro.htm" },
    { name: "Wikipedia - Pleurotus ostreatus", url: "https://en.wikipedia.org/wiki/Pleurotus_ostreatus" },
    { name: "Tom Volk's Fungus of the Month - Pleurotus ostreatus", url: "https://botit.botany.wisc.edu/toms_fungi/oct98.html" },
    { name: "Salish Mushrooms - Oyster Mushrooms in the PNW", url: "https://salishmushrooms.com/mushrooms/pleurotus/" }
  ]
}
,
{
  id: "pleurotus-populinus",
  commonNames: ["Aspen oyster", "Aspen oyster mushroom", "Spring oyster", "Poplar oyster"],
  scientific: "Pleurotus populinus",
  family: "Pleurotaceae",
  order: "Agaricales",
  trophicMode: "saprotrophic",
  mycorrhizalPartners: null,
  hostTrees: [
    { common: "Quaking aspen", scientific: "Populus tremuloides" },
    { common: "Black cottonwood", scientific: "Populus trichocarpa" }
  ],
  substrate: "Dead, dying, and occasionally living wood of trees in the genus Populus: standing snags, fallen logs, stumps, and large branches. A white-rot wood-decay fungus that produces dense, shelf-like clusters and can eventually kill weakened host trees. Strongly host-specific to aspen, with occasional collections on black cottonwood and (rarely) eastern cottonwood.",
  habitat: "Shelf-like, overlapping clusters on standing dead trunks, snags, downed logs, and stumps of quaking aspen and (less commonly) black cottonwood, in pure aspen groves and mixed aspen-conifer forest. In the Pacific Northwest, this is fundamentally an east-of-the-Cascades / interior species, common in aspen parklands and montane aspen stands of eastern Washington, eastern Oregon, the Okanagan, Cariboo-Chilcotin, and British Columbia interior. Also occurs in subalpine aspen groves of the Cascades, Blue Mountains, and Wallowas. A spring-summer fruiter that takes the seasonal niche held by P. ostreatus in fall/winter; flushes are triggered by warming temperatures combined with substantial spring or early-summer rains.",
  elevationM: { min: 300, max: 2500 },
  regionsPNW: ["Eastern Washington", "Okanogan Highlands", "Blue Mountains", "Wallowa Mountains", "Eastern Oregon", "Cascade east slope", "British Columbia interior", "Okanagan Valley", "Cariboo-Chilcotin", "Northern Rockies", "Idaho Panhandle"],
  fruitingMonths: [5, 6, 7, 8, 9],
  peakMonths: [6, 7],
  conditions: {
    minRain7d: 15,
    idealDaysSinceRain: [3, 10],
    tempRangeC: [10, 24],
    humidityMinPct: 70
  },
  identification: {
    cap: "Oyster shell- to fan-shaped; 4-19 cm broad by 4-13 cm wide (occasionally up to 25 cm); smooth, dry; ivory white to pinkish buff to pale orange-grey, generally paler than P. ostreatus; cap margin initially inrolled, becoming finely scalloped or wavy in age.",
    underside: "Decurrent gills running a short way down the stub of the stem (less strongly decurrent than P. ostreatus); 3-10 mm broad, white to cream-colored, close to nearly distant, with two sets of intervening lamellulae.",
    stem: "Lateral or nearly absent, 0.5-3 cm long by 0.5-2 cm wide, short and stubby, pale-colored, smooth or with fine hairs/fluff at the fused base of clustered fruitings.",
    fleshColor: "White, thick at the base, thinning toward the margin; does not bruise.",
    sporePrintColor: "White to buff (slightly more cream/buff than the white-to-lilac print of P. ostreatus); a useful microcharacter for separation from the P. ostreatus complex.",
    odor: "Pleasant, often with a distinct anise or almond-like aroma when very fresh; may become less pronounced or develop off odors with age.",
    sizeCm: "Caps typically 5-20 cm; clusters often 20-40 cm across and several kilograms in mass on large aspen logs."
  },
  edibility: "choice",
  toxicityNotes: "Considered choice and safe to eat when cooked. As with all oyster mushrooms, raw or undercooked specimens may cause mild GI upset in some individuals; commercial cultivators have rarely reported respiratory sensitization to dense spore loads. Older specimens are commonly infested with beetle larvae and should be inspected before harvest.",
  lookalikes: [
    { name: "Oyster mushroom", scientific: "Pleurotus ostreatus", danger: "edible", distinguishingFeature: "Generally darker grey-brown to tan cap, white-to-lilac spore print, fruits in cool months (fall through early spring), more strongly decurrent gills; on a wide range of hardwoods rather than restricted to Populus." },
    { name: "Lung oyster", scientific: "Pleurotus pulmonarius", danger: "edible", distinguishingFeature: "Thinner, lung-shaped pale cap; white-to-lilac spore print; warm-season fruiter but found on many hardwoods (and PNW conifers); slightly smaller and more delicate." },
    { name: "Angel wings", scientific: "Pleurocybella porrigens", danger: "deadly", distinguishingFeature: "Pure white, very thin and fragile flesh; grows exclusively on conifer wood (hemlock, spruce, fir); smaller (2-10 cm); implicated in fatal encephalopathy especially in people with kidney impairment." },
    { name: "Mock oyster", scientific: "Phyllotopsis nidulans", danger: "inedible", distinguishingFeature: "Bright orange to salmon-pink hairy cap, foul cabbage- or sulfur-like odor, pinkish spore print." },
    { name: "Olive oysterling", scientific: "Sarcomyxa serotina", danger: "edible", distinguishingFeature: "Olive to greenish-yellow cap with gelatinous surface, short orange-yellow stubby stem; cool-season fruiter on hardwoods, requires thorough cooking." },
    { name: "Bear lentinellus", scientific: "Lentinellus ursinus", danger: "GI-upset", distinguishingFeature: "Gills with jagged/serrate edges, finely hairy reddish-brown cap, intensely bitter taste." },
    { name: "Crepidotus species", scientific: "Crepidotus spp.", danger: "inedible", distinguishingFeature: "Much smaller (typically <5 cm), brown spore print, soft and rubbery, no stem at all." }
  ],
  culinary: {
    flavor: "Mild, sweet, savory and slightly nutty, with a delicate anise or almond aroma when very fresh; texture is tender and somewhat more delicate than P. ostreatus, more prone to bruising and breakage during harvest.",
    preparation: "Harvest young, firm specimens with white gills and bug-free flesh. Tear or slice along the natural grain and saute in butter or olive oil over medium-high heat until edges crisp; the anise note pairs well with cream, white wine, shallots, leeks, tarragon, and lemon. Excellent in spring vegetable risottos, omelets, pasta, and on toast. Always cook thoroughly.",
    preservation: "Dehydrate at 45-55 C until cracker-dry and store airtight; sauteed mushrooms freeze well for up to 6 months. Less suitable than P. ostreatus for long storage because of the thinner, more delicate flesh."
  },
  conservationNotes: "Not of conservation concern: common to abundant throughout its range wherever aspen and cottonwood are present, and not currently threatened. Sustainable to forage by cutting at the base with a knife and leaving the wood substrate intact; the same logs and snags often produce repeat flushes for multiple seasons. Aspen stands themselves are in decline in parts of the interior West due to fire suppression, ungulate browsing, and climate stress (Sudden Aspen Decline), which may locally reduce habitat over time.",
  sources: [
    { name: "MushroomExpert.com - Pleurotus populinus by Michael Kuo", url: "https://www.mushroomexpert.com/pleurotus_populinus.html" },
    { name: "Wikipedia - Pleurotus populinus", url: "https://en.wikipedia.org/wiki/Pleurotus_populinus" },
    { name: "University of Tennessee-Knoxville Mycology Lab - Biological Species in Pleurotus: ISG III. Pleurotus populinus (Petersen & Hughes)", url: "http://www.bio.utk.edu/mycology/Pleurotus/Species/P_populinus.htm" },
    { name: "Midwest American Mycological Information - Pleurotus ostreatus / populinus / pulmonarius comparison", url: "https://midwestmycology.org/pleurotus-ostreatus/" },
    { name: "Hilber O. & Miller O.K. (1993) - original species description, Mycotaxon", url: "http://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=361394" }
  ]
}
,
{
  id: "pleurotus-pulmonarius",
  commonNames: ["Lung oyster", "Summer oyster", "Pale oyster", "Indian oyster", "Italian oyster", "Phoenix mushroom"],
  scientific: "Pleurotus pulmonarius",
  family: "Pleurotaceae",
  order: "Agaricales",
  trophicMode: "saprotrophic",
  mycorrhizalPartners: null,
  hostTrees: [
    { common: "Red alder", scientific: "Alnus rubra" },
    { common: "Bigleaf maple", scientific: "Acer macrophyllum" },
    { common: "Black cottonwood", scientific: "Populus trichocarpa" },
    { common: "Quaking aspen", scientific: "Populus tremuloides" },
    { common: "Willow", scientific: "Salix spp." },
    { common: "Vine maple", scientific: "Acer circinatum" },
    { common: "Pacific dogwood", scientific: "Cornus nuttallii" }
  ],
  substrate: "Dead and dying hardwood: standing snags, fallen logs, stumps, and large branches; white-rot wood-decay fungus that decomposes lignin in deciduous wood. In the western US (including the PNW) it is also reported from conifer wood on occasion. Most 'oyster' collections from PNW hardwoods in warm months are this species rather than P. ostreatus s.s.",
  habitat: "Shelf-like, shingled clusters on hardwood stumps, logs, snags, and broken branches in moist deciduous and mixed forests, particularly riparian corridors along rivers, streams, and wetlands where alder, cottonwood, and maple dominate. P. pulmonarius is the warm-season/summer-fruiting member of the Pleurotus ostreatus species complex: it prefers warmer temperatures and fruits from late spring through early autumn following soaking rains and warm humid spells, whereas P. ostreatus s.s. and P. populinus occupy the cold (late fall through spring) and aspen-specialist niches respectively.",
  elevationM: { min: 0, max: 1500 },
  regionsPNW: ["Western Washington", "Western Oregon", "Coastal British Columbia", "Puget Sound lowlands", "Willamette Valley", "Olympic Peninsula", "Columbia River Gorge", "Vancouver Island", "Cascade foothills"],
  fruitingMonths: [4, 5, 6, 7, 8, 9, 10],
  peakMonths: [6, 7, 8, 9],
  conditions: {
    minRain7d: 15,
    idealDaysSinceRain: [3, 8],
    tempRangeC: [12, 25],
    humidityMinPct: 75
  },
  identification: {
    cap: "Lung-, fan-, or semicircular shell-shaped; 2-12 cm (occasionally to 20 cm) across; smooth, dry to slightly moist, not viscid; distinctly paler than P. ostreatus - whitish, cream, pale buff, or pale tan, sometimes faintly grey-brown only at the disc; margin inrolled when young, becoming wavy or lobed.",
    underside: "White to cream decurrent gills running down onto the stem or attachment; close to nearly distant; short-gills frequent; edges smooth (not serrate).",
    stem: "Lateral to eccentric, sometimes nearly absent; when present, more developed than in P. ostreatus - up to 3 cm long and often visible as a short, off-center white stub, frequently hairy/fluffy at the base where clusters fuse.",
    fleshColor: "White, thinner and more delicate than P. ostreatus; does not stain on bruising.",
    sporePrintColor: "White to pale lilac-grey or pale grey (less consistently lilac than P. ostreatus).",
    odor: "Pleasant, faintly sweet/anise-like 'oyster' smell, generally milder than P. ostreatus.",
    sizeCm: "Caps 2-12 cm wide (rarely to 20 cm); shingled clusters often 20-30 cm across."
  },
  edibility: "choice",
  toxicityNotes: "Generally safe and one of the most cultivated oyster species worldwide; raw or undercooked specimens may cause mild GI upset in sensitive individuals. Heavy spore exposure can trigger respiratory hypersensitivity (oyster mushroom worker's lung) in commercial growers. Always cook thoroughly and inspect older specimens for beetle larvae.",
  lookalikes: [
    { name: "Angel wings", scientific: "Pleurocybella porrigens", danger: "deadly", distinguishingFeature: "Pure white, thin and fragile flesh; restricted to conifer wood (especially western hemlock); smaller and more delicate; implicated in fatal encephalopathy. Habitat (conifer vs hardwood) is the key separator." },
    { name: "Pearl oyster", scientific: "Pleurotus ostreatus", danger: "edible", distinguishingFeature: "Darker grey-brown to tan cap when young, thicker flesh, cold-season fruiter (late autumn through early spring) triggered by frost; not dangerous, just a sister species." },
    { name: "Aspen oyster", scientific: "Pleurotus populinus", danger: "edible", distinguishingFeature: "Restricted to Populus wood (quaking aspen, black cottonwood); macroscopically nearly indistinguishable - separation is primarily by host tree and mating-group sterility." },
    { name: "Mock oyster", scientific: "Phyllotopsis nidulans", danger: "inedible", distinguishingFeature: "Bright orange to salmon-pink hairy/tomentose cap, fetid cabbage-like odor, pinkish spore print." },
    { name: "Western jack-o'-lantern", scientific: "Omphalotus olivascens", danger: "toxic", distinguishingFeature: "Orange to olive-orange throughout, true central stem, grows on hardwood roots/stumps (rare in PNW); muscarine causes severe GI distress." },
    { name: "Bear lentinus / toxic sawgill", scientific: "Lentinellus ursinus", danger: "GI-upset", distinguishingFeature: "Gills with conspicuously jagged/serrate edges, finely hairy cap surface, intensely bitter taste." },
    { name: "Veiled oyster", scientific: "Pleurotus dryinus", danger: "edible", distinguishingFeature: "Larger, has a partial veil leaving a ring zone and veil remnants on the cap margin, thicker more central stem." },
    { name: "Elm oyster", scientific: "Hypsizygus ulmarius", danger: "edible", distinguishingFeature: "True central (not lateral) stem, gills adnate rather than decurrent, fruits from wounds high on living hardwoods." }
  ],
  culinary: {
    flavor: "Mild, sweet-savory with a delicate anise note; tender and slightly more refined than P. ostreatus due to thinner flesh; one of the warm-season choice edibles in the PNW.",
    preparation: "Tear into strips along the natural grain and saute in butter or oil over moderately high heat until edges crisp; excellent in stir-fries, cream sauces, risotto, soups, pastas, and as a meat substitute. Pairs well with garlic, shallots, thyme, and white wine. Always cook thoroughly; trim any tough basal portions and inspect older specimens for beetle larvae.",
    preservation: "Dehydrate at 45-55 C until cracker-dry and store airtight; reconstitute in warm water. Sauteed mushrooms freeze well for up to 6 months. Can also be pickled or powdered for stocks; not suitable for raw preservation."
  },
  conservationNotes: "Not of conservation concern: globally widespread, common on hardwood debris throughout the PNW, and among the most heavily cultivated edible mushrooms in the world. Harvest sustainably by cutting at the base and leaving the substrate intact to allow repeat flushes from the same wood.",
  sources: [
    { name: "MushroomExpert.com - Pleurotus pulmonarius by Michael Kuo", url: "https://www.mushroomexpert.com/pleurotus_pulmonarius.html" },
    { name: "Pacific Northwest Key Council - Trial Field Key to Pleurotoid Species (Ian Gibson)", url: "https://www.svims.ca/council/Pleuro.htm" },
    { name: "Mushrooms Up! Edible and Poisonous Species of Coastal BC and the PNW (UBC Beaty Museum) - Pleurotus pulmonarius", url: "https://explore.beatymuseum.ubc.ca/mushroomsup/P_pulmonarius.html" },
    { name: "MykoWeb - Pleurotus pulmonarius (California Fungi)", url: "http://www.mykoweb.com/CAF/species/Pleurotus_pulmonarius.html" },
    { name: "Burke Herbarium Image Collection - Pleurotus pulmonarius", url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Pleurotus+pulmonarius" },
    { name: "Vilgalys, R. et al. (1993) Intersterility groups in the Pleurotus ostreatus complex", url: "https://cdnsciencepub.com/doi/10.1139/b93-013" }
  ]
}
,
{
  id: "polyozellus-multiplex",
  commonNames: ["Blue Chanterelle", "Black Chanterelle", "Clustered Blue Chanterelle", "Bluefan", "Purple Chanterelle"],
  scientific: "Polyozellus multiplex",
  family: "Thelephoraceae",
  order: "Thelephorales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Picea", "Abies", "Tsuga"],
  hostTrees: [
    { common: "Sitka spruce", scientific: "Picea sitchensis" },
    { common: "Engelmann spruce", scientific: "Picea engelmannii" },
    { common: "Pacific silver fir", scientific: "Abies amabilis" },
    { common: "Subalpine fir", scientific: "Abies lasiocarpa" },
    { common: "Noble fir", scientific: "Abies procera" },
    { common: "Mountain hemlock", scientific: "Tsuga mertensiana" }
  ],
  substrate: "Soil, duff, and moss in old-growth coniferous forest; terrestrial among needle litter",
  habitat: "Mature to old-growth montane and subalpine coniferous forests dominated by spruce and true fir; frequently in mossy duff. Considered an indicator of undisturbed, mature forest ecosystems.",
  elevationM: { min: 800, max: 2000 },
  regionsPNW: ["Coastal Alaska", "British Columbia", "Cascades (WA)", "Olympic Peninsula", "Cascades (OR)", "Northern California (Klamath/Siskiyou)"],
  fruitingMonths: [7, 8, 9, 10, 11],
  peakMonths: [9, 10],
  conditions: { minRain7d: 25, idealDaysSinceRain: [4, 12], tempRangeC: [5, 16], humidityMinPct: 75 },
  identification: {
    cap: "Clusters of vase- or spoon-shaped, depressed to funnel-form caps 2-5 cm wide (clusters up to 15+ cm across); wavy/lobed margin; dry matte surface; deep indigo-blue to violet-black to purplish-gray, often with a glaucous sheen and paler edges",
    underside: "Veined/wrinkled fertile surface (not true gills) running down the stem; concolorous with cap or slightly paler bluish-gray; produces warty white spores",
    stem: "Short, often fused with adjacent caps in dense clusters; bluish-black to purple-black; 1-3 cm long",
    fleshColor: "Deep purple to violet-black throughout; reacts blackish-green with KOH",
    sporePrintColor: "White (spores warty under microscope)",
    odor: "Pleasant, mild, aromatic and earthy; sometimes salty-mushroomy",
    sizeCm: "Individual caps 2-5 cm wide; clusters commonly 10-20 cm across"
  },
  edibility: "edible",
  toxicityNotes: "No known toxicity. Contains the bioactive compound polyozellin, studied for chemopreventive (anti-stomach-cancer) and anti-inflammatory properties. Some sources rate flavor as choice while MykoWeb calls it 'edible but mediocre'.",
  lookalikes: [
    { name: "Black Trumpet", scientific: "Craterellus cornucopioides", danger: "edible", distinguishingFeature: "Thin-fleshed, hollow trumpet; smooth to slightly wrinkled (not strongly veined) underside; grayish-black to brown, not blue-purple; broadleaf associate, not in subalpine conifer duff" },
    { name: "Pig's Ear", scientific: "Gomphus clavatus", danger: "edible", distinguishingFeature: "Lilac to purplish ridged underside but cap is tan to ochre-brown (not blue-black); grows in arcs/troops rather than fused clusters" },
    { name: "Violet-toothed Polypore", scientific: "Trichaptum abietinum", danger: "inedible", distinguishingFeature: "Thin tough purple-edged bracket on dead conifer wood (not terrestrial); tooth-like pore surface" },
    { name: "Earth Fan", scientific: "Thelephora terrestris", danger: "inedible", distinguishingFeature: "Brown to dark-brown fan-shaped clusters; lacks blue-purple coloration; smooth/warted underside, not deeply veined-decurrent" },
    { name: "Bitter Bolete relative / Boletopsis", scientific: "Boletopsis grisea", danger: "inedible", distinguishingFeature: "Pored (not veined) underside; grayish cap without blue tones; bitter taste" }
  ],
  culinary: {
    flavor: "Rich, meaty, savory; described as a cross between golden chanterelle and black trumpet with a deeper, more aromatic profile; flesh retains dark color when cooked",
    preparation: "Clean carefully (clusters trap duff); dry-sauté to release moisture, then finish in butter; excellent in cream sauces, risotto, with eggs, and in fine-dining preparations; pairs well with delicate proteins to showcase its color and flavor",
    preservation: "Dries well and retains aroma; also good for use in herbal/mushroom dye (yields blue-gray to dark gray on wool with iron mordant)"
  },
  conservationNotes: "Considered uncommon to rare; tightly tied to old-growth spruce-fir forests, making it sensitive to logging and habitat loss. Now recognized as a species complex (Voitk et al. 2017 described four additional cryptic species). Harvest sustainably and avoid disturbing duff layer; report sightings via iNaturalist/Mushroom Observer to support distribution data.",
  sources: [
    { name: "MushroomExpert.com - Polyozellus multiplex", url: "https://www.mushroomexpert.com/polyozellus_multiplex.html" },
    { name: "MykoWeb California Fungi - Polyozellus multiplex", url: "https://www.mykoweb.com/CAF/species/Polyozellus_multiplex.html" },
    { name: "Burke Herbarium Image Collection - Polyozellus multiplex", url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Polyozellus+multiplex" },
    { name: "Voitk et al. 2017 - Polyozellus multiplex is a species complex containing four new species (Mycologia)", url: "https://www.researchgate.net/profile/Viacheslav_Spirin/publication/321804909_Polyozellus_multiplex_Thelephorales_is_a_species_complex_containing_four_new_species" },
    { name: "Lee & Nishikawa 2003 - Polyozellus multiplex as a chemopreventive agent against stomach cancer (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/14561527" },
    { name: "Pilz et al. 2003 - Ecology and management of commercially harvested chanterelle mushrooms (USFS PNW-GTR-576)", url: "http://www.fs.fed.us/pnw/pubs/pnw_gtr576.pdf" },
    { name: "Wikipedia - Polyozellus multiplex", url: "https://en.wikipedia.org/wiki/Polyozellus_multiplex" }
  ]
}
,
{
  id: "ramaria-botrytis",
  commonNames: ["Pink-tipped Coral", "Red-tipped Coral", "Clustered Coral", "Cauliflower Coral", "Pink-tipped Coral Mushroom"],
  scientific: "Ramaria botrytis",
  family: "Gomphaceae",
  order: "Gomphales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Pseudotsuga menziesii", "Abies", "Picea", "Tsuga", "Fagus", "Quercus"],
  hostTrees: [
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Pacific silver fir", scientific: "Abies amabilis" },
    { common: "Grand fir", scientific: "Abies grandis" },
    { common: "Subalpine fir", scientific: "Abies lasiocarpa" },
    { common: "Engelmann spruce", scientific: "Picea engelmannii" },
    { common: "Sitka spruce", scientific: "Picea sitchensis" },
    { common: "Western hemlock", scientific: "Tsuga heterophylla" }
  ],
  substrate: "Deep conifer duff, humus, and well-drained loamy or calcareous forest soils; often partially buried with a stout, rooting base attached to mycelium under leaf/needle litter",
  habitat: "Ectomycorrhizal coral fungus forming dense, cauliflower-like fruitbodies on the ground under conifers (especially Douglas-fir, true firs, spruce, and hemlock) and under beech/oak where available; fruits singly, scattered, or in small clusters in mature, moist, shaded forests, often along trails, slopes, and old skid roads in late summer through fall after sustained rains.",
  elevationM: { min: 100, max: 1800 },
  regionsPNW: ["Cascades", "Olympics", "Coast Range", "Vancouver Island", "Puget Sound lowlands", "Blue Mountains", "Northern California Klamath", "Rocky Mountains (Idaho/Montana)"],
  fruitingMonths: [8, 9, 10, 11],
  peakMonths: [9, 10],
  conditions: {
    minRain7d: 25,
    idealDaysSinceRain: [7, 14],
    tempRangeC: [6, 18],
    humidityMinPct: 80
  },
  identification: {
    cap: "Branch tips: densely packed, short, cauliflower-like, terminating in 5-7 small branchlets; vivid pink, vinaceous-red, magenta, or purplish-red when young, fading to pinkish-tan, buff, or ochraceous with age; primary branches thick (2-3 cm wide), smooth to slightly wrinkled, whitish to pale cream, discoloring yellowish or brownish where bruised or aged",
    underside: "No gills, pores, or teeth - hymenium is smooth and spread over the surface of the upper branches; not differentiated from the branch surface",
    stem: "Stout, fleshy, fused base 3-6 cm wide and 2-6 cm long, whitish to creamy, often partially buried and rooting into the duff; compact and not bruising on handling; primary branches diverge from the single thick base in a clustered, cauliflower-like form",
    fleshColor: "White, firm, thick, unchanging when cut; iron salts (FeSO4) turn green on the branch tips",
    sporePrintColor: "Pale yellowish to ochraceous-buff",
    odor: "Mild and pleasant, often described as faintly fruity or sweet (sometimes likened to strawberry candy); taste mild to slightly bitter at the tips",
    sizeCm: "Fruitbody 7-22 cm tall and 6-30 cm wide overall; base 2-6 cm thick"
  },
  edibility: "edible-when-cooked",
  toxicityNotes: "One of the few Ramaria species considered a worthwhile edible, but MUST be correctly identified - many other Ramaria species cause significant gastrointestinal distress (cramping, nausea, diarrhea, vomiting). Even R. botrytis can cause mild GI upset in sensitive individuals, when undercooked, or when eaten in quantity; bitter branch tips are best trimmed off and the fleshy base used. Always cook thoroughly, sample a small portion the first time, and avoid older specimens with fading tips that can be confused with toxic look-alikes.",
  lookalikes: [
    { name: "Beautiful Coral / Yellow-tipped Coral", scientific: "Ramaria formosa", danger: "GI-upset", distinguishingFeature: "Branches are more uniformly salmon-pink with distinctly yellow tips (not vinaceous-red); thinner, more jagged branches; well-known cause of severe GI distress (nausea, vomiting, diarrhea); often smells unpleasant" },
    { name: "Pink-tipped Coral (look-alike)", scientific: "Ramaria botrytoides", danger: "GI-upset", distinguishingFeature: "Macroscopically very similar; reliably separated only by smooth (non-striate) spores under microscope; reported to cause GI upset" },
    { name: "Fading-pink Coral", scientific: "Ramaria rubrievanescens", danger: "edible-with-caution", distinguishingFeature: "Pink tips fade rapidly after picking or with maturity; typically under spruce; larger spores 9.0-15.5 x 4.2-6.8 microns; edibility uncertain" },
    { name: "Persistent-pink Coral", scientific: "Ramaria rubripermanens", danger: "edible-with-caution", distinguishingFeature: "Pink tips persist; usually under beech/spruce; shorter spores (9-13 x 3.5-5.0 microns); generally considered edible but easily confused with toxic relatives" },
    { name: "Coral-pink Coral", scientific: "Ramaria subbotrytis", danger: "edible-with-caution", distinguishingFeature: "Branches uniformly bright coral-pink to reddish throughout (not white base + pink tips); smaller spores (7-9 x 3-3.5 microns)" },
    { name: "Salmon Coral", scientific: "Ramaria araiospora", danger: "edible", distinguishingFeature: "Grows under western hemlock in PNW; reddish to magenta branches with orange or yellowish tips; lacks any discernible odor; warted cylindrical spores" },
    { name: "Strict-branch Coral", scientific: "Ramaria stricta", danger: "inedible", distinguishingFeature: "Slender, parallel vertical branches (not cauliflower-clustered); pale tan to vinaceous-brown without bright pink tips; grows on dead wood/buried wood; bitter taste, unpleasant odor" },
    { name: "Bitter-tasting Coral", scientific: "Ramaria pallida", danger: "toxic", distinguishingFeature: "Branch tips grey-lilac at maturity; pale overall coloration without pink-red tips; reported to cause significant GI distress and laxative effects" },
    { name: "Violet-branched Coral", scientific: "Ramaria fennica", danger: "GI-upset", distinguishingFeature: "Longer branches with violet, brown-violet, or lilac/olivaceous tones; typically with oak/chestnut; causes GI upset" }
  ],
  culinary: {
    flavor: "Mild, slightly nutty and sweet flesh with firm, almost crunchy texture; the fleshy base is the prized part - branch tips can be slightly bitter and are often trimmed",
    preparation: "Use only young, firm specimens with vivid pink tips. Clean carefully (duff and grit cling to the base), trim away the tips, and slice the fleshy base. Saute in butter, add to soups, stews, or pasta; pairs well with cream, garlic, and herbs. Cook thoroughly - never eat raw or undercooked. Sample a small portion the first time.",
    preservation: "Excellent for preserving in oil (sott'olio) and pickling; can be dried, though texture suffers; freezes well after blanching or sauteing"
  },
  conservationNotes: "Globally widespread and not formally threatened, but red-listed and considered locally rare in several European countries (e.g., status E - endangered in Poland) due to habitat loss in mature forests. In the PNW it is uncommon but not protected. Harvest sparingly from mature forest sites; leave older specimens to sporulate and avoid disturbing the duff and rooting base.",
  sources: [
    { name: "MushroomExpert.com - Ramaria botrytis (Michael Kuo)", url: "https://www.mushroomexpert.com/ramaria_botrytis.html" },
    { name: "Pacific Northwest Key Council - Keys to Mushrooms of the Pacific Northwest", url: "https://keycouncil.svims.club/" },
    { name: "Ultimate Mushroom Guide - Ramaria botrytis", url: "https://ultimate-mushroom.com/edible/257-ramaria-botrytis.html" },
    { name: "GBIF - Ramaria botrytis (Pers.) Bourdot occurrence and taxonomy", url: "https://www.gbif.org/species/7486196" },
    { name: "Wikipedia - Ramaria stricta (for lookalike reference)", url: "https://en.wikipedia.org/wiki/Ramaria_stricta" },
    { name: "AMINT - Ramaria botrytis monograph (similar species, ecology)", url: "https://www.funghiitaliani.it/topic/16784-ramaria-botrytis-pers-fr-ricken-1918" }
  ]
}
,
{
  id: "ramaria-rasilispora",
  commonNames: ["Yellow Coral", "Spring Coral", "Yellow Spring Coral", "Smooth-spored Yellow Coral"],
  scientific: "Ramaria rasilispora",
  family: "Gomphaceae",
  order: "Gomphales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Abies", "Pseudotsuga menziesii", "Picea", "Tsuga", "Pinus"],
  hostTrees: [
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "White fir", scientific: "Abies concolor" },
    { common: "Grand fir", scientific: "Abies grandis" },
    { common: "Pacific silver fir", scientific: "Abies amabilis" },
    { common: "Subalpine fir", scientific: "Abies lasiocarpa" },
    { common: "Engelmann spruce", scientific: "Picea engelmannii" },
    { common: "Western hemlock", scientific: "Tsuga heterophylla" },
    { common: "Ponderosa pine", scientific: "Pinus ponderosa" }
  ],
  substrate: "Mineral soil and conifer duff under mixed conifer stands; often emerges from beneath needle litter at or near melting snowbanks",
  habitat: "Ectomycorrhizal with true firs (Abies) and Douglas-fir in mid- to high-elevation mixed conifer forests of the western mountains. A 'snowbank' species fruiting in spring and early summer along receding snow lines, often pushing up through duff and disturbing the forest floor in scattered to gregarious troops, sometimes in arcs or partial rings. Two varieties recognized by Marr & Stuntz (1973): var. rasilispora (chartreuse-yellow tipped, buffy yellow branches) and var. scatesiana (paler cream to pale yellow with greenish tones).",
  elevationM: { min: 800, max: 2400 },
  regionsPNW: ["Cascades", "Eastern Cascades", "Blue Mountains", "Wallowa Mountains", "Olympics (higher elevations)", "Rocky Mountains (Idaho/Montana)", "Sierra Nevada (northern)", "Klamath Mountains"],
  fruitingMonths: [4, 5, 6, 7],
  peakMonths: [5, 6],
  conditions: {
    minRain7d: 15,
    idealDaysSinceRain: [3, 14],
    tempRangeC: [3, 18],
    humidityMinPct: 70
  },
  identification: {
    cap: "Coral-like, repeatedly branched fruiting body; broadly cauliflower-shaped to dome-like when young, becoming more open with age; tips pastel chartreuse-yellow to bright yellow, sometimes blushing onion-skin pink when exposed to cold dry air and darkening to brownish in age; branches buffy yellow, pale ochraceous yellow to fleshy buff; overall a robust, fleshy yellow coral",
    underside: "Not applicable - hymenium covers smooth outer surfaces of upright branches rather than gills or pores",
    stem: "Single, stout, massive white basal stipe (base) tapering downward, 3-6 cm tall x 2.5-5.5 cm wide; whitish and unchanging when cut or bruised; lower branches thick, dividing into ascending upper branches with rounded yellow tips",
    fleshColor: "White throughout in base and branches; firm and fleshy when young, becoming softly stringy with age; does not stain or bruise notably",
    sporePrintColor: "Pale ochre to yellowish",
    odor: "Mild to absent, occasionally faintly unpleasant; taste mild and pleasant",
    sizeCm: "Overall 5-15 cm tall x 6-15 cm wide; large robust specimens up to 20 cm across"
  },
  edibility: "edible",
  toxicityNotes: "Considered a good edible and one of the best PNW coral mushrooms when collected young, firm, and white-fleshed. As with all Ramaria, eat in moderation and cook thoroughly - even edible yellow corals can cause mild GI upset in sensitive individuals or when overconsumed. Avoid older or waterlogged specimens. Critical to distinguish from R. flavigelatinosa and other yellow Ramaria that cause GI distress.",
  lookalikes: [
    { name: "Jellied False Coral / Gelatinous-fleshed Yellow Coral", scientific: "Ramaria flavigelatinosa", danger: "GI-upset", distinguishingFeature: "Branch flesh distinctly gelatinous/translucent when cut (use hand lens on cross-section); often fruits in fall rather than spring; causes GI upset in many people" },
    { name: "Beautiful Coral / Salmon Coral", scientific: "Ramaria formosa (sensu lato, western)", danger: "GI-upset", distinguishingFeature: "Pink to salmon-orange branches with yellow tips (not yellow throughout); summer/fall fruiting; well-known laxative effect" },
    { name: "Golden Coral", scientific: "Ramaria aurea", danger: "edible-with-caution", distinguishingFeature: "Deeper egg-yolk gold to orange-yellow throughout including branches; fall fruiting under hardwoods/conifers; warty (not smooth) spores; reports of GI upset in some" },
    { name: "Yellow-tipped Coral", scientific: "Ramaria flava", danger: "edible-with-caution", distinguishingFeature: "More lemon-yellow branches with paler tips; flesh stains brownish or wine when cut; fall fruiting; reports of mild GI upset" },
    { name: "Large-footed Coral", scientific: "Ramaria magnipes", danger: "edible", distinguishingFeature: "Very similar pale yellow spring coral with a similarly massive base; distinguished by longer spores (Marr & Stuntz monograph) - microscopy required for certain ID" },
    { name: "Strict-branched Coral", scientific: "Ramaria stricta", danger: "GI-upset", distinguishingFeature: "Tightly parallel upright branches, ochre-tan to pale yellowish, grows on wood/buried wood (saprotrophic), bitter taste, bruises brown" },
    { name: "Cauliflower Mushroom", scientific: "Sparassis radicata", danger: "edible", distinguishingFeature: "Flattened wavy ribbon-like 'noodles' rather than rounded branch tips; cream to pale yellow; at base of conifers; choice edible" }
  ],
  culinary: {
    flavor: "Mild, pleasantly mushroomy, slightly sweet; firm meaty texture when young; some PNW foragers rate spring yellow Ramaria above morels and spring kings in flavor",
    preparation: "Use only young, firm, white-fleshed specimens; trim away any soft, discolored, or insect-damaged tissue. Brush clean (avoid soaking - they hold water). Cut into bite-size pieces and dry-saute to release moisture, then finish with butter, garlic, shallots, and salt. Excellent in cream sauces, pasta, scrambled eggs, soups, and Asian-style stir-fries. Always cook thoroughly and try a small portion the first time. Eat in moderation.",
    preservation: "Best sauteed and frozen; dehydrates acceptably but texture becomes brittle. Can also be pickled when young and firm."
  },
  conservationNotes: "Locally common in suitable spring snowmelt habitat across the interior PNW and Rocky Mountains; no formal conservation concern. As an ectomycorrhizal symbiont of mature true fir and Douglas-fir, populations depend on intact mixed conifer forest. Harvest sustainably by cutting at the base and leaving small, immature, or post-mature specimens; avoid raking or disturbing duff and snowmelt zones where mycelium is active.",
  sources: [
    { name: "Pacific Northwest Key Council - Trial Field Key to Ramaria (SVIMS)", url: "https://www.svims.ca/council/Ramar1.htm" },
    { name: "Burke Herbarium Image Collection - Ramaria rasilispora var. rasilispora", url: "http://biology.burke.washington.edu/herbarium/imagecollection/taxon.php?Taxon=Ramaria+rasilispora+var.+rasilispora" },
    { name: "Marr, C.D. & Stuntz, D.E. (1973). Ramaria of Western Washington. Bibliotheca Mycologica 38. J. Cramer (monograph - original description)", url: "https://www.gbif.org/species/5238550" },
    { name: "GBIF - Ramaria rasilispora Marr & D.E.Stuntz", url: "https://www.gbif.org/species/5238550" },
    { name: "Practical Self Reliance - Foraging Coral Mushrooms (Ramaria & Artomyces)", url: "https://practicalselfreliance.com/coral-mushrooms/" },
    { name: "Forager Chef (Alan Bergo) - Thoughts on Ramarias / Coral Mushrooms", url: "https://foragerchef.com/thoughts-on-ramarias-coral-mushrooms/" },
    { name: "Mushroom Observer - Observation 204620: Ramaria rasilispora (Cascades, Washington)", url: "https://mushroomobserver.org/204620" }
  ]
}
,
{
  id: "russula-brevipes",
  commonNames: [
    "Short-stemmed Russula",
    "Short-stalked White Russula",
    "Stubby Brittlegill",
    "Lobster Mushroom Host"
  ],
  scientific: "Russula brevipes",
  family: "Russulaceae",
  order: "Russulales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: [
    "Pseudotsuga menziesii (Douglas-fir)",
    "Tsuga heterophylla (Western Hemlock)",
    "Abies spp. (true firs)",
    "Picea spp. (spruce)",
    "Pinus ponderosa (Ponderosa Pine)"
  ],
  hostTrees: [
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Western Hemlock", scientific: "Tsuga heterophylla" },
    { common: "Grand Fir", scientific: "Abies grandis" },
    { common: "Pacific Silver Fir", scientific: "Abies amabilis" },
    { common: "Sitka Spruce", scientific: "Picea sitchensis" },
    { common: "Ponderosa Pine", scientific: "Pinus ponderosa" }
  ],
  substrate: "Soil and forest duff in mixed and pure conifer stands; often pushes up partially buried (mushrumps) under needle litter.",
  habitat: "Mature conifer forests, especially Douglas-fir/hemlock and fir/spruce stands; appears in scattered to gregarious groups, frequently in fairy-ring-like arcs. Often only the cap edge breaks the duff surface.",
  elevationM: { min: 0, max: 2200 },
  regionsPNW: [
    "Coast Range (OR/WA)",
    "Olympic Peninsula",
    "Puget Sound lowlands",
    "Cascades (west and east slopes)",
    "Willamette Valley foothills",
    "Southern Oregon mixed-conifer",
    "Coastal British Columbia",
    "Northern Idaho/Inland Northwest"
  ],
  fruitingMonths: [7, 8, 9, 10, 11],
  peakMonths: [9, 10],
  conditions: {
    minRain7d: 20,
    idealDaysSinceRain: [4, 14],
    tempRangeC: [7, 20],
    humidityMinPct: 75
  },
  identification: {
    cap: "7-30 cm wide, convex becoming broadly funnel-shaped (infundibuliform) with a central depression; dry, dull white when young, developing yellowish to dingy buff or brown stains and spots with age; margin inrolled at first then wavy.",
    underside: "Decurrent, close to crowded white gills, often with short subgills (lamellulae); gills frequently have a faint bluish or greenish tint near the stem (especially in var. acrior); bruise slowly yellowish-brown.",
    stem: "Short and stout, 3-8 cm long by 2.5-4 cm thick; white, dry, firm, often partially buried; sometimes shows a pale bluish-green band at the apex (var. acrior).",
    fleshColor: "White, thick, brittle (chalky-snap typical of Russula); unchanging or slowly discoloring brownish.",
    sporePrintColor: "White to pale cream",
    odor: "Mild, faintly fungal or slightly fishy/unpleasant in age; not distinctive.",
    sizeCm: "Cap 7-30 cm; stem 3-8 cm tall x 2.5-4 cm thick"
  },
  edibility: "edible",
  toxicityNotes: "Edible but generally mediocre; taste is often mild to moderately acrid (var. acrior is notably hot/peppery and should be avoided). Best when young, firm, and free of fly larvae. Most significant culinary value is as the primary host of the Lobster Mushroom (Hypomyces lactifluorum), which transforms it into a choice edible.",
  lookalikes: [
    {
      name: "Cascade Russula",
      scientific: "Russula cascadensis",
      danger: "GI-upset",
      distinguishingFeature: "Smaller (usually <10 cm), consistently acrid/peppery taste, stains cinnamon where handled; PNW endemic."
    },
    {
      name: "White and Black Russula",
      scientific: "Russula albonigra",
      danger: "inedible",
      distinguishingFeature: "Flesh and surface blacken (often without the red intermediate) with age or handling; not recommended as edible."
    },
    {
      name: "Blackening Russula",
      scientific: "Russula nigricans / R. dissimulans",
      danger: "inedible",
      distinguishingFeature: "Flesh first reddens then blackens dramatically when cut; widely-spaced thick gills."
    },
    {
      name: "Peppery Milkcap",
      scientific: "Lactifluus piperatus (Lactarius piperatus)",
      danger: "GI-upset",
      distinguishingFeature: "Exudes copious white latex when cut; intensely peppery; also a Hypomyces lactifluorum host."
    },
    {
      name: "Short-stemmed Milkcap",
      scientific: "Lactarius deceptivus",
      danger: "inedible",
      distinguishingFeature: "Cottony roll along cap margin when young; bleeds white latex; acrid."
    },
    {
      name: "Subalpine Waxy Cap",
      scientific: "Hygrophorus subalpinus",
      danger: "edible",
      distinguishingFeature: "Sticky/glutinous cap, waxy non-brittle flesh, lacks Russula's chalky snap; smaller stature."
    },
    {
      name: "Delica Russula",
      scientific: "Russula delica",
      danger: "edible",
      distinguishingFeature: "European species, rare in PNW; very similar morphologically and separable mainly by microscopy."
    }
  ],
  culinary: {
    flavor: "On its own, bland to slightly acrid with a coarse, dense texture; firm and crunchy when young. When parasitized by Hypomyces lactifluorum (Lobster Mushroom), flavor becomes seafood-like, nutty, and richly savory.",
    preparation: "Slice and saute thoroughly to drive off moisture; benefits from strong seasoning, butter, garlic, or use in mixed-mushroom dishes. Always cook well. Discard if larvae-riddled. The lobsterized form is excellent in cream sauces, risottos, and stocks.",
    preservation: "Plain R. brevipes preserves poorly (texture degrades, flavor remains weak). The lobsterized form dries well and can be powdered for use as a stock/seasoning; also takes well to sauteing-and-freezing."
  },
  conservationNotes: "Globally secure (NatureServe). Common and widespread across PNW conifer forests; no harvest restrictions. Considered a species complex - multiple cryptic taxa likely hide under this name pending molecular revision. Important ecologically as both an ectomycorrhizal partner and the obligate host of the economically valuable Lobster Mushroom.",
  sources: [
    { name: "MykoWeb - California Fungi: Russula brevipes", url: "https://www.mykoweb.com/CAF/species/Russula_brevipes.html" },
    { name: "Pacific Northwest Key Council - Trial Field Key to Russula in the PNW (SVIMS)", url: "https://www.svims.ca/council/Russul.htm" },
    { name: "MushroomExpert.com - Hypomyces lactifluorum (Michael Kuo)", url: "https://www.mushroomexpert.com/hypomyces_lactifluorum.html" },
    { name: "Cascade Mycological Society - The Truth about Russula brevipes", url: "https://cascademyco.org/2021/01/the-truth-about-russula-brevipes/" },
    { name: "Alpental / PSMS Pictorial Key - Russula", url: "https://www.alpental.com/psms/PNWMushrooms/PictorialKey/Russula.htm" },
    { name: "Wikipedia - Russula brevipes", url: "https://en.wikipedia.org/wiki/Russula_brevipes" },
    { name: "Wikipedia - Hypomyces lactifluorum (Lobster Mushroom)", url: "https://en.wikipedia.org/wiki/Hypomyces_lactifluorum" }
  ]
}
,
{
  id: "russula-virescens",
  commonNames: ["Green-cracking Russula", "Quilted Green Russula", "Greencracked Brittlegill", "Green Brittlegill"],
  scientific: "Russula virescens",
  family: "Russulaceae",
  order: "Russulales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Quercus garryana", "Quercus kelloggii", "Quercus chrysolepis", "Notholithocarpus densiflorus", "Castanea spp.", "Fagus spp.", "Betula spp.", "Populus tremuloides"],
  hostTrees: [
    { common: "Oregon white oak (Garry oak)", scientific: "Quercus garryana" },
    { common: "California black oak", scientific: "Quercus kelloggii" },
    { common: "Canyon live oak", scientific: "Quercus chrysolepis" },
    { common: "Tanoak", scientific: "Notholithocarpus densiflorus" },
    { common: "Chestnut (planted/introduced)", scientific: "Castanea spp." },
    { common: "Beech (planted/introduced)", scientific: "Fagus spp." },
    { common: "Birch", scientific: "Betula spp." },
    { common: "Quaking aspen", scientific: "Populus tremuloides" }
  ],
  substrate: "Mineral soil and leaf duff beneath hardwoods, typically in well-drained, calcareous or neutral soils of broadleaf and mixed-evergreen woodlands. Fruits singly or gregariously on the ground, often reappearing in the same spots for many years. In the PNW, look in oak duff and along the edges of oak savannas, in mixed-evergreen forests with tanoak and madrone, and occasionally in old plantings of chestnut, beech, or birch in urban parks.",
  habitat: "Ectomycorrhizal with hardwoods - principally oak (Quercus), beech (Fagus), chestnut (Castanea), birch (Betula), and aspen (Populus) in Europe and eastern North America; in western North America Russula virescens sensu lato is uncommon and most likely encountered under native oaks (Garry oak, California black oak, canyon live oak, tanoak) in southern Oregon's mixed-evergreen forests and the Klamath-Siskiyou region, extending south into California oak woodlands. North American material in the 'virescens-crustosa' group is now known to comprise at least a dozen taxa (Buyck et al. 2006); most western collections labeled R. virescens may represent undescribed sister species. Kuo (MushroomExpert.com) notes the species is 'widely distributed east of the Rocky Mountains, and occasionally reported in western North America.'",
  elevationM: { min: 0, max: 1500 },
  regionsPNW: ["southern Oregon (Klamath-Siskiyou)", "Rogue Valley", "Umpqua Valley", "southwestern Oregon mixed-evergreen forests", "Willamette Valley oak savanna (rare)", "Columbia Gorge oak woodlands (rare)", "Puget Sound Garry oak prairies (rare)", "urban parks with planted oak/beech/chestnut/birch (Portland, Seattle, Victoria, Vancouver BC)"],
  fruitingMonths: [7, 8, 9, 10],
  peakMonths: [8, 9],
  conditions: {
    minRain7d: 15,
    idealDaysSinceRain: [4, 10],
    tempRangeC: [12, 24],
    humidityMinPct: 70
  },
  identification: {
    cap: "4-15 cm across (typically 5-10 cm in western material); round to convex when young, becoming broadly convex to flat or shallowly depressed with age; dry, matte to velvety, NEVER viscid; surface very distinctive - breaks up early into small angular patches of green crust separated by paler cream to whitish cracks, giving a 'quilted', 'crazy paving' or 'mosaic' appearance that is diagnostic; ground color grass-green, blue-green, aqua, or yellow-green, fading to dull brownish-ochre at the center in age; margin not lined to very faintly grooved in age; cap skin peels about halfway to the center",
    underside: "Gills attached (adnexed) to nearly free at maturity, close to crowded, brittle (typical Russula breakage); white to cream when young, aging to pale cream or with faint brownish edges where bruised; occasionally with a few short intervenose ridges near the stem",
    stem: "3-9 cm long x 1.5-4 cm thick; cylindrical, sometimes slightly fusiform or tapering at the base; firm becoming brittle; dry; smooth; pure white when fresh, slowly discoloring brownish or buff with age and handling; no ring and no volva (an ESSENTIAL distinction from Amanita)",
    fleshColor: "White, brittle, thick in the cap; unchanging or only faintly browning when cut or bruised; not staining red, blue, or black",
    sporePrintColor: "White to cream",
    odor: "Not distinctive; faintly pleasant or mushroomy. Taste mild, nutty - NEVER acrid or peppery (a mild taste-test of a tiny piece of fresh cap flesh is one of the safest Russula genus checks, but the taste-test is NOT a safety test against deadly Amanita).",
    sizeCm: "Cap 4-15 cm; stem 3-9 cm x 1.5-4 cm"
  },
  edibility: "choice",
  toxicityNotes: "Widely regarded as one of the finest edible Russulas in Europe and eastern North America, sometimes eaten raw in salads in European tradition. HOWEVER, in the Pacific Northwest extreme caution is warranted because (1) the species is uncommon in the West and most green Russulas encountered will be undescribed sister taxa whose edibility has not been individually tested; (2) the green cap can be confused with the dangerously poisonous death cap (Amanita phalloides), now widespread in PNW urban and oak habitats. NEVER collect a green-capped mushroom without first checking for the presence of a partial veil/ring on the stem and a sac-like volva at the base - both indicate Amanita. Always cook thoroughly; novice foragers should avoid this group entirely in the PNW.",
  lookalikes: [
    { name: "Death cap", scientific: "Amanita phalloides", danger: "deadly", distinguishingFeature: "CRITICAL LOOKALIKE - the most dangerous mushroom in North America, now naturalized in PNW oak woodlands and urban areas. Cap smooth, NOT cracked/quilted, usually pale yellow-green to olive-green or bronze with faint radial streaks (not patches); WHITE gills that are FREE (not attached); a membranous white RING (skirt) high on the stem; a prominent sac-like white VOLVA enclosing the base (often buried - always dig the whole mushroom); white spore print. Contains amatoxins; a single cap can kill an adult. ALWAYS check for ring and volva on any green-capped mushroom." },
    { name: "Subnigricans (poisonous brittlegill)", scientific: "Russula subnigricans", danger: "deadly", distinguishingFeature: "Cap is DARK GREY-BROWN to blackish-brown, not green - so it would not normally be confused with R. virescens by sight, but listed here for completeness as the genus Russula's only confirmed deadly species (rhabdomyolysis from cycloprop-2-ene carboxylic acid). Flesh of R. subnigricans reddens slowly when cut and does NOT then blacken (unlike harmless R. nigricans which reddens then blackens). Mostly East Asian, rare in North America. Any dark, blackening Russula should be approached with caution." },
    { name: "Russula parvovirescens", scientific: "Russula parvovirescens", danger: "edible", distinguishingFeature: "Eastern North American sister species split out from R. virescens in 2006; smaller stature, more blue-green cap with very large crustose patches; mycorrhizal with oak; edible and treated as interchangeable with R. virescens culinarily" },
    { name: "Russula crustosa", scientific: "Russula crustosa", danger: "edible", distinguishingFeature: "Closely related species in the virescens-crustosa group; cap with yellow-green, ochre, or olive-green crustose patches (less pure green than R. virescens); patches typically larger and more polygonal; same hardwood habitat; considered edible" },
    { name: "Green brittlegill", scientific: "Russula aeruginea", danger: "edible", distinguishingFeature: "Cap pure grass-green to blue-green but SMOOTH and uncracked - lacks the quilted/crazy-paving pattern of R. virescens; typically smaller; associated with birch and conifers; mild taste; edible but not choice" },
    { name: "Greasy green brittlegill", scientific: "Russula heterophylla", danger: "edible", distinguishingFeature: "Cap variable green to olive-grey, SMOOTH (not cracked) and somewhat greasy/viscid when moist; gills strongly decurrent (running down stem); white spore print; mild; hardwood associate; edible" },
    { name: "Verdigris agaric", scientific: "Stropharia aeruginosa", danger: "GI-upset", distinguishingFeature: "Blue-green slimy/viscid cap (very different surface texture from dry quilted R. virescens), dark purple-brown spore print, attached gills that turn purple-grey, has a ring on the stem; grows on woody debris not soil; considered inedible to mildly toxic" }
  ],
  culinary: {
    flavor: "Mild, nutty, slightly sweet; widely considered one of the best-tasting Russulas - in European tradition (especially France, where it is called 'palomet') it is sometimes eaten raw, finely sliced in salads. Cooked, it has a firm texture and clean mushroomy-nutty flavor.",
    preparation: "Use only young to medium-aged, firm specimens that have been positively identified (NEVER from a green cap alone in the PNW - always confirm absence of ring and volva, presence of quilted cap surface, white-to-cream gills/spores, mild taste). Clean by brushing; slice and saute in butter; excellent in omelets, on toast, in cream sauces, with rice or pasta. Cook thoroughly. Avoid bug-infested or waterlogged specimens.",
    preservation: "Dries adequately though flavor is best fresh; can be sauteed and frozen. Pickling is traditional in some European regions."
  },
  conservationNotes: "Not formally listed of conservation concern globally, but uncommon throughout its North American range and apparently rare in the Pacific Northwest, where most western collections may represent undescribed cryptic species in the virescens-crustosa complex (Buyck et al. 2006). The traditional 'R. virescens' is strictly a European species in the most current taxonomy; PNW material should be reported with photos and ideally vouchered for sequencing. Document any PNW finds with location, host trees, and habitat photos to help clarify the western taxa.",
  sources: [
    { name: "MushroomExpert.com - Russula virescens (Michael Kuo)", url: "https://www.mushroomexpert.com/russula_virescens.html" },
    { name: "Wikipedia - Russula virescens", url: "https://en.wikipedia.org/wiki/Russula_virescens" },
    { name: "Ultimate Mushroom - Russula virescens", url: "https://ultimate-mushroom.com/edible/95-russula-virescens.html" },
    { name: "Forager Chef - Quilted Green Russulas (Alan Bergo)", url: "https://foragerchef.com/the-green-brittle-gill-russula-parvovirescens" },
    { name: "Fungus Fact Friday #133 - Russula virescens species group", url: "https://www.fungusfactfriday.com/133-russula-virescens-species-group/" },
    { name: "Buyck, B., Mitchell, D. & Parrent, J. (2006). Russula parvovirescens sp. nov., a common but ignored species in the eastern United States. Mycologia 98(4): 612-615.", url: "https://www.tandfonline.com/doi/abs/10.3852/mycologia.98.4.612" }
  ]
}
,
{
  id: "russula-xerampelina",
  commonNames: ["Shrimp Russula", "Shrimp Mushroom", "Crab Brittlegill", "Shellfish-scented Russula"],
  scientific: "Russula xerampelina",
  family: "Russulaceae",
  order: "Russulales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Pseudotsuga menziesii", "Pinus contorta", "Pinus ponderosa", "Tsuga heterophylla", "Picea sitchensis", "Abies spp.", "Larix occidentalis"],
  hostTrees: [
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Shore/lodgepole pine", scientific: "Pinus contorta" },
    { common: "Ponderosa pine", scientific: "Pinus ponderosa" },
    { common: "Western hemlock", scientific: "Tsuga heterophylla" },
    { common: "Sitka spruce", scientific: "Picea sitchensis" },
    { common: "True firs", scientific: "Abies spp." },
    { common: "Western larch", scientific: "Larix occidentalis" }
  ],
  substrate: "Conifer duff and humus over mineral soil; solitary to scattered or in small groups in needle litter under conifers, occasionally in mixed conifer/hardwood stands. In the PNW most reliably encountered in mossy Douglas-fir duff in mid- to late-fall, and along the immediate coast under shore pine and Sitka spruce.",
  habitat: "Ectomycorrhizal, almost exclusively with conifers in the Pacific Northwest. Most commonly associated with Douglas-fir, but also with pines (shore pine, lodgepole, ponderosa), western hemlock, Sitka spruce, true firs, and occasionally larch. Found in coastal, foothill, and montane coniferous forests; tolerates a wide range of stand ages. Russula xerampelina sensu lato is a species complex - several look-alike sister taxa (e.g. R. elaeodes, R. graveolens, R. semirubra, R. grundii, R. isabelliniceps, R. olivaceovinacea) have been variously segregated in North American and European literature, and the PNW Key Council treats several of these as varieties united by browning reaction, shrimp/crab odor, and the green flesh reaction with iron salts.",
  elevationM: { min: 0, max: 2000 },
  regionsPNW: ["Oregon Coast Range", "Washington Coast", "Olympic Peninsula", "Vancouver Island", "British Columbia Coast", "Puget Sound lowlands", "Willamette Valley foothills", "Cascades (both slopes)", "Siskiyou Mountains", "Blue Mountains", "Okanogan", "northeast Washington/Idaho Panhandle", "BC Interior"],
  fruitingMonths: [9, 10, 11, 12, 1],
  peakMonths: [10, 11],
  conditions: {
    minRain7d: 20,
    idealDaysSinceRain: [4, 12],
    tempRangeC: [5, 16],
    humidityMinPct: 75
  },
  identification: {
    cap: "5-15 cm across (occasionally to 20 cm); convex when young, becoming broadly convex to flat or shallowly depressed in age; smooth, dry to slightly viscid when wet, often matte or slightly velvety; color highly variable - dark wine-red, purplish-red, maroon, vinaceous-purple, sometimes with olive, brown, or ochre tones, often blotchy and darker toward the disc, occasionally with greenish or pinkish forms; the PNW Key Council recognizes several color varieties (var. rubra bright red; var. xerampelina purple/maroon with pink stipe; var. olivaceovinacea purple center with green margin; var. isabellinaceps honey tan; var. elaeodes dark brown with blackish center); cuticle peels only about 1/4 way to center; margin smooth, becoming striate in age",
    underside: "Gills attached (adnate to adnexed), moderately close to subdistant, brittle (typical Russula breakage), pale cream when young, maturing to ochre or pale yellow-ochre; bruising and aging yellow-brown to ochre-brown; intervenose at the base",
    stem: "5-12 cm long x 1.5-4 cm thick; cylindrical to club-shaped, firm becoming spongy in age; white, characteristically flushed pink, rosy, or purplish-red over part or all of its length (a key diagnostic feature); stains and ages dingy yellow-brown to ochre-brown where handled, scratched, or bruised; surface dry, smooth to slightly wrinkled, sometimes pruinose at apex; no ring or volva",
    fleshColor: "White, firm; slowly discoloring yellowish-brown to ochre or brown when sliced or bruised; DIAGNOSTIC chemical reaction: ferrous sulfate (iron salts, FeSO4) applied to stipe surface or fresh flesh produces a distinctive dark grey-green to olive-green or blackish-green reaction (vs. the usual pink/salmon reaction of most Russula species). Iron-salts reaction is the single most reliable confirmation for the xerampelina group.",
    sporePrintColor: "Cream to pale yellow-ochre (ochre)",
    odor: "DIAGNOSTIC - of shellfish, shrimp, crab, or aged/cooking seafood; faint or merely fishy in young specimens but becomes strong and unmistakable in mature, aging, or dried specimens (a fresh button often smells almost nothing; an old or dried cap is unmistakable). Taste mild, not acrid - young firm flesh can be safely taste-tested without burning peppery sensation.",
    sizeCm: "Cap 5-15 cm; stem 5-12 cm x 1.5-4 cm"
  },
  edibility: "choice",
  toxicityNotes: "One of the few Russula species universally rated as a choice edible. As with all wild mushrooms, eat only well-cooked, fresh, firm specimens that have been positively identified by the combination of features (conifer habitat, pink-flushed stem, brown-staining flesh and gills, shrimp/crab odor in mature specimens, and the green ferrous sulfate reaction). Avoid water-logged or insect-riddled specimens. A small minority of foragers report mild GI sensitivity to Russulas in general - try a small portion the first time.",
  lookalikes: [
    { name: "Olive Russula", scientific: "Russula olivacea", danger: "edible", distinguishingFeature: "Cap typically with olive-green tones and a finely wrinkled, concentric (circumferential) pattern; lacks shrimp/crab odor; stem does not bruise yellow-brown; ferrous sulfate reaction NEGATIVE (or salmon, not green); reported to cause GI distress in some people if undercooked" },
    { name: "Sickener", scientific: "Russula emetica", danger: "GI-upset", distinguishingFeature: "Bright scarlet to cherry-red cap; pure white stem (no pink flush); white gills and white spore print; flesh does NOT brown; taste VERY acrid/peppery; iron salts give pink reaction; associated with sphagnum and conifers; causes vomiting if eaten raw or undercooked" },
    { name: "Rosy Russula", scientific: "Russula sanguinea (= R. sanguinaria)", danger: "GI-upset", distinguishingFeature: "Blood-red cap and pink-flushed stem (can superficially resemble R. xerampelina); but taste sharply acrid/peppery; flesh does not brown when cut; lacks shellfish odor; iron salts reaction pink/salmon, not green; pine associate" },
    { name: "Almond-scented Russula", scientific: "Russula grata (= R. laurocerasi)", danger: "inedible", distinguishingFeature: "Strong odor of bitter almonds/marzipan/cherry pits (not shrimp); cap yellow-brown to honey; deeply striate margin; acrid taste" },
    { name: "Stubby Brittlegill", scientific: "Russula brevipes", danger: "edible", distinguishingFeature: "Large, dull white to buff, funnel-shaped cap with short stout stem; gills crowded and white; no pink flush on stem; no shrimp odor; ferrous sulfate reaction pink, not green" },
    { name: "Sister shrimp russulas", scientific: "Russula elaeodes / R. graveolens / R. semirubra / R. isabelliniceps / R. olivaceovinacea", danger: "edible", distinguishingFeature: "Members of the R. xerampelina species complex; share the shrimp/crab odor, yellow-brown bruising, ochre spore print, and green iron-salts reaction. Differ in cap color (dark brown with blackish center in elaeodes; honey tan in isabelliniceps; purple with green margin in olivaceovinacea). All are considered edible and choice and are treated together in PNW Key Council key as varieties of R. xerampelina." },
    { name: "Russula queletii", scientific: "Russula queletii", danger: "GI-upset", distinguishingFeature: "Purplish cap and purple-flushed stem reminiscent of R. xerampelina, but taste acrid/peppery; spruce associate (European); does not brown; iron salts reaction pink" }
  ],
  culinary: {
    flavor: "Considered one of the finest-tasting Russulas - mild, nutty, faintly seafood-like in keeping with its odor; firm flesh that holds its texture well when cooked. The shellfish odor largely cooks off, leaving a rich, savory, slightly crab-like umami flavor. Often ranked alongside chanterelles and boletes by foragers who know it.",
    preparation: "Use young to medium-aged specimens with firm flesh; older fishy-smelling caps can be overpowering. Clean by brushing or quick rinse, slice, and saute slowly in butter or oil to drive off moisture; finish with garlic, shallots, or cream. Excellent in cream sauces, risotto, omelets, on toast, and with seafood (the natural shellfish note complements actual shrimp or crab dishes). Always cook thoroughly - never eat raw.",
    preservation: "Dries well; the shrimp/crab odor intensifies on drying, which can be a feature in stocks and broths but overwhelming in small dishes. Can be sauteed and frozen, or used in duxelles. Pickling is occasionally done in European traditions."
  },
  conservationNotes: "Globally secure and locally common throughout PNW conifer forests; not of conservation concern. Taxonomy remains unsettled - molecular work has shown that 'R. xerampelina' in the strict European sense may differ from North American material, and several segregate species/varieties are recognized. Foragers and field-guide authors generally use R. xerampelina sensu lato to cover the whole shrimp-russula complex in the PNW.",
  sources: [
    { name: "MykoWeb - California Fungi: Russula xerampelina (Wood & Stevens)", url: "https://www.mykoweb.com/CAF/species/Russula_xerampelina.html" },
    { name: "Pacific Northwest Key Council - Trial Field Key to Russula in the PNW (Steve Trudell)", url: "https://www.svims.ca/council/Russul.htm" },
    { name: "MushroomExpert.com - North American Shrimp Russulas (Michael Kuo)", url: "https://www.mushroomexpert.com/russula_xerampelina.html" },
    { name: "First Nature - Russula xerampelina, Crab Brittlegill", url: "https://www.first-nature.com/fungi/russula-xerampelina.php" },
    { name: "Wikipedia - Russula xerampelina", url: "https://en.wikipedia.org/wiki/Russula_xerampelina" }
  ]
}
,
{
  id: "sarcodon-imbricatus",
  commonNames: ["Shingled Hedgehog", "Scaly Hedgehog", "Scaly Tooth", "Hawk's Wing"],
  scientific: "Sarcodon imbricatus",
  family: "Bankeraceae",
  order: "Thelephorales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Picea (spruce)", "Abies (true fir)", "Pinus (pine)"],
  hostTrees: [
    { common: "Engelmann spruce", scientific: "Picea engelmannii" },
    { common: "Sitka spruce", scientific: "Picea sitchensis" },
    { common: "Subalpine fir", scientific: "Abies lasiocarpa" },
    { common: "Pacific silver fir", scientific: "Abies amabilis" },
    { common: "Lodgepole pine", scientific: "Pinus contorta" }
  ],
  substrate: "Soil and duff in mature coniferous forests; acidic soils with moss, conifer needles, and leaf litter; sometimes in arcs or fairy rings on sandy soils.",
  habitat: "Montane and subalpine coniferous (especially spruce-fir) forests; scattered or in arcs; often near mature conifers in cool, moist environments.",
  elevationM: { min: 500, max: 2200 },
  regionsPNW: [
    "Cascades (Washington)",
    "Cascades (Oregon)",
    "Olympic Peninsula",
    "Blue Mountains",
    "Northern Idaho",
    "Southern British Columbia",
    "Vancouver Island"
  ],
  fruitingMonths: [8, 9, 10, 11],
  peakMonths: [9, 10],
  conditions: {
    minRain7d: 20,
    idealDaysSinceRain: [4, 12],
    tempRangeC: [5, 16],
    humidityMinPct: 75
  },
  identification: {
    cap: "5-25 cm (up to 30 cm) broad, convex becoming depressed to infundibulate (funnel-shaped) at center; margin inrolled then decurved, sometimes wavy or lobed; surface dry with coarse, erect, dark-brown to almost black, shingled (imbricate) scales on a pallid to light-brown background; scales may weather away with age.",
    underside: "Spines (teeth) 0.5-1.0 cm long, decurrent, crowded; pallid when young, becoming light to medium brown with age.",
    stem: "3.5-8 cm tall, 2-3.5 cm thick; stout, tapering downward or enlarged at base; solid but apex often hollow at maturity; surface dry, colored like the cap, appressed-fibrillose; central to eccentric attachment; no veil.",
    fleshColor: "Thick, soft, cream to buff; unchanging when cut.",
    sporePrintColor: "Brown",
    odor: "Mild, not distinctive",
    sizeCm: "Cap 5-25 cm (up to 30 cm); stipe 3.5-8 cm tall x 2-3.5 cm thick"
  },
  edibility: "edible-with-caution",
  toxicityNotes: "Mild to bitter taste; older or coastal specimens are often very bitter. Traditional preparation requires drying or parboiling/blanching (discarding the water) to remove bitterness before cooking. Some individuals report GI upset (nausea, cramping, diarrhea), especially from older specimens or large quantities. Recent phytochemical studies on Sarcodon species (notably S. cyrneus, S. scabrosus, S. glaucopus) have identified cyathane diterpenes with potent neuroactive (NGF-mimetic / neurite-outgrowth) effects; while these compounds are best studied in related Sarcodon species, the genus as a whole should be consumed cautiously and in moderation. Avoid raw consumption.",
  lookalikes: [
    {
      name: "Scaly Tooth (bitter cousin)",
      scientific: "Sarcodon scabrosus",
      danger: "inedible",
      distinguishingFeature: "Less prominently scaly; intensely bitter; context turns blue-green in KOH; often has a darker, blackish stipe base."
    },
    {
      name: "Sarcodon squamosus",
      scientific: "Sarcodon squamosus",
      danger: "edible-with-caution",
      distinguishingFeature: "Cryptic look-alike now segregated from S. imbricatus; associated with pine rather than spruce; smaller, more appressed scales; British/European collections of 'S. imbricatus' often reassigned here."
    },
    {
      name: "Bitter Tooth",
      scientific: "Sarcodon amarescens",
      danger: "inedible",
      distinguishingFeature: "Bluish-black stipe; bitter and inedible."
    },
    {
      name: "Old Man of the Woods",
      scientific: "Strobilomyces strobilaceus",
      danger: "edible",
      distinguishingFeature: "Similar shaggy/scaly cap from above, but has pores (not teeth) on underside; flesh reddens then blackens when cut."
    },
    {
      name: "Hydnellum spp.",
      scientific: "Hydnellum spp.",
      danger: "inedible",
      distinguishingFeature: "Tough, leathery to woody (not fleshy) context; smaller, often zonate caps; some species exude colored droplets."
    }
  ],
  culinary: {
    flavor: "Mild, earthy, slightly nutty when young and well-prepared; can be bitter, especially older or coastal specimens. Montane collections generally taste better than coastal ones.",
    preparation: "Select young, firm specimens; brush off scales and debris. Traditional practice: parboil/blanch 5-10 minutes and discard the water to remove bitterness, then sauté, braise, or add to stews. Excellent dried and ground into powder as a seasoning (drying also reduces bitterness). Eat in moderation due to genus-wide reports of bioactive compounds.",
    preservation: "Best preserved by drying (slice thinly); dried slices or powder store well and have intensified, savory flavor. Also widely used as a natural dye source (yields blue-green to gray dyes), so 'better in the dye pot than the soup pot' for older specimens."
  },
  conservationNotes: "Locally common in mature PNW conifer forests but considered a species of concern in parts of Europe due to old-growth dependence. Listed in the Handbook to Additional Fungal Species of Special Concern in the Northwest Forest Plan; sensitive to logging of mature spruce-fir stands. Harvest sustainably and leave mature specimens for spore dispersal.",
  sources: [
    { name: "MykoWeb - California Fungi: Sarcodon imbricatus", url: "https://www.mykoweb.com/CAF/species/Sarcodon_imbricatus.html" },
    { name: "Burke Herbarium Image Collection - Sarcodon imbricatus", url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Sarcodon+imbricatus" },
    { name: "NatureServe Explorer - Sarcodon imbricatus", url: "https://explorer.natureserve.org/Taxon/ELEMENT_GLOBAL.2.883581/Sarcodon_imbricatus" },
    { name: "Yadav et al. - A Mechanistic Review on Medicinal Mushroom-Derived Bioactive Compounds (Sarcodon spp. neuroactive cyathane diterpenes), Planta Medica", url: "https://www.thieme-connect.com/products/ejournals/pdf/10.1055/a-1177-4834.pdf" },
    { name: "Marcotullio et al. - Neurite outgrowth activity of cyathane diterpenes from Sarcodon cyrneus, Planta Medica 2006", url: "https://pubmed.ncbi.nlm.nih.gov/16941291/" },
    { name: "Mount Pisgah Arboretum - Appreciating Sarcodon imbricatus, Hawk's Wing (Fall 2019)", url: "https://mountpisgaharboretum.org/wp-content/uploads/2019-FallTT-Color.pdf" }
  ]
}
,
{
  id: "sparassis-radicata",
  commonNames: ["Western Cauliflower Mushroom", "Cauliflower Mushroom", "Cauliflower Fungus", "Noodle Mushroom"],
  scientific: "Sparassis radicata",
  family: "Sparassidaceae",
  order: "Polyporales",
  trophicMode: "parasitic",
  mycorrhizalPartners: null,
  hostTrees: [
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Sitka spruce", scientific: "Picea sitchensis" },
    { common: "Pine (coastal CA)", scientific: "Pinus spp." }
  ],
  substrate: "Butt-rot parasite causing brown cubical rot on conifer roots and root crowns; fruits from soil over infected roots or at the base of living trees, snags, or dead trunks. A long, rooting pseudostem extends down to the host root system.",
  habitat: "Coastal and montane coniferous forests, particularly mature/old-growth Douglas-fir stands; fruits at the base of living conifers or near stumps, often recurring in the same spot year after year (though not necessarily annually).",
  elevationM: { min: 0, max: 1500 },
  regionsPNW: ["Coastal Oregon", "Cascades (OR/WA)", "Olympic Peninsula", "Puget Sound lowlands", "Coastal British Columbia", "Vancouver Island", "Northern California coast"],
  fruitingMonths: [8, 9, 10, 11],
  peakMonths: [9, 10],
  conditions: {
    minRain7d: 15,
    idealDaysSinceRain: [3, 10],
    tempRangeC: [7, 18],
    humidityMinPct: 75
  },
  identification: {
    cap: "No true cap; fruitbody is a large rosette-like mass of flat, wavy, ribbon- or noodle-like branches resembling a head of cauliflower or stack of egg noodles; cream to pale yellow, darkening to tan or ochre with age.",
    underside: "Smooth fertile (spore-bearing) surface on the flat lobes; no pores, gills, or teeth.",
    stem: "Thick, fleshy, rooting pseudostem (5–15 cm long, 3–5 cm thick) extending deep into the soil and attaching to the host conifer root — the key feature distinguishing it from S. crispa sensu stricto.",
    fleshColor: "White to pale cream; firm and rubbery when young, becoming tougher with age.",
    sporePrintColor: "White to pale cream",
    odor: "Mild, pleasant, slightly nutty or sweet (sometimes likened to almonds or anise)",
    sizeCm: "Overall fruitbody 15–40 cm wide, occasionally to 60+ cm; weight commonly 1–5 kg, large specimens to 14 kg."
  },
  edibility: "choice",
  toxicityNotes: "No known toxicity; however, thorough cleaning is essential as the convoluted folds trap conifer needles, soil, and insects. Older specimens become tough and indigestible — harvest young while still cream-colored and pliable.",
  lookalikes: [
    { name: "European cauliflower fungus", scientific: "Sparassis crispa", danger: "edible", distinguishingFeature: "Often treated as a synonym; DNA studies (Hughes et al. 2014) show true S. crispa is a strictly European species on Scots pine. PNW material is now generally referred to S. radicata, distinguished by its prominent rooting pseudostem." },
    { name: "Eastern cauliflower mushroom", scientific: "Sparassis spathulata", danger: "edible", distinguishingFeature: "Eastern North American species; broader, flatter, more spatula-shaped lobes often zoned with color bands; on oaks and pines; absent from PNW." },
    { name: "American cauliflower mushroom", scientific: "Sparassis americana", danger: "edible", distinguishingFeature: "Eastern/central North American sister species recognized after DNA work; not present in the PNW." },
    { name: "Hen of the woods", scientific: "Grifola frondosa", danger: "edible", distinguishingFeature: "Grayish-brown overlapping fan-shaped caps with pores on the underside (not flat noodle-like lobes); on hardwoods (mostly oak), not conifers; rare in PNW." }
  ],
  culinary: {
    flavor: "Mild, nutty, slightly sweet with a hint of almond; firm al dente noodle-like texture that holds up well to cooking without becoming mushy.",
    preparation: "Tear into bite-sized florets and rinse/swish in cold water to remove debris and conifer needles; pat dry. Excellent sautéed in butter, stir-fried, simmered in broths, or used in pasta and Asian noodle-style dishes. Some cooks blanch 2–3 minutes before final preparation. Cook slowly; absorbs surrounding flavors well.",
    preservation: "Dries well and reconstitutes with its cartilaginous texture intact — ideal for soups and stocks. Also freezes well after par-cooking; can be preserved in oil."
  },
  conservationNotes: "Not formally listed, but uncommon and prized; fruitings are often single specimens per site. Because it is a long-lived butt-rot pathogen tied to mature Douglas-fir, populations depend on retention of older conifer stands. Foragers should harvest by cutting above the rooting base to allow potential refruiting.",
  sources: [
    { name: "MykoWeb / California Fungi — Sparassis crispa (incl. S. radicata)", url: "https://www.mykoweb.com/CAF/PDF/Sparassis_crispa.pdf" },
    { name: "MykoWeb — Sparassis radicata protologue (Weir)", url: "https://www.mykoweb.com/CAF/protologue/Sparassis_radicata.pdf" },
    { name: "MushroomExpert.com — Sparassis americana (with S. radicata discussion, Hughes et al. 2014)", url: "https://www.mushroomexpert.com/sparassis_americana.html" },
    { name: "Burke Herbarium (UW) — Sparassis crispa / S. radicata", url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Sparassis+crispa" },
    { name: "UBC Beaty Biodiversity Museum — Mushrooms Up!: Sparassis radicata", url: "https://explore.beatymuseum.ubc.ca/mushroomsup/S_radicata.html" },
    { name: "iNaturalist — Western cauliflower mushroom (PNW Field Guide)", url: "https://www.inaturalist.org/guide_taxa/1185239" }
  ]
}
,
{
  id: "stropharia-rugosoannulata",
  commonNames: ["Wine Cap", "King Stropharia", "Garden Giant", "Burgundy Mushroom", "Godzilla Mushroom"],
  scientific: "Stropharia rugosoannulata",
  family: "Strophariaceae",
  order: "Agaricales",
  trophicMode: "saprotrophic",
  mycorrhizalPartners: null,
  hostTrees: [
    { common: "Red Alder", scientific: "Alnus rubra" },
    { common: "Bigleaf Maple", scientific: "Acer macrophyllum" },
    { common: "Douglas-fir (woodchip mulch)", scientific: "Pseudotsuga menziesii" }
  ],
  substrate: "Hardwood woodchips, bark mulch, straw, sawdust, garden compost, and woody debris; thrives on fresh hardwood chips (especially alder); can also colonize coffee grounds and leaf litter. Avoids cedar and aromatic conifers.",
  habitat: "Cultivated garden beds, mulched landscaping, urban/suburban parks, woodchip pathways, forest edges with woody debris, seasonal floodplains, and disturbed ground; escapes from cultivation are common in the PNW wherever fresh mulch is laid.",
  elevationM: { min: 0, max: 1000 },
  regionsPNW: [
    "Puget Sound lowlands",
    "Willamette Valley",
    "Portland metro",
    "Seattle metro",
    "Olympic Peninsula (lowlands)",
    "Lower Columbia River",
    "Vancouver Island (lowlands)",
    "Lower Fraser Valley"
  ],
  fruitingMonths: [5, 6, 7, 8, 9, 10, 11],
  peakMonths: [6, 9, 10],
  conditions: {
    minRain7d: 15,
    idealDaysSinceRain: [2, 7],
    tempRangeC: [10, 24],
    humidityMinPct: 70
  },
  identification: {
    cap: "5-30 cm; convex becoming broadly convex to flat; dry; deep wine-red to burgundy when young, fading to reddish-brown, tan, or pale buff with age and sun exposure; margin sometimes hung with whitish partial veil remnants or fluffy tufts.",
    underside: "Gills attached to stem, close, pale gray when young, becoming purple-gray then dark purple-brown to nearly black at maturity, often with paler edges.",
    stem: "7-15 cm long, 1-3 cm thick; white to cream, firm, often enlarged toward the base with white mycelial cords; bears a thick, persistent ring that is finely grooved on top and radially split or cogwheel-like (star-shaped) on the underside.",
    fleshColor: "White to cream, firm, unchanging when cut.",
    sporePrintColor: "Dark purple-brown to purple-black",
    odor: "Mild, earthy; not distinctive (foul/creosote-like in the rare white form).",
    sizeCm: "Cap 5-30 cm; stem 7-15 cm long x 1-3 cm thick"
  },
  edibility: "choice",
  toxicityNotes: "Generally regarded as a choice edible when well-cooked. As with all wild mushrooms, eat in moderation on first try; rare reports of GI upset in sensitive individuals. The white form has a foul creosote-like odor and is not recommended.",
  lookalikes: [
    {
      name: "Questionable Stropharia",
      scientific: "Stropharia ambigua",
      danger: "inedible",
      distinguishingFeature: "Yellow to ochre cap (not wine-red), grows on forest litter/duff in conifer woods rather than woodchips, has a cottony partial veil hanging from cap margin and a fragile, non-cogwheeled ring; flesh-yellow stem base."
    },
    {
      name: "Maroon Agrocybe / Spring Agrocybe",
      scientific: "Agrocybe praecox",
      danger: "edible",
      distinguishingFeature: "Smaller, pale tan to buff cap (never wine-red), brown (not purple-black) spore print, thinner non-cogwheeled ring; appears on the same woodchip habitat in spring."
    },
    {
      name: "Sulfur Tuft",
      scientific: "Hypholoma fasciculare",
      danger: "toxic",
      distinguishingFeature: "Grows in dense clusters on rotting wood/stumps (not on mulch/soil), much smaller, sulfur-yellow to greenish-yellow cap and gills, intensely bitter taste, no thick cogwheeled ring; purple-brown spore print but with greenish gill tint."
    },
    {
      name: "Deadly Galerina",
      scientific: "Galerina marginata",
      danger: "deadly",
      distinguishingFeature: "Much smaller (cap 1-4 cm), tawny-brown hygrophanous cap, rusty-brown spore print (not purple-black), thin fragile ring, grows clustered on decaying wood; contains amatoxins."
    }
  ],
  culinary: {
    flavor: "Mild, earthy, nutty with hints of potato and red wine; portobello-like umami richness; firm, meaty texture when cooked.",
    preparation: "Always cook thoroughly. Sauté in butter, grill, roast, or use in stews, risottos, and pasta. Young buttons are best; older specimens can be tough or watery. Pair well with onions, garlic, and cream.",
    preservation: "Dehydrate, freeze after sautéing, or pickle. Drying intensifies flavor; rehydrated caps work well in sauces."
  },
  conservationNotes: "Not of conservation concern; abundant and easily cultivated. Widely promoted in permaculture and home cultivation for building soil and decomposing woody mulch. Escapes from cultivation are common in PNW urban/suburban areas.",
  sources: [
    { name: "MushroomExpert.com - Stropharia rugosoannulata", url: "https://www.mushroomexpert.com/stropharia_rugosoannulata.html" },
    { name: "MushroomExpert.com - Stropharia rugosoannulata white form", url: "https://www.mushroomexpert.com/stropharia_rugosoannulata_white.html" },
    { name: "North Spore - How to Grow Wine Cap Mushrooms", url: "https://northspore.com/blogs/the-black-trumpet/species-spotlight-wine-cap" },
    { name: "SymbiOp Garden Shop (PNW/Portland) - Wine Cap Spawn care", url: "https://gardenshop.symbiop.com/products/wine-cap-mushroom-spawn-sgs" },
    { name: "Practical Self Reliance - Growing Winecap Mushrooms", url: "https://practicalselfreliance.com/growing-winecap-mushrooms" }
  ]
}
,
{
  id: "suillus-brevipes",
  commonNames: ["Short-stalk Slippery Jack", "Stubby-stalk", "Short-stemmed Slippery Jack", "Short-stem Slippery Jack"],
  scientific: "Suillus brevipes",
  family: "Suillaceae",
  order: "Boletales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Pinus contorta var. contorta", "Pinus contorta var. latifolia", "Pinus ponderosa", "Pinus banksiana"],
  hostTrees: [
    { common: "Shore pine", scientific: "Pinus contorta var. contorta" },
    { common: "Lodgepole pine", scientific: "Pinus contorta var. latifolia" },
    { common: "Ponderosa pine", scientific: "Pinus ponderosa" },
    { common: "Jack pine", scientific: "Pinus banksiana" }
  ],
  substrate: "Sandy to duff-covered mineral soil and needle litter under hard (2- and 3-needled) pines; coastal dunes under shore pine and montane/interior soils under lodgepole and ponderosa pine; often along forest roads, trails, and in young pine plantations following disturbance (clearcuts, fires)",
  habitat: "Ectomycorrhizal exclusively with hard (2- and 3-needled) pines. In the PNW it is the dominant Suillus of coastal shore-pine stands (Oregon and Washington coast, Vancouver Island, BC coast) and a near-universal companion of interior lodgepole pine throughout the Cascades, Blue Mountains, Okanogan, and BC interior. Fruits prolifically and gregariously in late summer and fall, often in large troops. Considered a 'multi-stage' fungus that colonizes pines from seedling through mature stand and is among the early Suillus species to fruit after stand-replacing fires or clearcutting.",
  elevationM: { min: 0, max: 2400 },
  regionsPNW: ["Oregon Coast (shore pine dunes)", "Washington Coast", "Olympic Peninsula", "Vancouver Island", "British Columbia Coast", "Cascades (both slopes)", "Eastern Washington/Oregon pine forests", "Blue Mountains", "Okanogan", "northeast Washington/Idaho Panhandle", "BC Interior"],
  fruitingMonths: [8, 9, 10, 11],
  peakMonths: [9, 10],
  conditions: {
    minRain7d: 15,
    idealDaysSinceRain: [4, 10],
    tempRangeC: [7, 20],
    humidityMinPct: 70
  },
  identification: {
    cap: "5-10 cm (occasionally to 12 cm); convex becoming broadly convex to nearly flat in age; smooth, bald, conspicuously slimy/viscid (glutinous) when moist, shiny when dry; dark chocolate-brown to reddish-brown or vinaceous brown when young, fading and often becoming streaked to cinnamon or yellow-brown with age or in dry/cold weather; margin incurved when young but bare - no veil tissue or partial veil remnants",
    underside: "Tubes and pores; pore surface pale yellow when young, dulling to dingy olive-yellow in age; pores small, round, 1-2 per mm; tubes adnate to slightly decurrent, up to about 1 cm deep; does not bruise blue",
    stem: "Short and stubby (the defining feature - 'brevipes' = short-footed); 2-5 cm (rarely to 6 cm) long x 1-3 cm thick; often shorter than the cap is wide; whitish becoming pale yellow with age, particularly toward the apex; glandular dots ABSENT or only very faintly developed in age (key distinction from S. granulatus and S. pungens); no partial veil and therefore no ring",
    fleshColor: "White to pale yellow, soft, unchanging when cut (no blueing, no significant color change)",
    sporePrintColor: "Cinnamon-brown to dull brown",
    odor: "Mild, not distinctive; taste mild to slightly acidic, never bitter or peppery",
    sizeCm: "Cap 5-10 cm; stem 2-5 cm x 1-3 cm (stem usually shorter than cap diameter)"
  },
  edibility: "edible",
  toxicityNotes: "Generally well-tolerated but, as with most Suillus, the slimy cap cuticle can cause mild gastrointestinal upset in some individuals if eaten in quantity. Standard practice is to peel off the slimy pellicle (cuticle) of the cap before cooking, and to discard the tube layer in older specimens (it goes mushy and is more likely to cause GI symptoms). Avoid eating raw.",
  lookalikes: [
    { name: "Dotted-stalk Suillus", scientific: "Suillus granulatus", danger: "edible", distinguishingFeature: "Longer stem with prominent, dark glandular dots present at all stages; cap paler tan to cinnamon; associated with various pines" },
    { name: "Pseudo Short-stem Suillus", scientific: "Suillus pseudobrevipes", danger: "edible", distinguishingFeature: "Has a partial veil leaving a ring zone or veil remnants on the stem when young; otherwise extremely similar - S. brevipes never has a veil" },
    { name: "Pungent Slippery Jack", scientific: "Suillus pungens", danger: "edible", distinguishingFeature: "Strongly acrid/pungent odor (vs. mild in S. brevipes); cap mottled olive, white, and yellow when young then aging brick-red; glandular dots on stem; mainly California but extending north" },
    { name: "Weaver's Suillus", scientific: "Suillus weaverae (= S. albidipes in part)", danger: "edible", distinguishingFeature: "Associated with 5-needled (white) pines rather than hard pines; cap paler, often with whitish veil tissue on margin when young" },
    { name: "Slippery Jack", scientific: "Suillus luteus", danger: "edible", distinguishingFeature: "Has a conspicuous purplish-brown membranous partial veil leaving a dark ring on the stem; glandular dots above the ring; introduced with European pines; very similar in appearance otherwise" },
    { name: "Pale Cap Suillus", scientific: "Suillus pallidiceps", danger: "edible", distinguishingFeature: "Cap pale yellow to whitish (not dark brown); otherwise close to S. brevipes" },
    { name: "Larch Suillus / Tamarack Jack", scientific: "Suillus grevillei", danger: "edible", distinguishingFeature: "Bright yellow to orange viscid cap, yellow stem with a ring from a partial veil; strictly with larch (Larix), not pines" }
  ],
  culinary: {
    flavor: "Mild, faintly nutty, somewhat bland on its own; absorbs other flavors well and adds body to mixed-mushroom dishes. Considered a serviceable rather than gourmet edible, but in coastal shore-pine forests it is often the most abundant edible bolete.",
    preparation: "Peel the slimy cap cuticle (pellicle) off before cooking - it cooks down to an unpleasant slime if left on. Remove the tube layer in older or waterlogged specimens. Slice and saute slowly in butter or oil to drive off moisture before seasoning; good in sauces, soups, risotto, mixed-mushroom saute, or with eggs. Pairs well with stronger-flavored mushrooms (chanterelles, kings).",
    preservation: "Dries well after peeling and slicing; rehydrate for soups and stews. Can also be sauteed and frozen. Pickling is traditional in eastern European cuisine for slippery-jack-type Suillus."
  },
  conservationNotes: "Globally secure (NatureServe). One of the most abundant and widely distributed mycorrhizal fungi in North American pine forests; not of conservation concern. Plays an important ecological role in pine regeneration after fire and clearcutting and is a notable food source for wildlife including grizzly bears in some regions.",
  sources: [
    { name: "MushroomExpert.com - Suillus brevipes (Michael Kuo)", url: "https://www.mushroomexpert.com/suillus_brevipes.html" },
    { name: "MykoWeb - California Boletes: Suillus brevipes (Thiers)", url: "https://www.mykoweb.com/boletes/species/Suillus_brevipes.html" },
    { name: "Salish Mushrooms - Lodgepole Pine mushroom associations (PNW)", url: "https://salishmushrooms.com/trees/lodgepole-pine/" },
    { name: "Wikipedia - Suillus brevipes", url: "https://en.wikipedia.org/wiki/Suillus_brevipes" },
    { name: "GBIF - Suillus brevipes occurrence and taxonomy", url: "https://www.gbif.org/species/5239894" }
  ]
}
,
{
  id: "suillus-caerulescens",
  commonNames: [
    "Douglas-fir Suillus",
    "Blue-staining Slippery Jack",
    "Fat Jack",
    "Blue-staining Suillus",
  ],
  scientific: "Suillus caerulescens",
  family: "Suillaceae",
  order: "Boletales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Pseudotsuga menziesii"],
  hostTrees: [
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
  ],
  substrate:
    "Soil and duff under Douglas-fir; also fruits in lawns, parks, and landscaped areas where Douglas-fir has been planted.",
  habitat:
    "Single, scattered, or in small troops on the ground near Douglas-fir host trees in mixed and coniferous forests, forest edges, and urban plantings throughout the Pacific Northwest.",
  elevationM: { min: 0, max: 1500 },
  regionsPNW: [
    "Coastal British Columbia",
    "Puget Sound lowlands",
    "Olympic Peninsula",
    "Cascade foothills (WA & OR)",
    "Willamette Valley",
    "Oregon Coast Range",
    "Northern California (extends south)",
  ],
  fruitingMonths: [9, 10, 11, 12, 1],
  peakMonths: [10, 11],
  conditions: {
    minRain7d: 25,
    idealDaysSinceRain: [3, 10],
    tempRangeC: [4, 16],
    humidityMinPct: 75,
  },
  identification: {
    cap: "5-14 cm, hemispherical when young expanding to broadly convex or flat, yellowish tan to cinnamon-brown often with darker brown radial streaks or fibrils; viscid/slimy when wet, dry and shiny when dry; margin may have hanging veil remnants.",
    underside:
      "Angular/radially-arranged pores ~1-2 mm wide, adnate to slightly decurrent; pale yellow when young, darkening to ochre/dingy yellow with age; bruises slowly brownish (visible ~10 minutes after rubbing).",
    stem: "2.5-8 cm long x 1-3 cm wide, often tapering at base, solid; bright yellow above the ring, whitish to dingy yellow-brown below with brownish stains; membranous whitish partial veil leaving a persistent ring with cinnamon-brown stains; base flesh stains a faint blue/blue-green when cut (the diagnostic feature).",
    fleshColor:
      "Thick; whitish to pale yellow becoming yellow with age; flesh at very base of stipe stains blue to blue-green when cut/bruised; cap flesh may stain faint pink.",
    sporePrintColor: "Cinnamon-brown to dull brown",
    odor: "Mild, not distinctive (taste mild, slightly lemony).",
    sizeCm: "Cap 5-14 cm; stipe 2.5-8 x 1-3 cm",
  },
  edibility: "edible",
  toxicityNotes:
    "Generally well tolerated when cooked, but as with most Suillus species the slimy cap cuticle is best peeled off before cooking to avoid mild gastrointestinal upset (laxative effect) in sensitive individuals. Eat only young, firm, maggot-free specimens.",
  lookalikes: [
    {
      name: "Western Painted Suillus (Matte Jack)",
      scientific: "Suillus lakei",
      danger: "edible",
      distinguishingFeature:
        "Dry cap with conspicuous reddish-brown scales/fibrils (not viscid and not streaky-smooth); also Douglas-fir associate; stem base may also stain bluish-green but cap surface is the key separator.",
    },
    {
      name: "Ponderous Suillus",
      scientific: "Suillus ponderosus",
      danger: "edible",
      distinguishingFeature:
        "Very similar Douglas-fir associate; partial veil becomes wet/gelatinous (not dry and membranous as in S. caerulescens); cap typically more uniformly yellow-orange without dark brown streaking.",
    },
    {
      name: "Slippery Jack",
      scientific: "Suillus luteus",
      danger: "edible",
      distinguishingFeature:
        "Associated with pines (not Douglas-fir); has a conspicuous purplish-brown gelatinous ring; pores do not stain blue; flesh does not blue at the stem base.",
    },
    {
      name: "Granulated Slippery Jack",
      scientific: "Suillus granulatus",
      danger: "edible",
      distinguishingFeature:
        "Pine associate; no partial veil/ring; stem has glandular dots; flesh does not stain blue.",
    },
    {
      name: "Admirable Bolete",
      scientific: "Aureoboletus mirabilis",
      danger: "edible",
      distinguishingFeature:
        "Dark reddish-brown velvety/scaly dry cap on a hemlock-log substrate; no partial veil; flesh does not blue at base.",
    },
  ],
  culinary: {
    flavor:
      "Mild, slightly lemony, somewhat bland on its own but takes on flavors of accompanying ingredients; texture can be soft/slimy if cap cuticle is left on.",
    preparation:
      "Peel off the viscid cap cuticle and remove the pore layer if mushy. Best sautéed in butter with garlic and aromatics; works in soups, stews, risottos, and pasta sauces. Can be cooked into mushroom powder.",
    preservation:
      "Dries very well (a recommended preservation method; also good as mushroom powder). Can be pickled. Not ideal for freezing raw due to high water content; better to sauté or cook first before freezing.",
  },
  conservationNotes:
    "Common and abundant throughout its range wherever Douglas-fir grows; not of conservation concern. As an obligate mycorrhizal partner of Douglas-fir, its persistence depends on healthy Douglas-fir forests.",
  sources: [
    {
      name: "Mushrooms Up! (UBC Beaty Museum) - Suillus caerulescens",
      url: "https://explore.beatymuseum.ubc.ca/mushroomsup/S_caerulescens.html",
    },
    {
      name: "Kitsap Peninsula Mycological Society - Western Painted Suillus (with notes on S. caerulescens)",
      url: "https://kitsapmushrooms.org/edible-mushrooms/western-painted-suillus/",
    },
    {
      name: "WPA Mushroom Club Bolete Filter - Suillus caerulescens",
      url: "https://boletes.wpamushroomclub.org/product/suillus-caerulescens",
    },
    {
      name: "MykoWeb California Fungi - Suillus genus index",
      url: "https://www.mykoweb.com/CAF/genera/Suillus.html",
    },
    {
      name: "Oregon Discovery - Slippery Jack & Other Suillus",
      url: "https://oregondiscovery.com/suillus",
    },
  ],
}
,
{
  id: "suillus-granulatus",
  commonNames: ["Granulated Slippery Jack", "Weeping Bolete", "Granulated Bolete", "Dotted-stalk Suillus", "Dotted-stalked Slippery Jack", "Milk Bolete", "Crying Bolete", "Ringless Slippery Jack"],
  scientific: "Suillus granulatus",
  family: "Suillaceae",
  order: "Boletales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Pinus contorta var. contorta", "Pinus contorta var. latifolia", "Pinus radiata", "Pinus sylvestris", "Pinus muricata", "Pinus mugo", "Pinus pinea", "Pinus nigra"],
  hostTrees: [
    { common: "Shore pine", scientific: "Pinus contorta var. contorta" },
    { common: "Lodgepole pine", scientific: "Pinus contorta var. latifolia" },
    { common: "Monterey pine", scientific: "Pinus radiata" },
    { common: "Scots pine", scientific: "Pinus sylvestris" },
    { common: "Bishop pine", scientific: "Pinus muricata" },
    { common: "Mugo pine", scientific: "Pinus mugo" },
    { common: "Austrian/Black pine", scientific: "Pinus nigra" }
  ],
  substrate: "Needle duff, sandy to loamy mineral soil, and grassy verges under hard (2-needle) pines; common in pine plantations, ornamental plantings, urban parks, cemeteries, golf courses, churchyards, and along roadsides where 2-needle pines have been planted; also in native shore-pine stands along the coast",
  habitat: "Strictly ectomycorrhizal with 2-needle (hard) pines (Pinus subgenus Pinus). A Eurasian native that has been introduced globally with pine plantings and is now naturalized throughout much of North America including the PNW, where it is most commonly encountered with planted Scots, Austrian, and Monterey pines in urban and disturbed settings as well as with native shore pine along the coast and lodgepole pine inland. Often fruits in large troops or arcs in late summer through fall, frequently appearing after warm fall rains in mossy, grassy, or needle-strewn ground beneath isolated pines.",
  elevationM: { min: 0, max: 1800 },
  regionsPNW: ["Oregon Coast (shore pine and planted Monterey/Scots pine)", "Puget Sound lowlands (urban/ornamental pines)", "Willamette Valley", "Vancouver Island", "Lower Mainland BC", "western Washington urban parks", "Cascades east-slope lodgepole stands", "eastern Washington/Oregon pine country (planted and naturalized)"],
  fruitingMonths: [8, 9, 10, 11],
  peakMonths: [9, 10],
  conditions: {
    minRain7d: 15,
    idealDaysSinceRain: [4, 10],
    tempRangeC: [8, 21],
    humidityMinPct: 70
  },
  identification: {
    cap: "4-10 cm (occasionally to 12 cm) across; convex becoming broadly convex to nearly flat in age; smooth, bald (glabrous), conspicuously slimy/viscid when wet and shiny-sticky when dry; pale tan to cinnamon-brown, yellow-brown, or orange-brown, often paler at first and developing reddish-cinnamon tones in age; margin even, without veil tissue (no partial veil at any stage)",
    underside: "Tubes and pores; pore surface pale whitish-yellow when very young, becoming bright pale yellow then dingy yellow with age; pores small, round, 2-3 per mm (much smaller than the lookalike S. flavogranulatus); in young, fresh specimens the pores exude milky to pale-yellow droplets ('weeping' - diagnostic when present); tubes adnate, 4-8 mm deep; does NOT bruise blue",
    stem: "4-8 cm long x 1-1.5 cm thick; cylindrical, sometimes with slightly swollen base; whitish to pale yellow, often flushed pinkish-tan near the base in age; upper portion conspicuously decorated with fine pinkish-brown to cinnamon glandular dots (granulations) at all stages - the diagnostic feature; in young specimens these dots exude small milky droplets that dry darker (hence 'weeping' / 'granulatus'); NO partial veil and NO ring (key distinction from Suillus luteus)",
    fleshColor: "White to pale lemon-yellow, soft, unchanging when cut (no blueing; sometimes a faint pinkish flush at the stem base in age)",
    sporePrintColor: "Cinnamon-brown to sienna-brown (ochraceous brown)",
    odor: "Mild, pleasant, not distinctive; taste mild, faintly acidic, never bitter or peppery",
    sizeCm: "Cap 4-10 cm; stem 4-8 cm x 1-1.5 cm"
  },
  edibility: "edible",
  toxicityNotes: "Edible and widely consumed in Europe but, as with most slimy-capped Suillus, the gelatinous cap cuticle (pellicle) can cause mild gastrointestinal upset or laxative effects in sensitive individuals if eaten in quantity. Standard practice: peel off the slimy cap cuticle before cooking, and discard the tube layer in older specimens (it becomes mushy and is more likely to cause GI symptoms). Cook thoroughly and never eat raw. Some people develop a mild contact dermatitis from handling large numbers.",
  lookalikes: [
    { name: "Slippery Jack", scientific: "Suillus luteus", danger: "edible", distinguishingFeature: "Has a conspicuous purplish-brown membranous partial veil leaving a dark ring on the upper stem; glandular dots present only above the ring; cap typically darker chocolate-brown; S. granulatus NEVER has a ring or veil tissue" },
    { name: "Short-stalk Slippery Jack", scientific: "Suillus brevipes", danger: "edible", distinguishingFeature: "Stem short and stubby (usually shorter than cap is wide), white and lacking obvious glandular dots; cap darker reddish-brown when young; no milky droplets on pores or stem" },
    { name: "Pungent Slippery Jack", scientific: "Suillus pungens", danger: "edible", distinguishingFeature: "Strongly acrid/pungent odor (vs. mild); cap mottled olive, white and yellow when young, then brick-red or orange in age; mainly California but extending up the coast" },
    { name: "Pseudo Short-stem Suillus", scientific: "Suillus pseudobrevipes", danger: "edible", distinguishingFeature: "Has a thin whitish partial veil leaving a faint ring zone or veil patches on the stem when young; glandular dots weak or absent" },
    { name: "Yellow-granule Suillus", scientific: "Suillus flavogranulatus", danger: "edible", distinguishingFeature: "Very similar but has noticeably larger pores (1-2.5 mm, may be elongated), bright sulphur-yellow interior flesh, and slowly stains pinkish-brown when cut; cap stays paler/yellow-ochraceous and lacks the reddish-cinnamon tones of mature S. granulatus" },
    { name: "Siberian Slippery Jack", scientific: "Suillus sibiricus", danger: "edible-with-caution", distinguishingFeature: "Associated strictly with 5-needle (white) pines, not 2-needle pines; has veil remnants on the cap margin and stem; cap more yellowish with darker fibrils/scales; reported to cause GI upset more readily" },
    { name: "Larch Suillus / Tamarack Jack", scientific: "Suillus grevillei", danger: "edible", distinguishingFeature: "Bright yellow-orange viscid cap, yellow stem with a ring from a partial veil; strictly with larch (Larix), never pines" },
    { name: "Chicken-fat Suillus", scientific: "Suillus americanus", danger: "edible-with-caution", distinguishingFeature: "Bright yellow cap with reddish streaks/scales and cottony veil tissue on the margin; strictly with eastern white pine (5-needle); known to cause contact dermatitis and GI upset in some" }
  ],
  culinary: {
    flavor: "Mild, pleasant, faintly nutty; not as flavorful as porcini but a serviceable edible that absorbs flavors well in mixed-mushroom dishes; in much of Europe it is a popular, widely-collected market mushroom",
    preparation: "ALWAYS peel off the slimy cap cuticle (pellicle) before cooking - it cooks to an unpleasant gelatinous slime if left on, and removal greatly improves digestibility. Remove the tube layer in older or rain-soaked specimens. Slice and saute slowly in butter or oil to drive off moisture before seasoning; excellent in sauces, soups, risotto, mixed-mushroom saute, omelets, and with pasta. A traditional ingredient in central and eastern European mushroom dishes, often paired with onions, garlic, sour cream, or stronger mushrooms.",
    preservation: "Dries well after peeling and slicing; rehydrate for soups and stews. Traditionally pickled in vinegar/oil in central and eastern European cuisine - one of the classic 'pickled slippery jacks' of Polish, Russian, and Czech cooking. Can also be sauteed and frozen."
  },
  conservationNotes: "Globally secure and extremely common throughout its range. A Eurasian native that has been introduced worldwide with planted pines (an obligate symbiont of 2-needle pines, so it travels with them) and is now naturalized on every continent except Antarctica. In the PNW it is not native but is well established and not of conservation concern; some mycologists note that introduced Suillus species can locally outcompete native Suillus in disturbed and urban pine plantings.",
  sources: [
    { name: "MushroomExpert.com - Suillus granulatus (Michael Kuo)", url: "https://www.mushroomexpert.com/suillus_granulatus.html" },
    { name: "Pacific Northwest Key Council - Trial Field Key to the Boletes (SVIMS)", url: "https://www.svims.ca/council/Bolete.htm" },
    { name: "Burke Herbarium Image Collection - Suillus (University of Washington)", url: "https://burkeherbarium.org/imagecollection/browse.php?Genus=Suillus" },
    { name: "MykoWeb - Fungi of California: Suillus granulatus", url: "https://www.mykoweb.com/CAF/species/Suillus_granulatus.html" },
    { name: "Wikipedia - Suillus granulatus", url: "https://en.wikipedia.org/wiki/Suillus_granulatus" },
    { name: "First Nature - Suillus granulatus (Pat O'Reilly)", url: "https://www.first-nature.com/fungi/suillus-granulatus.php" },
    { name: "GBIF - Suillus granulatus occurrence and taxonomy", url: "https://www.gbif.org/species/8146046" }
  ]
}
,
{
  id: "suillus-ponderosus",
  commonNames: ["Heavy Suillus", "Ponderous Suillus", "Ponderous Slippery Jack", "Western Yellow Pine Suillus"],
  scientific: "Suillus ponderosus",
  family: "Suillaceae",
  order: "Boletales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Pseudotsuga menziesii"],
  hostTrees: [
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" }
  ],
  substrate: "duff and mineral soil under Douglas-fir, often in mixed-conifer stands; on the ground, single, scattered, or gregarious",
  habitat: "Ectomycorrhizal partner of Douglas-fir despite the misleading 'Western Yellow Pine' common name (the species does not associate with Pinus ponderosa). Fruits in mixed conifer forest where Douglas-fir is present, frequently alongside its close relative Suillus caerulescens (fat jack) and Suillus lakei (western painted slippery jack). A large, robust, classic PNW autumn bolete of low- to mid-elevation Douglas-fir forest.",
  elevationM: { min: 0, max: 1800 },
  regionsPNW: ["Oregon Coast Range", "Willamette Valley foothills", "Washington Cascades (west slope)", "Puget Sound lowlands", "Olympics", "southern British Columbia (reported)", "Idaho Panhandle"],
  fruitingMonths: [9, 10, 11, 12],
  peakMonths: [10, 11],
  conditions: {
    minRain7d: 20,
    idealDaysSinceRain: [5, 14],
    tempRangeC: [6, 18],
    humidityMinPct: 75
  },
  identification: {
    cap: "Viscid (slimy when wet), glabrous or with veil remnants near the margin only; yellow to cinnamon to reddish brown, sometimes purplish brown, streaked or sometimes tinged green; less innately streaked than Suillus caerulescens; convex becoming broadly convex to nearly flat; 9-29 cm broad - the largest Suillus in the region",
    underside: "Tubes up to 1.5 cm deep, dull yellow, slightly decurrent; pores large (1-3 mm), angular, yellow, staining brownish when bruised",
    stem: "9-14 cm long x 3-6 cm thick, pale yellow, robust and stout; bears a conspicuous heavy gelatinous annulus (ring) that is yellow to tawny-brown and often stained reddish-cinnamon on the underside from the gelatinous outer layer (a key distinguishing trait); lacking glandular dots; interior of base stains greenish when cut",
    fleshColor: "Yellow, unchanging or becoming faintly pinkish; greenish staining in the stem base when cut",
    sporePrintColor: "Cinnamon brown to dull brown",
    odor: "Not distinctive, or sharply acidulous; taste mild, not distinctive",
    sizeCm: "Cap 9-29 cm; stem 9-14 x 3-6 cm; one of the heaviest/largest Suillus species in western North America"
  },
  edibility: "edible",
  toxicityNotes: "Considered edible but of mediocre quality. Like other slippery jacks, the slimy cap cuticle and gelatinous veil should be peeled off before cooking; some people experience GI upset from Suillus species with the slime layer left on. Best when young, firm, and dried before use.",
  lookalikes: [
    { name: "Fat Jack / Douglas-fir Slippery Jack", scientific: "Suillus caerulescens", danger: "edible", distinguishingFeature: "Smaller, more innately fibrillose-streaked yellow to tawny-brown cap; partial veil is membranous/fibrillose and remains dry (not heavy and gelatinous); also a Douglas-fir associate and often fruits together with S. ponderosus" },
    { name: "Western Painted Slippery Jack", scientific: "Suillus lakei", danger: "edible", distinguishingFeature: "Dry, scaly, darker red-brown cap with conspicuous reddish fibrillose scales (not viscid); also associated with Douglas-fir; smaller stature and lacks the heavy gelatinous ring" },
    { name: "Slippery Jack", scientific: "Suillus luteus", danger: "edible", distinguishingFeature: "Dark chocolate-brown viscid cap, white-then-yellow membranous (not heavily gelatinous) ring with a purplish underside; associated with 2-needle pines (Pinus) rather than Douglas-fir; introduced in parts of the PNW" },
    { name: "Granulated Slippery Jack", scientific: "Suillus granulatus", danger: "edible", distinguishingFeature: "Smaller cap, no partial veil/ring at all, conspicuous glandular dots on the stem, droplets ('milking') on young pore surface; associated with pines" },
    { name: "Short-stalked Suillus", scientific: "Suillus brevipes", danger: "edible", distinguishingFeature: "No veil and no ring, short stem without glandular dots, dark brown viscid cap; associated with lodgepole and shore pine" }
  ],
  culinary: {
    flavor: "Mild, mushroomy but bland; texture is the main issue - soft and slippery when fresh due to the gelatinous cap cuticle and veil",
    preparation: "Peel the slimy cuticle off the cap and remove the gelatinous ring before cooking. Best in dishes that benefit from a soft texture (soups, stews, sauces) or sliced thin and sauteed at high heat to drive off moisture. Young firm buttons are the only worthwhile pickings; older specimens are mushy and waterlogged.",
    preservation: "Drying is the preferred preservation method - slice 5-8 mm thick and dehydrate at 40-50 C until cracker-dry. Dried Suillus rehydrates with improved (less slippery) texture and concentrated flavor, suitable for stocks. Freezing fresh is not recommended due to the slime layer."
  },
  conservationNotes: "Not assessed by IUCN. Locally common in PNW Douglas-fir forest and not considered at risk; depends on intact Douglas-fir mycorrhizal partners, so old-growth removal and clearcuts can locally reduce fruiting. Generally overlooked by commercial harvesters in favor of choicer boletes.",
  sources: [
    { name: "PNW Key Council - Trial Field Key to the Boletes in the Pacific Northwest (Suillus ponderosus entry)", url: "https://www.svims.ca/council/Bolete.htm" },
    { name: "MykoWeb - California Fungi: Suillus caerulescens (with comparison notes to S. ponderosus)", url: "https://www.mykoweb.com/CAF/species/Suillus_caerulescens.html" },
    { name: "Mushrooms Up! (UBC Beaty Museum) - Suillus caerulescens (notes S. ponderosus as a Douglas-fir associate with gelatinous ring)", url: "https://explore.beatymuseum.ubc.ca/mushroomsup/S_caerulescens.html" },
    { name: "MushroomExpert.com - The Genus Suillus (Michael Kuo)", url: "https://www.mushroomexpert.com/suillus.html" },
    { name: "iNaturalist - Suillus ponderosus (Ponderous Slippery Jack) species page", url: "https://www.inaturalist.org/guide_taxa/1478100" },
    { name: "Nguyen, N. H. et al. (2016) - The Suillus spectacle: a phylogenetic study of the genus Suillus. Fungal Biology 120: 1352-1372.", url: "https://doi.org/10.1016/j.funbio.2016.06.008" }
  ]
}
,
{
  id: "suillus-pungens",
  commonNames: ["Pungent Slippery Jack", "Slippery Jack", "Pungent Suillus"],
  scientific: "Suillus pungens",
  family: "Suillaceae",
  order: "Boletales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Pinus radiata", "Pinus muricata"],
  hostTrees: [
    { common: "Monterey pine", scientific: "Pinus radiata" },
    { common: "Bishop pine", scientific: "Pinus muricata" }
  ],
  substrate: "Soil and duff beneath two- and three-needle pines; often in sandy coastal soils and urban plantings.",
  habitat: "Scattered to gregarious under Monterey pine and bishop pine in coastal closed-cone pine forests, urban parks, cemeteries, and landscaped areas where Monterey pine has been planted. Frequently fruits with the pine spike (Chroogomphus vinicolor).",
  elevationM: { min: 0, max: 300 },
  regionsPNW: ["Southern Oregon coast (planted Monterey pine)", "Puget Sound urban plantings (rare)", "Primarily central and northern California coast — peripheral in PNW"],
  fruitingMonths: [1, 2, 6, 7, 8, 10, 11, 12],
  peakMonths: [11, 12, 1],
  conditions: {
    minRain7d: 15,
    idealDaysSinceRain: [3, 10],
    tempRangeC: [7, 18],
    humidityMinPct: 75
  },
  identification: {
    cap: "5–15 cm broad, convex to plano-convex, very viscid/slimy when moist. Distinctive color sequence: starts whitish to chalk-white in youth, transitions through gray with olive tints, then to dingy yellow and olive-yellow, finally a mottled rusty-brown and yellow-brown at maturity. Different stages often present on the same flush, giving a bewildering 'multicolored' appearance.",
    underside: "Pores small, angular, pale yellow when young, becoming dingy yellow-olive to ochraceous with age; young specimens exude milky/whitish droplets (latex-like beads) on the pore surface — a key field character. No partial veil.",
    stem: "3–8 cm long, 1.5–3 cm thick, solid, equal or slightly tapered, whitish to pale yellow, dotted with small glandulae that darken with age; no ring.",
    fleshColor: "Whitish to pale yellow, soft, unchanging or only weakly staining when cut.",
    sporePrintColor: "Cinnamon-brown to olive-brown",
    odor: "Strong, pungent, and distinctive — variously described as fruity, harsh, resinous, or 'green-apple-like'; a critical diagnostic feature that gives the species its epithet.",
    sizeCm: "Cap 5–15 cm; stem 3–8 × 1.5–3 cm"
  },
  edibility: "edible",
  toxicityNotes: "Edible but widely regarded as mediocre: soft, often mushy texture; pungent odor can persist in cooking. Slimy cap cuticle should be peeled before eating. Frequently heavily infested with fly larvae, especially in mature specimens — inspect carefully. Some foragers report mild GI upset if the slimy cuticle is not removed.",
  lookalikes: [
    {
      name: "Granulated Slippery Jack",
      scientific: "Suillus granulatus",
      danger: "edible",
      distinguishingFeature: "Cap more uniformly tan to cinnamon-brown without the dramatic white→olive→rusty color shift; lacks the strong pungent odor of S. pungens; associates with two-needle pines."
    },
    {
      name: "Short-stemmed Slippery Jack",
      scientific: "Suillus brevipes",
      danger: "edible",
      distinguishingFeature: "Stem lacks gland-dots (smooth, white to yellow); cap dark chocolate-brown to reddish-brown without color sequence; mild odor."
    },
    {
      name: "Dark-fibrous Slippery Jack",
      scientific: "Suillus fuscotomentosus",
      danger: "edible",
      distinguishingFeature: "Cap subviscid and squamulose (dark-brown matted scales over cream ground) rather than smooth and slimy; similar fruity-harsh odor but cap never goes through the white→olive→rust progression."
    },
    {
      name: "Woolly-capped Suillus",
      scientific: "Suillus tomentosus",
      danger: "edible",
      distinguishingFeature: "Cap with tomentose scales, pores bruise blue (S. pungens pores do not bruise blue), associates with two-needle shore pines."
    }
  ],
  culinary: {
    flavor: "Mild to slightly resinous; texture soft and often slimy unless cap cuticle is peeled. Pungent fresh odor mellows with cooking but rarely vanishes entirely.",
    preparation: "Peel the slimy cap cuticle and remove tubes from older specimens before cooking. Best used young and firm. Sauté slowly to drive off moisture; works in mixed-mushroom dishes, soups, and stews where other flavors balance its softness.",
    preservation: "Young specimens dry well and improve in flavor when reconstituted; also commonly pickled. Not recommended for freezing fresh due to soft texture."
  },
  conservationNotes: "Not of conservation concern. Abundant wherever Monterey pine is planted; in the PNW it occurs almost exclusively as a follower of ornamental and plantation Pinus radiata rather than in native forest, so populations track human plantings.",
  sources: [
    { name: "MushroomExpert.com — Suillus pungens (Michael Kuo, 2024)", url: "https://www.mushroomexpert.com/suillus_pungens.html" },
    { name: "MykoWeb — California Fungi: Suillus pungens (Michael Wood)", url: "https://www.mykoweb.com/CAF/species/Suillus_pungens.html" },
    { name: "MykoWeb — Suillus fuscotomentosus (comparison/lookalike reference)", url: "https://www.mykoweb.com/CAF/species/Suillus_fuscotomentosus.html" }
  ]
}
,
{
  id: "suillus-sibiricus",
  commonNames: ["Siberian Slippery Jack", "Siberian Suillus"],
  scientific: "Suillus sibiricus",
  family: "Suillaceae",
  order: "Boletales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: [
    "5-needle pines (Pinus subgenus Strobus)",
  ],
  hostTrees: [
    { common: "Western white pine", scientific: "Pinus monticola" },
    { common: "Limber pine", scientific: "Pinus flexilis" },
    { common: "Whitebark pine", scientific: "Pinus albicaulis" },
  ],
  substrate: "Soil and duff beneath 5-needle pines; forms strict ectomycorrhizal associations with Pinus subgenus Strobus.",
  habitat: "Subalpine and upper-montane conifer forests dominated or co-dominated by 5-needle white pines (western white, limber, whitebark); often in open, rocky stands near treeline. Fruits in scattered groups or arcs near host trees following late-summer monsoon moisture or autumn rains.",
  elevationM: { min: 1800, max: 3500 },
  regionsPNW: [
    "Sierra Nevada",
    "Eastern Sierra",
    "Lake Tahoe Basin",
    "Carson Range",
    "subalpine",
  ],
  fruitingMonths: [7, 8, 9, 10],
  peakMonths: [8, 9],
  conditions: {
    minRain7d: 12,
    idealDaysSinceRain: [4, 12],
    tempRangeC: [6, 20],
    humidityMinPct: 65,
  },
  identification: {
    cap: "5–10 cm broad; hemispherical becoming convex to nearly flat; straw to dingy yellow, developing reddish-brown spots, scales, or appressed fibrils with age; surface mucilaginous (slimy) when moist; cuticle easily peeled.",
    underside: "Tube layer yellow becoming brownish, adnate to slightly decurrent; pores angular, large (often wider than 1 mm at maturity), yellow, bruising dirty pinkish to vinaceous brown.",
    stem: "4–8 cm long, 1–2 cm thick; equal or slightly tapered; yellow ground color with conspicuous cinnamon-brown to reddish glandular dots and smears; partial veil leaving a felty ring zone or appendiculate fragments on the cap margin.",
    fleshColor: "Yellow; sometimes staining slightly pinkish or vinaceous on exposure.",
    sporePrintColor: "Cinnamon brown (without olive tinge)",
    odor: "Not distinctive; mild, faintly fungoid; taste mild to slightly sour or bitter.",
    sizeCm: "Cap 5–10 cm; stem 4–8 x 1–2 cm",
  },
  edibility: "edible-with-caution",
  toxicityNotes: "Mediocre edible at best — flavor is mild to slightly sour/bitter and the slimy cap cuticle should be peeled before cooking. Known to cause gastrointestinal upset or allergic/contact reactions in some individuals; eat only small amounts when trying for the first time, and always cook thoroughly.",
  lookalikes: [
    {
      name: "Chicken-fat mushroom",
      scientific: "Suillus americanus",
      danger: "edible-with-caution",
      distinguishingFeature: "Eastern North American counterpart (likely conspecific by DNA); brighter lemon-yellow cap, narrower stem, and associates with eastern white pine (Pinus strobus) rather than western 5-needle pines.",
    },
    {
      name: "Umbonate slippery jack",
      scientific: "Suillus umbonatus",
      danger: "edible-with-caution",
      distinguishingFeature: "Smaller, paler grayish-yellow cap usually with a distinct umbo, persistent gelatinous ring, and small pores; also under conifers in the West.",
    },
    {
      name: "Aspen slippery jack",
      scientific: "Suillus subaureus",
      danger: "edible",
      distinguishingFeature: "Yellower cap with orangish young pores; associates with quaking aspen (Populus tremuloides), not pines; spores smaller and hyaline microscopically.",
    },
    {
      name: "Short-stemmed slippery jack",
      scientific: "Suillus brevipes",
      danger: "edible",
      distinguishingFeature: "Dark reddish-brown to chocolate cap, white-to-yellow stem lacking glandular dots and lacking a ring; associated with 2- and 3-needle pines, not white pines.",
    },
  ],
  culinary: {
    flavor: "Mild, sometimes slightly sour or faintly bitter; lacks the rich nutty flavor of choice boletes. Considered mediocre.",
    preparation: "Peel the slimy cap cuticle and remove the tube layer in older specimens before cooking. Sauté slowly to evaporate moisture; best mixed with stronger-flavored mushrooms, in soups, or pickled. Always cook thoroughly — never eat raw.",
    preservation: "Drying is poor due to high moisture and slime; pickling in vinegar (Eastern European style) is the traditional preservation method.",
  },
  conservationNotes: "Listed on regional red lists in at least seven European countries (vulnerable or endangered) due to its strict dependence on threatened 5-needle pines. In the Sierra Nevada and Great Basin its hosts — particularly whitebark pine (federally threatened in the U.S.) and limber pine — are declining from white pine blister rust, mountain pine beetle, and climate change. Harvest sparingly and avoid disturbing the substrate near host trees.",
  sources: [
    { name: "MushroomExpert.com — Suillus sibiricus (Michael Kuo)", url: "https://www.mushroomexpert.com/suillus_sibiricus.html" },
    { name: "Wikipedia — Suillus sibiricus", url: "https://en.wikipedia.org/wiki/Suillus_sibiricus" },
    { name: "MykoWeb — California Fungi: Suillus", url: "https://www.mykoweb.com/CAF/genera/Suillus.html" },
    { name: "USDA Forest Service — Silvics of whitebark pine (Pinus albicaulis)", url: "https://www.fs.usda.gov/rm/pubs_int/int_gtr253.pdf" },
  ],
}
,
{
  id: "tricholoma-murrillianum",
  commonNames: ["Western Matsutake", "American Matsutake (western)", "Pine Mushroom", "White Matsutake", "Ponderosa Mushroom"],
  scientific: "Tricholoma murrillianum",
  family: "Tricholomataceae",
  order: "Agaricales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Pinus contorta var. contorta", "Pinus contorta var. latifolia", "Tsuga heterophylla", "Tsuga mertensiana", "Abies concolor", "Abies amabilis", "Pseudotsuga menziesii", "Notholithocarpus densiflorus", "Arbutus menziesii", "Arctostaphylos spp."],
  hostTrees: [
    { common: "Shore pine", scientific: "Pinus contorta var. contorta" },
    { common: "Lodgepole pine", scientific: "Pinus contorta var. latifolia" },
    { common: "Western hemlock", scientific: "Tsuga heterophylla" },
    { common: "Mountain hemlock", scientific: "Tsuga mertensiana" },
    { common: "White fir", scientific: "Abies concolor" },
    { common: "Pacific silver fir", scientific: "Abies amabilis" },
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" },
    { common: "Tanoak", scientific: "Notholithocarpus densiflorus" },
    { common: "Pacific madrone", scientific: "Arbutus menziesii" },
    { common: "Manzanita", scientific: "Arctostaphylos spp." }
  ],
  substrate: "Mineral soil to sandy/well-drained duff under conifers (and in southern parts of its range under tanoak/madrone/manzanita); forms a dense subterranean mycelial mat ('shiro') that aggregates soil, roots, and humus into a compact, whitish layer. In the PNW characteristically fruits from sandy or pumiceous mineral soil under shore pine on coastal dunes, from deep needle duff under lodgepole pine, and from humus-poor soils under hemlock/true-fir at montane elevations.",
  habitat: "Strictly ectomycorrhizal. In the PNW most productive habitats are: (1) coastal shore-pine (Pinus contorta var. contorta) stands on stabilized dunes and headlands from northern California through coastal Oregon, Washington, and BC; (2) montane and subalpine lodgepole-pine, mountain-hemlock, and true-fir forests of the Cascades, Olympics, and BC interior; (3) mixed conifer/tanoak/madrone forests in southwest Oregon and northern California. Fruits in fairy rings or arcs (so-called 'shiro') that expand outward year over year; mushrooms often push up under duff and are detected as bumps ('mushrumps') before emerging. Strongly favors mossy, somewhat impoverished, acidic forest soils; intolerant of recent heavy disturbance but persistent in mature stands for decades.",
  elevationM: { min: 0, max: 2000 },
  regionsPNW: ["Oregon Coast (shore pine dunes)", "Washington Coast", "Olympic Peninsula", "Vancouver Island", "British Columbia Coast and Interior", "Cascades (both slopes)", "Klamath / Siskiyou (SW Oregon, NW California)", "Eastern Washington/Oregon montane lodgepole stands", "Blue Mountains", "Northern California (Mendocino, Humboldt, Del Norte)"],
  fruitingMonths: [9, 10, 11, 12, 1],
  peakMonths: [10, 11],
  conditions: {
    minRain7d: 25,
    idealDaysSinceRain: [7, 21],
    tempRangeC: [5, 18],
    humidityMinPct: 75
  },
  identification: {
    cap: "5-25 cm broad; convex with strongly inrolled margin when young, expanding to plano-convex and finally flat or upturned in age; surface dry to subviscid when moist, white to whitish when young, soon developing appressed cinnamon to reddish-brown fibrils and scales (especially from the disc outward), and bruising/staining yellow, orange, or reddish-brown where handled; older caps may appear largely brown",
    underside: "Gills white to cream, crowded, adnate to adnexed or sinuate, spotting reddish-brown to cinnamon in age and where bruised; covered when young by a thick cottony partial veil",
    stem: "4-15 cm long x 1-6 cm thick, solid, tough, firm, equal or slightly tapered at base; white above a prominent flaring cottony ring; below the ring sheathed by white to cinnamon-brown veil fibrils and scales that match the cap; stains orange-brown to reddish-brown when handled",
    fleshColor: "Thick, firm, white throughout, unchanging or slowly staining pinkish-brown on long exposure",
    sporePrintColor: "White",
    odor: "Distinctive and diagnostic: a strong, spicy-sweet cinnamon/red-hot-candy fragrance blended with a sweaty/socks pungency (David Arora's 'provocative compromise between Red Hots and dirty socks'); the odor is the single most reliable field character and is present even in young buttons",
    sizeCm: "Cap 5-25 cm; stem 4-15 cm x 1-6 cm; robust, dense, and heavy for its size"
  },
  edibility: "choice",
  toxicityNotes: "Edible and highly prized; no toxins known in T. murrillianum itself. However, serious poisonings (acute renal failure requiring dialysis) have repeatedly occurred in the PNW from confusion with Amanita smithiana, which shares similar size, white color, and conifer habitat. ALWAYS verify the spicy-cinnamon odor, the sheathing cottony veil (not a free volva), the absence of a basal cup/bulb, and the orange-brown staining before eating any white 'matsutake'.",
  lookalikes: [
    { name: "Smith's Amanita", scientific: "Amanita smithiana", danger: "toxic", distinguishingFeature: "DANGEROUS LOOKALIKE - causes acute kidney failure (allenic norleucine / chlorocrotylglycine toxins). White, similar size and conifer habitat (Abies, Tsuga, Pseudotsuga in PNW). Key differences: FREE gills (not adnate/sinuate); soft, friable, COTTONY-FLOCCULENT veil remnants and pyramidal warts on cap (not appressed cinnamon fibrils); stem base with a rooting, often clubbed/bulbous bulb bearing concentric rings of shaggy volval scales (no true sheathing veil from below); flesh does NOT stain orange-brown; odor mild to faintly unpleasant, NEVER the spicy cinnamon of matsutake; spore print white but spores amyloid (vs. non-amyloid in Tricholoma). If in doubt, do not eat." },
    { name: "Catathelasma / Imperial Cat", scientific: "Catathelasma ventricosum / C. imperiale", danger: "edible", distinguishingFeature: "Also large, white, firm, with a sheathing veil under conifers; differs in DOUBLE ring (membranous inner + sheathing outer), decurrent gills (vs. adnate/sinuate in matsutake), tapered rooting stem base, and farinaceous/cucumber odor rather than spicy cinnamon" },
    { name: "Booted Tricholoma / Brown Matsutake", scientific: "Tricholoma caligatum (sensu PNW)", danger: "edible", distinguishingFeature: "Darker brown cap with coarser fibrillose scales from the start; smaller (cap 5-12 cm); less spicy, more bitter/soapy odor; less robust; occurs in PNW conifer forests and is often mistaken for a small or aging matsutake" },
    { name: "Eastern American Matsutake", scientific: "Tricholoma magnivelare", danger: "edible", distinguishingFeature: "Now restricted by molecular work (Trudell et al. 2017) to eastern North America; darker, rougher pileus; ranges do not overlap with T. murrillianum so geography is diagnostic" },
    { name: "Fly Agaric (white forms)", scientific: "Amanita muscaria var. alba (rare)", danger: "toxic", distinguishingFeature: "Free gills, basal bulb with concentric volval rings, no sheathing matsutake veil, no spicy odor; muscimol/ibotenic-acid toxicity" },
    { name: "Western Woolly Tricholoma", scientific: "Tricholoma vernaticum (= T. focale in part)", danger: "edible", distinguishingFeature: "Sheathed white-to-orange stem, but mealy/cucumber odor (not cinnamon-spicy), smaller and more orange-tinted; spring-fruiting at montane elevations" }
  ],
  culinary: {
    flavor: "Highly distinctive: aromatic, spicy-cinnamon, slightly pine-resinous, with a firm meaty texture that holds up to cooking. The aroma is volatile and dominant; matsutake is valued more for its scent than for any mushroomy 'umami' flavor. Considered one of the world's premier edible mushrooms and the basis of a multi-million-dollar export industry from the PNW to Japan.",
    preparation: "Best preparations preserve the aroma: tear (don't slice) into strips and add late to delicate broths and rice (Japanese dobin-mushi, matsutake gohan, suimono), grill briefly over charcoal (yakimatsutake) with a squeeze of sudachi or lemon, or slice paper-thin and add raw to clear soups. Avoid heavy garlic, butter, or long stewing which masks the aroma. Young buttons with intact veils are the most prized; older specimens with open caps are still flavorful but coarser. Clean by wiping or scraping with a damp cloth - do not soak.",
    preservation: "Refrigerates well wrapped in paper towel inside a paper bag for up to 10-14 days. Freezes acceptably if sliced and lightly sauteed first, though some aroma is lost. Dehydrates poorly (aroma volatilizes); not traditionally dried. Salt-curing (Japanese 'shiozuke') and vacuum-sealing frozen are best long-term methods. Pickled or preserved in sake/mirin is also traditional."
  },
  conservationNotes: "Listed as Vulnerable on the IUCN Red List globally for the matsutake species complex due to declining harvests in Asia and habitat pressures. In the PNW, populations remain locally abundant but are affected by commercial harvest pressure, raking/duff disturbance (which damages the shiro), habitat conversion, and fire suppression altering host-tree stand structure. Managed on US Forest Service and BLM lands in Oregon and Washington under permit systems; raking is prohibited. Important non-timber forest product and a culturally significant species for Indigenous and immigrant harvesting communities (notably Southeast Asian harvesters in central Oregon).",
  sources: [
    { name: "MykoWeb - California Fungi: Tricholoma murrillianum (Wood & Stevens)", url: "https://www.mykoweb.com/CAF/species/Tricholoma_murrillianum.html" },
    { name: "Wikipedia - Tricholoma murrillianum", url: "https://en.wikipedia.org/wiki/Tricholoma_murrillianum" },
    { name: "Fungus Federation of Santa Cruz - Tricholoma murrillianum (Matsutake)", url: "https://www.ffsc.us/featured-fungi/matsutake" },
    { name: "Salish Mushrooms - Matsutake (Tricholoma murrillianum) PNW Identification Guide", url: "https://salishmushrooms.com/mushrooms/tricholoma-murrillianum/" },
    { name: "Wikipedia - Amanita smithiana (dangerous lookalike)", url: "https://en.wikipedia.org/wiki/Amanita_smithiana" },
    { name: "Trudell, Xu, Saar, Justo & Cline (2022). Pacific Northwest Tricholomas: Are We Using the Right Names?", url: "https://www.mykoweb.com/CAF/species/Tricholoma_murrillianum.html" }
  ]
}
,
{
  id: "tuber-gibbosum",
  commonNames: ["Oregon Spring White Truffle", "Spring White Truffle", "Oregon White Truffle (spring form)"],
  scientific: "Tuber gibbosum",
  family: "Tuberaceae",
  order: "Pezizales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Pseudotsuga menziesii"],
  hostTrees: [
    { common: "Douglas-fir", scientific: "Pseudotsuga menziesii" }
  ],
  substrate: "Hypogeous (subterranean); forms at 2-30 cm depth in well-drained, often loamy or sandy forest soils within the root zone of Douglas-fir; commonly found beneath duff and moss layers.",
  habitat: "Young to early-mature (roughly 10-40 year old) Douglas-fir stands, especially second-growth plantations on former pasture or Christmas tree farms in the western PNW; west of the Cascade crest from northern California to southern British Columbia.",
  elevationM: { min: 0, max: 610 },
  regionsPNW: ["Oregon Coast Range", "Willamette Valley foothills", "Western Oregon Cascades (low elevation)", "Southwest Washington", "Puget Sound lowlands", "Southern Vancouver Island / BC coast", "Northern California coast"],
  fruitingMonths: [3, 4, 5, 6],
  peakMonths: [4, 5],
  conditions: {
    minRain7d: 15,
    idealDaysSinceRain: [3, 14],
    tempRangeC: [4, 16],
    humidityMinPct: 80
  },
  identification: {
    cap: "Outer peridium (skin) thin, smooth to slightly furrowed and nearly translucent; pale olive to yellow-brown with brown mottling, darkening and becoming more reddish-brown at maturity; surface may produce fine hair-like hyphal tufts in furrows.",
    underside: "Gleba (interior flesh) firm and solid white when immature, maturing to a marbled pattern of dark brown to chocolate-brown veins separated by thin white sterile veins; no true hymenium - spores produced in asci enclosed within the gleba.",
    stem: "absent (subterranean)",
    fleshColor: "White when young, becoming pale tan to brown with persistent white marbling at maturity",
    sporePrintColor: "Not applicable (hypogeous; spores are released only when the truffle is consumed or decays). Spores ellipsoid, ornamented with a reticulate (honeycomb) pattern, yellow-brown in mass.",
    odor: "Mature: complex aroma of garlic, aged cheese, and warm spices; often faint or undetectable at harvest and develops fully over several days of post-harvest ripening.",
    sizeCm: "walnut to golf-ball, 1-5cm"
  },
  edibility: "choice",
  toxicityNotes: "No known toxicity. Immature (white-gleba) specimens are essentially aroma-less and not worth eating; only fully mature (marbled-gleba) truffles deliver the prized flavor. Truffles harvested by raking are routinely immature and considered inferior and ecologically damaging.",
  lookalikes: [
    {
      name: "Oregon Winter White Truffle",
      scientific: "Tuber oregonense",
      danger: "edible",
      distinguishingFeature: "Nearly identical macroscopically; distinguished primarily by fruiting season (winter through early spring vs. spring/early summer for T. gibbosum), microscopic spore ornamentation, and DNA. The two were treated as one species until 2010."
    },
    {
      name: "Oregon Brown Truffle",
      scientific: "Kalapuya brunnea",
      danger: "edible",
      distinguishingFeature: "Darker reddish-brown to brown peridium with a coarser, slightly warty surface; gleba marbling is finer; distinct nutty/cheese aroma rather than garlic-spice."
    },
    {
      name: "Oregon Black Truffle",
      scientific: "Leucangium carthusianum",
      danger: "edible",
      distinguishingFeature: "Black, wrinkled-warty peridium; gleba grayish with white marbling; pineapple/floral aroma; same habitat but unmistakable by color."
    },
    {
      name: "False truffles (Rhizopogon spp.)",
      scientific: "Rhizopogon spp.",
      danger: "inedible",
      distinguishingFeature: "Basidiomycete false truffles; gleba becomes powdery/spore-filled (not marbled), with chambered interior; usually rubbery texture and bland to unpleasant odor; common with Douglas-fir and pine."
    },
    {
      name: "Deer truffles / hart's truffles",
      scientific: "Elaphomyces spp.",
      danger: "inedible",
      distinguishingFeature: "Thick, hard, warty rind; interior becomes a dry purple-black to brown spore mass (not marbled); often parasitized by Cordyceps; bitter and not edible."
    }
  ],
  culinary: {
    flavor: "Highly aromatic when fully ripe - garlic, aged cheese, allium, herbs and warm spice; flavor is delivered primarily through aroma and is best raw or with very gentle heat.",
    preparation: "Use raw: shaved thin over warm pasta, risotto, scrambled eggs, soft cheeses, or buttered toast; infuse for 24-72 h in eggs, cream, butter, or rice in a sealed container to transfer aroma. Avoid prolonged cooking, which destroys the volatiles.",
    preservation: "Best fresh; store in a sealed jar with rice or eggs in the refrigerator and use within 7-10 days. Can be infused into butter, salt, or honey and frozen, though aroma diminishes substantially with freezing or drying."
  },
  conservationNotes: "Not formally listed, but commercial raking (the dominant harvest method in Oregon) damages Douglas-fir feeder roots and the surface mycelium, brings up large quantities of immature truffles, and is widely regarded as unsustainable. Trained truffle-dog harvesting, which selects only ripe specimens, is strongly encouraged by the Oregon Truffle Festival, North American Truffling Society, and OSU Extension. Habitat depends on retention of young/mid-age Douglas-fir stands.",
  sources: [
    { name: "OSU Extension - Oregon Native Edible Truffles (EM 9369)", url: "https://extension.oregonstate.edu/catalog/em-9369-oregon-native-edible-truffles" },
    { name: "Oregon Truffle Festival - Native Oregon Truffles", url: "https://oregontrufflefestival.org/" },
    { name: "Lefevre, Pilz, Trappe & Molina (2009) - Tuber gibbosum and Leucangium carthusianum: ecology, harvesting and marketing (North American Truffling Society)", url: "http://www.natruffling.org" },
    { name: "Frank et al. (2016) Mycorrhiza - Root-associated fungal communities of Douglas-fir stands producing Tuber oregonense and Tuber gibbosum", url: "https://link.springer.com/article/10.1007/s00572-015-0677-9" },
    { name: "Trappe, M., Evans, F. & Trappe, J.M. (2007). Field Guide to North American Truffles. Ten Speed Press", url: "https://www.penguinrandomhouse.com/books/197678/field-guide-to-north-american-truffles-by-matt-trappe/" },
    { name: "MykoWeb - In Quest of Oregon Truffles", url: "https://www.mykoweb.com/articles/OregonTruffles.html" }
  ]
}
,
{
  id: "tuber-oregonense",
  commonNames: ["Oregon White Truffle", "Oregon Winter White Truffle", "Winter White Truffle"],
  scientific: "Tuber oregonense",
  family: "Tuberaceae",
  order: "Pezizales",
  trophicMode: "mycorrhizal",
  mycorrhizalPartners: ["Pseudotsuga menziesii"],
  hostTrees: [
    { common: "Coastal Douglas-fir", scientific: "Pseudotsuga menziesii var. menziesii" },
    { common: "Western hemlock", scientific: "Tsuga heterophylla" },
    { common: "Sitka spruce", scientific: "Picea sitchensis" },
    { common: "Red alder", scientific: "Alnus rubra" }
  ],
  substrate: "Hypogeous (subterranean) in mineral soil and duff, typically 2-15 cm deep beneath the litter layer of conifer stands; thrives in both 'heavy' red clay soils and looser loamy soils.",
  habitat: "Young to early-mature pure Douglas-fir stands (often 5-100 years old, including Christmas tree plantations on former pasture land), sometimes mixed with western hemlock, Sitka spruce, or alder, west of the Cascade crest.",
  elevationM: { min: 0, max: 600 },
  regionsPNW: ["Western Oregon", "Southwest Washington", "Puget Sound lowlands", "Oregon Coast Range", "Willamette Valley foothills", "Southwest British Columbia (limited)"],
  fruitingMonths: [10, 11, 12, 1, 2, 3],
  peakMonths: [1, 2],
  conditions: {
    minRain7d: 25,
    idealDaysSinceRain: [2, 10],
    tempRangeC: [2, 12],
    humidityMinPct: 85
  },
  identification: {
    cap: "Peridium smooth to finely roughened; white to beige when immature, sometimes with yellowish, olive, or reddish-brown tints, maturing to reddish-brown overall with surface often developing fissures at full maturity.",
    underside: "Gleba (interior) firm and white when young with faint marbled texture; at maturity becomes smoky brown to grayish-brown with prominent white marbling from sterile veins, dense and solid throughout.",
    stem: "absent (subterranean)",
    fleshColor: "White to pale tan when young, maturing smoky brown with persistent white marbled veins",
    sporePrintColor: "Not applicable (spores released by decay/animal consumption); spores yellow-brown in mass, large, thick-walled, and strongly ornamented (reticulate)",
    odor: "Often little aroma when freshly harvested even when mature; develops 1-3 days post-harvest into a complex, intense bouquet of garlic, spice, and cheese (more intense than T. gibbosum)",
    sizeCm: "1-4 cm"
  },
  edibility: "choice",
  toxicityNotes: null,
  lookalikes: [
    {
      name: "Oregon Spring White Truffle",
      scientific: "Tuber gibbosum",
      danger: "edible",
      distinguishingFeature: "Macromorphologically nearly indistinguishable; fruits spring (Jan-Jun), has milder aroma, and differs in subtle spore morphology and DNA sequence. Both are sold interchangeably as 'Oregon white truffle.'"
    },
    {
      name: "Castellano's truffle",
      scientific: "Tuber castellanoi",
      danger: "edible",
      distinguishingFeature: "Member of the same T. gibbosum clade, separable only by spore micromorphology and molecular sequencing; less commonly encountered."
    },
    {
      name: "Bell-spored truffle",
      scientific: "Tuber bellisporum",
      danger: "edible",
      distinguishingFeature: "Sister species in the T. gibbosum complex; distinguished only microscopically by bell-shaped spore ornamentation."
    },
    {
      name: "Oregon Brown Truffle",
      scientific: "Kalapuya brunnea",
      danger: "edible",
      distinguishingFeature: "Brown peridium throughout life and a distinctive aged-cheese/garlic aroma; gleba lacks the white marbled veining typical of Tuber."
    },
    {
      name: "False truffle",
      scientific: "Rhizopogon spp.",
      danger: "inedible",
      distinguishingFeature: "Gleba is chambered/spongy (not marbled with sterile veins) and dries to a powdery spore mass; bland or unpleasant aroma; basidiomycete, not an ascomycete."
    },
    {
      name: "Deer truffle",
      scientific: "Elaphomyces granulatus",
      danger: "inedible",
      distinguishingFeature: "Thick, warty, hard rind and a powdery black spore mass at maturity; not a true Tuber and reportedly causes GI upset."
    }
  ],
  culinary: {
    flavor: "Intense, complex aroma of garlic, aged cheese, herbs, and warm spices once fully ripened; flavor more pungent than the milder Oregon Spring White Truffle and considered a premier North American culinary truffle.",
    preparation: "Use raw: shaved thinly over warm starchy or fatty dishes (scrambled eggs, risotto, pasta, butter, polenta, cream sauces) just before serving. Heat releases volatile aromas but should be brief. Best paired with mild, fatty carriers that absorb aroma. Only mature, fully ripe truffles (firm, marbled gleba, strong aroma) should be used; immature ones are aromaless.",
    preservation: "Best fresh within 7-10 days, stored in a sealed jar at refrigerator temperature with rice or eggs (which absorb the aroma). Can be infused into butter, oil, salt, or honey for medium-term storage. Freezing is acceptable but degrades texture; drying is not recommended as it destroys aroma."
  },
  conservationNotes: "Not formally listed; populations depend on healthy young Douglas-fir forests. Sustainable harvest with trained truffle dogs (which locate only ripe truffles) is strongly preferred over destructive raking, which damages mycelium, immature truffles, and the forest floor and produces unripe, aromaless specimens that depress market quality. Conservation of working forests provides ecosystem co-benefits (carbon sequestration, salmon habitat, wildlife corridors).",
  sources: [
    { name: "Oregon Truffle Festival - Native Oregon Truffles", url: "https://oregontrufflefestival.org/" },
    { name: "MykoWeb - California Fungi: Tuber oregonense", url: "https://www.mykoweb.com/CAF/species/Tuber_oregonense.html" },
    { name: "Bonito, Trappe, Rawlinson & Vilgalys (2010) - Improved resolution of major clades within Tuber and taxonomy of species within the Tuber gibbosum complex. Mycologia 102(5): 1042-1057", url: "https://www.mykoweb.com/CAF/species/Tuber_oregonense.html" },
    { name: "OSU Extension EM-9369 - Oregon Native Edible Truffles", url: "https://extension.oregonstate.edu/catalog/em-9369-oregon-native-edible-truffles" },
    { name: "North American Truffling Society - Oregon White Truffle", url: "https://natruffling.org/orwhttrf.htm" },
    { name: "Trappe et al. (2009) - Diversity, Ecology, and Conservation of Truffle Fungi in Forests of the Pacific Northwest. USDA PNW-GTR-772", url: "https://www.fs.usda.gov/pnw/pubs/pnw_gtr772.pdf" }
  ]
}
,
{
  id: "verpa-bohemica",
  commonNames: ["Wrinkled Thimble Cap", "Wrinkled Thimble-cap", "Early Morel", "Wrinkled Thimble Morel", "Early False Morel"],
  scientific: "Verpa bohemica",
  family: "Morchellaceae",
  order: "Pezizales",
  trophicMode: "saprotrophic",
  mycorrhizalPartners: null,
  hostTrees: [
    { common: "Black cottonwood", scientific: "Populus trichocarpa" },
    { common: "Quaking aspen", scientific: "Populus tremuloides" },
    { common: "Pacific willow", scientific: "Salix lucida ssp. lasiandra" },
    { common: "Red alder", scientific: "Alnus rubra" },
    { common: "White alder", scientific: "Alnus rhombifolia" }
  ],
  substrate: "Decomposing leaf litter, buried twigs, and rich riparian humus under cottonwoods, aspens, willows, and alders; often partially buried in plant litter and silty floodplain soils. Carbon/nitrogen stable-isotope work supports a primarily saprobic mode, though a partial mycorrhizal phase has been proposed.",
  habitat: "Early-spring riparian specialist. Fruits singly or scattered (rarely clustered) along river bottoms, creek terraces, sloughs, irrigation ditches, and seasonally moist floodplain forests dominated by black cottonwood, aspen, willow, and alder. Strongly tied to deciduous riparian gallery forest east of the Cascades and along major lowland rivers west of the Cascades. Prefers moist sites with ample sunlight; minimum growth temperature about 3 degrees C, optimum near 22 degrees C. Appears 1-3 weeks before true Morchella populiphila in the same drainages and continues fruiting into the early morel season.",
  elevationM: { min: 0, max: 1500 },
  regionsPNW: ["Columbia River corridor", "Snake River corridor", "Okanogan Highlands", "eastern Washington riparian zones", "eastern Oregon riparian zones", "Idaho Panhandle river bottoms", "Methow Valley", "Yakima River drainage", "Willamette Valley bottomlands", "southern Interior BC", "Fraser River bottomlands"],
  fruitingMonths: [3, 4, 5],
  peakMonths: [4],
  conditions: {
    minRain7d: 8,
    idealDaysSinceRain: [2, 8],
    tempRangeC: [4, 18],
    humidityMinPct: 65
  },
  identification: {
    cap: "Thimble-shaped to bell-shaped or conical, 2-5 cm tall x 2-4 cm wide; surface strongly wrinkled, folded, and longitudinally ribbed with brain-like convolutions (NOT pitted-and-ridged like a true morel); pale yellow-brown, tan, ochre to dark chocolate-brown, with ridge tips often darker; underside (free margin) whitish and sterile; CRITICAL ID FEATURE: cap is attached to the stem ONLY at the very apex and hangs free around the stem like a skirt, thimble, or lampshade",
    underside: "Whitish and sterile; the cap hangs free from the stem along its entire length except at the apex, so the inside (underside) of the cap surrounds the upper stem like a loose skirt - this skirt-like free margin is the single most reliable field character separating Verpa from Morchella and from half-free morels",
    stem: "Cylindrical, fragile and brittle, 4-12 cm long x 1-2.5 cm thick; whitish to pale cream or pale tan, often with faint scurfy/granular bands; interior NOT a single hollow chamber - stuffed with cottony-fibrous pith when young, becoming partially hollow with cottony remnants in age (very different from the cleanly hollow stem of a true morel)",
    fleshColor: "Whitish to pale cream throughout; very thin, fragile, and brittle - caps frequently break off in the basket and capless stems are common late in the season",
    sporePrintColor: "Pale yellow to yellow-ochre (a useful distinguishing feature - true morels have cream to pale buff prints)",
    odor: "Mild, earthy, faintly mushroomy and reminiscent of morels; taste indistinct but not unpleasant",
    sizeCm: "Total height 6-15 cm; cap 2-5 cm tall x 2-4 cm wide"
  },
  edibility: "edible-with-caution",
  toxicityNotes: "Eaten by some foragers but NOT recommended by most modern field authorities (Trudell & Ammirati; MushroomExpert; PNW Key Council). Verpa bohemica has been repeatedly documented to cause a neurotoxic syndrome characterized by muscular incoordination, loss of balance/ataxia, tremors, and a 'drunken' gait, often accompanied by gastrointestinal upset (nausea, vomiting, diarrhea). Symptoms are dose-dependent and cumulative - many people tolerate a small first meal but develop reactions after repeated meals over several days, or after large servings. Undercooked specimens are markedly more toxic; the unknown toxin appears partially heat-labile. Must always be thoroughly cooked, served in small portions, never eaten on consecutive days, and avoided entirely by children, pregnant individuals, and anyone with a history of neurological sensitivity. Avoid combining with alcohol. The pith-stuffed stem may concentrate the toxin and is sometimes discarded by foragers who eat the caps only.",
  lookalikes: [
    { name: "Half-free Morel (western)", scientific: "Morchella populiphila", danger: "edible-when-cooked", distinguishingFeature: "Cap attached to the stem about halfway down (NOT only at the apex), creating a shorter skirt; cap surface is TRULY pitted-and-ridged (honeycombed) rather than wrinkled/brain-like; stem cleanly hollow without cottony pith; fruits in the same cottonwood riparian habitat and at the same time, so confusion is common" },
    { name: "Eastern Half-free Morel", scientific: "Morchella punctipes", danger: "edible-when-cooked", distinguishingFeature: "Eastern North American counterpart of M. populiphila; cap attached at midpoint with honeycombed pits-and-ridges, hollow stem - not normally encountered in the PNW but included for comparison" },
    { name: "Yellow Morel", scientific: "Morchella esculentoides / Morchella americana", danger: "edible-when-cooked", distinguishingFeature: "Cap fully attached to stem along its entire length; cap surface truly pitted-and-ridged in a honeycomb pattern (not wrinkled-brain-like); stem and cap form a single continuous hollow chamber" },
    { name: "Smooth Thimble-cap", scientific: "Verpa conica", danger: "edible-with-caution", distinguishingFeature: "Same skirt-like cap attachment (only at apex) and similar stem with cottony pith, but cap surface is smooth or only faintly wrinkled, never with deep brain-like folds; rarer in the PNW, generally in conifer or mixed habitats; shares the same neurological toxicity concerns" },
    { name: "False Morel / Brain Mushroom", scientific: "Gyromitra esculenta", danger: "deadly", distinguishingFeature: "Cap reddish-brown to chestnut, irregularly lobed/saddle-shaped and brain-like (no thimble-with-skirt geometry); cap surface convolutions are coarser and more lobed than the longitudinal folds of V. bohemica; stem stout and chambered/stuffed with internal folds, NOT a clean thimble-on-a-stick; contains gyromitrin (MMH), potentially lethal, and a carcinogen" },
    { name: "Snowbank False Morel", scientific: "Gyromitra montana (= Gyromitra gigas)", danger: "toxic", distinguishingFeature: "Robust, stocky mushroom with tan to reddish-brown brain-like lobed cap; stem stout, chambered/folded internally; fruits near melting snow at higher elevations; not a thimble-and-skirt shape" },
    { name: "Elfin Saddle", scientific: "Helvella lacunosa", danger: "inedible", distinguishingFeature: "Cap saddle-shaped or irregularly two-to-three-lobed (not a tidy thimble), gray to black; stem deeply fluted with longitudinal channels rather than smooth and cottony-pithed" }
  ],
  culinary: {
    flavor: "Mild, earthy, and faintly morel-like but markedly thinner in flavor than true Morchella; many experienced foragers consider the flavor reward not worth the toxicity risk",
    preparation: "If consumed despite cautions: parboil sliced caps for 5 minutes in plenty of water and discard the water, then saute thoroughly in butter for at least 10-15 more minutes; serve only the caps in small portions, never on consecutive days, and never to first-time eaters in any meaningful quantity. Always slice lengthwise and inspect for insects/grit. Most modern authorities (Trudell & Ammirati; Kuo; Arora) explicitly do not recommend eating this species at all.",
    preservation: "Drying is sometimes practiced, but drying does NOT reliably eliminate the toxin and may concentrate it by weight; preservation is not generally recommended given the toxicity profile"
  },
  conservationNotes: "Common and locally abundant in suitable riparian habitat across the PNW; not of conservation concern. However, riparian cottonwood/aspen gallery forests are themselves declining due to dam regulation of natural flood regimes, channelization, agricultural conversion, and altered hydrology, which over the long term reduces suitable Verpa bohemica habitat. Reported declines in the PNW following severe spring floods or prolonged drought.",
  sources: [
    { name: "MushroomExpert.com - Verpa bohemica (Michael Kuo)", url: "https://www.mushroomexpert.com/verpa_bohemica.html" },
    { name: "MykoWeb - California Fungi: Verpa bohemica", url: "https://www.mykoweb.com/CAF/species/Verpa_bohemica.html" },
    { name: "PNW Key Council / SVIMS - Morels and False Morels of the Pacific Northwest (Ian Gibson & Kit Scates Barnhart)", url: "http://www.svims.ca/council/Morels.htm" },
    { name: "Burke Herbarium Image Collection - Verpa bohemica (wrinkled thimble-cap)", url: "https://burkeherbarium.org/imagecollection/taxon.php?Taxon=Verpa+bohemica" },
    { name: "Trudell, S. & Ammirati, J. (2009) - Mushrooms of the Pacific Northwest, Timber Press Field Guide, pp. 254-255", url: "https://www.timberpress.com/books/mushrooms_pacific_northwest/trudell/9780881929355" },
    { name: "Wikipedia - Verpa bohemica", url: "https://en.wikipedia.org/wiki/Verpa_bohemica" },
    { name: "Salish Mushrooms - Wrinkled Thimble Morel (Verpa bohemica) PNW Guide", url: "https://salishmushrooms.com/mushrooms/verpa-bohemica/" },
    { name: "Hobbs, C.R. (1995) - Verpa bohemica poisoning reports, NAMA Toxicology Committee Annual Report", url: "https://namyco.org/toxicology.php" },
    { name: "Beug, M.W., Shaw, M. & Cochran, K.W. (2006) - Thirty-plus years of mushroom poisoning: summary of the approximately 2,000 reports in the NAMA case registry", url: "https://namyco.org/docs/MWBeug_NAMA_30_years.pdf" }
  ]
}
,
];

export type { MushroomSpecies } from "./species-types";
