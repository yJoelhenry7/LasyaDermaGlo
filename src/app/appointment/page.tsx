import type { Metadata } from "next";
import { AppointmentForm } from "@/components/sections/AppointmentForm";
import { pageKeywords } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Book Appointment",
  description:
    "Book a dermatology consultation at Derma Glo, Rajahmundry. Request an appointment for acne, laser, anti-aging, Botox, and skin treatments.",
  path: "/appointment",
  keywords: pageKeywords.appointment,
});

export default function AppointmentPage() {
  return (
    <div className="pt-24 md:pt-28">
      <AppointmentForm />
    </div>
  );
}
