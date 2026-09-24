"use client"

import Image from "next/image"
import { ArrowDownRight, ArrowUpRight, CalendarDays, MapPin } from "lucide-react"
import { useEffect, useState, type CSSProperties, type PointerEvent } from "react"
import { LuxuryHeader } from "@/components/luxury-header"

export function ExquisiteHero() {
  const [isReady, setIsReady] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [pointer, setPointer] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)
    updatePreference()
    mediaQuery.addEventListener?.("change", updatePreference)
    const timeout = window.setTimeout(() => setIsReady(true), 80)

    return () => {
      window.clearTimeout(timeout)
      mediaQuery.removeEventListener?.("change", updatePreference)
    }
  }, [])

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (prefersReducedMotion || event.pointerType !== "mouse") return
    setPointer({
      x: (event.clientX / window.innerWidth) * 100,
      y: (event.clientY / window.innerHeight) * 100,
    })
  }

  const style = {
    "--exquisite-pointer-x": `${pointer.x}%`,
    "--exquisite-pointer-y": `${pointer.y}%`,
  } as CSSProperties

  return (
    <section
      className={`exquisite-hero relative isolate overflow-hidden border-b border-[#d99548]/15 ${isReady ? "is-ready" : ""}`}
      style={style}
      onPointerMove={handlePointerMove}
      aria-labelledby="exquisite-title"
    >
      <LuxuryHeader accentColor="#d99548" />

      <div className="exquisite-hero-light pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_42%,rgba(195,107,40,0.22),transparent_28%),linear-gradient(105deg,#080706_12%,rgba(8,7,6,0.72)_55%,rgba(36,19,13,0.24))]" aria-hidden="true" />

      <div className="mx-auto grid min-h-[clamp(760px,100svh,1050px)] max-w-[1600px] items-center gap-12 px-5 pb-14 pt-32 sm:px-8 sm:pb-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(390px,0.72fr)] lg:gap-20 lg:px-[6vw] lg:pt-40">
        <div className="relative z-10 max-w-[820px]">
          <div className="exquisite-fade-in flex items-center gap-3 text-[#d99548]">
            <span className="h-px w-10 bg-[#d99548]" aria-hidden="true" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.32em]">Archivo / Abrakadabra Realm</span>
          </div>

          <p className="exquisite-fade-in mt-9 text-[10px] uppercase tracking-[0.3em] text-[#f0e7d8]/45">EVENT / 003 · NEW YORK</p>
          <h1 id="exquisite-title" className="exquisite-title mt-5 font-sans text-[clamp(2.75rem,15vw,9.8rem)] font-light uppercase leading-[0.82] tracking-[0.08em] text-[#f0e7d8] sm:text-[clamp(3.25rem,9.5vw,9.8rem)] sm:tracking-[0.12em]">
            <span className="block">Exquisite</span>
            <span className="block text-[#d99548]">Night</span>
          </h1>

          <p className="exquisite-fade-in mt-9 max-w-xl font-serif text-[clamp(1.35rem,2.6vw,2.5rem)] italic leading-[1.08] text-[#f0e7d8]/80">
            Arte clásico, house y techno en una noche que quedó para la historia.
          </p>

          <div className="exquisite-fade-in mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[10px] font-medium uppercase tracking-[0.24em] text-[#f0e7d8]/55 sm:text-xs">
            <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-[#d99548]" aria-hidden="true" />Jueves · 9 de marzo</span>
            <span className="hidden text-[#d99548] sm:inline" aria-hidden="true">/</span>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#d99548]" aria-hidden="true" />Russian Samovar · New York</span>
          </div>

          <div className="exquisite-fade-in mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#lineup" className="group inline-flex min-h-12 items-center justify-center gap-3 border border-[#d99548]/70 bg-[#d99548] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#080706] transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#f0e7d8] hover:bg-[#f0e7d8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d99548] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080706]">
              Ver la frecuencia <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <a href="/events/agenda" className="inline-flex min-h-12 items-center justify-center gap-3 border border-[#f0e7d8]/25 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f0e7d8]/75 transition-[border-color,color] duration-300 hover:border-[#d99548] hover:text-[#f0e7d8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d99548] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080706]">
              Volver a la agenda
            </a>
          </div>
        </div>

        <div className="exquisite-poster-reveal relative z-10 mx-auto w-full max-w-[560px] lg:ml-auto">
          <div className="absolute -left-5 -top-5 h-24 w-24 border-l border-t border-[#d99548]/65" aria-hidden="true" />
          <div className="absolute -bottom-5 -right-5 h-24 w-24 border-b border-r border-[#d99548]/45" aria-hidden="true" />
          <div className="relative aspect-[43/52] overflow-hidden border border-[#d99548]/40 bg-[#24130d] shadow-[0_24px_80px_rgba(0,0,0,0.42)]">
            <Image
              src="/events/exquisite-night/poster-clean.png"
              alt="Afiche de Exquisite Night con Pablo Lorenzo, Romero Slider, Joseph Ren y Andrea Kingtero Perez"
              fill
              priority
              sizes="(min-width: 1024px) 36vw, 88vw"
              className="object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(8,7,6,0.35)),linear-gradient(90deg,rgba(8,7,6,0.12),transparent_45%,rgba(8,7,6,0.28))]" aria-hidden="true" />
          </div>
          <div className="mt-4 flex items-center justify-between text-[9px] uppercase tracking-[0.25em] text-[#f0e7d8]/35">
            <span>EXQUISITE / 003</span>
            <span>Archivo visual</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 pb-6 text-[9px] uppercase tracking-[0.28em] text-[#f0e7d8]/35 sm:px-8 lg:px-[6vw]">
        <span>Static / editorial / night</span>
        <a href="#intro" className="group inline-flex min-h-11 items-center gap-2 transition-colors hover:text-[#d99548] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d99548]">
          Enter the archive <ArrowDownRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
