"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroTreatments } from "@/data/site";

// 8 treatments × 2 = continuous wheel with clear gaps between petals
const wheelItems = [...heroTreatments.slice(0, 8), ...heroTreatments.slice(0, 8)];

interface Dims {
  orbitR: number;
  petalW: number;
  petalH: number;
  domeW: number;
  domeH: number;
}

function getDims(vw: number): Dims {
  // orbitR ≈ distance from hub to crown + a few px — petals hug the hump
  if (vw < 480)
    return { orbitR: 98, petalW: 32, petalH: 100, domeW: 230, domeH: 92 };
  if (vw < 768)
    return { orbitR: 114, petalW: 38, petalH: 118, domeW: 290, domeH: 108 };
  if (vw < 1024)
    return { orbitR: 130, petalW: 44, petalH: 134, domeW: 360, domeH: 124 };
  return { orbitR: 144, petalW: 48, petalH: 150, domeW: 420, domeH: 138 };
}

function SandHeap() {
  const d = [
    "M 0 200",
    "C 22 198, 42 160, 68 118",
    "C 95 78, 115 32, 155 18",
    "C 175 10, 225 10, 245 18",
    "C 285 32, 305 78, 332 118",
    "C 358 160, 378 198, 400 200",
    "Z",
  ].join(" ");

  return (
    <svg
      viewBox="0 0 400 200"
      preserveAspectRatio="none"
      className="h-full w-full"
      aria-hidden
    >
      <path d={d} fill="#f0f9f9" />
    </svg>
  );
}

function FlowerIcon({ className }: { className?: string }) {
  const petals = [0, 60, 120, 180, 240, 300];
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      {petals.map((deg) => (
        <ellipse
          key={deg}
          cx="12"
          cy="6.2"
          rx="2.35"
          ry="3.8"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function TreatmentPetal({
  label,
  image,
  angleDeg,
  orbitR,
  petalW,
  petalH,
}: {
  label: string;
  image: string;
  angleDeg: number;
  orbitR: number;
  petalW: number;
  petalH: number;
}) {
  const imgSize = Math.round(petalW * 0.68);

  return (
    <div
      className="absolute top-0 left-0"
      style={{
        width: petalW,
        height: petalH,
        // Static placement on the wheel — parent rotation drives motion
        transform: `rotate(${angleDeg}deg) translate3d(-50%, -${orbitR + petalH}px, 0)`,
        transformOrigin: "0 0",
        backfaceVisibility: "hidden",
      }}
    >
      <div
        className="flex h-full w-full flex-col items-center rounded-[999px]"
        style={{
          background:
            "linear-gradient(175deg, rgba(240,220,200,0.55) 0%, rgba(190,160,130,0.62) 100%)",
          border: "1px solid rgba(255,255,255,0.4)",
          boxShadow: "0 4px 18px rgba(120,90,60,0.18)",
          paddingTop: Math.round(petalW * 0.12),
          paddingBottom: Math.round(petalW * 0.1),
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
            fontSize: Math.max(8, Math.round(petalW * 0.17)),
            lineHeight: 1.2,
            letterSpacing: "0.01em",
            padding: "3px 0",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

const DEG_PER_SEC = 3;

export function TreatmentArch() {
  const [dims, setDims] = useState<Dims>({
    orbitR: 144,
    petalW: 48,
    petalH: 150,
    domeW: 420,
    domeH: 138,
  });
  const [containerW, setContainerW] = useState(1000);
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const rafRef = useRef(0);

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

  // Animate via direct DOM transform — no React re-renders per frame
  useEffect(() => {
    let last = performance.now();

    const tick = (now: number) => {
      const delta = Math.min((now - last) / 1000, 0.05); // clamp to avoid jumps
      last = now;
      angleRef.current = (angleRef.current + delta * DEG_PER_SEC) % 360;

      if (wheelRef.current) {
        wheelRef.current.style.transform = `rotate(${angleRef.current}deg)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const { orbitR, petalW, petalH, domeW, domeH } = dims;
  const hubX = containerW / 2;
  const totalH = domeH + orbitR + petalH + 8;
  // Hub near hump mid so petal bases skim the crown with minimal gap
  const hubY = totalH - domeH * 0.22;
  // Clip so only the upper semicircle (around the hump) is visible
  const clipTop = hubY - orbitR - petalH - 4;
  const clipHeight = orbitR + petalH + domeH * 0.35;

  return (
    <div
      ref={containerRef}
      className="absolute inset-x-0 z-20 w-full"
      style={{ bottom: 0, height: totalH }}
    >
      {/* Upper-arc clip — hides lower half without mount/unmount flicker */}
      <div
        className="pointer-events-none absolute inset-x-0 overflow-hidden"
        style={{ top: clipTop, height: clipHeight }}
      >
        <div
          ref={wheelRef}
          className="absolute will-change-transform"
          style={{
            left: hubX,
            top: hubY - clipTop,
            width: 0,
            height: 0,
            transform: "rotate(0deg)",
            backfaceVisibility: "hidden",
          }}
        >
          {wheelItems.map((treatment, i) => (
            <TreatmentPetal
              key={`${treatment.label}-${i}`}
              label={treatment.label}
              image={treatment.image}
              angleDeg={(i / wheelItems.length) * 360}
              orbitR={orbitR}
              petalW={petalW}
              petalH={petalH}
            />
          ))}
        </div>
      </div>

      {/* Sand-heap hump */}
      <div
        className="absolute bottom-0 left-1/2 z-30 -translate-x-1/2"
        style={{ width: domeW, height: domeH }}
      >
        <SandHeap />

        <div className="pointer-events-none absolute inset-x-[18%] top-[16%] bottom-[36%] flex items-center justify-center">
          <Link
            href="/services"
            className="pointer-events-auto flex flex-col items-center gap-1 text-center transition-opacity hover:opacity-70"
          >
            <FlowerIcon className="h-4 w-4 text-charcoal/75 sm:h-5 sm:w-5" />
            <span className="text-[10px] leading-snug font-medium tracking-wide text-charcoal/75 sm:text-xs">
              Explore our treatments
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
