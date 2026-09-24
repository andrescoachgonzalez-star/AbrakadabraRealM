"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowRight, ArrowUpRight, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"
import { AkashaScrollProgress } from "@/components/akasha/akasha-scroll-progress"
import { LuxuryFooter } from "@/components/luxury-footer"
import { LuxuryHeader } from "@/components/luxury-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { EventsPublicForm } from "@/components/events-public-form"

const CO_WA_NUMBER = "573103920569"
const CO_SMS_NUMBER = "+573103920569"
const US_WA_NUMBER = "19175475787"
const US_SMS_NUMBER = "+19175475787"

const featuredEvents = [
  {
    title: "AKASHA",
    eyebrow: "Próximamente · Abrakadabra Realm",
    description:
      "Música electrónica, coctelería en Baren y mini burgers durante la fiesta. Girls First: primera ronda gratis para grupos de ellas.",
    image: "/events/akasha/agenda-cover.png",
    href: "/events/akasha",
    date: "Sábado 17 de octubre",
    status: "Próximamente",
    accent: "lime",
    label: "Descubrir AKASHA",
  },
  {
    title: "ARKANA",
    eyebrow: "Para la historia · Archivo Abrakadabra",
    description:
      "Camzz, 8batzz, Mausa y Esteban Arenas orbitando una noche de música electrónica, visuales naranjas y código propio en El Poblado.",
    image: "/events/arkana/main.png",
    href: "/events/arkana",
    date: "22 de agosto · 9PM — 4AM",
    status: "Para la historia",
    accent: "orange",
    label: "Ver el archivo",
  },
] as const

function accentClasses(accent: (typeof featuredEvents)[number]["accent"]) {
  return accent === "lime"
    ? {
        text: "text-[#d9ff20]",
        line: "bg-[#d9ff20]",
        border: "border-[#d9ff20]/35 hover:border-[#d9ff20]/75",
        focus: "focus-visible:ring-[#d9ff20]",
      }
    : {
        text: "text-[#f05a22]",
        line: "bg-[#f05a22]",
        border: "border-[#f05a22]/30 hover:border-[#f05a22]/70",
        focus: "focus-visible:ring-[#f05a22]",
      }
}

function ContactLink({
  href,
  children,
  tone = "outline",
  external = false,
}: {
  href: string
  children: React.ReactNode
  tone?: "outline" | "whatsapp" | "sms"
  external?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex min-h-11 items-center justify-center gap-3 border px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] transition-[background-color,border-color,color,transform] duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]",
        tone === "whatsapp" && "border-[#c20d12] bg-[#c20d12] text-white hover:bg-[#e1282e] focus-visible:ring-[#e1282e]",
        tone === "sms" && "border-white/15 bg-white/[0.03] text-white/75 hover:border-white/35 hover:text-white focus-visible:ring-white/70",
        tone === "outline" && "border-white/15 text-white/65 hover:border-[#c20d12]/70 hover:text-white focus-visible:ring-[#c20d12]"
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </a>
  )
}

export default function EventsPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="events-page min-h-screen overflow-x-hidden bg-[#050505] text-[#f3f0ec]">
      <AkashaScrollProgress accentColor="#c20d12" />
      <LuxuryHeader />

      <section className="relative flex min-h-[min(900px,100svh)] items-end overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80"
            alt="Atmósfera nocturna de un evento musical"
            className={cn(
              "h-full w-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(.22,1,.36,1)]",
              isLoaded ? "scale-100" : "scale-110"
            )}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,.3),rgba(5,5,5,.72)_58%,#050505)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(194,13,18,.2),transparent_34%)]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-20 pt-44 sm:px-8 lg:px-[6vw] lg:pb-28">
          <div className="max-w-4xl">
            <div className={cn("events-fade-in", isLoaded && "is-visible")}>
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-[#c20d12]" aria-hidden="true" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e1282e]">
                  Abrakadabra Realm · Agenda
                </span>
              </div>
            </div>

            <h1 className={cn("events-fade-in events-fade-in-delay-1 mt-8 max-w-5xl font-serif text-[clamp(4rem,11vw,10rem)] font-medium leading-[.78] tracking-[-.07em] text-[#f3f0ec]", isLoaded && "is-visible")}>
              <span className="block">Noches</span>
              <span className="block italic text-[#c20d12]">que dejan huella.</span>
            </h1>

            <p className={cn("events-fade-in events-fade-in-delay-2 mt-10 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg", isLoaded && "is-visible")}>
              Frecuencias, encuentros y experiencias creadas alrededor de la música. Descubre lo que viene y vuelve a entrar en nuestra historia.
            </p>

            <div className={cn("events-fade-in events-fade-in-delay-3 mt-10 flex flex-wrap gap-3", isLoaded && "is-visible")}>
              <a href="#agenda" className="group inline-flex min-h-12 items-center gap-3 bg-[#c20d12] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#e1282e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e1282e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]">
                Ver eventos destacados
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a href="/events/agenda" className="group inline-flex min-h-12 items-center gap-3 border border-white/25 px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75 transition-[border-color,color,transform] duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]">
                Explorar agenda completa
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-20 flex items-end justify-between border-t border-white/[0.1] pt-5 text-[10px] uppercase tracking-[0.24em] text-white/40">
            <span>01 / Frecuencias</span>
            <span className="hidden sm:inline">Scroll para entrar</span>
          </div>
        </div>
      </section>

      <section id="agenda" className="relative scroll-mt-24 overflow-hidden bg-[#080808] py-24 sm:py-32 lg:py-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_24%,rgba(194,13,18,.12),transparent_28%),radial-gradient(circle_at_88%_75%,rgba(240,90,34,.08),transparent_30%)]" />
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[6vw]">
          <ScrollReveal>
            <div className="flex flex-col gap-7 border-b border-white/[0.1] pb-10 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-[#c20d12]" aria-hidden="true" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e1282e]">Agenda Abrakadabra</span>
                </div>
                <h2 className="mt-6 max-w-4xl font-serif text-[clamp(3rem,7vw,7rem)] font-medium leading-[.84] tracking-[-.055em] text-[#f3f0ec]">
                  Próximamente <span className="italic text-[#c20d12]">y para la historia.</span>
                </h2>
              </div>
              <p className="max-w-sm text-base leading-relaxed text-white/50 lg:pb-2">
                Dos entradas seleccionadas para poner la próxima frecuencia y las noches que ya dejaron huella en el centro de la experiencia.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {featuredEvents.map((event, index) => {
              const accent = accentClasses(event.accent)

              return (
                <ScrollReveal key={event.title} delay={index * 100} className="h-full">
                  <a
                    href={event.href}
                    aria-label={`Abrir página del evento ${event.title}`}
                    className={cn("group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-[#080808]", accent.focus)}
                  >
                    <article className={cn("flex h-full flex-col border bg-[#0c0c0c] transition-[border-color,transform] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-1", accent.border)}>
                      <div className="relative aspect-[1325/1187] overflow-hidden bg-[#111]">
                        <Image
                          src={event.image}
                          alt={`Portada oficial de ${event.title}`}
                          fill
                          sizes="(min-width: 1024px) 42vw, 100vw"
                          className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.025]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/5" />
                        <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-4 sm:left-7 sm:right-7 sm:top-7">
                          <span className={cn("border bg-black/60 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm", accent.border)}>{event.status}</span>
                          <span className="font-mono text-[10px] tracking-[0.2em] text-white/65">0{index + 1}</span>
                        </div>
                        <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                          <span className={cn("inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em]", accent.text)}>
                            <span className={cn("h-px w-7", accent.line)} aria-hidden="true" />
                            {event.date}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-6 sm:p-8">
                        <div className="flex items-start justify-between gap-5">
                          <div className="min-w-0">
                            <p className={cn("text-[10px] font-semibold uppercase tracking-[0.24em]", accent.text)}>{event.eyebrow}</p>
                            <h3 className="mt-4 break-words font-sans text-5xl font-black uppercase leading-[.84] tracking-[-.07em] text-[#f1eee7] sm:text-6xl">{event.title}</h3>
                          </div>
                          <span className={cn("mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-transform duration-500 group-hover:rotate-45", accent.border)} aria-hidden="true">
                            <ArrowUpRight className={cn("h-5 w-5", accent.text)} />
                          </span>
                        </div>
                        <div className={cn("mt-7 h-px w-16", accent.line)} />
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/58">{event.description}</p>
                        <span className={cn("mt-auto inline-flex min-h-11 items-center gap-3 pt-8 text-[10px] font-semibold uppercase tracking-[0.24em]", accent.text)}>
                          {event.label}
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                        </span>
                      </div>
                    </article>
                  </a>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal delay={240}>
            <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-white/[0.1] pt-7 sm:flex-row sm:items-center">
              <p className="max-w-lg text-sm leading-relaxed text-white/45">¿Quieres descubrir todas las frecuencias, incluidas las que ya hacen parte del archivo?</p>
              <a href="/events/agenda" className="group inline-flex min-h-11 items-center gap-3 border-b border-[#c20d12]/60 pb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/75 transition-colors duration-300 hover:border-[#e1282e] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e1282e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#080808]">
                Abrir toda la agenda
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="contacto" className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.08] bg-[#050505] py-24 sm:py-32 lg:py-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,rgba(194,13,18,.14),transparent_32%)]" />
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[6vw]">
          <ScrollReveal>
            <div className="mb-14 flex flex-col gap-6 border-b border-white/[0.1] pb-10 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-[#c20d12]" aria-hidden="true" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e1282e]">Contacto</span>
                </div>
                <h2 className="mt-6 max-w-3xl font-serif text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[.86] tracking-[-.055em] text-[#f3f0ec]">Hagamos la próxima <span className="italic text-[#c20d12]">noche.</span></h2>
              </div>
              <p className="max-w-sm text-base leading-relaxed text-white/50 lg:pb-2">Si quieres crear una experiencia, colaborar o conocer más de nuestros eventos, escríbenos.</p>
            </div>
          </ScrollReveal>

          <EventsPublicForm
            id="events-form"
            variant="noir"
            title="Cuéntanos tu idea"
            subtitle="Responderemos con la misma atención que ponemos en cada detalle de la experiencia."
            submitLabel="ENVIAR MENSAJE"
          />

          <ScrollReveal delay={160}>
            <div className="mt-16 grid gap-8 border-t border-white/[0.1] pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">Canales directos</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <ContactLink href={`https://wa.me/${CO_WA_NUMBER}`} tone="whatsapp" external>WhatsApp Colombia</ContactLink>
                  <ContactLink href={`sms:${CO_SMS_NUMBER}`} tone="sms">SMS Colombia</ContactLink>
                  <ContactLink href={`https://wa.me/${US_WA_NUMBER}`} tone="outline" external>WhatsApp USA</ContactLink>
                  <ContactLink href={`sms:${US_SMS_NUMBER}`} tone="outline">SMS USA</ContactLink>
                </div>
              </div>
              <a href="https://www.instagram.com/abrakadabrarealm/" target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-11 items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e1282e] focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505]">
                <Instagram className="h-4 w-4 text-[#e1282e]" aria-hidden="true" />
                @abrakadabrarealm
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <LuxuryFooter />
    </main>
  )
}
