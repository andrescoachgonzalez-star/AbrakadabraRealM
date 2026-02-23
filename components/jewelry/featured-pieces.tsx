"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Heart, Eye } from "lucide-react"

type FeaturedPiece = {
  id: number
  name: string
  slug: string
  category: "Ring" | "Necklace" | "Pendant" | "Charm"
  collection: string
  badge?: "FREE SHIPPING" | "NEW" | "SALE"
  price: number
  compareAtPrice?: number
  currency: "USD"
  stone?: string
  material?: string
  imageSrc: string
  imageAlt: string
}

const featuredPieces: FeaturedPiece[] = [
  {
    id: 1,
    name: "Magic Ring",
    slug: "magic-ring",
    category: "Ring",
    collection: "Signature",
    badge: "FREE SHIPPING",
    price: 580,
    compareAtPrice: 700,
    currency: "USD",
    stone: "Green Stone",
    material: "Gold",
    imageSrc: "/jewelry/magic-ring.webp", // ✅ public/jewelry/magic-ring.webp
    imageAlt: "Magic Ring",
  },

  // ⚠️ IMPORTANTE:
  // Estos 5 están con placeholders de ruta.
  // Debes poner los archivos en public/jewelry/ y cambiar imageSrc a la ruta real.
  {
    id: 2,
    name: "TEAR RING",
    slug: "tear-ring",
    category: "Ring",
    collection: "Tear",
    badge: "FREE SHIPPING",
    price: 724,
    compareAtPrice: 820,
    currency: "USD",
    stone: "Green Stone",
    material: "Gold",
    imageSrc: "/jewelry/tear-ring.webp",
    imageAlt: "Tear Ring",
  },
  {
    id: 3,
    name: "MINI CROSS CHARM",
    slug: "mini-cross-charm",
    category: "Charm",
    collection: "Cross Collection",
    badge: "FREE SHIPPING",
    price: 424,
    compareAtPrice: 600,
    currency: "USD",
    stone: "Green Stone",
    material: "Gold",
    imageSrc: "/jewelry/mini-cross-charm.png",
    imageAlt: "Mini Cross Charm",
  },
  {
    id: 4,
    name: "I SAID BIG TEAR",
    slug: "i-said-big-tear",
    category: "Pendant",
    collection: "SAID",
    badge: "FREE SHIPPING",
    price: 1000,
    compareAtPrice: 1200,
    currency: "USD",
    stone: "Green Stone",
    material: "Gold",
    imageSrc: "/jewelry/i-said-big-tear.webp",
    imageAlt: "I SAID BIG TEAR",
  },
  {
    id: 5,
    name: "DIAMOND PENDANT",
    slug: "diamond-pendant",
    category: "Pendant",
    collection: "Signature",
    badge: "FREE SHIPPING",
    price: 379,
    compareAtPrice: 420,
    currency: "USD",
    stone: "Diamonds",
    material: "Gold",
    imageSrc: "/jewelry/diamond-pendant.webp",
    imageAlt: "Diamond Pendant",
  },
  {
    id: 6,
    name: "SAID FLOWER",
    slug: "said-flower",
    category: "Pendant",
    collection: "SAID",
    badge: "FREE SHIPPING",
    price: 580,
    compareAtPrice: 700,
    currency: "USD",
    stone: "Green Stones",
    material: "Gold",
    imageSrc: "/jewelry/said-flower.webp",
    imageAlt: "SAID FLOWER",
  },
]

function formatPrice(value: number, currency: "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value)
}

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
              Productos destacados del inicio (estáticos). Luego puedes ampliar con categorías y filtros.
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
                {/* IMAGE */}
                <div className="relative aspect-square bg-white overflow-hidden">
                  <Image
                    src={piece.imageSrc}
                    alt={piece.imageAlt}
                    fill
                    className="object-contain p-10 transition-transform duration-500 group-hover:scale-[1.02]"
                    priority={index < 3}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* BADGE */}
                  {piece.badge && (
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold tracking-wider rounded-md">
                        {piece.badge}
                      </span>
                    </div>
                  )}

                  {/* ACTIONS */}
                  <div
                    className={cn(
                      "absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300",
                      hoveredId === piece.id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4"
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
                      aria-label="Like"
                    >
                      <Heart
                        className={cn(
                          "w-4 h-4",
                          likedIds.includes(piece.id) && "fill-current"
                        )}
                      />
                    </button>

                    <a
                      href={`/jewelry/shop/${piece.slug}`}
                      className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors"
                      aria-label="View"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Eye className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <p className="text-xs font-medium tracking-wider text-primary uppercase">
                    {piece.collection} • {piece.category}
                  </p>

                  <h3 className="font-serif text-lg font-bold text-foreground mt-1">
                    {piece.name}
                  </h3>

                  <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                    <span>{piece.material ?? "—"}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <span>{piece.stone ?? "—"}</span>
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif text-xl font-bold text-foreground">
                        {formatPrice(piece.price, piece.currency)}
                      </span>

                      {piece.compareAtPrice ? (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(piece.compareAtPrice, piece.currency)}
                        </span>
                      ) : null}
                    </div>

                    <a
                      href={`/jewelry/shop/${piece.slug}`}
                      className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1 group/btn"
                    >
                      View Details
                      <svg
                        className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
