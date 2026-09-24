import Image from "next/image"
import { ArrowUpRight, Instagram } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export type AkashaLineupArtist = {
  name: string
  role: string
  instagram?: string
  image?: string
}

export const akashaLineup: AkashaLineupArtist[] = [
  { name: "ESTEBAN ARENAS", role: "DJ / SELECTOR", instagram: "https://www.instagram.com/estebanarenas_dj?stkn=NXBrZ2d6aWlpcWxj", image: "/Image-DJs/esteban-arenas.png" },
  { name: "8BATZZ", role: "AFRO HOUSE / TECH HOUSE", instagram: "https://www.instagram.com/estebanarenas_dj?stkn=NXBrZ2d6aWlpcWxj", image: "/Image-DJs/8batzz.png" },
  { name: "CAMZZ", role: "DJ / PRODUCER", instagram: "https://www.instagram.com/camzz.prod?stkn=YWZ5c2IyZ2VtNmhr", image: "/Image-DJs/camzz.png" },
  { name: "REED BEARD", role: "DJ / PRODUCER", instagram: "https://www.instagram.com/redbeard.col?stkn=MXQweG9oa25sZWIzYw==" },
  { name: "AXELH", role: "DJ / SELECTOR", instagram: "https://www.instagram.com/_axelh__?stkn=NXprcTR6MHhneWVw" },
]

export function AkashaLineup() {
  return (
    <section id="lineup" className="border-y border-white/[0.1] bg-[#080808] py-24 scroll-mt-24 sm:py-32 lg:py-44">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-[5vw]">
        <ScrollReveal>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="akasha-kicker text-[#d9ff20]">04 / Lineup</p>
              <h2 className="akasha-display mt-6 max-w-4xl text-[clamp(3.3rem,8vw,9rem)] font-black uppercase leading-[0.78] tracking-[-0.08em] text-[#e9e5d8]">Los artistas<br /><span className="text-white/25">de la frecuencia.</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/45 lg:text-right">Cinco nombres para una misma pista. Explora el universo de cada artista desde su Instagram.</p>
          </div>
        </ScrollReveal>

        <div className="mt-16" role="list" aria-label="Artistas de AKASHA">
          {akashaLineup.map((artist, index) => (
            <ScrollReveal key={artist.name} delay={index * 55}>
              <a
                role="listitem"
                href={artist.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver Instagram de ${artist.name}`}
                className="group relative flex min-h-[92px] items-center gap-4 overflow-hidden border-t border-white/[0.12] py-5 transition-colors duration-300 last:border-b hover:border-[#d9ff20]/60 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#d9ff20] sm:min-h-[130px] sm:gap-8 sm:py-7 lg:min-h-[160px] lg:gap-12"
              >
                <span className="w-9 shrink-0 font-mono text-[10px] tracking-[0.18em] text-white/30 transition-colors duration-300 group-hover:text-[#d9ff20] sm:w-12 sm:text-xs">0{index + 1}</span>
                <span className="akasha-display min-w-0 break-words relative z-10 text-[clamp(2.8rem,7.7vw,8rem)] font-black uppercase leading-[0.78] tracking-[-0.075em] text-[#e9e5d8] transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-3 group-hover:text-white">{artist.name}</span>
                <span className="ml-auto hidden shrink-0 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35 sm:block">{artist.role}</span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/45 transition-[border-color,color,transform] duration-300 group-hover:-translate-y-1 group-hover:border-[#d9ff20] group-hover:text-[#d9ff20] sm:h-12 sm:w-12">
                  {artist.image ? <Instagram className="h-4 w-4" aria-hidden="true" /> : <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
                </span>
                {artist.image && (
                  <span className="pointer-events-none absolute right-[8%] top-1/2 hidden h-40 w-28 -translate-y-1/2 -rotate-6 overflow-hidden border border-[#d9ff20]/60 opacity-0 transition-[opacity,transform] duration-500 group-hover:rotate-0 group-hover:opacity-100 lg:block">
                    <Image src={artist.image} alt="" fill sizes="112px" className="object-cover grayscale contrast-125" />
                  </span>
                )}
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
