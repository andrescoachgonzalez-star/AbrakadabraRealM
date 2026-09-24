import Image from "next/image"
import { Music2 } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ExquisiteVisualMoment() {
  return (
    <section className="bg-[#080706] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-24 lg:px-[6vw]">
        <ScrollReveal direction="right">
          <div className="relative aspect-[4/3] overflow-hidden border border-[#d99548]/25 bg-[#24130d]">
            <Image src="/events/exquisite-night/poster-clean.png" alt="Textura cálida del afiche de Exquisite Night" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-[center_28%] brightness-[0.7] saturate-[0.9] transition-transform duration-1000 ease-[cubic-bezier(.16,1,.3,1)] hover:scale-[1.025]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(36,19,13,0.72),rgba(8,7,6,0.05)_55%,rgba(8,7,6,0.72))]" aria-hidden="true" />
            <div className="absolute left-5 top-5 text-[9px] uppercase tracking-[0.28em] text-[#f0e7d8]/55 sm:left-7 sm:top-7">EXQUISITE / 004</div>
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7">
              <p className="max-w-[13ch] font-serif text-3xl leading-[0.92] text-[#f0e7d8] sm:text-5xl">Una pintura que todavía suena.</p>
              <Music2 className="h-6 w-6 text-[#d99548]" aria-hidden="true" />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <p className="exquisite-section-label">El gesto visual</p>
          <h2 className="mt-6 max-w-xl font-serif text-[clamp(2.8rem,5vw,5.7rem)] font-semibold leading-[0.88] tracking-[-0.055em] text-[#f0e7d8]">La noche como una pieza de arte contemporáneo.</h2>
          <div className="mt-10 divide-y divide-[#f0e7d8]/10 border-y border-[#f0e7d8]/10">
            {[
              "Pintura barroca, luz cálida y sombras profundas.",
              "House y techno como pulso de la sala.",
              "Una dirección visual que se descubre lentamente.",
              "Un archivo vivo de la escena Abrakadabra.",
            ].map((item, index) => (
              <div key={item} className="grid grid-cols-[38px_1fr] gap-4 py-5 sm:grid-cols-[44px_1fr]">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#d99548]">0{index + 1}</span>
                <p className="text-sm leading-relaxed text-[#f0e7d8]/55">{item}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
