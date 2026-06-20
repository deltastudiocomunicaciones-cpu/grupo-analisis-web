"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

import MobileMenu from "@/components/layout/MobileMenu";

const services = [
  { label: "Devoluciones de IVA", href: "/soluciones" },
  { label: "Declaraciones de Renta", href: "/soluciones" },
  { label: "Reestructuración Patrimonial", href: "/soluciones" },
  { label: "Asesoría Tributaria y Financiera", href: "/soluciones" },
  { label: "Contabilidad Total o por Eventos", href: "/soluciones" },
  { label: "Software Contable SADI", href: "/soluciones" },
  { label: "Trámites DIAN", href: "/soluciones" },
  { label: "Trámites Cámara de Comercio", href: "/soluciones" },
  { label: "Auditorías Financieras", href: "/soluciones" },
  { label: "Diseño de Procesos", href: "/soluciones" },
  { label: "Insolvencias", href: "/soluciones" },
  { label: "Asesoría Jurídica", href: "/soluciones" },
];

const podcasts = [
  { label: "Análisis & Consultorías", href: "/analisis-consultorias" },
  { label: "SADI ERP", href: "/sadi" },
  { label: "TRACO", href: "/traco" },
  { label: "Contadores en Colombia", href: "/contadores-en-colombia" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-[9999] w-full">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-between gap-8 rounded-full border border-white/10 bg-black/50 px-6 py-4 shadow-[0_10px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:px-8"
          >
           <Link
  href="/"
  className="group relative flex min-w-[210px] items-center"
>
  <div
    className="
      absolute
      left-1/2
      top-1/2
      h-20
      w-64
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#c96a1b]/10
      blur-[45px]
      opacity-0
      transition-all
      duration-700
      group-hover:opacity-100
    "
  />

  <img
    src="/logos/logo-final.png"
    alt="Grupo Análisis & Consultorías"
    className="
      relative
      z-10
      h-12
      w-auto
      max-w-[230px]
      object-contain
      opacity-100
      transition-all
      duration-500
      drop-shadow-[0_0_18px_rgba(201,106,27,0.22)]
      group-hover:scale-[1.02]
      md:h-14
      md:max-w-[270px]
    "
  />
</Link>

            <nav className="hidden items-center gap-8 text-sm tracking-[0.16em] xl:flex">
              <Link
                href="/nosotros"
                className="text-white/70 transition-colors hover:text-white"
              >
                Nosotros
              </Link>

              <Link
                href="/#ecosystem"
                className="text-white/70 transition-colors hover:text-white"
              >
                Ecosistema
              </Link>

              <div className="group relative">
                <Link
                  href="/soluciones"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Servicios
                </Link>

                <div className="invisible absolute left-1/2 top-full mt-5 w-[520px] -translate-x-1/2 rounded-[1.6rem] border border-white/10 bg-black/75 px-5 py-5 opacity-0 shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                    <p className="text-[10px] uppercase tracking-[0.32em] text-[#c96a1b]">
                      Servicios
                    </p>

                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/30">
                      12 áreas
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {services.map((service) => (
                      <Link
                        key={service.label}
                        href={service.href}
                        className="rounded-xl border border-white/5 bg-white/[0.025] px-4 py-3 text-[12px] leading-tight tracking-normal text-white/62 transition-all duration-300 hover:border-[#c96a1b]/35 hover:bg-[#c96a1b]/10 hover:text-white"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/industrias"
                className="text-white/70 transition-colors hover:text-white"
              >
                Noticias
              </Link>

              <Link
                href="/inteligencia"
                className="text-white/70 transition-colors hover:text-white"
              >
                Artículos
              </Link>

              <Link
                href="/inversiones"
                className="text-white/70 transition-colors hover:text-white"
              >
                Inversiones
              </Link>

              <div className="group relative">
  <button className="text-white/70 transition-colors hover:text-white">
    Podcast
  </button>

  <div className="invisible absolute left-1/2 top-full mt-5 w-[360px] -translate-x-1/2 rounded-[1.6rem] border border-white/10 bg-black/75 px-5 py-5 opacity-0 shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
    <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
      <p className="text-[10px] uppercase tracking-[0.32em] text-[#c96a1b]">
        Podcast
      </p>

      <p className="text-[10px] uppercase tracking-[0.24em] text-white/30">
        04 canales
      </p>
    </div>

    <div className="grid grid-cols-1 gap-2.5">
      {podcasts.map((podcast) => (
        <Link
          key={podcast.label}
          href={podcast.href}
          className="rounded-xl border border-white/5 bg-white/[0.025] px-4 py-3 text-[12px] leading-tight tracking-normal text-white/62 transition-all duration-300 hover:border-[#c96a1b]/35 hover:bg-[#c96a1b]/10 hover:text-white"
        >
          {podcast.label}
        </Link>
      ))}
    </div>
  </div>
</div>
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="/contacto"
                className="hidden rounded-full bg-white px-6 py-3 text-sm text-black transition-all hover:bg-[#c96a1b] hover:text-white lg:flex"
              >
                Contactar
              </Link>

              <button
                onClick={() => setMenuOpen(true)}
                className="flex flex-col gap-1.5 xl:hidden"
                aria-label="Abrir menú"
              >
                <span className="h-px w-7 bg-white" />
                <span className="h-px w-7 bg-white/60" />
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}