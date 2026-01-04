interface FAQ {
  question: string;
  answer: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface Service {
  title: string;
  description: string;
  shortDescription: string;
  longDescription: string;
  cta: string;
  slug: string;
  icon: string;
  // Elementos de conversión
  benefits: string[];           // ¿Por qué elegir este servicio?
  includes: string[];           // ¿Qué está incluido?
  process: ProcessStep[];       // ¿Cómo funciona?
  duration?: string;            // Tiempo estimado
  faqs?: FAQ[];                 // Preguntas frecuentes
  guarantee?: string;           // Garantía o respaldo
}


const services: Record<string, Service> = {
  inspeccionEds: {
    title: "Inspección de estaciones de servicio (EDS)",
    description: "Inspección técnica en sitio con entrega de resultados (según aplique).",
    shortDescription: "Inspección en sitio para EDS.",
    longDescription: "Realizamos inspecciones técnicas en estaciones de servicio (EDS) y emitimos los resultados correspondientes según el alcance aplicable. Servicio programado y ejecutado en la instalación.",
    cta: "Cotizar inspección",
    slug: "/nuestros-servicios/inspeccion-eds",
    icon: "icon-inspeccion-eds",
    benefits: [
      "Cumplimiento normativo garantizado",
      "Detección temprana de riesgos",
      "Informe técnico detallado",
      "Personal certificado y experimentado"
    ],
    includes: [
      "Visita técnica programada",
      "Evaluación de componentes según alcance",
      "Informe de resultados",
      "Recomendaciones de mejora"
    ],
    process: [
      { title: "Solicitud", description: "Recibimos su solicitud y confirmamos disponibilidad" },
      { title: "Programación", description: "Coordinamos fecha y hora de visita" },
      { title: "Inspección", description: "Ejecutamos la inspección técnica en sitio" },
      { title: "Entrega", description: "Enviamos informe con resultados y recomendaciones" }
    ],
    duration: "1-2 días hábiles",
    guarantee: "Servicio respaldado por profesionales certificados"
  },

  hermeticidad: {
    title: "Pruebas de hermeticidad",
    description: "Pruebas en sitio para verificar hermeticidad (según alcance).",
    shortDescription: "Pruebas de hermeticidad para EDS.",
    longDescription: "Ejecutamos pruebas de hermeticidad en sitio para verificar condiciones de hermeticidad en los componentes cubiertos por el alcance definido.",
    cta: "Cotizar hermeticidad",
    slug: "/nuestros-servicios/pruebas-hermeticidad",
    icon: "icon-hermeticidad",
    benefits: [
      "Prevención de fugas y contaminación",
      "Cumplimiento de requisitos técnicos",
      "Equipos de medición calibrados",
      "Resultados confiables y documentados"
    ],
    includes: [
      "Pruebas en componentes definidos",
      "Uso de equipos especializados",
      "Certificado de resultados",
      "Asesoría técnica"
    ],
    process: [
      { title: "Cotización", description: "Definimos alcance y enviamos propuesta" },
      { title: "Agendamiento", description: "Programamos la visita técnica" },
      { title: "Ejecución", description: "Realizamos las pruebas de hermeticidad" },
      { title: "Documentación", description: "Entregamos certificado con resultados" }
    ],
    duration: "1 día hábil",
    guarantee: "Equipos calibrados y metodología estandarizada"
  },

  paqueteInspeccionHermeticidad: {
    title: "Paquete: Inspección + Hermeticidad",
    description: "Dos servicios en una sola programación de visita.",
    shortDescription: "Inspección + hermeticidad en una sola agenda.",
    longDescription: "Programa la inspección de EDS y las pruebas de hermeticidad en una sola visita para optimizar tiempos de coordinación y operación.",
    cta: "Cotizar paquete",
    slug: "/nuestros-servicios/inspeccion-eds-hermeticidad",
    icon: "icon-paquete",
    benefits: [
      "Ahorro de tiempo y coordinación",
      "Mejor precio por servicio combinado",
      "Un solo proceso de agendamiento",
      "Documentación unificada"
    ],
    includes: [
      "Inspección técnica de EDS",
      "Pruebas de hermeticidad",
      "Informes consolidados",
      "Recomendaciones integradas"
    ],
    process: [
      { title: "Solicitud única", description: "Una sola cotización para ambos servicios" },
      { title: "Coordinación", description: "Agendamos una visita que cubra todo" },
      { title: "Ejecución integral", description: "Inspección y pruebas en la misma jornada" },
      { title: "Entrega completa", description: "Recibe toda la documentación consolidada" }
    ],
    duration: "1-2 días hábiles",
    guarantee: "Servicio integral con atención personalizada"
  }
};
export default services;
