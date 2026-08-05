import { Check, Compass, Target } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { missionVision } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const highlights = [
  "Certificates verified at source, never taken on trust",
  "Owners pay our fees — seafarers never do",
  "Duty desk staffed 24×7 for vessels and families",
  "Manning checked against the Safe Manning Document",
];

/** Editorial two-column intro: copy left, layered visual right. */
export function AboutPreview() {
  return (
    <Section spacing="lg" tone="white">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* ---------- Copy ---------- */}
          <Reveal direction="right">
            <SectionHeading
              align="left"
              eyebrow="Who we are"
              title={
                <>
                  Your trusted partner in global{" "}
                  <span className="text-navy-600">marine recruitment</span>
                </>
              }
              description={`${siteConfig.legalName} exists to solve one problem properly: putting genuinely qualified, correctly documented seafarers on board on the date we promised.`}
            />

            <p className="mt-6 max-w-xl leading-relaxed text-ink-500">
              We are not a CV forwarding service. Every candidate on our register has had
              their certificates checked against the issuing authority and their sea time
              reconciled against CDC entries before they ever reach your shortlist. That is
              slower at the start and far faster at the gangway.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-seafoam-50 text-seafoam-600"
                  >
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  <span className="text-[0.9375rem] leading-snug text-ink-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/about" variant="navy" size="lg">
                More about us
              </ButtonLink>
              <ButtonLink href="/services" variant="outline" size="lg">
                Our services
              </ButtonLink>
            </div>
          </Reveal>

          {/* ---------- Visual Column: Pure Realistic Marine Service Photography (No Text) ---------- */}
          <Reveal direction="left" delay={0.1}>
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl border border-mist-200/80 bg-navy-950 shadow-2xl transition-all duration-500 hover:shadow-3xl">
                <div className="relative aspect-4/3 w-full overflow-hidden sm:aspect-1/1 lg:aspect-4/3">
                  <img
                    src="/images/realistic-marine-service.png"
                    alt="Realistic Marine Service & Vessel Operations"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-950/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
