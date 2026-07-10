"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/site";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-cream-dark/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Side image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative hidden overflow-hidden rounded-3xl lg:block"
          >
            <div className="relative aspect-[4/5] w-full">
              <ImageWithSkeleton
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&q=80"
                alt="Client receiving a calming facial treatment at the clinic"
                fill
                className="object-cover object-[center_30%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-8">
                <p className="font-display text-2xl font-medium text-white">
                  Clear answers for healthier skin
                </p>
                <p className="mt-2 max-w-sm text-sm text-white/80">
                  Our team is happy to walk you through treatments, recovery, and
                  what to expect.
                </p>
              </div>
            </div>
          </motion.div>

          {/* FAQ list — centered on mobile, paired with image on desktop */}
          <div className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
            <p className="text-sm font-medium tracking-widest text-sage uppercase">
              FAQs
            </p>
            <h2 className="font-display mt-2 text-3xl font-medium text-charcoal md:text-4xl">
              Frequently asked questions
            </h2>

            <div className="mt-10">
              {faqs.map((faq, i) => (
                <div key={faq.question} className="border-b border-cream-dark">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex w-full items-center justify-between py-5 text-left"
                  >
                    <span className="pr-4 text-sm font-medium text-charcoal md:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-warm-gray transition ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-sm leading-relaxed text-warm-gray">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.015, boxShadow: "0 10px 36px rgba(10,45,46,0.09)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-10 rounded-2xl bg-surface p-6 text-center shadow-sm md:p-8"
            >
              <h3 className="font-display text-xl font-medium text-charcoal">
                Still have questions?
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm text-warm-gray">
                Our team is here to help. Get in touch for personalized answers.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex rounded-full bg-sage-dark px-8 py-3 text-sm font-medium text-white transition hover:bg-charcoal"
              >
                Contact us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
