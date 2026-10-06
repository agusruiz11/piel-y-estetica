import type { MetadataRoute } from "next";
import { sitio } from "@/contenido";

// Mientras el sitio vive en el dominio provisorio no se deja indexar.
// Al pasar al dominio definitivo: NEXT_PUBLIC_INDEXABLE=1

export default function robots(): MetadataRoute.Robots {
  if (process.env.NEXT_PUBLIC_INDEXABLE !== "1") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/gracias", "/api/"] },
    sitemap: `${sitio.url}/sitemap.xml`,
  };
}
