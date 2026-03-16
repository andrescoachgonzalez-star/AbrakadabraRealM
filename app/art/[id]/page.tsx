"use client"

import { useState, useEffect, useRef } from "react"
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
import { LuxuryHeader } from "@/components/luxury-header"
import { LuxuryFooter } from "@/components/luxury-footer"
import { getArtProduct, getAllArtProducts } from "../data/art-products"

function ScrollReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.12 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
    >
      {children}
    </div>
  )
}

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
    <main className="min-h-screen bg-background overflow-x-hidden">
      <LuxuryHeader />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pt-28 pb-16">
        <div className="absolute inset-0">
          <Image
            src={artwork.images[0]}
            alt={artwork.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <ScrollReveal>
            <Link
              href="/art"
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-white/80 hover:text-white transition"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to gallery
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={120} className="mt-6">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white">
              {artwork.title}
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <span className="text-white/70 tracking-[0.2em] text-xs uppercase">
                {artwork.category}
              </span>
              <div className="h-0.5 w-10 bg-white/50" />
              <span className="text-white font-semibold text-2xl">
                ${artwork.price.toLocaleString()} USD
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-14 lg:grid-cols-2 items-start">
            {/* Images */}
            <ScrollReveal>
              <div
                className={cn(
                  "relative transition-all duration-700",
                  isLoaded
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                )}
              >
                <div
                  className="relative aspect-[3/4] rounded-3xl overflow-hidden cursor-zoom-in"
                  onClick={() => setShowZoom(true)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900 p-3">
                    <div className="absolute inset-3 bg-gradient-to-br from-neutral-100 to-white" />
                  </div>
                  <div className="absolute inset-4 rounded-2xl overflow-hidden">
                    <Image
                      src={artwork.images[currentImage]}
                      alt={artwork.title}
                      fill
                      className="object-cover transition duration-700"
                    />
                  </div>

                  {artwork.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          prevImage()
                        }}
                        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-md transition"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          nextImage()
                        }}
                        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-md transition"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}
                </div>

                {/* thumbnails */}
                {artwork.images.length > 1 && (
                  <div className="flex gap-3 mt-5 flex-wrap">
                    {artwork.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={cn(
                          "relative h-16 w-16 rounded-lg overflow-hidden border-2 transition-all",
                          currentImage === index
                            ? "border-primary scale-105"
                            : "border-transparent hover:border-border"
                        )}
                      >
                        <Image src={img} alt="" fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal delay={120}>
              <div
                className={cn(
                  "relative transition-all duration-700",
                  isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                )}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-xs font-semibold tracking-widest rounded-full">
                  UNIQUE PIECE
                </div>

                <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                  {artwork.description}
                </p>

                <div className="mt-10 grid gap-4 rounded-2xl border border-border bg-muted/30 p-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Availability</span>
                    <span className="font-semibold text-foreground">
                      {artwork.stock > 0 ? `${artwork.stock} in stock` : "Sold out"}
                    </span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Originality</span>
                    <span className="font-semibold text-foreground">Certificate included</span>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center gap-2 font-semibold tracking-wider transition-all duration-300 hover:opacity-90 hover:translate-y-[-2px]"
                  >
                    Contact via WhatsApp
                  </a>

                  <a
                    href={smsHref}
                    className="w-full py-4 rounded-full bg-black text-white flex items-center justify-center gap-2 font-semibold tracking-wider transition-all duration-300 hover:opacity-90 hover:translate-y-[-2px]"
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
            </ScrollReveal>
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
        </div>
      </section>

      {/* Related */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif">
                You May Also Like
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                A curated selection of other pieces from the collection.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedArtworks.map((art, index) => (
              <ScrollReveal key={art.id} delay={index * 80}>
                <Link href={`/art/${art.slug}`} className="block group">
                  <div className="relative transition-all duration-700 group-hover:-translate-y-2">
                    <div className="bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900 p-3 rounded-sm shadow-xl">
                      <div className="bg-gradient-to-br from-neutral-100 to-white p-2">
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={art.images[0]}
                            alt={art.title}
                            fill
                            className="object-cover transition duration-700 group-hover:scale-110"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 transition-all duration-500 group-hover:translate-x-1">
                    <h3 className="font-bold tracking-wider text-sm text-foreground">
                      {art.title}
                    </h3>
                    <p className="text-primary font-semibold">
                      ${art.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <LuxuryFooter />
    </main>
  )
}
