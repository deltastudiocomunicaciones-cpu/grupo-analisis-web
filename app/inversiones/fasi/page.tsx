import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";

export default function FasiPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <div className="absolute inset-0 overflow-hidden">

  <img
    src="/fotos/fasi-hero.png"
    alt="FASI - Fábrica de Sistemas de Información"
    className="
      absolute
      inset-0
      h-[80%]
      w-full
      object-cover
      brightness-40
      contrast-110
    "
       style={{
    objectPosition: "80% center",
    }}
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/35 to-transparent" />

  <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black" />

</div>

      <section className="relative z-10 px-6 pt-44 pb-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#c96a1b]">
              Inversiones · FASI
            </p>

            <h1 className="max-w-6xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl lg:text-[6.8rem]">
              La fábrica tecnológica que conecta el ecosistema empresarial.
            </h1>

            <p className="mt-10 max-w-3xl text-lg font-light leading-[1.9] text-white/55">
              FASI, Fábrica de Sistemas de Información, funciona como la
              infraestructura tecnológica que permite crear, automatizar y
              escalar soluciones para las diferentes unidades del grupo.
            </p>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {["Sistemas", "Automatización", "Escalabilidad"].map((item) => (
              <GlassCard key={item}>
                <h3 className="text-3xl font-semibold tracking-[-0.04em]">
                  {item}
                </h3>
                <p className="mt-8 text-white/50 leading-[1.9]">
                  Tecnología diseñada para transformar procesos en plataformas
                  de operación, control y crecimiento.
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}