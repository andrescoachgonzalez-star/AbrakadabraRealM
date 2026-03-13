"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ChevronDown, Sparkles, ClipboardPen, MessageSquareText, Scale, BadgeCheck, ArrowRight } from "lucide-react"
import { LuxuryHeader } from "@/components/luxury-header"

// Exact image paths from /public/Image-Models
const heroImage = "/Image-Models/model-1.webp"
const timelineImage = "/Image-Models/model-6.webp" // changed
const formImage = "/Image-Models/Model-11.webp" // changed

const galleryImages = [
  "/Image-Models/model-6.webp",
  "/Image-Models/model-7.webp",
  "/Image-Models/model-8.webp",
  "/Image-Models/model-9.webp",
  "/Image-Models/model-10.webp",
  "/Image-Models/model-1.webp",
  "/Image-Models/model-2.webp",
  "/Image-Models/model-3.webp",
]

const models = [
  {
    name: "Paula Suarez",
    slug: "paula-suarez",
    role: "Model",
    image: "/Image-Models/Paula-Suarez.png",
    description: "Paula Suarez is a multifaceted artist who fuses her passion for modeling, acting and music in every step she takes...",
    fullBio:
      "Paula Suarez is a multifaceted artist who fuses her passion for modeling, acting and music in every step she takes. With a magnetic presence and innate talent, she has captivated audiences on the catwalk, in front of the camera and on stage. As a model, her elegance and authenticity have shone through in major campaigns, while her versatility as an actress has led her to star in film and television projects, exploring deep and challenging characters. In addition, her unique voice and musical sensitivity position her as a singer with soul, capable of moving with every note. Paula is a creative force in constant evolution, whose mission is to inspire the world through her art.",
  },
  {
    name: "Sandra Henao",
    slug: "sandra-henao",
    role: "Model",
    image: "/Image-Models/Sandra.png",
    description: "Sandra Henao is a Colombian model based in the United States, known for her natural charm and authentic elegance...",
    fullBio:
      "Sandra Henao is a Colombian model based in the United States, known for her natural charm and authentic elegance. Her collaboration with Abrakadabra highlights her unique essence, standing out in projects that transcend the ordinary. While she models selectively, Sandra brings a fresh and refined style that captivates both attention and admiration. Her authenticity makes her an inspiration, ready to partner on projects that celebrate genuine beauty and creativity. A memorable presence that adds magic to every moment.",
  },
  {
    name: "Adriana Henao",
    slug: "adriana-henao",
    role: "Fine Artist",
    image: "/Image-Models/Adriana.png",
    description: "Adriana Henao is a visionary artist who has revolutionized contemporary art with her unique style and spiritual...",
    fullBio:
      "Adriana Henao is a visionary artist who has revolutionized contemporary art with her unique style and spiritual approach. Her works, a fusion of surrealism and magical realism, invite reflection and meditation, creating a transformative visual and emotional experience. With nationally and internationally recognized exhibitions, Adriana stands out for her ability to channel pure spiritual energy through her art, offering not only visually striking pieces, but also deeply healing ones. To explore her work is to embark on a journey of self-knowledge and spiritual elevation, transforming lives and perspectives through her impressive talent.",
  },
]

const hiringSteps = [
  { number: 1, title: "See our models", icon: Sparkles },
  { number: 2, title: "Fill out the form", icon: ClipboardPen },
  { number: 3, title: "Tell us all the details", icon: MessageSquareText },
  { number: 4, title: "Negotiation", icon: Scale },
  { number: 5, title: "Hiring", icon: BadgeCheck },
]

const serviceCategories = [
  {
    category: "Advertising and Promotion",
    title: "Boost Your Brand",
    subtitle: "Connect with your audience effectively",
    description:
      "From e-commerce modeling to presence at trade shows, events, and product launches, we offer brand ambassadors who represent your vision with professionalism and charisma.",
    image: "/Image-Models/model-2.webp",
  },
  {
    category: "Audiovisual Production",
    title: "Image and Movement",
    description:
      "Modeling and presence in the audiovisual world Your brand or production deserves the best visual impact. We work on music videos, TV commercials, digital ads, and social media content with a professional and engaging approach.",
    image: "/Image-Models/model-3.webp",
  },
  {
    category: "Fashion and Catwalk",
    title: "Elegance in Every Step",
    description:
      "Fashion Shows, Shoots, and Haute Couture Modeling Stand out in the fashion world with our professional modeling services. From exclusive runway shows and photoshoots for brands to designer lookbooks and fashion catalogs.",
    image: "/Image-Models/model-4.png",
  },
]

const timelineServices = [
  {
    title: "Fashion and Runway",
    description:
      "Elevate your brand's visual impact with our professional models. We participate in fashion shows, photoshoots for clothing and accessory brands, haute couture modeling, fashion catalogs, lookbooks, and sportswear.",
  },
  {
    title: "Audiovisual Production",
    description:
      "Give your audiovisual projects presence and elegance. We have models for music videos, television commercials, digital ads, advertising campaigns, social media content, and corporate videos.",
  },
  {
    title: "Advertising and Promotion",
    description:
      "Give your brand prestige with our models in e-commerce campaigns, product launches, trade shows and exhibitions, brand activations, and promotional events.",
  },
  {
    title: "Entertainment and Acting",
    description:
      "From modeling in music videos and commercials to acting in series and films, our models excel as presenters and hosts in audiovisual productions.",
  },
  {
    title: "Events and Presentations",
    description:
      "Make your events shine with models presenting luxury events, conventions, motorsports events, lingerie shows, and beauty pageants.",
  },
  {
    title: "Digital World and Social Media",
    description:
      "Take advantage of digital influence with models who create content for Instagram, TikTok, and YouTube, participate in live shopping, and participate in augmented and virtual reality campaigns.",
  },
]

const brandNames = [
  "OMG SWIM",
  "CHICME",
  "KERATHERAPY",
  "Lola Bendita",
  "PRETTYLITTLETHING",
  "VFIT SPORTSWEAR",
  "Cristal COSMETICS",
  "HOT MIAMI STYLES",
]

function ModelCard({ model, index }: { model: typeof models[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="group"
    >
      <div className="bg-gradient-to-b from-[#1e1e1e] to-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-[oklch(0.55_0.18_20)]/30 transition-all duration-500">
        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.img
            src={model.image || "/placeholder.svg"}
            alt={model.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />

          <div className="absolute top-0 right-0 w-0 h-0 border-t-[120px] border-t-[oklch(0.55_0.18_20)] border-l-[120px] border-l-transparent opacity-80" />

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-20">
            <p className="text-white/60 text-xs tracking-wider">{model.role}</p>
            <h3 className="text-white text-4xl font-bold font-serif mt-1">{model.name}</h3>
          </div>
        </div>

        <div className="flex border-b border-white/10 px-3 py-2">
          <div className="flex-1 py-3 text-sm font-bold tracking-wider bg-[oklch(0.55_0.18_20)] text-white rounded-full text-center">
            FEED
          </div>
        </div>

        <div className="p-6">
          <p className="text-white/60 text-sm leading-relaxed">{model.description}</p>

          <Link href={`/artists/models/${model.slug}`}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4 py-2.5 bg-[#333] text-white/80 text-sm tracking-wider rounded-sm hover:bg-[#444] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              See more
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </Link>
        </div>

        <Link href="#hire-form">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-[oklch(0.55_0.18_20)] to-[oklch(0.45_0.2_10)] text-white font-bold tracking-widest text-sm hover:shadow-lg hover:shadow-[oklch(0.55_0.18_20)]/30 transition-all duration-300 text-center cursor-pointer"
          >
            HIRE THIS ARTIST
          </motion.div>
        </Link>
      </div>
    </motion.div>
  )
}

export default function ModelsPage() {
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

  const [activeTimeline, setActiveTimeline] = useState(0)

  return (
    <main className="min-h-screen bg-[#111] overflow-x-hidden">
      <LuxuryHeader />

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Our Models"
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
            OUR MODELS
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <Link href="#hire-form" className="inline-flex">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-[oklch(0.55_0.18_20)] text-white font-bold tracking-wider rounded-lg hover:shadow-xl hover:shadow-[oklch(0.55_0.18_20)]/30 transition-all duration-300 flex items-center gap-3 cursor-pointer"
              >
                hire one of our models
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group rounded-2xl overflow-hidden border border-[oklch(0.55_0.18_20)]/20 hover:border-[oklch(0.55_0.18_20)]/50 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="bg-white p-6">
                  <p className="text-black/50 text-xs tracking-wider uppercase mb-1">{service.category}</p>
                  <h3 className="text-2xl font-bold text-black font-serif mb-2">{service.title}</h3>
                  {service.subtitle && <p className="text-black/60 text-sm mb-2">{service.subtitle}</p>}
                  <p className="text-black/50 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Models Grid */}
      <section className="py-20 bg-[#111]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="w-1 h-10 bg-[oklch(0.55_0.18_20)] rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif">Our Models</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <ModelCard key={model.name} model={model} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Hire Section */}
      <section className="py-20 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16 font-serif uppercase tracking-wide"
          >
            How to hire our Models?
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

      {/* Brands That Trust Us */}
      <section className="py-28 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-[oklch(0.55_0.18_20)]/30 rounded-tl-lg" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-[oklch(0.55_0.18_20)]/30 rounded-tr-lg" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-[oklch(0.55_0.18_20)]/30 rounded-bl-lg" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-[oklch(0.55_0.18_20)]/30 rounded-br-lg" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[oklch(0.55_0.18_20)]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 mb-6"
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-px bg-gradient-to-r from-transparent to-[oklch(0.55_0.18_20)]"
              />
              <span className="text-[oklch(0.55_0.18_20)] text-xs tracking-[0.5em] uppercase font-bold">Our Partners</span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-px bg-gradient-to-l from-transparent to-[oklch(0.55_0.18_20)]"
              />
            </motion.div>

            <h3 className="text-5xl md:text-6xl font-bold text-white font-serif">
              Brands that <span className="text-[oklch(0.55_0.18_20)] italic">trust</span> us
            </h3>
          </motion.div>

          <div className="relative mb-6">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
            <motion.div
              animate={{ x: [0, -1200] }}
              transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="flex gap-6 w-max"
            >
              {[...brandNames, ...brandNames, ...brandNames].map((brand, i) => (
                <div
                  key={`row1-${i}`}
                  className="flex-shrink-0 border border-white/10 rounded-2xl px-10 py-7 bg-white/[0.02] backdrop-blur-sm hover:bg-[oklch(0.55_0.18_20)]/10 hover:border-[oklch(0.55_0.18_20)]/40 transition-all duration-500 group cursor-pointer"
                >
                  <span className="text-white/40 group-hover:text-white text-lg font-bold tracking-[0.2em] font-serif whitespace-nowrap transition-colors duration-300">
                    {brand}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
            <motion.div
              animate={{ x: [-1200, 0] }}
              transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="flex gap-6 w-max"
            >
              {[...brandNames.slice().reverse(), ...brandNames.slice().reverse(), ...brandNames.slice().reverse()].map((brand, i) => (
                <div
                  key={`row2-${i}`}
                  className="flex-shrink-0 border border-[oklch(0.55_0.18_20)]/15 rounded-2xl px-10 py-7 bg-[oklch(0.55_0.18_20)]/[0.03] hover:bg-[oklch(0.55_0.18_20)]/10 hover:border-[oklch(0.55_0.18_20)]/40 transition-all duration-500 group cursor-pointer"
                >
                  <span className="text-white/30 group-hover:text-[oklch(0.55_0.18_20)] text-lg font-bold tracking-[0.2em] font-serif whitespace-nowrap transition-colors duration-300">
                    {brand}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* WITH OUR MODELS Timeline Section */}
      <section className="py-0 overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[700px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 relative"
          >
            <img
              src={timelineImage}
              alt="Model"
              className="w-full h-full object-cover min-h-[500px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2 bg-white p-12 md:p-16 flex flex-col justify-center"
          >
            <h2 className="text-2xl md:text-3xl font-black text-black font-serif mb-10 uppercase leading-tight">
              With our models, you can give a luxurious look to:
            </h2>

            <div className="space-y-0">
              {timelineServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                  className="flex gap-5 cursor-pointer group"
                  onClick={() => setActiveTimeline(index)}
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      animate={{
                        backgroundColor: activeTimeline === index ? "oklch(0.55 0.18 20)" : "transparent",
                        borderColor: activeTimeline === index ? "oklch(0.55 0.18 20)" : "#ccc",
                      }}
                      className="w-4 h-4 rounded-full border-2 flex-shrink-0 mt-1.5"
                    />
                    {index < timelineServices.length - 1 && (
                      <div className="w-px flex-1 bg-black/10 min-h-[40px]" />
                    )}
                  </div>

                  <div className="pb-6">
                    <h4
                      className={`font-bold text-base mb-1 transition-colors ${
                        activeTimeline === index ? "text-black" : "text-black/70"
                      }`}
                    >
                      {service.title}
                    </h4>

                    <AnimatePresence>
                      {activeTimeline === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-black/50 text-sm leading-relaxed"
                        >
                          {service.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Boost Your Music Career Section */}
      <section className="py-0 overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 bg-white p-12 md:p-20 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black font-serif mb-6">
              Boost your music career
            </h2>
            <p className="text-black/60 leading-relaxed text-base">
              {
                'Boost your musical career with our models qualified to perform any performance, already producing results, like Paula, and appearing in world-class videos. It’s time to take the next step in your career. What are you waiting for? We’re here to serve you.'
              }
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2 relative bg-black"
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/aA_kuFTV-P8?si=gDMYuosIHRkD4ALh"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full min-h-[400px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Innovation and Style Section */}
      <section className="py-20 bg-[#111]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/5"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight">
                <span className="text-[oklch(0.55_0.18_20)]">Innovation</span>
                <span className="text-white"> and </span>
                <span className="text-[oklch(0.55_0.18_20)]">Style</span>
                <br />
                <span className="text-white">that Transcend</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:w-3/5"
            >
              <p className="text-white/60 text-base leading-relaxed">
                {
                  "Exploring the world of designs isn't just a matter of aesthetics, but also of innovation and impact. Each design represents a fusion of creativity and functionality, setting trends and establishing new standards. Investing in exclusive designs not only elevates your style but also reflects your vision and personality. Discover our collection of carefully curated designs, where each piece tells a story and redefines elegance."
                }
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* See More of Our Models - Gallery */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-12 font-serif"
          >
            See more of our models
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {galleryImages.map((img, i) => (
              <motion.div
                key={`gallery-${i}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative aspect-square overflow-hidden group cursor-pointer"
              >
                <img
                  src={img || "/placeholder.svg"}
                  alt={`Gallery photo ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hire Form Section */}
      <section id="hire-form" className="py-0 overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[700px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <img
              src={formImage}
              alt="Model"
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
            <h3 className="text-2xl font-bold text-[oklch(0.55_0.18_20)] text-center mb-1 font-serif italic">
              Complete the form
            </h3>
            <p className="text-black/50 text-center mb-8">to hire our models</p>

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
                {models.map((m) => (
                  <option key={m.name} value={m.name}>
                    {m.name}
                  </option>
                ))}
              </select>

              <select
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className="w-full px-5 py-3.5 border border-black/20 rounded-lg text-sm focus:outline-none focus:border-[oklch(0.55_0.18_20)] transition-colors text-black/40 bg-white"
              >
                <option value="">Event Type</option>
                <option value="fashion">Fashion Show</option>
                <option value="photoshoot">Photoshoot</option>
                <option value="commercial">Commercial</option>
                <option value="music-video">Music Video</option>
                <option value="private">Private Event</option>
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

      <div className="h-2 bg-gradient-to-r from-[oklch(0.55_0.18_20)] via-[oklch(0.45_0.2_10)] to-[oklch(0.55_0.18_20)]" />
    </main>
  )
}