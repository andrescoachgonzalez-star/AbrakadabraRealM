"use client"

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react"
import { ArrowRight, Check, Mail, Phone, Sparkles, X } from "lucide-react"
import { submitEventSubscriber } from "@/lib/submit-public-form"

const STORAGE_KEY = "abrakadabra-events-subscription-seen"

type FormStatus = "idle" | "loading" | "success" | "error"

export function EventsSubscriptionModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState<FormStatus>("idle")
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  })
  const hasCheckedStorage = useRef(false)

  const rememberDecision = useCallback(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "true")
    } catch {
      // The modal can still be dismissed if storage is unavailable.
    }
  }, [])

  const closeModal = useCallback(() => {
    rememberDecision()
    setIsOpen(false)
  }, [rememberDecision])

  useEffect(() => {
    if (hasCheckedStorage.current) return
    hasCheckedStorage.current = true

    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) {
        const timer = window.setTimeout(() => setIsOpen(true), 650)
        return () => window.clearTimeout(timer)
      }
    } catch {
      const timer = window.setTimeout(() => setIsOpen(true), 650)
      return () => window.clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal()
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [closeModal, isOpen])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("loading")
    setMessage("")

    try {
      await submitEventSubscriber({
        full_name: formData.fullName.trim(),
        email: formData.email.trim(),
        phone_country_code: "+57",
        phone_number: formData.phone.trim(),
        source_page: "events",
      })
      rememberDecision()
      setStatus("success")
      setMessage("Ya estás dentro. Te avisaremos antes que nadie.")
    } catch (error) {
      setStatus("error")
      setMessage(error instanceof Error ? error.message : "No pudimos completar la suscripción.")
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed bottom-4 right-4 z-[100] w-[calc(100%-2rem)] max-w-[26rem] text-white sm:bottom-6 sm:right-6"
      role="dialog"
      aria-modal="false"
      aria-labelledby="events-subscription-title"
    >
      <div className="relative overflow-hidden border border-white/15 bg-[#0b0b0b]/[.97] shadow-[0_20px_70px_rgba(0,0,0,.5)] backdrop-blur-xl">
        <div className="h-1 bg-[#c20d12]" />
        <div className="relative p-5 sm:p-6">
          <button type="button" onClick={closeModal} className="absolute right-3 top-3 rounded-full p-1.5 text-white/40 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#e1282e]" aria-label="Cerrar suscripción">
            <X className="h-4 w-4" />
          </button>

          {status === "success" ? (
            <div className="flex min-h-[220px] flex-col items-center justify-center px-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d9ff20]/40 bg-[#d9ff20]/10 text-[#d9ff20]"><Check className="h-5 w-5" /></div>
              <h2 className="mt-5 font-serif text-3xl leading-none">Bienvenido a la lista.</h2>
              <p className="mt-3 max-w-xs text-xs leading-5 text-white/60">{message}</p>
              <button type="button" onClick={closeModal} className="mt-6 inline-flex min-h-10 items-center gap-2 bg-[#c20d12] px-4 text-[10px] font-semibold uppercase tracking-[.2em] transition-colors hover:bg-[#e1282e]">Listo <ArrowRight className="h-3.5 w-3.5" /></button>
            </div>
          ) : (
            <>
              <div className="pr-7">
                <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.25em] text-[#e1282e]"><Sparkles className="h-3 w-3" /> Acceso anticipado</div>
                <h2 id="events-subscription-title" className="mt-3 font-serif text-3xl leading-[.92] tracking-[-.035em]">¿Quieres saber lo que viene?</h2>
                <p className="mt-3 text-xs leading-5 text-white/60">Próximas fiestas, descuentos y beneficios de Abrakadabra.</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-white/50">
                <span>Eventos</span><span className="text-[#c20d12]">•</span><span>Descuentos</span><span className="text-[#c20d12]">•</span><span>Ventajas</span>
              </div>

              <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                <label className="block"><span className="sr-only">Nombre completo</span><input required minLength={2} maxLength={160} value={formData.fullName} onChange={(event) => setFormData((prev) => ({ ...prev, fullName: event.target.value }))} placeholder="Nombre completo" autoComplete="name" className="h-10 w-full border-b border-white/15 bg-transparent px-0 text-xs text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#e1282e]" /></label>
                <label className="block"><span className="sr-only">Correo electrónico</span><div className="flex items-center gap-2 border-b border-white/15 focus-within:border-[#e1282e]"><Mail className="h-3.5 w-3.5 shrink-0 text-white/35" /><input required type="email" maxLength={255} value={formData.email} onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))} placeholder="Correo electrónico" autoComplete="email" className="h-10 w-full bg-transparent text-xs text-white outline-none placeholder:text-white/35" /></div></label>
                <label className="block"><span className="sr-only">Teléfono</span><div className="flex items-center gap-2 border-b border-white/15 focus-within:border-[#e1282e]"><Phone className="h-3.5 w-3.5 shrink-0 text-white/35" /><span className="text-xs text-white/45">+57</span><input required minLength={4} maxLength={30} inputMode="tel" value={formData.phone} onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))} placeholder="Teléfono" autoComplete="tel" className="h-10 w-full bg-transparent text-xs text-white outline-none placeholder:text-white/35" /></div></label>
                {status === "error" && <p className="text-xs text-[#ff7378]" role="alert">{message}</p>}
                <button type="submit" disabled={status === "loading"} className="group inline-flex min-h-10 w-full items-center justify-center gap-2 bg-[#c20d12] px-4 text-[10px] font-semibold uppercase tracking-[.2em] text-white transition-colors hover:bg-[#e1282e] disabled:cursor-wait disabled:opacity-60">{status === "loading" ? "Registrando..." : "Quiero recibir novedades"}<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></button>
                <p className="text-center text-[9px] leading-4 text-white/30">Usaremos tus datos solo para enviarte novedades y beneficios.</p>
              </form>

              <button type="button" onClick={closeModal} className="mt-3 block w-full text-center text-[9px] uppercase tracking-[.18em] text-white/35 transition-colors hover:text-white">Ahora no</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
