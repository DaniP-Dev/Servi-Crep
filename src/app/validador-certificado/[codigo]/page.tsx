import { Metadata } from 'next';

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
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Inspección no encontrada</h1>
        <p>
          El código de inspección <strong>{codigo}</strong> no existe.
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Certificado de Inspección</h1>
      <div
        style={{
          border: "2px solid #333",
          padding: "1.5rem",
          borderRadius: "8px",
        }}
      >
        <p>
          <strong>Código:</strong> {eds.codigo}
        </p>
        <p>
          <strong>Tipo:</strong> {eds.tipo}
        </p>
        <p>
          <strong>Nombre EDS:</strong> {eds.nombreEds}
        </p>
        <p>
          <strong>Fecha Inspección:</strong> {eds.fechaInspeccion}
        </p>
        <p>
          <strong>Lugar:</strong> {eds.lugar}
        </p>
      </div>
    </div>
  );
}
