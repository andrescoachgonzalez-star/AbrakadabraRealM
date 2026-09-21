"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updateMotionPreference()
    mediaQuery.addEventListener?.("change", updateMotionPreference)

    if (mediaQuery.matches) {
      setIsVisible(true)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
      mediaQuery.removeEventListener?.("change", updateMotionPreference)
    }
  }, [])

  const getDirectionClasses = () => {
    const visible = isVisible || prefersReducedMotion

    switch (direction) {
      case "up":
        return visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      case "down":
        return visible ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
      case "left":
        return visible ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
      case "right":
        return visible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
      case "none":
        return visible ? "opacity-100" : "opacity-0"
      default:
        return visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        "will-change-[transform,opacity] transition-[transform,opacity] duration-700 ease-[cubic-bezier(.22,1,.36,1)]",
        getDirectionClasses(),
        className
      )}
      style={prefersReducedMotion ? undefined : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
