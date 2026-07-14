"use client";

import { siteConfig } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.socials.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Need help? Chat with us on WhatsApp"
      className="group fixed right-4 bottom-5 z-40 flex max-w-[calc(100vw-2rem)] items-center gap-3 sm:right-6 sm:bottom-8"
    >
      <span className="pointer-events-none origin-right rounded-full bg-white px-3.5 py-2 text-left text-xs font-medium whitespace-nowrap text-charcoal shadow-lg transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:scale-100 group-focus-visible:opacity-100 translate-x-2 scale-95 opacity-0 sm:px-4 sm:text-sm">
        Need Help? Chat with us
      </span>
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 group-hover:scale-105 group-hover:bg-[#20bd5a]">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </a>
  );
}
