import type { Metadata } from "next";
import Link from "next/link";
import { Contacto, Faqs, Hero, Retrato } from "@/componentes/Bloques";
import { Pendiente } from "@/componentes/Texto";
import { linkWhatsApp } from "@/contenido";

export const metadata: Metadata = {
  title: "Dermatología en Belgrano y Pilar",
  description:
    "Consulta dermatológica presencial en Belgrano y Pilar, o virtual. Equipo de dermatólogos. Atención por OSDE y Swiss Medical.",
  alternates: { canonical: "/dermatologia" },
};

const motivos = [
  { texto: "Control de lunares" },
  { texto: "Acné", href: "/acne-y-cicatrices" },
  { texto: "Rosácea y enrojecimiento", href: "/rosacea" },
  { texto: "Manchas en la piel", href: "/manchas" },
  { texto: "Caída del cabello", href: "/recuperacion-capilar" },
  { texto: "Lesiones que cambian o no cicatrizan" },
];

const faqs = [
  {
    pregunta: "Atienden por obra social o prepaga",
    respuesta:
      "Sí, trabajamos con OSDE y Swiss Medical. Si tu cobertura no está en el listado, escribinos y te contamos las opciones. [[Planes incluidos y modalidad a confirmar]]",
  },
  {
    pregunta: "Cómo es la consulta virtual",
    respuesta:
      "[[Plataforma, duración y qué motivos de consulta se pueden resolver a distancia, a completar por la clínica]]",
  },
  {
    pregunta: "Cada cuánto conviene hacer un control de lunares",
    respuesta: "[[Respuesta a redactar con la doctora]]",
  },
  {
    pregunta: "Puedo consultar por dermatología y por estética en el mismo turno",
    respuesta: "[[A confirmar cómo se organizan los turnos]]",
  },
];

export default function Pagina() {
  return (
    <>
      <Hero
        eyebrow="Dermatología clínica"
        linea1="Consulta"
        linea2="dermatológica"
        bajada="Un equipo de dermatólogos atiende consultas y trata afecciones de la piel. Podés venir a Belgrano o a Pilar, o hacer la consulta de forma virtual."
        lateral={
          <div className="ficha">
            <h2>La consulta</h2>
            <dl>
              <div className="fila">
                <dt>Modalidad</dt>
                <dd>Presencial o virtual</dd>
              </div>
              <div className="fila">
                <dt>Consultorios</dt>
                <dd>Belgrano y Pilar</dd>
              </div>
              <div className="fila">
                <dt>Atiende</dt>
                <dd>Equipo de dermatólogos</dd>
              </div>
              <div className="fila">
                <dt>Cobertura</dt>
                <dd>OSDE y Swiss Medical</dd>
              </div>
              <div className="fila">
                <dt>Días y horarios</dt>
                <dd>
                  <Pendiente>Lunes a viernes, horario a completar</Pendiente>
                </dd>
              </div>
            </dl>
          </div>
        }
      >
        <div className="acciones">
          <a className="btn primario" href="#consulta">
            Pedir turno
          </a>
          <a
            className="btn secundario"
            href={linkWhatsApp("un turno de dermatología")}
            target="_blank"
            rel="noopener noreferrer"
            data-evento="clic_whatsapp"
          >
            Escribir por WhatsApp
          </a>
        </div>
        <p className="aval">
          Dra. Laura Mijelshon · Médica dermatóloga, miembro titular de la
          Sociedad Argentina de Dermatología
        </p>
      </Hero>

      <section>
        <div className="wrap dos">
          <div>
            <h2 className="titulo-seccion">Un equipo formado por dermatólogos</h2>
            <p>
              El equipo del Centro Piel y Estética está compuesto por
              dermatólogos con experiencia que atienden consultas y tratan
              distintas afecciones de la piel.
            </p>
            <p>
              La consulta es el punto de partida. Ahí se revisa la piel, se
              llega a un diagnóstico y se indica el tratamiento o los controles
              que correspondan.
            </p>
          </div>
          <div>
            <h2 className="titulo-seccion">Motivos de consulta</h2>
            <ul className="corrige">
              {motivos.map((m) => (
                <li key={m.texto}>
                  {m.href ? <Link href={m.href}>{m.texto}</Link> : m.texto}
                </li>
              ))}
            </ul>
            <p className="nota-chica">
              <Pendiente>Listado a validar por la Dra. Mijelshon</Pendiente>
            </p>
          </div>
        </div>
      </section>

      <section className="claro">
        <div className="wrap">
          <h2 className="titulo-seccion">Cómo podés atenderte</h2>
          <p className="intro">
            Elegí la modalidad que te quede más cómoda. Al pedir el turno nos
            indicás cuál preferís.
          </p>
          <div className="tipos sobre-claro">
            <div className="tipo">
              <span className="causa">Presencial</span>
              <h3>Consultorio Belgrano</h3>
              <p>Olleros 1806, 4º A, CABA.</p>
            </div>
            <div className="tipo">
              <span className="causa">Presencial</span>
              <h3>Consultorio Pilar</h3>
              <p>Panamericana ramal Pilar km 42,5, Of. 229, Office Park Quatro.</p>
            </div>
            <div className="tipo">
              <span className="causa">A distancia</span>
              <h3>Consulta virtual</h3>
              <p>
                Desde donde estés. <Pendiente>Plataforma y alcance</Pendiente>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap dos">
          <div>
            <h2 className="titulo-seccion">Obras sociales y prepagas</h2>
            <p>Trabajamos con las siguientes coberturas:</p>
            <ul className="coberturas">
              <li>OSDE</li>
              <li>Swiss Medical</li>
            </ul>
            <p>
              Si tu obra social o prepaga no está en el listado,{" "}
              <a
                href={linkWhatsApp("la cobertura de mi obra social o prepaga")}
                target="_blank"
                rel="noopener noreferrer"
                data-evento="clic_whatsapp"
              >
                escribinos por WhatsApp
              </a>{" "}
              y te contamos cómo podés atenderte.
            </p>
            <p className="nota-chica">
              <Pendiente>Planes incluidos y si aplica a las dos sedes</Pendiente>
            </p>
          </div>
          <div>
            <div className="alerta">
              <h3>Cuándo conviene no esperar</h3>
              <p>Pedí turno si notás alguno de estos cambios en tu piel:</p>
              <ul>
                <li>Una mancha o lunar que cambió de tamaño, forma o color</li>
                <li>Bordes irregulares o varios colores en la misma lesión</li>
                <li>Sangrado, picazón o una lesión que no termina de cicatrizar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="claro">
        <div className="wrap">
          <div className="pro">
            <Retrato />
            <div>
              <h2 className="titulo-seccion">Quién dirige el equipo</h2>
              <p>
                La Dra. Laura Mijelshon es médica dermatóloga recibida en la
                Universidad de Buenos Aires, miembro titular de la Sociedad
                Argentina de Dermatología y docente de pre y posgrado en
                Dermatología. Dirige el centro desde hace más de 20 años.
              </p>
              <p>
                <Link href="/nosotros">Conocé al equipo</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Faqs faqs={faqs} />
      <Contacto
        origen="Dermatología"
        tema="un turno de dermatología"
        titulo="Pedí tu turno"
        etiquetaMensaje="Contanos el motivo de la consulta"
        opcionesExtra={["Consulta virtual"]}
      />
    </>
  );
}
