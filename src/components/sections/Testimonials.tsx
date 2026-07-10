"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { googleReviews } from "@/data/site";
import { GoogleReviewCard } from "@/components/GoogleReviewCard";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { CardLoadGate } from "@/components/CardLoadGate";
import { ReviewCardSkeleton } from "@/components/Skeleton";

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
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-medium tracking-[0.2em] text-sage uppercase">
              Google Reviews
            </p>
            <h2 className="font-display mt-2 text-3xl font-medium text-charcoal md:text-4xl">
              What our patients say
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex items-center gap-1.5 rounded-full border border-cream-dark bg-surface px-4 py-2 shadow-sm"
          >
            <span className="text-xl font-semibold text-charcoal">5.0</span>
            <Star className="h-5 w-5 fill-[#fbbc04] text-[#fbbc04]" />
          </motion.div>
        </div>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="relative flex flex-col">
            <motion.div
              whileHover={{ y: -3, boxShadow: "0 12px 36px rgba(10,45,46,0.08)" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex-1 overflow-hidden rounded-2xl border border-[#e8eaed] bg-white shadow-sm"
            >
              <CardLoadGate
                skeleton={<ReviewCardSkeleton className="border-0 shadow-none" />}
              >
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
              </CardLoadGate>
            </motion.div>

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
                    aria-label={`Go to review ${i + 1}`}
                    className="relative h-2 w-2 rounded-full bg-[#dadce0] transition-all duration-300"
                    style={{ width: i === index ? 24 : 8 }}
                  >
                    {i === index && (
                      <motion.span
                        layoutId="review-dot"
                        className="absolute inset-0 rounded-full bg-sage"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
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

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative hidden min-h-[320px] overflow-hidden rounded-2xl lg:block"
          >
            <ImageWithSkeleton
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&h=1100&fit=crop&crop=focalpoint&fp-y=0.32&fp-x=0.5&q=80"
              alt="Close-up of clear facial skin, eyes, and lips"
              fill
              className="scale-[1.35] object-cover object-[center_30%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            <div className="absolute right-0 bottom-0 left-0 p-6">
              <p className="font-display text-xl font-medium text-white">
                Skin that speaks for itself
              </p>
              <p className="mt-1 text-sm text-white/80">
                Real results our patients love to share
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
