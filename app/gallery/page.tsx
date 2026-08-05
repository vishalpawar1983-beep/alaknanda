import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gallery — Vessels, Crew, Training & Certification",
  description:
    "Vessels we crew, seafarers we deploy, training sessions and certification — a look at how Alaknanda Ship Management works day to day.",
  path: "/gallery",
  keywords: ["ship management gallery", "seafarer training photos", "crew management gallery"],
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Gallery", path: "/gallery" }])} />

      <PageHero
        eyebrow="Gallery"
        title="Vessels, crew and the work behind the crew list"
        description="Ships we man, seafarers we deploy, training and certification — the practical side of a crewing operation."
        crumbs={[{ name: "Gallery", path: "/gallery" }]}
      />

      <GalleryGrid />
      <CtaBand />
    </>
  );
}
