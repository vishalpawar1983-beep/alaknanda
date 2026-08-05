/**
 * Service catalogue.
 *
 * Each entry drives four surfaces: the home-page grid, the /services index,
 * the generated /services/[slug] page, and the Service + FAQPage JSON-LD.
 * Copy lives here (not in JSX) so it can be moved to a CMS without touching
 * a single component.
 */

export type ServiceFaq = { question: string; answer: string };

export type Service = {
  slug: string;
  title: string;
  /** Short label for nav, cards and breadcrumbs. */
  shortTitle: string;
  tagline: string;
  /** 1–2 sentence card blurb. */
  summary: string;
  /** Icon key resolved to a Lucide component in components/icon-map.ts */
  icon: string;
  /** High-definition contextual service photo URL */
  image: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Opening body copy on the detail page. */
  intro: string[];
  capabilities: { title: string; body: string }[];
  deliverables: string[];
  outcomes: { label: string; value: string }[];
  faqs: ServiceFaq[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "crew-management",
    title: "Crew Management Services",
    shortTitle: "Crew Management",
    tagline: "Full-cycle manning for every rank on board",
    summary:
      "Sourcing, screening, deployment and welfare of officers, engineers and ratings — managed end to end so your vessels sail fully manned and fully compliant.",
    icon: "users",
    image: "/images/crew-management.jpg",
    metaTitle: "Crew Management Services | Ship Crew Manning Company",
    metaDescription:
      "Certified crew management services for shipowners and ship managers. STCW-certified officers, engineers and ratings sourced, screened, documented and deployed worldwide.",
    keywords: [
      "crew management services",
      "crew management company for shipping companies",
      "ship crew recruitment company",
      "global crew management",
      "marine staffing agency",
    ],
    intro: [
      "Crew is the single largest controllable cost on a vessel and the single largest driver of its operational risk. Get the manning right and port state control inspections pass quietly, retention climbs and off-hire disappears. Get it wrong and every other saving on the balance sheet is wiped out by one detention.",
      "Alaknanda Ship Management runs crew management as a controlled process rather than a scramble for CVs. We hold a screened, document-ready talent pool across deck, engine and catering departments, so when a requirement lands we are shortlisting from candidates we already know — not starting from a job advertisement.",
    ],
    capabilities: [
      {
        title: "Rank-specific sourcing",
        body: "Dedicated desks for deck officers, marine engineers, electro-technical officers and ratings. Each desk is staffed by people who have either sailed the rank or recruited for it for years, so technical screening is genuine rather than keyword matching.",
      },
      {
        title: "Verification before shortlist",
        body: "Certificates of competency, STCW modules, flag endorsements, CDC entries and sea-time letters are verified against issuing authorities before a candidate reaches your inbox. You review a shortlist, not a pile of unchecked claims.",
      },
      {
        title: "Payroll and allotment",
        body: "Monthly wage processing, allotment to nominated family accounts, bonus and leave-pay reconciliation, and complete MLC-compliant wage records available on request for audits and inspections.",
      },
      {
        title: "Crew welfare and retention",
        body: "Structured pre-joining briefings, a 24×7 duty line for crew and families, grievance handling and post-contract debriefs. Seafarers who feel supported come back — and returning crew are the cheapest crew you will ever hire.",
      },
      {
        title: "Planning and rotation",
        body: "Relief planning built around your trading pattern and contract lengths, with reliever nomination raised well ahead of the due date so crew changes happen at the port you chose, not the port you were forced into.",
      },
      {
        title: "Compliance reporting",
        body: "Manning levels checked against the Safe Manning Document, rest-hour records reviewed for MLC and STCW conformity, and documentation gaps flagged before an inspector finds them.",
      },
    ],
    deliverables: [
      "Screened shortlists with verified certificates and sea-time",
      "Pre-employment medical coordination at approved clinics",
      "Flag state endorsement and visa processing",
      "Travel, joining and repatriation logistics",
      "MLC-compliant Seafarer Employment Agreements",
      "Monthly payroll, allotment and wage accounting",
      "Rest-hour and manning compliance reporting",
      "24×7 duty desk for vessel and crew family contact",
    ],
    outcomes: [
      { label: "Shortlist turnaround", value: "72 hrs" },
      { label: "Crew retention rate", value: "92%" },
      { label: "Ranks covered", value: "All" },
    ],
    faqs: [
      {
        question: "How quickly can you supply crew for an urgent requirement?",
        answer:
          "For common ranks on standard vessel types we typically return a verified shortlist within 72 hours and can have a joiner at the gangway inside 10 to 14 days, subject to visa and flag endorsement timelines. Specialised ranks — LNG cargo engineers, DP operators, ETOs with a specific automation background — usually take longer because the pool is genuinely smaller and we will not shortcut verification to hit a date.",
      },
      {
        question: "Do you manage payroll and allotments, or only supply crew?",
        answer:
          "Both models are available. Many owners use us purely as a supply partner and run payroll in-house. Others hand over the full cycle, in which case we process monthly wages, remit allotments to nominated family accounts, reconcile leave and bonus entitlements, and maintain the wage records your MLC inspection will ask for.",
      },
      {
        question: "Which vessel types do you crew?",
        answer:
          "Container vessels, oil and product tankers, chemical tankers, bulk carriers, LNG and LPG carriers, offshore support vessels, cruise and passenger vessels, and research and survey vessels. Requirements are matched to crew with documented experience on the same vessel type and comparable tonnage.",
      },
      {
        question: "How do you verify a candidate's certificates?",
        answer:
          "Certificates of competency and STCW modules are checked against the issuing administration's verification portal or by direct written confirmation. Sea-time is cross-checked against CDC entries and previous employer letters. Discrepancies end the application — we would rather lose a candidate than put your Safe Manning Document at risk.",
      },
      {
        question: "What happens if a crew member underperforms on board?",
        answer:
          "Raise it with the duty desk and we investigate immediately with the Master. Where the issue is training or familiarisation we address it directly; where it is conduct or competence, we arrange a replacement and coordinate repatriation. Performance feedback also feeds back into the candidate record so the same mismatch does not repeat.",
      },
    ],
    related: ["merchant-navy-recruitment", "crew-documentation", "offshore-crew-supply"],
  },
  {
    slug: "technical-management",
    title: "Technical Management",
    shortTitle: "Technical Management",
    tagline: "Maintenance, class compliance and dry-dock supervision",
    summary:
      "Planned maintenance, class and statutory compliance, budget control and dry-dock supervision, delivered by superintendents who have run machinery spaces themselves.",
    icon: "wrench",
    image: "/images/technical-management.jpg",
    metaTitle: "Ship Technical Management Services | Vessel Maintenance & Class Compliance",
    metaDescription:
      "Technical management for shipowners: planned maintenance systems, class and statutory surveys, dry-dock supervision, spares procurement and budget control.",
    keywords: [
      "ship technical management",
      "vessel technical management company",
      "planned maintenance system shipping",
      "dry dock supervision services",
    ],
    intro: [
      "A vessel earns money only when it is at sea and available. Technical management exists to protect that availability — by catching wear before it becomes failure, by keeping class and statutory certification current, and by spending the maintenance budget where it changes the outcome.",
      "Our superintendents come from sea-going engineering backgrounds. They read a vibration trend, an oil analysis report and a running-hours log the way an engineer reads them, which is why our recommendations tend to be about the machine in front of them rather than the template in the manual.",
    ],
    capabilities: [
      {
        title: "Planned maintenance systems",
        body: "PMS set up or reviewed against maker recommendations, running hours and actual operating profile, then audited to confirm the jobs closed on paper were actually done on the plate.",
      },
      {
        title: "Class and statutory compliance",
        body: "Survey calendars tracked across class, flag and statutory certificates, with windows planned into the trading pattern instead of colliding with it. Conditions of class and memoranda are worked down deliberately, not carried forward.",
      },
      {
        title: "Dry-dock planning and supervision",
        body: "Specification writing, yard tendering and comparison, on-site supervision through the docking, and a closing report with photographic evidence and a reconciled final account. Scope creep is challenged in the yard, not discovered in the invoice.",
      },
      {
        title: "Budget and cost control",
        body: "Annual OPEX budgets built bottom-up per vessel, monthly variance reporting against them, and purchase approval routed so that no significant spend happens without a named owner.",
      },
      {
        title: "Defect and incident management",
        body: "Structured defect reporting from the vessel, root-cause analysis on recurring failures, and corrective actions tracked to closure rather than logged and forgotten.",
      },
      {
        title: "Performance monitoring",
        body: "Fuel consumption, hull and propeller performance, and machinery condition tracked over time so hull cleaning, propeller polishing and overhaul intervals are decided by data rather than by calendar habit.",
      },
    ],
    deliverables: [
      "Vessel-specific planned maintenance schedule",
      "Class and statutory survey calendar with alerts",
      "Monthly technical and budget variance report",
      "Dry-dock specification, tender comparison and supervision",
      "Spares procurement with OEM traceability",
      "Defect register with root-cause closure tracking",
      "Superintendent vessel visits and condition reports",
      "Machinery performance and consumption trending",
    ],
    outcomes: [
      { label: "Survey window adherence", value: "100%" },
      { label: "Budget variance target", value: "±5%" },
      { label: "Superintendent visits", value: "Quarterly" },
    ],
    faqs: [
      {
        question: "Can you take technical management of a single vessel?",
        answer:
          "Yes. We manage single-vessel owners as readily as small fleets, and the reporting is identical either way. Many owners start with one vessel to see how we work before extending the arrangement.",
      },
      {
        question: "Do you supervise dry-docking overseas?",
        answer:
          "Yes. Our superintendents attend dockings in Indian, Middle East, Southeast Asian and Chinese yards. Attendance is on-site for the full docking period on the major items, with a photographic closing report and a reconciled final account issued after redelivery.",
      },
      {
        question: "How do you handle spares procurement?",
        answer:
          "Requisitions from the vessel are technically reviewed before they go to market, then tendered to OEMs and approved suppliers with traceable part numbers. We resist substituting non-genuine parts on critical machinery, and where a substitution is proposed it is put to the owner with the technical reasoning in writing.",
      },
      {
        question: "What reporting will I receive?",
        answer:
          "A monthly technical report covering machinery status, open defects, survey position, budget variance and planned interventions, plus immediate notification of any incident, off-hire event or condition of class. Owners who prefer a different reporting format are accommodated.",
      },
    ],
    related: ["marine-spare-parts", "crew-management", "flag-documentation"],
  },
  {
    slug: "cruise-vessel-placement",
    title: "Cruise Vessel Placement",
    shortTitle: "Cruise Vessel Placement",
    tagline: "Marine, hotel and hospitality crew for passenger fleets",
    summary:
      "Screened marine, hotel, galley and guest-service professionals for cruise lines and passenger vessels — trained for the service standard the brand is sold on.",
    icon: "ship",
    image: "/images/cruise-ship.jpg",
    metaTitle: "Cruise Ship Recruitment & Vessel Placement Agency",
    metaDescription:
      "Cruise vessel placement services supplying marine, hotel, galley and guest-service crew to cruise lines and passenger vessels worldwide. STCW-certified and service-trained.",
    keywords: [
      "cruise ship recruitment agency",
      "cruise vessel placement",
      "hotel crew for cruise ships",
      "cruise ship jobs recruitment",
    ],
    intro: [
      "Cruise operations are judged twice: once on safety and compliance, and once on guest experience. A cruise crew member has to satisfy STCW and the safety management system while also delivering the service standard a paying guest was promised in a brochure.",
      "We recruit against both tests. Marine and technical crew are screened for competency and certification exactly as they would be for a cargo vessel. Hotel, galley and guest-service crew are additionally assessed on English fluency, grooming, service background and the temperament to work a long contract in close quarters.",
    ],
    capabilities: [
      {
        title: "Marine and deck departments",
        body: "Masters, deck officers, safety officers and ratings with passenger-vessel experience and current STCW crowd management, crisis management and passenger safety training.",
      },
      {
        title: "Engine and technical departments",
        body: "Chief engineers through to motormen, plus electro-technical officers and HVAC and refrigeration specialists familiar with passenger-vessel systems and redundancy requirements.",
      },
      {
        title: "Hotel and guest services",
        body: "Hotel directors, front-desk and guest-relations staff, cabin stewards, housekeeping supervisors and retail and spa personnel — assessed on service history, presentation and language fluency.",
      },
      {
        title: "Galley and food & beverage",
        body: "Executive chefs, sous chefs, pastry and bakery specialists, provision masters, restaurant managers, waiters and bar staff, with HACCP and food-safety competence verified.",
      },
      {
        title: "Service and safety training",
        body: "Pre-joining orientation covering the operator's brand standards, guest-interaction protocol, safety duties under the muster list and life on board, so joiners are productive from their first day rather than their first month.",
      },
      {
        title: "Contract and rotation handling",
        body: "Long-cycle cruise contracts managed with planned rotation, sign-on and sign-off logistics, and visa handling including C1/D and Schengen where the itinerary requires it.",
      },
    ],
    deliverables: [
      "Department-wise screened candidate pools",
      "English fluency and service-standard assessment",
      "STCW passenger-ship safety training verification",
      "C1/D, Schengen and itinerary-specific visa processing",
      "Pre-joining brand and safety orientation",
      "Sign-on and sign-off travel coordination",
      "Contract administration and rotation planning",
      "Performance feedback loop with the operator",
    ],
    outcomes: [
      { label: "Departments covered", value: "12+" },
      { label: "Contract completion", value: "95%" },
      { label: "Languages assessed", value: "English + " },
    ],
    faqs: [
      {
        question: "Do you supply hotel crew as well as marine crew?",
        answer:
          "Yes. Cruise placement covers the full crew list — deck, engine, hotel, galley, food and beverage, retail, spa and entertainment support. Owners frequently use us for hotel and galley departments where the recruitment pool and the assessment criteria differ sharply from cargo shipping.",
      },
      {
        question: "What safety training do cruise candidates hold?",
        answer:
          "Basic STCW modules plus the passenger-vessel additions: crowd management, passenger safety, cargo safety and hull integrity, and crisis management and human behaviour. Certificates are verified before shortlisting and expiry dates are tracked so nobody joins on a certificate about to lapse.",
      },
      {
        question: "Can you handle C1/D visas for US itineraries?",
        answer:
          "Yes. Our documentation desk manages C1/D applications end to end — appointment scheduling, document preparation, interview briefing and follow-through. Schengen and other itinerary-specific visas are handled the same way.",
      },
      {
        question: "How do you assess service quality before placement?",
        answer:
          "Structured interviews against the operator's own service standard, spoken English assessment, verification of prior hospitality employment, and reference checks with previous cruise or hotel employers. Where the operator supplies a competency framework, we screen against that framework rather than a generic one.",
      },
    ],
    related: ["crew-management", "crew-documentation", "merchant-navy-recruitment"],
  },
  {
    slug: "marine-spare-parts",
    title: "Marine Spare Parts",
    shortTitle: "Marine Spare Parts",
    tagline: "Genuine spares, sourced and delivered to your next port",
    summary:
      "OEM and approved-equivalent marine spares sourced with traceable part numbers and delivered to your nominated port or agent — with the paperwork a class surveyor will accept.",
    icon: "package",
    image: "/images/spare-parts.jpg",
    metaTitle: "Marine Spare Parts Supplier | Genuine Ship Spares & Delivery",
    metaDescription:
      "Marine spare parts supply for main engines, auxiliaries, pumps, compressors and deck machinery. OEM-traceable parts sourced and delivered worldwide to your next port of call.",
    keywords: [
      "marine spare parts supplier",
      "ship spare parts company",
      "genuine marine engine spares",
      "marine spares delivery port",
    ],
    intro: [
      "A wrong part is worse than no part. It costs the delivery, the labour, the second delivery, and often a berth the vessel cannot get back. Most of that waste starts at the requisition — an incomplete maker's plate reading, a superseded part number, a guess at the model variant.",
      "We treat sourcing as a technical task, not a purchasing one. Every requisition is checked against the maker's plate data, the equipment serial and the applicable parts catalogue before it goes to market, and what arrives is what the machine actually takes.",
    ],
    capabilities: [
      {
        title: "Main and auxiliary engine spares",
        body: "Cylinder heads, liners, pistons and rings, fuel injection equipment, bearings, turbocharger components and governor parts for the major two-stroke and four-stroke makers.",
      },
      {
        title: "Pumps, compressors and coolers",
        body: "Rotating equipment spares, mechanical seals, plate and shell-and-tube cooler components, air compressor valves and separator spares from OEM and approved sources.",
      },
      {
        title: "Deck and cargo machinery",
        body: "Windlass, mooring winch, crane and hatch cover components, cargo pump spares and hydraulic system parts, including seals and hoses to specification.",
      },
      {
        title: "Electrical and automation",
        body: "Switchboard components, alternator and motor spares, sensors, transmitters, PLC modules and automation cards, matched to the installed system revision rather than the current catalogue entry.",
      },
      {
        title: "Safety and statutory equipment",
        body: "Life-saving and firefighting appliance spares, servicing consumables and replacement units supplied with the certification a class or flag inspection will require.",
      },
      {
        title: "Logistics to the vessel",
        body: "Consolidation, export documentation, dangerous-goods handling where applicable, and delivery to the agent or the ship's side at your nominated port — tracked to the gangway, not just to the country.",
      },
    ],
    deliverables: [
      "Technical review of every requisition before sourcing",
      "OEM part-number traceability on all quotations",
      "Multi-source comparison with lead-time transparency",
      "Certificates of origin and conformity where required",
      "Consolidation and export documentation",
      "Dangerous-goods compliant packing and declaration",
      "Port and agent delivery coordination",
      "Warranty and non-conformance handling",
    ],
    outcomes: [
      { label: "Quotation turnaround", value: "24 hrs" },
      { label: "Order accuracy", value: "99%" },
      { label: "Delivery ports", value: "Worldwide" },
    ],
    faqs: [
      {
        question: "Do you supply genuine OEM parts or equivalents?",
        answer:
          "Genuine OEM by default. Where an approved equivalent would materially improve lead time or cost, we put the option to you in writing with the technical justification and let you decide. We do not substitute on critical machinery without written approval.",
      },
      {
        question: "How fast can spares reach a vessel?",
        answer:
          "Quotations typically go back within 24 hours. Delivery depends on stock position and port — ex-stock items to a major hub can reach the vessel in two to four days by air; maker-manufactured items follow the OEM lead time, which we state honestly at quotation rather than discovering later.",
      },
      {
        question: "Can you deliver to any port?",
        answer:
          "We deliver worldwide through an established agent and forwarder network, including remote and offshore locations. For unusual destinations we confirm feasibility and realistic transit time before you commit to the order.",
      },
      {
        question: "What documentation comes with the parts?",
        answer:
          "Commercial invoice and packing list as standard, plus certificates of origin, maker's certificates or certificates of conformity where the item or the flag state requires them. Dangerous goods ship with the applicable declaration and compliant packing.",
      },
    ],
    related: ["technical-management", "crew-management", "flag-documentation"],
  },
  {
    slug: "flag-documentation",
    title: "Flag Documentation",
    shortTitle: "Flag Documentation",
    tagline: "Endorsements, CDCs and seafarer documents without the delays",
    summary:
      "Flag state endorsements, seaman books, visas and statutory seafarer documentation processed and tracked, so joining dates hold and nobody is turned back at immigration.",
    icon: "file-check",
    image: "/images/flag-docs.jpg",
    metaTitle: "Flag State Documentation & Seafarer Certification Services",
    metaDescription:
      "Flag state endorsement, CDC, seaman book, visa and seafarer documentation services for shipowners and crew. Tracked processing with expiry monitoring.",
    keywords: [
      "flag state endorsement services",
      "seafarer documentation services",
      "CDC seaman book processing",
      "flag documentation shipping",
    ],
    intro: [
      "Documentation failures are the quietest way to lose a crew change. A flag endorsement that takes three weeks instead of one, a CDC with a missing entry, a visa appointment booked too late — each one moves a joining date, and moved joining dates move vessels.",
      "We run documentation as a tracked pipeline with owners and dates attached to every step. You see where each seafarer's paperwork stands, and problems surface while there is still time to solve them rather than on the day of travel.",
    ],
    capabilities: [
      {
        title: "Flag state endorsements",
        body: "Certificate of competency endorsements and recognition for Panama, Liberia, Marshall Islands, Malta, Singapore, India and other administrations, submitted correctly the first time to avoid the rejection-and-resubmit cycle.",
      },
      {
        title: "CDC and seaman books",
        body: "Continuous Discharge Certificate issuance, renewal and entry correction, including guidance on sea-time recording so entries survive scrutiny at the next endorsement application.",
      },
      {
        title: "Visas and travel documents",
        body: "Seafarer visas including C1/D, Schengen and transit visas, with appointment scheduling, document preparation and interview briefing handled by the desk rather than left to the candidate.",
      },
      {
        title: "STCW and course certification",
        body: "Verification of STCW modules against issuing institutes, gap identification against the intended rank and vessel type, and course booking at DG Shipping-approved institutes where a refresher is needed.",
      },
      {
        title: "Medical and fitness certification",
        body: "Pre-employment medical examinations at approved clinics, yellow fever and itinerary-specific vaccination coordination, and drug and alcohol testing where the operator or charterer requires it.",
      },
      {
        title: "Expiry monitoring",
        body: "Every certificate held in a monitored register with advance alerts, so renewals start early enough to complete without disrupting a contract or forcing an emergency relief.",
      },
    ],
    deliverables: [
      "Flag state endorsement application and follow-through",
      "CDC issuance, renewal and entry rectification",
      "Seafarer visa processing and interview briefing",
      "STCW module verification and gap analysis",
      "Approved-clinic medical and vaccination coordination",
      "Document register with expiry alerting",
      "Pre-joining document completeness check",
      "Digital document pack issued to vessel and crew",
    ],
    outcomes: [
      { label: "Flag states handled", value: "15+" },
      { label: "Document accuracy", value: "99%" },
      { label: "Expiry alert lead", value: "90 days" },
    ],
    faqs: [
      {
        question: "Which flag states do you process endorsements for?",
        answer:
          "Panama, Liberia, Marshall Islands, Malta, Singapore, Cyprus, India and several others. If your fleet flies a flag not on that list, send the requirement across — we will confirm whether we can process it directly or through a partner before you commit.",
      },
      {
        question: "How long does a flag endorsement take?",
        answer:
          "It varies by administration and current workload — commonly five to fifteen working days from a complete submission. The variable that actually decides the timeline is submission quality, which is why we check completeness before filing rather than after a rejection.",
      },
      {
        question: "Do you handle documentation for crew we recruited ourselves?",
        answer:
          "Yes. Documentation is offered as a standalone service. Plenty of owners recruit directly and use us purely to process endorsements, visas and medicals because that pipeline is where their delays actually occur.",
      },
      {
        question: "What happens when a certificate is close to expiry?",
        answer:
          "Our register raises an alert 90 days out, and renewal is initiated at that point. Where a renewal cannot complete before the certificate lapses, we flag the relief implication to you early enough to plan around it instead of reacting to it.",
      },
    ],
    related: ["crew-documentation", "crew-management", "technical-management"],
  },
  {
    slug: "offshore-crew-supply",
    title: "Offshore Crew Supply",
    shortTitle: "Offshore Crew Supply",
    tagline: "DP operators, marine crew and project personnel",
    summary:
      "Dynamic positioning operators, OSV marine crew, riggers and project personnel for offshore support, construction and survey operations — mobilised on project timelines.",
    icon: "anchor",
    image: "/images/offshore-ship.jpg",
    metaTitle: "Offshore Crew Recruitment & Manning Agency | OSV & DP Crew",
    metaDescription:
      "Offshore crew supply for OSVs, anchor handlers, construction and survey vessels. DP operators, marine crew, riggers and project personnel with BOSIET and offshore certification.",
    keywords: [
      "offshore crew recruitment services",
      "offshore manning agency",
      "DP operator recruitment",
      "OSV crew supply",
    ],
    intro: [
      "Offshore work runs on project clocks, not calendar months. A mobilisation window opens, the spread has to be crewed with correctly certified people, and the day rate runs whether the personnel are there or not.",
      "We hold an offshore-specific pool — DP certified officers, anchor handling and platform supply crew, construction and survey personnel — with BOSIET, HUET and medical validity tracked continuously, so mobilisation is a scheduling exercise rather than a recruitment campaign.",
    ],
    capabilities: [
      {
        title: "Dynamic positioning crew",
        body: "DP operators and senior DPOs with limited and unlimited certification, screened on logged DP time, incident history and the specific DP class and vendor system fitted to your vessel.",
      },
      {
        title: "OSV and AHTS marine crew",
        body: "Masters, chief officers, chief engineers and full marine complements for platform supply vessels, anchor handling tug supply vessels and multipurpose support vessels.",
      },
      {
        title: "Construction and survey personnel",
        body: "Riggers, deck foremen, crane operators, ROV support crew, surveyors and marine coordinators for subsea construction, pipeline and survey campaigns.",
      },
      {
        title: "Offshore safety certification",
        body: "BOSIET, HUET, FOET, H2S awareness and offshore medical validity verified and tracked, with refreshers arranged ahead of expiry so mobilisation is never blocked by a lapsed card.",
      },
      {
        title: "Rapid mobilisation",
        body: "Pre-screened, document-ready personnel who can travel at short notice, with visa and travel logistics handled in parallel with contracting rather than after it.",
      },
      {
        title: "Client and charterer compliance",
        body: "Screening aligned to oil-major and charterer vetting requirements, including matrix experience criteria, so your personnel clear client audit rather than failing it on paper.",
      },
    ],
    deliverables: [
      "DP-certified officers with verified logged DP time",
      "Full marine complements for OSV, AHTS and MPSV",
      "Construction, rigging and survey project personnel",
      "BOSIET, HUET and FOET verification and tracking",
      "Offshore medical and fitness coordination",
      "Rapid visa and mobilisation logistics",
      "Charterer and oil-major vetting alignment",
      "Project-duration contract administration",
    ],
    outcomes: [
      { label: "Mobilisation window", value: "7 days" },
      { label: "Certification tracked", value: "100%" },
      { label: "Project personnel", value: "All trades" },
    ],
    faqs: [
      {
        question: "Can you mobilise crew at short notice for a project?",
        answer:
          "Yes — that is the normal offshore pattern. Because our offshore pool is kept document-ready with current BOSIET, HUET and medicals, mobilisation inside seven days is routine for most trades. The binding constraint is usually visa processing for the destination country, which we start in parallel rather than sequentially.",
      },
      {
        question: "Do your DP operators hold unlimited certificates?",
        answer:
          "We supply both limited and unlimited DP certification. Candidates are screened on actual logged DP time and on the specific DP class and vendor system fitted to your vessel, because a DPO fluent on one manufacturer's system is not automatically fluent on another.",
      },
      {
        question: "Are your personnel compliant with oil-major vetting?",
        answer:
          "We screen against the charterer's or client's own experience matrix where one is supplied, including minimum time in rank, vessel-type experience and incident history. Where you share the vetting criteria up front, personnel are matched to it before shortlisting.",
      },
      {
        question: "Do you handle project-duration contracts?",
        answer:
          "Yes. Offshore contracts are commonly campaign-length rather than fixed-term, and we administer them accordingly — including rotation, back-to-back cover, demobilisation and repatriation at project close.",
      },
    ],
    related: ["crew-management", "flag-documentation", "technical-management"],
  },
  {
    slug: "merchant-navy-recruitment",
    title: "Merchant Navy Recruitment",
    shortTitle: "Merchant Navy Recruitment",
    tagline: "Careers at sea for officers, engineers, ratings and cadets",
    summary:
      "Recruitment and career placement for merchant navy professionals — from cadets seeking a first contract to senior officers looking for the right fleet and trading pattern.",
    icon: "compass",
    image: "/images/merchant-navy.jpg",
    metaTitle: "Merchant Navy Recruitment Agency | Seafarer Jobs & Placement",
    metaDescription:
      "Merchant navy recruitment for deck officers, marine engineers, ratings and cadets. Verified vacancies with shipowners worldwide, transparent process and no placement fees to seafarers.",
    keywords: [
      "merchant navy recruitment",
      "seafarer recruitment",
      "merchant navy jobs",
      "marine recruitment agency",
    ],
    intro: [
      "For a seafarer, the agency you sign with decides more than the next contract. It decides whether your wages arrive on time, whether your documents are handled properly, whether your family can reach someone at 2 a.m., and whether the vessel you join is the vessel you were described.",
      "We recruit for owners, and we are paid by owners. Seafarers never pay us a placement fee — not for registration, not for documentation, not for a joining letter. If anyone claiming to represent us asks a seafarer for money, that is fraud, and we want to hear about it.",
    ],
    capabilities: [
      {
        title: "Deck department",
        body: "Masters, chief officers, second and third officers and deck cadets, matched to vessel type, trading area and contract length rather than to whatever vacancy is open that week.",
      },
      {
        title: "Engine department",
        body: "Chief engineers, second, third and fourth engineers, electro-technical officers and engine cadets, screened on machinery type and automation experience as well as rank.",
      },
      {
        title: "Ratings and support",
        body: "Bosuns, able and ordinary seamen, oilers, wipers, fitters, cooks and stewards, with documented sea-time and vessel-type familiarity verified before submission.",
      },
      {
        title: "Cadet placement",
        body: "Structured training berths for deck and engine cadets from recognised institutes, with sea-time recording and training record book guidance so the contract counts towards certification.",
      },
      {
        title: "Career guidance",
        body: "Honest advice on rank progression, the certification path to the next level, and which vessel types build the experience profile that gets you promoted rather than simply keeps you employed.",
      },
      {
        title: "Transparent placement",
        body: "Vessel particulars, trading pattern, contract length, wage scale and owner named before you commit. No placement fees, no surprise deductions, no vessel details withheld until you are at the airport.",
      },
    ],
    deliverables: [
      "Verified vacancies with named owners and vessels",
      "Rank and vessel-type matched submissions",
      "Full documentation and endorsement support",
      "Pre-joining briefing on vessel and voyage",
      "Travel, joining and repatriation arranged",
      "Wage and allotment transparency in writing",
      "Cadet training berths with sea-time recording",
      "24×7 contact line for crew and families",
    ],
    outcomes: [
      { label: "Placement fee to crew", value: "Zero" },
      { label: "Registered seafarers", value: "500+" },
      { label: "Repeat contracts", value: "92%" },
    ],
    faqs: [
      {
        question: "Do seafarers pay any fee for placement?",
        answer:
          "No. Not for registration, documentation, medicals arranged through us, or a joining letter. We are paid by the shipowner. Charging seafarers for placement is prohibited under the Maritime Labour Convention and by our own licence conditions. If someone claiming to represent us asks you for money, report it to us immediately.",
      },
      {
        question: "What documents do I need to register?",
        answer:
          "An updated CV with sea-time, your CDC, certificate of competency and STCW modules, passport, current flag endorsements if held, and a recent medical fitness certificate. If something is missing or close to expiry we will tell you exactly what to fix rather than leaving your file to go quiet.",
      },
      {
        question: "I am a fresh cadet. Can you place me?",
        answer:
          "Yes, subject to available training berths. Cadets from recognised institutes are placed on structured training contracts where the sea-time counts towards certification and the training record book is properly maintained. Berths are limited and competitive, and we will be straight with you about the wait.",
      },
      {
        question: "How will I know the vessel details before joining?",
        answer:
          "Vessel name, type, flag, trading area, contract length, wage scale and owner are disclosed before you accept. If any of that is not shared with you before you commit, do not commit — with us or with anyone else.",
      },
    ],
    related: ["crew-management", "crew-documentation", "cruise-vessel-placement"],
  },
  {
    slug: "crew-documentation",
    title: "Crew Documentation",
    shortTitle: "Crew Documentation",
    tagline: "Every certificate checked before the gangway",
    summary:
      "Certificate verification, medicals, contracts and joining formalities managed as one tracked workflow, so joiners arrive complete and compliant every time.",
    icon: "clipboard-check",
    image: "/images/crew-docs.jpg",
    metaTitle: "Crew Documentation Services | Seafarer Certificate & Joining Formalities",
    metaDescription:
      "Crew documentation services covering certificate verification, medicals, seafarer employment agreements, travel and joining formalities for shipowners and managers.",
    keywords: [
      "crew documentation services",
      "seafarer certificate verification",
      "seafarer employment agreement",
      "crew joining formalities",
    ],
    intro: [
      "Most joining failures are documentation failures. The competency was there, the candidate was willing, and something on paper was missing, expired, or inconsistent with something else on paper.",
      "This service exists to close that gap. Every document a seafarer needs to join legally and safely is collected, verified, cross-checked against every other document, and confirmed complete before travel is booked — not at the check-in counter.",
    ],
    capabilities: [
      {
        title: "Certificate verification",
        body: "Certificates of competency, proficiency and STCW modules verified against issuing authorities, with expiry dates cross-checked against the full contract length rather than only the joining date.",
      },
      {
        title: "Sea-time validation",
        body: "CDC entries reconciled against employer letters and declared service, so the record supports the next endorsement application instead of collapsing under examination.",
      },
      {
        title: "Medical and fitness",
        body: "Pre-employment medicals at approved clinics, vaccinations appropriate to the trading area, and drug and alcohol testing where required by the operator or charterer.",
      },
      {
        title: "Employment agreements",
        body: "MLC-compliant Seafarer Employment Agreements drafted with wage scale, contract duration, leave entitlement, repatriation terms and grievance procedure stated plainly and explained before signature.",
      },
      {
        title: "Travel and joining",
        body: "Flights, transit visas, port agent liaison, joining letters and briefing packs, coordinated so the seafarer arrives at the right port on the right date with the right documents in hand.",
      },
      {
        title: "Digital document control",
        body: "A single verified document pack per seafarer, issued to vessel and office, with a central register that flags expiries and prevents the same certificate being chased twice.",
      },
    ],
    deliverables: [
      "Verified certificate pack per seafarer",
      "Sea-time reconciliation against CDC entries",
      "Approved-clinic medical and vaccination records",
      "MLC-compliant Seafarer Employment Agreement",
      "Flight, transit visa and port agent coordination",
      "Joining letter and pre-departure briefing pack",
      "Central document register with expiry alerts",
      "Pre-travel completeness sign-off",
    ],
    outcomes: [
      { label: "Pre-travel checks", value: "100%" },
      { label: "Document register", value: "Central" },
      { label: "Expiry alerting", value: "90 days" },
    ],
    faqs: [
      {
        question: "Can documentation be handled separately from crew supply?",
        answer:
          "Yes, and many owners use it that way. If you recruit directly but keep losing time to documentation, this service can be taken on its own for crew we never sourced.",
      },
      {
        question: "How do you prevent expired certificates reaching a vessel?",
        answer:
          "Every certificate is held in a central register with automated alerts at 90 days. Before travel is booked, validity is checked against the full contract length — a certificate that expires mid-contract is treated as expired, because at sea that is exactly what it becomes.",
      },
      {
        question: "Do you prepare Seafarer Employment Agreements?",
        answer:
          "Yes, drafted to MLC 2006 requirements and to the flag state's specific format where one is prescribed. Terms are explained to the seafarer before signature, and a signed copy is provided to the seafarer, the vessel and the office.",
      },
      {
        question: "What if a document problem is found close to the joining date?",
        answer:
          "You are told immediately, with the options and realistic timelines set out — expedite, substitute the joiner, or move the crew change. What we will not do is put someone on a plane and hope the problem is not noticed at immigration.",
      },
    ],
    related: ["flag-documentation", "crew-management", "merchant-navy-recruitment"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slugs: readonly string[]): Service[] {
  return slugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is Service => Boolean(service));
}
