"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    // Seguridad: si algo falla, nunca bloquea la web.
    const fallbackTimer = setTimeout(() => {
      setLoading(false);
    }, 12000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.currentTime = 0;

      video.play().catch(() => {
        // Si autoplay falla, deja visible la intro un momento antes de salir.
        setTimeout(() => setLoading(false), 3500);
      });
    }
  }, [isMobile]);

  const videoSrc = isMobile
    ? "/videos/intro-grupo-ayc-mobile.mp4"
    : "/videos/optimized/intro-grupo-ayc.mp4";
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(14px)",
            transition: { duration: 1, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[99999] overflow-hidden bg-black"
        >
          {/* Video único según dispositivo */}
          <video
            key={videoSrc}
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={() => setLoading(false)}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              md:object-center
            "
          />

          {/* Capas cinematográficas */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/65 md:from-black/35 md:via-black/20 md:to-black/75" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 md:from-black/70 md:to-black/55" />

          {/* Halo premium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: [0, 0.38, 0.22],
              scale: [0.7, 1.1, 1],
            }}
            transition={{
              duration: 3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[220px]
              w-[360px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#c96a1b]/20
              blur-[90px]
              md:h-[280px]
              md:w-[720px]
              md:blur-[120px]
            "
          />

          {/* Botón para saltar intro */}
          <button
            onClick={() => setLoading(false)}
            className="
              absolute
              bottom-6
              left-1/2
              z-20
              -translate-x-1/2
              rounded-full
              border
              border-white/15
              bg-black/30
              px-5
              py-3
              text-[10px]
              uppercase
              tracking-[0.28em]
              text-white/55
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-[#c96a1b]/40
              hover:bg-[#c96a1b]/10
              hover:text-white
              md:bottom-8
              md:left-auto
              md:right-8
              md:translate-x-0
              md:text-xs
            "
          >
            Saltar
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}