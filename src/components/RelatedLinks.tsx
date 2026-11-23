import Link from "next/link";
import { ArrowRight } from "lucide-react";

type RelatedLink = {
  title: string;
  description: string;
  href: string;
};

type RelatedLinksProps = {
  title?: string;
  links: RelatedLink[];
};

export function RelatedLinks({ title = "Related Pages", links }: RelatedLinksProps) {
  return (
    <section className="mt-16 border-t border-cream-dark pt-12">
      <h2 className="font-display text-2xl font-medium text-charcoal">
        {title}
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex flex-col gap-3 rounded-xl border border-cream-dark bg-cream/50 p-6 transition hover:border-sage hover:bg-cream hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-medium text-charcoal group-hover:text-sage">
                {link.title}
              </h3>
              <ArrowRight className="h-5 w-5 shrink-0 text-sage opacity-0 transition group-hover:opacity-100" />
            </div>
            <p className="text-sm leading-relaxed text-warm-gray">
              {link.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
