import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services, conditions } from "@/data/site";

export const metadata: Metadata = {
  title: "Services | Derma Glo",
  description:
    "Explore our dermatology and aesthetic treatments including acne care, laser treatments, Botox, and anti-aging solutions.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-medium tracking-widest text-sage uppercase">
          Our Services
        </p>
        <h1 className="font-display mt-2 text-4xl font-medium text-charcoal md:text-5xl">
          Treatments for every skin concern
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-warm-gray">
          From medical dermatology to advanced aesthetic procedures, we offer
          comprehensive care tailored to your unique needs.
        </p>

        <div className="mt-16 space-y-16">
          {services.map((service, i) => (
            <article
              key={service.id}
              id={service.id}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="font-display text-2xl font-medium capitalize md:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 leading-relaxed text-warm-gray">
                  {service.description}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-warm-gray">
                  Our specialists use the latest techniques and FDA-approved
                  products to ensure safe, effective results with minimal downtime.
                </p>
                <Link
                  href="/appointment"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-sage hover:text-sage-dark"
                >
                  Book a consultation
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 rounded-2xl bg-sage-dark p-10 text-white md:p-16">
          <h2 className="font-display text-2xl font-medium md:text-3xl">
            Medical Dermatology
          </h2>
          <p className="mt-4 max-w-2xl text-white/70">
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
