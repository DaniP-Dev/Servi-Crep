import { notFound } from "next/navigation";
import politicas from "@/lib/politicas";

interface PageProps {
  params: Promise<{
    politicas: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { politicas: politicaSlug } = await params;
  const politica = politicas[politicaSlug];

  return {
    title: politica?.title || "Política no encontrada",
    description: politica?.description || "",
  };
}

export default async function PoliticaPage({ params }: PageProps) {
  const { politicas: politicaSlug } = await params;
  const politica = politicas[politicaSlug];

  if (!politica) notFound();

  return (
    <main className="container py-5">
      <header className="mb-4">
        <h1 className="display-6 fw-bold mb-2">{politica.title}</h1>
        <p className="text-body-secondary mb-0">{politica.description}</p>
      </header>

      {/* Key info */}
      <section className="row g-3 mb-4">
        <div className="col-12 col-lg-8">
          <div className="card">
            <div className="card-body">
              <div className="row g-3">
                <div className="col-12 col-md-4">
                  <div className="small text-body-secondary">
                    Última actualización
                  </div>
                  <div className="fw-semibold">{politica.updatedAt}</div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="small text-body-secondary">Contacto</div>
                  <a
                    href={`mailto:${politica.contactEmail}`}
                    className="fw-semibold"
                  >
                    {politica.contactEmail}
                  </a>
                </div>
                <div className="col-12 col-md-4">
                  <div className="small text-body-secondary">Alcance</div>
                  <div className="fw-semibold">{politica.alcance}</div>
                </div>
              </div>
              <p className="small text-body-secondary mt-3 mb-0">
                Si hay cambios relevantes, esta página se actualizará con una
                nueva fecha de vigencia.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <div className="card bg-light">
            <div className="card-body">
              <div className="fw-semibold mb-2">Accesos rápidos</div>
              <div className="d-grid gap-2">
                {politica.sections.map((section) => (
                  <a
                    key={section.id}
                    className="btn btn-outline-primary"
                    href={`#${section.id}`}
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      {politica.sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={index === politica.sections.length - 1 ? "mb-4" : "mb-5"}
        >
          <h2 className="h3">{section.title}</h2>
          <p className="text-body-secondary">{section.description}</p>
          <ul>
            {section.content.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </section>
      ))}

      {/* CTA */}
      <section className="card bg-light">
        <div className="card-body text-center">
          <h2 className="h5 mb-2">¿Tienes alguna consulta?</h2>
          <p className="text-body-secondary mb-3">
            Contáctanos si tienes preguntas sobre esta política.
          </p>
          <a href="/contacto" className="btn btn-primary">
            Contactar
          </a>
        </div>
      </section>
    </main>
  );
}
