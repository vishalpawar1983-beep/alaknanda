"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Phone, X } from "lucide-react";

import { ButtonLink, ExternalButtonLink } from "@/components/ui/button";
import { contactInfo, whatsappLink } from "@/lib/site";

const STORAGE_KEY = "alaknanda.exit-intent.dismissed";
/** Re-offer after a week rather than nagging on every visit. */
const SUPPRESS_DAYS = 7;

function wasRecentlyDismissed(): boolean {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const dismissedAt = Number(raw);
    if (Number.isNaN(dismissedAt)) return false;
    return Date.now() - dismissedAt < SUPPRESS_DAYS * 24 * 60 * 60 * 1000;
  } catch {
    // Private browsing or storage disabled — just show the prompt.
    return false;
  }
}

/**
 * Exit-intent prompt.
 *
 * Desktop: triggers when the pointer leaves through the top of the viewport.
 * Touch devices have no exit intent, so it falls back to a scroll-depth trigger
 * once the visitor has read most of the page.
 */
export function ExitIntent() {
  const [isOpen, setIsOpen] = React.useState(false);
  const hasTriggered = React.useRef(false);
  const shouldReduceMotion = useReducedMotion();
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const dismiss = React.useCallback(() => {
    setIsOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      // Ignore — dismissal simply will not persist.
    }
  }, []);

  React.useEffect(() => {
    if (wasRecentlyDismissed()) return;

    const trigger = () => {
      if (hasTriggered.current) return;
      hasTriggered.current = true;
      setIsOpen(true);
    };

    const onMouseOut = (event: MouseEvent) => {
      // Only the top edge, and only when leaving the document entirely.
      if (event.clientY > 0 || event.relatedTarget) return;
      trigger();
    };

    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      if (scrolled / document.body.scrollHeight > 0.72) trigger();
    };

    const isTouch = window.matchMedia("(hover: none)").matches;

    if (isTouch) {
      window.addEventListener("scroll", onScroll, { passive: true });
    } else {
      document.addEventListener("mouseout", onMouseOut);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  // Escape to close, and move focus into the dialog when it opens.
  React.useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };

    document.addEventListener("keydown", onKeyDown);
    dialogRef.current?.focus();

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, dismiss]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
          className="fixed inset-0 z-[60] grid place-items-center bg-navy-950/70 p-4 backdrop-blur-sm"
          onClick={dismiss}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-intent-title"
            tabIndex={-1}
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, y: 12 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white p-8 shadow-card-hover outline-none sm:p-10"
          >
            <button
              type="button"
              onClick={dismiss}
              aria-label="Close"
              className="absolute right-4 top-4 grid size-9 place-items-center rounded-full text-ink-500 transition-colors hover:bg-mist-100 hover:text-navy-900"
            >
              <X className="size-4" />
            </button>

            <span className="eyebrow text-accent-600">
              <span aria-hidden="true" className="h-px w-7 bg-accent-500/70" />
              Before you go
            </span>

            <h2
              id="exit-intent-title"
              className="mt-4 text-2xl leading-tight sm:text-[1.75rem]"
            >
              Need crew for a vessel this month?
            </h2>

            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-500">
              Send us the rank, vessel type and joining port. We&apos;ll come back with a
              verified shortlist within 72 hours — certificates checked, sea time
              reconciled, no obligation.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg" onClick={dismiss} className="flex-1">
                Request crew
              </ButtonLink>
              <ExternalButtonLink
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                className="flex-1"
              >
                WhatsApp us
              </ExternalButtonLink>
            </div>

            <a
              href={`tel:${contactInfo.phoneE164}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy-600 transition-colors hover:text-accent-600"
            >
              <Phone className="size-4" />
              Or call {contactInfo.phone}
            </a>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
