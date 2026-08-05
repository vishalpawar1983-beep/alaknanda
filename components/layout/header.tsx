"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ChevronDown,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { ButtonLink, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { contactInfo, mainNav, socialLinks, whatsappLink, type NavItem } from "@/lib/site";

/** Utility strip above the header — collapses away on small screens. */
function TopBar() {
  return (
    <div className="hidden bg-navy-950 text-mist-300 lg:block">
      <div className="container-page flex h-11 items-center justify-between text-[0.8125rem]">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${contactInfo.phoneE164}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Phone className="size-3.5 text-accent-500" />
            {contactInfo.phone}
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Mail className="size-3.5 text-accent-500" />
            {contactInfo.email}
          </a>
        </div>

        <div className="flex items-center gap-5">
          <span className="text-mist-400">{contactInfo.hours.label}</span>
          <span aria-hidden="true" className="h-3.5 w-px bg-white/20" />
          <ul className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent-500"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MegaMenu({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  if (!item.children) return null;

  return (
    <div className="grid gap-8 p-7 lg:grid-cols-[1fr_auto]">
      <ul
        className={cn(
          "grid gap-1",
          item.children.length > 4 ? "sm:grid-cols-2" : "sm:grid-cols-1",
        )}
      >
        {item.children.map((child) => (
          <li key={child.href}>
            <Link
              href={child.href}
              onClick={onNavigate}
              className="group/item block rounded-xl px-4 py-3 transition-colors hover:bg-mist-100"
            >
              <span className="flex items-center gap-2 text-[0.9375rem] font-medium text-navy-900 group-hover/item:text-navy-600">
                {child.label}
              </span>
              {child.description ? (
                <span className="mt-1 block max-w-xs text-[0.8125rem] leading-snug text-ink-500">
                  {child.description}
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>

      {item.feature ? (
        <div className="flex w-full max-w-xs flex-col justify-between gap-5 rounded-2xl bg-navy-900 p-6 text-white">
          <div>
            <p className="text-lg font-semibold leading-snug text-white">
              {item.feature.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-mist-300">{item.feature.body}</p>
          </div>
          <ButtonLink
            href={item.feature.href}
            onClick={onNavigate}
            variant="primary"
            size="sm"
            className="w-fit"
          >
            {item.feature.cta}
          </ButtonLink>
        </div>
      ) : null}
    </div>
  );
}

export function Header() {
  // `usePathname` is typed as nullable for Pages Router compatibility.
  const pathname = usePathname() ?? "/";
  const shouldReduceMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [mobileSection, setMobileSection] = React.useState<string | null>(null);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // The header sits transparent over the home hero and turns solid on scroll.
  const isTransparentRoute = pathname === "/";

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close every menu when the route changes. Adjusting state during render is
  // React's recommended pattern here — an effect would cause a cascading
  // second render on every navigation.
  const [lastPathname, setLastPathname] = React.useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsMobileOpen(false);
    setOpenMenu(null);
    setMobileSection(null);
  }

  // Lock body scroll while the mobile drawer is open.
  React.useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenMenu(null);
      setIsMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const isSolid = isScrolled || !isTransparentRoute || isMobileOpen;

  const openWithDelayCancel = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };

  // Small grace period so the pointer can travel from trigger to panel.
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-out-quint)]",
        isSolid
          ? "bg-white shadow-[0_1px_0_var(--color-mist-200),0_8px_28px_-18px_rgb(10_35_66/0.35)]"
          : "bg-transparent",
      )}
    >
      <div className={cn("transition-all duration-500", isScrolled && "lg:-mt-11")}>
        <TopBar />
      </div>

      <div className="container-page">
        <div
          className={cn(
            "flex items-center justify-between gap-6 transition-all duration-400",
            isScrolled ? "h-[4.5rem]" : "h-20 lg:h-[5.5rem]",
          )}
        >
          <Logo tone={isSolid ? "dark" : "light"} />

          {/* ---------- Desktop navigation ---------- */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => {
                const hasChildren = Boolean(item.children?.length);
                const isOpen = openMenu === item.label;

                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => hasChildren && openWithDelayCancel(item.label)}
                    onMouseLeave={() => hasChildren && scheduleClose()}
                  >
                    <Link
                      href={item.href}
                      aria-expanded={hasChildren ? isOpen : undefined}
                      aria-haspopup={hasChildren ? "true" : undefined}
                      onFocus={() => hasChildren && openWithDelayCancel(item.label)}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[0.9375rem] font-medium transition-colors duration-200",
                        isSolid
                          ? isActive(item.href)
                            ? "text-accent-600"
                            : "text-navy-900 hover:text-navy-600"
                          : isActive(item.href)
                            ? "text-accent-400"
                            : "text-white/90 hover:text-white",
                      )}
                    >
                      {item.label}
                      {hasChildren ? (
                        <ChevronDown
                          aria-hidden="true"
                          className={cn(
                            "size-3.5 transition-transform duration-300",
                            isOpen && "rotate-180",
                          )}
                        />
                      ) : null}
                    </Link>

                    <AnimatePresence>
                      {hasChildren && isOpen ? (
                        <motion.div
                          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute left-1/2 top-full z-50 w-max -translate-x-1/2 pt-3"
                          onMouseEnter={() => openWithDelayCancel(item.label)}
                          onMouseLeave={scheduleClose}
                        >
                          <div className="overflow-hidden rounded-2xl border border-mist-200 bg-white shadow-card-hover">
                            <MegaMenu item={item} onNavigate={() => setOpenMenu(null)} />
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* ---------- Desktop actions ---------- */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                !isSolid && "border-white/30 bg-white/10 text-white hover:bg-white",
              )}
            >
              <MessageCircle />
            </a>
            <ButtonLink href="/contact" variant="primary" size="md">
              Request Crew
            </ButtonLink>
          </div>

          {/* ---------- Mobile trigger ---------- */}
          <button
            type="button"
            onClick={() => setIsMobileOpen((open) => !open)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            className={cn(
              "grid size-11 place-items-center rounded-xl border transition-colors lg:hidden",
              isSolid
                ? "border-mist-300 text-navy-900"
                : "border-white/30 bg-white/10 text-white",
            )}
          >
            {isMobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* ---------- Mobile drawer ---------- */}
      <AnimatePresence>
        {isMobileOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-mist-200 bg-white lg:hidden"
          >
            <nav
              aria-label="Mobile"
              className="container-page max-h-[calc(100dvh-5rem)] overflow-y-auto py-5"
            >
              <ul className="flex flex-col">
                {mainNav.map((item) => {
                  const hasChildren = Boolean(item.children?.length);
                  const isSectionOpen = mobileSection === item.label;

                  return (
                    <li key={item.label} className="border-b border-mist-200 last:border-0">
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          className={cn(
                            "flex-1 py-3.5 text-base font-medium",
                            isActive(item.href) ? "text-accent-600" : "text-navy-900",
                          )}
                        >
                          {item.label}
                        </Link>

                        {hasChildren ? (
                          <button
                            type="button"
                            onClick={() =>
                              setMobileSection(isSectionOpen ? null : item.label)
                            }
                            aria-expanded={isSectionOpen}
                            aria-label={`${isSectionOpen ? "Collapse" : "Expand"} ${item.label}`}
                            className="grid size-9 place-items-center rounded-lg text-navy-600"
                          >
                            <ChevronDown
                              className={cn(
                                "size-4 transition-transform duration-300",
                                isSectionOpen && "rotate-180",
                              )}
                            />
                          </button>
                        ) : null}
                      </div>

                      <AnimatePresence initial={false}>
                        {hasChildren && isSectionOpen ? (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            {item.children?.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className="block border-l-2 border-mist-200 py-2.5 pl-4 text-[0.9375rem] text-ink-700 hover:border-accent-500 hover:text-navy-900"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                            <li aria-hidden="true" className="h-2" />
                          </motion.ul>
                        ) : null}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 flex flex-col gap-3 pb-4">
                <ButtonLink href="/contact" variant="primary" size="lg" className="w-full">
                  Request Crew
                </ButtonLink>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${contactInfo.phoneE164}`}
                    className={buttonVariants({ variant: "outline", size: "md" })}
                  >
                    <Phone /> Call
                  </a>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "outline", size: "md" })}
                  >
                    <MessageCircle /> WhatsApp
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
