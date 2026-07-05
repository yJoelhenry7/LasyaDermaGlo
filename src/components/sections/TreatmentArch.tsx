"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { heroTreatments } from "@/data/site";

type TreatmentArchProps = {
  radius: number;
};

function usePetalSize() {
  const [size, setSize] = useState({ w: 54, h: 104 });

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      if (vw < 640) setSize({ w: 54, h: 104 });
      else if (vw < 1024) setSize({ w: 68, h: 118 });
      else setSize({ w: 78, h: 128 });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}

function TreatmentPetal({
  label,
  image,
  x,
  y,
  rotateDeg,
  scale,
  opacity,
  petalW,
  petalH,
  zIndex,
}: {
  label: string;
  image: string;
  x: number;
  y: number;
  rotateDeg: number;
  scale: number;
  opacity: number;
  petalW: number;
  petalH: number;
  zIndex: number;
}) {
  return (
    <div
      className="absolute will-change-transform"
      style={{
        left: x,
        top: y,
        width: petalW,
        height: petalH,
        transform: `translate(-50%, -100%) rotate(${rotateDeg}deg) scale(${scale})`,
        transformOrigin: "50% 100%",
        opacity,
        zIndex,
      }}
    >
      <div
        className="flex h-full w-full flex-col items-center justify-start gap-1.5 rounded-[999px] border border-white/45 px-2 pt-2.5 pb-3 shadow-[0_6px_28px_rgba(0,0,0,0.25)] backdrop-blur-md sm:gap-2 sm:px-2.5 sm:pt-3"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.32) 0%, rgba(130,105,85,0.55) 100%)",
        }}
      >
        <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-white/70 sm:h-9 sm:w-9">
          <Image
            src={image}
            alt={label}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <span
          className="flex flex-1 items-center justify-center text-[8px] leading-[1.15] font-medium text-white sm:text-[9px]"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

function TreatmentArch({ radius }: TreatmentArchProps) {
  const [rotation, setRotation] = useState(0);
  const { w: petalW, h: petalH } = usePetalSize();
  const rotationRad = (rotation * Math.PI) / 180;

  const orbitR = radius * 0.72;
  const containerH = orbitR + petalH + 48;
  const hubX = radius;
  const hubY = containerH - 24;

  useEffect(() => {
    let frame: number;
    let last = performance.now();

    const tick = (now: number) => {
      const delta = (now - last) / 1000;
      last = now;
      setRotation((r) => r + delta * 12);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className="pointer-events-none absolute bottom-14 left-1/2 z-10 -translate-x-1/2 overflow-visible"
      style={{ width: radius * 2, height: containerH }}
    >
      {heroTreatments.map((treatment, i) => {
        const angle =
          (i / heroTreatments.length) * Math.PI * 2 + rotationRad - Math.PI / 2;

        if (Math.sin(angle) > -0.04) return null;

        const x = hubX + Math.cos(angle) * orbitR;
        const y = hubY + Math.sin(angle) * orbitR;
        const depth = Math.abs(Math.sin(angle));
        const rotateDeg = (angle * 180) / Math.PI + 90;
        const scale = 0.9 + depth * 0.12;
        const opacity = 0.85 + depth * 0.15;

        return (
          <TreatmentPetal
            key={`${treatment.label}-${i}`}
            label={treatment.label}
            image={treatment.image}
            x={x}
            y={y}
            rotateDeg={rotateDeg}
            scale={scale}
            opacity={opacity}
            petalW={petalW}
            petalH={petalH}
            zIndex={Math.round(depth * 100) + 1}
          />
        );
      })}
    </div>
  );
}

export { TreatmentArch };
