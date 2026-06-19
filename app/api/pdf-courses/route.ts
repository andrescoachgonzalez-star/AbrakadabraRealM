import { readdir } from "node:fs/promises"
import * as path from "node:path"
import { NextResponse } from "next/server"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const revalidate = 0

type PdfCourse = {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  instructor: string
  category: string
  level: string
  thumbnail: string
  coverImage: string
  duration: string
  totalSections: number
  totalEpisodes: number
  status: "published"
  contentType: "pdf"
  pdfUrl: string
  pdfFileName: string
  sections: never[]
}

type SuccessResponse = {
  success: true
  total: number
  courses: PdfCourse[]
}

type ErrorResponse = {
  success: false
  total: 0
  courses: never[]
  message: string
}

const PDF_FOLDER_NAME = "Pdfs-Cursos"

const DEFAULT_COVER_IMAGE =
  "/image-Philosophy/Cursos.png"

function removeAccents(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

function createSlug(fileName: string): string {
  return removeAccents(fileName)
    .toLowerCase()
    .replace(/\.pdf$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function createTitle(fileName: string): string {
  return fileName
    .replace(/\.pdf$/i, "")
    .replace(/—+/g, " - ")
    .replace(/___+/g, " - ")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function createPdfUrl(fileName: string): string {
  return (
    "/" +
    PDF_FOLDER_NAME +
    "/" +
    encodeURIComponent(fileName)
  )
}

function createPdfCourse(
  fileName: string
): PdfCourse {
  const baseSlug = createSlug(fileName)
  const title = createTitle(fileName)

  return {
    id: "pdf-" + baseSlug,
    slug: "pdf-" + baseSlug,
    title,
    shortDescription:
      "Consulta el contenido completo del curso " +
      title +
      ".",
    fullDescription:
      "Documento PDF completo disponible en la biblioteca de cursos de Abrakadabra Realm.",
    instructor: "Abrakadabra Realm",
    category: "PDF COURSES",
    level: "Abierto",
    thumbnail: DEFAULT_COVER_IMAGE,
    coverImage: DEFAULT_COVER_IMAGE,
    duration: "PDF completo",
    totalSections: 0,
    totalEpisodes: 0,
    status: "published",
    contentType: "pdf",
    pdfUrl: createPdfUrl(fileName),
    pdfFileName: fileName,
    sections: [],
  }
}

export async function GET(): Promise<Response> {
  try {
    const pdfDirectory = path.join(
      process.cwd(),
      "public",
      PDF_FOLDER_NAME
    )

    const entries = await readdir(pdfDirectory, {
      withFileTypes: true,
    })

    const pdfFileNames = entries
      .filter((entry) => {
        return (
          entry.isFile() &&
          entry.name.toLowerCase().endsWith(".pdf")
        )
      })
      .map((entry) => entry.name)
      .sort((firstFile, secondFile) => {
        return firstFile.localeCompare(
          secondFile,
          "es",
          {
            sensitivity: "base",
            numeric: true,
          }
        )
      })

    const pdfCourses =
      pdfFileNames.map(createPdfCourse)

    const responseBody: SuccessResponse = {
      success: true,
      total: pdfCourses.length,
      courses: pdfCourses,
    }

    return NextResponse.json(responseBody, {
      status: 200,
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate",
      },
    })
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Error desconocido al cargar los PDF."

    console.error(
      "Error reading PDF courses:",
      error
    )

    const responseBody: ErrorResponse = {
      success: false,
      total: 0,
      courses: [],
      message:
        "No se pudo leer la carpeta public/" +
        PDF_FOLDER_NAME +
        ". Detalle: " +
        errorMessage,
    }

    return NextResponse.json(responseBody, {
      status: 500,
      headers: {
        "Cache-Control": "no-store",
      },
    })
  }
}