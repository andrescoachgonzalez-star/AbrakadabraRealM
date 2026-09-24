"use client"

import Image from "next/image"
import { ArrowDownRight, ArrowRight, CalendarDays } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { AkashaOrbitalGraphic } from "@/components/akasha/akasha-orbital-graphic"

export function AkashaHero() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    const touch = window.matchMedia("(hover: none), (pointer: coarse)")
    setReady(true)

    if (reduced.matches || touch.matches) return

    const handlePointerMove = (event: PointerEvent) => {
      if (!sceneRef.current) return
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      frameRef.current = requestAnimationFrame(() => {
        sceneRef.current?.style.setProperty("--akasha-pointer-x", `${(x * 12).toFixed(2)}px`)
        sceneRef.current?.style.setProperty("--akasha-pointer-y", `${(y * 12).toFixed(2)}px`)
      })
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      window.removeEventListener("pointermove", handlePointerMove)
    }
  }, [])

  return (
    <section ref={sceneRef} className={`akasha-hero relative isolate min-h-[100svh] overflow-hidden border-b border-white/[0.1] ${ready ? "is-ready" : ""}`}>
      <div className="akasha-hero-glow pointer-events-none absolute inset-0 -z-10" />
      <AkashaOrbitalGraphic />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-between px-5 pb-8 pt-32 sm:px-8 sm:pb-10 lg:px-[5vw] lg:pt-36">
        <div className="flex items-start justify-between gap-6">
          <div className="akasha-hero-fade flex items-center gap-3 text-[#d9ff20]">
            <span className="h-px w-10 bg-[#d9ff20]" aria-hidden="true" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Frequency detected</span>
          </div>
          <div className="akasha-hero-fade text-right font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
            <span className="block text-[#d9ff20]">Sábado</span>
            <span className="mt-1 block">17 OCT 2026</span>
          </div>
        </div>

        <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.52fr)] lg:gap-12 lg:py-8">
          <div className="relative z-10 max-w-none">
            <p className="akasha-hero-fade font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">Abrakadabra Realm / Electronic music</p>
            <h1 className="akasha-display akasha-title-reveal mt-5 origin-left text-[clamp(3.8rem,19vw,9rem)] font-black uppercase leading-[0.78] tracking-[-0.08em] text-[#e9e5d8] lg:whitespace-nowrap lg:text-[clamp(5rem,11.5vw,13rem)]">
              AKASHA
            </h1>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-9">
              <p className="akasha-hero-fade max-w-md text-base leading-relaxed text-white/60 sm:text-lg">La memoria del sonido. El espacio donde la noche se vuelve energía.</p>
              <div className="akasha-hero-fade flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#d9ff20]">
                <span className="h-8 w-px bg-[#d9ff20]/60" aria-hidden="true" />
                <span>Music<br />7PM—4AM</span>
              </div>
            </div>
          </div>

          <div className="akasha-poster-wrap relative mx-auto w-full max-w-[560px] lg:ml-auto">
            <div className="akasha-poster-orbit pointer-events-none absolute -inset-5 border border-[#d9ff20]/25" aria-hidden="true" />
            <div className="akasha-poster-reveal relative aspect-[1325/1187] overflow-hidden border border-[#d9ff20]/50 bg-[#171717]">
              <Image
                src="/events/akasha/agenda-cover.png"
                alt="Portada oficial del evento AKASHA en Baren"
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 94vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:scale-[1.02]"
              />
            </div>
            <div className="akasha-hero-fade mt-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">
              <span>Baren / Medellín</span>
              <span>No cover</span>
            </div>
          </div>
        </div>

        <div className="akasha-hero-fade flex items-end justify-between gap-5">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/40">
            <CalendarDays className="h-4 w-4 text-[#d9ff20]" aria-hidden="true" />
            <span>05 artistas / 01 frecuencia</span>
          </div>
          <a href="#proximamente" className="group inline-flex min-h-11 items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60 transition-colors hover:text-[#d9ff20] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9ff20]">
            Entrar a la frecuencia <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
