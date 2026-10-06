import Image from "next/image";
import Link from "next/link";
import { menu, urlProblema, urlTratamiento, sitio } from "@/contenido";
import { MenuMovil } from "./MenuMovil";

export function Logo() {
  return (
    <Link href="/" className="marca" aria-label={`${sitio.nombre}, inicio`}>
      <Image src="/logo-horizontal.png" alt={`${sitio.nombre} · ${sitio.doctora}`} width={720} height={111} priority />
    </Link>
  );
}

const enlaces = [
  { href: "/dermatologia", texto: "Dermatología" },
  { href: "/depilacion", texto: "Depilación" },
  { href: "/nosotros", texto: "Nosotros" },
  { href: "/contacto", texto: "Contacto" },
];

export function Nav() {
  const porProblema = menu.problemas.map((p) => ({
    href: urlProblema(p),
    texto: p.nombre,
  }));
  const porTratamiento = menu.tratamientos.map((t) => ({
    href: urlTratamiento(t),
    texto: t.corto ?? t.nombre,
  }));

  return (
    <nav className="nav" aria-label="Principal">
      <div className="wrap navbar">
        <Logo />
        <div className="menu">
          <div className="con-doble">
            <Link href="/tratamientos">Tratamientos</Link>
            <div className="doble">
              <div>
                <p>Por problema</p>
                <ul>
                  {porProblema.map((e) => (
                    <li key={e.texto}>
                      <Link href={e.href}>{e.texto}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p>Por tratamiento</p>
                <ul>
                  {porTratamiento.map((e) => (
                    <li key={e.texto}>
                      <Link href={e.href}>{e.texto}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/tratamientos" className="ver-todos">
                Ver todos los tratamientos
              </Link>
            </div>
          </div>
          {enlaces.map((e) => (
            <div key={e.href}>
              <Link href={e.href}>{e.texto}</Link>
            </div>
          ))}
        </div>
        <MenuMovil
          porProblema={porProblema}
          porTratamiento={porTratamiento}
          enlaces={enlaces}
        />
      </div>
    </nav>
  );
}
