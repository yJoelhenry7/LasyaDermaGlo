"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { CardLoadGate } from "@/components/CardLoadGate";
import { GalleryCardSkeleton } from "@/components/Skeleton";

const galleryMedia = [
  {
    type: "image" as const,
    src: "https://images.unsplash.com/photo-1713085085470-fba013d67e65?w=800&q=80",
    alt: "Dermatologist performing a clinical facial peel",
  },
  {
    type: "video" as const,
    src: "/images/expert_care/laser_treatment.mp4",
    alt: "Laser treatment at Derma Glo",
  },
  {
    type: "image" as const,
    src: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80",
    alt: "Patient receiving a professional facial treatment",
  },
];

function CountUp({
  from = 0,
  to,
  decimals = 0,
}: {
  from?: number;
  to: number;
  decimals?: number;
}) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1200;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((from + (to - from) * eased).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, from, to, decimals]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
}

export function ExpertCare() {
  const words =
    "We combine medical dermatology with advanced aesthetic treatments to help you achieve clear, healthy, and naturally radiant skin.".split(
      " "
    );

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-medium tracking-widest text-sage uppercase">
          Expert Care for Every Skin Journey
        </p>

        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-x-2 gap-y-1 text-center">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="font-display text-2xl text-charcoal md:text-3xl lg:text-4xl"
            >
              {word}
            </motion.span>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:justify-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-semibold">
              <CountUp from={4.5} to={5.0} decimals={1} />
            </span>
            <Star className="h-6 w-6 fill-[#fbbc04] text-[#fbbc04]" />
          </div>
          <p className="text-warm-gray">5-star rated on Google</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <CardLoadGate
            skeleton={
              <>
                <GalleryCardSkeleton />
                <GalleryCardSkeleton />
                <GalleryCardSkeleton />
              </>
            }
          >
            {galleryMedia.map((item, i) => (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover="hovered"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    aria-label={item.alt}
                  />
                ) : (
                  <ImageWithSkeleton
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="p-5 text-sm font-medium text-white/90">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </CardLoadGate>
        </div>
      </div>
    </section>
  );
}
