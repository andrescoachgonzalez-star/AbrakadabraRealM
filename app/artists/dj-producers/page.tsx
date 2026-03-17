"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Disc3, ClipboardPen, MessageSquareText, Scale, BadgeCheck, X } from "lucide-react"
import { LuxuryHeader } from "@/components/luxury-header"

type DJProducer = {
  name: string
  slug: string
  image: string
  hoverImage?: string
  modalImage?: string
  description: string
  type: "pdf" | "modal"
  pdfUrl: string
  fullBio: string
}

const pageImages = {
  hero: "/Image-DJs/imagen-1.png",
  eventFestival: "/Image-DJs/imagen-2.jpg",
  eventPrivate: "/Image-DJs/imagen-3.webp",
  eventClub: "/Image-DJs/imagen-4.jpg",
  philosophy: "/Image-DJs/imagen-5.webp",
  form: "/Image-DJs/imagen-1.png",
}

const djProducers: DJProducer[] = [
  {
    name: "Mara",
    slug: "mara",
    image: "/Image-DJs/mara.png",
    hoverImage: "/Image-DJs/Mara.webp",
    modalImage: "/Image-DJs/Mara.webp",
    description:
      "An icon of Colombian electronic music in the world DJ Mara, stage name of Juan Carlos, is a Colombian DJ and music producer who has captivated audiences worldwide...",
    type: "pdf",
    pdfUrl: "/artists/pdfs/dj-mara-presskit.pdf",
    fullBio: "",
  },
  {
    name: "Mulan",
    slug: "mulan",
    image: "/Image-DJs/mulan.png",
    hoverImage: "/Image-DJs/Mulan.webp",
    modalImage: "/Image-DJs/Mulan.webp",
    description:
      "Mulan Vibes is a rising DJ and producer known for her electrifying presence and dynamic performances that blend Latin rhythms with electronic beats...",
    type: "modal",
    pdfUrl: "",
    fullBio:
      "Mulan Vibes is a rising DJ and producer known for her electrifying presence and dynamic performances. Specializing in House, Tech House, and Afro House, Mulan Vibes has been blends and creative productions reflect her passion for music and her ability to connect deeply with her crowd. As her career reckoned with in the global electronic music scene.",
  },
  {
    name: "Joseph Ren",
    slug: "joseph-ren",
    image: "/Image-DJs/josep.png",
    hoverImage: "/Image-DJs/Joseph-Ren.webp",
    modalImage: "/Image-DJs/Joseph-Ren.webp",
    description:
      "Juan Jose rivera rendon from Colombia also known as Joseph Ren, his passion for music has existed since childhood, creating unforgettable experiences...",
    type: "pdf",
    pdfUrl: "/artists/pdfs/joseph-ren-presskit.pdf",
    fullBio: "",
  },
  {
    name: "Rizzo",
    slug: "rizzo",
    image: "/Image-DJs/Rizzo.png",
    hoverImage: "/Image-DJs/Rizzo.png",
    modalImage: "/Image-DJs/Rizzo.png",
    description:
      "Rizzo (Col) is a DJ and producer from Pereira, Colombia specializing in House and Tech House with a unique sound that blends organic percussion and deep grooves...",
    type: "pdf",
    pdfUrl: "/artists/pdfs/rizzo-presskit.pdf",
    fullBio: "",
  },
  {
    name: "8batzz",
    slug: "8batzz",
    image: "/Image-DJs/8batzz.png",
    hoverImage: "/Image-DJs/8batzz.png",
    modalImage: "/Image-DJs/8batzz.png",
    description:
      "8batzz is a DJ and electronic music producer from Pereira, Colombia. Since 2021 he has developed a solid proposal within Afro House and Tech House...",
    type: "pdf",
    pdfUrl: "/artists/pdfs/8batzz-presskit.pdf",
    fullBio: "",
  },
]

const eventCategories = [
  {
    title: "Festivals & Live Shows",
    description: "Top-tier artists to make your festival or show unforgettable.",
    image: pageImages.eventFestival,
  },
  {
    title: "Public & Private Events",
    description: "Exceptional performances crafted to elevate and personalize your events.",
    image: pageImages.eventPrivate,
  },
  {
    title: "Clubs, Bars & Restaurants",
    description: "Premium entertainment designed to enhance your venue's atmosphere.",
    image: pageImages.eventClub,
  },
]

const hiringSteps = [
  { number: 1, title: "See our Dj's", icon: Disc3 },
  { number: 2, title: "Fill out the form", icon: ClipboardPen },
  { number: 3, title: "Tell us all the details", icon: MessageSquareText },
  { number: 4, title: "Negotiation", icon: Scale },
  { number: 5, title: "Hiring", icon: BadgeCheck },
]

function MulanModal({ dj, onClose }: { dj: DJProducer; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#1a1a1a] rounded-2xl overflow-hidden max-w-3xl w-full border border-white/10 shadow-2xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 relative aspect-square md:aspect-auto">
            <img
              src={dj.modalImage || dj.hoverImage || dj.image || "/placeholder.svg"}
              alt={dj.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[160px] border-t-[oklch(0.55_0.18_20)] border-l-[160px] border-l-transparent opacity-80" />
            <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[120px] border-b-[oklch(0.55_0.18_20)]/60 border-l-[120px] border-l-transparent" />
          </div>

          <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-4xl font-bold text-white font-serif mb-5">{dj.name}</h3>
            <p className="text-white/60 text-sm leading-relaxed text-justify">{dj.fullBio}</p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full py-4 bg-gradient-to-r from-[oklch(0.55_0.18_20)] to-[oklch(0.45_0.2_10)] text-white font-bold tracking-widest text-sm"
        >
          Hire this artist
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

function DJCard({ dj, index }: { dj: DJProducer; index: number }) {
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()

  const handleSeeMore = () => {
    if (dj.type === "modal") {
      setShowModal(true)
      return
    }

    router.push(`/artists/dj-producers/${dj.slug}`)
  }

  const handleHire = () => {
    const section = document.getElementById("hire-form")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.12 }}
        className="group"
      >
        <div className="bg-gradient-to-b from-[#1e1e1e] to-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-[oklch(0.55_0.18_20)]/30 transition-all duration-500">
          <div className="relative aspect-[4/5] overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <img
                src={dj.image || "/placeholder.svg"}
                alt={dj.name}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  dj.hoverImage ? "opacity-100 group-hover:opacity-0" : "opacity-100"
                }`}
              />

              {dj.hoverImage && (
                <img
                  src={dj.hoverImage}
                  alt={`${dj.name} alternate`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              )}
            </motion.div>

            <div className="absolute top-0 right-0 w-0 h-0 border-t-[120px] border-t-[oklch(0.55_0.18_20)] border-l-[120px] border-l-transparent opacity-80" />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-20">
              <p className="text-white/60 text-xs tracking-wider">Dj -- Producer</p>
              <h3 className="text-white text-4xl font-bold font-serif mt-1">{dj.name}</h3>
            </div>
          </div>

          <div className="flex border-b border-white/10 px-3 py-2">
            <div className="flex-1 py-3 text-sm font-bold tracking-wider bg-[oklch(0.55_0.18_20)] text-white rounded-full text-center">
              FEED
            </div>
          </div>

          <div className="p-6">
            <p className="text-white/60 text-sm leading-relaxed">{dj.description}</p>

            <motion.button
              onClick={handleSeeMore}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4 py-2.5 bg-[#333] text-white/80 text-sm tracking-wider rounded-sm hover:bg-[#444] transition-colors flex items-center justify-center gap-2"
            >
              See more
              <ChevronDown className="w-4 h-4" />
            </motion.button>
          </div>

          <motion.button
            onClick={handleHire}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-[oklch(0.55_0.18_20)] to-[oklch(0.45_0.2_10)] text-white font-bold tracking-widest text-sm hover:shadow-lg hover:shadow-[oklch(0.55_0.18_20)]/30 transition-all duration-300"
          >
            HIRE THIS ARTIST
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && dj.type === "modal" && <MulanModal dj={dj} onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </>
  )
}

export default function DJProducersPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: "",
    artist: "",
    eventType: "",
    message: "",
  })

  return (
    <main className="min-h-screen bg-[#111] overflow-x-hidden">
      <LuxuryHeader />

      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src={pageImages.hero}
          alt="DJ performing at festival"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#111]" />

        <div className="relative text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight font-serif uppercase"
          >
            OUR DJ/PRODUCERS
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <motion.a
              href="#hire-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex px-10 py-4 bg-[oklch(0.55_0.18_20)] text-white font-bold tracking-wider rounded-lg hover:shadow-xl hover:shadow-[oklch(0.55_0.18_20)]/30 transition-all duration-300 items-center gap-3 mx-auto"
            >
              Hire DJ -- Producers
              <ChevronDown className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#111] relative">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16 font-serif"
          >
            How to hire ours <span className="text-[oklch(0.55_0.18_20)]">DJ</span> -- Producers
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {hiringSteps.map((step, index) => {
              const IconComponent = step.icon

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 120,
                    damping: 14,
                  }}
                  className="group"
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-[oklch(0.55_0.18_20)]/60 transition-all duration-500 shadow-lg shadow-black/30 group-hover:shadow-[oklch(0.55_0.18_20)]/15 bg-[#1a1a1a]"
                  >
                    <motion.div
                      className="h-1 bg-gradient-to-r from-[oklch(0.55_0.18_20)] to-[oklch(0.45_0.2_10)]"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    />

                    <div className="px-5 pt-6 pb-5 flex flex-col items-center text-center">
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                        className="text-[oklch(0.55_0.18_20)] text-xs font-bold tracking-[0.25em] uppercase mb-4"
                      >
                        Step {step.number}
                      </motion.span>

                      <motion.div
                        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-[oklch(0.55_0.18_20)] to-[oklch(0.45_0.2_10)] flex items-center justify-center mb-5 shadow-lg shadow-[oklch(0.55_0.18_20)]/20"
                      >
                        <IconComponent className="w-9 h-9 text-white" strokeWidth={1.8} />
                      </motion.div>

                      <h4 className="text-white font-semibold text-sm tracking-wide leading-tight">{step.title}</h4>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111]">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif"
          >
            <span className="text-[oklch(0.55_0.18_20)]">DJ</span> -- Producers
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-20 h-0.5 bg-[oklch(0.55_0.18_20)] mb-12 origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {djProducers.map((dj, index) => (
              <DJCard key={dj.name} dj={dj} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[70vh]">
            {eventCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative rounded-xl overflow-hidden group cursor-pointer border border-[oklch(0.55_0.18_20)]/20 min-h-[400px]"
              >
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-serif mb-2 text-center">
                    {category.title}
                  </h3>

                  <div className="flex justify-center my-3">
                    <svg width="80" height="10" viewBox="0 0 80 10" fill="none">
                      <path
                        d="M0 5C5 0 10 10 15 5C20 0 25 10 30 5C35 0 40 10 45 5C50 0 55 10 60 5C65 0 70 10 75 5"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>

                  <p className="text-white/70 text-sm text-center leading-relaxed mb-4">{category.description}</p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block mx-auto px-6 py-2 border border-white text-white text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
                  >
                    Explore Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <img
          src={pageImages.philosophy}
          alt="DJ performing at festival"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[oklch(0.55_0.18_20)]/40 to-transparent origin-top hidden lg:block"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[oklch(0.55_0.18_20)]/40 to-transparent origin-bottom hidden lg:block"
        />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <motion.span
                animate={{ width: [0, 40] }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="h-px bg-[oklch(0.55_0.18_20)] inline-block"
              />
              <span className="text-[oklch(0.55_0.18_20)] text-sm tracking-[0.3em] uppercase">Who We Are</span>
              <motion.span
                animate={{ width: [0, 40] }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="h-px bg-[oklch(0.55_0.18_20)] inline-block"
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-serif mb-4"
            >
              Our
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-10 italic text-[oklch(0.55_0.18_20)]"
            >
              Philosophy
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12"
            >
              The philosophy of Abrakadabra artists is rooted in authenticity, personal growth, and constant
              innovation. We believe in the power of art and music to transform reality and elevate collective
              consciousness, creating experiences that inspire reflection, deep connection, and positive change.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { title: "Authenticity", desc: "Staying true to our roots and artistic vision" },
                { title: "Innovation", desc: "Exploring new creative territories without limits" },
                { title: "Connection", desc: "Creating experiences that unite and inspire" },
              ].map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                  className="group"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="border border-white/10 rounded-xl p-8 backdrop-blur-sm bg-white/5 hover:border-[oklch(0.55_0.18_20)]/40 transition-all duration-500"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.15, type: "spring", stiffness: 200 }}
                      className="w-12 h-12 rounded-full bg-[oklch(0.55_0.18_20)]/10 border border-[oklch(0.55_0.18_20)]/30 flex items-center justify-center mx-auto mb-5"
                    >
                      <span className="text-[oklch(0.55_0.18_20)] font-bold font-serif text-lg">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </motion.div>

                    <h4 className="text-white font-bold text-xl font-serif mb-3">{pillar.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{pillar.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

 {/*
<section id="hire-form" className="py-0 overflow-hidden scroll-mt-24">
  <div className="flex flex-col lg:flex-row min-h-[700px]">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="lg:w-1/2 relative"
    >
      <img
        src={pageImages.form}
        alt="Artist performing"
        className="w-full h-full object-cover min-h-[400px]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="lg:w-1/2 bg-white p-12 md:p-16 flex flex-col justify-center"
    >
      <h3 className="text-2xl font-bold text-[oklch(0.55_0.18_20)] text-center mb-1 font-serif">
        Complete the form
      </h3>
      <p className="text-black/50 text-center mb-8">to hire our artists</p>

      <div className="space-y-4 max-w-lg mx-auto w-full">
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          className="w-full px-5 py-3.5 border border-black/20 rounded-lg text-sm focus:outline-none focus:border-[oklch(0.55_0.18_20)] transition-colors text-black placeholder:text-black/40"
        />

        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          className="w-full px-5 py-3.5 border border-black/20 rounded-lg text-sm focus:outline-none focus:border-[oklch(0.55_0.18_20)] transition-colors text-black placeholder:text-black/40"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-5 py-3.5 border border-black/20 rounded-lg text-sm focus:outline-none focus:border-[oklch(0.55_0.18_20)] transition-colors text-black placeholder:text-black/40"
        />

        <div className="grid grid-cols-2 gap-4">
          <select
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full px-5 py-3.5 border border-black/20 rounded-lg text-sm focus:outline-none focus:border-[oklch(0.55_0.18_20)] transition-colors text-black/40 bg-white"
          >
            <option value="">Select Country</option>
            <option value="colombia">Colombia</option>
            <option value="usa">United States</option>
            <option value="mexico">Mexico</option>
            <option value="spain">Spain</option>
            <option value="other">Other</option>
          </select>

          <input
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-5 py-3.5 border border-black/20 rounded-lg text-sm focus:outline-none focus:border-[oklch(0.55_0.18_20)] transition-colors text-black placeholder:text-black/40"
          />
        </div>

        <select
          value={formData.artist}
          onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
          className="w-full px-5 py-3.5 border border-black/20 rounded-lg text-sm focus:outline-none focus:border-[oklch(0.55_0.18_20)] transition-colors text-black/40 bg-white"
        >
          <option value="">Select Artist</option>
          {djProducers.map((dj) => (
            <option key={dj.name} value={dj.name}>
              {dj.name}
            </option>
          ))}
        </select>

        <select
          value={formData.eventType}
          onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
          className="w-full px-5 py-3.5 border border-black/20 rounded-lg text-sm focus:outline-none focus:border-[oklch(0.55_0.18_20)] transition-colors text-black/40 bg-white"
        >
          <option value="">Event Type</option>
          <option value="festival">Festival</option>
          <option value="private">Private Event</option>
          <option value="club">Club / Bar</option>
          <option value="corporate">Corporate</option>
          <option value="other">Other</option>
        </select>

        <textarea
          placeholder="Tell us more about your event, location, number of guests, what do you have in mind?"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-5 py-3.5 border border-black/20 rounded-lg text-sm focus:outline-none focus:border-[oklch(0.55_0.18_20)] transition-colors resize-none text-black placeholder:text-black/40"
        />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-gradient-to-r from-[oklch(0.55_0.18_20)] to-[oklch(0.45_0.2_10)] text-white font-bold tracking-wider rounded-lg hover:shadow-xl hover:shadow-[oklch(0.55_0.18_20)]/30 transition-all duration-300"
        >
          Submit Form
        </motion.button>
      </div>
    </motion.div>
  </div>
</section>
*/}

<div className="h-2 bg-gradient-to-r from-[oklch(0.55_0.18_20)] via-[oklch(0.45_0.2_10)] to-[oklch(0.55_0.18_20)]" />
</main>
)
}