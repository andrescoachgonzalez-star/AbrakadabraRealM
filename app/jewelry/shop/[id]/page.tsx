"use client"

import { useEffect, useMemo, useState } from "react"
import { useParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { CONTACT_INFO } from "@/lib/contact-info"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LuxuryFooter } from "@/components/luxury-footer"

// ✅ Fuente única de productos
import { allProducts } from "../../data/jewelry-products"

const materialColors: Record<string, string> = {
  gold: "bg-amber-500",
  diamonds: "bg-slate-300",
  emeralds: "bg-emerald-500",
  rubies: "bg-red-500",
}

const materialLabels: Record<string, string> = {
  gold: "Gold",
  diamonds: "Diamonds",
  emeralds: "Emeralds",
  rubies: "Rubies",
}

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const productId = Number(id)

  const product = useMemo(
    () => allProducts.find((p) => p.id === productId),
    [productId]
  )

  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState<"details" | "shipping" | "care">(
    "details"
  )

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // ✅ si cambias de producto, vuelve a la primera imagen
  useEffect(() => {
    setSelectedImageIndex(0)
  }, [productId])

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
            Piece Not Found
          </h1>
          <a href="/jewelry/shop" className="text-primary hover:underline">
            Return to Collection
          </a>
        </div>
      </div>
    )
  }

  // ✅ GALERÍA REAL: usa product.images si viene, si no usa product.image
  const galleryImages = useMemo(() => {
    const fromArray =
      Array.isArray((product as any).images) && (product as any).images.length > 0
        ? ((product as any).images as string[])
        : []

    const main =
      typeof (product as any).image === "string" ? ((product as any).image as string) : ""

    // Si hay images, úsalo. Si no, usa la principal. Si no hay nada, placeholder.
    const resolved =
      fromArray.length > 0 ? fromArray : main ? [main] : ["/placeholder.svg"]

    // Quita duplicados por si el array repite la principal
    return Array.from(new Set(resolved))
  }, [product])

  // ✅ evita crashear si el index quedó fuera
  const safeIndex =
    selectedImageIndex >= 0 && selectedImageIndex < galleryImages.length
      ? selectedImageIndex
      : 0

  const relatedProducts = useMemo(() => {
    return allProducts
      .filter((p) => p.material === product.material && p.id !== product.id)
      .slice(0, 4)
  }, [product])

  const contactMessage = `Hi, I'm interested in the ${product.name} from the ${product.collection} Collection. Could you provide more details?`
  const whatsappHref = `https://wa.me/${CONTACT_INFO.colombia.whatsappNumber}?text=${encodeURIComponent(
    contactMessage
  )}`
  const smsColombiaHref = `${CONTACT_INFO.colombia.smsHref}?body=${encodeURIComponent(contactMessage)}`
  const smsUsaHref = `${CONTACT_INFO.usa.smsHref}?body=${encodeURIComponent(contactMessage)}`

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/jewelry" className="hover:text-primary transition-colors">
              Jewelry
            </a>
            <span>/</span>
            <a href="/jewelry/shop" className="hover:text-primary transition-colors">
              Shop
            </a>
            <span>/</span>
            <a
              href={`/jewelry/shop?material=${product.material}`}
              className="hover:text-primary transition-colors capitalize"
            >
              {materialLabels[product.material] ?? product.material}
            </a>
            <span>/</span>
            <span className="text-foreground capitalize">{product.type}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div
            className={cn(
              "transition-all duration-1000",
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary mb-4 group">
              <img
                src={galleryImages[safeIndex] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              {product.isNew && (
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-bold tracking-wider rounded-full">
                  NEW ARRIVAL
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 flex-wrap">
              {galleryImages.map((img, index) => (
                <button
                  key={img + index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={cn(
                    "relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300",
                    safeIndex === index
                      ? "border-primary shadow-lg scale-105"
                      : "border-border hover:border-primary/50 opacity-70 hover:opacity-100"
                  )}
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div
            className={cn(
              "transition-all duration-1000 delay-200",
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            {/* Collection & Material */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                {product.collection} Collection
              </span>
              <div className="flex items-center gap-1.5">
                <div
                  className={cn(
                    "w-2.5 h-2.5 rounded-full",
                    materialColors[product.material]
                  )}
                />
                <span className="text-xs text-muted-foreground capitalize">
                  {materialLabels[product.material] ?? product.material}
                </span>
              </div>
            </div>

            {/* Name */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
              {product.name}
            </h1>

            {/* Availability */}
            <div className="mb-8">
              <span className="font-serif text-3xl font-bold text-foreground">
                On Demand
              </span>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-border via-primary/20 to-border mb-8" />

            {/* Tabs */}
            <div className="flex gap-1 mb-6 bg-secondary/50 rounded-full p-1">
              {(["details", "shipping", "care"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "flex-1 py-2.5 px-4 rounded-full text-sm font-medium tracking-wider capitalize transition-all duration-300",
                    activeTab === tab
                      ? "bg-foreground text-background shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[200px]">
              {activeTab === "details" && (
                <div className="animate-in fade-in duration-500">
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {product.description ?? "Details coming soon."}
                  </p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(product.specs ?? {}).map(([key, value]) => (
                      <div
                        key={key}
                        className="bg-secondary/50 rounded-xl p-4 group hover:bg-secondary transition-colors duration-300"
                      >
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          {key}
                        </p>
                        <p className="font-semibold text-foreground">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "shipping" && (
                <div className="animate-in fade-in duration-500">
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Delivery</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Estimated delivery time is 12 business days. Professional
                          packaging with tracking number provided.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Warranty</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Covered by warranty for maintenance and repair at no additional
                          cost in the event of verified damage during transport.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Certificate</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Includes a certificate of authenticity issued by a professional
                          gemological laboratory, validating genuineness and quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "care" && (
                <div className="animate-in fade-in duration-500">
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Cleaning</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Gently clean with a soft, lint-free cloth. For deeper cleaning,
                          use warm water with mild soap and a soft brush.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Storage</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Store each piece separately in the provided luxury case. Avoid
                          contact with perfumes, chemicals, and extreme temperatures.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Maintenance</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          We recommend professional inspection and cleaning every 12 months
                          to maintain the piece&apos;s brilliance and structural integrity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Interested Section (igual que tu código) */}
            <div className="mt-10 bg-secondary/50 rounded-2xl p-6 border border-border">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-2">
                Made to Order
              </p>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                Interested in this piece?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Each piece is crafted exclusively for you. Contact us to place your order
                or ask any questions.
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] text-white rounded-full font-semibold tracking-wider text-sm hover:bg-[#1da851] transition-all duration-300 hover:shadow-xl mb-3"
              >
                <span>ORDER VIA WHATSAPP</span>
              </a>

              <div className="flex items-center gap-4 my-4">
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground tracking-wider">
                  OR CONTACT US
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-border hover:border-primary/30 hover:bg-background transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-primary text-sm">✦</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground tracking-wider uppercase">
                      WhatsApp Colombia
                    </p>
                    <p className="text-xs font-semibold text-foreground">
                      {CONTACT_INFO.colombia.display}
                    </p>
                  </div>
                </a>

                <a
                  href={smsColombiaHref}
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-border hover:border-primary/30 hover:bg-background transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-primary text-sm">💬</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground tracking-wider uppercase">
                      SMS Colombia
                    </p>
                    <p className="text-xs font-semibold text-foreground">
                      {CONTACT_INFO.colombia.display}
                    </p>
                  </div>
                </a>

                <a
                  href={CONTACT_INFO.usa.phoneHref}
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-border hover:border-primary/30 hover:bg-background transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-primary text-sm">📞</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground tracking-wider uppercase">
                      Call USA
                    </p>
                    <p className="text-xs font-semibold text-foreground">
                      {CONTACT_INFO.usa.display}
                    </p>
                  </div>
                </a>

                <a
                  href={smsUsaHref}
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-border hover:border-primary/30 hover:bg-background transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-primary text-sm">💬</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground tracking-wider uppercase">
                      SMS USA
                    </p>
                    <p className="text-xs font-semibold text-foreground">
                      {CONTACT_INFO.usa.display}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <a
              href="/jewelry/shop"
              className="mt-4 w-full py-4 border border-border text-foreground rounded-full font-semibold tracking-wider text-sm hover:bg-secondary transition-all duration-300 text-center block"
            >
              CONTINUE BROWSING
            </a>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-border bg-secondary/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
                  You May Also Love
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3">
                  Related Pieces
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 100}>
                  <a href={`/jewelry/shop/${item.id}`} className="group block">
                    <div className="relative aspect-square overflow-hidden rounded-2xl bg-card mb-4 border border-border group-hover:border-primary/20 transition-all duration-500 group-hover:shadow-xl">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="px-5 py-2 bg-background text-foreground rounded-full text-xs font-medium tracking-wider transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                          View Details
                        </span>
                      </div>
                    </div>
                    <h3 className="font-serif font-bold text-foreground text-sm mb-1 group-hover:text-primary transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="font-serif text-foreground font-bold">
                      On Demand
                    </p>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <LuxuryFooter />
    </div>
  )
}
