import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Accordion } from "@/components/ui/accordion";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/seo";
import { faqCategories, faqs, faqsByCategory } from "@/lib/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions — Crewing, Manning & Seafarer Documentation",
  description:
    "Answers on crew supply timelines, manning agency fees, seafarer placement costs, flag endorsements, MLC compliance and how to start working with Alaknanda Ship Management.",
  path: "/faq",
  keywords: [
    "manning agency FAQ",
    "crew management questions",
    "seafarer placement fees",
    "ship crew recruitment questions",
  ],
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(faqs.map(({ question, answer }) => ({ question, answer }))),
          breadcrumbSchema([{ name: "FAQ", path: "/faq" }]),
        ]}
      />

      <PageHero
        eyebrow="Answers"
        title="Frequently asked questions"
        description={`${faqs.length} straight answers for shipowners, managers and seafarers — including the ones other agencies avoid.`}
        crumbs={[{ name: "FAQ", path: "/faq" }]}
      />

      {faqCategories.map((category, index) => {
        const entries = faqsByCategory(category);
        if (entries.length === 0) return null;

        return (
          <Section
            key={category}
            spacing="lg"
            tone={index % 2 === 0 ? "white" : "mist"}
            id={category.toLowerCase().replace(/\s+/g, "-")}
          >
            <Container>
              <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                <Reveal direction="right">
                  <div className="lg:sticky lg:top-32">
                    <SectionHeading
                      align="left"
                      eyebrow={`${entries.length} questions`}
                      title={category}
                    />
                  </div>
                </Reveal>

                <Reveal direction="left" delay={0.06}>
                  <Accordion
                    defaultOpen={null}
                    items={entries.map((faq) => ({
                      id: faq.id,
                      question: faq.question,
                      answer: faq.answer,
                    }))}
                  />
                </Reveal>
              </div>
            </Container>
          </Section>
        );
      })}

      <CtaBand
        title="Still have a question?"
        subtitle="Ask us directly."
        body="If it is not answered above, send it across. We would rather answer a hard question now than have it surface after you have committed."
      />
    </>
  );
}
