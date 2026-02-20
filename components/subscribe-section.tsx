"use client"

import React, { useState, useEffect, useRef } from "react"
import { ArrowRight, Mail, ChevronDown, Check, Search } from "lucide-react"
import { cn } from "@/lib/utils"

const countries = [
  { code: "US", name: "United States", dial: "+1", flag: "🇺🇸" },
  { code: "CO", name: "Colombia", dial: "+57", flag: "🇨🇴" },
  { code: "MX", name: "Mexico", dial: "+52", flag: "🇲🇽" },
  { code: "ES", name: "Spain", dial: "+34", flag: "🇪🇸" },
  { code: "AR", name: "Argentina", dial: "+54", flag: "🇦🇷" },
  { code: "BR", name: "Brazil", dial: "+55", flag: "🇧🇷" },
  { code: "CL", name: "Chile", dial: "+56", flag: "🇨🇱" },
  { code: "PE", name: "Peru", dial: "+51", flag: "🇵🇪" },
  { code: "VE", name: "Venezuela", dial: "+58", flag: "🇻🇪" },
  { code: "EC", name: "Ecuador", dial: "+593", flag: "🇪🇨" },
  { code: "GB", name: "United Kingdom", dial: "+44", flag: "🇬🇧" },
  { code: "DE", name: "Germany", dial: "+49", flag: "🇩🇪" },
  { code: "FR", name: "France", dial: "+33", flag: "🇫🇷" },
  { code: "IT", name: "Italy", dial: "+39", flag: "🇮🇹" },
  { code: "PT", name: "Portugal", dial: "+351", flag: "🇵🇹" },
  { code: "CA", name: "Canada", dial: "+1", flag: "🇨🇦" },
  { code: "AU", name: "Australia", dial: "+61", flag: "🇦🇺" },
  { code: "JP", name: "Japan", dial: "+81", flag: "🇯🇵" },
  { code: "KR", name: "South Korea", dial: "+82", flag: "🇰🇷" },
  { code: "CN", name: "China", dial: "+86", flag: "🇨🇳" },
  { code: "IN", name: "India", dial: "+91", flag: "🇮🇳" },
  { code: "RU", name: "Russia", dial: "+7", flag: "🇷🇺" },
  { code: "ZA", name: "South Africa", dial: "+27", flag: "🇿🇦" },
  { code: "AE", name: "UAE", dial: "+971", flag: "🇦🇪" },
  { code: "SA", name: "Saudi Arabia", dial: "+966", flag: "🇸🇦" },
]

export function SubscribeSection() {
  const [whatsapp, setWhatsapp] = useState("")
  const [email, setEmail] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [isCountryOpen, setIsCountryOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const sectionRef = useRef<HTMLElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.dial.includes(searchQuery) ||
      country.code.toLowerCase().includes(searchQuery.toLowerCase())
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryOpen(false)
        setSearchQuery("")
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ country: selectedCountry.dial, whatsapp, email })
  }

  const handleCountrySelect = (country: typeof countries[0]) => {
    setSelectedCountry(country)
    setIsCountryOpen(false)
    setSearchQuery("")
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-secondary py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className={cn(
          "mx-auto max-w-2xl text-center transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            SUBSCRIBE NOW
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            TO RECEIVE NOTIFICATIONS AND EXCLUSIVE DISCOUNTS
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              {/* WhatsApp Input with Country Selector */}
              <div className="relative flex-1" ref={dropdownRef}>
                <div className="flex rounded-lg border border-border bg-card overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all duration-300">
                  {/* Country Selector Button */}
                  <button
                    type="button"
                    onClick={() => setIsCountryOpen(!isCountryOpen)}
                    className="flex items-center gap-1.5 px-3 py-4 border-r border-border bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-lg">{selectedCountry.flag}</span>
                    <span className="text-xs font-medium text-muted-foreground hidden sm:inline">
                      {selectedCountry.dial}
                    </span>
                    <ChevronDown className={cn(
                      "h-3.5 w-3.5 text-muted-foreground transition-transform duration-200",
                      isCountryOpen && "rotate-180"
                    )} />
                  </button>
                  
                  {/* Phone Input */}
                  <input
                    type="tel"
                    placeholder="WhatsApp number"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="flex-1 bg-transparent py-4 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />
                </div>

                {/* Country Dropdown */}
                <div className={cn(
                  "absolute top-full left-0 right-0 z-50 mt-2 overflow-hidden rounded-xl border border-border bg-card shadow-xl transition-all duration-300",
                  isCountryOpen 
                    ? "opacity-100 translate-y-0 pointer-events-auto" 
                    : "opacity-0 -translate-y-2 pointer-events-none"
                )}>
                  {/* Search Input */}
                  <div className="p-3 border-b border-border">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search country..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-lg border border-border bg-muted/30 py-2.5 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Country List */}
                  <div className="max-h-60 overflow-y-auto">
                    {filteredCountries.length > 0 ? (
                      filteredCountries.map((country) => (
                        <button
                          key={country.code}
                          type="button"
                          onClick={() => handleCountrySelect(country)}
                          className={cn(
                            "flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-muted/50",
                            selectedCountry.code === country.code && "bg-primary/5"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{country.flag}</span>
                            <div className="flex flex-col items-start">
                              <span className="text-sm font-medium text-foreground">
                                {country.name}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {country.dial}
                              </span>
                            </div>
                          </div>
                          {selectedCountry.code === country.code && (
                            <Check className="h-4 w-4 text-primary" />
                          )}
                        </button>
                      ))
                    ) : (
                      <div className="px-4 py-6 text-center text-sm text-muted-foreground">
                        No countries found
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Email Input */}
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-border bg-card py-4 pl-12 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
                />
              </div>
            </div>

            <button
              type="submit"
              className="group w-full rounded-lg bg-primary py-4 text-sm font-semibold tracking-wider text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.01]"
            >
              <span className="inline-flex items-center gap-2">
                SUBSCRIBE
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </form>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 h-32 w-32 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
    </section>
  )
}
