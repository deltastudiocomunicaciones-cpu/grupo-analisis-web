import StrategicDivider from "@/components/ui/StrategicDivider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";

export default function PatrimonioPage() {
  return (
   <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <div className="absolute inset-0 z-0 h-screen">
  <img
    src="/fotos/patrimonio-hero.png"
    alt="Patrimonio Grupo A&C"
    className="h-full w-full object-cover opacity-80"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/75" />
</div>

     <section className="relative z-10 px-6 pt-44 pb-48">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#c96a1b]">
              Inversiones · Patrimonio
            </p>

            <h1 className="max-w-6xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl lg:text-[6.8rem]">
              Más de 20 años convirtiendo visión empresarial en patrimonio real.
            </h1>

            <p className="mt-10 max-w-3xl text-lg font-light leading-[1.9] text-white/55">
              El valor del Grupo A&C no está únicamente en asesorar empresas,
              sino en haber construido activos, marcas y operaciones reales en
              diferentes sectores del mercado.
            </p>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              "Construcción patrimonial",
              "Protección de activos",
              "Crecimiento sostenible",
            ].map((item) => (
              <GlassCard key={item}>
                <h3 className="text-3xl font-semibold tracking-[-0.04em]">
                  {item}
                </h3>
                <p className="mt-8 text-white/50 leading-[1.9]">
                  Una visión de largo plazo aplicada a decisiones empresariales,
                  financieras y operativas.
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <StrategicDivider
  quote="Quien planifica a largo plazo domina aquello que otros apenas intentan alcanzar."
  author="Sun Tzu"
/>

      <Footer />
    </main>
  );
}