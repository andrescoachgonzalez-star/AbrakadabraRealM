"use client"

import { useEffect, useRef, useState } from "react"
import { Car, Palette, Gem, Shirt, Calendar, Music, Users, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  { name: "RENTAL", icon: Car, href: "/car-rental", color: "from-rose-500/20 to-rose-500/5", accent: "group-hover:text-rose-500" },
  { name: "ART", icon: Palette, href: "/art", color: "from-amber-500/20 to-amber-500/5", accent: "group-hover:text-amber-500" },
  { name: "JEWELRY", icon: Gem, href: "/jewelry", color: "from-emerald-500/20 to-emerald-500/5", accent: "group-hover:text-emerald-500" },
  { name: "BRAND", icon: Shirt, href: "/clothing", color: "from-slate-500/20 to-slate-500/5", accent: "group-hover:text-slate-600" },
  { name: "EVENTS", icon: Calendar, href: "/events", color: "from-violet-500/20 to-violet-500/5", accent: "group-hover:text-violet-500" },
  { name: "DJS / PRODUCERS", icon: Music, href: "/artists/dj-producers", color: "from-cyan-500/20 to-cyan-500/5", accent: "group-hover:text-cyan-500" },
  { name: "MODELS", icon: Users, href: "/artists/models", color: "from-pink-500/20 to-pink-500/5", accent: "group-hover:text-pink-500" },
]

const bentoItems = [
  { 
    title: "PAULA SUAREZ",
    subtitle: "CEO - Abrakadabra",
    span: "col-span-2 row-span-2 md:col-span-1 md:row-span-2",
    featured: true,
    href: "/artists/paula-suarez",
    image: "/home/paula-home.webp"
  },
  { title: "OUR BRAND", span: "col-span-1 row-span-1", href: "/clothing", image:"/home/brand-home.png" },
  { title: "ART", span: "col-span-1 row-span-1", href: "/art", image:"/home/art-home.webp"  },
  { title: "JEWELRY", span: "col-span-1 row-span-1", href: "/jewelry", image:"/home/erings-home.webp" },
  { title: "MODELS", span: "col-span-1 row-span-1", href: "/artists/models", image:"/home/models-home.webp" },
  { title: "DJ / PRODUCERS", span: "col-span-2 md:col-span-1 row-span-1", href: "/artists/dj-producers", image: "/home/producer-home.webp" },
  { title: "RENTAL MIAMI", span: "col-span-1 row-span-1", href: "/car-rental", image:"/home/car-rental-home.webp"},
  { title: "JOIN US", span: "col-span-1 row-span-1", href: "/join-us", image:"/home/joinus-home.webp"},
  { title: "NEWS", span: "col-span-1 row-span-1", href: "/news", image:"/home/news-home.webp" },
  { title: "OUR MUSIC", span: "col-span-1 row-span-1", href: "/our-music", image:"/home/ourmusic-home.webp" },
  { title: "EVENTS", span: "col-span-2 md:col-span-1 row-span-1", href: "/events", image:"/home/events-home.webp"},
]

export function CategoriesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="categories" ref={sectionRef} className="relative overflow-hidden bg-background py-20 lg:py-32">

      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4">

        {/* CATEGORY ICONS */}
        <div className={cn(
          "flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {categories.map((category, index) => (
            <a
              key={category.name}
              href={category.href}
              className="group relative transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 sm:p-6 transition-all duration-500 group-hover:border-transparent group-hover:shadow-xl group-hover:-translate-y-2">

                <div className={cn(
                  "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  category.color
                )} />

                <div className="relative">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-muted/50 transition-all duration-500 group-hover:bg-background group-hover:shadow-lg group-hover:scale-110">
                    <category.icon className={cn(
                      "h-5 w-5 sm:h-6 sm:w-6 text-foreground/60 transition-all duration-500",
                      category.accent
                    )} />
                  </div>

                  <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-background opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                    <ArrowUpRight className="h-3 w-3" />
                  </div>
                </div>

                <span className="relative text-[9px] sm:text-[10px] font-semibold tracking-widest text-muted-foreground group-hover:text-foreground">
                  {category.name}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* PHILOSOPHY */}
        <div className={cn(
          "mt-20 text-center transition-all duration-1000 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="font-serif text-2xl italic text-foreground sm:text-3xl md:text-4xl">
            {'More than a brand, we are a philosophy of life'}
          </p>
        </div>

        {/* BENTO GRID */}
        <div className={cn(
          "mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 auto-rows-[150px] md:auto-rows-[180px] transition-all duration-1000 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>

          {bentoItems.map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              className={cn(
                "group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]",
                item.span
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >

              {/* IMAGE */}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/60" />

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">

                {item.featured && (
                  <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1.5 text-[10px] font-semibold tracking-wider text-primary-foreground shadow-lg">
                    {item.subtitle}
                  </span>
                )}

                <div className="flex flex-col items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
                  <p className="text-xs font-bold tracking-wider text-white sm:text-sm text-center">
                    {item.title}
                  </p>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 scale-110 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                  <p className="text-sm font-bold tracking-wider text-white sm:text-base text-center">
                    {item.title}
                  </p>
                  <span className="mt-2 text-xs text-white/70 tracking-wider">
                    EXPLORE
                  </span>
                </div>

              </div>

            </a>
          ))}

        </div>
      </div>
    </section>
  )
}