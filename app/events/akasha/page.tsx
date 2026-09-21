import Image from "next/image"
import { ArrowRight, Clock3, MapPin, Music2, Ticket } from "lucide-react"
import { AkashaFrequencyMarquee } from "@/components/akasha/akasha-frequency-marquee"
import { AkashaFoodFeature } from "@/components/akasha/akasha-food-feature"
import { AkashaHero } from "@/components/akasha/akasha-hero"
import { AkashaLineup } from "@/components/akasha/akasha-lineup"
import { AkashaScrollProgress } from "@/components/akasha/akasha-scroll-progress"
import { EventsPublicForm } from "@/components/events-public-form"
import { LuxuryFooter } from "@/components/luxury-footer"
import { LuxuryHeader } from "@/components/luxury-header"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata = {
  title: "AKASHA | Abrakadabra RealM",
  description: "AKASHA · música electrónica en Baren · sábado 17 de octubre de 2026.",
}

const eventMeta = [
  { icon: MapPin, label: "Lugar", value: "BAREN · EL BAR DE LA BUENA MÚSICA", href: "https://www.instagram.com/barenmedellin?stkn=MWV6NG9nY2J0bzNwYQ==" },
  { icon: MapPin, label: "Dirección", value: "CRR 38 N 10-13", href: null },
  { icon: Clock3, label: "Horario", value: "7PM — 4AM", href: null },
  { icon: Ticket, label: "Entrada", value: "NO COVER", href: null },
]

const manifestoLines = ["LA MEMORIA DEL SONIDO.", "EL ESPACIO DONDE LA NOCHE", "SE VUELVE ENERGÍA."]

export default function AkashaPage() {
  return (
    <main className="akasha-page min-h-screen overflow-x-hidden bg-[#080808] text-[#e9e5d8]">
      <AkashaScrollProgress />
      <LuxuryHeader accentColor="#d9ff20" />

      <AkashaHero />
      <AkashaFrequencyMarquee />

      <section id="proximamente" className="relative overflow-hidden border-b border-white/[0.1] bg-[#080808] py-24 scroll-mt-24 sm:py-32 lg:py-48">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-24 lg:px-[5vw]">
          <ScrollReveal>
            <p className="akasha-kicker text-[#d9ff20]">01 / Próximamente</p>
            <h2 className="akasha-display mt-7 text-[clamp(4.5rem,12vw,13rem)] font-black uppercase leading-[0.72] tracking-[-0.09em] text-[#e9e5d8]">AKASHA</h2>
            <div className="mt-9 grid max-w-sm grid-cols-2 gap-x-8 gap-y-5 border-y border-white/[0.12] py-6 font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">
              <div><span className="block text-[#d9ff20]">SÁBADO</span><strong className="mt-2 block text-2xl font-normal tracking-[0.04em] text-[#e9e5d8]">17 OCT</strong></div>
              <div><span className="block text-[#d9ff20]">AÑO</span><strong className="mt-2 block text-2xl font-normal tracking-[0.04em] text-[#e9e5d8]">2026</strong></div>
              <div><span className="block text-[#d9ff20]">FRECUENCIA</span><strong className="mt-2 block text-sm font-normal tracking-[0.04em] text-[#e9e5d8]">MÚSICA ELECTRÓNICA</strong></div>
              <div><span className="block text-[#d9ff20]">ENTRADA</span><strong className="mt-2 block text-sm font-normal tracking-[0.04em] text-[#e9e5d8]">NO COVER</strong></div>
            </div>
            <p className="mt-8 max-w-md text-base leading-relaxed text-white/55 sm:text-lg">Música electrónica de 7PM a 4AM, sin cover, con cinco artistas y una primera ronda de cócteles gratis para grupos de ellas.</p>
          </ScrollReveal>

          <ScrollReveal delay={120} direction="left">
            <figure className="group relative mx-auto max-w-[800px]">
              <div className="akasha-poster-reveal relative aspect-[1325/1187] overflow-hidden border border-[#d9ff20]/40 bg-[#171717]">
                <Image src="/events/akasha/agenda-cover.png" alt="Portada oficial de AKASHA, evento de música electrónica en Baren" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.02]" />
              </div>
              <figcaption className="mt-4 flex justify-between font-mono text-[9px] uppercase tracking-[0.22em] text-white/35"><span>AKASHA / OFFICIAL COVER</span><span>BAR / MEDELLÍN</span></figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-white/[0.1] bg-[#171717]/40 py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-[5vw]">
          <ScrollReveal>
            <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <p className="akasha-kicker text-[#d9ff20]">02 / Event coordinates</p>
                <h2 className="akasha-display mt-6 max-w-4xl text-[clamp(3.5rem,8vw,8rem)] font-black uppercase leading-[0.78] tracking-[-0.08em] text-[#e9e5d8]">La frecuencia<br /><span className="text-white/25">toma forma.</span></h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-white/45 lg:text-right">Un punto de encuentro para la música electrónica, el movimiento y la identidad de la noche.</p>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid border-y border-white/[0.12] sm:grid-cols-2 lg:grid-cols-4">
            {eventMeta.map((item, index) => {
              const Icon = item.icon
              return (
                <ScrollReveal key={item.label} delay={index * 70}>
                  <div className="group border-b border-white/[0.12] p-6 last:border-b-0 sm:border-r sm:p-8 lg:border-b-0 lg:last:border-r-0">
                    <Icon className="h-5 w-5 text-[#d9ff20] transition-transform duration-300 group-hover:-translate-y-1" aria-hidden="true" />
                    <p className="mt-12 font-mono text-[9px] uppercase tracking-[0.24em] text-white/35">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label="Visitar el Instagram de Baren Medellín" className="mt-3 inline-flex min-h-11 max-w-[18ch] items-center gap-2 text-sm font-semibold uppercase leading-relaxed tracking-[0.12em] text-[#e9e5d8] transition-colors hover:text-[#d9ff20] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9ff20]">
                        <span>{item.value}</span><ArrowRight className="h-4 w-4 shrink-0 text-[#d9ff20]" aria-hidden="true" />
                      </a>
                    ) : (
                      <p className="mt-3 max-w-[18ch] text-sm font-semibold uppercase leading-relaxed tracking-[0.12em] text-[#e9e5d8]">{item.value}</p>
                    )}
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
          <p className="mt-7 max-w-3xl font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-[#d9ff20]">Coctelería a la venta en Baren durante la noche. <span className="text-white/40">Girls First · primera ronda de cócteles gratis para grupos de ellas</span></p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#080808] py-28 sm:py-40 lg:py-56">
        <div className="pointer-events-none absolute right-[8%] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-[#d9ff20]/20 lg:h-[28rem] lg:w-[28rem]" aria-hidden="true" />
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-[5vw]">
          <ScrollReveal>
            <p className="akasha-kicker text-[#d9ff20]">03 / Manifiesto</p>
            <h2 className="akasha-display mt-10 max-w-7xl text-[clamp(3.6rem,10.5vw,12rem)] font-black uppercase leading-[0.75] tracking-[-0.09em] text-[#e9e5d8]">
              {manifestoLines.map((line, index) => <span key={line} className={`block ${index === 2 ? "text-[#d9ff20]" : index === 1 ? "text-white/55" : ""}`}>{line}</span>)}
            </h2>
            <div className="mt-12 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.24em] text-white/35"><span className="h-px w-16 bg-[#d9ff20]" aria-hidden="true" />El sonido no se observa. Se atraviesa.</div>
          </ScrollReveal>
        </div>
      </section>

      <AkashaFrequencyMarquee reverse />
      <AkashaLineup />
      <AkashaFoodFeature />

      <section className="border-b border-white/[0.1] bg-[#171717]/50 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-[5vw]">
          <ScrollReveal>
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div><p className="akasha-kicker text-[#d9ff20]">06 / Archivo</p><h2 className="akasha-display mt-6 text-[clamp(3.5rem,8vw,8rem)] font-black uppercase leading-[0.78] tracking-[-0.08em] text-[#e9e5d8]">Noches que<br /><span className="text-white/30">dejaron huella.</span></h2></div>
              <p className="max-w-sm text-sm leading-relaxed text-white/45 lg:text-right">AKASHA abre la próxima frecuencia. ARKANA permanece en el archivo.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <a href="/events/arkana" className="group mt-14 grid items-end gap-6 border-y border-white/[0.12] py-5 transition-colors duration-300 hover:border-[#d9ff20]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9ff20] sm:grid-cols-[0.85fr_1fr_auto] sm:gap-10 sm:py-7">
              <div className="relative aspect-[1325/1187] overflow-hidden border border-white/[0.1] grayscale transition-[filter,transform] duration-700 group-hover:grayscale-0 group-hover:scale-[1.01] sm:aspect-[16/8]"><Image src="/events/arkana/main.png" alt="Portada del evento archivado ARKANA" fill sizes="(min-width: 640px) 40vw, 100vw" className="object-cover" /></div>
              <div><p className="akasha-kicker text-[#d9ff20]">Event 001 / En el archivo</p><h3 className="akasha-display mt-5 text-6xl font-black uppercase leading-[0.75] tracking-[-0.08em] text-[#e9e5d8] sm:text-8xl">ARKANA</h3><p className="mt-5 text-sm text-white/45">22 AGO · CAMZZ · 8BATZZ · MAUSA · ESTEBAN ARENAS</p></div>
              <ArrowRight className="h-8 w-8 text-[#d9ff20] transition-transform duration-300 group-hover:translate-x-2" aria-hidden="true" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#080808] py-28 sm:py-36 lg:py-44">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9ff20]/[0.04] blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <ScrollReveal>
            <Music2 className="mx-auto h-7 w-7 text-[#d9ff20]" aria-hidden="true" />
            <p className="akasha-kicker mt-8 text-[#d9ff20]">07 / Join the frequency</p>
            <h2 className="akasha-display mt-8 text-[clamp(4rem,10vw,10rem)] font-black uppercase leading-[0.75] tracking-[-0.09em] text-[#e9e5d8]">Nos vemos<br /><span className="text-[#d9ff20]">en AKASHA.</span></h2>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">Registra tus datos y recibe la información de acceso para la próxima frecuencia en Baren.</p>
            <a href="#contacto" className="group mt-10 inline-flex min-h-12 items-center gap-3 rounded-full border border-[#d9ff20] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d9ff20] transition-[background-color,color] duration-300 hover:bg-[#d9ff20] hover:text-[#050505] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9ff20]">Unirme a la fiesta <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" /></a>
          </ScrollReveal>
        </div>
      </section>

      <div id="contacto" className="scroll-mt-24">
        <EventsPublicForm id="akasha-contact-form" variant="akasha" mode="attendance" title="Únete a la fiesta." subtitle="Registra tus datos para recibir la información de acceso y confirmar tu lugar en AKASHA." submitLabel="Quiero asistir" />
      </div>

      <LuxuryFooter variant="noir" />
    </main>
  )
}
