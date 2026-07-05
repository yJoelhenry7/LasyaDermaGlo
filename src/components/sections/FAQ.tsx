"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/site";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-medium tracking-widest text-sage uppercase">
          FAQs
        </p>
        <h2 className="font-display mt-2 text-3xl font-medium text-charcoal md:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mt-12 max-w-3xl">
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

        <div className="mt-16 rounded-2xl bg-sage/10 p-8 text-center md:p-12">
          <h3 className="font-display text-xl font-medium text-charcoal md:text-2xl">
            Still have questions?
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-warm-gray">
            Our team is here to help. Get in touch for personalized answers.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-sage-dark px-8 py-3 text-sm font-medium text-white transition hover:bg-charcoal"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
