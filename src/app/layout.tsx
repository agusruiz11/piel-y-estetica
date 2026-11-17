import type { Metadata } from "next";
import Script from "next/script";
import {
  League_Gothic,
  Montserrat,
  Quicksand,
  Yellowtail,
} from "next/font/google";
import { Nav } from "@/componentes/Nav";
import { BarraRevision, Pie } from "@/componentes/Bloques";
import { sitio } from "@/contenido";
import "./globals.css";
import { WhatsAppFlotante } from "@/componentes/WhatsAppFlotante";

// Google Tag Manager: solo en producción, para no ensuciar las métricas con visitas de prueba.
const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-W3G2ZSW";
const conMedicion = process.env.VERCEL_ENV === "production";

const titulo = League_Gothic({ subsets: ["latin"], variable: "--f-titulo" });
const sub = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--f-sub",
});
const texto = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--f-texto",
});

const script = Yellowtail({
  subsets: ["latin"],
  weight: "400",
  variable: "--f-script",
});

const indexable = process.env.NEXT_PUBLIC_INDEXABLE === "1";

export const metadata: Metadata = {
  metadataBase: new URL(sitio.url),
  title: {
    default: `${sitio.nombre} | ${sitio.doctora}`,
    template: `%s | ${sitio.nombre}`,
  },
  description:
    "Dermatología clínica y estética en Las Cañitas y Pilar. Tratamientos faciales y corporales con evaluación médica previa.",
  robots: indexable ? undefined : { index: false, follow: false },
  openGraph: { siteName: sitio.nombre, locale: "es_AR", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-AR"
      className={`${titulo.variable} ${sub.variable} ${texto.variable} ${script.variable}`}
    >
      <body>
        {conMedicion && (
          <>
            <Script id="gtm" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}
        <BarraRevision />
        <Nav />
        <main>{children}</main>
        <Pie />
        <WhatsAppFlotante />
      </body>
    </html>
  );
}
