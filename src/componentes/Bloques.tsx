import Image from "next/image";
import Link from "next/link";
import {
  sitio,
  mostrarPendientes,
  linkWhatsApp,
  urlProblema,
  urlTratamiento,
  problemasDe,
  tratamientosDe,
  type Faq,
  type Problema,
  type Tratamiento,
} from "@/contenido";
import { Texto, quedaVacio } from "./Texto";
import { Formulario } from "./Formulario";

export function BarraRevision() {
  if (!mostrarPendientes) return null;
  return (
    <div className="revision">
      <div className="wrap">
        <div>
          <strong>Vista previa para revisión</strong>{" "}
          <span>{sitio.nombre}</span>
        </div>
        <div>
          <span>
            Lo marcado con línea punteada necesita confirmación de la clínica
            antes de publicar
          </span>
        </div>
      </div>
    </div>
  );
}

export function Pie() {
  return (
    <footer className="pie">
      <div className="wrap ancho pie-cols">
        <div>
          <Image src="/logo-horizontal-claro.png" alt={sitio.nombre} width={720} height={111} className="pie-logo" />
          <p>
            Dermatología clínica y estética médica. Todos los tratamientos
            empiezan con una evaluación.
          </p>
        </div>
        <div>
          <p className="pie-titulo">Secciones</p>
          <Link href="/tratamientos">Tratamientos</Link>
          <Link href="/dermatologia">Dermatología</Link>
          <Link href="/depilacion">Depilación</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
        <div>
          <p className="pie-titulo">Consultorios</p>
          {sitio.sedes.map((s) => (
            <a key={s.nombre} href={s.mapa} target="_blank" rel="noopener noreferrer">
              {s.direccion}
            </a>
          ))}
        </div>
        <div>
          <p className="pie-titulo">Contacto</p>
          <a href={`tel:${sitio.telefonoLink}`}>{sitio.telefono}</a>
          <a href={`mailto:${sitio.mail}`}>{sitio.mail}</a>
          <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" data-evento="clic_whatsapp">
            WhatsApp
          </a>
          <a href={sitio.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={sitio.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>
      <div className="wrap ancho pie-base">
        {sitio.nombre} · {sitio.doctora}
      </div>
    </footer>
  );
}

export function Hero({
  eyebrow,
  linea1,
  linea2,
  bajada,
  children,
  lateral,
}: {
  eyebrow: string;
  linea1: string;
  linea2?: string;
  bajada?: string;
  children?: React.ReactNode;
  lateral?: React.ReactNode;
}) {
  return (
    <header className={lateral ? "hero con-lateral" : "hero"}>
      <div className="wrap">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>
            {linea1}
            {linea2 && <span className="linea2">{linea2}</span>}
          </h1>
          {bajada && <p className="bajada">{bajada}</p>}
          {children}
        </div>
        {lateral}
      </div>
    </header>
  );
}

export function Acciones({ tema, secundario }: { tema?: string; secundario?: { href: string; texto: string } }) {
  return (
    <div className="acciones">
      <a className="btn primario" href="#consulta">
        Reservar evaluación
      </a>
      {secundario ? (
        <a className="btn secundario" href={secundario.href}>
          {secundario.texto}
        </a>
      ) : (
        <a
          className="btn secundario"
          href={linkWhatsApp(tema)}
          target="_blank"
          rel="noopener noreferrer"
          data-evento="clic_whatsapp"
        >
          Escribir por WhatsApp
        </a>
      )}
    </div>
  );
}

export function Faqs({ faqs }: { faqs: Faq[] }) {
  const visibles = faqs.filter((f) => !quedaVacio(f.respuesta));
  if (visibles.length === 0) return null;
  return (
    <section className="claro">
      <div className="wrap angosto">
        <h2 className="titulo-seccion">Preguntas frecuentes</h2>
        {visibles.map((f, i) => (
          <details key={f.pregunta} open={i === 0}>
            <summary>{f.pregunta}</summary>
            <p>
              <Texto>{f.respuesta}</Texto>
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Retrato({ prioridad = false }: { prioridad?: boolean }) {
  return (
    <Image
      className="retrato-foto"
      src="/retrato-dra-mijelshon.jpg"
      alt="Dra. Laura Mijelshon en su consultorio"
      width={1200}
      height={1500}
      sizes="(max-width: 860px) 60vw, 260px"
      priority={prioridad}
    />
  );
}

export function Slot({ forma, children }: { forma: "ancho" | "retrato"; children: React.ReactNode }) {
  if (!mostrarPendientes) return null;
  return <div className={`slot ${forma}`}>{children}</div>;
}

export function Contacto({
  origen,
  tema,
  opcionesExtra,
  titulo = "Reservá tu evaluación",
  etiquetaMensaje,
}: {
  origen: string;
  tema?: string;
  opcionesExtra?: string[];
  titulo?: string;
  etiquetaMensaje?: string;
}) {
  return (
    <section className="contacto" id="consulta">
      <div className="wrap dos">
        <div>
          <h2 className="titulo-seccion">{titulo}</h2>
          <p>
            Dejanos tus datos y te contactamos para coordinar día y horario.
            Respondemos de lunes a viernes en horario de atención.
          </p>
          {sitio.sedes.map((s) => (
            <div className="sede" key={s.nombre}>
              <b>{s.nombre}</b>
              <span>{s.direccion}</span>{" "}
              <a href={s.mapa} target="_blank" rel="noopener noreferrer">
                Ver en el mapa
              </a>
            </div>
          ))}
          <div className="sede">
            <b>Teléfono y correo</b>
            <span>
              <a href={`tel:${sitio.telefonoLink}`}>{sitio.telefono}</a> ·{" "}
              <a href={`mailto:${sitio.mail}`}>{sitio.mail}</a>
            </span>
          </div>
          <p className="wa-linea">
            <a
              className="btn secundario"
              href={linkWhatsApp(tema)}
              target="_blank"
              rel="noopener noreferrer"
              data-evento="clic_whatsapp"
            >
              Escribir por WhatsApp
            </a>
          </p>
        </div>
        <div>
          <Formulario origen={origen} opcionesExtra={opcionesExtra} etiquetaMensaje={etiquetaMensaje} />
        </div>
      </div>
    </section>
  );
}

export function Cierre() {
  return (
    <section className="cierre">
      <div className="wrap">
        <div>
          <h2>No sabés cuál te corresponde</h2>
          <p>
            Esa es exactamente la función de la consulta de evaluación. La
            doctora revisa tu piel, escucha qué te gustaría mejorar y arma el
            plan. Recién ahí se define el tratamiento.
          </p>
        </div>
        <div>
          <Link className="btn oscuro" href="/contacto#consulta">
            Reservar evaluación
          </Link>
        </div>
      </div>
    </section>
  );
}

function Chips({ items }: { items: { texto: string; href: string; pendiente?: boolean }[] }) {
  const visibles = items.filter((i) => mostrarPendientes || !i.pendiente);
  if (visibles.length === 0) return null;
  return (
    <ul className="chips">
      {visibles.map((i) => {
        const contenido = i.pendiente ? <span className="pendiente">{i.texto}</span> : i.texto;
        return (
          <li key={i.texto}>
            <Link href={i.href}>{contenido}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export function TarjetaProblema({ p }: { p: Problema }) {
  const ts = tratamientosDe(p.slug);
  return (
    <div className="card problema">
      <h3>{p.nombre}</h3>
      <p>{p.resumen}</p>
      {ts.length > 0 && (
        <>
          <p className="rel">Lo trabajamos con</p>
          <Chips
            items={ts.map((t) => ({
              texto: t.corto ?? t.nombre,
              href: urlTratamiento(t),
              pendiente: t.aConfirmar,
            }))}
          />
        </>
      )}
      <Link className="ir" href={urlProblema(p)}>
        Ver la sección
      </Link>
    </div>
  );
}

export function TarjetaTratamiento({ t }: { t: Tratamiento }) {
  const href = urlTratamiento(t);
  const ps = problemasDe(t);
  if (!mostrarPendientes && t.aConfirmar) return null;
  return (
    <div className="card solucion">
      <h3>{t.nombre}</h3>
      <p>
        <Texto>{t.resumen}</Texto>
      </p>
      <p className="rel">Indicado para</p>
      <Chips
        items={ps.map((p) => ({ texto: p.corto ?? p.nombre, href: urlProblema(p) }))}
      />
      <Link className="ir" href={href}>
        {t.destino ? "Ver la sección" : "Ver tratamiento"}
      </Link>
    </div>
  );
}
