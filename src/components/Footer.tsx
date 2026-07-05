import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig, navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-sage-dark text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-dark/30 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <h2 className="font-display text-3xl font-medium md:text-4xl lg:text-5xl">
              Transform your skin with us
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Book a consultation with our dermatology specialists and take the
              first step toward lasting results.
            </p>
            <Link
              href="/appointment"
              className="mt-8 inline-flex items-center rounded-full bg-surface px-8 py-3.5 text-sm font-medium text-sage-dark transition hover:bg-cream"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="font-display text-2xl font-semibold">
                {siteConfig.name}
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Professional dermatology care focused on results, safety, and
                personalized treatment solutions.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
                  FDA Approved
                </span>
                <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
                  Board Certified
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
                Quick links
              </h3>
              <ul className="mt-4 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      {link.label === "Services" ? "Service" : link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/blog"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
                Patients
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/appointment"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    Appointment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
                Get in touch
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage-light" />
                  {siteConfig.address}
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-sage-light" />
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-sage-light" />
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/40">
            © 2026 {siteConfig.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
