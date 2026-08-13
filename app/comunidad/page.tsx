import Link from "next/link"
import {
  ArrowRight,
  BadgeDollarSign,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  Handshake,
  LockKeyhole,
  Mic2,
  Search,
  Shield,
  Sparkles,
  Store,
  Users,
} from "lucide-react"

import { LuxuryFooter } from "@/components/luxury-footer"
import { LuxuryHeader } from "@/components/luxury-header"
import { ScrollReveal } from "@/components/scroll-reveal"

const realmStats = [
  { value: "01", label: "Red curada" },
  { value: "05", label: "Filtros de ingreso" },
  { value: "24/7", label: "Oportunidades activas" },
]

const benefits = [
  {
    title: "Networking",
    description:
      "Conecta con marketing, ventas, fotografia, video, diseno, musica, eventos, tecnologia, negocios y servicios profesionales.",
    icon: Handshake,
  },
  {
    title: "Marketplace privado",
    description:
      "Publica productos, servicios, oportunidades, busquedas de talento, proveedores y aliados dentro de una red seleccionada.",
    icon: Store,
  },
  {
    title: "Realm Benefits",
    description:
      "Beneficios en moda, joyeria, automoviles, eventos, restaurantes, servicios, entretenimiento y experiencias.",
    icon: Sparkles,
  },
  {
    title: "Abrakadabra Academy",
    description:
      "Cursos privados sobre marketing, ventas, negocios, marca personal, contenido, tecnologia y crecimiento.",
    icon: GraduationCap,
  },
]

const businessPillars = [
  {
    title: "Realm Affiliates",
    text: "Miembros aprobados podran acceder a comisiones por referidos, productos, ventas, servicios seleccionados y campanas especiales.",
    icon: BadgeDollarSign,
  },
  {
    title: "Paquetes emprendedores",
    text: "Oportunidades para comprar, promocionar, vender y generar margen en moda, accesorios, joyeria, servicios y experiencias.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Business Meetings",
    text: "Encuentros privados online y presenciales para presentar proyectos, conocer empresarios y crear colaboraciones reales.",
    icon: CalendarDays,
  },
  {
    title: "Realm Artists",
    text: "Espacio para artistas, DJs, productores y creativos con feedback, workshops, networking y convocatorias privadas.",
    icon: Mic2,
  },
]

const admissionSteps = [
  {
    number: "01",
    title: "Solicitud",
    description: "Completa tu aplicacion y cuentanos quien eres, que haces y que estas construyendo.",
  },
  {
    number: "02",
    title: "Preguntas",
    description: "Queremos entender que aportas, que buscas y que tipo de conexiones quieres crear.",
  },
  {
    number: "03",
    title: "Revision",
    description: "El equipo revisa tu perfil para validar si encaja con la energia y proposito del Realm.",
  },
  {
    number: "04",
    title: "Llamada",
    description: "Algunos candidatos tendran una breve llamada antes de recibir respuesta final.",
  },
  {
    number: "05",
    title: "Aprobacion",
    description: "Si tu perfil es aceptado, se habilita tu usuario y recibes acceso privado.",
  },
]

const conditions = [
  {
    title: "Aportar",
    text: "Conocimiento, talento, contactos, experiencia, creatividad, servicios o ganas reales de construir.",
  },
  {
    title: "Respetar",
    text: "Cero spam, estafas, discriminacion o practicas comerciales enganosas dentro del Realm.",
  },
  {
    title: "Participar",
    text: "Esta comunidad no acumula usuarios. Crea conexiones, colaboracion y oportunidades reales.",
  },
]

const opportunities = [
  "Busco socio",
  "Busco inversion",
  "Busco clientes",
  "Busco talento",
  "Ofrezco mis servicios",
  "Quiero colaborar",
]

export default function ComunidadPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <LuxuryHeader />

      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/home/joinus-home.webp"
            alt="Abrakadabra Realm"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/86 to-black/58" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/35" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-16 pt-36 sm:px-6 sm:pb-20 lg:pb-24">
          <div className="max-w-5xl">
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#cf3b3b]">
              <span className="h-px w-10 bg-[#7b0b0b] sm:w-12" />
              Comunidad Privada
            </span>

            <h1 className="mt-7 font-serif text-5xl font-bold leading-[0.9] sm:text-7xl md:text-8xl lg:text-[9rem]">
              REALM
            </h1>

            <p className="mt-6 max-w-3xl font-serif text-2xl italic leading-relaxed text-white/86 sm:text-3xl">
              "Donde las conexiones se convierten en oportunidades."
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[#cf3b3b] sm:text-sm">
              Enter the Realm. Build your network. Create your opportunity.
            </p>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Abrakadabra Realm es una comunidad privada para emprendedores,
              empresarios, creativos, artistas y personas que quieren crecer,
              conectar, vender, colaborar y construir nuevas oportunidades de negocio.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/join-us#join-contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#8c0a0a] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#a10f0f] hover:shadow-xl hover:shadow-[#8c0a0a]/30 sm:px-8 sm:text-sm"
              >
                Aplicar
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#beneficios"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 transition-all duration-300 hover:bg-white/8 sm:px-8 sm:text-sm"
              >
                Ver Beneficios
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#090909] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-[#7b0b0b]/40 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
              <img
                src="/home/events-home.webp"
                alt="Abrakadabra community aesthetic"
                className="aspect-[4/5] h-full w-full object-cover sm:aspect-[5/6]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[#cf3b3b] sm:text-sm">
                  La Logia
                </p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/72">
                  No entras a una lista. Entras a una red con intencion.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a90e0e]">
                Red Curada
              </span>
              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Aqui no solo vienes a aprender.
              </h2>
              <div className="mt-7 h-px w-24 bg-[#7b0b0b]" />
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/68">
                Vienes a conectar, crear, vender, colaborar y crecer con una red
                donde tu proximo cliente, socio, proveedor o proyecto puede estar
                a una conversacion de distancia.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {realmStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] px-5 py-5"
                  >
                    <p className="font-serif text-4xl font-bold text-[#cf3b3b]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/55">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="beneficios" className="bg-[#060606] py-20 scroll-mt-24 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <ScrollReveal>
            <div className="max-w-4xl">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a90e0e]">
                Beneficios De Comunidad
              </span>
              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Un sistema privado para transformar contactos en movimiento.
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 90}>
                <article className="h-full rounded-[1.75rem] border border-white/8 bg-[#0c0c0c] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8c0a0a]/45 sm:p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8c0a0a]/12 text-[#cf3b3b]">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-bold sm:text-3xl">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/64">
                    {benefit.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#090909] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ScrollReveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a90e0e]">
                Negocio, Talento Y Cultura
              </span>
              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Realm esta disenado para que el talento circule.
              </h2>
              <p className="mt-7 text-base leading-relaxed text-white/68">
                Antes de buscar afuera, queremos descubrir que talento existe
                dentro del Realm: artistas, vendedores, productores, marketers,
                editores, disenadores, tecnicos, aliados y empresarios.
              </p>
              <div className="mt-8 rounded-[1.5rem] border border-[#8c0a0a]/30 bg-[#120707] px-6 py-6">
                <p className="font-serif text-2xl italic text-white">
                  "Tu red tambien puede generar ingresos."
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.28em] text-[#cf3b3b]">
                  Conecta. Recomienda. Genera.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {businessPillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 90}>
                <article className="h-full rounded-[1.6rem] border border-white/8 bg-[#0c0c0c] p-6">
                  <div className="flex items-center gap-3 text-[#cf3b3b]">
                    <pillar.icon className="h-5 w-5" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em]">
                      Realm
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-bold">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/62">{pillar.text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#060606] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-black">
              <img
                src="/joinus/joinus1.webp"
                alt="Private community access"
                className="aspect-[4/3] h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-[#cf3b3b]">
                  Acceso Privado
                </p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/72">
                  Crear una cuenta no significa obtener entrada automatica.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div>
              <div className="flex items-center gap-3 text-[#cf3b3b]">
                <LockKeyhole className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.35em]">
                  No Todos Entran
                </span>
              </div>
              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Realm tiene proceso de admision.
              </h2>
              <p className="mt-7 text-base leading-relaxed text-white/68">
                Cada solicitud pasa por un filtro antes de que el usuario sea
                aprobado. El objetivo es cuidar la calidad de la comunidad,
                proteger las relaciones y asegurar que todos puedan aportar.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="mx-auto mt-14 max-w-7xl px-5 sm:px-6">
          <div className="grid gap-4 md:grid-cols-5">
            {admissionSteps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 75}>
                <article className="h-full rounded-[1.6rem] border border-white/8 bg-[#0c0c0c] p-5">
                  <p className="font-serif text-4xl font-bold text-[#cf3b3b]">
                    {step.number}
                  </p>
                  <h3 className="mt-5 font-serif text-2xl font-bold">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/62">
                    {step.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#090909] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a90e0e]">
                Las Condiciones
              </span>
              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Para pertenecer, primero hay que aportar.
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {conditions.map((condition, index) => (
              <ScrollReveal key={condition.title} delay={index * 90}>
                <article className="h-full rounded-[1.75rem] border border-white/8 bg-[#0c0c0c] p-7">
                  <span className="font-serif text-4xl font-bold text-[#cf3b3b]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-serif text-3xl font-bold">{condition.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/64">
                    {condition.text}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#060606] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ScrollReveal>
            <div>
              <div className="flex items-center gap-3 text-[#cf3b3b]">
                <Search className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.35em]">
                  Realm Opportunities
                </span>
              </div>
              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Publica lo que buscas. Encuentra con quien construir.
              </h2>
              <p className="mt-7 text-base leading-relaxed text-white/68">
                La comunidad esta disenada para que las conexiones se conviertan
                en oportunidades reales: proyectos, clientes, socios, talento,
                servicios, inversiones y colaboraciones.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {opportunities.map((item, index) => (
              <ScrollReveal key={item} delay={index * 60}>
                <div className="flex min-h-16 items-center gap-3 rounded-[1.25rem] border border-white/8 bg-[#0c0c0c] px-5 py-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#cf3b3b]" />
                  <span className="text-sm font-semibold uppercase tracking-[0.16em] text-white/82">
                    {item}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#090909] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-black">
              <img
                src="/home/abrakadabra-p-home.jpg"
                alt="Abrakadabra philosophy"
                className="aspect-[16/11] h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-[#cf3b3b]">
                  Filosofia Abrakadabra
                </p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/72">
                  La comunidad nace de una vision mas grande que un producto o un curso.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div>
              <div className="flex items-center gap-3 text-[#cf3b3b]">
                <BookOpen className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.35em]">
                  Conoce Nuestra Filosofia
                </span>
              </div>
              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Entiende el trabajo y la vision detras de Abrakadabra.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/68">
                Si quieres conocer mas a detalle nuestra filosofia, el proposito
                que sostiene este ecosistema y el trabajo que hay detras de la
                marca, entra a la historia completa de Abrakadabra Realm.
              </p>
              <Link
                href="/philosophy"
                className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/16 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white/8 sm:w-auto sm:text-sm"
              >
                Ver Filosofia
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/8 bg-[#050505] py-20 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#120707] via-[#050505] to-black" />
        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6">
          <ScrollReveal>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#cf3b3b]/35 bg-[#8c0a0a]/12 text-[#cf3b3b]">
              <Shield className="h-6 w-6" />
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.35em] text-[#cf3b3b]">
              Tu Dinero No Define Tu Acceso
            </p>
            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-6xl">
              Tus ideas. Tu talento. Tu actitud.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/66 sm:text-lg">
              Eso es lo que buscamos. Si quieres entrar al Realm, aplica y
              cuentanos que quieres construir.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/join-us#join-contact"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#8c0a0a] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#a10f0f] hover:shadow-xl hover:shadow-[#8c0a0a]/30 sm:w-auto sm:text-sm"
              >
                Quiero Unirme
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/cursos"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/16 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white/8 sm:w-auto sm:text-sm"
              >
                Ver Academy
                <Users className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <LuxuryFooter />
    </main>
  )
}
