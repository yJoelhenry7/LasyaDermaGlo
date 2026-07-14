import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { doctor, stats } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us | Derma Glo",
  description:
    "Learn about Dr. G. Lasya Priya — dermatologist and cosmetologist in Rajahmundry offering skin, hair, nail, and aesthetic care.",
};

export default function AboutPage() {
  return (
    <div className="pt-36 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-medium tracking-widest text-sage uppercase">
          About the Doctor
        </p>
        <h1 className="font-display mt-2 max-w-3xl text-4xl font-medium text-charcoal md:text-5xl">
          {doctor.name}
        </h1>
        <p className="mt-3 text-lg text-sage">{doctor.title}</p>
        <p className="mt-4 max-w-2xl text-lg text-warm-gray">
          Dedicated to comprehensive skin, hair, and nail care in Rajahmundry —
          with advanced training in paediatric and cosmetic dermatology.
        </p>

        <div className="mt-14 overflow-hidden rounded-2xl border border-cream-dark bg-surface shadow-sm">
          <div className="flex flex-col lg:flex-row">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[320px] shrink-0 lg:mx-0 lg:max-w-none lg:w-80 xl:w-96">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 320px, 384px"
                priority
              />
            </div>

            <div className="flex flex-1 flex-col justify-center border-t border-cream-dark p-7 lg:border-t-0 lg:border-l lg:p-10 xl:p-12">
              <div className="space-y-1.5 text-sm text-warm-gray md:text-base">
                <p className="font-medium text-charcoal">
                  {doctor.qualifications.join(" · ")}
                </p>
                <p>{doctor.fellowship}</p>
                <p className="pt-1 text-charcoal">
                  {doctor.experienceYears}+ years of experience
                </p>
              </div>

              <div className="mt-8 space-y-4 text-sm leading-relaxed text-warm-gray md:text-base">
                {doctor.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 grid gap-6 border-t border-cream-dark pt-8 sm:grid-cols-2">
                <div>
                  <h2 className="text-xs font-semibold tracking-wider text-sage uppercase">
                    Languages spoken
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {doctor.languages.map((language) => (
                      <span
                        key={language}
                        className="rounded-full border border-cream-dark bg-cream px-3 py-1.5 text-xs font-medium text-charcoal"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-xs font-semibold tracking-wider text-sage uppercase">
                    Years of experience
                  </h2>
                  <p className="font-display mt-3 text-3xl font-medium text-charcoal">
                    {doctor.experienceYears}+
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-cream-dark pt-8">
                <h2 className="text-xs font-semibold tracking-wider text-sage uppercase">
                  Specialized & services provided
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {doctor.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="rounded-full border border-cream-dark bg-cream px-3 py-1.5 text-xs font-medium text-charcoal"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-medium text-sage md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-warm-gray">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 rounded-2xl bg-sage/10 p-10 text-center md:p-16">
          <h2 className="font-display text-2xl font-medium md:text-3xl">
            Ready to start your skin journey?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-warm-gray">
            Book a free skin analysis consultation and discover the right
            treatment plan for you.
          </p>
          <Link
            href="/appointment"
            className="mt-8 inline-flex rounded-full bg-sage-dark px-8 py-3.5 text-sm font-medium text-white transition hover:bg-charcoal"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
