import Image from "next/image"
import { ArrowRight, CalendarDays, Instagram, MapPin, Music2 } from "lucide-react"
import { ExquisiteArtistLineup } from "@/components/exquisite/exquisite-artist-lineup"
import { ExquisiteHero } from "@/components/exquisite/exquisite-hero"
import { ExquisiteVisualMoment } from "@/components/exquisite/exquisite-visual-moment"
import { AkashaScrollProgress } from "@/components/akasha/akasha-scroll-progress"
import { LuxuryFooter } from "@/components/luxury-footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata = {
  title: "Exquisite Night | Abrakadabra RealM",
  description: "Exquisite Night: una noche de arte, house y techno en Russian Samovar, Nueva York.",
}

export default function ExquisiteNightPage() {
  return (
    <main className="exquisite-page min-h-screen overflow-x-hidden bg-[#080706] text-[#f0e7d8]">
      <AkashaScrollProgress accentColor="#d99548" />
      <ExquisiteHero />

      <section id="intro" className="border-b border-[#f0e7d8]/10 bg-[#0c0a09] py-24 scroll-mt-20 sm:py-32 lg:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 lg:px-[6vw]">
          <ScrollReveal>
            <p className="exquisite-section-label">La entrada / 00</p>
            <p className="mt-8 max-w-xs font-mono text-[10px] uppercase leading-relaxed tracking-[0.22em] text-[#f0e7d8]/35">An exquisite night<br />NYC · house · techno</p>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <h2 className="max-w-4xl font-serif text-[clamp(2.9rem,6vw,6.8rem)] font-semibold leading-[0.88] tracking-[-0.06em] text-[#f0e7d8]">Una colisión entre arte, música y la noche.</h2>
            <p className="mt-8 max-w-2xl text-base leading-[1.8] text-[#f0e7d8]/58 sm:text-lg">Exquisite Night llevó el lenguaje de una pintura clásica a un espacio de house y techno. Un encuentro íntimo entre artistas, sellos y una audiencia reunida para vivir la música como una pieza irrepetible.</p>
          </ScrollReveal>
        </div>
      </section>

      <ExquisiteArtistLineup />
      <ExquisiteVisualMoment />

      <section id="under-effect" className="border-y border-[#d99548]/20 bg-[#24130d] py-24 scroll-mt-20 sm:py-32 lg:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-24 lg:px-[6vw]">
          <ScrollReveal>
            <p className="exquisite-section-label">La colaboración / 03</p>
            <p className="mt-8 max-w-xs font-mono text-[10px] uppercase leading-relaxed tracking-[0.22em] text-[#f0e7d8]/40">Under Effect<br />Original event communication</p>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <h2 className="max-w-4xl font-serif text-[clamp(2.8rem,5.8vw,6.4rem)] font-semibold leading-[0.88] tracking-[-0.06em] text-[#f0e7d8]">Una noche anunciada para no perderse.</h2>
            <p className="mt-8 max-w-2xl text-base leading-[1.8] text-[#f0e7d8]/65 sm:text-lg">La comunicación original de Under Effect presentó Exquisite Night como una experiencia irrepetible: arte en vivo, beats de techno y house, y una invitación a vestirse para una noche que merecía ser recordada.</p>
            <p className="mt-5 max-w-2xl text-sm leading-[1.8] text-[#f0e7d8]/45 sm:text-base">Como el evento pertenece al archivo, este enlace conserva la colaboración y lleva a la cuenta que publicó la convocatoria original; no representa una venta activa de entradas.</p>
            <a href="https://www.instagram.com/undereffect__/" target="_blank" rel="noopener noreferrer" className="group mt-9 inline-flex min-h-12 items-center gap-3 border-b border-[#d99548]/70 pb-3 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#d99548] transition-[border-color,color] duration-300 hover:border-[#f0e7d8] hover:text-[#f0e7d8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d99548] focus-visible:ring-offset-4 focus-visible:ring-offset-[#24130d]">
              <Instagram className="h-4 w-4" aria-hidden="true" /> Ver publicación original · @undereffect__ <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      <section id="details" className="border-y border-[#f0e7d8]/10 bg-[#12100e] py-24 scroll-mt-20 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[6vw]">
          <ScrollReveal>
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div>
                <p className="exquisite-section-label">La coordenada / 02</p>
                <h2 className="mt-6 max-w-3xl font-sans text-[clamp(2.8rem,6vw,6.4rem)] font-light uppercase leading-[0.86] tracking-[0.05em]">El lugar donde ocurrió.</h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-[#f0e7d8]/50 lg:text-right">La memoria también se construye con una dirección, una hora y el pulso de la pista.</p>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-px border border-[#f0e7d8]/10 bg-[#f0e7d8]/10 sm:grid-cols-3">
            {[
              { icon: CalendarDays, label: "Fecha", value: "Jueves · 9 de marzo" },
              { icon: MapPin, label: "Venue", value: "Russian Samovar" },
              { icon: Music2, label: "Frecuencia", value: "House · Techno" },
            ].map(({ icon: Icon, label, value }, index) => (
              <ScrollReveal key={label} delay={index * 80}>
                <div className="h-full bg-[#12100e] p-6 sm:p-8 lg:p-10">
                  <Icon className="h-5 w-5 text-[#d99548]" aria-hidden="true" />
                  <p className="mt-12 text-[10px] uppercase tracking-[0.28em] text-[#f0e7d8]/35">{label}</p>
                  <p className="mt-4 max-w-[16ch] font-serif text-2xl leading-tight text-[#f0e7d8] sm:text-3xl">{value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={160}>
            <div className="mt-5 flex flex-col gap-3 border-t border-[#f0e7d8]/10 pt-5 text-[10px] uppercase tracking-[0.22em] text-[#f0e7d8]/42 sm:flex-row sm:justify-between">
              <span>256 W 52nd St · New York</span>
              <span>Archivo de una noche irrepetible</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#080706] py-28 sm:py-36 lg:py-48">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c36b28]/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <ScrollReveal>
            <p className="exquisite-section-label justify-center">El archivo permanece</p>
            <h2 className="mt-7 font-serif text-[clamp(3rem,7vw,7.5rem)] font-semibold leading-[0.84] tracking-[-0.065em]">Una noche que todavía respira.</h2>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-[#f0e7d8]/52 sm:text-lg">Explora las próximas frecuencias y vuelve a entrar en las historias que ya dejaron huella.</p>
            <a href="/events/agenda" className="group mt-10 inline-flex min-h-12 items-center gap-3 border-b border-[#d99548]/70 pb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d99548] transition-[border-color,color] duration-300 hover:border-[#f0e7d8] hover:text-[#f0e7d8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d99548] focus-visible:ring-offset-4 focus-visible:ring-offset-[#080706]">
              Ver toda la agenda <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      <LuxuryFooter variant="noir" />
    </main>
  )
}
