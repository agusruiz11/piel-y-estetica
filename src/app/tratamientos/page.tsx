import type { Metadata } from "next";
import { Indice } from "@/componentes/Indice";
import { Cierre, Hero, TarjetaProblema, TarjetaTratamiento } from "@/componentes/Bloques";
import { gruposTratamiento, mostrarPendientes, problemas, tratamientos } from "@/contenido";

export const metadata: Metadata = {
  title: "Tratamientos",
  description:
    "Todos los tratamientos del centro, ordenados por problema y por nombre de tratamiento.",
  alternates: { canonical: "/tratamientos" },
};

export default function Pagina() {
  const porProblema = (["Rostro", "Cuerpo"] as const).map((grupo) => (
    <div className="grupo" key={grupo}>
      <h2>{grupo}</h2>
      <div className="grid">
        {problemas
          .filter((p) => p.grupo === grupo)
          .map((p) => (
            <TarjetaProblema key={p.slug} p={p} />
          ))}
      </div>
    </div>
  ));

  const porTratamiento = gruposTratamiento.map((grupo) => {
    const lista = tratamientos.filter(
      (t) => t.grupo === grupo && (mostrarPendientes || !t.aConfirmar),
    );
    if (lista.length === 0) return null;
    return (
      <div className="grupo" key={grupo}>
        <h2>{grupo}</h2>
        <div className="grid">
          {lista.map((t) => (
            <TarjetaTratamiento key={t.slug} t={t} />
          ))}
        </div>
      </div>
    );
  });

  return (
    <>
      <Hero
        eyebrow="Centro Piel y Estética"
        linea1="Tratamientos"
        bajada="Podés entrar por lo que te preocupa o por el tratamiento que ya conocés. Los dos caminos llevan a la misma información."
      />
      <Indice porProblema={porProblema} porTratamiento={porTratamiento} />
      <Cierre />
    </>
  );
}
