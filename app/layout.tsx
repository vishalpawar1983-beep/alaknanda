import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyActions } from "@/components/layout/sticky-actions";
import { ExitIntent } from "@/components/layout/exit-intent";
import { Analytics } from "@/components/analytics";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, localBusinessSchema, websiteSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.legalName} | Certified Crewing & Manning Agency`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "Maritime Services",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.legalName,
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    // Populate from Google Search Console once the property is verified.
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A2342",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      // Next 16 only manages scroll-behavior during navigation when this
      // attribute is present — without it our global `scroll-behavior: smooth`
      // would animate every route change.
      data-scroll-behavior="smooth"
      className={`${jost.variable} scroll-pt-28 antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-white">
        {/* Site-wide structured data — Organization, LocalBusiness, WebSite. */}
        <JsonLd data={[organizationSchema(), localBusinessSchema(), websiteSchema()]} />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />

        <StickyActions />
        <ExitIntent />
        <Analytics />
      </body>
    </html>
  );
}
