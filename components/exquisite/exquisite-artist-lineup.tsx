import { ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const artists = [
  { number: "01", name: "Pablo Lorenzo", label: "Archivio Records" },
  { number: "02", name: "Romero Slider", label: "Archivio Records" },
  { number: "03", name: "Joseph Ren", label: "Deeperfect" },
  { number: "04", name: "Andrea Kingtero Perez", label: "Support · Under Effect" },
]

export function ExquisiteArtistLineup() {
  return (
    <section id="lineup" className="border-y border-[#f0e7d8]/10 bg-[#12100e] py-24 scroll-mt-20 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1520px] px-5 sm:px-8 lg:px-[5vw]">
        <ScrollReveal>
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <p className="exquisite-section-label">La música / 01</p>
              <h2 className="mt-6 max-w-4xl font-sans text-[clamp(2.8rem,6.5vw,7rem)] font-light uppercase leading-[0.84] tracking-[0.04em] text-[#f0e7d8]">La noche se organiza por nombres.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#f0e7d8]/50 lg:text-right">Una curaduría que une Archivio Records, Deeperfect y Under Effect en una misma frecuencia.</p>
          </div>
        </ScrollReveal>

        <div className="mt-14 border-t border-[#f0e7d8]/10">
          {artists.map((artist, index) => (
            <ScrollReveal key={artist.name} delay={index * 70}>
              <a href="#details" className="exquisite-artist-row group grid min-h-28 grid-cols-[40px_1fr_auto] items-center gap-4 border-b border-[#f0e7d8]/10 py-6 transition-[color,background-color,padding-left] duration-400 ease-[cubic-bezier(.16,1,.3,1)] hover:bg-[#24130d]/45 hover:pl-3 sm:min-h-36 sm:grid-cols-[56px_1fr_auto] sm:gap-7 sm:py-7">
                <span className="font-mono text-[10px] tracking-[0.18em] text-[#d99548]">{artist.number}</span>
                <span className="min-w-0">
                  <span className="block font-sans text-[clamp(1.7rem,5.2vw,5.8rem)] font-light uppercase leading-none tracking-[0.06em] text-[#f0e7d8]/85 transition-colors duration-300 group-hover:text-[#f8f6f1]">{artist.name}</span>
                  <span className="mt-2 block text-[9px] uppercase tracking-[0.26em] text-[#f0e7d8]/38">{artist.label}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 text-[#d99548] opacity-50 transition-[opacity,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
