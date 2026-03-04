"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

type Material = {
  id: string
  name: string
  subtitle: string
  description: string
  image: string
  secondaryImage: string
  features: string[]
  accentColor: string
  textAccent: string
  bgAccent: string
  comingSoon?: boolean
}

const materials: Material[] = [
  // ✅ 1) Emeralds
  {
    id: "emeralds",
    name: "Emeralds",
    subtitle: "Colombian Treasure",
    description:
      "Sourced from the finest Colombian mines, our emeralds display a deep, vivid green that has captivated royalty for centuries. Each stone is carefully selected for its color saturation and transparency, ensuring every piece tells a story of natural magnificence.",
    image:
      "/jewelry/emerald-cross3.png",
    secondaryImage:
      "/jewelry/emerald-and-diamond-earrings.png",
    features: ["Colombian Origin", "Vivid Green", "Natural Beauty"],
    accentColor: "from-emerald-500/20 to-green-500/10",
    textAccent: "text-emerald-600",
    bgAccent: "bg-emerald-500",
  },

  // ✅ 2) Diamonds
  {
    id: "diamonds",
    name: "Diamonds",
    subtitle: "Brilliant Forever",
    description:
      "GIA certified diamonds of exceptional clarity and cut. Each stone is selected for its fire, brilliance, and scintillation. Our master craftsmen set each diamond to maximize its natural beauty, creating pieces that capture light and hearts in equal measure.",
    image:
      "/jewelry/diamond-pendant-port.png",
    secondaryImage:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
    features: ["GIA Certified", "VS1+ Clarity", "Conflict-Free"],
    accentColor: "from-slate-300/30 to-white/20",
    textAccent: "text-slate-600",
    bgAccent: "bg-slate-400",
  },

  // ⏳ 3) Gold (Próximamente)
  {
    id: "gold",
    name: "Pure Gold",
    subtitle: "24K Excellence",
    description:
      "Handcrafted from the finest gold, each piece radiates warmth and luxury. Our gold collection embodies timeless sophistication, featuring pieces that have been treasured across generations. From delicate chains to statement rings, every creation celebrates the enduring beauty of this precious metal.",
    image:
      "/jewelry/oro-portada-principal.png",
    secondaryImage:
      "/jewelry/oro-portada-secu.png",
    features: ["24K Pure Gold", "Certified Authenticity", "Lifetime Warranty"],
    accentColor: "from-amber-500/20 to-yellow-500/10",
    textAccent: "text-amber-600",
    bgAccent: "bg-amber-500",
    comingSoon: true,
  },

  // ⏳ 4) Rubies (Próximamente)
  {
    id: "rubies",
    name: "Rubies",
    subtitle: "Passion in Stone",
    description:
      "The king of gemstones. Our rubies possess the coveted pigeon blood red color, symbolizing passion and power. Sourced from the most prestigious mines, each ruby undergoes rigorous selection to ensure only the most exceptional stones grace our collections.",
    image:
      "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=2070&auto=format&fit=crop",
    secondaryImage:
      "https://images.unsplash.com/photo-1583937443566-6d671c6a5e32?q=80&w=2070&auto=format&fit=crop",
    features: ["Pigeon Blood Red", "Premium Grade", "Certified Genuine"],
    accentColor: "from-red-500/20 to-rose-500/10",
    textAccent: "text-red-600",
    bgAccent: "bg-red-500",
    comingSoon: true,
  },
]

export function MaterialSections() {
  return (
    <>
      {materials.map((material, index) => {
        const isComingSoon = !!material.comingSoon

        return (
          <section
            key={material.id}
            id={material.id}
            className={cn(
              "py-24 lg:py-32 relative overflow-hidden",
              index % 2 === 0 ? "bg-background" : "bg-secondary/20"
            )}
          >
            {/* Background Gradient */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-30 pointer-events-none",
                material.accentColor
              )}
            />

            <div className="container mx-auto px-4 relative z-10">
              <div
                className={cn(
                  "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto",
                  index % 2 === 1 && "lg:flex-row-reverse"
                )}
              >
                {/* Image Side */}
                <ScrollReveal direction={index % 2 === 0 ? "left" : "right"}>
                  <div className={cn("relative", index % 2 === 1 && "lg:order-2")}>
                    {/* Main Image */}
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={material.image || "/placeholder.svg"}
                        alt={material.name}
                        className={cn(
                          "w-full h-full object-cover transition-transform duration-700",
                          isComingSoon ? "opacity-70" : "hover:scale-105"
                        )}
                      />

                      {/* Overlay for Coming Soon */}
                      {isComingSoon && (
                        <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />
                      )}
                    </div>

                    {/* Secondary Image */}
                    <div
                      className={cn(
                        "absolute w-1/2 aspect-square rounded-xl overflow-hidden shadow-xl border-4 border-background",
                        index % 2 === 0 ? "-bottom-8 -right-8" : "-bottom-8 -left-8"
                      )}
                    >
                      <img
                        src={material.secondaryImage || "/placeholder.svg"}
                        alt={`${material.name} detail`}
                        className={cn("w-full h-full object-cover", isComingSoon && "opacity-70")}
                      />
                    </div>

                    {/* Decorative elements */}
                    <div
                      className={cn(
                        "absolute w-24 h-24 rounded-full border opacity-20",
                        index % 2 === 0 ? "-top-4 -left-4" : "-top-4 -right-4",
                        material.bgAccent.replace("bg-", "border-")
                      )}
                    />
                  </div>
                </ScrollReveal>

                {/* Content Side */}
                <ScrollReveal direction={index % 2 === 0 ? "right" : "left"}>
                  <div className={cn(index % 2 === 1 && "lg:order-1")}>
                    {/* Subtitle + Coming Soon badge */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <p
                        className={cn(
                          "text-xs font-semibold tracking-[0.3em] uppercase",
                          material.textAccent,
                          isComingSoon && "opacity-70"
                        )}
                      >
                        {material.subtitle}
                      </p>

                      {isComingSoon && (
                        <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-muted text-muted-foreground border">
                          Próximamente
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2
                      className={cn(
                        "font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance",
                        isComingSoon && "opacity-80"
                      )}
                    >
                      {material.name}
                    </h2>

                    {/* Decorative line */}
                    <div className="flex items-center gap-3 mb-8">
                      <div className={cn("w-12 h-1 rounded-full", material.bgAccent, isComingSoon && "opacity-60")} />
                      <div className={cn("w-3 h-3 rounded-full opacity-50", material.bgAccent, isComingSoon && "opacity-30")} />
                    </div>

                    {/* Description */}
                    <p className={cn("text-muted-foreground text-lg leading-relaxed mb-8", isComingSoon && "opacity-80")}>
                      {material.description}
                    </p>

                    {/* Stats */}
                    <div className={cn("grid grid-cols-3 gap-6 mb-10", isComingSoon && "opacity-80")}>
                      <div className="text-center p-4 rounded-xl bg-card border border-border">
                        <p className={cn("font-serif text-2xl font-bold", material.textAccent)}>100%</p>
                        <p className="text-xs text-muted-foreground mt-1">Authentic</p>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-card border border-border">
                        <p className={cn("font-serif text-2xl font-bold", material.textAccent)}>50+</p>
                        <p className="text-xs text-muted-foreground mt-1">Designs</p>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-card border border-border">
                        <p className={cn("font-serif text-2xl font-bold", material.textAccent)}>5yr</p>
                        <p className="text-xs text-muted-foreground mt-1">Warranty</p>
                      </div>
                    </div>

                    {/* CTA */}
                    {isComingSoon ? (
                      <button
                        type="button"
                        disabled
                        className={cn(
                          "inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold tracking-wider text-sm",
                          "bg-muted text-muted-foreground border cursor-not-allowed"
                        )}
                      >
                        Próximamente
                        <svg
                          className="w-4 h-4"
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
                      </button>
                    ) : (
                      <a
                        href={`/jewelry/shop?material=${material.id}`}
                        className={cn(
                          "group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold tracking-wider text-sm transition-all duration-300",
                          "bg-foreground text-background hover:opacity-90"
                        )}
                      >
                        Explore {material.name}
                        <svg
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                    )}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}