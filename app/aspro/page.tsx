import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
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

const capabilities = [
  {
    title: "Aseguramiento de procesos",
    text: "Diseño, revisión y fortalecimiento de procesos empresariales para reducir riesgos, mejorar trazabilidad y elevar el nivel de control interno.",
  },
  {
    title: "Auditoría y control",
    text: "Evaluación de procedimientos, evidencias, responsables, puntos críticos y mecanismos de control para anticipar fallas operativas.",
  },
  {
    title: "Cumplimiento organizacional",
    text: "Alineación de procesos con políticas internas, estándares, documentación, responsabilidades y buenas prácticas empresariales.",
  },
  {
    title: "Blindaje operativo",
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

      {/* DEFINICIÓN */}
      <section className="relative overflow-hidden bg-[#f5f2eb] px-6 py-28 text-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(167,139,250,0.10),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(201,106,27,0.10),transparent_34%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                Qué es ASPRO
              </p>

              <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.055em] md:text-6xl">
                Una unidad diseñada para convertir procesos en sistemas de
                control verificables.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2.5rem] border border-black/10 bg-white/75 p-8 shadow-[0_25px_90px_rgba(0,0,0,0.07)] md:p-10">
              <p className="text-lg font-light leading-[1.95] text-black/62">
                ASPRO —Aseguramiento de Procesos— nace para fortalecer la
                capacidad de las empresas de operar con claridad, evidencia y
                control. Su función no es únicamente auditar lo ocurrido, sino
                ayudar a construir procesos capaces de prevenir errores,
                reducir riesgos, documentar decisiones y sostener la operación
                con mayor confianza.
              </p>

              <p className="mt-7 text-lg font-light leading-[1.95] text-black/62">
                Dentro del ecosistema Grupo A&C, ASPRO actúa como núcleo de
                aseguramiento: observa los procesos, identifica vulnerabilidades,
                estructura controles y convierte la gestión empresarial en una
                arquitectura más medible, defendible y preparada para crecer.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPACIDADES */}
      <section className="bg-[#eee6da] px-6 py-28 text-black">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-16 max-w-4xl">
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                Capacidades
              </p>

              <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.055em] md:text-6xl">
                Asegurar no es revisar al final. Es diseñar el proceso para que
                pueda sostenerse.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {capabilities.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <GlassCard className="h-full rounded-[2.4rem] border border-black/10 bg-white/75 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.07)]">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#c96a1b]">
                      0{index + 1}
                    </span>

                    <span className="h-2.5 w-2.5 rounded-full bg-[#a78bfa]" />
                  </div>

                  <h3 className="text-3xl font-semibold tracking-[-0.045em]">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-sm font-light leading-[1.85] text-black/58">
                    {item.text}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section className="relative overflow-hidden bg-black px-6 py-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(167,139,250,0.20),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(201,106,27,0.18),transparent_34%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                Método ASPRO
              </p>

              <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.055em] md:text-6xl">
                Del diagnóstico al control permanente.
              </h2>

              <p className="mt-8 max-w-xl text-base font-light leading-[1.9] text-white/55">
                El trabajo de ASPRO se orienta a crear una ruta clara de
                aseguramiento: entender el proceso, ubicar sus riesgos,
                diseñar controles y dejar instalada una lógica de seguimiento.
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
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#c96a1b]/30 bg-[#c96a1b]/10 text-xs text-[#c96a1b]">
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
              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
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
                  className="rounded-full bg-[#c96a1b] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#a95616]"
                >
                  Hablar con ASPRO
                </Link>

                <Link
                  href="/grupo-ayc"
                  className="rounded-full border border-black/15 px-7 py-4 text-sm font-medium text-black/70 transition-all duration-300 hover:border-[#c96a1b]/50 hover:text-black"
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