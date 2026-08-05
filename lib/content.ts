/** Marketing content shared across the home page and inner pages. */

export type Stat = {
  value: number;
  suffix?: string;
  label: string;
  detail: string;
};

export const heroStats: Stat[] = [
  {
    value: 500,
    suffix: "+",
    label: "Qualified seafarers",
    detail: "Screened, document-ready officers, engineers and ratings on our register.",
  },
  {
    value: 100,
    suffix: "+",
    label: "Shipping clients",
    detail: "Owners, managers and offshore operators crewing with us.",
  },
  {
    value: 20,
    suffix: "+",
    label: "Countries served",
    detail: "Crew changes coordinated across major bunkering and repair hubs.",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client satisfaction",
    detail: "Measured on contract completion and repeat engagement.",
  },
];

export type Certification = {
  abbr: string;
  name: string;
  description: string;
};

export const certifications: Certification[] = [
  {
    abbr: "STCW",
    name: "STCW 2010 Manila Amendments",
    description:
      "Every seafarer we deploy holds current STCW training appropriate to rank and vessel type.",
  },
  {
    abbr: "MLC",
    name: "Maritime Labour Convention 2006",
    description:
      "Employment agreements, wages, hours of rest and repatriation administered to MLC standards.",
  },
  {
    abbr: "IMO",
    name: "IMO Conventions",
    description:
      "Manning and documentation aligned to SOLAS, MARPOL and Safe Manning requirements.",
  },
  {
    abbr: "ISO",
    name: "ISO 9001 Quality Management",
    description:
      "Recruitment, verification and deployment run as documented, auditable processes.",
  },
  {
    abbr: "DG Shipping",
    name: "DG Shipping Recognised Practice",
    description:
      "Indian seafarer documentation and course verification handled to DG Shipping norms.",
  },
];

export type Differentiator = {
  title: string;
  body: string;
  metric?: string;
};

export const differentiators: Differentiator[] = [
  {
    title: "Certified manning agency",
    body: "Licensed and audited, operating to MLC 2006 and ISO 9001 process discipline rather than to improvisation.",
    metric: "MLC 2006",
  },
  {
    title: "Genuinely qualified crew",
    body: "Certificates verified against issuing authorities and sea time reconciled against CDC entries before anyone reaches your shortlist.",
    metric: "100% verified",
  },
  {
    title: "Worldwide deployment",
    body: "Crew changes coordinated across Europe, the Gulf, Southeast Asia, the Far East and the Americas through an established agent network.",
    metric: "20+ countries",
  },
  {
    title: "Fast, honest turnaround",
    body: "Verified shortlists inside 72 hours for standard ranks — and a realistic date, not an optimistic one, when the requirement is specialised.",
    metric: "72 hours",
  },
  {
    title: "Experienced marine team",
    body: "Desks run by people who have sailed the ranks they recruit for, so technical screening is real rather than keyword matching.",
    metric: "Ex-seagoing",
  },
  {
    title: "24×7 duty support",
    body: "A staffed line for vessels, crew and families. Ships do not keep office hours, so neither does the desk that supports them.",
    metric: "Always on",
  },
  {
    title: "Transparent process",
    body: "Vessel particulars, wage scales and contract terms disclosed before commitment — to owners and to seafarers alike.",
    metric: "No surprises",
  },
  {
    title: "Compliance built in",
    body: "Manning checked against the Safe Manning Document and rest hours reviewed against STCW limits before an inspector does it for you.",
    metric: "Audit ready",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  body: string;
  duration: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Receive requirement",
    body: "You send ranks, vessel type and flag, joining port and target dates. We come back the same working day with any clarifying questions — vessel particulars, machinery type, charterer vetting criteria — so we screen against the real requirement rather than a summary of it.",
    duration: "Same day",
  },
  {
    step: "02",
    title: "Crew screening",
    body: "Rank-specific desks shortlist from our existing register first. Candidates are assessed on time in rank, vessel type and tonnage, machinery familiarity and incident history by people who have held the rank themselves.",
    duration: "24–48 hrs",
  },
  {
    step: "03",
    title: "Verification",
    body: "Certificates of competency and STCW modules are verified against issuing authorities, sea time is reconciled against CDC entries and employer letters, and references are taken. Discrepancies end the application.",
    duration: "2–4 days",
  },
  {
    step: "04",
    title: "Documentation",
    body: "Flag endorsements, medicals at approved clinics, visas, and an MLC-compliant employment agreement. Validity is checked against the whole contract length, not just the joining date, and completeness is signed off before travel is booked.",
    duration: "5–15 days",
  },
  {
    step: "05",
    title: "Deployment",
    body: "Flights, transit visas, port agent liaison and joining letters coordinated to put the seafarer at the right gangway on the right date. Then the duty desk stays with the contract until sign-off and repatriation.",
    duration: "On schedule",
  },
];

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  rating: 5;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "seaborne-fleet",
    quote:
      "We had a Chief Engineer sign off unexpectedly in Fujairah and needed a replacement before the vessel's next fixture. Alaknanda had three verified candidates to us inside two days and the joiner was on board within a fortnight, endorsements complete. That is the difference between an off-hire and a schedule you keep.",
    author: "Rajesh Menon",
    role: "Fleet Manager",
    company: "Seaborne Marine Services",
    location: "Singapore",
    rating: 5,
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: "adriatic-tankers",
    quote:
      "What we value is that they say no. When a rank is genuinely hard to fill they tell us the honest date instead of promising one they cannot hold. After three years and four vessels we have never had a certificate problem at a port state control inspection.",
    author: "Elena Marković",
    role: "Crewing Director",
    company: "Adriatic Tanker Management",
    location: "Croatia",
    rating: 5,
    avatar: "/images/avatar-2.jpg",
  },
  {
    id: "gulf-offshore",
    quote:
      "Offshore mobilisation windows are unforgiving. They understood our client's vetting matrix, screened against it rather than around it, and had DP-certified crew mobilised in six days with BOSIET and medicals current. The paperwork cleared client audit first time.",
    author: "Ahmed Al-Rashid",
    role: "Operations Manager",
    company: "Gulf Offshore Support",
    location: "United Arab Emirates",
    rating: 5,
    avatar: "/images/avatar-3.jpg",
  },
  {
    id: "seafarer-master",
    quote:
      "I have sailed with four agencies in nineteen years. This is the first one where my allotment reached my family on the same date every single month and where someone actually answered the phone when my wife called about a family emergency. I have signed three contracts with them since.",
    author: "Capt. Vikram Singh",
    role: "Master",
    company: "Sailing with Alaknanda since 2021",
    location: "India",
    rating: 5,
    avatar: "/images/avatar-4.jpg",
  },
  {
    id: "nordic-bulk",
    quote:
      "We moved technical management of two handysize bulkers to them after a poor experience elsewhere. The first dry-dock they supervised came in under the tendered figure with a photographic closing report we could actually hand to our insurers. Reporting has been on time every month since.",
    author: "Lars Pedersen",
    role: "Technical Superintendent",
    company: "Nordic Bulk Carriers",
    location: "Denmark",
    rating: 5,
    avatar: "/images/avatar-5.jpg",
  },
  {
    id: "seafarer-eto",
    quote:
      "They told me straight that my automation experience was not yet enough for the LNG berth I wanted, and exactly which course and which vessel type would get me there. Two contracts later I got the LNG position. No other agency has ever given me that kind of honest guidance.",
    author: "Sandeep Kumar",
    role: "Electro-Technical Officer",
    company: "Sailing with Alaknanda since 2022",
    location: "India",
    rating: 5,
    avatar: "/images/avatar-6.jpg",
  },
];

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  /** Tailwind aspect utility — drives the masonry rhythm. */
  aspect: string;
  /** Gradient pair used by the placeholder artwork. */
  tone: [string, string];
  /** High quality maritime photo URL */
  image: string;
};

export type GalleryCategory =
  | "Vessels"
  | "Crew"
  | "Training"
  | "Certificates"
  | "Offshore";

export const galleryCategories: GalleryCategory[] = [
  "Vessels",
  "Crew",
  "Training",
  "Certificates",
  "Offshore",
];

export const galleryItems: GalleryItem[] = [
  { id: "g1", title: "Container vessel alongside, Singapore", category: "Vessels", aspect: "aspect-[4/5]", tone: ["#0A2342", "#0F4C81"], image: "/images/g1.jpg" },
  { id: "g2", title: "Crew change briefing before sign-on", category: "Crew", aspect: "aspect-square", tone: ["#0F4C81", "#1f4d80"], image: "/images/g2.jpg" },
  { id: "g3", title: "Engine room watch handover", category: "Crew", aspect: "aspect-[4/3]", tone: ["#0A2342", "#0d3a63"], image: "/images/g3.jpg" },
  { id: "g4", title: "STCW refresher training session", category: "Training", aspect: "aspect-[3/4]", tone: ["#0d3a63", "#FF6B00"], image: "/images/g4.jpg" },
  { id: "g5", title: "Product tanker at the loading berth", category: "Vessels", aspect: "aspect-[4/3]", tone: ["#061729", "#0F4C81"], image: "/images/g5.jpg" },
  { id: "g6", title: "Platform supply vessel on station", category: "Offshore", aspect: "aspect-square", tone: ["#0F4C81", "#00A86B"], image: "/images/g6.jpg" },
  { id: "g7", title: "ISO 9001 quality certification", category: "Certificates", aspect: "aspect-[4/5]", tone: ["#0A2342", "#4d72a1"], image: "/images/g7.jpg" },
  { id: "g8", title: "Bulk carrier hold inspection", category: "Vessels", aspect: "aspect-[4/3]", tone: ["#0a2c4b", "#0F4C81"], image: "/images/g8.jpg" },
  { id: "g9", title: "Bridge simulator assessment", category: "Training", aspect: "aspect-square", tone: ["#0F4C81", "#FF8438"], image: "/images/g9.jpg" },
  { id: "g10", title: "Anchor handling operations", category: "Offshore", aspect: "aspect-[3/4]", tone: ["#061729", "#0d3a63"], image: "/images/g10.jpg" },
  { id: "g11", title: "Deck cadets during familiarisation", category: "Crew", aspect: "aspect-[4/3]", tone: ["#0d3a63", "#7f9dc1"], image: "/images/g11.jpg" },
  { id: "g12", title: "MLC compliance documentation", category: "Certificates", aspect: "aspect-square", tone: ["#0A2342", "#0F4C81"], image: "/images/g12.jpg" },
];

/** Company mission, vision and values — reused on Home and About. */
export const missionVision = {
  mission:
    "To put genuinely qualified, properly documented seafarers on board on the date we promised — and to treat both the owner who pays us and the seafarer who sails for us as parties we intend to work with for years, not once.",
  vision:
    "To be the crewing partner that shipowners name when asked who they trust, and that seafarers recommend to the people they trained with.",
  values: [
    {
      title: "Integrity",
      body: "We do not charge seafarers, do not overstate a candidate, and do not promise a joining date we cannot hold. Where we are wrong, we say so early.",
    },
    {
      title: "Safety",
      body: "Manning decisions are made against the Safe Manning Document and the vessel's real operating profile. Competence is never traded for speed.",
    },
    {
      title: "Compliance",
      body: "MLC 2006, STCW and flag state requirements are the floor, not the ceiling. Documentation is verified at source, every time.",
    },
    {
      title: "Global reach",
      body: "An established agent and partner network means a crew change in a difficult port is a logistics problem, not a crisis.",
    },
    {
      title: "Experience",
      body: "Our desks are run by people who have held the ranks they recruit for and have sat in the chair the client is sitting in.",
    },
    {
      title: "Accountability",
      body: "One named contact per client, a duty line that answers, and reporting that arrives on the date it was promised.",
    },
  ],
} as const;
