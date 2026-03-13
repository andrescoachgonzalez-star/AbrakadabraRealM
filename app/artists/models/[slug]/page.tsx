"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, MapPin, Instagram, Sparkles } from "lucide-react"
import { LuxuryHeader } from "@/components/luxury-header"

const modelsData: Record<
  string,
  {
    name: string
    role: string
    image: string
    location: string
    contracts: string
    instagramHandle: string
    instagramUrl: string
    fullBio: string
    booking: string
  }
> = {
  "paula-suarez": {
    name: "Paula Suarez",
    role: "Model",
    image: "/Image-Models/Paula-Suarez.png",
    location: "Miami",
    contracts: "28+ Contracts",
    instagramHandle: "@paulasuarez",
    instagramUrl: "https://www.instagram.com/paulasuarez/",
    fullBio:
      "Paula Suarez is a multifaceted artist who fuses her passion for modeling, acting and music in every step she takes. With a magnetic presence and innate talent, she has captivated audiences on the catwalk, in front of the camera and on stage. As a model, her elegance and authenticity have shone through in major campaigns, while her versatility as an actress has led her to star in film and television projects, exploring deep and challenging characters. In addition, her unique voice and musical sensitivity position her as a singer with soul, capable of moving with every note. Paula is a creative force in constant evolution, whose mission is to inspire the world through her art.",
    booking: "Official Booking — AbrakadabraRealm ®",
  },
  "sandra-henao": {
    name: "Sandra Henao",
    role: "Model",
    image: "/Image-Models/Sandra.png",
    location: "New York",
    contracts: "9+ Contracts",
    instagramHandle: "@sandrahenao",
    instagramUrl: "https://www.instagram.com/sandrahenao/",
    fullBio:
      "Sandra Henao is a Colombian model based in the United States, known for her natural charm and authentic elegance. Her collaboration with Abrakadabra highlights her unique essence, standing out in projects that transcend the ordinary. While she models selectively, Sandra brings a fresh and refined style that captivates both attention and admiration. Her authenticity makes her an inspiration, ready to partner on projects that celebrate genuine beauty and creativity. A memorable presence that adds magic to every moment.",
    booking: "Official Booking — AbrakadabraRealm ®",
  },
  "adriana-henao": {
    name: "Adriana Henao",
    role: "Fine Artist",
    image: "/Image-Models/Adriana.png",
    location: "Spain",
    contracts: "19+ Contracts",
    instagramHandle: "@adrianahenao",
    instagramUrl: "https://www.instagram.com/adrianahenao/",
    fullBio:
      "Adriana Henao is a visionary artist who has revolutionized contemporary art with her unique style and spiritual approach. Her works, a fusion of surrealism and magical realism, invite reflection and meditation, creating a transformative visual and emotional experience. With nationally and internationally recognized exhibitions, Adriana stands out for her ability to channel pure spiritual energy through her art, offering not only visually striking pieces, but also deeply healing ones. To explore her work is to embark on a journey of self-knowledge and spiritual elevation, transforming lives and perspectives through her impressive talent.",
    booking: "Official Booking — AbrakadabraRealm ®",
  },
}

export default function ModelDetailPage() {
  const params = useParams()
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug
  const model = modelsData[slug]

  if (!model) {
    return (
      <main className="min-h-screen bg-[#111] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Model Not Found</h1>
          <Link href="/artists/models" className="text-[oklch(0.55_0.18_20)] hover:underline">
            Back to Models
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
          href="/artists/models"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Models
        </Link>
      </div>

      {/* Hero: Image + Bio */}
      <section className="container mx-auto px-6 pb-16">
        <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            {/* Left: Image with red triangle accents */}
            <div className="lg:w-1/2 relative aspect-square lg:aspect-auto lg:min-h-[600px] bg-[#111]">
              <img
                src={model.image}
                alt={model.name}
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
                {model.role}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold text-white font-serif mb-8"
              >
                {model.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-white/60 text-sm leading-relaxed text-justify mb-10"
              >
                {model.fullBio}
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
                  <span className="text-white text-sm">{model.location}</span>
                </div>

                <a
                  href={model.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#222] rounded-lg px-5 py-3 border border-white/5 hover:border-[oklch(0.55_0.18_20)]/30 transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-[oklch(0.65_0.2_20)]" />
                  <span className="text-white text-sm group-hover:text-[oklch(0.65_0.2_20)] transition-colors">
                    Instagram
                  </span>
                </a>

                <div className="flex items-center gap-3 bg-[#222] rounded-lg px-5 py-3 border border-white/5">
                  <Sparkles className="w-4 h-4 text-[oklch(0.65_0.2_20)]" />
                  <span className="text-white text-sm">{model.contracts}</span>
                </div>
              </motion.div>

              {/* Booking info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-[oklch(0.55_0.18_20)]/10 to-transparent border border-[oklch(0.55_0.18_20)]/20 rounded-xl p-6"
              >
                <p className="text-white/50 text-sm">{model.booking}</p>
              </motion.div>
            </div>
          </div>

          {/* Hire button */}
          <Link href="/artists/models#hire-form">
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