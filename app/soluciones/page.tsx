import type { Metadata } from "next";
import ServicesShowcaseCarousel from "@/components/sections/ServicesShowcaseCarousel";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Servicios tributarios, financieros y empresariales",
  description:
    "Soluciones de planeación tributaria, auditoría financiera, protección patrimonial, contabilidad, trámites empresariales y software contable SADI.",
  alternates: {
    canonical: "/soluciones",
  },
  openGraph: {
    title: "Servicios tributarios, financieros y empresariales | Grupo A&C",
    description:
      "Conoce las soluciones de Grupo A&C para empresas que necesitan estructura, respaldo financiero y claridad tributaria.",
    url: "/soluciones",
    type: "website",
    images: [
      {
        url: "/og/soluciones-grupo-ayc.png",
        width: 1200,
        height: 630,
        alt: "Servicios estratégicos Grupo A&C",
      },
    ],
  },
};

const strategicServices = [
  {
    title: "Asesoría Tributaria y Financiera",
    description: "Asesoría integral en materia tributaria y financiera, diseñada para optimizar la carga fiscal, mejorar la rentabilidad y asegurar el cumplimiento normativo de las empresas.",
    brand: "Grupo A&C",
    href: "/analisis-consultorias",
    image: "/fotos/servicios/asesoria-tributaria.png",
  },
  {
    title: "Auditorías Financieras",
    description: "Auditorías financieras diseñadas para identificar riesgos, optimizar recursos y fortalecer la confianza de inversionistas, socios y entidades de control.",
    brand: "Grupo A&C",
    href: "/analisis-consultorias",
    image: "/fotos/servicios/auditorias-financieras.png",
  },
  {
    title: "Reestructuración Patrimonial",
    description: "Diseño de estrategias de reestructuración patrimonial para optimizar la carga fiscal, mejorar la rentabilidad y asegurar el cumplimiento normativo de las empresas.",
    brand: "Grupo A&C",
    href: "/analisis-consultorias",
    image: "/fotos/servicios/reestructuracion-patrimonial.png",
  },
  {
    title: "Estrategia Tributaria",
    description: "Diseño de estrategias tributarias personalizadas para optimizar la carga fiscal, mejorar la rentabilidad y asegurar el cumplimiento normativo de las empresas.",
    brand: "Grupo A&C",
    href: "/analisis-consultorias",
    image: "/fotos/servicios/estrategia-tributaria.png",
  },
  {
    title: "Estructura Empresarial",
    description: "Diseño y optimización de la estructura organizacional de las empresas para mejorar su eficiencia y competitividad.",
    brand: "Grupo A&C",
    href: "/traco",
    image: "/fotos/servicios/estructura-empresarial.png",
  },
  {
    title: "Simplificación de Procesos",
    description: "Optimización de procesos contables, financieros y administrativos para mejorar la eficiencia operativa y la toma de decisiones.",
    brand: "Grupo A&C",
    href: "/sadi",
    image: "/fotos/servicios/simplicidad-procesos.png",
  },
];

const operationalServices = [
  {
    title: "Devoluciones de IVA",
    description: "Servicio de gestión integral de devoluciones de IVA, diseñado para optimizar tiempos, reducir costos y garantizar el cumplimiento normativo en empresas de todos los tamaños.",
    brand: "Grupo A&C",
    href: "/analisis-consultorias",
    image: "/fotos/servicios/devoluciones-iva.png",
  },
  {
    title: "Contabilidad Total o Por Eventos",
    description: "Servicio de outsourcing contable, con opción de contabilidad total o por eventos específicos, adaptado a las necesidades y capacidades de cada empresa.",
    brand: "Grupo A&C",
    href: "/contadores-en-colombia",
    image: "/fotos/servicios/contabilidad.png",
  },
  {
    title: "Formación Profesional Contable",
    description: "Formación personalizada para equipos contables, financieros y administrativos, orientada a fortalecer capacidades internas y autonomía en la gestión de la información financiera.",
    brand: "Grupo A&C",
    href: "/contadores-en-colombia",
    image: "/fotos/servicios/formacion-profesional.png",
  },
  {
    title: "Fin de la auditoría",
    description: "Solución para empresas que buscan finalizar procesos de auditoría fiscal o financiera, con el fin de reducir costos, tiempos y complejidad.",
    brand: "Grupo A&C",
    href: "/contadores-en-colombia",
    image: "/fotos/servicios/fin-auditoria.png",
  },
  {
    title: "Trámites DIAN",
    description: "RUT, NIT, RISE, entre otros trámites relacionados con la DIAN.",
    brand: "TRACO",
    href: "/traco",
    image: "/fotos/servicios/tramites-dian-v1.png",
  },
  {
    title: "Trámites Cámara de Comercio",
    description: "Constitución, renovación y demás trámites relacionados con la Cámara de Comercio.",
    brand: "TRACO",
    href: "/traco",
    image: "/fotos/servicios/camara-comercio-v1.png",
  },
];



export default function SolucionesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f2eb] text-[#111]">
      <Navbar />

      <section className="relative min-h-[78vh] overflow-hidden md:min-h-[88vh]">
        <img
          src="/fotos/soluciones-main-hero.png"
          alt="Soluciones estratégicas Grupo A&C"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />

        <Container className="relative z-10 flex min-h-[78vh] items-end pb-14 pt-32 md:min-h-[88vh] md:pb-20 md:pt-40">
          <Reveal>
            <div className="max-w-5xl text-white">
              <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#d6a15f]">
                Soluciones Estratégicas
              </p>

              <h1 className="max-w-5xl text-4xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-5xl md:text-7xl lg:text-8xl">
                Estructuras empresariales diseñadas para decisiones de alto impacto.
              </h1>

              <p className="mt-6 max-w-2xl text-sm font-light leading-relaxed text-white/75 sm:text-base md:mt-8 md:text-xl">
                Grupo A&C integra estrategia tributaria, financiera, contable y
                corporativa para organizaciones que requieren claridad, protección
                y evolución.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                Grupo Análisis & Consultorías
              </p>

              <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#111] md:text-6xl">
                Más de dos décadas transformando información financiera en
                decisiones empresariales.
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-black/60">
                Integramos estrategia tributaria, contable, financiera y
                tecnológica para construir empresas más sólidas, protegidas y
                preparadas para crecer.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="px-4 pb-12 md:px-6 md:pb-16">
        <Container>
          <Reveal>
            <div className="relative h-[360px] overflow-hidden rounded-[1.5rem] md:h-[520px] md:rounded-[2rem]">
              <img
                src="/fotos/soluciones-hero.png"
                alt="Consultoría empresarial Grupo A&C"
                className="h-full w-full object-cover object-[center_37%]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-6 max-w-2xl text-white md:bottom-12 md:left-12">
                <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#d6a15f]">
                  Diagnóstico · Estrategia · Ejecución
                </p>

                <h2 className="text-2xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-3xl md:text-6xl">
                  Servicios diseñados para ordenar, proteger y escalar empresas.
                </h2>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <ServicesShowcaseCarousel
  eyebrow="Servicios estratégicos"
  title="Servicios estratégicos para decisiones empresariales."
  description="Soluciones orientadas a planeación, protección, control financiero y sostenibilidad corporativa."
  items={strategicServices}
/>

<ServicesShowcaseCarousel
  eyebrow="Gestión y cumplimiento"
  title="Servicios operativos para continuidad empresarial."
  description="Procesos técnicos y administrativos que permiten mantener la empresa en orden y conectada con sus obligaciones."
  items={operationalServices}
/>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <Container>
          <div className="rounded-[1.5rem] bg-[#111] px-6 py-12 text-white md:rounded-[2rem] md:px-14 md:py-20">
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                  Próximo paso
                </p>

                <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
                  Convirtamos la complejidad de su empresa en una estructura
                  clara de crecimiento.
                </h2>
              </div>

              <div className="md:text-right">
                <Link
                  href="/contacto"
                  className="inline-flex rounded-full bg-[#c96a1b] px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#a95515]"
                >
                  Solicitar diagnóstico empresarial
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}