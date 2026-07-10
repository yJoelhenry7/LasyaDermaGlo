import { Hero } from "@/components/sections/Hero";
import { ExpertCare } from "@/components/sections/ExpertCare";
import { Services } from "@/components/sections/Services";
import { AboutDoctor } from "@/components/sections/AboutDoctor";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { MedicalDermatology } from "@/components/sections/MedicalDermatology";
import { Testimonials } from "@/components/sections/Testimonials";
import { AppointmentForm } from "@/components/sections/AppointmentForm";
import { FAQ } from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExpertCare />
      <Services />
      <AboutDoctor />
      <WhyChooseUs />
      <MedicalDermatology />
      <Testimonials />
      <AppointmentForm />
      <FAQ />
    </>
  );
}
