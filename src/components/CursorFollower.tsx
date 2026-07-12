"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE =
  'a, button, [role="button"], summary, [data-cursor="hover"]';

export function CursorFollower() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { stiffness: 900, damping: 40, mass: 0.2 });
  const dotY = useSpring(mouseY, { stiffness: 900, damping: 40, mass: 0.2 });
  const ringX = useSpring(mouseX, { stiffness: 280, damping: 28, mass: 0.4 });
  const ringY = useSpring(mouseY, { stiffness: 280, damping: 28, mass: 0.4 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!finePointer || reduceMotion) return;

    setEnabled(true);
    document.documentElement.classList.add("has-cursor-follower");

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      setHovering(Boolean(target?.closest(INTERACTIVE)));
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("has-cursor-follower");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] hidden md:block"
      aria-hidden
    >
      <motion.div
        className="absolute top-0 left-0 rounded-full bg-sage-dark"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 0 : pressed ? 6 : 8,
          height: hovering ? 0 : pressed ? 6 : 8,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />

      <motion.div
        className="absolute top-0 left-0 rounded-full border-2 border-sage"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 64 : pressed ? 26 : 36,
          height: hovering ? 64 : pressed ? 26 : 36,
          opacity: visible ? 1 : 0,
          backgroundColor: hovering
            ? "rgba(18, 131, 134, 0.12)"
            : "rgba(18, 131, 134, 0)",
          borderColor: hovering ? "#128386" : "rgba(13, 95, 98, 0.45)",
          scale: pressed && hovering ? 0.88 : 1,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
      />
    </div>
  );
}
