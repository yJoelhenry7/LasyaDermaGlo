import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Derma Glo",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-display text-4xl font-medium">Privacy Policy</h1>
        <p className="mt-4 text-sm text-warm-gray">Last updated: March 2026</p>

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-warm-gray">
          <p>
            Derma Glo is committed to protecting your privacy. This policy
            explains how we collect, use, and safeguard your personal information
            when you visit our website or use our services.
          </p>
          <h2 className="text-base font-medium text-charcoal">
            Information We Collect
          </h2>
          <p>
            We may collect personal information you provide through appointment
            forms, contact inquiries, and consultations, including your name,
            email, phone number, and health-related information relevant to your
            treatment.
          </p>
          <h2 className="text-base font-medium text-charcoal">How We Use It</h2>
          <p>
            Your information is used to schedule appointments, provide medical
            care, respond to inquiries, and improve our services. We do not sell
            your personal data to third parties.
          </p>
          <h2 className="text-base font-medium text-charcoal">Contact</h2>
          <p>
            For privacy-related questions, contact us at{" "}
            <a href="mailto:formoredermaglo@gmail.com" className="text-sage">
              formoredermaglo@gmail.com
            </a>
            .
          </p>
        </div>

        <Link
          href="/"
          className="mt-10 inline-block text-sm text-sage hover:text-sage-dark"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
