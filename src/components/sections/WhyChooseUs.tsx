"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Sparkles, Star } from "lucide-react";
import { googleReviews } from "@/data/site";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { GoogleReviewsScroller } from "@/components/GoogleReviewsScroller";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { CardLoadGate } from "@/components/CardLoadGate";
import { BentoCardSkeleton, Skeleton } from "@/components/Skeleton";

// Counts up from `from` to `to` when the element enters the viewport
function Counter({
  from = 0,
  to,
  suffix = "",
}: {
  from?: number;
  to: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1400;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(from + (to - from) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, from, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function BentoCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3, boxShadow: "0 10px 36px rgba(10,45,46,0.09)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`overflow-hidden rounded-2xl border border-cream-dark bg-surface ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-cream-dark bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-warm-gray uppercase"
          >
            <span className="h-1 w-1 rounded-full bg-sage" />
            Why patients choose us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display mx-auto mt-5 max-w-3xl text-3xl font-medium text-charcoal md:text-5xl lg:text-6xl"
          >
            Care that puts you first
          </motion.h2>
        </div>

        {/* 3-column bento */}
        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <CardLoadGate
            delayMs={500}
            skeleton={
              <>
                <div className="grid grid-rows-[2fr_1fr] gap-4 lg:min-h-[640px]">
                  <Skeleton className="min-h-[280px] rounded-2xl" />
                  <BentoCardSkeleton />
                </div>
                <div className="grid grid-rows-[auto_auto_1fr] gap-4 lg:min-h-[640px]">
                  <BentoCardSkeleton />
                  <BentoCardSkeleton />
                  <Skeleton className="min-h-[200px] rounded-2xl" />
                </div>
                <div className="grid grid-rows-[1fr_2fr] gap-4 lg:min-h-[640px]">
                  <BentoCardSkeleton />
                  <BentoCardSkeleton className="min-h-[280px]" />
                </div>
              </>
            }
          >
            {/* Column 1: Before/After (tall) + Skin analysis */}
            <div className="grid grid-rows-[2fr_1fr] gap-4 lg:min-h-[640px]">
              <BentoCard className="relative min-h-[280px]" delay={0}>
                <BeforeAfterSlider
                  beforeSrc="/images/before_treatment.avif"
                  afterSrc="/images/after_treatment.avif"
                />
              </BentoCard>

              <BentoCard className="flex flex-col justify-between p-5" delay={0.06}>
                <div>
                  <span className="animate-badge-shimmer inline-block rounded-full border border-sage/30 bg-sage/10 px-3 py-1 text-[10px] font-semibold tracking-wide text-sage-dark uppercase">
                    Free
                  </span>
                  <h3 className="font-display mt-3 text-lg font-medium text-charcoal">
                    Skin analysis
                  </h3>
                  <p className="mt-1 text-sm text-warm-gray">
                    Expert consultation at no cost
                  </p>
                </div>
                <Link
                  href="/appointment"
                  className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-charcoal px-4 py-2 text-xs font-medium text-white transition hover:bg-sage-dark md:text-sm"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Book now
                </Link>
              </BentoCard>
            </div>

            {/* Column 2: Seamless + Tailored + Procedure image */}
            <div className="grid grid-rows-[auto_auto_1fr] gap-4 lg:min-h-[640px]">
              <BentoCard className="flex min-h-[140px] flex-col" delay={0.1}>
                <div className="p-4 pb-2">
                  <h3 className="font-display text-base font-medium text-charcoal md:text-lg">
                    Seamless client experience
                  </h3>
                </div>
                <div className="relative mt-auto aspect-[16/9] w-full">
                  <ImageWithSkeleton
                    src="/images/expert_care/expert_care_1.avif"
                    alt="Client care"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </BentoCard>

              <BentoCard className="p-5" delay={0.15}>
                <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&q=80",
                    "https://images.unsplash.com/photo-1548142813-c348350df52b?w=100&q=80",
                    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&q=80",
                  ].map((src) => (
                    <div
                      key={src}
                      className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-surface"
                    >
                      <ImageWithSkeleton
                        src={src}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="36px"
                        skeletonClassName="rounded-full"
                      />
                    </div>
                  ))}
                </div>
                <h3 className="font-display mt-3 text-base font-medium text-charcoal md:text-lg">
                  Tailored to your vision
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-warm-gray">
                  Customized treatment plans for every skin type and concern
                </p>
              </BentoCard>

              <BentoCard className="relative min-h-[200px]" delay={0.2}>
                <ImageWithSkeleton
                  src="/images/expert_care/exper_care_2.avif"
                  alt="Dermatology treatment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </BentoCard>
            </div>

            {/* Column 3: Stats + Reviews */}
            <div className="grid grid-rows-[1fr_2fr] gap-4 lg:min-h-[640px]">
              <BentoCard className="relative flex flex-col justify-between p-5" delay={0.18}>
                <p className="font-display pointer-events-none absolute top-3 right-3 text-4xl font-medium text-cream-dark/80 select-none md:text-5xl">
                  Experience
                </p>
                <div className="relative">
                  <p className="font-display text-4xl font-medium text-charcoal md:text-5xl">
                    <Counter from={0} to={7} suffix="+" />
                  </p>
                  <p className="mt-1 max-w-[10rem] text-sm text-warm-gray">
                    Years of medical excellence
                  </p>
                </div>
                <div className="relative mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-cream-dark bg-cream px-3 py-1.5 text-xs font-medium text-charcoal">
                    2,000+ Procedures
                  </span>
                  <span className="rounded-full border border-cream-dark bg-cream px-3 py-1.5 text-xs font-medium text-charcoal">
                    50+ Treatments
                  </span>
                </div>
              </BentoCard>

              <BentoCard className="flex flex-col" delay={0.24}>
                <div className="border-b border-cream-dark p-5">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]"
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex items-end gap-2">
                    <span className="font-display text-3xl font-medium text-charcoal md:text-4xl">
                      5.0
                    </span>
                    <span className="pb-0.5 text-xs text-warm-gray md:text-sm">
                      Google-rated care
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <GoogleReviewsScroller reviews={googleReviews} />
                </div>
              </BentoCard>
            </div>
          </CardLoadGate>
        </div>
      </div>
    </section>
  );
}
