import type { Metadata } from "next";
import Link from "next/link";
import { Contacto, Faqs, Hero, Retrato } from "@/componentes/Bloques";
import { Pendiente } from "@/componentes/Texto";
import { linkWhatsApp, matricula } from "@/contenido";

export const metadata: Metadata = {
  title: "Dermatología en Las Cañitas y Pilar",
  description:
    "Consulta dermatológica presencial en Las Cañitas y Pilar, o virtual. Equipo de dermatólogos. Atención por OSDE y Swiss Medical.",
  alternates: { canonical: "/dermatologia" },
};

const motivos = [
  { texto: "Control de lunares" },
  { texto: "Acné", href: "/acne-y-cicatrices" },
  { texto: "Rosácea y enrojecimiento", href: "/rosacea" },
  { texto: "Manchas en la piel", href: "/manchas" },
  { texto: "Caída del cabello", href: "/recuperacion-capilar" },
  { texto: "Cicatrices", href: "/acne-y-cicatrices" },
  { texto: "Arrugas", href: "/arrugas" },
  { texto: "Flacidez", href: "/flacidez-facial" },
  { texto: "Celulitis", href: "/celulitis" },
  { texto: "Lesiones que cambian o no cicatrizan" },
];

const faqs = [
  {
    pregunta: "Atienden por obra social o prepaga",
    respuesta:
      "Sí, en las dos sedes. Con OSDE atendemos los planes 210, 260, 700, 030, 310, 360, 410, 430 y 450, y la criocirugía también tiene cobertura. Con Swiss Medical la consulta tiene copago. Con otras coberturas, la consulta es particular.",
  },
  {
    pregunta: "Cómo es la consulta virtual",
    respuesta:
      "Es una consulta particular, de unos 20 minutos. [[Medio por el que se hace y motivos que se pueden atender a distancia]]",
  },
  {
    pregunta: "Cada cuánto conviene hacer un control de lunares",
    respuesta:
      "La recomendación es hacer un control de lunares una vez al año, o antes si notás algún cambio.",
  },
  {
    pregunta: "Puedo consultar por dermatología y por estética en el mismo turno",
    respuesta:
      "Preferentemente se dan en turnos separados. Si vivís lejos o en otra ciudad, consultanos y vemos de organizarlo en una sola visita.",
  },
];

export default function Pagina() {
  return (
    <>
      <Hero
        eyebrow="Dermatología clínica"
        linea1="Consulta"
        linea2="dermatológica"
        bajada="Un equipo de dermatólogos atiende consultas y trata afecciones de la piel. Podés venir a Las Cañitas o a Pilar, o hacer la consulta de forma virtual."
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
                <dd>Las Cañitas y Pilar</dd>
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
                  Las Cañitas: <Pendiente>lunes a viernes de 9 a 20 hs</Pendiente>
                  <br />
                  Pilar: miércoles de 10 a 15 hs
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
          Dra. Laura Mijelshon · Médica dermatóloga · {matricula}
          <br />
          Miembro titular de la Sociedad Argentina de Dermatología
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
              <h3>Consultorio Las Cañitas</h3>
              <p>Olleros 1806, 4º A, CABA.</p>
            </div>
            <div className="tipo">
              <span className="causa">Presencial</span>
              <h3>Consultorio Pilar</h3>
              <p>
                Los Crisantemos 392, Edificio Skyglass 3, Of. 114, Manuel
                Alberti, Pilar. <Pendiente>Oficina 114 o 312</Pendiente>
              </p>
            </div>
            <div className="tipo">
              <span className="causa">A distancia</span>
              <h3>Consulta virtual</h3>
              <p>
                Consulta particular de unos 20 minutos, desde donde estés.{" "}
                <Pendiente>Medio y alcance</Pendiente>
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
              y te contamos cómo atenderte de forma particular.
            </p>
            <p className="nota-chica">
              OSDE: planes 210, 260, 700, 030, 310, 360, 410, 430 y 450. Swiss
              Medical: consulta con copago. Atendemos con las dos coberturas en
              Las Cañitas y en Pilar.
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
