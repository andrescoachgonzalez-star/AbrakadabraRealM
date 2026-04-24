"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    title: "Abstract Art",
    subtitle: "Art within everyone's reach",
    description: "Digital and physical masterpieces",
    cta: "SHOP NOW",
    image: "/home/arte-home2.png",
  },
  {
    id: 2,
    title: "Jewelry",
    subtitle: "Colombian treasures",
    description: "Exclusive certified gemstones",
    cta: "DISCOVER",
    image: "/home/gema-home.png",
  },
  {
    id: 3,
    title: "Luxury Clothing",
    subtitle: "Exclusive limited editions",
    description: "Oversize t-shirts and designer hats",
    cta: "EXPLORE",
    image: "/home/ropa-home.png",
  },
  {
    id: 4,
    title: "Car Rental",
    subtitle: "Miami luxury experience",
    description: "Premium vehicles for unforgettable moments",
    cta: "RENT NOW",
    image: "/home/carro-home.webp",
    href: "/car-rental",
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

      {/* Badge */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 z-10">
        <p className="text-sm font-medium tracking-[0.3em] text-muted-foreground">
          LUXURY EXPERIENCE
        </p>
      </div>

      <div className="relative flex min-h-screen items-center">
        <div className="container mx-auto grid gap-8 px-4 pt-40 pb-20 lg:grid-cols-2 lg:gap-12 lg:pt-32">
          
          {/* IMAGE SIDE */}
          <div className="relative flex items-center justify-center">
            <div className="relative">

              {/* Image container */}
              <div className="relative w-[420px] sm:w-[480px] md:w-[560px] lg:w-[640px]">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={cn(
                      "absolute inset-0 transition-all duration-700 flex items-center justify-center",
                      currentSlide === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                    )}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Floating bubbles */}
              <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-primary/10 animate-float" />
              <div className="absolute -left-10 bottom-1/4 h-12 w-12 rounded-full bg-primary/10 animate-float" />
              <div className="absolute left-10 -bottom-6 h-10 w-10 rounded-full bg-primary/10 animate-float" />
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className="relative flex flex-col justify-center h-[300px] lg:h-[400px]">
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
                <h1 className="font-serif text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl">
                  {slide.title}
                </h1>

                <p className="mt-4 text-lg text-muted-foreground">
                  {slide.subtitle}
                </p>

                <p className="mt-2 text-sm text-muted-foreground/70">
                  {slide.description}
                </p>

                {slide.href ? (
                  <Link
                    href={slide.href}
                    className="group mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold tracking-wider text-primary-foreground transition-all duration-300 hover:gap-5 hover:shadow-lg"
                  >
                    {slide.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                ) : (
                  <button className="group mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold tracking-wider text-primary-foreground transition-all duration-300 hover:gap-5 hover:shadow-lg">
                    {slide.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-3 text-foreground/50 hover:bg-foreground/5"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-3 text-foreground/50 hover:bg-foreground/5"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-500",
              currentSlide === index
                ? "w-8 bg-primary"
                : "w-2 bg-foreground/20"
            )}
          />
        ))}
      </div>
    </section>
  )
}
