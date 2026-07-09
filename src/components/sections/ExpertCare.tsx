"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const galleryMedia = [
  {
    type: "image" as const,
    src: "/images/expert_care/expert_care_1.avif",
    alt: "Expert dermatology care",
  },
  {
    type: "video" as const,
    src: "/images/expert_care/laser_treatment.mp4",
    alt: "Laser treatment at Derma Glo",
  },
  {
    type: "image" as const,
    src: "/images/expert_care/exper_care_2.avif",
    alt: "Skin rejuvenation treatment",
  },
];

export function ExpertCare() {
  const words =
    "We combine medical dermatology with advanced aesthetic treatments to help you achieve clear, healthy, and naturally radiant skin.".split(
      " "
    );

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-medium tracking-widest text-sage uppercase">
          Expert Care for Every Skin Journey
        </p>

        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-x-2 gap-y-1 text-center">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="font-display text-2xl text-charcoal md:text-3xl lg:text-4xl"
            >
              {word}
            </motion.span>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:justify-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-semibold">5.0</span>
            <Star className="h-6 w-6 fill-[#fbbc04] text-[#fbbc04]" />
          </div>
          <p className="text-warm-gray">5-star rated on Google</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {galleryMedia.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                  aria-label={item.alt}
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
