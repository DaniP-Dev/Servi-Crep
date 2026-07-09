import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_INFO, CTA_LABELS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cómo cotizar inspección EDS y hermeticidad | ServiCrep",
  description:
    "Conoce qué necesitas para cotizar inspección de estaciones de servicio o pruebas de hermeticidad: documentos, tiempos y qué esperar del proceso.",
  openGraph: {
    title: "Cómo cotizar | ServiCrep",
    description:
      "Pasos claros para solicitar cotización de inspección EDS y hermeticidad en Colombia.",
    url: "/como-cotizar",
    type: "website",
  },
  alternates: {
    canonical: "/como-cotizar",
  },
};

const steps = [
  {
    title: "Cuéntanos tu necesidad",
    text: "Indica si requieres inspección EDS, prueba de hermeticidad o el paquete combinado, y la ciudad de la estación.",
  },
  {
    title: "Definimos alcance",
    text: "Confirmamos componentes a evaluar, ubicación y disponibilidad para armar una propuesta clara.",
  },
  {
    title: "Recibes cotización",
    text: "Te enviamos valor, tiempos estimados y condiciones antes de programar la visita.",
  },
  {
    title: "Agendamos y ejecutamos",
    text: "Coordinamos la visita técnica, ejecutamos el servicio y entregamos la documentación según alcance.",
  },
];

const documents = [
  "Datos de contacto del responsable de la EDS",
  "Ubicación / ciudad de la estación",
  "Tipo de servicio requerido (inspección, hermeticidad o ambos)",
  "Información básica de tanques o sistemas a evaluar (si la tienes)",
];

const expectations = [
  {
    title: "Respuesta",
    text: "24–48 horas hábiles en condiciones normales.",
  },
  {
    title: "Programación",
    text: "Según disponibilidad técnica y acceso a la estación.",
  },
  {
    title: "Entrega",
    text: "Informe o certificado de resultados según el alcance contratado.",
  },
];

export default function ComoCotizarPage() {
  return (
    <main className="container py-5">
      <header className="mb-4 col-lg-10">
        <h1 className="display-6 fw-bold text-secondary mb-3">Cómo cotizar con ServiCrep</h1>
        <p className="lead mb-0">
          Proceso simple para solicitar inspección técnica o pruebas de hermeticidad sin compromiso.
          Te orientamos según el estado y la ubicación de tu EDS.
        </p>
      </header>

      <section className="row g-4 mb-5">
        {steps.map((step, index) => (
          <div className="col-md-6 col-lg-3" key={step.title}>
            <div className="h-100 border rounded-3 p-4">
              <div
                className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: 36, height: 36 }}
              >
                {index + 1}
              </div>
              <h2 className="h5">{step.title}</h2>
              <p className="mb-0 text-body-secondary small">{step.text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="row g-4 mb-5">
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="h5 mb-3">Qué conviene tener a mano</h2>
              <ul className="mb-0">
                {documents.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card h-100 border-primary">
            <div className="card-body">
              <h2 className="h5 mb-3">Qué esperar</h2>
              <div className="d-grid gap-3">
                {expectations.map((item) => (
                  <div key={item.title}>
                    <h3 className="h6 mb-1">{item.title}</h3>
                    <p className="mb-0 small text-body-secondary">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light rounded-3 p-4 p-md-5">
        <div className="row align-items-center g-3">
          <div className="col-lg-8">
            <h2 className="h4 mb-2">Solicita tu cotización ahora</h2>
            <p className="mb-0 text-body-secondary">
              Escríbenos por WhatsApp o usa el formulario de contacto. Respuesta en 24–48 horas hábiles.
            </p>
          </div>
          <div className="col-lg-4 d-grid gap-2">
            <a
              className="btn btn-primary"
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CTA_LABELS.whatsapp}
            </a>
            <Link className="btn btn-outline-secondary" href="/contacto">
              Ir a contacto
            </Link>
            <Link className="btn btn-outline-primary" href="/nuestros-servicios">
              {CTA_LABELS.services}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
