export interface Article {
  slug: string;
  type: "article" | "news";
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  coverImage: string;
  content: string[];
  tags?: string[];
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export const articles: Article[] = [
  {
    slug: "planeacion-tributaria-largo-plazo",
    type: "article",
    category: "Tributario",
    title: "La planeación tributaria como herramienta de crecimiento empresarial.",
    excerpt:
      "Las empresas que anticipan escenarios fiscales toman decisiones más eficientes y sostenibles.",
    author: "Grupo A&C",
    date: "Junio 2026",
    readTime: "6 min",
    coverImage: "/fotos/articulos/tributario.jpg",
    featured: true,
    tags: ["Planeación Tributaria", "Impuestos", "Empresas", "Estrategia"],
    seoTitle: "Planeación tributaria estratégica para empresas | Grupo A&C",
    seoDescription:
      "Cómo la planeación tributaria se convierte en una herramienta de crecimiento empresarial sostenible.",
    content: [
      "La planeación tributaria moderna ya no consiste únicamente en reducir impuestos. Su verdadero valor radica en la capacidad de anticipar escenarios y construir estructuras sostenibles para el crecimiento empresarial.",
      "Las organizaciones que incorporan una visión estratégica de sus obligaciones fiscales logran proteger patrimonio, mejorar liquidez y reducir riesgos frente a cambios regulatorios.",
      "Una correcta arquitectura tributaria debe integrarse con la estrategia financiera, jurídica y corporativa de la organización.",
      "La combinación entre tecnología, información y criterio permite transformar el cumplimiento tributario en una ventaja competitiva.",
    ],
  },
  {
    slug: "proteccion-patrimonial-empresarial",
    type: "article",
    category: "Patrimonio",
    title: "La protección patrimonial como fundamento de la continuidad empresarial.",
    excerpt:
      "Proteger activos estratégicos es una decisión de gobierno corporativo, no únicamente una medida legal.",
    author: "Grupo A&C",
    date: "Junio 2026",
    readTime: "5 min",
    coverImage: "/fotos/articulos/patrimonio.jpg",
    featured: false,
    tags: ["Patrimonio", "Empresas", "Estrategia"],
    seoTitle: "Protección patrimonial empresarial | Grupo A&C",
    seoDescription:
      "Estrategias para proteger patrimonio empresarial y fortalecer la continuidad organizacional.",
    content: [
      "La construcción de patrimonio requiere décadas de esfuerzo, pero puede verse comprometida por decisiones mal estructuradas.",
      "Las organizaciones modernas integran mecanismos jurídicos, financieros y corporativos para proteger sus activos más importantes.",
      "La protección patrimonial permite reducir vulnerabilidades y garantizar continuidad frente a escenarios complejos.",
      "Una estructura adecuada facilita la preservación del valor empresarial para futuras generaciones.",
    ],
  },
  {
    slug: "erp-como-ventaja-competitiva",
    type: "article",
    category: "Tecnología",
    title: "El ERP como plataforma de inteligencia para la toma de decisiones.",
    excerpt:
      "Los sistemas de información dejaron de ser herramientas operativas para convertirse en centros de inteligencia empresarial.",
    author: "Grupo A&C",
    date: "Junio 2026",
    readTime: "7 min",
    coverImage: "/fotos/articulos/erp.jpg",
    featured: false,
    tags: ["ERP", "Tecnología", "Información Financiera", "Decisiones"],
    seoTitle: "ERP e inteligencia empresarial | Grupo A&C",
    seoDescription:
      "Cómo los sistemas ERP impulsan la eficiencia y la toma de decisiones estratégicas.",
    content: [
      "La transformación digital exige plataformas capaces de integrar información financiera, tributaria y operativa.",
      "Un ERP moderno permite consolidar datos críticos en tiempo real y facilitar decisiones basadas en evidencia.",
      "La automatización reduce errores, mejora el control interno y fortalece la capacidad analítica de la organización.",
      "La ventaja competitiva surge cuando la información se convierte en criterio estratégico.",
    ],
  },
  {
    slug: "reforma-tributaria-2026",
    type: "news",
    category: "Actualidad Tributaria",
    title: "Nuevos escenarios fiscales que las empresas deben monitorear en 2026.",
    excerpt:
      "Los cambios regulatorios exigen mayor capacidad de anticipación por parte de las organizaciones.",
    author: "Mesa Editorial Grupo A&C",
    date: "Julio 2026",
    readTime: "4 min",
    coverImage: "/fotos/noticias/reforma2026.jpg",
    featured: false,
    tags: ["Actualidad Tributaria", "Regulación", "Empresas", "Colombia"],
    seoTitle: "Escenarios fiscales 2026 | Grupo A&C",
    seoDescription:
      "Análisis de los cambios fiscales que podrían impactar a las empresas colombianas.",
    content: [
      "Las organizaciones enfrentan un entorno regulatorio cada vez más dinámico.",
      "Los equipos financieros y tributarios deben fortalecer sus capacidades de monitoreo y análisis.",
      "La anticipación continúa siendo una ventaja competitiva frente a escenarios de incertidumbre.",
    ],
  },
];