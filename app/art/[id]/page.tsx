"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { ArrowLeft, Heart, Share2, ShoppingBag, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight, Minus, Plus, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const artworks = [
  {
    id: "1",
    title: "Eternal Vibrance",
    artist: "Adriana Henao",
    artistBio: "Colombian artist known for her vibrant abstract compositions that explore the intersection of emotion and color.",
    price: 2500,
    category: "Abstract",
    description: "A stunning abstract piece that captures the essence of eternal energy through bold strokes and vibrant colors. This artwork represents the continuous flow of life and creativity.",
    dimensions: "80 x 100 cm",
    medium: "Acrylic on Canvas",
    year: "2024",
    available: true,
    images: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
    ],
    details: [
      "Original one-of-a-kind artwork",
      "Certificate of authenticity included",
      "Ready to hang",
      "Signed by the artist",
    ],
  },
  {
    id: "2",
    title: "Ocean Dreams",
    artist: "Paula Suarez",
    artistBio: "Miami-based artist whose work reflects the beauty of coastal landscapes and marine life.",
    price: 1800,
    category: "Abstract",
    description: "Inspired by the depths of the ocean, this piece brings the calming essence of water into your space with flowing blues and teals.",
    dimensions: "60 x 60 cm",
    medium: "Oil on Canvas",
    year: "2024",
    available: true,
    images: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
    ],
    details: [
      "Original one-of-a-kind artwork",
      "Certificate of authenticity included",
      "Professional framing available",
      "Signed by the artist",
    ],
  },
  {
    id: "3",
    title: "Golden Hour",
    artist: "Sandra Henao",
    artistBio: "Contemporary artist from Spain specializing in capturing light and atmosphere in her works.",
    price: 3200,
    category: "Contemporary",
    description: "A mesmerizing portrayal of the magical moment when daylight transforms into gold, creating an atmosphere of warmth and tranquility.",
    dimensions: "100 x 120 cm",
    medium: "Mixed Media on Canvas",
    year: "2023",
    available: true,
    images: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
    ],
    details: [
      "Original one-of-a-kind artwork",
      "Certificate of authenticity included",
      "Custom framing included",
      "Signed by the artist",
    ],
  },
  {
    id: "4",
    title: "Urban Symphony",
    artist: "Adriana Henao",
    artistBio: "Colombian artist known for her vibrant abstract compositions that explore the intersection of emotion and color.",
    price: 2100,
    category: "Modern",
    description: "A dynamic representation of city life, capturing the rhythm and energy of urban environments through bold geometric forms.",
    dimensions: "50 x 50 cm",
    medium: "Acrylic on Canvas",
    year: "2024",
    available: true,
    images: [
      "/placeholder.svg?height=800&width=600",
    ],
    details: [
      "Original one-of-a-kind artwork",
      "Certificate of authenticity included",
      "Ready to hang",
      "Signed by the artist",
    ],
  },
  {
    id: "5",
    title: "Nature's Whisper",
    artist: "Paula Suarez",
    artistBio: "Miami-based artist whose work reflects the beauty of coastal landscapes and marine life.",
    price: 4500,
    category: "Abstract",
    description: "A delicate exploration of nature's quiet moments, rendered in soft organic forms and natural earth tones.",
    dimensions: "90 x 90 cm",
    medium: "Oil and Gold Leaf on Canvas",
    year: "2024",
    available: true,
    images: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
    ],
    details: [
      "Original one-of-a-kind artwork",
      "24k gold leaf details",
      "Museum-quality framing included",
      "Signed by the artist",
    ],
  },
  {
    id: "6",
    title: "Cosmic Dance",
    artist: "Sandra Henao",
    artistBio: "Contemporary artist from Spain specializing in capturing light and atmosphere in her works.",
    price: 2800,
    category: "Contemporary",
    description: "An ethereal piece inspired by the movement of celestial bodies, featuring swirling forms and cosmic colors.",
    dimensions: "70 x 70 cm",
    medium: "Acrylic and Resin on Canvas",
    year: "2024",
    available: false,
    images: [
      "/placeholder.svg?height=800&width=600",
    ],
    details: [
      "Original one-of-a-kind artwork",
      "Resin finish for depth",
      "Certificate of authenticity included",
      "Signed by the artist",
    ],
  },
  {
    id: "7",
    title: "Silent Reflections",
    artist: "Adriana Henao",
    artistBio: "Colombian artist known for her vibrant abstract compositions that explore the intersection of emotion and color.",
    price: 3600,
    category: "Modern",
    description: "A contemplative piece that invites viewers to pause and reflect, featuring subtle gradients and meditative compositions.",
    dimensions: "100 x 140 cm",
    medium: "Oil on Canvas",
    year: "2023",
    available: true,
    images: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
    ],
    details: [
      "Original one-of-a-kind artwork",
      "Certificate of authenticity included",
      "White oak frame included",
      "Signed by the artist",
    ],
  },
  {
    id: "8",
    title: "Digital Horizons",
    artist: "Paula Suarez",
    artistBio: "Miami-based artist whose work reflects the beauty of coastal landscapes and marine life.",
    price: 1950,
    category: "Digital",
    description: "A modern digital artwork that bridges traditional art with contemporary technology, available as a high-quality print.",
    dimensions: "60 x 80 cm",
    medium: "Digital Print on Fine Art Paper",
    year: "2024",
    available: true,
    images: [
      "/placeholder.svg?height=800&width=600",
    ],
    details: [
      "Limited edition of 50",
      "Archival quality print",
      "Numbered and signed",
      "Certificate of authenticity included",
    ],
  },
]

export default function ArtDetailPage() {
  const params = useParams()
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)
  const [showZoom, setShowZoom] = useState(false)

  const artwork = artworks.find((a) => a.id === params.id)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!artwork) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artwork not found</h1>
          <Link href="/art" className="text-primary hover:underline">
            Return to gallery
          </Link>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % artwork.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + artwork.images.length) % artwork.images.length)
  }

  const handleAddToCart = () => {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 3000)
  }

  const relatedArtworks = artworks
    .filter((a) => a.id !== artwork.id && (a.artist === artwork.artist || a.category === artwork.category))
    .slice(0, 4)

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/art"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Gallery</span>
            </Link>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={cn(
                  "p-2 rounded-full transition-all duration-300",
                  isLiked ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Heart className={cn("h-5 w-5", isLiked && "fill-current")} />
              </button>
              <button className="p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Image Gallery */}
            <div className={cn(
              "transition-all duration-700",
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}>
              {/* Main Image */}
              <div 
                className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted cursor-zoom-in group"
                onClick={() => setShowZoom(true)}
              >
                {artwork.images.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`${artwork.title} - Image ${index + 1}`}
                    fill
                    className={cn(
                      "object-cover transition-all duration-500",
                      currentImage === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    )}
                  />
                ))}

                {/* Image Navigation */}
                {artwork.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                {/* Zoom Hint */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to zoom
                </div>

                {/* Availability Badge */}
                {!artwork.available && (
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-foreground text-background text-xs font-medium">
                    SOLD
                  </div>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {artwork.images.length > 1 && (
                <div className="flex gap-3 mt-4 justify-center">
                  {artwork.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={cn(
                        "relative h-16 w-16 rounded-lg overflow-hidden transition-all duration-300",
                        currentImage === index 
                          ? "ring-2 ring-primary ring-offset-2" 
                          : "opacity-60 hover:opacity-100"
                      )}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className={cn(
              "transition-all duration-700 delay-200",
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}>
              {/* Category & Artist */}
              <div className="flex items-center gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium tracking-wider">
                  {artwork.category.toUpperCase()}
                </span>
                <span className="text-muted-foreground">by</span>
                <span className="font-medium text-foreground">{artwork.artist}</span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4">
                {artwork.title}
              </h1>

              {/* Price */}
              <div className="mt-6">
                <p className="font-serif text-4xl font-bold text-primary">
                  ${artwork.price.toLocaleString()} USD
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Free worldwide shipping on orders over $1,000
                </p>
              </div>

              {/* Description */}
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {artwork.description}
              </p>

              {/* Specifications */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-muted/50">
                  <p className="text-xs text-muted-foreground tracking-wider">DIMENSIONS</p>
                  <p className="font-medium mt-1">{artwork.dimensions}</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50">
                  <p className="text-xs text-muted-foreground tracking-wider">MEDIUM</p>
                  <p className="font-medium mt-1">{artwork.medium}</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50">
                  <p className="text-xs text-muted-foreground tracking-wider">YEAR</p>
                  <p className="font-medium mt-1">{artwork.year}</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50">
                  <p className="text-xs text-muted-foreground tracking-wider">STATUS</p>
                  <p className={cn("font-medium mt-1", artwork.available ? "text-green-600" : "text-muted-foreground")}>
                    {artwork.available ? "Available" : "Sold"}
                  </p>
                </div>
              </div>

              {/* Details List */}
              <div className="mt-8">
                <p className="text-sm font-medium tracking-wider text-foreground mb-3">INCLUDES</p>
                <ul className="space-y-2">
                  {artwork.details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity & Add to Cart */}
              {artwork.available && (
                <div className="mt-8 space-y-4">
                  {/* Quantity Selector */}
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">Quantity</span>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-full bg-muted">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-1 rounded-full hover:bg-background transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-1 rounded-full hover:bg-background transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={handleAddToCart}
                    className={cn(
                      "w-full py-4 rounded-full font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-3",
                      addedToCart
                        ? "bg-green-600 text-white"
                        : "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
                    )}
                  >
                    {addedToCart ? (
                      <>
                        <Check className="h-5 w-5" />
                        ADDED TO CART
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="h-5 w-5" />
                        ADD TO CART - ${(artwork.price * quantity).toLocaleString()} USD
                      </>
                    )}
                  </button>

                  {/* Buy Now Button */}
                  <button className="w-full py-4 rounded-full font-semibold tracking-wider bg-foreground text-background hover:bg-foreground/90 transition-colors">
                    BUY NOW
                  </button>
                </div>
              )}

              {/* Trust Badges */}
              <div className="mt-8 grid grid-cols-3 gap-4 pt-8 border-t border-border">
                <div className="text-center">
                  <Truck className="h-6 w-6 mx-auto text-muted-foreground" />
                  <p className="text-xs text-muted-foreground mt-2">Free Shipping</p>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 mx-auto text-muted-foreground" />
                  <p className="text-xs text-muted-foreground mt-2">Secure Payment</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="h-6 w-6 mx-auto text-muted-foreground" />
                  <p className="text-xs text-muted-foreground mt-2">14-Day Returns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Artist Bio */}
          <div className={cn(
            "mt-20 p-8 rounded-2xl bg-muted/50 transition-all duration-700 delay-400",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="flex items-start gap-6">
              <div className="h-16 w-16 rounded-full bg-muted shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground tracking-wider">ABOUT THE ARTIST</p>
                <h3 className="font-serif text-xl font-bold mt-1">{artwork.artist}</h3>
                <p className="text-muted-foreground mt-2">{artwork.artistBio}</p>
                <Link
                  href="/#team"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium mt-4 hover:underline"
                >
                  View all works by this artist
                </Link>
              </div>
            </div>
          </div>

          {/* Related Artworks */}
          {relatedArtworks.length > 0 && (
            <div className="mt-20">
              <h2 className="font-serif text-2xl font-bold text-center mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {relatedArtworks.map((art) => (
                  <Link
                    key={art.id}
                    href={`/art/${art.id}`}
                    className="group block rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={art.images[0]}
                        alt={art.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground">{art.artist}</p>
                      <h3 className="font-medium truncate mt-1">{art.title}</h3>
                      <p className="text-sm font-semibold text-primary mt-1">
                        ${art.price.toLocaleString()} USD
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Image Zoom Modal */}
      {showZoom && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center cursor-zoom-out"
          onClick={() => setShowZoom(false)}
        >
          <button
            onClick={() => setShowZoom(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="relative w-[90vw] h-[90vh]">
            <Image
              src={artwork.images[currentImage]}
              alt={artwork.title}
              fill
              className="object-contain"
            />
          </div>
          {artwork.images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>
      )}
    </main>
  )
}
