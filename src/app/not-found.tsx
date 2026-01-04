import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada | ServiCrep",
  description:
    "La página que buscas no existe. Vuelve al inicio o explora nuestros servicios de inspección.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="container py-5 text-center">
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <h2 className="h3 mb-3">Página no encontrada</h2>
      <p className="text-body-secondary mb-4">
        La página que buscas no existe o ha sido movida.
      </p>
      <div className="d-flex gap-3 justify-content-center">
        <Link href="/" className="btn btn-primary">
          Volver al inicio
        </Link>
        <Link href="/nuestros-servicios" className="btn btn-outline-primary">
          Ver servicios
        </Link>
      </div>
    </main>
  );
}
