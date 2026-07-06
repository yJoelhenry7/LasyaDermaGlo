import { MoreVertical, Share2, ThumbsUp } from "lucide-react";
import type { GoogleReview } from "@/data/site";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-3.5 w-3.5"
          viewBox="0 0 24 24"
          fill={i < rating ? "#fbbc04" : "#dadce0"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function getInitial(name: string) {
  return name.trim().charAt(0).toUpperCase();
}

export function GoogleReviewCard({
  review,
  standalone = false,
}: {
  review: GoogleReview;
  standalone?: boolean;
}) {
  return (
    <article
      className={`px-5 py-5 ${standalone ? "min-h-[220px]" : "border-b border-[#e8eaed] last:border-b-0"}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-medium text-white"
            style={{ backgroundColor: review.avatarColor }}
          >
            {getInitial(review.name)}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-[#202124]">
              {review.name}
            </p>
            <p className="text-xs text-[#70757a]">{review.meta}</p>
          </div>
        </div>
        <MoreVertical
          className="h-5 w-5 shrink-0 text-[#70757a]"
          strokeWidth={1.75}
          aria-hidden
        />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <StarRating rating={review.rating} />
        <span className="text-xs text-[#70757a]">{review.timeAgo}</span>
        {review.isNew && (
          <span className="rounded border border-[#dadce0] px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-[#70757a] uppercase">
            New
          </span>
        )}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-[#202124]">{review.quote}</p>

      {review.translated && (
        <p className="mt-2 text-xs text-[#70757a]">
          Translated by Google ·{" "}
          <span className="text-sage">See original (Telugu)</span>
        </p>
      )}

      <div className="mt-4 flex items-center gap-6">
        <span className="flex items-center gap-2 text-sm text-[#70757a]">
          <ThumbsUp className="h-4 w-4" strokeWidth={1.75} />
          Like
        </span>
        <span className="flex items-center gap-2 text-sm text-[#70757a]">
          <Share2 className="h-4 w-4" strokeWidth={1.75} />
          Share
        </span>
      </div>
    </article>
  );
}
