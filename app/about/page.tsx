import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

import { PageHero } from "@/components/layout/page-hero";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Process } from "@/components/sections/process";
import { CtaBand } from "@/components/sections/cta-band";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { certifications, heroStats, missionVision } from "@/lib/content";
import { formattedAddress, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About Us — Certified Crewing & Manning Agency",
  description:
    "Alaknanda Ship Management Pvt. Ltd. is a certified crewing and manning agency in Zirakpur, Mohali, supplying verified seafarers to shipowners and offshore operators worldwide.",
  path: "/about",
  keywords: [
    "certified ship manning company",
    "manning agency in Punjab",
    "crew management company India",
    "marine recruitment agency Mohali",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "About", path: "/about" }])} />

      <PageHero
        eyebrow="About us"
        title="Excellence at sea, trusted worldwide"
        description={`${siteConfig.legalName} exists to solve one problem properly: putting genuinely qualified, correctly documented seafarers on board on the date we promised.`}
        crumbs={[{ name: "About", path: "/about" }]}
      />

      {/* ---------- Story ---------- */}
      <Section spacing="lg" tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <Reveal direction="right">
              <SectionHeading
                align="left"
                eyebrow="Our story"
                title="Built by people who have stood the watch"
              />

              <div className="mt-7 flex flex-col gap-5 leading-relaxed text-ink-500">
                <p className="text-xl leading-relaxed text-navy-900">
                  Alaknanda was founded on a specific frustration: agencies that forwarded
                  CVs, called it recruitment, and left the owner to discover the problems.
                </p>
                <p>
                  Our desks are run by people who have held the ranks they now recruit for
                  and who have sat on the client side of the table. That background changes
                  how the work is done. A Chief Engineer screening a Chief Engineer asks
                  about the specific machinery, the automation system and how a particular
                  failure was handled — not whether the CV contains the right words.
                </p>
                <p>
                  From our office in Zirakpur, Mohali, we serve owners, managers and
                  offshore operators across Europe, the Gulf, Southeast Asia, the Far East
                  and the Americas. The register covers deck, engine, electrical, catering
                  and cadet ranks across tankers, bulkers, boxships, gas carriers, offshore
                  units and cruise vessels.
                </p>
                <p>
                  What has not changed since the start is the rule the business was built
                  on: certificates are verified at source, seafarers are never charged, and
                  we would rather give an owner an unwelcome date than a date we cannot
                  hold.
                </p>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.08}>
              <div className="overflow-hidden rounded-3xl border border-mist-200 bg-mist-50 shadow-sm">
                <div className="relative h-48 w-full bg-navy-950">
                  <img
                    src="/images/g1.jpg"
                    alt="Port Logistics & Ship Operations"
                    loading="lazy"
                    className="h-full w-full object-cover filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-6 rounded-md bg-accent-500/90 px-3 py-1 text-xs font-semibold text-white">
                    Zirakpur, Mohali • Global Hub
                  </span>
                </div>
                <div className="p-7 sm:p-8">
                  <h2 className="text-lg font-semibold text-navy-900">Registered office</h2>
                  <address className="mt-3 text-[0.9375rem] not-italic leading-relaxed text-ink-500">
                    {formattedAddress}
                  </address>

                  <div className="mt-7 h-px bg-mist-300" />

                  <dl className="mt-7 grid grid-cols-2 gap-6">
                    {heroStats.map((stat) => (
                      <div key={stat.label}>
                        <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                          {stat.label}
                        </dt>
                        <dd className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-navy-900">
                          <Counter value={stat.value} suffix={stat.suffix} />
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ---------- Mission & vision ---------- */}
      <Section spacing="lg" tone="mist">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Mission, vision & values"
              title="What we are trying to be good at"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal direction="right">
              <div className="h-full rounded-2xl bg-navy-900 p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-400">
                  Mission
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-mist-200">
                  {missionVision.mission}
                </p>
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.06}>
              <div className="h-full rounded-2xl border border-mist-200 bg-white p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-600">
                  Vision
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-ink-700">
                  {missionVision.vision}
                </p>
              </div>
            </Reveal>
          </div>

          <RevealGroup className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-mist-300 bg-mist-300 sm:grid-cols-2 lg:grid-cols-3">
            {missionVision.values.map((value) => (
              <RevealItem key={value.title} as="div" className="bg-white p-7">
                <h3 className="text-lg">{value.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-500">
                  {value.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* ---------- Certifications ---------- */}
      <Section spacing="lg" tone="white">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Compliance"
              title="The conventions we operate to"
              description="These are the standards your auditors, charterers and port state control officers measure against — so they are the standards we work to."
            />
          </Reveal>

          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification) => (
              <RevealItem
                key={certification.abbr}
                as="div"
                className="rounded-2xl border border-mist-200 bg-mist-50 p-7"
              >
                <span
                  aria-hidden="true"
                  className="grid size-11 place-items-center rounded-xl bg-white text-accent-500 shadow-card"
                >
                  <ShieldCheck className="size-5" />
                </span>
                <h3 className="mt-5 text-lg">{certification.abbr}</h3>
                <p className="mt-1 text-sm font-medium text-navy-600">{certification.name}</p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-500">
                  {certification.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <WhyChooseUs />
      <Process />
      <TestimonialsCarousel />
      <CtaBand />
    </>
  );
}
