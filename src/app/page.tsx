import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Cta from "@/components/home/Cta";
import Service from "@/components/home/Service";
import OurProjects from "@/components/home/OurProjects";
import TeamCtaHome from "@/components/home/TeamCtaHome";

export const metadata: Metadata = {
  title: "ServiCrep | Inspección Técnica de EDS y Pruebas de Hermeticidad | Colombia",
  description: "Organismo de inspección acreditado. Inspección técnica de estaciones de servicio y pruebas de hermeticidad según requisitos del Ministerio de Minas y Energía. Visita nuestro sitio web.",
  keywords: [
    // Ministerio de Minas y Energía
    "Ministerio de Minas y Energía",
    "requisitos Ministerio Minas EDS",
    "normativa estaciones de servicio Colombia",
    "resolución 40198",
    "regulación combustibles líquidos",
    // Inspección EDS
    "inspección EDS Colombia",
    "inspección estaciones de servicio",
    "inspección técnica EDS",
    "inspección periódica EDS",
    "organismo inspección acreditado",
    // Hermeticidad
    "prueba hermeticidad tanques",
    "hermeticidad tanques subterráneos",
    "prueba estanqueidad combustible",
    // Acreditación
    "organismo inspección ONAC",
    "acreditación ISO 17020",
    "organismo tipo A",
    // Geográficas
    "inspección EDS Barranquilla",
    "inspección EDS Atlántico",
    "inspección EDS Costa Caribe",
  ],
  openGraph: {
    title: "ServiCrep | Inspección Técnica de EDS según Ministerio de Minas",
    description: "Organismo de inspección acreditado por ONAC. Inspección de estaciones de servicio y pruebas de hermeticidad según normativa del Ministerio de Minas y Energía.",
    url: "/",
    type: "website",
    siteName: "ServiCrep",
    locale: "es_CO",
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "geo.region": "CO-ATL",
    "geo.placename": "Soledad, Atlántico",
    "geo.position": "10°54'45.5\"N 74°48'50.4\"W",
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Cta />
      <Service />
      <OurProjects />
      <TeamCtaHome />
    </div>
  );
}
