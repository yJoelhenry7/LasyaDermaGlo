"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";
import { googleReviews } from "@/data/site";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { GoogleReviewsScroller } from "@/components/GoogleReviewsScroller";

function BentoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
          <span className="inline-flex items-center gap-2 rounded-full border border-cream-dark bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-warm-gray uppercase">
            <span className="h-1 w-1 rounded-full bg-sage" />
            Why patients choose us
          </span>
          <h2 className="font-display mx-auto mt-5 max-w-3xl text-3xl font-medium text-charcoal md:text-5xl lg:text-6xl">
            Care that puts you first
          </h2>
        </div>

        {/* 3-column bento — matches reference card arrangement */}
        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          {/* Column 1: Before/After (tall) + Skin analysis */}
          <div className="grid grid-rows-[2fr_1fr] gap-4 lg:min-h-[640px]">
            <BentoCard className="relative min-h-[280px]">
              <BeforeAfterSlider
                beforeSrc="/images/before_treatment.avif"
                afterSrc="/images/after_treatment.avif"
              />
            </BentoCard>

            <BentoCard className="flex flex-col justify-between p-5">
              <div>
                <span className="inline-block rounded-full border border-sage/30 bg-sage/10 px-3 py-1 text-[10px] font-semibold tracking-wide text-sage-dark uppercase">
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
            <BentoCard className="flex min-h-[140px] flex-col">
              <div className="p-4 pb-2">
                <h3 className="font-display text-base font-medium text-charcoal md:text-lg">
                  Seamless client experience
                </h3>
              </div>
              <div className="relative mt-auto aspect-[16/9] w-full">
                <Image
                  src="/images/expert_care/expert_care_1.avif"
                  alt="Client care"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </BentoCard>

            <BentoCard className="p-5">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
                ].map((src) => (
                  <div
                    key={src}
                    className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-surface"
                  >
                    <Image src={src} alt="" fill className="object-cover" sizes="36px" />
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

            <BentoCard className="relative min-h-[200px]">
              <Image
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
            <BentoCard className="relative flex flex-col justify-between p-5">
              <p className="font-display pointer-events-none absolute top-3 right-3 text-4xl font-medium text-cream-dark/80 select-none md:text-5xl">
                Since 2016
              </p>
              <div className="relative">
                <p className="font-display text-4xl font-medium text-charcoal md:text-5xl">
                  10+
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

            <BentoCard className="flex flex-col">
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
        </div>
      </div>
    </section>
  );
}
