"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const checkScreen = () => {
      const mobile = window.innerWidth < 768;

      setIsMobile(mobile);

      // En móvil no mostramos loader de video para mejorar PageSpeed.
      if (mobile) {
        setLoading(false);
        return;
      }

      // En desktop sí mostramos el loader premium.
      setLoading(true);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!loading) return;

    // Seguridad: si el video se demora o falla, no bloquea la web.
    const fallbackTimer = setTimeout(() => {
      setLoading(false);
    }, 4200);

    return () => clearTimeout(fallbackTimer);
  }, [loading]);

  useEffect(() => {
    if (!loading || isMobile) return;

    const video = videoRef.current;

    if (!video) return;

    video.currentTime = 0;

    video.play().catch(() => {
      setTimeout(() => setLoading(false), 2500);
    });
  }, [loading, isMobile]);

  const videoSrc = "/videos/optimized/intro-grupo-ayc.mp4";

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
          <video
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
            "
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/55" />

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
              h-[280px]
              w-[720px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#c96a1b]/20
              blur-[120px]
            "
          />

          <button
            type="button"
            onClick={() => setLoading(false)}
            className="
              absolute
              bottom-8
              right-8
              z-20
              rounded-full
              border
              border-white/15
              bg-black/30
              px-5
              py-3
              text-xs
              uppercase
              tracking-[0.28em]
              text-white/55
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-[#c96a1b]/40
              hover:bg-[#c96a1b]/10
              hover:text-white
            "
          >
            Saltar
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}