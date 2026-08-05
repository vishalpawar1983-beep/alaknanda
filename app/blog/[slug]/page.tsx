import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, Tag } from "lucide-react";

import { PostCover } from "@/components/blog/post-cover";
import { PostCard } from "@/components/blog/post-card";
import { BlockRenderer } from "@/components/blog/block-renderer";
import { Accordion } from "@/components/ui/accordion";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { allPosts, getPost, getRelatedPosts, getWordCount } from "@/lib/blog";
import { headingId } from "@/lib/blog/types";
import { blogPostingSchema, breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/seo";
import { formatDate, readingTime } from "@/lib/utils";

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return buildMetadata({
      title: "Article not found",
      description: "The article you are looking for is not available.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt ?? post.publishedAt,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const wordCount = getWordCount(post);
  const related = getRelatedPosts(post, 3);
  const headings = post.blocks.filter((block) => block.type === "h2");

  return (
    <>
      <JsonLd
        data={[
          blogPostingSchema({
            title: post.title,
            description: post.excerpt,
            slug: post.slug,
            publishedAt: post.publishedAt,
            updatedAt: post.updatedAt,
            category: post.category,
            wordCount,
          }),
          breadcrumbSchema([
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          ...(post.faqs?.length ? [faqSchema(post.faqs)] : []),
        ]}
      />

      {/* ---------- Article header ---------- */}
      <article>
        <header className="relative bg-navy-900 pb-14 pt-36 sm:pb-16 sm:pt-44">
          <PostCover
            tone={post.tone}
            title={post.title}
            image={post.image}
            className="absolute inset-0 opacity-45"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/85 to-navy-950/60"
          />

          <Container className="relative">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-[0.8125rem] text-mist-300">
                <li>
                  <Link href="/" className="hover:text-accent-400">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/blog" className="hover:text-accent-400">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-accent-400">{post.category}</li>
              </ol>
            </nav>

            <div className="mt-6 max-w-3xl">
              <span className="inline-flex rounded-full bg-accent-500 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider text-white">
                {post.category}
              </span>

              <h1 className="mt-5 text-3xl leading-[1.12] text-white sm:text-4xl lg:text-[2.875rem]">
                {post.title}
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-mist-300">{post.excerpt}</p>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-mist-400">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="size-4" />
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="size-4" />
                  {readingTime(wordCount)}
                </span>
                <span>{post.author}</span>
              </div>
            </div>
          </Container>
        </header>

        {/* ---------- Body ---------- */}
        <Section spacing="lg" tone="white">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[1fr_16rem] lg:gap-16">
              <div className="min-w-0 max-w-3xl">
                <BlockRenderer blocks={post.blocks} />

                {/* Tags */}
                <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-mist-200 pt-8">
                  <Tag aria-hidden="true" className="size-4 text-ink-500" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-mist-100 px-3 py-1 text-xs font-medium text-ink-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-32 lg:self-start">
                {headings.length > 1 ? (
                  <nav aria-labelledby="toc-heading" className="hidden lg:block">
                    <h2
                      id="toc-heading"
                      className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500"
                    >
                      On this page
                    </h2>
                    <ul className="mt-4 flex flex-col gap-2.5 border-l border-mist-200 pl-4">
                      {headings.map((heading, index) => (
                        <li key={index}>
                          <a
                            href={`#${headingId(heading.text)}`}
                            className="text-[0.8125rem] leading-snug text-ink-500 transition-colors hover:text-accent-600"
                          >
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                ) : null}

                <div className="mt-8 rounded-2xl bg-navy-900 p-6">
                  <p className="text-base font-semibold text-white">Need crew this month?</p>
                  <p className="mt-2 text-sm leading-relaxed text-mist-300">
                    Send the rank, vessel type and joining port. Verified shortlist in 72
                    hours.
                  </p>
                  <ButtonLink href="/contact" size="sm" className="mt-5 w-full">
                    Request crew
                  </ButtonLink>
                </div>
              </aside>
            </div>
          </Container>
        </Section>
      </article>

      {/* ---------- Article FAQs ---------- */}
      {post.faqs?.length ? (
        <Section spacing="lg" tone="mist">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <Reveal direction="right">
                <SectionHeading
                  align="left"
                  eyebrow="Quick answers"
                  title="Questions from this article"
                />
              </Reveal>
              <Reveal direction="left" delay={0.06}>
                <Accordion
                  defaultOpen={null}
                  items={post.faqs.map((faq, index) => ({
                    id: `${post.slug}-faq-${index}`,
                    question: faq.question,
                    answer: faq.answer,
                  }))}
                />
              </Reveal>
            </div>
          </Container>
        </Section>
      ) : null}

      {/* ---------- Related ---------- */}
      {related.length > 0 ? (
        <Section spacing="lg" tone="white">
          <Container>
            <Reveal>
              <SectionHeading eyebrow="Keep reading" title="Related articles" />
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <PostCard key={item.slug} post={item} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <CtaBand />
    </>
  );
}
