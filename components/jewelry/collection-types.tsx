"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"
import { useState } from "react"

const collections = [
  {
    id: "rings",
    name: "Rings",
    available: true,
    tagline: "Symbols of Forever",
    description: "From engagement rings to statement pieces, each ring is designed to capture life's most precious moments.",
    features: ["Engagement", "Wedding Bands", "Cocktail", "Eternity"],
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="50" cy="50" r="35" className="stroke-primary/30" />
        <circle cx="50" cy="50" r="28" className="stroke-primary/50" />
        <circle cx="50" cy="25" r="8" className="stroke-primary fill-primary/10" />
      </svg>
    ),
  },
  {
    id: "necklaces",
    name: "Necklaces",
    available: true,
    tagline: "Grace in Motion",
    description: "Elegant chains and pendants that frame the face and add sophistication to any ensemble.",
    features: ["Pendants", "Chains", "Chokers", "Statement"],
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 30 Q50 60 80 30" className="stroke-primary/50" />
        <path d="M20 35 Q50 70 80 35" className="stroke-primary/30" />
        <circle cx="50" cy="55" r="10" className="stroke-primary fill-primary/10" />
      </svg>
    ),
  },
  {
    id: "bracelets",
    name: "Bracelets",
    available: true,
    tagline: "Wrist Artistry",
    description: "Delicate bangles and bold cuffs that move with you, catching light at every turn.",
    features: ["Bangles", "Cuffs", "Tennis", "Charm"],
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="50" cy="50" rx="35" ry="20" className="stroke-primary/50" />
        <ellipse cx="50" cy="50" rx="28" ry="15" className="stroke-primary/30" />
        <circle cx="50" cy="35" r="5" className="stroke-primary fill-primary/10" />
        <circle cx="35" cy="45" r="3" className="stroke-primary/50 fill-primary/5" />
        <circle cx="65" cy="45" r="3" className="stroke-primary/50 fill-primary/5" />
      </svg>
    ),
  },
  {
    id: "earrings",
    name: "Earrings",
    available: true,
    tagline: "Frame Your Face",
    description: "From subtle studs to dramatic drops, earrings that complete every look with elegance.",
    features: ["Studs", "Drops", "Hoops", "Chandeliers"],
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="35" cy="30" r="6" className="stroke-primary fill-primary/10" />
        <path d="M35 36 L35 70" className="stroke-primary/50" />
        <circle cx="35" cy="75" r="8" className="stroke-primary/30" />
        <circle cx="65" cy="30" r="6" className="stroke-primary fill-primary/10" />
        <path d="M65 36 L65 70" className="stroke-primary/50" />
        <circle cx="65" cy="75" r="8" className="stroke-primary/30" />
      </svg>
    ),
  },
  {
    id: "chains",
    name: "Chains",
    available: false,
    tagline: "Linked Luxury",
    description: "Masterfully crafted chains in various styles, from classic to contemporary, each link perfected.",
    features: ["Cuban", "Rope", "Figaro", "Box"],
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="35" cy="40" rx="12" ry="8" className="stroke-primary/50" />
        <ellipse cx="50" cy="50" rx="12" ry="8" className="stroke-primary/40" />
        <ellipse cx="65" cy="60" rx="12" ry="8" className="stroke-primary/30" />
      </svg>
    ),
  },
  {
    id: "watches",
    name: "Watches",
    available: false,
    tagline: "Time Refined",
    description: "Exquisite timepieces adorned with precious stones, where function meets extraordinary form.",
    features: ["Diamond Set", "Gold", "Limited Edition", "Bespoke"],
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="50" cy="50" r="30" className="stroke-primary/50" />
        <circle cx="50" cy="50" r="25" className="stroke-primary/30" />
        <path d="M50 30 L50 50 L65 55" className="stroke-primary" strokeLinecap="round" />
        <rect x="45" y="15" width="10" height="5" rx="1" className="stroke-primary/50 fill-primary/10" />
        <rect x="45" y="80" width="10" height="5" rx="1" className="stroke-primary/50 fill-primary/10" />
      </svg>
    ),
  },
]

export function CollectionTypes() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-4">
              The Collections
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground text-balance">
              Artistry in Every Form
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Discover our diverse range of jewelry categories, each crafted with meticulous attention to detail and an unwavering commitment to excellence.
            </p>
          </div>
        </ScrollReveal>

        {/* Collection Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <ScrollReveal key={collection.id} delay={index * 80}>
              <div
                className={cn(
                  "group relative flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-500",
                  collection.available
                    ? "hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
                    : "opacity-85",
                  hoveredId === collection.id ? "z-10" : ""
                )}
                onMouseEnter={() => setHoveredId(collection.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "mb-6 h-20 w-20 transition-transform duration-500",
                    collection.available ? "group-hover:scale-110" : ""
                  )}
                >
                  {collection.icon}
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                  {collection.name}
                </h3>
                <p className="text-sm font-medium text-primary tracking-wide mb-4">
                  {collection.tagline}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {collection.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {collection.features.map((feature) => (
                    <span
                      key={feature}
                      className={cn(
                        "rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground transition-colors duration-300",
                        collection.available ? "group-hover:bg-primary/10 group-hover:text-primary" : ""
                      )}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  {collection.available ? (
                    <a
                      href={`/jewelry/shop?type=${collection.id}`}
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-xs font-semibold tracking-[0.2em] text-background uppercase transition-all duration-300 hover:gap-3 hover:bg-primary"
                    >
                      Explore Collection
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border bg-secondary px-5 py-3 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase"
                    >
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
