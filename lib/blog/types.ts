/**
 * Portable content blocks.
 *
 * Deliberately mirrors the shape of a headless-CMS rich-text field (Sanity
 * portable text, Contentful rich text, Strapi blocks) so posts can be migrated
 * to a CMS later without touching the rendering layer.
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title: string; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export type BlogCategory =
  | "Maritime News"
  | "Crew Management"
  | "Merchant Navy"
  | "Shipping Industry";

export type BlogPost = {
  slug: string;
  title: string;
  /** Used verbatim as the meta description. */
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  keywords: string[];
  publishedAt: string;
  updatedAt?: string;
  author: string;
  /** Gradient pair for the generated cover art. */
  tone: [string, string];
  /** High quality maritime post cover photo URL */
  image?: string;
  featured?: boolean;
  blocks: Block[];
  faqs?: { question: string; answer: string }[];
  /** Slugs of related posts — powers internal linking. */
  related: string[];
};

/** Approximate word count across every text-bearing block. */
export function countWords(blocks: Block[]): number {
  const text = blocks
    .map((block) => {
      switch (block.type) {
        case "p":
        case "h2":
        case "h3":
          return block.text;
        case "quote":
          return `${block.text} ${block.cite ?? ""}`;
        case "callout":
          return `${block.title} ${block.text}`;
        case "ul":
        case "ol":
          return block.items.join(" ");
        case "table":
          return [...block.head, ...block.rows.flat()].join(" ");
        default:
          return "";
      }
    })
    .join(" ");

  return text.split(/\s+/).filter(Boolean).length;
}

/** Stable slug for a heading, used for the in-page table of contents. */
export function headingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
