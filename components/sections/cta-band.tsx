import { ArrowRight, MessageCircle, Phone } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { OceanBackdrop } from "@/components/brand/ocean-backdrop";
import { ButtonLink, ExternalButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { contactInfo, whatsappLink } from "@/lib/site";

export function CtaBand({
  title = "Need qualified crew?",
  subtitle = "Let's build your dream crew today.",
  body = "Send the rank, vessel type and joining port. You'll get a verified shortlist within 72 hours — no obligation, no charge until you accept a candidate.",
}: {
  title?: string;
  subtitle?: string;
  body?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 py-20 sm:py-24 lg:py-28">
      <OceanBackdrop />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/images/hero-ship.jpg"
          alt="Ocean Vessel Background"
          loading="lazy"
          className="h-full w-full object-cover opacity-20 filter brightness-90 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-linear-to-b from-navy-950/90 via-navy-900/85 to-navy-950/95" />
      </div>

      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow text-accent-400">
              <span aria-hidden="true" className="h-px w-7 bg-accent-400/70" />
              Ready to sail with excellence
            </span>

            <h2 className="mt-5 text-3xl leading-tight text-white sm:text-4xl lg:text-[2.875rem] lg:leading-[1.12]">
              {title}
              <span className="mt-1 block text-accent-400">{subtitle}</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-mist-300">{body}</p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Request crew <ArrowRight />
              </ButtonLink>
              <ExternalButtonLink
                href={`tel:${contactInfo.phoneE164}`}
                variant="ghostLight"
                size="lg"
              >
                <Phone /> Call now
              </ExternalButtonLink>
              <ExternalButtonLink
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghostLight"
                size="lg"
              >
                <MessageCircle /> WhatsApp
              </ExternalButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
