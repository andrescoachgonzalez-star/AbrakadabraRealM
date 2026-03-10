"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, Bell, Sparkles, Mail, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

type ContactAnswer = {
  email: string
  whatsapp1: {
    label: string
    link: string
  }
  whatsapp2: {
    label: string
    link: string
  }
}

type FaqItem =
  | {
      question: string
      answerType: "contact"
      answer: ContactAnswer
    }
  | {
      question: string
      answerType: "text"
      answer: string
    }

const faqs: FaqItem[] = [
  {
    question: "If I encounter any issues when purchasing a product or artist, where can I contact you?",
    answerType: "contact",
    answer: {
      email: "abrakadabrarealm@gmail.com",
      whatsapp1: {
        label: "+1 917 547 5787",
        link: "https://wa.me/19175475787",
      },
      whatsapp2: {
        label: "+57 310 392 0569",
        link: "https://wa.me/573103920569",
      },
    },
  },
  {
    question: "What guarantee do I have that the oversize t-shirts and limited edition hats are of high quality?",
    answerType: "text",
    answer:
      "Each garment is more than just clothing: it’s an exclusive piece made with premium materials. You’ll be taking home a wearable work of art, designed to last and stand out on any occasion!",
  },
  {
    question: "How secure is the purchase on your website?",
    answerType: "text",
    answer:
      "Shop with complete peace of mind. Our website is equipped with security measures to protect your data, ensuring that your shopping experience is as smooth and reliable as our products.",
  },
  {
    question: "What makes Adriana Henao's artwork unique?",
    answerType: "text",
    answer:
      "Each piece is an expression of unparalleled spirituality and creativity. By acquiring a work of art, you not only obtain a masterpiece, but also a deep connection with the artist’s vision that will transform any space.",
  },
  {
    question: "How do I know if the music packs and sample packs are truly worth it?",
    answerType: "text",
    answer:
      "These packs are created by our artists and are filled with unique sounds that will give you a creative edge and elevate your music to the next level.",
  },
  {
    question: "Why should I buy now instead of waiting?",
    answerType: "text",
    answer:
      "Many of our drops and artistic releases are exclusive or limited. If something connects with you, this is the best moment to secure it before it’s gone.",
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

  useEffect(() => {
    if (!isVisible) return

    const showTimer = setTimeout(() => {
      setShowNotification(true)
      setNotificationCount((prev) => prev + 1)
    }, 2000)

    const hideTimer = setTimeout(() => {
      setShowNotification(false)
    }, 6000)

    const interval = setInterval(() => {
      setShowNotification(true)
      setNotificationCount((prev) => prev + 1)
      setTimeout(() => setShowNotification(false), 4000)
    }, 8000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
      clearInterval(interval)
    }
  }, [isVisible])

  const renderAnswer = (faq: FaqItem) => {
    if (faq.answerType === "contact") {
      return (
        <div className="px-5 pb-5">
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            You can contact us through any of our official channels:
          </p>

          <div className="space-y-3">
            <a
              href={`mailto:${faq.answer.email}`}
              className="group flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 transition-all duration-300 hover:scale-[1.01] hover:border-primary/40 hover:bg-primary/10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                <Mail className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Email us
                </p>
                <p className="truncate text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                  {faq.answer.email}
                </p>
              </div>
            </a>

            <a
              href={faq.answer.whatsapp1.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 transition-all duration-300 hover:scale-[1.01] hover:border-primary/40 hover:bg-primary/10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                <MessageCircle className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  WhatsApp USA
                </p>
                <p className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                  {faq.answer.whatsapp1.label}
                </p>
              </div>
            </a>

            <a
              href={faq.answer.whatsapp2.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 transition-all duration-300 hover:scale-[1.01] hover:border-primary/40 hover:bg-primary/10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                <MessageCircle className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  WhatsApp Colombia
                </p>
                <p className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                  {faq.answer.whatsapp2.label}
                </p>
              </div>
            </a>
          </div>

          <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
            <p className="text-sm leading-relaxed text-foreground">
              You can also find all our official communication channels on the
              left side of the page, inside the message bubble.
            </p>
          </div>
        </div>
      )
    }

    return (
      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
        {faq.answer}
      </p>
    )
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-20 lg:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div
            className={cn(
              "relative flex items-center justify-center transition-all duration-1000",
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            )}
          >
            <div className="relative">
              <div className="relative h-[500px] w-[250px] overflow-hidden rounded-[40px] border-[8px] border-foreground bg-foreground shadow-2xl sm:h-[600px] sm:w-[300px]">
                <div className="absolute left-1/2 top-0 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-foreground" />

                <div
                  className={cn(
                    "absolute left-3 right-3 top-10 z-30 transition-all duration-500 ease-out",
                    showNotification
                      ? "translate-y-0 scale-100 opacity-100"
                      : "pointer-events-none -translate-y-4 scale-95 opacity-0"
                  )}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/95 p-3 shadow-2xl backdrop-blur-md">
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <div className="relative flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary shadow-lg">
                        <Sparkles className="h-5 w-5 text-primary-foreground" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-foreground">
                            ABRAKADABRA REALM
                          </p>
                          <span className="text-[10px] text-muted-foreground">
                            now
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs font-medium text-foreground/90">
                          New exclusive drop available!
                        </p>
                        <p className="mt-0.5 truncate text-[10px] text-muted-foreground">
                          Limited edition emeralds just arrived. Shop now before
                          they sell out.
                        </p>
                      </div>
                    </div>

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

                <div className="flex h-full w-full flex-col items-center justify-center bg-primary text-primary-foreground">
                  <div className="absolute left-0 right-0 top-8 flex items-center justify-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground/50" />
                    <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground/50" />
                    <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground/50" />
                  </div>

                  <div className="absolute left-4 right-4 top-16">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-sm font-semibold">
                          ABRAKADABRA REALM
                        </h3>
                        <p className="text-xs text-primary-foreground/70">
                          Welcome to our luxury marketplace
                        </p>
                      </div>
                      <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/20">
                        <span className="text-xs font-bold">AR</span>
                        {notificationCount > 0 && (
                          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-card text-[8px] font-bold text-primary shadow-lg">
                            {notificationCount}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <svg
                      className="h-8 w-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                    </svg>
                  </div>

                  <p className="text-6xl font-light tracking-tight sm:text-7xl">
                    17:45
                  </p>

                  <p className="mt-2 text-sm text-primary-foreground/80">
                    Monday, May 9th
                  </p>
                </div>
              </div>

              <div className="absolute -left-8 top-1/4 h-16 w-16 animate-float rounded-full bg-primary/10" />
              <div className="animation-delay-500 absolute -right-4 bottom-1/3 h-12 w-12 animate-float rounded-full bg-primary/5" />

              <div
                className={cn(
                  "absolute -right-6 top-20 flex h-12 w-12 items-center justify-center rounded-full bg-card shadow-xl transition-all duration-500",
                  showNotification ? "scale-110 bg-primary" : "scale-100"
                )}
              >
                <Bell
                  className={cn(
                    "h-5 w-5 transition-colors duration-300",
                    showNotification
                      ? "animate-[ring_0.5s_ease-in-out] text-primary-foreground"
                      : "text-foreground"
                  )}
                />
              </div>
            </div>
          </div>

          <div
            className={cn(
              "transition-all duration-1000 delay-300",
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            )}
          >
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
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
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
                      openIndex === index
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">{renderAnswer(faq)}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-4">
              <p className="text-sm leading-relaxed text-foreground">
                Need help? Remember that all our official communication channels
                are also available on the left side of the page, inside the
                message bubble.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}