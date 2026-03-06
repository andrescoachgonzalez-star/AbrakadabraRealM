"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Car, Shield, Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function RentalSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="rental"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
    >

      {/* Background Image */}
      <img
        src="/home/rentcar-home.jpg"
        alt="Luxury Car Rental"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Animated circles (decorative) */}
      <div 
        className="absolute h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl transition-all duration-700"
        style={{
          left: `${20 + mousePosition.x * 10}%`,
          top: `${20 + mousePosition.y * 10}%`,
        }}
      />

      <div 
        className="absolute h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl transition-all duration-500"
        style={{
          right: `${10 + mousePosition.x * 5}%`,
          bottom: `${10 + mousePosition.y * 5}%`,
        }}
      />

      {/* Content */}
      <div className="relative flex min-h-screen items-center px-4 py-20">
        <div className="container mx-auto grid gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div
            className={cn(
              "relative flex items-center justify-center transition-all duration-1000",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            )}
          >
            <div className="relative">

              <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl bg-gradient-to-br from-card/10 to-card/5 backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Car className="h-32 w-32 text-white/20" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/60">
                  <span>MIAMI COLLECTION</span>
                  <span>2025</span>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -right-4 top-1/4 rounded-lg bg-card p-4 shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary fill-primary" />
                  <span className="text-sm font-semibold text-foreground">4.9</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Premium Rating
                </p>
              </div>

              <div className="absolute -left-4 bottom-1/4 rounded-lg bg-card p-4 shadow-xl animate-float animation-delay-500">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    100%
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Insured
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div
            className={cn(
              "flex flex-col justify-center transition-all duration-1000 delay-300",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            )}
          >
            <span className="text-sm font-medium tracking-widest text-primary">
              EXCLUSIVE OFFER
            </span>

            <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Discover Our Car Rental
            </h2>

            <p className="mt-6 text-lg text-white/70">
              Experience Miami like never before with our premium luxury vehicle collection.
              From exotic sports cars to elegant sedans.
            </p>

            <div className="mt-8 flex items-baseline gap-2">
              <span className="text-sm text-white/50 line-through">$1,499</span>

              <span className="font-serif text-5xl font-bold text-primary sm:text-6xl">
                $999
              </span>

              <span className="text-sm text-white/70">/day</span>
            </div>

            <p className="mt-2 text-xs uppercase tracking-wider text-white/50">
              LAUNCH PRICE - LIMITED TIME
            </p>

            <button className="group mt-10 w-full max-w-sm rounded-full bg-primary py-5 text-sm font-semibold tracking-wider text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]">
              <span className="inline-flex items-center gap-3">
                RENT NOW
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </button>

            <div className="mt-8 flex items-center gap-6 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Miami
              </span>

              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Luxury Vehicles
              </span>

              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                24/7 Support
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}