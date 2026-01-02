import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Cta from "@/components/home/Cta";
import Service from "@/components/home/Service";
import OurProjects from "@/components/home/OurProjects";
import TeamCtaHome from "@/components/home/TeamCtaHome";

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
