"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Shows a skeleton placeholder until the first paint / short delay,
 * then reveals children. Useful for static card grids so skeletons
 * appear on first load instead of empty flashes.
 */
export function CardLoadGate({
  skeleton,
  children,
  delayMs = 450,
}: {
  skeleton: ReactNode;
  children: ReactNode;
  delayMs?: number;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setReady(true);
      return;
    }

    const id = window.setTimeout(() => setReady(true), delayMs);
    return () => window.clearTimeout(id);
  }, [delayMs]);

  if (!ready) return <>{skeleton}</>;
  return <>{children}</>;
}
