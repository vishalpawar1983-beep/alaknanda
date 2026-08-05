import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "crew-retention-in-shipping",
  title: "Crew Retention: Why Seafarers Leave, and What Actually Keeps Them",
  excerpt:
    "Retention is the cheapest crewing strategy available and the most consistently mismanaged. What the data and the exit conversations actually say about why seafarers move on.",
  category: "Crew Management",
  tags: ["Retention", "Crew Welfare", "Crew Management", "MLC"],
  keywords: [
    "crew retention shipping",
    "seafarer retention strategies",
    "crew management services",
    "seafarer welfare",
  ],
  publishedAt: "2026-03-11",
  author: "Alaknanda Ship Management",
  tone: ["#0A2342", "#00A86B"],
  image: "/images/crew-management.jpg",
  related: [
    "how-to-choose-a-ship-manning-agency",
    "mlc-2006-owner-obligations",
    "merchant-navy-career-path",
  ],
  blocks: [
    {
      type: "p",
      text: "A returning seafarer is worth considerably more than a new one, and almost nobody accounts for it. They already know the vessel's machinery, its quirks, the safety management system and the standing orders. Familiarisation is shorter, incident probability is lower, and the recruitment and documentation cost is close to zero.",
    },
    {
      type: "p",
      text: "Despite that, retention is usually treated as a soft concern — something for the welfare section of the annual report rather than the operating budget. It is a costly misclassification.",
    },

    { type: "h2", text: "The real reasons seafarers leave" },
    {
      type: "p",
      text: "Exit conversations are remarkably consistent, and the ranking rarely matches what owners assume. Wages matter, but they are seldom first.",
    },
    { type: "h3", text: "1. Wage timing, not wage level" },
    {
      type: "p",
      text: "A seafarer whose allotment reaches their family on a different date each month will leave for an operator paying the same amount reliably. Families plan around that money — school fees, loan instalments, medical costs. Irregularity converts a good wage into a source of anxiety, and anxiety at sea has nowhere to go.",
    },
    { type: "h3", text: "2. Contract length drift" },
    {
      type: "p",
      text: "Being asked to extend once is normal. Being asked repeatedly, at short notice, with the relief date moving each time, is the most reliable predictor of non-return we see. The seafarer signed for a defined separation from their family, and each extension is a renegotiation of something they had already accepted at cost.",
    },
    { type: "h3", text: "3. Being treated as interchangeable" },
    {
      type: "p",
      text: "Officers notice whether anyone at the office knows who they are. A named contact who remembers the last contract, an actual debrief after sign-off, feedback that is acted on — these cost almost nothing and register strongly. Generic communication addressed to 'Dear Seafarer' registers too, in the opposite direction.",
    },
    { type: "h3", text: "4. Connectivity" },
    {
      type: "p",
      text: "This has moved from a perk to a baseline expectation, particularly among officers under 35. A vessel where crew can reliably video call home is now competing on materially better terms than one where they cannot, regardless of wage.",
    },
    { type: "h3", text: "5. Unresolved grievances" },
    {
      type: "p",
      text: "The specific complaint often matters less than whether anyone responded. A grievance investigated and closed — even not in the seafarer's favour — damages retention far less than one that disappeared into silence.",
    },

    { type: "h2", text: "What actually works" },
    {
      type: "table",
      head: ["Intervention", "Relative cost", "Retention impact"],
      rows: [
        ["Fixed-date allotment remittance", "Negligible", "High"],
        ["Honouring planned relief dates", "Low to moderate", "High"],
        ["Named account contact per seafarer", "Negligible", "Moderate to high"],
        ["Structured post-contract debrief", "Low", "Moderate"],
        ["Reliable crew connectivity", "Moderate", "High"],
        ["Documented grievance response within 7 days", "Low", "Moderate"],
        ["Wage increase without the above", "High", "Low"],
      ],
    },
    {
      type: "p",
      text: "That last row is the uncomfortable one. Raising wages while continuing to move relief dates and pay allotments erratically buys very little. The money is spent and the underlying problem is untouched.",
    },

    { type: "h2", text: "The compliance floor is not a retention strategy" },
    {
      type: "p",
      text: "MLC 2006 sets minimum standards for employment agreements, hours of rest, repatriation, accommodation and medical care. Meeting them is mandatory, not commendable. Operators who treat MLC compliance as their crew welfare policy tend to have exactly the retention you would expect from a policy of doing the legal minimum.",
    },
    {
      type: "quote",
      text: "Compliance keeps you out of trouble. It does not make anyone want to come back.",
    },

    { type: "h2", text: "Measure the right thing" },
    {
      type: "p",
      text: "Headcount on a database is not a metric. The numbers worth tracking are narrow:",
    },
    {
      type: "ol",
      items: [
        "Return rate — the proportion of seafarers completing a contract who sign a further one.",
        "Rank-weighted return rate — losing senior officers costs far more than losing ratings.",
        "Relief date adherence — how often the planned crew change happened on the planned date.",
        "Allotment punctuality — percentage of allotments remitted on the committed date.",
        "Grievance closure time — median days from raised to resolved.",
      ],
    },
    {
      type: "p",
      text: "Three of those five are administrative discipline rather than expenditure, which is the practical point: most retention improvement available to a typical operator costs organisation rather than money.",
    },

    { type: "h2", text: "The role of the manning agency" },
    {
      type: "p",
      text: "An agency influences retention more than owners usually realise, because the agency is who the seafarer actually deals with. Whether the allotment arrives on time, whether someone answers when a spouse calls about an emergency, whether the debrief happens — those interactions form the seafarer's view of the whole arrangement, and the owner's name is attached to it.",
    },
    {
      type: "p",
      text: "When evaluating an agency, retention rate is therefore a proxy for operational discipline generally. An agency that keeps seafarers coming back is, almost by necessity, one that pays on time, plans reliefs properly and answers the phone.",
    },
  ],
  faqs: [
    {
      question: "What is a good crew retention rate?",
      answer:
        "Above 85% return rate is respectable; above 90% is strong. More useful than the headline figure is the rank-weighted rate, since losing senior officers costs substantially more to replace than losing ratings, both in recruitment cost and in operational risk during familiarisation.",
    },
    {
      question: "Does raising wages improve crew retention?",
      answer:
        "Less than most operators expect, if the underlying issues remain. Seafarers consistently rank wage reliability above wage level, and contract length certainty above both. Raising pay while continuing to move relief dates and remit allotments erratically buys very little retention.",
    },
    {
      question: "How does MLC 2006 relate to crew retention?",
      answer:
        "MLC sets the mandatory floor for employment agreements, hours of rest, repatriation and welfare. Meeting it is a legal obligation rather than a retention strategy. Operators who treat MLC compliance as their welfare policy typically see the retention that a do-the-minimum approach earns.",
    },
  ],
};
