import { type HTMLAttributes } from "react";

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/** Base shimmer block */
export function Skeleton({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden
      className={cx(
        "animate-pulse rounded-lg bg-cream-dark/90",
        className
      )}
      {...props}
    />
  );
}

/** Full treatment/service list card placeholder */
export function TreatmentCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-cream-dark bg-surface p-6 md:p-8 lg:p-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
        <div className="flex items-center gap-5 md:gap-8">
          <Skeleton className="h-12 w-12 shrink-0 rounded-full md:h-14 md:w-14" />
          <div className="space-y-3">
            <Skeleton className="h-7 w-48 md:h-9 md:w-64" />
            <Skeleton className="h-7 w-32 md:hidden" />
          </div>
        </div>
        <div className="space-y-3 md:max-w-sm lg:max-w-md">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[70%]" />
          <Skeleton className="mt-4 h-9 w-28 rounded-full" />
        </div>
      </div>
    </div>
  );
}

/** Vertical gallery / media card (4:5) */
export function GalleryCardSkeleton({ className = "" }: { className?: string }) {
  return (
    <Skeleton
      className={cx("aspect-[4/5] w-full rounded-2xl", className)}
    />
  );
}

/** Square image tile */
export function ImageCardSkeleton({ className = "" }: { className?: string }) {
  return <Skeleton className={cx("aspect-square w-full rounded-2xl", className)} />;
}

/** Google-style review card placeholder */
export function ReviewCardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={cx(
        "rounded-2xl border border-[#e8eaed] bg-white p-5 shadow-sm",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
        <div className="min-w-0 flex-1 space-y-2">
          <Skeleton className="h-4 w-36" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <Skeleton className="mt-3 h-3.5 w-28" />
      <div className="mt-3 space-y-2">
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3.5 w-[95%]" />
        <Skeleton className="h-3.5 w-[80%]" />
      </div>
      <div className="mt-4 flex gap-6">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-14" />
      </div>
    </div>
  );
}

/** Compact review row (bento scroller) */
export function CompactReviewSkeleton() {
  return (
    <div className="h-[128px] shrink-0 rounded-xl border border-cream-dark bg-surface p-4">
      <Skeleton className="h-3 w-20" />
      <div className="mt-2 space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-[85%]" />
      </div>
      <div className="mt-3 flex items-center gap-2.5">
        <Skeleton className="h-8 w-8 rounded-full" />
        <div className="space-y-1.5">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-2.5 w-14" />
        </div>
      </div>
    </div>
  );
}

/** Doctor / profile card */
export function ProfileCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-cream-dark bg-surface shadow-sm">
      <div className="flex flex-col sm:flex-row">
        <Skeleton className="aspect-[3/4] w-full max-w-[240px] rounded-none sm:w-52 md:w-60" />
        <div className="flex flex-1 flex-col justify-center p-7 sm:p-8 md:p-10">
          <Skeleton className="h-8 w-56" />
          <Skeleton className="mt-3 h-4 w-40" />
          <Skeleton className="mt-5 h-4 w-64" />
          <Skeleton className="mt-2 h-4 w-48" />
          <div className="mt-5 space-y-2">
            <Skeleton className="h-3.5 w-full" />
            <Skeleton className="h-3.5 w-[90%]" />
            <Skeleton className="h-3.5 w-[75%]" />
          </div>
          <Skeleton className="mt-6 h-4 w-32" />
        </div>
      </div>
    </div>
  );
}

/** Generic bento tile */
export function BentoCardSkeleton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={cx(
        "overflow-hidden rounded-2xl border border-cream-dark bg-surface p-5",
        className
      )}
    >
      <Skeleton className="h-5 w-1/2" />
      <Skeleton className="mt-3 h-3.5 w-3/4" />
      <Skeleton className="mt-6 h-24 w-full rounded-xl" />
    </div>
  );
}
