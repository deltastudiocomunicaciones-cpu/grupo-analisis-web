"use client";

import Image from "next/image";
import { useState } from "react";

const filters = [
  "Todos",
  "Sistemas Core & ERP",
  "Gobierno & Portales",
  "E-commerce & Apps",
  "Desarrollo Web",
] as const;

type Filter = (typeof filters)[number];
type ProjectFilter = Exclude<Filter, "Todos">;

type Project = {
  number: string;
  filter: ProjectFilter;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  imagePosition?: string;
  href: string;
  action: string;
  accent: string;
};

const projects: Project[] = [
  {
    number: "01",
    filter: "Sistemas Core & ERP",
    category: "Core administrativo y contable",
    title: "SADI ERP",
    subtitle: "Modelo de contabilidad descentralizada",
    description:
      "Sistema integral que estructura procesos contables, administrativos y financieros para operar con orden, trazabilidad y control de la información.",
    tags: ["Sistema Core", "Gestión financiera"],
    image: "/fotos/fasi/showcase/sadi-erp.png",
    imageAlt: "Interfaz administrativa y contable de SADI ERP",
    imagePosition: "center top",
    href: "/sadi",
    action: "Explorar proyecto",
    accent: "#d97706",
  },
  {
    number: "02",
    filter: "Sistemas Core & ERP",
    category: "Vertical System · Web & App",
    title: "SADI CDF",
    subtitle: "Gestión integral de clubes de fútbol",
    description:
      "Plataforma especializada para integrar la administración financiera, operativa y organizacional de instituciones deportivas.",
    tags: ["App especializada", "Gestión deportiva"],
    image: "/fotos/fasi/showcase/sadi-cdf.png",
    imageAlt: "Interfaz de gestión deportiva de SADI CDF",
    imagePosition: "center top",
    href: "#diagnostico",
    action: "Cotizar una solución similar",
    accent: "#4d7cff",
  },
  {
    number: "03",
    filter: "Gobierno & Portales",
    category: "SaaS · Gobierno corporativo",
    title: "Plataforma CONECTA",
    subtitle: "Estructura, liderazgo y desempeño organizacional",
    description:
      "Sistema para organizar cargos, objetivos, reuniones, decisiones, procesos de liderazgo y evolución corporativa.",
    tags: ["Gobierno corporativo", "Control organizacional"],
    image: "/fotos/fasi/showcase/conecta.png",
    imageAlt: "Interfaz de la plataforma de gobierno corporativo CONECTA",
    imagePosition: "center top",
    href: "#diagnostico",
    action: "Cotizar una solución similar",
    accent: "#9bc53d",
  },
  {
    number: "04",
    filter: "Gobierno & Portales",
    category: "Portal empresarial",
    title: "Portal Grupo A&C",
    subtitle: "Servicios y operación empresarial conectados",
    description:
      "Suite que articula servicios, unidades del ecosistema, atención a clientes y flujos digitales de una firma consultora multisectorial.",
    tags: ["Portal empresarial", "Gestión de servicios"],
    image: "/fotos/fasi/showcase/portal-ayc.png",
    imageAlt: "Portal empresarial de Grupo A&C",
    imagePosition: "center top",
    href: "https://www.grupoayc.co",
    action: "Visitar sitio en vivo",
    accent: "#d97706",
  },
  {
    number: "05",
    filter: "E-commerce & Apps",
    category: "E-commerce · Plataforma comercial",
    title: "Wolves Territory",
    subtitle: "Comercio digital para una marca de alto impacto",
    description:
      "Ecosistema comercial con catálogo dinámico, operación de inventario y experiencia transaccional para ventas directas.",
    tags: ["E-commerce", "Pasarela de pagos", "Comercio digital"],
    image: "/fotos/fasi/showcase/wolves-territory.png",
    imageAlt: "E-commerce de Wolves Territory",
    imagePosition: "center top",
    href: "https://www.wolves-territory.co",
    action: "Visitar sitio en vivo",
    accent: "#c9a96e",
  },
  {
    number: "06",
    filter: "E-commerce & Apps",
    category: "Plataforma transaccional",
    title: "Donaciones Lobos FC",
    subtitle: "Recaudo digital con trazabilidad",
    description:
      "Portal especializado para recibir donaciones, orientar aportantes y fortalecer la transparencia de una entidad deportiva sin ánimo de lucro.",
    tags: ["Recaudo digital", "Donaciones", "Transparencia"],
    image: "/fotos/fasi/showcase/donaciones-lobos-fc.png",
    imageAlt: "Portal de donaciones de Lobos FC",
    imagePosition: "center top",
    href: "https://www.donacioneslobosfc.com",
    action: "Visitar sitio en vivo",
    accent: "#dc2626",
  },
  {
    number: "07",
    filter: "Desarrollo Web",
    category: "Desarrollo web institucional",
    title: "Grupo A&C Web",
    subtitle: "Plataforma corporativa y ecosistema digital",
    description:
      "Experiencia institucional que conecta servicios, conocimiento, inversión y unidades empresariales con clientes y aliados.",
    tags: ["Next.js", "SEO", "Arquitectura de contenidos"],
    image: "/fotos/fasi/showcase/grupo-ayc-web.png",
    imageAlt: "Sitio web institucional de Grupo A&C",
    imagePosition: "center top",
    href: "https://www.grupoayc.co",
    action: "Visitar sitio en vivo",
    accent: "#c96a1b",
  },
  {
    number: "08",
    filter: "Desarrollo Web",
    category: "Plataforma y desarrollo web",
    title: "Kwel Social",
    subtitle: "Marca, comunicación e impacto",
    description:
      "Portal optimizado para comunicar una propuesta de impacto social mediante una experiencia digital construida a la medida.",
    tags: ["Desarrollo web", "Marca", "Rendimiento"],
    image: "/fotos/fasi/showcase/kwel-social.png",
    imageAlt: "Portal web de Kwel Social",
    imagePosition: "center top",
    href: "https://www.kwelsocial.com",
    action: "Visitar sitio en vivo",
    accent: "#16a34a",
  },
];

export default function FasiShowcase() {
  const [activeFilter, setActiveFilter] = useState<Filter>("Todos");

  const visibleProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((project) => project.filter === activeFilter);

  return (
    <section
      id="vitrina"
      className="
        relative
        overflow-hidden
        bg-[#edf2f3]
        px-6
        py-24
        text-[#07141f]
        md:py-32
      "
    >
      {/* ATMÓSFERA */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(97,212,194,0.15),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(77,124,255,0.12),transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* ENCABEZADO */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.36em] text-[#327f75]">
              Vitrina FASI
            </p>

            <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.96] tracking-[-0.055em] md:text-6xl">
              Software construido sobre necesidades empresariales reales.
            </h2>
          </div>

          <p className="max-w-2xl text-base font-light leading-[1.85] text-[#07141f]/60 lg:justify-self-end">
            Explora sistemas core, portales, plataformas transaccionales y
            experiencias digitales desarrolladas para operar, controlar y
            escalar.
          </p>
        </div>

        {/* FILTROS */}
        <div className="mt-12 flex gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                shrink-0
                rounded-full
                border
                px-5
                py-3
                text-xs
                font-medium
                transition-colors
                duration-300
                ${
                  activeFilter === filter
                    ? "border-[#07141f] bg-[#07141f] text-white"
                    : "border-[#07141f]/12 bg-white/60 text-[#07141f]/55 hover:border-[#4d7cff]/45 hover:text-[#07141f]"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* PROYECTOS */}
        <div className="mt-9 grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project) => {
            const external = project.href.startsWith("http");
            const showSecondaryAction = project.href !== "#diagnostico";

            return (
              <article
                key={project.title}
                className="
                  group
                  relative
                  flex
                  min-h-full
                  flex-col
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-[#07141f]/10
                  bg-white/80
                  shadow-[0_24px_70px_rgba(7,20,31,0.08)]
                  transition
                  duration-500
                  hover:-translate-y-1
                  hover:bg-white
                  hover:shadow-[0_34px_100px_rgba(7,20,31,0.14)]
                "
              >
                {/* CAPTURA REAL */}
                <div className="relative aspect-[8/5] overflow-hidden border-b border-[#07141f]/10 bg-[#07141f]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{
                      objectPosition:
                        project.imagePosition ?? "center top",
                    }}
                    className="
                      object-cover
                      transition-transform
                      duration-[1200ms]
                      ease-out
                      group-hover:scale-[1.035]
                    "
                  />

                  {/* VELO */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07141f]/70 via-transparent to-black/10" />

                  {/* BRILLO */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#61d4c2]/10 via-transparent to-white/[0.08]" />

                  {/* CATEGORÍA */}
                  <span
                    className="
                      absolute
                      left-5
                      top-5
                      max-w-[72%]
                      rounded-full
                      border
                      border-white/20
                      bg-[#07141f]/65
                      px-4
                      py-2
                      text-[8px]
                      uppercase
                      tracking-[0.18em]
                      text-white/80
                      backdrop-blur-xl
                      sm:text-[9px]
                    "
                  >
                    {project.category}
                  </span>

                  {/* NÚMERO */}
                  <span className="absolute bottom-5 right-5 font-mono text-sm tracking-[0.2em] text-white/75">
                    {project.number}
                  </span>
                </div>

                {/* CONTENIDO */}
                <div className="relative flex flex-1 flex-col p-6 sm:p-7 md:p-8">
                  <div
                    className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-[0.08] blur-[90px]"
                    style={{
                      backgroundColor: project.accent,
                    }}
                  />

                  <div className="relative">
                    <p
                      className="text-[9px] uppercase tracking-[0.22em]"
                      style={{
                        color: project.accent,
                      }}
                    >
                      {project.filter}
                    </p>

                    <h3 className="mt-5 text-3xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-[2.45rem]">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-base font-light leading-relaxed text-[#07141f]/48 md:text-lg">
                      {project.subtitle}
                    </p>

                    <div
                      className="my-6 h-px w-12"
                      style={{
                        backgroundColor: project.accent,
                      }}
                    />

                    <p className="max-w-xl text-sm font-light leading-[1.8] text-[#07141f]/62">
                      {project.description}
                    </p>
                  </div>

                  {/* TAGS Y ACCIONES */}
                  <div className="relative mt-auto pt-8">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            rounded-full
                            border
                            border-[#07141f]/10
                            bg-[#edf2f3]
                            px-3
                            py-2
                            text-[8px]
                            uppercase
                            tracking-[0.14em]
                            text-[#07141f]/48
                            sm:text-[9px]
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-col gap-4 border-t border-[#07141f]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <a
                        href={project.href}
                        target={external ? "_blank" : undefined}
                        rel={
                          external
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-xs font-semibold uppercase tracking-[0.12em] text-[#07141f] transition-colors hover:text-[#4d7cff]"
                      >
                        {project.action}{" "}
                        {external ? "↗" : "→"}
                      </a>

                      {showSecondaryAction && (
                        <a
                          href="#diagnostico"
                          className="text-xs text-[#07141f]/45 transition-colors hover:text-[#07141f]"
                        >
                          Cotizar algo similar
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}