"use client"

import { useEffect, useState } from "react"
import { LoaderCircle, LockKeyhole, MailCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { submitCourseLead } from "@/lib/submit-public-form"

const COURSES_EMAIL_SUBMITTED_KEY = "coursesEmailSubmitted"
const COURSES_EMAIL_KEY = "coursesEmail"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function hasStoredCoursesAccess() {
  if (typeof window === "undefined") {
    return false
  }

  return (
    window.localStorage.getItem(COURSES_EMAIL_SUBMITTED_KEY) === "true"
  )
}

export function useCourseAccessGate() {
  const [isCheckingAccess, setIsCheckingAccess] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [hasAccess, setHasAccess] = useState(false)
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const hasAccess = hasStoredCoursesAccess()
    const savedEmail =
      window.localStorage.getItem(COURSES_EMAIL_KEY) || ""

    if (savedEmail) {
      setEmail(savedEmail)
    }

    if (hasAccess) {
      setHasAccess(true)
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }

    setIsCheckingAccess(false)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const normalizedEmail = email.trim().toLowerCase()

    if (!EMAIL_REGEX.test(normalizedEmail)) {
      setError("Ingresa un correo electronico valido para continuar.")
      setSuccessMessage("")
      return
    }

    try {
      setIsSubmitting(true)
      setError("")
      setSuccessMessage("")

      const result = await submitCourseLead({
        email: normalizedEmail,
        source_page: "courses",
      })

      window.localStorage.setItem(
        COURSES_EMAIL_SUBMITTED_KEY,
        "true"
      )
      window.localStorage.setItem(
        COURSES_EMAIL_KEY,
        normalizedEmail
      )

      setEmail(normalizedEmail)
      setSuccessMessage(
        result.already_registered
          ? "Este correo ya estaba registrado. Abriendo cursos..."
          : "Correo registrado con exito. Abriendo cursos..."
      )

      window.setTimeout(() => {
        setHasAccess(true)
        setIsOpen(false)
      }, 500)
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Ocurrio un error al registrar tu correo."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    isCheckingAccess,
    isAccessGranted: hasAccess,
    gate: (
      <Dialog open={isOpen}>
        <DialogContent
          showCloseButton={false}
          className="max-w-xl overflow-hidden rounded-[28px] border border-primary/20 bg-background p-0 shadow-2xl shadow-black/30"
          onEscapeKeyDown={(event) => event.preventDefault()}
          onPointerDownOutside={(event) => event.preventDefault()}
          onInteractOutside={(event) => event.preventDefault()}
        >
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

            <div className="bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] px-6 py-8 sm:px-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                <LockKeyhole className="h-7 w-7" />
              </div>

              <DialogHeader className="text-left">
                <DialogTitle className="font-serif text-3xl font-bold text-foreground">
                  Accede a los cursos gratis
                </DialogTitle>

                <DialogDescription className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Antes de entrar a la biblioteca de cursos, dejanos tu correo
                  para habilitar el acceso en este navegador.
                </DialogDescription>
              </DialogHeader>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-4"
              >
                <div className="space-y-2">
                  <label
                    htmlFor="courses-email"
                    className="text-xs font-semibold uppercase tracking-[0.24em] text-primary"
                  >
                    Correo electronico
                  </label>

                  <Input
                    id="courses-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="tu@correo.com"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value)
                      if (error) {
                        setError("")
                      }
                    }}
                    disabled={isSubmitting}
                    aria-invalid={Boolean(error)}
                    className="h-14 rounded-2xl border-border/70 bg-background/70 px-4 text-base backdrop-blur-sm"
                  />
                </div>

                {error && (
                  <p className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-600">
                    {error}
                  </p>
                )}

                {successMessage && (
                  <p className="flex items-center gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700">
                    <MailCheck className="h-4 w-4 shrink-0" />
                    {successMessage}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 w-full rounded-2xl bg-gradient-to-r from-[oklch(0.55_0.18_20)] to-[oklch(0.45_0.2_10)] text-sm font-bold uppercase tracking-[0.24em] text-white shadow-lg shadow-primary/20 hover:opacity-95"
                >
                  {isSubmitting ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      Guardando acceso...
                    </>
                  ) : (
                    "Entrar a cursos"
                  )}
                </Button>

                <p className="text-center text-xs leading-relaxed text-muted-foreground">
                  Tus cursos seguiran siendo gratis. Solo necesitamos tu correo
                  una vez por navegador.
                </p>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    ),
  }
}
