import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "how-to-choose-a-ship-manning-agency",
  title: "How to Choose a Ship Manning Agency: A Shipowner's Due Diligence Guide",
  excerpt:
    "Most manning agencies look identical on a website. This guide sets out the questions, documents and warning signs that separate a genuine crewing partner from a CV forwarding service.",
  category: "Crew Management",
  tags: ["Manning Agency", "Due Diligence", "Crewing", "Compliance"],
  keywords: [
    "best ship manning agency",
    "how to choose a manning agency",
    "certified ship manning company",
    "marine recruitment company for ship owners",
    "crew management company for shipping companies",
  ],
  publishedAt: "2026-01-14",
  updatedAt: "2026-06-02",
  author: "Alaknanda Ship Management",
  tone: ["#0A2342", "#0F4C81"],
  image: "/images/hero-ship.jpg",
  featured: true,
  related: [
    "crew-retention-in-shipping",
    "stcw-certification-explained",
    "flag-state-endorsement-process",
  ],
  blocks: [
    {
      type: "p",
      text: "Every manning agency website says the same six things. Certified. Experienced. Global network. Qualified seafarers. Fast turnaround. Full compliance. Read four of them back to back and you will not be able to tell them apart, which is precisely the problem: the claims are free, and the consequences of believing the wrong one are not.",
    },
    {
      type: "p",
      text: "A bad manning decision does not announce itself on day one. It arrives three months later as a port state control detention over a certificate that was never actually verified, or as an unplanned crew change in an expensive port because a joiner was refused entry, or as a quiet erosion of retention because wages kept arriving late. By the time the cost is visible, it is already sunk.",
    },
    {
      type: "p",
      text: "This guide is the due diligence we would run if we were on the other side of the table. It covers what to ask, what to ask for in writing, how to read the answers, and the specific signals that should end a conversation early.",
    },

    { type: "h2", text: "Start with what the agency is legally permitted to do" },
    {
      type: "p",
      text: "Before any discussion of rates or turnaround times, establish that the agency is licensed to place seafarers at all. In India that means a Recruitment and Placement Services Licence issued by the Directorate General of Shipping. Other jurisdictions have their equivalents, and MLC 2006 Regulation 1.4 requires flag states to satisfy themselves that recruitment services operating in their territory are licensed or certified.",
    },
    {
      type: "p",
      text: "Ask for the licence number and the expiry date, then verify it against the issuing authority's public register yourself. This takes about four minutes. An agency that hesitates, sends a scanned certificate instead of a number, or explains that renewal is 'in process' has told you something important.",
    },
    {
      type: "callout",
      title: "Verify, do not accept",
      text: "A PDF of a licence proves only that someone owns a PDF. Every serious maritime administration publishes a searchable register of licensed recruitment and placement services. Use it.",
    },

    { type: "h2", text: "Ask how certificates are verified — and listen carefully to the answer" },
    {
      type: "p",
      text: "This is the single most revealing question you can ask, because the honest answer is specific and the dishonest answer is vague.",
    },
    {
      type: "p",
      text: "A genuine verification process names the mechanism: certificates of competency checked against the issuing administration's online verification portal, or confirmed by direct written enquiry to the issuing authority where no portal exists. Sea time reconciled line by line against Continuous Discharge Certificate entries and previous employer letters. Discrepancies escalated rather than smoothed over.",
    },
    {
      type: "p",
      text: "A weak process sounds like 'we check all documents carefully' or 'our team reviews every certificate'. Those sentences describe looking at a piece of paper. Looking at a forged certificate carefully does not make it genuine.",
    },
    {
      type: "p",
      text: "Follow up with a harder question: what happens when a discrepancy is found? The answer you want is that the application ends. The answer you do not want involves the candidate being given a chance to explain, because a candidate who has misrepresented sea time to an agency will misrepresent it to a port state control officer.",
    },

    { type: "h2", text: "Establish who pays, and confirm it in writing" },
    {
      type: "p",
      text: "Under MLC 2006, seafarers must not be charged fees for finding employment. This is not a guideline. It is a convention requirement, and an agency that charges seafarers is exposing you — the owner — to reputational and, in some jurisdictions, legal consequence.",
    },
    {
      type: "p",
      text: "Ask directly whether seafarers pay anything: registration, documentation, medicals, joining letters, 'processing'. Then ask for that answer in the agreement. An agency operating properly will put it in writing without hesitation because it is already how they work.",
    },
    {
      type: "quote",
      text: "If an agency is willing to quietly take money from the seafarer on one side of the transaction, form your own view about what it is willing to do on the other side.",
    },

    { type: "h2", text: "Interrogate the turnaround claim" },
    {
      type: "p",
      text: "Everybody promises fast crew supply. The useful question is not how fast, but fast for what.",
    },
    {
      type: "p",
      text: "Ask for the realistic timeline on three specific requirements: a Third Engineer for a bulk carrier, a Chief Engineer with LNG cargo experience, and a senior DPO for an offshore construction vessel. These three have wildly different pools. An agency that quotes the same turnaround for all three either does not understand the market or is telling you what you want to hear.",
    },
    {
      type: "table",
      head: ["Requirement", "Realistic shortlist", "Realistic joining"],
      rows: [
        ["Common ranks, standard vessel types", "48–72 hours", "10–14 days"],
        ["Senior officers, tanker endorsements", "3–5 days", "14–21 days"],
        ["LNG / LPG specialists", "1–2 weeks", "3–6 weeks"],
        ["Senior DP operators, offshore", "1–2 weeks", "2–4 weeks"],
      ],
    },
    {
      type: "p",
      text: "Those figures assume documentation is clean. Flag endorsements alone routinely take five to fifteen working days, and a visa appointment backlog can add weeks that no agency controls. An agency that folds those realities into its estimate is being straight with you. One that quotes joining dates as though documentation is instantaneous is quoting a best case it has no ability to guarantee.",
    },

    { type: "h2", text: "Examine the documentation pipeline, because that is where delays actually live" },
    {
      type: "p",
      text: "Owners tend to evaluate manning agencies on recruitment. In practice, most missed joining dates are documentation failures, not sourcing failures. The candidate was found; the flag endorsement came back rejected, or the medical expired mid-process, or a C1/D appointment was booked too late.",
    },
    { type: "h3", text: "Questions that reveal a real pipeline" },
    {
      type: "ul",
      items: [
        "Which flag states do you process endorsements for directly, and which through partners?",
        "What is your rejection rate on first submission, and what causes rejections?",
        "How far in advance do you alert on certificate expiry?",
        "Do you check certificate validity against the joining date, or against the full contract length?",
        "Who books the medical, and at which approved clinics?",
        "What is the escalation path when a document problem is found seven days before travel?",
      ],
    },
    {
      type: "p",
      text: "That fourth question matters more than it looks. A certificate valid on the joining date but expiring in month four of a six-month contract is a problem that surfaces at sea, in a port far from the issuing authority, with no easy fix. Agencies that check against the contract length rather than the joining date have thought about this. Most have not.",
    },

    { type: "h2", text: "Ask what happens when things go wrong" },
    {
      type: "p",
      text: "Every agency performs well when nothing is on fire. The difference shows in the exceptions: a seafarer who is not competent at the rank they were placed in, a medical emergency requiring repatriation, a wage dispute, a family crisis at home while the seafarer is mid-ocean.",
    },
    {
      type: "ol",
      items: [
        "Is there a genuinely staffed duty line outside office hours, or a mobile number that may or may not be answered?",
        "What is the replacement policy if a seafarer proves unsuitable, and is there a guarantee period in writing?",
        "Who handles repatriation logistics and who bears the cost in each scenario?",
        "How are wage disputes investigated, and within what timeframe?",
        "Is the seafarer's next of kin given a contact number at sign-on?",
      ],
    },
    {
      type: "p",
      text: "The last question is a good proxy for culture. Agencies that give families a real contact number tend to be the ones that answer it.",
    },

    { type: "h2", text: "Look at retention, not headcount" },
    {
      type: "p",
      text: "A large database is not an asset. Anyone can accumulate CVs. What matters is how many seafarers come back for a second and third contract, because returning crew already know the vessel, the systems and the safety management system, which shortens familiarisation and lowers incident risk.",
    },
    {
      type: "p",
      text: "Ask for the retention rate and ask how it is calculated. Then ask the more revealing question: why do seafarers leave? An agency with a real answer will talk about wage timing, contract length preferences and shore opportunities. An agency without one will say retention is excellent and move on.",
    },

    { type: "h2", text: "Warning signs that should end the conversation" },
    {
      type: "ul",
      items: [
        "Any suggestion that seafarers pay fees, however it is described.",
        "Reluctance to provide a licence number that you can verify independently.",
        "Identical turnaround promises regardless of rank or vessel type.",
        "Vague answers about certificate verification that describe reviewing rather than verifying.",
        "No named account contact, or a contact who changes every few weeks.",
        "Unwillingness to put the replacement guarantee, fee structure or verification process in the written agreement.",
        "Pressure to accept a candidate quickly before you have seen verified documents.",
        "Reference clients who cannot be contacted, or who turn out to be former rather than current clients.",
      ],
    },

    { type: "h2", text: "Take references properly" },
    {
      type: "p",
      text: "Ask for three current clients with vessels comparable to yours, and actually call them. The questions worth asking are narrow and factual: how many joining dates have slipped in the last twelve months and why; has any certificate problem been found at an inspection; how quickly does the agency answer outside office hours; and — the question that gets the most honest answers — what do you wish they did better?",
    },

    { type: "h2", text: "Put the important things in the agreement" },
    {
      type: "p",
      text: "Verbal assurance is worth exactly what it costs. Before signing, confirm that the agreement covers the fee structure with no per-candidate charges hidden behind the headline number, the explicit statement that seafarers are not charged, the replacement guarantee and its period, the verification standard the agency commits to, data protection and confidentiality terms, and the reporting you will receive and when.",
    },
    {
      type: "callout",
      title: "One practical test",
      text: "Ask the agency to send a sample monthly crew report from an existing client with the identifying details removed. An agency that produces real reporting will have one ready. An agency that does not will explain why it cannot.",
    },

    { type: "h2", text: "The underlying principle" },
    {
      type: "p",
      text: "Choosing a manning agency is not a procurement exercise where the lowest compliant bid wins. The crew is the operating system of the vessel. Every saving made by relaxing verification standards is borrowed against a future detention, off-hire or incident, and the interest rate is unpredictable.",
    },
    {
      type: "p",
      text: "The agencies worth working with tend to be recognisable by a specific quality: they are willing to give you an answer you do not want. They will tell you a rank is hard to fill, that a joining date is unrealistic, that a candidate you liked has a sea-time discrepancy. That willingness to disappoint you in small ways is the best available predictor that they will not disappoint you in large ones.",
    },
  ],
  faqs: [
    {
      question: "What licence should a ship manning agency hold?",
      answer:
        "In India, a Recruitment and Placement Services Licence issued by the Directorate General of Shipping. Other jurisdictions have equivalents, and MLC 2006 Regulation 1.4 requires flag states to ensure recruitment services operating in their territory are licensed or certified. Always verify the licence number against the issuing authority's public register rather than accepting a scanned certificate.",
    },
    {
      question: "Should seafarers ever pay a manning agency?",
      answer:
        "No. MLC 2006 prohibits charging seafarers fees for finding employment. Any agency charging seafarers for registration, documentation, medicals or joining letters is operating outside the convention, and working with them exposes the shipowner to reputational and potentially legal consequences.",
    },
    {
      question: "How long should it take to get a verified shortlist?",
      answer:
        "For common ranks on standard vessel types, 48 to 72 hours is realistic. Specialised requirements such as LNG cargo engineers or senior DP operators take one to two weeks because the qualified pool is genuinely smaller. An agency quoting identical turnaround for all ranks is not being straight with you.",
    },
    {
      question: "What is the single most important question to ask a manning agency?",
      answer:
        "How exactly do you verify certificates, and what happens when you find a discrepancy? The honest answer names a specific mechanism — issuing authority verification portals, direct written confirmation, CDC reconciliation — and confirms that discrepancies end the application. Vague answers about careful review describe looking at paper, not verifying it.",
    },
  ],
};
