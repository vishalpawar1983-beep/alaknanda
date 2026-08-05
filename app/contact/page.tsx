import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { ContactSection } from "@/components/sections/contact-section";
import { JsonLd } from "@/components/seo/json-ld";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { breadcrumbSchema, buildMetadata, localBusinessSchema } from "@/lib/seo";
import { contactInfo } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us — Crewing Desk, Zirakpur, Mohali",
  description:
    "Contact Alaknanda Ship Management for crew requirements, technical management or seafarer registration. Office in Zirakpur, Mohali, Punjab. Duty desk staffed 24×7.",
  path: "/contact",
  keywords: [
    "manning agency contact",
    "crew management company Zirakpur",
    "marine recruitment agency Mohali",
    "ship manning agency Punjab",
  ],
});

const routes = [
  {
    title: "Shipowners & managers",
    body: "Crew requirements, technical management, spares and documentation. Send ranks, vessel type, flag and joining port for the fastest response.",
    action: "Use the enquiry form below",
  },
  {
    title: "Seafarers",
    body: "Registration, available berths and documentation support. Attach your CV, CDC and certificate details. We never charge seafarers a placement fee.",
    action: `Email ${contactInfo.careersEmail}`,
  },
  {
    title: "Urgent operational matters",
    body: "Crew change disruptions, medical emergencies, repatriation or anything happening on a vessel right now. The duty line is staffed around the clock.",
    action: `Call ${contactInfo.phone}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema([{ name: "Contact", path: "/contact" }]),
        ]}
      />

      <PageHero
        eyebrow="Contact"
        title="Talk to the crewing desk"
        description="Same working day response on enquiries. Around the clock on anything operational."
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />

      {/* ---------- Routing ---------- */}
      <Section spacing="md" tone="white">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Where to start"
              title="Point your enquiry at the right desk"
              description="Telling us which of these you are shortens the reply by about a day."
            />
          </Reveal>

          <RevealGroup className="mt-12 grid gap-5 lg:grid-cols-3">
            {routes.map((route) => (
              <RevealItem
                key={route.title}
                as="div"
                className="flex h-full flex-col rounded-2xl border border-mist-200 bg-mist-50 p-7"
              >
                <h3 className="text-lg">{route.title}</h3>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-500">
                  {route.body}
                </p>
                <p className="mt-5 text-sm font-semibold text-accent-600">{route.action}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <ContactSection heading={false} />
    </>
  );
}
