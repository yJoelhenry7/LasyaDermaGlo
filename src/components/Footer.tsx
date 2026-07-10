import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig, navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* Skincare background across the full footer */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?w=1800&q=80"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-sage-dark/88" />
        <div className="absolute inset-0 bg-gradient-to-b from-sage-dark/40 via-transparent to-sage-dark/70" />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <h2 className="font-display text-3xl font-medium md:text-4xl lg:text-5xl">
              Transform your skin with us
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/75">
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

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="inline-block">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-white/65">
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
