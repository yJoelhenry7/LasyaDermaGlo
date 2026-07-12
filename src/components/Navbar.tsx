"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-sage/10 bg-cream/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={140}
            height={40}
            className="h-9 w-auto object-contain sm:h-10"
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

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteConfig.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message Derma Glo on WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sage/20 text-sage-dark transition hover:border-sage hover:bg-sage/10"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>
          <Link
            href="/appointment"
            className="rounded-full bg-sage-dark px-6 py-2.5 text-sm font-medium text-white transition hover:bg-charcoal"
          >
            Book Appointment
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href={siteConfig.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message Derma Glo on WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sage/20 text-sage-dark transition hover:border-sage hover:bg-sage/10"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-cream-dark bg-cream px-6 py-6 md:hidden">
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
