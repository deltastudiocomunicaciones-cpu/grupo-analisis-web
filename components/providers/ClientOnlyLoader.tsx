"use client";

import { useEffect, useState } from "react";

export default function ClientOnlyLoader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem("grupoayc-loader-seen");

    if (hasSeenLoader) {
      setShowLoader(false);
      return;
    }

    sessionStorage.setItem("grupoayc-loader-seen", "true");

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-black">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/optimized/intelligence-v2.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2">
        <div className="h-px w-56 overflow-hidden bg-white/15">
          <div className="h-full w-1/2 animate-[loader_1.2s_ease-in-out_infinite] bg-[#c96a1b]" />
        </div>
      </div>
    </div>
  );
}