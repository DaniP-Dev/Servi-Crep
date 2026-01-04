// ============================================
// INTERFACES
// ============================================

interface FAQ {
  question: string;
  answer: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceSEO {
  primaryQuery: string;
  secondaryQueries: string[];
  cityModifiers?: string[];
}

interface Service {
  title: string;
  description: string;
  shortDescription: string;
  longDescription: string;
  cta: string;
  slug: string;
  icon: string;
  benefits: string[];
  includes: string[];
  process: ProcessStep[];
  duration?: string;
  faqs?: FAQ[];
  guarantee?: string;
  seo: ServiceSEO;
}

// ============================================
// CONSTANTES REUTILIZABLES
// ============================================

const CITY_MODIFIERS = [
  "Barranquilla",
  "Soledad",
  "Atlántico",
  "Costa Caribe",
  "Colombia",
] as const;

const COMMON_PROCESS = {
  solicitud: { title: "Solicitud", description: "Recibimos su solicitud y confirmamos disponibilidad" },
  programacion: { title: "Programación", description: "Coordinamos fecha y hora de visita" },
  cotizacion: { title: "Cotización", description: "Definimos alcance y enviamos propuesta" },
  agendamiento: { title: "Agendamiento", description: "Programamos la visita técnica" },
} as const;

const COMMON_INCLUDES = {
  informeCertificado: "Informe/Certificado de resultados (según aplique)",
  observaciones: "Observaciones técnicas del resultado",
  orientacionReinspeccion: "Orientación para el proceso de reinspección (si aplica)",
} as const;

// ============================================
// SERVICIOS
// ============================================

const services: Record<string, Service> = {
  inspeccionEds: {
    title: "Inspección de estaciones de servicio (EDS)",
    description: "Inspección técnica en sitio con entrega de resultados (según aplique).",
    shortDescription: "Inspección en sitio para EDS.",
    longDescription:
      "Realizamos inspecciones técnicas en estaciones de servicio (EDS) y emitimos los resultados correspondientes según el alcance aplicable. Servicio programado y ejecutado en la instalación.",
    cta: "Cotizar inspección",
    slug: "/nuestros-servicios/inspeccion-eds",
    icon: "/favicon.ico",
    duration: "1-2 días hábiles",
    guarantee: "Servicio ejecutado por personal con competencia técnica",

    benefits: [
      "Enfoque en cumplimiento normativo según alcance aplicable",
      "Detección temprana de condiciones a verificar",
      "Informe técnico detallado con resultados",
      "Personal con competencia técnica demostrada",
    ],

    includes: [
      "Visita técnica programada",
      "Evaluación de componentes según alcance",
      COMMON_INCLUDES.informeCertificado,
      COMMON_INCLUDES.observaciones,
    ],

    process: [
      COMMON_PROCESS.solicitud,
      COMMON_PROCESS.programacion,
      { title: "Inspección", description: "Ejecutamos la inspección técnica en sitio" },
      { title: "Entrega", description: "Enviamos informe con resultados según alcance" },
    ],

    seo: {
      primaryQuery: "inspección estaciones de servicio EDS Colombia",
      secondaryQueries: [
        "inspección técnica EDS",
        "inspección EDS Ministerio Minas",
        "organismo inspección estaciones combustible",
        "inspección periódica EDS",
        "requisitos inspección estación de servicio",
      ],
      cityModifiers: [...CITY_MODIFIERS],
    },
  },

  hermeticidad: {
    title: "Pruebas de hermeticidad",
    description: "Pruebas en sitio para verificar hermeticidad (según alcance).",
    shortDescription: "Pruebas de hermeticidad para EDS.",
    longDescription:
      "Ejecutamos pruebas de hermeticidad en sitio para verificar condiciones de hermeticidad en los componentes cubiertos por el alcance definido.",
    cta: "Cotizar hermeticidad",
    slug: "/nuestros-servicios/pruebas-hermeticidad",
    icon: "/favicon.ico",
    duration: "1 día hábil",
    guarantee: "Equipos calibrados y metodología según norma aplicable",

    benefits: [
      "Verificación de condiciones de hermeticidad",
      "Enfoque en cumplimiento de requisitos técnicos",
      "Equipos de medición calibrados",
      "Resultados documentados según metodología",
    ],

    includes: [
      "Pruebas en componentes según alcance definido",
      "Uso de equipos especializados calibrados",
      COMMON_INCLUDES.informeCertificado,
      COMMON_INCLUDES.orientacionReinspeccion,
    ],

    process: [
      COMMON_PROCESS.cotizacion,
      COMMON_PROCESS.agendamiento,
      { title: "Ejecución", description: "Realizamos las pruebas de hermeticidad" },
      { title: "Documentación", description: "Entregamos informe/certificado con resultados" },
    ],

    seo: {
      primaryQuery: "prueba hermeticidad tanques combustible Colombia",
      secondaryQueries: [
        "prueba hermeticidad EDS",
        "hermeticidad tanques subterráneos",
        "prueba estanqueidad combustible",
        "verificación hermeticidad estación servicio",
        "prueba fugas tanques combustible",
      ],
      cityModifiers: [...CITY_MODIFIERS],
    },
  },

  paqueteInspeccionHermeticidad: {
    title: "Paquete: Inspección + Hermeticidad",
    description: "Dos servicios en una sola programación de visita.",
    shortDescription: "Inspección + hermeticidad en una sola agenda.",
    longDescription:
      "Programa la inspección de EDS y las pruebas de hermeticidad en una sola visita para optimizar tiempos de coordinación y operación.",
    cta: "Cotizar paquete",
    slug: "/nuestros-servicios/inspeccion-eds-hermeticidad",
    icon: "/favicon.ico",
    duration: "1-2 días hábiles",
    guarantee: "Servicio integral ejecutado por personal competente",

    benefits: [
      "Optimización de tiempo y coordinación",
      "Una sola programación para ambos servicios",
      "Un solo proceso de agendamiento",
      "Documentación consolidada",
    ],

    includes: [
      "Inspección técnica de EDS según alcance",
      "Pruebas de hermeticidad según alcance",
      COMMON_INCLUDES.informeCertificado,
      COMMON_INCLUDES.observaciones,
    ],

    process: [
      { title: "Solicitud única", description: "Una sola cotización para ambos servicios" },
      { title: "Coordinación", description: "Agendamos una visita que cubra todo" },
      { title: "Ejecución integral", description: "Inspección y pruebas en la misma jornada" },
      { title: "Entrega completa", description: "Recibe toda la documentación según aplique" },
    ],

    seo: {
      primaryQuery: "inspección EDS y prueba hermeticidad Colombia",
      secondaryQueries: [
        "paquete inspección hermeticidad EDS",
        "inspección completa estación servicio",
        "servicio integral EDS Colombia",
        "inspección y hermeticidad tanques",
        "verificación EDS completa",
      ],
      cityModifiers: [...CITY_MODIFIERS],
    },
  },
};

// ============================================
// EXPORTS
// ============================================

export type { Service, ServiceSEO, ProcessStep, FAQ };
export { CITY_MODIFIERS, COMMON_PROCESS, COMMON_INCLUDES };
export default services;
