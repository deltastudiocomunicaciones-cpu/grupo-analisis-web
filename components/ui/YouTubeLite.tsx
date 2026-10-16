"use client";

import { useState } from "react";

interface YouTubeLiteProps {
  videoId?: string;
  title: string;
  accentColor?: string;
  poster?: string;
  className?: string;
}

export default function YouTubeLite({
  videoId,
  title,
  accentColor = "#c96a1b",
  poster,
  className = "",
}: YouTubeLiteProps) {
  const [playing, setPlaying] = useState(false);

  const hasVideo = Boolean(videoId);

  if (playing && videoId) {
    return (
      <div
        className={`relative h-full min-h-[330px] overflow-hidden bg-black md:min-h-[400px] lg:min-h-[460px] ${className}`}
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex h-full min-h-[330px] items-center justify-center overflow-hidden bg-[#071018] md:min-h-[400px] lg:min-h-[460px] ${className}`}
      style={
        poster
          ? {
              backgroundImage: `linear-gradient(rgba(4,20,34,0.45), rgba(4,20,34,0.82)), url("${poster}")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }
          : undefined
      }
    >
      {!poster && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.08),transparent_36%)]" />

          <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:56px_56px]" />
        </>
      )}

      <div className="relative z-10 flex max-w-md flex-col items-center px-8 text-center">
        <span className="mb-7 text-[9px] uppercase tracking-[0.32em] text-white/35">
          Video externo · carga bajo demanda
        </span>

        <button
          type="button"
          disabled={!hasVideo}
          onClick={() => {
            if (hasVideo) setPlaying(true);
          }}
          aria-label={
            hasVideo
              ? `Reproducir ${title}`
              : `${title}: contenido audiovisual en preparación`
          }
          className={[
            "group flex h-20 w-20 items-center justify-center rounded-full",
            "border bg-white/[0.06] backdrop-blur-md",
            "transition-all duration-500",
            hasVideo
              ? "cursor-pointer hover:scale-105 hover:bg-white/[0.12]"
              : "cursor-default opacity-60",
          ].join(" ")}
          style={{
            borderColor: `${accentColor}66`,
            boxShadow: `0 20px 70px ${accentColor}22`,
          }}
        >
          {hasVideo ? (
            <span
              className="ml-1 block h-0 w-0 border-y-[9px] border-y-transparent border-l-[15px]"
              style={{ borderLeftColor: accentColor }}
            />
          ) : (
            <span
              className="text-xl font-light"
              style={{ color: accentColor }}
            >
              ···
            </span>
          )}
        </button>

        <p className="mt-7 text-sm font-medium tracking-[-0.01em] text-white/80">
          {hasVideo ? "Reproducir conversación" : "Contenido audiovisual en preparación"}
        </p>

        <p className="mt-2 max-w-xs text-xs font-light leading-relaxed text-white/35">
          {hasVideo
            ? "YouTube se conectará únicamente cuando decidas reproducir el contenido."
            : "Esta sección queda preparada para incorporar contenido oficial cuando esté disponible."}
        </p>
      </div>
    </div>
  );
}
