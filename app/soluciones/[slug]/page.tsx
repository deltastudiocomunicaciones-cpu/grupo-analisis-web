import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";
import { getServiceBySlug, services } from "@/data/services";

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Servicio no encontrado | Grupo A&C",
    };
  }

  const siteUrl = "https://www.grupoayc.co";

  return {
    title: `${service.title} | Grupo A&C`,
    description: service.description,
    alternates: {
      canonical: `/soluciones/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Grupo A&C`,
      description: service.description,
      url: `${siteUrl}/soluciones/${service.slug}`,
      siteName: "Grupo Análisis & Consultorías",
      locale: "es_CO",
      type: "website",
      images: [
        {
          url: `${siteUrl}${service.image}`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Grupo A&C`,
      description: service.description,
      images: [`${siteUrl}${service.image}`],
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f5f2eb] text-black">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[78vh] overflow-hidden bg-black text-white md:min-h-[88vh]">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background: `radial-gradient(circle at 78% 28%, ${service.accentColor}55 0%, transparent 34%)`,
          }}
        />

        <Container className="relative z-10 flex min-h-[78vh] items-end pb-14 pt-32 md:min-h-[88vh] md:pb-20 md:pt-40">
          <Reveal>
            <div className="max-w-5xl">
              <p
                className="mb-6 text-xs uppercase tracking-[0.4em]"
                style={{ color: service.accentColor }}
              >
                {service.eyebrow} · {service.brand}
              </p>

              <h1 className="max-w-5xl text-4xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-5xl md:text-7xl lg:text-8xl">
                {service.heroTitle}
              </h1>

              <p className="mt-8 max-w-3xl text-base font-light leading-[1.85] text-white/72 md:text-xl">
                {service.technicalIntro}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contacto"
                  className="rounded-full px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02]"
                  style={{ backgroundColor: service.accentColor }}
                >
                  {service.ctaLabel}
                </Link>

                <Link
                  href="/soluciones"
                  className="rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white/75 transition-all duration-300 hover:border-white/35 hover:text-white"
                >
                  Volver a soluciones
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p
                  className="mb-6 text-xs uppercase tracking-[0.35em]"
                  style={{ color: service.accentColor }}
                >
                  Desarrollo técnico
                </p>

                <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.055em] md:text-6xl">
                  Qué resuelve este servicio.
                </h2>
              </div>

              <div className="rounded-[2.5rem] border border-black/10 bg-white/75 p-8 shadow-[0_25px_90px_rgba(0,0,0,0.07)] md:p-10">
                <p className="text-lg font-light leading-[1.95] text-black/62">
                  {service.description}
                </p>

                <p className="mt-7 text-lg font-light leading-[1.95] text-black/62">
                  {service.technicalIntro}
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ALCANCE */}
      <section className="bg-[#eee6da] px-6 py-24 text-black md:py-32">
        <Container>
          <Reveal>
            <div className="mb-16 max-w-4xl">
              <p
                className="mb-5 text-xs uppercase tracking-[0.35em]"
                style={{ color: service.accentColor }}
              >
                Alcance del servicio
              </p>

              <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.055em] md:text-6xl">
                Una intervención técnica organizada por etapas.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-7 md:grid-cols-3">
            {service.sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.06}>
                <article className="h-full rounded-[2.2rem] border border-black/10 bg-white/75 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.07)]">
                  <p
                    className="mb-8 text-xs uppercase tracking-[0.3em]"
                    style={{ color: service.accentColor }}
                  >
                    0{index + 1}
                  </p>

                  <h3 className="text-2xl font-semibold leading-[1.05] tracking-[-0.045em]">
                    {section.title}
                  </h3>

                  <p className="mt-6 text-sm font-light leading-[1.85] text-black/58">
                    {section.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* BENEFICIOS Y ENTREGABLES */}
      <section className="bg-black px-6 py-24 text-white md:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-[2.7rem] border border-white/10 bg-white/[0.045] p-8 shadow-[0_35px_130px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-10">
                <p
                  className="mb-6 text-xs uppercase tracking-[0.35em]"
                  style={{ color: service.accentColor }}
                >
                  Beneficios
                </p>

                <h2 className="mb-10 text-4xl font-semibold leading-[1] tracking-[-0.055em] md:text-5xl">
                  Lo que gana la empresa.
                </h2>

                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <div
                      key={benefit}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                    >
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs"
                        style={{
                          borderColor: `${service.accentColor}66`,
                          color: service.accentColor,
                          backgroundColor: `${service.accentColor}18`,
                        }}
                      >
                        {index + 1}
                      </span>

                      <p className="text-sm font-light leading-relaxed text-white/70">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[2.7rem] border border-white/10 bg-white/[0.045] p-8 shadow-[0_35px_130px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-10">
                <p
                  className="mb-6 text-xs uppercase tracking-[0.35em]"
                  style={{ color: service.accentColor }}
                >
                  Entregables
                </p>

                <h2 className="mb-10 text-4xl font-semibold leading-[1] tracking-[-0.055em] md:text-5xl">
                  Resultado esperado.
                </h2>

                <div className="space-y-4">
                  {service.deliverables.map((deliverable, index) => (
                    <div
                      key={deliverable}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                    >
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs"
                        style={{
                          borderColor: `${service.accentColor}66`,
                          color: service.accentColor,
                          backgroundColor: `${service.accentColor}18`,
                        }}
                      >
                        {index + 1}
                      </span>

                      <p className="text-sm font-light leading-relaxed text-white/70">
                        {deliverable}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#f5f2eb] px-6 py-24 text-black md:py-32">
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-[3rem] border border-black/10 bg-white/80 p-10 shadow-[0_30px_110px_rgba(0,0,0,0.08)] md:p-14">
              <p
                className="mb-6 text-xs uppercase tracking-[0.35em]"
                style={{ color: service.accentColor }}
              >
                {service.title} · Grupo A&C
              </p>

              <h2 className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.055em] md:text-6xl">
                Convirtamos este servicio en una ruta clara para su empresa.
              </h2>

              <p className="mt-8 max-w-3xl text-base font-light leading-[1.9] text-black/58">
                Nuestro equipo puede revisar el caso, identificar el alcance
                real y proponer una ruta de acompañamiento ajustada a la
                necesidad de la organización.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contacto"
                  className="rounded-full px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02]"
                  style={{ backgroundColor: service.accentColor }}
                >
                  {service.ctaLabel}
                </Link>

                <Link
                  href="/soluciones"
                  className="rounded-full border border-black/15 px-7 py-4 text-sm font-medium text-black/70 transition-all duration-300 hover:text-black"
                >
                  Ver todos los servicios
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </main>
  );
}