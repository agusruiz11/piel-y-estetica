# Sitio web Centro Piel y Estética

Sitio en Next.js (App Router, TypeScript) que reemplaza al de Wix.

## Cómo levantarlo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # compila el sitio
```

## Dónde se edita el contenido

Todo el contenido vive en `src/contenido/`:

- `tratamientos.ts`: cada tratamiento se describe una sola vez. La lista `problemas` define en qué páginas de problema aparece. El menú, el índice y las etiquetas se generan solos.
- `problemas.ts`: páginas de problema. Sus URLs son las mismas que tenía el sitio de Wix.
- `sitio.ts`: teléfono, mail, WhatsApp, sedes.

Lo que va entre `[[dobles corchetes]]` en un texto es un dato a confirmar por la clínica: se ve marcado en la vista previa y se oculta en producción. Un tratamiento con `aConfirmar: true` tampoco se publica en producción.

Un tratamiento sin `detalle` igual tiene página: se arma con una estructura base y los datos marcados como pendientes. Al cargarle `detalle` (ver Rinomodelación como ejemplo) pasa a mostrar el contenido propio.

## Variables de entorno

| Variable | Para qué |
| --- | --- |
| `RESEND_API_KEY` | Envío del formulario por mail. Sin esta clave, en vista previa el envío se simula y en producción da error |
| `CONSULTAS_PARA` | Casilla que recibe las consultas. Por defecto info@pielyestetica.com |
| `CONSULTAS_DESDE` | Remitente verificado en Resend |
| `NEXT_PUBLIC_MOSTRAR_PENDIENTES` | `0` para ocultar la barra de revisión y todo lo marcado a confirmar |
| `NEXT_PUBLIC_INDEXABLE` | `1` para permitir que Google indexe el sitio. Dejar sin definir en el dominio provisorio |
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio |

## Pendiente antes de publicar

- Etiquetas de medición (Tag Manager, GA4, Google Ads, Píxel de Meta). Los botones de WhatsApp ya llevan `data-evento="clic_whatsapp"` y el formulario termina en `/gracias`.
- Reemplazar el retrato provisorio (`public/dra-laura-mijelshon.jpg`, es un cuadro de video) por una foto definitiva.
- Redirecciones desde las URLs viejas de Wix: están en `next.config.ts`.
