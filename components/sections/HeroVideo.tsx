"use client";

import { useEffect, useRef, useState } from "react";

const VIDEOS = [
  "/videos/optimized/chess_final.mp4",
  "/videos/optimized/chess_final1.mp4",
  "/videos/optimized/chess_final2.mp4",
];

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
  };
};

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isActive, setIsActive] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  /*
   * El video comienza después de la primera interacción.
   * Así no compite con el contenido crítico ni redefine el LCP.
   */
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const saveData = (
      navigator as NavigatorWithConnection
    ).connection?.saveData;

    if (prefersReducedMotion || saveData) {
      return;
    }

    const activateVideo = () => {
      setIsActive(true);
    };

    window.addEventListener("pointerdown", activateVideo, {
      once: true,
      passive: true,
    });

    window.addEventListener("touchstart", activateVideo, {
      once: true,
      passive: true,
    });

    window.addEventListener("scroll", activateVideo, {
      once: true,
      passive: true,
    });

    window.addEventListener("keydown", activateVideo, {
      once: true,
    });

    return () => {
      window.removeEventListener("pointerdown", activateVideo);
      window.removeEventListener("touchstart", activateVideo);
      window.removeEventListener("scroll", activateVideo);
      window.removeEventListener("keydown", activateVideo);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !isActive) {
      return;
    }

    video.muted = true;
    video.load();

    video.play().catch(() => {
      // Algunos navegadores pueden bloquear temporalmente el autoplay.
    });
  }, [isActive, videoIndex]);

  if (!isActive) {
    return null;
  }

  return (
    <video
      key={videoIndex}
      ref={videoRef}
      muted
      playsInline
      preload="metadata"
      aria-hidden="true"
      onEnded={() => {
        setVideoIndex((current) => (current + 1) % VIDEOS.length);
      }}
      className="
        absolute
        inset-0
        z-[1]
        h-full
        w-full
        scale-105
        object-cover
        opacity-45
      "
    >
      <source src={VIDEOS[videoIndex]} type="video/mp4" />
    </video>
  );
}