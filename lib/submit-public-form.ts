const API_URL = "https://api.abrakadabrarealm.com/api"

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