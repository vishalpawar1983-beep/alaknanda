/**
 * In-memory fixed-window rate limiter.
 *
 * Adequate for a single Vercel instance and for blunting form spam. If the site
 * is ever scaled across regions or instances, swap the Map for a shared store
 * (Upstash Redis / Vercel KV) — the `rateLimit` signature stays the same.
 */

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

/** Evict expired buckets so the Map cannot grow unbounded. */
function sweep(now: number): void {
  if (buckets.size < 500) return;
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

export type RateLimitResult = {
  success: boolean;
  remaining: number;
  /** Seconds until the window resets — surfaced as `Retry-After`. */
  retryAfter: number;
};

export function rateLimit(
  identifier: string,
  { limit = 5, windowMs = 60_000 }: { limit?: number; windowMs?: number } = {},
): RateLimitResult {
  const now = Date.now();
  sweep(now);

  const bucket = buckets.get(identifier);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(identifier, { count: 1, resetAt: now + windowMs });
    return { success: true, remaining: limit - 1, retryAfter: 0 };
  }

  bucket.count += 1;
  const retryAfter = Math.ceil((bucket.resetAt - now) / 1000);

  if (bucket.count > limit) {
    return { success: false, remaining: 0, retryAfter };
  }

  return { success: true, remaining: limit - bucket.count, retryAfter };
}

/**
 * Best-effort client IP.
 * Vercel sets `x-forwarded-for`; the first entry is the originating client.
 */
export function clientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return headers.get("x-real-ip") ?? "unknown";
}
