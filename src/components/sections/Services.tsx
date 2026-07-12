"use client";

import { motion } from "framer-motion";
import { services } from "@/data/site";
import { TreatmentCard, TreatmentsHeader } from "@/components/TreatmentCard";
import { CardLoadGate } from "@/components/CardLoadGate";
import { TreatmentCardSkeleton } from "@/components/Skeleton";

export function Services() {
  return (
    <section id="services" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <TreatmentsHeader />

        <div className="mt-12 space-y-4 md:mt-16 md:space-y-5">
          <CardLoadGate
            skeleton={
              <>
                {Array.from({ length: services.length }).map((_, i) => (
                  <TreatmentCardSkeleton key={i} />
                ))}
              </>
            }
          >
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <TreatmentCard service={service} />
              </motion.div>
            ))}
          </CardLoadGate>
        </div>
      </div>
    </section>
  );
}
