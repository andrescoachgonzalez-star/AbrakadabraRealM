"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight, Clock, Search, Tag } from "lucide-react"
import { LuxuryFooter } from "@/components/luxury-footer"
import { LuxuryHeader } from "@/components/luxury-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"
import { getAllNewsArticles, newsCategories } from "./data/news-articles"

const articles = getAllNewsArticles()

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
    const query = searchQuery.toLowerCase()
    const matchesSearch =
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.tags.some((tag) => tag.toLowerCase().includes(query))

    return matchesCategory && matchesSearch
  })

  const featuredArticles = filteredArticles.filter((article) => article.featured)
  const regularArticles = filteredArticles.filter((article) => !article.featured)
  const listArticles = activeCategory === "All" && !searchQuery ? regularArticles : filteredArticles

  return (
    <main className="bg-background overflow-x-hidden">
      <LuxuryHeader />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
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
              Stories, releases, and insights from the world of Abrakadabra Realm.
              Stay connected with the pulse of music, art, and culture.
            </p>
          </div>

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

          <div
            className={cn(
              "mt-8 flex flex-wrap gap-2 transition-all duration-1000 delay-600",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {newsCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300",
                  activeCategory === category
                    ? "bg-foreground text-background shadow-lg"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                )}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>

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

      {featuredArticles.length > 0 && activeCategory === "All" && !searchQuery && (
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="grid md:grid-cols-3 gap-6">
                <Link
                  href={`/news/${featuredArticles[0].slug}`}
                  className="md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden block min-h-[500px]"
                  onMouseEnter={() => setHoveredId(featuredArticles[0].id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <img
                    src={featuredArticles[0].image || "/placeholder.svg"}
                    alt={featuredArticles[0].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold tracking-wider rounded-full mb-4">
                      {featuredArticles[0].category.toUpperCase()}
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
                      {featuredArticles[0].title}
                    </h2>
                    <p className="text-white/70 text-sm leading-relaxed max-w-lg mb-4">
                      {featuredArticles[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-white/50 text-xs flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredArticles[0].date}
                      </span>
                      <span
                        className={cn(
                          "text-white text-xs font-semibold tracking-wider flex items-center gap-1 transition-all duration-300",
                          hoveredId === featuredArticles[0].id && "gap-3"
                        )}
                      >
                        READ MORE <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>

                {featuredArticles.slice(1, 3).map((article) => (
                  <Link
                    key={article.id}
                    href={`/news/${article.slug}`}
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
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <div className="container mx-auto px-4">
        <div className="flex items-center gap-6 mb-16">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
            ALL STORIES
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </div>

      <section className="pb-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listArticles.map((article, index) => (
              <ScrollReveal key={article.id} delay={index * 80}>
                <Link
                  href={`/news/${article.slug}`}
                  className="group block"
                  onMouseEnter={() => setHoveredId(article.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[16/10]">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-1000",
                        hoveredId === article.id && "translate-x-full"
                      )}
                    />

                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500" />

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

                  <div className="transition-all duration-300 group-hover:translate-x-2">
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5 mb-2">
                      <Clock className="w-3.5 h-3.5" />
                      {article.date}
                    </span>

                    <h3 className="font-serif text-xl font-bold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="mt-4 h-0.5 bg-gradient-to-r from-primary to-primary/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

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
