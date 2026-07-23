import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import MicrositeHero from "@/components/sections/MicrositeHero";

export const metadata: Metadata = {
  title: "ASPRO | Aseguramiento de Procesos | Grupo A&C",
  description:
    "ASPRO es la unidad de Grupo A&C especializada en aseguramiento de procesos, control, auditoría, cumplimiento y blindaje operativo para empresas.",
  alternates: {
    canonical: "/aspro",
  },
  openGraph: {
    title: "ASPRO | Aseguramiento de Procesos | Grupo A&C",
    description:
      "Control, auditoría, cumplimiento y blindaje operativo para procesos empresariales críticos.",
    url: "https://www.grupoayc.co/aspro",
    siteName: "Grupo Análisis & Consultorías",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.grupoayc.co/og/grupo-ayc-og-v2.png",
        width: 1200,
        height: 630,
        alt: "ASPRO - Aseguramiento de Procesos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASPRO | Aseguramiento de Procesos | Grupo A&C",
    description:
      "Unidad especializada en control, auditoría, cumplimiento y blindaje operativo para empresas.",
    images: ["https://www.grupoayc.co/og/grupo-ayc-og-v2.png"],
  },
};

const services = [
  {
    title: "Aseguramiento de Procesos",
    image: "/fotos/ecosistema_webp/aspro-servicio-1.png",
    text: "Revisión, diseño y fortalecimiento de procesos empresariales para reducir riesgos, mejorar trazabilidad y elevar el nivel de control interno.",
  },
  {
    title: "Auditoría y Control Interno",
    image: "/fotos/ecosistema_webp/aspro-servicio-2.png",
    text: "Evaluación de procedimientos, evidencias, responsables, puntos críticos y mecanismos de control para anticipar fallas operativas.",
  },
  {
    title: "Cumplimiento Organizacional",
    image: "/fotos/ecosistema_webp/aspro-servicio-3.png",
    text: "Alineación de procesos con políticas internas, estándares, documentación, responsables y buenas prácticas empresariales.",
  },
  {
    title: "Blindaje Operativo",
    image: "/fotos/ecosistema_webp/aspro-servicio-4.png",
    text: "Construcción de estructuras de prevención, seguimiento y mejora continua para proteger la operación y la toma de decisiones.",
  },
];

const method = [
  "Diagnóstico del proceso actual",
  "Identificación de riesgos y puntos críticos",
  "Diseño de controles y responsables",
  "Documentación y trazabilidad",
  "Seguimiento, medición y mejora continua",
];

export default function AsproPage() {
  return (
    <main className="min-h-screen bg-[#f5f2eb] text-black">
      <Navbar />

      {/* HERO */}
      <MicrositeHero
        eyebrow="ASPRO · Aseguramiento de Procesos"
        title="Control, auditoría y blindaje para empresas."
        description="ASPRO es la unidad del ecosistema Grupo A&C especializada en aseguramiento de procesos, control, auditoría, cumplimiento y blindaje operativo para organizaciones que necesitan trazabilidad, evidencia y gobierno interno."
        button="Solicitar diagnóstico"
        buttonLink="/contacto"
        ambientColor="#dc2626"
        imageSrc="/brands/aspro-isotype-v1.png"
        imageAlt="Isotipo ASPRO Aseguramiento de Procesos"
        backgroundImage="/fotos/aspro-ecosistema-hero.png"
        imageClassName="h-[280px] w-auto md:h-[220px] lg:h-[320px]"
      />

      {/* SERVICIOS ASPRO */}
      <section className="bg-[#f5f2eb] px-6 py-32 text-black">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 max-w-4xl">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#dc2626]">
              Qué es ASPRO
            </p>

            <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
              Procesos más claros.
              <br />
              Empresas más controladas.
            </h2>

            <p className="mt-10 text-lg font-light leading-[1.9] text-black/60">
              ASPRO —Aseguramiento de Procesos— fortalece la capacidad de las
              empresas para operar con evidencia, trazabilidad y control. Su
              función no es únicamente auditar lo ocurrido, sino ayudar a
              construir procesos capaces de prevenir errores, reducir riesgos y
              sostener decisiones con mayor confianza.
            </p>
          </div>

          <div className="mb-16">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#dc2626]">
              Servicios ASPRO
            </p>

            <h3 className="max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.04em] md:text-5xl">
              Lo que sucede cuando la operación deja de depender de supuestos.
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="
                  group
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-black/10
                  bg-white
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-700
                  hover:-translate-y-1
                  hover:shadow-[0_30px_90px_rgba(0,0,0,0.12)]
                "
              >
                <div className="relative h-[310px] overflow-hidden bg-black">
  <img
    src={service.image}
    alt={`Servicio ASPRO ${index + 1}: ${service.title}`}
    className="
      h-full
      w-full
      object-cover
      opacity-100
      transition-all
      duration-700
      group-hover:scale-[1.05]
    "
  />

  {/* Overlay más suave para no apagar la foto */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/5 to-transparent" />

  {/* Acento rojo muy sutil */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(220,38,38,0.14),transparent_38%)]" />

  <div className="absolute bottom-6 left-6 right-6">
    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#ef4444]">
      0{index + 1}
    </p>

    <h4 className="text-3xl font-semibold leading-[1] tracking-[-0.045em] text-white">
      {service.title}
    </h4>
  </div>
</div>

                <div className="p-7 md:p-8">
                  <p className="text-sm font-light leading-[1.85] text-black/58 md:text-base">
                    {service.text}
                  </p>

                  <Link
                    href="/contacto"
                    className="mt-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-black/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-black/45 transition-all duration-700 group-hover:border-[#dc2626]/35 group-hover:bg-[#dc2626]/10 group-hover:text-black"
                  >
                    Solicitar servicio
                    <span className="transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 border-t border-black/10 pt-16">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#dc2626]">
              Por qué existe ASPRO
            </p>

            <h3 className="max-w-4xl text-3xl font-semibold leading-[1.1] tracking-[-0.04em] md:text-5xl">
              Porque una empresa no se protege solo con intención. Se protege
              con procesos medibles, responsables claros y evidencia
              verificable.
            </h3>

            <p className="mt-10 max-w-3xl text-lg font-light leading-[1.9] text-black/60">
              ASPRO nace para convertir la operación empresarial en una
              arquitectura más controlable: identifica vulnerabilidades, ordena
              responsabilidades, documenta decisiones y deja instalada una
              lógica de seguimiento, prevención y mejora continua.
            </p>
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section className="relative overflow-hidden bg-black px-6 py-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(220,38,38,0.22),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(201,106,27,0.18),transparent_34%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#ef4444]">
                Método ASPRO
              </p>

              <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.055em] md:text-6xl">
                Del diagnóstico al control permanente.
              </h2>

              <p className="mt-8 max-w-xl text-base font-light leading-[1.9] text-white/55">
                El trabajo de ASPRO se orienta a crear una ruta clara de
                aseguramiento: entender el proceso, ubicar sus riesgos, diseñar
                controles y dejar instalada una lógica de seguimiento.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2.7rem] border border-white/10 bg-white/[0.045] p-8 shadow-[0_35px_130px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-10">
              <div className="space-y-5">
                {method.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#dc2626]/35 bg-[#dc2626]/10 text-xs text-[#ef4444]">
                      {index + 1}
                    </span>

                    <p className="text-sm font-light leading-relaxed text-white/70">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5f2eb] px-6 py-28 text-black">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="overflow-hidden rounded-[3rem] border border-black/10 bg-white/80 p-10 shadow-[0_30px_110px_rgba(0,0,0,0.08)] md:p-14">
              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#dc2626]">
                ASPRO · Grupo A&C
              </p>

              <h2 className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.055em] md:text-6xl">
                Cuando un proceso no está asegurado, la empresa opera sobre
                supuestos.
              </h2>

              <p className="mt-8 max-w-3xl text-base font-light leading-[1.9] text-black/58">
                ASPRO acompaña a las organizaciones en la construcción de
                procesos más claros, controlables y sostenibles, conectando
                auditoría, cumplimiento, evidencia y mejora continua.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contacto"
                  className="rounded-full bg-[#dc2626] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#b91c1c]"
                >
                  Hablar con ASPRO
                </Link>

                <Link
                  href="/grupo-ayc"
                  className="rounded-full border border-black/15 px-7 py-4 text-sm font-medium text-black/70 transition-all duration-300 hover:border-[#dc2626]/50 hover:text-black"
                >
                  Ver Grupo A&C
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}