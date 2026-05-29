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
}: EventsPublicFormProps) {
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
        description: formData.description.trim(),
        event_type: formData.eventType.trim(),
        social_networks: formData.socialNetworks.trim() || undefined,
      })

      setStatus("success")
      setMessage("Your request was sent successfully.")
      resetForm()
    } catch (error) {
      console.error("Events public form error:", error)
      setStatus("error")
      setMessage("There was an error sending your request. Please try again.")
    }
  }

  return (
    <section id={id} className="overflow-hidden bg-white py-24 lg:py-32 scroll-mt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl"
        >
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-[oklch(0.55_0.18_20)]/10 px-4 py-1.5 text-xs font-semibold tracking-[0.3em] text-[oklch(0.55_0.18_20)]">
              EVENTS
            </span>

            <h2 className="mt-5 font-serif text-4xl font-bold text-black md:text-5xl">
              {title}
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-black/50">
              {subtitle}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-3xl border border-black/10 bg-white p-6 shadow-2xl shadow-black/5 md:p-10"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-black/20 px-5 py-3.5 text-sm text-black placeholder:text-black/40 transition-colors focus:border-[oklch(0.55_0.18_20)] focus:outline-none"
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-black/20 px-5 py-3.5 text-sm text-black placeholder:text-black/40 transition-colors focus:border-[oklch(0.55_0.18_20)] focus:outline-none"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-black/20 px-5 py-3.5 text-sm text-black placeholder:text-black/40 transition-colors focus:border-[oklch(0.55_0.18_20)] focus:outline-none"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-[190px_1fr]">
              <div ref={countryDropdownRef} className="relative">
                <button
                  type="button"
                  onClick={() => setIsCountryDropdownOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between rounded-lg border border-black/20 bg-white px-4 py-3.5 text-left text-sm text-black transition-colors focus:border-[oklch(0.55_0.18_20)] focus:outline-none"
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <span>{selectedCountry.flag}</span>
                    <span className="truncate font-medium">
                      {selectedCountry.code}
                    </span>
                    <span className="truncate text-black/50">
                      {selectedCountry.iso2}
                    </span>
                  </span>

                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform ${
                      isCountryDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isCountryDropdownOpen && (
                  <div className="absolute left-0 top-[calc(100%+8px)] z-30 w-[320px] overflow-hidden rounded-xl border border-black/10 bg-white shadow-2xl">
                    <div className="flex items-center gap-2 border-b border-black/10 px-3 py-2">
                      <Search className="h-4 w-4 text-black/40" />

                      <input
                        type="text"
                        value={countrySearch}
                        onChange={(e) => setCountrySearch(e.target.value)}
                        placeholder="Search country or code..."
                        autoFocus
                        className="w-full bg-transparent py-2 text-sm text-black placeholder:text-black/40 focus:outline-none"
                      />
                    </div>

                    <div className="max-h-64 overflow-y-auto">
                      {isLoadingCountries ? (
                        <div className="px-4 py-4 text-sm text-black/50">
                          Loading countries...
                        </div>
                      ) : filteredCountries.length > 0 ? (
                        filteredCountries.map((country) => (
                          <button
                            key={`${country.iso2}-${country.code}`}
                            type="button"
                            onClick={() => handleSelectCountry(country)}
                            className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-black/5 ${
                              selectedCountry.iso2 === country.iso2
                                ? "bg-[oklch(0.55_0.18_20)]/10"
                                : ""
                            }`}
                          >
                            <span className="text-lg">{country.flag}</span>

                            <span className="min-w-0 flex-1">
                              <span className="block truncate font-medium text-black">
                                {country.name}
                              </span>
                              <span className="block text-xs text-black/50">
                                {country.iso2}
                              </span>
                            </span>

                            <span className="font-semibold text-black">
                              {country.code}
                            </span>
                          </button>
                        ))
                      ) : (
                        <div className="px-4 py-4 text-sm text-black/50">
                          No countries found.
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-black/20 px-5 py-3.5 text-sm text-black placeholder:text-black/40 transition-colors focus:border-[oklch(0.55_0.18_20)] focus:outline-none"
              />
            </div>

            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-black/20 bg-white px-5 py-3.5 text-sm text-black transition-colors focus:border-[oklch(0.55_0.18_20)] focus:outline-none"
            >
              <option value="" disabled>
                Event type
              </option>

              {EVENT_TYPE_OPTIONS.map((eventType) => (
                <option key={eventType} value={eventType}>
                  {eventType}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="socialNetworks"
              placeholder="Social networks"
              value={formData.socialNetworks}
              onChange={handleChange}
              className="w-full rounded-lg border border-black/20 px-5 py-3.5 text-sm text-black placeholder:text-black/40 transition-colors focus:border-[oklch(0.55_0.18_20)] focus:outline-none"
            />

            <textarea
              name="description"
              placeholder="Tell us more about your event..."
              rows={5}
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full resize-none rounded-lg border border-black/20 px-5 py-3.5 text-sm text-black placeholder:text-black/40 transition-colors focus:border-[oklch(0.55_0.18_20)] focus:outline-none"
            />

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
              whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
              className="w-full rounded-lg bg-gradient-to-r from-[oklch(0.55_0.18_20)] to-[oklch(0.45_0.2_10)] py-4 font-bold tracking-wider text-white transition-all duration-300 hover:shadow-xl hover:shadow-[oklch(0.55_0.18_20)]/30 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? "SENDING..." : submitLabel}
            </motion.button>

            {message && (
              <p
                className={`text-center text-sm font-medium ${
                  status === "success" ? "text-green-600" : "text-red-600"
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