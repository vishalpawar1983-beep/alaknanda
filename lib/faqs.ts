/**
 * Site-wide FAQ bank.
 *
 * Rendered on /faq and emitted as FAQPage structured data. Service-specific
 * questions live alongside their service in `lib/services.ts` so each service
 * page carries its own FAQ schema.
 */

export type Faq = {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
};

export type FaqCategory =
  | "For Shipowners"
  | "For Seafarers"
  | "Documentation & Compliance"
  | "Working With Us";

export const faqCategories: FaqCategory[] = [
  "For Shipowners",
  "For Seafarers",
  "Documentation & Compliance",
  "Working With Us",
];

export const faqs: Faq[] = [
  // ------------------------------------------------------------------ Owners
  {
    id: "what-is-a-manning-agency",
    category: "For Shipowners",
    question: "What exactly does a crewing and manning agency do?",
    answer:
      "A manning agency finds, screens, documents and deploys the seafarers who run your vessel, and then administers their employment for the length of the contract. In practice that means maintaining a pool of qualified candidates, verifying certificates against issuing authorities, arranging medicals and flag endorsements, handling visas and travel, drafting compliant employment agreements, and staying reachable while the crew is on board. A good agency absorbs the administrative weight of manning so your superintendents can concentrate on the vessel.",
  },
  {
    id: "how-fast-can-you-supply-crew",
    category: "For Shipowners",
    question: "How quickly can you supply crew for an urgent requirement?",
    answer:
      "For common ranks on standard vessel types we usually return a verified shortlist within 72 hours, and a joiner can be at the gangway in 10 to 14 days once visas and flag endorsements clear. Specialised requirements — LNG cargo engineers, DP operators, ETOs with a specific automation background — take longer because the qualified pool is genuinely smaller. We will give you an honest date rather than an optimistic one.",
  },
  {
    id: "which-vessel-types",
    category: "For Shipowners",
    question: "Which vessel types do you crew?",
    answer:
      "Container vessels, oil and product tankers, chemical tankers, bulk carriers, LNG and LPG carriers, offshore support vessels, cruise and passenger vessels, research and survey vessels, and naval auxiliary support. Candidates are matched to crew with documented experience on the same vessel type and comparable tonnage — not simply the correct rank.",
  },
  {
    id: "single-vessel-owners",
    category: "For Shipowners",
    question: "Do you work with single-vessel owners or only large fleets?",
    answer:
      "Both. A single-vessel owner receives the same screening standard, the same documentation control and the same reporting as a fleet client. Many owners start with one vessel to see how we work before extending the arrangement across their fleet.",
  },
  {
    id: "how-are-you-paid",
    category: "For Shipowners",
    question: "How is your fee structured?",
    answer:
      "Owners pay us, seafarers never do. Depending on the engagement we charge either a placement fee per seafarer or a monthly management fee per vessel where we run the full crewing cycle including payroll. Fees are quoted in writing before any work starts, and there are no per-candidate charges hidden behind the headline number.",
  },
  {
    id: "replacement-policy",
    category: "For Shipowners",
    question: "What happens if a seafarer we accept does not work out?",
    answer:
      "Tell the duty desk and we investigate with the Master immediately. Where the problem is familiarisation or training, we address it directly. Where it is competence or conduct, we arrange a replacement and coordinate repatriation. Replacements inside the agreed guarantee period are provided without a second placement fee.",
  },
  {
    id: "manning-compliance",
    category: "For Shipowners",
    question: "How do you ensure our manning stays compliant?",
    answer:
      "Manning levels are checked against the vessel's Safe Manning Document, certificates are validated for the full contract length rather than just the joining date, and rest-hour records are reviewed against MLC and STCW limits. Gaps are reported to you as they appear, not after a port state control officer finds them.",
  },
  {
    id: "crew-retention",
    category: "For Shipowners",
    question: "What is your crew retention rate?",
    answer:
      "Around 92% of our seafarers return for a further contract. That matters commercially as well as culturally: returning crew already know the vessel, the systems and the safety management system, so familiarisation is shorter and incident risk is lower. We invest heavily in welfare and prompt wage payment because those two things drive retention more than anything else.",
  },

  // --------------------------------------------------------------- Seafarers
  {
    id: "do-seafarers-pay",
    category: "For Seafarers",
    question: "Do seafarers have to pay any fee for placement?",
    answer:
      "No. Not for registration, not for documentation, not for medicals arranged through us, and not for a joining letter. Charging seafarers for placement is prohibited under the Maritime Labour Convention and by our own licence conditions. We are paid by the shipowner. If anyone claiming to represent Alaknanda asks you for money, report it to us immediately.",
  },
  {
    id: "documents-to-register",
    category: "For Seafarers",
    question: "What documents do I need to register with you?",
    answer:
      "An updated CV showing your sea service, your Continuous Discharge Certificate, certificate of competency, STCW modules, passport, any current flag state endorsements, and a valid medical fitness certificate. If something is missing or close to expiry we will tell you exactly what needs fixing rather than letting your file go quiet.",
  },
  {
    id: "cadet-placement",
    category: "For Seafarers",
    question: "I am a fresh cadet. Can you place me on board?",
    answer:
      "Yes, subject to available training berths. We place deck and engine cadets from recognised maritime institutes on structured training contracts where sea time counts towards certification and the training record book is maintained properly. Berths are limited and competitive, so we will be honest with you about the likely wait rather than keeping you hopeful indefinitely.",
  },
  {
    id: "how-long-to-get-a-ship",
    category: "For Seafarers",
    question: "How long will it take to get a ship after registering?",
    answer:
      "It depends on your rank, your documents and the market. Ranks in demand with complete, valid documentation often join within four to eight weeks. Ranks with heavy competition, or files with expiring certificates, take longer. The single fastest thing you can do is make sure every document is current before you apply.",
  },
  {
    id: "wages-and-allotment",
    category: "For Seafarers",
    question: "When are wages paid and how do allotments work?",
    answer:
      "Wages are processed monthly in line with your Seafarer Employment Agreement. You nominate an allotment amount and a beneficiary account at sign-on, and that allotment is remitted every month while you are on board. Your wage account is available to you on request, and any discrepancy raised with the duty desk is investigated the same week.",
  },
  {
    id: "vessel-details-before-joining",
    category: "For Seafarers",
    question: "Will I know the vessel details before I commit?",
    answer:
      "Always. Vessel name, type, flag, trading area, contract length, wage scale and the owner are disclosed before you accept. If any agency will not tell you those things before you sign, do not sign.",
  },
  {
    id: "family-contact",
    category: "For Seafarers",
    question: "Can my family contact you while I am on board?",
    answer:
      "Yes. Our duty line is staffed 24×7 and your nominated next of kin is given the number at sign-on. Families call about allotments, emergencies at home and repatriation questions, and we would far rather take that call than have a seafarer worrying at sea.",
  },
  {
    id: "promotion-guidance",
    category: "For Seafarers",
    question: "Can you advise me on promotion to the next rank?",
    answer:
      "Yes, and we will be candid. We will tell you which certificates you need, how much time in rank the market currently expects, and which vessel types will build the experience profile that gets you promoted rather than simply keeps you employed. That advice costs nothing.",
  },

  // ----------------------------------------------- Documentation & compliance
  {
    id: "flag-endorsement-time",
    category: "Documentation & Compliance",
    question: "How long does a flag state endorsement take?",
    answer:
      "Typically five to fifteen working days from a complete submission, though it varies by administration and their current workload. The variable that actually decides the outcome is submission quality, which is why we check every application for completeness before filing rather than after a rejection.",
  },
  {
    id: "which-flag-states",
    category: "Documentation & Compliance",
    question: "Which flag states do you handle documentation for?",
    answer:
      "Panama, Liberia, Marshall Islands, Malta, Singapore, Cyprus and India among others. If your fleet flies a flag not on that list, send us the requirement — we will confirm whether we can process it directly or through a partner before you commit to anything.",
  },
  {
    id: "certificate-verification",
    category: "Documentation & Compliance",
    question: "How do you verify that a candidate's certificates are genuine?",
    answer:
      "Certificates of competency and STCW modules are checked against the issuing administration's verification portal or confirmed in writing directly with the issuer. Sea time is cross-referenced against CDC entries and previous employer letters. A discrepancy ends the application — we would rather lose a candidate than expose your Safe Manning Document.",
  },
  {
    id: "mlc-compliance",
    category: "Documentation & Compliance",
    question: "Are your employment agreements MLC 2006 compliant?",
    answer:
      "Yes. Every Seafarer Employment Agreement states wage scale, contract duration, leave entitlement, repatriation terms, hours of rest and the grievance procedure, in the flag state's prescribed format where one exists. Terms are explained before signature and a signed copy goes to the seafarer, the vessel and the office.",
  },
  {
    id: "expiring-certificates",
    category: "Documentation & Compliance",
    question: "How do you stop expired certificates reaching a vessel?",
    answer:
      "Every certificate sits in a central register with an automated alert 90 days before expiry. Before travel is booked, validity is checked against the full contract length — a certificate that expires mid-contract is treated as already expired, because at sea that is exactly what it becomes.",
  },
  {
    id: "medical-clinics",
    category: "Documentation & Compliance",
    question: "Where are pre-employment medicals conducted?",
    answer:
      "At clinics approved by the relevant flag state and, where required, by the owner or charterer. We coordinate the appointment, the vaccination schedule appropriate to the trading area, and any drug and alcohol testing the operator requires. Seafarers are never charged for medicals arranged through us.",
  },
  {
    id: "visa-support",
    category: "Documentation & Compliance",
    question: "Do you handle seafarer visas including C1/D?",
    answer:
      "Yes. C1/D for US itineraries, Schengen, transit visas and destination-specific seafarer visas are handled end to end by our documentation desk — appointment scheduling, document preparation, interview briefing and follow-through until the visa is in hand.",
  },
  {
    id: "data-protection",
    category: "Documentation & Compliance",
    question: "How is my personal data handled?",
    answer:
      "Candidate data is used only for recruitment, documentation and employment administration, shared only with the owner or operator considering you and the authorities processing your documents, and retained only as long as we have a lawful reason to hold it. Full detail is set out in our privacy policy, and you can ask us to delete your file at any time.",
  },

  // ----------------------------------------------------------- Working with us
  {
    id: "where-are-you-based",
    category: "Working With Us",
    question: "Where is your office and can I visit?",
    answer:
      "Our office is at Unit No. 68, 69 & 70, 4th Floor, City Court, Zirakpur, Mohali, Punjab — a short drive from Chandigarh airport. Visitors are welcome; call ahead so the right person is free when you arrive.",
  },
  {
    id: "working-hours",
    category: "Working With Us",
    question: "What are your working hours?",
    answer:
      "The office is open Monday to Thursday, 9:30 AM to 6:30 PM IST. Our crewing duty line, however, runs 24×7 — vessels do not keep office hours, and neither does the desk that supports them.",
  },
  {
    id: "international-clients",
    category: "Working With Us",
    question: "Do you work with international clients outside India?",
    answer:
      "Yes. We supply crew to owners and managers across Europe, the Middle East, Southeast Asia, the Far East and the Americas. Communication is in English, contracts are drafted to the flag state's requirements, and time-zone differences are handled by the duty desk rather than left to office hours.",
  },
  {
    id: "how-to-start",
    category: "Working With Us",
    question: "How do we start working with you?",
    answer:
      "Send your requirement — ranks, vessel type and flag, joining port and target dates — through the contact form, WhatsApp or email. We come back with clarifying questions the same working day, then a verified shortlist. There is no obligation and no charge until you accept a candidate.",
  },
  {
    id: "confidentiality",
    category: "Working With Us",
    question: "Will our fleet information be kept confidential?",
    answer:
      "Yes. Vessel particulars, wage scales, commercial terms and fleet plans shared with us are treated as confidential and are not discussed with other owners. We will sign a non-disclosure agreement on request before any commercial detail is exchanged.",
  },
  {
    id: "reporting",
    category: "Working With Us",
    question: "What reporting will we receive?",
    answer:
      "For crew management: monthly crew status, relief planning, certificate expiry position, payroll summary and any open welfare or disciplinary matter. For technical management: machinery status, open defects, survey position and budget variance. If you need a specific format for your own board reporting, we will match it.",
  },
];

export function faqsByCategory(category: FaqCategory): Faq[] {
  return faqs.filter((faq) => faq.category === category);
}
