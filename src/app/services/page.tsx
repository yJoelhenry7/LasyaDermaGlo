import type { Metadata } from "next";
import { conditions, services } from "@/data/site";
import { TreatmentCard, TreatmentsHeader } from "@/components/TreatmentCard";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Explore our dermatology and aesthetic treatments including acne care, laser treatments, Botox, and anti-aging solutions.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="bg-cream pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <TreatmentsHeader
          label="Services"
          title="Treatments for every skin concern"
        />
        <p className="mx-auto mt-6 max-w-2xl text-center text-base text-warm-gray md:text-lg">
          From medical dermatology to advanced aesthetic procedures, we offer
          comprehensive care tailored to your unique needs.
        </p>

        <div className="mt-14 space-y-4 md:space-y-5">
          {services.map((service, i) => (
            <TreatmentCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <div className="mt-20 rounded-2xl border border-cream-dark bg-sage-dark p-8 text-white md:p-12">
          <h2 className="font-display text-2xl font-medium md:text-3xl">
            Medical Dermatology
          </h2>
          <p className="mt-4 max-w-2xl text-white/75">
            Science-backed care for all skin conditions including acne, eczema,
            pigmentation, and chronic concerns.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {conditions.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/20 px-4 py-2 text-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
