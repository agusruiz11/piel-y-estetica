import { Fragment } from "react";
import { mostrarPendientes } from "@/contenido/sitio";

/** Marca un dato que la clínica todavía tiene que confirmar. */
export function Pendiente({ children }: { children: React.ReactNode }) {
  if (!mostrarPendientes) return null;
  return <span className="pendiente">{children}</span>;
}

/** Renderiza un texto y convierte lo que va entre [[corchetes]] en pendiente. */
export function Texto({ children }: { children: string }) {
  const partes = children.split(/(\[\[.*?\]\])/g).filter(Boolean);
  return (
    <>
      {partes.map((parte, i) =>
        parte.startsWith("[[") ? (
          <Pendiente key={i}>{parte.slice(2, -2)}</Pendiente>
        ) : (
          <Fragment key={i}>{parte}</Fragment>
        ),
      )}
    </>
  );
}

/** True si, con los pendientes ocultos, el texto queda vacío. */
export function quedaVacio(texto: string) {
  if (mostrarPendientes) return false;
  return texto.replace(/\[\[.*?\]\]/g, "").trim() === "";
}
