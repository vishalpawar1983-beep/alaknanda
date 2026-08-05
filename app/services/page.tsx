import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Process } from "@/components/sections/process";
import { CtaBand } from "@/components/sections/cta-band";
import { Industries } from "@/components/sections/industries";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Crewing, Manning & Ship Management Services",
  description:
    "Crew management, technical management, cruise placement, marine spares, flag documentation, offshore crew supply and merchant navy recruitment — delivered by a certified manning agency.",
  path: "/services",
  keywords: [
    "crew management services",
    "ship manning services",
    "marine recruitment services",
    "international crew manning services",
    "offshore manning agency",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Services", path: "/services" }])} />

      <PageHero
        eyebrow="Our services"
        title="Everything a vessel needs, from the crew list to the spares order"
        description="Eight service lines covering the people, paperwork and technical workload of running ships. Take a single service, or hand over the whole crewing function."
        crumbs={[{ name: "Services", path: "/services" }]}
      />

      <ServicesGrid heading={false} />
      <Process />
      <Industries />
      <CtaBand />
    </>
  );
}
