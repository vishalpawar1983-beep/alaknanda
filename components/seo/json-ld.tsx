/**
 * Emits a JSON-LD block.
 *
 * Next.js recommends inlining structured data with a <script> tag rendered from
 * a Server Component — it ships in the initial HTML with no client JS cost.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // The payload is built by our own typed helpers in lib/seo.ts, never
      // from user input, so there is no injection surface here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
