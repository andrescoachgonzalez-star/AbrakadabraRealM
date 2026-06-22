"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  FileText,
  PlayCircle,
} from "lucide-react";
import { LuxuryHeader } from "@/components/luxury-header";
import { LuxuryFooter } from "@/components/luxury-footer";
import { useCourseAccessGate } from "@/components/course-access-gate";
import {
  getCourseById,
  getFirstEpisode,
  getRecommendedCourses,
  type Episode,
} from "../data/courses";

type RecommendedCourseLinkProps = {
  href: string;
  isPdf: boolean;
  children: ReactNode;
  className: string;
};

function RecommendedCourseLink({
  href,
  isPdf,
  children,
  className,
}: RecommendedCourseLinkProps) {
  if (isPdf) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function getOrderedEpisodes(courseId: string) {
  const course = getCourseById(courseId);
  if (!course) return [];

  return [...course.sections]
    .sort((left, right) => left.order - right.order)
    .flatMap((section) =>
      [...section.episodes].sort((left, right) => left.order - right.order),
    );
}

export default function CourseDetailPage() {
  const params = useParams<{ id: string | string[] }>();
  const rawId = Array.isArray(params.id) ? params.id[0] : params.id;
  const courseId = decodeURIComponent(rawId || "");
  const course = getCourseById(courseId);
  const { gate, isAccessGranted, isCheckingAccess } = useCourseAccessGate();

  const orderedEpisodes = useMemo(
    () => getOrderedEpisodes(courseId),
    [courseId],
  );

  const firstEpisode = course ? getFirstEpisode(course) : undefined;
  const [selectedEpisodeId, setSelectedEpisodeId] = useState<
    string | undefined
  >(firstEpisode?.id);

  useEffect(() => {
    setSelectedEpisodeId(firstEpisode?.id);
  }, [courseId, firstEpisode?.id]);

  useEffect(() => {
    if (!isAccessGranted) {
      return;
    }

    if (course?.contentType === "pdf" && course.pdfUrl) {
      window.location.replace(course.pdfUrl);
    }
  }, [course, isAccessGranted]);

  const selectedEpisode = useMemo<Episode | undefined>(() => {
    return (
      orderedEpisodes.find((episode) => episode.id === selectedEpisodeId) ||
      orderedEpisodes[0]
    );
  }, [orderedEpisodes, selectedEpisodeId]);

  if (!course) {
    return (
      <>
        {gate}

        <main className="min-h-screen bg-background">
          <LuxuryHeader />
          {isAccessGranted ? (
            <section className="flex min-h-[75vh] items-center justify-center px-4 pt-28">
              <div className="text-center">
                <BookOpen className="mx-auto h-14 w-14 text-muted-foreground" />
                <h1 className="mt-6 font-serif text-4xl font-bold text-foreground">
                  Course not found
                </h1>
                <Link
                  href="/cursos"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to courses
                </Link>
              </div>
            </section>
          ) : (
            <section className="flex min-h-[70vh] items-center justify-center px-4 pt-28">
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
    );
  }

  const recommendedCourses = getRecommendedCourses(course.slug, 3);
  const isPdf = course.contentType === "pdf";

  return (
    <>
      {gate}

      <main className="min-h-screen bg-background">
        <LuxuryHeader />

        {isAccessGranted ? (
          <>
            <section className="border-b border-border px-4 pb-12 pt-32">
              <div className="mx-auto max-w-7xl">
                <Link
                  href="/cursos"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary transition hover:gap-3"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to courses
                </Link>

                <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                        {course.category || "COURSE"}
                      </span>

                      <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {isPdf ? (
                          <FileText className="h-4 w-4" />
                        ) : (
                          <PlayCircle className="h-4 w-4" />
                        )}
                        {isPdf ? "PDF COURSE" : "VIDEO COURSE"}
                      </span>
                    </div>

                    <h1 className="mt-6 max-w-5xl font-serif text-4xl font-bold leading-tight text-foreground md:text-6xl">
                      {course.title}
                    </h1>

                    {course.fullDescription && (
                      <p className="mt-5 max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">
                        {course.fullDescription}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground lg:justify-end">
                    {course.instructor && (
                      <span className="rounded-full border border-border bg-card px-4 py-2">
                        {course.instructor}
                      </span>
                    )}
                    {course.level && (
                      <span className="rounded-full border border-border bg-card px-4 py-2">
                        {course.level}
                      </span>
                    )}
                    {course.duration && (
                      <span className="rounded-full border border-border bg-card px-4 py-2">
                        {course.duration}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {isPdf ? (
              <section className="flex min-h-[55vh] items-center justify-center px-4 py-12">
                <div className="text-center">
                  <FileText className="mx-auto h-14 w-14 animate-pulse text-primary" />
                  <h2 className="mt-5 font-serif text-3xl font-bold text-foreground">
                    Opening PDF...
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    The complete document will open directly.
                  </p>
                  {course.pdfUrl && (
                    <a
                      href={course.pdfUrl}
                      className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
                    >
                      Open PDF manually
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </section>
            ) : (
              <section className="px-4 py-12">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
                  <div>
                    <div className="overflow-hidden rounded-3xl border border-border bg-black shadow-2xl shadow-black/20">
                      {selectedEpisode?.youtubeVideoId ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${selectedEpisode.youtubeVideoId}?rel=0`}
                          title={selectedEpisode.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="aspect-video w-full"
                        />
                      ) : (
                        <div className="flex aspect-video items-center justify-center px-6 text-center">
                          <div>
                            <PlayCircle className="mx-auto h-14 w-14 text-white/60" />
                            <h2 className="mt-5 font-serif text-2xl font-bold text-white">
                              Video pending
                            </h2>
                            <p className="mx-auto mt-3 max-w-lg text-sm text-white/60">
                              This episode does not yet have a valid YouTube video ID.
                            </p>
                            {selectedEpisode?.youtubeUrl && (
                              <a
                                href={selectedEpisode.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
                              >
                                Open source link
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {selectedEpisode && (
                      <div className="mt-6 rounded-3xl border border-border bg-card p-6">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                          Current episode
                        </p>
                        <h2 className="mt-3 font-serif text-3xl font-bold text-foreground">
                          {selectedEpisode.title}
                        </h2>
                        {selectedEpisode.description && (
                          <p className="mt-4 leading-relaxed text-muted-foreground">
                            {selectedEpisode.description}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  <aside className="rounded-3xl border border-border bg-card p-5 lg:sticky lg:top-28 lg:max-h-[80vh] lg:overflow-y-auto">
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                          Course content
                        </p>
                        <h2 className="mt-2 font-serif text-2xl font-bold text-foreground">
                          {course.totalEpisodes} episodes
                        </h2>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {[...course.sections]
                        .sort((left, right) => left.order - right.order)
                        .map((section) => (
                          <div key={section.id}>
                            <h3 className="mb-3 text-sm font-bold text-foreground">
                              {section.title}
                            </h3>

                            <div className="space-y-2">
                              {[...section.episodes]
                                .sort((left, right) => left.order - right.order)
                                .map((episode) => {
                                  const active = episode.id === selectedEpisode?.id;

                                  return (
                                    <button
                                      key={episode.id}
                                      type="button"
                                      onClick={() => setSelectedEpisodeId(episode.id)}
                                      className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left transition ${
                                        active
                                          ? "border-primary bg-primary/10"
                                          : "border-transparent bg-background hover:border-border"
                                      }`}
                                    >
                                      <span
                                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                                          active
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-muted text-muted-foreground"
                                        }`}
                                      >
                                        {active ? (
                                          <CheckCircle2 className="h-4 w-4" />
                                        ) : (
                                          <PlayCircle className="h-4 w-4" />
                                        )}
                                      </span>

                                      <span className="text-sm font-medium leading-snug text-foreground">
                                        {episode.title}
                                      </span>
                                    </button>
                                  );
                                })}
                            </div>
                          </div>
                        ))}
                    </div>
                  </aside>
                </div>
              </section>
            )}

            {recommendedCourses.length > 0 && (
              <section className="border-t border-border px-4 py-20">
                <div className="mx-auto max-w-7xl">
                  <div className="mb-10">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                      Keep learning
                    </span>
                    <h2 className="mt-3 font-serif text-4xl font-bold text-foreground">
                      Recommended courses
                    </h2>
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    {recommendedCourses.map((recommended) => {
                      const recommendedIsPdf = recommended.contentType === "pdf";
                      const recommendedHref = recommendedIsPdf
                        ? recommended.pdfUrl || "#"
                        : `/cursos/${recommended.slug}`;

                      return (
                        <RecommendedCourseLink
                          key={recommended.id}
                          href={recommendedHref}
                          isPdf={recommendedIsPdf}
                          className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary/40"
                        >
                          <img
                            src={
                              recommended.thumbnail ||
                              recommended.coverImage ||
                              "/placeholder.svg"
                            }
                            alt={recommended.title}
                            className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                          <div className="p-5">
                            <p className="text-xs font-bold uppercase tracking-wider text-primary">
                              {recommended.contentType === "pdf" ? "PDF" : "VIDEO"}
                            </p>
                            <h3 className="mt-2 font-serif text-xl font-bold text-foreground">
                              {recommended.title}
                            </h3>
                          </div>
                        </RecommendedCourseLink>
                      );
                    })}
                  </div>
                </div>
              </section>
            )}
          </>
        ) : (
          <section className="flex min-h-[70vh] items-center justify-center px-4 pt-28">
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
  );
}
