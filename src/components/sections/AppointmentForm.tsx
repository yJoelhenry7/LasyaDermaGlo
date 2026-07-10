"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail, CheckCircle, MapPin, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, therapyOptions } from "@/data/site";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-cream-dark bg-surface px-4 py-3 text-sm outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20";

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
          {/* Left column slides in from left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h2 className="font-display text-3xl font-medium text-charcoal md:text-4xl">
              Request an appointment
            </h2>
            <p className="mt-4 text-warm-gray">
              Fill out the form below, and we&apos;ll contact you shortly.
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="mt-10 flex items-start gap-3 rounded-2xl bg-sage/10 p-6"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
                  <div>
                    <p className="font-medium text-charcoal">Request received!</p>
                    <p className="mt-1 text-sm text-warm-gray">
                      We&apos;ll reply within 24–48 hours.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleSubmit}
                  className="mt-10 space-y-5"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className={inputClass}
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
                      className={inputClass}
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
                      className={inputClass}
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
                      className={inputClass}
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
                      className={`${inputClass} resize-none`}
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
                </motion.form>
              )}
            </AnimatePresence>

            <div className="mt-12 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-warm-gray">
                General inquiries
              </h3>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm text-charcoal transition hover:text-sage"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-charcoal transition hover:text-sage"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
            </div>
          </motion.div>

          {/* Map slides in from right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="relative hidden aspect-[4/5] overflow-hidden rounded-2xl border border-cream-dark bg-cream-dark lg:block"
          >
            <iframe
              title={`${siteConfig.name} location on Google Maps`}
              src={siteConfig.mapsEmbedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-4 bottom-4 left-4 flex items-center justify-between gap-3 rounded-xl bg-surface/95 px-4 py-3 text-sm shadow-lg backdrop-blur-sm transition hover:bg-surface"
            >
              <span className="flex min-w-0 items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                <span className="min-w-0">
                  <span className="block font-medium text-charcoal">
                    Find us on Google Maps
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-warm-gray">
                    {siteConfig.address}
                  </span>
                </span>
              </span>
              <ExternalLink className="h-4 w-4 shrink-0 text-warm-gray" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
