import type { Metadata } from "next";
import { Acciones, Contacto, Hero } from "@/componentes/Bloques";
import { Pendiente } from "@/componentes/Texto";

export const metadata: Metadata = {
  title: "Depilación láser",
  description: "Depilación láser en rostro y cuerpo, en Belgrano y Pilar.",
  alternates: { canonical: "/depilacion" },
};

export default function Pagina() {
  return (
    <>
      <Hero
        eyebrow="Depilación"
        linea1="Depilación"
        linea2="láser"
        bajada="Depilación definitiva en rostro y cuerpo, con profesionales especializados y packs por zona."
      >
        <Acciones tema="depilación láser" />
      </Hero>
      <section>
        <div className="wrap dos">
          <div>
            <h2 className="titulo-seccion">Cómo trabajamos</h2>
            <p>
              Antes de empezar se evalúa el tipo de piel y de vello para definir
              el plan y la cantidad de sesiones.
            </p>
            <p className="nota-chica">
              <Pendiente>
                Equipo (el sitio actual nombra Soprano Ice), zonas, packs y
                cantidad de sesiones a completar por la clínica
              </Pendiente>
            </p>
          </div>
          <div>
            <div className="nota sin-margen">
              <b>Packs por zona</b>
              <p>
                Consultanos por los packs disponibles y armamos el que mejor se
                adapte a lo que necesitás.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Contacto origen="Depilación" tema="depilación láser" />
    </>
  );
}
