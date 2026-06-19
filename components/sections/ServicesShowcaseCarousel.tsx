"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ShowcaseItem = {
  title: string;
  description: string;
  brand: string;
  href: string;
  image: string;
};

type ServicesShowcaseCarouselProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: ShowcaseItem[];
};

export default function ServicesShowcaseCarousel({
  eyebrow,
  title,
  description,
  items,
}: ServicesShowcaseCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToCard = (nextIndex: number) => {
    setActiveIndex((nextIndex + items.length) % items.length);
  };

  const getOffset = (index: number) => {
    const rawOffset = index - activeIndex;

    if (rawOffset > items.length / 2) return rawOffset - items.length;
    if (rawOffset < -items.length / 2) return rawOffset + items.length;

    return rawOffset;
  };

  return (
    <section className="relative overflow-hidden bg-[#efe8dd] py-20 text-[#111] md:py-28">
      <div className="mx-auto mb-12 w-full max-w-7xl px-5 sm:px-8">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[#c96a1b]">
          {eyebrow}
        </p>

        <h2 className="max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
          {title}
        </h2>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/60 md:text-lg">
          {description}
        </p>
      </div>

      <div className="relative mx-auto h-[560px] w-full max-w-7xl overflow-hidden md:h-[620px]">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#efe8dd] to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#efe8dd] to-transparent md:w-32" />

        {items.map((item, index) => {
          const offset = getOffset(index);
          const isActive = offset === 0;
          const isVisible = Math.abs(offset) <= 2;

          return (
            <Link
              href={item.href}
              key={`${item.title}-${index}`}
              onClick={() => goToCard(index)}
              className="
                absolute
                left-1/2
                top-0
                block
                aspect-[9/16]
                w-[min(78vw,340px)]
                overflow-hidden
                rounded-[1.6rem]
                bg-black
                shadow-2xl
                transition-all
                duration-[850ms]
                ease-out
              "
              style={{
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? "auto" : "none",
                transform: `translateX(calc(-50% + ${offset * 360}px)) scale(${
                  isActive ? 1 : 0.86
                })`,
                zIndex: 10 - Math.abs(offset),
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="340px"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/35 to-black/10" />

              <div className="absolute inset-x-6 top-7 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d6a15f]">
                  {item.brand}
                </p>
              </div>

              <div className="absolute inset-x-6 bottom-8 text-center">
                <h3 className="text-3xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] md:text-4xl">
                  {item.title}
                </h3>

                <p className="mx-auto mt-5 max-w-[260px] text-sm leading-relaxed text-white/68">
                  {item.description}
                </p>

                <p className="mt-6 text-xs font-medium uppercase tracking-[0.22em] text-[#d6a15f]">
                  Ver solución →
                </p>
              </div>
            </Link>
          );
        })}

        <button
          aria-label="Ver servicio anterior"
          className="absolute left-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-3xl font-light text-[#111] shadow-[0_0_32px_rgba(255,255,255,0.18)] transition hover:bg-[#c96a1b] hover:text-white md:h-14 md:w-14"
          onClick={() => goToCard(activeIndex - 1)}
          type="button"
        >
          ‹
        </button>

        <button
          aria-label="Ver siguiente servicio"
          className="absolute right-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-3xl font-light text-[#111] shadow-[0_0_32px_rgba(255,255,255,0.18)] transition hover:bg-[#c96a1b] hover:text-white md:h-14 md:w-14"
          onClick={() => goToCard(activeIndex + 1)}
          type="button"
        >
          ›
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-3">
        {items.map((item, index) => (
          <button
            aria-label={`Ver ${item.title}`}
            className={`h-3 w-3 rounded-full border border-white/50 transition hover:bg-white ${
              activeIndex === index ? "bg-white" : "bg-white/25"
            }`}
            key={`${item.title}-${index}`}
            onClick={() => goToCard(index)}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}