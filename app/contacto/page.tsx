import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";

export default function ContactoPage() {
  const whatsappMessage =
    "Hola Grupo A&C, quiero solicitar una orientación estratégica para mi empresa.";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f2eb] text-white">
      <Navbar />

      <section className="relative min-h-screen overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Fondo cinematográfico */}
        <div className="absolute inset-0 pointer-events-none">
  <div
    className="absolute inset-0 bg-cover bg-center opacity-100"
    style={{
      backgroundImage: "url('/fotos/contacto-landscape.png')",
    }}
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/55 to-black/20" />
  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#120d09]/55 to-[#f5f2eb]" />

  <div className="absolute left-[8%] top-[16%] h-[520px] w-[520px] rounded-full bg-[#c96a1b]/20 blur-[170px]" />
  <div className="absolute right-[-10%] top-[5%] h-[760px] w-[760px] rounded-full bg-white/10 blur-[200px]" />
  <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-[#f5f2eb] via-[#f5f2eb]/75 to-transparent" />
</div>

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:gap-20">
          {/* Columna editorial */}
          <Reveal>
            <div className="pt-4 md:pt-10">
              <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#c96a1b]">
                Contacto Estratégico
              </p>

              <h1 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-8xl md:leading-[0.9]">
                Toda gran decisión empieza con una conversación.
              </h1>

              <p className="mt-8 max-w-2xl text-base font-light leading-[1.9] text-white/62 md:mt-10 md:text-lg">
                Agenda una conversación con Grupo A&C para analizar el estado
                tributario, financiero, tecnológico y corporativo de tu empresa.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#formulario-contacto"
                  className="inline-flex items-center justify-center rounded-full bg-[#c96a1b] px-7 py-4 text-sm font-medium text-white transition-all duration-500 hover:bg-white hover:text-black"
                >
                  Solicitar diagnóstico
                </a>

                <a
                  href={`https://wa.me/573126901475?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-medium text-white/80 backdrop-blur-xl transition-all duration-500 hover:border-[#c96a1b]/60 hover:bg-[#c96a1b]/10 hover:text-[#c96a1b]"
                >
                  Escribir por WhatsApp
                </a>
              </div>

              <div className="mt-16 rounded-[32px] border border-white/15 bg-[#060606]/80 p-7 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-8">
                <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#c96a1b]">
                  Lo que ocurre después
                </p>

                <h3 className="max-w-xl text-2xl font-semibold tracking-[-0.04em] text-white">
                  Tu mensaje no entra a una bandeja. Entra a una mesa de
                  análisis.
                </h3>

                <p className="mt-6 max-w-xl text-sm leading-[1.9] text-white/55 md:text-base">
                  Detrás de este formulario existe un equipo especializado en
                  estrategia tributaria, auditoría, tecnología y estructura
                  empresarial dispuesto a interpretar el contexto de tu situación.
                </p>

                <div className="mt-8 grid gap-4 text-sm text-white/45 sm:grid-cols-2">
                  <div className="flex gap-3">
                    <span className="text-[#c96a1b]">01</span>
                    <span>Recibimos tu solicitud.</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="text-[#c96a1b]">02</span>
                    <span>Identificamos el punto crítico.</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="text-[#c96a1b]">03</span>
                    <span>Asignamos el especialista adecuado.</span>
                  </div>

                  <div className="flex gap-3">
                    <span className="text-[#c96a1b]">04</span>
                    <span>Diseñamos una ruta de solución.</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Formulario */}
          <Reveal delay={0.2}>
            <div
              id="formulario-contacto"
              className="rounded-[30px] border border-white/15 bg-[#050505]/88 p-5 shadow-[0_40px_140px_rgba(0,0,0,0.58)] backdrop-blur-2xl sm:p-6 md:rounded-[40px] md:p-10"
            >
              <div className="mb-8">
                <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-[#c96a1b]">
                  Solicitud privada
                </p>

                <h2 className="text-3xl font-semibold tracking-[-0.045em] text-white md:text-4xl">
                  Cuéntanos qué necesitas estructurar.
                </h2>

                <p className="mt-4 text-sm leading-[1.8] text-white/45">
                  Tu información será revisada por el equipo correspondiente
                  dentro del ecosistema Grupo A&C.
                </p>
              </div>

              <form action="/api/contacto" method="POST" className="grid gap-4 md:gap-5">
                <input
                  name="nombre"
                  required
                  placeholder="Nombre completo"
                  className="w-full rounded-[22px] border border-white/12 bg-black/45 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#c96a1b] focus:bg-black/65 md:rounded-full"
                />

                <input
                  name="empresa"
                  placeholder="Empresa"
                  className="w-full rounded-[22px] border border-white/12 bg-black/45 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#c96a1b] focus:bg-black/65 md:rounded-full"
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    name="telefono"
                    type="tel"
                    required
                    placeholder="Teléfono"
                    className="w-full rounded-[22px] border border-white/12 bg-black/45 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#c96a1b] focus:bg-black/65 md:rounded-full"
                  />

                  <input
                    name="correo"
                    type="email"
                    required
                    placeholder="Correo electrónico"
                    className="w-full rounded-[22px] border border-white/12 bg-black/45 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#c96a1b] focus:bg-black/65 md:rounded-full"
                  />
                </div>

                <select
                  name="servicio"
                  defaultValue=""
                  className="w-full rounded-[22px] border border-white/12 bg-black/45 px-5 py-4 text-white/80 outline-none transition-all duration-300 focus:border-[#c96a1b] focus:bg-black/65 md:rounded-full"
                >
                  <option value="" disabled>
                    Servicio de interés
                  </option>
                  <option value="Diagnóstico financiero">
                    Diagnóstico financiero
                  </option>
                  <option value="Planeación tributaria">
                    Planeación tributaria
                  </option>
                  <option value="Software SADI">Software SADI</option>
                  <option value="Trámites empresariales">
                    Trámites empresariales
                  </option>
                  <option value="Comunidad contable">
                    Comunidad contable
                  </option>
                  <option value="Inversiones / proyectos">
                    Inversiones / proyectos
                  </option>
                  <option value="Otro">Otro</option>
                </select>

                <textarea
                  name="mensaje"
                  required
                  placeholder="Describe brevemente la situación o necesidad"
                  rows={6}
                  className="w-full resize-none rounded-[24px] border border-white/12 bg-black/45 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#c96a1b] focus:bg-black/65 md:rounded-[28px]"
                />

                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#c96a1b] px-8 py-4 text-sm font-medium text-white shadow-[0_20px_70px_rgba(201,106,27,0.28)] transition-all duration-500 hover:bg-white hover:text-black"
                >
                  Enviar solicitud
                </button>

                <p className="mt-4 text-center text-[10px] uppercase tracking-[0.26em] text-white/30">
                  Una conversación puede cambiar el rumbo de una empresa.
                </p>
              </form>

              {/* Card humana */}
              <div className="mt-8 flex flex-col items-center gap-6 rounded-[28px] border border-white/15 bg-[#080808]/88 p-5 shadow-[0_25px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-6 md:flex-row md:gap-8 md:rounded-[32px] md:p-8">
                <div className="flex w-full flex-col items-center md:w-[190px]">
                  <div className="h-[170px] w-[140px] overflow-hidden rounded-[22px] border border-white/10 md:h-[220px] md:w-[180px] md:rounded-[24px]">
                    <img
                      src="/fotos/asesor-contacto.png"
                      alt="Asesor Grupo A&C"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <p className="mt-6 text-center text-[10px] uppercase tracking-[0.35em] text-[#c96a1b]/80">
                    Consultor Senior
                  </p>

                  <div className="mt-4 h-px w-12 bg-[#c96a1b]/30" />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.32em] text-[#c96a1b]">
                    Atención humana
                  </p>

                  <h3 className="text-xl font-semibold tracking-[-0.03em]">
                    Habla con un asesor del equipo Grupo A&C.
                  </h3>

                  <p className="mt-3 text-sm leading-[1.7] text-white/50">
                    Si prefieres una orientación directa, puedes iniciar una
                    conversación por WhatsApp para canalizar tu solicitud.
                  </p>

                  <a
                    href={`https://wa.me/573126901475?text=${encodeURIComponent(
                      whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full justify-center rounded-full border border-[#c96a1b]/30 bg-[#c96a1b]/10 px-5 py-3 text-sm text-[#c96a1b] transition-all duration-500 hover:bg-[#c96a1b] hover:text-white md:w-auto"
                  >
                    Escribir por WhatsApp →
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Franja de confianza fundida con el footer */}
      <section className="relative z-10 bg-[#f5f2eb] px-5 pb-24 pt-4 text-black sm:px-6 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            {
              title: "Respuesta orientada",
              text: "Tu solicitud llega al equipo adecuado según el tipo de necesidad empresarial.",
            },
            {
              title: "Criterio profesional",
              text: "Cada conversación parte de una lectura financiera, tributaria o patrimonial.",
            },
            {
              title: "Acompañamiento real",
              text: "No vendemos formularios. Abrimos rutas concretas de solución.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-black/10 bg-white/45 p-7 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur-xl"
            >
              <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#c96a1b]">
                Grupo A&C
              </p>

              <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-[1.8] text-black/55">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}