import type { LocalLandingConfig } from "@/components/local/LocalServiceLanding";

function inspeccionConfig(
  city: string,
  region: string,
  path: string,
  areaServed: string[]
): LocalLandingConfig {
  return {
    city,
    region,
    serviceKind: "inspeccion",
    path,
    title: `Inspección EDS en ${city} | ServiCrep`,
    description: `Servicio de inspección técnica para estaciones de servicio en ${city} y ${region}. Programación rápida, soporte técnico y enfoque en cumplimiento normativo.`,
    keywords: [
      `inspección EDS ${city.toLowerCase()}`,
      `inspección técnica estaciones de servicio ${city.toLowerCase()}`,
      `organismo de inspección EDS ${region.toLowerCase()}`,
      `cotizar inspección EDS ${city.toLowerCase()}`,
    ],
    h1: `Inspección técnica de EDS en ${city}`,
    lead: `Ayudamos a estaciones de servicio en ${city} y ${region} a ejecutar su inspección técnica con tiempos claros, soporte profesional y documentación confiable.`,
    problemTitle: "¿Qué problema resolvemos?",
    problemText:
      "Si necesitas cumplir requisitos técnicos para la operación de tu estación o preparar evidencias de cumplimiento, te acompañamos con una inspección en sitio y un proceso ordenado de inicio a entrega.",
    includes: [
      "Programación de visita técnica según disponibilidad.",
      "Evaluación en sitio de componentes según alcance.",
      "Registro de resultados y observaciones técnicas.",
      "Entrega de informe técnico según corresponda.",
    ],
    faqs: [
      {
        question: `¿Cuánto tarda la inspección de una EDS en ${city}?`,
        answer:
          "Depende del alcance técnico y de las condiciones de la estación. Generalmente coordinamos la visita en plazos cortos y con cronograma confirmado.",
      },
      {
        question: `¿Atienden solo ${city} o también zonas cercanas?`,
        answer: `Atendemos ${city} y ${region}. También contamos con cobertura nacional mediante programación previa.`,
      },
      {
        question: "¿Qué entregan después de la inspección?",
        answer:
          "Entregamos documentación técnica de resultados según alcance, incluyendo observaciones y recomendaciones cuando aplique.",
      },
    ],
    related: [
      {
        href: "/nuestros-servicios/inspeccion-eds",
        label: "Inspección de EDS (detalle)",
      },
      {
        href: "/nuestros-servicios/pruebas-hermeticidad",
        label: "Pruebas de hermeticidad",
      },
      { href: "/como-cotizar", label: "Cómo cotizar" },
    ],
    schemaName: `Inspección técnica de EDS en ${city}`,
    schemaDescription: `Inspección técnica para estaciones de servicio en ${city} y ${region} con enfoque en cumplimiento normativo.`,
    areaServed,
  };
}

function hermeticidadConfig(
  city: string,
  region: string,
  path: string,
  areaServed: string[]
): LocalLandingConfig {
  return {
    city,
    region,
    serviceKind: "hermeticidad",
    path,
    title: `Pruebas de Hermeticidad en ${city} | ServiCrep`,
    description: `Pruebas de hermeticidad para tanques y sistemas de combustible en ${city} y ${region}. Detección de fugas y documentación técnica con metodología especializada.`,
    keywords: [
      `prueba hermeticidad ${city.toLowerCase()}`,
      `pruebas de hermeticidad tanques ${city.toLowerCase()}`,
      `detección de fugas tanques combustible ${region.toLowerCase()}`,
      `cotizar prueba de hermeticidad EDS ${city.toLowerCase()}`,
    ],
    h1: `Pruebas de hermeticidad en ${city} para EDS`,
    lead: `Verificamos condiciones de estanqueidad en tanques y sistemas de combustible en ${city} para ayudarte a reducir riesgos operativos y fortalecer el control técnico de tu estación.`,
    problemTitle: "¿Qué solucionamos con este servicio?",
    problemText:
      "Si necesitas verificar posibles fugas, validar hermeticidad de componentes o respaldar decisiones técnicas sobre tu sistema de almacenamiento, te acompañamos con una prueba en sitio y resultados documentados según alcance.",
    includes: [
      `Programación de visita técnica en ${city} y ${region}.`,
      "Aplicación de metodología para verificación de hermeticidad.",
      "Registro técnico de resultados.",
      "Informe o certificado según alcance contratado.",
    ],
    faqs: [
      {
        question: "¿Cuándo debo realizar una prueba de hermeticidad en mi EDS?",
        answer:
          "Cuando el requisito técnico lo indique, ante sospecha de fuga o como parte de la gestión preventiva del sistema de almacenamiento de combustible.",
      },
      {
        question: "¿La prueba de hermeticidad detecta fugas pequeñas?",
        answer:
          "Se realiza con metodología técnica y equipos calibrados para verificar condiciones de estanqueidad según alcance del servicio.",
      },
      {
        question: `¿Atienden pruebas de hermeticidad en ${city} y ${region}?`,
        answer: `Sí. Atendemos ${city} y ${region} con programación previa, además de cobertura nacional.`,
      },
    ],
    related: [
      {
        href: "/nuestros-servicios/pruebas-hermeticidad",
        label: "Hermeticidad (detalle)",
      },
      {
        href: "/nuestros-servicios/inspeccion-eds-hermeticidad",
        label: "Paquete integral",
      },
      { href: "/como-cotizar", label: "Cómo cotizar" },
    ],
    schemaName: `Pruebas de hermeticidad en ${city}`,
    schemaDescription: `Pruebas de hermeticidad para tanques y sistemas de combustible en ${city} y ${region}.`,
    areaServed,
  };
}

export const LOCAL_LANDINGS = {
  inspeccionBarranquilla: inspeccionConfig(
    "Barranquilla",
    "Atlántico",
    "/inspeccion-eds-barranquilla",
    ["Barranquilla", "Soledad", "Atlántico", "Colombia"]
  ),
  hermeticidadBarranquilla: hermeticidadConfig(
    "Barranquilla",
    "Atlántico",
    "/pruebas-hermeticidad-barranquilla",
    ["Barranquilla", "Soledad", "Atlántico", "Colombia"]
  ),
  inspeccionCartagena: inspeccionConfig(
    "Cartagena",
    "Bolívar",
    "/inspeccion-eds-cartagena",
    ["Cartagena", "Bolívar", "Costa Caribe", "Colombia"]
  ),
  hermeticidadCartagena: hermeticidadConfig(
    "Cartagena",
    "Bolívar",
    "/pruebas-hermeticidad-cartagena",
    ["Cartagena", "Bolívar", "Costa Caribe", "Colombia"]
  ),
  inspeccionBogota: inspeccionConfig(
    "Bogotá",
    "Cundinamarca",
    "/inspeccion-eds-bogota",
    ["Bogotá", "Cundinamarca", "Colombia"]
  ),
  hermeticidadBogota: hermeticidadConfig(
    "Bogotá",
    "Cundinamarca",
    "/pruebas-hermeticidad-bogota",
    ["Bogotá", "Cundinamarca", "Colombia"]
  ),
} as const;
