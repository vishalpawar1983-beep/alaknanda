"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

export type AccordionEntry = {
  id: string;
  question: string;
  answer: React.ReactNode;
};

type AccordionProps = {
  items: AccordionEntry[];
  /** Index open on first paint. Pass `null` for all-collapsed. */
  defaultOpen?: number | null;
  className?: string;
};

/**
 * Single-open disclosure list.
 *
 * Built on native <button> semantics with `aria-expanded`/`aria-controls`, so
 * it is fully keyboard operable without a headless UI dependency.
 */
export function Accordion({ items, defaultOpen = 0, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(defaultOpen);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("divide-y divide-mist-300 border-y border-mist-300", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `accordion-panel-${item.id}`;
        const buttonId = `accordion-button-${item.id}`;

        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="group flex w-full items-start justify-between gap-6 py-5 text-left"
              >
                <span
                  className={cn(
                    "text-base font-medium transition-colors sm:text-lg",
                    isOpen ? "text-accent-600" : "text-navy-900 group-hover:text-navy-600",
                  )}
                >
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-300",
                    isOpen
                      ? "rotate-45 border-accent-500 bg-accent-500 text-white"
                      : "border-mist-300 text-navy-600 group-hover:border-navy-600",
                  )}
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.34,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pr-12 text-[0.9375rem] leading-relaxed text-ink-500">
                    {item.answer}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
