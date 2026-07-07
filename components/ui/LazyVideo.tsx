"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  videoClassName?: string;
};

export default function LazyVideo({
  src,
  poster,
  className = "",
  videoClassName = "",
}: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "350px",
        threshold: 0.05,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {shouldLoad ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
          className={videoClassName}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div
          className={`h-full w-full bg-black ${videoClassName}`}
          style={
            poster
              ? {
                  backgroundImage: `url(${poster})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : undefined
          }
        />
      )}
    </div>
  );
}