import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Acciones, Contacto, Faqs, Hero, Slot } from "@/componentes/Bloques";
import { Texto, quedaVacio } from "@/componentes/Texto";
import {
  mostrarPendientes,
  problemasConPagina,
  tratamientosDe,
  urlTratamiento,
} from "@/contenido";

export const dynamicParams = false;

export function generateStaticParams() {
  return problemasConPagina.map((p) => ({ problema: p.slug }));
}

type Props = { params: Promise<{ problema: string }> };

function buscar(slug: string) {
  return problemasConPagina.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = buscar((await params).problema);
  if (!p) return {};
  return {
    title: `Tratamientos para ${p.nombre.toLowerCase()}`,
    description: p.bajada ?? p.resumen,
    alternates: { canonical: `/${p.slug}` },
  };
}

export default async function Pagina({ params }: Props) {
  const p = buscar((await params).problema);
  if (!p) notFound();

  const lista = tratamientosDe(p.slug).filter(
    (t) => mostrarPendientes || !t.aConfirmar,
  );
  const extras = (p.extras ?? []).filter((e) => !quedaVacio(e.texto));
  const nombre = p.nombre.toLowerCase();

  return (
    <>
      <Hero
        eyebrow={`Tratamientos · ${p.grupo} · ${p.corto ?? p.nombre}`}
        linea1={p.tituloLinea1 ?? p.nombre}
        linea2={p.tituloLinea2}
        bajada={p.bajada}
      >
        <Acciones
          tema={nombre}
          secundario={{ href: "#tratamientos", texto: "Ver tratamientos disponibles" }}
        />
      </Hero>

      {p.tipos && (
        <section>
          <div className="wrap">
            <h2 className="titulo-seccion">{p.tipos.titulo}</h2>
            <p className="intro">{p.tipos.intro}</p>
            <div className="tipos">
              {p.tipos.items.map((i) => (
                <div className="tipo" key={i.nombre}>
                  <span className="causa">{i.causa}</span>
                  <h3>{i.nombre}</h3>
                  <p>{i.texto}</p>
                </div>
              ))}
            </div>
            {p.tipos.nota && (
              <p className="nota-chica">
                <Texto>{p.tipos.nota}</Texto>
              </p>
            )}
          </div>
        </section>
      )}

      <section className="claro" id="tratamientos">
        <div className="wrap">
          <h2 className="titulo-seccion">Tratamientos que usamos para {nombre}</h2>
          <p>
            Cada caso puede necesitar uno solo o una combinación. Entrá en cada
            tratamiento para ver cómo funciona, cuántas sesiones lleva y qué
            cuidados requiere.
          </p>
          <div className="trats">
            {lista.map((t) => {
              const propio = p.enEstaPagina?.[t.slug];
              const href = urlTratamiento(t);
              return (
                <div className="trat" key={t.slug}>
                  {propio?.indicado && <span className="indicado">{propio.indicado}</span>}
                  <h3>
                    {t.aConfirmar ? <span className="pendiente">{t.nombre}</span> : t.nombre}
                  </h3>
                  <p>
                    <Texto>{propio?.texto ?? t.resumen}</Texto>
                  </p>
                  <Link href={href}>{t.destino ? "Ver la sección" : "Ver tratamiento"}</Link>
                </div>
              );
            })}
            {extras.map((e) => (
              <div className="trat" key={e.nombre}>
                <span className="indicado">{e.indicado}</span>
                <h3>{e.nombre}</h3>
                <p>
                  <Texto>{e.texto}</Texto>
                </p>
              </div>
            ))}
          </div>
          <div className="nota">
            <b>Cuál corresponde en tu caso</b>
            <p>
              {p.nota ??
                "Eso se define en la consulta de evaluación. La doctora revisa la zona, escucha qué te gustaría mejorar y arma el plan, que en muchos casos combina más de un tratamiento."}
            </p>
          </div>
        </div>
      </section>

      {p.alerta && (
        <section>
          <div className="wrap dos">
            <div>
              <div className="alerta">
                <h3>{p.alerta.titulo}</h3>
                <p>{p.alerta.intro}</p>
                <ul>
                  {p.alerta.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <p className="alerta-link">
                  <Link href="/dermatologia">Consulta dermatológica</Link>
                </p>
              </div>
            </div>
            <div>
              <Slot forma="ancho">
                Espacio para foto del consultorio o del equipo
                <br />
                Sin comparaciones de resultados
              </Slot>
            </div>
          </div>
        </section>
      )}

      {p.faqs && <Faqs faqs={p.faqs} />}
      <Contacto origen={p.nombre} tema={nombre} />
    </>
  );
}
