import { NextResponse } from "next/server";

// Recibe el formulario y lo manda por mail a la clínica usando Resend.
// Variables de entorno:
//   RESEND_API_KEY    clave de Resend
//   CONSULTAS_PARA    casilla que recibe las consultas (por defecto info@pielyestetica.com)
//   CONSULTAS_DESDE   remitente verificado en Resend, por ejemplo "Sitio web <web@pielyestetica.com>"

const limpiar = (v: unknown, max = 2000) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const escapar = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export async function POST(req: Request) {
  let cuerpo: Record<string, unknown>;
  try {
    cuerpo = await req.json();
  } catch {
    return NextResponse.json({ error: "Pedido inválido." }, { status: 400 });
  }

  // Campo trampa: si viene completo es un envío automático. Se responde OK sin enviar.
  if (limpiar(cuerpo.empresa)) return NextResponse.json({ ok: true });

  const nombre = limpiar(cuerpo.nombre, 120);
  const telefono = limpiar(cuerpo.telefono, 40);
  const correo = limpiar(cuerpo.correo, 160);
  const consultorio = limpiar(cuerpo.consultorio, 60);
  const mensaje = limpiar(cuerpo.mensaje);
  const origen = limpiar(cuerpo.origen, 80) || "Sitio web";

  if (!nombre || !telefono) {
    return NextResponse.json(
      { error: "Completá nombre y teléfono para que podamos contactarte." },
      { status: 400 },
    );
  }
  if (correo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    return NextResponse.json({ error: "Revisá el correo ingresado." }, { status: 400 });
  }

  const clave = process.env.RESEND_API_KEY;
  if (!clave) {
    // Sin clave configurada: en vista previa se simula el envío, en producción es un error.
    if (process.env.VERCEL_ENV === "production") {
      console.error("Falta RESEND_API_KEY: la consulta no se envió.");
      return NextResponse.json(
        { error: "No pudimos enviar la consulta en este momento." },
        { status: 500 },
      );
    }
    console.log("Consulta simulada (sin RESEND_API_KEY):", { origen, consultorio });
    return NextResponse.json({ ok: true, simulado: true });
  }

  const filas = [
    ["Página de origen", origen],
    ["Nombre", nombre],
    ["Teléfono", telefono],
    ["Correo", correo || "No informado"],
    ["Consultorio", consultorio || "No informado"],
    ["Mensaje", mensaje || "Sin mensaje"],
  ];

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${clave}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONSULTAS_DESDE ?? "Sitio web <web@pielyestetica.com>",
      to: [process.env.CONSULTAS_PARA ?? "info@pielyestetica.com"],
      reply_to: correo || undefined,
      subject: `Consulta web: ${origen} · ${nombre}`,
      html: `<table cellpadding="6">${filas
        .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escapar(v).replace(/\n/g, "<br>")}</td></tr>`)
        .join("")}</table>`,
    }),
  });

  if (!r.ok) {
    console.error("Resend respondió", r.status, await r.text());
    return NextResponse.json(
      { error: "No pudimos enviar la consulta en este momento." },
      { status: 502 },
    );
  }
  return NextResponse.json({ ok: true });
}
