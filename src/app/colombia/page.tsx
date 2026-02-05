import services from "@/lib/services";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cobertura Nacional | Inspección EDS en toda Colombia | ServiCrep",
  description: "Servicio de inspección técnica disponible en toda Colombia. Agendamiento rápido, tiempos claros y cobertura nacional.",
  keywords: [
    "inspección EDS Barranquilla",
    "inspección técnica Atlántico",
    "hermeticidad Soledad",
    "cobertura Colombia",
  ],
  openGraph: {
    title: "Cobertura en Colombia | ServiCrep",
    description: "Atendemos en Atlántico y municipios cercanos.",
    url: "/colombia",
    type: "website",
  },
  alternates: {
    canonical: "/colombia",
  },
};

const coberturaTexts = {
  hero: {
    title: "Cobertura nacional",
    description: "Atendemos en toda Colombia con tiempos claros y agendamiento rápido.",
    ctaPrimary: "Cotizar por WhatsApp",
    ctaSecondary: "Ver servicios",
    horarios: "Horarios: Lun–Sáb. Respuesta en menos de 24 horas hábiles.",
    stats: [
      { value: "+50", label: "Proyectos" },
      { value: "24–48h", label: "Entrega típica" },
      { value: "Garantía", label: "Soporte" },
      { value: "Local", label: "Atención cercana" },
    ],
  },
  zonas: {
    title: "Cobertura en toda Colombia",
    description: "Contamos con presencia en todo el territorio nacional. Escríbenos para confirmar disponibilidad en tu zona.",
    alert: "Los tiempos y costos de desplazamiento pueden variar según ubicación, horario y acceso.",
    lista: ["Caribe", "Pacífico", "Andes", "Llanos", "Amazonía", "Más zonas disponibles"],
  },
  mapa: {
    title: "Cobertura nacional",
    description: "Estamos presentes en todo el territorio colombiano. Ubica tu zona y agenda tu servicio.",
    embedUrl: "https://www.google.com/maps?q=Colombia&output=embed",
    proceso: {
      title: "Cómo funciona",
      pasos: [
        "Confirmas zona y necesidad por WhatsApp o formulario.",
        "Se agenda fecha/hora y se valida disponibilidad.",
        "Se realiza el servicio y se entrega soporte/seguimiento.",
      ],
    },
    tiempos: {
      title: "Tiempos estimados",
      lista: [
        "Respuesta: < 24h hábiles.",
        "Agendamiento: según disponibilidad.",
        "Entrega: 24–48h (según servicio).",
      ],
    },
  },
  servicios: {
    title: "Servicios disponibles en tu zona",
    cta: "Ver detalle",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        question: "¿Atienden en toda Colombia?",
        answer: "Sí, contamos con cobertura nacional en todo el territorio colombiano. Contáctanos para confirmar disponibilidad y tiempos en tu zona específica.",
      },
      {
        question: "¿Cuánto tiempo tarda la respuesta?",
        answer: "Respondemos en menos de 24 horas hábiles. Una vez confirmada la cita, el servicio se ejecuta en 24–48 horas según disponibilidad.",
      },
      {
        question: "¿Hay costo adicional por desplazamiento?",
        answer: "Los costos de desplazamiento pueden variar según la distancia y acceso. Te informamos el valor exacto al momento de cotizar.",
      },
    ],
  },
  ctaFinal: {
    title: "Confirma tu cobertura en 1 minuto",
    description: "Envía tu ubicación y el servicio que necesitas.",
    cta: "Hablar por WhatsApp",
    note: "Sin compromiso. Respuesta rápida.",
  },
};

export default function CoberturaPage() {
  const serviciosDisponibles = Object.values(services).slice(0, 3);

  return (
    <main>
      {/* HERO */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-7">
              <h1 className="display-6 fw-bold text-secondary">{coberturaTexts.hero.title}</h1>
              <p className="lead mb-3">{coberturaTexts.hero.description}</p>
              <div className="d-flex gap-2 flex-wrap">
                <Link className="btn btn-primary" href="/contacto">
                  {coberturaTexts.hero.ctaPrimary}
                </Link>
                <Link className="btn btn-outline-primary" href="/nuestros-servicios">
                  {coberturaTexts.hero.ctaSecondary}
                </Link>
              </div>
              <p className="text-body-secondary small mt-3 mb-0">
                {coberturaTexts.hero.horarios}
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="row row-cols-2 g-3 text-center">
                    {coberturaTexts.hero.stats.map((stat, index) => (
                      <div className="col" key={index}>
                        <div className="fw-bold fs-4">{stat.value}</div>
                        <div className="small text-body-secondary">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZONAS */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-end g-3 mb-3">
            <div className="col">
              <h2 className="h3 mb-1">{coberturaTexts.zonas.title}</h2>
              <p className="text-body-secondary mb-0">
                {coberturaTexts.zonas.description}
              </p>
            </div>
          </div>

          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2">
            {coberturaTexts.zonas.lista.map((z) => (
              <div className="col" key={z}>
                <div className="border rounded p-3 bg-white text-center">
                  <i className="bi bi-geo-alt text-primary me-1"></i>
                  {z}
                </div>
              </div>
            ))}
          </div>

          <div className="alert alert-warning mt-4 mb-0">
            <i className="bi bi-info-circle me-2"></i>
            {coberturaTexts.zonas.alert}
          </div>
        </div>
      </section>

      {/* MAPA + LOGÍSTICA */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <h2 className="h3">{coberturaTexts.mapa.title}</h2>
              <p className="text-body-secondary">{coberturaTexts.mapa.description}</p>
              <div className="ratio ratio-16x9 bg-secondary-subtle rounded">
                <iframe
                  src={coberturaTexts.mapa.embedUrl}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de cobertura"
                ></iframe>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <h3 className="h5">{coberturaTexts.mapa.proceso.title}</h3>
              <ol className="mb-4">
                {coberturaTexts.mapa.proceso.pasos.map((paso, index) => (
                  <li key={index} className="mb-2">{paso}</li>
                ))}
              </ol>

              <div className="card">
                <div className="card-body">
                  <div className="fw-semibold mb-2">
                    <i className="bi bi-clock me-2"></i>
                    {coberturaTexts.mapa.tiempos.title}
                  </div>
                  <ul className="mb-0">
                    {coberturaTexts.mapa.tiempos.lista.map((tiempo, index) => (
                      <li key={index}>{tiempo}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-5">
        <div className="container">
          <h2 className="h3 mb-3">{coberturaTexts.servicios.title}</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {serviciosDisponibles.map((s) => (
              <div className="col" key={s.slug}>
                <div className="card h-100">
                  <div className="card-body d-flex flex-column">
                    <h3 className="h5">{s.title}</h3>
                    <p className="text-body-secondary flex-grow-1">
                      {s.shortDescription}
                    </p>
                    <Link className="btn btn-outline-primary" href={s.slug}>
                      {coberturaTexts.servicios.cta}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CTA FINAL */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-12 col-lg-7">
              <h2 className="h3 mb-4">{coberturaTexts.faq.title}</h2>
              <div className="accordion" id="faqCobertura">
                {coberturaTexts.faq.items.map((faq, index) => (
                  <div className="accordion-item" key={index}>
                    <h3 className="accordion-header">
                      <button
                        className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq${index}`}
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={`faq${index}`}
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div
                      id={`faq${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                      data-bs-parent="#faqCobertura"
                    >
                      <div className="accordion-body">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h3 className="h5">{coberturaTexts.ctaFinal.title}</h3>
                  <p className="text-body-secondary">
                    {coberturaTexts.ctaFinal.description}
                  </p>
                  <Link className="btn btn-primary w-100 mb-2" href="/contacto">
                    <i className="bi bi-whatsapp me-2"></i>
                    {coberturaTexts.ctaFinal.cta}
                  </Link>
                  <p className="text-body-secondary small text-center mb-0">
                    {coberturaTexts.ctaFinal.note}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}