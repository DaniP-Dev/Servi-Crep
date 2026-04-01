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
    description: "Inspección técnica de estaciones de servicio con enfoque en cumplimiento normativo y entrega de resultados.",
    shortDescription: "Inspección técnica en sitio para EDS en Colombia.",
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

    faqs: [
      {
        question: "¿Qué revisan en una inspección técnica de una EDS?",
        answer:
          "Se evalúan componentes y condiciones técnicas según el alcance aplicable, con verificación en sitio y registro de hallazgos para el informe final.",
      },
      {
        question: "¿La inspección de EDS sirve para trámites regulatorios?",
        answer:
          "Sí, se entrega documentación técnica de resultados según alcance, útil para procesos internos y requerimientos de autoridades cuando aplique.",
      },
      {
        question: "¿Cuánto tarda una inspección de estación de servicio?",
        answer:
          "Depende del tamaño y condiciones de la instalación. Normalmente se programa en plazos cortos y se ejecuta en una ventana técnica definida.",
      },
      {
        question: "¿Atienden inspección de EDS en Barranquilla y otras ciudades?",
        answer:
          "Sí. Atendemos Barranquilla, Atlántico y otras regiones de Colombia con programación previa.",
      },
    ],

    seo: {
      primaryQuery: "inspección estaciones de servicio EDS Colombia",
      secondaryQueries: [
        "inspección técnica EDS barranquilla",
        "inspección periódica estaciones de servicio",
        "organismo inspección EDS ONAC",
        "requisitos para inspección de EDS",
        "cotizar inspección estaciones de servicio",
      ],
      cityModifiers: [...CITY_MODIFIERS],
    },
  },

  hermeticidad: {
    title: "Pruebas de hermeticidad a tanques y líneas",
    description: "Pruebas de hermeticidad para tanques y líneas de combustible en estaciones de servicio.",
    shortDescription: "Pruebas de hermeticidad para EDS, tanques y líneas de combustible.",
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

    faqs: [
      {
        question: "¿Cómo saber si un tanque de combustible tiene fuga?",
        answer:
          "La forma confiable es mediante pruebas técnicas de hermeticidad con metodología y equipos calibrados, evitando diagnósticos incompletos.",
      },
      {
        question: "Siento olor a gasolina, ¿debo hacer prueba de hermeticidad?",
        answer:
          "Sí, es recomendable evaluar tanques y líneas con una prueba de hermeticidad para descartar fugas y reducir riesgos operativos.",
      },
      {
        question: "¿Cada cuánto se hace la prueba de hermeticidad en una EDS?",
        answer:
          "La periodicidad depende del requisito aplicable y del estado operativo de la instalación. Te asesoramos para definir el momento correcto.",
      },
      {
        question: "¿La prueba de hermeticidad aplica solo para tanques o también para líneas?",
        answer:
          "Aplica para tanques y líneas según alcance técnico del servicio, con verificación en sitio y registro de resultados.",
      },
      {
        question: "¿La prueba de hermeticidad tiene validez técnica?",
        answer:
          "Sí, se entrega documentación de resultados según alcance, soportada en procedimientos técnicos y equipos calibrados.",
      },
      {
        question: "¿Quién puede hacer prueba de fugas en líneas de combustible?",
        answer:
          "Debe realizarla un equipo técnico competente con metodología de hermeticidad. En ServiCrep ejecutamos la verificación con enfoque técnico.",
      },
      {
        question: "¿Pueden hacer pruebas de hermeticidad fuera del Atlántico?",
        answer:
          "Sí. Prestamos el servicio en Colombia con cobertura nacional y programación previa.",
      },
      {
        question: "¿Qué entregan después de la prueba de hermeticidad?",
        answer:
          "Entregamos informe o certificado de resultados según alcance, con observaciones técnicas para soporte operativo.",
      },
    ],

    seo: {
      primaryQuery: "pruebas de hermeticidad tanques de combustible Colombia",
      secondaryQueries: [
        "prueba hermeticidad EDS barranquilla",
        "prueba estanqueidad tanques subterráneos",
        "detección de fugas en tanques de gasolina",
        "certificación de hermeticidad combustible",
        "cotizar prueba de hermeticidad",
      ],
      cityModifiers: [...CITY_MODIFIERS],
    },
  },

  paqueteInspeccionHermeticidad: {
    title: "Paquete: Inspección + Hermeticidad",
    description: "Servicio integral de inspección EDS y hermeticidad en una sola programación de visita.",
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

    faqs: [
      {
        question: "¿Conviene contratar inspección y hermeticidad juntos?",
        answer:
          "Sí, porque reduces tiempos de coordinación, concentras la operación en una sola visita y simplificas el seguimiento técnico.",
      },
      {
        question: "¿Qué incluye el paquete integral para EDS?",
        answer:
          "Incluye inspección técnica de la EDS y pruebas de hermeticidad según alcance, más documentación de resultados y observaciones técnicas.",
      },
      {
        question: "¿Cuánto tarda el servicio combinado?",
        answer:
          "Generalmente se ejecuta entre 1 y 2 días hábiles, dependiendo del alcance y de las condiciones de la estación.",
      },
      {
        question: "¿Atienden paquete integral en Colombia?",
        answer:
          "Sí. El servicio combinado está disponible con cobertura nacional y programación previa.",
      },
    ],

    seo: {
      primaryQuery: "inspección EDS y hermeticidad en una sola visita",
      secondaryQueries: [
        "paquete inspección y hermeticidad Colombia",
        "servicio integral estaciones de servicio",
        "contratar inspección y hermeticidad juntos",
        "inspección técnica integral combustible",
        "cotización inspección más hermeticidad",
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
