import Image from "next/image"
import { ArrowUpRight, Instagram } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const miniBurgersInstagram = "https://www.instagram.com/miniburgerslan?stkn=Y3IxNXZxNngwMHN1"

export function AkashaFoodFeature() {
  return (
    <section id="comida" aria-labelledby="akasha-food-title" className="relative scroll-mt-24 overflow-hidden border-b border-white/[0.1] bg-[#111]/70 py-24 sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute -left-48 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[#d9ff20]/[0.035] blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1600px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:px-[5vw]">
        <ScrollReveal>
          <p className="akasha-kicker text-[#d9ff20]">05 / Entre sets</p>
          <h2 id="akasha-food-title" className="akasha-display mt-7 text-[clamp(2.4rem,8vw,7.5rem)] font-black uppercase leading-[0.82] tracking-[-0.08em] text-[#e9e5d8]">
            Mini burgers<br /><span className="text-[#d9ff20]">en la noche.</span>
          </h2>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
            Durante AKASHA podrás comprar mini hamburguesas de Mini Burgers Lan y recargar energía entre sets.
          </p>
          <a
            href={miniBurgersInstagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex min-h-12 items-center gap-3 border-b border-[#d9ff20]/45 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e9e5d8] transition-colors hover:border-[#d9ff20] hover:text-[#d9ff20] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9ff20]"
          >
            <Instagram className="h-4 w-4 text-[#d9ff20]" aria-hidden="true" />
            <span>Mini Burgers Lan · Instagram</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </ScrollReveal>

        <ScrollReveal delay={120} direction="left">
          <div className="grid grid-cols-[1.15fr_0.78fr] items-end gap-3 sm:gap-5">
            <figure className="group min-w-0">
              <div className="relative aspect-[800/533] overflow-hidden border border-white/[0.12] bg-[#171717] transition-colors duration-500 group-hover:border-[#d9ff20]/50">
                <Image
                  src="/events/akasha/miniburgers-main.png"
                  alt="Mini hamburguesa de Mini Burgers Lan sobre fondo oscuro"
                  fill
                  sizes="(min-width: 1024px) 42vw, 70vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.025]"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">A la venta durante la fiesta</figcaption>
            </figure>
            <figure className="group min-w-0">
              <div className="relative aspect-[27/40] overflow-hidden border border-white/[0.12] bg-[#171717] transition-colors duration-500 group-hover:border-[#d9ff20]/50">
                <Image
                  src="/events/akasha/miniburgers-portrait.png"
                  alt="Mini hamburguesa de Mini Burgers Lan en una composición vertical"
                  fill
                  sizes="(min-width: 1024px) 28vw, 48vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.025]"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">Mini Burgers Lan</figcaption>
            </figure>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
