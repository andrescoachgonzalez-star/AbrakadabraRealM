"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, Tag } from "lucide-react"
import { LuxuryFooter } from "@/components/luxury-footer"
import { LuxuryHeader } from "@/components/luxury-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"
import { getNewsArticle, getRelatedNewsArticles } from "../data/news-articles"

const contentVariants = [
  "text-lg md:text-xl leading-9 text-foreground/90",
  "rounded-3xl border border-border bg-secondary/40 p-7 md:p-9 text-base md:text-lg leading-8 text-muted-foreground",
  "border-l-2 border-primary/30 pl-6 md:pl-8 text-base md:text-lg leading-8 text-muted-foreground",
] as const

export default function NewsDetailPage() {
  const params = useParams<{ id: string }>()
  const article = getNewsArticle(params.id)

  if (!article) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] text-primary uppercase mb-4">News</p>
          <h1 className="font-serif text-4xl text-foreground mb-4">Article not found</h1>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold tracking-wider text-background"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to news
          </Link>
        </div>
      </main>
    )
  }

  const relatedArticles = getRelatedNewsArticles(article.slug, 3)
  const introParagraphs = article.content.slice(0, 2)
  const remainingParagraphs = article.content.slice(2)

  return (
    <main className="bg-background overflow-x-hidden">
      <LuxuryHeader />

      <section className="relative min-h-[70vh] flex items-end pt-28 pb-16">
        <div className="absolute inset-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_32%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <ScrollReveal>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-white/80 hover:text-white transition"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to news
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={120} className="mt-8 max-w-5xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.3em] text-white uppercase backdrop-blur-sm">
              {article.category}
            </span>

            <h1 className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] max-w-4xl">
              {article.title}
            </h1>

            <p className="mt-6 max-w-2xl text-white/75 text-base md:text-lg leading-relaxed">
              {article.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 md:gap-6 text-white/60 text-xs tracking-[0.2em] uppercase">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                {article.readTime}
              </span>
              <span className="inline-flex items-center gap-2">
                <Tag className="h-4 w-4" />
                {article.author}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.3fr)_360px] items-start">
            <div>
              <ScrollReveal>
                <div className="rounded-[2rem] border border-border bg-card p-7 md:p-10 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.35)]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-12 bg-primary" />
                    <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
                      Editorial Focus
                    </p>
                  </div>

                  <div className="space-y-8">
                    {introParagraphs.map((paragraph, index) => (
                      <div
                        key={`${article.slug}-paragraph-${index}`}
                        className={cn(contentVariants[index % contentVariants.length])}
                      >
                        {paragraph}
                      </div>
                    ))}

                    {article.images.length > 0 && (
                      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                        {article.images.map((image, index) => (
                          <div
                            key={`${article.slug}-inline-image-${index}`}
                            className="group relative overflow-hidden rounded-[1.5rem] aspect-[4/3]"
                          >
                            <img
                              src={image}
                              alt={`${article.title} image ${index + 1}`}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                          </div>
                        ))}
                      </div>
                    )}

                    {remainingParagraphs.map((paragraph, index) => (
                      <div
                        key={`${article.slug}-paragraph-tail-${index}`}
                        className={cn(contentVariants[(index + introParagraphs.length) % contentVariants.length])}
                      >
                        {paragraph}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <aside className="lg:sticky lg:top-28">
              <ScrollReveal delay={120}>
                <div className="rounded-[2rem] border border-border bg-secondary/30 p-7 md:p-8">
                  <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-5">
                    Story Details
                  </p>

                  <div className="space-y-5">
                    <div className="rounded-2xl border border-border bg-background/80 p-5">
                      <p className="text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
                        Published
                      </p>
                      <p className="mt-2 text-sm font-semibold text-foreground">
                        {article.date}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-background/80 p-5">
                      <p className="text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
                        Category
                      </p>
                      <p className="mt-2 text-sm font-semibold text-foreground">
                        {article.category}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-background/80 p-5">
                      <p className="text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
                        Reading Time
                      </p>
                      <p className="mt-2 text-sm font-semibold text-foreground">
                        {article.readTime}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-background/80 p-5">
                      <p className="text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
                        Additional Images
                      </p>
                      <p className="mt-2 text-sm font-semibold text-foreground">
                        {article.images.length}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7">
                    <p className="text-[11px] tracking-[0.25em] text-muted-foreground uppercase mb-4">
                      Tags
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-foreground/80 uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/news"
                    className="mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-semibold tracking-wider text-background transition-all duration-300 hover:gap-4 hover:opacity-90"
                  >
                    Browse all news
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>

      <section className="pb-28 md:pb-32">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
                Continue Reading
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold text-foreground">
                Related <span className="text-primary italic">Stories</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {relatedArticles.map((related, index) => (
              <ScrollReveal key={related.slug} delay={index * 90}>
                <Link href={`/news/${related.slug}`} className="group block">
                  <div className="relative rounded-[1.75rem] overflow-hidden aspect-[16/10] mb-5">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <div className="absolute left-5 right-5 bottom-5">
                      <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold tracking-[0.25em] text-white uppercase backdrop-blur-sm">
                        {related.category}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs text-muted-foreground flex items-center gap-1.5 mb-2">
                    <Clock3 className="w-3.5 h-3.5" />
                    {related.date}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                    {related.title}
                  </h3>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {related.excerpt}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-primary">
                    Read story
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <LuxuryFooter />
    </main>
  )
}
