"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Clock3, Layers3, ListVideo, Search } from "lucide-react"
import { LuxuryFooter } from "@/components/luxury-footer"
import { LuxuryHeader } from "@/components/luxury-header"
import { cn } from "@/lib/utils"
import { courseCategories, courses } from "./data/courses"

export default function CursosPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const normalizedQuery = searchQuery.trim().toLowerCase()
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      normalizedQuery.length === 0 ||
      course.title.toLowerCase().includes(normalizedQuery) ||
      course.instructor?.toLowerCase().includes(normalizedQuery) ||
      course.category?.toLowerCase().includes(normalizedQuery) ||
      course.shortDescription?.toLowerCase().includes(normalizedQuery)

    const matchesCategory = selectedCategory === "Todos" || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <main className="relative min-h-screen bg-background">
      <LuxuryHeader />

      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium tracking-[0.3em] text-primary">
              ACADEMIA ABRAKADABRA
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Nuestros Cursos
            </h1>
            <p className="mb-12 text-lg text-muted-foreground">
              Explora nuestra biblioteca de formacion y entra directo al curso que quieras abrir.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <div className="relative w-full md:w-96">
                <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar cursos..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="w-full rounded-full border border-border bg-card py-4 pr-4 pl-12 text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {courseCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "rounded-full px-5 py-3 text-xs font-semibold tracking-wider transition-all duration-300",
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : "border border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Mostrando {filteredCourses.length} de {courses.length} cursos
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course, index) => (
              <Link
                key={course.id}
                href={`/cursos/${course.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={course.thumbnail ?? course.coverImage ?? "/image-Philosophy/Cursos.png"}
                    alt={course.title}
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-primary px-4 py-2 text-[11px] font-bold tracking-wider text-primary-foreground shadow-lg">
                      {course.status === "coming_soon" ? "PROXIMAMENTE" : course.level}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="mb-4 line-clamp-2 font-serif text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {course.title}
                  </h3>

                  <div className="mb-5 flex items-center gap-4 text-sm text-muted-foreground">
                    {course.totalSections > 0 && (
                      <div className="flex items-center gap-1.5">
                        <Layers3 className="h-4 w-4" />
                        <span>{course.totalSections}</span>
                      </div>
                    )}
                    {course.totalEpisodes > 0 && (
                      <div className="flex items-center gap-1.5">
                        <ListVideo className="h-4 w-4" />
                        <span>{course.totalEpisodes}</span>
                      </div>
                    )}
                    {course.duration && (
                      <div className="flex items-center gap-1.5">
                        <Clock3 className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    )}
                  </div>

                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {course.instructor?.charAt(0) ?? "A"}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-muted-foreground">
                        por <span className="font-semibold text-foreground">{course.instructor ?? "Abrakadabra"}</span>
                      </p>
                      <p className="truncate text-[11px] text-muted-foreground/70">
                        en {course.category}
                      </p>
                    </div>
                  </div>

                  <span className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary py-3.5 text-sm font-bold tracking-wider text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    {course.status === "coming_soon" ? "Ver avance" : "Ver curso"}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="py-20 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="mb-2 font-serif text-2xl font-bold text-foreground">
                No se encontraron cursos
              </h3>
              <p className="text-muted-foreground">
                Intenta con otros terminos de busqueda o cambia los filtros.
              </p>
            </div>
          )}
        </div>
      </section>

      <LuxuryFooter />
    </main>
  )
}
