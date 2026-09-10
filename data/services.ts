export type ServiceCategory = "strategic" | "operational";

export type ServiceSection = {
  title: string;
  text: string;
};

export type ServiceCta = {
  label: string;
  href: string;
};

export type ServiceLandingItem = {
  title: string;
  text?: string;
  subtitle?: string;
  criterion?: string;
  badge?: string;
  group?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type ServiceLandingSection = {
  id?: string;
  layout:
    | "cards"
    | "compact"
    | "steps"
    | "profiles"
    | "split"
    | "assessment"
    | "diagnostic"
    | "faq"
    | "cta";
    diagnosticVariant?: "renta" | "devolucion";
  theme?: "light" | "warm" | "dark";
  eyebrow?: string;
  title: string;
  description?: string;
  columns?: 2 | 3 | 4 | 6;
  items?: ServiceLandingItem[];
  primaryCta?: ServiceCta;
  secondaryCta?: ServiceCta;

   ctaHeading?: string;
  trustText?: string;
};

export type ServiceLanding = {
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroSupportingText?: string;
  primaryCta: ServiceCta;
  secondaryCta?: ServiceCta;
  trustPoints?: string[];
  sections: ServiceLandingSection[];
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
  landing?: ServiceLanding;
};

export const services: ServiceItem[] = [

  {
    slug: "asesoria-tributaria-financiera",
    title: "Asesoría Tributaria y Financiera",
    description:
      "Asesoría integral en materia tributaria y financiera, diseñada para optimizar la carga fiscal, mejorar la rentabilidad y asegurar el cumplimiento normativo de las empresas.",
    brand: "Grupo A&C",
    href: "/soluciones/asesoria-tributaria-financiera",
    image: "/fotos/servicios/asesoria-tributaria-v1.png",
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
    image: "/fotos/servicios/auditorias-financieras.png",
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
    image: "/fotos/servicios/reestructuracion-patrimonial-v1.png",
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
    image: "/fotos/servicios/estrategia-tributaria-v1.png",
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
    image: "/fotos/servicios/estructura-empresarial.png",
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
    image: "/fotos/servicios/simplificacion-de-procesos.png",
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
  slug: "devolucion-impuestos",
  title: "Devolución de Impuestos",
  description:
    "Acompañamiento especializado para evaluar, preparar y gestionar solicitudes de devolución de saldos a favor ante la DIAN, con revisión tributaria, contable y documental.",
  brand: "Grupo A&C",
  href: "/soluciones/devolucion-impuestos",
  image: "/fotos/servicios/devolucion-impuestos.png",
  category: "operational",
  eyebrow: "Devolución de impuestos · Empresas",
  heroTitle:
    "Recupere los saldos a favor de su empresa con respaldo tributario especializado.",
  technicalIntro:
    "Evaluamos la procedencia del saldo a favor, revisamos la información que lo sustenta y acompañamos la preparación y gestión de la solicitud ante la DIAN.",
  sections: [
    {
      title: "Evaluación de procedencia",
      text:
        "Revisamos inicialmente el origen del saldo a favor, los períodos involucrados y la información tributaria relacionada para determinar la viabilidad del proceso.",
    },
    {
      title: "Revisión y preparación",
      text:
        "Analizamos la información tributaria, contable y documental necesaria para estructurar una solicitud consistente y técnicamente sustentada.",
    },
    {
      title: "Acompañamiento ante la DIAN",
      text:
        "Acompañamos la presentación, seguimiento y atención de las actuaciones que correspondan dentro del alcance contratado.",
    },
  ],
  benefits: [
    "Evaluación previa antes de iniciar la solicitud.",
    "Mayor consistencia tributaria, contable y documental.",
    "Reducción de reprocesos y errores evitables.",
    "Acompañamiento especializado durante el trámite.",
  ],
  deliverables: [
    "Evaluación inicial de procedencia.",
    "Relación de información y soportes requeridos.",
    "Preparación y organización del expediente.",
    "Acompañamiento durante el proceso.",
  ],
  ctaLabel: "Evaluar mi saldo a favor",
  accentColor: "#c96a1b",

  landing: {
    heroEyebrow: "Devolución de impuestos · Empresas",

    heroTitle:
      "Recupere los saldos a favor de su empresa.",

    heroDescription:
      "Devolución de IVA e impuestos con respaldo tributario especializado. Revisamos la procedencia de su saldo a favor, preparamos la documentación y acompañamos integralmente el proceso de solicitud ante la DIAN.",

    heroSupportingText:
      "Antes de solicitar una devolución, verificamos que la información tributaria, contable y documental que sustenta el saldo sea consistente.",

    primaryCta: {
      label: "Quiero evaluar mi saldo a favor",
      href: "#evaluacion",
    },

    secondaryCta: {
      label: "Conocer cómo lo hacemos",
      href: "#proceso",
    },

    trustPoints: [
      "Grupo A&C · Desde 2006",
      "Especialistas tributarios",
      "Acompañamiento integral",
      "Atención nacional",
    ],

    sections: [
      {
        id: "identificacion",
        layout: "cards",
        theme: "light",
        eyebrow: "Identifique la oportunidad",
        title:
          "¿Su empresa tiene dinero a favor ante la DIAN?",
        description:
          "Un saldo a favor puede representar recursos que permanecen inmovilizados. Estas son algunas situaciones en las que vale la pena evaluar si existe una oportunidad de devolución o compensación.",
        columns: 3,

        items: [
          {
            title: "Saldos a favor en IVA o renta",
            text:
              "Su empresa registra saldos a favor en declaraciones tributarias y quiere determinar si cumplen las condiciones para ser solicitados.",
          },
          {
            title: "Retenciones superiores al impuesto",
            text:
              "Las retenciones, autorretenciones o anticipos acumulados superan recurrentemente el impuesto generado.",
          },
          {
            title: "Operaciones exentas de IVA",
            text:
              "La actividad de la empresa puede generar saldos a favor derivados de operaciones exentas o tratamientos tributarios aplicables.",
          },
          {
            title: "Empresas exportadoras",
            text:
              "Realiza exportaciones de bienes o servicios y puede encontrarse dentro de escenarios que generan saldos susceptibles de devolución.",
          },
          {
            title: "Saldos acumulados de varios períodos",
            text:
              "La empresa viene acumulando saldos a favor y necesita establecer qué períodos y valores podrían ser objeto de solicitud.",
          },
          {
            title: "Solicitudes con inconvenientes",
            text:
              "Ya presentó una solicitud y recibió requerimientos, inadmisión, devolución del expediente o necesita revisar los antecedentes del trámite.",
          },
        ],

        ctaHeading:
          "Su empresa podría tener una oportunidad de recuperación.",

        trustText:
          "Antes de iniciar el proceso, evaluamos la situación tributaria y la procedencia del saldo.",

        primaryCta: {
          label: "Revisar mi caso",
          href: "#evaluacion",
        },
      },

      {
        id: "revision-previa",
        layout: "split",
        theme: "dark",
        eyebrow: "Antes de solicitar",
        title:
          "Tener un saldo a favor no significa que la devolución sea automática.",
        description:
          "Una solicitud puede implicar la revisión de declaraciones tributarias, información exógena, facturación electrónica, retenciones, soportes contables y demás información relacionada con el saldo solicitado.",

        items: [
          {
            title: "Requerimientos",
            text:
              "Diferencias o información insuficiente pueden generar solicitudes adicionales de información por parte de la administración tributaria.",
          },
          {
            title: "Reprocesos",
            text:
              "Una preparación incompleta puede obligar a reconstruir soportes, revisar períodos o corregir información antes de continuar.",
          },
          {
            title: "Inadmisiones",
            text:
              "El incumplimiento de requisitos aplicables puede impedir que la solicitud avance en la forma esperada.",
          },
          {
            title: "Demoras",
            text:
              "Inconsistencias entre declaraciones, soportes e información reportada pueden extender innecesariamente el proceso.",
          },
        ],

        ctaHeading:
          "Primero revisamos. Después solicitamos.",

        trustText:
          "Nuestro trabajo comienza determinando la procedencia del saldo e identificando posibles inconsistencias antes de iniciar el trámite.",

        primaryCta: {
          label: "Evaluar la procedencia de mi saldo",
          href: "#evaluacion",
        },
      },

      {
        id: "proceso",
        layout: "steps",
        theme: "warm",
        eyebrow: "Metodología Grupo A&C",
        title:
          "Así gestionamos su devolución.",
        description:
          "No nos limitamos a preparar una solicitud. Analizamos la información que la sustenta y acompañamos cada etapa dentro del alcance contratado.",

        items: [
          {
            title: "Evaluamos",
            text:
              "Realizamos una revisión inicial del saldo a favor y de la situación tributaria relacionada para determinar su procedencia, identificar riesgos y establecer la viabilidad inicial.",
          },
          {
            title: "Revisamos y preparamos",
            text:
              "Analizamos la información tributaria, contable y documental necesaria, validamos su consistencia e identificamos aspectos que requieran aclaración o soporte adicional.",
          },
          {
            title: "Solicitamos",
            text:
              "Una vez realizada la revisión y completados los requisitos aplicables, preparamos la solicitud y acompañamos su presentación ante la DIAN.",
          },
          {
            title: "Acompañamos",
            text:
              "Realizamos seguimiento al proceso y brindamos acompañamiento frente a actuaciones o requerimientos dentro del alcance del servicio contratado.",
          },
          {
            title: "Cerramos",
            text:
              "Acompañamos la culminación del proceso conforme al alcance contratado y entregamos la documentación correspondiente para conservar su trazabilidad.",
          },
        ],

        ctaHeading:
          "Usted no tiene que enfrentarse solo al proceso.",

        trustText:
          "Un equipo tributario acompaña la evaluación, preparación y gestión de su solicitud.",

        primaryCta: {
          label: "Quiero iniciar la evaluación",
          href: "#evaluacion",
        },
      },

      {
        id: "riesgo",
        layout: "cards",
        theme: "dark",
        eyebrow: "Rigor antes de radicar",
        title:
          "Solicitar una devolución es fácil. Sustentarla correctamente es lo importante.",
        description:
          "Recuperar un saldo a favor no comienza con un formulario. Comienza demostrando que ese saldo está correctamente determinado y sustentado.",
        columns: 3,

        items: [
          {
            title: "Consistencia tributaria",
            text:
              "Revisamos la relación entre declaraciones, retenciones, información exógena y demás elementos tributarios relacionados con la determinación del saldo.",
          },
          {
            title: "Evidencia documental",
            text:
              "Identificamos los documentos y soportes necesarios para construir un expediente organizado y coherente con la solicitud.",
          },
          {
            title: "Revisión contable",
            text:
              "Cuando el caso lo requiere, analizamos la información contable relacionada para verificar que el saldo solicitado tenga respaldo y trazabilidad.",
          },
        ],

        ctaHeading:
          "Una revisión previa puede evitar errores, reprocesos e inconsistencias.",

        trustText:
          "Grupo A&C trabaja bajo un principio sencillo: primero revisamos, después solicitamos.",

        primaryCta: {
          label: "Evaluar mi saldo a favor",
          href: "#evaluacion",
        },
      },

      {
        id: "respaldo",
        layout: "split",
        theme: "light",
        eyebrow: "Confianza y autoridad",
        title:
          "¿Por qué gestionar su devolución con Grupo A&C?",
        description:
          "Detrás de una devolución existe información financiera, contable, tributaria y documental que debe guardar coherencia. Por eso abordamos el proceso desde una perspectiva integral.",

        items: [
          {
            title: "Experiencia tributaria",
            text:
              "Desde 2006 acompañamos empresas y personas en procesos contables, tributarios y financieros.",
          },
          {
            title: "Revisión antes de solicitar",
            text:
              "No partimos de la premisa de que todo saldo a favor necesariamente debe solicitarse. Primero evaluamos su procedencia.",
          },
          {
            title: "Visión integral",
            text:
              "Contabilidad, impuestos, información financiera y soportes documentales forman parte de una misma realidad empresarial.",
          },
          {
            title: "Acompañamiento especializado",
            text:
              "Su empresa cuenta con profesionales que acompañan las diferentes etapas del proceso dentro del alcance contratado.",
          },
        ],

        ctaHeading:
          "Más que gestionar un trámite, construimos un proceso técnicamente sustentado.",

        trustText:
          "Experiencia · Revisión · Trazabilidad · Acompañamiento",

        primaryCta: {
          label: "Quiero revisar mi caso",
          href: "#evaluacion",
        },
      },

      {
  id: "evaluacion",
  layout: "diagnostic",
  diagnosticVariant: "devolucion",
  theme: "warm",
  eyebrow: "Evaluación inicial",
  title: "Evaluemos si su saldo a favor puede ser solicitado.",
  description:
    "Antes de iniciar una devolución queremos entender su caso. Comparta algunos datos de su empresa y del saldo a favor para realizar una evaluación inicial de la situación.",
  primaryCta: {
    label: "Evaluar mi saldo a favor",
    href: "https://wa.me/573118687774",
  },
  secondaryCta: {
    label: "Hablar directamente por WhatsApp",
    href:
      "https://wa.me/573118687774?text=Hola%20Grupo%20A%26C%2C%20estoy%20interesado%20en%20evaluar%20una%20devoluci%C3%B3n%20de%20impuestos%20y%20un%20saldo%20a%20favor%20ante%20la%20DIAN.",
  },
},

      {
        id: "preguntas",
        layout: "faq",
        theme: "light",
        eyebrow: "Preguntas frecuentes",
        title:
          "Antes de solicitar una devolución, resolvamos sus dudas.",
        description:
          "Cada saldo a favor tiene un origen y unas condiciones particulares. Estas respuestas permiten comprender mejor el proceso antes de iniciar una evaluación.",

        items: [
          {
            group: "Viabilidad",
            title:
              "¿Tener un saldo a favor significa que automáticamente puedo solicitar su devolución?",
            text:
              "No necesariamente. La procedencia depende del tipo de impuesto, origen del saldo, período correspondiente, requisitos aplicables y consistencia de la información que lo soporta. Por eso recomendamos realizar una evaluación previa.",
          },
          {
            group: "Viabilidad",
            title:
              "¿Qué saldos a favor pueden ser objeto de devolución?",
            text:
              "Dependiendo de las condiciones particulares del contribuyente y de la normatividad aplicable, pueden existir saldos susceptibles de devolución o compensación en impuestos como IVA y renta.",
          },
          {
            group: "Viabilidad",
            title:
              "¿Puedo solicitar una devolución de períodos anteriores?",
            text:
              "Puede ser posible dependiendo del impuesto, período, origen del saldo y términos legales aplicables. Es necesario revisar cada caso particular.",
          },

          {
            group: "Proceso",
            title:
              "¿Cuánto tarda una devolución?",
            text:
              "Los tiempos pueden variar según el tipo de solicitud, características del contribuyente, documentación presentada, verificaciones de la DIAN y particularidades del proceso.",
          },
          {
            group: "Proceso",
            title:
              "¿Qué documentos necesito?",
            text:
              "Dependerá del origen del saldo y del tipo de devolución. Generalmente se requiere revisar información tributaria, contable y documental relacionada con su determinación.",
          },
          {
            group: "Proceso",
            title:
              "¿Qué sucede si existen inconsistencias en la información?",
            text:
              "Nuestro enfoque busca identificarlas antes de avanzar cuando sea posible. Si encontramos diferencias o situaciones que requieran aclaración, definimos los pasos necesarios antes de continuar.",
          },

          {
            group: "Acompañamiento",
            title:
              "¿Qué ocurre si la DIAN solicita información adicional?",
            text:
              "Una solicitud puede estar sujeta a verificaciones y actuaciones por parte de la autoridad tributaria. Grupo A&C brinda acompañamiento dentro del alcance del servicio contratado.",
          },
          {
            group: "Acompañamiento",
            title:
              "Ya intenté solicitar la devolución y tuve inconvenientes. ¿Pueden revisar mi caso?",
            text:
              "Sí. Podemos revisar los antecedentes del trámite y la documentación disponible para establecer qué ocurrió y determinar las alternativas que correspondan.",
          },
          {
            group: "Acompañamiento",
            title:
              "¿Grupo A&C atiende empresas fuera de Medellín?",
            text:
              "Sí. Podemos acompañar empresas ubicadas en diferentes ciudades de Colombia mediante nuestros canales de atención y herramientas digitales, según las características del proceso.",
          },
          {
            group: "Acompañamiento",
            title:
              "¿Cuánto cuesta el servicio?",
            text:
              "El valor depende del tipo de impuesto, monto del saldo, períodos involucrados, complejidad de la información y alcance requerido. Después de conocer el caso podremos presentar una propuesta acorde con el proceso.",
          },
        ],
      },

      {
        id: "cierre",
        layout: "cta",
        theme: "dark",
        eyebrow: "Devolución de impuestos",
        title:
          "Su empresa ya generó el saldo. Ahora determinemos si puede recuperarlo.",
        description:
          "Mantener recursos inmovilizados sin evaluar su posibilidad de devolución puede significar dejar capital que podría regresar al flujo financiero de su empresa. Permítanos revisar su caso y determinar si existe una oportunidad viable de recuperación.",

        primaryCta: {
          label: "Quiero revisar mi saldo a favor",
          href: "#evaluacion",
        },

        secondaryCta: {
          label: "Hablar con un especialista",
          href:
            "/contacto?servicio=devolucion-impuestos&consulta=especialista",
        },

        trustText:
          "Primero revisamos. Después solicitamos. · Grupo Análisis & Consultorías · Desde 2006",
      },
    ],
  },
},
  {
    slug: "contabilidad",
    title: "Contabilidad",
    description:
      "Servicio de outsourcing contable, con opción de contabilidad total o por eventos específicos, adaptado a las necesidades y capacidades de cada empresa.",
    brand: "Grupo A&C",
    href: "/soluciones/contabilidad",
    image: "/fotos/servicios/contabilidad.png",
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
  slug: "declaracion-de-renta",
  title: "Declaración de Renta para Personas Naturales",
  description:
    "Preparación, revisión y presentación de declaraciones de renta para personas naturales, con análisis tributario, patrimonial y financiero especializado.",
  brand: "Grupo A&C",
  href: "/soluciones/declaracion-de-renta",
  image: "/fotos/servicios/declaracion-renta.png",
  category: "operational",
  eyebrow: "Declaración de renta · Personas naturales",
  heroTitle:
    "Su declaración de renta es más que llenar un formulario.",
  technicalIntro:
    "Analizamos su información tributaria, patrimonial y financiera para preparar una declaración consistente con su realidad económica.",
  sections: [
    {
      title: "Conocemos su situación",
      text: "Identificamos su actividad económica, fuentes de ingreso, patrimonio y demás características relevantes.",
    },
    {
      title: "Analizamos y preparamos",
      text: "Revisamos la información, clasificamos los conceptos aplicables y estructuramos la declaración.",
    },
    {
      title: "Revisamos y presentamos",
      text: "Aplicamos controles de consistencia y acompañamos la presentación dentro del alcance contratado.",
    },
  ],
  benefits: [
    "Mayor seguridad en la preparación de la declaración.",
    "Reducción de errores y omisiones.",
    "Aplicación de tratamientos respaldados por la normativa.",
    "Acompañamiento tributario especializado.",
  ],
  deliverables: [
    "Revisión de información tributaria y patrimonial.",
    "Declaración preparada y validada.",
    "Relación de soportes y observaciones.",
    "Acompañamiento durante la presentación.",
  ],
  ctaLabel: "Preparar mi declaración",
  accentColor: "#c96a1b",

  landing: {
  heroEyebrow: "Declaración de renta · Personas naturales",

  heroTitle:
    "Prepara tu declaración de renta sin enredos y paga lo que legalmente corresponde.",

  heroDescription:
    "Analizamos tus ingresos, patrimonio y realidad financiera para identificar los tratamientos legales aplicables y preparar una declaración consistente y sustentada.",

  heroSupportingText:
    "Un proceso digital para empleados, pensionados, independientes, inversionistas y empresarios en Colombia, con el respaldo tributario de Grupo A&C.",

  primaryCta: {
    label: "Quiero preparar mi declaración con TRACO",
    href: "#comencemos",
  },

  secondaryCta: {
    label: "Evaluar si debo declarar",
    href: "#debo-declarar",
  },

  trustPoints: [
    "Respaldo de Grupo A&C · Desde 2006",
    "Revisión y rigor técnico",
    "Atención digital en Colombia",
  ],

    sections: [
      {
        id: "debo-declarar",
        layout: "assessment",
        theme: "light",
        eyebrow: "Identificación",
        title: "¿Te toca declarar renta este año o te estás arriesgando a una multa?",
        description:"Declarar no siempre significa pagar. Revisar tu situación a tiempo ayuda a prevenir sanciones de la DIAN y, según el resultado, podría permitir identificar un saldo a favor. Revisa si cumples alguna de estas condiciones:",
        columns: 2,
        items: [
           {
      title: "Tus ingresos",
      subtitle:
        "Salarios, honorarios, servicios independientes o arrendamientos.",
      criterion:
        "¿Tus ingresos acumulados durante el año 2025 fueron iguales o superiores a $69,719,000?",
      badge:
        "Aplica para empleados, pensionados, rentistas de capital y trabajadores independientes.",
    },
    {
      title: "Tu patrimonio",
      subtitle:
        "Casas, apartamentos, vehículos, terrenos, inversiones o cuentas de ahorro.",
      criterion:
        "¿SU patrimonio? al 31 de diciembre de 2025 fue igual o superior a $163,000,000?",
      badge:
        "Tener propiedades no significa necesariamente tener un impuesto por pagar.",
    },
    {
      title: "Tarjetas y consignaciones",
      subtitle:
        "Compras con tarjeta, consumos personales, consignaciones y dinero recibido en cuentas.",
      criterion:
  "¿Durante 2025, alguno de estos movimientos alcanzó o superó los $69.719.000: consumos con tarjeta de crédito, compras y consumos totales, o consignaciones, depósitos e inversiones financieras?",
      badge:
        "Los movimientos de dinero de terceros también pueden aparecer dentro de la información reportada a tu nombre.",
    },
    {
      title: "Tu actividad económica",
      subtitle:
        "Comerciantes, prestadores de servicios, empresarios o responsables de IVA.",
      criterion:
        "¿Fue responsable del IVA al 31 de diciembre de 2025?",
      badge:
        "Revisar las obligaciones a tiempo ayuda a prevenir omisiones, intereses y posibles sanciones.",
    },
  ],
  primaryCta: {
    label: "Validar mi caso",
    href: "/contacto?servicio=declaracion-de-renta&consulta=validacion",
  },
},

      {
  id: "educacion",
  layout: "cards",
  theme: "dark",
  eyebrow: "Así protegemos tu declaración",
  title:
    "Nos encargamos de la complejidad para que declares con claridad.",
  description:
    "No trasladamos datos de un lugar a otro. Analizamos tu realidad económica, identificamos los tratamientos que correspondan y preparamos una declaración sustentada.",
  columns: 3,
  items: [
    {
      title: "Auditoría integral de activos e ingresos",
      text:
        "Revisamos tus cuentas, propiedades, inversiones e ingresos en Colombia o en el exterior para verificar que la información sea completa y consistente frente a la DIAN.",
    },
    {
      title: "Optimización legal de deducciones",
      text:
        "Identificamos y aplicamos las deducciones, rentas exentas y retenciones que legalmente correspondan y cuenten con los soportes necesarios, para que no pagues más de lo debido.",
    },
    {
      title: "Presentación segura y oportuna",
      text:
        "Preparamos y acompañamos la presentación de tu declaración con rigor técnico, reduciendo riesgos de clasificación, omisiones y presentación extemporánea.",
    },
  ],
},
      {
  id: "propuesta",
  layout: "split",
  theme: "light",
  eyebrow: "El cierre de confianza",
  title:
    "Declarar bien no es pagar de más. Es pagar lo justo con tranquilidad.",
  description:
    "Determinamos tu situación tributaria real, aplicamos los beneficios legalmente procedentes y preparamos una declaración consistente, sustentada y lista para presentar ante la DIAN.",
  items: [
    {
      title: "Prevención de sanciones y recargos",
      text:
        "Revisamos tus obligaciones y fechas de presentación para reducir riesgos de extemporaneidad, omisiones y errores que puedan generar sanciones o intereses.",
    },
    {
      title: "Pago justo y optimización legal",
      text:
        "Aplicamos las deducciones, rentas exentas y retenciones que correspondan a tu situación y cuenten con el respaldo documental exigido.",
    },
    {
      title: "Rigor financiero y tributario",
      text:
        "Cruzamos la información disponible para que tu declaración refleje de forma consistente tu realidad económica y reduzca posibles diferencias frente a la DIAN.",
    },
    {
      title: "Acompañamiento de principio a fin",
      text:
        "No te dejamos solo frente a una plataforma. TRACO integra tecnología con el acompañamiento profesional del equipo de Grupo A&C.",
    },
  ],
  ctaHeading:
    "¿Listo para preparar tu declaración de renta sin complicaciones?",
  primaryCta: {
    label: "Quiero preparar mi declaración con TRACO",
    href:
      "/contacto?servicio=declaracion-de-renta&marca=traco",
  },
  trustText:
    "Rigor técnico · Proceso digital · Respaldo profesional de Grupo A&C",
},

      {
  id: "ruta",
  layout: "steps",
  theme: "warm",
  eyebrow: "La Ruta TRACO",
  title: "Así de fácil es preparar tu declaración con TRACO.",
  description:
    "De tus documentos a una declaración revisada, sustentada y acompañada hasta su presentación, en cuatro pasos.",
  columns: 4,
  items: [
    {
      title: "Diagnóstico inicial personalizado",
      text:
        "Entendemos tu perfil como empleado, pensionado, independiente, inversionista o empresario para solicitarte únicamente los documentos que realmente necesitas.",
    },
    {
      title: "Recepción digital de documentos",
      text:
        "Nos compartes extractos, certificados y soportes por los canales definidos para el proceso, sin desplazamientos ni trámites físicos innecesarios.",
    },
    {
      title: "Análisis, optimización y preparación",
      text:
        "Los especialistas de Grupo A&C cruzan tu información, aplican los tratamientos legales que correspondan y estructuran una declaración consistente con tu realidad económica.",
    },
    {
      title: "Presentación y entrega",
      text:
        "Revisamos el resultado final, acompañamos la presentación ante la DIAN y te entregamos la declaración y los soportes correspondientes al servicio contratado.",
    },
  ],
  ctaHeading: "¿Tienes dudas durante el proceso?",
  trustText:
    "Cuentas con acompañamiento profesional para resolver inquietudes sobre tus documentos, obligaciones y fechas de vencimiento.",
  primaryCta: {
    label: "Iniciar mi proceso con TRACO",
    href:
      "/contacto?servicio=declaracion-de-renta&marca=traco&etapa=inicio",
  },
},

      {
        id: "perfiles",
        layout: "profiles",
        theme: "light",
        eyebrow: "Segmentación",
        title:
          "No todas las declaraciones de renta tienen la misma complejidad.",
        description:
          "Identifique cuál de estos perfiles se parece más a su situación.",
        columns: 3,
        items: [
          {
            title: "Empleados y pensionados",
            text: "Ingresos laborales, pensiones, retenciones, patrimonio y beneficios aplicables.",
            ctaLabel: "Consultar mi caso",
            ctaHref:
              "#comencemos",
          },
          {
            title: "Profesionales independientes",
            text: "Honorarios, prestación de servicios, costos, gastos, aportes y retenciones.",
            ctaLabel: "Consultar mi caso",
            ctaHref:
              "#comencemos",
          },
          {
            title: "Propietarios de inmuebles",
            text: "Vivienda, arrendamientos, ventas, financiación y composición patrimonial.",
            ctaLabel: "Consultar mi caso",
            ctaHref:
              "#comencemos",
          },
          {
            title: "Inversionistas",
            text: "Dividendos, acciones, fondos, inversiones y rendimientos financieros.",
            ctaLabel: "Consultar mi caso",
            ctaHref:
              "#comencemos",
          },
          {
            title: "Empresarios y socios",
            text: "Participaciones societarias, dividendos, ingresos personales y estructuras patrimoniales.",
            ctaLabel: "Consultar mi caso",
            ctaHref:
              "#comencemos",
          },
          {
            title: "Patrimonios u operaciones complejas",
            text: "Múltiples activos, operaciones especiales o situaciones nacionales e internacionales que exigen mayor análisis.",
            ctaLabel: "Hablar con especialista",
            ctaHref:
              "#comencemos",
          },
        ],
      },

      {
  id: "respaldo",
  layout: "cards",
  theme: "dark",
  eyebrow: "Confianza y autoridad",
  title:
    "El respaldo de una firma experta detrás de tu tranquilidad tributaria.",
  description:
    "TRACO integra tecnología, criterio profesional y la rigurosidad tributaria de Grupo A&C para preparar una declaración coherente con tu realidad económica.",
  columns: 3,
  items: [
    {
      title: "20 años de experiencia tributaria",
      text:
        "El respaldo de Grupo A&C, una firma con trayectoria desde 2006 acompañando decisiones contables, tributarias y empresariales de personas y organizaciones en Colombia.",
    },
    {
      title: "Rigor técnico y control de calidad",
      text:
        "Tu declaración no depende únicamente de un proceso automatizado. Especialistas tributarios revisan, validan y cruzan la información para reducir errores, omisiones e inconsistencias.",
    },
    {
      title: "Atención digital en Colombia",
      text:
        "Recibe orientación y acompañamiento remoto sin importar tu ciudad, mediante los canales definidos para compartir información y avanzar durante cada etapa del proceso.",
    },
  ],
  ctaHeading:
    "¿Quieres que un especialista revise tu caso antes de declarar?",
  trustText:
    "Orientación personalizada · Proceso digital · Respaldo profesional de Grupo A&C",
  primaryCta: {
    label: "Hablar con un especialista tributario",
    href:
      "/contacto?servicio=declaracion-de-renta&marca=traco&consulta=especialista",
  },
},
     {
  id: "comencemos",
  layout: "diagnostic",
  theme: "warm",
  eyebrow: "Cotización inicial",
  title: "Cotiza tu declaración de renta según la complejidad de tu caso.",
  description:
    "Comparte tus datos básicos y selecciona los rangos aproximados de ingresos y patrimonio. Al continuar, abriremos WhatsApp con la información lista para enviar.",
  primaryCta: {
    label: "Cotizar mi declaración de renta",
    href: "https://wa.me/573118687774",
  },
  secondaryCta: {
    label: "Hablar directamente por WhatsApp",
    href:
      "https://wa.me/573118687774?text=Hola%20Grupo%20A%26C%2C%20quiero%20recibir%20orientaci%C3%B3n%20sobre%20mi%20declaraci%C3%B3n%20de%20renta%20con%20TRACO.",
  },
},
     {
  id: "preguntas",
  layout: "faq",
  theme: "light",
  eyebrow: "Preguntas frecuentes",
  title: "Antes de declarar, resolvamos tus dudas.",
  description:
    "Encuentra respuestas sobre tus obligaciones, las alternativas legales disponibles y el acompañamiento de TRACO.",
  items: [
    {
      group: "Obligación y sanciones",
      title: "¿Cómo sé si estoy obligado a declarar renta?",
      text:
        "La obligación depende de las condiciones vigentes para el año gravable y de factores como ingresos, patrimonio, compras, consumos, movimientos financieros y responsabilidades frente al IVA. En TRACO revisamos tu situación antes de determinar si debes declarar.",
    },
    {
      group: "Obligación y sanciones",
      title:
        "¿Qué sucede si se vence mi fecha de presentación ante la DIAN?",
      text:
        "Una presentación extemporánea puede generar sanciones y, cuando existe un saldo por pagar, intereses. Es importante revisar el caso cuanto antes para determinar la obligación y la ruta de regularización correspondiente.",
    },
    {
      group: "Obligación y sanciones",
      title: "¿Puedo corregir declaraciones de años anteriores?",
      text:
        "Sí, cuando proceda según los términos, procedimientos y plazos aplicables. Primero revisamos la declaración presentada para determinar el tipo de corrección y sus posibles efectos tributarios.",
    },

    {
      group: "Ahorro y resultado tributario",
      title:
        "¿Declarar renta significa necesariamente pagar impuesto?",
      text:
        "No. Presentar una declaración y tener un impuesto a cargo son situaciones diferentes. El resultado depende de tus ingresos, patrimonio, retenciones, deducciones y demás tratamientos aplicables.",
    },
    {
      group: "Ahorro y resultado tributario",
      title: "¿Puedo aplicar deducciones o beneficios para pagar menos?",
      text:
        "Podemos aplicar las deducciones, rentas exentas, retenciones y demás tratamientos que legalmente correspondan y cuenten con los soportes requeridos. El objetivo es determinar correctamente el valor que debes pagar, sin excesos ni tratamientos improcedentes.",
    },
    {
      group: "Ahorro y resultado tributario",
      title:
        "¿Qué sucede si tengo propiedades, acciones o activos en el exterior?",
      text:
        "Estos activos pueden influir en tu patrimonio, ingresos, dividendos, ganancias ocasionales o en otras obligaciones informativas. Tenerlos no significa automáticamente pagar más, pero sí requiere una revisión particular.",
    },

    {
      group: "El servicio TRACO",
      title: "¿Qué documentos necesito enviar?",
      text:
        "Depende de tu perfil económico. Después del diagnóstico inicial te indicaremos únicamente los certificados, extractos, soportes patrimoniales, documentos de inversiones y demás información necesaria para tu caso.",
    },
    {
      group: "El servicio TRACO",
      title:
        "¿Cómo manejan los casos de independientes o socios de empresas?",
      text:
        "Para independientes revisamos honorarios, contratos, aportes, retenciones, costos y gastos soportados. Para socios analizamos participaciones, dividendos, préstamos, pagos recibidos y demás relaciones económicas con la empresa.",
    },
    {
      group: "El servicio TRACO",
      title: "¿Atienden a personas fuera de Medellín?",
      text:
        "Sí. El proceso de TRACO puede gestionarse de manera digital desde diferentes ciudades y municipios de Colombia, desde la recepción de documentos hasta el acompañamiento durante la presentación.",
    },
  ],
},
   {
  id: "cierre",
  layout: "cta",
  theme: "dark",
  eyebrow: "Da el siguiente paso",
  title: "Tu tranquilidad tributaria está a un paso.",
  description:
    "Prepara tu declaración con criterio técnico, aprovecha los tratamientos legales que correspondan y reduce el riesgo de errores, inconsistencias y sanciones. TRACO integra una experiencia digital con el respaldo profesional de Grupo A&C.",
  primaryCta: {
    label: "Quiero preparar mi declaración con TRACO",
    href: "#comencemos",
  },
  trustText:
    "Atención digital en Colombia · Rigor técnico · Explicaciones claras · Respaldo de Grupo A&C",
  },
      ],
  },
},
{
  slug: "software-sadi",
  title: "Software SADI",
  description:
    "Software contable y administrativo diseñado para organizar información, automatizar procesos y mejorar el control empresarial.",
  brand: "SADI",
  href: "/soluciones/software-sadi",
  image: "/fotos/servicios/software-sadi.png",
  category: "operational",
  eyebrow: "Tecnología empresarial",
  heroTitle:
    "Software SADI para organizar información, automatizar procesos y mejorar decisiones empresariales.",
  technicalIntro:
    "SADI integra información contable, administrativa y financiera en una plataforma diseñada para reducir tareas repetitivas, mejorar la trazabilidad y facilitar el análisis empresarial.",
  sections: [
    {
      title: "Organización de información",
      text: "Centralización de datos contables, administrativos y financieros para facilitar consulta, seguimiento y control.",
    },
    {
      title: "Automatización de procesos",
      text: "Reducción de tareas manuales y repetitivas mediante flujos estructurados, controles y herramientas digitales.",
    },
    {
      title: "Información para decidir",
      text: "Acceso a información organizada y oportuna para apoyar análisis, auditoría y decisiones gerenciales.",
    },
  ],
  benefits: [
    "Menos tareas operativas repetitivas.",
    "Mayor trazabilidad de la información.",
    "Mejor control administrativo y contable.",
    "Información disponible para análisis y decisión.",
  ],
  deliverables: [
    "Diagnóstico de necesidades.",
    "Configuración e implementación.",
    "Acompañamiento de puesta en marcha.",
    "Soporte y orientación de uso.",
  ],
  ctaLabel: "Conocer SADI",
  accentColor: "#d97706",
},
  {
    slug: "tramites-dian",
    title: "Trámites DIAN",
    description:
      "RUT, NIT, RISE, entre otros trámites relacionados con la DIAN.",
    brand: "TRACO",
    href: "/soluciones/tramites-dian",
    image: "/fotos/servicios/tramites-dian-v2.png",
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
    image: "/fotos/servicios/tramite-camara-comercio-v1.png",
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