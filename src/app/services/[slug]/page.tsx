import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { getServiceBySlug, services } from "@/data/site";
import { antiAgingPage } from "@/data/antiAgingPage";
import { acnePage } from "@/data/acnePage";
import { laserHairRemovalPage } from "@/data/laserHairRemovalPage";
import { AntiAgingContent } from "@/components/AntiAgingContent";
import { AcneContent } from "@/components/AcneContent";
import { LaserHairRemovalContent } from "@/components/LaserHairRemovalContent";
import { createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Not Found" };

  if (slug === "anti-aging-solutions") {
    return createMetadata({
      title: "Anti Ageing Treatments",
      description:
        "Advanced anti-aging treatments at Derma Glo for fine lines, wrinkles, sagging, and sun damage — with chemical peels, lasers, and personalized dermatology care.",
      path: `/services/${service.slug}`,
    });
  }

  if (slug === "acne-skin-health") {
    return createMetadata({
      title: "Acne Scar Treatment",
      description:
        "Acne and acne scar treatment at Derma Glo — peels, microneedling, laser, and subcision with personalized dermatology care for clearer skin.",
      path: `/services/${service.slug}`,
    });
  }

  if (slug === "laser-treatments") {
    return createMetadata({
      title: "Laser Hair Removal Treatment",
      description:
        "Laser hair removal and reduction at Derma Glo with Nd-YAG and Diode lasers for face and body — sessions, benefits, and aftercare.",
      path: `/services/${service.slug}`,
    });
  }

  return createMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const isAntiAging = slug === "anti-aging-solutions";
  const isAcne = slug === "acne-skin-health";
  const isLaserHair = slug === "laser-treatments";
  const richPage = isAntiAging
    ? antiAgingPage
    : isAcne
      ? acnePage
      : isLaserHair
        ? laserHairRemovalPage
        : null;

  return (
    <article className="bg-cream pt-36 pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm text-warm-gray transition hover:text-sage"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to treatments
        </Link>

        <div className="mt-10 overflow-hidden rounded-2xl border border-cream-dark bg-surface">
          <div className="relative aspect-[21/9] w-full">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>

          <div className="p-7 md:p-10 lg:p-12">
            <p className="text-xs font-medium tracking-[0.2em] text-sage uppercase">
              {richPage ? richPage.eyebrow : "Treatment"}
            </p>
            <h1 className="font-display mt-3 text-3xl font-medium text-charcoal capitalize md:text-4xl lg:text-5xl">
              {richPage ? richPage.heroTitle : service.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-warm-gray md:text-lg">
              {richPage ? richPage.heroSubtitle : service.longDescription}
            </p>
            {richPage && (
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-warm-gray md:text-base">
                {richPage.intro}
              </p>
            )}

            {isAntiAging ? (
              <AntiAgingContent />
            ) : isAcne ? (
              <AcneContent />
            ) : isLaserHair ? (
              <LaserHairRemovalContent />
            ) : (
              <>
                <div className="mt-10 border-t border-cream-dark pt-10">
                  <h2 className="font-display text-xl font-medium text-charcoal md:text-2xl">
                    What we address
                  </h2>
                  <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-sm text-charcoal md:text-base"
                      >
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/appointment"
                    className="inline-flex justify-center rounded-full bg-sage-dark px-8 py-3.5 text-sm font-medium text-white transition hover:bg-charcoal"
                  >
                    Book a consultation
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex justify-center rounded-full border border-charcoal/25 px-8 py-3.5 text-sm font-medium text-charcoal transition hover:border-sage hover:text-sage"
                  >
                    Ask a question
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
