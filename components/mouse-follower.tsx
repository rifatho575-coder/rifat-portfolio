"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MouseFollower() {
  const [isTouch, setIsTouch] = useState(true);
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const x = useSpring(mx, { damping: 30, stiffness: 250, mass: 0.4 });
  const y = useSpring(my, { damping: 30, stiffness: 250, mass: 0.4 });

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);

    function onMove(e: MouseEvent) {
      mx.set(e.clientX);
      my.set(e.clientY);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  if (isTouch) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[60] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen"
      style={{
        x,
        y,
        background:
          "radial-gradient(circle, rgba(255,42,95,0.9) 0%, rgba(0,122,255,0.4) 60%, transparent 80%)",
        filter: "blur(2px)",
      }}
    />
  );
}
