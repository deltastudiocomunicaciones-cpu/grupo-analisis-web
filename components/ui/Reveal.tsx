"use client";

import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
}

export default function Reveal({
  children,
  delay = 0,
}: RevealProps) {
  return (
    <div className="overflow-hidden">

      <motion.div
        initial={{
          opacity: 0,
          y: 120,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
      >
        {children}
      </motion.div>

    </div>
  );
}