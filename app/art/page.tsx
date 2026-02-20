"use client"

import React from "react"

import { useState, useEffect, useRef } from "react"
import { Heart, Plus, Search, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { LuxuryHeader } from "@/components/luxury-header"
import { LuxuryFooter } from "@/components/luxury-footer"

// ScrollReveal Component
function ScrollReveal({ 
  children, 
  delay = 0, 
  className 
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

// Art pieces data - exact names and prices from the original page
const artPieces = [
  { id: 1, title: "THE LION", originalPrice: 14388, price: 7194, image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80" },
  { id: 2, title: "BREATH OF LIFE", price: 10000, image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&q=80" },
  { id: 3, title: "THE FOUR ELEMENTS", price: 2000, image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80" },
  { id: 4, title: "ETER", price: 1200, image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
  { id: 5, title: "WATER OF LIFE", price: 4000, image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80" },
  { id: 6, title: "XCHEL", price: 1200, image: "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?w=800&q=80" },
  { id: 7, title: "FEELING", price: 4000, image: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=800&q=80" },
  { id: 8, title: "EMOTIONAL LIPS", originalPrice: 17536, price: 8768, image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800&q=80" },
]

const downloadableArt = [
  { id: 1, title: "TORBELLINO DE EMOCIONES", originalPrice: 5, price: 2.5, image: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=600&q=80" },
  { id: 2, title: "GARDEN OF SERENITY", originalPrice: 5, price: 2.5, image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&q=80" },
  { id: 3, title: "COLORS OF LIFE", originalPrice: 5, price: 2.5, image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600&q=80" },
  { id: 4, title: "INNER SERENITY", originalPrice: 5, price: 2.5, image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=600&q=80" },
  { id: 5, title: "SYMPHONY OF COLOR", originalPrice: 5, price: 2.5, image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=600&q=80" },
  { id: 6, title: "ENERGY GARDEN", originalPrice: 5, price: 2.5, image: "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?w=600&q=80" },
  { id: 7, title: "ABSTRACT BLUE", originalPrice: 5, price: 2.5, image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80" },
  { id: 8, title: "NEON LIFE", originalPrice: 5, price: 2.5, image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600&q=80" },
]

const hireCategories = [
  { title: "Art Exhibitions", image: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=600&q=80" },
  { title: "Murals & Live Art", image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600&q=80" },
  { title: "Fairs & Cultural Events", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80" },
]

export default function ArtPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredPiece, setHoveredPiece] = useState<number | null>(null)
  const [downloadableHoveredPieces, setDownloadableHoveredPieces] = useState<{ [key: number]: boolean }>({})

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleDownloadableHover = (id: number, isHovered: boolean) => {
    setDownloadableHoveredPieces(prev => ({
      ...prev,
      [id]: isHovered
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
          <div className={cn(
            "transition-all duration-1000 delay-300",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
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
              href="https://instagram.com/abrakadabrarealm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm tracking-wider hover:bg-white/20 transition-all duration-300"
            >
              Follow on Instagram
            </a>
          </div>

          </div>

        {/* Scroll Indicator */}
        <div className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-700",
          isLoaded ? "opacity-100" : "opacity-0"
        )}>
          <span className="text-xs tracking-[0.2em] text-white/60 uppercase">Discover</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Important Notice */}
      <div className="bg-primary/10 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-foreground">
            <span className="font-bold text-primary">IMPORTANT:</span> NO PAINTING INCLUDES SHIPPING COSTS; SHIPMENTS ARE MADE FROM NEW YORK CITY, UNITED STATES.
          </p>
        </div>
      </div>

      {/* Art as Investment Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                Art as a form of<br />investment
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Investing in art not only beautifies your space, it can also increase its value over time. Throughout history, art has proven to be a solid investment, capable of withstanding economic fluctuations. Acquiring a unique piece is not just having something decorative, but a tangible asset that can multiply its value. Discover the work of Adriana Henao, whose abstract and spiritual art is destined to transcend. By purchasing one of her pieces, you are investing in beauty and a financial legacy.
              </p>
            </div>
          </ScrollReveal>

          {/* Art Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {artPieces.map((piece, index) => (
              <ScrollReveal key={piece.id} delay={index * 100}>
                <div 
                  className="group relative cursor-pointer"
                  onMouseEnter={() => setHoveredPiece(piece.id)}
                  onMouseLeave={() => setHoveredPiece(null)}
                >
                  {/* Frame Container with elegant shadow */}
                  <div className="relative transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-2xl">
                    {/* Outer Frame */}
                    <div className="bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900 p-4 rounded-sm shadow-xl">
                      {/* Inner Frame */}
                      <div className="bg-gradient-to-br from-neutral-100 to-white p-3">
                        {/* Image */}
                        <div className="relative aspect-[4/5] overflow-hidden">
                          <img
                            src={piece.image || "/placeholder.svg"}
                            alt={piece.title}
                            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                          />
                          
                          {/* Shimmer Effect on Hover */}
                          <div className={cn(
                            "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full transition-transform duration-1000",
                            hoveredPiece === piece.id && "translate-x-full"
                          )} />
                          
                          {/* Quick View Button */}
                          <div className={cn(
                            "absolute inset-0 bg-black/30 flex items-center justify-center transition-all duration-500",
                            hoveredPiece === piece.id ? "opacity-100" : "opacity-0"
                          )}>
                            <button className={cn(
                              "w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all duration-500 shadow-lg",
                              hoveredPiece === piece.id ? "scale-100 rotate-0" : "scale-0 rotate-180"
                            )}>
                              <Plus className="w-6 h-6" />
                            </button>
                          </div>

                          {/* Favorite Button */}
                          <button className={cn(
                            "absolute top-3 right-3 w-10 h-10 rounded-full bg-white/95 flex items-center justify-center transition-all duration-500 hover:bg-primary hover:text-white shadow-lg",
                            hoveredPiece === piece.id ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                          )}>
                            <Heart className="w-5 h-5" />
                          </button>

                          {/* Sale Badge */}
                          {piece.originalPrice && (
                            <div className={cn(
                              "absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold tracking-wider rounded-full shadow-lg transition-all duration-500",
                              hoveredPiece === piece.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                            )}>
                              50% OFF
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info with elegant animation */}
                  <div className="mt-6 transition-all duration-500 group-hover:translate-x-2">
                    <h3 className="font-bold text-foreground tracking-wider text-lg">{piece.title}</h3>
                    <div className="flex items-center gap-3 mt-2">
                      {piece.originalPrice && (
                        <span className="text-muted-foreground line-through text-sm">
                          {piece.originalPrice.toLocaleString()},00 USD
                        </span>
                      )}
                      <span className={cn(
                        "font-semibold text-lg",
                        piece.originalPrice ? "text-primary" : "text-foreground"
                      )}>
                        {piece.price.toLocaleString()},00 USD
                      </span>
                    </div>
                    
                    {/* Animated underline */}
                    <div className="mt-3 h-0.5 bg-gradient-to-r from-primary to-primary/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </div>
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
                Downloadable<br />Adriana art:
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Investing in downloadable art is a meaningful way to support an artist's creative journey while acquiring something unique and versatile. Adriana Henao's abstract and spiritual pieces are now available in digital format, perfect for use as wallpapers, elements to share, or even as a collectible that could grow in value over time. By purchasing her downloadable art, you're not just owning a piece of her vision—you're fostering her ability to continue inspiring others. Accessible, timeless, and full of meaning, these pieces are an investment in creativity and a legacy of inspiration.
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
                  {/* Frame Container with elegant shadow */}
                  <div className="relative transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-2xl">
                    {/* Outer Frame */}
                    <div className="bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900 p-3 rounded-sm shadow-xl">
                      {/* Inner Frame */}
                      <div className="bg-gradient-to-br from-neutral-100 to-white p-2">
                        {/* Image */}
                        <div className="relative aspect-square overflow-hidden">
                          <img
                            src={piece.image || "/placeholder.svg"}
                            alt={piece.title}
                            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                          />
                          
                          {/* Shimmer Effect on Hover */}
                          <div className={cn(
                            "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full transition-transform duration-1000",
                            downloadableHoveredPieces[piece.id] && "translate-x-full"
                          )} />
                          
                          {/* Quick View Button */}
                          <div className={cn(
                            "absolute inset-0 bg-black/30 flex items-center justify-center transition-all duration-500",
                            downloadableHoveredPieces[piece.id] ? "opacity-100" : "opacity-0"
                          )}>
                            <button className={cn(
                              "w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all duration-500 shadow-lg",
                              downloadableHoveredPieces[piece.id] ? "scale-100 rotate-0" : "scale-0 rotate-180"
                            )}>
                              <Plus className="w-5 h-5" />
                            </button>
                          </div>

                          {/* Favorite Button */}
                          <button className={cn(
                            "absolute top-2 right-2 w-8 h-8 rounded-full bg-white/95 flex items-center justify-center transition-all duration-500 hover:bg-primary hover:text-white shadow-lg",
                            downloadableHoveredPieces[piece.id] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                          )}>
                            <Heart className="w-4 h-4" />
                          </button>

                          {/* Sale Badge */}
                          <div className={cn(
                            "absolute top-2 left-2 px-2 py-1 bg-primary text-primary-foreground text-xs font-bold tracking-wider rounded-full shadow-lg transition-all duration-500",
                            downloadableHoveredPieces[piece.id] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                          )}>
                            50% OFF
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info with elegant animation */}
                  <div className="mt-5 transition-all duration-500 group-hover:translate-x-2">
                    <h3 className="font-bold text-foreground text-sm tracking-wider">{piece.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-muted-foreground line-through text-xs">
                        {piece.originalPrice},00 USD
                      </span>
                      <span className="text-primary font-semibold text-sm">
                        {piece.price.toFixed(2).replace('.', ',')} USD
                      </span>
                    </div>
                    
                    {/* Animated underline */}
                    <div className="mt-3 h-0.5 bg-gradient-to-r from-primary to-primary/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Where to Hire Section - Elegant Redesign */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 via-background to-muted/50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header with elegant animation */}
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold tracking-widest rounded-full mb-6">
                COLLABORATE WITH THE ARTIST
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-foreground italic leading-tight mb-6">
                Where to hire<br />
                <span className="text-primary">Adriana Henao?</span>
              </h2>
              <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed text-lg">
                Adriana Henao is an artist whose abstract work goes beyond the visual, connecting deeply with emotions and spirituality. Her art creates a profound connection between the viewer and their own essence.
              </p>
            </div>
          </ScrollReveal>

          {/* Hire Categories - Elegant Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {hireCategories.map((category, index) => (
              <ScrollReveal key={category.title} delay={index * 150}>
                <div className="group relative cursor-pointer">
                  {/* Card Container */}
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-2xl">
                    {/* Image Container */}
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                      
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      
                      {/* Number Badge */}
                      <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 transition-all duration-500 group-hover:bg-primary group-hover:border-primary">
                        <span className="text-white font-serif text-xl">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      
                      {/* Content at Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="text-white text-xl font-bold tracking-wider mb-3 transition-transform duration-500 group-hover:translate-x-2">
                          {category.title}
                        </h3>
                        
                        {/* Animated Line */}
                        <div className="h-0.5 bg-gradient-to-r from-primary via-primary to-transparent w-0 group-hover:w-full transition-all duration-700" />
                        
                        {/* Arrow Icon */}
                        <div className="mt-4 flex items-center gap-2 text-white/80 text-sm font-medium opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                          <span>Learn more</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative shadow element */}
                  <div className="absolute -bottom-2 left-4 right-4 h-8 bg-primary/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA Button */}
          <ScrollReveal delay={400}>
            <div className="text-center">
              <a 
                href="#contact-form"
                className="group inline-flex items-center gap-4 px-10 py-5 bg-primary text-primary-foreground rounded-full font-semibold tracking-wider text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:gap-6"
              >
                <span>HIRE ADRIANA NOW</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Image Side */}
                <div className="relative min-h-[400px] lg:min-h-full">
                  <img
                    src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80"
                    alt="Artist at work"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Form Side */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-foreground text-center mb-2">Complete the form</h3>
                  <p className="text-muted-foreground text-center mb-8">to hire Adriana Henao</p>

                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-muted-foreground">
                        <option>Select Country</option>
                        <option>United States</option>
                        <option>Colombia</option>
                        <option>Mexico</option>
                        <option>Spain</option>
                      </select>
                      <input
                        type="tel"
                        placeholder="Phone"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Event Type"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    />

                    <div className="py-4">
                      <p className="text-sm text-foreground mb-3">
                        How many hours do you want to hire the artist? <span className="text-primary">*</span>
                      </p>
                      <div className="space-y-2">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input type="radio" name="hours" className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">less than 2 hours</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input type="radio" name="hours" className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">4 hours</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input type="radio" name="hours" className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">more than 6 hours</span>
                        </label>
                      </div>
                    </div>

                    <textarea
                      placeholder="Tell us more about your event, location, number of guests, what do you have in mind?"
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                    />

                    <button
                      type="submit"
                      className="w-full py-4 bg-primary text-primary-foreground font-semibold tracking-wider rounded-lg hover:opacity-90 transition-all duration-300"
                    >
                      Submit Form
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <LuxuryFooter />
    </main>
  )
}
