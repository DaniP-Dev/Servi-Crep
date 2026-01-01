interface PageProps {
  params: Promise<{
    services: string;
  }>;
}

export default async function page({ params }: PageProps) {
  const { services } = await params;
  
  return (
    <div>
      <h1>Servicio: {services}</h1>
    </div>
  );
}
