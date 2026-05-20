import { ArrowRight, Gem, Music2, Shield, Sparkles, Trophy, CarFront } from "lucide-react"
import { LuxuryFooter } from "@/components/luxury-footer"
import { LuxuryHeader } from "@/components/luxury-header"
import { ScrollReveal } from "@/components/scroll-reveal"

const powerAesthetics = [
  "Geometria sagrada proyectada en los muros.",
  "Atmosfera carmesi e iluminacion roja intensa.",
  "Espacios pensados para fotografia, reels e historias.",
  "Sensacion de invasion visual y ritual de marca.",
]

const lineup = [
  {
    title: "Z.CAMZ & 8Batzz",
    subtitle: "Curaduria Urbana / Techno",
    description:
      "Una progresion ritmica pensada para elevar la frecuencia cardiaca hasta el extasis, mezclando oscuridad electronica con energia frontal.",
    image: "/Image-DJs/8batzz.png",
  },
  {
    title: "TYNEZ / IDANNY",
    subtitle: "La esencia de la calle en formato lujo",
    description:
      "Presentacion en vivo para romper la elegancia con energia pura y llevar el evento del control al climax.",
    image: "/events/arkana/runway.jpg",
  },
]

const executionPillars = [
  {
    icon: Sparkles,
    title: "Visual",
    description: "Inmersion total en rojo, pantallas con simbologia Abrakadabra y apropiacion visual completa de Coffee Club.",
  },
  {
    icon: Music2,
    title: "Talento",
    description: "Paula Suarez G como imagen. Z.Camz, 8Batzz, Tynez e Idanny como sonido y energia de la noche.",
  },
  {
    icon: CarFront,
    title: "Marketing",
    description: "Supercar exterior de alto impacto y entrega de una Esmeralda Colombiana Certificada como momento de legado.",
  },
  {
    icon: Shield,
    title: "Exclusividad",
    description: "Strictly Red Code y filtro RSVP desde la web oficial para que la entrada se sienta aspiracional y seleccionada.",
  },
]

const namingOptions = [
  {
    name: "ARKANA",
    meaning: "El misterio revelado. Sonido epico y profundo.",
    active: true,
  },
  {
    name: "RUBI",
    meaning: "La gema, la sangre, el lujo. Corto y brutal.",
    active: false,
  },
  {
    name: "KODEX",
    meaning: "La geometria y los simbolos como lenguaje oculto.",
    active: false,
  },
]

export default function ArkanaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <LuxuryHeader />

      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/events/arkana/lounge.jpg"
            alt="Arkana"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/84 to-black/65" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(140,10,10,0.36),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(120,0,0,0.22),transparent_32%)]" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 pt-36">
          <div className="max-w-5xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#bf1f25]">
                <span className="h-px w-12 bg-[#7b0b0b]" />
                Abrakadabrarealm x Coffee Club
              </span>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <h1 className="mt-8 font-serif text-6xl font-bold leading-[0.88] sm:text-7xl md:text-8xl lg:text-[9rem]">
                ARKANA
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={220}>
              <p className="mt-6 max-w-3xl font-serif text-2xl italic leading-relaxed text-white/86 sm:text-3xl">
                "El lujo no es comodidad. El lujo es dominacion, misterio y el privilegio de lo prohibido."
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-[#cf3b3b]">
                La Logia de Abrakadabra
              </p>
            </ScrollReveal>

            <ScrollReveal delay={320}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                ARKANA transforma Coffee Club en un santuario oscuro: rojo, ritualista, exclusivo y
                construido para generar impacto visual, contenido digital y una sensacion real de pertenecer a algo secreto.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={420}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#poder"
                  className="inline-flex items-center gap-3 rounded-full bg-[#8c0a0a] px-8 py-4 text-sm font-semibold tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#a10f0f] hover:shadow-xl hover:shadow-[#8c0a0a]/30"
                >
                  Ver Concepto
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#historia"
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold tracking-[0.2em] text-white/90 transition-all duration-300 hover:bg-white/8"
                >
                  Hacemos Historia
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="poder" className="relative border-y border-white/8 bg-[#090909] py-24 scroll-mt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(130,0,0,0.16),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-[#7b0b0b]/40 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
              <img
                src="/events/arkana/editorial.jpg"
                alt="Estetica Arkana"
                className="aspect-[4/5] h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-[#cf3b3b]">Estetica Del Poder</p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/72">
                  No es solo un evento, es una invasion visual.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a90e0e]">
                Santuario Oscuro
              </span>
              <h2 className="mt-5 font-serif text-4xl font-bold sm:text-5xl">
                Coffee Club tomado por el Reino
              </h2>
              <div className="mt-7 h-px w-24 bg-[#7b0b0b]" />
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/68">
                La propuesta no busca decorar el lugar, sino apropiarse visualmente de el. Cada rincon
                debe sentirse como un escenario disenado para la inmortalidad digital: fotos, videos,
                reels, historias y una presencia visual imposible de ignorar.
              </p>

              <div className="mt-8 grid gap-4">
                {powerAesthetics.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-4 text-sm leading-relaxed text-white/70"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#060606] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ScrollReveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a90e0e]">
                La Musa
              </span>
              <h2 className="mt-5 font-serif text-4xl font-bold sm:text-5xl">
                Paula Suarez G, el icono de la noche
              </h2>
              <p className="mt-7 text-base leading-relaxed text-white/68">
                Paula no entra como una invitada cualquiera. El concepto la plantea como la energia vital
                del evento, una figura que conecta sensualidad elegante, rebeldia, imagen aspiracional
                y credibilidad dentro del mundo urbano.
              </p>
              <p className="mt-5 text-base leading-relaxed text-white/60">
                Su presencia aporta el puente entre lujo, musica y cultura popular. El press kit la
                presenta como musa, imagen e icono del ritual, respaldada por una trayectoria ligada a
                figuras como Nicky Jam, Wisin y Ozuna.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
              <img
                src="/news/PaulaSuarez.webp"
                alt="Paula Suarez G"
                className="aspect-[4/3] h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-[#cf3b3b]">El Icono</p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/72">
                  No sera solo una presencia. Sera la figura que representa la identidad de Abrakadabra dentro de Coffee Club.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#090909] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a90e0e]">
                Frecuencias Prohibidas
              </span>
              <h2 className="mt-5 font-serif text-4xl font-bold sm:text-5xl">
                Musica pensada como progresion de tension, extasis y explosion
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/66">
                El sonido de ARKANA mezcla dos mundos: oscuridad techno e impulso urbano. No busca un
                set plano, sino una subida constante de energia que lleve la noche desde la sofisticacion
                hasta el punto de ruptura.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {lineup.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <article className="overflow-hidden rounded-[1.75rem] border border-white/8 bg-[#0c0c0c]">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="aspect-[16/10] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  </div>
                  <div className="p-7">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#cf3b3b]">{item.subtitle}</p>
                    <h3 className="mt-3 font-serif text-3xl font-bold">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/64">{item.description}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#060606] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <ScrollReveal>
            <article className="overflow-hidden rounded-[2rem] border border-white/8 bg-[#0b0b0b]">
              <div className="relative">
                <img
                  src="/events/arkana/ferrari.jpg"
                  alt="Supercar exotico"
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 text-[#cf3b3b]">
                  <CarFront className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-[0.32em]">Ingenieria Brutal</span>
                </div>
                <h3 className="mt-5 font-serif text-4xl font-bold">El asombro comienza antes de cruzar la puerta</h3>
                <p className="mt-5 text-sm leading-relaxed text-white/64">
                  La entrada se activa con un supercar exotico rojo sangre, bajo luz cenital, como
                  simbolo de estatus, poder y apropiacion del espacio. Puede ser Ferrari, McLaren o Porsche GT3 RS.
                </p>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <article className="overflow-hidden rounded-[2rem] border border-white/8 bg-[#0b0b0b]">
              <div className="relative">
                <img
                  src="/events/arkana/gem.jpg"
                  alt="Esmeralda certificada"
                  className="aspect-[16/10] w-full object-cover bg-black"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 text-[#cf3b3b]">
                  <Gem className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-[0.32em]">El Legado: La Esmeralda</span>
                </div>
                <h3 className="mt-5 font-serif text-4xl font-bold">Ostentacion pura en el climax de la noche</h3>
                <p className="mt-5 text-sm leading-relaxed text-white/64">
                  La Esmeralda Colombiana Certificada no se plantea como un premio cualquiera, sino
                  como el traspaso de un fragmento del Reino de Abrakadabra a un elegido.
                </p>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#090909] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a90e0e]">
                  Unidad Escarlata
                </span>
                <h2 className="mt-5 font-serif text-4xl font-bold sm:text-5xl">
                  100% Strictly Red Code
                </h2>
                <p className="mt-7 text-base leading-relaxed text-white/68">
                  La estetica es ley. El evento exige rojo absoluto para construir una masa visual
                  impactante y convertir a cada asistente en parte del ritual.
                </p>
                <div className="mt-8 rounded-[1.5rem] border border-[#8c0a0a]/30 bg-[#120707] px-6 py-6">
                  <p className="font-serif text-2xl italic text-white">
                    "Quien no viste de rojo, no pertenece al Ritual."
                  </p>
                  <p className="mt-4 text-sm uppercase tracking-[0.28em] text-[#cf3b3b]">
                    La elegancia es el arma. El rojo es la municion.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-black">
                <img
                  src="/events/arkana/runway.jpg"
                  alt="Codigo rojo"
                  className="aspect-[4/3] h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#060606] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="max-w-4xl">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a90e0e]">
                Bautismo: Los Nombres
              </span>
              <h2 className="mt-5 font-serif text-4xl font-bold sm:text-5xl">
                Una misma linea de misterio, ritual y exclusividad
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {namingOptions.map((option, index) => (
              <ScrollReveal key={option.name} delay={index * 90}>
                <div
                  className={`rounded-[1.6rem] border px-6 py-7 ${
                    option.active
                      ? "border-[#8c0a0a]/40 bg-[#120909]"
                      : "border-white/8 bg-[#0c0c0c]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-serif text-3xl font-bold">{option.name}</h3>
                    {option.active && (
                      <span className="rounded-full border border-[#cf3b3b]/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#cf3b3b]">
                        Principal
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/62">{option.meaning}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#090909] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a90e0e]">
                Ejecucion Tecnica
              </span>
              <h2 className="mt-5 font-serif text-4xl font-bold sm:text-5xl">
                Los pilares reales del evento
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {executionPillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 90}>
                <article className="rounded-[1.75rem] border border-white/8 bg-[#0c0c0c] p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8c0a0a]/12 text-[#cf3b3b]">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-serif text-3xl font-bold">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/64">{pillar.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="historia" className="relative overflow-hidden bg-[#050505] py-24 scroll-mt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(140,10,10,0.18),transparent_32%)]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 text-[#cf3b3b]">
              <Trophy className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em]">Cierre</span>
            </div>
            <h2 className="mt-5 font-serif text-5xl font-bold sm:text-6xl">
              Hacemos historia?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/66">
              ARKANA no se plantea como una noche comun. Se plantea como un momento memorable para
              Coffee Club y Abrakadabra: visualmente dominante, musicalmente progresivo y construido
              para dejar legado.
            </p>
            <p className="mt-8 text-sm uppercase tracking-[0.3em] text-[#cf3b3b]">
              Abrakadabrarealm.com
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/events"
                className="inline-flex items-center gap-3 rounded-full border border-white/16 px-8 py-4 text-sm font-semibold tracking-[0.2em] text-white transition-all duration-300 hover:bg-white/8"
              >
                Volver A Eventos
              </a>
              <a
                href="https://wa.me/573103920569?text=Hola%2C%20me%20interesa%20ARKANA.%20%C2%BFMe%20puedes%20compartir%20mas%20detalles%20y%20el%20RSVP%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#8c0a0a] px-8 py-4 text-sm font-semibold tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#a10f0f] hover:shadow-xl hover:shadow-[#8c0a0a]/30"
              >
                Solicitar Informacion
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <LuxuryFooter />
    </main>
  )
}
