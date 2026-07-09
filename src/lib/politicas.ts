import { CONTACT_INFO } from "@/lib/constants";

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
    contactEmail: CONTACT_INFO.email,
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
    contactEmail: CONTACT_INFO.email,
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
  },
  privacidad: {
    title: "Política de Privacidad y Tratamiento de Datos Personales",
    description:
      "Información sobre cómo ServiCrep recolecta, usa y protege tus datos personales en el sitio web y canales de contacto.",
    slug: "/calidad/privacidad",
    updatedAt: "2026-07-09",
    contactEmail: CONTACT_INFO.email,
    alcance: "Sitio web, formularios y canales de contacto",
    sections: [
      {
        id: "responsable",
        title: "Responsable del tratamiento",
        description:
          "ServiCrep actúa como responsable del tratamiento de los datos personales que nos suministras, en el marco de la Ley 1581 de 2012 y normas complementarias en Colombia.",
        content: [
          `Responsable: ServiCrep.`,
          `Correo de contacto: ${CONTACT_INFO.email}.`,
          `Teléfono / WhatsApp: ${CONTACT_INFO.phone}.`,
          `Ubicación: ${CONTACT_INFO.address}.`,
        ],
      },
      {
        id: "datos",
        title: "Datos que recolectamos",
        description:
          "Solo solicitamos la información necesaria para atender tu solicitud o mejorar el servicio del sitio.",
        content: [
          "Datos de identificación y contacto: nombre, correo electrónico y teléfono.",
          "Información de la solicitud: proyecto, asunto, mensaje y, en PQRS, tipo de solicitud y descripción del caso.",
          "Datos técnicos de navegación: dirección IP, tipo de dispositivo o navegador, y páginas visitadas, cuando se use analítica web.",
          "Datos que compartas voluntariamente por WhatsApp, correo o teléfono al contactarnos.",
        ],
      },
      {
        id: "finalidades",
        title: "Finalidades del tratamiento",
        description: "Usamos tus datos para las siguientes finalidades:",
        content: [
          "Responder cotizaciones, consultas comerciales y solicitudes de información sobre nuestros servicios.",
          "Gestionar Peticiones, Quejas, Reclamos o Sugerencias (PQRS) y hacer seguimiento.",
          "Comunicarnos contigo por los canales que indiques (correo, teléfono o WhatsApp).",
          "Mejorar el sitio web, medir el uso de canales de contacto y prevenir usos indebidos.",
          "Cumplir obligaciones legales o requerimientos de autoridades competentes cuando aplique.",
        ],
      },
      {
        id: "autorizacion",
        title: "Autorización y bases del tratamiento",
        description:
          "El tratamiento se fundamenta en tu autorización previa, expresa e informada, y en el interés legítimo de atender la relación comercial o de servicio que solicitas.",
        content: [
          "Al marcar el checkbox de aceptación en formularios del sitio, autorizas el tratamiento de tus datos conforme a esta política.",
          "Si nos contactas por WhatsApp, correo o teléfono, entendemos que nos suministras tus datos para que podamos atenderte.",
          "Puedes negar o retirar tu autorización; en ese caso es posible que no podamos gestionar tu solicitud.",
        ],
      },
      {
        id: "canales",
        title: "Canales de recolección",
        description: "Recolectamos datos a través de:",
        content: [
          "Formulario de contacto del sitio web.",
          "Formulario de quejas y apelaciones (PQRS), cuando lo uses.",
          "Enlaces y conversaciones de WhatsApp originadas desde el sitio.",
          "Correo electrónico y llamadas telefónicas.",
          "Herramientas de analítica web, si están activas en el sitio.",
        ],
      },
      {
        id: "derechos",
        title: "Derechos del titular",
        description:
          "Como titular de datos personales, puedes ejercer los derechos previstos en la normativa colombiana:",
        content: [
          "Conocer, actualizar y rectificar tus datos personales.",
          "Solicitar prueba de la autorización otorgada.",
          "Ser informado sobre el uso que se ha dado a tus datos.",
          "Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la ley.",
          "Revocar la autorización y/o solicitar la supresión del dato cuando sea procedente.",
          "Para ejercer estos derechos, escríbenos a " +
            CONTACT_INFO.email +
            " indicando tu nombre, medio de contacto y la solicitud concreta.",
        ],
      },
      {
        id: "conservacion",
        title: "Conservación y seguridad",
        description:
          "Aplicamos medidas razonables para proteger la información y limitamos el acceso al personal que la necesita para atenderte.",
        content: [
          "Las solicitudes del formulario web se notifican internamente a través de un canal de mensajería operativa (webhook), para que el equipo pueda responderte.",
          "No publicamos ni vendemos tus datos personales a terceros con fines comerciales.",
          "Conservamos la información el tiempo necesario para atender la solicitud, dar seguimiento comercial o cumplir obligaciones legales.",
          "Si consideras que un dato ya no debe conservarse, puedes solicitar su actualización o eliminación por los canales indicados.",
        ],
      },
      {
        id: "encargados",
        title: "Encargados y herramientas de terceros",
        description:
          "Para operar el sitio y los canales de contacto podemos apoyarnos en proveedores que tratan datos por cuenta nuestra o como parte del servicio que usas:",
        content: [
          "Proveedor de hosting y despliegue del sitio web.",
          "Plataformas de mensajería (por ejemplo WhatsApp) cuando eliges ese canal.",
          "Servicios de notificación interna usados para alertar al equipo sobre nuevos leads o mensajes.",
          "Estos proveedores tratan la información según sus propias políticas y las instrucciones o configuraciones aplicables al servicio.",
        ],
      },
      {
        id: "cookies",
        title: "Cookies y analítica",
        description:
          "El sitio puede utilizar cookies o tecnologías similares y, cuando esté configurado, Google Analytics u otra herramienta de medición.",
        content: [
          "La analítica nos ayuda a entender el uso del sitio (páginas visitadas, origen del tráfico y eventos como envío de formularios o clics a WhatsApp).",
          "Puedes configurar tu navegador para rechazar o eliminar cookies; algunas funciones del sitio podrían verse afectadas.",
          "Si la analítica no está activa en un entorno determinado, no se envían esos datos de medición.",
        ],
      },
      {
        id: "cambios",
        title: "Cambios a esta política",
        description:
          "Podemos actualizar esta política para reflejar cambios en el sitio, en nuestros procesos o en la normativa aplicable.",
        content: [
          "La fecha de actualización aparece en esta página.",
          "Te recomendamos revisarla periódicamente, especialmente antes de enviar formularios.",
          "El uso continuado de los canales de contacto después de una actualización implica el conocimiento de la versión vigente publicada en el sitio.",
          `Para dudas sobre esta política: ${CONTACT_INFO.email}.`,
        ],
      },
    ],
  },
};

export default politicas;
