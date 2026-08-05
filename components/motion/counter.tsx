"use client";

import * as React from "react";
import { useInView, useReducedMotion } from "motion/react";

type CounterProps = {
  value: number;
  /** Rendered after the number, e.g. "+" or "%". */
  suffix?: string;
  prefix?: string;
  durationMs?: number;
  className?: string;
};

/**
 * Counts up to `value` the first time it scrolls into view.
 *
 * The final value is rendered on the server and whenever motion is reduced, so
 * the number is always present for crawlers and assistive tech.
 */
export function Counter({
  value,
  suffix = "",
  prefix = "",
  durationMs = 1800,
  className,
}: CounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();
  const [animated, setAnimated] = React.useState(0);

  // With reduced motion the final figure is derived during render rather than
  // pushed through state, so the effect never sets state synchronously.
  const display = shouldReduceMotion ? value : animated;

  React.useEffect(() => {
    if (!isInView || shouldReduceMotion) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      // easeOutQuint — fast start, gentle settle.
      const eased = 1 - Math.pow(1 - progress, 5);
      setAnimated(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, durationMs, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {/* Screen readers get the final figure immediately. */}
      <span className="sr-only">{`${prefix}${value}${suffix}`}</span>
      <span aria-hidden="true">
        {prefix}
        {display}
        {suffix}
      </span>
    </span>
  );
}
