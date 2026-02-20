"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { LuxuryHeader } from "@/components/luxury-header"
import { ChevronDown, ChevronRight } from "lucide-react"

// Product data
const tshirtsAndCaps = [
  {
    id: 1,
    name: "OVERSIZE ABRAKADABRA REALM BLACK",
    slug: "oversize-abrakadabra-realm-black",
    originalPrice: "40,00",
    salePrice: "30,00",
    image: "/clothing/tshirt-black.jpg",
  },
  {
    id: 2,
    name: "OVERSIZE ABRAKADABRA REALM WHITE",
    slug: "oversize-abrakadabra-realm-white",
    originalPrice: "40,00",
    salePrice: "30,00",
    image: "/clothing/tshirt-white.jpg",
  },
  {
    id: 3,
    name: "CAP II ABRAKADABRA",
    slug: "cap-ii-abrakadabra",
    originalPrice: "20,00",
    salePrice: "10,00",
    image: "/clothing/cap-white.jpg",
  },
  {
    id: 4,
    name: "ABRAKADABRA CAP CREW VOL. 1",
    slug: "abrakadabra-cap-crew-vol-1",
    originalPrice: "20,00",
    salePrice: "10,00",
    image: "/clothing/cap-black.jpg",
  },
  {
    id: 5,
    name: "OVERSIZE INDIFFERENT BLACK UNIVERSE",
    slug: "oversize-indifferent-black-universe",
    originalPrice: "40,00",
    salePrice: "20,00",
    image: "/clothing/tshirt-universe-black.jpg",
  },
  {
    id: 6,
    name: "OVERSIZE UNIVERSE INDIFFERENT BEIGE",
    slug: "oversize-universe-indifferent-beige",
    originalPrice: "40,00",
    salePrice: "20,00",
    image: "/clothing/tshirt-beige.jpg",
  },
]

const swimsuits = [
  {
    id: 1,
    name: "BLUE HALTER SWIM DRESS",
    slug: "blue-halter-swim-dress",
    originalPrice: "36,00",
    salePrice: "20,00",
    image: "/clothing/swimsuit-blue.jpg",
  },
  {
    id: 2,
    name: "VESTIDO DE BANO HALTER VERDE",
    slug: "vestido-de-bano-halter-verde",
    originalPrice: "36,00",
    salePrice: "20,00",
    image: "/clothing/swimsuit-green.jpg",
  },
  {
    id: 3,
    name: "VESTIDO DE BANO HALTER FUCHSIA",
    slug: "vestido-de-bano-halter-fuchsia",
    originalPrice: "36,00",
    salePrice: "20,00",
    image: "/clothing/swimsuit-fuchsia.jpg",
  },
]

const faqItems = [
  {
    question: "Is shipping within Colombia free?",
    answer: "Yes, we offer free shipping for all orders within Colombia. Delivery typically takes 3-5 business days.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship internationally to most countries. Shipping costs and delivery times vary by location. Please contact us for specific rates.",
  },
  {
    question: "Are the number of pieces per design limited?",
    answer: "Yes, our editions are limited to ensure exclusivity. Once a design sells out, it will not be restocked.",
  },
  {
    question: "How can I get assistance with my order?",
    answer: "You can reach us via email at abrakadabrarealm@gmail.com or message us at the following numbers:\n\n+57 310 392 0569 (Colombia)\n+1 917 547 5787 (USA)\n\nFeel free to contact us for any inquiries or assistance!",
  },
]

// Product Card Component
function ProductCard({ product, index }: { product: typeof tshirtsAndCaps[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/clothing/${product.slug}`} className="block group">
        <div className="relative overflow-hidden aspect-[3/4] bg-[#2a2a2a] rounded-sm">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {product.salePrice !== product.originalPrice && (
            <div className="absolute top-4 left-0 bg-[#c41e3a] text-white text-xs font-bold px-3 py-1 tracking-wider">
              SALE
            </div>
          )}

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
            <span className="text-white text-sm tracking-widest border border-white px-4 py-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              VIEW PRODUCT
            </span>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-white/90 text-sm font-medium tracking-wide group-hover:text-[#c4a882] transition-colors">{product.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-white/50 text-sm line-through">{product.originalPrice} USD</span>
            <span className="text-white text-sm font-semibold">{product.salePrice} USD</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function ClothingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(3)

  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <LuxuryHeader />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c4a882] to-[#a89070]" />
        
        <div className="relative container mx-auto px-6 py-20 flex items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-[#2a2a2a] tracking-wider mb-4 font-serif"
            >
              ABRAKADABRA REALM
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#2a2a2a]/80 text-lg mb-8"
            >
              Where creativity meets fashion, crafting timeless pieces that define individuality.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#2a2a2a] text-[#2a2a2a] px-8 py-3 text-sm tracking-widest font-semibold hover:bg-[#2a2a2a] hover:text-white transition-all duration-300"
            >
              SEE MORE CLOTHES
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute right-0 top-0 bottom-0 w-2/3 hidden lg:block overflow-hidden"
          >
            <img
              src="/clothing/hero-model.jpg"
              alt="Abrakadabra Realm Model"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-0 left-0 right-0 bg-[#1a1a1a] py-6"
        >
          <div className="container mx-auto px-6 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-[#c4a882] text-sm md:text-base tracking-widest"
            >
              {"OVERSIZE SWETSHIRT \u2013 ABRAKADABRA REALM"}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="text-[#c4a882]/70 text-xs md:text-sm tracking-widest mt-1"
            >
              {"LIMITED NUMBER \u2013 LUXURY MARKETPLACE \u2013 ABRKDBR"}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Info Sections */}
      <section className="bg-[#1a1a1a] border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 border-r border-white/10"
            >
              <h3 className="text-[#c4a882] text-xl font-bold tracking-wider mb-3 font-serif">
                COLOMBIA FREE SHIPPING
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Shipments are dispatched from Medellin, Colombia, and typically require up to 5 business days for delivery.
              </p>
              <motion.button
                whileHover={{ x: 5 }}
                className="text-[#c4a882] text-sm tracking-wider flex items-center gap-2 hover:text-white transition-colors"
              >
                VIEW DETAILS
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 md:p-12 bg-[#2a2a2a] relative overflow-hidden"
            >
              <h3 className="text-white text-xl font-bold tracking-wider mb-3 font-serif">
                LIMITED EDITION
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Our editions are limited and sell out quickly, ensuring you wear exclusive, one-of-a-kind pieces that stand out and define your style.
              </p>
              <p className="text-[#c4a882] text-sm tracking-wider">
                AbrakadabraRealm.com
              </p>

              <motion.div
                initial={{ rotate: -15, opacity: 0 }}
                whileInView={{ rotate: -15, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -right-10 -top-5 w-40 h-40 bg-black/50 rounded-lg flex items-center justify-center"
              >
                <span className="text-white/20 text-xs">SHIRT</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* T-Shirts & Caps Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white tracking-wider font-serif"
            >
              T-SHIRT & CAPS
            </motion.h2>
            <motion.button
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="border border-white/30 text-white/70 px-6 py-2 text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              VIEW CATALOG
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tshirtsAndCaps.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Swimsuits Section */}
      <section className="py-16 bg-[#1a1a1a] border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white tracking-wider font-serif"
            >
              SWIMSUITS
            </motion.h2>
            <motion.button
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="border border-white/30 text-white/70 px-6 py-2 text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              VIEW CATALOG
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {swimsuits.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.03 }}
            viewport={{ once: true }}
            className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-[#c4a882] blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.03 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-20 -right-20 w-96 h-96 rounded-full bg-[#c4a882] blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:sticky lg:top-24"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#c4a882] text-sm tracking-[0.3em] uppercase mb-4 block"
              >
                Support
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 font-serif leading-tight"
              >
                Frequently<br />
                <span className="text-[#c4a882]">Asked</span><br />
                Questions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/50 text-lg leading-relaxed mb-10 max-w-md"
              >
                Find answers to common questions about our products, shipping, and policies.
              </motion.p>

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-[#c4a882]/10 to-transparent border border-[#c4a882]/20 rounded-2xl p-8"
              >
                <h4 className="text-white font-semibold mb-4 tracking-wide">Need more help?</h4>
                <p className="text-white/50 text-sm mb-6">Contact our support team directly:</p>
                
                <div className="space-y-4">
                  <motion.a
                    href="mailto:abrakadabrarealm@gmail.com"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-[#c4a882] hover:text-white transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-full bg-[#c4a882]/10 flex items-center justify-center group-hover:bg-[#c4a882]/20 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <span className="text-sm">abrakadabrarealm@gmail.com</span>
                  </motion.a>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-white/70"
                  >
                    <span className="w-10 h-10 rounded-full bg-[#c4a882]/10 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <div className="text-sm">
                      <p>+57 310 392 0569 <span className="text-white/40">(Colombia)</span></p>
                      <p>+1 917 547 5787 <span className="text-white/40">(USA)</span></p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - FAQ Accordions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4"
            >
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group rounded-xl overflow-hidden transition-all duration-500 ${
                    openFAQ === index 
                      ? 'bg-gradient-to-r from-[#c4a882]/20 to-[#c4a882]/5 border border-[#c4a882]/30' 
                      : 'bg-[#222] hover:bg-[#2a2a2a] border border-transparent hover:border-white/10'
                  }`}
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-4">
                      <motion.span
                        animate={{ 
                          backgroundColor: openFAQ === index ? '#c4a882' : 'rgba(196,168,130,0.1)',
                          color: openFAQ === index ? '#1a1a1a' : '#c4a882'
                        }}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      >
                        {String(index + 1).padStart(2, '0')}
                      </motion.span>
                      <span className={`font-medium tracking-wide transition-colors ${
                        openFAQ === index ? 'text-white' : 'text-white/80 group-hover:text-white'
                      }`}>
                        {item.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        openFAQ === index ? 'bg-[#c4a882] text-[#1a1a1a]' : 'bg-white/5 text-white/50'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6 ml-12">
                          <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-white/60 leading-relaxed"
                          >
                            {item.answer.includes('abrakadabrarealm@gmail.com') ? (
                              <>
                                {item.answer.split('abrakadabrarealm@gmail.com')[0]}
                                <a href="mailto:abrakadabrarealm@gmail.com" className="text-[#c4a882] hover:underline">
                                  abrakadabrarealm@gmail.com
                                </a>
                                {item.answer.split('abrakadabrarealm@gmail.com')[1]?.split('\n').map((line, i) => (
                                  <span key={i}>
                                    {line.includes('+57') || line.includes('+1') ? (
                                      <span className="text-[#c4a882]">{line}</span>
                                    ) : (
                                      line
                                    )}
                                    {i < (item.answer.split('abrakadabrarealm@gmail.com')[1]?.split('\n').length ?? 0) - 1 && <br />}
                                  </span>
                                ))}
                              </>
                            ) : (
                              item.answer
                            )}
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] py-12 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 text-sm tracking-widest"
          >
            {"ABRAKADABRA REALM \u2013 LUXURY MARKETPLACE"}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/30 text-xs mt-2"
          >
            All rights reserved 2024
          </motion.p>
        </div>
      </footer>
    </main>
  )
}
