"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, FileDown, MapPin, Instagram, Music, ExternalLink } from "lucide-react"
import { LuxuryHeader } from "@/components/luxury-header"

const djData: Record<
  string,
  {
    name: string
    image: string
    location: string
    contracts: string
    instagramHandle: string
    instagramUrl: string
    fullBio: string
    pdfUrl: string | null
    pdfLabel: string
    spotifyUrl?: string
    youtubeUrl?: string
    soundcloudHandle?: string
    email?: string
  }
> = {
  mara: {
    name: "Dj Mara",
    image: "/artists/dj-mara.jpg",
    location: "Colombia",
    contracts: "50+ Contracts",
    instagramHandle: "@djmaranew",
    instagramUrl: "https://www.instagram.com/djmaranew/",
    fullBio:
      "An icon of Colombian electronic music in the world DJ Mara, stage name of Juan Carlos, is a Colombian DJ and music producer with a career of more than 30 years in the international electronic scene. Born in [DJ Mara's hometown], he was attracted to music from an early age, especially the electronic sounds he heard in clubs and radio stations. In the early 1990s, DJ Mara began playing local parties and events, quickly gaining recognition for his talent and infectious energy. His passion for music led him to explore different electronic genres, from techno and house to trance and ambient. In 1995, DJ Mara made the decision to take a step forward in his career and move to Manizales, where he immersed himself in the vibrant European electronic scene. There, he quickly discovered himself as one of the most respected and sought-after DJs, playing internationally renowned clubs and festivals.",
    pdfUrl: "/artists/pdfs/dj-mara-presskit.pdf",
    pdfLabel: "Download PDF Brochure",
    spotifyUrl:
      "https://open.spotify.com/intl-es/artist/1OUuxQNvF1uRYOtLgv9Ood",
    youtubeUrl: "#",
    email: undefined,
  },
  mulan: {
    name: "Mulan",
    image: "/artists/dj-mulan.jpg",
    location: "Miami",
    contracts: "22+ Contracts",
    instagramHandle: "@mulanvibes",
    instagramUrl: "https://www.instagram.com/mulanvibes/",
    fullBio:
      "Mulan Vibes is a rising DJ and producer known for her electrifying presence and dynamic performances. Specializing in House, Tech House, and Afro House, Mulan Vibes has been blends and creative productions reflect her passion for music and her ability to connect deeply with her crowd. As her career reckoned with in the global electronic music scene.",
    pdfUrl: null,
    pdfLabel: "Official Booking -- AbrakadabraRealm",
    spotifyUrl: "#",
    youtubeUrl: "#",
  },
  "joseph-ren": {
    name: "Joseph Ren",
    image: "/artists/dj-joseph.jpg",
    location: "Colombia",
    contracts: "12+ Contracts",
    instagramHandle: "@josephren__",
    instagramUrl: "https://www.instagram.com/josephren__/",
    fullBio:
      "Juan Jose rivera rendon from Colombia also known as Joseph Ren, his passion for music has existed since childhood. At the age 17 (2017) he began his musical studies at the hand of Maurizio Ruggiero (engineer the Martinez Brothers, Marco Carola, Cedric Gervais and more). Later at 18 he made his first debut as a deejay for the label Ritmik Records, debuting in one of the best underground clubs in the city of Miami.",
    pdfUrl: "/artists/pdfs/joseph-ren-presskit.pdf",
    pdfLabel: "Download PDF Brochure",
    spotifyUrl:
      "https://open.spotify.com/artist/0TG7p0ATDDBfhBjl9EBvIb",
    youtubeUrl: "#",
    email: "infojosephren@gmail.com",
  },
  rizzo: {
    name: "Rizzo",
    image: "/artists/dj-rizzo.jpg",
    location: "Pereira, Colombia",
    contracts: "15+ Contracts",
    instagramHandle: "@rizzocol",
    instagramUrl: "https://www.instagram.com/rizzocol/",
    fullBio:
      "Santiago Rizzo A.K.A Rizzo (Col), has had a presence in important clubs and festivals at national and international level such as: Baum (Bogota), Radio Studio (Col), Octava (Medellin), Palmar (Cartagena), El Fabuloso (Pereira), Vida (Pasto), Open Santa Marta, After Office (Cali), House For All (Ecuador), Solarium Festival (Medellin), Pendulo (Ecuador), Baum Park (Medellin). He is currently projected to be one of the most recognized DJs and producers of the Colombian electronic scene.",
    pdfUrl: "/artists/pdfs/rizzo-presskit.pdf",
    pdfLabel: "Download PDF Brochure",
    spotifyUrl: "#",
    youtubeUrl: "#",
    email: "rizzocoldata@gmail.com",
  },
  "8batzz": {
    name: "8batzz",
    image: "/artists/dj-8batzz.jpg",
    location: "Pereira, Colombia",
    contracts: "8+ Contracts",
    instagramHandle: "@8batzz",
    instagramUrl: "https://www.instagram.com/8batzz/",
    fullBio:
      "8batzz is a DJ and electronic music producer born in Pereira, Risaralda (Colombia). Since 2021 he has developed a solid proposal within Afro House and Tech House, focused on deep grooves, organic percussion and atmospheres that connect directly with the dance floor. As a DJ, he has taken his sound to stages in Miami, performing at Mita Nightclub, and to the New York scene, consolidating his international presence from an early stage of his career. His facet as a producer began 1 year ago, currently in a process of exploration and evolution within House, Tech House and Afro House, building a style of his own that balances rhythm, energy and musical depth.",
    pdfUrl: "/artists/pdfs/8batzz-presskit.pdf",
    pdfLabel: "Download PDF Brochure",
    spotifyUrl: "#",
    youtubeUrl: "#",
    email: "abrakadabrarealm@gmail.com",
  },
}

export default function DJDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const dj = djData[slug]

  if (!dj) {
    return (
      <main className="min-h-screen bg-[#111] flex items-center justify-center">
        <LuxuryHeader />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white font-serif mb-4">
            Artist Not Found
          </h1>
          <Link
            href="/artists/dj-producers"
            className="text-[oklch(0.55_0.18_20)] hover:underline"
          >
            Back to DJ / Producers
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#111] overflow-x-hidden">
      <LuxuryHeader />

      {/* Back button */}
      <div className="container mx-auto px-6 pt-28 pb-4">
        <Link
          href="/artists/dj-producers"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          {"Back to DJ / Producers"}
        </Link>
      </div>

      {/* Hero: Image + Bio */}
      <section className="container mx-auto px-6 pb-16">
        <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            {/* Left: Image with red triangle accents */}
            <div className="lg:w-1/2 relative aspect-square lg:aspect-auto lg:min-h-[600px]">
              <img
                src={dj.image || "/placeholder.svg"}
                alt={dj.name}
                className="w-full h-full object-cover"
              />
              {/* Red triangle accents */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[200px] border-t-[oklch(0.55_0.18_20)] border-l-[200px] border-l-transparent opacity-80" />
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[150px] border-b-[oklch(0.55_0.18_20)]/60 border-l-[150px] border-l-transparent" />
            </div>

            {/* Right: Info */}
            <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[oklch(0.55_0.18_20)] text-xs tracking-[0.3em] uppercase mb-2"
              >
                {"Dj -- Producer"}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold text-white font-serif mb-8"
              >
                {dj.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-white/60 text-sm leading-relaxed text-justify mb-10"
              >
                {dj.fullBio}
              </motion.p>

              {/* Info cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-3 mb-10"
              >
                <div className="flex items-center gap-3 bg-[#222] rounded-lg px-5 py-3 border border-white/5">
                  <MapPin className="w-4 h-4 text-[oklch(0.65_0.2_20)]" />
                  <span className="text-white text-sm">{dj.location}</span>
                </div>
                <a
                  href={dj.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#222] rounded-lg px-5 py-3 border border-white/5 hover:border-[oklch(0.55_0.18_20)]/30 transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-[oklch(0.65_0.2_20)]" />
                  <span className="text-white text-sm group-hover:text-[oklch(0.65_0.2_20)] transition-colors">
                    {dj.instagramHandle}
                  </span>
                </a>
                <div className="flex items-center gap-3 bg-[#222] rounded-lg px-5 py-3 border border-white/5">
                  <Music className="w-4 h-4 text-[oklch(0.65_0.2_20)]" />
                  <span className="text-white text-sm">{dj.contracts}</span>
                </div>
              </motion.div>

              {/* Music platforms */}
              {(dj.spotifyUrl || dj.youtubeUrl) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-3 mb-10"
                >
                  {dj.spotifyUrl && (
                    <a
                      href={dj.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1DB954]/10 border border-[#1DB954]/30 rounded-full text-[#1DB954] text-xs font-medium hover:bg-[#1DB954]/20 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Spotify
                    </a>
                  )}
                  {dj.youtubeUrl && (
                    <span
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF0000]/10 border border-[#FF0000]/30 rounded-full text-[#FF0000] text-xs font-medium hover:bg-[#FF0000]/20 transition-colors cursor-default"
                    >
                      <ExternalLink className="w-3 h-3" />
                      YouTube
                    </span>
                  )}
                </motion.div>
              )}

              {/* PDF Section */}
              {dj.pdfUrl ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-r from-[oklch(0.55_0.18_20)]/10 to-transparent border border-[oklch(0.55_0.18_20)]/20 rounded-xl p-6"
                >
                  <p className="text-white/70 text-sm mb-4">
                    {"If you wanna see more, click on the PDF below:"}
                  </p>
                  <a
                    href={dj.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[oklch(0.55_0.18_20)] to-[oklch(0.45_0.2_10)] text-white font-bold tracking-wider rounded-lg hover:shadow-xl hover:shadow-[oklch(0.55_0.18_20)]/30 transition-all duration-300 text-sm"
                  >
                    <FileDown className="w-5 h-5" />
                    {dj.pdfLabel}
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-r from-[oklch(0.55_0.18_20)]/10 to-transparent border border-[oklch(0.55_0.18_20)]/20 rounded-xl p-6"
                >
                  <p className="text-white/50 text-sm">
                    {dj.pdfLabel}
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Hire button */}
          <Link href="/artists/dj-producers#hire-form">
            <motion.div
              whileHover={{ scale: 1.005 }}
              whileTap={{ scale: 0.995 }}
              className="w-full py-5 bg-gradient-to-r from-[oklch(0.55_0.18_20)] to-[oklch(0.45_0.2_10)] text-white font-bold tracking-widest text-sm text-center cursor-pointer hover:shadow-lg hover:shadow-[oklch(0.55_0.18_20)]/30 transition-all duration-300"
            >
              HIRE THIS ARTIST
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Red gradient bottom bar */}
      <div className="h-2 bg-gradient-to-r from-[oklch(0.55_0.18_20)] via-[oklch(0.45_0.2_10)] to-[oklch(0.55_0.18_20)]" />
    </main>
  )
}
