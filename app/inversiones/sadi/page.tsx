import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";

export default function SadiPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <div className="absolute inset-0 overflow-hidden">

  <img
    src="/fotos/sadi-hero.png"
    alt="SADI ERP"
    className="
      absolute
      inset-0
      h-[60%]
      w-full
      object-cover
      brightness-60
      contrast-110
      "
       style={{
    objectPosition: "60% center",
  }}
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

  <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black" />

</div>

      <section className="relative z-10 px-6 pt-44 pb-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#c96a1b]">
              Inversiones · SADI
            </p>

            <h1 className="max-w-6xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl lg:text-[6.8rem]">
              Sistemas de información aplicados al crecimiento del ecosistema.
            </h1>

            <p className="mt-10 max-w-3xl text-lg font-light leading-[1.9] text-white/55">
              SADI integra soluciones para administración empresarial y gestión
              deportiva, conectando información, procesos y decisiones dentro
              del grupo.
            </p>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
            <GlassCard>
              <p className="text-xs uppercase tracking-[0.3em] text-[#c96a1b]">
                ERP
              </p>
              <h3 className="mt-8 text-4xl font-semibold tracking-[-0.04em]">
                SADI ERP
              </h3>
              <p className="mt-8 text-white/50 leading-[1.9]">
                Sistema administrativo diseñado para organizar, controlar y
                optimizar procesos empresariales.
              </p>
            </GlassCard>

            <GlassCard>
              <p className="text-xs uppercase tracking-[0.3em] text-[#c96a1b]">
                CDF
              </p>
              <h3 className="mt-8 text-4xl font-semibold tracking-[-0.04em]">
                SADI CDF
              </h3>
              <p className="mt-8 text-white/50 leading-[1.9]">
                Sistema orientado a la gestión de clubes de fútbol, procesos
                deportivos, información y estructura institucional.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}