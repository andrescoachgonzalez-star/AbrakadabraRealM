"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LuxuryFooter } from "@/components/luxury-footer"

// ✅ Product data (incluye tus 6 nuevos productos)
const allProducts = [
  // ====== NUEVOS (desde FeaturedPieces) ======
  {
    id: 1,
    name: "Magic Ring",
    price: 580,
    material: "gold",
    type: "rings",
    image: "/jewelry/magic-ring.webp",
    collection: "Signature",
    isNew: true,
    description:
      "A refined signature ring crafted with a polished finish. Timeless, minimal, and designed to elevate everyday looks.",
    specs: {
      weight: "7.5g",
      purity: "18K Gold (placeholder)",
      width: "6mm",
      size: "Adjustable (placeholder)",
      stone: "Green Stone",
    },
  },
  {
    id: 2,
    name: "TEAR RING",
    price: 724,
    material: "gold",
    type: "rings",
    image: "/jewelry/tear-ring.webp",
    collection: "Tear",
    isNew: true,
    description:
      "Inspired by modern silhouettes, the Tear Ring blends sculptural lines with a clean luxury finish.",
    specs: {
      weight: "8.1g",
      purity: "18K Gold (placeholder)",
      width: "7mm",
      size: "Customizable (placeholder)",
      stone: "Green Stone",
    },
  },
  {
    id: 3,
    name: "MINI CROSS CHARM",
    price: 424,
    material: "gold",
    type: "charms",
    image: "/jewelry/mini-cross-charm.png",
    collection: "Cross Collection",
    isNew: true,
    description:
      "A minimal cross charm designed for layering. Subtle shine, clean edges, and a delicate presence.",
    specs: {
      weight: "2.2g",
      purity: "18K Gold (placeholder)",
      height: "18mm",
      width: "10mm",
      stone: "Green Stone",
    },
  },
  {
    id: 4,
    name: "I SAID BIG TEAR",
    price: 1000,
    material: "gold",
    type: "pendants",
    image: "/jewelry/i-said-big-tear.webp",
    collection: "SAID",
    isNew: true,
    description:
      "A bold pendant statement piece. The Big Tear is made for standout styling and elevated minimalism.",
    specs: {
      weight: "9.8g",
      purity: "18K Gold (placeholder)",
      height: "38mm",
      width: "22mm",
      stone: "Green Stone",
    },
  },
  {
    id: 5,
    name: "DIAMOND PENDANT",
    price: 379,
    material: "gold",
    type: "pendants",
    image: "/jewelry/diamond-pendant.webp",
    collection: "Signature",
    isNew: true,
    description:
      "A refined pendant with a bright focal sparkle. Designed to sit perfectly for daily wear and layering.",
    specs: {
      weight: "3.6g",
      purity: "18K Gold (placeholder)",
      chain: '18" (placeholder)',
      stone: "Diamonds",
      setting: "Classic (placeholder)",
    },
  },
  {
    id: 6,
    name: "SAID FLOWER",
    price: 580,
    material: "gold",
    type: "pendants",
    image: "/jewelry/said-flower.webp",
    collection: "SAID",
    isNew: true,
    description:
      "A floral-inspired pendant with a clean luxury finish. Designed for elegant daily wear.",
    specs: {
      weight: "5.1g",
      purity: "18K Gold (placeholder)",
      height: "30mm",
      width: "20mm",
      stone: "Green Stones",
    },
  },

  // ====== LOS QUE YA TENÍAS (los dejo igual, pero cambio ids para no chocar) ======
  {
    id: 25,
    name: "Imperial Gold Signet",
    price: 3100,
    material: "gold",
    type: "rings",
    image:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800",
    collection: "Heritage",
    description:
      "The Imperial Gold Signet carries centuries of tradition in its design. Crafted in 18-karat yellow gold with a polished finish, this signet ring combines heritage craftsmanship with contemporary elegance.",
    specs: { weight: "10.5g", purity: "18K Gold", width: "12mm", size: "Customizable" },
  },
  {
    id: 7,
    name: "Golden Heritage Chain",
    price: 4500,
    material: "gold",
    type: "chains",
    image:
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800",
    collection: "Heritage",
    description:
      "An exquisite chain that embodies timeless luxury. Each link is individually crafted and seamlessly connected, creating a fluid piece that drapes beautifully. The warm glow of 24-karat gold makes this an heirloom piece.",
    specs: { weight: "22g", purity: "24K Gold", length: "50cm", clasp: "Lobster" },
  },
  {
    id: 19,
    name: "Classic Gold Chain",
    price: 3800,
    material: "gold",
    type: "chains",
    image:
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800",
    collection: "Classic",
    description:
      "A sophisticated gold chain that transitions effortlessly from day to evening wear. The classic design features a smooth, polished finish with a secure clasp, crafted to last generations.",
    specs: { weight: "18g", purity: "18K Gold", length: "45cm", clasp: "Box" },
  },
  {
    id: 8,
    name: "Luxe Gold Bangle",
    price: 3200,
    material: "gold",
    type: "bracelets",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800",
    collection: "Luxe",
    description:
      "A statement bangle that captures the essence of modern luxury. Its clean lines and high-polish finish create a mesmerizing play of light on the wrist. Designed to be worn alone or stacked with other pieces.",
    specs: { weight: "15g", purity: "18K Gold", diameter: "65mm", finish: "High Polish" },
  },
  {
    id: 23,
    name: "Gold Cuff Bracelet",
    price: 4100,
    material: "gold",
    type: "bracelets",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800",
    collection: "Modern",
    description:
      "A bold and contemporary cuff bracelet that makes a powerful statement. The wide band is crafted from solid gold with a brushed satin finish that contrasts beautifully with the polished edges.",
    specs: { weight: "28g", purity: "18K Gold", width: "25mm", finish: "Satin & Polish" },
  },
  {
    id: 9,
    name: "Empress Gold Choker",
    price: 5800,
    material: "gold",
    type: "necklaces",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800",
    collection: "Royal",
    description:
      "Inspired by the crowns of empresses, this gold choker is a true work of art. Intricate filigree work and a comfortable fit make this piece both a visual masterpiece and a joy to wear.",
    specs: { weight: "35g", purity: "22K Gold", length: "38cm", closure: "Hidden Box" },
  },
  {
    id: 10,
    name: "Golden Teardrop Earrings",
    price: 1900,
    material: "gold",
    type: "earrings",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800",
    collection: "Classic",
    description:
      "Graceful teardrop earrings that frame the face with golden elegance. The organic shape and mirror finish create a luminous effect that complements any complexion.",
    specs: { weight: "4.8g", purity: "18K Gold", length: "35mm", backing: "Butterfly" },
  },
  {
    id: 11,
    name: "Celestial Diamond Ring",
    price: 12500,
    material: "diamonds",
    type: "rings",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800",
    collection: "Signature",
    isNew: true,
    description:
      "A celestial masterpiece featuring a 2-carat center diamond surrounded by a halo of smaller stones. GIA certified for exceptional clarity and brilliance, this ring captures starlight in every facet.",
    specs: {
      weight: "5.2g",
      stone: "2ct VVS1 Diamond",
      setting: "Platinum Halo",
      certification: "GIA Certified",
    },
  },
  {
    id: 12,
    name: "Diamond Eternity Band",
    price: 8900,
    material: "diamonds",
    type: "rings",
    image:
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800",
    collection: "Forever",
    description:
      "An endless circle of perfectly matched diamonds symbolizes everlasting love. Each stone is hand-selected and channel-set in platinum for a seamless, sparkling band.",
    specs: {
      weight: "4.1g",
      stone: "3.5ct Total Weight",
      setting: "Channel Set Platinum",
      certification: "GIA Certified",
    },
  },
  {
    id: 20,
    name: "Diamond Halo Ring",
    price: 18500,
    material: "diamonds",
    type: "rings",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800",
    collection: "Signature",
    isNew: true,
    description:
      "The ultimate expression of luxury, this halo ring features a 3-carat center diamond of exceptional quality. The double halo design amplifies the stone's fire and brilliance beyond measure.",
    specs: {
      weight: "6.8g",
      stone: "3ct D/IF Diamond",
      setting: "Double Halo Platinum",
      certification: "GIA Certified",
    },
  },
  {
    id: 13,
    name: "Diamond Tennis Bracelet",
    price: 15800,
    material: "diamonds",
    type: "bracelets",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800",
    collection: "Luxe",
    description:
      "A timeless tennis bracelet featuring 45 round brilliant diamonds, each individually four-prong set for maximum light performance. The flexible design ensures a comfortable and secure fit.",
    specs: {
      weight: "12g",
      stone: "8ct Total Weight",
      setting: "Four-Prong Platinum",
      diamonds: "45 Stones",
    },
  },
  {
    id: 14,
    name: "Diamond Pendant Necklace",
    price: 7400,
    material: "diamonds",
    type: "necklaces",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800",
    collection: "Signature",
    description:
      "A stunning solitaire diamond pendant that floats gracefully on an invisible-set chain. The 1.5-carat diamond is cut to maximize brilliance and fire.",
    specs: {
      weight: "3.2g",
      stone: "1.5ct VS2 Diamond",
      chain: '18" White Gold',
      certification: "GIA Certified",
    },
  },
  {
    id: 24,
    name: "Diamond Riviera Necklace",
    price: 24000,
    material: "diamonds",
    type: "necklaces",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800",
    collection: "Luxe",
    isNew: true,
    description:
      "The pinnacle of diamond jewelry, this riviera necklace features graduated diamonds that flow like a river of light around the neck. Each stone is meticulously matched for color, clarity, and size.",
    specs: {
      weight: "25g",
      stone: "15ct Total Weight",
      setting: "Bezel Set Platinum",
      diamonds: "65 Stones",
    },
  },
  {
    id: 15,
    name: "Diamond Stud Earrings",
    price: 6200,
    material: "diamonds",
    type: "earrings",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800",
    collection: "Classic",
    isNew: true,
    description:
      "The essential diamond studs reimagined with exceptional quality stones. Each 1-carat diamond is set in a platinum basket for maximum sparkle and security.",
    specs: {
      weight: "2.4g",
      stone: "2ct Total Weight",
      setting: "Basket Platinum",
      certification: "GIA Certified",
    },
  },
  {
    id: 16,
    name: "Colombian Emerald Ring",
    price: 9800,
    material: "emeralds",
    type: "rings",
    image:
      "https://images.unsplash.com/photo-1551028150-64b9f398f678?q=80&w=800",
    collection: "Heritage",
    description:
      "A mesmerizing Colombian emerald of exceptional clarity and color, set in 18-karat white gold. The deep green hue of this 3-carat stone is accentuated by a delicate diamond halo.",
    specs: {
      weight: "5.8g",
      stone: "3ct Colombian Emerald",
      setting: "18K White Gold Halo",
      origin: "Boyaca, Colombia",
    },
  },
  {
    id: 21,
    name: "Emerald Cocktail Ring",
    price: 7200,
    material: "emeralds",
    type: "rings",
    image:
      "https://images.unsplash.com/photo-1551028150-64b9f398f678?q=80&w=800",
    collection: "Statement",
    description:
      "A bold cocktail ring featuring a cabochon-cut emerald set in sculpted gold. The smooth dome of the emerald creates a captivating glow that draws the eye.",
    specs: {
      weight: "8.2g",
      stone: "4ct Cabochon Emerald",
      setting: "22K Yellow Gold",
      origin: "Zambia",
    },
  },
  {
    id: 17,
    name: "Emerald Drop Pendant",
    price: 8900,
    material: "emeralds",
    type: "necklaces",
    image:
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=800",
    collection: "Royal",
    description:
      "A pear-shaped emerald suspended from a diamond-studded bail, creating an elegant drop that catches light with every movement. The vivid green color speaks of nature's finest creation.",
    specs: {
      weight: "4.5g",
      stone: "2.5ct Pear Emerald",
      chain: '18" Platinum',
      accent: "0.3ct Diamonds",
    },
  },
  {
    id: 18,
    name: "Emerald Tennis Bracelet",
    price: 11200,
    material: "emeralds",
    type: "bracelets",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800",
    collection: "Luxe",
    isNew: true,
    description:
      "A luxurious bracelet alternating between emeralds and diamonds in a continuous line of color and light. Each emerald is hand-selected for consistent color saturation.",
    specs: {
      weight: "14g",
      stone: "6ct Emeralds + 3ct Diamonds",
      setting: "Platinum Four-Prong",
      stones: "30 Total",
    },
  },
  {
    id: 22,
    name: "Emerald Chandelier Earrings",
    price: 7600,
    material: "emeralds",
    type: "earrings",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800",
    collection: "Royal",
    description:
      "Cascading emeralds and diamonds create a chandelier effect that moves with grace. These statement earrings transform any outfit into an occasion.",
    specs: {
      weight: "6.2g",
      stone: "4ct Total Emeralds",
      accent: "1.2ct Diamonds",
      length: "55mm",
    },
  },
  {
    id: 26,
    name: "Pigeon Blood Ruby Ring",
    price: 14500,
    material: "rubies",
    type: "rings",
    image:
      "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=800",
    collection: "Passion",
    isNew: true,
    description:
      "The rarest of rubies, a pigeon blood stone of exceptional saturation and clarity. Set in platinum with tapered baguette diamonds, this ring is a collector's dream.",
    specs: {
      weight: "6.1g",
      stone: "3ct Pigeon Blood Ruby",
      setting: "Platinum + Baguettes",
      origin: "Myanmar (Burma)",
    },
  },
  {
    id: 27,
    name: "Ruby Eternity Band",
    price: 8200,
    material: "rubies",
    type: "rings",
    image:
      "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=800",
    collection: "Passion",
    description:
      "A continuous band of deep red rubies symbolizing eternal passion. Each stone is precisely calibrated and channel-set for a smooth, comfortable wear.",
    specs: {
      weight: "4.5g",
      stone: "4ct Total Rubies",
      setting: "Channel Set 18K Gold",
      stones: "22 Rubies",
    },
  },
  {
    id: 28,
    name: "Ruby Heart Pendant",
    price: 6800,
    material: "rubies",
    type: "necklaces",
    image:
      "https://images.unsplash.com/photo-1583937443566-6d671c6a5e32?q=80&w=800",
    collection: "Romance",
    description:
      "A heart-shaped ruby of vivid color suspended on a delicate chain. The romantic design and exceptional stone make this the ultimate declaration of love.",
    specs: {
      weight: "3.8g",
      stone: "2ct Heart Ruby",
      chain: '16" Rose Gold',
      accent: "0.2ct Diamonds",
    },
  },
  {
    id: 29,
    name: "Ruby Chain Necklace",
    price: 9400,
    material: "rubies",
    type: "chains",
    image:
      "https://images.unsplash.com/photo-1583937443566-6d671c6a5e32?q=80&w=800",
    collection: "Passion",
    description:
      "Rubies and gold links intertwine in this magnificent chain necklace. The alternating pattern of red and gold creates a royal aesthetic that commands attention.",
    specs: {
      weight: "20g",
      stone: "5ct Total Rubies",
      chain: "18K Gold Links",
      length: "45cm",
    },
  },
  {
    id: 30,
    name: "Ruby Drop Earrings",
    price: 5400,
    material: "rubies",
    type: "earrings",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800",
    collection: "Romance",
    description:
      "Elegant drop earrings featuring oval rubies framed by a single row of diamonds. The warm red hue complements every skin tone and adds a touch of passion to any ensemble.",
    specs: {
      weight: "5g",
      stone: "2ct Total Rubies",
      accent: "0.5ct Diamonds",
      length: "40mm",
    },
  },
]

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
  const product = allProducts.find((p) => p.id === Number(id))
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState<"details" | "shipping" | "care">(
    "details"
  )

  useEffect(() => {
    setIsLoaded(true)
  }, [])

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

  // Generate gallery images (same image with different crops for demo)
  const galleryImages = [
    product.image,
    typeof product.image === "string"
      ? product.image.replace("w=800", "w=801")
      : product.image,
    typeof product.image === "string"
      ? product.image.replace("w=800", "w=802")
      : product.image,
  ]

  // Related products (same material, different piece)
  const relatedProducts = allProducts
    .filter((p) => p.material === product.material && p.id !== product.id)
    .slice(0, 4)

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
            <a
              href="/jewelry/shop"
              className="hover:text-primary transition-colors"
            >
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
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            )}
          >
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary mb-4 group">
              <img
                src={galleryImages[selectedImageIndex] || "/placeholder.svg"}
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
            <div className="flex gap-3">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={cn(
                    "relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300",
                    selectedImageIndex === index
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
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
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

            {/* Price */}
            <div className="mb-8">
              <span className="font-serif text-3xl font-bold text-foreground">
                ${product.price.toLocaleString()}
              </span>
              <span className="text-sm text-muted-foreground ml-2">USD</span>
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
                    {product.description}
                  </p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(product.specs).map(([key, value]) => (
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
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Delivery
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Estimated delivery time is 12 business days. Professional
                          packaging with tracking number provided.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Warranty
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Covered by warranty for maintenance and repair at no additional
                          cost in the event of verified damage during transport.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Certificate
                        </h4>
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
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Cleaning
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Gently clean with a soft, lint-free cloth. For deeper cleaning,
                          use warm water with mild soap and a soft brush.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Storage
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Store each piece separately in the provided luxury case. Avoid
                          contact with perfumes, chemicals, and extreme temperatures.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Maintenance
                        </h4>
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

            {/* Interested Section */}
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
                href={`https://wa.me/15551234567?text=${encodeURIComponent(
                  `Hi, I'm interested in the ${product.name} ($${product.price.toLocaleString()}) from the ${product.collection} Collection. Could you provide more details?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] text-white rounded-full font-semibold tracking-wider text-sm hover:bg-[#1da851] transition-all duration-300 hover:shadow-xl mb-3"
              >
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                ORDER VIA WHATSAPP
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
                  href="tel:+15551234567"
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-border hover:border-primary/30 hover:bg-background transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground tracking-wider uppercase">
                      Phone
                    </p>
                    <p className="text-xs font-semibold text-foreground">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:luxury@jewelry.com"
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-border hover:border-primary/30 hover:bg-background transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground tracking-wider uppercase">
                      Email
                    </p>
                    <p className="text-xs font-semibold text-foreground">
                      luxury@jewelry.com
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
                      ${item.price.toLocaleString()}
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