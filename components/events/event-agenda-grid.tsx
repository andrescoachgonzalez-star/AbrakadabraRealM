"use client"

import Image from "next/image"
import { ArrowUpRight, CalendarDays, Clock3, MapPin, Music2 } from "lucide-react"
import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { agendaEvents, type AgendaEvent, type EventStatus } from "@/lib/events-agenda"
import { ScrollReveal } from "@/components/scroll-reveal"

type Filter = "all" | EventStatus

const filters: Array<{ value: Filter; label: string }> = [
  { value: "all", label: "Todos" },
  { value: "upcoming", label: "Próximamente" },
  { value: "archive", label: "Para la historia" },
]

function accentClasses(event: AgendaEvent) {
  if (event.accent === "copper") {
    return {
      line: "bg-[#d99548]",
      text: "text-[#d99548]",
      border: "border-[#d99548]/35 hover:border-[#d99548]/70",
      glow: "bg-[#d99548]/10",
    }
  }

  return event.accent === "lime"
    ? {
        line: "bg-[#d9ff20]",
        text: "text-[#d9ff20]",
        border: "border-[#d9ff20]/35 hover:border-[#d9ff20]/70",
        glow: "bg-[#d9ff20]/10",
      }
    : {
        line: "bg-[#f05a22]",
        text: "text-[#f05a22]",
        border: "border-[#f05a22]/25 hover:border-[#f05a22]/65",
        glow: "bg-[#f05a22]/10",
      }
}

function EventCard({ event, index }: { event: AgendaEvent; index: number }) {
  const accent = accentClasses(event)

  return (
    <ScrollReveal delay={index * 70} className="h-full">
      <a href={`/events/${event.slug}`} className="group block h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c20d12] focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505]" aria-label={`Abrir evento ${event.title}`}>
        <article className={cn("flex h-full flex-col border bg-[#0b0b0b] transition-[border-color,transform] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-1", accent.border)}>
          <div className="relative aspect-[1325/1187] overflow-hidden bg-[#141414]">
            <Image
              src={event.image}
              alt={event.slug === "akasha" ? "Afiche oficial de AKASHA con la fecha, lineup, mini burgers y cócteles" : `Portada oficial del evento ${event.title}`}
              fill
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/5" />
            <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3 sm:left-5 sm:right-5 sm:top-5">
              <span className={cn("border bg-black/65 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm", accent.border)}>
                {event.statusLabel}
              </span>
              <span className="font-mono text-[10px] tracking-[0.18em] text-white/65">0{index + 1}</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
              <span className={cn("inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em]", accent.text)}>
                <span className={cn("h-px w-6", accent.line)} aria-hidden="true" />
                {event.dateShort}
              </span>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <p className={cn("text-[10px] font-semibold uppercase tracking-[0.24em]", accent.text)}>{event.genre}</p>
              <h2 className="mt-3 break-words font-sans text-4xl font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#f1eee7] sm:text-5xl">{event.title}</h2>
            </div>
            <span className={cn("mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border", accent.border)} aria-hidden="true">
              <ArrowUpRight className={cn("h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5", accent.text)} />
            </span>
          </div>

          <div className={cn("mt-5 h-px w-14", accent.line)} />
          <p className="mt-5 text-sm leading-relaxed text-white/55">{event.description}</p>

          <dl className="mt-6 space-y-3 border-t border-white/[0.08] pt-5 text-[11px] uppercase tracking-[0.12em] text-white/55">
            <div className="flex items-start gap-3"><CalendarDays className={cn("mt-0.5 h-4 w-4 shrink-0", accent.text)} aria-hidden="true" /><dd>{event.date}</dd></div>
            <div className="flex items-start gap-3"><MapPin className={cn("mt-0.5 h-4 w-4 shrink-0", accent.text)} aria-hidden="true" /><dd>{event.venue} · {event.location}</dd></div>
            <div className="flex items-start gap-3"><Clock3 className={cn("mt-0.5 h-4 w-4 shrink-0", accent.text)} aria-hidden="true" /><dd>{event.time}</dd></div>
          </dl>

          <div className="mt-auto pt-6">
            <p className="flex items-start gap-3 text-xs leading-relaxed text-white/45"><Music2 className={cn("mt-0.5 h-4 w-4 shrink-0", accent.text)} aria-hidden="true" /><span>{event.artists.join(" · ")}</span></p>
            <span className={cn("mt-6 inline-flex min-h-11 items-center gap-3 border-b pb-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition-colors duration-300", accent.text, accent.border)}>
              Ver evento <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
          </div>
        </article>
      </a>
    </ScrollReveal>
  )
}

export function EventAgendaGrid() {
  const [filter, setFilter] = useState<Filter>("all")
  const visibleEvents = useMemo(() => filter === "all" ? agendaEvents : agendaEvents.filter((event) => event.status === filter), [filter])

  return (
    <section aria-label="Listado de eventos" className="mx-auto max-w-[1440px] px-5 pb-28 sm:px-8 sm:pb-36 lg:px-[6vw]">
      <div className="flex flex-col gap-6 border-y border-white/[0.1] py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">{visibleEvents.length} {visibleEvents.length === 1 ? "frecuencia" : "frecuencias"}</p>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar eventos">
          {filters.map((item) => {
            const active = filter === item.value
            return (
              <button
                key={item.value}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(item.value)}
                className={cn("min-h-11 rounded-full border px-4 text-[10px] font-semibold uppercase tracking-[0.18em] transition-[background-color,border-color,color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c20d12] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]", active ? "border-[#c20d12]/70 bg-[#c20d12] text-white" : "border-white/15 text-white/55 hover:border-white/35 hover:text-white")}
              >
                {item.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {visibleEvents.map((event, index) => <EventCard key={event.slug} event={event} index={index} />)}
      </div>
    </section>
  )
}
