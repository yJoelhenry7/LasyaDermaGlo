import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { siteConfig } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Contact | Derma Glo",
  description: "Get in touch with Derma Glo for appointments and inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-medium tracking-widest text-sage uppercase">
          Contact
        </p>
        <h1 className="font-display mt-2 text-4xl font-medium text-charcoal md:text-5xl">
          Get in touch
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-warm-gray">
          Have questions about our treatments? We&apos;re here to help. Reach out
          and our team will respond within 24–48 hours.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-surface p-8">
            <MapPin className="h-6 w-6 text-sage" />
            <h2 className="mt-4 font-medium">Visit us</h2>
            <p className="mt-2 text-sm leading-relaxed text-warm-gray">
              {siteConfig.address}
            </p>
          </div>
          <div className="rounded-2xl bg-surface p-8">
            <Phone className="h-6 w-6 text-sage" />
            <h2 className="mt-4 font-medium">Call us</h2>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="mt-2 block text-sm text-warm-gray hover:text-sage"
            >
              {siteConfig.phone}
            </a>
          </div>
          <div className="rounded-2xl bg-surface p-8">
            <Mail className="h-6 w-6 text-sage" />
            <h2 className="mt-4 font-medium">Email us</h2>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 block text-sm text-warm-gray hover:text-sage"
            >
              {siteConfig.email}
            </a>
          </div>
          <div className="rounded-2xl bg-surface p-8">
            <Instagram className="h-6 w-6 text-sage" />
            <h2 className="mt-4 font-medium">Instagram</h2>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm text-warm-gray hover:text-sage"
            >
              @dermaglo.clinic_rjy
            </a>
          </div>
          <div className="rounded-2xl bg-surface p-8">
            <WhatsAppIcon className="h-6 w-6 text-sage" />
            <h2 className="mt-4 font-medium">WhatsApp</h2>
            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm text-warm-gray hover:text-sage"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-3 rounded-2xl bg-sage/10 p-6">
          <Clock className="h-5 w-5 text-sage" />
          <p className="text-sm font-medium">
            24/7 consultation support available
          </p>
        </div>

        <div className="mt-16 aspect-[21/9] overflow-hidden rounded-2xl bg-cream-dark">
          <iframe
            title="Derma Glo location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.0!2d81.78!3d17.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDAwJzAwLjAiTiA4McKwNDYnNDguMCJF!5e0!3m2!1sen!2sin!4v1"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
