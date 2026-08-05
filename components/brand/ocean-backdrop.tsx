import { cn } from "@/lib/utils";

/**
 * Decorative maritime backdrop for navy sections.
 *
 * Pure CSS + inline SVG so it costs no image request, scales to any viewport
 * and stays crisp on retina displays. Hidden from assistive technology.
 */
export function OceanBackdrop({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 -z-10", className)}>
      {/* Deep-water gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-navy-950 via-navy-900 to-navy-800" />

      {/* Horizon glow */}
      <div className="absolute -right-32 top-0 h-[32rem] w-[32rem] rounded-full bg-navy-600/30 blur-[120px]" />
      <div className="absolute -bottom-40 -left-24 h-96 w-[28rem] rounded-full bg-accent-500/10 blur-[110px]" />

      {/* Nautical chart grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.07]"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="chart-grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M56 0H0V56" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#chart-grid)" />
      </svg>

      {/* Swell lines along the lower edge */}
      <svg
        className="absolute inset-x-0 bottom-0 h-40 w-full text-white/[0.05]"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
      >
        <path
          d="M0 96c120-32 240-32 360 0s240 32 360 0 240-32 360 0 240 32 360 0v64H0Z"
          fill="currentColor"
        />
        <path
          d="M0 120c160-28 320-28 480 0s320 28 480 0 320-28 480 0v40H0Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
