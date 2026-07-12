"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import type { Service } from "@/data/site";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";

type TreatmentCardProps = {
  service: Service;
};

export function TreatmentCard({ service }: TreatmentCardProps) {
  return (
    <motion.article
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative overflow-hidden rounded-2xl border border-cream-dark bg-surface transition-colors duration-300 hover:bg-cream-dark/60"
    >
      <Link
        href={`/services/${service.slug}`}
        className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full text-charcoal/35 transition group-hover:text-sage md:top-6 md:right-6"
        aria-label={`View ${service.title}`}
      >
        <Plus className="h-5 w-5" strokeWidth={1.5} />
      </Link>

      <div className="flex flex-col gap-8 p-6 md:flex-row md:items-center md:justify-between md:gap-12 md:p-8 lg:p-10">
        <div className="flex items-center gap-5 md:gap-8 md:pr-8">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full md:h-14 md:w-14">
            <ImageWithSkeleton
              src={service.icon}
              alt=""
              fill
              className="object-contain"
              sizes="56px"
              skeletonClassName="rounded-full"
            />
          </div>
          <h3 className="font-display max-w-[14rem] text-2xl leading-tight font-medium text-charcoal capitalize md:max-w-none md:text-3xl lg:text-4xl">
            {service.title}
          </h3>
        </div>

        <div className="md:max-w-sm lg:max-w-md">
          <p className="text-sm leading-relaxed text-warm-gray md:text-base">
            {service.description}
          </p>
          <Link
            href={`/services/${service.slug}`}
            className="mt-5 inline-flex rounded-full border border-charcoal/25 px-5 py-2 text-sm font-medium text-charcoal transition hover:border-sage hover:bg-sage hover:text-white"
          >
            View Detail
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function TreatmentsHeader({
  label = "Services",
  title = "Our treatments",
  centered = true,
}: {
  label?: string;
  title?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      <span className="inline-flex items-center gap-2 rounded-full border border-cream-dark bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-warm-gray uppercase">
        <span className="h-1 w-1 rounded-full bg-sage" />
        {label}
      </span>
      <h2
        className={`font-display mt-5 text-3xl font-medium text-charcoal md:text-5xl lg:text-6xl ${
          centered ? "mx-auto max-w-2xl" : ""
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
