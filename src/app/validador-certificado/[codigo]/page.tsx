import { Metadata } from 'next';
import Link from 'next/link';

const table =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ73kIMTnPvaRDAVShFl7xLYcOIOmC00vzYCZIZS3HrWCiZY09I7bd3hvCeTxi0UPTr6m7FNdbdjHnk/pub?output=csv";

export const revalidate = 0; // Revalida en cada request

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  title: 'Validador de Certificado',
};

interface Props {
  params: Promise<{ codigo: string }>;

}

export default async function ValidatorPage({ params }: Props) {
    // CSS local para que los iconos respeten el color de la clase o style
    // y no sean forzados a blanco por el global .fas { color: #fff !important; }
    // Solo afecta a este componente
    const iconColorFix = (
      <style>{`
        .validador-certificado-fix .fas,
        .validador-certificado-fix .fa,
        .validador-certificado-fix .far,
        .validador-certificado-fix .fal {
          color: inherit !important;
        }
      `}</style>
    );
  const { codigo } = await params;

  const CSV = await fetch(table, {
    cache: "no-store", // Desactiva el cache de Next.js
  }).then((res) => res.text());

  const EDSs = CSV.split("\n")
    .slice(1)
    .map((row) => {
      const [codigo, tipo, nombreEds, fechaInspeccion, lugar] = row
        .split(",")
        .map((field) => field.trim());
      return { codigo, tipo, nombreEds, fechaInspeccion, lugar };
    })
    .filter((eds) => eds.codigo && eds.nombreEds);

  // Buscar la EDS por código
  const eds = EDSs.find((item) => item.codigo === codigo);

  if (!eds) {
    return (
      <div className="container py-5 validador-certificado-fix">
        {iconColorFix}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg border-0">
              <div className="card-body text-center p-5">
                <div className="mb-4">
                  <i className="fas fa-exclamation-triangle text-primary" style={{ fontSize: '4rem' }}></i>
                </div>
                <h1 className="display-5 fw-bold text-danger mb-3">Certificado No Encontrado</h1>
                <p className="lead text-muted mb-4">
                  El código de inspección <strong className="text-dark">{codigo}</strong> no existe en nuestros registros.
                </p>
                <div className="alert alert-warning border-0 shadow-sm" role="alert">
                  <i className="fas fa-shield-alt me-2"></i>
                  Este código QR constituye prueba oficial de inspección técnica realizada por COMPAÑÍA SERVICREP S.A.S. 
                  Cualquier copia sin validación QR carece de valor técnico y legal.
                </div>
                <Link href="/" className="btn btn-primary btn-lg mt-3">
                  <i className="fas fa-home me-2"></i>Volver al Inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5 validador-certificado-fix">
      {iconColorFix}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Header de validación exitosa */}
          <div className="text-center mb-4">
            <div className="mb-3">
              <i className="fas fa-check-circle text-primary" style={{ fontSize: '5rem' }}></i>
            </div>
            <h1 className="display-4 fw-bold text-success mb-2">Certificado Válido</h1>
            <p className="lead text-muted">Inspección técnica verificada y autorizada</p>
          </div>

          {/* Tarjeta principal del certificado */}
          <div className="card shadow-lg border-0 mb-4">
            <div className="card-header bg-primary text-white py-3">
              <h2 className="h4 mb-0 fw-bold">
                <i className="fas fa-certificate me-2"></i>
                Certificado de Inspección Técnica
              </h2>
            </div>
            <div className="card-body p-4">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="p-3 bg-light rounded">
                    <label className="text-muted small mb-1">Código de Inspección</label>
                    <p className="h5 mb-0 fw-bold text-primary">{eds.codigo}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 bg-light rounded">
                    <label className="text-muted small mb-1">Tipo de Inspección</label>
                    <p className="h5 mb-0 fw-bold">{eds.tipo}</p>
                  </div>
                </div>
                <div className="col-12">
                  <div className="p-3 bg-light rounded">
                    <label className="text-muted small mb-1">Nombre de la EDS</label>
                    <p className="h5 mb-0 fw-bold">{eds.nombreEds}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 bg-light rounded">
                    <label className="text-muted small mb-1">Fecha de Inspección</label>
                    <p className="h5 mb-0 fw-bold">
                      <i className="fas fa-calendar-alt me-2 text-primary"></i>
                      {eds.fechaInspeccion}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 bg-light rounded">
                    <label className="text-muted small mb-1">Lugar</label>
                    <p className="h5 mb-0 fw-bold">
                      <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                      {eds.lugar}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer bg-white border-top-0 p-4">
              <div className="alert alert-info border-0 shadow-sm mb-0" role="alert">
                <div className="d-flex align-items-start">
                  <i className="fas fa-shield-alt me-3 mt-1 text-primary"></i>
                  <div>
                    <h6 className="fw-bold mb-2">Validación Oficial</h6>
                    <p className="mb-0 small">
                      Este código QR constituye prueba oficial de inspección técnica realizada por COMPAÑÍA SERVICREP S.A.S. 
                      Cualquier copia sin validación QR carece de valor técnico y legal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botón de regreso */}
          <div className="text-center">
            <Link href="/" className="btn btn-outline-primary btn-lg">
              <i className="fas fa-arrow-left me-2"></i>Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
