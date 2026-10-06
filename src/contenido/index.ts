import { problemas } from "./problemas";
import { tratamientos, gruposTratamiento } from "./tratamientos";
import type { DetalleTratamiento, Problema, Tratamiento } from "./tipos";
import { mostrarPendientes } from "./sitio";

export { problemas, tratamientos, gruposTratamiento };
export * from "./tipos";
export * from "./sitio";

export function urlProblema(p: Problema) {
  return p.destino ?? `/${p.slug}`;
}

/** Todos los tratamientos tienen página propia, salvo los que apuntan a otra sección. */
export function urlTratamiento(t: Tratamiento): string {
  return t.destino ?? `/tratamientos/${t.slug}`;
}

const aCompletar = "[[A completar por la clínica]]";

/**
 * Contenido de la página de un tratamiento. Si todavía no se cargó el detalle,
 * se arma una versión base con la misma estructura y los datos marcados como
 * pendientes, para que la página exista y se pueda navegar.
 */
export function detalleDe(t: Tratamiento): DetalleTratamiento {
  if (t.detalle) return t.detalle;
  return {
    tituloLinea1: t.nombre,
    bajada: t.resumen.replace(/\[\[.*?\]\]/g, "").trim() ||
      "La evaluación médica define si este tratamiento es el indicado para tu caso.",
    ficha: [
      { dato: "Duración", valor: aCompletar },
      { dato: "Sesiones", valor: aCompletar },
      { dato: "Reposo", valor: aCompletar },
      { dato: "Duración del resultado", valor: aCompletar },
      { dato: "Requiere", valor: "Consulta de evaluación previa" },
    ],
    queEs: [
      t.resumen,
      "[[Descripción completa a redactar a partir del sitio actual y con validación de la doctora]]",
    ],
    pasos: [
      {
        titulo: "Evaluación",
        texto:
          "Se revisa la zona, se repasan antecedentes y se define si este tratamiento es el indicado o si conviene otro.",
      },
      {
        titulo: "Tratamiento",
        texto: "Se realiza en el consultorio. [[Detalle del procedimiento a completar]]",
      },
      {
        titulo: "Seguimiento",
        texto: "Se pautan los controles y los cuidados posteriores. [[Plazos a completar]]",
      },
    ],
    faqs: [
      { pregunta: "Cuántas sesiones necesito", respuesta: aCompletar },
      { pregunta: "Qué cuidados requiere después", respuesta: aCompletar },
      {
        pregunta: "Cuánto cuesta",
        respuesta:
          "El valor se define en la consulta de evaluación, porque depende de lo que necesite cada caso.",
      },
    ],
  };
}

export function tratamientosDe(problemaSlug: string) {
  return tratamientos.filter((t) => t.problemas.includes(problemaSlug));
}

export function problemasDe(t: Tratamiento) {
  return t.problemas
    .map((slug) => problemas.find((p) => p.slug === slug))
    .filter((p): p is Problema => Boolean(p));
}

export const problemasConPagina = problemas.filter((p) => !p.destino);
export const tratamientosConPagina = tratamientos.filter(
  (t) => !t.destino && (mostrarPendientes || !t.aConfirmar),
);

export const menu = {
  problemas: problemas.filter((p) => p.enMenu),
  tratamientos: tratamientos.filter((t) => t.enMenu),
};
