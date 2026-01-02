import { notFound } from "next/navigation";
import services from "@/lib/services";

interface PageProps {
  params: Promise<{
    services: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { services: serviceSlug } = await params;
  const service = Object.values(services).find(
    (s) => s.slug === `/nuestros-servicios/${serviceSlug}`
  );

  return {
    title: service?.title || "Servicio no encontrado",
    description: service?.description || "",
  };
}

export default async function page({ params }: PageProps) {
  const { services: serviceSlug } = await params;
  const service = Object.values(services).find(
    (s) => s.slug === `/nuestros-servicios/${serviceSlug}`
  );

  if (!service) notFound();

  return (
    <div>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <p>{service.longDescription}</p>
      <a href="/contacto">{service.cta}</a>
    </div>
  );
}
