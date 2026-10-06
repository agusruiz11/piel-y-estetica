import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Acciones, Contacto, Faqs, Hero, Retrato, Slot } from "@/componentes/Bloques";
import { Texto } from "@/componentes/Texto";
import Link from "next/link";
import { detalleDe, problemasDe, tratamientosConPagina, urlProblema } from "@/contenido";

export const dynamicParams = false;

export function generateStaticParams() {
  return tratamientosConPagina.map((t) => ({ slug: t.slug }));
}

type Props = { params: Promise<{ slug: string }> };

function buscar(slug: string) {
  return tratamientosConPagina.find((t) => t.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = buscar((await params).slug);
  if (!t) return {};
  const d = detalleDe(t);
  return {
    title: [d.tituloLinea1, d.tituloLinea2].filter(Boolean).join(" "),
    description: d.bajada,
    alternates: { canonical: `/tratamientos/${t.slug}` },
  };
}

export default async function Pagina({ params }: Props) {
  const t = buscar((await params).slug);
  if (!t) notFound();
  const d = detalleDe(t);
  const indicado = problemasDe(t);

  return (
    <>
      <Hero
        eyebrow={`Tratamientos · ${t.grupo} · ${t.corto ?? t.nombre}`}
        linea1={d.tituloLinea1}
        linea2={d.tituloLinea2}
        bajada={d.bajada}
        lateral={
          <div className="ficha">
            <h2>Ficha del procedimiento</h2>
            <dl>
              {d.ficha.map((f) => (
                <div className="fila" key={f.dato}>
                  <dt>{f.dato}</dt>
                  <dd>
                    <Texto>{f.valor}</Texto>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        }
      >
        <Acciones tema={t.nombre} />
        {d.aval && <p className="aval">{d.aval}</p>}
      </Hero>

      <section>
        <div className="wrap dos">
          <div>
            <h2 className="titulo-seccion">Qué es</h2>
            {d.queEs.map((p) => (
              <p key={p}>
                <Texto>{p}</Texto>
              </p>
            ))}
          </div>
          {!d.corrige && indicado.length > 0 && (
            <div>
              <h2 className="titulo-seccion">Para qué está indicado</h2>
              <ul className="corrige una">
                {indicado.map((p) => (
                  <li key={p.slug}>
                    <Link href={urlProblema(p)}>{p.nombre}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {d.corrige && (
            <div>
              <h2 className="titulo-seccion">Qué se puede corregir</h2>
              <ul className="corrige">
                {d.corrige.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              {d.corrige.nota && (
                <p className="nota-chica">
                  <Texto>{d.corrige.nota}</Texto>
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="claro">
        <div className="wrap dos">
          <div>
            <h2 className="titulo-seccion">Cómo es la consulta</h2>
            <div className="pasos">
              {d.pasos.map((p) => (
                <div className="paso" key={p.titulo}>
                  <div className="n" />
                  <div>
                    <h3>{p.titulo}</h3>
                    <p>
                      <Texto>{p.texto}</Texto>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Slot forma="ancho">
              Espacio para foto del consultorio o del procedimiento
              <br />
              Sin comparaciones de resultados
            </Slot>
            {d.limite && (
              <div className="limite">
                <h3>{d.limite.titulo}</h3>
                <p>{d.limite.texto}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {d.quien && (
        <section>
          <div className="wrap">
            <div className="pro">
              <Retrato />
              <div>
                <h2 className="titulo-seccion">Quién lo realiza</h2>
                {d.quien.map((p) => (
                  <p key={p}>
                    <Texto>{p}</Texto>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Faqs faqs={d.faqs} />
      <Contacto origen={t.nombre} tema={t.nombre.toLowerCase()} />
    </>
  );
}
