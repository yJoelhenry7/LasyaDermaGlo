"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { conditions } from "@/data/site";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { CardLoadGate } from "@/components/CardLoadGate";
import { ImageCardSkeleton } from "@/components/Skeleton";

const medicalImages = [
  {
    src: "https://images.unsplash.com/photo-1676312754401-d97fe43c2c4b?w=600&q=80",
    alt: "Close-up skin examination for accurate diagnosis",
  },
  {
    src: "https://images.unsplash.com/photo-1552256031-811fa8f0a7b1?w=600&q=80",
    alt: "Clinical treatment applied with sterile medical gloves",
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    alt: "Therapeutic facial mask for medical skin care",
  },
  {
    src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80",
    alt: "Doctor consulting a patient about skin concerns",
  },
];

export function MedicalDermatology() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="text-sm font-medium tracking-widest text-sage uppercase">
              Medical Dermatology
            </p>
            <h2 className="font-display mt-2 text-2xl font-medium text-charcoal md:text-3xl">
              Science-backed care for all skin conditions
            </h2>
            <p className="mt-4 leading-relaxed text-warm-gray">
              From acne and eczema to pigmentation, psoriasis, and chronic skin
              concerns, our dermatologists provide accurate diagnosis, long-term
              treatment plans, and ongoing support.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {conditions.map((condition, i) => (
                <motion.span
                  key={condition}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-full border border-sage/25 bg-surface px-4 py-2 text-sm text-charcoal"
                >
                  {condition}
                </motion.span>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3 rounded-xl bg-sage/10 p-4">
              <Clock className="h-5 w-5 text-sage" />
              <p className="text-sm font-medium text-charcoal">
                24/7 consultation support available
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            <CardLoadGate
              skeleton={
                <>
                  {medicalImages.map((_, i) => (
                    <ImageCardSkeleton
                      key={i}
                      className={i % 2 === 1 ? "mt-8" : ""}
                    />
                  ))}
                </>
              }
            >
              {medicalImages.map((image, i) => (
                <motion.div
                  key={image.src}
                  whileHover="hovered"
                  className={`group relative aspect-square overflow-hidden rounded-2xl bg-cream-dark ${
                    i % 2 === 1 ? "mt-8" : ""
                  }`}
                >
                  <ImageWithSkeleton
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="p-3 text-[11px] font-medium leading-snug text-white/90">
                      {image.alt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </CardLoadGate>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
