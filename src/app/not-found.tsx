import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>404 - No encontrado</h1>
      <p>La pagina que buscas no existe.</p>
      <Link href="/">volver a home</Link>
    </div>
  );
}
