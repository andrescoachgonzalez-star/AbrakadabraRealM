"use client"

import { useEffect, useRef, useState } from "react"
import { Instagram } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const teamMembers = [
  {
    name: "Paula Suarez",
    country: "COLOMBIA",
    flag: "🇨🇴",
    instagram: "https://www.instagram.com/paulasuarezg",
    image: "/home/paulas-p-home.jpg",
  },
  {
    name: "Sandra Henao",
    country: "USA",
    flag: "🇺🇸",
    instagram: "https://www.instagram.com/sandrakhenao",
    image: "/home/sandrah-p-home.jpg",
  },
  {
    name: "Adriana Henao",
    country: "SPAIN",
    flag: "🇪🇸",
    instagram: "https://www.instagram.com/adrianahenaoart",
    image: "/home/adrianah-p-home.jpg",
  },
  {
    name: "Abrakadabra Realm",
    country: "COLOMBIA",
    flag: "🇨🇴",
    instagram: "https://www.instagram.com/8batzz",
    image: "/home/abrakadabra-p-home.jpg",
  },
]

export function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-20 lg:py-32"
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "text-center transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            OUR TEAM
          </h2>
        </div>

        <div
          className={cn(
            "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-2xl bg-card p-6 text-center shadow-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Contenido */}
              <div className="relative z-10">
                {/* Avatar con imagen */}
                <div className="relative mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full ring-4 ring-border transition-all duration-300 group-hover:ring-primary/30">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Country Flag */}
                <div className="mb-2 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <span>{member.flag}</span>
                  <span className="tracking-wider">{member.country}</span>
                </div>

                {/* Name */}
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {member.name}
                </h3>

                {/* Instagram Link */}
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  <Instagram className="h-4 w-4" />
                  <span>Instagram</span>
                </a>
              </div>

              {/* Hover Effect */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-300 group-hover:border-primary/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}