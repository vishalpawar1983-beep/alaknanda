import Link from "next/link";

import { PageHero } from "@/components/layout/page-hero";
import { BlockRenderer } from "@/components/blog/block-renderer";
import { Container, Section } from "@/components/ui/section";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo";
import { footerNav } from "@/lib/site";
import type { LegalDocument } from "@/lib/legal";

/** Shared shell for the five policy pages. */
export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: document.title, path: `/${document.slug}` }])}
      />

      <PageHero
        eyebrow="Legal"
        title={document.title}
        description={document.intro}
        crumbs={[{ name: document.title, path: `/${document.slug}` }]}
      />

      <Section spacing="lg" tone="white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_15rem] lg:gap-16">
            <div className="min-w-0 max-w-3xl">
              <p className="rounded-xl border border-mist-200 bg-mist-50 px-5 py-3 text-sm text-ink-500">
                Effective from {document.effectiveFrom}
              </p>

              <div className="mt-8">
                <BlockRenderer blocks={document.blocks} />
              </div>
            </div>

            <aside className="lg:sticky lg:top-32 lg:self-start">
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                Other policies
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5 border-l border-mist-200 pl-4">
                {footerNav.legal
                  .filter((item) => item.href !== `/${document.slug}`)
                  .map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[0.8125rem] text-ink-500 transition-colors hover:text-accent-600"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
