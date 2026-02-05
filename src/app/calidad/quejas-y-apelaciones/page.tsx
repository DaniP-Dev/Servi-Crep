export const metadata = {
  title: "Quejas y Apelaciones | Servi-Crep",
  description: "Radica Peticiones, Quejas, Reclamos o Sugerencias sobre nuestros servicios de inspección.",
};

const pqrsTexts = {
  header: {
    title: "Quejas y Apelaciones",
    description: "Radica Peticiones, Quejas, Reclamos o Sugerencias. Recibirás un número de radicado.",
  },
  canales: [
    {
      title: "Formulario web",
      description: "Canal recomendado para adjuntar soportes.",
      cta: "Radicar PQRS",
      href: "#form",
      variant: "primary",
    },
    {
      title: "Correo",
      description: "servicrep04@gmail.com",
      cta: "Enviar correo",
      href: "mailto:servicrep04@gmail.com",
      variant: "outline-primary",
    },
    {
      title: "WhatsApp / Teléfono",
      description: "+57 319 524 5840",
      cta: "Ver canales",
      href: "/contacto",
      variant: "outline-primary",
    },
  ],
  proceso: {
    title: "¿Cómo funciona?",
    pasos: [
      "Selecciona el tipo de solicitud (Petición/Queja/Reclamo/Sugerencia).",
      "Describe el caso y adjunta soportes (si aplica).",
      "Envía el formulario y recibe el acuse de recibido con radicado.",
      "Se revisa internamente y se responde por el canal indicado.",
    ],
  },
  form: {
    title: "Radicar PQRS",
    tipoSolicitud: {
      label: "Tipo de solicitud",
      placeholder: "Selecciona…",
      options: ["Petición", "Queja", "Reclamo", "Sugerencia"],
    },
    nombre: { label: "Nombre" },
    correo: { label: "Correo" },
    asunto: { label: "Asunto" },
    descripcion: {
      label: "Descripción",
      help: "Incluye fechas, lugar, número de orden/servicio y evidencias si tienes.",
    },
    adjuntos: { label: "Adjuntar soportes (opcional)" },
    privacy: "Acepto la política de tratamiento de datos.",
    submit: "Enviar y obtener radicado",
  },
  recomendaciones: {
    title: "Recomendaciones",
    items: [
      "Usa un correo activo para recibir el radicado y respuesta.",
      "Adjunta soportes (capturas, facturas, evidencias) si aplica.",
      "Guarda el número de radicado para seguimiento.",
    ],
  },
};

export default function QuejasApelacionesPage() {
  return (
    <main className="container py-5">
      <header className="mb-4">
        <h1 className="display-6 fw-bold mb-2 text-secondary">{pqrsTexts.header.title}</h1>
        <p className="text-body-secondary mb-0">
          {pqrsTexts.header.description}
        </p>
      </header>

      {/* Canales */}
      <section className="row g-3 mb-4">
        {pqrsTexts.canales.map((canal) => (
          <div key={canal.title} className="col-12 col-lg-4">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="h5">{canal.title}</h2>
                <p className="text-body-secondary mb-2">{canal.description}</p>
                <a className={`btn btn-${canal.variant}`} href={canal.href}>
                  {canal.cta}
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Proceso */}
      <section className="mb-4">
        <div className="card bg-light">
          <div className="card-body">
            <h2 className="h5 mb-3">{pqrsTexts.proceso.title}</h2>
            <ol className="mb-0">
              {pqrsTexts.proceso.pasos.map((paso, index) => (
                <li key={index}>{paso}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section id="form" className="row g-4">
        <div className="col-12 col-lg-8">
          <div className="card">
            <div className="card-body">
              <h2 className="h4 mb-3">{pqrsTexts.form.title}</h2>

              <form>
                <div className="mb-3">
                  <label className="form-label">
                    {pqrsTexts.form.tipoSolicitud.label}
                  </label>
                  <select className="form-select" required>
                    <option value="">
                      {pqrsTexts.form.tipoSolicitud.placeholder}
                    </option>
                    {pqrsTexts.form.tipoSolicitud.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label">
                      {pqrsTexts.form.nombre.label}
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label">
                      {pqrsTexts.form.correo.label}
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3 mt-3">
                  <label className="form-label">
                    {pqrsTexts.form.asunto.label}
                  </label>
                  <input className="form-control" type="text" required />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    {pqrsTexts.form.descripcion.label}
                  </label>
                  <textarea className="form-control" rows={6} required />
                  <div className="form-text">
                    {pqrsTexts.form.descripcion.help}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    {pqrsTexts.form.adjuntos.label}
                  </label>
                  <input className="form-control" type="file" multiple />
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="privacy"
                    required
                  />
                  <label className="form-check-label" htmlFor="privacy">
                    {pqrsTexts.form.privacy}
                  </label>
                </div>

                <button className="btn btn-primary" type="submit">
                  {pqrsTexts.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Sidebar de ayuda */}
        <div className="col-12 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h3 className="h6">{pqrsTexts.recomendaciones.title}</h3>
              <ul className="mb-0">
                {pqrsTexts.recomendaciones.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}