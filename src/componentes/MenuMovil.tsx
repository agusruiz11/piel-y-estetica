"use client";

import Link from "next/link";
import { useState } from "react";

type Enlace = { href: string; texto: string };

export function MenuMovil({
  porProblema,
  porTratamiento,
  enlaces,
}: {
  porProblema: Enlace[];
  porTratamiento: Enlace[];
  enlaces: Enlace[];
}) {
  const [abierto, setAbierto] = useState(false);
  const cerrar = () => setAbierto(false);

  return (
    <div className="movil">
      <button
        type="button"
        className="movil-boton"
        aria-expanded={abierto}
        aria-controls="menu-movil"
        onClick={() => setAbierto(!abierto)}
      >
        {abierto ? "Cerrar" : "Menú"}
      </button>
      {abierto && (
        <div id="menu-movil" className="movil-panel">
          <div className="wrap">
            <Link href="/tratamientos" className="movil-principal" onClick={cerrar}>
              Todos los tratamientos
            </Link>
            <details>
              <summary>Por problema</summary>
              <ul>
                {porProblema.map((e) => (
                  <li key={e.texto}>
                    <Link href={e.href} onClick={cerrar}>
                      {e.texto}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
            <details>
              <summary>Por tratamiento</summary>
              <ul>
                {porTratamiento.map((e) => (
                  <li key={e.texto}>
                    <Link href={e.href} onClick={cerrar}>
                      {e.texto}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
            {enlaces.map((e) => (
              <Link key={e.href} href={e.href} className="movil-principal" onClick={cerrar}>
                {e.texto}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
