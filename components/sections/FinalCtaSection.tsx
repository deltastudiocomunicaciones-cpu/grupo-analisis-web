"use client";

import SectionSpacing from "@/components/ui/SectionSpacing";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Container from "@/components/ui/Container";
import PremiumButton from "@/components/ui/PremiumButton";
import Reveal from "@/components/ui/Reveal";

export default function FinalCtaSection() {
  return (
    <SectionSpacing
    id="contact"
  className="bg-black text-white"
>
    
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f2eb]/0 via-black to-black" />

      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-[#c96a1b]/10 blur-[180px]" />

      <Container className="relative z-10">
        <Reveal>
         <SectionEyebrow>
          Visión Directiva
         </SectionEyebrow>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95] mb-10">
            Toda gran decisión empieza con una conversación estratégica.
          </h2>

          <p className="text-white/60 text-lg leading-[1.9] max-w-3xl mx-auto mb-12 font-light">
            Agenda una consultoría para analizar el estado tributario, financiero y corporativo de tu empresa.
          </p>

          <a href="/contacto">
            <PremiumButton variant="gold">
             Agendar Consultoría
            </PremiumButton>
          </a>
        </Reveal>
      </Container>
    </SectionSpacing>
  );
}