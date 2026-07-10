"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const reduceMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minMs = reduceMotion ? 200 : 1100;
    const fadeMs = reduceMotion ? 0 : 550;
    const started = performance.now();
    let fadeTimer: number | undefined;
    let hideTimer: number | undefined;

    const dismiss = () => {
      const remaining = Math.max(0, minMs - (performance.now() - started));
      fadeTimer = window.setTimeout(() => {
        setExiting(true);
        hideTimer = window.setTimeout(() => setVisible(false), fadeMs);
      }, remaining);
    };

    if (document.readyState === "complete") {
      dismiss();
    } else {
      window.addEventListener("load", dismiss, { once: true });
    }

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("load", dismiss);
      if (fadeTimer) window.clearTimeout(fadeTimer);
      if (hideTimer) window.clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-cream transition-opacity duration-500 ease-out ${
        exiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-busy="true"
      aria-live="polite"
      role="status"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="animate-loader-breathe relative">
          <div className="absolute inset-0 -m-4 rounded-full bg-sage/10 blur-xl" />
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={160}
            height={160}
            priority
            className="relative h-28 w-28 object-contain sm:h-36 sm:w-36"
          />
        </div>
        <div className="h-0.5 w-16 overflow-hidden rounded-full bg-cream-dark">
          <div className="animate-loader-bar h-full w-1/2 rounded-full bg-sage" />
        </div>
        <span className="sr-only">Loading {siteConfig.name}</span>
      </div>
    </div>
  );
}
