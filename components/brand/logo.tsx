import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

const LOGO_SRC = "/Alaknanda-logo-small.png";
const LOGO_WIDTH = 517;
const LOGO_HEIGHT = 329;

/**
 * Official brand mark from `public/Alaknanda-logo-small.png`.
 * The asset already includes the emblem and wordmark.
 */
export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.legalName} — home`}
      className={cn("group inline-flex items-center", className)}
      data-tone={tone}
    >
      <Image
        src={LOGO_SRC}
        alt={siteConfig.legalName}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority
        className="h-11 w-auto object-contain sm:h-12 lg:h-14"
      />
    </Link>
  );
}
