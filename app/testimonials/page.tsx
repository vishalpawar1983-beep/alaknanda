import type { Metadata } from "next";
import { Quote, Star } from "lucide-react";

import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, buildMetadata, reviewSchema } from "@/lib/seo";
import { testimonials } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Client & Seafarer Testimonials",
  description:
    "What shipowners, crewing directors and seafarers say about working with Alaknanda Ship Management — verified feedback collected after contract completion.",
  path: "/testimonials",
  keywords: [
    "manning agency reviews",
    "crew management testimonials",
    "ship manning company feedback",
  ],
});

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd
        data={[
          reviewSchema(
            testimonials.map((testimonial) => ({
              author: testimonial.author,
              quote: testimonial.quote,
              rating: testimonial.rating,
            })),
          ),
          breadcrumbSchema([{ name: "Testimonials", path: "/testimonials" }]),
        ]}
      />

      <PageHero
        eyebrow="Testimonials"
        title="Rated 5 stars by owners, managers and seafarers"
        description="Collected after contract completion, from both sides of the arrangement — because an agency that only pleases one side is not doing the job."
        crumbs={[{ name: "Testimonials", path: "/testimonials" }]}
      />

      <Section spacing="lg" tone="white">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Verified feedback"
              title="The only review that counts is a second contract"
            />
          </Reveal>

          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <RevealItem key={testimonial.id} as="div" className="h-full">
                <figure className="flex h-full flex-col rounded-2xl border border-mist-200 bg-mist-50 p-8 transition-shadow duration-400 hover:shadow-card">
                  <div className="flex items-center justify-between">
                    <div
                      className="flex items-center gap-0.5"
                      role="img"
                      aria-label={`${testimonial.rating} out of 5 stars`}
                    >
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star
                          key={index}
                          aria-hidden="true"
                          className="size-4 fill-accent-500 text-accent-500"
                        />
                      ))}
                    </div>
                    <Quote aria-hidden="true" className="size-8 text-navy-200" />
                  </div>

                  <blockquote className="mt-6 flex-1 leading-relaxed text-ink-700">
                    {testimonial.quote}
                  </blockquote>

                  <figcaption className="mt-7 border-t border-mist-300 pt-5">
                    <span className="block font-semibold text-navy-900">
                      {testimonial.author}
                    </span>
                    <span className="mt-0.5 block text-sm text-ink-500">
                      {testimonial.role}, {testimonial.company}
                    </span>
                    <span className="mt-2 inline-block rounded-full bg-white px-2.5 py-1 text-xs font-medium text-ink-500">
                      {testimonial.location}
                    </span>
                  </figcaption>
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <CtaBand
        title="Want to be the next one?"
        subtitle="Start with one vessel."
        body="Most of our long-term clients began with a single urgent requirement. Send yours and see how the process actually runs before committing to anything larger."
      />
    </>
  );
}
