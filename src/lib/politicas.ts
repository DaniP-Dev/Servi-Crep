interface Section {
  id: string;
  title: string;
  description: string;
  content: string[];
}

interface Politica {
  title: string;
  description: string;
  slug: string;
  updatedAt: string;
  contactEmail: string;
  alcance: string;
  sections: Section[];
}

const politicas: Record<string, Politica> = {
  confidencialidad: {
    title: "Política de Confidencialidad",
    description: "Compromiso con la protección de la información de nuestros clientes.",
    slug: "/calidad/confidencialidad",
    updatedAt: "2026-01-04",
    contactEmail: "servicrep@gmail.com",
    alcance: "Servicios de inspección",
    sections: [
      {
        id: "compromiso",
        title: "Nuestro compromiso",
        description: "Servi-Crep se compromete a proteger la confidencialidad de la información proporcionada por sus clientes.",
        content: [
          "Toda información recibida es tratada de forma confidencial.",
          "No se divulga información sin autorización expresa del cliente.",
          "El personal está obligado a mantener la confidencialidad.",
        ],
      },
      {
        id: "alcance",
        title: "Alcance",
        description: "Esta política aplica a toda la información relacionada con los servicios de inspección.",
        content: [
          "Informes de inspección y resultados.",
          "Datos técnicos de las instalaciones.",
          "Información comercial y contractual.",
        ],
      },
      {
        id: "medidas",
        title: "Medidas de protección",
        description: "Implementamos medidas técnicas y organizativas para garantizar la seguridad.",
        content: [
          "Acceso restringido a la información.",
          "Almacenamiento seguro de documentos.",
          "Capacitación continua del personal.",
        ],
      },
    ],
  },
  imparcialidad: {
    title: "Política de Imparcialidad",
    description: "Garantizamos la objetividad e independencia en nuestras inspecciones.",
    slug: "/calidad/imparcialidad",
    updatedAt: "2026-01-04",
    contactEmail: "servicrep@gmail.com",
    alcance: "Actividades de inspección",
    sections: [
      {
        id: "principios",
        title: "Principios de imparcialidad",
        description: "Nuestras inspecciones se realizan sin influencias externas.",
        content: [
          "Independencia de intereses comerciales.",
          "Decisiones basadas únicamente en evidencia técnica.",
          "Personal libre de conflictos de interés.",
        ],
      },
      {
        id: "gestion",
        title: "Gestión de riesgos",
        description: "Identificamos y gestionamos amenazas a la imparcialidad.",
        content: [
          "Evaluación periódica de riesgos.",
          "Declaración de conflictos de interés.",
          "Rotación de personal cuando aplique.",
        ],
      },
      {
        id: "compromiso",
        title: "Compromiso institucional",
        description: "La dirección respalda activamente la imparcialidad.",
        content: [
          "Políticas claras y comunicadas.",
          "Recursos adecuados para la independencia.",
          "Revisión periódica del cumplimiento.",
        ],
      },
    ],
  }
};

export default politicas;
