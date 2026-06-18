import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import PremiumButton from "@/components/ui/PremiumButton";

export default function ContactoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#17120d] to-[#f5f2eb] text-white">
      <Navbar />

      <section className="relative z-10 pt-32 md:pt-40 pb-24 md:pb-32 min-h-screen overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.10),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(201,106,27,0.24),transparent_34%),linear-gradient(to_bottom,#050505_0%,#18110b_34%,#3a2b1d_62%,#f5f2eb_100%)]" />

  <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#f5f2eb] via-[#f5f2eb]/65 to-transparent" />

  <div className="absolute left-1/2 top-[18%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#c96a1b]/10 blur-[160px]" />

  <div className="absolute right-0 top-0 h-[780px] w-[780px] rounded-full bg-[#c96a1b]/12 blur-[180px]" />

  <div className="absolute left-0 bottom-[12%] h-[420px] w-[420px] rounded-full bg-white/10 blur-[160px]" />
</div>
        

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <Reveal>
            <div>
              <p className="uppercase tracking-[0.45em] text-sm text-[#c96a1b] mb-8">
                Contacto Estratégico
              </p>

              <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold tracking-[-0.05em] leading-[0.95] md:leading-[0.9] mb-8 md:mb-10">
                Toda gran decisión empieza con una conversación.
              </h1>

              <p className="text-white/60 text-lg leading-[1.9] max-w-2xl font-light">
                Agenda una conversación con Grupo A&C para analizar el estado
                tributario, financiero y corporativo de tu empresa.
              </p>
              <div className="mt-22 rounded-[32px] border border-white/15 bg-[#060606]/85 p-8 backdrop-blur-2xl shadow-[0_30px_120px_rgba(0,0,0,0.45)]">

  <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#c96a1b]">
    Lo que ocurre después
  </p>

  <h3 className="text-2xl font-semibold tracking-[-0.04em]">
    Tu mensaje no entra a una bandeja. Entra a una mesa de análisis.
  </h3>

  <p className="mt-6 text-white/55 leading-[1.9]">
    Detrás de este formulario existe un equipo especializado en
    estrategia tributaria, auditoría, tecnología y estructura
    empresarial dispuesto a interpretar el contexto de tu situación.
  </p>

  <div className="mt-8 space-y-4 text-sm text-white/45">

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

          <Reveal delay={0.2}>
            <div className="rounded-[28px] md:rounded-[36px] border border-white/15 bg-[#050505]/90 p-5 sm:p-6 md:p-10 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.45)] md:shadow-[0_40px_140px_rgba(0,0,0,0.55)]">
              <div className="grid gap-4 md:gap-5">
                <input
                  placeholder="Nombre completo"
                  className="w-full rounded-[22px] md:rounded-full bg-black/40 border border-white/15 px-5 md:px-4 py-4 text-white placeholder:text-white/35 outline-none focus:border-[#c96a1b]"
                />

                <input
                  placeholder="Empresa"
                  className="w-full rounded-[22px] md:rounded-full bg-black/40 border border-white/15 px-5 md:px-4 py-4 text-white placeholder:text-white/35 outline-none focus:border-[#c96a1b]"
                />

                <input
                  placeholder="Correo electrónico"
                  className="w-full rounded-[22px] md:rounded-full bg-black/40 border border-white/15 px-5 md:px-4 py-4 text-white placeholder:text-white/35 outline-none focus:border-[#c96a1b]"
                />

                <textarea
                  placeholder="Cuéntanos qué necesitas estructurar"
                  rows={6}
                  className="w-full rounded-[22px] md:rounded-[28px] bg-black/40 border border-white/10 px-5 md:px-6 py-4 text-white placeholder:text-white/35 outline-none focus:border-[#c96a1b] resize-none"
                />

                

                <PremiumButton>
  Enviar Solicitud
</PremiumButton>

<p className="mt-6 text-center text-xs uppercase tracking-[0.28em] text-white/30">
  Una conversación puede cambiar el rumbo de una empresa.
</p>

<div className="mt-6 md:mt-8 flex flex-col md:flex-row min-h-0 md:min-h-[410px] items-center gap-5 md:gap-8 rounded-[28px] md:rounded-[32px] border border-white/15 bg-[#080808]/90 p-5 sm:p-6 md:p-10 backdrop-blur-2xl shadow-[0_25px_90px_rgba(0,0,0,0.45)]">
  <div className="flex w-full md:w-[220px] flex-col items-center">
    <div className="h-[170px] w-[140px] md:h-[220px] md:w-[180px] overflow-hidden rounded-[22px] md:rounded-[24px] border border-white/10">
      <img
        src="/fotos/asesor-contacto.png"
        alt="Asesor Grupo A&C"
        className="h-full w-full object-cover"
      />
    </div>

    <p className="mt-10 text-center text-[10px] uppercase tracking-[0.35em] text-[#c96a1b]/80">
      Consultor Senior
    </p>

    <div className="mt- h-px w-12 bg-[#c96a1b]/30" />
  </div>

  <div className="flex-1 text-center md:text-left">
    <p className="mb-2 text-[10px] uppercase tracking-[0.32em] text-[#c96a1b]">
      Atención humana
    </p>

    <h3 className="text-xl font-semibold tracking-[-0.03em]">
      Habla con un asesor del equipo Grupo A&C.
    </h3>

    <p className="mt-3 text-sm leading-[1.7] text-white/50">
      Si prefieres una orientación más directa, puedes iniciar una conversación
      por WhatsApp para canalizar tu solicitud.
    </p>

    <a
      href="https://wa.me/573126901475"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex w-full md:w-auto justify-center rounded-full border border-[#c96a1b]/30 bg-[#c96a1b]/10 px-5 py-3 text-sm text-[#c96a1b] transition-all duration-500 hover:bg-[#c96a1b] hover:text-white"
    >
      Escribir por WhatsApp →
    </a>
  </div>
</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}