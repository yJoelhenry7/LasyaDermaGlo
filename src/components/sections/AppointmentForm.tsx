"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { Phone, Mail, CheckCircle } from "lucide-react";
import { siteConfig, therapyOptions } from "@/data/site";

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="appointment" className="bg-cream-dark/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-medium text-charcoal md:text-4xl">
              Request an appointment
            </h2>
            <p className="mt-4 text-warm-gray">
              Fill out the form below, and we&apos;ll contact you shortly.
            </p>

            {submitted ? (
              <div className="mt-10 flex items-start gap-3 rounded-2xl bg-sage/10 p-6">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
                <div>
                  <p className="font-medium text-charcoal">Request received!</p>
                  <p className="mt-1 text-sm text-warm-gray">
                    We&apos;ll reply within 24–48 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1.5 w-full rounded-xl border border-cream-dark bg-surface px-4 py-3 text-sm outline-none focus:border-sage"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1.5 w-full rounded-xl border border-cream-dark bg-surface px-4 py-3 text-sm outline-none focus:border-sage"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="mt-1.5 w-full rounded-xl border border-cream-dark bg-surface px-4 py-3 text-sm outline-none focus:border-sage"
                  />
                </div>
                <div>
                  <label htmlFor="therapy" className="block text-sm font-medium">
                    Therapy *
                  </label>
                  <select
                    id="therapy"
                    name="therapy"
                    required
                    defaultValue=""
                    className="mt-1.5 w-full rounded-xl border border-cream-dark bg-surface px-4 py-3 text-sm outline-none focus:border-sage"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    {therapyOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium">
                    How we can help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1.5 w-full resize-none rounded-xl border border-cream-dark bg-surface px-4 py-3 text-sm outline-none focus:border-sage"
                  />
                </div>
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-cream-dark text-sage"
                  />
                  <span className="text-sm text-warm-gray">
                    I agree to allow the clinic to contact me regarding my
                    appointment.
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-full rounded-full bg-sage-dark py-3.5 text-sm font-medium text-white transition hover:bg-charcoal sm:w-auto sm:px-10"
                >
                  Book an appointment
                </button>
                <p className="text-xs text-warm-gray">
                  We&apos;ll reply within 24–48h.
                </p>
              </form>
            )}

            <div className="mt-12 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-warm-gray">
                General inquiries
              </h3>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm text-charcoal hover:text-sage"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-charcoal hover:text-sage"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="relative hidden aspect-[4/5] overflow-hidden rounded-2xl lg:block">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
              alt="Appointment"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
