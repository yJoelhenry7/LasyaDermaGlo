"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const galleryImages = [
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80",
  "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400&q=80",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80",
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
            <Star className="h-6 w-6 fill-gold text-gold" />
          </div>
          <p className="text-warm-gray">86+ Reviews from clients</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {galleryImages.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
