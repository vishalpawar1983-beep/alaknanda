import { cn } from "@/lib/utils";

/**
 * Generated cover art.
 *
 * Each post gets a deterministic gradient + wave composition derived from its
 * `tone` pair. This keeps the blog visually consistent without shipping stock
 * photography, and any post can later be given a real photo by swapping this
 * component for `next/image` at the same call sites.
 */
export function PostCover({
  tone,
  title,
  image,
  className,
  compact = false,
}: {
  tone: [string, string];
  title: string;
  image?: string;
  className?: string;
  compact?: boolean;
}) {
  if (image) {
    return (
      <div className={cn("relative overflow-hidden bg-navy-950", className)}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-95 group-hover:brightness-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy-950/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />
      </div>
    );
  }
  const gradientId = `cover-${title.replace(/[^a-z0-9]/gi, "").slice(0, 16)}`;

  return (
    <div className={cn("relative overflow-hidden bg-navy-900", className)}>
      <svg
        aria-hidden="true"
        viewBox="0 0 640 360"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={tone[0]} />
            <stop offset="100%" stopColor={tone[1]} />
          </linearGradient>
          <pattern
            id={`${gradientId}-grid`}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M40 0H0V40" fill="none" stroke="white" strokeWidth="1" opacity="0.12" />
          </pattern>
        </defs>

        <rect width="640" height="360" fill={`url(#${gradientId})`} />
        <rect width="640" height="360" fill={`url(#${gradientId}-grid)`} />

        {/* Horizon swell */}
        <path
          d="M0 236c80-22 160-22 240 0s160 22 240 0 120-16 160-8v132H0Z"
          fill="white"
          opacity="0.07"
        />
        <path
          d="M0 274c100-18 200-18 300 0s200 18 300 0 40-4 40-4v90H0Z"
          fill="white"
          opacity="0.09"
        />

        {!compact ? (
          <>
            {/* Simplified vessel silhouette */}
            <g opacity="0.22">
              <rect x="392" y="176" width="34" height="18" rx="2" fill="white" />
              <rect x="392" y="158" width="34" height="18" rx="2" fill="white" />
              <rect x="430" y="176" width="34" height="18" rx="2" fill="white" />
              <rect x="468" y="150" width="30" height="44" rx="2" fill="white" />
              <path
                d="M372 194h140l-11 22c-3 6-9 9-16 9h-92c-7 0-14-4-16-11l-5-20Z"
                fill="white"
              />
            </g>
          </>
        ) : null}
      </svg>
    </div>
  );
}
