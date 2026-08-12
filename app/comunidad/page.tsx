import Link from "next/link"
import {
  ArrowRight,
  BadgeDollarSign,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  Handshake,
  Mic2,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
} from "lucide-react"

import { LuxuryFooter } from "@/components/luxury-footer"
import { LuxuryHeader } from "@/components/luxury-header"
import { cn } from "@/lib/utils"

const benefits = [
  {
    title: "Conexiones & Networking",
    description:
      "Conecta con miembros de marketing, ventas, fotografia, video, diseno, musica, eventos, tecnologia, negocios y servicios profesionales.",
    icon: Handshake,
  },
  {
    title: "Marketplace privado",
    description:
      "Publica productos, servicios, oportunidades, busquedas de talento y proveedores dentro de una red curada.",
    icon: Store,
  },
  {
    title: "Realm Benefits",
    description:
      "Accede a beneficios en moda, joyeria, automoviles, eventos, restaurantes, servicios, entretenimiento y experiencias.",
    icon: Sparkles,
  },
  {
    title: "Abrakadabra Academy",
    description:
      "Contenido privado sobre marketing, ventas, negocios, marca personal, contenido, herramientas digitales y crecimiento.",
    icon: GraduationCap,
  },
  {
    title: "Realm Affiliates",
    description:
      "Los miembros aprobados podran acceder a programas de comisiones por referidos, ventas, productos o campanas seleccionadas.",
    icon: BadgeDollarSign,
  },
  {
    title: "Paquetes para emprendedores",
    description:
      "Oportunidades seleccionadas para comprar, promocionar, vender y generar margen en categorias disponibles.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Realm Business Meetings",
    description:
      "Encuentros online y presenciales para presentar proyectos, conocer empresarios y crear colaboraciones reales.",
    icon: CalendarDays,
  },
  {
    title: "Realm Artists",
    description:
      "Espacio privado para artistas, DJs, productores y creativos con colaboraciones, feedback, workshops y convocatorias.",
    icon: Mic2,
  },
]

const processSteps = [
  {
    number: "01",
    title: "Solicitud",
    description: "Completa tu aplicacion y cuentanos quien eres, que haces y que estas construyendo.",
  },
  {
    number: "02",
    title: "Preguntas",
    description: "Queremos entender que puedes aportar, que buscas y que tipo de conexiones quieres crear.",
  },
  {
    number: "03",
    title: "Revision",
    description: "Nuestro equipo revisa tu perfil para validar si encaja con la energia y proposito del Realm.",
  },
  {
    number: "04",
    title: "Llamada",
    description: "Algunos candidatos tendran una breve llamada de admision antes de recibir respuesta final.",
  },
  {
    number: "05",
    title: "Aprobacion",
    description: "Si tu perfil es aceptado, se habilita tu usuario y recibes acceso a la comunidad.",
  },
]

const conditions = [
  {
    title: "Aportar",
    text: "No necesitas tener una gran empresa. Necesitas aportar conocimiento, talento, contactos, experiencia, creatividad, servicios o ganas reales de construir.",
  },
  {
    title: "Respetar",
    text: "Cero spam, estafas, discriminacion o practicas comerciales enganosas. Las relaciones se construyen con profesionalismo y respeto.",
  },
  {
    title: "Participar",
    text: "Realm no esta disenado para acumular usuarios. Esta disenado para crear conexiones reales, colaboracion y oportunidades.",
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
    <main className="min-h-screen bg-background text-foreground">
      <LuxuryHeader />

      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-foreground px-5 pb-16 pt-32 text-background sm:px-6 lg:px-8">
        <img
          src="/home/joinus-home.webp"
          alt="Abrakadabra Realm community"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary">
              Comunidad privada
            </p>
            <h1 className="mt-6 font-serif text-5xl font-bold leading-none text-balance sm:text-6xl lg:text-8xl">
              Abrakadabra Realm
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-background/85 sm:text-2xl">
              Donde las conexiones se convierten en oportunidades.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-background/70 sm:text-lg">
              Una comunidad privada para emprendedores, empresarios, creativos,
              artistas y personas que quieren crecer, conectar, vender,
              colaborar y crear nuevas oportunidades de negocio.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/join-us#join-contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Aplicar a la comunidad
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#beneficios"
                className="inline-flex items-center justify-center rounded-full border border-background/30 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:border-background hover:bg-background/10"
              >
                Ver beneficios
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="bg-background px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Beneficios
              </p>
              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                Aqui no solo vienes a aprender.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground lg:ml-auto">
              Vienes a conectar, crear, vender, colaborar y crecer con una red
              donde tu proximo cliente, socio, proveedor o proyecto puede estar
              a una conversacion de distancia.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground px-5 py-20 text-background sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                No todos entran
              </p>
              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Realm tiene proceso de admision.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-background/70">
                Crear una cuenta no significa obtener acceso automaticamente.
                Cada solicitud pasa por un filtro para cuidar la calidad de la
                comunidad y asegurar que todos puedan aportar.
              </p>
            </div>

            <div className="grid gap-3">
              {processSteps.map((step, index) => (
                <article
                  key={step.number}
                  className={cn(
                    "grid gap-4 rounded-2xl border border-background/10 bg-background/[0.04] p-5 sm:grid-cols-[80px_1fr]",
                    index === 0 && "border-primary/40 bg-primary/10"
                  )}
                >
                  <span className="font-serif text-4xl font-bold text-primary">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-background/70">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Condiciones
            </p>
            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Las 3 condiciones para pertenecer a Realm
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {conditions.map((condition, index) => (
              <article
                key={condition.title}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <span className="font-serif text-4xl font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-serif text-2xl font-bold text-foreground">
                  {condition.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {condition.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/35 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Realm Opportunities
            </p>
            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Un espacio para convertir necesidades en oportunidades.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Dentro de la comunidad podras publicar lo que estas buscando,
              ofrecer tus servicios y encontrar personas con quienes construir
              proyectos, ventas y colaboraciones.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {opportunities.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-border bg-background px-5 py-4"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-foreground px-5 py-20 text-background sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Enter the Realm
          </p>
          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-6xl">
            Tu dinero no define tu acceso.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-background/70">
            Tus ideas, tu talento, tu actitud y tu capacidad de aportar son lo
            que buscamos.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/join-us#join-contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Quiero unirme
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/cursos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-background/25 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-background transition-colors hover:border-background hover:bg-background/10"
            >
              Ver Academy
              <Search className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <LuxuryFooter />
    </main>
  )
}
