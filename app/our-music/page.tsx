"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { LuxuryHeader } from "@/components/luxury-header"
import {
  Globe,
  Trophy,
  Briefcase,
  Palette,
  Users,
  Handshake,
  Play,
  Radio,
  Mail,
  ExternalLink,
  ChevronRight,
  ArrowDown,
  Music,
  Disc3,
  Headphones,
} from "lucide-react"

/* --- Images ------------------------------------------------------- */

const ourMusicImages = {
  hero: "/Image-Our-Music/Imagen-1.webp",
  abrakadabraLogo: "/Image-Our-Music/imagen-2.png",
  moodchillLogo: "/Image-Our-Music/Imagen-3.png",
  activities: "/Image-Our-Music/Imagen-4.png",

  darkness: "/Image-Our-Music/Darkness.webp",
  sinPrisa: "/Image-Our-Music/Sin-prisa.webp",
  memorias: "/Image-Our-Music/Memorias.webp",

  miOtroYo: "/Image-Our-Music/Mi-otro-yo.webp",
  esencia: "/Image-Our-Music/Esencia.webp",
  energia: "/Image-Our-Music/Energia.webp",
}

/* --- Types -------------------------------------------------------- */

type Release = {
  title: string
  artist: string
  image: string
  listenUrl: string
}

/* --- Data --------------------------------------------------------- */

const abrakadabraReleases: Release[] = [
  { title: "Darkness", artist: "8batzz", image: ourMusicImages.darkness, listenUrl: "#" },
  { title: "Sin Prisa", artist: "8batzz", image: ourMusicImages.sinPrisa, listenUrl: "#" },
  { title: "Memorias", artist: "Rizzo (Col)", image: ourMusicImages.memorias, listenUrl: "#" },
]

const moodchillReleases: Release[] = [
  { title: "Mi otro yo", artist: "Blasfemia MC", image: ourMusicImages.miOtroYo, listenUrl: "#" },
  { title: "Esencia", artist: "Zinergiabeats", image: ourMusicImages.esencia, listenUrl: "#" },
  { title: "Energia", artist: "L-Mental MC", image: ourMusicImages.energia, listenUrl: "#" },
]

const services = [
  { icon: Globe, label: "REACH", description: "Global distribution across all platforms" },
  { icon: Trophy, label: "STRATEGY", description: "Marketing & branding expertise" },
  { icon: Briefcase, label: "ROYALTIES", description: "Fair and transparent earnings" },
  { icon: Palette, label: "CONTENT", description: "Creative visual & audio content" },
  { icon: Users, label: "NETWORK", description: "Industry connections worldwide" },
  { icon: Handshake, label: "COLLABORATE", description: "Artist partnerships & features" },
]

/* --- Animated divider (wave) -------------------------------------- */

function WaveDivider() {
  return (
    <svg viewBox="0 0 120 12" className="w-24 h-3 text-[oklch(0.55_0.18_20)]">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M${i * 20},6 Q${i * 20 + 5},0 ${i * 20 + 10},6 Q${i * 20 + 15},12 ${i * 20 + 20},6`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  )
}

/* --- Hero Section ------------------------------------------------- */

function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0">
        <Image
          src={ourMusicImages.hero}
          alt="Our Music Background"
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[oklch(0.55_0.18_20)]/20 to-transparent"
            style={{
              top: `${5 + i * 5}%`,
              left: "-100%",
              right: "-100%",
            }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[oklch(0.55_0.18_20)]/5 rounded-full blur-[150px]" />

      <motion.div style={{ opacity, y, scale }} className="relative z-10 text-center px-6">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex justify-center"
        >
          <div className="w-24 h-24 border border-white/20 rounded-full flex items-center justify-center">
            <Music className="w-10 h-10 text-[oklch(0.55_0.18_20)]" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-[oklch(0.55_0.18_20)] text-xs tracking-[0.4em] uppercase mb-6 font-sans"
        >
          Abrakadabra Realm Presents
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-6 tracking-tight text-balance"
        >
          Our Music
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-white/50 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-sans"
        >
          Where ancient rhythms meet modern sound. Two labels, one vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-white/30 mx-auto" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

/* --- Label Section ------------------------------------------------ */

function LabelSection({
  name,
  description,
  logoImage,
  releases,
  accentText,
  platformLinks,
  reverse = false,
}: {
  name: string
  description: string
  logoImage: string
  releases: Release[]
  accentText: string
  platformLinks: { label: string; icon: string; url: string }[]
  reverse?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredRelease, setHoveredRelease] = useState<number | null>(null)

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div
        className={`absolute top-0 w-1/2 h-full ${
          reverse ? "right-0 bg-gradient-to-l" : "left-0 bg-gradient-to-r"
        } from-[oklch(0.55_0.18_20)]/[0.02] to-transparent`}
      />

      <div ref={ref} className="container mx-auto px-6">
        <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-start`}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 60 : -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-5/12 w-full"
          >
            <div className="relative group">
              <div className="relative overflow-hidden rounded-lg aspect-square bg-[#1a1a1a]">
                <Image
                  src={logoImage}
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">{name}</h3>
                <WaveDivider />
                <p className="text-white/70 text-sm leading-relaxed mt-4 font-sans">{description}</p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 px-6 py-2.5 border border-white/30 text-white text-xs tracking-widest uppercase hover:bg-white/10 transition-colors font-sans"
                >
                  Submit Demo
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reverse ? -60 : 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-7/12 w-full"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-10">
              Featured Releases
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {releases.map((release, i) => (
                <motion.div
                  key={release.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  className="group relative cursor-pointer"
                  onMouseEnter={() => setHoveredRelease(i)}
                  onMouseLeave={() => setHoveredRelease(null)}
                >
                  <div className="relative aspect-square overflow-hidden rounded-md">
                    <Image
                      src={release.image}
                      alt={release.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />

                    <AnimatePresence>
                      {hoveredRelease === i && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-black/60 flex items-center justify-center"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="w-12 h-12 rounded-full bg-[oklch(0.55_0.18_20)] flex items-center justify-center"
                          >
                            <Play className="w-5 h-5 text-white ml-0.5" />
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="mt-3">
                    <p className="text-white text-sm font-medium font-sans">{release.title}</p>
                    <p className="text-white/40 text-xs font-sans">{release.artist}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {platformLinks.map((link) => {
                const isBeatport = link.icon === "beatport"

                return (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={
                      isBeatport
                        ? "flex items-center gap-2 px-8 py-3 rounded-full border-2 border-black bg-[#d9d9d9] text-black text-sm font-bold tracking-wider hover:bg-white transition-colors font-sans shadow-sm"
                        : "flex items-center gap-2 px-8 py-3 border border-white/20 rounded-full text-white text-sm tracking-wider hover:border-white/50 transition-colors font-sans"
                    }
                  >
                    {link.icon === "spotify" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                      </svg>
                    )}

                    {link.icon === "youtube" && (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    )}

                    {link.icon === "beatport" && <Headphones className="w-5 h-5" />}

                    {link.label}
                  </motion.a>
                )
              })}
            </div>

            <p className="text-white/40 text-sm italic leading-relaxed font-sans">{accentText}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* --- Services Section --------------------------------------------- */

function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section className="relative py-20 md:py-28 border-t border-white/5 border-b border-b-white/5">
      <div ref={ref} className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-serif font-bold text-white mb-4"
        >
          What We Offer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-white/40 text-sm mb-16 font-sans"
        >
          Everything you need to take your music career to the next level
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.15, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-4 group-hover:border-[oklch(0.55_0.18_20)]/40 transition-colors duration-300"
                >
                  <Icon className="w-7 h-7 text-white/60 group-hover:text-[oklch(0.55_0.18_20)] transition-colors duration-300" />
                </motion.div>
                <p className="text-xs tracking-[0.2em] text-white/70 group-hover:text-white transition-colors font-sans">
                  {service.label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* --- Activities Section ------------------------------------------- */

function ActivitiesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div ref={ref} className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/2 w-full"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Participate in our activities
            </h2>

            <div className="mb-10">
              <WaveDivider />
            </div>

            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full border border-[oklch(0.55_0.18_20)]/30 flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 text-[oklch(0.55_0.18_20)]" />
                </div>
                <h3 className="text-sm tracking-[0.2em] uppercase text-white font-sans font-semibold">
                  Video Sets
                </h3>
              </div>

              <p className="text-white/50 text-sm leading-relaxed font-sans">
                Immerse yourself in the vibrant Afro House experience with our exclusive video sets, designed for those looking for something truly special. Each set will take place in unique and captivating locations, fusing the music with the beauty of the surroundings, creating an unforgettable atmosphere. Sign up to receive invitations to our upcoming video sets.
              </p>
            </div>

            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full border border-[oklch(0.55_0.18_20)]/30 flex items-center justify-center">
                  <Radio className="w-3.5 h-3.5 text-[oklch(0.55_0.18_20)]" />
                </div>
                <h3 className="text-sm tracking-[0.2em] uppercase text-white font-sans font-semibold">
                  Radio Shows
                </h3>
              </div>

              <p className="text-white/50 text-sm leading-relaxed font-sans">
                {"Discover the essence of Afro House music with our exciting radio show, where each broadcast reflects our passion for the culture and rhythms that connect us. This space is designed to highlight the diversity and creativity of the scene, presenting the best artists and DJs who share our vision. Send your session of at least 30 minutes to our email (abrakadabrarealm@gmail.com)"}
              </p>
            </div>

            <motion.a
              href="mailto:abrakadabrarealm@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-colors font-sans"
            >
              Join Now
              <ChevronRight className="w-3.5 h-3.5" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative overflow-hidden rounded-lg group">
              <Image
                src={ourMusicImages.activities}
                alt="Studio production"
                width={800}
                height={600}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[oklch(0.55_0.18_20)] to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* --- Submit Demo CTA ---------------------------------------------- */

function SubmitDemoCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[oklch(0.55_0.18_20)]/5 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 rounded-full border border-[oklch(0.55_0.18_20)]/30 flex items-center justify-center mx-auto mb-8"
          >
            <Disc3 className="w-7 h-7 text-[oklch(0.55_0.18_20)]" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 text-balance">
            Ready to share your sound?
          </h2>

          <p className="text-white/50 text-base leading-relaxed mb-10 font-sans">
            Submit your demo to either of our labels and join a community of artists who are pushing boundaries in electronic music.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:abrakadabrarealm@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[oklch(0.55_0.18_20)] text-white text-sm tracking-widest uppercase font-sans hover:bg-[oklch(0.50_0.20_20)] transition-colors"
            >
              <Mail className="w-4 h-4" />
              Submit Demo
            </motion.a>

            <motion.a
              href="mailto:abrakadabrarealm@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 text-white text-sm tracking-widest uppercase font-sans hover:bg-white/5 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* --- Footer ------------------------------------------------------- */

function MusicFooter() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-white/20 text-xs tracking-widest font-sans">
          ABRAKADABRA REALM — ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  )
}

/* --- Main Page ---------------------------------------------------- */

export default function OurMusicPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <LuxuryHeader />
      <HeroSection />

      <LabelSection
        name="Abrakadabra Realm"
        description="Our label merges the ancient and modern, focusing on Afro House to connect music and spirit. We honor tradition and innovation, crafting a space where artists explore creativity and cultural roots."
        logoImage={ourMusicImages.abrakadabraLogo}
        releases={abrakadabraReleases}
        accentText="Our label merges the ancient and modern, focusing on Afro House to connect music and spirit. We honor tradition and innovation, crafting a space where artists explore creativity and cultural roots."
        platformLinks={[
          {
            label: "SPOTIFY",
            icon: "spotify",
            url: "https://open.spotify.com/playlist/6B0VzDomUlrkzO6mITiUcW?si=DZlG4eyUTkKdF_k1n0xQQA&nd=1&dlsi=eeceaad6619043b8",
          },
          {
            label: "YOUTUBE",
            icon: "youtube",
            url: "https://www.youtube.com/playlist?list=PL7CVTLJ8b8aJ1ryWzCWOzLWQpAQ36KjQ3",
          },
          {
            label: "BEATPORT",
            icon: "beatport",
            url: "https://www.beatport.com/label/abrakadabra-realm/125161",
          },
        ]}
      />

      <LabelSection
        name="MoodChill"
        description="Our label champions freedom, authenticity, and diversity through rap, afrobeat, hip-hop, and urban genres. We amplify voices, challenge norms, and connect cultures."
        logoImage={ourMusicImages.moodchillLogo}
        releases={moodchillReleases}
        accentText="Our label champions freedom, authenticity, and diversity through rap, afrobeat, hip-hop, and urban genres. We amplify voices, challenge norms, and connect cultures."
        platformLinks={[
          {
            label: "SPOTIFY",
            icon: "spotify",
            url: "https://open.spotify.com/intl-es/album/7au3NjnvP4uScxV5gvWBXx?si=Ui2h1d-uTLO0T55_gghj4w&nd=1&dlsi=5ce2bde3a63f4c57",
          },
          {
            label: "YOUTUBE",
            icon: "youtube",
            url: "https://www.youtube.com/@abrakadabrarealm",
          },
        ]}
        reverse
      />

      <ServicesSection />
      <ActivitiesSection />
      <SubmitDemoCTA />
      <MusicFooter />
    </main>
  )
}