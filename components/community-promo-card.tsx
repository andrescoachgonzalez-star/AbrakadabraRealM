"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, X } from "lucide-react"

const STORAGE_KEY = "abrakadabra-community-promo-dismissed"

export function CommunityPromoCard() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (window.sessionStorage.getItem(STORAGE_KEY) === "true") {
      return
    }

    const timer = window.setTimeout(() => {
      setIsVisible(true)
    }, 250)

    return () => window.clearTimeout(timer)
  }, [])

  const closePromo = () => {
    window.sessionStorage.setItem(STORAGE_KEY, "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <aside className="fixed right-3 bottom-4 z-30 w-[calc(100vw-5rem)] max-w-[23rem] sm:right-5 sm:bottom-6 sm:w-[19rem] lg:right-8 lg:bottom-8">
      <div className="relative overflow-hidden rounded-[1.4rem] border border-[#9d1111]/35 bg-[#161616]/94 text-white shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:rounded-[1.75rem]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b71c1c] to-transparent" />

        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#c81d25] shadow-[0_0_14px_rgba(200,29,37,0.75)]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/70">
                Comunidad Privada
              </span>
            </div>

            <button
              type="button"
              onClick={closePromo}
              className="rounded-full border border-white/10 p-1.5 text-white/50 transition-colors duration-300 hover:border-white/20 hover:text-white"
              aria-label="Cerrar anuncio de comunidad"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="mt-4">
            <p className="font-serif text-2xl font-bold leading-none tracking-[0.04em] text-white sm:text-3xl">
              REALM
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-[#cb3a3a]">
              conexiones en oportunidades
            </p>
            <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-white/68">
              Entra a la comunidad privada para emprendedores, artistas y creadores.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/comunidad"
              className="group inline-flex items-center gap-2 rounded-full bg-[#b9252c] px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-[#cc3239] hover:shadow-[0_14px_34px_rgba(185,37,44,0.35)]"
            >
              Ver Comunidad
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>

            <span className="text-[11px] uppercase tracking-[0.24em] text-white/38">
              Acceso
            </span>
          </div>
        </div>
      </div>
    </aside>
  )
}
