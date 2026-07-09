import Link from "next/link";
import { CONTACT_INFO, CTA_LABELS } from "@/lib/constants";

const trustItems = [
  {
    icon: "bi bi-shield-check",
    title: "Acreditación ONAC",
    text: "Organismo de Inspección Tipo A bajo ISO/IEC 17020, con imparcialidad técnica.",
  },
  {
    icon: "bi bi-calendar3",
    title: "5+ años de experiencia",
    text: "Inspección técnica y hermeticidad para estaciones de servicio en Colombia.",
  },
  {
    icon: "bi bi-geo-alt",
    title: "Cobertura nacional",
    text: "Atención programada en Atlántico y resto del país con tiempos claros.",
  },
  {
    icon: "bi bi-qr-code",
    title: "Certificados verificables",
    text: "Cada certificado puede validarse en línea con el código QR de ServiCrep.",
  },
];

const Trust = () => {
  return (
    <section className="container-fluid bg-light py-5" aria-labelledby="confianza-title">
      <div className="container py-4">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <h2 id="confianza-title" className="display-6 fw-bold text-secondary mb-3">
              Confianza técnica que respalda tu operación
            </h2>
            <p className="mb-0 text-body-secondary">
              Trabajamos con independencia: no diseñamos, instalamos ni mantenemos. Solo inspeccionamos
              y documentamos resultados según el alcance aplicable.
            </p>
          </div>
        </div>

        <div className="row g-4 mb-4">
          {trustItems.map((item) => (
            <div className="col-md-6 col-lg-3" key={item.title}>
              <div className="h-100 p-4 bg-white border rounded-3">
                <i className={`${item.icon} text-primary fs-3 mb-3 d-block`} aria-hidden />
                <h3 className="h5 mb-2">{item.title}</h3>
                <p className="mb-0 small text-body-secondary">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex flex-wrap gap-2 justify-content-center">
          <Link href="/como-cotizar" className="btn btn-primary">
            {CTA_LABELS.howToQuote}
          </Link>
          <Link href="/calidad" className="btn btn-outline-secondary">
            Políticas de calidad
          </Link>
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            {CTA_LABELS.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Trust;
