import Image from "next/image"
import {
  ArrowDownRight,
  ArrowRight,
  CalendarDays,
  CarFront,
  Clock3,
  Gem,
  MapPin,
  Music2,
  Shield,
  Sparkles,
  Trophy,
} from "lucide-react"
import { AkashaArtistCard, type AkashaArtist } from "@/components/akasha/akasha-artist-card"
import { AkashaScrollProgress } from "@/components/akasha/akasha-scroll-progress"
import { AkashaSectionLabel } from "@/components/akasha/akasha-section-label"
import { LuxuryFooter } from "@/components/luxury-footer"
import { LuxuryHeader } from "@/components/luxury-header"
import { ScrollReveal } from "@/components/scroll-reveal"

const lineup: AkashaArtist[] = [
  {
    name: "Camzz",
    role: "DJ / Producer",
    image: "/Image-DJs/camzz.png",
    instagram: "https://www.instagram.com/camzz.prod?stkn=YWZ5c2IyZ2VtNmhr",
  },
  {
    name: "8batzz",
    role: "Afro House / Tech House",
    image: "/Image-DJs/8batzz.png",
    instagram: "https://www.instagram.com/8batzz",
  },
  {
    name: "Mausa",
    role: "DJ / Selector",
    image: "/Image-DJs/mausa.png",
  },
  {
    name: "Esteban Arenas",
    role: "DJ / Selector",
    image: "/Image-DJs/esteban-arenas.png",
    instagram: "https://www.instagram.com/estebanarenas_dj?stkn=NXBrZ2d6aWlpcWxj",
  },
]

const orbitNotes = [
  {
    number: "01",
    icon: CalendarDays,
    title: "22 de agosto",
    description: "Una fecha marcada para entrar en la órbita de ARKANA.",
  },
  {
    number: "02",
    icon: Clock3,
    title: "9PM — 4AM",
    description: "Siete horas de música, tensión y energía progresiva.",
  },
  {
    number: "03",
    icon: MapPin,
    title: "El Poblado",
    description: "Cra. 34 #8a 15, sótano. Medellín, Colombia.",
  },
]

const powerAesthetics = [
  "Geometría sagrada proyectada en los muros.",
  "Atmósfera carmesí e iluminación roja intensa.",
  "Espacios pensados para fotografía, reels e historias.",
  "Sensación de invasión visual y ritual de marca.",
]

const executionPillars = [
  {
    icon: Sparkles,
    title: "Visual",
    description: "Inmersión total en rojo, pantallas con simbología Abrakadabra y una narrativa visual imposible de ignorar.",
  },
  {
    icon: Music2,
    title: "Talento",
    description: "Camzz, 8batzz, Mausa y Esteban Arenas construyen la frecuencia de la noche desde cuatro perspectivas.",
  },
  {
    icon: CarFront,
    title: "Impacto",
    description: "El acceso, la música y cada detalle del espacio están pensados para elevar la experiencia desde el primer momento.",
  },
  {
    icon: Shield,
    title: "Exclusividad",
    description: "Un código de acceso y una curaduría precisa para que estar dentro se sienta aspiracional y seleccionado.",
  },
]

export default function ArkanaPage() {
  return (
    <main className="akasha-page min-h-screen overflow-x-hidden bg-[#050505] text-[#f3f0ec]">
      <AkashaScrollProgress />
      <LuxuryHeader />

      <section className="relative isolate overflow-hidden border-b border-white/[0.08]">
        <div className="pointer-events-none absolute -right-40 top-28 -z-10 h-[680px] w-[680px] rounded-full bg-[#8c2608]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-48 bottom-0 -z-10 h-[480px] w-[480px] rounded-full bg-[#5d1608]/10 blur-3xl" />

        <div className="mx-auto grid min-h-[clamp(760px,92vh,1000px)] max-w-[1440px] items-end gap-12 px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,1fr)] lg:items-center lg:gap-12 lg:px-[6vw] lg:pt-40">
          <div className="max-w-[760px]">
            <ScrollReveal>
              <AkashaSectionLabel>Abrakadabra Realm presenta</AkashaSectionLabel>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="mt-8 max-w-[8ch] font-serif text-[clamp(4.4rem,13vw,9.5rem)] font-semibold leading-[0.78] tracking-[-0.065em]">ARKANA</h1>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <p className="mt-8 max-w-2xl font-serif text-[clamp(1.45rem,2.8vw,2.6rem)] italic leading-[1.12] text-white/80">Una noche de música electrónica orbitando entre el misterio, el lujo y la energía.</p>
            </ScrollReveal>

            <ScrollReveal delay={260}>
              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[10px] font-medium uppercase tracking-[0.24em] text-white/55 sm:text-xs">
                <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-[#e1282e]" aria-hidden="true" />22 de agosto</span>
                <span className="hidden text-[#c20d12] sm:inline" aria-hidden="true">/</span>
                <span>9PM — 4AM · Cover 25K</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={340}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">ARKANA reúne a Camzz, 8batzz, Mausa y Esteban Arenas en una frecuencia diseñada para transformar El Poblado en una pista de sonido, luz y presencia.</p>
            </ScrollReveal>

            <ScrollReveal delay={420}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#lineup" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#c20d12] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-[background-color,box-shadow] duration-300 hover:bg-[#e1282e] hover:shadow-[0_12px_40px_rgba(194,13,18,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e1282e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]">Ver lineup<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" /></a>
                <a href="https://wa.me/573103920569?text=Hola%2C%20me%20interesa%20ARKANA.%20%C2%BFMe%20puedes%20compartir%20mas%20detalles%20y%20el%20RSVP%3F" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/[0.18] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75 transition-[border-color,color] duration-300 hover:border-[#c20d12]/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e1282e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]">Solicitar información</a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={160} direction="left" className="w-full lg:pb-2">
            <div className="relative mx-auto w-full max-w-[680px] lg:ml-auto">
              <div className="absolute -bottom-5 -left-5 h-24 w-24 border-b border-l border-[#c20d12]/65" aria-hidden="true" />
              <div className="absolute -right-5 -top-5 h-24 w-24 border-r border-t border-[#c20d12]/65" aria-hidden="true" />
              <div className="relative aspect-[1325/1187] overflow-hidden border border-[#c20d12]/35 bg-[#0d0d0d]">
                <Image src="/events/arkana/main.png" alt="Arte principal del evento ARKANA" fill priority sizes="(min-width: 1024px) 42vw, 92vw" className="image-editorial image-noir object-cover" />
              </div>
              <div className="mt-4 flex items-center justify-between text-[9px] uppercase tracking-[0.24em] text-white/35"><span>ARKANA / 001</span><span>Arte principal</span></div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 pb-6 text-[9px] uppercase tracking-[0.28em] text-white/30 sm:px-8 lg:px-[6vw]"><span>El Poblado / Medellín</span><span className="flex items-center gap-2"><ArrowDownRight className="h-3.5 w-3.5 text-[#c20d12]" aria-hidden="true" />Scroll to enter</span></div>
      </section>

      <section id="concepto" className="border-b border-white/[0.08] bg-[#0a0a0a] py-24 scroll-mt-24 sm:py-32 lg:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24 lg:px-[6vw]">
          <ScrollReveal>
            <AkashaSectionLabel>La frecuencia</AkashaSectionLabel>
            <h2 className="mt-7 max-w-xl font-serif text-[clamp(2.8rem,5vw,5.8rem)] font-semibold leading-[0.9] tracking-[-0.05em]">Un universo que se activa después del atardecer.</h2>
            <div className="mt-8 h-px w-20 bg-[#c20d12]" />
            <p className="mt-8 max-w-lg text-base leading-[1.75] text-white/58 sm:text-lg">La pieza de ARKANA habla en códigos orbitales, texturas oscuras y una energía naranja que atraviesa la noche. La experiencia lleva ese lenguaje al espacio y a la pista.</p>
            <p className="mt-5 max-w-lg text-base leading-[1.75] text-white/45">Cuatro artistas, una misma dirección: crear una noche de música electrónica con identidad propia.</p>
          </ScrollReveal>

          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {orbitNotes.map((note, index) => {
              const Icon = note.icon
              return <ScrollReveal key={note.number} delay={index * 90}><article className="group h-full border border-white/[0.08] bg-[#0d0d0d] p-6 transition-[border-color,background-color,transform] duration-500 hover:-translate-y-1 hover:border-[#c20d12]/45 hover:bg-[#100808] sm:p-7"><div className="flex items-start justify-between gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#780609]/20 text-[#e1282e]"><Icon className="h-4 w-4" aria-hidden="true" /></div><span className="text-[10px] tracking-[0.2em] text-white/30">{note.number}</span></div><h3 className="mt-14 font-serif text-3xl font-semibold tracking-[-0.03em]">{note.title}</h3><p className="mt-4 text-sm leading-relaxed text-white/50">{note.description}</p></article></ScrollReveal>
            })}
          </div>
        </div>
      </section>

      <section id="poder-visual" className="bg-[#050505] py-24 scroll-mt-24 sm:py-32 lg:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-24 lg:px-[6vw]">
          <ScrollReveal direction="right"><div className="relative aspect-[16/10] overflow-hidden border border-white/[0.08] bg-[#0d0d0d]"><Image src="/Image-DJs/imagen-1.png" alt="DJ frente a una pista de música electrónica" fill sizes="(min-width: 1024px) 55vw, 100vw" className="image-editorial image-red object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:scale-[1.015]" /><div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(120,6,9,0.46),rgba(0,0,0,0.12)_48%,rgba(0,0,0,0.78))]" /><div className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.25em] text-white/55 sm:left-7 sm:top-7">ARKANA / 002</div><div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7"><p className="max-w-[14ch] font-serif text-3xl font-semibold leading-[0.9] sm:text-5xl">La pista se enciende.</p><Music2 className="h-6 w-6 text-[#e1282e]" aria-hidden="true" /></div></div></ScrollReveal>
          <ScrollReveal delay={120}><AkashaSectionLabel>El poder visual</AkashaSectionLabel><h2 className="mt-7 max-w-xl font-serif text-[clamp(2.8rem,5vw,5.6rem)] font-semibold leading-[0.9] tracking-[-0.05em]">La noche como una pieza editorial.</h2><div className="mt-10 divide-y divide-white/[0.1] border-y border-white/[0.1]">{powerAesthetics.map((item, index) => <div key={item} className="grid grid-cols-[36px_1fr] gap-4 py-5 sm:grid-cols-[44px_1fr]"><span className="text-[10px] font-semibold tracking-[0.2em] text-[#e1282e]">0{index + 1}</span><p className="text-sm leading-relaxed text-white/58">{item}</p></div>)}</div></ScrollReveal>
        </div>
      </section>

      <section id="lineup" className="border-y border-white/[0.08] bg-[#0a0a0a] py-24 scroll-mt-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-[4vw]">
          <ScrollReveal><div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end"><div><AkashaSectionLabel>La frecuencia</AkashaSectionLabel><h2 className="mt-7 font-serif text-[clamp(3rem,6vw,6.2rem)] font-semibold leading-[0.86] tracking-[-0.06em]">Lineup ARKANA</h2></div><p className="max-w-md text-sm leading-relaxed text-white/48 lg:text-right">Camzz, 8batzz, Mausa y Esteban Arenas. Cuatro nombres para una noche que se mueve en una sola órbita.</p></div></ScrollReveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{lineup.map((artist, index) => <ScrollReveal key={artist.name} delay={index * 70}><AkashaArtistCard artist={artist} index={index} /></ScrollReveal>)}</div>
        </div>
      </section>

      <section className="bg-[#060606] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24 lg:px-[6vw]">
          <ScrollReveal><AkashaSectionLabel>La musa</AkashaSectionLabel><h2 className="mt-7 max-w-xl font-serif text-[clamp(2.8rem,5vw,5.4rem)] font-semibold leading-[0.9] tracking-[-0.05em]">Paula Suarez G, el ícono de la noche.</h2><p className="mt-8 max-w-xl text-base leading-[1.75] text-white/58 sm:text-lg">Paula conecta sensualidad elegante, rebeldía e imagen aspiracional. Su presencia construye el puente entre lujo, música y cultura popular dentro de ARKANA.</p><p className="mt-5 max-w-xl text-base leading-[1.75] text-white/45">No es una presencia decorativa: es parte de la identidad que convierte el evento en una experiencia con rostro y memoria.</p></ScrollReveal>
          <ScrollReveal delay={120} direction="left"><div className="relative aspect-[4/3] overflow-hidden border border-white/[0.08] bg-black"><Image src="/news/PaulaSuarez.webp" alt="Paula Suarez G" fill sizes="(min-width: 1024px) 55vw, 100vw" className="image-editorial image-noir object-cover object-top" /><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6 sm:p-8"><p className="text-[10px] uppercase tracking-[0.3em] text-[#e1282e]">El ícono</p><p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">Una figura que representa la identidad de Abrakadabra dentro de Coffee Club.</p></div></div></ScrollReveal>
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-[#0a0a0a] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[6vw]"><ScrollReveal><div className="max-w-3xl"><AkashaSectionLabel>Los pilares</AkashaSectionLabel><h2 className="mt-7 font-serif text-[clamp(2.8rem,5vw,5.8rem)] font-semibold leading-[0.9] tracking-[-0.05em]">Una experiencia diseñada por capas.</h2></div></ScrollReveal><div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{executionPillars.map((pillar, index) => <ScrollReveal key={pillar.title} delay={index * 70}><article className="group h-full border border-white/[0.08] bg-[#0d0d0d] p-6 transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-[#c20d12]/45 sm:p-7"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#780609]/20 text-[#e1282e]"><pillar.icon className="h-5 w-5" aria-hidden="true" /></div><h3 className="mt-14 font-serif text-3xl font-semibold">{pillar.title}</h3><p className="mt-4 text-sm leading-relaxed text-white/50">{pillar.description}</p></article></ScrollReveal>)}</div></div>
      </section>

      <section className="bg-[#060606] py-24 sm:py-32 lg:py-40"><div className="mx-auto grid max-w-[1440px] gap-5 px-5 sm:px-8 lg:grid-cols-2 lg:px-[6vw]">
        <ScrollReveal><article className="group overflow-hidden border border-white/[0.08] bg-[#0b0b0b]"><div className="relative aspect-[16/10] overflow-hidden"><Image src="/events/arkana/ferrari.jpg" alt="Supercar exótico" fill sizes="(min-width: 1024px) 45vw, 100vw" className="image-editorial image-red object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.03]" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" /></div><div className="p-7 sm:p-8"><div className="flex items-center gap-3 text-[#e1282e]"><CarFront className="h-5 w-5" aria-hidden="true" /><span className="text-[10px] font-semibold uppercase tracking-[0.32em]">Ingeniería brutal</span></div><h3 className="mt-5 font-serif text-3xl font-semibold sm:text-4xl">El asombro comienza antes de cruzar la puerta.</h3><p className="mt-5 text-sm leading-relaxed text-white/50">El acceso se activa con una presencia roja, potente y cinematográfica: un primer gesto de estatus y apropiación del espacio.</p></div></article></ScrollReveal>
        <ScrollReveal delay={120}><article className="group overflow-hidden border border-white/[0.08] bg-[#0b0b0b]"><div className="relative aspect-[16/10] overflow-hidden"><Image src="/events/arkana/gem.jpg" alt="Esmeralda certificada" fill sizes="(min-width: 1024px) 45vw, 100vw" className="image-editorial image-noir object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.03]" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" /></div><div className="p-7 sm:p-8"><div className="flex items-center gap-3 text-[#e1282e]"><Gem className="h-5 w-5" aria-hidden="true" /><span className="text-[10px] font-semibold uppercase tracking-[0.32em]">El legado</span></div><h3 className="mt-5 font-serif text-3xl font-semibold sm:text-4xl">Un símbolo para cerrar la noche.</h3><p className="mt-5 text-sm leading-relaxed text-white/50">La esmeralda colombiana certificada representa el fragmento tangible del Reino que permanece después del último track.</p></div></article></ScrollReveal>
      </div></section>

      <section className="border-y border-white/[0.08] bg-[#0a0a0a] py-24 sm:py-32 lg:py-40"><div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24 lg:px-[6vw]">
        <ScrollReveal><AkashaSectionLabel>Código de acceso</AkashaSectionLabel><h2 className="mt-7 font-serif text-[clamp(2.8rem,5vw,5.8rem)] font-semibold leading-[0.9] tracking-[-0.05em]">100% Strictly Red Code.</h2><p className="mt-8 max-w-xl text-base leading-[1.75] text-white/58 sm:text-lg">La estética es ley. El rojo construye una masa visual unificada y convierte a cada asistente en parte del ritual.</p><div className="mt-8 border border-[#c20d12]/35 bg-[#120707] px-6 py-6 sm:px-7"><p className="font-serif text-2xl italic text-white sm:text-3xl">“La elegancia es el arma. El rojo es la munición.”</p><p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-[#e1282e]">ARKANA / 001</p></div></ScrollReveal>
        <ScrollReveal delay={120} direction="left"><div className="relative aspect-[4/3] overflow-hidden border border-white/[0.08] bg-black"><Image src="/events/arkana/runway.jpg" alt="Código de vestuario rojo de ARKANA" fill sizes="(min-width: 1024px) 45vw, 100vw" className="image-editorial image-red object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" /></div></ScrollReveal>
      </div></section>

      <section id="historia" className="relative overflow-hidden bg-[#050505] py-28 scroll-mt-24 sm:py-36 lg:py-44"><div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#780609]/15 blur-3xl" /><div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8"><ScrollReveal><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#c20d12]/45 bg-[#780609]/15 text-[#e1282e]"><Trophy className="h-5 w-5" aria-hidden="true" /></div><AkashaSectionLabel className="mt-8">Cierre de frecuencia</AkashaSectionLabel><h2 className="mx-auto mt-7 max-w-[12ch] font-serif text-[clamp(3.2rem,7vw,7rem)] font-semibold leading-[0.84] tracking-[-0.06em]">La noche deja huella.</h2><p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">ARKANA convierte la música, el espacio y la identidad en una experiencia para recordar. Solicita información y entra en la órbita.</p><div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"><a href="/events" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/[0.18] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 transition-[border-color,color] duration-300 hover:border-[#c20d12]/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e1282e]">Volver a eventos</a><a href="https://wa.me/573103920569?text=Hola%2C%20me%20interesa%20ARKANA.%20%C2%BFMe%20puedes%20compartir%20mas%20detalles%20y%20el%20RSVP%3F" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#c20d12] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-[background-color,box-shadow] duration-300 hover:bg-[#e1282e] hover:shadow-[0_12px_40px_rgba(194,13,18,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e1282e]">Solicitar información<ArrowRight className="h-4 w-4" aria-hidden="true" /></a></div></ScrollReveal></div></section>

      <LuxuryFooter variant="noir" />
    </main>
  )
}
