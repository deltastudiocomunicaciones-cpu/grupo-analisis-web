import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import InvestmentNetworkSection from "@/components/sections/InvestmentNetworkSection";

export const metadata: Metadata = {
  title: "Verticales de inversión | Ecosistema empresarial Grupo A&C",
  description:
    "Explora las verticales empresariales de Grupo A&C en turismo, real estate, tecnología, deporte, salud, arquitectura, impacto social y activos productivos.",
  alternates: {
    canonical: "/inversiones/verticales",
  },
  openGraph: {
    title: "Verticales de inversión | Grupo A&C",
    description:
      "Un mapa del ecosistema empresarial Grupo A&C y sus verticales de inversión, operación y crecimiento.",
    url: "/inversiones/verticales",
    type: "website",
    images: [
      {
        url: "/og/grupo-ayc-og-v1.png",
        width: 1200,
        height: 630,
        alt: "Verticales de inversión Grupo A&C",
      },
    ],
  },
};

export default function VerticalesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <div className="absolute inset-0 overflow-hidden">
  <picture>
  <source
    media="(max-width: 768px)"
    srcSet="/fotos/sinapsis-empresarial-mobile.png"
  />

  <img
    src="/fotos/sinapsis-empresarial.png"
    alt="Sinapsis Empresarial Grupo A&C"
    className="absolute inset-0 h-full w-full object-cover brightness-110 contrast-105 -translate-y-[9%]"
    style={{
      objectPosition: "31% 20%",
    }}
  />
</picture>

  <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/55 md:bg-gradient-to-r md:from-black/45 md:via-black/10 md:to-transparent" />

  <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black" />
</div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-10%] h-[1100px] w-[1100px] -translate-x-1/2 rounded-full bg-[#c96a1b]/10 blur-[180px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[800px] w-[800px] rounded-full bg-white/[0.03] blur-[160px]" />
      </div>

      <section className="relative z-10 px-5 sm:px-6 pt-36 md:pt-44 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl">
          
        </div>
      </section>

      <InvestmentNetworkSection />

      <section className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <GlassCard className="text-center">
              <p className="mb-8 text-xs uppercase tracking-[0.4em] text-[#c96a1b]">
                Retorno al origen
              </p>

              <h2 className="mx-auto max-w-5xl text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
                Un ecosistema inteligente siempre vuelve a su núcleo.
              </h2>

              <p className="mx-auto mt-10 max-w-3xl text-base font-light leading-[1.9] text-white/50">
                Desde esta sinapsis empresarial, el usuario puede regresar al
                inicio para comprender la visión completa del Grupo A&C.
              </p>

              <Link
                href="/"
                className="mt-12 inline-flex rounded-full bg-white px-8 py-4 text-sm text-black transition-all hover:bg-[#c96a1b] hover:text-white"
              >
                Volver al Home
              </Link>
            </GlassCard>
          </Reveal>
        </div>
      </section>



<Footer />
    </main>
  );
}