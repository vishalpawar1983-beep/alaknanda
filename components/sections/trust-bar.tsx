import { ShieldCheck } from "lucide-react";

import { Container } from "@/components/ui/section";
import { certifications } from "@/lib/content";

/**
 * Compliance strip beneath the hero.
 *
 * The marquee duplicates its content so the CSS translate loop is seamless;
 * the duplicate is hidden from assistive tech to avoid announcing everything
 * twice.
 */
export function TrustBar() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="relative border-b border-mist-200 bg-white py-12 sm:py-14"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-14">
          <div className="lg:w-72 lg:shrink-0">
            <h2
              id="trust-heading"
              className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-500"
            >
              Trusted by global shipping companies
            </h2>
            <p className="mt-2 text-[0.9375rem] leading-snug text-ink-500">
              Operating to the conventions your inspectors audit against.
            </p>
          </div>

          {/* Fades mask the marquee edges instead of a hard cut. */}
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <ul className="flex w-max animate-marquee items-center gap-4 hover:[animation-play-state:paused]">
              {[...certifications, ...certifications].map((certification, index) => (
                <li
                  key={`${certification.abbr}-${index}`}
                  aria-hidden={index >= certifications.length}
                  className="group flex w-64 shrink-0 items-start gap-3 rounded-xl border border-mist-200 bg-mist-50 px-5 py-4 transition-colors duration-300 hover:border-navy-200 hover:bg-white"
                >
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-accent-500" />
                  <div>
                    <p className="text-base font-semibold leading-none text-navy-900">
                      {certification.abbr}
                    </p>
                    <p className="mt-1.5 text-xs leading-snug text-ink-500">
                      {certification.name}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
