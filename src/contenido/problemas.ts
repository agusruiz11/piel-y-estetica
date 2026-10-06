import type { Problema } from "./tipos";

// Las URLs de problema son las mismas que tiene hoy el sitio de Wix.

export const problemas: Problema[] = [
  // ───────── Rostro
  {
    slug: "arrugas",
    nombre: "Arrugas",
    grupo: "Rostro",
    resumen: "Líneas de expresión en frente, entrecejo y contorno de ojos.",
    tituloLinea1: "Arrugas",
    tituloLinea2: "de expresión",
    bajada:
      "Las líneas de expresión se trabajan de distinta manera según la zona y la profundidad. En la consulta se define qué tratamiento corresponde a cada caso.",
    enMenu: true,
  },
  {
    slug: "surcos",
    nombre: "Surcos",
    grupo: "Rostro",
    resumen: "Pliegues que se marcan con el paso del tiempo alrededor de la boca y la nariz.",
    tituloLinea1: "Surcos",
    tituloLinea2: "del rostro",
    bajada:
      "Los surcos aparecen cuando la piel pierde sostén. Según la profundidad se trabajan reponiendo volumen, estimulando colágeno o combinando ambos.",
    enMenu: true,
  },
  {
    slug: "flacidez-facial",
    nombre: "Flacidez facial",
    grupo: "Rostro",
    resumen:
      "Pérdida de firmeza en mejillas, mandíbula y cuello, con contornos menos definidos.",
    tituloLinea1: "Flacidez",
    tituloLinea2: "facial",
    bajada:
      "La pérdida de firmeza se aborda con tratamientos que estimulan colágeno o dan sostén al tejido. La evaluación define cuál conviene y en qué orden.",
    enMenu: true,
  },
  {
    slug: "perdida-volumen",
    nombre: "Pérdida de volumen",
    grupo: "Rostro",
    resumen: "Hundimiento en pómulos, ojeras y labios que aparece con los años.",
    tituloLinea1: "Pérdida",
    tituloLinea2: "de volumen",
    bajada:
      "Con los años el rostro pierde volumen en zonas puntuales. Se puede reponer de forma gradual, cuidando que el resultado respete la expresión de cada persona.",
    enMenu: true,
  },
  {
    slug: "manchas",
    nombre: "Manchas",
    grupo: "Rostro",
    resumen: "Manchas por sol, hormonales o marcas que quedaron después de una lesión.",
    tituloLinea1: "Manchas",
    tituloLinea2: "en la piel",
    bajada:
      "No todas las manchas son iguales ni responden al mismo tratamiento. La consulta empieza por identificar de qué tipo se trata y recién después se define con qué tecnología se aborda.",
    tipos: {
      titulo: "Qué tipo de mancha tenés",
      intro:
        "La causa determina el tratamiento. Una mancha por sol se trabaja distinto que una hormonal, y una marca que quedó después de un grano necesita otro abordaje. En la consulta la doctora las diferencia y arma el plan.",
      items: [
        {
          causa: "Por sol",
          nombre: "Léntigos solares",
          texto:
            "Manchas marrones bien delimitadas que aparecen en cara, escote y manos por exposición acumulada.",
        },
        {
          causa: "Hormonal",
          nombre: "Melasma",
          texto:
            "Manchas más difusas y simétricas, frecuentes en mejillas y frente. Suelen requerir mantenimiento sostenido.",
        },
        {
          causa: "Post inflamatoria",
          nombre: "Marcas de acné o lesiones",
          texto:
            "Oscurecimiento que queda después de un grano, una herida o una irritación de la piel.",
        },
      ],
      nota: "[[Clasificación y textos a revisar por la Dra. Mijelshon]]",
    },
    enEstaPagina: {
      "luz-pulsada": {
        indicado: "Léntigos y melasma",
        texto:
          "Trabaja el pigmento superficial en varias sesiones y mejora además el tono general de la piel.",
      },
      "laser-co2": {
        indicado: "Manchas con textura irregular",
        texto:
          "Renueva la piel por puntos. Indicado cuando además de la mancha hay que trabajar textura o cicatriz.",
      },
      fraxface: {
        indicado: "Melasma y manchas difusas",
        texto:
          "Radiofrecuencia fraccionada, una alternativa cuando el láser no es la mejor opción para ese tipo de piel.",
      },
      "peeling-y-microdermoabrasion": {
        indicado: "Manchas superficiales",
        texto:
          "Exfoliación controlada para renovar las capas superficiales. Suele combinarse con las otras tecnologías.",
      },
      criocirugia: {
        indicado: "Lesiones puntuales",
        texto:
          "Aplicación de frío para tratar lesiones concretas de la piel previamente evaluadas por dermatología.",
      },
    },
    extras: [
      {
        indicado: "Todos los casos",
        nombre: "Cuidado domiciliario",
        texto:
          "[[Definir si se comunica el esquema de despigmentantes y fotoprotección]]",
      },
    ],
    nota: "Eso se define en la consulta. El tipo de mancha, el tono de piel y la época del año cambian la indicación, y en muchos casos el plan combina más de un tratamiento con un esquema de cuidado en casa.",
    alerta: {
      titulo: "Cuándo consultar por dermatología antes",
      intro:
        "Algunas manchas necesitan una mirada clínica antes de cualquier tratamiento estético. Pedí turno de dermatología si notás:",
      items: [
        "Una mancha o lunar que cambió de tamaño, forma o color",
        "Bordes irregulares o varios colores en la misma lesión",
        "Sangrado, picazón o una lesión que no termina de cicatrizar",
      ],
    },
    faqs: [
      {
        pregunta: "Cuántas sesiones necesito",
        respuesta:
          "Depende del tipo de mancha y de la tecnología que se indique. [[Rango orientativo a completar por la clínica]]",
      },
      {
        pregunta: "Las manchas vuelven",
        respuesta:
          "Algunas sí, sobre todo las hormonales, si no se sostiene la fotoprotección y el cuidado indicado. Por eso el plan incluye mantenimiento. [[Validar redacción]]",
      },
      {
        pregunta: "Se puede hacer en verano",
        respuesta:
          "[[Respuesta a definir con la doctora, incluye la indicación estacional de cada tecnología]]",
      },
      {
        pregunta: "Cuánto cuesta",
        respuesta:
          "El valor se define en la consulta, porque depende del tratamiento indicado y de la cantidad de sesiones. [[Definir si se publica un valor de referencia]]",
      },
    ],
    enMenu: true,
  },
  {
    slug: "acne-y-cicatrices",
    nombre: "Acné y cicatrices",
    grupo: "Rostro",
    resumen: "Acné activo y las marcas o cicatrices que deja en la piel.",
    tituloLinea1: "Acné",
    tituloLinea2: "y cicatrices",
    bajada:
      "El acné activo y sus secuelas se tratan por separado. Primero se controla el cuadro y después se trabaja la textura y las marcas que quedaron.",
    enMenu: true,
  },
  {
    slug: "rosacea",
    nombre: "Rosácea y enrojecimiento",
    corto: "Rosácea",
    grupo: "Rostro",
    resumen: "Rojez persistente y vasos visibles en mejillas y nariz.",
    tituloLinea1: "Rosácea",
    tituloLinea2: "y enrojecimiento",
    bajada:
      "La rosácea es una condición de la piel que necesita diagnóstico. La consulta dermatológica define el cuidado diario y si corresponde sumar aparatología.",
    enMenu: true,
  },
  {
    slug: "perfil-nariz",
    nombre: "Perfil y contorno de la nariz",
    grupo: "Rostro",
    resumen: "Giba en el dorso, punta caída o asimetrías leves, sin cirugía.",
    destino: "/tratamientos/rinomodelacion",
  },
  {
    slug: "recuperacion-capilar",
    nombre: "Caída del cabello",
    grupo: "Rostro",
    resumen: "Debilitamiento y pérdida de densidad capilar.",
    tituloLinea1: "Caída",
    tituloLinea2: "del cabello",
    bajada:
      "La caída del cabello tiene distintas causas. La consulta las identifica y define si el plan incluye aplicaciones en consultorio, tratamiento en casa o ambos.",
  },

  // ───────── Cuerpo
  {
    slug: "adiposidad-localizada",
    nombre: "Adiposidad localizada",
    grupo: "Cuerpo",
    resumen:
      "Acumulación de grasa en zonas puntuales que no responde a dieta ni ejercicio.",
    tituloLinea1: "Adiposidad",
    tituloLinea2: "localizada",
    bajada:
      "Para zonas puntuales del cuerpo se arman planes que combinan aparatología y aplicaciones. La evaluación define la combinación y la cantidad de sesiones.",
    enMenu: true,
  },
  {
    slug: "celulitis",
    nombre: "Celulitis",
    grupo: "Cuerpo",
    resumen: "Irregularidad en la superficie de la piel en muslos y glúteos.",
    tituloLinea1: "Celulitis",
    bajada:
      "La celulitis se trabaja con planes combinados y sostenidos en el tiempo. En la evaluación se define con qué tratamientos empezar.",
    enMenu: true,
  },
  {
    slug: "estrias",
    nombre: "Estrías",
    grupo: "Cuerpo",
    resumen: "Marcas por cambios de peso, embarazo o crecimiento.",
    tituloLinea1: "Estrías",
    bajada:
      "El abordaje depende del tipo de estría y de cuánto tiempo tiene. En muchos casos se combinan dos o más tratamientos.",
    enMenu: true,
  },
  {
    slug: "flacidez-corporal",
    nombre: "Flacidez corporal",
    grupo: "Cuerpo",
    resumen: "Pérdida de firmeza en abdomen, brazos y piernas.",
    tituloLinea1: "Flacidez",
    tituloLinea2: "corporal",
    bajada:
      "La firmeza de la piel del cuerpo se trabaja con aparatología y bioestimulación. La evaluación define el plan según la zona.",
  },
  {
    slug: "varices-aranitas",
    nombre: "Várices y arañitas",
    grupo: "Cuerpo",
    resumen: "Vasos visibles en piernas, evaluados en consulta antes de tratar.",
    tituloLinea1: "Várices",
    tituloLinea2: "y arañitas",
    bajada:
      "Los vasos visibles en las piernas se evalúan en consulta antes de indicar cualquier tratamiento.",
  },
  {
    slug: "vello-no-deseado",
    nombre: "Vello no deseado",
    grupo: "Cuerpo",
    resumen: "Depilación definitiva en rostro y cuerpo.",
    destino: "/depilacion",
  },
];
