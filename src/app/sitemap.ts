import type { MetadataRoute } from "next";
import { problemasConPagina, sitio, tratamientosConPagina } from "@/contenido";

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = [
    "",
    "/tratamientos",
    "/dermatologia",
    "/depilacion",
    "/nosotros",
    "/contacto",
    ...problemasConPagina.map((p) => `/${p.slug}`),
    ...tratamientosConPagina.map((t) => `/tratamientos/${t.slug}`),
  ];
  return rutas.map((r) => ({ url: `${sitio.url}${r}`, lastModified: new Date() }));
}
