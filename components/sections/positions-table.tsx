import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { positions } from "@/lib/positions";

const departmentTone: Record<string, string> = {
  Deck: "bg-navy-50 text-navy-700",
  Engine: "bg-accent-50 text-accent-700",
  Electrical: "bg-seafoam-50 text-seafoam-600",
  Catering: "bg-mist-200 text-ink-700",
  Cadet: "bg-navy-100 text-navy-800",
};

/**
 * Featured ranks — doubles as an SEO surface for rank-level search queries and
 * as the entry point into the careers funnel.
 */
export function PositionsTable({ limit }: { limit?: number }) {
  const shown = limit ? positions.slice(0, limit) : positions;

  return (
    <Section spacing="lg" tone="white">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              align="left"
              eyebrow="Featured ship positions"
              title="Ranks we recruit for, across every department"
              description="Deck, engine, electrical, catering and cadet berths on tankers, bulkers, boxships, gas carriers, offshore units and cruise vessels."
            />
            <ButtonLink href="/careers" variant="outline" size="lg" className="shrink-0">
              View openings <ArrowRight />
            </ButtonLink>
          </div>
        </Reveal>

        <RevealGroup className="mt-12" stagger={0.04}>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((position) => (
              <RevealItem
                key={position.title}
                as="li"
                className="group flex items-start justify-between gap-4 rounded-xl border border-mist-200 bg-white px-5 py-4 transition-all duration-300 hover:border-navy-200 hover:bg-mist-50"
              >
                <div className="min-w-0">
                  <p className="truncate text-[0.9375rem] font-medium text-navy-900">
                    {position.title}
                  </p>
                  <p className="mt-1 truncate text-xs text-ink-500">{position.vessels}</p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide ${
                    departmentTone[position.department] ?? "bg-mist-200 text-ink-700"
                  }`}
                >
                  {position.department}
                </span>
              </RevealItem>
            ))}
          </ul>
        </RevealGroup>

        <Reveal delay={0.1}>
          <p className="mt-8 text-sm text-ink-500">
            Rank not listed?{" "}
            <Link
              href="/contact"
              className="font-medium text-navy-600 underline underline-offset-4 hover:text-accent-600"
            >
              Send us the requirement
            </Link>{" "}
            — we recruit across the full crew list including specialist offshore trades.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
