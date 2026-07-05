import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { clinicValues, stats } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us | Derma Glo",
  description:
    "Learn about Dr. Lasya and our clinic's commitment to science-backed dermatology and personalized aesthetic care.",
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

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
              alt="Dr. Lasya"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-medium">Dr. Lasya</h2>
            <p className="mt-2 text-sage">Dermatologist & Aesthetic Specialist</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-warm-gray">
              <Sparkles className="h-4 w-4 text-gold" />
              Excellence in skin care
            </div>
            <p className="mt-6 leading-relaxed text-warm-gray">
              With over a decade of experience in medical dermatology and
              aesthetic medicine, Dr. Lasya leads a team dedicated to delivering
              safe, effective, and personalized treatments for every patient.
            </p>
            <ul className="mt-8 space-y-4">
              {clinicValues.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
                  <span className="text-sm">{value}</span>
                </li>
              ))}
            </ul>
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
