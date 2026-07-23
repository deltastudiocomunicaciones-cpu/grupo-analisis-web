export type ServiceCategory = "strategic" | "operational";

export type ServiceSection = {
  title: string;
  text: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  brand: string;
  href: string;
  image: string;
  category: ServiceCategory;
  eyebrow: string;
  heroTitle: string;
  technicalIntro: string;
  sections: ServiceSection[];
  benefits: string[];
  deliverables: string[];
  ctaLabel: string;
  accentColor: string;
};

export const services: ServiceItem[] = [
  {
    slug: "asesoria-tributaria-financiera",
    title: "Asesoría Tributaria y Financiera",
    description:
      "Asesoría integral en materia tributaria y financiera, diseñada para optimizar la carga fiscal, mejorar la rentabilidad y asegurar el cumplimiento normativo de las empresas.",
    brand: "Grupo A&C",
    href: "/soluciones/asesoria-tributaria-financiera",
    image: "/fotos/servicios/asesoria-tributaria.webp",
    category: "strategic",
    eyebrow: "Servicio estratégico",
    heroTitle:
      "Asesoría tributaria y financiera para decisiones empresariales con mayor control.",
    technicalIntro:
      "Este servicio acompaña a empresas que necesitan ordenar su realidad tributaria y financiera, evaluar escenarios, anticipar riesgos y tomar decisiones con criterio técnico.",
    sections: [
      {
        title: "Diagnóstico tributario y financiero",
        text: "Revisión de la situación actual de la empresa para identificar cargas fiscales, riesgos financieros, oportunidades de optimización y puntos críticos de control.",
      },
      {
        title: "Planeación y toma de decisiones",
        text: "Construcción de escenarios que permiten evaluar impactos tributarios, financieros y patrimoniales antes de ejecutar decisiones relevantes.",
      },
      {
        title: "Acompañamiento empresarial",
        text: "Soporte técnico para gerencias, juntas directivas y equipos administrativos que requieren claridad frente a obligaciones, cifras y estructura financiera.",
      },
    ],
    benefits: [
      "Mayor claridad sobre la situación tributaria y financiera.",
      "Reducción de riesgos por decisiones improvisadas.",
      "Optimización de cargas fiscales dentro del marco normativo.",
      "Mejor lectura de la rentabilidad y la estructura empresarial.",
    ],
    deliverables: [
      "Diagnóstico tributario y financiero.",
      "Mapa de riesgos y oportunidades.",
      "Recomendaciones técnicas priorizadas.",
      "Ruta de implementación o acompañamiento.",
    ],
    ctaLabel: "Solicitar asesoría",
    accentColor: "#c96a1b",
  },
  {
    slug: "auditorias-financieras",
    title: "Auditorías Financieras",
    description:
      "Auditorías financieras diseñadas para identificar riesgos, optimizar recursos y fortalecer la confianza de inversionistas, socios y entidades de control.",
    brand: "Grupo A&C",
    href: "/soluciones/auditorias-financieras",
    image: "/fotos/servicios/auditorias-financieras.webp",
    category: "strategic",
    eyebrow: "Control financiero",
    heroTitle:
      "Auditorías financieras para fortalecer confianza, evidencia y control empresarial.",
    technicalIntro:
      "La auditoría financiera permite revisar la razonabilidad de la información, detectar riesgos, validar soportes y entregar a la dirección una lectura más confiable de la empresa.",
    sections: [
      {
        title: "Revisión de información financiera",
        text: "Análisis de estados financieros, soportes contables, registros, conciliaciones y criterios aplicados en la generación de información.",
      },
      {
        title: "Identificación de riesgos",
        text: "Evaluación de inconsistencias, debilidades de control, exposición financiera y posibles efectos sobre la toma de decisiones.",
      },
      {
        title: "Informe técnico",
        text: "Presentación de hallazgos, conclusiones y recomendaciones para fortalecer el control, la trazabilidad y la gestión financiera.",
      },
    ],
    benefits: [
      "Mayor confianza sobre la información financiera.",
      "Identificación temprana de riesgos.",
      "Mejores bases para decisiones gerenciales.",
      "Fortalecimiento del gobierno y control interno.",
    ],
    deliverables: [
      "Plan de auditoría.",
      "Revisión documental y financiera.",
      "Informe de hallazgos.",
      "Recomendaciones de mejora.",
    ],
    ctaLabel: "Solicitar auditoría",
    accentColor: "#c96a1b",
  },
  {
    slug: "reestructuracion-patrimonial",
    title: "Reestructuración Patrimonial",
    description:
      "Diseño de estrategias de reestructuración patrimonial para optimizar la carga fiscal, mejorar la rentabilidad y asegurar el cumplimiento normativo de las empresas.",
    brand: "Grupo A&C",
    href: "/soluciones/reestructuracion-patrimonial",
    image: "/fotos/servicios/reestructuracion-patrimonial.webp",
    category: "strategic",
    eyebrow: "Estrategia patrimonial",
    heroTitle:
      "Reestructuración patrimonial para proteger valor y ordenar decisiones de largo plazo.",
    technicalIntro:
      "Este servicio ayuda a empresarios y grupos familiares a revisar, ordenar y proyectar su estructura patrimonial desde una perspectiva tributaria, financiera y societaria.",
    sections: [
      {
        title: "Lectura patrimonial",
        text: "Identificación de activos, vehículos jurídicos, responsabilidades, riesgos y relaciones entre patrimonio personal, familiar y empresarial.",
      },
      {
        title: "Diseño de estructura",
        text: "Construcción de alternativas para organizar activos, responsabilidades y decisiones patrimoniales bajo criterios de eficiencia, protección y continuidad.",
      },
      {
        title: "Ruta de implementación",
        text: "Definición de pasos técnicos, documentales y tributarios para ejecutar la reestructuración de manera ordenada.",
      },
    ],
    benefits: [
      "Mayor protección del patrimonio.",
      "Claridad sobre la estructura de activos y responsabilidades.",
      "Mejor planeación tributaria y sucesoral.",
      "Reducción de exposición ante riesgos empresariales.",
    ],
    deliverables: [
      "Mapa patrimonial.",
      "Diagnóstico de riesgos.",
      "Propuesta de estructura.",
      "Plan de implementación.",
    ],
    ctaLabel: "Solicitar diagnóstico patrimonial",
    accentColor: "#c96a1b",
  },
  {
    slug: "estrategia-tributaria",
    title: "Estrategia Tributaria",
    description:
      "Diseño de estrategias tributarias personalizadas para optimizar la carga fiscal, mejorar la rentabilidad y asegurar el cumplimiento normativo de las empresas.",
    brand: "Grupo A&C",
    href: "/soluciones/estrategia-tributaria",
    image: "/fotos/servicios/estrategia-tributaria.webp",
    category: "strategic",
    eyebrow: "Planeación tributaria",
    heroTitle:
      "Estrategia tributaria para anticipar impactos y tomar mejores decisiones.",
    technicalIntro:
      "La estrategia tributaria permite que la empresa deje de reaccionar al impuesto y empiece a planear sus decisiones con anticipación, técnica y control.",
    sections: [
      {
        title: "Análisis de obligaciones",
        text: "Revisión de la carga fiscal, declaraciones, obligaciones vigentes y posibles riesgos derivados de la operación empresarial.",
      },
      {
        title: "Diseño de escenarios",
        text: "Evaluación de alternativas tributarias para decisiones de inversión, distribución, contratación, operación y crecimiento.",
      },
      {
        title: "Acompañamiento preventivo",
        text: "Soporte técnico para evitar contingencias y construir decisiones alineadas con la realidad normativa y financiera de la empresa.",
      },
    ],
    benefits: [
      "Mayor control sobre impactos fiscales.",
      "Planeación anticipada de decisiones empresariales.",
      "Reducción de contingencias tributarias.",
      "Mejor integración entre finanzas y tributación.",
    ],
    deliverables: [
      "Diagnóstico tributario.",
      "Matriz de riesgos fiscales.",
      "Escenarios de planeación.",
      "Recomendaciones estratégicas.",
    ],
    ctaLabel: "Solicitar estrategia tributaria",
    accentColor: "#c96a1b",
  },
  {
    slug: "estructura-empresarial",
    title: "Estructura Empresarial",
    description:
      "Diseño y optimización de la estructura organizacional de las empresas para mejorar su eficiencia y competitividad.",
    brand: "TRACO",
    href: "/soluciones/estructura-empresarial",
    image: "/fotos/servicios/estructura-empresarial.webp",
    category: "strategic",
    eyebrow: "Estructura corporativa",
    heroTitle:
      "Estructura empresarial para operar con orden, claridad y respaldo documental.",
    technicalIntro:
      "Este servicio acompaña a empresas que necesitan ordenar su estructura jurídica, administrativa y documental para operar con mayor seguridad.",
    sections: [
      {
        title: "Revisión de estructura actual",
        text: "Análisis de la forma jurídica, documentación, responsabilidades, registros y puntos críticos de operación empresarial.",
      },
      {
        title: "Diseño organizacional y documental",
        text: "Definición de una estructura más clara para soportar decisiones, trámites, registros y obligaciones corporativas.",
      },
      {
        title: "Formalización y actualización",
        text: "Acompañamiento en ajustes documentales, registros, actualizaciones y procesos necesarios ante entidades correspondientes.",
      },
    ],
    benefits: [
      "Mayor orden documental.",
      "Claridad sobre responsabilidades empresariales.",
      "Mejor soporte para operar y crecer.",
      "Reducción de fricciones ante entidades.",
    ],
    deliverables: [
      "Diagnóstico de estructura.",
      "Mapa documental.",
      "Recomendaciones de ajuste.",
      "Ruta de formalización.",
    ],
    ctaLabel: "Solicitar revisión estructural",
    accentColor: "#2563eb",
  },
  {
    slug: "simplificacion-de-procesos",
    title: "Simplificación de Procesos",
    description:
      "Optimización de procesos contables, financieros y administrativos para mejorar la eficiencia operativa y la toma de decisiones.",
    brand: "SADI ERP",
    href: "/soluciones/simplificacion-de-procesos",
    image: "/fotos/servicios/simplicidad-procesos.webp",
    category: "strategic",
    eyebrow: "Procesos y tecnología",
    heroTitle:
      "Simplificación de procesos para convertir operación dispersa en información útil.",
    technicalIntro:
      "Este servicio identifica procesos repetitivos, desordenados o manuales para transformarlos en flujos más claros, medibles y automatizables.",
    sections: [
      {
        title: "Diagnóstico operativo",
        text: "Revisión de procesos contables, administrativos y financieros para detectar duplicidades, reprocesos y puntos de fricción.",
      },
      {
        title: "Diseño de flujo eficiente",
        text: "Construcción de una ruta operativa más simple, con responsables, entradas, salidas, controles y herramientas de soporte.",
      },
      {
        title: "Automatización y seguimiento",
        text: "Preparación de los procesos para integrarse con sistemas de información, tableros de control y gestión basada en datos.",
      },
    ],
    benefits: [
      "Menos tareas repetitivas.",
      "Mayor control de la operación.",
      "Información más organizada.",
      "Procesos listos para automatización.",
    ],
    deliverables: [
      "Mapa de procesos.",
      "Identificación de reprocesos.",
      "Propuesta de simplificación.",
      "Ruta de automatización.",
    ],
    ctaLabel: "Solicitar diagnóstico de procesos",
    accentColor: "#d97706",
  },
  {
    slug: "devoluciones-de-iva",
    title: "Devoluciones de IVA",
    description:
      "Servicio de gestión integral de devoluciones de IVA, diseñado para optimizar tiempos, reducir costos y garantizar el cumplimiento normativo en empresas de todos los tamaños.",
    brand: "Grupo A&C",
    href: "/soluciones/devoluciones-de-iva",
    image: "/fotos/servicios/devoluciones-iva.webp",
    category: "operational",
    eyebrow: "Gestión tributaria",
    heroTitle:
      "Devoluciones de IVA gestionadas con técnica, evidencia y control documental.",
    technicalIntro:
      "Este servicio acompaña a empresas en la preparación, revisión y gestión de solicitudes de devolución de IVA, cuidando soportes, requisitos y trazabilidad.",
    sections: [
      {
        title: "Revisión de procedencia",
        text: "Evaluación técnica para determinar si la empresa cuenta con condiciones, soportes y saldos que permitan solicitar la devolución.",
      },
      {
        title: "Preparación documental",
        text: "Organización de información contable, fiscal y documental requerida para sustentar la solicitud ante la entidad correspondiente.",
      },
      {
        title: "Acompañamiento en el proceso",
        text: "Seguimiento a la radicación, requerimientos, respuestas y etapas asociadas al trámite de devolución.",
      },
    ],
    benefits: [
      "Mayor control documental.",
      "Reducción de errores en la solicitud.",
      "Mejor trazabilidad del proceso.",
      "Acompañamiento técnico ante requerimientos.",
    ],
    deliverables: [
      "Diagnóstico de procedencia.",
      "Lista de soportes requeridos.",
      "Preparación de expediente.",
      "Acompañamiento del trámite.",
    ],
    ctaLabel: "Solicitar revisión de IVA",
    accentColor: "#c96a1b",
  },
  {
    slug: "contabilidad-total-o-por-eventos",
    title: "Contabilidad Total o Por Eventos",
    description:
      "Servicio de outsourcing contable, con opción de contabilidad total o por eventos específicos, adaptado a las necesidades y capacidades de cada empresa.",
    brand: "Grupo A&C",
    href: "/soluciones/contabilidad-total-o-por-eventos",
    image: "/fotos/servicios/contabilidad.webp",
    category: "operational",
    eyebrow: "Gestión contable",
    heroTitle:
      "Contabilidad total o por eventos para empresas que necesitan orden financiero.",
    technicalIntro:
      "Este servicio permite a la empresa delegar total o parcialmente su gestión contable, según su necesidad, volumen operativo y capacidad interna.",
    sections: [
      {
        title: "Contabilidad total",
        text: "Gestión integral del ciclo contable, registros, conciliaciones, cierres, reportes y acompañamiento periódico.",
      },
      {
        title: "Contabilidad por eventos",
        text: "Atención de necesidades específicas como cierres, revisiones, actualizaciones, registros puntuales o procesos extraordinarios.",
      },
      {
        title: "Información para decidir",
        text: "Organización de la información contable para que sirva como base de análisis financiero, tributario y gerencial.",
      },
    ],
    benefits: [
      "Mayor orden contable.",
      "Flexibilidad según necesidad de la empresa.",
      "Soporte técnico especializado.",
      "Información lista para análisis y cumplimiento.",
    ],
    deliverables: [
      "Registros contables.",
      "Conciliaciones y reportes.",
      "Cierres periódicos o puntuales.",
      "Acompañamiento técnico.",
    ],
    ctaLabel: "Solicitar servicio contable",
    accentColor: "#16a34a",
  },
  {
    slug: "formacion-profesional-contable",
    title: "Formación Profesional Contable",
    description:
      "Formación personalizada para equipos contables, financieros y administrativos, orientada a fortalecer capacidades internas y autonomía en la gestión de la información financiera.",
    brand: "CEC",
    href: "/soluciones/formacion-profesional-contable",
    image: "/fotos/servicios/formacion-profesional.webp",
    category: "operational",
    eyebrow: "Formación contable",
    heroTitle:
      "Formación profesional para contadores que quieren evolucionar hacia estrategia.",
    technicalIntro:
      "Este servicio fortalece las capacidades de equipos contables, financieros y administrativos mediante formación aplicada a la realidad empresarial.",
    sections: [
      {
        title: "Diagnóstico de capacidades",
        text: "Identificación del nivel técnico del equipo, brechas de conocimiento y necesidades de formación prioritaria.",
      },
      {
        title: "Formación aplicada",
        text: "Diseño de sesiones orientadas a resolver problemas reales de la operación contable, tributaria o financiera.",
      },
      {
        title: "Evolución del rol contable",
        text: "Acompañamiento para que el contador avance hacia análisis, auditoría, criterio financiero y apoyo a la dirección empresarial.",
      },
    ],
    benefits: [
      "Equipos más autónomos.",
      "Mejor criterio técnico.",
      "Actualización profesional aplicada.",
      "Mayor conexión entre contabilidad y estrategia.",
    ],
    deliverables: [
      "Diagnóstico de formación.",
      "Plan de sesiones.",
      "Material de apoyo.",
      "Recomendaciones de continuidad.",
    ],
    ctaLabel: "Solicitar formación",
    accentColor: "#16a34a",
  },
  {
    slug: "fin-de-la-auditoria",
    title: "Fin de la auditoría",
    description:
      "Solución para empresas que buscan finalizar procesos de auditoría fiscal o financiera, con el fin de reducir costos, tiempos y complejidad.",
    brand: "Grupo A&C",
    href: "/soluciones/fin-de-la-auditoria",
    image: "/fotos/servicios/fin-auditoria.webp",
    category: "operational",
    eyebrow: "Cierre técnico",
    heroTitle:
      "Cierre de auditoría para empresas que necesitan resolver procesos abiertos.",
    technicalIntro:
      "Este servicio acompaña a empresas que requieren ordenar, responder y cerrar procesos de auditoría fiscal o financiera con criterio técnico.",
    sections: [
      {
        title: "Revisión del estado del proceso",
        text: "Análisis de antecedentes, requerimientos, soportes, hallazgos y puntos pendientes dentro del proceso de auditoría.",
      },
      {
        title: "Estrategia de cierre",
        text: "Definición de una ruta técnica para responder, sustentar o resolver los elementos críticos que mantienen abierto el proceso.",
      },
      {
        title: "Soporte documental",
        text: "Organización de información y evidencias necesarias para fortalecer la posición de la empresa frente al cierre.",
      },
    ],
    benefits: [
      "Mayor claridad sobre el proceso abierto.",
      "Reducción de desgaste operativo.",
      "Mejor organización de soportes.",
      "Ruta técnica para avanzar hacia el cierre.",
    ],
    deliverables: [
      "Diagnóstico del proceso.",
      "Matriz de pendientes.",
      "Recomendaciones de respuesta.",
      "Soporte para cierre técnico.",
    ],
    ctaLabel: "Solicitar revisión",
    accentColor: "#c96a1b",
  },
  {
    slug: "tramites-dian",
    title: "Trámites DIAN",
    description:
      "RUT, NIT, RISE, entre otros trámites relacionados con la DIAN.",
    brand: "TRACO",
    href: "/soluciones/tramites-dian",
    image: "/fotos/servicios/tramites-dian-v1.webp",
    category: "operational",
    eyebrow: "Trámites institucionales",
    heroTitle:
      "Trámites DIAN gestionados con orden, claridad y acompañamiento técnico.",
    technicalIntro:
      "Este servicio acompaña trámites relacionados con la DIAN para que la empresa pueda formalizar, actualizar o resolver procesos institucionales.",
    sections: [
      {
        title: "Revisión del trámite requerido",
        text: "Identificación del estado actual, requisitos, documentos y pasos necesarios para adelantar el trámite ante la DIAN.",
      },
      {
        title: "Preparación documental",
        text: "Organización de soportes, formularios, datos y documentos requeridos para evitar reprocesos.",
      },
      {
        title: "Acompañamiento y seguimiento",
        text: "Soporte durante la gestión, radicación, respuesta o actualización del trámite solicitado.",
      },
    ],
    benefits: [
      "Menos fricción en el trámite.",
      "Mayor claridad sobre requisitos.",
      "Reducción de errores documentales.",
      "Acompañamiento durante el proceso.",
    ],
    deliverables: [
      "Lista de requisitos.",
      "Preparación de documentos.",
      "Radicación o acompañamiento.",
      "Seguimiento del trámite.",
    ],
    ctaLabel: "Iniciar trámite",
    accentColor: "#2563eb",
  },
  {
    slug: "tramites-camara-de-comercio",
    title: "Trámites Cámara de Comercio",
    description:
      "Constitución, renovación y demás trámites relacionados con la Cámara de Comercio.",
    brand: "TRACO",
    href: "/soluciones/tramites-camara-de-comercio",
    image: "/fotos/servicios/camara-comercio-v1.webp",
    category: "operational",
    eyebrow: "Trámites empresariales",
    heroTitle:
      "Trámites de Cámara de Comercio para formalizar y actualizar empresas.",
    technicalIntro:
      "Este servicio acompaña procesos de constitución, renovación, actualización y gestión documental ante Cámara de Comercio.",
    sections: [
      {
        title: "Constitución y registros",
        text: "Acompañamiento en procesos de creación empresarial, inscripción, certificados y documentos requeridos.",
      },
      {
        title: "Renovaciones y actualizaciones",
        text: "Gestión de renovaciones, cambios de información, actualizaciones y movimientos asociados al registro mercantil.",
      },
      {
        title: "Soporte documental",
        text: "Revisión y preparación de documentos para que la empresa mantenga su información formal clara y actualizada.",
      },
    ],
    benefits: [
      "Mayor orden en la formalización.",
      "Acompañamiento frente a requisitos.",
      "Reducción de reprocesos.",
      "Información empresarial actualizada.",
    ],
    deliverables: [
      "Diagnóstico del trámite.",
      "Preparación documental.",
      "Acompañamiento de gestión.",
      "Seguimiento hasta cierre.",
    ],
    ctaLabel: "Gestionar trámite",
    accentColor: "#2563eb",
  },
];

export const strategicServices = services.filter(
  (service) => service.category === "strategic"
);

export const operationalServices = services.filter(
  (service) => service.category === "operational"
);

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}