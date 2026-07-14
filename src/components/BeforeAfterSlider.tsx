"use client";

import { useCallback, useRef, useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  title?: string;
  duration?: string;
  treatment?: string;
  showOverlay?: boolean;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before treatment",
  afterAlt = "After treatment",
  title = "Real results, real patients",
  duration = "12 Weeks",
  treatment = "Clinic treatment",
  showOverlay = true,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    containerRef.current?.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    containerRef.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-full min-h-[280px] cursor-ew-resize touch-none select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <ImageWithSkeleton
        src={afterSrc}
        alt={afterAlt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 33vw"
        draggable={false}
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <ImageWithSkeleton
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
          draggable={false}
        />
      </div>

      <span className="pointer-events-none absolute top-4 left-4 rounded-full border border-cream-dark bg-surface/90 px-3 py-1 text-xs font-medium text-charcoal backdrop-blur-sm">
        Before
      </span>
      <span className="pointer-events-none absolute top-4 right-4 rounded-full border border-cream-dark bg-surface/90 px-3 py-1 text-xs font-medium text-charcoal backdrop-blur-sm">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white/90 shadow-sm"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/85 shadow-md backdrop-blur-sm">
          <ChevronLeft className="h-3.5 w-3.5 text-charcoal" />
          <ChevronRight className="-ml-1 h-3.5 w-3.5 text-charcoal" />
        </div>
      </div>

      {showOverlay && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent p-5 pt-14">
          <p className="font-display text-base text-white md:text-lg">{title}</p>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-white/90 md:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              {treatment}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
