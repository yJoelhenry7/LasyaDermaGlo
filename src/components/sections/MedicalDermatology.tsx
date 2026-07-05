"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { conditions } from "@/data/site";

export function MedicalDermatology() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
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
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400&q=80",
              "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80",
              "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=80",
              "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
            ].map((src, i) => (
              <div
                key={src}
                className={`overflow-hidden rounded-2xl bg-cream-dark ${i % 2 === 1 ? "mt-8" : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Skin care ${i + 1}`}
                  className="aspect-square w-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
