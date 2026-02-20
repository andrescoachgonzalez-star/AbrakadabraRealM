"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    title: "Abstract Art",
    subtitle: "Art within everyone's reach",
    description: "Digital and physical masterpieces",
    cta: "SHOP NOW",
    image: "/placeholder-art.jpg",
  },
  {
    id: 2,
    title: "Emeralds",
    subtitle: "Colombian treasures",
    description: "Exclusive certified gemstones",
    cta: "DISCOVER",
    image: "/placeholder-emerald.jpg",
  },
  {
    id: 3,
    title: "Luxury Clothing",
    subtitle: "Exclusive limited editions",
    description: "Oversize t-shirts and designer hats",
    cta: "EXPLORE",
    image: "/placeholder-clothing.jpg",
  },
  {
    id: 4,
    title: "Car Rental",
    subtitle: "Miami luxury experience",
    description: "Premium vehicles for unforgettable moments",
    cta: "RENT NOW",
    image: "/placeholder-car.jpg",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 800)
  }, [isAnimating])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAnimating(false), 800)
  }, [isAnimating])

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Luxury Experience Badge */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 z-10">
        <p className="text-sm font-medium tracking-[0.3em] text-muted-foreground animate-fade-in">
          LUXURY EXPERIENCE
        </p>
      </div>

      {/* Main Content */}
      <div className="relative flex min-h-screen items-center">
        <div className="container mx-auto grid gap-8 px-4 pt-40 pb-20 lg:grid-cols-2 lg:gap-12 lg:pt-32">
          {/* Image Side */}
          <div className="relative order-1 flex items-center justify-center lg:order-1">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 rounded-lg border border-primary/20 animate-fade-in animation-delay-200" />
              <div className="absolute -inset-8 rounded-lg border border-primary/10 animate-fade-in animation-delay-300" />
              
              {/* Image Container */}
              <div className="relative aspect-[3/4] w-72 overflow-hidden rounded-lg bg-muted sm:w-80 md:w-96 animate-scale-in">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={cn(
                      "absolute inset-0 flex items-center justify-center transition-all duration-700",
                      currentSlide === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                    )}
                  >
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-muted to-secondary p-8 text-center">
                      <div className="mb-4 h-32 w-32 rounded-full bg-primary/10 animate-float" />
                      <p className="text-xs font-medium tracking-wider text-muted-foreground">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Elements */}
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-primary/10 animate-float" />
              <div className="absolute -left-8 bottom-1/4 h-12 w-12 rounded-full bg-primary/5 animate-float animation-delay-500" />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-2 flex flex-col justify-center lg:order-2 relative h-[300px] lg:h-[400px]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={cn(
                  "absolute inset-0 flex flex-col justify-center transition-all duration-700",
                  currentSlide === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 pointer-events-none"
                )}
              >
                <h1 className="font-serif text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
                  <span className="text-balance">{slide.title}</span>
                </h1>
                <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
                  {slide.subtitle}
                </p>
                <p className="mt-2 text-sm text-muted-foreground/70">
                  {slide.description}
                </p>
                <button className="group mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold tracking-wider text-primary-foreground transition-all duration-300 hover:gap-5 hover:shadow-lg hover:shadow-primary/25">
                  {slide.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-3 text-foreground/50 transition-all duration-300 hover:bg-foreground/5 hover:text-foreground"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-3 text-foreground/50 transition-all duration-300 hover:bg-foreground/5 hover:text-foreground"
          aria-label="Next slide"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true)
                setCurrentSlide(index)
                setTimeout(() => setIsAnimating(false), 800)
              }
            }}
            className={cn(
              "h-2 rounded-full transition-all duration-500",
              currentSlide === index
                ? "w-8 bg-primary"
                : "w-2 bg-foreground/20 hover:bg-foreground/40"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
