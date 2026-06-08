import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import PremiumButton from "@/components/ui/PremiumButton";

export default function ContactoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#17120d] to-[#f5f2eb] text-white">
      <Navbar />

      <section className="relative z-10 pt-40 pb-40 min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,106,27,0.18),transparent_32%),linear-gradient(to_bottom,#050505_0%,#17120d_42%,#2a2118_68%,#f5f2eb_100%)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-[#c96a1b]/10 blur-[180px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <Reveal>
            <div>
              <p className="uppercase tracking-[0.45em] text-sm text-[#c96a1b] mb-8">
                Contacto Estratégico
              </p>

              <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-[-0.05em] leading-[0.9] mb-10">
                Toda gran decisión empieza con una conversación.
              </h1>

              <p className="text-white/60 text-lg leading-[1.9] max-w-2xl font-light">
                Agenda una conversación con Grupo A&C para analizar el estado
                tributario, financiero y corporativo de tu empresa.
              </p>
              <div className="mt-16 rounded-[32px] border border-white/10 bg-black/35 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-2xl">

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
            <div className="rounded-[36px] border border-white/10 bg-black/40 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.32)] backdrop-blur-2xl md:p-10">
              <div className="grid gap-5">
                <input
                  placeholder="Nombre completo"
                  className="w-full rounded-full bg-black/40 border border-white/10 px-6 py-4 text-white placeholder:text-white/35 outline-none focus:border-[#c96a1b]"
                />

                <input
                  placeholder="Empresa"
                  className="w-full rounded-full bg-black/40 border border-white/10 px-6 py-4 text-white placeholder:text-white/35 outline-none focus:border-[#c96a1b]"
                />

                <input
                  placeholder="Correo electrónico"
                  className="w-full rounded-full bg-black/40 border border-white/10 px-6 py-4 text-white placeholder:text-white/35 outline-none focus:border-[#c96a1b]"
                />

                <textarea
                  placeholder="Cuéntanos qué necesitas estructurar"
                  rows={6}
                  className="w-full rounded-[28px] bg-black/40 border border-white/10 px-6 py-4 text-white placeholder:text-white/35 outline-none focus:border-[#c96a1b] resize-none"
                />

                

                <PremiumButton>
  Enviar Solicitud
</PremiumButton>

<p className="mt-6 text-center text-xs uppercase tracking-[0.28em] text-white/30">
  Una conversación puede cambiar el rumbo de una empresa.
</p>

<div className="mt-8 flex min-h-[410px] items-center gap-8 rounded-[32px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-2xl">
  <div className="flex w-[220px] flex-col items-center">
    <div className="h-[220px] w-[180px] overflow-hidden rounded-[24px] border border-white/10">
      <img
        src="/fotos/asesor-contacto.jpg"
        alt="Asesor Grupo A&C"
        className="h-full w-full object-cover"
      />
    </div>

    <p className="mt-10 text-center text-[10px] uppercase tracking-[0.35em] text-[#c96a1b]/80">
      Consultor Senior
    </p>

    <div className="mt-3 h-px w-12 bg-[#c96a1b]/30" />
  </div>

  <div className="flex-1">
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
      className="mt-4 inline-flex rounded-full border border-[#c96a1b]/30 bg-[#c96a1b]/10 px-2 py-2 text-sm text-[#c96a1b] transition-all duration-500 hover:bg-[#c96a1b] hover:text-white"
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