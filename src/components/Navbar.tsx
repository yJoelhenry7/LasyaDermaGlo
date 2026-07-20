"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Menu, Phone, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

  const marqueeItems = [
    {
      icon: <Instagram className="h-3.5 w-3.5" />,
      text: "@dermaglo.clinic_rjy",
      href: siteConfig.socials.instagram,
    },
    {
      icon: <Phone className="h-3.5 w-3.5" />,
      text: siteConfig.phone,
      href: phoneHref,
    },
    {
      text: "Dr. Lasya Priya's Derma Glo",
    },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      {/* Scrolling Marquee */}
      <div className="relative overflow-hidden bg-sage-dark text-white">
        <div className="flex animate-marquee whitespace-nowrap py-2">
          {/* Repeat items 3 times for seamless loop */}
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center">
              {marqueeItems.map((item, index) => (
                <div key={`${setIndex}-${index}`} className="inline-flex items-center px-8">
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-sm font-medium transition hover:text-sage-light"
                    >
                      {item.icon}
                      <span>{item.text}</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-medium">
                      {item.icon}
                      <span>{item.text}</span>
                    </span>
                  )}
                  <span className="mx-8 text-white/30">•</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-sage/10 bg-cream/85 backdrop-blur-md">
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
          aria-label="Primary"
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              width={40}
              height={10}
              className="h-7 w-auto object-contain"
              priority
            />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-warm-gray transition hover:text-charcoal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-sage-dark transition hover:text-charcoal"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Derma Glo on WhatsApp"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-sage/20 text-sage-dark transition hover:border-sage hover:bg-sage/10"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <Link
              href="/appointment"
              className="rounded-full bg-sage-dark px-4 py-1.5 text-sm font-medium text-white transition hover:bg-charcoal"
            >
              Book Appointment
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href={phoneHref}
              aria-label={`Call ${siteConfig.phone}`}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-sage/20 text-sage-dark transition hover:border-sage hover:bg-sage/10"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Derma Glo on WhatsApp"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-sage/20 text-sage-dark transition hover:border-sage hover:bg-sage/10"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-cream-dark bg-cream px-6 py-6 md:hidden"
        >
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-sm text-warm-gray"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-sage-dark"
                onClick={() => setOpen(false)}
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <Link
                href="/appointment"
                className="inline-block rounded-full bg-sage-dark px-6 py-2.5 text-sm font-medium text-white"
                onClick={() => setOpen(false)}
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
