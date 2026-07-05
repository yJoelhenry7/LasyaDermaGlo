"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { clinicValues } from "@/data/site";

export function AboutDoctor() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
              alt="Dr. Lasya"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-medium text-charcoal md:text-4xl">
              Dr. Lasya
            </h2>
            <p className="mt-2 text-sage">Dermatologist & Aesthetic Specialist</p>

            <div className="mt-6 flex items-center gap-2 text-sm text-warm-gray">
              <Sparkles className="h-4 w-4 text-gold" />
              Excellence in skin care
            </div>

            <h3 className="font-display mt-8 text-2xl font-medium text-charcoal">
              A clinic committed
            </h3>
            <p className="mt-4 leading-relaxed text-warm-gray">
              We believe good skin starts with understanding. Every treatment
              begins with a detailed consultation, a long-term plan, and
              science-backed care.
            </p>

            <ul className="mt-8 space-y-4">
              {clinicValues.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
                  <span className="text-sm text-charcoal">{value}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="mt-8 inline-flex rounded-full border border-sage-dark px-6 py-2.5 text-sm font-medium text-sage-dark transition hover:bg-sage-dark hover:text-white"
            >
              Our Approach
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
