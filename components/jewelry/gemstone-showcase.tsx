"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"
import { useState } from "react"

type Gem = {
  id: string
  name: string
  subtitle: string
  color: string
  accentColor: string
  borderColor: string
  textColor: string
  comingSoon?: boolean
}

const gemstones: Gem[] = [
  // ✅ 1) Emeralds
  {
    id: "emeralds",
    name: "Emeralds",
    subtitle: "Colombian Treasure",
    color: "from-emerald-500/20 via-green-400/10 to-teal-500/20",
    accentColor: "bg-emerald-500",
    borderColor: "border-emerald-500/30 hover:border-emerald-500",
    textColor: "text-emerald-600",
  },

  // ✅ 2) Diamonds
  {
    id: "diamonds",
    name: "Diamonds",
    subtitle: "Brilliant Forever",
    color: "from-slate-200/30 via-white/20 to-slate-300/30",
    accentColor: "bg-slate-400",
    borderColor: "border-slate-400/30 hover:border-slate-400",
    textColor: "text-slate-600",
  },

  // ⏳ 3) Pure Gold (Coming Soon)
  {
    id: "gold",
    name: "Pure Gold",
    subtitle: "24K Excellence",
    color: "from-amber-400/20 via-yellow-500/10 to-orange-400/20",
    accentColor: "bg-amber-500",
    borderColor: "border-amber-500/30 hover:border-amber-500",
    textColor: "text-amber-600",
  },

  // ⏳ 4) Rubies (Coming Soon)
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

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Section Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
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
            {gemstones.map((gem) => {
              const isActive = activeGem === gem.id

              return (
                <a
                  key={gem.id}
                  href={`/jewelry/shop?material=${gem.id}`}
                  onMouseEnter={() => setActiveGem(gem.id)}
                  onMouseLeave={() => setActiveGem(null)}
                  className={cn(
                    "block",
                    "group relative px-8 py-5 rounded-2xl border-2 transition-all duration-500",
                    "min-w-[180px]",
                    "hover:shadow-xl hover:-translate-y-1",
                    gem.borderColor,
                    isActive && "scale-105"
                  )}
                >
                  {/* Gradient Background */}
                  <div
                    className={cn(
                      "absolute inset-0 rounded-2xl bg-gradient-to-br transition-opacity duration-500",
                      gem.color,
                      "opacity-0 group-hover:opacity-100"
                    )}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    {/* Accent Dot */}
                    <div
                      className={cn(
                        "w-3 h-3 rounded-full transition-transform duration-300",
                        gem.accentColor,
                        "group-hover:scale-125"
                      )}
                    />

                    <h3 className="font-serif text-lg font-bold text-foreground">
                      {gem.name}
                    </h3>

                    <p className={cn("text-xs font-medium tracking-wider uppercase", gem.textColor)}>
                      {gem.subtitle}
                    </p>

                    <svg
                      className={cn(
                        "w-5 h-5 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0",
                        gem.textColor
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </a>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
