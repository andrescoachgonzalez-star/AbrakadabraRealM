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

type PaulaPublicFormProps = {
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

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
}

export function PaulaPublicForm({
  id = "hire-paula",
  title = "Work with Paula",
  subtitle = "Tell us what you need and we will contact you",
  submitLabel = "SEND REQUEST",
}: PaulaPublicFormProps) {
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
    companyName: "",
    description: "",
    needDescription: "",
    socialNetworks: "",
    referralSource: "",
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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      companyName: "",
      description: "",
      needDescription: "",
      socialNetworks: "",
      referralSource: "",
    })

    setCountrySearch("")
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setMessage("")

    try {
      await submitPublicForm({
        form_type: "paula",
        first_name: formData.firstName.trim(),
        last_name: formData.lastName.trim(),
        email: formData.email.trim(),
        phone_country_code: formData.phoneCountryCode,
        phone_number: formData.phoneNumber.trim(),
        interest: "Paula",
        description: formData.description.trim(),
        company_name: formData.companyName.trim(),
        need_description: formData.needDescription.trim(),
        social_networks: formData.socialNetworks.trim() || undefined,
        referral_source: formData.referralSource.trim() || undefined,
      })

      setStatus("success")
      setMessage("Your request was sent successfully.")
      resetForm()
    } catch (error) {
      console.error("Paula public form error:", error)
      setStatus("error")
      setMessage("There was an error sending your request. Please try again.")
    }
  }

  return (
    <section id={id} className="py-28 lg:py-36 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
                Get in Touch
              </p>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              {title.split(" ")[0]} with
              <br />
              <span className="text-primary italic">Paula</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed text-lg mb-10 max-w-md">
              {subtitle}
            </p>

            <div className="space-y-4">
              {[
                { label: "Modeling", detail: "Fashion, Editorial, Commercial" },
                { label: "Acting", detail: "Film, Television, Theater" },
                { label: "Presenting", detail: "TV, Events, Live" },
                { label: "Brand Ambassador", detail: "Fashion, Beauty, Lifestyle" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/20 transition-colors duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-3xl border border-border bg-white p-6 shadow-2xl shadow-black/5 md:p-10"
            >
              <div className="text-center mb-6">
                <span className="inline-block rounded-full bg-[oklch(0.55_0.18_20)]/10 px-4 py-1.5 text-xs font-semibold tracking-[0.3em] text-[oklch(0.55_0.18_20)]">
                  PAULA
                </span>

                <h3 className="mt-5 font-serif text-3xl font-bold text-black md:text-4xl">
                  Hire Paula
                </h3>

                <p className="mx-auto mt-3 max-w-md text-black/50">
                  Fill out the form and tell us what kind of collaboration you need.
                </p>
              </div>

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

              <input
                type="text"
                name="companyName"
                placeholder="Company name"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-black/20 px-5 py-3.5 text-sm text-black placeholder:text-black/40 transition-colors focus:border-[oklch(0.55_0.18_20)] focus:outline-none"
              />

              <textarea
                name="description"
                placeholder="Description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-lg border border-black/20 px-5 py-3.5 text-sm text-black placeholder:text-black/40 transition-colors focus:border-[oklch(0.55_0.18_20)] focus:outline-none"
              />

              <textarea
                name="needDescription"
                placeholder="Need description"
                rows={4}
                value={formData.needDescription}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-lg border border-black/20 px-5 py-3.5 text-sm text-black placeholder:text-black/40 transition-colors focus:border-[oklch(0.55_0.18_20)] focus:outline-none"
              />

              <input
                type="text"
                name="socialNetworks"
                placeholder="Social networks"
                value={formData.socialNetworks}
                onChange={handleChange}
                className="w-full rounded-lg border border-black/20 px-5 py-3.5 text-sm text-black placeholder:text-black/40 transition-colors focus:border-[oklch(0.55_0.18_20)] focus:outline-none"
              />

              <input
                type="text"
                name="referralSource"
                placeholder="Referral source"
                value={formData.referralSource}
                onChange={handleChange}
                className="w-full rounded-lg border border-black/20 px-5 py-3.5 text-sm text-black placeholder:text-black/40 transition-colors focus:border-[oklch(0.55_0.18_20)] focus:outline-none"
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
      </div>
    </section>
  )
}