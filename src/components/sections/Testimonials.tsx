"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { googleReviews } from "@/data/site";
import { GoogleReviewCard } from "@/components/GoogleReviewCard";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = googleReviews.length;

  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1));

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i === total - 1 ? 0 : i + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <section className="bg-cream-dark/50 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-sage uppercase">
              Google Reviews
            </p>
            <h2 className="font-display mt-2 text-3xl font-medium text-charcoal md:text-4xl">
              What our patients say
            </h2>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-cream-dark bg-surface px-4 py-2 shadow-sm">
            <span className="text-xl font-semibold text-charcoal">5.0</span>
            <Star className="h-5 w-5 fill-[#fbbc04] text-[#fbbc04]" />
          </div>
        </div>

        <div className="relative mt-10">
          <div className="overflow-hidden rounded-2xl border border-[#e8eaed] bg-white shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={googleReviews[index].id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
              >
                <GoogleReviewCard review={googleReviews[index]} standalone />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dadce0] bg-white text-charcoal transition hover:border-sage hover:text-sage"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {googleReviews.map((review, i) => (
                <button
                  key={review.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition ${
                    i === index ? "w-6 bg-sage" : "w-2 bg-[#dadce0]"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dadce0] bg-white text-charcoal transition hover:border-sage hover:text-sage"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
