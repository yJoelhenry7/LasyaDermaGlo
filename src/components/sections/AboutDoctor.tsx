"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { doctor } from "@/data/site";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { CardLoadGate } from "@/components/CardLoadGate";
import { ProfileCardSkeleton } from "@/components/Skeleton";

export function AboutDoctor() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-xs font-medium tracking-[0.2em] text-sage uppercase sm:text-sm"
        >
          Lead Dermatologist
        </motion.p>

        <div className="mt-10">
          <CardLoadGate skeleton={<ProfileCardSkeleton />}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, boxShadow: "0 14px 44px rgba(10,45,46,0.10)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="overflow-hidden rounded-2xl border border-cream-dark bg-surface shadow-sm"
            >
              <div className="flex flex-col-reverse md:flex-row">
                <div className="flex flex-1 flex-col justify-center border-t border-cream-dark p-8 md:border-t-0 md:border-r md:p-10 lg:p-14">
                  <h2 className="font-display text-3xl font-medium text-charcoal md:text-4xl lg:text-5xl">
                    {doctor.name}
                  </h2>
                  <p className="mt-3 text-base text-sage md:text-lg">{doctor.title}</p>

                  <div className="mt-6 space-y-1.5 text-sm text-warm-gray md:text-base">
                    <p className="font-medium text-charcoal">
                      {doctor.qualifications.join(" · ")}
                    </p>
                    <p>{doctor.fellowship}</p>
                    <p>
                      {doctor.experienceYears}+ years ·{" "}
                      {doctor.languages.join(", ")}
                    </p>
                  </div>

                  <p className="mt-6 max-w-xl text-base leading-relaxed text-warm-gray md:text-lg">
                    {doctor.shortBio}
                  </p>

                  <div className="mt-6 flex max-w-xl flex-wrap gap-2">
                    {doctor.specialties.slice(0, 5).map((specialty) => (
                      <span
                        key={specialty}
                        className="rounded-full border border-cream-dark bg-cream px-3 py-1 text-xs font-medium text-charcoal"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/about"
                    className="group mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-sage-dark transition hover:text-sage md:text-base"
                  >
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-sage after:transition-all after:duration-300 group-hover:after:w-full">
                      View full profile
                    </span>
                    <motion.span
                      className="inline-flex"
                      animate={{ x: 0, y: 0 }}
                      whileHover={{ x: 2, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.span>
                  </Link>
                </div>

                <div className="relative mx-auto aspect-[3/4] w-full max-w-[320px] shrink-0 overflow-hidden md:mx-0 md:max-w-none md:w-72 lg:w-96">
                  <ImageWithSkeleton
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 320px, (max-width: 1024px) 288px, 384px"
                  />
                </div>
              </div>
            </motion.div>
          </CardLoadGate>
        </div>
      </div>
    </section>
  );
}
