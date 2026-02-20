"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, Bell, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "If I encounter any issues when purchasing a product or artist, where can I contact you?",
    answer: "You can send us an email at abrakadabrarealm@gmail.com or message us at the following numbers: +1 9175475787 // +57 310 392 0569"
  },
  {
    question: "What guarantee do I have that the oversize t-shirts and limited edition hats are of high quality?",
    answer: "All our products are crafted with premium materials and go through strict quality control. We offer a satisfaction guarantee on all purchases."
  },
  {
    question: "How secure is the purchase on your website?",
    answer: "We use industry-standard SSL encryption and partner with trusted payment processors to ensure your transactions are 100% secure."
  },
  {
    question: "What makes Adriana Henao's artwork unique?",
    answer: "Adriana's artwork combines traditional techniques with modern abstract expression, creating one-of-a-kind pieces that tell a story."
  },
  {
    question: "How do I know if the music packs and sample packs are truly worth it?",
    answer: "Our music packs are created by professional producers and DJs with years of experience. We offer preview samples so you can hear before you buy."
  },
  {
    question: "Why should I buy now instead of waiting?",
    answer: "Many of our items are limited edition and exclusive. Once they're gone, they won't be restocked. Plus, early buyers get access to special launch prices."
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationCount, setNotificationCount] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Notification animation cycle
  useEffect(() => {
    if (!isVisible) return

    const showTimer = setTimeout(() => {
      setShowNotification(true)
      setNotificationCount(prev => prev + 1)
    }, 2000)

    const hideTimer = setTimeout(() => {
      setShowNotification(false)
    }, 6000)

    const interval = setInterval(() => {
      setShowNotification(true)
      setNotificationCount(prev => prev + 1)
      setTimeout(() => setShowNotification(false), 4000)
    }, 8000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
      clearInterval(interval)
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Phone Mockup */}
          <div className={cn(
            "relative flex items-center justify-center transition-all duration-1000",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )}>
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative h-[500px] w-[250px] overflow-hidden rounded-[40px] border-[8px] border-foreground bg-foreground shadow-2xl sm:h-[600px] sm:w-[300px]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-foreground" />
                
                {/* Notification Banner */}
                <div className={cn(
                  "absolute top-10 left-3 right-3 z-30 transition-all duration-500 ease-out",
                  showNotification 
                    ? "opacity-100 translate-y-0 scale-100" 
                    : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
                )}>
                  <div className="relative overflow-hidden rounded-2xl bg-card/95 p-3 shadow-2xl backdrop-blur-md border border-border/50">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_ease-in-out_infinite]" />
                    
                    <div className="relative flex items-start gap-3">
                      {/* App Icon */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary shadow-lg">
                        <Sparkles className="h-5 w-5 text-primary-foreground" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-foreground">ABRAKADABRA REALM</p>
                          <span className="text-[10px] text-muted-foreground">now</span>
                        </div>
                        <p className="mt-0.5 text-xs text-foreground/90 font-medium">
                          New exclusive drop available!
                        </p>
                        <p className="mt-0.5 text-[10px] text-muted-foreground truncate">
                          Limited edition emeralds just arrived. Shop now before they sell out.
                        </p>
                      </div>
                    </div>
                    
                    {/* Notification Actions */}
                    <div className="mt-2 flex gap-2">
                      <button className="flex-1 rounded-lg bg-primary/10 py-1.5 text-[10px] font-semibold text-primary">
                        View
                      </button>
                      <button className="flex-1 rounded-lg bg-muted py-1.5 text-[10px] font-semibold text-muted-foreground">
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Screen Content */}
                <div className="h-full w-full bg-primary flex flex-col items-center justify-center text-primary-foreground">
                  {/* Status Bar */}
                  <div className="absolute top-8 left-0 right-0 flex items-center justify-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground/50" />
                    <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground/50" />
                    <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground/50" />
                  </div>

                  {/* App Header */}
                  <div className="absolute top-16 left-4 right-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-sm">ABRAKADABRA REALM</h3>
                        <p className="text-xs text-primary-foreground/70">Welcome to our luxury marketplace</p>
                      </div>
                      <div className="relative h-8 w-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                        <span className="text-xs font-bold">AR</span>
                        {/* Notification Badge */}
                        {notificationCount > 0 && (
                          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-card text-[8px] font-bold text-primary shadow-lg">
                            {notificationCount}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Lock Icon */}
                  <div className="mb-4">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                    </svg>
                  </div>

                  {/* Time */}
                  <p className="text-6xl font-light tracking-tight sm:text-7xl">
                    17:45
                  </p>

                  {/* Date */}
                  <p className="mt-2 text-sm text-primary-foreground/80">
                    Monday, May 9th
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -left-8 top-1/4 h-16 w-16 rounded-full bg-primary/10 animate-float" />
              <div className="absolute -right-4 bottom-1/3 h-12 w-12 rounded-full bg-primary/5 animate-float animation-delay-500" />
              
              {/* Floating Bell Icon */}
              <div className={cn(
                "absolute -right-6 top-20 flex h-12 w-12 items-center justify-center rounded-full bg-card shadow-xl transition-all duration-500",
                showNotification ? "scale-110 bg-primary" : "scale-100"
              )}>
                <Bell className={cn(
                  "h-5 w-5 transition-colors duration-300",
                  showNotification ? "text-primary-foreground animate-[ring_0.5s_ease-in-out]" : "text-foreground"
                )} />
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className={cn(
            "transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )}>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              FREQUENTLY ASKED QUESTIONS
            </h2>

            <div className="mt-8 space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/20"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <span className="pr-4 text-sm font-medium text-foreground">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
                        openIndex === index && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
