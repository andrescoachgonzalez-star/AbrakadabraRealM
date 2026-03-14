"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import {
  ArrowLeft,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { getArtProduct, getAllArtProducts } from "../data/art-products"

export default function ArtDetailPage() {
  const params = useParams()

  const [isLoaded, setIsLoaded] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [showZoom, setShowZoom] = useState(false)
  const [copiedMessage, setCopiedMessage] = useState(false)

  const CO_WA_NUMBER = "573103920569"
  const CO_SMS_NUMBER = "+573103920569"

  const artwork = getArtProduct(params.id as string)

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
    setCurrentImage(
      (prev) => (prev - 1 + artwork.images.length) % artwork.images.length
    )
  }

  const relatedArtworks = getAllArtProducts()
    .filter((a) => a.slug !== artwork.slug)
    .slice(0, 4)

  const whatsappMessage = `Hello! I'm interested in the artwork "${artwork.title}". Could you please give me more information?`
  const smsMessage = `Hello! I'm interested in the artwork "${artwork.title}". Could you please give me more information?`

  const whatsappHref = `https://wa.me/${CO_WA_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`

  const smsHref = `sms:${CO_SMS_NUMBER}?body=${encodeURIComponent(smsMessage)}`

  const handleShare = async () => {
    const shareData = {
      title: artwork.title,
      text: `Check out this artwork: ${artwork.title}`,
      url: typeof window !== "undefined" ? window.location.href : "",
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url)
        setCopiedMessage(true)
        setTimeout(() => setCopiedMessage(false), 2500)
      }
    } catch (error) {
      console.error("Error sharing:", error)
    }
  }

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
              Back to Gallery
            </Link>

            {/* <div className="flex items-center gap-3">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={cn(
                  "p-2 rounded-full transition-all duration-300",
                  isLiked
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Heart className={cn("h-5 w-5", isLiked && "fill-current")} />
              </button>

              <button
                onClick={handleShare}
                className="p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
              >
                <Share2 className="h-5 w-5" />
              </button>
            </div> */}
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Images */}
            <div
              className={cn(
                "transition-all duration-700",
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              )}
            >
              <div
                className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted cursor-zoom-in"
                onClick={() => setShowZoom(true)}
              >
                <Image
                  src={artwork.images[currentImage]}
                  alt={artwork.title}
                  fill
                  className="object-cover"
                />

                {artwork.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage()
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-md transition"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-md transition"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {/* thumbnails */}
              {artwork.images.length > 1 && (
                <div className="flex gap-3 mt-4 flex-wrap">
                  {artwork.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={cn(
                        "relative h-16 w-16 rounded-lg overflow-hidden border-2 transition",
                        currentImage === index
                          ? "border-primary"
                          : "border-transparent hover:border-border"
                      )}
                    >
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div
              className={cn(
                "transition-all duration-700 delay-150",
                isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              )}
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold">
                {artwork.title}
              </h1>

              <p className="text-primary text-3xl mt-4">
                ${artwork.price.toLocaleString()} USD
              </p>

              <p className="mt-6 text-muted-foreground leading-relaxed">
                {artwork.description}
              </p>

              {/* Contact Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-full bg-primary text-white flex items-center justify-center gap-2 font-medium transition hover:opacity-90"
                >
                  Contact via WhatsApp
                </a>

                <a
                  href={smsHref}
                  className="w-full py-4 rounded-full border border-border bg-background text-foreground flex items-center justify-center gap-2 font-medium transition hover:bg-muted"
                >
                  Send text message
                </a>
              </div>

              {copiedMessage && (
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-primary">
                  <Check className="h-4 w-4" />
                  Link copied successfully
                </div>
              )}
            </div>
          </div>

          {/* Zoom modal */}
          {showZoom && (
            <div
              className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
              onClick={() => setShowZoom(false)}
            >
              <div className="relative w-full max-w-5xl h-[85vh]">
                <Image
                  src={artwork.images[currentImage]}
                  alt={artwork.title}
                  fill
                  className="object-contain"
                />

                <button
                  onClick={() => setShowZoom(false)}
                  className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full shadow"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Related */}
          <div className="mt-20">
            <h2 className="text-2xl font-serif mb-8 text-center">
              You May Also Like
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedArtworks.map((art) => (
                <Link key={art.id} href={`/art/${art.slug}`} className="block group">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-muted">
                    <Image
                      src={art.images[0]}
                      alt={art.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="mt-3 font-medium">{art.title}</h3>

                  <p className="text-primary">${art.price.toLocaleString()}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}