"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Victoria Sterling",
    location: "New York, USA",
    rating: 5,
    title: "Absolutely Breathtaking",
    text: "The diamond ring I purchased exceeded all expectations. The craftsmanship is impeccable, and the stone catches light in the most mesmerizing way. This is truly a piece I'll treasure forever.",
    product: "Celestial Diamond Ring",
    date: "December 2025",
  },
  {
    id: 2,
    name: "James Hartwell",
    location: "London, UK",
    rating: 5,
    title: "Unparalleled Quality",
    text: "I've collected fine jewelry for decades, and this Colombian emerald pendant is among the finest pieces I own. The color is extraordinary, and the setting showcases the stone beautifully.",
    product: "Colombian Emerald Pendant",
    date: "November 2025",
  },
  {
    id: 3,
    name: "Sophia Chen",
    location: "Singapore",
    rating: 5,
    title: "A True Masterpiece",
    text: "From the personalized consultation to the final delivery, every step was exceptional. The ruby eternity band is even more stunning in person. Worth every penny.",
    product: "Ruby Eternity Band",
    date: "January 2026",
  },
  {
    id: 4,
    name: "Alessandro Rossi",
    location: "Milan, Italy",
    rating: 5,
    title: "Exceptional Service",
    text: "The attention to detail is remarkable. I purchased a bespoke gold chain, and the team worked with me to create something truly unique. The result is spectacular.",
    product: "Custom Gold Chain",
    date: "October 2025",
  },
  {
    id: 5,
    name: "Olivia Bennett",
    location: "Sydney, Australia",
    rating: 5,
    title: "Beyond Expectations",
    text: "I received so many compliments on my tennis bracelet. The diamonds are brilliantly cut, and the clasp is secure yet elegant. This is luxury at its finest.",
    product: "Diamond Tennis Bracelet",
    date: "September 2025",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-4">
              Client Stories
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground text-balance">
              Words of Elegance
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Discover what our distinguished clients say about their experience with our exclusive jewelry collection.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Testimonial Display */}
        <ScrollReveal delay={100}>
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8 md:p-12">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 sm:left-12">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary sm:h-14 sm:w-14">
                  <Quote className="h-6 w-6 text-primary-foreground sm:h-7 sm:w-7" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="relative min-h-[400px] sm:min-h-[420px] md:min-h-[320px]">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={cn(
                      "absolute inset-0 transition-all duration-700",
                      activeIndex === index
                        ? "opacity-100 translate-x-0"
                        : activeIndex > index
                        ? "opacity-0 -translate-x-8"
                        : "opacity-0 translate-x-8"
                    )}
                  >
                    {/* Stars */}
                    <div className="mb-5 flex gap-1 sm:mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-primary text-primary"
                          style={{
                            animation: activeIndex === index ? `scale-in 0.3s ease-out ${i * 0.1}s both` : "none",
                          }}
                        />
                      ))}
                    </div>

                    {/* Title & Text */}
                    <h3 className="mb-4 font-serif text-2xl font-bold text-foreground sm:text-3xl">
                      {testimonial.title}
                    </h3>
                    <p className="mb-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Author Info */}
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <div className="flex items-center gap-4">
                        {/* Avatar Placeholder */}
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                          <span className="font-serif text-xl font-bold text-primary">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                      <div className="border-t border-border/60 pt-4 text-left sm:border-t-0 sm:pt-0 sm:text-right">
                        <p className="text-sm font-medium text-primary">{testimonial.product}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="mt-8 flex flex-col gap-5 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                {/* Dots */}
                <div className="flex justify-center gap-2 sm:justify-start">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsAutoPlaying(false)
                        setActiveIndex(index)
                      }}
                      className={cn(
                        "h-2 rounded-full transition-all duration-500",
                        activeIndex === index ? "w-8 bg-primary" : "w-2 bg-foreground/20 hover:bg-foreground/40"
                      )}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex justify-center gap-2 sm:justify-end">
                  <button
                    onClick={prevTestimonial}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Mini Testimonial Cards */}
        <ScrollReveal delay={200}>
          <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={testimonial.id}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setActiveIndex(index)
                }}
                className={cn(
                  "p-6 rounded-xl border cursor-pointer transition-all duration-300",
                  activeIndex === index
                    ? "bg-card border-primary/30 shadow-lg"
                    : "bg-transparent border-border hover:bg-card/50 hover:border-primary/20"
                )}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-serif font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-primary fill-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  &ldquo;{testimonial.text.substring(0, 80)}...&rdquo;
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
