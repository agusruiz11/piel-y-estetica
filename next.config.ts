import type { NextConfig } from "next";

// Redirecciones desde las URLs del sitio anterior en Wix.
const aInicio = [
  "/promos",
  "/promos-fiestas",
  "/team-1",
  "/copia-de-home",
  "/copia-de-home-1",
  "/copia-de-home-agosto",
  "/productos",
  "/blog",
  "/book-online",
  "/equipamiento",
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/flaccidez", destination: "/flacidez-corporal", permanent: true },
      { source: "/team-1-1", destination: "/depilacion", permanent: true },
      { source: "/acerca-de", destination: "/nosotros", permanent: true },
      { source: "/donde-estamos", destination: "/contacto", permanent: true },
      { source: "/lesione-pigmentarias", destination: "/manchas", permanent: true },
      { source: "/paquete-verano", destination: "/adiposidad-localizada", permanent: true },
      ...aInicio.map((source) => ({ source, destination: "/", permanent: true })),
    ];
  },
};

export default nextConfig;
