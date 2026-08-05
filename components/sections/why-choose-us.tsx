import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { differentiators } from "@/lib/content";

export function WhyChooseUs() {
  return (
    <Section spacing="lg" tone="white">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal direction="right">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                align="left"
                eyebrow="Why choose us"
                title="Eight reasons owners keep coming back"
                description="Manning is not hard to do badly. Doing it in a way that survives an audit, a port state inspection and a crew change in a difficult port is a different discipline."
              />

              {/* Pure Aerial Top View Cargo Ship Image (No Text, No Badges, No Buttons) */}
              <div className="mt-9 overflow-hidden rounded-2xl border border-mist-200/80 bg-navy-950 shadow-lg">
                <div className="relative aspect-16/10 w-full overflow-hidden sm:aspect-16/11">
                  <img
                    src="/images/aerial-cargo-ship-ocean.png"
                    alt="Aerial top-down view of container cargo ship running on ocean"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <RevealGroup className="grid gap-px overflow-hidden rounded-2xl border border-mist-200 bg-mist-200 sm:grid-cols-2">
            {differentiators.map((item) => (
              <RevealItem
                key={item.title}
                as="div"
                className="group bg-white p-7 transition-colors duration-300 hover:bg-mist-50"
              >
                {item.metric ? (
                  <span className="inline-flex rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-700">
                    {item.metric}
                  </span>
                ) : null}
                <h3 className="mt-4 text-lg leading-snug">{item.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-500">
                  {item.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </Section>
  );
}
