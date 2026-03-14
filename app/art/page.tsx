"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LuxuryHeader } from "@/components/luxury-header"
import { LuxuryFooter } from "@/components/luxury-footer"
import { getAllArtProducts } from "./data/art-products"

// ScrollReveal Component
function ScrollReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      {children}
    </div>
  )
}

const downloadableArt = [
  { id: 1, title: "TORBELLINO DE EMOCIONES", originalPrice: 5, price: 2.5, image: "/art/torbellino-art.webp" },
  { id: 2, title: "GARDEN OF SERENITY", originalPrice: 5, price: 2.5, image: "/art/garden-art.webp" },
  { id: 3, title: "COLORS OF LIFE", originalPrice: 5, price: 2.5, image: "/art/colorsoflife-art.webp" },
  { id: 4, title: "INNER SERENITY", originalPrice: 5, price: 2.5, image: "/art/inner-art.webp" },
  { id: 5, title: "SYMPHONY OF COLOR", originalPrice: 5, price: 2.5, image: "/art/symphony-art.webp" },
  { id: 6, title: "ENERGY GARDEN", originalPrice: 5, price: 2.5, image: "/art/energy-art.webp" },
  { id: 7, title: "ABSTRACT BLUE", originalPrice: 5, price: 2.5, image: "/art/abstract-art.webp" },
  { id: 8, title: "NEON LIFE", originalPrice: 5, price: 2.5, image: "/art/neonlife-art.webp" },
]

const hireCategories = [
  { id: 1, title: "Art Exhibitions", image: "/art/artexhibition-art.webp" },
  { id: 2, title: "Murals & Live Art", image: "/art/murals-art.webp" },
  { id: 3, title: "Fairs & Cultural Events", image: "/art/culturalevents-art.webp" },
]

const galleryImages = [
  { id: 1, image: "/art/gallery/gallery1.webp" },
  { id: 2, image: "/art/gallery/gallery2.webp" },
  { id: 3, image: "/art/gallery/gallery3.webp" },
  { id: 4, image: "/art/gallery/gallery4.webp" },
  { id: 5, image: "/art/gallery/gallery5.webp" },
  { id: 6, image: "/art/gallery/gallery6.webp" },
  { id: 7, image: "/art/gallery/gallery7.webp" },
  { id: 8, image: "/art/gallery/gallery8.webp" },
  { id: 9, image: "/art/gallery/gallery9.webp" },
  { id: 10, image: "/art/gallery/gallery10.webp" },
  { id: 11, image: "/art/gallery/gallery11.webp" },
  { id: 12, image: "/art/gallery/gallery12.webp" },
]

export default function ArtPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredPiece, setHoveredPiece] = useState<number | null>(null)
  const [downloadableHoveredPieces, setDownloadableHoveredPieces] = useState<{ [key: number]: boolean }>({})
  const [hoveredGallery, setHoveredGallery] = useState<number | null>(null)

  const CO_WA_NUMBER = "573103920569"
  const CO_SMS_NUMBER = "+573103920569"

  const artPieces = getAllArtProducts()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleDownloadableHover = (id: number, isHovered: boolean) => {
    setDownloadableHoveredPieces((prev) => ({
      ...prev,
      [id]: isHovered,
    }))
  }

  return (
    <main className="bg-background overflow-x-hidden">
      <LuxuryHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1920&q=80"
            alt="Art background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div
            className={cn(
              "transition-all duration-1000 delay-300",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-4">
              art,
            </h1>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-2">
              design
            </h2>
            <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-8">
              & invest.
            </h3>

            <a
              href="https://www.instagram.com/adrianahenaoart/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm tracking-wider hover:bg-white/20 transition-all duration-300"
            >
              Follow on Instagram
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={cn(
            "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-700",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          <span className="text-xs tracking-[0.2em] text-white/60 uppercase">Discover</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Important Notice */}
      <div className="bg-primary/10 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-foreground">
            <span className="font-bold text-primary">IMPORTANT:</span> NO PAINTING INCLUDES
            SHIPPING COSTS; SHIPMENTS ARE MADE FROM NEW YORK CITY, UNITED STATES.
          </p>
        </div>
      </div>

      {/* Art as Investment Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                Art as a form of
                <br />
                investment
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Investing in art not only beautifies your space, it can also increase its value
                over time. Throughout history, art has proven to be a solid investment, capable of
                withstanding economic fluctuations. Acquiring a unique piece is not just having
                something decorative, but a tangible asset that can multiply its value. Discover
                the work of Adriana Henao, whose abstract and spiritual art is destined to
                transcend. By purchasing one of her pieces, you are investing in beauty and a
                financial legacy.
              </p>
            </div>
          </ScrollReveal>

          {/* Art Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {artPieces.map((piece, index) => (
              <ScrollReveal key={piece.id} delay={index * 100}>
                <Link href={`/art/${piece.slug}`}>
                  <div
                    className="group relative cursor-pointer"
                    onMouseEnter={() => setHoveredPiece(index)}
                    onMouseLeave={() => setHoveredPiece(null)}
                  >
                    <div className="relative transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-2xl">
                      <div className="bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900 p-4 rounded-sm shadow-xl">
                        <div className="bg-gradient-to-br from-neutral-100 to-white p-3">
                          <div className="relative aspect-[4/5] overflow-hidden">
                            <img
                              src={piece.images?.[0] || "/placeholder.svg"}
                              alt={piece.title}
                              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                            />

                            <div
                              className={cn(
                                "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-1000",
                                hoveredPiece === index && "translate-x-full"
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 transition-all duration-500 group-hover:translate-x-2">
                      <h3 className="font-bold text-foreground tracking-wider text-lg">
                        {piece.title}
                      </h3>

                      <div className="flex items-center gap-3 mt-2">
                        {piece.originalPrice && (
                          <span className="text-muted-foreground line-through text-sm">
                            {piece.originalPrice.toLocaleString()},00 USD
                          </span>
                        )}

                        <span className="font-semibold text-lg text-primary">
                          {piece.price.toLocaleString()},00 USD
                        </span>
                      </div>

                      <div className="mt-3 h-0.5 bg-gradient-to-r from-primary to-primary/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Art Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                Downloadable
                <br />
                Adriana art:
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Investing in downloadable art is a meaningful way to support an artist&apos;s
                creative journey while acquiring something unique and versatile. Adriana Henao&apos;s
                abstract and spiritual pieces are now available in digital format, perfect for use
                as wallpapers, elements to share, or even as a collectible that could grow in value
                over time. By purchasing her downloadable art, you&apos;re not just owning a piece
                of her vision—you&apos;re fostering her ability to continue inspiring others.
                Accessible, timeless, and full of meaning, these pieces are an investment in
                creativity and a legacy of inspiration.
              </p>
            </div>
          </ScrollReveal>

          {/* Downloadable Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {downloadableArt.map((piece, index) => (
              <ScrollReveal key={piece.id} delay={index * 80}>
                <div
                  className="group cursor-pointer"
                  onMouseEnter={() => handleDownloadableHover(piece.id, true)}
                  onMouseLeave={() => handleDownloadableHover(piece.id, false)}
                >
                  <div className="relative transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-2xl">
                    <div className="bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900 p-3 rounded-sm shadow-xl">
                      <div className="bg-gradient-to-br from-neutral-100 to-white p-2">
                        <div className="relative aspect-square overflow-hidden">
                          <img
                            src={piece.image || "/placeholder.svg"}
                            alt={piece.title}
                            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                          />

                          <div
                            className={cn(
                              "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full transition-transform duration-1000",
                              downloadableHoveredPieces[piece.id] && "translate-x-full"
                            )}
                          />

                          <div
                            className={cn(
                              "absolute top-2 left-2 px-2 py-1 bg-primary text-primary-foreground text-xs font-bold tracking-wider rounded-full shadow-lg transition-all duration-500",
                              downloadableHoveredPieces[piece.id]
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-4"
                            )}
                          >
                            50% OFF
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 transition-all duration-500 group-hover:translate-x-2">
                    <h3 className="font-bold text-foreground text-sm tracking-wider">
                      {piece.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-muted-foreground line-through text-xs">
                        {piece.originalPrice},00 USD
                      </span>
                      <span className="text-primary font-semibold text-sm">
                        {piece.price.toFixed(2).replace(".", ",")} USD
                      </span>
                    </div>

                    <div className="mt-3 h-0.5 bg-gradient-to-r from-primary to-primary/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Where to Hire Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 via-background to-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold tracking-widest rounded-full mb-6">
                COLLABORATE WITH THE ARTIST
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-foreground italic leading-tight mb-6">
                Where to hire
                <br />
                <span className="text-primary">Adriana Henao?</span>
              </h2>
              <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed text-lg">
                Adriana Henao is an artist whose abstract work goes beyond the visual, connecting
                deeply with emotions and spirituality. Her art creates a profound connection
                between the viewer and their own essence.
              </p>
            </div>
          </ScrollReveal>

          {/* Hire Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {hireCategories.map((category, index) => (
              <ScrollReveal key={category.id} delay={index * 150}>
                <div className="group relative">
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-2xl">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                      <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 transition-all duration-500 group-hover:bg-primary group-hover:border-primary">
                        <span className="text-white font-serif text-xl">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="text-white text-xl font-bold tracking-wider mb-3 transition-transform duration-500 group-hover:translate-x-2">
                          {category.title}
                        </h3>

                        <div className="h-0.5 bg-gradient-to-r from-primary via-primary to-transparent w-0 group-hover:w-full transition-all duration-700" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-2 left-4 right-4 h-8 bg-primary/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA Buttons */}
          <ScrollReveal delay={400}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                href={`https://wa.me/${CO_WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 px-10 py-5 bg-primary text-primary-foreground rounded-full font-semibold tracking-wider text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:gap-6"
              >
                <span>CONTACT VIA WHATSAPP</span>

                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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

              <a
                href={`sms:${CO_SMS_NUMBER}`}
                className="group inline-flex items-center gap-4 px-10 py-5 bg-black text-white rounded-full font-semibold tracking-wider text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:gap-6"
              >
                <span>SEND TEXT MESSAGE</span>

                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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

      {/* Gallery Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground italic">
                Art <span className="text-primary">Gallery</span>
              </h2>

              <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Explore a curated gallery of Adriana Henao&apos;s abstract creations, where colors,
                textures and emotions merge to create a unique visual experience.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {galleryImages.map((img, index) => (
              <ScrollReveal key={img.id} delay={index * 80}>
                <div
                  className="group relative cursor-pointer"
                  onMouseEnter={() => setHoveredGallery(img.id)}
                  onMouseLeave={() => setHoveredGallery(null)}
                >
                  <div className="relative transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-2xl">
                    <div className="bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900 p-3 rounded-sm shadow-xl">
                      <div className="bg-gradient-to-br from-neutral-100 to-white p-2">
                        <div className="relative aspect-square overflow-hidden">
                          <img
                            src={img.image}
                            alt="Gallery artwork"
                            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                          />

                          <div
                            className={cn(
                              "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full transition-transform duration-1000",
                              hoveredGallery === img.id && "translate-x-full"
                            )}
                          />

                          <div
                            className={cn(
                              "absolute inset-0 bg-black/20 transition-opacity duration-500",
                              hoveredGallery === img.id ? "opacity-100" : "opacity-0"
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <LuxuryFooter />
    </main>
  )
}