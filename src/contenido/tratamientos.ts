import type { Tratamiento } from "./tipos";

// Cada tratamiento se describe una sola vez. La lista "problemas" define en
// qué páginas de problema aparece; el menú, el índice y las etiquetas se
// generan a partir de este archivo.

export const tratamientos: Tratamiento[] = [
  // ───────── Inyectables
  {
    slug: "toxina-botulinica",
    nombre: "Toxina botulínica",
    grupo: "Inyectables",
    resumen:
      "Relaja el músculo que marca la línea de expresión. Aplicación en consultorio, resultado transitorio.",
    problemas: ["arrugas"],
    enMenu: true,
  },
  {
    slug: "rellenos-y-volumen",
    nombre: "Rellenos y volumen",
    corto: "Rellenos",
    grupo: "Inyectables",
    resumen:
      "Reposición de volumen en pómulos, ojeras, labios y contorno del rostro.",
    problemas: ["surcos", "perdida-volumen"],
    enMenu: true,
  },
  {
    slug: "bioestimulacion",
    nombre: "Bioestimulación",
    grupo: "Inyectables",
    resumen:
      "Estimula la producción propia de colágeno para mejorar firmeza y calidad de la piel.",
    problemas: ["surcos", "perdida-volumen", "flacidez-facial", "flacidez-corporal"],
    enMenu: true,
  },
  {
    slug: "rinomodelacion",
    nombre: "Rinomodelación",
    grupo: "Inyectables",
    resumen: "Corrige el perfil de la nariz con material de relleno, sin quirófano.",
    problemas: ["perfil-nariz"],
    enMenu: true,
    detalle: {
      tituloLinea1: "Rinomodelación",
      tituloLinea2: "sin cirugía",
      bajada:
        "Corregimos el perfil de la nariz con material de relleno inyectable, en consultorio y sin quirófano. La evaluación médica define si el caso es tratable de esta manera.",
      aval: "Dra. Laura Mijelshon · Dermatología clínica y estética\nConsultorios en Belgrano y Pilar · Más de 20 años de trayectoria",
      ficha: [
        { dato: "Duración", valor: "[[30 a 45 minutos]]" },
        { dato: "Anestesia", valor: "[[Tópica en crema]]" },
        { dato: "Sesiones", valor: "[[Una, con control posterior]]" },
        { dato: "Reposo", valor: "[[Actividad normal el mismo día]]" },
        { dato: "Duración del resultado", valor: "[[Entre 12 y 18 meses]]" },
        { dato: "Requiere", valor: "Consulta de evaluación previa" },
      ],
      queEs: [
        "La rinomodelación es un procedimiento médico que modifica la forma visible de la nariz aplicando material de relleno en puntos precisos del dorso y la punta. Se realiza en el consultorio, con aguja o cánula, y el cambio se ve en la misma sesión.",
        "No modifica el tamaño de la nariz ni el hueso. Trabaja sobre el contorno, disimulando irregularidades y mejorando la proyección. Al no ser un procedimiento quirúrgico, el resultado es transitorio y se puede repetir.",
      ],
      corrige: {
        items: [
          "Giba o joroba en el dorso",
          "Punta caída o poco definida",
          "Falta de proyección",
          "Asimetrías leves",
          "Ángulo entre nariz y labio",
          "Irregularidades post quirúrgicas",
        ],
        nota: "[[Listado sujeto a revisión de la Dra. Mijelshon]]",
      },
      pasos: [
        {
          titulo: "Evaluación",
          texto:
            "La doctora examina la nariz, revisa antecedentes y define si el caso se puede resolver sin cirugía. Se conversa qué es posible lograr y qué no.",
        },
        {
          titulo: "Aplicación",
          texto:
            "Se marca la zona, se aplica anestesia tópica y se coloca el material en los puntos definidos. El procedimiento se hace en el mismo consultorio.",
        },
        {
          titulo: "Control",
          texto:
            "Se pauta una consulta de seguimiento [[a los 15 días]] para revisar la evolución y hacer ajustes si el caso lo requiere.",
        },
      ],
      limite: {
        titulo: "Lo que no hacemos",
        texto:
          "En el centro no realizamos procedimientos quirúrgicos. Cuando la evaluación indica que el caso necesita cirugía, lo decimos en la consulta y derivamos. Preferimos que el paciente lo sepa antes de avanzar.",
      },
      quien: [
        "Todos los procedimientos inyectables del centro los realiza la Dra. Laura Mijelshon, médica dermatóloga, [[matrícula nacional 00000]]. La evaluación y la aplicación las hace siempre la misma profesional.",
        "Médica dermatóloga recibida en la Universidad de Buenos Aires, miembro titular de la Sociedad Argentina de Dermatología y docente de pre y posgrado en Dermatología.",
      ],
      faqs: [
        {
          pregunta: "Duele",
          respuesta:
            "Se aplica anestesia en crema antes de empezar. La mayoría de los pacientes describe molestia leve durante la aplicación. [[Texto a validar con la doctora]]",
        },
        {
          pregunta: "Se puede volver atrás",
          respuesta:
            "El material utilizado es reabsorbible y existe la posibilidad de revertirlo en consultorio si el paciente no queda conforme. [[Confirmar cómo comunicarlo]]",
        },
        {
          pregunta: "Cuánto dura el resultado",
          respuesta:
            "[[Entre 12 y 18 meses]], según el material, la zona y cada paciente. Después se puede repetir la aplicación.",
        },
        {
          pregunta: "Puedo volver a trabajar el mismo día",
          respuesta:
            "Sí. Puede haber enrojecimiento o hinchazón leve en la zona durante las primeras horas. [[Indicaciones posteriores a completar]]",
        },
        {
          pregunta: "Cuánto cuesta",
          respuesta:
            "El valor se define en la consulta de evaluación, porque depende de la cantidad de material que necesite cada caso. [[Definir si se publica un valor de referencia]]",
        },
      ],
    },
  },
  {
    slug: "armonizacion-facial",
    nombre: "Armonización facial",
    grupo: "Inyectables",
    resumen:
      "Plan que combina varios procedimientos para trabajar el conjunto del rostro.",
    problemas: ["perdida-volumen"],
    aConfirmar: true,
  },
  {
    slug: "skinbooster",
    nombre: "Skinbooster",
    grupo: "Inyectables",
    resumen: "Hidratación profunda de la piel para mejorar brillo y textura.",
    problemas: ["arrugas", "flacidez-facial", "perdida-volumen"],
  },
  {
    slug: "mesoterapia-facial",
    nombre: "Mesoterapia facial",
    grupo: "Inyectables",
    resumen:
      "Aplicación de activos en la piel del rostro para mejorar firmeza e hidratación.",
    problemas: ["arrugas", "flacidez-facial"],
    aConfirmar: true,
  },
  {
    slug: "hilos-tensores",
    nombre: "Hilos tensores",
    grupo: "Inyectables",
    resumen: "Sostén del tejido para redefinir el contorno del rostro sin cirugía.",
    problemas: ["arrugas", "flacidez-facial"],
    enMenu: true,
  },

  // ───────── Aparatología
  {
    slug: "laser-co2",
    nombre: "Láser CO2 fraccionado",
    corto: "Láser CO2",
    grupo: "Aparatología",
    resumen: "Renueva la piel por puntos y trabaja textura, cicatrices y marcas.",
    problemas: ["flacidez-facial", "manchas", "acne-y-cicatrices", "estrias"],
    enMenu: true,
  },
  {
    slug: "luz-pulsada",
    nombre: "Luz pulsada intensa",
    corto: "Luz pulsada",
    grupo: "Aparatología",
    resumen:
      "Trabaja pigmento y lesiones vasculares, y también se usa para depilación.",
    problemas: ["manchas", "acne-y-cicatrices", "rosacea"],
    enMenu: true,
  },
  {
    slug: "fraxface",
    nombre: "Fraxface",
    grupo: "Aparatología",
    resumen:
      "Radiofrecuencia fraccionada para firmeza y textura, sin dañar la piel circundante.",
    problemas: ["arrugas", "flacidez-facial", "manchas", "acne-y-cicatrices", "estrias"],
  },
  {
    slug: "criocirugia",
    nombre: "Criocirugía",
    grupo: "Aparatología",
    resumen:
      "Aplicación de frío sobre lesiones puntuales, siempre con evaluación dermatológica previa.",
    problemas: ["manchas", "acne-y-cicatrices"],
  },

  // ───────── Cuidado de la piel
  {
    slug: "peeling-y-microdermoabrasion",
    nombre: "Peeling y microdermoabrasión",
    corto: "Peeling",
    grupo: "Cuidado de la piel",
    resumen:
      "Exfoliación controlada que renueva las capas superficiales de la piel.",
    problemas: ["manchas", "acne-y-cicatrices", "estrias"],
    enMenu: true,
  },
  {
    slug: "limpieza-facial-profunda",
    nombre: "Limpieza facial profunda",
    grupo: "Cuidado de la piel",
    resumen: "[[Confirmar si se ofrece como servicio con página propia]]",
    problemas: ["acne-y-cicatrices"],
    aConfirmar: true,
  },
  {
    slug: "consulta-dermatologica",
    nombre: "Consulta dermatológica",
    grupo: "Cuidado de la piel",
    resumen: "Evaluación clínica de lunares, lesiones y enfermedades de la piel.",
    problemas: ["rosacea"],
    destino: "/dermatologia",
  },

  // ───────── Capilar
  {
    slug: "mesoterapia-capilar",
    nombre: "Mesoterapia capilar",
    grupo: "Capilar",
    resumen:
      "Aplicación de activos en el cuero cabelludo, en una serie de sesiones y luego mantenimiento.",
    problemas: ["recuperacion-capilar"],
    aConfirmar: true,
  },
  {
    slug: "plasma-capilar",
    nombre: "Plasma capilar",
    grupo: "Capilar",
    resumen:
      "Plasma rico en plaquetas obtenido de la sangre del propio paciente, aplicado en el cuero cabelludo.",
    problemas: ["recuperacion-capilar"],
    aConfirmar: true,
  },

  // ───────── Corporal
  {
    slug: "radiofrecuencia-corporal",
    nombre: "Radiofrecuencia corporal",
    corto: "Radiofrecuencia",
    grupo: "Corporal",
    resumen: "[[Equipo y protocolo a confirmar con la clínica]]",
    problemas: ["celulitis", "estrias", "flacidez-corporal"],
    aConfirmar: true,
  },
  {
    slug: "modelado-corporal",
    nombre: "Modelado corporal",
    grupo: "Corporal",
    resumen:
      "Aparatología que combina vacío, calor y masaje para trabajar contorno y firmeza.",
    problemas: ["adiposidad-localizada", "celulitis", "flacidez-corporal"],
    aConfirmar: true,
  },
  {
    slug: "ultracavitacion",
    nombre: "Ultracavitación",
    grupo: "Corporal",
    resumen: "Ultrasonido de baja frecuencia aplicado sobre zonas con grasa localizada.",
    problemas: ["adiposidad-localizada"],
    aConfirmar: true,
  },
  {
    slug: "lipolaser",
    nombre: "Lipolaser",
    grupo: "Corporal",
    resumen: "Láser frío no invasivo para zonas puntuales del cuerpo.",
    problemas: ["adiposidad-localizada", "celulitis"],
    aConfirmar: true,
  },
  {
    slug: "enzimas",
    nombre: "Enzimas",
    grupo: "Corporal",
    resumen: "Aplicación de enzimas con efecto drenante sobre zonas localizadas.",
    problemas: ["adiposidad-localizada", "celulitis", "estrias", "flacidez-corporal"],
    aConfirmar: true,
  },
  {
    slug: "mesoterapia-corporal",
    nombre: "Mesoterapia corporal",
    grupo: "Corporal",
    resumen: "Aplicación de activos mediante micropunturas en la zona a tratar.",
    problemas: ["adiposidad-localizada", "celulitis", "flacidez-corporal"],
    aConfirmar: true,
  },

  // ───────── Vascular
  {
    slug: "laser-vascular",
    nombre: "Láser vascular",
    grupo: "Vascular",
    resumen: "Láser que actúa sobre el vaso visible, previa evaluación médica.",
    problemas: ["varices-aranitas"],
    aConfirmar: true,
  },
  {
    slug: "escleroterapia",
    nombre: "Escleroterapia",
    grupo: "Vascular",
    resumen: "Aplicación de una solución dentro del vaso para cerrarlo.",
    problemas: ["varices-aranitas"],
    aConfirmar: true,
  },
];

export const gruposTratamiento = [
  "Inyectables",
  "Aparatología",
  "Cuidado de la piel",
  "Capilar",
  "Corporal",
  "Vascular",
] as const;
