"use client";

import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
}

export default function MagneticButton({
  children,
}: MagneticButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        y: -4,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 15,
      }}
      className="bg-white text-black px-8 py-4 rounded-full hover:bg-[#c96a1b] hover:text-white transition-colors duration-500"
    >
      {children}
    </motion.button>
  );
}