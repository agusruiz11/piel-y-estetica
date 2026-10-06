import Link from "next/link";
import { Hero } from "@/componentes/Bloques";

export default function NoEncontrada() {
  return (
    <Hero
      eyebrow="Página no encontrada"
      linea1="Esta página"
      linea2="no existe"
      bajada="Puede que el enlace haya cambiado. Desde el índice de tratamientos llegás a todo el contenido del sitio."
    >
      <div className="acciones">
        <Link className="btn primario" href="/tratamientos">
          Ver tratamientos
        </Link>
        <Link className="btn secundario" href="/">
          Ir al inicio
        </Link>
      </div>
    </Hero>
  );
}
