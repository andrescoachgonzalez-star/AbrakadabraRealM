export type Episode = {
  id: string
  title: string
  description?: string
  youtubeUrl: string
  youtubeVideoId?: string
  duration?: string
  order: number
  isPreview?: boolean
}

export type CourseSection = {
  id: string
  title: string
  description?: string
  order: number
  episodes: Episode[]
}

export type Course = {
  id: string
  slug: string
  title: string
  shortDescription?: string
  fullDescription?: string
  instructor?: string
  category?: string
  level?: string
  thumbnail?: string
  coverImage?: string
  duration?: string
  totalSections: number
  totalEpisodes: number
  status?: "published" | "coming_soon"
  sections: CourseSection[]
}

type EpisodeDraft = Omit<Episode, "id" | "youtubeVideoId">
type CourseSectionDraft = Omit<CourseSection, "id" | "episodes"> & {
  episodes: EpisodeDraft[]
}
type CourseDraft = Omit<
  Course,
  "id" | "slug" | "thumbnail" | "coverImage" | "totalSections" | "totalEpisodes" | "sections"
> & {
  coverImage?: string
  sections: CourseSectionDraft[]
}

const PENDING_YOUTUBE_URL = "https://www.youtube.com/@abrakadabrarealm"

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function getYoutubeVideoId(url?: string) {
  if (!url) return undefined

  try {
    const parsedUrl = new URL(url)

    if (parsedUrl.hostname === "youtu.be") {
      return parsedUrl.pathname.replace("/", "") || undefined
    }

    if (parsedUrl.hostname.includes("youtube.com")) {
      if (parsedUrl.pathname === "/watch") {
        return parsedUrl.searchParams.get("v") ?? undefined
      }

      if (parsedUrl.pathname.startsWith("/embed/")) {
        return parsedUrl.pathname.split("/embed/")[1] || undefined
      }

      if (parsedUrl.pathname.startsWith("/shorts/")) {
        return parsedUrl.pathname.split("/shorts/")[1] || undefined
      }
    }
  } catch {
    return undefined
  }

  return undefined
}

export function getYoutubeThumbnail(url?: string) {
  const videoId = getYoutubeVideoId(url)
  return videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : undefined
}

export function getFirstEpisode(course: Pick<Course, "sections">) {
  const orderedSections = [...course.sections].sort((left, right) => left.order - right.order)
  const firstSection = orderedSections[0]
  if (!firstSection) return undefined

  return [...firstSection.episodes].sort((left, right) => left.order - right.order)[0]
}

export function countTotalEpisodes(course: Pick<Course, "sections">) {
  return course.sections.reduce((total, section) => total + section.episodes.length, 0)
}

function pendingEpisodeDescription(description?: string) {
  const note = "PENDIENTE: reemplazar con el link exacto de YouTube de este episodio."
  return description ? `${description} ${note}` : note
}

function createPendingEpisode(
  order: number,
  title: string,
  description?: string,
  duration?: string
): EpisodeDraft {
  return {
    title,
    order,
    duration,
    youtubeUrl: PENDING_YOUTUBE_URL,
    description: pendingEpisodeDescription(description),
    isPreview: order === 1,
  }
}

function createReferencedPendingEpisode(reference: number, order: number, title: string) {
  return createPendingEpisode(order, title, `Referencia original de playlist [${reference}].`)
}

function createReferencedEpisodeWithUrl(
  reference: number,
  order: number,
  title: string,
  youtubeUrl: string
): EpisodeDraft {
  return {
    title,
    order,
    youtubeUrl,
    description: `Referencia original de playlist [${reference}].`,
    isPreview: order === 1,
  }
}

function createCourse(draft: CourseDraft): Course {
  const slug = slugify(draft.title)
  const sections = draft.sections
    .slice()
    .sort((left, right) => left.order - right.order)
    .map((section) => ({
      ...section,
      id: `${slug}-section-${section.order}`,
      episodes: section.episodes
        .slice()
        .sort((left, right) => left.order - right.order)
        .map((episode) => ({
          ...episode,
          id: `${slug}-section-${section.order}-episode-${episode.order}`,
          youtubeVideoId: getYoutubeVideoId(episode.youtubeUrl),
        })),
    }))

  const course: Course = {
    ...draft,
    id: slug,
    slug,
    sections,
    totalSections: sections.length,
    totalEpisodes: countTotalEpisodes({ sections }),
    thumbnail: undefined,
    coverImage: draft.coverImage,
  }

  const firstEpisode = getFirstEpisode(course)
  const firstEpisodeThumbnail = getYoutubeThumbnail(firstEpisode?.youtubeUrl)

  course.thumbnail = firstEpisodeThumbnail ?? draft.coverImage
  course.coverImage = draft.coverImage ?? course.thumbnail
  course.duration =
    draft.duration ??
    (course.status === "published"
      ? `${course.totalEpisodes} episodio${course.totalEpisodes === 1 ? "" : "s"}`
      : undefined)

  return course
}

const courseDrafts: CourseDraft[] = [
  {
    title: "Presentacion, promos, testimonios y comunidad",
    shortDescription:
      "Bloque editorial con promocion, testimonios y presentaciones de invitados.",
    fullDescription:
      "Este curso agrupa el contexto de la academia: promos, mensajes de comunidad, testimonios y presentaciones de invitados antes de entrar a los programas principales.",
    instructor: "Abrakadabra",
    category: "COMUNIDAD",
    level: "Abierto",
    coverImage: "/image-Philosophy/Cursos.png",
    status: "published",
    sections: [
      {
        title: "Seccion 1: Promocion y contexto",
        description: "Promos, manifiestos y piezas de introduccion a la comunidad.",
        order: 1,
        episodes: [
          createReferencedEpisodeWithUrl(
            2,
            1,
            "00. NO SE TRATA DE MOTIVACION, SE TRATA DE MOVERTE",
            "https://www.youtube.com/watch?v=CJKRRR0EWjY&list=PL7CVTLJ8b8aIPe0OyhTgm70MdL0er_ONQ&index=2"
          ),
          createReferencedEpisodeWithUrl(
            7,
            2,
            "EL CURSO QUE REVOLUCIONA LA EDUCACION - FOCUS PROGRAM (GRATIS EN NUESTRO PERFIL)",
            "https://www.youtube.com/watch?v=-EoFq_awQ5k&list=PL7CVTLJ8b8aIPe0OyhTgm70MdL0er_ONQ&index=7"
          ),
          createReferencedEpisodeWithUrl(
            62,
            3,
            "00. EL LEON QUE TODOS LLEVAMOS DENTRO",
            "https://youtu.be/qmI1iXUVmC8?si=rjJv8peNyNMWn7Va"
          ),
          createReferencedEpisodeWithUrl(
            98,
            4,
            "00. DEJA DE COMPRAR IDEAS",
            "https://youtu.be/VOVNXWTaAss?si=V9BNn25m0ZITgU2C"
          ),
          createReferencedEpisodeWithUrl(
            106,
            5,
            "EL MUNDO DE ABRAKADABRA",
            "https://youtu.be/fyOozWkGEsE?si=IIv7egrNfDObZpjF"
          ),
          createReferencedEpisodeWithUrl(
            107,
            6,
            "ABRAKADABRAREALM",
            "https://youtu.be/m6TG-K6NoJw?si=k5tFFIgNo_MlyEwF"
          ),
          createReferencedEpisodeWithUrl(
            136,
            7,
            "00. FOCUS PRESENCIAL",
            "https://youtu.be/08lSqlFM7BE?si=QbtDChvLT2L3hh4j"
          ),
        ],
      },
      {
        title: "Seccion 2: Testimonios",
        description: "Historias y resultados de estudiantes y miembros.",
        order: 2,
        episodes: [
          createReferencedPendingEpisode(1, 1, "23. TESTIMONIO SOBRE EL MAPA DE SUENOS - TUTO OMAR"),
          createReferencedPendingEpisode(3, 2, "TESTIMONIOS FOCUS PROGRAM"),
          createReferencedPendingEpisode(36, 3, "25. TESTIMONIO SOBRE DEL MAPA DE SUENOS - WILMARK MUNOZ"),
          createReferencedPendingEpisode(155, 4, "99. JORGE BORBON - LA ENTREVISTA QUE CAMBIARA TU VIDA"),
        ],
      },
      {
        title: "Seccion 3: Presentaciones de invitados",
        description: "Introducciones de los invitados que participan en la academia.",
        order: 3,
        episodes: [
          createReferencedPendingEpisode(4, 1, "00. PRESENTACION MAGDA MATEUS"),
          createReferencedPendingEpisode(5, 2, "68. BIENVENIDA - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(6, 3, "00. QUIEN SOY Y COMO CONOCI A ANDRES HENAO - MARCELA NUNEZ"),
          createReferencedPendingEpisode(66, 4, "59. PRESENTACION MAGDA MATEUS Y ANDRES HENAO"),
          createReferencedPendingEpisode(87, 5, "00. BIENVENIDA ANDRES HENAO Y DANIEL RODRIGUEZ"),
        ],
      },
    ],
  },
  {
    title: "Focus Program - Andres Henao",
    shortDescription:
      "Programa principal de desarrollo personal organizado en ocho bloques tematicos.",
    fullDescription:
      "Esta es la estructura extendida de Focus Program con bienvenida, formulas, identidad, proposito, gratitud, relaciones y cierre.",
    instructor: "Andres Henao",
    category: "DESARROLLO PERSONAL",
    level: "Intermedio",
    coverImage: "/joinus/joinus1.webp",
    status: "published",
    sections: [
      {
        title: "Seccion 1: Inicio del programa",
        description: "Introduccion, origen del programa y reglas base.",
        order: 1,
        episodes: [
          createReferencedPendingEpisode(8, 1, "00. BIENVENIDA FOCUS PROGRAM"),
          createReferencedPendingEpisode(9, 2, "01. POR QUE SE CREO FOCUS PROGRAM?"),
          createReferencedPendingEpisode(10, 3, "02. LA IMPORTANCIA DE LOS 3 HABITOS"),
          createReferencedPendingEpisode(12, 4, "03. REGLAS DEL JUEGO"),
        ],
      },
      {
        title: "Seccion 2: Potencial, valores y creencias",
        description: "Exploracion de potencial, valores y meditacion de bienvenida.",
        order: 2,
        episodes: [
          createReferencedPendingEpisode(13, 1, "04. PREGUNTAS PARA SABER SI ESTAS DESARROLLANDO TU POTENCIAL"),
          createReferencedPendingEpisode(14, 2, "05. VALORES Y CREENCIAS"),
          createReferencedPendingEpisode(15, 3, "06. VALORES Y CREENCIAS - CONCLUSION"),
          createReferencedPendingEpisode(16, 4, "07. MEDITACION BIENVENIDA"),
        ],
      },
      {
        title: "Seccion 3: Formulas del exito",
        description: "Formulas y principios clave del programa.",
        order: 3,
        episodes: [
          createReferencedPendingEpisode(17, 1, "08. FORMULA C + H x A"),
          createReferencedPendingEpisode(20, 2, "09. LA FORMULA DEFINITIVA DEL EXITO"),
          createReferencedPendingEpisode(21, 3, "10. FORMULA SENTIR, PENSAR, DECIR, HACER"),
          createReferencedPendingEpisode(22, 4, "11. FORMULA DEL EXITO"),
          createReferencedPendingEpisode(23, 5, "12. FORMULA AMC"),
          createReferencedPendingEpisode(193, 6, "09. FORMULA C + H x A"),
        ],
      },
      {
        title: "Seccion 4: Identidad, lectura y felicidad",
        description: "Identidad, decretos, lectura y filosofia de vida.",
        order: 4,
        episodes: [
          createReferencedPendingEpisode(24, 1, "13. EL PODER DEL YO SOY"),
          createReferencedPendingEpisode(25, 2, "14. MEDITACION DECRETO YO SOY"),
          createReferencedPendingEpisode(27, 3, "16. COMO SER FELIZ CON LO QUE HACES"),
          createReferencedPendingEpisode(28, 4, "17. COMO SER FELIZ CON LO QUE HACES - FILOSOFIA DE VIDA"),
        ],
      },
      {
        title: "Seccion 5: Proposito, mapa y estandares",
        description: "Proposito de vida, rueda de la vida y mapa de suenos.",
        order: 5,
        episodes: [
          createReferencedPendingEpisode(29, 1, "18. EL DIA QUE PERDI LA VISTA, APRENDI A VER"),
          createReferencedPendingEpisode(30, 2, "19. LA RUEDA DE LA VIDA"),
          createReferencedPendingEpisode(31, 3, "20. MEDITACION PROPOSITO DE VIDA"),
          createReferencedPendingEpisode(33, 4, "22. APRENDE A MARCAR ESTANDARES"),
          createReferencedPendingEpisode(35, 5, "24. EL PODER DEL MAPA DE SUENOS"),
        ],
      },
      {
        title: "Seccion 6: Abundancia, gratitud y felicidad",
        description: "Meditaciones y reflexiones sobre abundancia, gratitud y felicidad.",
        order: 6,
        episodes: [
          createReferencedPendingEpisode(37, 1, "26. MEDITACION DE ABUNDANCIA"),
          createReferencedPendingEpisode(39, 2, "28 POR QUE ES IMPORTANTE AGRADECER ANDRES HENAO"),
          createReferencedPendingEpisode(40, 3, "31. MEDITACION AGRADECIMIENTO"),
          createReferencedPendingEpisode(41, 4, "30. QUE ES LA FELICIDAD"),
          createReferencedPendingEpisode(190, 5, "29. POR QUE ES IMPORTANTE AGRADECER"),
        ],
      },
      {
        title: "Seccion 7: Miedo, motivacion y relaciones",
        description: "Manejo del miedo, motivacion y relaciones.",
        order: 7,
        episodes: [
          createReferencedPendingEpisode(43, 1, "33. QUE ES EL MIEDO"),
          createReferencedPendingEpisode(44, 2, "35. COMO MOTIVARME CUANDO NO QUIERO HACER LAS COSAS"),
          createReferencedPendingEpisode(45, 3, "36. LA IMPORTANCIA DE SABER RELACIONARTE"),
          createReferencedPendingEpisode(46, 4, "37. MEDITACION RELACIONES"),
        ],
      },
      {
        title: "Seccion 8: Reflexion profunda y cierre",
        description: "Meditaciones finales, reflexion profunda y cierre del programa.",
        order: 8,
        episodes: [
          createReferencedPendingEpisode(47, 1, "43. MEDITACION RECOPILAR INFORMACION"),
          createReferencedPendingEpisode(48, 2, "39. LA IMPORTANCIA DE DAR, PEDIR, RECIBIR"),
          createReferencedPendingEpisode(49, 3, "40. NOS VAMOS A MORIR"),
          createReferencedPendingEpisode(51, 4, "41. MEDITACION ESTAS MUERTO"),
          createReferencedPendingEpisode(52, 5, "44. DECRETO FINAL FOCUS"),
          createReferencedPendingEpisode(53, 6, "57. MEDITACION DE RELAJACION"),
          createReferencedPendingEpisode(124, 7, "78. MEDITACION DE RELAJACION - ANDRES HENAO"),
          createReferencedPendingEpisode(126, 8, "28. APRENDE A DISFRUTAR EL PROCESO"),
        ],
      },
    ],
  },
  {
    title: "Bioreprogramacion - Marcela Nunez",
    shortDescription:
      "Curso enfocado en introduccion, guion mental y aplicacion energetica.",
    fullDescription:
      "Programa de Marcela Nunez organizado en tres bloques: introduccion, guion mental y energia aplicada.",
    instructor: "Marcela Nunez",
    category: "DESARROLLO PERSONAL",
    level: "Intermedio",
    coverImage: "/home/art-home.webp",
    status: "published",
    sections: [
      {
        title: "Seccion 1: Introduccion",
        description: "Presentacion del enfoque y origen del trabajo.",
        order: 1,
        episodes: [
          createReferencedPendingEpisode(54, 1, "47. QUIEN SOY Y COMO CONOCI A ANDRES HENAO - MARCELA NUNEZ"),
          createReferencedPendingEpisode(65, 2, "49. QUE ES LA BIOREPROGRAMACION - MARCELA NUNEZ"),
          createReferencedPendingEpisode(55, 3, "48. COMO LLEGO A MI LA BIOREPROGRAMACION - MARCELA NUNEZ"),
        ],
      },
      {
        title: "Seccion 2: Guion mental y reprogramacion",
        description: "Etapas de guion mental, mandatos y programacion.",
        order: 2,
        episodes: [
          createReferencedPendingEpisode(63, 1, "50. GUION MENTAL ETAPA 1 - MARCELA NUNEZ"),
          createReferencedPendingEpisode(60, 2, "51. GUION MENTAL ETAPA 2 Y 3 - MARCELA NUNEZ"),
          createReferencedPendingEpisode(59, 3, "52. IMPULSORES Y MANDATOS FRENADORES - MARCELA NUNEZ"),
          createReferencedPendingEpisode(58, 4, "53. LOS ESTIMULOS NOS PROGRAMAN - MARCELA NUNEZ"),
        ],
      },
      {
        title: "Seccion 3: Energia y aplicacion",
        description: "Meditacion y aplicacion practica del proceso.",
        order: 3,
        episodes: [
          createReferencedPendingEpisode(57, 1, "54. MEDITACION CIRCULO DE LA ENERGIA - MARCELA NUNEZ"),
          createReferencedPendingEpisode(56, 2, "55. Y AHORA QUE HAGO - MARCELA NUNEZ"),
        ],
      },
    ],
  },
  {
    title: "Magda Mateus",
    shortDescription:
      "Curso organizado en introduccion, distinciones, emociones y meditaciones.",
    fullDescription:
      "Programa de Magda Mateus estructurado por temas: introduccion, distinciones, manejo emocional y meditaciones de aplicacion.",
    instructor: "Magda Mateus",
    category: "DESARROLLO PERSONAL",
    level: "Intermedio",
    coverImage: "/image-Philosophy/Cursos.png",
    status: "published",
    sections: [
      {
        title: "Seccion 1: Introduccion",
        description: "Presentacion y primeras bases del curso.",
        order: 1,
        episodes: [
          createReferencedPendingEpisode(66, 1, "59. PRESENTACION MAGDA MATEUS Y ANDRES HENAO"),
          createReferencedPendingEpisode(68, 2, "60. 3 DISTINCIONES DEL SER HUMANO - MAGDA MATEUS"),
          createReferencedPendingEpisode(85, 3, "DIA 26 1 Magda y Andres Introduccion FINAL"),
        ],
      },
      {
        title: "Seccion 2: Distinciones",
        description: "Desarrollo del bloque de distinciones.",
        order: 2,
        episodes: [
          createReferencedPendingEpisode(71, 1, "63. CONOCE LAS DOS DISTINCIONES - MAGDA MATEUS"),
          createReferencedPendingEpisode(76, 2, "DIA 26 Magda 2 Distinciones"),
          createReferencedPendingEpisode(78, 3, "DIA 26 2 Magda 3 distinciones FINAL"),
          createReferencedPendingEpisode(80, 4, "DIA 26 5 Magda 2 distinciones FINAL"),
          createReferencedPendingEpisode(81, 5, "DIA 26 Magda 2 Distinciones 2"),
          createReferencedPendingEpisode(191, 6, "DIA 26 5 Magda 2 distinciones"),
        ],
      },
      {
        title: "Seccion 3: Pasado, acuerdos y emociones",
        description: "Soltar pasado, acuerdos y manejo de emociones.",
        order: 3,
        episodes: [
          createReferencedPendingEpisode(69, 1, "61. COMO SOLTAR EVENTOS DEL PASADO - MAGDA MATEUS"),
          createReferencedPendingEpisode(72, 2, "64. MEDITACION DE ACUERDOS ROTOS - MAGDA MATEUS"),
          createReferencedPendingEpisode(73, 3, "65. COMO SABER MANEJAR TUS EMOCIONES - MAGDA MATEUS"),
          createReferencedPendingEpisode(77, 4, "DIA 26 Magda Emociones"),
          createReferencedPendingEpisode(82, 5, "DIA 26 6 Magda Emociones"),
          createReferencedPendingEpisode(84, 6, "DIA 26 Magda Emociones FINAL"),
        ],
      },
      {
        title: "Seccion 4: Meditaciones y aplicacion",
        description: "Meditaciones centrales de integracion del curso.",
        order: 4,
        episodes: [
          createReferencedPendingEpisode(70, 1, "62. MEDITACION SE CAPITAN DE TU VIDA - MAGDA MATEUS"),
          createReferencedPendingEpisode(79, 2, "DIA 26 4 Magda Meditacion Capitan de tu propia vida FINAL"),
          createReferencedPendingEpisode(74, 3, "66. MEDITACION PADRES - MAGDA MATEUS Y ANDRES HENAO"),
        ],
      },
    ],
  },
  {
    title: "Daniel Rodriguez - Bienes Raices y Finanzas",
    shortDescription:
      "Curso enfocado en fundamentos, rentabilidad y proceso de compra.",
    fullDescription:
      "Programa de Daniel Rodriguez organizado en tres bloques: fundamentos, rentabilidad y compra de propiedad.",
    instructor: "Daniel Rodriguez",
    category: "NEGOCIOS",
    level: "Intermedio",
    coverImage: "/home/rentcar-home.jpg",
    status: "published",
    sections: [
      {
        title: "Seccion 1: Fundamentos",
        description: "Bases de bienes raices y finanzas personales.",
        order: 1,
        episodes: [
          createReferencedPendingEpisode(100, 1, "69. EL ABC DE LOS BIENES RAICES - DANIEL RODRIGUEZ"),
          createReferencedPendingEpisode(99, 2, "70. POR QUE INVERTIR EN BIENES RAICES - DANIEL RODRIGUEZ"),
          createReferencedPendingEpisode(97, 3, "71. APRENDE A MANEJAR TUS FINANZAS - DANIEL RODRIGUEZ"),
        ],
      },
      {
        title: "Seccion 2: Objetivo, rentabilidad y numeros",
        description: "Analisis de objetivo, rentabilidad y numeros del inmueble.",
        order: 2,
        episodes: [
          createReferencedPendingEpisode(96, 1, "72. DEFINE EL OBJETIVO PAR TU INMUEBLE - DANIEL RODRIGUEZ"),
          createReferencedPendingEpisode(94, 2, "73. DEFINE LA RENTABILIDAD DE TU INMUEBLE - DANIEL RODRIGUEZ"),
          createReferencedPendingEpisode(93, 3, "74. APRENDE A VER LOS NUMEROS - DANIEL RODRIGUEZ"),
        ],
      },
      {
        title: "Seccion 3: Busqueda y compra",
        description: "Busqueda de propiedad y decisiones de compra.",
        order: 3,
        episodes: [
          createReferencedPendingEpisode(91, 1, "75. COMO ENCONTRAR LA PROPIEDAD IDEAL - DANIEL RODRIGUEZ"),
          createReferencedPendingEpisode(90, 2, "76. COMO COMPRAR TU PRIMERA PROPIEDAD - DANIEL RODRIGUEZ"),
          createReferencedPendingEpisode(88, 3, "77. COMO HACER UN ESTUDIO DE MERCADO - DANIEL RODRIGUEZ"),
        ],
      },
    ],
  },
  {
    title: "Daniel Rodriguez + Andres Henao - Como monetizar tu conocimiento",
    shortDescription:
      "Curso largo en tres bloques sobre monetizacion del conocimiento.",
    fullDescription:
      "Programa conjunto de Daniel Rodriguez y Andres Henao estructurado en introduccion, desarrollo y bonus de cierre.",
    instructor: "Daniel Rodriguez + Andres Henao",
    category: "NEGOCIOS DIGITALES",
    level: "Intermedio",
    coverImage: "/home/joinus-home.webp",
    status: "published",
    sections: [
      {
        title: "Seccion 1: Introduccion",
        description: "Apertura del tema y bases del curso.",
        order: 1,
        episodes: [
          createReferencedPendingEpisode(156, 1, "123. COMO MONETIZAR TU CONOCIMIENTO - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(157, 2, "124. COMO MONETIZAR TU CONOCIMIENTO - DANIEL RODRIGUEZ Y ANDRES HENAO"),
        ],
      },
      {
        title: "Seccion 2: Desarrollo del tema",
        description: "Desarrollo principal del contenido.",
        order: 2,
        episodes: [
          createReferencedPendingEpisode(158, 1, "125. COMO MONETIZAR TU CONOCIMIENTO - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(159, 2, "126. COMO MONETIZAR TU CONOCIMIENTO - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(160, 3, "127. COMO MONETIZAR TU CONOCIMIENTO - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(161, 4, "128. COMO MONETIZAR TU CONOCIMIENTO - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(162, 5, "129. COMO MONETIZAR TU CONOCIMIENTO - DANIEL RODRIGUEZ Y ANDRES HENAO"),
        ],
      },
      {
        title: "Seccion 3: Bonus y cierre",
        description: "Cierre del curso y contenido bonus.",
        order: 3,
        episodes: [
          createReferencedPendingEpisode(163, 1, "130. COMO MONETIZAR TU CONOCIMIENTO - DANIEL RODRIGUEZ Y ANDRES HENAO (BONUS)"),
          createReferencedPendingEpisode(164, 2, "131. COMO MONETIZAR TU CONOCIMIENTO - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(165, 3, "132. COMO MONETIZAR TU CONOCIMIENTO - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(166, 4, "133. COMO MONETIZAR TU CONOCIMIENTO - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(167, 5, "134. COMO MONETIZAR TU CONOCIMIENTO - DANIEL RODRIGUEZ Y ANDRES HENAO"),
        ],
      },
    ],
  },
  {
    title: "Daniel Rodriguez + Andres Henao - Reto Imparable",
    shortDescription:
      "Programa por retos organizado en bienvenida, bloques iniciales, intermedios y finales.",
    fullDescription:
      "Reto Imparable queda estructurado como un curso largo por etapas, manteniendo la secuencia logica del programa.",
    instructor: "Daniel Rodriguez + Andres Henao",
    category: "DESARROLLO PERSONAL",
    level: "Intermedio",
    coverImage: "/joinus/joinus1.webp",
    status: "published",
    sections: [
      {
        title: "Seccion 1: Bienvenida",
        description: "Entrada al reto desde las dos voces del programa.",
        order: 1,
        episodes: [
          createReferencedPendingEpisode(171, 1, "101. RETO IMPARABLE (BIENVENIDA) - DANIEL RODRIGUEZ"),
          createReferencedPendingEpisode(172, 2, "102. RETO IMPARABLE (BIENVENIDA) - ANDRES HENAO"),
        ],
      },
      {
        title: "Seccion 2: Retos iniciales",
        description: "Primer tramo del reto.",
        order: 2,
        episodes: [
          createReferencedPendingEpisode(169, 1, "103. RETO IMPARABLE - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(174, 2, "104. RETO IMPARABLE - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(177, 3, "105. RETO IMPARABLE - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(176, 4, "106. RETO IMPARABLE - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(188, 5, "107. RETO IMPARABLE - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(179, 6, "108. RETO IMPARABLE - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(185, 7, "109. RETO IMPARABLE - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(168, 8, "110. RETO IMPARABLE - DANIEL RODRIGUEZ Y ANDRES HENAO"),
        ],
      },
      {
        title: "Seccion 3: Retos intermedios",
        description: "Segundo bloque del reto.",
        order: 3,
        episodes: [
          createReferencedPendingEpisode(175, 1, "111. RETO IMPARABLE - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(178, 2, "112. RETO IMPARABLE - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(170, 3, "113. RETO IMPARABLE - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(189, 4, "114. RETO IMPARABLE - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(180, 5, "115. RETO IMPARABLE - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(182, 6, "116. RETO IMPARABLE - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(181, 7, "117. RETO IMPARABLE - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(187, 8, "118. RETO IMPARABLE - DANIEL RODRIGUEZ Y ANDRES HENAO"),
        ],
      },
      {
        title: "Seccion 4: Retos finales",
        description: "Cierre del reto en su tramo final.",
        order: 4,
        episodes: [
          createReferencedPendingEpisode(183, 1, "119. RETO IMPARABLE - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(173, 2, "120. RETO IMPARABLE - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(186, 3, "121. RETO IMPARABLE - DANIEL RODRIGUEZ Y ANDRES HENAO"),
          createReferencedPendingEpisode(184, 4, "122. RETO IMPARABLE - DANIEL RODRIGUEZ Y ANDRES HENAO"),
        ],
      },
    ],
  },
  {
    title: "Junior Bejarano - Trading",
    shortDescription:
      "Curso de trading organizado en introduccion, desarrollo y cierre.",
    fullDescription:
      "Programa de Junior Bejarano reordenado como curso con tres bloques logicos y secuencia academica.",
    instructor: "Junior Bejarano",
    category: "TRADING",
    level: "Intermedio",
    coverImage: "/home/news-home.webp",
    status: "published",
    sections: [
      {
        title: "Seccion 1: Introduccion",
        description: "Apertura e introduccion al curso de trading.",
        order: 1,
        episodes: [
          createReferencedPendingEpisode(109, 1, "136. CURSO DE TRADING (Gratis) POR JUNIOR BEJARANO"),
          createReferencedPendingEpisode(113, 2, "08. CURSO DE TRADING (Gratis) POR JUNIOR BEJARANO"),
        ],
      },
      {
        title: "Seccion 2: Desarrollo",
        description: "Desarrollo principal del curso.",
        order: 2,
        episodes: [
          createReferencedPendingEpisode(123, 1, "137. CURSO DE TRADING (Gratis) POR JUNIOR BEJARANO"),
          createReferencedPendingEpisode(121, 2, "138. CURSO DE TRADING (Gratis) POR JUNIOR BEJARANO"),
          createReferencedPendingEpisode(120, 3, "139. CURSO DE TRADING (Gratis) POR JUNIOR BEJARANO"),
          createReferencedPendingEpisode(118, 4, "140. CURSO DE TRADING (Gratis) POR JUNIOR BEJARANO"),
          createReferencedPendingEpisode(116, 5, "141. CURSO DE TRADING (Gratis) POR JUNIOR BEJARANO"),
          createReferencedPendingEpisode(115, 6, "142. CURSO DE TRADING (Gratis) POR JUNIOR BEJARANO"),
          createReferencedPendingEpisode(112, 7, "143. CURSO DE TRADING (Gratis) POR JUNIOR BEJARANO"),
        ],
      },
      {
        title: "Seccion 3: Cierre",
        description: "Cierre del bloque de trading.",
        order: 3,
        episodes: [
          createReferencedPendingEpisode(110, 1, "144. CURSO DE TRADING (Gratis) POR JUNIOR BEJARANO"),
        ],
      },
    ],
  },
  {
    title: "Macadamia",
    shortDescription:
      "Programa sobre subconsciente, poder mental, formulas y plan de accion.",
    fullDescription:
      "Curso de Macadamia estructurado en cinco bloques: bases, creencias, experiencia, formulas y plan de accion.",
    instructor: "Macadamia",
    category: "DESARROLLO PERSONAL",
    level: "Intermedio",
    coverImage: "/home/ourmusic-home.webp",
    status: "published",
    sections: [
      {
        title: "Seccion 1: Bienvenida y bases",
        description: "Introduccion al curso y bases del subconsciente.",
        order: 1,
        episodes: [
          createReferencedPendingEpisode(130, 1, "80. DESBLOQUEA EL SIGUIENTE NIVEL - MACADAMIA (Bienvenida y Reglas)"),
          createReferencedPendingEpisode(131, 2, "81. HERRAMIENTAS PARA EL SUBCONSCIENTE - MACADAMIA"),
          createReferencedPendingEpisode(133, 3, "03. EL PODER DEL SUBCOSCIENTE - MACADAMIA"),
          createReferencedPendingEpisode(134, 4, "82. REPROGRAMA TU MENTE - MACADAMIA"),
        ],
      },
      {
        title: "Seccion 2: Poder mental y creencias",
        description: "Trabajo con hipnosis, poder mental y creencias limitantes.",
        order: 2,
        episodes: [
          createReferencedPendingEpisode(139, 1, "84. HIPNOSIS Y PODER MENTAL - MACADAMIA"),
          createReferencedPendingEpisode(141, 2, "86. CREENCIAS LIMITANTES - MACADAMIA"),
          createReferencedPendingEpisode(144, 3, "88. MEDITACION PARA MODIFICAR CREENCIAS LIMITANTES - MACADAMIA"),
        ],
      },
      {
        title: "Seccion 3: Experiencia y reto",
        description: "Bloque vivencial y reto del curso.",
        order: 3,
        episodes: [
          createReferencedPendingEpisode(140, 1, "85. TERAPIA DE WIN HOF - MACADAMIA"),
          createReferencedPendingEpisode(142, 2, "87. VIDEO EXPERIENCIAL - MACADAMIA"),
          createReferencedPendingEpisode(146, 3, "90. RETO MACADAMIA"),
        ],
      },
      {
        title: "Seccion 4: Formulas y preguntas poderosas",
        description: "Formulas para el exito, impulso y preguntas poderosas.",
        order: 4,
        episodes: [
          createReferencedPendingEpisode(147, 1, "91. FORMULAS PARA EL EXITO - MACADAMIA"),
          createReferencedPendingEpisode(148, 2, "92. VUELVETE IMPARABLE - MACADAMIA"),
          createReferencedPendingEpisode(149, 3, "93. PREGUNTAS PODEROSAS - MACADAMIA"),
        ],
      },
      {
        title: "Seccion 5: Gratitud y plan de accion",
        description: "Cierre del curso con gratitud y ejecucion.",
        order: 5,
        episodes: [
          createReferencedPendingEpisode(150, 1, "94. MEDITACION DE AGRADECIMIENTO - MACADAMIA"),
          createReferencedPendingEpisode(152, 2, "96. QUE ES UN PLAN DE ACCION? - MACADAMIA"),
          createReferencedPendingEpisode(153, 3, "97. COMO HACER UN PLAN DE ACCION? - MACADAMIA"),
          createReferencedPendingEpisode(154, 4, "98. PODCAST PLAN DE ACCION - MACADAMIA"),
        ],
      },
    ],
  },
  {
    title: "Herramientas, habilidades y cursos complementarios",
    shortDescription:
      "Bloque de herramientas practicas sobre marketing, contenido y otros recursos puntuales.",
    fullDescription:
      "Curso complementario que agrupa piezas tecnicas y herramientas de apoyo para la comunidad.",
    instructor: "Abrakadabra",
    category: "HERRAMIENTAS",
    level: "Abierto",
    coverImage: "/home/brand-home.png",
    status: "published",
    sections: [
      {
        title: "Seccion 1: Marketing y contenido",
        description: "Herramientas practicas de landing pages y edicion.",
        order: 1,
        episodes: [
          createReferencedPendingEpisode(127, 1, "46. COMO CREAR UNA LANDING PAGE DESDE CERO - NATAN NANDEZ"),
          createReferencedPendingEpisode(128, 2, "45. COMO EDITAR UN VIDEO EN ADOBE PREMIERE POR MIGUEL TRUMAN"),
        ],
      },
      {
        title: "Seccion 2: Otros contenidos puntuales",
        description: "Material adicional complementario.",
        order: 2,
        episodes: [
          createReferencedPendingEpisode(192, 1, "HIPNOSIS"),
        ],
      },
    ],
  },
  {
    title: "Rutinas de lectura, Focus Lectura y audios de apoyo",
    shortDescription:
      "Biblioteca de rutinas de lectura, Focus Lectura y microaudios de apoyo.",
    fullDescription:
      "Este curso agrupa las rutinas de lectura principales, bloques Focus Lectura, audios de Andres Henao y microlecturas de apoyo.",
    instructor: "Abrakadabra",
    category: "LECTURA Y APOYO",
    level: "Abierto",
    coverImage: "/home/abrakadabra-p-home.jpg",
    status: "published",
    sections: [
      {
        title: "Seccion 1: Rutinas de lectura principales",
        description: "Coleccion principal de rutinas de lectura.",
        order: 1,
        episodes: [
          createReferencedPendingEpisode(26, 1, "15. RUTINA DE LECTURA #1"),
          createReferencedPendingEpisode(32, 2, "21. RUTINA DE LECTURA #2"),
          createReferencedPendingEpisode(38, 3, "27. RUTINA DE LECTURA #3"),
          createReferencedPendingEpisode(111, 4, "32. RUTINA DE LECTURA #4"),
          createReferencedPendingEpisode(102, 5, "34. RUTINA DE LECTURA #5"),
          createReferencedPendingEpisode(95, 6, "38. RUTINA DE LECTURA #6"),
          createReferencedPendingEpisode(89, 7, "42. RUTINA DE LECTURA #7"),
          createReferencedPendingEpisode(117, 8, "56. RUTINA DE LECTURA #8"),
          createReferencedPendingEpisode(67, 9, "58. RUTINA DE LECTURA #9"),
          createReferencedPendingEpisode(75, 10, "67. RUTINA DE LECTURA #10"),
          createReferencedPendingEpisode(86, 11, "79. RUTINA DE LECTURA #10"),
          createReferencedPendingEpisode(137, 12, "83. RUTINA DE LECTURA #11"),
          createReferencedPendingEpisode(145, 13, "89. RUTINA DE LECTURA #12"),
          createReferencedPendingEpisode(151, 14, "95. RUTINA DE LECTURA #13"),
          createReferencedPendingEpisode(108, 15, "100. RUTINA DE LECTURA #14"),
          createReferencedPendingEpisode(114, 16, "124. RUTINA DE LECTURA #15"),
          createReferencedPendingEpisode(122, 17, "135. RUTINA DE LECTURA #16"),
        ],
      },
      {
        title: "Seccion 2: Focus Lectura",
        description: "Bloque concentrado de Focus Lectura.",
        order: 2,
        episodes: [
          createReferencedPendingEpisode(11, 1, "FOCUS LECTURA #2"),
          createReferencedPendingEpisode(61, 2, "FOCUS LECTURA #4"),
          createReferencedPendingEpisode(103, 3, "FOCUS LECTURA #5"),
        ],
      },
      {
        title: "Seccion 3: Rutinas / audios Andres Henao",
        description: "Rutinas y audios puntuales de Andres Henao.",
        order: 3,
        episodes: [
          createReferencedPendingEpisode(42, 1, "31 RUTINA DE LECTURA ANDRES HENAO"),
          createReferencedPendingEpisode(119, 2, "63 RUTINA DE LECTURA ANDRES HENAO"),
          createReferencedPendingEpisode(125, 3, "48 RUTINA DE LECTURA ANDRES HENAO"),
          createReferencedPendingEpisode(83, 4, "145. RUTINA DE LECTURA FINAL"),
        ],
      },
      {
        title: "Seccion 4: Microlecturas y audios de apoyo",
        description: "Microcontenidos y audios cortos de apoyo.",
        order: 4,
        episodes: [
          createReferencedPendingEpisode(18, 1, "DIA 2 Formula 4 AMC"),
          createReferencedPendingEpisode(19, 2, "DIA 9 Relaciones"),
          createReferencedPendingEpisode(34, 3, "2 3 nunca pares de aprender, la vida no deja de ensenar"),
          createReferencedPendingEpisode(64, 4, "1 6 la practica hace al maestro"),
          createReferencedPendingEpisode(101, 5, "3 7 La lectura te hara libre, el conocimiento te dara poder"),
          createReferencedPendingEpisode(105, 6, "2 1 un lector vive mil veces antes de morir"),
          createReferencedPendingEpisode(129, 7, "2 3 nunca pares de aprender, la vida no deja de ensenar"),
          createReferencedPendingEpisode(132, 8, "2 2 no hay nada mas atractivo para el sexo opuesto"),
          createReferencedPendingEpisode(135, 9, "3 8 te gustaria formarte con grandes lectores"),
          createReferencedPendingEpisode(138, 10, "1 1 introduccion a la lectura"),
        ],
      },
    ],
  },
]

export const courses: Course[] = courseDrafts.map(createCourse)

function validateCourses(courseList: Course[]) {
  const seenSlugs = new Set<string>()

  for (const course of courseList) {
    if (seenSlugs.has(course.slug)) {
      throw new Error(`Slug duplicado detectado: ${course.slug}`)
    }
    seenSlugs.add(course.slug)

    if (course.totalSections !== course.sections.length) {
      throw new Error(`totalSections invalido en ${course.slug}`)
    }

    if (course.totalEpisodes !== countTotalEpisodes(course)) {
      throw new Error(`totalEpisodes invalido en ${course.slug}`)
    }

    if (course.status === "published" && course.sections.length === 0) {
      throw new Error(`Curso publicado sin secciones: ${course.slug}`)
    }

    if (course.status === "coming_soon" && course.sections.length > 0) {
      throw new Error(`Curso coming_soon no debe tener secciones: ${course.slug}`)
    }

    for (const section of course.sections) {
      if (course.status === "published" && section.episodes.length === 0) {
        throw new Error(`Seccion publicada sin episodios: ${course.slug} / ${section.id}`)
      }

      for (const episode of section.episodes) {
        if (course.status === "published" && !episode.youtubeUrl) {
          throw new Error(`Episodio publicado sin youtubeUrl: ${episode.id}`)
        }
      }
    }
  }
}

validateCourses(courses)

export const courseCategories = [
  "Todos",
  ...Array.from(new Set(courses.map((course) => course.category).filter(Boolean))) as string[],
]

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug || course.id === slug)
}

export function getCourseById(id: string) {
  return getCourseBySlug(id)
}

export function getRecommendedCourses(currentCourseSlug: string, limit = 4) {
  return courses
    .filter((course) => course.slug !== currentCourseSlug && course.id !== currentCourseSlug)
    .sort((left, right) => {
      if (left.status === right.status) return 0
      return left.status === "published" ? -1 : 1
    })
    .slice(0, limit)
}
