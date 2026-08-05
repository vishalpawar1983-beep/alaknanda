import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";

import { PostCover } from "@/components/blog/post-cover";
import { getWordCount } from "@/lib/blog";
import type { BlogPost } from "@/lib/blog/types";
import { cn, formatDate, readingTime } from "@/lib/utils";

export function PostCard({
  post,
  className,
  featured = false,
}: {
  post: BlogPost;
  className?: string;
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-mist-200 bg-white transition-all duration-500 ease-[var(--ease-out-quint)] hover:-translate-y-1.5 hover:border-navy-200 hover:shadow-card-hover",
        className,
      )}
    >
      <div className="relative overflow-hidden">
        <PostCover
          tone={post.tone}
          title={post.title}
          image={post.image}
          compact={!featured}
          className={cn(
            "transition-transform duration-700 ease-[var(--ease-out-quint)] group-hover:scale-105",
            featured ? "aspect-[16/9]" : "aspect-[16/10]",
          )}
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider text-navy-900 backdrop-blur-sm">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-500">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5" />
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" />
            {readingTime(getWordCount(post))}
          </span>
        </div>

        <h3
          className={cn(
            "mt-3 leading-snug transition-colors duration-300 group-hover:text-navy-600",
            featured ? "text-2xl" : "text-lg",
          )}
        >
          <Link href={`/blog/${post.slug}`}>
            <span className="absolute inset-0" aria-hidden="true" />
            {post.title}
          </Link>
        </h3>

        <p
          className={cn(
            "mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-500",
            featured ? "line-clamp-4" : "line-clamp-3",
          )}
        >
          {post.excerpt}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-navy-600 transition-colors duration-300 group-hover:text-accent-600">
          Read article
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </article>
  );
}
