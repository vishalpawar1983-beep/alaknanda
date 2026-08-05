import { ArrowRight } from "lucide-react";

import { PostCard } from "@/components/blog/post-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { getFeaturedPosts } from "@/lib/blog";

export function BlogPreview() {
  const posts = getFeaturedPosts(3);
  if (posts.length === 0) return null;

  return (
    <Section spacing="lg" tone="white">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              align="left"
              eyebrow="Insight"
              title="Practical maritime guidance, not press releases"
              description="Written by people who work the crewing desk — on documentation, compliance, retention and careers at sea."
            />
            <ButtonLink href="/blog" variant="outline" size="lg" className="shrink-0">
              All articles <ArrowRight />
            </ButtonLink>
          </div>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <RevealItem key={post.slug} as="div" className="h-full">
              <PostCard post={post} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
