"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import {
  ArrowLeft,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Clock,
  Layers3,
  ListVideo,
  Play,
} from "lucide-react"
import { LuxuryFooter } from "@/components/luxury-footer"
import { LuxuryHeader } from "@/components/luxury-header"
import { cn } from "@/lib/utils"
import {
  Episode,
  getCourseBySlug,
  getFirstEpisode,
  getRecommendedCourses,
  getYoutubeThumbnail,
} from "../data/courses"

export default function CourseDetailPage() {
  const params = useParams<{ id: string }>()
  const course = getCourseBySlug(params.id)
  const recommendedCourses = course ? getRecommendedCourses(course.slug, 4) : []

  const [activeEpisode, setActiveEpisode] = useState<Episode | null>(
    course ? getFirstEpisode(course) ?? null : null
  )
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({ 0: true })
  const [isIframeLoading, setIsIframeLoading] = useState(false)

  useEffect(() => {
    if (!course) return
    setActiveEpisode(getFirstEpisode(course) ?? null)
    setExpandedSections({ 0: true })
    setIsIframeLoading(Boolean(getFirstEpisode(course)?.youtubeVideoId))
  }, [course])

  const toggleSection = (index: number) => {
    setExpandedSections((current) => ({ ...current, [index]: !current[index] }))
  }

  if (!course) {
    return (
      <main className="min-h-screen bg-background px-4">
        <LuxuryHeader />
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <p className="mb-4 text-xs tracking-[0.3em] text-primary uppercase">Academia</p>
            <h1 className="mb-4 font-serif text-4xl text-foreground">Curso no encontrado</h1>
            <Link
              href="/cursos"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold tracking-wider text-background"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a cursos
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const orderedSections = [...course.sections].sort((left, right) => left.order - right.order)
  const flattenedEpisodes = orderedSections.flatMap((section) =>
    [...section.episodes].sort((left, right) => left.order - right.order)
  )

  const activeVideoId = activeEpisode?.youtubeVideoId
  const activeYoutubeUrl = activeEpisode?.youtubeUrl
  const activePreviewImage =
    getYoutubeThumbnail(activeEpisode?.youtubeUrl) ??
    course.thumbnail ??
    course.coverImage ??
    "/image-Philosophy/Cursos.png"
  const embedUrl = activeVideoId
    ? `https://www.youtube-nocookie.com/embed/${activeVideoId}?controls=1&fs=1&modestbranding=1&playsinline=1&rel=0`
    : null

  const activeEpisodeIndex = activeEpisode
    ? flattenedEpisodes.findIndex((episode) => episode.id === activeEpisode.id) + 1
    : 0
  const progressPercentage =
    course.totalEpisodes === 0 ? 0 : (activeEpisodeIndex / course.totalEpisodes) * 100
  const hasPlayableVideo = course.status === "published" && Boolean(activeVideoId)
  const isComingSoon = course.status === "coming_soon"

  return (
    <main className="relative min-h-screen bg-background">
      <LuxuryHeader />

      <section className="relative border-b border-border pt-28 pb-8">
        <div className="container mx-auto px-4">
          <Link
            href="/cursos"
            className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a cursos
          </Link>
          <h1 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            {course.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs tracking-[0.25em] text-muted-foreground uppercase">
            <span>{course.status === "coming_soon" ? "Proximamente" : "Publicado"}</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            <span>{course.totalSections} secciones</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            <span>{course.totalEpisodes} episodios</span>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="order-2 flex-1 lg:order-1">
              <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl bg-foreground/95 shadow-2xl">
                {hasPlayableVideo && embedUrl ? (
                  <>
                    {isIframeLoading && (
                      <div className="absolute inset-0 z-10 flex items-center justify-center bg-foreground/90">
                        <div className="flex flex-col items-center gap-3 text-center">
                          <div className="h-12 w-12 animate-spin rounded-full border-2 border-white/20 border-t-primary" />
                          <p className="text-sm tracking-[0.2em] text-white/70 uppercase">
                            Cargando video
                          </p>
                        </div>
                      </div>
                    )}
                    <iframe
                      src={embedUrl}
                      title={activeEpisode?.title ?? course.title}
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      onLoad={() => setIsIframeLoading(false)}
                    />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={activePreviewImage}
                      alt={course.title}
                      loading="eager"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />
                    <div className="relative z-10 flex max-w-md flex-col items-center gap-4 px-6 text-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                        <Play className="ml-1 h-8 w-8" fill="currentColor" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold tracking-[0.2em] text-white uppercase">
                          {isComingSoon ? "Curso proximamente" : "Video pendiente"}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-white/75">
                          {isComingSoon
                            ? "Este curso ya aparece en la academia, pero todavia no tiene episodios publicados."
                            : "La estructura del curso ya esta organizada, pero el link exacto de YouTube de este episodio sigue pendiente de completar."}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {!hasPlayableVideo && (
                  <>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-background/20">
                      <div
                        className="h-full bg-primary"
                        style={{ width: isComingSoon ? "0%" : `${progressPercentage}%` }}
                      />
                    </div>

                    <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between text-sm text-background/80">
                      <span>{activeEpisode?.duration ?? course.duration ?? "Sin duracion"}</span>
                      <span>{isComingSoon ? "Sin contenido" : "Pendiente de video"}</span>
                    </div>
                  </>
                )}
              </div>

              <div className="mb-6 border-b border-border">
                <div className="flex gap-6 overflow-x-auto">
                  <button className="border-b-2 border-primary pb-4 text-sm font-medium whitespace-nowrap text-foreground transition-colors duration-300">
                    Descripcion general
                  </button>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="mb-4 font-serif text-xl font-bold text-foreground">
                  {activeEpisode?.title ?? course.title}
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  {course.fullDescription ?? course.shortDescription}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold tracking-[0.18em] text-foreground uppercase">
                    <Layers3 className="h-4 w-4" />
                    {course.totalSections} secciones
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold tracking-[0.18em] text-foreground uppercase">
                    <ListVideo className="h-4 w-4" />
                    {course.totalEpisodes} episodios
                  </div>
                </div>

                {activeEpisode?.description && (
                  <div className="mt-6 rounded-2xl border border-border bg-card p-5">
                    <p className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
                      Detalle del episodio
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                      {activeEpisode.description}
                    </p>
                  </div>
                )}

                {activeYoutubeUrl && (
                  <Link
                    href={activeYoutubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-xs font-semibold tracking-[0.22em] text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                  >
                    Abrir en YouTube
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
              </div>

              <div>
                <h3 className="mb-6 font-serif text-xl font-bold text-foreground">
                  Cursos recomendados
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {recommendedCourses.map((recommendedCourse) => (
                    <Link
                      key={recommendedCourse.id}
                      href={`/cursos/${recommendedCourse.slug}`}
                      className="group flex gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                    >
                      <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                        <img
                          src={
                            recommendedCourse.thumbnail ??
                            recommendedCourse.coverImage ??
                            "/image-Philosophy/Cursos.png"
                          }
                          alt={recommendedCourse.title}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="line-clamp-2 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                          {recommendedCourse.title}
                        </h4>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {recommendedCourse.instructor}
                        </p>
                        {recommendedCourse.duration && (
                          <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {recommendedCourse.duration}
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 w-full lg:order-2 lg:w-96">
              <div className="sticky top-28 overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
                <div className="border-b border-border bg-muted/30 p-5">
                  <h3 className="font-serif font-bold text-foreground">Contenido del curso</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {course.totalEpisodes === 0
                      ? "Contenido en preparacion"
                      : `Episodio ${activeEpisodeIndex || 1} de ${course.totalEpisodes}`}
                  </p>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>

                <div className="max-h-[60vh] overflow-y-auto">
                  {orderedSections.length === 0 && (
                    <div className="p-5">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Este curso todavia no tiene secciones ni episodios disponibles.
                      </p>
                    </div>
                  )}

                  {orderedSections.map((section, sectionIndex) => (
                    <div key={section.title} className="border-b border-border last:border-0">
                      <button
                        onClick={() => toggleSection(sectionIndex)}
                        className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-muted/50"
                      >
                        <div>
                          <h4 className="text-sm font-medium text-foreground">{section.title}</h4>
                          {section.description && (
                            <p className="mt-0.5 text-xs text-muted-foreground">
                              {section.description}
                            </p>
                          )}
                        </div>
                        {expandedSections[sectionIndex] ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        )}
                      </button>

                      {expandedSections[sectionIndex] && (
                        <div className="bg-muted/20">
                          {section.episodes.map((episode) => (
                            <button
                              key={episode.id}
                              onClick={() => {
                                setActiveEpisode(episode)
                                setIsIframeLoading(Boolean(episode.youtubeVideoId))
                              }}
                              className={cn(
                                "flex w-full items-start gap-3 border-l-2 p-4 text-left transition-all duration-300",
                                activeEpisode?.id === episode.id
                                  ? "border-primary bg-primary/10"
                                  : "border-transparent hover:bg-muted/50"
                              )}
                            >
                              <div
                                className={cn(
                                  "mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border",
                                  activeEpisode?.id === episode.id
                                    ? "border-primary bg-primary"
                                    : "border-border bg-background"
                                )}
                              >
                                {activeEpisode?.id === episode.id ? (
                                  <Play className="h-3 w-3 text-primary" fill="currentColor" />
                                ) : <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />}
                              </div>

                              <div className="min-w-0 flex-1">
                                <p
                                  className={cn(
                                    "line-clamp-2 text-sm",
                                    activeEpisode?.id === episode.id
                                      ? "font-medium text-primary"
                                      : "text-foreground"
                                  )}
                                >
                                  {episode.title}
                                </p>
                                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                                  {episode.duration && (
                                    <span className="inline-flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      {episode.duration}
                                    </span>
                                  )}
                                  {!episode.youtubeVideoId && course.status === "published" && (
                                    <span className="rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 text-[10px] font-semibold tracking-[0.18em] text-primary uppercase">
                                      URL pendiente
                                    </span>
                                  )}
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LuxuryFooter />
    </main>
  )
}
