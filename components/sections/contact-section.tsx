import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { EnquiryForm } from "@/components/forms/enquiry-form";
import { Reveal } from "@/components/motion/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { contactInfo, formattedAddress, whatsappLink } from "@/lib/site";

export function GoogleMap({ className }: { className?: string }) {
  return (
    <iframe
      title="Alaknanda Ship Management office location on Google Maps"
      src={`https://www.google.com/maps?q=${contactInfo.mapEmbedQuery}&output=embed`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      className={className}
    />
  );
}

const channels = [
  {
    icon: MapPin,
    label: "Office",
    value: formattedAddress,
    href: `https://www.google.com/maps/search/?api=1&query=${contactInfo.mapEmbedQuery}`,
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phoneE164}`,
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    external: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message our crewing desk",
    href: whatsappLink(),
    external: true,
  },
  {
    icon: Clock,
    label: "Office hours",
    value: contactInfo.hours.label,
    href: null,
    external: false,
  },
] as const;

export function ContactSection({ heading = true }: { heading?: boolean }) {
  return (
    <Section spacing="lg" tone="white" id="enquiry">
      <Container>
        {heading ? (
          <Reveal>
            <SectionHeading
              eyebrow="Get in touch"
              title="Tell us what you need on board"
              description="Ranks, vessel type and flag, joining port and target date. That's enough for us to start — the rest we'll ask."
            />
          </Reveal>
        ) : null}

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* ---------- Contact details ---------- */}
          <Reveal direction="right">
            <div className="flex flex-col gap-8">
              <ul className="flex flex-col gap-5">
                {channels.map((channel) => {
                  const Icon = channel.icon;
                  const content = (
                    <>
                      <span
                        aria-hidden="true"
                        className="grid size-11 shrink-0 place-items-center rounded-xl bg-mist-100 text-navy-600 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white"
                      >
                        <Icon className="size-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                          {channel.label}
                        </span>
                        <span className="mt-1 block text-[0.9375rem] leading-snug text-navy-900">
                          {channel.value}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <li key={channel.label}>
                      {channel.href ? (
                        <a
                          href={channel.href}
                          {...(channel.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="group flex items-start gap-4"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="group flex items-start gap-4">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="overflow-hidden rounded-2xl border border-mist-200">
                <GoogleMap className="h-64 w-full border-0 grayscale-[0.35] transition-all duration-500 hover:grayscale-0 sm:h-72" />
              </div>
            </div>
          </Reveal>

          {/* ---------- Enquiry form ---------- */}
          <Reveal direction="left" delay={0.08}>
            <div className="rounded-3xl border border-mist-200 bg-mist-50 p-7 sm:p-9">
              <h3 className="text-xl">Request crew or ask a question</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-500">
                We reply the same working day. Urgent requirement? Call or WhatsApp the
                duty desk instead — it&apos;s staffed around the clock.
              </p>

              <EnquiryForm className="mt-7" />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
