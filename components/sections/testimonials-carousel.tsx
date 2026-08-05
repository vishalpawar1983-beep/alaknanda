"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

import { Container, Section, SectionHeading } from "@/components/ui/section";
import { testimonials } from "@/lib/content";
import { cn } from "@/lib/utils";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          className={cn(
            "size-4",
            index < rating ? "fill-accent-500 text-accent-500" : "text-mist-300",
          )}
        />
      ))}
    </div>
  );
}

/**
 * Testimonial carousel with autoplay, manual controls and keyboard support.
 *
 * Autoplay pauses on hover and focus, and is disabled entirely under
 * `prefers-reduced-motion` — an auto-advancing carousel is a WCAG 2.2.2 issue
 * otherwise.
 */
export function TestimonialsCarousel() {
  const [index, setIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();
  const count = testimonials.length;

  const go = React.useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  React.useEffect(() => {
    if (isPaused || shouldReduceMotion) return;
    const timer = setInterval(() => setIndex((current) => (current + 1) % count), 7000);
    return () => clearInterval(timer);
  }, [isPaused, shouldReduceMotion, count]);

  const active = testimonials[index];
  if (!active) return null;

  return (
    <Section spacing="lg" tone="mist">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Rated 5 stars by owners, managers and seafarers"
          description="The people who keep coming back are the only review that counts in this industry."
        />

        <div
          className="relative mt-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
          role="group"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") go(index - 1);
            if (event.key === "ArrowRight") go(index + 1);
          }}
        >
          <div className="overflow-hidden rounded-3xl border border-mist-200 bg-white shadow-card">
            <AnimatePresence mode="wait">
              <motion.figure
                key={active.id}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -28 }}
                transition={{ duration: shouldReduceMotion ? 0.15 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16"
              >
                <div>
                  <Quote aria-hidden="true" className="size-9 text-accent-500/30" />
                  <blockquote className="mt-5 text-lg leading-relaxed text-ink-700 sm:text-xl sm:leading-relaxed">
                    {active.quote}
                  </blockquote>

                  <figcaption className="mt-8 flex flex-wrap items-center gap-4">
                    <div className="relative size-13 overflow-hidden rounded-full border-2 border-accent-500/80 shadow-md shrink-0">
                      <img
                        src={active.avatar}
                        alt={active.author}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-base font-semibold text-navy-900 block">
                        {active.author}
                      </span>
                      <span className="text-sm text-ink-500">
                        {active.role}, {active.company}
                      </span>
                    </div>
                    <span className="rounded-full bg-mist-100 px-2.5 py-1 text-xs font-medium text-ink-500">
                      {active.location}
                    </span>
                  </figcaption>
                </div>

                <div className="flex flex-col items-start gap-4 border-t border-mist-200 pt-6 lg:w-48 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  <Stars rating={active.rating} />
                  <p className="text-sm leading-snug text-ink-500">
                    Verified client and seafarer feedback collected after contract
                    completion.
                  </p>
                </div>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-7 flex items-center justify-between gap-6">
            <div className="flex items-center gap-2" role="tablist" aria-label="Choose testimonial">
              {testimonials.map((testimonial, dotIndex) => (
                <button
                  key={testimonial.id}
                  type="button"
                  role="tab"
                  aria-selected={dotIndex === index}
                  aria-label={`Testimonial ${dotIndex + 1} of ${count}`}
                  onClick={() => go(dotIndex)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    dotIndex === index
                      ? "w-8 bg-accent-500"
                      : "w-2 bg-mist-300 hover:bg-navy-300",
                  )}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous testimonial"
                className="grid size-11 place-items-center rounded-full border border-mist-300 bg-white text-navy-900 transition-colors hover:border-navy-900 hover:bg-navy-900 hover:text-white"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next testimonial"
                className="grid size-11 place-items-center rounded-full border border-mist-300 bg-white text-navy-900 transition-colors hover:border-navy-900 hover:bg-navy-900 hover:text-white"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
