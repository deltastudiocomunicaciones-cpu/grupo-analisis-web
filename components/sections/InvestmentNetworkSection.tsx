"use client";

import { motion } from "framer-motion";

const ecosystem = [
  {
  name: "FASI",
  logo: "/logos/fasi-logo.png",
    x: "18%",
    y: "25%",
    color: "#78ffbe",
   
  units: [
  {
    name: "SADI ERP",
    logo: "/logos/sadierp-logo.png",
    href: "https://misadi.co",
    x: 20,
    y: 70,
  },
  {
    name: "SADI CDF",
    logo: "/logos/sadicdf-logo.png",
    href: "https://lobosfc.net/sadi-login",
    x: 70,
    y: -70,
  },
   ],
  direction: "orbit",
  },
  {
    name: "CDT",
    logo: "/logos/colombia-logo.png",
    x: "50%",
    y: "12%",
    color: "#38bdf8",

     units: [
  {
    name: "HOTEL BAHÍA AGUACATE",
    logo: "/logos/hba-logo.png",
    href: "https://aguacatebayhotel.com",
    x: 70,
    y: -70,
  },
   {
      name: "Guacamayo Tours",
      logo: "/logos/guacamayo-logo.png",
      href: "https://aguacatebayhotel.com",
      x: 50,
      y: 55,
    },
    {
      name: "One Trip and Go",
      logo: "/logos/onetrip-logo.png",
      href: "https://www.instagram.com/onetripandgo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      x: -110,
      y: 40,
    },
  ],
  direction: "orbit",
  },
{
  name: "LOBOS FC",
  logo: "/logos/lobos-logo.png",
  x: "80%",
  y: "28%",
  color: "#ef4444",

  units: [
  {
    name: "Lobos FC",
    logo: "/logos/lobos-luna.png",
    href: "https://corporacionlobosfc.com",
    x: 30,
    y: -115,
  },
  {
    name: "Wolves Territory",
    logo: "/logos/wolves-logo.png",
    href: "https://wolves-territory.co",
    x: 70,
    y: 20,
  },
],
direction: "orbit",
},
  {
    name: "KWEL",
    logo: "/logos/kwel-logo.png",
    x: "72%",
    y: "78%",
    color: "#f59e0b",
    
    units: [
  {
    name: "Arte",
    logo: "/logos/kwelart-logo.png",
    href: "https://kwelsocial.com",
    x: 30,
    y: -115,
  },
  {
    name: "Casa LEO",
    logo: "/logos/albergue-logo.png",
    href: "https://kwelsocial.com",
    x: -20,
    y: 90,
  },
  {
    name: "Drones Agricultura",
    logo: "/logos/drones-logo.png",
    href: "https://kwelsocial.com",
    x: -130,
    y: 10,
  },
  {
    name: "Agroecología",
    logo: "/logos/agroecologia-logo.png",
    href: "https://kwelsocial.com",
    x: 70,
    y: 20,
  },
],
direction: "orbit",
},
  {
    name: "RESPIRAR-T",
    logo: "/logos/respirar-t.png",
    x: "18%",
    y: "65%",
    color: "#22c55e",
     units: [

      {
    name: "Terapia Respiratoria",
    logo: "/logos/respirar-t.png",
    href: "https://respirar-t.com",
    x: -135,
    y: -20,
  },
],
direction: "orbit", 
},
  {
    name: "VALORAR",
    logo: "/logos/valorar-logo.png",
    x: "35%",
    y: "84%",
    color: "#a855f7",
     units: [
{
    name: "Real Estate",
    logo: "/logos/valorar-logo.png",
    href: "https://valorar.com",
    x: 70,
    y: 10,
  },
],
direction: "orbit", 
},
  {
    name: "MADEXT",
    logo: "/logos/madext-logo.png",
    x: "86%",
    y: "58%",
    color: "#eab308",
    units: [
  {
     name: "Remodelación",
    logo: "/logos/madext-logo.png",
    href: "https://madext.com",
    x: 70,
    y: 10,
  },
],
direction: "orbit", 
},
];

function getUnitsPosition(direction: string) {
  if (direction === "right") {
    return "left-[118%] top-1/2 -translate-y-1/2 items-start";
  }

  if (direction === "left") {
    return "right-[118%] top-1/2 -translate-y-1/2 items-end";
  }

  return "left-1/2 top-[115%] -translate-x-1/2 items-center";
}

export default function InvestmentNetworkSection() {
  return (
    <section
  id="investment-network"
  className="relative min-h-screen overflow-hidden bg-transparent pt-16 pb-40 text-white md:pt-20"
>
      <div className="absolute left-[-10%] top-[10%] h-[600px] w-[600px] rounded-full bg-white/[0.04] blur-[120px]" />

      <div className="absolute bottom-[-10%] right-[-10%] h-[700px] w-[700px] rounded-full bg-[#c96a1b]/10 blur-[160px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,106,27,0.10),transparent_42%)]" />

      <div className="absolute inset-0 opacity-[0.018] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:120px_120px]" />

      <div className="relative z-10 mx-auto mb-8 max-w-7xl px-6 -mt-16 md:-mt-21">
        <p className="mb-8 text-sm uppercase tracking-[0.45em] text-[#c96a1b]">
          Ecosistema Inteligente
        </p>

        <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
          Una arquitectura de empresas, unidades y flujos de valor conectados.
        </h2>
      </div>

      <div className="relative z-10 mx-auto mt-80 max-w-7xl px-6">
       <div className="relative h-[620px] md:h-[780px] overflow-hidden rounded-[32px] md:rounded-[48px] border border-white/10 bg-black/10 backdrop-blur-[2px]">
          <svg className="pointer-events-none absolute inset-0 h-full w-full">
            {ecosystem.map((node, index) => (
              <motion.line
                key={node.name}
                x1="50%"
                y1="50%"
                x2={node.x}
                y2={node.y}
                stroke="rgba(120,255,190,0.24)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.4,
                  delay: index * 0.12,
                  ease: "easeInOut",
                }}
              />
            ))}
          </svg>

          <motion.div
            initial={{ opacity: 0, scale: 0.82 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="absolute left-[50%] top-[50%] z-20 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative flex h-36 w-36 md:h-56 md:w-56 items-center justify-center rounded-full border border-[#c96a1b]/40 bg-black/55 backdrop-saturate-150 shadow-[0_0_120px_rgba(201,106,27,0.35)] backdrop-blur-2xl">
              <div className="absolute inset-[-45px] rounded-full bg-[#c96a1b]/20 blur-[70px]" />

              <motion.div
  animate={{ scale: [1, 1.04, 1] }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative flex flex-col items-center"
>
  <p className="mb-4 text-[10px] uppercase tracking-[0.42em] text-[#c96a1b]/80">
  
  </p>

  <img
    src="/logos/grupoayc-logo.webp"
    alt="Grupo A&C"
    className="
      relative
      left-[1px]
      top-[-7.5px]
      z-10
      h-[130px] md:h-[220px]
      object-contain
      opacity-95
      drop-shadow-[0_10px_30px_rgba(255,255,255,0.08)]
    "
  />
</motion.div>
            </div>
          </motion.div>

          {ecosystem.map((node, index) => (
            <motion.div
              key={node.name}
              initial={{ opacity: 0, scale: 0.7, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.3 + index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              style={{
                left: node.x,
                top: node.y,
              }}
              className="group absolute z-30 -translate-x-1/2 -translate-y-1/2"
            >
               {node.direction === "orbit" && (
    <div
      className="
        absolute
        left-1/2
        top-1/2
        h-[220px]
        w-[220px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        border
        border-white/5
        opacity-0
        transition-all
        duration-700
        group-hover:opacity-100
      "
    />
  )}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="absolute inset-[-12px] rounded-full bg-white/5 blur-[22px] transition-all duration-500 group-hover:bg-[#c96a1b]/20" />

                <div className="relative flex h-16 w-16 md:h-24 md:w-24 items-center justify-center rounded-full border border-white/15 bg-black/70 backdrop-blur-xl transition-all duration-500 group-hover:border-[#c96a1b]/60 group-hover:shadow-[0_0_60px_rgba(201,106,27,0.28)]">
                  <div
                    className="absolute inset-[-18px] rounded-full opacity-0 blur-[35px] transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      backgroundColor: `${node.color}22`,
                    }}
                  />

                  <img
  src={node.logo}
  alt={node.name}
  className="
  relative
  z-10
  h-[90px]
w-[90px]
md:h-[150px]
md:w-[150px]
  object-contain
  opacity-95
  drop-shadow-[0_6px_18px_rgba(255,255,255,0.08)]
  transition-all
  duration-500
  group-hover:scale-110
    group-hover:opacity-100
  "
/>
                </div>

               <div
  className={`
    absolute
    opacity-100 md:opacity-0
transition-opacity
duration-500
md:group-hover:opacity-100
    ${
      node.direction === "orbit"
        ? "left-1/2 top-1/2 h-0 w-0"
        : `flex flex-col gap-2 ${getUnitsPosition(node.direction)}`
    }
  `}
>
                 {node.units.map((unit) => {
  const isObject = typeof unit === "object";

  const name = isObject ? unit.name : unit;
  const logo = isObject ? unit.logo : null;
  const href = isObject ? unit.href : null;
  const unitX = isObject ? unit.x : null;
  const unitY = isObject ? unit.y : null;

  if (href && logo && unitX && unitY) {
    return (
      <a
        key={name}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
  transform: `translate(${unitX}px, ${unitY}px)`,
}}
       className="
  absolute
  z-50
  hidden
  md:flex
  h-14
  w-14
  items-center
  justify-center
  rounded-full
  border
  border-white/20
  bg-black/70
  shadow-[0_0_35px_rgba(255,255,255,0.12)]
  backdrop-blur-xl
  opacity-0
  transition-all
  duration-500
  group-hover:opacity-100
  hover:scale-110
  hover:border-[#c96a1b]/60
  hover:shadow-[0_0_45px_rgba(201,106,27,0.28)]
"
        
      >
        <img
  src={logo}
  alt={name}
  className="
    h-[85%]
    w-[85%]
    object-contain
    transition-all
    duration-500
    group-hover:scale-110
  "
/>
      </a>
    );
  }

  return (
    <div
      key={name}
      className="whitespace-nowrap rounded-full border border-white/10 bg-black/80 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white/65 backdrop-blur-xl"
    >
      {name}
    </div>
  );
})}
                </div>
              </motion.div>
            </motion.div>
          ))}

          <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 flex-wrap justify-center gap-5 whitespace-nowrap text-[9px] uppercase tracking-[0.28em] text-white/25">
            <span className="text-[#78ffbe]/45"></span>

            <span className="text-[#c96a1b]/45">
              
            </span>

            <span className="text-blue-300/45">
          
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}