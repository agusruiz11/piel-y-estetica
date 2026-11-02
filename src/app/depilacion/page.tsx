import type { Metadata } from "next";
import { Acciones, Contacto, Hero } from "@/componentes/Bloques";

export const metadata: Metadata = {
  title: "Depilación láser",
  description: "Depilación láser en rostro y cuerpo, en Las Cañitas y Pilar.",
  alternates: { canonical: "/depilacion" },
};

export default function Pagina() {
  return (
    <>
      <Hero
        eyebrow="Depilación"
        linea1="Depilación"
        linea2="láser"
        bajada="Depilación en todas las zonas del cuerpo, con láser Soprano Ice y luz pulsada Harmony. Los packs se arman según lo que necesita cada paciente."
      >
        <Acciones tema="depilación láser" />
      </Hero>
      <section>
        <div className="wrap dos">
          <div>
            <h2 className="titulo-seccion">Cómo trabajamos</h2>
            <p>
              Trabajamos con dos equipos: el láser Soprano Ice, que es el que
              más usamos, y la luz pulsada Harmony. Antes de empezar se evalúa
              el tipo de piel y de vello para definir con cuál conviene
              trabajar.
            </p>
            <p>
              Se pueden tratar todas las zonas del cuerpo. Los packs se arman
              a medida, según lo que necesite cada paciente.
            </p>
          </div>
          <div>
            <div className="ficha clara">
              <h2>Sesiones</h2>
              <dl>
                <div className="fila">
                  <dt>Cantidad</dt>
                  <dd>Entre 10 y 12, según cada paciente</dd>
                </div>
                <div className="fila">
                  <dt>Frecuencia</dt>
                  <dd>Una cada 30 días</dd>
                </div>
                <div className="fila">
                  <dt>Zonas</dt>
                  <dd>Todo el cuerpo</dd>
                </div>
                <div className="fila">
                  <dt>Packs</dt>
                  <dd>Personalizados</dd>
                </div>
              </dl>
            </div>
            <p className="nota-chica">
              La cantidad de sesiones varía porque el crecimiento del vello
              depende de factores hormonales.
            </p>
          </div>
        </div>
      </section>
      <Contacto origen="Depilación" tema="depilación láser" />
    </>
  );
}
