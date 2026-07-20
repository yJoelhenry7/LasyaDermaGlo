import Link from "next/link";
import {
  Check,
  ClipboardList,
  HeartPulse,
  ListChecks,
  Sparkles,
} from "lucide-react";
import { antiAgingPage } from "@/data/antiAgingPage";

const journeyIcons = [ClipboardList, ListChecks, Sparkles, HeartPulse] as const;

export function AntiAgingContent() {
  const page = antiAgingPage;

  return (
    <div className="mt-12 space-y-14 md:mt-14 md:space-y-16">
      <section>
        <ul className="grid gap-3 sm:grid-cols-2">
          {page.highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-cream-dark bg-cream/60 px-4 py-3 text-sm text-charcoal md:text-base"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {page.sections.map((section) => (
        <section key={section.title} className="border-t border-cream-dark pt-10">
          <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
            {section.title}
          </h2>
          {section.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 64)}
              className="mt-4 text-sm leading-relaxed text-warm-gray md:text-base"
            >
              {paragraph}
            </p>
          ))}
          {section.subsections.length > 0 && (
            <div className="mt-8 space-y-8">
              {section.subsections.map((sub) => (
                <div key={sub.title}>
                  <h3 className="text-lg font-medium text-charcoal md:text-xl">
                    {sub.title}
                  </h3>
                  {sub.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 64)}
                      className="mt-3 text-sm leading-relaxed text-warm-gray md:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          )}
        </section>
      ))}

      <section className="border-t border-cream-dark pt-10">
        <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
          {page.lifestyle.title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-warm-gray md:text-base">
          {page.lifestyle.intro}
        </p>
        <div className="mt-8 space-y-8">
          {page.lifestyle.groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-medium text-charcoal md:text-xl">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item.slice(0, 48)}
                    className="flex items-start gap-3 text-sm text-warm-gray md:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-cream-dark pt-10">
        <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
          Your treatment journey
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {page.journey.map((step, index) => {
            const Icon = journeyIcons[index] ?? Sparkles;
            return (
              <div
                key={step.title}
                className="rounded-2xl border border-cream-dark bg-cream/50 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage/10 text-sage">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium tracking-wider text-sage uppercase">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-2 text-lg font-medium text-charcoal">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-cream-dark pt-10">
        <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
          Why choose Derma Glo for anti-aging treatment?
        </h2>
        <div className="mt-8 space-y-6">
          {page.whyChoose.map((item) => (
            <div key={item.title}>
              <h3 className="text-lg font-medium text-charcoal md:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-gray md:text-base">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-cream-dark pt-10">
        <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
          FAQs
        </h2>
        <div className="mt-8 space-y-4">
          {page.faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-cream-dark bg-surface px-5 py-4"
            >
              <summary className="cursor-pointer list-none text-sm font-medium text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 md:text-base">
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span className="text-sage transition group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-warm-gray md:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <div className="flex flex-col gap-4 border-t border-cream-dark pt-10 sm:flex-row">
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
    </div>
  );
}
