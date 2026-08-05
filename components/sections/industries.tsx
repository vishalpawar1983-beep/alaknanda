import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { industries } from "@/lib/positions";

export function Industries() {
  return (
    <Section spacing="lg" tone="gradient">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Industries we serve"
            title="Crew matched to the vessel, not just the rank"
            description="A Chief Engineer from a handysize bulker is not automatically the right Chief Engineer for an LNG carrier. We screen on vessel type, tonnage and machinery — every time."
          />
        </Reveal>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <RevealItem
              key={industry.name}
              as="div"
              className="group relative overflow-hidden rounded-2xl border border-mist-200 bg-white p-7 transition-all duration-400 hover:-translate-y-1 hover:border-navy-200 hover:shadow-card"
            >
              <span
                aria-hidden="true"
                className="absolute right-6 top-6 text-5xl font-bold leading-none text-mist-200 transition-colors duration-400 group-hover:text-accent-100"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="relative max-w-[70%] text-lg leading-snug">{industry.name}</h3>
              <p className="relative mt-3 text-[0.9375rem] leading-relaxed text-ink-500">
                {industry.description}
              </p>

              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent-500 transition-transform duration-400 group-hover:scale-x-100"
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
