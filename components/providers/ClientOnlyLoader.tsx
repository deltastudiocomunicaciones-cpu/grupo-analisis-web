"use client";

import { useEffect, useState } from "react";

export default function ClientOnlyLoader() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem("grupoayc-loader-seen");

    if (hasSeenLoader) {
      setShowLoader(false);
      return;
    }

    setShowLoader(true);
    sessionStorage.setItem("grupoayc-loader-seen", "true");

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center gap-6">
        <img
          src="/logos/logo-final.png"
          alt="Grupo Análisis & Consultorías"
          className="h-20 w-auto animate-pulse object-contain"
        />

        <div className="h-px w-48 overflow-hidden bg-white/10">
          <div className="h-full w-1/2 animate-[loader_1.2s_ease-in-out_infinite] bg-[#c96a1b]" />
        </div>

        <p className="text-xs uppercase tracking-[0.35em] text-white/45">
          Inteligencia Estratégica
        </p>
      </div>
    </div>
  );
}