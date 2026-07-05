"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { stats, testimonials } from "@/data/site";

export function WhyChooseUs() {
  return (
    <section className="bg-sage-dark py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-medium tracking-widest text-sage-light uppercase">
          Why patients choose us
        </p>
        <h2 className="font-display mt-2 text-3xl font-medium md:text-5xl">
          Care that puts you first
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/5 p-8"
          >
            <h3 className="text-lg font-medium">Real results, real patients</h3>
            <p className="mt-4 font-display text-4xl text-sage-light">12 Weeks</p>
            <p className="mt-1 text-sm text-white/60">Acne treatment</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl bg-white/5 p-8"
          >
            <h3 className="text-lg font-medium">Skin analysis</h3>
            <p className="mt-4 font-display text-4xl text-sage-light">Free</p>
            <p className="mt-1 text-sm text-white/60">
              Expert consultation at no cost
            </p>
            <Link
              href="/appointment"
              className="mt-6 inline-block text-sm font-medium text-sage-light underline underline-offset-4 hover:text-white"
            >
              Book now
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl bg-white/5 p-8"
          >
            <h3 className="text-lg font-medium">Seamless client experience</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              From consultation to follow-up, we ensure every step is comfortable
              and transparent.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-3xl font-medium text-sage-light md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-lg font-medium">Tailored to your vision</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
            Customized treatment plans for every skin type and concern
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <Star className="h-5 w-5 fill-gold text-gold" />
            <span className="text-2xl font-semibold">99%</span>
          </div>
          <p className="mt-1 text-sm text-white/60">2k+ Global trusted customers</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white/5 p-6"
            >
              <p className="text-sm leading-relaxed text-white/80">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-white/50">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
