"use client"

import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import Link from "next/link"
import {
  BookOpen,
  ExternalLink,
  FileText,
  HeartHandshake,
  PlayCircle,
  Search,
} from "lucide-react"

import { LuxuryHeader } from "@/components/luxury-header"
import { LuxuryFooter } from "@/components/luxury-footer"
import { useCourseAccessGate } from "@/components/course-access-gate"
import { courses, type Course } from "./data/courses"

type ContentType = "video" | "pdf"

type CatalogCourse = Course & {
  contentType: ContentType
  pdfUrl?: string
  pdfFileName?: string
}

type PdfCoursesResponse = {
  success: boolean
  total: number
  courses: CatalogCourse[]
  message?: string
}

type CourseCardLinkProps = {
  course: CatalogCourse
  children: ReactNode
  className: string
}

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
}

function normalizeStaticCourse(course: Course): CatalogCourse {
  const extendedCourse = course as Course & {
    contentType?: ContentType
    pdfUrl?: string
    pdfFileName?: string
  }

  return {
    ...extendedCourse,
    contentType:
      extendedCourse.contentType ??
      (extendedCourse.pdfUrl ? "pdf" : "video"),
  }
}

function getCourseUniqueKey(course: CatalogCourse) {
  if (course.contentType === "pdf") {
    const pdfIdentifier =
      course.pdfUrl ||
      course.pdfFileName ||
      course.slug ||
      course.id

    return "pdf:" + pdfIdentifier
  }

  return "video:" + course.id
}

function CourseCardLink({
  course,
  children,
  className,
}: CourseCardLinkProps) {
  if (course.contentType === "pdf") {
    if (!course.pdfUrl) {
      return (
        <div
          className={`${className} cursor-not-allowed opacity-60`}
        >
          {children}
        </div>
      )
    }

    return (
      <a
        href={course.pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={`Abrir ${course.title} en una pestaña nueva`}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      href={`/cursos/${course.slug}`}
      className={className}
    >
      {children}
    </Link>
  )
}

export default function CoursesPage() {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] =
    useState("Todos")

  const [pdfCourses, setPdfCourses] = useState<
    CatalogCourse[]
  >([])

  const [isLoadingPdfs, setIsLoadingPdfs] =
    useState(true)

  const [pdfError, setPdfError] = useState("")

  const {
    gate,
    isAccessGranted,
    isCheckingAccess,
  } = useCourseAccessGate()

  useEffect(() => {
    if (!isAccessGranted) {
      return
    }

    let isMounted = true

    async function loadPdfCourses() {
      try {
        setIsLoadingPdfs(true)
        setPdfError("")

        const response = await fetch("/api/pdf-courses", {
          method: "GET",
          cache: "no-store",
        })

        const result =
          (await response.json()) as PdfCoursesResponse

        if (!response.ok || !result.success) {
          throw new Error(
            result.message ||
              "No se pudieron cargar los cursos PDF."
          )
        }

        if (isMounted) {
          setPdfCourses(
            Array.isArray(result.courses)
              ? result.courses
              : []
          )
        }
      } catch (error) {
        console.error(
          "Error loading PDF courses:",
          error
        )

        if (isMounted) {
          setPdfCourses([])
          setPdfError(
            "No se pudieron cargar los cursos PDF. Revisa la carpeta public/Pdfs-Cursos."
          )
        }
      } finally {
        if (isMounted) {
          setIsLoadingPdfs(false)
        }
      }
    }

    loadPdfCourses()

    return () => {
      isMounted = false
    }
  }, [isAccessGranted])

  const allCourses = useMemo<CatalogCourse[]>(() => {
    const staticCourses =
      courses.map(normalizeStaticCourse)

    const mergedCourses = [
      ...staticCourses,
      ...pdfCourses,
    ]

    const seenCourses = new Set<string>()

    return mergedCourses.filter((course) => {
      const uniqueKey = getCourseUniqueKey(course)

      if (seenCourses.has(uniqueKey)) {
        return false
      }

      seenCourses.add(uniqueKey)
      return true
    })
  }, [pdfCourses])

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(
        allCourses
          .map((course) => course.category)
          .filter(
            (category): category is string =>
              Boolean(category)
          )
      )
    )

    return ["Todos", ...uniqueCategories]
  }, [allCourses])

  const filteredCourses = useMemo(() => {
    const query = normalizeText(search)

    return allCourses.filter((course) => {
      const matchesCategory =
        selectedCategory === "Todos" ||
        course.category === selectedCategory

      const searchableText = normalizeText(
        [
          course.title,
          course.shortDescription,
          course.fullDescription,
          course.instructor,
          course.category,
          course.level,
          course.pdfFileName,
        ]
          .filter(Boolean)
          .join(" ")
      )

      const matchesSearch =
        !query || searchableText.includes(query)

      return matchesCategory && matchesSearch
    })
  }, [
    allCourses,
    search,
    selectedCategory,
  ])

  return (
    <>
      {gate}

      <main
        className="min-h-screen bg-background"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0, 0, 0, 0.055) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        <LuxuryHeader />

        {isAccessGranted ? (
          <>
            <section className="px-4 pb-16 pt-36 md:pb-20 md:pt-40">
              <div className="mx-auto max-w-7xl">
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.42em] text-primary md:text-sm">
                    ACADEMIA ABRAKADABRA
                  </p>

                  <h1 className="mt-5 font-serif text-5xl font-bold leading-none text-foreground sm:text-6xl md:text-7xl">
                    Nuestros Cursos
                  </h1>

                  <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    Explora nuestra biblioteca de formación y entra
                    directo al curso que quieras abrir.
                  </p>
                </div>

                <div className="mt-12 grid items-start gap-8 lg:grid-cols-[260px_1fr]">
                  <div className="relative">
                    <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                    <input
                      type="search"
                      value={search}
                      onChange={(event) =>
                        setSearch(event.target.value)
                      }
                      placeholder="Buscar cursos..."
                      className="h-14 w-full rounded-full border border-border bg-background px-6 pl-14 text-base text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                  </div>

                  <div className="flex flex-wrap justify-center gap-2.5 lg:justify-start">
                    {categories.map((category) => {
                      const active =
                        selectedCategory === category

                      return (
                        <button
                          key={category}
                          type="button"
                          onClick={() =>
                            setSelectedCategory(category)
                          }
                          className={`min-h-11 rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-wide transition-all duration-300 ${
                            active
                              ? "border border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                              : "border border-border bg-background text-foreground hover:border-primary/50 hover:text-primary"
                          }`}
                        >
                          {category}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="mt-7 text-center">
                  <p className="text-sm text-muted-foreground">
                    {isLoadingPdfs
                      ? "Cargando documentos PDF..."
                      : `Mostrando ${filteredCourses.length} de ${allCourses.length} cursos`}
                  </p>
                </div>

                {pdfError && (
                  <div className="mx-auto mt-6 max-w-4xl rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-center text-sm text-red-600">
                    {pdfError}
                  </div>
                )}

                <div className="mt-8 rounded-[26px] border border-primary/30 bg-background px-6 py-6 shadow-[0_4px_14px_rgba(0,0,0,0.08)] md:px-8 md:py-7">
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <HeartHandshake className="h-6 w-6" />
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                          DONACIONES ABIERTAS
                        </p>

                        <h2 className="mt-2 font-serif text-2xl font-bold leading-tight text-foreground md:text-3xl">
                          Cursos gratis, crecimiento compartido
                        </h2>

                        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                          Todos los cursos son gratis. Agradecemos
                          donaciones para seguir innovando, crear
                          nuevos programas y construir la filosofía de
                          Abrakadabra.
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      disabled
                      className="shrink-0 cursor-not-allowed rounded-full border border-primary/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary/70"
                    >
                      DONAR PRONTO
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="px-4 pb-24">
              <div className="mx-auto max-w-7xl">
                {filteredCourses.length > 0 ? (
                  <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                    {filteredCourses.map((course) => {
                      const isPdf =
                        course.contentType === "pdf"

                      return (
                        <CourseCardLink
                          key={getCourseUniqueKey(course)}
                          course={course}
                          className="group block overflow-hidden rounded-3xl border border-border bg-background shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
                        >
                          <div className="relative h-60 overflow-hidden bg-muted">
                            <img
                              src={
                                course.thumbnail ||
                                course.coverImage ||
                                "/placeholder.svg"
                              }
                              alt={course.title}
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-black/70 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                              {isPdf ? (
                                <FileText className="h-4 w-4" />
                              ) : (
                                <PlayCircle className="h-4 w-4" />
                              )}

                              {isPdf ? "PDF" : "VIDEO"}
                            </div>

                            <div className="absolute bottom-5 left-5 right-5">
                              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                                {course.category || "CURSO"}
                              </p>

                              <h2 className="mt-2 font-serif text-2xl font-bold leading-tight text-white">
                                {course.title}
                              </h2>
                            </div>
                          </div>

                          <div className="p-6">
                            <p className="min-h-[72px] text-sm leading-relaxed text-muted-foreground">
                              {course.shortDescription ||
                                "Explora el contenido completo de este curso."}
                            </p>

                            <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-5">
                              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                                <BookOpen className="h-4 w-4 text-primary" />

                                <span>
                                  {course.duration ||
                                    course.level ||
                                    (isPdf
                                      ? "PDF completo"
                                      : "Curso")}
                                </span>
                              </div>

                              <span className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-primary transition-transform duration-300 group-hover:translate-x-1">
                                {isPdf ? (
                                  <>
                                    Abrir PDF
                                    <ExternalLink className="h-4 w-4" />
                                  </>
                                ) : (
                                  "Ver curso →"
                                )}
                              </span>
                            </div>
                          </div>
                        </CourseCardLink>
                      )
                    })}
                  </div>
                ) : (
                  <div className="rounded-3xl border border-dashed border-border bg-background px-6 py-20 text-center">
                    <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />

                    <h2 className="mt-5 font-serif text-3xl font-bold text-foreground">
                      No se encontraron cursos
                    </h2>

                    <p className="mt-3 text-muted-foreground">
                      Prueba con otra búsqueda o selecciona otra
                      categoría.
                    </p>
                  </div>
                )}
              </div>
            </section>
          </>
        ) : (
          <section className="flex min-h-[70vh] items-center justify-center px-4 pt-32">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
              <p className="mt-5 text-sm uppercase tracking-[0.24em] text-muted-foreground">
                {isCheckingAccess
                  ? "Verificando acceso..."
                  : "Esperando validacion..."}
              </p>
            </div>
          </section>
        )}

        <LuxuryFooter />
      </main>
    </>
  )
}
