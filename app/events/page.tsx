"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { LuxuryHeader } from "@/components/luxury-header"
import { LuxuryFooter } from "@/components/luxury-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Sparkles, FileCheck, Users2, Handshake, Globe, ArrowRight, Play } from "lucide-react"

// Values data
const values = [
  { icon: Sparkles, title: "Exclusive", desc: "Curated experiences unlike anything else" },
  { icon: FileCheck, title: "Commitment", desc: "Dedicated to excellence in every detail" },
  { icon: Users2, title: "Personalized", desc: "Tailored to your unique vision" },
  { icon: Handshake, title: "Collaborate", desc: "Partnerships that amplify creativity" },
  { icon: Globe, title: "Networking", desc: "Connecting artists and audiences globally" },
]

// Event types
const eventTypes = [
  {
    id: "private",
    title: "Private Events",
    subtitle: "Intimate & Exclusive",
    description: "Immerse yourself in an exclusive musical experience with our Abrakadabra private events. Designed to create unforgettable moments, these events are a celebration of music, community and connection.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    stats: [
      { label: "Events Hosted", value: "200+" },
      { label: "Cities", value: "15+" },
      { label: "VIP Guests", value: "5K+" },
    ],
  },
  {
    id: "video-sets",
    title: "Private Video Sets",
    subtitle: "Music Meets Visuals",
    description: "Discover a unique experience with our Abrakadabra private video sets, where music and visuals merge in an exclusive atmosphere. Designed for those looking for a special moment.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    stats: [
      { label: "Productions", value: "80+" },
      { label: "Artists Featured", value: "120+" },
      { label: "Views", value: "2M+" },
    ],
  },
  {
    id: "collaborations",
    title: "Collaborations with Organizers",
    subtitle: "Stronger Together",
    description: "At Abrakadabra, we believe in the power of collaboration to create unforgettable experiences. We look forward to joining forces with other event organizers who share our passion for music.",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80",
    stats: [
      { label: "Partners", value: "50+" },
      { label: "Joint Events", value: "100+" },
      { label: "Reach", value: "500K+" },
    ],
  },
]

// Gallery images
const galleryImages = [
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80",
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80",
  "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&q=80",
]

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const numericPart = target.replace(/[^0-9]/g, "")
  const suffixPart = target.replace(/[0-9]/g, "")
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return
    const end = parseInt(numericPart)
    const duration = 2000
    const steps = 60
    const increment = end / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [hasStarted, numericPart])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffixPart}{suffix}
    </span>
  )
}

export default function EventsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeEvent, setActiveEvent] = useState(0)
  const [hoveredGallery, setHoveredGallery] = useState<number | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="bg-background overflow-x-hidden">
      <LuxuryHeader />

      {/* Hero Section - Full screen with video-style overlay */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80"
            alt="Concert atmosphere"
            className={cn(
              "w-full h-full object-cover transition-transform duration-[3s]",
              isLoaded ? "scale-100" : "scale-110"
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 pb-24 pt-40">
          <div className="max-w-3xl">
            <div className={cn(
              "transition-all duration-1000 delay-300",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">Abrakadabra Realm</span>
              </div>
            </div>

            <h1 className={cn(
              "transition-all duration-1000 delay-500",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}>
              <span className="block font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.85] text-pretty">
                Our
              </span>
              <span className="block font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-primary leading-[0.85] italic mt-2">
                events
              </span>
            </h1>

            <p className={cn(
              "mt-8 text-lg text-white/70 leading-relaxed max-w-xl transition-all duration-1000 delay-700",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}>
              At Abrakadabra Realm, our philosophy is centered on the deep connection between music and freedom of expression. Every note and beat has the ability to evoke emotions and create unforgettable experiences.
            </p>

            <div className={cn(
              "mt-10 flex flex-wrap gap-4 transition-all duration-1000 delay-900",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}>
              <a
                href="#event-types"
                className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold tracking-wider text-sm hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
              >
                Explore Events
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#gallery"
                className="group flex items-center gap-3 px-8 py-4 border border-white/30 text-white rounded-full font-semibold tracking-wider text-sm hover:bg-white/10 transition-all duration-300"
              >
                <Play className="w-4 h-4" />
                View Gallery
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={cn(
          "absolute bottom-8 right-8 flex flex-col items-center gap-2 transition-all duration-1000 delay-[1.1s]",
          isLoaded ? "opacity-60" : "opacity-0"
        )}>
          <span className="text-white/50 text-xs tracking-[0.2em] uppercase [writing-mode:vertical-lr]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Values Section - Horizontal scrolling cards */}
      <section className="relative py-24 bg-foreground overflow-hidden">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">What Defines Us</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-background mt-4">Our Core Values</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="group relative bg-background/5 border border-background/10 rounded-2xl p-6 text-center hover:bg-background/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-primary/10 to-transparent" />
                  
                  <div className="relative">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-background/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                      <value.icon className="w-6 h-6 text-background/70 group-hover:text-primary transition-colors duration-500" />
                    </div>
                    <h3 className="font-semibold text-background tracking-wider text-sm">{value.title}</h3>
                    <p className="text-background/50 text-xs mt-2 leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types - Interactive showcase */}
      <section id="event-types" className="py-32 bg-background scroll-mt-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">What We Offer</span>
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mt-4 text-pretty">
                Experiences Crafted <br className="hidden md:block" />
                <span className="italic text-primary">for You</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-secondary rounded-full p-1.5 gap-1">
              {eventTypes.map((event, index) => (
                <button
                  key={event.id}
                  onClick={() => setActiveEvent(index)}
                  className={cn(
                    "px-6 py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-300",
                    activeEvent === index
                      ? "bg-foreground text-background shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {event.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Event Content */}
          {eventTypes.map((event, index) => (
            <div
              key={event.id}
              className={cn(
                "transition-all duration-700",
                activeEvent === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 absolute pointer-events-none"
              )}
            >
              {activeEvent === index && (
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Image side */}
                  <div className="relative group">
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Stats overlay at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="flex gap-8">
                          {event.stats.map((stat) => (
                            <div key={stat.label}>
                              <p className="font-serif text-3xl font-bold text-white">
                                <AnimatedCounter target={stat.value} />
                              </p>
                              <p className="text-white/60 text-xs tracking-wider mt-1">{stat.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl" />
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-3xl" />
                  </div>

                  {/* Content side */}
                  <div>
                    <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">{event.subtitle}</span>
                    <h3 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3">{event.title}</h3>
                    
                    <div className="w-16 h-0.5 bg-primary mt-6 mb-6" />
                    
                    <p className="text-muted-foreground leading-relaxed text-lg">{event.description}</p>

                    <div className="mt-8 flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">01</span>
                        </div>
                        <p className="text-foreground font-medium">We are committed to providing an inclusive and diverse space</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">02</span>
                        </div>
                        <p className="text-foreground font-medium">Artists who share our vision of music as a conscious art form</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">03</span>
                        </div>
                        <p className="text-foreground font-medium">Every note and beat evokes emotions that last forever</p>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/15551234567?text=${encodeURIComponent(`Hi, I'm interested in ${event.title} with Abrakadabra Realm. Could you provide more details?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 mt-10 px-8 py-4 bg-foreground text-background rounded-full font-semibold tracking-wider text-sm hover:shadow-xl transition-all duration-300"
                    >
                      GET IN TOUCH
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section - Masonry with hover effects */}
      <section id="gallery" className="py-32 bg-secondary/50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">Captured Moments</span>
                <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mt-4">Event Gallery</h2>
              </div>
              <p className="hidden md:block text-muted-foreground max-w-sm text-right leading-relaxed">
                A glimpse into the unforgettable moments we create at every Abrakadabra event.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((img, index) => {
              const isLarge = index === 0 || index === 4
              return (
                <ScrollReveal key={index} delay={index * 80}>
                  <div
                    className={cn(
                      "group relative overflow-hidden rounded-2xl cursor-pointer",
                      isLarge ? "row-span-2 aspect-[3/4]" : "aspect-square"
                    )}
                    onMouseEnter={() => setHoveredGallery(index)}
                    onMouseLeave={() => setHoveredGallery(null)}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Event moment ${index + 1}`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className={cn(
                      "absolute inset-0 transition-all duration-500",
                      hoveredGallery === index
                        ? "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                        : "bg-transparent"
                    )} />
                    
                    {/* Shimmer */}
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-1000",
                      hoveredGallery === index && "translate-x-full"
                    )} />
                    
                    {/* Bottom info */}
                    <div className={cn(
                      "absolute bottom-0 left-0 right-0 p-6 transition-all duration-500",
                      hoveredGallery === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-white text-sm font-semibold tracking-wider">ABRAKADABRA</span>
                      </div>
                    </div>

                    {/* Corner accents */}
                    <div className={cn(
                      "absolute top-3 left-3 w-6 h-6 border-t border-l border-white/50 transition-all duration-500",
                      hoveredGallery === index ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    )} />
                    <div className={cn(
                      "absolute bottom-3 right-3 w-6 h-6 border-b border-r border-white/50 transition-all duration-500",
                      hoveredGallery === index ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    )} />
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80"
            alt="Event atmosphere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        </div>

        <div className="relative container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">Ready to Experience?</span>
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mt-6 text-pretty">
                {"Let's Create Something "}
                <span className="italic text-primary">Unforgettable</span>
              </h2>
              <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
                Whether you want to host a private event, collaborate, or simply be part of our next experience, we would love to hear from you.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/15551234567?text=Hi%2C%20I%27m%20interested%20in%20Abrakadabra%20events.%20Could%20you%20provide%20more%20details%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold tracking-wider text-sm hover:bg-[#1da851] hover:shadow-xl hover:shadow-[#25D366]/20 transition-all duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  CONTACT VIA WHATSAPP
                </a>
                <a
                  href="mailto:events@abrakadabrarealm.com"
                  className="group flex items-center gap-3 px-8 py-4 border border-white/30 text-white rounded-full font-semibold tracking-wider text-sm hover:bg-white/10 transition-all duration-300"
                >
                  SEND US AN EMAIL
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <LuxuryFooter />
    </main>
  )
}
