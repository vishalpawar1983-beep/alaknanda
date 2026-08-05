import type { Metadata } from "next";
import { AlertTriangle, Ship } from "lucide-react";

import { PageHero } from "@/components/layout/page-hero";
import { CareerForm } from "@/components/forms/career-form";
import { CtaBand } from "@/components/sections/cta-band";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/seo";
import { departments, positions } from "@/lib/positions";
import { faqsByCategory } from "@/lib/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Careers at Sea — Merchant Navy Jobs & Seafarer Registration",
  description:
    "Register for merchant navy openings across deck, engine, electrical, catering and cadet ranks. No placement fees to seafarers, ever. Verified vacancies with named owners.",
  path: "/careers",
  keywords: [
    "merchant navy jobs",
    "seafarer recruitment",
    "merchant navy recruitment",
    "ship jobs for officers and ratings",
    "marine engineer jobs",
  ],
});

export default function CareersPage() {
  const seafarerFaqs = faqsByCategory("For Seafarers");

  return (
    <>
      <JsonLd
        data={[
          faqSchema(seafarerFaqs.map(({ question, answer }) => ({ question, answer }))),
          breadcrumbSchema([{ name: "Careers", path: "/careers" }]),
        ]}
      />

      <PageHero
        eyebrow="Careers at sea"
        title="Sail with an agency that pays on time and answers the phone"
        description="Openings across deck, engine, electrical, catering and cadet ranks on tankers, bulkers, boxships, gas carriers, offshore units and cruise vessels."
        crumbs={[{ name: "Careers", path: "/careers" }]}
      />

      {/* ---------- No-fee notice ---------- */}
      <Section spacing="sm" tone="white">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-4 rounded-2xl border border-accent-200 bg-accent-50 p-7 sm:flex-row sm:items-start sm:gap-5">
              <AlertTriangle
                aria-hidden="true"
                className="size-6 shrink-0 text-accent-600"
              />
              <div>
                <h2 className="text-lg">Seafarers never pay us a fee</h2>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-700">
                  Not for registration, not for documentation, not for medicals arranged
                  through us, and not for a joining letter. Charging seafarers for placement
                  is prohibited under MLC 2006 and by our licence conditions. We are paid by
                  the shipowner. If anyone claiming to represent Alaknanda asks you for
                  money, that is fraud — report it to us immediately.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ---------- Open ranks ---------- */}
      <Section spacing="lg" tone="mist">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Open ranks"
              title="Positions we are recruiting for"
              description="Requirements below are indicative. If you are close but not exact, still register — vessel-type experience often matters more than a strict time-in-rank figure."
            />
          </Reveal>

          {departments.map((department) => {
            const ranks = positions.filter((position) => position.department === department);
            if (ranks.length === 0) return null;

            return (
              <div key={department} className="mt-12">
                <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-ink-500">
                  <Ship aria-hidden="true" className="size-4 text-accent-500" />
                  {department} department
                </h3>

                <RevealGroup className="mt-5 grid gap-4 md:grid-cols-2" stagger={0.05}>
                  {ranks.map((position) => (
                    <RevealItem
                      key={position.title}
                      as="div"
                      className="rounded-2xl border border-mist-200 bg-white p-6 transition-shadow duration-300 hover:shadow-card"
                    >
                      <h4 className="text-lg font-semibold text-navy-900">{position.title}</h4>
                      <dl className="mt-3 grid gap-2 text-[0.9375rem]">
                        <div className="flex gap-2">
                          <dt className="shrink-0 font-medium text-ink-700">Vessels:</dt>
                          <dd className="text-ink-500">{position.vessels}</dd>
                        </div>
                        <div className="flex gap-2">
                          <dt className="shrink-0 font-medium text-ink-700">Requirement:</dt>
                          <dd className="text-ink-500">{position.requirement}</dd>
                        </div>
                      </dl>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            );
          })}
        </Container>
      </Section>

      {/* ---------- Application form ---------- */}
      <Section spacing="lg" tone="white" id="apply">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal direction="right">
              <SectionHeading
                align="left"
                eyebrow="Register"
                title="Send us your details"
                description="Complete the form and we will come back with what is missing from your file, or with berths that match your rank and vessel experience."
              />

              <div className="mt-9 rounded-2xl border border-mist-200 bg-mist-50 p-6">
                <h3 className="text-base font-semibold text-navy-900">
                  Have these ready
                </h3>
                <ul className="mt-4 grid gap-2.5 text-[0.9375rem] text-ink-500">
                  {[
                    "Updated CV showing sea service",
                    "Continuous Discharge Certificate (CDC)",
                    "Certificate of Competency",
                    "STCW modules with expiry dates",
                    "Passport and current flag endorsements",
                    "Valid medical fitness certificate",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span aria-hidden="true" className="text-accent-500">
                        —
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.08}>
              <div className="rounded-3xl border border-mist-200 bg-mist-50 p-7 sm:p-9">
                <CareerForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Questions before you register?"
        subtitle="Ask us anything."
        body="Documentation, promotion paths, which vessel type to target next — we will give you a straight answer whether or not it results in a placement."
      />
    </>
  );
}
