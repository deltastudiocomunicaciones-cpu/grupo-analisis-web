"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";

const sections = [
  {
  title: "Nuestra Historia",
  eyebrow: "Origen",
  content: (
    <div className="space-y-6">
      <p>
        En Grupo Análisis & Consultorías llevamos más de 20 años construyendo
        tranquilidad, respaldo y crecimiento para empresas, empresarios y
        personas naturales en Colombia. Nacimos en Medellín con el propósito de
        ofrecer soluciones integrales en materia contable, tributaria,
        administrativa y tecnológica.
      </p>

      <p>
        Desde el año 2006, bajo el liderazgo de Lennyn Yepes, contador público
        especializado en diseño e implementación de sistemas de información
        contable, tributaria y administrativa, se ha consolidado un grupo
        empresarial enfocado en desarrollar estructuras modernas, eficientes y
        estratégicas.
      </p>

      <p>
        A lo largo de estos años hemos integrado un equipo humano altamente
        calificado, conformado por especialistas en contabilidad, tributación,
        auditoría, tecnología y gestión empresarial.
      </p>

      <p>
        Con el objetivo de transformar la falta de acompañamiento profesional,
        desarrollamos SADI – Sistema Administrativo de Información, una
        plataforma tecnológica propia creada para facilitar el acceso, control y
        administración de la información contable y tributaria.
      </p>

      <p>
        Más que un software, SADI representa nuestra visión de una contabilidad
        moderna: estratégica, automatizada, segura y enfocada en el análisis
        integral de la información.
      </p>

      <ul className="grid gap-3 pt-2 text-white/50 md:grid-cols-2">
        <li>Planeación y optimización tributaria</li>
        <li>Declaraciones de renta</li>
        <li>Devoluciones y compensaciones de IVA</li>
        <li>Auditoría y revisoría fiscal</li>
        <li>Gestión contable y administrativa</li>
        <li>Trámites ante DIAN y Cámara de Comercio</li>
        <li>Reestructuración patrimonial e insolvencia</li>
        <li>Soluciones tecnológicas mediante SADI</li>
        <li>Asesoría jurídica y empresarial</li>
      </ul>

      <p>
        Más que una firma contable, somos un grupo empresarial que combina
        experiencia, estrategia, tecnología y conocimiento para ayudar a nuestros
        clientes a tomar mejores decisiones, proteger su patrimonio y avanzar
        con mayor tranquilidad hacia el futuro.
      </p>
    </div>
  ),
},
  {
    title: "Misión",
    eyebrow: "Propósito",
    content:
      "Transformamos el conocimiento contable, tributario, administrativo y tecnológico en soluciones estratégicas que generan tranquilidad, crecimiento y rentabilidad. Acompañamos a empresas, empresarios y personas naturales con asesoría especializada, herramientas tecnológicas propias y un equipo humano altamente calificado.",
  },
  {
    title: "Visión",
    eyebrow: "Futuro",
    content:
      "Ser el grupo empresarial líder y referente en Colombia en soluciones contables, tributarias, administrativas y tecnológicas, reconocido por nuestra innovación, solidez, confiabilidad y capacidad de transformar la gestión financiera y tributaria de empresas y personas.",
  },
  {
    title: "Nuestros Valores",
    eyebrow: "Cultura",
    content:
      "La excelencia, el trabajo en equipo, la humildad, la pasión y el honor guían nuestra forma de actuar. Creemos en hacer las cosas con precisión, ética, disciplina, respeto y compromiso genuino con cada cliente, colaborador y aliado estratégico.",
  },
  {
    title: "Políticas de Calidad",
    eyebrow: "Método",
    content:
      "Trabajamos bajo procesos estructurados de planificación, análisis, ejecución, control y optimización permanente. Nuestra metodología integra estándares técnicos, trazabilidad, documentación, seguimiento y mejora continua.",
  },
  {
    title: "Políticas Corporativas",
    eyebrow: "Principios",
    content:
      "Nuestra estructura corporativa se sostiene sobre tres pilares: tranquilidad, riqueza y seguridad. Ayudamos a nuestros clientes a enfocarse en crecer mientras protegemos su información y optimizamos sus recursos.",
  },
  {
    title: "Desarrollo Sostenible",
    eyebrow: "Responsabilidad",
    content:
      "Creemos que el crecimiento verdadero debe ser sostenible, responsable y capaz de generar valor a largo plazo. Promovemos la digitalización, la optimización de recursos y el fortalecimiento del talento humano.",
  },
  {
    title: "Nuestro Sueño",
    eyebrow: "Ambición",
    content:
      "Convertirnos en la firma líder y más confiable en soluciones tributarias, contables y estratégicas para personas naturales, empresarios y empresas en Colombia.",
  },
  {
    title: "Meta 2030",
    eyebrow: "Expansión",
    content:
      "Para el año 2030 buscamos consolidarnos como uno de los grupos empresariales más reconocidos e innovadores del país, expandiendo nuestra presencia nacional e internacional mediante soluciones inteligentes y plataformas propias como SADI.",
  },
  {
    title: "Código de Ética",
    eyebrow: "Integridad",
    content:
      "La ética guía cada decisión, proceso y relación que construimos. Nuestro código promueve transparencia, responsabilidad, confidencialidad, respeto, cumplimiento normativo y protección de la información.",
  },
  {
    title: "Nuestros Clientes",
    eyebrow: "Confianza",
    content:
      "Nuestros clientes son el centro de cada decisión. Trabajamos para brindar tranquilidad, respaldo y soluciones estratégicas que les permitan crecer con seguridad y confianza.",
  },
  {
    title: "Relación con Proveedores",
    eyebrow: "Aliados",
    content:
      "Promovemos relaciones comerciales transparentes, éticas y sostenibles con proveedores y aliados estratégicos bajo criterios de calidad, oportunidad, eficiencia y respeto mutuo.",
  },
  {
    title: "Nuestra Gente",
    eyebrow: "Talento Humano",
    content:
      "El talento humano es nuestro activo más importante. Promovemos respeto, dignidad, igualdad de oportunidades, aprendizaje continuo, bienestar y crecimiento integral.",
  },
  {
    title: "El Conocimiento",
    eyebrow: "Inteligencia",
    content:
      "El conocimiento es la base de nuestra ventaja competitiva. La actualización permanente, la innovación y la mejora continua nos permiten ofrecer soluciones estratégicas y diferenciadoras.",
  },
  {
    title: "La Confianza",
    eyebrow: "Reputación",
    content:
      "Actuamos con coherencia, transparencia y responsabilidad. La confianza se construye mediante cumplimiento, respeto y honestidad.",
  },
  {
    title: "Manejo de la Información",
    eyebrow: "Seguridad",
    content:
      "La información es uno de los activos más sensibles de nuestros clientes. La manejamos bajo criterios de confidencialidad, integridad, trazabilidad y cumplimiento normativo.",
  },
  {
    title: "Compromiso Ético",
    eyebrow: "Principios",
    content:
      "Vivir con ética es construir confianza, proteger la reputación y generar valor para clientes, colaboradores, aliados y sociedad.",
  },
];

export default function NosotrosPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 h-[1100px] w-[1100px] -translate-x-1/2 rounded-full bg-[#c96a1b]/10 blur-[180px]" />
        <div className="absolute bottom-[-25%] right-[-10%] h-[700px] w-[700px] rounded-full bg-white/[0.03] blur-[160px]" />
      </div>

      <section className="relative z-10 px-6 pt-44 pb-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#c96a1b]">
              Nosotros · Grupo A&C
            </p>

            <h1 className="max-w-6xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl lg:text-[6.8rem]">
              Más que una firma contable, una arquitectura de confianza.
            </h1>

            <p className="mt-10 max-w-3xl text-lg font-light leading-[1.9] text-white/70">
              Integramos experiencia, estrategia, tecnología y conocimiento para
              ayudar a empresas y personas a tomar mejores decisiones, proteger
              su patrimonio y avanzar con tranquilidad hacia el futuro.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <GlassCard className="min-h-[420px] overflow-hidden">
              <div className="relative flex h-full min-h-[380px] items-end overflow-hidden rounded-[2rem] border border-black/10 bg-white/70 p-8">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover opacity-75"
                >
                  <source src="/videos/intelligence.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-br from-[#c96a1b]/10 via-black/30 to-black/70"/>

                <div className="relative z-10">
                  <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/50">
                    Desde 2006
                  </p>
                  <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-5xl">
                    Tranquilidad, respaldo y crecimiento para decisiones de alto
                    impacto.
                  </h2>
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2">
              {["20+ años", "SADI", "2030", "Colombia"].map((item, index) => (
                <GlassCard
  key={item}
  className="
    flex
    min-h-[222px]
    flex-col
    justify-between
    border
    border-black/10
    bg-white/70
    shadow-[0_15px_50px_rgba(0,0,0,0.06)]
    hover:border-[#c96a1b]/30
    hover:bg-white/[0.05]
  "
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[#c96a1b]">
                    0{index + 1}
                  </p>

                  <h3 className="text-4xl font-semibold tracking-[-0.05em]">
                    {item}
                  </h3>

                  <p className="text-sm leading-7 text-white/70">
                    {index === 0 &&
                      "Experiencia construyendo confianza empresarial."}
                    {index === 1 &&
                      "Tecnología propia para información en tiempo real."}
                    {index === 2 &&
                      "Meta de expansión, innovación y liderazgo."}
                    {index === 3 &&
                      "Origen local con visión nacional e internacional."}
                  </p>
                </GlassCard>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-[#f5f2eb] px-6 py-32 text-black">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 border-b border-black/30 pb-8">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                Arquitectura institucional
              </p>

              <h2 className="max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
                Lee solo lo que necesitas. La profundidad aparece cuando decides
                abrirla.
              </h2>
            </div>
          </Reveal>

          <div className="space-y-4">

            {sections.map((section, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div
              key={section.title}
             className="
overflow-hidden
rounded-[2rem]
border
border-black/10
bg-white/70
shadow-[0_15px_50px_rgba(0,0,0,0.06)]
backdrop-blur-xl
transition-all
duration-500
hover:shadow-[0_20px_70px_rgba(0,0,0,0.08)]
"
              >
                    
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-7 text-left md:px-10"
                    >
                      <div>
                        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#c96a1b]">
                          {section.eyebrow}
                        </p>

                        <h3 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                          {section.title}
                        </h3>
                      </div>

                      <span
  className={`
    text-2xl
    text-black/40
    transition-all
    duration-500
    ${isOpen ? "rotate-45" : "rotate-0"}
  `}
>
  +
</span>
                    </button>

                    <div
                      className={`
                        grid transition-all duration-500 ease-out
                        ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                      `}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-black/10 px-6 py-8 md:px-10">
                          <div className="max-w-5xl text-base font-light leading-[1.95] text-black/70 md:text-lg">
                           {section.content}
                         </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}