export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.grupoayc.co/#organization",
    name: "Grupo Análisis & Consultorías",
    alternateName: [
      "Grupo A&C",
      "Grupo AYC",
      "Grupo AyC",
      "Análisis & Consultorías",
    ],
    legalName: "Grupo Análisis & Consultorías",
    url: "https://www.grupoayc.co",
    logo: {
      "@type": "ImageObject",
      url: "https://www.grupoayc.co/logos/logo-final.png",
      width: 512,
      height: 512,
    },
    image: "https://www.grupoayc.co/og/grupo-ayc-og-v2.jpg",
    description:
      "Grupo Análisis & Consultorías es un ecosistema empresarial colombiano especializado en consultoría tributaria, financiera, contable, patrimonial, tecnológica y corporativa para empresas en Colombia.",
    slogan: "Inteligencia estratégica para empresas que piensan a largo plazo.",
    foundingDate: "2006",
    founder: {
      "@type": "Person",
      name: "Lennyn Yepes",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 52 Sur # 43A - 20, Oficina 1110",
      addressLocality: "Sabaneta",
      addressRegion: "Antioquia",
      addressCountry: "CO",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Colombia",
      },
      {
        "@type": "AdministrativeArea",
        name: "Antioquia",
      },
      {
        "@type": "City",
        name: "Medellín",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+57-312-690-1475",
        contactType: "customer service",
        areaServed: "CO",
        availableLanguage: ["Spanish"],
      },
    ],
    knowsAbout: [
      "Planeación tributaria",
      "Auditoría financiera",
      "Protección patrimonial",
      "Consultoría empresarial",
      "Consultoría financiera",
      "Contabilidad estratégica",
      "Software contable SADI",
      "SADI ERP",
      "Trámites empresariales TRACO",
      "Formalización empresarial",
      "Estructura financiera",
      "Reestructuración patrimonial",
      "Inteligencia empresarial",
      "Automatización de procesos contables",
      "Sistemas de información empresarial",
    ],
    brand: [
      {
        "@type": "Brand",
        name: "SADI ERP",
        url: "https://www.grupoayc.co/sadi",
      },
      {
        "@type": "Brand",
        name: "TRACO",
        url: "https://www.grupoayc.co/traco",
      },
      {
        "@type": "Brand",
        name: "CEC - Contadores en Colombia",
        url: "https://www.grupoayc.co/cec",
      },
      {
        "@type": "Brand",
        name: "Análisis & Consultorías",
        url: "https://www.grupoayc.co/analisis-y-consultorias",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.grupoayc.co/#website",
    name: "Grupo Análisis & Consultorías",
    alternateName: ["Grupo A&C", "Grupo AYC", "Grupo AyC"],
    url: "https://www.grupoayc.co",
    publisher: {
      "@id": "https://www.grupoayc.co/#organization",
    },
    inLanguage: "es-CO",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.grupoayc.co/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const schemas = [organizationSchema, websiteSchema];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemas),
      }}
    />
  );
}