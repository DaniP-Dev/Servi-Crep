import { Metadata } from "next";
import Link from "next/link";

// ─── CONSTANTES ───────────────────────────────────────────────────────────────
const SHEET_GIDS = ["0", "1211072494", "1039271537"];

// ─── TIPOS ────────────────────────────────────────────────────────────────────
interface Props {
  params: Promise<{ codigo: string }>;
}

interface EDS {
  codigo: string;
  tipo: string;
  nombreEds: string;
  fechaInspeccion: string;
  fechaEmision: string;
  vencimiento: string;
  lugar: string;
  estado: string;
}

// ─── UTILIDADES ───────────────────────────────────────────────────────────────
function parseCSV(csv: string): EDS[] {
  // Parser que soporta comas dentro de campos entre comillas
  function splitCSVRow(row: string): string[] {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < row.length; i++) {
      const char = row[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    result.push(current.trim());
    return result;
  }

  return csv
    .split("\n")
    .slice(1)
    .map((row) => {
      const [
        codigo,
        tipo,
        nombreEds,
        fechaInspeccion,
        fechaEmision,
        vencimiento,
        lugar,
        estado,
      ] = splitCSVRow(row.replace(/\r/g, ""));
      return { codigo, tipo, nombreEds, fechaInspeccion, fechaEmision, vencimiento, lugar, estado };
    })
    .filter((eds) => eds.codigo && eds.nombreEds);
}

function buildSheetUrl(base: string, gid: string): string {
  const url = new URL(base);
  url.searchParams.set("output", "csv");
  url.searchParams.set("gid", gid);
  return url.toString();
}

// ─── METADATA ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  title: "Validador de Certificado",
};

// ─── TEXTOS ───────────────────────────────────────────────────────────────────
const validadorTexts = {
  informativoLegal:
    "El presente certificado solo adquiere validez técnica y legal cuando su autenticidad es verificada mediante el código QR dispuesto por COMPAÑÍA SERVICREP S.A.S., el cual permite consultar en línea el registro original de la inspección técnica efectuada. Cualquier reproducción parcial o total de este documento que no cuente con validación mediante dicho código QR carece de valor técnico y legal frente a terceros y autoridades competentes.",
};

// ─── COMPONENTE ───────────────────────────────────────────────────────────────
export default async function ValidatorPage({ params }: Props) {
  const BASE_URL = process.env.VALIDATOR_URL;
  if (!BASE_URL) {
    throw new Error("La variable de entorno VALIDATOR URL no está definida.");
  }

  const { codigo } = await params;

  // Fetch de todas las hojas en paralelo con manejo de errores
  const results = await Promise.allSettled(
    SHEET_GIDS.map((gid) =>
      fetch(buildSheetUrl(BASE_URL, gid), {
        next: { revalidate: 60 },
      }).then((res) => res.text()),
    ),
  );

  // Combinar solo las hojas que respondieron exitosamente
  const EDSs = results
    .filter((r): r is PromiseFulfilledResult<string> => r.status === "fulfilled")
    .flatMap((r) => parseCSV(r.value));

  // Buscar el certificado específico
  const eds = EDSs.find((item) => item.codigo === codigo);

  if (eds) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Header de validación exitosa */}
            <div className="text-center mb-4">
              <div className="mb-3">
                <i
                  className="fas fa-check-circle text-primary"
                  style={{ fontSize: "5rem" }}
                ></i>
              </div>
              <h1 className="display-4 fw-bold text-secondary mb-2">
                Certificado Válido
              </h1>
              <p className="lead text-muted">
                Inspección técnica verificada y autorizada
              </p>
            </div>

            {/* Tarjeta principal del certificado */}
            <div className="card shadow-lg border-0 mb-4">
              <div className="card-header bg-primary text-white py-3">
                <h2 className="h4 mb-0 fw-bold">
                  <i className="fas fa-certificate text-light me-2"></i>
                  Certificado de Inspección Técnica
                </h2>
              </div>
              <div className="card-body p-4">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded">
                      <label className="text-muted small mb-1">
                        Código de Inspección
                      </label>
                      <p className="h5 mb-0 fw-bold text-success">
                        {eds.codigo}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded">
                      <label className="text-muted small mb-1">
                        Tipo de Inspección
                      </label>
                      <p className="h5 mb-0 fw-bold">{eds.tipo}</p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="p-3 bg-light rounded">
                      <label className="text-muted small mb-1">
                        Nombre de la EDS
                      </label>
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
                      <label className="text-muted small mb-1">Fecha de Emisión</label>
                      <p className="h5 mb-0 fw-bold">
                        <i className="fas fa-calendar-alt me-2 text-success"></i>
                        {eds.fechaEmision}
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
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded">
                      <label className="text-muted small mb-1">
                        Vencimiento
                      </label>
                      <p className="h5 mb-0 fw-bold">
                        <i className="fas fa-calendar-times me-2 text-danger"></i>
                        {eds.vencimiento}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded">
                      <label className="text-muted small mb-1">Estado</label>
                      <p className="h5 mb-0 fw-bold">{eds.estado}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer bg-white border-top-0 p-4">
                <div
                  className="alert alert-info border-0 shadow-sm mb-0"
                  role="alert"
                >
                  <div className="d-flex align-items-start">
                    <i className="fas fa-shield-alt me-3 mt-1 text-primary"></i>
                    <div>
                      <h6 className="fw-bold mb-2">Validación Oficial</h6>
                      <p className="mb-0 small">{validadorTexts.informativoLegal}</p>
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

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0">
            <div className="card-body text-center p-5">
              <div className="mb-4">
                <i
                  className="fas fa-exclamation-triangle text-danger"
                  style={{ fontSize: "4rem" }}
                ></i>
              </div>
              <h1 className="display-5 fw-bold text-danger mb-3">
                Certificado No Encontrado
              </h1>
              <p className="lead text-muted mb-4">
                El código de inspección{" "}
                <strong className="text-dark">{codigo}</strong> no existe en
                nuestros registros.
              </p>
              <div
                className="alert alert-warning border-0 shadow-sm"
                role="alert"
              >
                <i className="fas fa-shield-alt me-2"></i>
                {validadorTexts.informativoLegal}
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
