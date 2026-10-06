import type { Metadata } from "next";
import { Contacto, Hero } from "@/componentes/Bloques";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Consultorios en Belgrano y Pilar. Reservá tu evaluación por formulario, WhatsApp o teléfono.",
  alternates: { canonical: "/contacto" },
};

export default function Pagina() {
  return (
    <>
      <Hero
        eyebrow="Contacto"
        linea1="Nuestros"
        linea2="consultorios"
        bajada="Atendemos en Belgrano y en Pilar. Escribinos y coordinamos día y horario."
      />
      <Contacto origen="Contacto" />
    </>
  );
}
