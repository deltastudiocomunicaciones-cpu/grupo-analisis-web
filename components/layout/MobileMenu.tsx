"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Ecosistema", href: "/#ecosystem" }
  { label: "Servicios", href: "/soluciones" },
  { label: "Noticias", href: "/noticias" },
  { label: "Artículos", href: "/inteligencia" },
  { label: "Podcast", href: "/#ecosystem" },
  { label: "Contactar", href: "/contacto" },
];

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, filter: "blur(18px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(18px)" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="fixed inset-0 z-[99999] bg-black text-white overflow-hidden"
        >
          {/* BACKGROUND GLOW */}
          <div className="absolute top-[-20%] left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#c96a1b]/15 blur-[180px]" />

          <div className="absolute bottom-[-25%] right-[-25%] h-[600px] w-[600px] rounded-full bg-white/[0.04] blur-[160px]" />

          {/* GRID */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: "72px 72px",
            }}
          />

          {/* DARK VEIL */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black" />

          <div className="relative z-10 flex h-full flex-col justify-between px-6 py-8">

            {/* TOP */}
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                Grupo A&C
              </p>

              <button
                onClick={onClose}
                className="text-xs uppercase tracking-[0.35em] text-white/50 hover:text-white transition-colors"
              >
                Cerrar
              </button>
            </div>

            {/* LINKS */}
            <nav className="flex flex-col gap-6 text-center">
  {links.map((link, index) => (
    <motion.div
      key={link.href}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
    >
      <Link
        href={link.href}
        onClick={onClose}
        className="text-2xl font-light tracking-[0.18em] uppercase text-white/80 hover:text-white transition-colors"
      >
        {link.label}
      </Link>
    </motion.div>
  ))}
</nav>

            {/* FOOTER */}
            <div className="border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c96a1b] mb-4">
                Medellín · Colombia
              </p>

              <p className="max-w-sm text-sm leading-7 text-white/45">
                Inteligencia corporativa, planeación tributaria y arquitectura
                financiera para empresas que piensan a largo plazo.
              </p>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}