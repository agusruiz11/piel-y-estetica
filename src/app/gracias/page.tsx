import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/componentes/Bloques";
import { linkWhatsApp } from "@/contenido";

export const metadata: Metadata = {
  title: "Consulta enviada",
  robots: { index: false, follow: false },
};

// La llegada a esta página es la conversión de formulario en Google Ads y Meta.

export default function Pagina() {
  return (
    <Hero
      eyebrow="Consulta enviada"
      linea1="Recibimos"
      linea2="tu consulta"
      bajada="Te contactamos dentro del horario de atención, de lunes a viernes, para coordinar día y horario."
    >
      <div className="acciones">
        <Link className="btn primario" href="/tratamientos">
          Ver tratamientos
        </Link>
        <a
          className="btn secundario"
          href={linkWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          data-evento="clic_whatsapp"
        >
          Escribir por WhatsApp
        </a>
      </div>
    </Hero>
  );
}
