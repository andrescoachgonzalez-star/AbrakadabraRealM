"use client"

import { useEffect, useState } from "react"

export function AkashaScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const updateProgress = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
        setProgress(scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0)
      })
    }

    updateProgress()
    window.addEventListener("scroll", updateProgress, { passive: true })
    window.addEventListener("resize", updateProgress)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", updateProgress)
      window.removeEventListener("resize", updateProgress)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px bg-white/[0.06]"
    >
      <div
        className="h-full origin-left bg-[#d9ff20] transition-transform duration-150 ease-linear"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}
