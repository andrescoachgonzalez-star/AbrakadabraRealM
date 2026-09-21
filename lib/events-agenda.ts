export type EventStatus = "upcoming" | "archive"

export type AgendaEvent = {
  slug: string
  title: string
  status: EventStatus
  statusLabel: string
  date: string
  dateShort: string
  image: string
  venue: string
  location: string
  time: string
  genre: string
  artists: string[]
  description: string
  accent: "lime" | "orange"
}

export const agendaEvents: AgendaEvent[] = [
  {
    slug: "akasha",
    title: "AKASHA",
    status: "upcoming",
    statusLabel: "Próximamente",
    date: "Sábado 17 de octubre de 2026",
    dateShort: "17 OCT 26",
    image: "/events/akasha/agenda-cover.png",
    venue: "Baren · El bar de la buena música",
    location: "CRR 38 N 10-13",
    time: "7PM — 4AM",
    genre: "Música electrónica",
    artists: ["Esteban Arenas", "8batzz", "Camzz", "Reed Beard", "Axelh"],
    description: "Coctelería a la venta en Baren y mini burgers durante la fiesta. Girls First: primera ronda gratis para grupos de ellas.",
    accent: "lime",
  },
  {
    slug: "arkana",
    title: "ARKANA",
    status: "archive",
    statusLabel: "Para la historia",
    date: "Viernes 22 de agosto",
    dateShort: "22 AGO",
    image: "/events/arkana/main.png",
    venue: "El Poblado",
    location: "Medellín",
    time: "9PM — 4AM",
    genre: "Música electrónica",
    artists: ["Camzz", "8batzz", "Mausa", "Esteban Arenas"],
    description: "Una noche orbital de música electrónica, visuales naranjas y código propio.",
    accent: "orange",
  },
]

export const upcomingEvents = agendaEvents.filter((event) => event.status === "upcoming")
export const archivedEvents = agendaEvents.filter((event) => event.status === "archive")
