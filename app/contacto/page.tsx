import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import PremiumButton from "@/components/ui/PremiumButton";

export default function ContactoPage() {
  return (
    <main className="relative bg-black text-white min-h-screen overflow-hidden">
      <Navbar />

      <section className="relative z-10 pt-40 pb-32 min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c96a1b]/10 via-black to-black pointer-events-none" />
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
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-8 md:p-10 backdrop-blur-2xl">
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
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}