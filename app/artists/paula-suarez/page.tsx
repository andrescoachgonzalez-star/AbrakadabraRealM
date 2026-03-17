"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LuxuryHeader } from "@/components/luxury-header"
import { LuxuryFooter } from "@/components/luxury-footer"
import { ArtistContactCard } from "@/components/artists/artist-contact-card"
import { ArrowRight, Play, Star, Award, Tv, Film, Camera } from "lucide-react"

// TV Shows / Brand logos
const tvLogos = [
  "Latin Angels",
  "RCN",
  "Muy Buenos Dias",
  "Fashion TV",
  "Show Business TV",
  "Americateve 41",
]

// Brand collaborations
const brandCollabs = [
  "Gjeans Colombia",
  "OMG Swimwear",
  "Vfit Sport Clothes",
  "ChicMe",
  "Keratherapy",
  "Lola Bendita",
  "Pretty Little Thing",
  "Hot Miami Styles",
  "Cristals Cosmetics",
]

// Music videos
const musicVideos = [
  { title: "Te Robare", artist: "Nicky Jam", thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80" },
  { title: "Bailar Contigo", artist: "Mackie", thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80" },
  { title: "Algo Contigo", artist: "Gente de Zona", thumbnail: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80" },
  { title: "Santa Tentacion", artist: "El Roockie", thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80" },
]

const nextStepVideos = [
  { title: "Celosa", artist: "Nicky Jam", thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80" },
  { title: "Young Miko", artist: "Wisin", thumbnail: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400&q=80" },
  { title: "Vas A Llorar", artist: "El Gran Combo", thumbnail: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&q=80" },
  { title: "The Story Of A Kid", artist: "OMG Swim", thumbnail: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&q=80" },
]

// Photo gallery
const galleryImages = [
  "/paula/paula4.webp",
  "/paula/paula5.webp",
  "/paula/paula6.webp",
  "/paula/paula9.webp",
  "/paula/paula8.webp",
  "/paula/paula7.webp",
  "/paula/paula10.webp",
  "/paula/paula11.webp",
]

// Stats
const stats = [
  { number: "10+", label: "Years in the Industry", icon: Star },
  { number: "20+", label: "Brand Collaborations", icon: Award },
  { number: "8+", label: "Music Videos", icon: Film },
  { number: "6+", label: "TV Programs", icon: Tv },
]

export default function PaulaSuarezPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null)
  const [activeGalleryImage, setActiveGalleryImage] = useState<number | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="bg-background overflow-x-hidden">
      <LuxuryHeader />

      {/* ======== HERO - Split Screen ======== */}
      <section className="relative min-h-screen grid lg:grid-cols-2 overflow-hidden">
        {/* Left - Dark Side with text */}
        <div className="relative bg-foreground flex items-center justify-center order-2 lg:order-1 py-24 lg:py-0">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />
          <div className={cn(
            "absolute top-20 left-10 w-24 h-24 rounded-full border border-primary/20 transition-all duration-[2s]",
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-50"
          )} />
          <div className={cn(
            "absolute bottom-32 right-16 w-16 h-16 rounded-full border border-primary/10 transition-all duration-[2.5s]",
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-50"
          )} />

          <div className="relative px-8 md:px-16 lg:px-20 max-w-2xl">
            <div className={cn(
              "transition-all duration-1000 delay-500",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-primary" />
                <p className="text-xs tracking-[0.4em] text-primary font-semibold">ACTRESS / MODEL / PRESENTER</p>
              </div>
              
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] mb-6">
                Paula
                <span className="block text-primary italic font-normal text-5xl md:text-6xl lg:text-7xl mt-2">Suarez</span>
              </h1>
              
              <p className="text-white/40 text-sm tracking-[0.3em] mb-10">MIAMI, FLORIDA</p>
              
              <div className="flex items-center gap-6">
                <a
                  href="#hire-paula"
                  className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold tracking-wider text-primary-foreground transition-all duration-300 hover:gap-5 hover:shadow-lg hover:shadow-primary/25"
                >
                  HIRE PAULA
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a href="#gallery" className="text-white/50 text-sm tracking-wider hover:text-primary transition-colors duration-300">
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative min-h-[60vh] lg:min-h-screen order-1 lg:order-2">
          <img
            src="/paula/paula-portada.webp"
            alt="Paula Suarez"
            className={cn(
              "w-full h-full object-cover object-top transition-all duration-[2s]",
              isLoaded ? "scale-100" : "scale-110"
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-transparent to-transparent opacity-30 hidden lg:block" />
          
          {/* Floating name tag */}
          <div className={cn(
            "absolute bottom-8 left-8 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/20 transition-all duration-1000 delay-1000",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <span className="text-white text-xs tracking-[0.2em]">Business Woman</span>
          </div>
        </div>
      </section>

      {/* ======== STATS BAR ======== */}
      <section className="py-16 bg-secondary/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-500">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-serif text-4xl font-bold text-foreground mb-1">{stat.number}</p>
                  <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======== TV LOGOS MARQUEE ======== */}
      <section className="py-10 bg-background border-b border-border overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...tvLogos, ...tvLogos, ...tvLogos].map((logo, i) => (
            <div key={`${logo}-${i}`} className="mx-12 flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              <span className="text-lg md:text-xl font-bold tracking-wider text-foreground/20 uppercase whitespace-nowrap">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ======== BIO - Asymmetric Layout ======== */}
      <section className="py-28 lg:py-36 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Image - Takes 5 columns */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left">
                <div className="relative">
                  {/* Background shape */}
                  <div className="absolute -inset-8 bg-primary/5 rounded-[3rem] -rotate-3" />
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/paula/paula2.webp"
                      alt="Paula Suarez portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-background rounded-2xl shadow-xl px-6 py-4 border border-border">
                    <p className="text-xs text-muted-foreground tracking-wider">Since</p>
                    <p className="font-serif text-3xl font-bold text-foreground">2010</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Content - Takes 7 columns */}
            <div className="lg:col-span-7 lg:pl-8">
              <ScrollReveal direction="right" delay={200}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-primary" />
                  <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Business Woman</p>
                </div>
                <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-[0.95]">
                  Paula<br /><span className="text-primary">Suarez</span>
                </h2>
                <div className="space-y-5 text-muted-foreground leading-relaxed text-lg max-w-xl">
                  <p>
                    Paula Suarez is an actress, model, and television presenter born in Colombia in 1994.
                    Paula began her modeling career at the age of 16, participating in beauty pageants such as{" "}
                    <strong className="text-foreground">Miss Maja Colombia Bogota 2012</strong>,{" "}
                    <strong className="text-foreground">Miss Mundo Cesar 2013</strong>, and winning the title of{" "}
                    <strong className="text-foreground">{'"Mi Gente Mundialista"'}</strong> model in 2013.
                  </p>
                  <p>
                    She appeared in various Colombian television programs, including Latin Angels Special,
                    Estilo RCN, and Muy Buenos Dias. Her career as a presenter expanded internationally to Mexico 
                    with Fashion TV Latin America in 2014 and Show Business in Marbella, Spain, in 2015.
                  </p>
                </div>
                <a
                  href="#hire-paula"
                  className="group mt-10 inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-sm font-semibold tracking-wider text-background transition-all duration-300 hover:gap-5 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
                >
                  HIRE PAULA
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ======== ABRAKADABRA REALM - Cinematic ======== */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-screen flex items-center">
          <img
            src="/paula/paula3.webp"
            alt="Paula Suarez - Abrakadabra Realm"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-2xl">
              <ScrollReveal direction="left">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-primary" />
                  <p className="text-xs tracking-[0.3em] text-primary font-semibold">THE FIGURE BEHIND</p>
                </div>
                <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[0.9]">
                  Abrakadabra<br />
                  <span className="text-primary italic font-normal">Realm</span>
                </h2>
                <p className="text-white/70 leading-relaxed text-lg max-w-lg mb-8">
                  This talented young woman, who is also a social communicator and journalist from the
                  University of La Sabana, has been the face of various clothing brands such as Gjeans Colombia,
                  OMG Swimwear Miami in 2017, Vfit Sport Clothes 2017, Chickme, Keratherapy Hair Products,
                  Lola Bendita, Pretty Little Thing, Hot Miami Styles, and Cristals Cosmetics, among others.
                </p>
                
                {/* Brand tags */}
                <div className="flex flex-wrap gap-2">
                  {brandCollabs.slice(0, 6).map((brand) => (
                    <span key={brand} className="px-4 py-2 rounded-full border border-white/20 text-white/60 text-xs tracking-wider hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default">
                      {brand}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ======== BRAND COLLABS MARQUEE ======== */}
      <section className="py-10 bg-foreground overflow-hidden">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...brandCollabs, ...brandCollabs, ...brandCollabs].map((brand, i) => (
            <div key={`${brand}-${i}`} className="mx-10 flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-lg md:text-xl font-bold tracking-wider text-white/30 uppercase whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ======== PHOTO GALLERY - Masonry Style ======== */}
      <section id="gallery" className="py-28 lg:py-36 bg-background scroll-mt-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />
                <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Portfolio</p>
                <div className="h-px w-12 bg-primary" />
              </div>
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground">
                Through the <span className="text-primary italic">Lens</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img, index) => {
              const isLarge = index === 0 || index === 5
              return (
                <ScrollReveal key={index} delay={index * 60}>
                  <div 
                    className={cn(
                      "group relative overflow-hidden rounded-xl cursor-pointer",
                      isLarge ? "row-span-2 aspect-[3/5]" : "aspect-square"
                    )}
                    onClick={() => setActiveGalleryImage(activeGalleryImage === index ? null : index)}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Paula Suarez gallery ${index + 1}`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <Camera className="w-4 h-4 text-white/70" />
                      <span className="text-white/70 text-xs tracking-wider">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ======== MUSIC VIDEOS - THE INDUSTRY ======== */}
      <section className="py-28 lg:py-36 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text - Left */}
            <ScrollReveal direction="left">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-primary" />
                  <p className="text-xs tracking-[0.3em] text-primary font-semibold">OVER +10 YEARS IN</p>
                </div>
                <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8 leading-[0.9]">
                  The<br /><span className="text-primary italic font-normal">Industry</span>
                </h2>
                <p className="text-white/50 leading-relaxed text-lg mb-10 max-w-md">
                  We have also seen Paula Suarez in music videos such as the clip for{" "}
                  {'"Algo Contigo"'} by Gente de Zona, {'"Yo Quiero Bailar Contigo"'} by Zion & Lennox ft. Makie,{" "}
                  {'"Santa Tentacion"'} by El Rookie, and {'"Te Robare"'} by Nicky Jam.
                </p>
                <a
                  href="#hire-paula"
                  className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold tracking-wider text-primary-foreground transition-all duration-300 hover:gap-5 hover:shadow-lg hover:shadow-primary/25"
                >
                  HIRE PAULA
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </ScrollReveal>

            {/* Video Grid - Right */}
            <ScrollReveal direction="right" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {musicVideos.map((video, index) => (
                  <div 
                    key={index} 
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                    onMouseEnter={() => setHoveredVideo(index)}
                    onMouseLeave={() => setHoveredVideo(null)}
                  >
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={`${video.title} - ${video.artist}`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={cn(
                        "w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 transition-all duration-500",
                        hoveredVideo === index ? "scale-110 bg-primary border-primary" : ""
                      )}>
                        <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white text-sm font-semibold tracking-wider">{video.title}</p>
                      <p className="text-white/50 text-xs tracking-wider">{video.artist}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ======== NYFA SECTION - Horizontal Card ======== */}
      <section className="py-28 lg:py-36 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="relative bg-foreground rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative min-h-[400px] lg:min-h-[500px]">
                  <img
                    src="/paula/paula2.webp"
                    alt="Paula in Miami"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-foreground/50 hidden lg:block" />
                  
                  {/* NYFA Badge */}
                  <div className="absolute top-8 left-8 bg-black/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10">
                    <span className="text-3xl font-bold tracking-[0.15em] text-white">NYFA</span>
                    <span className="text-[10px] block tracking-[0.2em] text-white/60 mt-0.5">NEW YORK FILM ACADEMY</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-8 bg-primary" />
                    <p className="text-xs tracking-[0.3em] text-primary font-semibold">EDUCATION</p>
                  </div>
                  <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    From Miami<br />to <span className="text-primary italic">Hollywood</span>
                  </h3>
                  <p className="text-white/50 leading-relaxed mb-8">
                    This beautiful model, at just 26 years old, has settled in Miami, where she presented
                    Spanish-language news in 2017 on Americateve 41, including The Rick Sanchez Show,
                    A 90 Millas, on the Friday program, and was a frequent guest on Happy Hour. Since 2018,
                    she decided to focus on her acting studies. She studied dramatic arts at The New York Film 
                    Academy Miami and will soon move to Los Angeles to prepare for her first role on the big screen.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ======== THE NEXT STEP ======== */}
      <section className="py-28 lg:py-36 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text - Left */}
            <ScrollReveal direction="left">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-primary" />
                  <p className="text-xs tracking-[0.3em] text-primary font-semibold">WHAT COMES NEXT</p>
                </div>
                <h2 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-8 leading-[0.9]">
                  The Next<br /><span className="text-primary italic font-normal">Step</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-10 max-w-md">
                  Acting film at the Matthew Barry Academy in Los Angeles, California from 2020 to 2023.
                  Now she is ready to take only the best.
                </p>
                <a
                  href="#hire-paula"
                  className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-sm font-semibold tracking-wider text-background transition-all duration-300 hover:gap-5 hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
                >
                  HIRE PAULA
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </ScrollReveal>

            {/* Video Grid - Right */}
            <ScrollReveal direction="right" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {nextStepVideos.map((video, index) => (
                  <div 
                    key={index} 
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                    onMouseEnter={() => setHoveredVideo(index + 10)}
                    onMouseLeave={() => setHoveredVideo(null)}
                  >
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={`${video.title} - ${video.artist}`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={cn(
                        "w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 transition-all duration-500",
                        hoveredVideo === index + 10 ? "scale-110 bg-primary border-primary" : ""
                      )}>
                        <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white text-sm font-semibold tracking-wider">{video.title}</p>
                      <p className="text-white/50 text-xs tracking-wider">{video.artist}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ======== HIRE CONTACT - Elegant ======== */}
      <section id="hire-paula" className="py-28 lg:py-36 bg-background scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            {/* Left - Info */}
            <ScrollReveal direction="left">
              <div className="lg:sticky lg:top-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-primary" />
                  <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Get in Touch</p>
                </div>
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Work with<br /><span className="text-primary italic">Paula</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-10 max-w-md">
                  Available for modeling, acting, TV presenting, brand ambassadorships, events, and music video appearances.
                </p>

                {/* Quick Stats */}
                <div className="space-y-4">
                  {[
                    { label: "Modeling", detail: "Fashion, Editorial, Commercial" },
                    { label: "Acting", detail: "Film, Television, Theater" },
                    { label: "Presenting", detail: "TV, Events, Live" },
                    { label: "Brand Ambassador", detail: "Fashion, Beauty, Lifestyle" },
                  ].map((item, i) => (
                    <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/20 transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Contact */}
            <ScrollReveal direction="right" delay={200}>
              <ArtistContactCard
                artistName="Paula"
                inquiryLabel="modeling, acting, presenting, or brand work"
                services={["Modeling", "Acting", "Presenting", "Brand Campaigns"]}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <LuxuryFooter />
    </main>
  )
}
