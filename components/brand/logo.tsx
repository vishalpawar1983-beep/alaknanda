import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

/** Dark mark for light / white surfaces. */
const LOGO_DARK = {
  src: "/Alaknanda-logo-small.png",
  width: 517,
  height: 329,
} as const;

/** Light mark for navy / dark surfaces. */
const LOGO_LIGHT = {
  src: "/alaknanda-logo-light.png",
  width: 600,
  height: 379,
} as const;

/**
 * Official brand mark. `tone` selects the asset that contrasts with the surface:
 * - `dark` → navy logo on light backgrounds
 * - `light` → light logo on dark backgrounds
 */
export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const logo = tone === "light" ? LOGO_LIGHT : LOGO_DARK;

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.legalName} — home`}
      className={cn("group inline-flex items-center", className)}
    >
      <Image
        src={logo.src}
        alt={siteConfig.legalName}
        width={logo.width}
        height={logo.height}
        priority
        className="h-11 w-auto object-contain sm:h-12 lg:h-14"
      />
    </Link>
  );
}
