import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Container } from "@/components/ui/section";
import { OceanBackdrop } from "@/components/brand/ocean-backdrop";
import { cn } from "@/lib/utils";

export type Crumb = { name: string; path: string };

/**
 * Standard inner-page banner: breadcrumb trail, H1 and supporting line over the
 * maritime backdrop. Keeps every non-home page visually consistent.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-navy-900 pb-16 pt-36 sm:pb-20 sm:pt-44 lg:pb-24 lg:pt-48",
        className,
      )}
    >
      <OceanBackdrop />

      <Container className="relative">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-[0.8125rem] text-mist-300">
            <li>
              <Link href="/" className="transition-colors hover:text-accent-400">
                Home
              </Link>
            </li>
            {crumbs.map((crumb, index) => {
              const isLast = index === crumbs.length - 1;
              return (
                <li key={crumb.path} className="flex items-center gap-1.5">
                  <ChevronRight aria-hidden="true" className="size-3.5 text-mist-400/60" />
                  {isLast ? (
                    <span aria-current="page" className="text-accent-400">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link href={crumb.path} className="transition-colors hover:text-accent-400">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="mt-7 max-w-3xl">
          {eyebrow ? (
            <span className="eyebrow text-accent-400">
              <span aria-hidden="true" className="h-px w-7 bg-accent-400/70" />
              {eyebrow}
            </span>
          ) : null}

          <h1 className="mt-4 text-4xl leading-[1.1] text-white sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>

          {description ? (
            <p className="mt-5 text-lg leading-relaxed text-mist-300">{description}</p>
          ) : null}

          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
