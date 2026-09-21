import { ArrowDown, ArrowRight } from "lucide-react"
import { LuxuryFooter } from "@/components/luxury-footer"
import { LuxuryHeader } from "@/components/luxury-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { EventAgendaGrid } from "@/components/events/event-agenda-grid"

export const metadata = {
  title: "Agenda | Abrakadabra RealM",
  description: "Próximas frecuencias y noches que dejaron huella en Abrakadabra RealM.",
}

export default function EventsAgendaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-[#f3f0ec]">
      <LuxuryHeader accentColor="#c20d12" />

      <section className="relative isolate overflow-hidden border-b border-white/[0.08] pb-20 pt-40 sm:pb-28 lg:pt-48">
        <div className="pointer-events-none absolute -right-40 top-20 -z-10 h-[520px] w-[520px] rounded-full bg-[#c20d12]/[0.06] blur-3xl" />
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[6vw]">
          <ScrollReveal>
            <div className="flex items-center gap-3 text-[#c20d12]">
              <span className="h-px w-10 bg-[#c20d12]" aria-hidden="true" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Agenda Abrakadabra</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="mt-8 max-w-5xl font-serif text-[clamp(3.7rem,9vw,9rem)] font-semibold leading-[0.82] tracking-[-0.07em] text-[#f3f0ec]">
              Próximamente <span className="text-[#c20d12] italic">y para la historia.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={180}>
            <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">Descubre la próxima frecuencia y vuelve a entrar en las noches que ya dejaron huella.</p>
              <a href="#eventos" className="inline-flex min-h-11 items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/55 transition-colors hover:text-[#c20d12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c20d12]">Explorar agenda <ArrowDown className="h-4 w-4" aria-hidden="true" /></a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div id="eventos" className="scroll-mt-24 pt-12 sm:pt-16">
        <EventAgendaGrid />
      </div>

      <section className="border-t border-white/[0.08] bg-[#0a0a0a] py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-[6vw]">
          <ScrollReveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c20d12]">Mantente cerca</p>
            <h2 className="mt-5 max-w-3xl font-serif text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.88] tracking-[-0.06em]">Cada frecuencia tiene su momento.</h2>
          </ScrollReveal>
          <ScrollReveal delay={120} direction="left">
            <a href="/events#events-form" className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 transition-[border-color,color] duration-300 hover:border-[#c20d12]/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c20d12]">
              Unirme a la próxima <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      <LuxuryFooter variant="noir" />
    </main>
  )
}
