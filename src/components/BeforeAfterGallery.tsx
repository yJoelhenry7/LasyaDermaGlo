"use client";

import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export type BeforeAfterGalleryItem = {
  title: string;
  beforeSrc: string;
  afterSrc: string;
  duration?: string;
  treatment?: string;
};

export function BeforeAfterGallery({
  items,
  caption,
}: {
  items: BeforeAfterGalleryItem[];
  caption?: string;
}) {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <figure
            key={item.title}
            className="overflow-hidden rounded-2xl border border-cream-dark bg-cream/40"
          >
            <div className="relative aspect-[4/5] w-full">
              <BeforeAfterSlider
                beforeSrc={item.beforeSrc}
                afterSrc={item.afterSrc}
                beforeAlt={`Before ${item.title}`}
                afterAlt={`After ${item.title}`}
                title={item.title}
                duration={item.duration ?? "After sessions"}
                treatment={item.treatment ?? "Laser hair reduction"}
              />
            </div>
            <figcaption className="border-t border-cream-dark px-4 py-3 text-center text-sm font-medium text-charcoal">
              {item.title}
            </figcaption>
          </figure>
        ))}
      </div>
      {caption && (
        <p className="mt-4 text-center text-xs text-warm-gray md:text-sm">
          {caption}
        </p>
      )}
    </div>
  );
}
