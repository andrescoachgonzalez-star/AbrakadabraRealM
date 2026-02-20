"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function WhatsAppWidget() {
  const pathname = usePathname()
  const [isExpanded, setIsExpanded] = useState(false)
  const [showBubble, setShowBubble] = useState(false)
  const [bubbleDismissed, setBubbleDismissed] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredOption, setHoveredOption] = useState<string | null>(null)

  const isShopListing = pathname === "/jewelry/shop"

  useEffect(() => {
    if (isShopListing) return
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [isShopListing])

  useEffect(() => {
    if (isShopListing || bubbleDismissed) return
    const timer = setTimeout(() => {
      setShowBubble(true)
      const hideTimer = setTimeout(() => {
        setShowBubble(false)
        setBubbleDismissed(true)
      }, 6000)
      return () => clearTimeout(hideTimer)
    }, 2500)
    return () => clearTimeout(timer)
  }, [isShopListing, bubbleDismissed])

  if (isShopListing) return null

  const contactOptions = [
    {
      id: "whatsapp",
      label: "WhatsApp",
      subtitle: "Chat instantly",
      href: "https://wa.me/15551234567?text=Hi%2C%20I%27m%20interested%20in%20your%20luxury%20collection.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      color: "bg-[#25D366]",
      hoverColor: "hover:bg-[#1da851]",
    },
    {
      id: "email",
      label: "Email",
      subtitle: "Write to us",
      href: "mailto:luxury@abrakadabrarealm.com",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      color: "bg-primary",
      hoverColor: "hover:bg-primary/90",
    },
    {
      id: "sms",
      label: "SMS",
      subtitle: "Text message",
      href: "sms:+15551234567?body=Hi%2C%20I%27m%20interested%20in%20your%20luxury%20collection.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 8.25h9M7.5 12h4.5"/>
        </svg>
      ),
      color: "bg-foreground",
      hoverColor: "hover:bg-foreground/90",
    },
  ]

  return (
    <div className={cn(
      "fixed bottom-8 left-0 z-50 transition-all duration-700",
      isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
    )}>
      {/* Auto Bubble Message */}
      <div className={cn(
        "absolute bottom-[72px] left-0 transition-all duration-500 pointer-events-none",
        showBubble && !isExpanded ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-6 scale-90"
      )}>
        <div className="relative ml-3 bg-primary rounded-2xl rounded-bl-none px-5 py-3.5 shadow-xl max-w-[210px]">
          <p className="text-primary-foreground text-xs leading-relaxed font-medium">
            {"How can we help you?"}
          </p>
          <p className="text-primary-foreground/70 text-[10px] mt-1">
            Reach out anytime
          </p>
          {/* Decorative line */}
          <div className="absolute bottom-0 left-5 right-5 h-px bg-primary-foreground/20" />
        </div>
      </div>

      {/* Expanded Contact Panel */}
      <div className={cn(
        "absolute bottom-[72px] left-0 transition-all duration-400 origin-bottom-left",
        isExpanded
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 translate-y-2 pointer-events-none"
      )}>
        <div className="bg-card border border-border rounded-2xl shadow-2xl w-72 overflow-hidden ml-3">
          {/* Header */}
          <div className="bg-foreground px-5 py-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-2 right-4 w-16 h-16 border border-primary-foreground/20 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-primary-foreground/10 rounded-full" />
            </div>
            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="text-background font-serif text-base font-bold tracking-wide">
                  Get in Touch
                </p>
                <p className="text-background/60 text-[11px] mt-0.5">
                  How can we help you today?
                </p>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="w-7 h-7 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-background/20 transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Contact Options */}
          <div className="p-3 flex flex-col gap-2">
            {contactOptions.map((option, index) => (
              <a
                key={option.id}
                href={option.href}
                target={option.id === "whatsapp" ? "_blank" : undefined}
                rel={option.id === "whatsapp" ? "noopener noreferrer" : undefined}
                className={cn(
                  "group flex items-center gap-3.5 p-3 rounded-xl border transition-all duration-300",
                  hoveredOption === option.id
                    ? "border-primary/30 bg-secondary shadow-sm"
                    : "border-border hover:border-primary/20 hover:bg-secondary/50"
                )}
                style={{ animationDelay: `${index * 80}ms` }}
                onMouseEnter={() => setHoveredOption(option.id)}
                onMouseLeave={() => setHoveredOption(null)}
              >
                {/* Icon */}
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 transition-all duration-300",
                  option.color,
                  hoveredOption === option.id ? "scale-110 shadow-md" : ""
                )}>
                  {option.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground tracking-wide">
                    {option.label}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    {option.subtitle}
                  </p>
                </div>

                {/* Arrow */}
                <svg
                  className={cn(
                    "w-4 h-4 text-muted-foreground transition-all duration-300 shrink-0",
                    hoveredOption === option.id ? "translate-x-1 text-primary" : ""
                  )}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-border bg-secondary/30">
            <p className="text-[10px] text-muted-foreground text-center tracking-wider uppercase">
              Available 24/7 for you
            </p>
          </div>
        </div>
      </div>

      {/* Main Button - Semi-oval with message icon */}
      <button
        onClick={() => {
          setIsExpanded(!isExpanded)
          setShowBubble(false)
          setBubbleDismissed(true)
        }}
        className={cn(
          "relative flex items-center justify-center transition-all duration-500",
          "h-14 shadow-lg hover:shadow-xl",
          isExpanded
            ? "bg-foreground hover:bg-foreground/90 w-7 rounded-r-[28px]"
            : "bg-primary hover:bg-primary/90 w-7 hover:w-9 rounded-r-[28px]"
        )}
      >
        {isExpanded ? (
          <svg className="w-3.5 h-3.5 text-background ml-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/>
          </svg>
        ) : (
          <svg className="w-4 h-4 text-primary-foreground ml-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
        )}
      </button>
    </div>
  )
}
