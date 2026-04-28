"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { LuxuryHeader } from "@/components/luxury-header"
import { LuxuryFooter } from "@/components/luxury-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Zap,
  ChevronLeft,
  ChevronRight,
  Star,
  Sparkles,
} from "lucide-react"

/* ── Data ────────────────────────────────────────── */

const heroSlides = [
  { name: "Corvette", color: "from-red-600 to-red-900", image: "/Image-Car-Rental/Corvette-Rojo.webp" },
  { name: "Lamborghini", color: "from-[#2d5016] to-[#1a3009]", image: "/Image-Car-Rental/Lamborghini-Huracan-EVO.webp" },
  { name: "Ferrari", color: "from-yellow-400 to-yellow-600", image: "/Image-Car-Rental/FerrariF8.webp" },
  { name: "McLaren", color: "from-[#4a4a4a] to-[#2a2a2a]", image: "/Image-Car-Rental/McLaren-GT.png" },
  { name: "Rolls Royce", color: "from-black to-gray-800", image: "/Image-Car-Rental/RollsRoycePhantom.webp" },
]

const trustedBrands = [
  "Rolls-Royce",
  "BENTLEY",
  "Mercedes-Benz",
  "BMW",
  "Ferrari",
  "McLaren",
  "Lamborghini",
  "Corvette",
]

const brands = [
  {
    name: "mercedes-benz",
    displayName: "Mercedes Benz",
    power: "577 HP",
    available: 5,
    image: "/Our-Collection/Brabus.webp",
  },
  {
    name: "rolls-royce",
    displayName: "Rolls Royce",
    power: "563 HP",
    available: 8,
    image: "/Our-Collection/Rolls-Royce-Phantom.webp",
  },
  {
    name: "bentley",
    displayName: "Bentley",
    power: "626 HP",
    available: 3,
    image: "/Our-Collection/Bentley-Continental-GT.png",
  },
  {
    name: "mclaren",
    displayName: "McLaren",
    power: "710 HP",
    available: 1,
    image: "/Our-Collection/McLaren-GT.png",
  },
  {
    name: "lamborghini",
    displayName: "Lamborghini",
    power: "770 HP",
    available: 11,
    image: "/Our-Collection/Lamborghini-EVO-STO.png",
  },
  {
    name: "ferrari",
    displayName: "Ferrari",
    power: "819 HP",
    available: 1,
    image: "/Our-Collection/Ferarri-F8-Spider.png",
  },
  {
    name: "corvette",
    displayName: "Corvette C8",
    power: "495 HP",
    available: 3,
    image: "/Our-Collection/Corvette-Azul.png",
  },
  {
    name: "bmw",
    displayName: "BMW",
    power: "375 HP",
    available: 1,
    image: "/Our-Collection/BMW-7-Series.png",
  },
]

const testimonials = [
  {
    name: "Fernando",
    location: "Mexico City, Mexico",
    initial: "F",
    rating: 5,
    text: "Abrakadabra Realm exceeded my expectations! The delivery was on time, and the car was spotless. They were flexible with my schedule, and the staff was professional and friendly. This is honestly the best car rental experience I've ever had.",
  },
  {
    name: "Alessandro",
    location: "Milan, Italy",
    initial: "A",
    rating: 5,
    text: "I had an amazing experience renting a car from Abrakadabra Realm. The process was smooth, and the car was in perfect condition. The team was incredibly helpful and made sure I had everything I needed for my trip.",
  },
  {
    name: "Carlos",
    location: "Bogota, Colombia",
    initial: "C",
    rating: 5,
    text: "The best exotic car rental in Miami, hands down. Professional, punctual, and the vehicles are maintained to perfection. A truly premium experience.",
  },
]

const whyChooseUs = [
  {
    title: "Secure Reservation",
    description: "Your reservation is guaranteed and your data is protected with enterprise-grade security.",
    icon: "shield",
  },
  {
    title: "Insured Vehicles",
    description: "All vehicles have comprehensive insurance coverage for your complete peace of mind.",
    icon: "car",
  },
  {
    title: "No Advance Payments",
    description: "You will only pay when you pick up your vehicle. No hidden fees or surprises.",
    icon: "card",
  },
]

/* ── Hero Carousel ─────────────────────────────── */

function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = heroSlides[current]

  return (
    <section
      className={`relative flex min-h-screen items-start overflow-hidden bg-gradient-to-br pt-32 transition-all duration-1000 sm:pt-36 lg:items-center lg:pt-0 ${slide.color}`}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container relative z-10 mx-auto grid items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left - Car Image Area */}
        <motion.div
          key={current}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Car image */}
          <div className="relative aspect-[16/9]">
            <img
              src={slide.image}
              alt={slide.name}
              className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl p-4"
            />
            {/* Shadow under car */}
            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[60%] h-6 bg-black/30 blur-2xl rounded-full" />
          </div>

          {/* YOUR LUXURY AWAITS label */}
          <p className="text-center text-background/50 text-xs tracking-[0.3em] uppercase mt-4">
            YOUR LUXURY AWAITS
          </p>

          {/* Carousel dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-background"
                    : "w-2 bg-background/30 hover:bg-background/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <p className="text-center text-primary text-sm mt-2 font-serif italic">
            {slide.name}
          </p>
        </motion.div>

        {/* Right - Text Content */}
        <div className="text-background">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-background/20 rounded-full mb-8"
          >
            <Sparkles className="h-4 w-4 text-background/70" />
            <span className="text-sm text-background/80 tracking-wide">Premium Car Rental in Miami</span>
            <span className="h-2 w-2 rounded-full bg-background/50" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            <span className="block">Experience</span>
            <span className="block italic text-background/80">Luxury</span>
            <span className="block text-background/70">on the Road</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-background/60 text-lg leading-relaxed mt-6 max-w-lg"
          >
            Indulge in a premium driving experience with our exclusive fleet of luxury vehicles. Elevate your journey with unparalleled style and performance.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href="#fleet"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-background text-foreground rounded-full font-semibold tracking-wide hover:bg-background/90 transition-all duration-300"
            >
              Rent Now
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#fleet"
              className="inline-flex items-center gap-3 px-8 py-4 border border-background/30 text-background rounded-full font-semibold tracking-wide hover:bg-background/10 transition-all duration-300"
            >
              View Collection
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-10 mt-10"
          >
            <div>
              <span className="font-serif text-3xl font-bold text-background">50+</span>
              <p className="text-background/50 text-xs mt-1 tracking-wider uppercase">Luxury Cars</p>
            </div>
            <div>
              <span className="font-serif text-3xl font-bold text-background">1000+</span>
              <p className="text-background/50 text-xs mt-1 tracking-wider uppercase">Happy Clients</p>
            </div>
            <div>
              <span className="font-serif text-3xl font-bold text-background">24/7</span>
              <p className="text-background/50 text-xs mt-1 tracking-wider uppercase">Support</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Trusted Brands Marquee ────────────────────── */

function TrustedBrandsMarquee() {
  const items = [...trustedBrands, ...trustedBrands, ...trustedBrands]

  return (
    <section className="py-10 bg-background border-y border-border overflow-hidden">
      <ScrollReveal>
        <p className="text-center text-primary text-xs tracking-[0.3em] uppercase font-semibold mb-6">
          TRUSTED BRANDS
        </p>
      </ScrollReveal>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((brand, i) => (
            <span
              key={i}
              className="mx-10 font-serif text-2xl md:text-3xl text-muted-foreground/30 font-bold whitespace-nowrap select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Luxury Fleet (Brand Cards) ─────────────────── */

function LuxuryFleet() {
  return (
    <section id="fleet" className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-3 text-primary text-sm tracking-[0.3em] uppercase font-semibold">
                <span className="w-8 h-px bg-primary" />
                OUR COLLECTION
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mt-4">
                <span className="block">Luxury</span>
                <span className="block italic text-muted-foreground/60">Fleet</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-muted-foreground mt-6 max-w-xl leading-relaxed">
                Our rentals seamlessly combine luxury and performance, offering an unparalleled way to explore Miami in ultimate style. Experience true comfort and elegance.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={150} direction="left">
            <div className="mt-6 lg:mt-0 inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-sm text-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              MIAMI
            </div>
          </ScrollReveal>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand, i) => (
            <ScrollReveal key={brand.name} delay={i * 80}>
              <Link
                href={`/car-rental/${brand.name}`}
                className="group block overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Arrow on hover */}
                <div className="relative p-4 pb-0">
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Car image */}
                <div className="relative aspect-[4/3] mx-4 bg-gradient-to-br from-muted to-muted/40 rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    src={brand.image}
                    alt={brand.displayName}
                    className="absolute inset-0 w-full h-full object-contain p-3"
                  />
                </div>

                {/* Content */}
                <div className="p-4 pt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {brand.displayName}
                    </h3>
                    <div className="flex items-center gap-1 text-primary">
                      <Zap className="h-3.5 w-3.5" />
                      <span className="text-sm font-semibold">{brand.power}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">
                    {brand.available} Available vehicle{brand.available !== 1 ? "s" : ""}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Why Choose Us ──────────────────────────────── */

function WhyChooseUsSection() {
  const [activeCard, setActiveCard] = useState(0)

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-3 text-primary text-sm tracking-[0.3em] uppercase font-semibold">
              <span className="w-8 h-px bg-primary" />
              WHY CHOOSE US
              <span className="w-8 h-px bg-primary" />
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3">
              Premium Service
            </h2>
            <p className="font-serif text-3xl md:text-4xl italic text-muted-foreground/50 mt-1">
              Guaranteed
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {whyChooseUs.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div
                onMouseEnter={() => setActiveCard(i)}
                className={`relative rounded-2xl border p-8 flex flex-col items-center text-center transition-all duration-500 cursor-pointer ${
                  activeCard === i
                    ? "border-primary/30 bg-gradient-to-b from-primary/5 to-transparent shadow-lg"
                    : "border-border bg-card hover:border-border/80"
                }`}
              >
                {/* Icon */}
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl mb-6 transition-all duration-500 ${
                    activeCard === i
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 -rotate-6 scale-110"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <WhyChooseIcon type={item.icon} />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseIcon({ type }: { type: string }) {
  switch (type) {
    case "shield":
      return (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    case "car":
      return (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 17h.01M16 17h.01M3 11l1.5-5A2 2 0 016.4 4.5h11.2a2 2 0 011.9 1.5L21 11M3 11v6a1 1 0 001 1h1m16-7v6a1 1 0 01-1 1h-1M3 11h18" />
        </svg>
      )
    case "card":
      return (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    default:
      return null
  }
}

/* ── Subscribe Section ──────────────────────────── */

function SubscribeSection() {
  return (
    <section className="py-20 px-6 bg-[#f5f0ea]">
      <div className="container mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground tracking-wider">
            SUBSCRIBE NOW
          </h2>
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mt-3">
            TO RECEIVE NOTIFICATIONS AND EXCLUSIVE DISCOUNTS
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 max-w-2xl mx-auto">
            {/* Phone input */}
            <div className="flex items-center w-full sm:w-auto border border-border rounded-lg bg-background overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-3 border-r border-border text-sm text-muted-foreground whitespace-nowrap">
                <span className="text-xs">US</span>
                <span className="font-semibold text-foreground">+1</span>
              </div>
              <input
                type="tel"
                placeholder="WhatsApp number"
                className="flex-1 px-3 py-3 text-sm bg-transparent outline-none placeholder:text-muted-foreground/50 min-w-[180px]"
              />
            </div>

            {/* Email input */}
            <div className="flex items-center w-full sm:w-auto border border-border rounded-lg bg-background overflow-hidden">
              <div className="flex items-center px-3 py-3 text-muted-foreground/50">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-1 py-3 text-sm bg-transparent outline-none placeholder:text-muted-foreground/50 min-w-[180px]"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <button className="mt-6 inline-flex items-center gap-2 px-10 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold tracking-wider text-sm hover:bg-primary/90 transition-colors">
            SUBSCRIBE
            <ArrowRight className="h-4 w-4" />
          </button>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ── Testimonials ─────────────────────────────── */

function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [starsKey, setStarsKey] = useState(0)

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % testimonials.length)
    setStarsKey((k) => k + 1)
  }, [])
  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)
    setStarsKey((k) => k + 1)
  }, [])

  const t = testimonials[current]

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-3 text-primary text-sm tracking-[0.3em] uppercase font-semibold">
                <span className="w-8 h-px bg-primary" />
                TESTIMONIALS
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
                Our Customers
                <br />
                <span className="italic text-muted-foreground/60">Says!</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              {/* Colored dashes */}
              <div className="flex gap-1.5 mt-4">
                <div className="w-8 h-1 bg-primary rounded-full" />
                <div className="w-8 h-1 bg-primary/40 rounded-full" />
                <div className="w-8 h-1 bg-primary/20 rounded-full" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-muted-foreground mt-6 leading-relaxed max-w-md">
                {"We value every customer's feedback and strive to improve our car rental services at Abrakadabra Realm to meet your expectations."}
              </p>
            </ScrollReveal>

            {/* Navigation */}
            <ScrollReveal delay={250}>
              <div className="flex items-center gap-4 mt-8">
                <button
                  onClick={prev}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border hover:bg-muted transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5 text-foreground" />
                </button>
                <button
                  onClick={next}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border hover:bg-muted transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5 text-foreground" />
                </button>
                <span className="ml-2 text-foreground">
                  <span className="text-2xl font-bold">{current + 1}</span>
                  <span className="text-muted-foreground"> / {testimonials.length}</span>
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Testimonial Card */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="relative bg-card rounded-2xl p-8 shadow-lg border border-border"
              >
                {/* Quote mark */}
                <div className="absolute top-6 right-8 text-primary/20 font-serif text-8xl leading-none select-none">
                  {"\u201D"}
                </div>

                {/* Avatar + Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg">
                    {t.initial}
                    <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 border-2 border-card" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-muted-foreground text-sm">{t.location}</p>
                  </div>
                </div>

                {/* Stars - staggered one-by-one animation */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <motion.div
                      key={`${starsKey}-${i}`}
                      initial={{ opacity: 0, scale: 0, rotate: -90 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.3 + i * 0.12,
                        duration: 0.35,
                        type: "spring",
                        stiffness: 260,
                        damping: 15,
                      }}
                    >
                      <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground/80 leading-relaxed">
                  {`"${t.text}"`}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Pagination dots */}
            <div className="flex items-center justify-end gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrent(i)
                    setStarsKey((k) => k + 1)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/20 hover:bg-muted-foreground/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Main Page ──────────────────────────────────── */

export default function CarRentalPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <LuxuryHeader />
      <HeroCarousel />
      <TrustedBrandsMarquee />
      <LuxuryFleet />
      <TestimonialsSection />
      <WhyChooseUsSection />

      {/* SubscribeSection oculto, pero se mantiene en el código */}
      {false && <SubscribeSection />}

      <LuxuryFooter />
    </main>
  )
}
