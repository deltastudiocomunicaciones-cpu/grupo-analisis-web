"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 260, damping: 28 });
  const smoothY = useSpring(y, { stiffness: 260, damping: 28 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setVisible(true);
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className={`
        pointer-events-none
        fixed
        top-0
        left-0
        z-[100000]
        h-6
        w-6
        rounded-full
        border
        border-[#c96a1b]/70
        mix-blend-difference
        transition-opacity
        duration-300
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    />
  );
}