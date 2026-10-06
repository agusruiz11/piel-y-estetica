import type { Metadata } from "next";
import { Contacto, Hero, Retrato, Slot } from "@/componentes/Bloques";
import { Pendiente } from "@/componentes/Texto";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "La Dra. Laura Mijelshon dirige el Centro Piel y Estética desde hace más de 20 años, junto a un equipo de dermatólogos y cosmiatras.",
  alternates: { canonical: "/nosotros" },
};

const carrera = [
  "Médica dermatóloga recibida en la Universidad de Buenos Aires",
  "Miembro titular de la Sociedad Argentina de Dermatología",
  "Docente de pre y posgrado en Dermatología (Universidad de Buenos Aires y Universidad del Salvador)",
  "Presentación de trabajos en congresos científicos",
  "Cursos avanzados en Estética y Dermatología estética",
  "Coordinadora de sesiones científicas en congresos",
];

export default function Pagina() {
  return (
    <>
      <Hero
        eyebrow="Nosotros"
        linea1="Dra. Laura"
        linea2="Mijelshon"
        bajada="Dirige el Centro Piel y Estética con responsabilidad y respeto por sus pacientes. Desde hace más de 20 años realiza tratamientos para afecciones dermatológicas y estética médica."
      />
      <section>
        <div className="wrap">
          <div className="pro">
            <Retrato />
            <div>
              <h2 className="titulo-seccion">Carrera profesional</h2>
              <ul className="corrige una">
                {carrera.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className="nota-chica">
                <Pendiente>Matrícula nacional a completar</Pendiente>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="claro">
        <div className="wrap dos">
          <div>
            <h2 className="titulo-seccion">El equipo</h2>
            <p>
              Nuestro equipo está compuesto por dermatólogos y cosmiatras que
              brindan una atención personalizada, con conocimiento integral de
              todos los tratamientos disponibles para cuidar la salud de la
              piel y mejorar su aspecto.
            </p>
            <p>
              Quienes integran el centro ofrecen un trato cálido y respetuoso.
            </p>
          </div>
          <div>
            <Slot forma="ancho">Espacio para foto del equipo o de los consultorios</Slot>
          </div>
        </div>
      </section>
      <Contacto origen="Nosotros" />
    </>
  );
}
