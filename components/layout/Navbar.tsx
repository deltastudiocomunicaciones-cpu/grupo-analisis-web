"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-[9999]">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="
            rounded-full
            border
            border-white/10
            bg-black/50
            backdrop-blur-2xl
            px-8
            py-4
            flex
            items-center
            justify-between
            shadow-[0_10px_50px_rgba(0,0,0,0.35)]
          "
        >
          <Link
            href="/"
            className="text-white text-xl font-semibold tracking-[-0.03em]"
          >
            Grupo A&C
          </Link>

          <nav className="hidden lg:flex items-center gap-10 text-sm tracking-[0.18em]">
            <Link href="/#ecosystem" className="text-white/70 hover:text-white transition-colors">
              Ecosistema
            </Link>

            <Link href="/soluciones" className="text-white/70 hover:text-white transition-colors">
              Soluciones
            </Link>

            <Link href="/industrias" className="text-white/70 hover:text-white transition-colors">
              Industrias
            </Link>

            <Link href="/inteligencia" className="text-white/70 hover:text-white transition-colors">
              Inteligencia
            </Link>

            <a
              href="https://www.youtube.com/watch?v=HVvMr-08xbI&t=137s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              Podcast
            </a>
          </nav>

          <Link
            href="/contacto"
            className="
              bg-white
              text-black
              px-6
              py-3
              rounded-full
              text-sm
              hover:bg-[#c96a1b]
              hover:text-white
              transition-all
            "
          >
            Contactar
          </Link>
        </motion.div>
      </div>
    </header>
  );
}