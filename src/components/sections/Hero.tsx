"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { TreatmentArch } from "@/components/sections/TreatmentArch";

function useArchConfig() {
  const [radius, setRadius] = useState(130);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setRadius(115);
      } else if (width < 768) {
        setRadius(150);
      } else if (width < 1024) {
        setRadius(210);
      } else {
        setRadius(270);
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return radius;
}

export function Hero() {
  const radius = useArchConfig();

  return (
    <section className="px-3 pt-20 pb-3 sm:px-4 sm:pt-24 md:px-6">
      <div className="relative mx-auto min-h-[min(92vh,860px)] max-w-[1440px] overflow-hidden rounded-[2rem] sm:min-h-[min(90vh,920px)] sm:rounded-[2.5rem] md:min-h-[min(88vh,960px)]">
        <Image
          src="/images/hero-bg.avif"
          alt="Healthy glowing skin"
          fill
          priority
          className="object-cover object-[center_30%] sm:object-center"
          sizes="(max-width: 768px) 100vw, 1440px"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/45" />
        <div className="absolute inset-0 bg-sage-dark/15 mix-blend-multiply" />

        <div className="relative z-10 flex h-full min-h-[inherit] flex-col">
          <div className="flex flex-1 flex-col items-center justify-start px-4 pt-10 text-center sm:px-8 sm:pt-14 md:pt-20">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display max-w-4xl text-[1.75rem] leading-[1.15] font-medium text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              {siteConfig.tagline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 drop-shadow sm:mt-6 sm:text-base md:max-w-2xl md:text-lg"
            >
              Advanced dermatology and modern aesthetic treatments designed to
              improve
            </motion.p>
          </div>

          <div
            className="relative mx-auto w-full max-w-4xl flex-shrink-0 overflow-visible"
            style={{ height: radius * 0.72 + 180, minHeight: 300 }}
          >
            <TreatmentArch radius={radius} />

            <Link
              href="/services"
              className="absolute bottom-0 left-1/2 z-30 flex min-w-[148px] -translate-x-1/2 flex-col items-center rounded-t-[2rem] bg-white/95 px-6 pt-5 pb-3 shadow-[0_-8px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm transition hover:bg-white sm:min-w-[180px] sm:rounded-t-[2.5rem] sm:px-10 sm:pt-6 sm:pb-4"
            >
              <Sparkles className="h-4 w-4 text-sage sm:h-5 sm:w-5" />
              <span className="mt-1.5 text-[11px] leading-tight font-medium text-charcoal sm:text-xs">
                Explore our treatments
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
