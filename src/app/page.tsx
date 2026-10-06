import Image from "next/image";
import Link from "next/link";
import { Contacto } from "@/componentes/Bloques";
import {
  linkWhatsApp,
  mostrarPendientes,
  problemas,
  problemasConPagina,
  sitio,
  tratamientos,
  urlProblema,
  urlTratamiento,
} from "@/contenido";

const destacados = ["toxina-botulinica", "bioestimulacion", "rinomodelacion"];

const pasos = [
  {
    titulo: "Evaluación",
    texto: "La doctora revisa tu piel, repasa antecedentes y escucha qué te gustaría mejorar.",
  },
  {
    titulo: "Plan",
    texto: "Se define qué tratamiento corresponde, en qué orden y con qué cuidados en casa.",
  },
  {
    titulo: "Seguimiento",
    texto: "Controles pautados para revisar la evolución y ajustar si el caso lo requiere.",
  },
];

export default function Home() {
  const rostro = problemas.filter((p) => p.grupo === "Rostro");
  const cuerpo = problemas.filter((p) => p.grupo === "Cuerpo");
  const visibles = tratamientos.filter((t) => mostrarPendientes || !t.aConfirmar);
  const conocidos = visibles.filter((t) => t.enMenu);
  const estrella = destacados
    .map((slug) => tratamientos.find((t) => t.slug === slug))
    .filter((t) => t !== undefined);

  return (
    <>
      {/* Portada */}
      <header className="h-hero">
        <div className="wrap ancho h-hero-grid">
          <div className="h-hero-texto">
            <p className="eyebrow">Centro Piel y Estética · Belgrano y Pilar</p>
            <h1>
              Dermatología
              <span className="linea2">y estética</span>
              <span className="script">con criterio médico</span>
            </h1>
            <p className="bajada">
              Un equipo de dermatólogos y cosmiatras dirigido por la Dra. Laura
              Mijelshon. Cada tratamiento empieza con una evaluación médica, y
              recién ahí se define el plan.
            </p>
            <div className="acciones">
              <Link className="btn primario" href="#consulta">
                Reservar evaluación
              </Link>
              <Link className="btn secundario" href="/tratamientos">
                Ver tratamientos
              </Link>
            </div>
          </div>
          <div className="h-hero-foto">
            <Image
              src="/retrato-dra-mijelshon.jpg"
              alt="Dra. Laura Mijelshon en su consultorio"
              width={1200}
              height={1500}
              sizes="(max-width: 900px) 78vw, 420px"
              priority
            />
            <div className="h-credencial">
              <b>Dra. Laura Mijelshon</b>
              <span>Médica dermatóloga · UBA</span>
              <span>Miembro titular de la Sociedad Argentina de Dermatología</span>
            </div>
          </div>
        </div>
        <div className="wrap ancho h-datos">
          <div>
            <b>+20</b>
            <span>años de trayectoria</span>
          </div>
          <div>
            <b>2</b>
            <span>consultorios, en Belgrano y en Pilar</span>
          </div>
          <div>
            <b>0</b>
            <span>cirugías: todo se resuelve en consultorio</span>
          </div>
          <div>
            <b>{problemasConPagina.length}</b>
            <span>motivos de consulta con su propia guía</span>
          </div>
        </div>
      </header>

      {/* Cinta de tratamientos */}
      <div className="h-cinta" aria-hidden="true">
        <div className="h-cinta-pista">
          {[0, 1].map((n) => (
            <span key={n}>
              {visibles.map((t) => (
                <i key={t.slug}>{t.corto ?? t.nombre}</i>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Doble entrada */}
      <section className="h-entradas">
        <div className="wrap ancho">
          <div className="h-titulo">
            <h2>
              Dos caminos<span className="script oscuro">para llegar a tu tratamiento</span>
            </h2>
            <p>
              Podés empezar por lo que te preocupa o por el tratamiento que ya
              conocés. Los dos llevan a la misma información.
            </p>
          </div>
          <div className="h-paneles">
            <div className="h-panel claro">
              <p className="h-numero">01</p>
              <h3>Por lo que te preocupa</h3>
              <div className="h-listas">
                <div>
                  <p className="eyebrow oscuro">Rostro</p>
                  <ul>
                    {rostro.map((p) => (
                      <li key={p.slug}>
                        <Link href={urlProblema(p)}>{p.nombre}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow oscuro">Cuerpo</p>
                  <ul>
                    {cuerpo.map((p) => (
                      <li key={p.slug}>
                        <Link href={urlProblema(p)}>{p.nombre}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="h-panel marino">
              <p className="h-numero">02</p>
              <h3>Por el tratamiento que ya conocés</h3>
              <ul>
                {conocidos.map((t) => (
                  <li key={t.slug}>
                    <Link href={urlTratamiento(t)}>{t.nombre}</Link>
                  </li>
                ))}
              </ul>
              <Link className="h-todos" href="/tratamientos">
                Ver los {visibles.length} tratamientos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destacados */}
      <section className="h-destacados">
        <div className="wrap ancho">
          <p className="eyebrow oscuro">Tratamientos destacados</p>
          <div className="h-dest-grid">
            {estrella.map((t, i) => (
              <Link className="h-dest" key={t.slug} href={urlTratamiento(t)}>
                <span className="h-dest-n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{t.nombre}</h3>
                <p>{t.resumen}</p>
                <span className="h-dest-ir">Ver tratamiento</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="h-metodo">
        <div className="wrap ancho">
          <div className="h-titulo sobre-marino">
            <h2>
              Cómo trabajamos<span className="script">paso a paso</span>
            </h2>
          </div>
          <div className="h-pasos">
            {pasos.map((p, i) => (
              <div key={p.titulo}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </div>
            ))}
          </div>
          <div className="h-limite">
            <h3>Lo que no hacemos</h3>
            <p>
              En el centro no realizamos procedimientos quirúrgicos. Cuando la
              evaluación indica que un caso necesita cirugía, lo decimos en la
              consulta y derivamos.
            </p>
          </div>
        </div>
      </section>

      {/* La doctora */}
      <section className="h-doctora">
        <div className="wrap ancho h-doctora-grid">
          <div className="h-doctora-foto">
            <Image
              src="/retrato-dra-mijelshon.jpg"
              alt="Dra. Laura Mijelshon"
              width={1200}
              height={1500}
              sizes="(max-width: 900px) 80vw, 440px"
            />
          </div>
          <div>
            <p className="script oscuro suelto">Quién te atiende</p>
            <h2>Dra. Laura Mijelshon</h2>
            <p>
              Dirige el Centro Piel y Estética desde hace más de 20 años, con
              responsabilidad y respeto por sus pacientes.
            </p>
            <ul className="corrige una">
              <li>Médica dermatóloga recibida en la Universidad de Buenos Aires</li>
              <li>Miembro titular de la Sociedad Argentina de Dermatología</li>
              <li>Docente de pre y posgrado en Dermatología (UBA y Universidad del Salvador)</li>
            </ul>
            <p className="h-link">
              <Link href="/nosotros">Conocé al equipo</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Dermatología y depilación */}
      <section className="h-areas">
        <div className="wrap ancho h-areas-grid">
          <Link href="/dermatologia" className="h-area">
            <p className="eyebrow oscuro">Dermatología clínica</p>
            <h3>Consulta dermatológica</h3>
            <p>
              Presencial en Belgrano y Pilar, o virtual. Atención por OSDE y
              Swiss Medical.
            </p>
            <span className="h-dest-ir">Ver la sección</span>
          </Link>
          <Link href="/depilacion" className="h-area">
            <p className="eyebrow oscuro">Depilación</p>
            <h3>Depilación láser</h3>
            <p>En rostro y cuerpo, con profesionales especializados y packs por zona.</p>
            <span className="h-dest-ir">Ver la sección</span>
          </Link>
        </div>
      </section>

      {/* Consultorios */}
      <section className="h-sedes">
        <div className="wrap ancho">
          <div className="h-titulo">
            <h2>
              Dónde estamos<span className="script oscuro">Belgrano y Pilar</span>
            </h2>
          </div>
          <div className="h-sedes-grid">
            {sitio.sedes.map((s) => (
              <div key={s.nombre}>
                <h3>{s.nombre}</h3>
                <p>{s.direccion}</p>
                <a href={s.mapa} target="_blank" rel="noopener noreferrer">
                  Ver en el mapa
                </a>
              </div>
            ))}
            <div>
              <h3>Escribinos</h3>
              <p>Respondemos de lunes a viernes en horario de atención.</p>
              <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" data-evento="clic_whatsapp">
                WhatsApp
              </a>
              <a href={sitio.instagram} target="_blank" rel="noopener noreferrer">
                Instagram @pielyestetica
              </a>
            </div>
          </div>
        </div>
      </section>

      <Contacto origen="Home" />
    </>
  );
}
