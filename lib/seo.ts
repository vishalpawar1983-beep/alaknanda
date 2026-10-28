import type { Metadata } from "next";

import {
  absoluteUrl,
  contactInfo,
  formattedAddress,
  siteConfig,
  socialLinks,
} from "@/lib/site";

/**
 * Builds page metadata with canonical URL, Open Graph and Twitter cards from a
 * single call, so every route is consistent and nothing is forgotten.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image ?? absoluteUrl("/opengraph-image");

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.legalName,
      locale: siteConfig.locale,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/* ==========================================================================
   JSON-LD builders
   ========================================================================== */

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: `${contactInfo.address.line1}, ${contactInfo.address.line2}`,
  addressLocality: contactInfo.address.locality,
  addressRegion: contactInfo.address.region,
  postalCode: contactInfo.address.postalCode,
  addressCountry: contactInfo.address.countryCode,
} as const;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/Alaknanda-logo-small.png"),
      width: 517,
      height: 329,
    },
    image: absoluteUrl("/opengraph-image"),
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    foundingDate: String(siteConfig.foundingYear),
    address: postalAddress,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: contactInfo.phoneE164,
        email: contactInfo.email,
        contactType: "customer service",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        email: contactInfo.careersEmail,
        contactType: "human resources",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: socialLinks.map((social) => social.href),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#localbusiness"),
    name: siteConfig.legalName,
    image: absoluteUrl("/opengraph-image"),
    url: siteConfig.url,
    telephone: contactInfo.phoneE164,
    email: contactInfo.email,
    priceRange: "$$",
    description: siteConfig.description,
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: contactInfo.geo.latitude,
      longitude: contactInfo.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Place", name: "Worldwide" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "68",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: siteConfig.url,
    name: siteConfig.legalName,
    description: siteConfig.description,
    publisher: { "@id": absoluteUrl("/#organization") },
    inLanguage: "en",
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    serviceType: name,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
      address: postalAddress,
    },
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: {
      "@type": "BusinessAudience",
      name: "Shipowners, ship managers and offshore operators",
    },
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function faqSchema(entries: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: { "@type": "Answer", text: entry.answer },
    })),
  };
}

export function reviewSchema(
  reviews: { author: string; quote: string; rating: number }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.legalName,
    address: formattedAddress,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: String(reviews.length),
      bestRating: "5",
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(review.rating),
        bestRating: "5",
      },
      reviewBody: review.quote,
    })),
  };
}

export function blogPostingSchema({
  title,
  description,
  slug,
  publishedAt,
  updatedAt,
  category,
  wordCount,
}: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  wordCount: number;
}) {
  const url = absoluteUrl(`/blog/${slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: title,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    articleSection: category,
    wordCount,
    inLanguage: "en",
    image: absoluteUrl(`/blog/${slug}/opengraph-image`),
    author: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/Alaknanda-logo-small.png"),
        width: 517,
        height: 329,
      },
    },
  };
}
