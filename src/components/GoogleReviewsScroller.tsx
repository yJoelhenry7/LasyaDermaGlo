"use client";

import type { CSSProperties } from "react";
import { Star } from "lucide-react";
import type { GoogleReview } from "@/data/site";
import { CardLoadGate } from "@/components/CardLoadGate";
import { CompactReviewSkeleton } from "@/components/Skeleton";

function CompactReviewCard({ review }: { review: GoogleReview }) {
  return (
    <div className="h-[128px] shrink-0 rounded-xl border border-cream-dark bg-surface p-4">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-[#fbbc04] text-[#fbbc04]" />
        ))}
      </div>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-charcoal">
        {review.quote}
      </p>
      <div className="mt-3 flex items-center gap-2.5">
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-medium text-white"
          style={{ backgroundColor: review.avatarColor }}
        >
          {review.name.charAt(0).toUpperCase()}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-charcoal capitalize">
            {review.name.split(" ")[0]}
          </p>
          <p className="truncate text-xs text-warm-gray">{review.meta}</p>
        </div>
      </div>
    </div>
  );
}

export function GoogleReviewsScroller({ reviews }: { reviews: GoogleReview[] }) {
  const duration = reviews.length * 4;

  return (
    <div
      className="relative overflow-hidden"
      style={{ height: "calc(128px * 2 + 12px)" }}
    >
      <CardLoadGate
        delayMs={400}
        skeleton={
          <div className="flex flex-col gap-3">
            <CompactReviewSkeleton />
            <CompactReviewSkeleton />
          </div>
        }
      >
        <div
          className="animate-marquee-vertical flex flex-col gap-3"
          style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
        >
          {[...reviews, ...reviews].map((review, i) => (
            <CompactReviewCard key={`${review.id}-${i}`} review={review} />
          ))}
        </div>
      </CardLoadGate>
    </div>
  );
}
