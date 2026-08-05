"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { ServiceIcon } from "@/components/service-icon";
import { services, type Service } from "@/lib/services";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-mist-200 bg-white transition-all duration-500 ease-[var(--ease-out-quint)] hover:-translate-y-1.5 hover:border-transparent hover:shadow-card-hover",
        className,
      )}
    >
      {/* Top contextual realistic image banner (Gemini generated, no text elements) */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-navy-950">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-95 group-hover:brightness-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy-950/85 via-navy-950/20 to-transparent" />

        {/* Floating icon badge */}
        <span
          aria-hidden="true"
          className="absolute bottom-3 left-6 grid size-12 place-items-center rounded-xl bg-white text-navy-900 shadow-md transition-all duration-500 group-hover:bg-accent-500 group-hover:text-white"
        >
          <ServiceIcon name={service.icon} className="size-5" />
        </span>
      </div>

      {/* Navy wash slides up on hover for bottom content */}
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-0 translate-y-full bg-linear-to-br from-navy-900 to-navy-800 transition-transform duration-500 ease-[var(--ease-out-quint)] group-hover:translate-y-0"
      />

      <div className="relative flex h-full flex-col p-6">
        <h3 className="text-xl font-semibold leading-snug transition-colors duration-500 group-hover:text-white">
          {service.shortTitle}
        </h3>

        <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-500 transition-colors duration-500 group-hover:text-mist-300">
          {service.summary}
        </p>

        <Link
          href={`/services/${service.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy-600 transition-colors duration-500 group-hover:text-accent-400"
        >
          <span className="absolute inset-0" aria-hidden="true" />
          Learn more
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <span className="sr-only">about {service.title}</span>
        </Link>
      </div>
    </article>
  );
}

export function ServicesGrid({
  heading = true,
  limit,
}: {
  heading?: boolean;
  limit?: number;
}) {
  const shown = limit ? services.slice(0, limit) : services;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const maxIndex = Math.max(0, shown.length - visibleCount);

  const [isPaused, setIsPaused] = useState(false);

  // Auto adjust currentIndex if out of bounds on resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // Autoplay slider effect (4s interval) with pause-on-hover
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex, handleNext]);

  return (
    <Section spacing="lg" tone="mist">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          {heading ? (
            <SectionHeading
              eyebrow="What we do"
              title="Crewing and management services, end to end"
              description="Eight service lines that cover a vessel's entire people and compliance workload — take one, or hand over the lot."
            />
          ) : <div />}

          {/* Slider Navigation Controls */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous services"
              className={cn(
                "grid size-11 place-items-center rounded-xl border border-mist-300 bg-white text-navy-900 shadow-xs transition-all duration-300 hover:border-navy-900 hover:bg-navy-900 hover:text-white",
              )}
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next services"
              className={cn(
                "grid size-11 place-items-center rounded-xl border border-mist-300 bg-white text-navy-900 shadow-xs transition-all duration-300 hover:border-navy-900 hover:bg-navy-900 hover:text-white",
              )}
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        {/* 3-Column Slider Window with Pause on Hover */}
        <div
          className="mt-10 overflow-hidden py-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-[var(--ease-out-quint)]"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {shown.map((service) => (
              <div
                key={service.slug}
                className="shrink-0 px-2.5"
                style={{ flex: `0 0 ${100 / visibleCount}%` }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                currentIndex === idx
                  ? "w-8 bg-navy-900"
                  : "w-2.5 bg-mist-300 hover:bg-mist-400",
              )}
            />
          ))}
        </div>

        {limit ? (
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/services" variant="navy" size="lg">
              View all services
            </ButtonLink>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
