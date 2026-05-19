"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface PremiumButtonProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "outline" | "gold";
  className?: string;
}

export default function PremiumButton({
  children,
  variant = "light",
  className = "",
}: PremiumButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, {
    stiffness: 180,
    damping: 15,
  });

  const smoothY = useSpring(y, {
    stiffness: 180,
    damping: 15,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.2);
    y.set(offsetY * 0.2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const variants = {
    light: "bg-white text-black hover:bg-[#c96a1b] hover:text-white",
    dark: "bg-black text-white border border-white/10 hover:bg-white hover:text-black",
    outline: "bg-transparent text-white border border-white/20 hover:bg-white hover:text-black",
    gold: "bg-[#c96a1b] text-white hover:bg-white hover:text-black",
  };

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: smoothX,
        y: smoothY,
      }}
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-full
        px-7
        py-3.5
        text-sm
        uppercase
        tracking-[0.18em]
        font-medium
        cursor-pointer
        transition-colors
        duration-500
        ${variants[variant]}
        ${className}
      `}
    >
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <motion.div
          initial={{ x: "-120%" }}
          whileHover={{ x: "220%" }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 h-full w-20 bg-white/40 blur-xl rotate-12"
        />
      </div>

      <span className="relative z-10">
        {children}
      </span>
    </motion.button>
  );
}