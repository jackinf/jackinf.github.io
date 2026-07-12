import { useEffect, useState } from "react";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

interface Props {
  value: number;
  decimals?: number;
  /** Starts the count-up; until then renders 0 (or the final value under reduced motion). */
  active: boolean;
  duration?: number;
}

/** Animated number that eases from 0 to `value` once `active` flips true. */
export function CountUp({ value, decimals = 0, active, duration = 1500 }: Props) {
  const [n, setN] = useState(prefersReducedMotion ? value : 0);

  useEffect(() => {
    if (!active) return;
    if (prefersReducedMotion) {
      setN(value);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, value, duration]);

  return (
    <>
      {n.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </>
  );
}
