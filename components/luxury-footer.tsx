"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ART", href: "/art" },
  { name: "JEWELRY", href: "/jewelry" },
  { name: "MODELS", href: "/artists/models" },
  { name: "DJs", href: "/artists/dj-producers" },
  { name: "CLOTHING", href: "/clothing" },
  { name: "CAR RENTAL", href: "/car-rental" },
  { name: "PHILOSOPHY", href: "/philosophy" },
]

const footerLinks = [
  { name: "News", href: "/news" },
  { name: "Events", href: "/events" },
  { name: "Join Us", href: "/join-us" },
  { name: "Courses", href: "/cursos" },
]

export function LuxuryFooter() {
  const footerRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="relative overflow-hidden bg-foreground text-background">
      <div className="container mx-auto px-5 py-14 sm:px-6 lg:py-16">
        <div className={cn(
          "relative z-10 grid gap-10 transition-all duration-1000 md:grid-cols-[1.1fr_1.4fr] lg:grid-cols-[1.1fr_1.7fr_1fr]",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="text-center md:text-left">
            <a
              href="/"
              className="inline-flex rounded-full border border-background/15 px-5 py-2.5 text-xs font-semibold tracking-[0.28em] text-background transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              HOME
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/55 md:max-w-xs">
              More than a brand, we are a philosophy of life.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "rounded-full border border-background/10 px-4 py-3 text-center text-[11px] font-medium tracking-widest text-background/65 transition-all duration-300 hover:border-primary/70 hover:text-background",
                  index === 0 && "border-primary/50 text-primary"
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-5 md:col-span-2 lg:col-span-1 lg:items-end">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-3 lg:justify-end">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-xs tracking-widest text-background/55 transition-colors duration-300 hover:text-background"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-start justify-center gap-3 lg:justify-end">
              <PaymentIcon name="AMEX" />
              <PaymentIcon name="MC" />
              <PaymentIcon name="STRIPE" />
              <PaymentIcon name="APPLE" />
              <PaymentIcon name="GPAY" />
            </div>
          </div>
        </div>

        <div className={cn(
          "relative z-10 mt-10 border-t border-background/10 pt-7 text-center transition-all duration-1000 delay-200 md:text-left",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-xs text-background/50">
            Abrakadabra Realm 2025 | All rights reserved
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-5">
        <span className="font-serif text-[32vw] font-bold tracking-tight sm:text-[20vw]">
          AR
        </span>
      </div>
    </footer>
  )
}

function PaymentIcon({ name }: { name: string }) {
  return (
    <div className="flex h-8 w-11 items-center justify-center rounded border border-background/20 bg-background/10 text-[7px] font-bold text-background/70 sm:w-12 sm:text-[8px]">
      {name}
    </div>
  )
}
