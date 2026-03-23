"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Sparkles, Wrench, Code2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function MaintenanceView() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [dots, setDots] = useState("")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] animate-float opacity-20">
          <Code2 className="h-12 w-12 text-primary" />
        </div>
        <div className="absolute top-40 right-[15%] animate-float animation-delay-300 opacity-15">
          <Wrench className="h-10 w-10 text-foreground" />
        </div>
        <div className="absolute bottom-32 left-[20%] animate-float animation-delay-500 opacity-10">
          <Sparkles className="h-14 w-14 text-primary" />
        </div>
        <div className="absolute top-1/3 right-[8%] animate-float animation-delay-200 opacity-20">
          <Code2 className="h-8 w-8 text-muted-foreground" />
        </div>

        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted/50 blur-3xl" />
      </div>

      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <div
          className={cn(
            "mb-8 transition-all duration-1000",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          )}
        >
          <div className="flex items-center gap-3">
            <Image
              src="/Logo.png"
              alt="Abrakadabra Logo"
              width={48}
              height={48}
              className="rounded-xl"
              priority
            />

            <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
              ABRAKADABRA
            </span>
          </div>
        </div>

        <div
          className={cn(
            "relative mb-8 transition-all duration-1000 delay-200",
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
          )}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-pulse" />
          </div>

          <div className="relative animate-float">
            <Image
              src="/maintenance-character.png"
              alt="Abrakadabra team working"
              width={400}
              height={400}
              className="relative z-10 drop-shadow-2xl"
              priority
            />
          </div>

          <div className="absolute -left-4 top-1/4 animate-float animation-delay-300">
            <div className="rounded-full border border-border bg-card px-3 py-1.5 shadow-lg">
              <span className="text-xs font-semibold text-foreground">Building</span>
            </div>
          </div>

          <div className="absolute -right-4 top-1/3 animate-float animation-delay-500">
            <div className="rounded-full bg-primary px-3 py-1.5 shadow-lg">
              <span className="text-xs font-semibold text-primary-foreground">Soon</span>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "max-w-lg text-center transition-all duration-1000 delay-400",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            <span className="text-pretty">We{"'"}re Working On It</span>
          </h1>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              In Progress{dots}
            </span>
          </div>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The <span className="font-semibold text-foreground">Abrakadabra Realm</span> team is crafting
            something extraordinary for this section. We{"'"}re putting all our magic into it!
          </p>

          <p className="mt-3 text-muted-foreground">We hope to see you back here very soon.</p>
        </div>

        <div
          className={cn(
            "mt-10 transition-all duration-1000 delay-500",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-sm font-semibold tracking-wider text-background transition-all duration-300 hover:scale-105 hover:gap-4 hover:shadow-xl hover:shadow-foreground/10"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            BACK TO HOME
          </Link>
        </div>

        <div
          className={cn(
            "mt-16 w-full max-w-xs transition-all duration-1000 delay-700",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span>Almost there...</span>
          </div>

          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full w-3/4 animate-[pulse_2s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-primary to-primary/60" />
          </div>
        </div>

        <div
          className={cn(
            "absolute bottom-6 left-0 right-0 text-center transition-all duration-1000 delay-700",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          <p className="text-xs text-muted-foreground">
            Abrakadabra Realm 2025 | More than a brand, we are a philosophy of life
          </p>
        </div>
      </div>
    </main>
  )
}
