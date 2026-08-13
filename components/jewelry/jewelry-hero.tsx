"use client"

import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const heroParticles = [
  { left: "8%", top: "58%", duration: "3.8s", delay: "1.1s" },
  { left: "23%", top: "95%", duration: "4.1s", delay: "1.5s" },
  { left: "20%", top: "68%", duration: "6.0s", delay: "0.2s" },
  { left: "81%", top: "79%", duration: "5.8s", delay: "1.1s" },
  { left: "34%", top: "82%", duration: "5.9s", delay: "0.9s" },
  { left: "32%", top: "40%", duration: "5.9s", delay: "0.8s" },
  { left: "81%", top: "49%", duration: "5.0s", delay: "0.2s" },
  { left: "58%", top: "43%", duration: "5.4s", delay: "1.7s" },
  { left: "36%", top: "8%", duration: "4.4s", delay: "1.8s" },
  { left: "81%", top: "49%", duration: "4.2s", delay: "0.4s" },
  { left: "57%", top: "24%", duration: "4.5s", delay: "1.2s" },
  { left: "15%", top: "36%", duration: "4.8s", delay: "1.0s" },
  { left: "62%", top: "72%", duration: "3.7s", delay: "0.2s" },
  { left: "17%", top: "33%", duration: "5.0s", delay: "1.6s" },
  { left: "23%", top: "26%", duration: "3.8s", delay: "1.6s" },
  { left: "72%", top: "17%", duration: "6.1s", delay: "0.7s" },
  { left: "90%", top: "14%", duration: "5.5s", delay: "1.3s" },
  { left: "53%", top: "66%", duration: "4.9s", delay: "0.5s" },
  { left: "12%", top: "91%", duration: "5.7s", delay: "1.4s" },
  { left: "47%", top: "87%", duration: "4.6s", delay: "0.6s" },
]

export function JewelryHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {heroParticles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: particle.left,
              top: particle.top,
              animation: `float ${particle.duration} ease-in-out infinite`,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-primary/5 animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full border border-primary/10 animate-pulse-soft animation-delay-500" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Top Badge */}
        <div
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-8 transition-all duration-1000",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          )}
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
            Exclusive Collection
          </span>
          <Sparkles className="w-4 h-4 text-primary" />
        </div>

        {/* Main Title */}
        <h1
          className={cn(
            "font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-foreground tracking-tight transition-all duration-1000 delay-200",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="block text-balance">Timeless</span>
          <span className="block text-primary mt-2 text-balance">Elegance</span>
        </h1>

        {/* Subtitle */}
        <p
          className={cn(
            "mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          Where precious metals meet extraordinary gemstones.
          <br className="hidden sm:block" />
          Each piece tells a story of refined craftsmanship and eternal beauty.
        </p>

        {/* Decorative Line */}
        <div
          className={cn(
            "mt-12 flex items-center justify-center gap-4 transition-all duration-1000 delay-500",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
          <div className="w-3 h-3 rotate-45 border border-primary/50" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        {/* Scroll Indicator */}
        <div
          className={cn(
            "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-700",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Discover
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" />
        </div>

        {/* Extra spacing after discover */}
        <div className="h-20" />
      </div>
    </section>
  )
}
