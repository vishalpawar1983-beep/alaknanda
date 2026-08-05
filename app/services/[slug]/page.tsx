import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";

import { PageHero } from "@/components/layout/page-hero";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { Accordion } from "@/components/ui/accordion";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ServiceCard } from "@/components/sections/services-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { ServiceIcon } from "@/components/service-icon";
import { getRelatedServices, getService, services } from "@/lib/services";
import { breadcrumbSchema, buildMetadata, faqSchema, serviceSchema } from "@/lib/seo";

/** Pre-render every service page at build time. */
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return buildMetadata({
      title: "Service not found",
      description: "The service you are looking for is not available.",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const related = getRelatedServices(service.related);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.title,
            description: service.metaDescription,
            path: `/services/${service.slug}`,
          }),
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: service.shortTitle, path: `/services/${service.slug}` },
          ]),
          faqSchema(service.faqs),
        ]}
      />

      <PageHero
        eyebrow={service.tagline}
        title={service.title}
        description={service.summary}
        crumbs={[
          { name: "Services", path: "/services" },
          { name: service.shortTitle, path: `/services/${service.slug}` },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#service-enquiry" size="lg">
            Request this service <ArrowRight />
          </ButtonLink>
          <ButtonLink href="/services" variant="ghostLight" size="lg">
            All services
          </ButtonLink>
        </div>
      </PageHero>

      {/* ---------- Intro + outcome metrics ---------- */}
      <Section spacing="lg" tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <Reveal direction="right">
              <span
                aria-hidden="true"
                className="grid size-14 place-items-center rounded-2xl bg-navy-900 text-accent-500"
              >
                <ServiceIcon name={service.icon} className="size-7" />
              </span>

              <div className="mt-7 flex flex-col gap-5">
                {service.intro.map((paragraph, index) => (
                  <p
                    key={index}
                    className={
                      index === 0
                        ? "text-xl leading-relaxed text-navy-900"
                        : "leading-relaxed text-ink-500"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.08}>
              <div className="mb-6 overflow-hidden rounded-2xl border border-mist-200 bg-navy-950 shadow-md">
                <div className="relative h-52 w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-950/85 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 rounded-md bg-accent-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xs">
                    {service.shortTitle}
                  </span>
                </div>
              </div>

              <dl className="grid gap-px overflow-hidden rounded-2xl border border-mist-200 bg-mist-200">
                {service.outcomes.map((outcome) => (
                  <div key={outcome.label} className="bg-white px-6 py-5">
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                      {outcome.label}
                    </dt>
                    <dd className="mt-1.5 text-3xl font-semibold tracking-tight text-navy-900">
                      {outcome.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 rounded-2xl bg-navy-900 p-6">
                <p className="text-[0.9375rem] leading-relaxed text-mist-300">
                  Not sure whether this is the service you need? Describe the problem and
                  we&apos;ll tell you honestly which of our lines actually solves it — or
                  whether you need one at all.
                </p>
                <ButtonLink href="/contact" variant="primary" size="sm" className="mt-5">
                  Ask our team
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ---------- Capabilities ---------- */}
      <Section spacing="lg" tone="mist">
        <Container>
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="What's included"
              title={`How our ${service.shortTitle.toLowerCase()} works in practice`}
            />
          </Reveal>

          <RevealGroup className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-mist-300 bg-mist-300 sm:grid-cols-2 lg:grid-cols-3">
            {service.capabilities.map((capability) => (
              <RevealItem key={capability.title} as="div" className="bg-white p-7">
                <h3 className="text-lg leading-snug">{capability.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-500">
                  {capability.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* ---------- Deliverables ---------- */}
      <Section spacing="lg" tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal direction="right">
              <SectionHeading
                align="left"
                eyebrow="Deliverables"
                title="What you actually receive"
                description="Concrete outputs, not a statement of intent. Every item below is something we hand over or maintain on your behalf."
              />
            </Reveal>

            <Reveal direction="left" delay={0.08}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.deliverables.map((deliverable) => (
                  <li
                    key={deliverable}
                    className="flex items-start gap-3 rounded-xl border border-mist-200 bg-mist-50 px-4 py-3.5"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-seafoam-50 text-seafoam-600"
                    >
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span className="text-[0.9375rem] leading-snug text-ink-700">
                      {deliverable}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ---------- FAQs ---------- */}
      <Section spacing="lg" tone="mist">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal direction="right">
              <SectionHeading
                align="left"
                eyebrow="Questions"
                title={`${service.shortTitle} FAQs`}
                description="Straight answers to what owners and managers actually ask us about this service."
              />
              <ButtonLink href="/faq" variant="outline" size="lg" className="mt-8">
                All frequently asked questions
              </ButtonLink>
            </Reveal>

            <Reveal direction="left" delay={0.08}>
              <Accordion
                items={service.faqs.map((faq, index) => ({
                  id: `${service.slug}-${index}`,
                  question: faq.question,
                  answer: faq.answer,
                }))}
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ---------- Enquiry ---------- */}
      <Section spacing="lg" tone="white" id="service-enquiry">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal direction="right">
              <SectionHeading
                align="left"
                eyebrow="Next step"
                title={`Request ${service.shortTitle.toLowerCase()}`}
                description="Tell us the vessel, the rank or the requirement and the date you need it by. We reply the same working day."
              />

              {related.length > 0 ? (
                <div className="mt-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-500">
                    Often combined with
                  </p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {related.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/services/${item.slug}`}
                          className="inline-flex items-center gap-2 text-[0.9375rem] font-medium text-navy-600 transition-colors hover:text-accent-600"
                        >
                          <ArrowRight className="size-4" />
                          {item.shortTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </Reveal>

            <Reveal direction="left" delay={0.08}>
              <div className="rounded-3xl border border-mist-200 bg-mist-50 p-7 sm:p-9">
                <EnquiryForm defaultService={service.shortTitle} />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ---------- Related services ---------- */}
      {related.length > 0 ? (
        <Section spacing="lg" tone="mist">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Related services"
                title="Other ways we support your fleet"
              />
            </Reveal>
            <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <RevealItem key={item.slug} as="div" className="h-full">
                  <ServiceCard service={item} />
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </Section>
      ) : null}

      <CtaBand />
    </>
  );
}
