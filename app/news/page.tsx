"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LuxuryHeader } from "@/components/luxury-header"
import { LuxuryFooter } from "@/components/luxury-footer"
import { Search, ArrowRight, Clock, Tag } from "lucide-react"

const categories = [
  "All",
  "Art",
  "Artists",
  "Education",
  "Entertainment",
  "Events",
  "Innovation",
  "Fashion",
  "Music",
]

const articles = [
  {
    id: 1,
    title: "UNA NOCHE DE LOCURA: BLESSD",
    date: "June 27, 2025",
    excerpt: "El 25 de mayo de 2025, Blessd set the stage on fire with an unforgettable night of music and energy...",
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "BERLIN EXPLORES THE COSMIC VISION",
    date: "March 29, 2025",
    excerpt: "Berlin has become the epicenter of avant-garde art with a new wave of cosmic-inspired exhibitions...",
    category: "Art",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
    featured: true,
  },
  {
    id: 3,
    title: "MARTIN GARRIX BECOMES THE FIRST",
    date: "March 25, 2025",
    excerpt: "Renowned DJ and producer Martin Garrix has reached a historic milestone in electronic music...",
    category: "Music",
    image: "https://images.unsplash.com/photo-1571266028243-3716f02d2d74?w=800&q=80",
    featured: true,
  },
  {
    id: 4,
    title: "THE MYSTERY OF THE BIGGEST",
    date: "March 22, 2025",
    excerpt: "This March 18th marks the 35th anniversary of one of the greatest art heists in modern history...",
    category: "Art",
    image: "https://images.unsplash.com/photo-1577720643272-265f09367456?w=800&q=80",
  },
  {
    id: 5,
    title: "SUNSET GATHERING AND REDMOOD: FUSING",
    date: "November 3, 2024",
    excerpt: "Sunset Gathering in session. A night where music and visual art merged into an unforgettable experience...",
    category: "Events",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
  },
  {
    id: 6,
    title: "PAULA SUAREZ TELLS HOW SHE",
    date: "October 20, 2024",
    excerpt: "Paula Suarez is not just an artist; she is a true visionary who has redefined the boundaries of creativity...",
    category: "Artists",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
  },
  {
    id: 7,
    title: "DARKNESS MUSIC RELEASE",
    date: "October 14, 2024",
    excerpt: "Musical Release: 8batzz Impacts the Scene with his darkest and most experimental production yet...",
    category: "Music",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
  },
  {
    id: 8,
    title: "BLACK COFFEE MAKES HISTORY AT",
    date: "October 12, 2024",
    excerpt: "Black Coffee breaking barriers. South African DJ makes history at one of the world's biggest festivals...",
    category: "Music",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80",
  },
  {
    id: 9,
    title: "THE MAIN STAGE OF THE",
    date: "October 12, 2024",
    excerpt: "AFRO NATION FESTIVAL. An unprecedented celebration of African music and culture that united thousands...",
    category: "Events",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
  },
  {
    id: 10,
    title: "DRINKING WATER FOR DISADVANTAGED COMMUNITIES",
    date: "October 11, 2024",
    excerpt: "Pablo Urbano, Co-founder of Auara, leads an initiative bringing clean drinking water to communities in need...",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=800&q=80",
  },
  {
    id: 11,
    title: "CIUDADES INTELIGENTES Y LA DATOCRACIA",
    date: "October 11, 2024",
    excerpt: "EL NUEVO TRACK DE ABRAKADABRA: A deep dive into smart cities and how data is reshaping urban life...",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
  },
  {
    id: 12,
    title: "GOOD MEMORIES TRANSFORMA EL DOLOR",
    date: "October 10, 2024",
    excerpt: "EL NUEVO TRACK DE ABRAKADABRA: A powerful new release that transforms pain into sonic beauty...",
    category: "Music",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
  },
  {
    id: 13,
    title: "REVIVE LA MAGIA DEL DISCO",
    date: "October 10, 2024",
    excerpt: "Revoluciona el Disco: Un Nuevo Track con Groove that brings the golden era of disco into 2024...",
    category: "Music",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80",
  },
  {
    id: 14,
    title: "UN ARTE QUE CONECTA",
    date: "October 5, 2024",
    excerpt: "Adriana Henao Presenta Su Arte Abstracto that bridges the gap between emotion and visual expression...",
    category: "Art",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80",
  },
  {
    id: 15,
    title: "8BATZZ: UN NUEVO CAMINO",
    date: "October 4, 2024",
    excerpt: "El Viaje De Autodescubrimiento De 8batzz. A new artistic path that challenges conventions...",
    category: "Artists",
    image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&q=80",
  },
  {
    id: 16,
    title: "EL NUEVO COMIENZO DE RIZZO",
    date: "October 2, 2024",
    excerpt: "Rizzo Lanza Su Nuevo EP Por El Sello De Abrakadabra, marking a fresh start in the electronic scene...",
    category: "Music",
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&q=80",
  },
  {
    id: 17,
    title: "BLASFEMIA LANZA SU NUEVO ALBUM",
    date: "October 1, 2024",
    excerpt: 'Blasfemia Lanza su Nuevo Album "Mi Otro Yo": A genre-bending exploration of identity and sound...',
    category: "Music",
    image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&q=80",
  },
  {
    id: 18,
    title: "SANDRA HENAO: LA VISION DETRAS",
    date: "October 1, 2024",
    excerpt: "Sandra Henao: Abrakadabra Realm, the visionary entrepreneur behind the brand that's changing everything...",
    category: "Artists",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
  },
  {
    id: 19,
    title: "LA ACADEMIA GRATUITA DE ABRAKADABRA",
    date: "September 21, 2024",
    excerpt: "Abrakadabra Realm lanza su Academia Gratuita, offering free education in music production and arts...",
    category: "Education",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=800&q=80",
  },
  {
    id: 20,
    title: "ABRAKADABRA REALM LANZA SU SELLO",
    date: "September 12, 2024",
    excerpt: "Abrakadabra Realm Lanza su Sello Discografico, a new record label dedicated to emerging talent...",
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
  },
]

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredArticles = filteredArticles.filter((a) => a.featured)
  const regularArticles = filteredArticles.filter((a) => !a.featured)

  return (
    <main className="bg-background overflow-x-hidden">
      <LuxuryHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Title */}
          <div className="max-w-3xl">
            <div
              className={cn(
                "transition-all duration-1000",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <span className="inline-block px-4 py-1.5 border border-primary/30 rounded-full text-xs font-semibold tracking-[0.2em] text-primary mb-6">
                ABRAKADABRA REALM
              </span>
            </div>

            <h1
              className={cn(
                "font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-none transition-all duration-1000 delay-200",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              Latest
              <br />
              <span className="text-primary">News</span>
            </h1>

            <p
              className={cn(
                "mt-6 text-muted-foreground text-lg max-w-xl leading-relaxed transition-all duration-1000 delay-400",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              Stories, releases, and insights from the world of Abrakadabra
              Realm. Stay connected with the pulse of music, art, and culture.
            </p>
          </div>

          {/* Search Bar */}
          <div
            className={cn(
              "mt-12 max-w-xl transition-all duration-1000 delay-500",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-lg focus:shadow-primary/5 transition-all duration-300"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div
            className={cn(
              "mt-8 flex flex-wrap gap-2 transition-all duration-1000 delay-600",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300",
                  activeCategory === cat
                    ? "bg-foreground text-background shadow-lg"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                )}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mt-6">
            <p className="text-sm text-muted-foreground">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""}
              {activeCategory !== "All" && (
                <span>
                  {" in "}
                  <span className="text-primary font-medium">{activeCategory}</span>
                </span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && activeCategory === "All" && !searchQuery && (
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Main Feature */}
                <a
                  href="#"
                  className="md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden block min-h-[500px]"
                  onMouseEnter={() => setHoveredId(featuredArticles[0]?.id ?? null)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <img
                    src={featuredArticles[0]?.image || "/placeholder.svg"}
                    alt={featuredArticles[0]?.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold tracking-wider rounded-full mb-4">
                      {featuredArticles[0]?.category.toUpperCase()}
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
                      {featuredArticles[0]?.title}
                    </h2>
                    <p className="text-white/70 text-sm leading-relaxed max-w-lg mb-4">
                      {featuredArticles[0]?.excerpt}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-white/50 text-xs flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredArticles[0]?.date}
                      </span>
                      <span
                        className={cn(
                          "text-white text-xs font-semibold tracking-wider flex items-center gap-1 transition-all duration-300",
                          hoveredId === featuredArticles[0]?.id && "gap-3"
                        )}
                      >
                        READ MORE <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </a>

                {/* Side Features */}
                {featuredArticles.slice(1, 3).map((article) => (
                  <a
                    key={article.id}
                    href="#"
                    className="group relative rounded-3xl overflow-hidden block min-h-[240px]"
                    onMouseEnter={() => setHoveredId(article.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] font-semibold tracking-wider rounded-full mb-3">
                        {article.category.toUpperCase()}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-white leading-tight mb-2">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="text-white/50 text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.date}
                        </span>
                        <ArrowRight
                          className={cn(
                            "w-3.5 h-3.5 text-white transition-all duration-300",
                            hoveredId === article.id ? "translate-x-1 opacity-100" : "opacity-0"
                          )}
                        />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-6 mb-16">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
            ALL STORIES
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </div>

      {/* Articles Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeCategory === "All" && !searchQuery ? regularArticles : filteredArticles).map(
              (article, index) => (
                <ScrollReveal key={article.id} delay={index * 80}>
                  <a
                    href="#"
                    className="group block"
                    onMouseEnter={() => setHoveredId(article.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Image */}
                    <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[16/10]">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />

                      {/* Shimmer */}
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-1000",
                          hoveredId === article.id && "translate-x-full"
                        )}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500" />

                      {/* Category Tag */}
                      <div
                        className={cn(
                          "absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full transition-all duration-500",
                          hoveredId === article.id
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-2"
                        )}
                      >
                        <Tag className="w-3 h-3 text-primary" />
                        <span className="text-[10px] font-semibold tracking-wider text-foreground">
                          {article.category.toUpperCase()}
                        </span>
                      </div>

                      {/* Read Arrow */}
                      <div
                        className={cn(
                          "absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-500 shadow-lg",
                          hoveredId === article.id
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 translate-y-4 scale-75"
                        )}
                      >
                        <ArrowRight className="w-4 h-4 text-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="transition-all duration-300 group-hover:translate-x-2">
                      {/* Date */}
                      <span className="text-xs text-muted-foreground flex items-center gap-1.5 mb-2">
                        <Clock className="w-3.5 h-3.5" />
                        {article.date}
                      </span>

                      {/* Title */}
                      <h3 className="font-serif text-xl font-bold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors duration-300">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {article.excerpt}
                      </p>

                      {/* Animated underline */}
                      <div className="mt-4 h-0.5 bg-gradient-to-r from-primary to-primary/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                  </a>
                </ScrollReveal>
              )
            )}
          </div>

          {/* Empty State */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-foreground mb-2">No articles found</p>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All")
                  setSearchQuery("")
                }}
                className="mt-6 px-6 py-3 bg-foreground text-background rounded-full text-sm font-semibold tracking-wider hover:opacity-90 transition-all duration-300"
              >
                CLEAR FILTERS
              </button>
            </div>
          )}
        </div>
      </section>

      <LuxuryFooter />
    </main>
  )
}
