import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { OceanBackdrop } from "@/components/brand/ocean-backdrop";
import { processSteps } from "@/lib/content";

/** Vertical timeline — from requirement to gangway. */
export function Process() {
  return (
    <Section spacing="lg" tone="navy" className="isolate overflow-hidden">
      <OceanBackdrop />

      <Container>
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="How we work"
            title="From requirement to gangway in five controlled steps"
            description="No stage is skipped to hit a date. If a step will take longer than usual, you hear it from us before it becomes your problem."
          />
        </Reveal>

        <RevealGroup className="relative mt-16 lg:mt-20">
          {/* Spine */}
          <span
            aria-hidden="true"
            className="absolute left-6 top-2 hidden h-[calc(100%-4rem)] w-px bg-linear-to-b from-accent-500 via-white/20 to-transparent sm:block"
          />

          <ol className="flex flex-col gap-10 sm:gap-12">
            {processSteps.map((step) => (
              <RevealItem key={step.step} as="li" className="relative sm:pl-20">
                {/* Node */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 hidden size-12 place-items-center rounded-full border border-white/15 bg-navy-950 text-sm font-semibold text-accent-400 sm:grid"
                >
                  {step.step}
                </span>

                <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-7">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="text-xs font-semibold text-accent-400 sm:hidden">
                      Step {step.step}
                    </span>
                    <h3 className="text-xl text-white sm:text-[1.375rem]">{step.title}</h3>
                    <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-mist-300">
                      {step.duration}
                    </span>
                  </div>
                  <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-mist-300">
                    {step.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </ol>
        </RevealGroup>
      </Container>
    </Section>
  );
}
