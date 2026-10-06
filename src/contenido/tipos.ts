// En cualquier texto, lo que va entre [[dobles corchetes]] es un dato
// "a confirmar": se muestra marcado en la vista previa y se oculta en producción.

export type Faq = { pregunta: string; respuesta: string };

export type GrupoTratamiento =
  | "Inyectables"
  | "Aparatología"
  | "Cuidado de la piel"
  | "Capilar"
  | "Corporal"
  | "Vascular";

export type DetalleTratamiento = {
  tituloLinea1: string;
  tituloLinea2?: string;
  bajada: string;
  aval?: string;
  ficha: { dato: string; valor: string }[];
  queEs: string[];
  corrige?: { items: string[]; nota?: string };
  pasos: { titulo: string; texto: string }[];
  limite?: { titulo: string; texto: string };
  quien?: string[];
  faqs: Faq[];
};

export type Tratamiento = {
  slug: string;
  nombre: string;
  /** Nombre corto para menú y etiquetas. */
  corto?: string;
  grupo: GrupoTratamiento;
  resumen: string;
  /** Slugs de los problemas para los que está indicado. Única fuente de la relación. */
  problemas: string[];
  /** Vigencia del tratamiento sin confirmar por la clínica. */
  aConfirmar?: boolean;
  /** Si tiene página en otra ruta (por ejemplo Dermatología). */
  destino?: string;
  /** Contenido de la página propia. Sin detalle, la tarjeta no linkea. */
  detalle?: DetalleTratamiento;
  /** Aparece en el menú desplegable. */
  enMenu?: boolean;
};

export type Problema = {
  slug: string;
  nombre: string;
  corto?: string;
  grupo: "Rostro" | "Cuerpo";
  resumen: string;
  /** Tarjeta que lleva directo a otra página, sin página de problema propia. */
  destino?: string;
  tituloLinea1?: string;
  tituloLinea2?: string;
  bajada?: string;
  tipos?: {
    titulo: string;
    intro: string;
    items: { causa: string; nombre: string; texto: string }[];
    nota?: string;
  };
  /** Textos propios de un tratamiento dentro de esta página. */
  enEstaPagina?: Record<string, { indicado?: string; texto?: string }>;
  extras?: { indicado: string; nombre: string; texto: string }[];
  nota?: string;
  alerta?: { titulo: string; intro: string; items: string[] };
  faqs?: Faq[];
  enMenu?: boolean;
};
