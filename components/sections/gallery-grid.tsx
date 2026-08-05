"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Container, Section } from "@/components/ui/section";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/lib/content";
import { cn } from "@/lib/utils";

type Filter = GalleryCategory | "All";

/**
 * Masonry-style filterable gallery.
 *
 * Artwork is generated from each item's `tone` pair rather than loaded as a
 * photograph, so the page ships with zero image weight. Replacing a tile with a
 * real photo means swapping the <svg> for `next/image` — the layout is unchanged.
 */
export function GalleryGrid() {
  const [filter, setFilter] = React.useState<Filter>("All");
  const shouldReduceMotion = useReducedMotion();

  const filters: Filter[] = ["All", ...galleryCategories];
  const visible =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <Section spacing="lg" tone="white">
      <Container>
        {/* Filters */}
        <div
          role="tablist"
          aria-label="Filter gallery by category"
          className="flex flex-wrap items-center gap-2"
        >
          {filters.map((option) => (
            <button
              key={option}
              type="button"
              role="tab"
              aria-selected={filter === option}
              onClick={() => setFilter(option)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                filter === option
                  ? "border-navy-900 bg-navy-900 text-white"
                  : "border-mist-300 bg-white text-ink-700 hover:border-navy-300 hover:text-navy-900",
              )}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Masonry columns */}
        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <motion.figure
                key={item.id}
                layout={!shouldReduceMotion}
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
                transition={{ duration: shouldReduceMotion ? 0.15 : 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-mist-200 bg-white"
              >
                <div className={cn("relative overflow-hidden bg-navy-950", item.aspect)}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-out-quint)] group-hover:scale-108 filter brightness-95 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-950/80 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-40" />

                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider text-navy-900 shadow-sm backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                <figcaption className="px-5 py-4 text-[0.9375rem] leading-snug text-ink-700">
                  {item.title}
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>

        <p className="mt-10 rounded-2xl border border-mist-200 bg-mist-50 p-6 text-sm leading-relaxed text-ink-500">
          <strong className="font-semibold text-navy-900">Note for the site owner:</strong>{" "}
          these tiles use generated artwork as placeholders. Drop real photographs into{" "}
          <code className="rounded bg-white px-1.5 py-0.5 text-[0.8125rem]">public/gallery/</code>{" "}
          and swap the inline <code className="rounded bg-white px-1.5 py-0.5 text-[0.8125rem]">
            svg
          </code>{" "}
          for{" "}
          <code className="rounded bg-white px-1.5 py-0.5 text-[0.8125rem]">next/image</code> — the
          layout, filters and animation stay exactly as they are.
        </p>
      </Container>
    </Section>
  );
}
