import ServiceDiagnosticForm from "@/components/solutions/ServiceDiagnosticForm";
import TaxRefundDiagnosticForm from "@/components/solutions/TaxRefundDiagnosticForm";
import ServiceAssessmentCards from "@/components/solutions/ServiceAssessmentCards";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import type {
  ServiceItem,
  ServiceLandingSection,
} from "@/data/services";

type Props = {
  service: ServiceItem;
};

const sectionThemes = {
  light: "bg-[#f6f2eb] text-[#071e2e]",
  warm: "bg-[#eee7dc] text-[#071e2e]",
  dark: "bg-[#061d2e] text-white",
};

const cardThemes = {
  light:
    "border-[#071e2e]/10 bg-white/75 text-[#071e2e] shadow-[0_20px_60px_rgba(7,30,46,0.05)]",
  warm:
    "border-[#071e2e]/10 bg-white/70 text-[#071e2e] shadow-[0_20px_60px_rgba(7,30,46,0.04)]",
  dark:
    "border-white/10 bg-white/[0.045] text-white shadow-[0_24px_80px_rgba(0,0,0,0.16)]",
};

const columns = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
  6: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
};

function ActionLink({
  label,
  href,
  secondary = false,
}: {
  label: string;
  href: string;
  secondary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        secondary
          ? "inline-flex min-h-14 items-center justify-center rounded-full border border-current/20 px-7 py-4 text-center text-xs font-semibold uppercase tracking-[0.12em] transition hover:bg-current/5 sm:text-sm"
          : "inline-flex min-h-14 items-center justify-center rounded-full bg-[#c96a1b] px-7 py-4 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_18px_45px_rgba(201,106,27,0.28)] transition hover:-translate-y-0.5 hover:bg-[#dc741b] sm:text-sm"
      }
    >
      {label}
      {!secondary && (
        <span className="ml-3 text-lg" aria-hidden="true">
          →
        </span>
      )}
    </Link>
  );
}

function SectionHeader({
  section,
}: {
  section: ServiceLandingSection;
}) {
  const dark = section.theme === "dark";

  return (
    <div className="max-w-5xl">
      {section.eyebrow && (
        <p className="text-xs uppercase tracking-[0.38em] text-[#c96a1b]">
          {section.eyebrow}
        </p>
      )}

      <h2 className="mt-6 font-serif text-4xl font-semibold leading-[0.98] tracking-[-0.04em] md:text-6xl">
        {section.title}
      </h2>

      {section.description && (
        <p
          className={`mt-7 max-w-4xl text-base font-light leading-[1.85] md:text-xl ${
            dark ? "text-white/65" : "text-[#071e2e]/65"
          }`}
        >
          {section.description}
        </p>
      )}
    </div>
  );
}

function ContentSection({
  section,
}: {
  section: ServiceLandingSection;
}) {
  const theme = section.theme ?? "light";
  const dark = theme === "dark";
  const gridColumns = columns[section.columns ?? 3];

  if (section.layout === "assessment") {
  return (
    <section
      id={section.id}
      className={`${sectionThemes[theme]} px-6 py-24 md:py-32`}
    >
      <Container>
        <SectionHeader section={section} />

        <ServiceAssessmentCards
          items={section.items ?? []}
          primaryCta={section.primaryCta}
          accentColor="#c96a1b"
        />
      </Container>
    </section>
  );
}

if (section.layout === "diagnostic") {
  const diagnosticForm =
    section.diagnosticVariant === "devolucion" ? (
      <TaxRefundDiagnosticForm section={section} />
    ) : (
      <ServiceDiagnosticForm section={section} />
    );

  return (
    <section
      id={section.id}
      className={`${sectionThemes[theme]} px-6 py-24 md:py-32`}
    >
      <Container>
        <SectionHeader section={section} />
        {diagnosticForm}
      </Container>
    </section>
  );
}

if (section.layout === "steps") {
  return (
    <section
      id={section.id}
      className={`${sectionThemes[theme]} px-6 py-24 md:py-32`}
    >
      <Container>
        <SectionHeader section={section} />

        {/* RUTA DE CUATRO PASOS */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {section.items?.map((item, index) => (
            <article
              key={item.title}
              className={`group relative flex min-h-[330px] flex-col overflow-hidden rounded-[1.8rem] border p-7 transition-all duration-500 hover:-translate-y-1 ${cardThemes[theme]}`}
            >
              {/* NÚMERO */}
              <div className="flex items-center justify-between">
                <span className="font-serif text-5xl font-semibold text-[#c96a1b]/25">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="h-2 w-2 rounded-full bg-[#c96a1b] shadow-[0_0_18px_rgba(201,106,27,0.45)]" />
              </div>

              {/* CONTENIDO */}
              <div className="mt-auto pt-16">
                <div className="mb-6 h-px w-full bg-gradient-to-r from-[#c96a1b]/50 to-transparent" />

                <h3 className="font-serif text-2xl font-semibold leading-[1.05] tracking-[-0.025em]">
                  {item.title}
                </h3>

                <p
                  className={`mt-5 text-sm font-light leading-[1.8] ${
                    dark ? "text-white/60" : "text-[#071e2e]/62"
                  }`}
                >
                  {item.text}
                </p>
              </div>

              {/* RESPLANDOR */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-44 w-44 rounded-full bg-[#c96a1b]/[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </article>
          ))}
        </div>

        {/* ACOMPAÑAMIENTO Y CTA */}
        {section.primaryCta && (
          <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-[#061d2e] px-7 py-9 text-white shadow-[0_28px_80px_rgba(6,29,46,0.16)] md:mt-14 md:px-10 md:py-10">
            <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[#c96a1b]/15 blur-[80px]" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                {section.ctaHeading && (
                  <h3 className="font-serif text-2xl font-semibold leading-tight tracking-[-0.03em] md:text-3xl">
                    {section.ctaHeading}
                  </h3>
                )}

                {section.trustText && (
                  <p className="mt-4 max-w-xl text-sm font-light leading-[1.8] text-white/58">
                    {section.trustText}
                  </p>
                )}
              </div>

              <div className="shrink-0">
                <ActionLink {...section.primaryCta} />
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

  if (section.layout === "faq") {
  const faqGroups = Array.from(
    new Set(
      (section.items ?? []).map(
        (item) => item.group ?? "Preguntas generales"
      )
    )
  );

  return (
    <section
      id={section.id}
      className={`${sectionThemes[theme]} px-6 py-24 md:py-32`}
    >
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeader section={section} />
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-start">
          {faqGroups.map((group, groupIndex) => {
            const groupItems = (section.items ?? []).filter(
              (item) =>
                (item.group ?? "Preguntas generales") === group
            );

            return (
              <div
                key={group}
                className={`overflow-hidden rounded-[2rem] border ${cardThemes[theme]}`}
              >
                {/* ENCABEZADO DEL GRUPO */}
                <div
                  className={`border-b px-6 py-7 ${
                    dark
                      ? "border-white/10"
                      : "border-[#071e2e]/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#c96a1b]" />

                    <span
                      className={`text-[10px] uppercase tracking-[0.22em] ${
                        dark
                          ? "text-white/35"
                          : "text-[#071e2e]/35"
                      }`}
                    >
                      Grupo 0{groupIndex + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-2xl font-semibold leading-tight">
                    {group}
                  </h3>
                </div>

                {/* PREGUNTAS */}
                <div
                  className={`divide-y ${
                    dark
                      ? "divide-white/10"
                      : "divide-[#071e2e]/10"
                  }`}
                >
                  {groupItems.map((item) => (
                    <details
                      key={item.title}
                      className="group px-6 py-5"
                    >
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-serif text-base font-semibold leading-[1.35] [&::-webkit-details-marker]:hidden">
                        <span>{item.title}</span>

                        <span
                          className="shrink-0 text-xl font-light text-[#c96a1b] transition-transform duration-300 group-open:rotate-45"
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </summary>

                      <p
                        className={`pb-2 pt-5 text-sm font-light leading-[1.8] ${
                          dark
                            ? "text-white/60"
                            : "text-[#071e2e]/62"
                        }`}
                      >
                        {item.text}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

  if (section.layout === "cta") {
    return (
      <section
        id={section.id}
        className={`${sectionThemes[theme]} px-6 py-24 text-center md:py-32`}
      >
        <Container>
          <div className="mx-auto max-w-5xl">
            <SectionHeader section={section} />

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              {section.primaryCta && (
                <ActionLink {...section.primaryCta} />
              )}

              {section.secondaryCta && (
                <ActionLink {...section.secondaryCta} secondary />
              )}
            </div>
            {section.trustText && (
  <p
    className={`mx-auto mt-7 max-w-3xl text-xs font-light uppercase leading-[1.9] tracking-[0.14em] ${
      dark ? "text-white/42" : "text-[#071e2e]/42"
    }`}
  >
    {section.trustText}
  </p>
)}
          </div>
        </Container>
      </section>
    );
  }

  if (section.layout === "split") {
  return (
    <section
      id={section.id}
      className={`${sectionThemes[theme]} px-6 py-24 md:py-32`}
    >
      <Container>
        {/* TÍTULO + CUATRO GARANTÍAS */}
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <SectionHeader section={section} />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {section.items?.map((item, index) => (
              <article
                key={item.title}
                className={`relative overflow-hidden rounded-[1.8rem] border p-7 ${cardThemes[theme]}`}
              >
                <div className="flex items-center justify-between">
                  <span className="block h-2 w-2 rounded-full bg-[#c96a1b]" />

                  <span
                    className={`text-[10px] tracking-[0.24em] ${
                      dark ? "text-white/30" : "text-[#071e2e]/30"
                    }`}
                  >
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-12 font-serif text-2xl font-semibold leading-tight">
                  {item.title}
                </h3>

                <p
                  className={`mt-4 text-sm font-light leading-[1.75] ${
                    dark ? "text-white/60" : "text-[#071e2e]/62"
                  }`}
                >
                  {item.text}
                </p>

                <div className="pointer-events-none absolute -bottom-20 -right-20 h-44 w-44 rounded-full bg-[#c96a1b]/[0.06] blur-3xl" />
              </article>
            ))}
          </div>
        </div>

        {/* CIERRE Y CTA DESPUÉS DE LAS GARANTÍAS */}
        {section.primaryCta && (
          <div className="relative mt-14 overflow-hidden rounded-[2rem] bg-[#061d2e] px-7 py-10 text-white shadow-[0_30px_90px_rgba(6,29,46,0.18)] md:mt-16 md:px-12 md:py-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#c96a1b]/15 blur-[90px]" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                {section.ctaHeading && (
                  <h3 className="font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.035em] md:text-4xl">
                    {section.ctaHeading}
                  </h3>
                )}

                {section.trustText && (
                  <p className="mt-5 text-xs font-light uppercase leading-[1.8] tracking-[0.14em] text-white/48">
                    {section.trustText}
                  </p>
                )}
              </div>

              <div className="shrink-0">
                <ActionLink {...section.primaryCta} />
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

  return (
    <section
      id={section.id}
      className={`${sectionThemes[theme]} px-6 py-24 md:py-32`}
    >
      <Container>
        <SectionHeader section={section} />

        <div className={`mt-14 grid gap-5 ${gridColumns}`}>
          {section.items?.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className={`flex min-h-[240px] flex-col rounded-[1.8rem] border p-7 transition duration-300 hover:-translate-y-1 ${cardThemes[theme]}`}
            >
              <span className="text-xs font-semibold tracking-[0.22em] text-[#c96a1b]">
                0{index + 1}
              </span>

              <h3 className="mt-10 font-serif text-2xl font-semibold leading-tight">
                {item.title}
              </h3>

              <p
                className={`mt-4 flex-1 text-sm font-light leading-[1.78] ${
                  dark ? "text-white/60" : "text-[#071e2e]/62"
                }`}
              >
                {item.text}
              </p>

              {item.ctaLabel && item.ctaHref && (
                <Link
                  href={item.ctaHref}
                  className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-[#c96a1b]"
                >
                  {item.ctaLabel} →
                </Link>
              )}
            </article>
          ))}
        </div>

        {(section.primaryCta || section.secondaryCta) && (
  <div
    className={`
      relative
      mt-12
      overflow-hidden
      rounded-[2rem]
      border
      px-7
      py-9
      md:mt-14
      md:px-10
      md:py-10
      ${
        dark
          ? "border-white/10 bg-white/[0.045] text-white"
          : "border-[#071e2e]/10 bg-white/65 text-[#071e2e] shadow-[0_24px_70px_rgba(7,30,46,0.06)]"
      }
    `}
  >
    {/* RESPLANDOR AMBIENTAL */}
    <div className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-[#c96a1b]/15 blur-[90px]" />

    <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
      {/* MENSAJE DE CIERRE */}
      {(section.ctaHeading || section.trustText) && (
        <div className="max-w-2xl">
          {section.ctaHeading && (
            <h3 className="font-serif text-2xl font-semibold leading-[1.08] tracking-[-0.03em] md:text-3xl">
              {section.ctaHeading}
            </h3>
          )}

          {section.trustText && (
            <p
              className={`mt-4 text-sm font-light leading-[1.8] ${
                dark ? "text-white/55" : "text-[#071e2e]/55"
              }`}
            >
              {section.trustText}
            </p>
          )}
        </div>
      )}

      {/* BOTONES */}
      <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
        {section.primaryCta && (
          <ActionLink {...section.primaryCta} />
        )}

        {section.secondaryCta && (
          <ActionLink {...section.secondaryCta} secondary />
        )}
      </div>
    </div>
  </div>
)}
      </Container>
    </section>
  );
}

export default function ServiceLandingRenderer({ service }: Props) {
  if (!service.landing) {
    return null;
  }

  const { landing } = service;

  const faqSection = landing.sections.find(
    (section) => section.layout === "faq"
  );

  const faqSchema = faqSection
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity:
          faqSection.items?.map((item) => ({
            "@type": "Question",
            name: item.title,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.text,
            },
          })) ?? [],
      }
    : null;

  return (
    <main className="min-h-screen bg-[#f6f2eb] text-[#071e2e]">
      <Navbar />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-[#061d2e] text-white">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#061d2e]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d2e] via-[#061d2e]/85 to-[#061d2e]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061d2e] via-transparent to-black/20" />

        <Container className="relative z-10 w-full pb-16 pt-36 md:pb-24 md:pt-44">
          <div className="max-w-5xl">
            <p className="text-xs uppercase tracking-[0.38em] text-[#df781f]">
              {landing.heroEyebrow}
            </p>

            <h1 className="mt-7 max-w-5xl font-serif text-5xl font-semibold leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.7rem]">
              {landing.heroTitle}
            </h1>

            <p className="mt-8 max-w-3xl text-base font-light leading-[1.8] text-white/75 md:text-xl">
              {landing.heroDescription}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ActionLink {...landing.primaryCta} />

              {landing.secondaryCta && (
                <ActionLink {...landing.secondaryCta} secondary />
              )}
            </div>

            {landing.heroSupportingText && (
              <p className="mt-10 max-w-3xl text-sm font-light leading-[1.85] text-white/60 md:text-base">
                {landing.heroSupportingText}
              </p>
            )}

            {landing.trustPoints && (
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.14em] text-white/50">
                {landing.trustPoints.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>

      {landing.sections.map((section, index) => (
        <ContentSection
          key={`${section.layout}-${section.title}-${index}`}
          section={section}
        />
      ))}

    

<Footer />

      <Footer />
    </main>
  );
}