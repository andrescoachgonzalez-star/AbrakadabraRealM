"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Minus, Plus, ChevronRight, Truck, Shield, Star } from "lucide-react"
import { LuxuryHeader } from "@/components/luxury-header"

const allProducts: Record<string, {
  name: string
  category: string
  categorySlug: string
  originalPrice: string
  salePrice: string
  onSale: boolean
  images: string[]
  description: string[]
  sizes: string[]
  material: string
  limitedEdition: boolean
}> = {
  "oversize-abrakadabra-realm-black": {
    name: "OVERSIZE ABRAKADABRA REALM BLACK",
    category: "T-Shirt & Caps",
    categorySlug: "tshirts",
    originalPrice: "40,00",
    salePrice: "30,00",
    onSale: true,
    images: [
      "/clothing/tshirt-black.jpg",
      "/clothing/tshirt-black-back.jpg",
      "/clothing/tshirt-black-detail.jpg",
    ],
    description: [
      "IMPORTANT: Free shipping only in Colombia",
      "LIMITED EDITION",
      "Size: M",
      "100% Cotton",
      "Unique print",
    ],
    sizes: ["S", "M", "L", "XL"],
    material: "100% Premium Cotton",
    limitedEdition: true,
  },
  "oversize-abrakadabra-realm-white": {
    name: "OVERSIZE ABRAKADABRA REALM WHITE",
    category: "T-Shirt & Caps",
    categorySlug: "tshirts",
    originalPrice: "40,00",
    salePrice: "30,00",
    onSale: true,
    images: [
      "/clothing/tshirt-white.jpg",
      "/clothing/tshirt-white-back.jpg",
      "/clothing/tshirt-white-detail.jpg",
    ],
    description: [
      "IMPORTANT: Free shipping only in Colombia",
      "LIMITED EDITION",
      "Size: M",
      "100% Cotton",
      "Unique print",
    ],
    sizes: ["S", "M", "L", "XL"],
    material: "100% Premium Cotton",
    limitedEdition: true,
  },
  "cap-ii-abrakadabra": {
    name: "CAP II ABRAKADABRA",
    category: "T-Shirt & Caps",
    categorySlug: "caps",
    originalPrice: "20,00",
    salePrice: "10,00",
    onSale: true,
    images: [
      "/clothing/cap-white.jpg",
      "/clothing/cap-white-detail.jpg",
    ],
    description: [
      "IMPORTANT: Free shipping only in Colombia",
      "LIMITED EDITION",
      "One Size",
      "Adjustable strap",
      "Embroidered logo",
    ],
    sizes: ["One Size"],
    material: "Cotton Twill",
    limitedEdition: true,
  },
  "abrakadabra-cap-crew-vol-1": {
    name: "ABRAKADABRA CAP CREW VOL. 1",
    category: "T-Shirt & Caps",
    categorySlug: "caps",
    originalPrice: "20,00",
    salePrice: "10,00",
    onSale: true,
    images: [
      "/clothing/cap-black.jpg",
      "/clothing/cap-black-detail.jpg",
    ],
    description: [
      "IMPORTANT: Free shipping only in Colombia",
      "LIMITED EDITION",
      "One Size",
      "Adjustable strap",
      "Embroidered logo",
    ],
    sizes: ["One Size"],
    material: "Cotton Twill",
    limitedEdition: true,
  },
  "oversize-indifferent-black-universe": {
    name: "OVERSIZE INDIFFERENT BLACK UNIVERSE",
    category: "T-Shirt & Caps",
    categorySlug: "tshirts",
    originalPrice: "40,00",
    salePrice: "20,00",
    onSale: true,
    images: [
      "/clothing/tshirt-universe-black.jpg",
      "/clothing/tshirt-black-back.jpg",
      "/clothing/tshirt-black-detail.jpg",
    ],
    description: [
      "IMPORTANT: Free shipping only in Colombia",
      "LIMITED EDITION",
      "Size: M",
      "100% Cotton",
      "Unique universe print",
    ],
    sizes: ["S", "M", "L", "XL"],
    material: "100% Premium Cotton",
    limitedEdition: true,
  },
  "oversize-universe-indifferent-beige": {
    name: "OVERSIZE UNIVERSE INDIFFERENT BEIGE",
    category: "T-Shirt & Caps",
    categorySlug: "tshirts",
    originalPrice: "40,00",
    salePrice: "20,00",
    onSale: true,
    images: [
      "/clothing/tshirt-beige.jpg",
      "/clothing/tshirt-white-back.jpg",
      "/clothing/tshirt-white-detail.jpg",
    ],
    description: [
      "IMPORTANT: Free shipping only in Colombia",
      "LIMITED EDITION",
      "Size: M",
      "100% Cotton",
      "Unique universe print",
    ],
    sizes: ["S", "M", "L", "XL"],
    material: "100% Premium Cotton",
    limitedEdition: true,
  },
  "blue-halter-swim-dress": {
    name: "BLUE HALTER SWIM DRESS",
    category: "Swimsuits",
    categorySlug: "swimsuits",
    originalPrice: "36,00",
    salePrice: "20,00",
    onSale: true,
    images: [
      "/clothing/swimsuit-blue.jpg",
      "/clothing/swimsuit-blue-detail.jpg",
    ],
    description: [
      "IMPORTANT: Free shipping only in Colombia",
      "LIMITED EDITION",
      "Available sizes: S, M, L",
      "Quick-dry fabric",
      "Halter neckline",
    ],
    sizes: ["S", "M", "L"],
    material: "82% Nylon, 18% Spandex",
    limitedEdition: true,
  },
  "vestido-de-bano-halter-verde": {
    name: "VESTIDO DE BANO HALTER VERDE",
    category: "Swimsuits",
    categorySlug: "swimsuits",
    originalPrice: "36,00",
    salePrice: "20,00",
    onSale: true,
    images: [
      "/clothing/swimsuit-green.jpg",
      "/clothing/swimsuit-green-detail.jpg",
    ],
    description: [
      "IMPORTANT: Free shipping only in Colombia",
      "LIMITED EDITION",
      "Available sizes: S, M, L",
      "Quick-dry fabric",
      "Halter neckline",
    ],
    sizes: ["S", "M", "L"],
    material: "82% Nylon, 18% Spandex",
    limitedEdition: true,
  },
  "vestido-de-bano-halter-fuchsia": {
    name: "VESTIDO DE BANO HALTER FUCHSIA",
    category: "Swimsuits",
    categorySlug: "swimsuits",
    originalPrice: "36,00",
    salePrice: "20,00",
    onSale: true,
    images: [
      "/clothing/swimsuit-fuchsia.jpg",
      "/clothing/swimsuit-fuchsia-detail.jpg",
    ],
    description: [
      "IMPORTANT: Free shipping only in Colombia",
      "LIMITED EDITION",
      "Available sizes: S, M, L",
      "Quick-dry fabric",
      "Halter neckline",
    ],
    sizes: ["S", "M", "L"],
    material: "82% Nylon, 18% Spandex",
    limitedEdition: true,
  },
}

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const product = allProducts[slug]

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState<"description" | "details" | "shipping">("description")
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  if (!product) {
    return (
      <main className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <LuxuryHeader />
        <div className="text-center pt-20">
          <h1 className="text-4xl font-bold text-white mb-4 font-serif">Product Not Found</h1>
          <Link href="/clothing" className="text-[#c4a882] hover:underline">
            Back to Clothing
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <LuxuryHeader />

      {/* Breadcrumb */}
      <div className="pt-28 pb-4">
        <div className="container mx-auto px-6">
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm"
          >
            <Link href="/clothing" className="text-white/40 hover:text-[#c4a882] transition-colors">
              Clothing
            </Link>
            <ChevronRight className="w-3 h-3 text-white/20" />
            <span className="text-white/40">{product.category}</span>
            <ChevronRight className="w-3 h-3 text-white/20" />
            <span className="text-[#c4a882] truncate max-w-[200px]">{product.name}</span>
          </motion.nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left: Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[3/4] bg-[#2a2a2a] overflow-hidden mb-4 group">
                {product.onSale && (
                  <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-5 left-0 z-10 bg-[#c41e3a] text-white text-xs font-bold px-4 py-1.5 tracking-wider"
                  >
                    SALE
                  </motion.div>
                )}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage}
                    src={product.images[selectedImage]}
                    alt={product.name}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>

              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative w-20 h-20 overflow-hidden transition-all duration-300 ${
                      selectedImage === i
                        ? "ring-2 ring-[#c4a882] ring-offset-2 ring-offset-[#1a1a1a]"
                        : "opacity-50 hover:opacity-80"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Right: Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold text-white tracking-wider font-serif mb-4"
              >
                {product.name}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex items-baseline gap-3 mb-8"
              >
                {product.onSale && (
                  <span className="text-white/40 text-lg line-through">{product.originalPrice} USD</span>
                )}
                <span className="text-[#c41e3a] text-2xl font-bold">{product.salePrice} USD</span>
              </motion.div>

              <div className="w-full h-px bg-white/10 mb-6" />

              {/* Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-0 mb-6 border-b border-white/10"
              >
                {[
                  { key: "description" as const, label: "Description" },
                  { key: "details" as const, label: "Additional Info" },
                  { key: "shipping" as const, label: "Shipping" },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`relative px-5 py-3 text-sm tracking-wide transition-colors ${
                      activeTab === tab.key
                        ? "text-white"
                        : "text-white/40 hover:text-white/60"
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.key && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c41e3a]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </motion.div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="mb-8 min-h-[120px]"
                >
                  {activeTab === "description" && (
                    <ul className="space-y-2.5">
                      {product.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-3 text-white/70 text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c4a882] mt-1.5 shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                  {activeTab === "details" && (
                    <div className="space-y-4">
                      <div className="flex justify-between py-3 border-b border-white/5">
                        <span className="text-white/50 text-sm">Material</span>
                        <span className="text-white/80 text-sm">{product.material}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-white/5">
                        <span className="text-white/50 text-sm">Category</span>
                        <span className="text-white/80 text-sm">{product.category}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-white/5">
                        <span className="text-white/50 text-sm">Edition</span>
                        <span className="text-[#c4a882] text-sm font-medium">
                          {product.limitedEdition ? "Limited Edition" : "Standard"}
                        </span>
                      </div>
                      <div className="flex justify-between py-3">
                        <span className="text-white/50 text-sm">Brand</span>
                        <span className="text-white/80 text-sm">Abrakadabra Realm</span>
                      </div>
                    </div>
                  )}
                  {activeTab === "shipping" && (
                    <div className="space-y-5">
                      <div className="flex items-start gap-3">
                        <Truck className="w-5 h-5 text-[#c4a882] mt-0.5 shrink-0" />
                        <div>
                          <p className="text-white/80 text-sm font-medium">Free shipping in Colombia</p>
                          <p className="text-white/50 text-xs mt-1">Dispatched from Medellin. 3-5 business days.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-[#c4a882] mt-0.5 shrink-0" />
                        <div>
                          <p className="text-white/80 text-sm font-medium">International Shipping</p>
                          <p className="text-white/50 text-xs mt-1">Available worldwide. Contact us for rates.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Size Selection */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mb-6"
              >
                <p className="text-white/50 text-xs tracking-widest uppercase mb-3">Size</p>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[48px] h-10 px-3 text-sm tracking-wide border transition-all duration-300 ${
                        selectedSize === size
                          ? "border-[#c4a882] bg-[#c4a882]/10 text-[#c4a882]"
                          : "border-white/15 text-white/50 hover:border-white/30 hover:text-white/70"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Quantity + Add to Cart */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="flex items-center border border-white/15">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-11 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 h-11 flex items-center justify-center text-white text-sm border-x border-white/15">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-11 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 h-11 bg-[#c41e3a] text-white text-sm font-bold tracking-widest hover:bg-[#a01830] transition-colors"
                >
                  ADD TO CART
                </motion.button>
              </motion.div>

              {/* Category */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="flex items-center gap-2 text-sm mb-6"
              >
                <span className="text-white/40">Category:</span>
                <span className="text-[#c4a882]">{product.category}</span>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10"
              >
                {[
                  { icon: Truck, label: "Free Shipping", sub: "Colombia" },
                  { icon: Shield, label: "Secure", sub: "Payment" },
                  { icon: Star, label: "Limited", sub: "Edition" },
                ].map((badge, i) => (
                  <div key={i} className="text-center">
                    <badge.icon className="w-5 h-5 text-[#c4a882] mx-auto mb-1.5" />
                    <p className="text-white/70 text-xs font-medium">{badge.label}</p>
                    <p className="text-white/40 text-xs">{badge.sub}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-10"
          >
            <div>
              <p className="text-[#c4a882] text-xs tracking-[0.3em] uppercase mb-2">You may also like</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wider font-serif">
                RELATED PRODUCTS
              </h2>
            </div>
            <Link
              href="/clothing"
              className="text-white/50 text-sm tracking-widest hover:text-[#c4a882] transition-colors flex items-center gap-2"
            >
              VIEW ALL
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(allProducts)
              .filter(([key]) => key !== slug)
              .slice(0, 4)
              .map(([key, relatedProduct], i) => (
                <Link key={key} href={`/clothing/${key}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden aspect-[3/4] bg-[#2a2a2a]">
                      <img
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {relatedProduct.onSale && (
                        <div className="absolute top-3 left-0 bg-[#c41e3a] text-white text-[10px] font-bold px-2.5 py-1 tracking-wider">
                          SALE
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white text-xs tracking-widest border border-white px-3 py-1.5 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                          VIEW
                        </span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h3 className="text-white/80 text-xs font-medium tracking-wide group-hover:text-[#c4a882] transition-colors line-clamp-1">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        {relatedProduct.onSale && (
                          <span className="text-white/40 text-xs line-through">{relatedProduct.originalPrice} USD</span>
                        )}
                        <span className="text-white text-xs font-semibold">{relatedProduct.salePrice} USD</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Back to collection */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/clothing"
              className="inline-flex items-center gap-2 text-[#c4a882] text-sm tracking-widest hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              BACK TO COLLECTION
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] py-12 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/40 text-sm tracking-widest">{"ABRAKADABRA REALM \u2013 LUXURY MARKETPLACE"}</p>
          <p className="text-white/30 text-xs mt-2">All rights reserved 2024</p>
        </div>
      </footer>
    </main>
  )
}
