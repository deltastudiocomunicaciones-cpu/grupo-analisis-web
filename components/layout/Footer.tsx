"use client";

import Image from "next/image";
import Link from "next/link";

const ecosystem = [
  {
    name: "SADI ERP",
    href: "/sadi",
  },
  {
    name: "Análisis & Consultorías",
    href: "/analisis-consultorias",
  },
  {
    name: "TRACO",
    href: "/traco",
  },
  {
    name: "CEC",
    href: "/contadores-en-colombia",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-white/10">

      {/* AMBIENT LIGHT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#c96a1b]/10 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pb-20 border-b border-white/10">

          {/* LEFT */}
          <div>

            <p className="uppercase tracking-[0.45em] text-sm text-[#c96a1b] mb-8">
              Grupo A&C
            </p>

            <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.04em] leading-[0.95] max-w-2xl mb-10">
              Inteligencia estratégica para empresas que piensan a largo plazo.
            </h2>

            <p className="text-white/55 leading-[1.9] max-w-xl font-light">
              Planeación tributaria, protección patrimonial,
              estructura financiera y evolución empresarial
              para organizaciones que requieren visión.
            </p>

          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-12">

            {/* ECOSYSTEM */}
            <div>

              <p className="uppercase tracking-[0.3em] text-xs text-white/40 mb-8">
                Ecosistema
              </p>

              <div className="flex flex-col gap-5">

                {ecosystem.map((item) => (
  <Link
    key={item.name}
    href={item.href}
    className="
group
flex
items-center
gap-2
text-white/70
transition-all
duration-300
hover:text-[#c96a1b]
"
  >
    <>
  <span className="w-0 h-px bg-[#c96a1b] transition-all duration-300 group-hover:w-4" />
  
</>
    {item.name}
  </Link>
))}

              </div>

            </div>

            {/* CONTACT */}
            <div>

              <p className="uppercase tracking-[0.3em] text-xs text-white/40 mb-8">
                Contacto
              </p>

              <div className="flex flex-col gap-5 text-white/70">

                <p>Medellín, Colombia</p>

                <a
                  href="mailto:grupoayc@gmail.com"
                  className="hover:text-[#c96a1b] transition-colors duration-300"
                >
                  grupoayc@gmail.com
                </a>

                <a
  href="https://wa.me/573126901475"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-[#c96a1b] transition-colors duration-300"
>
  WhatsApp Business
</a>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">

  <p className="text-white/35 text-sm">
    © 2026 Grupo Análisis & Consultorías.
  </p>

  <div className="flex items-center gap-4">

    <div className="h-px w-12 bg-fuchsia-500/40" />

    <Image
      src="/brands/sema-footer-v2.png"
      alt="SEMA Strategic Intelligence Studio"
      width={200}
      height={70}
      className="
        opacity-20
        hover:opacity-100
        transition-all
        duration-500
      "
    />

    <div className="h-px w-12 bg-fuchsia-500/40" />

  </div>

</div>
      </div>
    </footer>
  );
}