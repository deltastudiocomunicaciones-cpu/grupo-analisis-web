import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import PageHero from "@/components/sections/PageHero";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";

const services = [
  {
  title: "Devoluciones de IVA",
  description:
    "Acompañamiento técnico para procesos de devolución, compensación y trazabilidad.",
  brand: "Análisis & Consultorías",
  href: "/analisis-consultorias",
},
{
  title: "Contabilidad Total o Por Eventos",
  description:
    "Arquitectura corporativa para empresas y familias con visión de largo plazo.",
  brand: "CEC",
  href: "/contadores-en-colombia",
},
{
  title: "Auditorías Financieras",
  description:
    "Diagnóstico financiero y contable orientado a control y evolución empresarial.",
  brand: "Análisis & Consultorías",
  href: "/analisis-consultorias",
},
{
  title: "Asesoría Tributaria y Financiera",
  description:
    "Análisis estructural para decisiones de expansión, sostenibilidad y eficiencia.",
  brand: "Análisis & Consultorías",
  href: "/analisis-consultorias",
},
{
  title: "Software Contable SADI",
  description:
    "Integración del ecosistema SADI para automatización empresarial inteligente.",
  brand: "SADI",
  href: "/sadi",
},
{
  title: "Diseño de Procesos",
  description:
    "Diseño organizacional y financiero para compañías en crecimiento.",
  brand: "SADI",
  href: "/sadi",
},
{
  title: "Declaraciones de Renta",
  description:
    "Gestión tributaria precisa para personas naturales, empresarios y compañías.",
  brand: "CEC",
  href: "/contadores-en-colombia",
},
{
  title: "Reestructuración Patrimonial",
  description:
    "Acompañamiento técnico para procesos de devolución, compensación y trazabilidad.",
  brand: "Análisis & Consultorías",
  href: "/analisis-consultorias",
},
{
  title: "Trámites DIAN",
  description:
    "Gestión especializada ante entidades tributarias con control documental.",
  brand: "TRACO",
  href: "/traco",
},
{
  title: "Trámites Cámara de Comercio",
  description:
    "Trámites empresariales, registros, reformas y acompañamiento societario.",
  brand: "TRACO",
  href: "/traco",
},
{
  title: "Insolvencias",
  description:
    "Estrategias legales y financieras para reorganización y protección patrimonial.",
  brand: "Análisis & Consultorías",
  href: "/analisis-consultorias",
},
{
  title: "Asesoría Jurídica",
  description:
    "Soporte jurídico empresarial para decisiones contractuales, fiscales y corporativas.",
  brand: "Análisis & Consultorías",
  href: "/analisis-consultorias",
},
];

export default function SolucionesPage() {
  return (
    <main className="relative bg-black text-white min-h-screen overflow-hidden">
      <Navbar />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[#c96a1b]/10 blur-[180px]" />

        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-white/[0.03] blur-[160px]" />
      </div>

      <PageHero
        eyebrow="Soluciones Estratégicas"
        title="Estructuras empresariales diseñadas para decisiones de alto impacto."
        description="Grupo A&C integra estrategia tributaria, financiera y corporativa para organizaciones que requieren claridad, protección y evolución."
      />

      <section className="relative z-10 pb-32 overflow-hidden">

        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            opacity-80
          "
        >
          <source src="/videos/solutions.mp4" type="video/mp4" />
        </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/75" />

        <Container className="relative z-10">
          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {services.map((service, index) => (
  <Reveal key={service.title} delay={index * 0.04}>
    <Link href={service.href} className="block h-full">
      <GlassCard
        className="
          min-h-[260px]
          h-[350px]
          border
          border-white/10
          bg-white/[0.045]
          backdrop-blur-2xl
          transition-all
          duration-500
          hover:-translate-y-1
          hover:border-[#c96a1b]/35
          hover:bg-white/[0.07]
          hover:shadow-[0_25px_80px_rgba(201,106,27,0.12)]
        "
      >
        <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#c96a1b]">
          0{index + 1}
        </p>

        <h3 className="mb-5 text-xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-2xl">
          {service.title}
        </h3>

        <p className="text-sm font-light leading-[1.75] text-white/55">
          {service.description}
        </p>

        <div className="mt-8 border-t border-white/10 pt-5">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#c96a1b]/80">
            {service.brand}
          </p>

          <p className="mt-3 text-xs text-white/40">
            Ver micrositio →
          </p>
        </div>
      </GlassCard>
    </Link>
  </Reveal>
))}
</div>
</Container>
</section>
<Footer />
</main>
);
}