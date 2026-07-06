"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Sparkles, Star } from "lucide-react";
import { googleReviews } from "@/data/site";

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
  const featuredReviews = googleReviews.slice(0, 2);

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

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[repeat(4,minmax(0,auto))]">
          {/* Before & After */}
          <BentoCard className="relative min-h-[320px] md:col-span-2 lg:col-span-5 lg:row-span-2">
            <div className="relative h-full min-h-[320px]">
              <div className="absolute inset-0 grid grid-cols-2">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80"
                    alt="Before treatment"
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white">
                    Before
                  </span>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=600&q=80"
                    alt="After treatment"
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                  <span className="absolute top-4 right-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white">
                    After
                  </span>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent p-6 pt-16">
                <p className="font-display text-lg text-white md:text-xl">
                  Real results, real patients
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-white/90">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    12 Weeks
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4" />
                    Acne treatment
                  </span>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Seamless experience */}
          <BentoCard className="flex min-h-[180px] flex-col lg:col-span-3">
            <div className="p-5 pb-3">
              <h3 className="font-display text-lg font-medium text-charcoal md:text-xl">
                Seamless client experience
              </h3>
            </div>
            <div className="relative mt-auto aspect-[16/10] w-full">
              <Image
                src="/images/expert_care_1.avif"
                alt="Client care"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </BentoCard>

          {/* Stats */}
          <BentoCard className="relative flex min-h-[220px] flex-col justify-between p-6 lg:col-span-4 lg:row-span-2">
            <p className="font-display pointer-events-none absolute top-4 right-4 text-6xl font-medium text-cream-dark/80 select-none md:text-7xl">
              Since 2016
            </p>
            <div className="relative">
              <p className="font-display text-5xl font-medium text-charcoal md:text-6xl">
                10+
              </p>
              <p className="mt-2 max-w-[12rem] text-sm text-warm-gray md:text-base">
                Years of medical excellence
              </p>
            </div>
            <div className="relative mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-cream-dark bg-cream px-4 py-2 text-xs font-medium text-charcoal md:text-sm">
                2,000+ Procedures
              </span>
              <span className="rounded-full border border-cream-dark bg-cream px-4 py-2 text-xs font-medium text-charcoal md:text-sm">
                50+ Treatments
              </span>
            </div>
          </BentoCard>

          {/* Tailored */}
          <BentoCard className="p-6 lg:col-span-3">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
              ].map((src) => (
                <div
                  key={src}
                  className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-surface"
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="40px" />
                </div>
              ))}
            </div>
            <h3 className="font-display mt-4 text-lg font-medium text-charcoal">
              Tailored to your vision
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-warm-gray">
              Customized treatment plans for every skin type and concern
            </p>
          </BentoCard>

          {/* Reviews */}
          <BentoCard className="lg:col-span-4 lg:row-span-2">
            <div className="border-b border-cream-dark p-5">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]"
                  />
                ))}
              </div>
              <div className="mt-3 flex items-end gap-3">
                <span className="font-display text-4xl font-medium text-charcoal">
                  5.0
                </span>
                <span className="pb-1 text-sm text-warm-gray">
                  Google-rated care
                </span>
              </div>
            </div>
            <div className="divide-y divide-cream-dark">
              {featuredReviews.map((review) => (
                <div key={review.id} className="p-5">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-[#fbbc04] text-[#fbbc04]"
                      />
                    ))}
                  </div>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-charcoal">
                    {review.quote}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-medium text-white"
                      style={{ backgroundColor: review.avatarColor }}
                    >
                      {review.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-charcoal capitalize">
                        {review.name.split(" ")[0]}
                      </p>
                      <p className="text-xs text-warm-gray">{review.meta}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Free skin analysis */}
          <BentoCard className="flex min-h-[200px] flex-col justify-between p-6 lg:col-span-3">
            <div>
              <span className="inline-block rounded-full border border-sage/30 bg-sage/10 px-3 py-1 text-xs font-semibold tracking-wide text-sage-dark uppercase">
                Free
              </span>
              <h3 className="font-display mt-4 text-xl font-medium text-charcoal">
                Skin analysis
              </h3>
              <p className="mt-2 text-sm text-warm-gray">
                Expert consultation at no cost
              </p>
            </div>
            <Link
              href="/appointment"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sage-dark"
            >
              <Sparkles className="h-4 w-4" />
              Book now
            </Link>
          </BentoCard>

          {/* Procedure image */}
          <BentoCard className="relative min-h-[220px] md:col-span-2 lg:col-span-5">
            <Image
              src="/images/exper_care_2.avif"
              alt="Dermatology treatment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
