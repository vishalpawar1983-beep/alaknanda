"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, BadgeCheck, Phone } from "lucide-react";

import { Counter } from "@/components/motion/counter";
import { ButtonLink, ExternalButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { heroStats } from "@/lib/content";
import { contactInfo } from "@/lib/site";

/** Layered vessel ocean video background + horizon overlay using user specified YouTube video. */
function VesselScene() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-navy-950">
      {/* Background ocean ship video (YouTube -Au17l6NY0Q embed) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <iframe
          src="https://www.youtube-nocookie.com/embed/-Au17l6NY0Q?autoplay=1&mute=1&controls=0&loop=1&playlist=-Au17l6NY0Q&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&showinfo=0&autohide=1"
          title="Hero Ocean Cargo Ship Background Video"
          className="absolute top-1/2 left-1/2 h-[180%] w-[180%] -translate-x-1/2 -translate-y-1/2 pointer-events-none border-0 object-cover scale-110 filter brightness-95"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>

      {/* Subtle, reduced opacity dark overlays for text legibility */}
      <div className="absolute inset-0 bg-navy-950/30 z-10" />
      <div className="absolute inset-0 bg-linear-to-r from-navy-950/75 via-navy-950/45 to-transparent z-10" />
      <div className="absolute inset-0 bg-linear-to-b from-navy-950/40 via-transparent to-navy-950/80 z-10" />

      {/* Subtle glow effects */}
      <div className="absolute right-[8%] top-[18%] z-10 h-[26rem] w-[26rem] rounded-full bg-accent-500/15 blur-[130px]" />
      <div className="absolute left-[-10%] top-[30%] z-10 h-[30rem] w-[30rem] rounded-full bg-navy-600/25 blur-[140px]" />
    </div>
  );
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 26 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden pb-16 pt-36 sm:min-h-svh sm:pb-24 sm:pt-44">
      <VesselScene />

      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.11 }}
          className="max-w-3xl"
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/8 px-4 py-2 text-[0.8125rem] font-medium text-mist-200 backdrop-blur-md"
          >
            <BadgeCheck className="size-4 text-accent-500" />
            Certified Crewing &amp; Manning Agency
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-4xl leading-[1.06] text-white sm:text-5xl lg:text-[3.75rem] lg:leading-[1.04]"
          >
            Certified crew &amp; manning agency for{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">global shipping</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1.5 -z-0 h-3 rounded-sm bg-accent-500/35 sm:bottom-2 sm:h-4"
              />
            </span>{" "}
            companies
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-mist-300 sm:text-xl"
          >
            We supply highly skilled, STCW-certified and genuinely verified seafarers to
            shipowners, ship managers and offshore operators worldwide — with the
            documentation checked before anyone reaches your shortlist.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <ButtonLink href="/contact" size="lg">
              Request crew <ArrowRight />
            </ButtonLink>
            <ExternalButtonLink
              href={`tel:${contactInfo.phoneE164}`}
              variant="ghostLight"
              size="lg"
            >
              <Phone /> {contactInfo.phone}
            </ExternalButtonLink>
          </motion.div>
        </motion.div>

        {/* ---------- Statistics ---------- */}
        <motion.dl
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.5, staggerChildren: shouldReduceMotion ? 0 : 0.09 }}
          className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/10 backdrop-blur-md sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-navy-950/45 px-6 py-7"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-4xl font-semibold tracking-tight text-white lg:text-[2.75rem]">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="mt-2 block text-[0.9375rem] font-medium text-accent-400">
                  {stat.label}
                </span>
                <span className="mt-1.5 block text-[0.8125rem] leading-snug text-mist-400">
                  {stat.detail}
                </span>
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
