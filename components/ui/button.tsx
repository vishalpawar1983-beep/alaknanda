import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Shared button styling. Exported so anchors and `next/link` can adopt the
 * exact same visual treatment without nesting an <a> inside a <button>.
 */
export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full",
    "font-medium tracking-tight transition-all duration-300 ease-[var(--ease-out-quint)]",
    "disabled:pointer-events-none disabled:opacity-55",
    "[&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-accent-500 text-white shadow-[0_10px_24px_-10px_var(--color-accent-600)] hover:bg-accent-600 hover:shadow-[0_16px_32px_-12px_var(--color-accent-600)] hover:-translate-y-0.5",
        navy: "bg-navy-900 text-white hover:bg-navy-800 hover:-translate-y-0.5 hover:shadow-float",
        outline:
          "border border-navy-200 bg-white text-navy-900 hover:border-navy-900 hover:bg-navy-900 hover:text-white",
        ghostLight:
          "border border-white/30 bg-white/10 text-white backdrop-blur-md hover:border-white hover:bg-white hover:text-navy-900",
        subtle: "bg-mist-100 text-navy-900 hover:bg-mist-200",
        link: "rounded-none p-0 text-navy-600 underline-offset-4 hover:text-accent-600 hover:underline",
      },
      size: {
        sm: "h-10 px-4 text-sm [&_svg]:size-4",
        md: "h-12 px-6 text-[0.9375rem] [&_svg]:size-4",
        lg: "h-14 px-8 text-base [&_svg]:size-5",
        icon: "size-11 [&_svg]:size-5",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & ButtonVariantProps;

export function Button({ className, variant, size, type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

type ButtonLinkProps = React.ComponentPropsWithoutRef<typeof Link> & ButtonVariantProps;

/** `next/link` styled as a button — keeps client-side navigation intact. */
export function ButtonLink({ className, variant, size, ...props }: ButtonLinkProps) {
  return <Link className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

type ExternalButtonLinkProps = React.ComponentPropsWithoutRef<"a"> & ButtonVariantProps;

/** Plain anchor styled as a button — for tel:, mailto: and off-site links. */
export function ExternalButtonLink({
  className,
  variant,
  size,
  ...props
}: ExternalButtonLinkProps) {
  return <a className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
