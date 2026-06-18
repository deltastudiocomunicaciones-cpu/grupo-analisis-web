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

  {/* SADI ERP */}

  <a
    href="https://www.misadi.co"
    target="_blank"
    rel="noopener noreferrer"
    className="
      overflow-hidden
      rounded-[2rem]
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      shadow-[0_20px_80px_rgba(0,0,0,0.35)]
      transition-all
      duration-700
      hover:-translate-y-2
      hover:scale-[1.01]
      block
    "
  >
    <img
      src="/fotos/sadi-erp-card.png"
      alt="SADI ERP"
      className="h-full w-full object-cover"
    />
  </a>

  {/* SADI CDF */}

  <a
    href="https://lobosfc.net/sadi-login"
    target="_blank"
    rel="noopener noreferrer"
    className="
      overflow-hidden
      rounded-[2rem]
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      shadow-[0_20px_80px_rgba(0,0,0,0.35)]
      transition-all
      duration-700
      hover:-translate-y-2
      hover:scale-[1.01]
      block
    "
  >
    <img
      src="/fotos/sadi-cdf-card.png"
      alt="SADI CDF"
      className="h-full w-full object-cover"
    />
  </a>

</div>
</div>
      </section>

      <Footer />
    </main>
  );
}