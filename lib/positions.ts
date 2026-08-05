/** Shared reference lists used by careers filters, forms and content sections. */

export type Department = "Deck" | "Engine" | "Electrical" | "Catering" | "Cadet";

export type Position = {
  title: string;
  department: Department;
  /** Typical vessel types this rank is deployed on. */
  vessels: string;
  /** Indicative minimum requirement — shown on the careers page. */
  requirement: string;
};

export const positions: Position[] = [
  {
    title: "Master",
    department: "Deck",
    vessels: "Tankers, bulk carriers, container vessels",
    requirement: "COC Master (unlimited) with minimum 24 months in rank",
  },
  {
    title: "Chief Officer",
    department: "Deck",
    vessels: "Product & chemical tankers, bulkers",
    requirement: "COC Chief Mate with tanker endorsement where applicable",
  },
  {
    title: "Second Officer",
    department: "Deck",
    vessels: "Container vessels, bulk carriers",
    requirement: "COC OOW with 12 months in rank and valid ECDIS",
  },
  {
    title: "Third Officer",
    department: "Deck",
    vessels: "Bulk carriers, general cargo",
    requirement: "COC OOW with valid STCW modules",
  },
  {
    title: "Chief Engineer",
    department: "Engine",
    vessels: "LNG, LPG, tankers, container vessels",
    requirement: "COC Chief Engineer with matching machinery experience",
  },
  {
    title: "Second Engineer",
    department: "Engine",
    vessels: "Tankers, bulk carriers, OSVs",
    requirement: "COC Second Engineer with 12 months in rank",
  },
  {
    title: "Third Engineer",
    department: "Engine",
    vessels: "Container vessels, bulk carriers",
    requirement: "COC EOW with motor endorsement",
  },
  {
    title: "Fourth Engineer",
    department: "Engine",
    vessels: "Bulk carriers, general cargo",
    requirement: "COC EOW with valid STCW modules",
  },
  {
    title: "Electrical Officer (ETO)",
    department: "Electrical",
    vessels: "LNG, cruise, container vessels",
    requirement: "ETO COC with automation and HV experience",
  },
  {
    title: "Bosun",
    department: "Deck",
    vessels: "Tankers, bulk carriers",
    requirement: "Minimum 36 months as AB with supervisory experience",
  },
  {
    title: "Able Seaman (AB)",
    department: "Deck",
    vessels: "All vessel types",
    requirement: "AB certificate with 18 months sea service",
  },
  {
    title: "Ordinary Seaman (OS)",
    department: "Deck",
    vessels: "Bulk carriers, general cargo",
    requirement: "Valid STCW basic safety training and CDC",
  },
  {
    title: "Oiler / Motorman",
    department: "Engine",
    vessels: "All vessel types",
    requirement: "Engine rating certificate with 12 months sea service",
  },
  {
    title: "Fitter",
    department: "Engine",
    vessels: "Tankers, bulk carriers",
    requirement: "Welding and machining competence with sea service",
  },
  {
    title: "Chief Cook",
    department: "Catering",
    vessels: "All vessel types",
    requirement: "Ship's cook certificate and food safety training",
  },
  {
    title: "Deck & Engine Cadets",
    department: "Cadet",
    vessels: "Bulk carriers, tankers, container vessels",
    requirement: "Pre-sea training from a recognised maritime institute",
  },
];

export const departments: Department[] = [
  "Deck",
  "Engine",
  "Electrical",
  "Catering",
  "Cadet",
];

export const vesselTypes = [
  "Container Ships",
  "Oil & Product Tankers",
  "Chemical Tankers",
  "Bulk Carriers",
  "LNG Carriers",
  "LPG Carriers",
  "Offshore Support Vessels",
  "Cruise & Passenger Vessels",
  "Research & Survey Vessels",
  "Navy Support Vessels",
] as const;

export type Industry = {
  name: string;
  description: string;
};

export const industries: Industry[] = [
  {
    name: "Container Ships",
    description:
      "Feeder to ULCV complements with schedule-critical crew changes planned around liner rotations.",
  },
  {
    name: "Oil & Product Tankers",
    description:
      "Officers with valid tanker endorsements, cargo handling experience and clean vetting history.",
  },
  {
    name: "Bulk Carriers",
    description:
      "Handysize through Capesize crews familiar with grab discharge, hold cleaning and cargo care.",
  },
  {
    name: "LNG Carriers",
    description:
      "Gas-experienced officers and engineers with advanced liquefied gas tanker operations training.",
  },
  {
    name: "LPG Carriers",
    description:
      "Pressurised, semi-refrigerated and fully refrigerated gas carrier crews with cargo competence.",
  },
  {
    name: "Offshore & OSV",
    description:
      "DP operators, anchor handling and platform supply crews with BOSIET and offshore medicals.",
  },
  {
    name: "Cruise & Passenger",
    description:
      "Marine, hotel, galley and guest-service departments assessed on safety and service standards.",
  },
  {
    name: "Research & Survey",
    description:
      "Survey-vessel marine crews supporting hydrographic, seismic and scientific campaigns.",
  },
  {
    name: "Navy Support",
    description:
      "Auxiliary and support vessel crews for defence logistics operators with clearance requirements.",
  },
];
