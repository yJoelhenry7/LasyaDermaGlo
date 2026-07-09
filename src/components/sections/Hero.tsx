"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { TreatmentArch } from "@/components/sections/TreatmentArch";

export function Hero() {
  return (
    <section className="px-3 pt-20 pb-3 sm:px-4 sm:pt-24 md:px-6">
      <div className="relative mx-auto min-h-[min(90vh,840px)] max-w-[1440px] overflow-hidden rounded-[2rem] sm:min-h-[min(88vh,900px)] sm:rounded-[2.5rem] md:min-h-[min(86vh,940px)]">
        {/* Background image */}
        <Image
          src="/images/hero-bg.avif"
          alt="Healthy glowing skin"
          fill
          priority
          className="object-cover object-[center_25%] sm:object-center"
          sizes="(max-width: 768px) 100vw, 1440px"
        />

        {/* Gradient: strong at top for text, fades to transparent toward bottom
            so the arch area shows the warm skin tones of the background image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-transparent" />

        {/* Hero text — compact, positioned at top */}
        <div className="relative z-10 flex flex-col items-center px-4 pt-6 text-center sm:px-8 sm:pt-8 md:pt-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display max-w-2xl text-xl leading-tight font-medium text-white drop-shadow-lg sm:text-2xl md:text-3xl lg:text-4xl"
          >
            {siteConfig.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-2 max-w-md text-xs leading-snug text-white/90 drop-shadow sm:mt-3 sm:text-sm"
          >
            Advanced dermatology and modern aesthetic treatments designed to improve
          </motion.p>
        </div>

        {/* Treatment arch — anchored to bottom edge of hero */}
        <TreatmentArch />
      </div>
    </section>
  );
}
