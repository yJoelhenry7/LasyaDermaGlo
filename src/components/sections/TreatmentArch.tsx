"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { heroTreatments } from "@/data/site";

// Repeat treatments so the wheel feels continuous like the Framer reference
const carouselItems = [...heroTreatments, ...heroTreatments];

interface Dims {
  orbitR: number;
  petalW: number;
  petalH: number;
  domeW: number;
  domeH: number;
}

function getDims(vw: number): Dims {
  if (vw < 480)
    return { orbitR: 88, petalW: 26, petalH: 84, domeW: 190, domeH: 95 };
  if (vw < 768)
    return { orbitR: 118, petalW: 30, petalH: 98, domeW: 230, domeH: 115 };
  if (vw < 1024)
    return { orbitR: 150, petalW: 34, petalH: 110, domeW: 280, domeH: 140 };
  return { orbitR: 185, petalW: 36, petalH: 122, domeW: 320, domeH: 160 };
}

function TreatmentPetal({
  label,
  image,
  x,
  y,
  stemAngleDeg,
  petalW,
  petalH,
}: {
  label: string;
  image: string;
  x: number;
  y: number;
  stemAngleDeg: number;
  petalW: number;
  petalH: number;
}) {
  const imgSize = Math.round(petalW * 0.62);

  return (
    <div
      className="absolute will-change-transform"
      style={{
        left: x,
        top: y,
        width: petalW,
        height: petalH,
        transform: `translate(-50%, -100%) rotate(${stemAngleDeg}deg)`,
        transformOrigin: "50% 100%",
      }}
    >
      <div
        className="flex h-full w-full flex-col items-center rounded-[999px]"
        style={{
          background:
            "linear-gradient(175deg, rgba(240,220,200,0.45) 0%, rgba(190,160,130,0.50) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.35)",
          boxShadow: "0 4px 20px rgba(120,90,60,0.20)",
          paddingTop: Math.round(petalW * 0.1),
          paddingBottom: Math.round(petalW * 0.08),
        }}
      >
        <div
          className="relative shrink-0 overflow-hidden rounded-full"
          style={{
            width: imgSize,
            height: imgSize,
            border: "1.5px solid rgba(255,255,255,0.55)",
          }}
        >
          <Image
            src={image}
            alt={label}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <span
          className="flex flex-1 items-center justify-center font-medium text-white drop-shadow-sm"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            fontSize: Math.max(7, Math.round(petalW * 0.16)),
            lineHeight: 1.2,
            letterSpacing: "0.01em",
            padding: "2px 0",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

export function TreatmentArch() {
  const [rotation, setRotation] = useState(0);
  const [dims, setDims] = useState<Dims>({
    orbitR: 185,
    petalW: 36,
    petalH: 122,
    domeW: 320,
    domeH: 160,
  });
  const [containerW, setContainerW] = useState(1000);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const w = containerRef.current?.offsetWidth ?? window.innerWidth;
      setContainerW(w);
      setDims(getDims(w));
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    let frame: number;
    let last = performance.now();
    const tick = (now: number) => {
      const delta = (now - last) / 1000;
      last = now;
      setRotation((r) => (r + delta * 3) % 360);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const { orbitR, petalW, petalH, domeW, domeH } = dims;
  const hubX = containerW / 2;

  // Pivot at the bottom centre of the hump — petals revolve around its base
  const totalH = domeH + orbitR + petalH + 8;
  const hubY = totalH;

  return (
    <div
      ref={containerRef}
      className="absolute inset-x-0 z-20 w-full"
      style={{ bottom: 0, height: totalH }}
    >
      {/* Petals — revolve around the hump peak like a flower */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0"
        style={{ height: totalH }}
      >
        {carouselItems.map((treatment, i) => {
          const baseDeg = (i / carouselItems.length) * 360;
          const rotatedDeg = baseDeg + rotation;
          const angleRad = (rotatedDeg * Math.PI) / 180;

          if (Math.sin(angleRad) > 0.02) return null;

          const x = hubX + Math.cos(angleRad) * orbitR;
          const y = hubY + Math.sin(angleRad) * orbitR;
          const stemAngleDeg = rotatedDeg + 90;

          return (
            <TreatmentPetal
              key={`${treatment.label}-${i}`}
              label={treatment.label}
              image={treatment.image}
              x={x}
              y={y}
              stemAngleDeg={stemAngleDeg}
              petalW={petalW}
              petalH={petalH}
            />
          );
        })}
      </div>

      {/* Steep U-shaped hump — exact semicircle at bottom center */}
      <div
        className="absolute bottom-0 left-1/2 z-30 -translate-x-1/2"
        style={{ width: domeW, height: domeH }}
      >
        <svg
          viewBox={`0 0 ${domeW} ${domeH}`}
          preserveAspectRatio="none"
          className="h-full w-full"
          aria-hidden
        >
          <path
            d={`M 0 ${domeH} A ${domeW / 2} ${domeH} 0 0 1 ${domeW} ${domeH} Z`}
            fill="#f0f9f9"
          />
        </svg>

        <Link
          href="/services"
          className="pointer-events-auto absolute left-1/2 top-4 flex -translate-x-1/2 flex-col items-center gap-1.5 transition-opacity hover:opacity-70 sm:top-5"
        >
          <Sparkles className="h-5 w-5 text-sage/70 sm:h-6 sm:w-6" />
          <span className="whitespace-nowrap text-xs font-medium tracking-wide text-charcoal/70 sm:text-sm">
            Explore our treatments
          </span>
        </Link>
      </div>
    </div>
  );
}
