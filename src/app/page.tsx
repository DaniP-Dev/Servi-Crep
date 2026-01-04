import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Cta from "@/components/home/Cta";
import Service from "@/components/home/Service";
import OurProjects from "@/components/home/OurProjects";
import TeamCtaHome from "@/components/home/TeamCtaHome";

export const metadata: Metadata = {
  title: "ServiCrep | Inspección Técnica de EDS y Pruebas de Hermeticidad en Colombia",
  description: "Organismo de inspección acreditado por ONAC. Inspección técnica de estaciones de servicio, pruebas de hermeticidad a tanques de combustible. Servicio en Atlántico y Colombia.",
  keywords: [
    "inspección EDS Colombia",
    "prueba hermeticidad tanques",
    "organismo inspección acreditado ONAC",
    "estaciones de servicio",
    "tanques de combustible",
  ],
  openGraph: {
    title: "ServiCrep | Inspección Técnica Acreditada",
    description: "Organismo de inspección acreditado. Inspección de EDS y pruebas de hermeticidad en Colombia.",
    url: "/",
    type: "website",
  },
  alternates: {
    canonical: "/",
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
