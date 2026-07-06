import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clinicValues, doctor, stats } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us | Derma Glo",
  description:
    "Learn about Dr. G. Lasya Priya and our clinic's commitment to science-backed dermatology and personalized aesthetic care.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-medium tracking-widest text-sage uppercase">
          About Us
        </p>
        <h1 className="font-display mt-2 max-w-3xl text-4xl font-medium text-charcoal md:text-5xl">
          A clinic committed to your skin health
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-warm-gray">
          We believe good skin starts with understanding. Every treatment begins
          with a detailed consultation, a long-term plan, and science-backed care.
        </p>

        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-cream-dark bg-surface shadow-sm">
          <div className="flex flex-col md:flex-row">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[260px] shrink-0 md:mx-0 md:max-w-none md:w-60 lg:w-64">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 260px, 256px"
                priority
              />
            </div>
            <div className="flex flex-1 flex-col justify-center border-t border-cream-dark p-7 md:border-t-0 md:border-l md:p-9 lg:p-10">
              <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                {doctor.name}
              </h2>
              <p className="mt-2 text-base text-sage">{doctor.title}</p>

              <div className="mt-5 space-y-1.5 text-sm text-warm-gray md:text-base">
                <p className="font-medium text-charcoal">
                  {doctor.qualifications.join(" · ")}
                </p>
                <p>{doctor.fellowship}</p>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-warm-gray md:text-base">
                {doctor.bio}
              </p>

              <ul className="mt-7 space-y-3 border-t border-cream-dark pt-7">
                {clinicValues.map((value) => (
                  <li
                    key={value}
                    className="flex items-start gap-3 text-sm text-charcoal md:text-base"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sage" />
                    {value}
                  </li>
                ))}
              </ul>
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
