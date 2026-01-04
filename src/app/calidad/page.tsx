export const metadata = {
  title: "Calidad y Transparencia | Servi-Crep",
  description: "Comprometidos con la excelencia en inspección técnica. Conoce nuestras políticas de confidencialidad, imparcialidad y atención al cliente.",
};

const calidadTexts = {
  hero: {
    title: "Calidad que inspira confianza",
    subtitle: "Inspección técnica acreditada con estándares internacionales",
    description: "En Servi-Crep nos comprometemos con la excelencia, la transparencia y la mejora continua. Nuestros procesos están diseñados para garantizar resultados confiables y objetivos.",
    cta: "Solicitar cotización",
  },
  valores: {
    title: "Nuestro compromiso",
    items: [
      {
        icon: "bi-shield-check",
        title: "Acreditación",
        description: "Procesos certificados bajo normas técnicas reconocidas.",
      },
      {
        icon: "bi-eye",
        title: "Transparencia",
        description: "Información clara sobre métodos, alcances y resultados.",
      },
      {
        icon: "bi-graph-up-arrow",
        title: "Mejora continua",
        description: "Revisión constante de procesos para elevar el estándar.",
      },
    ],
  },
  politicas: {
    title: "Políticas institucionales",
    description: "Conoce los principios que rigen nuestra operación y garantizan la calidad del servicio.",
    items: [
      {
        title: "Confidencialidad",
        description: "Protegemos la información de nuestros clientes con estrictos protocolos de seguridad.",
        href: "/calidad/confidencialidad",
        icon: "bi-lock",
      },
      {
        title: "Imparcialidad",
        description: "Garantizamos objetividad e independencia en todas nuestras inspecciones.",
        href: "/calidad/imparcialidad",
        icon: "bi-balance-scale",
      },
      {
        title: "Quejas y Apelaciones",
        description: "Canal abierto para atender inquietudes y garantizar tu satisfacción.",
        href: "/calidad/quejas-y-apelaciones",
        icon: "bi-chat-square-text",
      },
    ],
  },
  cta: {
    title: "¿Por qué elegir un organismo de inspección acreditado?",
    description: "La acreditación garantiza competencia técnica, imparcialidad y confiabilidad en los resultados. Trabajamos bajo estándares que aseguran la validez de cada inspección.",
    button: "Conoce nuestros servicios",
  },
};

export default function CalidadPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-8">
              <p className="text-uppercase small mb-2 opacity-75">
                {calidadTexts.hero.subtitle}
              </p>
              <h1 className="display-5 fw-bold mb-3">
                {calidadTexts.hero.title}
              </h1>
              <p className="lead mb-4 opacity-90">
                {calidadTexts.hero.description}
              </p>
              <a href="/contacto" className="btn btn-light btn-lg">
                {calidadTexts.hero.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-5">
        <div className="container">
          <h2 className="h3 text-center mb-4">{calidadTexts.valores.title}</h2>
          <div className="row g-4">
            {calidadTexts.valores.items.map((valor) => (
              <div key={valor.title} className="col-12 col-md-4">
                <div className="text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '64px', height: '64px' }}>
                    <i className={`bi ${valor.icon} fs-4 text-primary`}></i>
                  </div>
                  <h3 className="h5">{valor.title}</h3>
                  <p className="text-body-secondary mb-0">{valor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Políticas */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="h3">{calidadTexts.politicas.title}</h2>
            <p className="text-body-secondary">
              {calidadTexts.politicas.description}
            </p>
          </div>
          <div className="row g-4">
            {calidadTexts.politicas.items.map((politica) => (
              <div key={politica.href} className="col-12 col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <div className="mb-3">
                      <i className={`bi ${politica.icon} fs-3 text-primary`}></i>
                    </div>
                    <h3 className="h5">{politica.title}</h3>
                    <p className="text-body-secondary flex-grow-1">
                      {politica.description}
                    </p>
                    <a href={politica.href} className="btn btn-outline-primary">
                      Ver política
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-5">
        <div className="container">
          <div className="card bg-primary text-white border-0">
            <div className="card-body text-center py-5">
              <h2 className="h3 mb-3">{calidadTexts.cta.title}</h2>
              <p className="lead mb-4 opacity-90">
                {calidadTexts.cta.description}
              </p>
              <a href="/nuestros-servicios" className="btn btn-light btn-lg">
                {calidadTexts.cta.button}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}