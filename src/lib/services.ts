interface Service {
  title: string;
  description: string;
  shortDescription: string;
  longDescription: string;
  cta: string;
  slug: string;
  icon: string;
}


const services: Record<string, Service> = {
  inspeccionEds: {
    title: "Inspección de estaciones de servicio (EDS)",
    description: "Inspección técnica en sitio con entrega de resultados (según aplique).",
    shortDescription: "Inspección en sitio para EDS.",
    longDescription: "Realizamos inspecciones técnicas en estaciones de servicio (EDS) y emitimos los resultados correspondientes según el alcance aplicable. Servicio programado y ejecutado en la instalación.",
    cta: "Cotizar inspección",
    slug: "/nuestros-servicios/inspeccion-eds",
    icon: "icon-inspeccion-eds"
  },

  hermeticidad: {
    title: "Pruebas de hermeticidad",
    description: "Pruebas en sitio para verificar hermeticidad (según alcance).",
    shortDescription: "Pruebas de hermeticidad para EDS.",
    longDescription: "Ejecutamos pruebas de hermeticidad en sitio para verificar condiciones de hermeticidad en los componentes cubiertos por el alcance definido.",
    cta: "Cotizar hermeticidad",
    slug: "/nuestros-servicios/pruebas-hermeticidad",
    icon: "icon-hermeticidad"
  },

  paqueteInspeccionHermeticidad: {
    title: "Paquete: Inspección + Hermeticidad",
    description: "Dos servicios en una sola programación de visita.",
    shortDescription: "Inspección + hermeticidad en una sola agenda.",
    longDescription: "Programa la inspección de EDS y las pruebas de hermeticidad en una sola visita para optimizar tiempos de coordinación y operación.",
    cta: "Cotizar paquete",
    slug: "/nuestros-servicios/inspeccion-eds-hermeticidad",
    icon: "icon-paquete"
  }
};
export default services;
