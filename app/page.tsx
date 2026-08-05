import type { Metadata } from "next";

import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { AboutPreview } from "@/components/sections/about-preview";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Process } from "@/components/sections/process";
import { Industries } from "@/components/sections/industries";
import { PositionsTable } from "@/components/sections/positions-table";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { CtaBand } from "@/components/sections/cta-band";
import { ContactSection } from "@/components/sections/contact-section";
import { BlogPreview } from "@/components/sections/blog-preview";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, faqSchema, reviewSchema } from "@/lib/seo";
import { faqs } from "@/lib/faqs";
import { testimonials } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Certified Crewing & Manning Agency for Global Shipping Companies",
  description:
    "Alaknanda Ship Management supplies STCW-certified officers, engineers and ratings to shipowners, ship managers and offshore operators worldwide. Verified shortlists in 72 hours.",
  path: "/",
  keywords: [
    "best ship manning agency",
    "certified ship manning company",
    "crew management company for shipping companies",
    "marine recruitment company for ship owners",
    "international crew manning services",
    "ship crew recruitment company",
    "seafarer recruitment",
    "marine staffing agency",
  ],
});

export default function HomePage() {
  // Surface the highest-intent questions on the home page for rich results.
  const homeFaqs = faqs
    .filter((faq) =>
      [
        "how-fast-can-you-supply-crew",
        "which-vessel-types",
        "do-seafarers-pay",
        "how-are-you-paid",
        "what-is-a-manning-agency",
        "how-to-start",
      ].includes(faq.id),
    )
    .map(({ question, answer }) => ({ question, answer }));

  return (
    <>
      <JsonLd
        data={[
          faqSchema(homeFaqs),
          reviewSchema(
            testimonials.map((testimonial) => ({
              author: testimonial.author,
              quote: testimonial.quote,
              rating: testimonial.rating,
            })),
          ),
        ]}
      />

      <Hero />
      <TrustBar />
      <AboutPreview />
      <ServicesGrid limit={8} />
      <WhyChooseUs />
      <Process />
      <Industries />
      <PositionsTable limit={12} />
      <TestimonialsCarousel />
      <BlogPreview />
      <CtaBand />
      <ContactSection />
    </>
  );
}
