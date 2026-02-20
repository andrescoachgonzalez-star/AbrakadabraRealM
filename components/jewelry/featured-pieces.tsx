"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Heart, Eye } from "lucide-react"

const featuredPieces = [
  {
    id: 1,
    name: "Celestial Diamond Ring",
    collection: "Signature",
    price: "$12,500",
    material: "18K White Gold",
    stone: "2.5ct Diamond",
    isNew: true,
  },
  {
    id: 2,
    name: "Colombian Emerald Pendant",
    collection: "Heritage",
    price: "$8,900",
    material: "24K Gold",
    stone: "3ct Emerald",
    isNew: false,
  },
  {
    id: 3,
    name: "Ruby Eternity Band",
    collection: "Passion",
    price: "$6,200",
    material: "Platinum",
    stone: "Burma Rubies",
    isNew: true,
  },
  {
    id: 4,
    name: "Golden Chain Necklace",
    collection: "Classic",
    price: "$4,500",
    material: "22K Gold",
    stone: "—",
    isNew: false,
  },
  {
    id: 5,
    name: "Diamond Tennis Bracelet",
    collection: "Luxe",
    price: "$15,800",
    material: "Platinum",
    stone: "5ct Total",
    isNew: false,
  },
  {
    id: 6,
    name: "Sapphire Drop Earrings",
    collection: "Royal",
    price: "$7,400",
    material: "18K Gold",
    stone: "Ceylon Sapphires",
    isNew: true,
  },
]

export function FeaturedPieces() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [likedIds, setLikedIds] = useState<number[]>([])

  const toggleLike = (id: number) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.02] blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-4">
                Curated Selection
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground text-balance">
                Featured Pieces
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Handpicked masterpieces from our most coveted collections. Each piece represents the pinnacle of our artisan craft.
            </p>
          </div>
        </ScrollReveal>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredPieces.map((piece, index) => (
            <ScrollReveal key={piece.id} delay={index * 100}>
              <div
                className={cn(
                  "group relative bg-card rounded-2xl overflow-hidden border border-border transition-all duration-500",
                  "hover:shadow-2xl hover:border-primary/20"
                )}
                onMouseEnter={() => setHoveredId(piece.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Placeholder */}
                <div className="relative aspect-square bg-gradient-to-br from-secondary via-muted to-secondary overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `radial-gradient(circle at center, var(--primary) 1px, transparent 1px)`,
                        backgroundSize: "30px 30px",
                      }}
                    />
                  </div>

                  {/* Center Element */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border border-primary/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-primary/40">
                      <div className="w-20 h-20 rounded-full bg-primary/10 animate-pulse" />
                    </div>
                  </div>

                  {/* New Badge */}
                  {piece.isNew && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold tracking-wider rounded-full">
                      NEW
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div
                    className={cn(
                      "absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300",
                      hoveredId === piece.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    )}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleLike(piece.id)
                      }}
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                        likedIds.includes(piece.id)
                          ? "bg-primary text-primary-foreground"
                          : "bg-card/80 backdrop-blur-sm text-foreground hover:bg-card"
                      )}
                    >
                      <Heart className={cn("w-4 h-4", likedIds.includes(piece.id) && "fill-current")} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Shimmer Effect */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-1000",
                      hoveredId === piece.id && "translate-x-full"
                    )}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-xs font-medium tracking-wider text-primary uppercase">
                        {piece.collection}
                      </p>
                      <h3 className="font-serif text-lg font-bold text-foreground mt-1">
                        {piece.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                    <span>{piece.material}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <span>{piece.stone}</span>
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                    <span className="font-serif text-xl font-bold text-foreground">
                      {piece.price}
                    </span>
                    <a 
                      href="/jewelry/shop"
                      className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1 group/btn"
                    >
                      View Details
                      <svg
                        className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Button */}
        <ScrollReveal delay={400}>
          <div className="text-center mt-16">
            <a 
              href="/jewelry/shop"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-semibold tracking-wider transition-all duration-300 hover:gap-5 hover:shadow-xl"
            >
              VIEW ALL PIECES
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
