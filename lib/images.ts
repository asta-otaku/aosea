// Indigenous Nigerian / African oil & gas imagery
// Mix: Wikimedia Commons (Nigeria – Forcados, Dangote, Niger Delta, FPSO) + Unsplash for offshore/sea where no local equivalent
const W = "https://upload.wikimedia.org/wikipedia/commons";
const U = "https://images.unsplash.com/photo";

// Wikimedia – Nigeria / Africa specific (CC BY-SA 4.0 or PD where noted)
const nigeriaForcados1280 = `${W}/thumb/6/6e/Forcados_offshore_Nigeria%2C_shell_oil_field.jpg/1280px-Forcados_offshore_Nigeria%2C_shell_oil_field.jpg`;
const fpsoMystrasNigeria = `${W}/thumb/c/c7/MystrasFPSO.jpg/1280px-MystrasFPSO.jpg`; // FPSO offshore Nigeria, PD
const dangoteRefinery1280 = `${W}/thumb/4/43/Worlds_largest_crude_destillation_column_Dangote.jpg/1280px-Worlds_largest_crude_destillation_column_Dangote.jpg`;
const dangoteColumn1280 = `${W}/thumb/c/cd/Column-Dangote-refinery-nig2.jpg/1280px-Column-Dangote-refinery-nig2.jpg`;
const nembeCreekFlare = `${W}/thumb/f/fb/Burning_Gas_Flare_Nembe_Creek%2C_Nigeria.tif/lossy-page1-2043px-Burning_Gas_Flare_Nembe_Creek%2C_Nigeria.tif.jpg`;

export const images = {
  // Nigerian offshore / sea
  hero: nigeriaForcados1280,
  heroAlt: fpsoMystrasNigeria,
  offshorePlatform: nigeriaForcados1280,
  oilRig: nigeriaForcados1280,
  oilRigSunset: `${U}-1578356058390-f58c575337a2?w=1200&q=90`,
  pumpJack: `${U}-1629540946404-ebe133e99f49?w=1200&q=90`,
  oilWell: nigeriaForcados1280,
  // Nigerian refineries / power plant – Dangote (Lekki)
  refinery: dangoteRefinery1280,
  refineryDusk: dangoteColumn1280,
  pipeline: `${U}-1581092918056-0c4c3acd3789?w=1920&q=90`,
  drilling: nigeriaForcados1280,
  industrial: dangoteRefinery1280,
  rigWorker: nigeriaForcados1280,
  // Themed – mix Nigerian + generic offshore
  workersAtSea: fpsoMystrasNigeria,
  deepSeaRig: nigeriaForcados1280,
  powerPlant: dangoteRefinery1280,
  shipAtSea: fpsoMystrasNigeria,
  platformWorkers: nigeriaForcados1280,
  marineEquipment: fpsoMystrasNigeria,
  // Niger Delta – gas flare (Nembe Creek)
  nembeFlare: nembeCreekFlare,
  dangoteRefinery: dangoteRefinery1280,
};

// Hero slider – Nigerian offshore, FPSO, Dangote, Nembe, plus Unsplash for variety
export const heroSliderImages = [
  nigeriaForcados1280,
  fpsoMystrasNigeria,
  dangoteRefinery1280,
  // dangoteColumn1280,
  nembeCreekFlare,
  `${U}-1578356058390-f58c575337a2?w=1920&q=90`,
  `${U}-1633829131104-e2134f75c6e5?w=1920&q=90`,
];
