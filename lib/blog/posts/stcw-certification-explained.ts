import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "stcw-certification-explained",
  title: "STCW Certification Explained: What Every Seafarer and Shipowner Must Know",
  excerpt:
    "A practical guide to STCW certificates, refresher requirements and the mistakes that stop seafarers joining — written for people who actually have to work with the paperwork.",
  category: "Merchant Navy",
  tags: ["STCW", "Certification", "Compliance", "Seafarer Documents"],
  keywords: [
    "STCW certification",
    "STCW courses for seafarers",
    "STCW refresher requirements",
    "seafarer certification requirements",
  ],
  publishedAt: "2026-02-03",
  author: "Alaknanda Ship Management",
  tone: ["#0F4C81", "#FF6B00"],
  image: "/images/cargo-ship-inspection.png",
  featured: true,
  related: [
    "how-to-choose-a-ship-manning-agency",
    "flag-state-endorsement-process",
    "merchant-navy-career-path",
  ],
  blocks: [
    {
      type: "p",
      text: "STCW is the reason a Second Officer trained in Kochi can stand a bridge watch on a Liberian-flagged vessel loading in Rotterdam, and everyone involved can be reasonably confident about what that officer knows. It is the International Convention on Standards of Training, Certification and Watchkeeping for Seafarers, adopted in 1978 and substantially rewritten by the 2010 Manila Amendments.",
    },
    {
      type: "p",
      text: "In day-to-day terms it is also the most common reason a seafarer does not join a vessel on the date everyone planned. Not because the training is difficult, but because the certificate landscape is fragmented, the validity periods differ, and it is genuinely easy to arrive at an endorsement application with one module lapsed.",
    },

    { type: "h2", text: "The two layers people confuse" },
    {
      type: "p",
      text: "There are two distinct things that both get called 'STCW', and conflating them causes most of the confusion.",
    },
    {
      type: "p",
      text: "The first is the Certificate of Competency — the licence that says you are qualified to serve as, for example, Officer of the Watch or Second Engineer. It is issued by a maritime administration after examination and documented sea service.",
    },
    {
      type: "p",
      text: "The second is the set of Certificates of Proficiency and short courses: personal survival techniques, fire prevention and fire fighting, elementary first aid, personal safety and social responsibilities, and the specialised modules layered on top for tankers, gas carriers, passenger vessels and so on. These are course-based, have their own expiry cycles, and are what people usually mean when they say 'my STCW is due'.",
    },
    {
      type: "callout",
      title: "The practical distinction",
      text: "Your Certificate of Competency establishes what rank you can hold. Your Certificates of Proficiency establish whether you are currently allowed to sail at all. Both must be valid, and they expire on different clocks.",
    },

    { type: "h2", text: "The basic safety training every seafarer needs" },
    {
      type: "p",
      text: "Four basic modules apply to essentially everyone with safety or emergency duties on board, which in practice means everyone:",
    },
    {
      type: "ul",
      items: [
        "Personal Survival Techniques (STCW A-VI/1-1) — abandon ship, life raft, survival at sea.",
        "Fire Prevention and Fire Fighting (A-VI/1-2) — the module most often let lapse.",
        "Elementary First Aid (A-VI/1-3).",
        "Personal Safety and Social Responsibilities (A-VI/1-4).",
      ],
    },
    {
      type: "p",
      text: "The Manila Amendments introduced mandatory refresher training at five-year intervals for survival craft, fire fighting and advanced fire fighting. Elementary first aid and personal safety generally do not require refreshing in the same way, though individual administrations vary — which is precisely why you check the administration's rule rather than the general one.",
    },

    { type: "h2", text: "Specialised modules by vessel type" },
    {
      type: "table",
      head: ["Vessel type", "Typically required beyond basic safety"],
      rows: [
        [
          "Oil and chemical tankers",
          "Basic and, for senior officers, Advanced Oil or Chemical Tanker Cargo Operations",
        ],
        [
          "Gas carriers (LNG/LPG)",
          "Basic and Advanced Liquefied Gas Tanker Cargo Operations",
        ],
        [
          "Passenger and cruise vessels",
          "Crowd Management, Crisis Management and Human Behaviour, Passenger Safety",
        ],
        [
          "All vessels, deck officers",
          "GMDSS, ECDIS (type-specific), Radar and ARPA, Bridge Resource Management",
        ],
        [
          "Senior officers",
          "Ship Security Officer, Medical First Aid or Medical Care, Advanced Fire Fighting",
        ],
      ],
    },
    {
      type: "p",
      text: "ECDIS deserves a specific mention because it is generic-plus-specific: a generic ECDIS certificate is not sufficient on its own for many owners, who additionally require type-specific familiarisation for the equipment actually fitted. Turning up with generic ECDIS only, for a vessel with a Furuno or JRC installation the officer has never operated, is a recurring cause of last-minute problems.",
    },

    { type: "h2", text: "Where seafarers most often get caught out" },
    { type: "h3", text: "Checking validity against the joining date instead of the contract" },
    {
      type: "p",
      text: "A certificate valid on the day you join but expiring in month four of a six-month contract is, operationally, an expired certificate. You will be at sea, far from the issuing institute, and the vessel will be out of compliance. Always check every certificate against the end of the intended contract, plus a margin for contract extension.",
    },
    { type: "h3", text: "Assuming all modules expire together" },
    {
      type: "p",
      text: "They rarely do. Refreshers taken opportunistically at different times drift apart, and a seafarer with five modules can easily have five different expiry dates. Keep a single dated list rather than relying on memory.",
    },
    { type: "h3", text: "Training at an institute the flag state does not recognise" },
    {
      type: "p",
      text: "A certificate from a non-approved institute may be refused at endorsement. Before booking any course, confirm the institute is approved by the relevant administration — for Indian seafarers, that it appears on the DG Shipping approved list.",
    },
    { type: "h3", text: "Forgetting that the flag endorsement has its own validity" },
    {
      type: "p",
      text: "The flag state endorsement recognising your Certificate of Competency is a separate document with a separate expiry, and it cannot outlive the underlying certificate. Renewing the COC without renewing the endorsement leaves you with a valid licence and no permission to use it on that flag.",
    },

    { type: "h2", text: "What shipowners should verify" },
    {
      type: "p",
      text: "From the owner's side, the discipline is straightforward and rarely applied consistently:",
    },
    {
      type: "ol",
      items: [
        "Verify Certificates of Competency against the issuing administration's portal, not against the paper presented.",
        "Check every Certificate of Proficiency expiry against the full planned contract length.",
        "Confirm specialised modules match the actual vessel type and cargo, including type-specific ECDIS.",
        "Confirm the flag endorsement is current and consistent with the underlying COC.",
        "Maintain a central register with alerts at 90 days so renewals start before they become emergencies.",
      ],
    },
    {
      type: "quote",
      text: "Almost every certificate crisis was visible ninety days earlier to anyone who was looking.",
    },

    { type: "h2", text: "A note on forged certificates" },
    {
      type: "p",
      text: "Forged and altered certificates exist, and they are better produced than they used to be. The defence is not sharper eyesight; it is verification at source. Administration verification portals, direct written confirmation with the issuing institute, and cross-referencing sea time against CDC entries will catch what visual inspection will not.",
    },
    {
      type: "p",
      text: "This is also why a manning agency that describes its process as 'reviewing documents carefully' is describing something that does not work. Careful review of a good forgery produces confident acceptance of a good forgery.",
    },

    { type: "h2", text: "Keeping on top of it" },
    {
      type: "p",
      text: "Practically, most seafarers who never have a certificate problem do the same three things: they keep one dated list of every certificate and its expiry, they book refreshers three months before expiry rather than in the month of, and they check the flag state's specific requirements rather than assuming the general rule applies. None of it is difficult. It is simply administration that has to be done before it is urgent.",
    },
  ],
  faqs: [
    {
      question: "How often does STCW basic safety training need refreshing?",
      answer:
        "Personal survival techniques, fire prevention and fire fighting, and advanced fire fighting require refresher training every five years under the Manila Amendments. Elementary first aid and personal safety and social responsibilities generally do not follow the same cycle, but individual administrations vary — always check the rule of the administration that issued your certificate.",
    },
    {
      question: "What is the difference between a COC and an STCW certificate?",
      answer:
        "A Certificate of Competency is the licence establishing which rank you may serve in, issued by a maritime administration after examination and documented sea service. STCW Certificates of Proficiency are course-based safety and specialisation certificates with their own separate expiry dates. You need both, and they expire on different clocks.",
    },
    {
      question: "Is generic ECDIS training enough?",
      answer:
        "Often not. Many owners require type-specific ECDIS familiarisation for the equipment actually installed on the vessel, in addition to the generic certificate. Confirm the make and model fitted before joining, and arrange type-specific training if you have not operated that system.",
    },
    {
      question: "What happens if a certificate expires during my contract?",
      answer:
        "Operationally it is treated as already expired, because you will be at sea and unable to renew it. This is why validity should be checked against the end of the intended contract plus a margin, not against the joining date. A certificate expiring mid-contract should be renewed before you join.",
    },
  ],
};
