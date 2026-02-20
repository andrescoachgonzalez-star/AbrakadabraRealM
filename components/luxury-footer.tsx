"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ART", href: "/art" },
  { name: "JEWELRY", href: "/jewelry" },
  { name: "ARTISTS", href: "/artists/dj-producers" },
  { name: "CLOTHING", href: "/clothing" },
  { name: "CAR RENTAL", href: "/car-rental" },
]

const footerLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Support", href: "#" },
  { name: "Adjust Cookies", href: "#" },
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
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className={cn(
          "grid gap-12 md:grid-cols-2 lg:grid-cols-3 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Links Column */}
          <div>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-background/70 transition-colors duration-300 hover:text-background"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Methods */}
          <div className="flex items-start justify-center gap-4 lg:justify-end">
            <PaymentIcon name="AMEX" />
            <PaymentIcon name="MC" />
            <PaymentIcon name="STRIPE" />
            <PaymentIcon name="APPLE" />
            <PaymentIcon name="GPAY" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className={cn(
          "mt-16 flex flex-wrap items-center justify-center gap-6 border-t border-background/10 pt-8 transition-all duration-1000 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs font-medium tracking-widest transition-colors duration-300 hover:text-background",
                index === 0 ? "text-primary" : "text-background/60"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className={cn(
          "mt-8 text-center transition-all duration-1000 delay-400",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-xs text-background/50">
            Abrakadabra Realm 2025 | All rights reserved
          </p>
        </div>
      </div>

      {/* Large Logo Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-5">
        <span className="font-serif text-[20vw] font-bold tracking-tight">
          AR
        </span>
      </div>
    </footer>
  )
}

function PaymentIcon({ name }: { name: string }) {
  return (
    <div className="flex h-8 w-12 items-center justify-center rounded border border-background/20 bg-background/10 text-[8px] font-bold text-background/70">
      {name}
    </div>
  )
}
