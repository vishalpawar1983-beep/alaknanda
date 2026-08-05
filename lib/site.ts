/**
 * Single source of truth for company identity, NAP data and navigation.
 *
 * NAP (Name / Address / Phone) consistency is a local-SEO ranking factor, so
 * every surface — header, footer, contact page, JSON-LD — reads from here
 * rather than hardcoding the values.
 */

export const siteConfig = {
  name: "Alaknanda Ship Management",
  legalName: "Alaknanda Ship Management Pvt. Ltd.",
  shortName: "Alaknanda Ship",
  tagline: "Excellence at Sea, Trusted Worldwide.",
  description:
    "Alaknanda Ship Management Pvt. Ltd. is a certified crewing and manning agency supplying STCW-certified officers, engineers and ratings to shipowners, ship managers and offshore operators worldwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alaknandaship.com",
  locale: "en_IN",
  foundingYear: 2014,
} as const;

export const contactInfo = {
  phone: "+91 98967 99168",
  /** E.164 — used for tel: links and JSON-LD. */
  phoneE164: "+919896799168",
  /** Digits only — used for wa.me deep links. */
  whatsapp: "919896799168",
  email: "info@alaknandaship.com",
  careersEmail: "careers@alaknandaship.com",
  address: {
    line1: "Unit No. 68, 69 & 70, 4th Floor",
    line2: "City Court, Zirakpur",
    locality: "Zirakpur",
    district: "Mohali",
    region: "Punjab",
    postalCode: "140603",
    country: "India",
    countryCode: "IN",
  },
  /** Approximate coordinates for City Court, Zirakpur. */
  geo: { latitude: 30.6425, longitude: 76.8173 },
  hours: {
    label: "Monday to Thursday, 9:30 AM – 6:30 PM IST",
    /** schema.org openingHours shorthand. */
    schema: ["Mo-Th 09:30-18:30"],
  },
  mapEmbedQuery: "City+Court,+Zirakpur,+Mohali,+Punjab+140603",
} as const;

/** Full one-line postal address — reused by footer and structured data. */
export const formattedAddress = [
  contactInfo.address.line1,
  contactInfo.address.line2,
  `${contactInfo.address.district}, ${contactInfo.address.region} ${contactInfo.address.postalCode}`,
  contactInfo.address.country,
].join(", ");

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/alaknanda-ship-management" },
  { label: "Facebook", href: "https://www.facebook.com/alaknandaship" },
  { label: "Instagram", href: "https://www.instagram.com/alaknandaship" },
  { label: "YouTube", href: "https://www.youtube.com/@alaknandaship" },
] as const;

export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  /** Present on mega-menu parents. */
  children?: NavChild[];
  /** Optional promo panel shown alongside the mega-menu columns. */
  feature?: { title: string; body: string; href: string; cta: string };
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Crew Management",
        href: "/services/crew-management",
        description: "End-to-end manning, payroll and crew welfare for every rank on board.",
      },
      {
        label: "Technical Management",
        href: "/services/technical-management",
        description: "Planned maintenance, dry-dock supervision and class compliance.",
      },
      {
        label: "Cruise Vessel Placement",
        href: "/services/cruise-vessel-placement",
        description: "Hotel, hospitality and marine crew for cruise and passenger fleets.",
      },
      {
        label: "Marine Spare Parts",
        href: "/services/marine-spare-parts",
        description: "Genuine OEM spares sourced and delivered to your next port of call.",
      },
      {
        label: "Flag Documentation",
        href: "/services/flag-documentation",
        description: "Flag state endorsements, CDCs, visas and seafarer documentation.",
      },
      {
        label: "Offshore Crew Supply",
        href: "/services/offshore-crew-supply",
        description: "DP operators, riggers and marine crew for offshore and OSV projects.",
      },
      {
        label: "Merchant Navy Recruitment",
        href: "/services/merchant-navy-recruitment",
        description: "Sourcing, screening and deployment of merchant navy professionals.",
      },
      {
        label: "Crew Documentation",
        href: "/services/crew-documentation",
        description: "Certificate verification, medicals, travel and joining formalities.",
      },
    ],
    feature: {
      title: "Need crew within 72 hours?",
      body: "Our duty desk maintains a screened, document-ready pool across all ranks and vessel types.",
      href: "/contact",
      cta: "Request crew",
    },
  },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "Gallery", href: "/gallery", description: "Vessels, crew and training in pictures." },
      { label: "Testimonials", href: "/testimonials", description: "What owners and seafarers say." },
      { label: "Careers at Sea", href: "/careers", description: "Live openings across ranks." },
      { label: "FAQ", href: "/faq", description: "Answers on manning, documents and timelines." },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: [
    { label: "Crew Management", href: "/services/crew-management" },
    { label: "Technical Management", href: "/services/technical-management" },
    { label: "Cruise Vessel Placement", href: "/services/cruise-vessel-placement" },
    { label: "Marine Spare Parts", href: "/services/marine-spare-parts" },
    { label: "Flag Documentation", href: "/services/flag-documentation" },
    { label: "Offshore Crew Supply", href: "/services/offshore-crew-supply" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "All Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "FAQ", href: "/faq" },
  ],
} as const;

/**
 * Builds a pre-filled WhatsApp deep link.
 * Falls back to a generic enquiry when no message is supplied.
 */
export function whatsappLink(
  message = `Hello ${siteConfig.legalName}, I would like to discuss a crewing requirement.`,
): string {
  return `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Absolute URL helper — required for canonicals, OG tags and JSON-LD. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}
