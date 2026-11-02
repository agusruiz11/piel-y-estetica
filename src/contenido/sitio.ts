// Datos generales del sitio. Se editan acá y se reflejan en todas las páginas.

// URL pública: la definida a mano, si no el dominio de producción en Vercel.
// Se usa para armar los enlaces absolutos de las imágenes al compartir.
const urlSitio =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://www.pielyestetica.com");

export const sitio = {
  nombre: "Centro Piel y Estética",
  doctora: "Dra. Laura Mijelshon",
  url: urlSitio,
  mail: "info@pielyestetica.com",
  telefono: "(+54 11) 4775 9186",
  telefonoLink: "+541147759186",
  whatsapp: "5491162628742",
  instagram: "https://www.instagram.com/pielyestetica/",
  facebook: "https://www.facebook.com/pielyestetica",
  sedes: <{ nombre: string; direccion: string; mapa: string; horario?: string }[]>[
    {
      nombre: "Consultorio Las Cañitas",
      direccion: "Olleros 1806, 4º A · Las Cañitas, CABA",
      mapa: "https://www.google.com/maps/search/?api=1&query=Olleros+1806+CABA",
      horario: "[[Lunes a viernes de 9 a 20 hs]]",
    },
    {
      nombre: "Consultorio Pilar",
      direccion:
        "Los Crisantemos 392, Edificio Skyglass 3, Of. 114 · Manuel Alberti, Pilar [[Oficina a confirmar: 114 o 312]]",
      mapa: "https://www.google.com/maps/search/?api=1&query=Los+Crisantemos+392+Manuel+Alberti",
      horario: "Miércoles de 10 a 15 hs",
    },
  ],
};

/**
 * Mientras el sitio está en revisión se muestran las marcas "a confirmar".
 * En producción se apagan con NEXT_PUBLIC_MOSTRAR_PENDIENTES=0 y el dato
 * sin confirmar deja de mostrarse.
 */
export const mostrarPendientes =
  process.env.NEXT_PUBLIC_MOSTRAR_PENDIENTES !== "0";

export const textoRespuesta =
  "Respondemos todos los mensajes en el día, de lunes a viernes. Si hay mucha demanda, puede demorar unas horas.";

export const matricula = "M.N. 72517 · M.P. 551449";

export function linkWhatsApp(tema?: string) {
  const texto = tema
    ? `Hola, quiero hacer una consulta sobre ${tema}.`
    : "Hola, quiero hacer una consulta.";
  return `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(texto)}`;
}
