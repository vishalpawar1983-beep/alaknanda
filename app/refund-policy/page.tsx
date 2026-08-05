import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalPage } from "@/components/layout/legal-page";
import { buildMetadata } from "@/lib/seo";
import { getLegalDocument } from "@/lib/legal";

const document = getLegalDocument("refund-policy");

export const metadata: Metadata = document
  ? buildMetadata({
      title: document.metaTitle,
      description: document.metaDescription,
      path: "/refund-policy",
    })
  : {};

export default function Page() {
  if (!document) notFound();
  return <LegalPage document={document} />;
}
