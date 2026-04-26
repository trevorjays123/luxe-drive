import sClass from "@/assets/cars/s-class.jpg";
import eClass from "@/assets/cars/e-class.jpg";
import vClass from "@/assets/cars/v-class.jpg";
import sprinter from "@/assets/cars/sprinter.jpg";
import gClass from "@/assets/cars/g-class.jpg";
import lx600 from "@/assets/cars/lx600.jpg";
import landCruiser from "@/assets/cars/land-cruiser.jpg";
import rangeRoverSport from "@/assets/cars/range-rover-sport.jpg";
import escalade from "@/assets/cars/escalade.jpg";

export type Tier = "VIP First Class" | "Business Class" | "Group Shuttle";

export interface OverviewSection {
  title: string;
  body: string;
}

export interface Vehicle {
  slug: string;
  name: string;
  tier: Tier;
  image: string;
  description: string;
  intro: string;
  longDescription: string;
  model: string;
  seats: number;
  luggage: number;
  transmission: "Automatic" | "Manual";
  features: string[];
  pricing: {
    halfDay: number;
    fullDay: number;
    additionalHour: number;
    airportTransfer: number;
  };
  overview: OverviewSection[];
}

const sharedFeatures = [
  "Professional uniformed chauffeur",
  "Complimentary bottled water",
  "In-car phone charger",
  "Free WiFi (on request)",
  "Umbrella service",
  "Fully insured ride",
];

export const fleet: Vehicle[] = [
  {
    slug: "mercedes-benz-s-class",
    name: "Mercedes-Benz S-Class",
    tier: "VIP First Class",
    image: sClass,
    description: "The benchmark of executive luxury — silent, smooth, signature.",
    intro:
      "The S-Class is the definitive flagship saloon for executives, dignitaries and discerning travellers who expect nothing less than first-class.",
    longDescription:
      "From the moment your chauffeur opens the door, the S-Class envelops you in hushed refinement. Hand-stitched leather, ambient lighting and class-leading suspension turn even Lagos traffic into a private lounge.",
    model: "2023",
    seats: 4,
    luggage: 3,
    transmission: "Automatic",
    features: [...sharedFeatures, "Heated & ventilated rear seats", "Burmester surround sound", "Privacy curtains"],
    pricing: { halfDay: 220000, fullDay: 380000, additionalHour: 35000, airportTransfer: 95000 },
    overview: [
      { title: "Exterior", body: "Sculpted, understated and unmistakably flagship — finished in obsidian black with chrome accents." },
      { title: "Interior", body: "Nappa leather, open-pore wood and a panoramic glass roof create an editorial cabin." },
      { title: "Technology", body: "Dual rear touchscreens, MBUX voice control and 5G connectivity." },
      { title: "Performance", body: "AIRMATIC suspension delivers a glass-smooth ride at any speed." },
      { title: "Safety", body: "Active distance assist, blind-spot monitor and PRE-SAFE cocoon system." },
      { title: "Versatility", body: "Equally at home on a state arrival, a board meeting or a private dinner." },
      { title: "Luxury", body: "Massaging rear seats, fragrance diffuser and acoustic glass for whisper-silent travel." },
    ],
  },
  {
    slug: "mercedes-benz-e-class",
    name: "Mercedes-Benz E-Class",
    tier: "Business Class",
    image: eClass,
    description: "Effortless executive transport for the everyday boardroom run.",
    intro:
      "The E-Class is the ideal business saloon — composed, modern and quietly authoritative on every Nigerian road.",
    longDescription:
      "Built for productivity in motion, the E-Class pairs supple ride quality with a meticulously trimmed cabin. A sensible choice for daily executive duties without compromise.",
    model: "2022",
    seats: 4,
    luggage: 3,
    transmission: "Automatic",
    features: [...sharedFeatures, "Reclining rear seats", "Tri-zone climate", "Tinted privacy glass"],
    pricing: { halfDay: 150000, fullDay: 260000, additionalHour: 25000, airportTransfer: 70000 },
    overview: [
      { title: "Exterior", body: "Crisp, contemporary saloon styling with LED multi-beam headlamps." },
      { title: "Interior", body: "Twin widescreen displays and ARTICO leather appointments." },
      { title: "Technology", body: "Wireless charging, Apple CarPlay & Android Auto, Burmester audio." },
      { title: "Performance", body: "Refined inline-six with 9G-TRONIC transmission." },
      { title: "Safety", body: "Driver assistance pack with active lane keeping." },
      { title: "Versatility", body: "Roomy boot for luggage on airport runs and inter-city work." },
      { title: "Luxury", body: "Ambient interior lighting in 64 colours." },
    ],
  },
  {
    slug: "mercedes-benz-v-class",
    name: "Mercedes-Benz V-Class",
    tier: "VIP First Class",
    image: vClass,
    description: "A private lounge on wheels for VIP groups and family travel.",
    intro:
      "The V-Class transforms group travel into a first-class experience — captain seats, conference layout and limousine quietness.",
    longDescription:
      "For delegations, family transfers or city tours, the V-Class delivers seven business-class seats in a serene, club-like cabin.",
    model: "2023",
    seats: 7,
    luggage: 6,
    transmission: "Automatic",
    features: [...sharedFeatures, "Captain swivel seats", "Folding tables", "Mood lighting"],
    pricing: { halfDay: 250000, fullDay: 420000, additionalHour: 40000, airportTransfer: 110000 },
    overview: [
      { title: "Exterior", body: "Tall, statement profile finished in metallic obsidian." },
      { title: "Interior", body: "Lounge-style seating with Nappa leather and hardwood trim." },
      { title: "Technology", body: "Dual screens, panoramic LED lighting and ample USB-C." },
      { title: "Performance", body: "Smooth diesel powertrain with 9G-TRONIC." },
      { title: "Safety", body: "360° camera, blind-spot and active brake assist." },
      { title: "Versatility", body: "Configurable seating for meetings, families or VIP delegations." },
      { title: "Luxury", body: "Dual sliding doors with electric soft-close." },
    ],
  },
  {
    slug: "mercedes-benz-sprinter",
    name: "Mercedes-Benz Sprinter",
    tier: "Group Shuttle",
    image: sprinter,
    description: "Spacious, refined group transport for events and corporate travel.",
    intro:
      "The Sprinter is the dependable workhorse of luxury group movement — 14 plush seats, generous luggage and chauffeured comfort.",
    longDescription:
      "Whether moving event guests, conference delegations or extended families, the Sprinter combines reliability with surprising refinement.",
    model: "2022",
    seats: 14,
    luggage: 14,
    transmission: "Automatic",
    features: [...sharedFeatures, "Individual reading lights", "Generous luggage hold", "Step-in entry"],
    pricing: { halfDay: 280000, fullDay: 480000, additionalHour: 45000, airportTransfer: 130000 },
    overview: [
      { title: "Exterior", body: "Imposing pearl white finish with tinted windows." },
      { title: "Interior", body: "High-back cushioned seating in twin and triple rows." },
      { title: "Technology", body: "Onboard PA, USB charging at every row." },
      { title: "Performance", body: "Quiet diesel engine engineered for long highway runs." },
      { title: "Safety", body: "ABS, ESP and reinforced cabin structure." },
      { title: "Versatility", body: "Ideal for weddings, events, conferences and team travel." },
      { title: "Luxury", body: "Climate-controlled cabin even in peak heat." },
    ],
  },
  {
    slug: "mercedes-benz-g-class",
    name: "Mercedes-Benz G-Class",
    tier: "VIP First Class",
    image: gClass,
    description: "An icon of off-road luxury — commanding, secure, statement.",
    intro:
      "The G-Wagon makes an arrival — engineered for absolute road presence and secured for VIP movement across any terrain.",
    longDescription:
      "Squared shoulders, massaging seats and a cabin trimmed like a private jet. The G-Class is for principals who want presence and capability in one vehicle.",
    model: "2023",
    seats: 4,
    luggage: 3,
    transmission: "Automatic",
    features: [...sharedFeatures, "Massaging front seats", "Burmester 3D sound", "Three locking differentials"],
    pricing: { halfDay: 320000, fullDay: 560000, additionalHour: 55000, airportTransfer: 150000 },
    overview: [
      { title: "Exterior", body: "Iconic squared silhouette, finished in obsidian." },
      { title: "Interior", body: "Diamond-quilted leather and brushed metal accents." },
      { title: "Technology", body: "MBUX, dual 12.3″ displays, head-up display." },
      { title: "Performance", body: "Twin-turbo V8 with relentless authority." },
      { title: "Safety", body: "Reinforced ladder frame and full driver-assist suite." },
      { title: "Versatility", body: "Equally suited to gala arrivals and executive convoys." },
      { title: "Luxury", body: "Heated armrests, fragrance and ambient lighting." },
    ],
  },
  {
    slug: "lexus-lx-600",
    name: "Lexus LX 600",
    tier: "VIP First Class",
    image: lx600,
    description: "Japanese craftsmanship meets full-size flagship presence.",
    intro:
      "The LX 600 is Lexus's flagship SUV — silent power, hand-finished interiors and rock-solid dependability.",
    longDescription:
      "Take-anywhere capability with first-class quietness inside. The LX 600 is a discerning alternative to the European flagships.",
    model: "2023",
    seats: 5,
    luggage: 4,
    transmission: "Automatic",
    features: [...sharedFeatures, "Mark Levinson audio", "Semi-aniline leather", "Cool box"],
    pricing: { halfDay: 280000, fullDay: 480000, additionalHour: 45000, airportTransfer: 130000 },
    overview: [
      { title: "Exterior", body: "Bold spindle grille and full-LED lighting." },
      { title: "Interior", body: "Hand-finished wood and semi-aniline leather." },
      { title: "Technology", body: "Twin touchscreens with hybrid touch and physical controls." },
      { title: "Performance", body: "3.5L twin-turbo V6 with 10-speed automatic." },
      { title: "Safety", body: "Lexus Safety System+ with adaptive cruise." },
      { title: "Versatility", body: "Equally at home on highway and rough terrain." },
      { title: "Luxury", body: "Ventilated, heated and massaging seats." },
    ],
  },
  {
    slug: "toyota-land-cruiser",
    name: "Toyota Land Cruiser",
    tier: "Business Class",
    image: landCruiser,
    description: "The unstoppable workhorse trusted across Nigeria.",
    intro:
      "The Land Cruiser combines bullet-proof reliability with genuine executive comfort — the most trusted SUV on Nigerian roads.",
    longDescription:
      "From upcountry trips to airport runs, the Land Cruiser delivers consistency, comfort and confidence in every condition.",
    model: "2022",
    seats: 7,
    luggage: 5,
    transmission: "Automatic",
    features: [...sharedFeatures, "Tri-zone climate", "Reinforced suspension", "Generous boot"],
    pricing: { halfDay: 180000, fullDay: 320000, additionalHour: 30000, airportTransfer: 85000 },
    overview: [
      { title: "Exterior", body: "Pearl white finish with chrome trim." },
      { title: "Interior", body: "Leather seating across three rows." },
      { title: "Technology", body: "Touch infotainment with reverse camera." },
      { title: "Performance", body: "Robust V8 engineered for any road condition." },
      { title: "Safety", body: "Full airbag package and Toyota Safety Sense." },
      { title: "Versatility", body: "The default choice for inter-state and rough-terrain travel." },
      { title: "Luxury", body: "Quiet cabin and supportive long-distance seating." },
    ],
  },
  {
    slug: "range-rover-sport",
    name: "Range Rover Sport",
    tier: "VIP First Class",
    image: rangeRoverSport,
    description: "British luxury with athletic poise and commanding presence.",
    intro:
      "The Range Rover Sport balances executive refinement with athletic performance — a tailored cabin wrapped in a sculpted silhouette.",
    longDescription:
      "Ideal for principals who appreciate British craftsmanship without sacrificing pace, presence or off-road capability.",
    model: "2023",
    seats: 5,
    luggage: 4,
    transmission: "Automatic",
    features: [...sharedFeatures, "Meridian audio", "Air suspension", "Heated steering"],
    pricing: { halfDay: 290000, fullDay: 500000, additionalHour: 48000, airportTransfer: 135000 },
    overview: [
      { title: "Exterior", body: "Sculpted, low-slung silhouette in deep black." },
      { title: "Interior", body: "Windsor leather with anodised metal accents." },
      { title: "Technology", body: "Pivi Pro infotainment, head-up display." },
      { title: "Performance", body: "Mild-hybrid inline-six with adaptive dynamics." },
      { title: "Safety", body: "Full ADAS suite and 360° camera." },
      { title: "Versatility", body: "Equally capable of city, highway and rough trail." },
      { title: "Luxury", body: "Cabin air purification with PM2.5 filtration." },
    ],
  },
  {
    slug: "cadillac-escalade",
    name: "Cadillac Escalade",
    tier: "VIP First Class",
    image: escalade,
    description: "American flagship swagger — commanding, generous, theatrical.",
    intro:
      "The Escalade brings unmistakable American luxury — vast cabin, theatrical lighting and a 38-speaker AKG audio experience.",
    longDescription:
      "Perfect for VIP arrivals, music industry transfers and group executive travel where presence matters as much as comfort.",
    model: "2023",
    seats: 7,
    luggage: 5,
    transmission: "Automatic",
    features: [...sharedFeatures, "AKG Studio Reference audio", "Curved OLED display", "Magnetic ride control"],
    pricing: { halfDay: 310000, fullDay: 540000, additionalHour: 52000, airportTransfer: 145000 },
    overview: [
      { title: "Exterior", body: "Imposing chrome-wrapped grille with vertical LED signature." },
      { title: "Interior", body: "Semi-aniline leather, real wood and brushed aluminium." },
      { title: "Technology", body: "38-inch curved OLED dashboard with Super Cruise." },
      { title: "Performance", body: "6.2L V8 with magnetic ride control." },
      { title: "Safety", body: "Full suite of GM driver assistance technologies." },
      { title: "Versatility", body: "Cavernous cabin for group VIP movement." },
      { title: "Luxury", body: "Augmented-reality navigation and night vision." },
    ],
  },
];

export const tiers: Tier[] = ["VIP First Class", "Business Class", "Group Shuttle"];

export function getVehicle(slug: string) {
  return fleet.find((v) => v.slug === slug);
}

export function formatNaira(value: number) {
  return `₦${value.toLocaleString("en-NG")}`;
}
