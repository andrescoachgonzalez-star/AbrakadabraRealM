"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"
import { useState } from "react"

const gemstones = [
  {
    id: "gold",
    name: "Pure Gold",
    subtitle: "24K Excellence",
    color: "from-amber-400/20 via-yellow-500/10 to-orange-400/20",
    accentColor: "bg-amber-500",
    borderColor: "border-amber-500/30 hover:border-amber-500",
    textColor: "text-amber-600",
  },
  {
    id: "diamonds",
    name: "Diamonds",
    subtitle: "Brilliant Forever",
    color: "from-slate-200/30 via-white/20 to-slate-300/30",
    accentColor: "bg-slate-400",
    borderColor: "border-slate-400/30 hover:border-slate-400",
    textColor: "text-slate-600",
  },
  {
    id: "emeralds",
    name: "Emeralds",
    subtitle: "Colombian Treasure",
    color: "from-emerald-500/20 via-green-400/10 to-teal-500/20",
    accentColor: "bg-emerald-500",
    borderColor: "border-emerald-500/30 hover:border-emerald-500",
    textColor: "text-emerald-600",
  },
  {
    id: "rubies",
    name: "Rubies",
    subtitle: "Passion in Stone",
    color: "from-red-500/20 via-rose-400/10 to-pink-500/20",
    accentColor: "bg-red-500",
    borderColor: "border-red-500/30 hover:border-red-500",
    textColor: "text-red-600",
  },
]

export function GemstoneShowcase() {
  const [activeGem, setActiveGem] = useState<string | null>(null)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Section Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-4">
              Our Materials
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground text-balance">
              Precious Foundations
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Every masterpiece begins with exceptional materials. Select a category to explore our exquisite collections.
            </p>
          </div>
        </ScrollReveal>

        {/* Navigation Buttons */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
            {gemstones.map((gem, index) => (
              <button
                key={gem.id}
                onClick={() => scrollToSection(gem.id)}
                onMouseEnter={() => setActiveGem(gem.id)}
                onMouseLeave={() => setActiveGem(null)}
                className={cn(
                  "group relative px-8 py-5 rounded-2xl border-2 transition-all duration-500",
                  "hover:shadow-xl hover:-translate-y-1 min-w-[180px]",
                  gem.borderColor,
                  activeGem === gem.id ? "scale-105" : ""
                )}
              >
                {/* Gradient Background */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    gem.color
                  )}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-2">
                  {/* Accent Dot */}
                  <div className={cn(
                    "w-3 h-3 rounded-full transition-transform duration-300 group-hover:scale-125",
                    gem.accentColor
                  )} />

                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {gem.name}
                  </h3>
                  <p className={cn("text-xs font-medium tracking-wider uppercase", gem.textColor)}>
                    {gem.subtitle}
                  </p>

                  {/* Arrow indicator */}
                  <svg
                    className={cn(
                      "w-5 h-5 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0",
                      gem.textColor
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
