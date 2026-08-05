import { countWords, type BlogCategory, type BlogPost } from "@/lib/blog/types";

import { post as choosingManningAgency } from "@/lib/blog/posts/choosing-a-ship-manning-agency";
import { post as stcwCertification } from "@/lib/blog/posts/stcw-certification-explained";
import { post as crewRetention } from "@/lib/blog/posts/crew-retention-in-shipping";
import { post as flagEndorsement } from "@/lib/blog/posts/flag-state-endorsement-process";
import { post as mlcObligations } from "@/lib/blog/posts/mlc-2006-owner-obligations";
import { post as careerPath } from "@/lib/blog/posts/merchant-navy-career-path";

/**
 * Post registry.
 *
 * To publish a new article: add a file under `lib/blog/posts/`, export a
 * `post: BlogPost`, and register it here. Everything downstream — the index,
 * category filters, sitemap, RSS-ready metadata, related links and structured
 * data — is derived automatically.
 */
const registry: BlogPost[] = [
  choosingManningAgency,
  stcwCertification,
  crewRetention,
  flagEndorsement,
  mlcObligations,
  careerPath,
];

/** Newest first. */
export const allPosts: BlogPost[] = [...registry].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export const blogCategories: BlogCategory[] = [
  "Crew Management",
  "Merchant Navy",
  "Shipping Industry",
  "Maritime News",
];

export function getPost(slug: string): BlogPost | undefined {
  return allPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return allPosts.filter((post) => post.category === category);
}

export function getFeaturedPosts(limit = 3): BlogPost[] {
  const featured = allPosts.filter((post) => post.featured);
  return (featured.length >= limit ? featured : allPosts).slice(0, limit);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const explicit = post.related
    .map((slug) => getPost(slug))
    .filter((related): related is BlogPost => Boolean(related) && related?.slug !== post.slug);

  if (explicit.length >= limit) return explicit.slice(0, limit);

  // Top up from the same category, then anything else recent.
  const fallback = allPosts.filter(
    (candidate) =>
      candidate.slug !== post.slug && !explicit.some((item) => item.slug === candidate.slug),
  );

  return [...explicit, ...fallback].slice(0, limit);
}

export function getWordCount(post: BlogPost): number {
  return countWords(post.blocks);
}

/** Categories that currently have at least one published post. */
export function getActiveCategories(): BlogCategory[] {
  return blogCategories.filter((category) => getPostsByCategory(category).length > 0);
}
