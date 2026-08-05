import Link from "next/link";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

/**
 * Wordmark + anchor/compass monogram, drawn inline as SVG so it stays crisp,
 * themeable and free of an extra network request.
 */
export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const isLight = tone === "light";

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.legalName} — home`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span
        className={cn(
          "grid size-11 shrink-0 place-items-center rounded-xl transition-colors duration-300",
          isLight ? "bg-white/12 ring-1 ring-white/25" : "bg-navy-900",
        )}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
          className="size-6 text-accent-500"
        >
          {/* Anchor ring */}
          <circle cx="16" cy="6.5" r="3" stroke="currentColor" strokeWidth="2" />
          {/* Shank */}
          <path
            d="M16 9.5V27"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Stock */}
          <path
            d="M9.5 13h13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Arms */}
          <path
            d="M5.5 19c0 5 4.7 8.5 10.5 8.5S26.5 24 26.5 19"
            stroke={isLight ? "#ffffff" : "#0F4C81"}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[1.0625rem] font-semibold tracking-tight",
            isLight ? "text-white" : "text-navy-900",
          )}
        >
          Alaknanda
        </span>
        <span
          className={cn(
            "mt-1 text-[0.625rem] font-medium uppercase tracking-[0.22em]",
            isLight ? "text-mist-300" : "text-ink-500",
          )}
        >
          Ship Management
        </span>
      </span>
    </Link>
  );
}
