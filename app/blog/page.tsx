import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { PostCard } from "@/components/blog/post-card";
import { CtaBand } from "@/components/sections/cta-band";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { allPosts, getActiveCategories, getFeaturedPosts, getPostsByCategory } from "@/lib/blog";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Maritime Insight — Crewing, Compliance & Careers at Sea",
  description:
    "Practical maritime guidance from a working crewing desk: manning agency due diligence, STCW and flag documentation, MLC compliance, crew retention and merchant navy careers.",
  path: "/blog",
  keywords: [
    "maritime blog",
    "crew management insights",
    "merchant navy guidance",
    "shipping industry articles",
  ],
});

export default function BlogPage() {
  const featured = getFeaturedPosts(1)[0];
  const categories = getActiveCategories();
  const rest = allPosts.filter((post) => post.slug !== featured?.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Blog", path: "/blog" }]),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": absoluteUrl("/blog#blog"),
            name: `${siteConfig.name} — Maritime Insight`,
            url: absoluteUrl("/blog"),
            description:
              "Practical maritime guidance on crewing, compliance, documentation and careers at sea.",
            publisher: { "@id": absoluteUrl("/#organization") },
            blogPost: allPosts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              url: absoluteUrl(`/blog/${post.slug}`),
              datePublished: post.publishedAt,
              articleSection: post.category,
            })),
          },
        ]}
      />

      <PageHero
        eyebrow="Insight"
        title="Maritime guidance, written from the crewing desk"
        description="No press releases and no filler. Practical articles on documentation, compliance, retention and careers at sea — the things that actually decide whether a crew change happens on time."
        crumbs={[{ name: "Blog", path: "/blog" }]}
      />

      {/* ---------- Featured ---------- */}
      {featured ? (
        <Section spacing="md" tone="white">
          <Container>
            <Reveal>
              <p className="eyebrow text-accent-600">
                <span aria-hidden="true" className="h-px w-7 bg-accent-500/70" />
                Featured article
              </p>
              <div className="mt-6 max-w-3xl">
                <PostCard post={featured} featured />
              </div>
            </Reveal>
          </Container>
        </Section>
      ) : null}

      {/* ---------- All posts ---------- */}
      <Section spacing="lg" tone="mist">
        <Container>
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow={`${allPosts.length} articles`}
              title="Latest articles"
            />
          </Reveal>

          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <RevealItem key={post.slug} as="div" className="h-full">
                <PostCard post={post} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* ---------- By category ---------- */}
      <Section spacing="lg" tone="white">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Browse by topic"
              title="Find what is relevant to you"
            />
          </Reveal>

          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2">
            {categories.map((category) => {
              const posts = getPostsByCategory(category);
              return (
                <RevealItem
                  key={category}
                  as="div"
                  className="rounded-2xl border border-mist-200 bg-mist-50 p-7"
                >
                  <h3 className="flex items-baseline justify-between gap-4 text-lg">
                    {category}
                    <span className="text-sm font-normal text-ink-500">
                      {posts.length} {posts.length === 1 ? "article" : "articles"}
                    </span>
                  </h3>
                  <ul className="mt-5 flex flex-col gap-3">
                    {posts.map((post) => (
                      <li key={post.slug}>
                        <a
                          href={`/blog/${post.slug}`}
                          className="text-[0.9375rem] leading-snug text-ink-700 transition-colors hover:text-accent-600"
                        >
                          {post.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
