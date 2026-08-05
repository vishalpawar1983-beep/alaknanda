import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "mlc-2006-owner-obligations",
  title: "MLC 2006: What Shipowners Actually Have to Do",
  excerpt:
    "The Maritime Labour Convention in operational terms — the obligations that generate deficiencies, the records inspectors ask for, and where owners most often fall short.",
  category: "Shipping Industry",
  tags: ["MLC 2006", "Compliance", "Port State Control", "Crew Welfare"],
  keywords: [
    "MLC 2006 requirements",
    "maritime labour convention compliance",
    "seafarer employment agreement",
    "port state control MLC deficiencies",
  ],
  publishedAt: "2026-06-24",
  author: "Alaknanda Ship Management",
  tone: ["#0A2342", "#0d3a63"],
  image: "/images/crew-docs.jpg",
  related: [
    "crew-retention-in-shipping",
    "flag-state-endorsement-process",
    "how-to-choose-a-ship-manning-agency",
  ],
  blocks: [
    {
      type: "p",
      text: "The Maritime Labour Convention 2006 is often called the fourth pillar of maritime regulation, alongside SOLAS, MARPOL and STCW. It consolidated dozens of earlier ILO instruments into a single convention covering the conditions under which seafarers live and work.",
    },
    {
      type: "p",
      text: "For an owner, the practical question is narrower than the convention text: which obligations generate port state control deficiencies, and what records will an inspector ask to see?",
    },

    { type: "h2", text: "The Seafarer Employment Agreement" },
    {
      type: "p",
      text: "Every seafarer must hold a signed employment agreement, in a language they understand, containing specified particulars: the parties, the wage and how it is calculated, paid leave entitlement, contract duration and termination conditions, health and social security benefits, repatriation entitlement, and reference to any applicable collective agreement.",
    },
    {
      type: "p",
      text: "The seafarer keeps a signed original, and a copy is held on board. The most common deficiency here is mundane — agreements on board that do not match the terms actually being applied, usually because a wage scale changed and the paperwork did not follow.",
    },

    { type: "h2", text: "Hours of work and rest" },
    {
      type: "p",
      text: "The convention sets minimum rest: at least 10 hours in any 24-hour period and 77 hours in any seven-day period, with rest divisible into no more than two periods, one of which must be at least six hours, and intervals between consecutive rest periods not exceeding 14 hours.",
    },
    {
      type: "callout",
      title: "Where this actually goes wrong",
      text: "Rest hour records that show perfect compliance every single day are themselves a red flag to an experienced inspector. Real operations produce occasional non-conformities. Records that never do usually indicate the form is being completed to satisfy the requirement rather than to record reality.",
    },
    {
      type: "p",
      text: "The defensible position is accurate records with genuine non-conformities documented, explained and addressed. That demonstrates a functioning system. Immaculate records demonstrate an immaculate form.",
    },

    { type: "h2", text: "Wages" },
    {
      type: "p",
      text: "Wages must be paid at monthly intervals or less, in full, with an itemised account provided to the seafarer showing the amount, any deductions and the exchange rate applied. Seafarers must be able to remit earnings to their families, and any charge for that service must be reasonable.",
    },
    {
      type: "p",
      text: "Deductions require a lawful basis. Charging seafarers for recruitment or placement is prohibited outright, which means an owner using an agency that charges seafarers has a compliance exposure even though the owner did not take the money.",
    },

    { type: "h2", text: "Repatriation" },
    {
      type: "p",
      text: "Seafarers are entitled to repatriation at no cost to themselves at the end of the agreement, on termination by either party for justified reasons, and where they are no longer able to carry out their duties. The maximum service period before repatriation entitlement arises must not exceed twelve months, and owners must hold financial security covering abandonment.",
    },
    {
      type: "p",
      text: "The 2014 amendments made that financial security requirement explicit, with a certificate to be displayed on board. Inspectors check for it.",
    },

    { type: "h2", text: "Accommodation, food and medical care" },
    {
      type: "ul",
      items: [
        "Accommodation meeting the convention's standards for space, heating, ventilation, lighting and sanitary facilities, subject to the vessel's build date.",
        "Food and drinking water of appropriate quality, quantity and nutritional value, provided free of charge.",
        "A qualified ship's cook on vessels with a prescribed complement, holding a valid certificate.",
        "Medical care on board comparable to shore standards where practicable, including a medicine chest, medical equipment and a medical guide.",
        "For vessels carrying 100 or more persons on international voyages of more than three days, a qualified medical doctor.",
      ],
    },
    {
      type: "p",
      text: "Catering deficiencies are among the most frequently recorded, and often reduce to an expired ship's cook certificate or inadequate provision records rather than the food itself.",
    },

    { type: "h2", text: "On-board complaint procedures" },
    {
      type: "p",
      text: "Vessels must operate an on-board complaint procedure, and a copy must be provided to every seafarer. It must allow complaints to be raised without victimisation and must set out escalation to the shore management and, ultimately, the flag administration.",
    },
    {
      type: "p",
      text: "Having the procedure is the requirement. Having it used, and having documented evidence that complaints were investigated and closed, is what distinguishes a system from a document.",
    },

    { type: "h2", text: "The Maritime Labour Certificate and DMLC" },
    {
      type: "p",
      text: "Vessels of 500 GT or more on international voyages carry a Maritime Labour Certificate and a Declaration of Maritime Labour Compliance. Part I is issued by the flag state and states the national requirements; Part II is drafted by the owner and states the measures adopted to meet them, and is subject to flag approval.",
    },
    {
      type: "p",
      text: "Part II is where many owners create problems for themselves by describing procedures more ambitious than those actually operated. An inspector reads Part II and then checks whether the vessel does what it says. Describing a modest system accurately is safer than describing an excellent system aspirationally.",
    },

    { type: "h2", text: "Where the manning agency fits" },
    {
      type: "p",
      text: "Regulation 1.4 obliges flag states to ensure that recruitment and placement services operating in their territory are licensed or certified and meet the convention's requirements — including the prohibition on charging seafarers. Owners using services in states that have not ratified MLC must satisfy themselves those services conform anyway.",
    },
    {
      type: "p",
      text: "In practice this means the owner's compliance position depends partly on the agency's conduct. Verifying the agency's licence and confirming in writing that seafarers are not charged is not administrative fussiness; it is closing a genuine exposure.",
    },

    { type: "h2", text: "A short pre-inspection check" },
    {
      type: "ol",
      items: [
        "Signed employment agreements on board matching the terms actually applied.",
        "Rest hour records that are accurate, including documented non-conformities and responses.",
        "Itemised wage accounts and evidence of monthly payment and allotment remittance.",
        "Financial security certificates for abandonment and for liability under Regulation 4.2.",
        "Valid ship's cook certificate and provision records.",
        "Medicine chest inventory current, medical guide on board.",
        "On-board complaint procedure issued to every seafarer, with a documented complaint log.",
        "DMLC Part II describing what the vessel actually does.",
      ],
    },
    {
      type: "quote",
      text: "Most MLC deficiencies are not failures of intent. They are failures of record-keeping discipline, found by someone who reads the paperwork more carefully than anyone on board had for six months.",
    },
  ],
  faqs: [
    {
      question: "What are the MLC minimum rest hour requirements?",
      answer:
        "At least 10 hours of rest in any 24-hour period and 77 hours in any seven-day period. Rest may be divided into no more than two periods, one of which must be at least six hours, and the interval between consecutive rest periods must not exceed 14 hours.",
    },
    {
      question: "Which vessels need a Maritime Labour Certificate?",
      answer:
        "Vessels of 500 GT or more engaged on international voyages, or operating from a port or between ports in another country, must carry a Maritime Labour Certificate and a Declaration of Maritime Labour Compliance with Parts I and II.",
    },
    {
      question: "Can a manning agency charge seafarers under MLC 2006?",
      answer:
        "No. MLC 2006 prohibits charging seafarers fees for recruitment or placement. Flag states must ensure recruitment services in their territory comply, and owners using non-compliant services carry a compliance exposure even though they did not receive the money themselves.",
    },
    {
      question: "What is the most common MLC deficiency at port state control?",
      answer:
        "Record-keeping failures rather than substantive welfare failures — rest hour records that do not reflect reality, employment agreements on board that do not match applied terms, expired ship's cook certificates, and DMLC Part II describing procedures the vessel does not actually operate.",
    },
  ],
};
