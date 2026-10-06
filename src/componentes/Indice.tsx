"use client";

import { useState } from "react";

const ayudas = {
  problema:
    "Elegí la zona o el signo que querés trabajar. En cada página vas a encontrar qué tratamientos usamos y cómo se decide cuál corresponde.",
  solucion:
    "Elegí el tratamiento que estás buscando. Cada página explica cómo funciona, cuántas sesiones lleva y para qué casos está indicado.",
};

/** Conmutador del índice: las dos vistas llegan ya armadas desde el servidor. */
export function Indice({
  porProblema,
  porTratamiento,
}: {
  porProblema: React.ReactNode;
  porTratamiento: React.ReactNode;
}) {
  const [vista, setVista] = useState<"problema" | "solucion">("problema");

  return (
    <>
      <div className="switch">
        <div className="wrap">
          <div className="pestanas" role="tablist" aria-label="Forma de recorrer los tratamientos">
            <button
              className="pestana"
              id="tab-problema"
              role="tab"
              aria-selected={vista === "problema"}
              aria-controls="vista-problema"
              onClick={() => setVista("problema")}
            >
              Por problema
            </button>
            <button
              className="pestana"
              id="tab-solucion"
              role="tab"
              aria-selected={vista === "solucion"}
              aria-controls="vista-solucion"
              onClick={() => setVista("solucion")}
            >
              Por tratamiento
            </button>
          </div>
          <p className="ayuda">{ayudas[vista]}</p>
        </div>
      </div>
      <section id="vista-problema" role="tabpanel" aria-labelledby="tab-problema" hidden={vista !== "problema"}>
        <div className="wrap ancho">{porProblema}</div>
      </section>
      <section id="vista-solucion" role="tabpanel" aria-labelledby="tab-solucion" hidden={vista !== "solucion"}>
        <div className="wrap ancho">{porTratamiento}</div>
      </section>
    </>
  );
}
