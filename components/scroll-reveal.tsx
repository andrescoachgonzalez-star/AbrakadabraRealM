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

  useEffect(() => {
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

    return () => observer.disconnect()
  }, [])

  const getDirectionClasses = () => {
    switch (direction) {
      case "up":
        return isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      case "down":
        return isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
      case "left":
        return isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
      case "right":
        return isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
      case "none":
        return isVisible ? "opacity-100" : "opacity-0"
      default:
        return isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        getDirectionClasses(),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
