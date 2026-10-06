import type { Metadata } from "next";
import { League_Gothic, Montserrat, Quicksand, Yellowtail } from "next/font/google";
import { Nav } from "@/componentes/Nav";
import { BarraRevision, Pie } from "@/componentes/Bloques";
import { sitio } from "@/contenido";
import "./globals.css";

const titulo = League_Gothic({ subsets: ["latin"], variable: "--f-titulo" });
const sub = Quicksand({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--f-sub" });
const texto = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--f-texto" });

const script = Yellowtail({ subsets: ["latin"], weight: "400", variable: "--f-script" });

const indexable = process.env.NEXT_PUBLIC_INDEXABLE === "1";

export const metadata: Metadata = {
  metadataBase: new URL(sitio.url),
  title: {
    default: `${sitio.nombre} | ${sitio.doctora}`,
    template: `%s | ${sitio.nombre}`,
  },
  description:
    "Dermatología clínica y estética en Belgrano y Pilar. Tratamientos faciales y corporales con evaluación médica previa.",
  robots: indexable ? undefined : { index: false, follow: false },
  openGraph: { siteName: sitio.nombre, locale: "es_AR", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={`${titulo.variable} ${sub.variable} ${texto.variable} ${script.variable}`}>
      <body>
        <BarraRevision />
        <Nav />
        <main>{children}</main>
        <Pie />
      </body>
    </html>
  );
}
