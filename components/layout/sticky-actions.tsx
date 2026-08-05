"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUp, MessageCircle, Phone, Plus, X } from "lucide-react";

import { contactInfo, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Floating conversion cluster: WhatsApp, call and back-to-top.
 *
 * Collapses into a single trigger on mobile so it never covers content, and
 * expands on tap. Every control is a real link or button with a label.
 */
export function StickyActions() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [showTop, setShowTop] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const actions = [
    {
      key: "whatsapp",
      label: "WhatsApp us",
      href: whatsappLink(),
      external: true,
      icon: MessageCircle,
      className: "bg-[#25D366] text-white hover:bg-[#1eb455]",
    },
    {
      key: "call",
      label: `Call ${contactInfo.phone}`,
      href: `tel:${contactInfo.phoneE164}`,
      external: false,
      icon: Phone,
      className: "bg-navy-900 text-white hover:bg-navy-800",
    },
  ];

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-6">
      {/* Back to top */}
      <AnimatePresence>
        {showTop ? (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.24 }}
            onClick={() => window.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" })}
            aria-label="Back to top"
            className="grid size-11 place-items-center rounded-full border border-mist-300 bg-white text-navy-900 shadow-card transition-colors hover:border-navy-900 hover:bg-navy-900 hover:text-white"
          >
            <ArrowUp className="size-4" />
          </motion.button>
        ) : null}
      </AnimatePresence>

      {/* Action stack — always visible from sm up, toggled on mobile */}
      <AnimatePresence>
        {actions.map((action, index) => {
          const Icon = action.icon;
          const isHiddenOnMobile = !isExpanded;

          return (
            <motion.a
              key={action.key}
              href={action.href}
              {...(action.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={action.label}
              initial={false}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: shouldReduceMotion ? 0 : index * 0.05 },
              }}
              className={cn(
                "group relative grid size-12 place-items-center rounded-full shadow-float transition-all duration-300 sm:size-13",
                action.className,
                isHiddenOnMobile && "hidden sm:grid",
              )}
            >
              <Icon className="size-5" />
              <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-navy-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-float transition-opacity duration-200 group-hover:opacity-100 lg:block">
                {action.label}
              </span>
            </motion.a>
          );
        })}
      </AnimatePresence>

      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setIsExpanded((open) => !open)}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? "Hide contact options" : "Show contact options"}
        className="grid size-13 place-items-center rounded-full bg-accent-500 text-white shadow-float transition-transform duration-300 hover:bg-accent-600 active:scale-95 sm:hidden"
      >
        {isExpanded ? <X className="size-5" /> : <Plus className="size-5" />}
      </button>
    </div>
  );
}
