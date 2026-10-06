"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function Formulario({
  origen,
  opcionesExtra = [],
  etiquetaMensaje = "Contanos qué te gustaría mejorar",
}: {
  origen: string;
  opcionesExtra?: string[];
  etiquetaMensaje?: string;
}) {
  const router = useRouter();
  const [estado, setEstado] = useState<"listo" | "enviando" | "error">("listo");
  const [mensaje, setMensaje] = useState("");

  async function enviar(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const datos = Object.fromEntries(new FormData(ev.currentTarget));
    setEstado("enviando");
    setMensaje("");
    try {
      const r = await fetch("/api/consulta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...datos, origen }),
      });
      const respuesta = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(respuesta.error ?? "No pudimos enviar la consulta.");
      router.push("/gracias");
    } catch (e) {
      setEstado("error");
      setMensaje(
        e instanceof Error ? e.message : "No pudimos enviar la consulta.",
      );
    }
  }

  return (
    <form onSubmit={enviar} className="formulario">
      <div className="duo">
        <div>
          <label htmlFor="nombre">Nombre y apellido</label>
          <input id="nombre" name="nombre" type="text" autoComplete="name" required />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono</label>
          <input id="telefono" name="telefono" type="tel" autoComplete="tel" required />
        </div>
      </div>
      <div>
        <label htmlFor="correo">Correo</label>
        <input id="correo" name="correo" type="email" autoComplete="email" />
      </div>
      <div>
        <label htmlFor="consultorio">Consultorio de preferencia</label>
        <select id="consultorio" name="consultorio" defaultValue="Belgrano">
          <option>Belgrano</option>
          <option>Pilar</option>
          {opcionesExtra.map((o) => (
            <option key={o}>{o}</option>
          ))}
          <option>Todavía no lo decidí</option>
        </select>
      </div>
      <div>
        <label htmlFor="mensaje">{etiquetaMensaje}</label>
        <textarea id="mensaje" name="mensaje" rows={3} />
      </div>
      {/* Campo trampa para filtrar envíos automáticos. Las personas no lo ven. */}
      <div className="trampa" aria-hidden="true">
        <label htmlFor="empresa">Empresa</label>
        <input id="empresa" name="empresa" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button className="btn primario" type="submit" disabled={estado === "enviando"}>
        {estado === "enviando" ? "Enviando" : "Enviar consulta"}
      </button>
      {estado === "error" && (
        <p className="error" role="alert">
          {mensaje} Podés escribirnos por WhatsApp o llamarnos.
        </p>
      )}
      <p className="aviso">Los datos se usan solo para responder esta consulta.</p>
    </form>
  );
}
