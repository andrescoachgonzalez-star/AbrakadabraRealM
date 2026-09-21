"use client"

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react"
import { motion } from "framer-motion"
import { ChevronDown, Search } from "lucide-react"
import { submitPublicForm } from "@/lib/submit-public-form"

type EventsPublicFormProps = {
  id?: string
  title?: string
  subtitle?: string
  submitLabel?: string
  variant?: "default" | "noir" | "akasha"
  mode?: "inquiry" | "attendance"
}

type FormStatus = "idle" | "loading" | "success" | "error"

type CountryCode = {
  name: string
  code: string
  iso2: string
  flag: string
}

const FALLBACK_COUNTRIES: CountryCode[] = [
  { name: "Colombia", code: "+57", iso2: "CO", flag: "🇨🇴" },
  { name: "United States", code: "+1", iso2: "US", flag: "🇺🇸" },
  { name: "Canada", code: "+1", iso2: "CA", flag: "🇨🇦" },
  { name: "Mexico", code: "+52", iso2: "MX", flag: "🇲🇽" },
  { name: "Spain", code: "+34", iso2: "ES", flag: "🇪🇸" },
  { name: "United Kingdom", code: "+44", iso2: "GB", flag: "🇬🇧" },
]

const EVENT_TYPE_OPTIONS = [
  "Corporativo",
  "Evento privado",
  "Evento público",
  "Festival / show en vivo",
  "Producción audiovisual",
  "Colaboración con organizador",
  "Otro",
]

const AKASHA_ATTENDANCE_EVENT = "Asistencia a AKASHA"
const AKASHA_ATTENDANCE_DESCRIPTION =
  "Registro de asistencia a AKASHA desde la página del evento."

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
}

export function EventsPublicForm({
  id = "events-form",
  title = "Plan your next experience",
  subtitle = "Tell us about your event",
  submitLabel = "SEND REQUEST",
  variant = "default",
  mode = "inquiry",
}: EventsPublicFormProps) {
  const isAkasha = variant === "akasha"
  const isNoir = variant === "noir" || isAkasha
  const accent = isAkasha ? "#d9ff20" : "#c20d12"
  const isAttendance = mode === "attendance"
  const countryDropdownRef = useRef<HTMLDivElement>(null)

  const [countries, setCountries] = useState<CountryCode[]>(FALLBACK_COUNTRIES)
  const [countrySearch, setCountrySearch] = useState("")
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const [isLoadingCountries, setIsLoadingCountries] = useState(true)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCountryCode: "+57",
    selectedCountryIso: "CO",
    phoneNumber: "",
    eventType: "",
    socialNetworks: "",
    description: "",
  })

  const [status, setStatus] = useState<FormStatus>("idle")
  const [message, setMessage] = useState("")

  const selectedCountry = useMemo(() => {
    return (
      countries.find(
        (country) =>
          country.iso2 === formData.selectedCountryIso &&
          country.code === formData.phoneCountryCode
      ) ||
      countries.find((country) => country.iso2 === formData.selectedCountryIso) ||
      countries.find((country) => country.code === formData.phoneCountryCode) ||
      FALLBACK_COUNTRIES[0]
    )
  }, [countries, formData.phoneCountryCode, formData.selectedCountryIso])

  const filteredCountries = useMemo(() => {
    const query = normalizeText(countrySearch)
    const numericQuery = countrySearch.replace(/[^\d+]/g, "")
    const numericQueryWithoutPlus = numericQuery.replace("+", "")

    if (!query && !numericQuery) {
      return countries
    }

    return countries.filter((country) => {
      const countryName = normalizeText(country.name)
      const countryIso = normalizeText(country.iso2)
      const countryCode = country.code
      const countryCodeWithoutPlus = country.code.replace("+", "")

      const matchesName = query ? countryName.includes(query) : false
      const matchesIso = query ? countryIso.includes(query) : false
      const matchesCode = numericQuery
        ? countryCode.includes(numericQuery) ||
          countryCodeWithoutPlus.includes(numericQueryWithoutPlus)
        : false

      return matchesName || matchesIso || matchesCode
    })
  }, [countries, countrySearch])

  useEffect(() => {
    const getCountryCodes = async () => {
      try {
        const response = await fetch("/api/country-codes", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })

        if (!response.ok) {
          throw new Error("Could not load country codes")
        }

        const data = (await response.json()) as CountryCode[]

        if (Array.isArray(data) && data.length > 0) {
          setCountries(data)

          const colombia = data.find(
            (country) => country.iso2 === "CO" && country.code === "+57"
          )

          if (colombia) {
            setFormData((prev) => ({
              ...prev,
              phoneCountryCode: colombia.code,
              selectedCountryIso: colombia.iso2,
            }))
          }
        }
      } catch (error) {
        console.error("Country codes error:", error)
        setCountries(FALLBACK_COUNTRIES)
      } finally {
        setIsLoadingCountries(false)
      }
    }

    getCountryCodes()
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectCountry = (country: CountryCode) => {
    setFormData((prev) => ({
      ...prev,
      phoneCountryCode: country.code,
      selectedCountryIso: country.iso2,
    }))

    setCountrySearch("")
    setIsCountryDropdownOpen(false)
  }

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneCountryCode: "+57",
      selectedCountryIso: "CO",
      phoneNumber: "",
      eventType: "",
      socialNetworks: "",
      description: "",
    })

    setCountrySearch("")
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setMessage("")

    try {
      await submitPublicForm({
        form_type: "events",
        first_name: formData.firstName.trim(),
        last_name: formData.lastName.trim(),
        email: formData.email.trim(),
        phone_country_code: formData.phoneCountryCode,
        phone_number: formData.phoneNumber.trim(),
        interest: "Eventos",
        description:
          formData.description.trim() ||
          (isAttendance ? AKASHA_ATTENDANCE_DESCRIPTION : ""),
        event_type: isAttendance
          ? AKASHA_ATTENDANCE_EVENT
          : formData.eventType.trim(),
        social_networks: formData.socialNetworks.trim() || undefined,
      })

      setStatus("success")
      setMessage(
        isAttendance
          ? "¡Listo! Te contactaremos con los detalles para unirte a AKASHA."
          : isNoir
            ? "Tu solicitud fue enviada correctamente."
            : "Your request was sent successfully."
      )
      resetForm()
    } catch (error) {
      console.error("Events public form error:", error)
      setStatus("error")
      setMessage(
        isAttendance
          ? "Hubo un error al registrarte. Inténtalo de nuevo."
          : isNoir
            ? "Hubo un error al enviar tu solicitud. Inténtalo de nuevo."
            : "There was an error sending your request. Please try again."
      )
    }
  }

  const fieldClass = isNoir
    ? `w-full border-0 border-b border-white/12 bg-transparent px-0 py-3.5 text-base text-white placeholder:text-white/35 transition-colors focus:outline-none focus:ring-0 ${isAkasha ? "akasha-form-field" : ""}`
    : "w-full rounded-lg border border-black/20 px-5 py-3.5 text-sm text-black placeholder:text-black/40 transition-colors focus:border-[oklch(0.55_0.18_20)] focus:outline-none"
  const labelClass = isNoir
    ? "mb-2 block text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55"
    : "sr-only"
  const selectClass = isNoir
    ? `w-full border-0 border-b border-white/12 bg-transparent px-0 py-3.5 text-base text-white transition-colors focus:outline-none focus:ring-0 ${isAkasha ? "akasha-form-field" : ""}`
    : "w-full rounded-lg border border-black/20 bg-white px-5 py-3.5 text-sm text-black transition-colors focus:border-[oklch(0.55_0.18_20)] focus:outline-none"

  return (
    <section
      id={id}
      className={isNoir ? "relative overflow-hidden bg-[#070707] py-24 lg:py-32 scroll-mt-24" : "overflow-hidden bg-white py-24 lg:py-32 scroll-mt-24"}
    >
      {isNoir && <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(circle at 80% 40%, ${isAkasha ? "rgba(217,255,32,0.1)" : "rgba(194,13,18,0.12)"}, transparent 38%)` }} />}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={isNoir ? "grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start" : "mx-auto max-w-3xl"}
        >
          <div className={isNoir ? "max-w-md" : "mb-10 text-center"}>
            <span className={isNoir ? "inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em]" : "inline-block rounded-full bg-[oklch(0.55_0.18_20)]/10 px-4 py-1.5 text-xs font-semibold tracking-[0.3em] text-[oklch(0.55_0.18_20)]"} style={isNoir ? { color: accent } : undefined}>
              {isNoir && <span className="h-px w-10" style={{ backgroundColor: accent }} />}
                {isAttendance ? "Únete a AKASHA" : isNoir ? "Hablemos" : "EVENTS"}
            </span>

            <h2 className={isNoir ? "mt-6 font-serif text-5xl font-bold leading-[0.92] text-[#f3f0ec] sm:text-6xl" : "mt-5 font-serif text-4xl font-bold text-black md:text-5xl"}>
              {title}
            </h2>

            <p className={isNoir ? "mt-6 max-w-md text-base leading-relaxed text-white/60" : "mx-auto mt-4 max-w-xl text-black/50"}>
              {subtitle}
            </p>

            {isNoir && (
              <div className="mt-10 hidden border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.24em] text-white/35 lg:block">
                {isAttendance
                  ? "Te enviaremos la información de acceso y los detalles de la noche directamente a tu correo."
                  : "Responderemos a tu mensaje con la misma atención que ponemos en cada detalle de la experiencia."}
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className={isNoir ? "space-y-7 rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-6 md:p-10" : "space-y-4 rounded-3xl border border-black/10 bg-white p-6 shadow-2xl shadow-black/5 md:p-10"}
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor={`${id}-firstName`} className={labelClass}>Nombre</label>
                <input id={`${id}-firstName`} type="text" name="firstName" placeholder={isNoir ? "Tu nombre" : "First Name"} value={formData.firstName} onChange={handleChange} required autoComplete="given-name" className={fieldClass} />
              </div>

              <div>
                <label htmlFor={`${id}-lastName`} className={labelClass}>Apellido</label>
                <input id={`${id}-lastName`} type="text" name="lastName" placeholder={isNoir ? "Tu apellido" : "Last Name"} value={formData.lastName} onChange={handleChange} required autoComplete="family-name" className={fieldClass} />
              </div>
            </div>

            <div>
              <label htmlFor={`${id}-email`} className={labelClass}>Correo electrónico</label>
              <input id={`${id}-email`} type="email" name="email" placeholder={isNoir ? "tu@email.com" : "Email Address"} value={formData.email} onChange={handleChange} required autoComplete="email" className={fieldClass} />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-[190px_1fr]">
              <div ref={countryDropdownRef} className="relative">
                <label htmlFor={`${id}-country`} className={labelClass}>País</label>
                <button
                  id={`${id}-country`}
                  type="button"
                  onClick={() => setIsCountryDropdownOpen((prev) => !prev)}
                  aria-expanded={isCountryDropdownOpen}
                  aria-haspopup="listbox"
                  className={isNoir ? `flex min-h-11 w-full items-center justify-between border-0 border-b border-white/12 bg-transparent px-0 py-3.5 text-left text-base text-white transition-colors focus:outline-none focus-visible:ring-2 ${isAkasha ? "focus-visible:ring-[#d9ff20]" : "focus-visible:ring-[#e1282e]"}` : "flex w-full items-center justify-between rounded-lg border border-black/20 bg-white px-4 py-3.5 text-left text-sm text-black transition-colors focus:border-[oklch(0.55_0.18_20)] focus:outline-none"}
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <span>{selectedCountry.flag}</span>
                    <span className="truncate font-medium">
                      {selectedCountry.code}
                    </span>
                    <span className={isNoir ? "truncate text-white/50" : "truncate text-black/50"}>
                      {selectedCountry.iso2}
                    </span>
                  </span>

                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform ${
                      isCountryDropdownOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isCountryDropdownOpen && (
                  <div className={isNoir ? "absolute left-0 top-[calc(100%+8px)] z-30 w-[min(320px,calc(100vw-40px))] overflow-hidden rounded-xl border border-white/10 bg-[#151515] shadow-2xl" : "absolute left-0 top-[calc(100%+8px)] z-30 w-[320px] overflow-hidden rounded-xl border border-black/10 bg-white shadow-2xl"}>
                    <div className={isNoir ? "flex items-center gap-2 border-b border-white/10 px-3 py-2" : "flex items-center gap-2 border-b border-black/10 px-3 py-2"}>
                      <Search className={isNoir ? "h-4 w-4 text-white/40" : "h-4 w-4 text-black/40"} aria-hidden="true" />

                      <input
                        type="text"
                        value={countrySearch}
                        onChange={(e) => setCountrySearch(e.target.value)}
                        placeholder={isNoir ? "Buscar país o código..." : "Search country or code..."}
                        autoFocus
                        className={isNoir ? "w-full bg-transparent py-2 text-sm text-white placeholder:text-white/40 focus:outline-none" : "w-full bg-transparent py-2 text-sm text-black placeholder:text-black/40 focus:outline-none"}
                      />
                    </div>

                    <div className="max-h-64 overflow-y-auto" role="listbox" aria-label="Países disponibles">
                      {isLoadingCountries ? (
                          <div className={isNoir ? "px-4 py-4 text-sm text-white/50" : "px-4 py-4 text-sm text-black/50"}>
                          {isNoir ? "Cargando países..." : "Loading countries..."}
                        </div>
                      ) : filteredCountries.length > 0 ? (
                        filteredCountries.map((country) => (
                          <button
                            key={`${country.iso2}-${country.code}`}
                            type="button"
                            onClick={() => handleSelectCountry(country)}
                            className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors ${isNoir ? "text-white hover:bg-white/5" : "hover:bg-black/5"} ${
                              selectedCountry.iso2 === country.iso2
                                ? isNoir ? "bg-white/10" : "bg-[oklch(0.55_0.18_20)]/10"
                                : ""
                            }`}
                            role="option"
                            aria-selected={selectedCountry.iso2 === country.iso2}
                          >
                            <span className="text-lg">{country.flag}</span>

                            <span className="min-w-0 flex-1">
                              <span className={isNoir ? "block truncate font-medium text-white" : "block truncate font-medium text-black"}>
                                {country.name}
                              </span>
                              <span className={isNoir ? "block text-xs text-white/50" : "block text-xs text-black/50"}>
                                {country.iso2}
                              </span>
                            </span>

                            <span className={isNoir ? "font-semibold text-white" : "font-semibold text-black"}>
                              {country.code}
                            </span>
                          </button>
                        ))
                      ) : (
                        <div className={isNoir ? "px-4 py-4 text-sm text-white/50" : "px-4 py-4 text-sm text-black/50"}>
                          {isNoir ? "No se encontraron países." : "No countries found."}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor={`${id}-phone`} className={labelClass}>Teléfono</label>
                <input id={`${id}-phone`} type="tel" name="phoneNumber" placeholder={isNoir ? "Tu teléfono" : "Phone Number"} value={formData.phoneNumber} onChange={handleChange} required autoComplete="tel" className={fieldClass} />
              </div>
            </div>

            {!isAttendance && (
              <div>
                <label htmlFor={`${id}-eventType`} className={labelClass}>Asunto / tipo de consulta</label>
                <select id={`${id}-eventType`} name="eventType" value={formData.eventType} onChange={handleChange} required className={selectClass}>
                  <option value="" disabled>
                    {isNoir ? "Tipo de evento" : "Event type"}
                  </option>

                  {EVENT_TYPE_OPTIONS.map((eventType) => (
                    <option key={eventType} value={eventType}>
                      {eventType}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label htmlFor={`${id}-social`} className={labelClass}>{isAttendance ? "Instagram (opcional)" : "Redes sociales"}</label>
              <input id={`${id}-social`} type="text" name="socialNetworks" placeholder={isAttendance ? "@tuusuario (opcional)" : isNoir ? "Tus redes sociales" : "Social networks"} value={formData.socialNetworks} onChange={handleChange} autoComplete="url" className={fieldClass} />
            </div>

            <div>
              <label htmlFor={`${id}-description`} className={labelClass}>{isAttendance ? "Mensaje (opcional)" : "Mensaje"}</label>
              <textarea id={`${id}-description`} name="description" placeholder={isAttendance ? "¿Hay algo que debamos saber?" : isNoir ? "Cuéntanos más sobre tu evento..." : "Tell us more about your event..."} rows={5} value={formData.description} onChange={handleChange} required={!isAttendance} className={isNoir ? `${fieldClass} resize-none` : `${fieldClass} resize-none`} />
            </div>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
              whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
              className={isNoir ? `w-full min-h-12 rounded-full py-4 font-semibold tracking-[0.18em] transition-all duration-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d] ${isAkasha ? "focus-visible:ring-[#d9ff20]" : "focus-visible:ring-[#e1282e]"} disabled:cursor-not-allowed disabled:opacity-70` : "w-full rounded-lg bg-gradient-to-r from-[oklch(0.55_0.18_20)] to-[oklch(0.45_0.2_10)] py-4 font-bold tracking-wider text-white transition-all duration-300 hover:shadow-xl hover:shadow-[oklch(0.55_0.18_20)]/30 disabled:cursor-not-allowed disabled:opacity-70"}
              style={isNoir ? { backgroundColor: accent, color: isAkasha ? "#050505" : "#ffffff", boxShadow: `0 12px 40px ${isAkasha ? "rgba(217,255,32,0.12)" : "rgba(194,13,18,0.2)"}` } : undefined}
            >
              {status === "loading" ? (isNoir ? "ENVIANDO..." : "SENDING...") : submitLabel}
            </motion.button>

            {message && (
              <p
                role={status === "error" ? "alert" : "status"}
                aria-live="polite"
                className={`text-center text-sm font-medium ${
                  status === "success" ? (isNoir ? "text-emerald-400" : "text-green-600") : (isNoir ? (isAkasha ? "text-[#d9ff20]" : "text-[#e1282e]") : "text-red-600")
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
