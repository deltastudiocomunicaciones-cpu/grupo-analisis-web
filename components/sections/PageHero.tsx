"use client";

import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/ui/Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative z-10 pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#c96a1b]/10 via-black to-black pointer-events-none" />
      <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-[#c96a1b]/10 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionEyebrow>
           Visión Directiva
          </SectionEyebrow>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] font-semibold tracking-[-0.05em] leading-[0.88] max-w-5xl mb-10">
            {title}
          </h1>

          <p className="text-white/60 text-lg leading-[1.9] max-w-3xl font-light">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}