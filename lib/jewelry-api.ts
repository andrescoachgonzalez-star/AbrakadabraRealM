"use client"

import { allProducts, type JewelryProduct as StaticJewelryProduct } from "@/app/jewelry/data/jewelry-products"

export type JewelryStatus = "active" | "draft" | "sold_out" | "archived"
export type JewelryPriceMode = "fixed" | "on_demand"
export type JewelryMaterial = "gold" | "diamonds" | "emeralds" | "rubies"
export type JewelryType =
  | "rings"
  | "necklaces"
  | "bracelets"
  | "earrings"
  | "chains"
  | "charms"
  | "pendants"

type ApiJewelryImage = {
  id?: string
  product_id?: string
  url: string
  alt?: string
  is_primary?: boolean | number
  position?: number
}

type ApiJewelrySpec = {
  id?: string
  product_id?: string
  key: string
  value: string
}

type ApiJewelryProduct = {
  id: string
  sku?: string
  name: string
  slug?: string
  price?: string | number | null
  currency?: string
  price_mode?: JewelryPriceMode
  material: JewelryMaterial
  type: JewelryType
  collection?: string
  description?: string
  is_new?: boolean | number
  is_featured?: boolean | number
  status?: JewelryStatus
  images?: ApiJewelryImage[]
  specs?: ApiJewelrySpec[]
  created_at?: string
  updated_at?: string
}

export type JewelryProduct = {
  id: string
  sku?: string
  name: string
  slug?: string
  price: number | null
  currency: string
  priceMode: JewelryPriceMode
  material: JewelryMaterial
  type: JewelryType
  collection: string
  description?: string
  isNew: boolean
  isFeatured: boolean
  status: JewelryStatus
  image: string
  images: string[]
  imageAlt: string
  specs: Record<string, string>
}

const DEFAULT_API_URL = "https://api.abrakadabrarealm.com/api"

export const JEWELRY_API_URL = trimTrailingSlash(
  process.env.NEXT_PUBLIC_API_URL || DEFAULT_API_URL
)

function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, "")
}

function isTruthyFlag(value: boolean | number | undefined) {
  return value === true || value === 1
}

function primaryImage(images: ApiJewelryImage[] = []) {
  const ordered = [...images].sort((a, b) => (a.position ?? 0) - (b.position ?? 0))
  return ordered.find((image) => isTruthyFlag(image.is_primary)) ?? ordered[0]
}

function specsToRecord(specs: ApiJewelrySpec[] = []) {
  return specs.reduce<Record<string, string>>((acc, spec) => {
    if (spec.key) {
      acc[spec.key] = spec.value
    }

    return acc
  }, {})
}

function normalizeApiProduct(product: ApiJewelryProduct): JewelryProduct {
  const orderedImages = [...(product.images ?? [])].sort(
    (a, b) => (a.position ?? 0) - (b.position ?? 0)
  )
  const mainImage = primaryImage(orderedImages)
  const imageUrls = orderedImages.map((image) => image.url).filter(Boolean)

  return {
    id: product.id,
    sku: product.sku,
    name: product.name,
    slug: product.slug,
    price:
      product.price === null || product.price === undefined || product.price === ""
        ? null
        : Number(product.price),
    currency: product.currency ?? "USD",
    priceMode: product.price_mode ?? "on_demand",
    material: product.material,
    type: product.type,
    collection: product.collection ?? "Collection",
    description: product.description,
    isNew: isTruthyFlag(product.is_new),
    isFeatured: isTruthyFlag(product.is_featured),
    status: product.status ?? "draft",
    image: mainImage?.url || imageUrls[0] || "/placeholder.svg",
    images: imageUrls.length > 0 ? Array.from(new Set(imageUrls)) : ["/placeholder.svg"],
    imageAlt: mainImage?.alt || product.name,
    specs: specsToRecord(product.specs),
  }
}

function normalizeStaticProduct(product: StaticJewelryProduct): JewelryProduct {
  const images = product.images?.length ? product.images : [product.image]

  return {
    id: String(product.id),
    name: product.name,
    price: product.price,
    currency: "USD",
    priceMode: "on_demand",
    material: product.material,
    type: product.type,
    collection: product.collection,
    description: product.description,
    isNew: Boolean(product.isNew),
    isFeatured: false,
    status: "active",
    image: product.image || images[0] || "/placeholder.svg",
    images: Array.from(new Set(images.length ? images : ["/placeholder.svg"])),
    imageAlt: product.name,
    specs: product.specs ?? {},
  }
}

function normalizeApiList(data: unknown): ApiJewelryProduct[] {
  if (Array.isArray(data)) {
    return data as ApiJewelryProduct[]
  }

  if (data && typeof data === "object" && Array.isArray((data as { jewelry?: unknown }).jewelry)) {
    return (data as { jewelry: ApiJewelryProduct[] }).jewelry
  }

  if (data && typeof data === "object" && Array.isArray((data as { products?: unknown }).products)) {
    return (data as { products: ApiJewelryProduct[] }).products
  }

  return []
}

async function readApiError(response: Response) {
  try {
    const body = (await response.json()) as { message?: string }
    return body.message || `Request failed with status ${response.status}`
  } catch {
    return `Request failed with status ${response.status}`
  }
}

export function isCatalogVisible(product: JewelryProduct) {
  return product.status === "active" || product.status === "sold_out"
}

export function sortCatalogProducts(products: JewelryProduct[]) {
  return [...products].sort((a, b) => {
    const featured = Number(b.isFeatured) - Number(a.isFeatured)
    if (featured !== 0) return featured

    const newest = Number(b.isNew) - Number(a.isNew)
    if (newest !== 0) return newest

    return a.name.localeCompare(b.name)
  })
}

export function formatJewelryPrice(product: JewelryProduct) {
  if (product.priceMode === "on_demand" || product.price === null || Number.isNaN(product.price)) {
    return "Precio bajo solicitud"
  }

  return `${product.currency} ${product.price}`
}

export function getStaticJewelryProducts() {
  return allProducts.map(normalizeStaticProduct)
}

export async function getJewelryProducts() {
  const response = await fetch(`${JEWELRY_API_URL}/public/jewelry`, {
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error(await readApiError(response))
  }

  const data = await response.json()
  return normalizeApiList(data).map(normalizeApiProduct)
}

export async function getJewelryProduct(id: string) {
  const products = await getJewelryProducts()
  const product = products.find((item) => item.id === id || item.slug === id)

  if (!product) {
    throw new Error("No se pudo cargar la joya")
  }

  return product
}
