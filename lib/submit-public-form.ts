const DEFAULT_API_URL = "https://api.abrakadabrarealm.com/api"

export const API_URL = trimTrailingSlash(
  process.env.NEXT_PUBLIC_API_URL || DEFAULT_API_URL
)

function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, "")
}

export type PublicFormType =
  | "art"
  | "djs"
  | "models"
  | "join_us"
  | "events"
  | "paula"
  | "general"

export type PublicFormPayload = {
  form_type: PublicFormType
  first_name: string
  last_name: string
  email: string
  phone_country_code: string
  phone_number: string
  interest: string
  description: string

  company_name?: string
  social_networks?: string
  hiring_place?: string
  approximate_date?: string
  event_type?: string
  event_visibility?: "public" | "private"
  performance_hours?: string
  approximate_guests?: string
  occupation?: string
  discovery_source?: string
  role_interest?: string
  need_description?: string
  referral_source?: string
}

export type CourseLeadPayload = {
  email: string
  source_page: "courses"
}

export type CourseLeadResponse = {
  id: string
  email: string
  already_registered: boolean
  message: string
}

export async function submitPublicForm(formData: PublicFormPayload) {
  const response = await fetch(`${API_URL}/public/forms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })

  const result = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(result?.message || "No se pudo enviar el formulario")
  }

  return result
}

export async function submitCourseLead(
  payload: CourseLeadPayload
): Promise<CourseLeadResponse> {
  const response = await fetch(`${API_URL}/public/course-leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  const result = (await response.json().catch(() => null)) as
    | CourseLeadResponse
    | { message?: string }
    | null

  if (!response.ok) {
    throw new Error(
      result?.message ||
        "No se pudo registrar el correo para acceder a los cursos"
    )
  }

  return result as CourseLeadResponse
}
