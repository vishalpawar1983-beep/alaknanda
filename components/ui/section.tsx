import * as React from "react";

import { cn } from "@/lib/utils";

/** Horizontal shell used by every section. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("container-page", className)}>{children}</div>;
}

type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
  /** Vertical rhythm. `none` lets a section manage its own padding. */
  spacing?: "sm" | "md" | "lg" | "none";
  tone?: "white" | "mist" | "navy" | "gradient";
};

const spacingMap = {
  sm: "py-14 sm:py-16",
  md: "py-16 sm:py-20 lg:py-24",
  lg: "py-20 sm:py-28 lg:py-32",
  none: "",
} as const;

const toneMap = {
  white: "bg-white",
  mist: "bg-mist-100",
  navy: "bg-navy-900 text-mist-200",
  gradient: "bg-linear-to-b from-mist-100 to-white",
} as const;

export function Section({
  spacing = "md",
  tone = "white",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("relative", spacingMap[spacing], toneMap[tone], className)}
      {...props}
    >
      {children}
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  /** Heading level — keeps one <h1> per page for SEO/a11y. */
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-3xl text-center items-center" : "max-w-2xl items-start",
        className,
      )}
    >
      {eyebrow ? (
        <span className={cn("eyebrow", isDark ? "text-accent-400" : "text-accent-600")}>
          <span
            aria-hidden="true"
            className={cn("h-px w-7", isDark ? "bg-accent-400/70" : "bg-accent-500/70")}
          />
          {eyebrow}
        </span>
      ) : null}

      <Heading
        className={cn(
          "text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]",
          isDark && "text-white",
        )}
      >
        {title}
      </Heading>

      {description ? (
        <p className={cn("text-lg leading-relaxed", isDark ? "text-mist-300" : "text-ink-500")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
