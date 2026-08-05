import type { Block } from "@/lib/blog/types";

import { contactInfo, formattedAddress, siteConfig } from "@/lib/site";

export type LegalDocument = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  effectiveFrom: string;
  blocks: Block[];
};

const contactLine = `${siteConfig.legalName}, ${formattedAddress}. Email ${contactInfo.email}, telephone ${contactInfo.phone}.`;

export const legalDocuments: Record<string, LegalDocument> = {
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy",
    metaTitle: "Privacy Policy",
    metaDescription:
      "How Alaknanda Ship Management collects, uses, shares and protects personal data of seafarers, clients and website visitors, and the rights you hold over that data.",
    intro:
      "This policy explains what personal data we collect, why we collect it, who we share it with and what rights you have. It applies to seafarers registering with us, client representatives who contact us, and anyone using this website.",
    effectiveFrom: "1 January 2026",
    blocks: [
      { type: "h2", text: "Who we are" },
      {
        type: "p",
        text: `${siteConfig.legalName} is a crewing and manning agency. For the purposes of data protection law we are the data controller for the personal data described in this policy. You can reach us at: ${contactLine}`,
      },

      { type: "h2", text: "What data we collect" },
      { type: "h3", text: "From seafarers" },
      {
        type: "ul",
        items: [
          "Identity and contact details — name, date of birth, nationality, address, telephone number and email address.",
          "Professional data — CV, sea service history, rank, vessel types served, certificates of competency and proficiency, CDC details and flag endorsements.",
          "Documentation — passport details, visa records, seafarer identity documents and photographs required for applications.",
          "Health data — medical fitness certificates and vaccination records, which constitute special category data and are processed only where necessary to establish fitness for sea service.",
          "Financial data — bank account details for wage and allotment payment, and tax identifiers where required.",
          "Next of kin details, which you provide to us for emergency contact purposes.",
        ],
      },
      { type: "h3", text: "From client representatives" },
      {
        type: "ul",
        items: [
          "Name, job title, employer, business email address and telephone number.",
          "Correspondence relating to crewing requirements, vessel particulars and commercial terms.",
        ],
      },
      { type: "h3", text: "From website visitors" },
      {
        type: "ul",
        items: [
          "Information you submit through our enquiry, careers or newsletter forms.",
          "Technical data collected by analytics, including approximate location, device and browser type, and pages viewed. See our cookie policy for detail.",
        ],
      },

      { type: "h2", text: "Why we process your data and on what legal basis" },
      {
        type: "table",
        head: ["Purpose", "Legal basis"],
        rows: [
          [
            "Assessing suitability and presenting candidates to shipowners",
            "Performance of a contract, and legitimate interests in operating a recruitment service",
          ],
          [
            "Verifying certificates with issuing authorities",
            "Legal obligation under STCW and flag state requirements",
          ],
          [
            "Processing flag endorsements, visas and medicals",
            "Performance of a contract and legal obligation",
          ],
          [
            "Processing health data to establish fitness for sea service",
            "Explicit consent, and obligations in the field of employment law",
          ],
          [
            "Paying wages and remitting allotments",
            "Performance of a contract and legal obligation",
          ],
          [
            "Responding to enquiries submitted through this website",
            "Legitimate interests in responding to business enquiries",
          ],
          ["Sending the newsletter", "Consent, withdrawable at any time"],
          [
            "Retaining records for audit, tax and MLC compliance",
            "Legal obligation",
          ],
        ],
      },

      { type: "h2", text: "Who we share your data with" },
      {
        type: "p",
        text: "We share personal data only where there is a specific reason to do so. We do not sell personal data, and we do not share it for third-party marketing.",
      },
      {
        type: "ul",
        items: [
          "Shipowners, ship managers and operators considering you for a position, and only for that purpose.",
          "Flag state administrations, maritime authorities and consulates processing endorsements, documents and visas.",
          "Approved medical clinics conducting pre-employment examinations.",
          "Travel providers and port agents arranging joining and repatriation.",
          "Banks and payment providers executing wage and allotment payments.",
          "Professional advisers, auditors and insurers, under confidentiality obligations.",
          "Authorities and regulators where we are legally required to disclose.",
        ],
      },

      { type: "h2", text: "International transfers" },
      {
        type: "p",
        text: "Because shipping is an international industry, your data will be transferred outside India — typically to the shipowner's country of establishment and to the flag state administration. Where we transfer data internationally we take reasonable steps to ensure it remains protected, including contractual confidentiality obligations with recipients.",
      },

      { type: "h2", text: "How long we keep your data" },
      {
        type: "ul",
        items: [
          "Active seafarer records: for the duration of your registration and for seven years after your last contract, to meet audit and MLC record-keeping obligations.",
          "Unsuccessful applications: two years, unless you ask us to delete them sooner.",
          "Client correspondence: seven years from the end of the engagement.",
          "Website enquiry submissions: three years.",
          "Newsletter subscriptions: until you unsubscribe.",
        ],
      },

      { type: "h2", text: "Your rights" },
      {
        type: "p",
        text: "Subject to applicable law, you have the right to request access to the personal data we hold about you, to have inaccurate data corrected, to request erasure where we no longer have a lawful reason to hold it, to object to or restrict certain processing, to receive your data in a portable format, and to withdraw consent where processing is based on consent.",
      },
      {
        type: "p",
        text: `To exercise any of these rights, email ${contactInfo.email} with 'Data request' in the subject line. We respond within 30 days. If you are dissatisfied with our response you may complain to the relevant data protection authority.`,
      },

      { type: "h2", text: "Security" },
      {
        type: "p",
        text: "We apply administrative, technical and physical safeguards appropriate to the sensitivity of the data, including access controls limiting document access to staff who need it, encrypted transmission of this website, and confidentiality obligations in staff contracts. No system is perfectly secure, and we do not claim otherwise — but we will notify you and the relevant authority without undue delay if a breach affects your data.",
      },

      { type: "h2", text: "Changes to this policy" },
      {
        type: "p",
        text: "We may update this policy to reflect changes in our practices or in the law. The effective date at the top of this page indicates when it was last revised. Material changes affecting registered seafarers will be notified by email.",
      },
    ],
  },

  terms: {
    slug: "terms",
    title: "Terms & Conditions",
    metaTitle: "Terms & Conditions",
    metaDescription:
      "The terms governing use of the Alaknanda Ship Management website and the basis on which we provide crewing, manning and ship management services.",
    intro:
      "These terms govern your use of this website and set out the general basis on which we provide services. Engagements for crewing or management services are additionally governed by a separate written agreement, which takes precedence over these terms.",
    effectiveFrom: "1 January 2026",
    blocks: [
      { type: "h2", text: "Acceptance" },
      {
        type: "p",
        text: "By accessing this website you accept these terms. If you do not accept them, please do not use the site.",
      },

      { type: "h2", text: "About us" },
      { type: "p", text: contactLine },

      { type: "h2", text: "Use of this website" },
      {
        type: "ul",
        items: [
          "You may use this website for lawful purposes only.",
          "You must not attempt to gain unauthorised access to any part of the site, its servers or any connected system.",
          "You must not submit false information through our forms, or submit another person's personal data without their authority.",
          "You must not use automated systems to extract content from the site in a way that imposes an unreasonable load on our infrastructure.",
          "You must not reproduce, republish or redistribute substantial portions of our content without written permission.",
        ],
      },

      { type: "h2", text: "Services" },
      {
        type: "p",
        text: "Descriptions of services on this website are for information and do not constitute an offer capable of acceptance. Any engagement is subject to a separate written agreement setting out scope, fees, duration and liability.",
      },
      {
        type: "callout",
        title: "Seafarers are never charged",
        text: "In accordance with the Maritime Labour Convention 2006, we do not charge seafarers any fee for recruitment or placement. This includes registration, documentation, medicals arranged through us and joining letters. If anyone claiming to represent us requests payment from a seafarer, please report it to us immediately.",
      },

      { type: "h2", text: "Applications and enquiries" },
      {
        type: "ul",
        items: [
          "Submitting an application or enquiry does not create any obligation on us to provide a position or a service.",
          "You are responsible for the accuracy of the information you submit. Material misrepresentation, including in relation to certificates or sea service, will end the application and may be reported to the relevant authority.",
          "We verify certificates and sea service with issuing authorities and previous employers, and by submitting an application you consent to that verification.",
        ],
      },

      { type: "h2", text: "Intellectual property" },
      {
        type: "p",
        text: "All content on this website, including text, layout, graphics and code, is owned by or licensed to us and is protected by intellectual property law. You may view and print pages for your own reference. Any other use requires our prior written consent.",
      },

      { type: "h2", text: "Third-party links" },
      {
        type: "p",
        text: "This site may link to third-party websites. Those links are provided for convenience and do not imply endorsement. We have no control over third-party content and accept no responsibility for it.",
      },

      { type: "h2", text: "Limitation of liability" },
      {
        type: "p",
        text: "This website is provided on an 'as is' basis. To the fullest extent permitted by law, we exclude liability for any indirect or consequential loss arising from use of the site, and for any loss arising from reliance on general information published here rather than on advice given for your specific circumstances. Nothing in these terms excludes liability that cannot lawfully be excluded, including liability for fraud.",
      },

      { type: "h2", text: "Governing law" },
      {
        type: "p",
        text: "These terms are governed by the laws of India. The courts at Mohali, Punjab shall have exclusive jurisdiction over any dispute arising from them, save that we retain the right to bring proceedings in any jurisdiction where a breach occurs.",
      },

      { type: "h2", text: "Changes" },
      {
        type: "p",
        text: "We may revise these terms at any time. The version published on this page at the time you use the site is the version that applies.",
      },
    ],
  },

  "refund-policy": {
    slug: "refund-policy",
    title: "Refund Policy",
    metaTitle: "Refund Policy",
    metaDescription:
      "How refunds, replacement guarantees and fee adjustments work for crewing, manning and ship management services provided by Alaknanda Ship Management.",
    intro:
      "This policy explains when fees are refundable, how our replacement guarantee operates, and what happens when an engagement ends early. It applies to client engagements only — seafarers are never charged a fee, so no refund situation can arise for them.",
    effectiveFrom: "1 January 2026",
    blocks: [
      { type: "h2", text: "Seafarers" },
      {
        type: "p",
        text: "We do not charge seafarers for recruitment, placement, documentation or medicals arranged through us. There is therefore nothing to refund. If a seafarer has been charged by anyone claiming to represent us, contact us immediately — that is fraud, and we will act on it.",
      },

      { type: "h2", text: "Placement fees" },
      {
        type: "p",
        text: "Where a placement fee applies, it becomes payable when the seafarer joins the vessel, unless the engagement agreement states otherwise.",
      },
      {
        type: "ul",
        items: [
          "If the seafarer does not join for any reason attributable to us or to the seafarer, no fee is payable. Any advance paid is refunded in full within 14 working days.",
          "If the seafarer does not join because the client withdraws the position after documentation has commenced, documented third-party costs already incurred — endorsement fees, medicals, visa fees — remain payable. The placement fee itself is not charged.",
          "If the seafarer joins and then leaves within the guarantee period stated in the engagement agreement for reasons of competence or conduct, we provide a replacement at no further placement fee.",
        ],
      },

      { type: "h2", text: "Replacement guarantee" },
      {
        type: "p",
        text: "Unless the engagement agreement specifies otherwise, the guarantee period is 90 days from the joining date. Within that period, if a seafarer is found unsuitable on grounds of competence or conduct, we source a replacement without charging a further placement fee. Travel and documentation costs for the replacement are handled as set out in the engagement agreement.",
      },
      {
        type: "p",
        text: "The guarantee does not apply where the seafarer leaves due to circumstances outside their control or ours — for example medical repatriation, a family emergency, vessel sale, redelivery, or the client terminating the position early.",
      },

      { type: "h2", text: "Management fees" },
      {
        type: "ul",
        items: [
          "Crew and technical management fees are invoiced monthly in advance and are not refundable for a month already commenced.",
          "On termination in accordance with the notice provisions of the engagement agreement, fees are pro-rated to the effective termination date and any excess is credited or refunded within 30 days.",
          "Third-party costs incurred on the client's behalf and properly documented remain payable regardless of termination.",
        ],
      },

      { type: "h2", text: "Marine spare parts" },
      {
        type: "ul",
        items: [
          "Parts supplied correctly against a confirmed order are not returnable, as marine spares are ordered to specification.",
          "Where we supply an item that does not match the confirmed order, we replace it at our cost or refund it in full, including return freight.",
          "Where an item is defective on arrival, we pursue the manufacturer's warranty on your behalf and keep you informed of progress.",
          "Cancellation before despatch is accepted subject to any non-recoverable charge already levied by the manufacturer, which we evidence to you.",
        ],
      },

      { type: "h2", text: "How to request a refund" },
      {
        type: "p",
        text: `Email ${contactInfo.email} with the invoice reference, the vessel or seafarer concerned and the reason for the request. We acknowledge within two working days and resolve within 14 working days. Approved refunds are returned by the original payment method.`,
      },

      { type: "h2", text: "Disputes" },
      {
        type: "p",
        text: "If you disagree with our decision, escalate in writing to our management, who will review and respond within 15 working days. If the matter remains unresolved it is handled under the dispute resolution provisions of the engagement agreement.",
      },
    ],
  },

  "cookie-policy": {
    slug: "cookie-policy",
    title: "Cookie Policy",
    metaTitle: "Cookie Policy",
    metaDescription:
      "What cookies and similar technologies this website uses, why they are used, and how to control them in your browser.",
    intro:
      "This policy explains the cookies and similar technologies used on this website, what they do and how you can control them.",
    effectiveFrom: "1 January 2026",
    blocks: [
      { type: "h2", text: "What cookies are" },
      {
        type: "p",
        text: "Cookies are small text files placed on your device by a website. They allow a site to remember your actions and preferences over time. Similar technologies such as local storage serve comparable purposes.",
      },

      { type: "h2", text: "Cookies used on this site" },
      {
        type: "table",
        head: ["Type", "Purpose", "Duration"],
        rows: [
          [
            "Strictly necessary",
            "Required for the site to function — page delivery, form submission and security protections. These cannot be switched off.",
            "Session",
          ],
          [
            "Preference (local storage)",
            "Remembers that you dismissed the enquiry prompt so it is not shown to you repeatedly.",
            "7 days",
          ],
          [
            "Analytics",
            "Google Analytics, where enabled, measures which pages are visited and how visitors navigate the site. IP addresses are anonymised.",
            "Up to 2 years",
          ],
          [
            "Marketing",
            "Meta Pixel, where enabled, measures the effectiveness of advertising campaigns.",
            "Up to 90 days",
          ],
        ],
      },

      { type: "h2", text: "Third-party content" },
      {
        type: "p",
        text: "Our contact page embeds a Google Map. Google may set cookies when that map loads, governed by Google's own privacy and cookie policies rather than ours.",
      },

      { type: "h2", text: "Controlling cookies" },
      {
        type: "p",
        text: "Every major browser allows you to view, delete and block cookies through its settings. You can also install the Google Analytics opt-out browser add-on to prevent analytics data being sent. Blocking strictly necessary cookies may prevent parts of this site from working, including form submission.",
      },
      {
        type: "ul",
        items: [
          "Chrome: Settings → Privacy and security → Third-party cookies",
          "Safari: Settings → Privacy",
          "Firefox: Settings → Privacy & Security",
          "Edge: Settings → Cookies and site permissions",
        ],
      },

      { type: "h2", text: "Changes" },
      {
        type: "p",
        text: "If we add or remove cookies we will update this page. Please check it periodically.",
      },
    ],
  },

  disclaimer: {
    slug: "disclaimer",
    title: "Disclaimer",
    metaTitle: "Disclaimer",
    metaDescription:
      "The basis on which information published on the Alaknanda Ship Management website is provided, and important warnings about recruitment fraud.",
    intro:
      "This disclaimer applies to all information published on this website, including articles, guides and service descriptions.",
    effectiveFrom: "1 January 2026",
    blocks: [
      { type: "h2", text: "General information only" },
      {
        type: "p",
        text: "Content on this site is published for general information. It is not legal, regulatory, technical, medical or financial advice, and it should not be relied on as a substitute for advice given for your specific circumstances by a suitably qualified professional.",
      },

      { type: "h2", text: "Accuracy and currency" },
      {
        type: "p",
        text: "We take reasonable care to ensure information is accurate at the time of publication. Maritime regulation, flag state requirements, processing times and certification rules change frequently, and content may become out of date. Always verify current requirements with the relevant administration, class society or authority before acting.",
      },
      {
        type: "p",
        text: "Processing times, wage indications and timelines published on this site are indicative and based on our operational experience. They are not guarantees and will vary with circumstances outside our control.",
      },

      { type: "h2", text: "Recruitment fraud warning" },
      {
        type: "callout",
        title: "We never charge seafarers, and we never ask for payment",
        text: `Fraudulent parties sometimes impersonate manning agencies to obtain money from seafarers. Alaknanda Ship Management does not charge seafarers for registration, documentation, medicals or joining letters, and we never request payment through personal accounts or payment apps. If you receive such a request, do not pay. Report it to us at ${contactInfo.email} and to your local authorities.`,
      },
      {
        type: "ul",
        items: [
          "Our offers are issued from our own email domain, never from free webmail addresses.",
          "We do not conduct recruitment exclusively through messaging apps without any verifiable contact.",
          "We disclose the vessel, owner, contract length and wage scale before any commitment. Anyone withholding those details is not us.",
        ],
      },

      { type: "h2", text: "External links" },
      {
        type: "p",
        text: "Links to third-party sites are provided for convenience. We do not control their content and accept no responsibility for it, nor does a link imply endorsement.",
      },

      { type: "h2", text: "Testimonials and statistics" },
      {
        type: "p",
        text: "Testimonials reflect the experience of the individuals quoted and are not a guarantee that others will have the same experience. Performance statistics reflect our own operational records and are not audited third-party figures.",
      },

      { type: "h2", text: "Limitation of liability" },
      {
        type: "p",
        text: "To the fullest extent permitted by law, we accept no liability for loss arising from reliance on information published on this website. Nothing here excludes liability that cannot lawfully be excluded.",
      },

      { type: "h2", text: "Contact" },
      {
        type: "p",
        text: `Questions about this disclaimer can be sent to ${contactInfo.email}, or to ${formattedAddress}.`,
      },
    ],
  },
};

export function getLegalDocument(slug: string): LegalDocument | undefined {
  return legalDocuments[slug];
}
