import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { ButtonLink } from "@/components/ui/button";
import {
  contactInfo,
  footerNav,
  formattedAddress,
  siteConfig,
  socialLinks,
} from "@/lib/site";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[0.9375rem] text-mist-300 transition-colors duration-200 hover:text-accent-400"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-mist-300">
      {/* Decorative horizon glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-navy-600/25 blur-[110px]"
      />

      {/* ---------- Call to action band ---------- */}
      <div className="relative border-b border-white/10">
        <div className="container-page flex flex-col items-start justify-between gap-8 py-14 lg:flex-row lg:items-center lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Let&apos;s crew your next voyage.
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-mist-300">
              Send us the rank, vessel type and joining port. You&apos;ll have a verified
              shortlist — not a pile of unchecked CVs — within 72 hours.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="primary" size="lg">
              Request Crew
            </ButtonLink>
            <ButtonLink href="/services" variant="ghostLight" size="lg">
              Explore Services
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* ---------- Link columns ---------- */}
      <div className="relative container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
        <div>
          <Logo tone="light" />

          <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-mist-300">
            {siteConfig.legalName} is a certified crewing and manning agency supplying
            STCW-certified officers, engineers and ratings to shipowners, ship managers and
            offshore operators worldwide.
          </p>

          <address className="mt-7 flex flex-col gap-4 not-italic">
            <span className="flex items-start gap-3 text-[0.9375rem] leading-relaxed">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent-500" />
              <span>{formattedAddress}</span>
            </span>
            <a
              href={`tel:${contactInfo.phoneE164}`}
              className="flex items-center gap-3 text-[0.9375rem] transition-colors hover:text-accent-400"
            >
              <Phone className="size-4 shrink-0 text-accent-500" />
              {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-3 text-[0.9375rem] transition-colors hover:text-accent-400"
            >
              <Mail className="size-4 shrink-0 text-accent-500" />
              {contactInfo.email}
            </a>
          </address>
        </div>

        <FooterColumn title="Services" links={footerNav.services} />
        <FooterColumn title="Company" links={footerNav.company} />

        <div className="flex flex-col gap-8">
          <FooterColumn title="Legal" links={footerNav.legal} />
        </div>
      </div>

      {/* ---------- Newsletter ---------- */}
      <div className="relative border-t border-white/10">
        <div className="container-page grid gap-8 py-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Maritime insight, once a month
            </h3>
            <p className="mt-2 max-w-md text-[0.9375rem] leading-relaxed text-mist-300">
              Crewing market movements, regulation changes and practical manning guidance.
              No sales mail, unsubscribe anytime.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      {/* ---------- Bottom bar ---------- */}
      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-sm sm:flex-row">
          <p className="text-mist-400">
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>

          <ul className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mist-400 transition-colors hover:text-accent-400"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
