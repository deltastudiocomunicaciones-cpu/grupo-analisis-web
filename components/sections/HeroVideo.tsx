import Image from "next/image";
import Link from "next/link";

import HeroVideo from "@/components/sections/HeroVideo";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* IMAGEN CRÍTICA Y ESTABLE PARA EL LCP */}
      <Image
        src="/fotos/erp-competitiva.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        quality={72}
        className="z-0 scale-105 object-cover opacity-45"
      />

      {/* VIDEO: SE ACTIVA DESPUÉS DE LA PRIMERA INTERACCIÓN */}
      <HeroVideo />

      {/* OVERLAYS */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-black/45" />

      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-[2] h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c96a1b]/10 blur-[180px]" />

      <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-b from-black/35 via-black/20 to-black/85" />

      {/* LUCES AMBIENTALES ESTÁTICAS */}
      <div className="pointer-events-none absolute right-[12%] top-[20%] z-[3] h-40 w-40 rounded-full bg-[#c96a1b]/10 blur-[80px]" />

      <div className="pointer-events-none absolute bottom-[18%] left-[10%] z-[3] h-56 w-56 rounded-full bg-white/5 blur-[100px]" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center pb-16 pt-28">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-[980px]">
            {/* EYEBROW */}
            <p
              className="
                mb-6
                text-xs
                uppercase
                tracking-[0.35em]
                text-[#c96a1b]
                sm:text-sm
              "
            >
              Planeación • Estrategia • Evolución
            </p>

            {/* TITLE */}
            <h1
              className="
                mb-6
                max-w-[820px]
                text-[2.6rem]
                font-semibold
                leading-[0.92]
                tracking-[-0.06em]
                text-white
                sm:text-[3.4rem]
                md:mb-8
                md:text-[4.2rem]
                lg:text-[4.8rem]
                xl:text-[5.6rem]
                2xl:text-[6.6rem]
              "
            >
              Inteligencia
              <br />
              corporativa
              <br />
              para empresas
              <br />
              que piensan
              <br />
              a largo plazo.
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mb-10
                max-w-2xl
                text-sm
                font-light
                leading-[1.8]
                text-white/65
                sm:text-base
                md:mb-12
                md:text-[1.05rem]
              "
            >
              Grupo Análisis &amp; Consultorías desarrolla estructuras
              tributarias, financieras y estratégicas para organizaciones que
              entienden el valor de anticiparse.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/contacto"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  px-8
                  py-4
                  text-sm
                  font-medium
                  text-black
                  transition-transform
                  duration-300
                  hover:scale-[1.02]
                "
              >
                Agendar Consultoría
              </Link>

              <Link
                href="/inversiones/verticales"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  px-8
                  py-4
                  text-sm
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-black
                "
              >
                Explorar Ecosistema
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}