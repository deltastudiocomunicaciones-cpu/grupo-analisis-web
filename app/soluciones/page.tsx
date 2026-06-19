import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";

const strategicServices = [
  {
    title: "Asesoría Tributaria y Financiera",
    description:
      "Análisis estructural para decisiones de expansión, sostenibilidad y eficiencia empresarial.",
    brand: "Análisis & Consultorías",
    href: "/analisis-consultorias",
    image: "/fotos/servicios/asesoria-tributaria.jpg",
  },
  {
    title: "Auditorías Financieras",
    description:
      "Diagnóstico financiero y contable orientado al control, la trazabilidad y la evolución empresarial.",
    brand: "Análisis & Consultorías",
    href: "/analisis-consultorias",
    image: "/fotos/servicios/auditorias-financieras.jpg",
  },
  {
    title: "Reestructuración Patrimonial",
    description:
      "Diseño de estrategias para proteger, reorganizar y proyectar estructuras patrimoniales.",
    brand: "Análisis & Consultorías",
    href: "/analisis-consultorias",
    image: "/fotos/servicios/reestructuracion-patrimonial.jpg",
  },
  {
    title: "Insolvencias",
    description:
      "Estrategias legales y financieras para reorganización empresarial y protección patrimonial.",
    brand: "Análisis & Consultorías",
    href: "/analisis-consultorias",
    image: "/fotos/servicios/insolvencias.jpg",
  },
  {
    title: "Asesoría Jurídica",
    description:
      "Soporte jurídico empresarial para decisiones contractuales, fiscales y corporativas.",
    brand: "Análisis & Consultorías",
    href: "/analisis-consultorias",
    image: "/fotos/servicios/asesoria-juridica.jpg",
  },
  {
    title: "Diseño de Procesos",
    description:
      "Diseño organizacional, contable y financiero para compañías en crecimiento.",
    brand: "SADI",
    href: "/sadi",
    image: "/fotos/servicios/diseno-procesos.jpg",
  },
];

const operationalServices = [
  {
    title: "Devoluciones de IVA",
    description:
      "Acompañamiento técnico para procesos de devolución, compensación y trazabilidad tributaria.",
    brand: "Análisis & Consultorías",
    href: "/analisis-consultorias",
    image: "/fotos/servicios/devoluciones-iva.jpg",
  },
  {
    title: "Contabilidad Total o Por Eventos",
    description:
      "Gestión contable flexible para empresas, empresarios y estructuras familiares.",
    brand: "CEC",
    href: "/contadores-en-colombia",
    image: "/fotos/servicios/contabilidad.jpg",
  },
  {
    title: "Declaraciones de Renta",
    description:
      "Gestión tributaria precisa para personas naturales, empresarios y compañías.",
    brand: "CEC",
    href: "/contadores-en-colombia",
    image: "/fotos/servicios/declaraciones-renta.jpg",
  },
  {
    title: "Software Contable SADI",
    description:
      "Integración del ecosistema SADI para automatización empresarial inteligente.",
    brand: "SADI",
    href: "/sadi",
    image: "/fotos/servicios/software-contable.jpg",
  },
  {
    title: "Trámites DIAN",
    description:
      "Gestión especializada ante entidades tributarias con control documental.",
    brand: "TRACO",
    href: "/traco",
    image: "/fotos/servicios/tramites-dian.jpg",
  },
  {
    title: "Trámites Cámara de Comercio",
    description:
      "Registros, reformas y acompañamiento societario para empresas en Colombia.",
    brand: "TRACO",
    href: "/traco",
    image: "/fotos/servicios/camara-comercio.jpg",
  },
];

function ServiceCarousel({
  title,
  description,
  services,
}: {
  title: string;
  description: string;
  services: typeof strategicServices;
}) {
  return (
    <section className="relative py-16">
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
            Grupo A&C
          </p>

          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#111] md:text-5xl">
            {title}
          </h2>

          <p className="mt-5 text-base leading-relaxed text-black/60 md:text-lg">
            {description}
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04}>
              <Link
                href={service.href}
                className="
                  group
                  block
                  min-w-[82vw]
                  max-w-[82vw]
                  sm:min-w-[310px]
                  sm:max-w-[310px]
                  overflow-hidden
                  rounded-[1.5rem]
                  bg-white
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_30px_90px_rgba(0,0,0,0.12)]
                "
              >
                <div className="h-[190px] overflow-hidden bg-black/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#c96a1b]">
                    {service.brand}
                  </p>

                  <h3 className="mb-4 text-xl font-semibold leading-tight tracking-[-0.03em] text-[#111]">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-[1.7] text-black/60">
                    {service.description}
                  </p>

                  <p className="mt-6 text-xs font-medium text-[#c96a1b]">
                    Ver solución →
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

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
                className="h-full w-full object-cover"
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

      <ServiceCarousel
        title="Servicios estratégicos para decisiones empresariales."
        description="Soluciones orientadas a planeación, protección, control financiero y sostenibilidad corporativa."
        services={strategicServices}
      />

      <ServiceCarousel
        title="Servicios operativos para gestión, cumplimiento y continuidad."
        description="Procesos técnicos y administrativos que permiten mantener la empresa en orden y conectada con sus obligaciones."
        services={operationalServices}
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