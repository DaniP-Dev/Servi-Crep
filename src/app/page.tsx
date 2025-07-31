export const metadata = {
  title: "Inicio | ServiCrep",
  description:
    "Bienvenido a ServiCrep, tu solución para gestión de archivos y servicios.",
  openGraph: {
    title: "Inicio | ServiCrep",
    description:
      "Bienvenido a ServiCrep, tu solución para gestión de archivos y servicios.",
    url: "https://tusitio.com/",
    siteName: "ServiCrep",
  },
};

import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Proceso from "@/components/Proceso";

export default function Home() {
  return (  
    <div>
      <Hero />
      <About />
      <Service />
      <Proceso />
    </div>
  );
}
