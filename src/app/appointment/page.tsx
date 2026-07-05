import type { Metadata } from "next";
import { AppointmentForm } from "@/components/sections/AppointmentForm";

export const metadata: Metadata = {
  title: "Book Appointment | Derma Glo",
  description: "Request an appointment with our dermatology specialists.",
};

export default function AppointmentPage() {
  return <AppointmentForm />;
}
