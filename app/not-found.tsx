import Link from "next/link";

import { OceanBackdrop } from "@/components/brand/ocean-backdrop";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";

const suggestions = [
  { label: "Our services", href: "/services" },
  { label: "Careers at sea", href: "/careers" },
  { label: "Maritime insight", href: "/blog" },
  { label: "Contact the crewing desk", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden py-32">
      <OceanBackdrop />

      <Container className="relative text-center">
        <p className="text-[7rem] font-bold leading-none tracking-tight text-white/12 sm:text-[10rem]">
          404
        </p>

        <h1 className="-mt-6 text-3xl text-white sm:text-4xl">
          This heading is off the chart
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-mist-300">
          The page you were looking for has been moved or never existed. Let&apos;s get you
          back on course.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghostLight" size="lg">
            Contact us
          </ButtonLink>
        </div>

        <ul className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {suggestions.map((suggestion) => (
            <li key={suggestion.href}>
              <Link
                href={suggestion.href}
                className="text-sm text-mist-400 underline-offset-4 transition-colors hover:text-accent-400 hover:underline"
              >
                {suggestion.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
