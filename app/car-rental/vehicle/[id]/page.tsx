"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useParams } from "next/navigation"
import { useState, useCallback } from "react"
import Link from "next/link"
import { LuxuryHeader } from "@/components/luxury-header"
import { LuxuryFooter } from "@/components/luxury-footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import {
  ArrowLeft,
  Shield,
  Gauge,
  Cog,
  Zap,
  ChevronLeft,
  ChevronRight,
  Check,
  Phone,
  CreditCard,
  FileText,
  Star,
  Sparkles,
} from "lucide-react"

/* ── Vehicle Data ──────────────────────────────── */

const vehiclesData: Record<string, any> = {
  "rolls-royce-dawn": {
    name: "ROLLS ROYCE DAWN",
    price: "899,00",
    brand: "ROLLS ROYCE",
    description:
      "The Rolls-Royce Dawn is a luxurious four-seater convertible that embodies elegance and sophistication. It was introduced in 2015 and is known for its refined craftsmanship and powerful performance.",
    gallery: [
      { id: 1, label: "Side View" },
      { id: 2, label: "Front View" },
      { id: 3, label: "Interior" },
      { id: 4, label: "Dashboard" },
    ],
    specs: [
      {
        title: "SAFETY",
        description:
          "Equipped with advanced safety features such as anti-lock brakes (ABS), stability control, multiple airbags, night vision assistance, and a suite of driver assistance technologies to ensure maximum safety and peace of mind.",
      },
      {
        title: "TRANSMISSION",
        description:
          "The Dawn comes with an 8-speed automatic transmission that delivers seamless shifts for a smooth and refined driving experience, contributing to the car's exceptional ride quality.",
      },
      {
        title: "ENGINE",
        description:
          "Powered by a 6.6-liter twin-turbocharged V12 engine producing 563 horsepower, the Dawn features rear-wheel drive, providing a balance of power and grace.",
      },
      {
        title: "PERFORMANCE",
        description:
          "The Rolls-Royce Dawn accelerates from 0-100 km/h (0-62 mph) in 4.9 seconds and has a top speed of 250 km/h (155 mph). This convertible combines performance with the brand's signature quiet and comfortable ride.",
      },
    ],
    alternativeBrands: [
      { name: "rolls-royce-dawn", displayName: "Rolls Royce Dawn", category: "Luxury Convertible", power: "563 HP", price: "$899/day", color: "bg-purple-500" },
      { name: "lamborghini-urus-green", displayName: "Lamborghini Urus", category: "Super SUV", power: "770 HP", price: "$999/day", color: "bg-green-500" },
      { name: "bentley-continental-gt", displayName: "Bentley Continental", category: "Luxury Coupe", power: "626 HP", price: "$899/day", color: "bg-blue-600" },
      { name: "ferrari-sf90-stradale", displayName: "Ferrari SF90", category: "Hybrid Supercar", power: "819 HP", price: "$2,999/day", color: "bg-yellow-500" },
    ],
  },
  "lamborghini-huracan": {
    name: "LAMBORGHINI HURACAN",
    price: "799,00",
    brand: "LAMBORGHINI",
    description:
      "The Lamborghini Huracan is a supercar with a V10 engine and a futuristic style. It was introduced in 2014 at the Geneva Motor Show and is named after the Spanish word for hurricane.",
    gallery: [
      { id: 1, label: "Side View" },
      { id: 2, label: "Front View" },
      { id: 3, label: "Interior" },
      { id: 4, label: "Dashboard" },
    ],
    specs: [
      {
        title: "SAFETY",
        description:
          "Anti-lock brakes, stability control, and six different airbags keep occupants safe in the Lamborghini Huracan Evo.",
      },
      {
        title: "TRANSMISSION",
        description:
          "The Lamborghini Huracan has a 7-speed dual-clutch transmission called the Lamborghini Doppia Frizione (LDF). The transmission is automatic and is not available with a manual option.",
      },
      {
        title: "ENGINE",
        description:
          "The Huracan has a V10 engine, all-wheel drive, and 602 horsepower. It also has a power-to-weight ratio of 2.33 kg/CV",
      },
      {
        title: "PERFORMANCE",
        description:
          "It uses the naturally-aspirated V10 engine from the STO and has a top speed of 325 km/h (202 mph) and an acceleration time of 0-100 km/h (0-62 mph) in 3.2 seconds.",
      },
    ],
    alternativeBrands: [
      { name: "rolls-royce-dawn", displayName: "Rolls Royce Dawn", category: "Luxury Convertible", power: "563 HP", price: "$899/day", color: "bg-purple-500" },
      { name: "ferrari-sf90-stradale", displayName: "Ferrari SF90", category: "Hybrid Supercar", power: "819 HP", price: "$2,999/day", color: "bg-red-500" },
      { name: "bentley-continental-gt", displayName: "Bentley Continental", category: "Luxury Coupe", power: "626 HP", price: "$899/day", color: "bg-blue-600" },
      { name: "porsche-911-turbo-s", displayName: "Porsche 911", category: "Sports Car", power: "640 HP", price: "$699/day", color: "bg-yellow-500" },
    ],
  },
}

const getVehicleData = (id: string) => {
  if (vehiclesData[id]) return vehiclesData[id]

  const parts = id.split("-")
  const brand = parts[0]?.toUpperCase() || "LUXURY"
  const model = parts.slice(1).join(" ").toUpperCase() || "VEHICLE"

  return {
    name: `${brand} ${model}`,
    price: "899,00",
    brand: brand,
    description: `The ${brand} ${model} is a premium luxury vehicle that combines sophisticated design with exceptional performance. Experience the pinnacle of automotive excellence.`,
    gallery: [
      { id: 1, label: "Side View" },
      { id: 2, label: "Front View" },
      { id: 3, label: "Interior" },
      { id: 4, label: "Dashboard" },
    ],
    specs: [
      { title: "SAFETY", description: "Equipped with advanced safety features including anti-lock brakes, stability control, and multiple airbags for maximum protection." },
      { title: "TRANSMISSION", description: "Features a smooth automatic transmission that delivers seamless shifts for an exceptional driving experience." },
      { title: "ENGINE", description: "Powered by a high-performance engine delivering impressive horsepower and torque for thrilling acceleration." },
      { title: "PERFORMANCE", description: "Exceptional acceleration and top speed capabilities combined with refined handling and comfort." },
    ],
    alternativeBrands: [
      { name: "rolls-royce-dawn", displayName: "Rolls Royce Dawn", category: "Luxury Convertible", power: "563 HP", price: "$899/day", color: "bg-purple-500" },
      { name: "lamborghini-urus-green", displayName: "Lamborghini Urus", category: "Super SUV", power: "770 HP", price: "$999/day", color: "bg-green-500" },
      { name: "bentley-continental-gt", displayName: "Bentley Continental", category: "Luxury Coupe", power: "626 HP", price: "$899/day", color: "bg-blue-600" },
      { name: "ferrari-sf90-stradale", displayName: "Ferrari SF90", category: "Hybrid Supercar", power: "819 HP", price: "$2,999/day", color: "bg-yellow-500" },
    ],
  }
}

const specIcons = [Shield, Cog, Gauge, Zap]

/* ── Rental Conditions (Important Details - Flip Cards) ── */

const rentalConditions = [
  { title: "Speed Limit", subtitle: "Speed restrictions apply", color: "bg-[#1e293b]", backText: "Speeding violations over 90 mph are considered breaches of our rental policy and will result in the termination of your rental without refund. We deduct $50 from the deposit per speeding infraction over 90 mph." },
  { title: "Gas Requirements", subtitle: "Full tank policy", color: "bg-[#e8830c]", backText: "Vehicles are provided with a full tank of gas and must be returned full. Failure to do so will result in a $150 deduction from the deposit." },
  { title: "Return Policy", subtitle: "24-hour return window", color: "bg-[#1aab8a]", backText: "Rentals are for a 24-hour period or until 4 PM, whichever comes first. Fees apply for late returns." },
  { title: "Mileage Allowance", subtitle: "125 miles per day limit", color: "bg-[#8b5cf6]", backText: "A maximum of 125 miles per day is included. Additional mileage is charged at $3 per mile. Must ask permission to leave Miami/Broward Counties." },
  { title: "Delivery & Pick-up", subtitle: "Service available 24/7", color: "bg-[#dc2626]", backText: "Customer service is open 24/7 but deliveries and pick-ups only happen between 10 am - 7 pm Mon-Sun. Any pick-ups or deliveries outside of those times can be added for $100 each way." },
  { title: "Delivery Pricing", subtitle: "Variable delivery costs", color: "bg-[#e8830c]", backText: "$100 Up to 20 Miles | $150 20 to 40 Miles | $200 40 to 50 Miles" },
  { title: "Security Deposits", subtitle: "Deposit required upfront", color: "bg-[#3b82f6]", backText: "Security deposit holds will be released 24 hours after the vehicle is returned and inspected. We require a credit or debit card on file." },
  { title: "Incidentals & Tolls", subtitle: "Additional charges apply", color: "bg-[#ec4899]", backText: "Security deposit holds will be released 24 hours after the vehicle is returned and inspected. We require a credit or debit card on file." },
  { title: "No Smoking Allowed", subtitle: "Strict no-smoking policy", color: "bg-[#1e293b]", backText: "If the vehicle is returned with a smoke odor or other evidence of smoking, a $300 smoking fee is deducted from the customer's deposit." },
  { title: "2-Day Minimum", subtitle: "Minimum rental period", color: "bg-[#0ea5e9]", backText: "Customers who choose to rent a vehicle for only one day do not qualify for specials on weekends." },
  { title: "No Early Return Refunds", subtitle: "Early return policy", color: "bg-[#06b6d4]", backText: "Customers who choose to end their trip early will receive a credit for future rentals. However, we do not refund for early returns." },
  { title: "Delivery & Pick-up Policy", subtitle: "Grace period applies", color: "bg-[#ef4444]", backText: "Set appointment times have a 15-min grace period. After that, it's $100 per hour." },
]

const conditionIcons = [
  <svg key={0} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key={1} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 7h10a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm10 0V5a2 2 0 00-2-2H7a2 2 0 00-2 2v2m12 4h1a2 2 0 012 2v3a1 1 0 01-1 1h-1m-1-6V9" /></svg>,
  <svg key={2} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
  <svg key={3} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  <svg key={4} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>,
  <svg key={5} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key={6} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
  <svg key={7} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key={8} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>,
  <svg key={9} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  <svg key={10} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 17h.01M16 17h.01M3 11l1.5-5A2 2 0 016.4 4.5h11.2a2 2 0 011.9 1.5L21 11M3 11v6a1 1 0 001 1h1m16-7v6a1 1 0 01-1 1h-1M3 11h18" /></svg>,
  <svg key={11} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
]

/* ── Flip Card Component ─────────────────────── */

function FlipCard({ cond, index }: { cond: any; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="h-[220px] cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl border border-border bg-card p-6 flex flex-col items-center text-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${cond.color} text-white mb-4`}>
            {conditionIcons[index]}
          </div>
          <h3 className="font-serif text-base font-bold text-foreground italic">
            {cond.title}
          </h3>
          <p className="text-muted-foreground text-sm mt-1">{cond.subtitle}</p>
          <p className="text-primary text-sm mt-auto">Click to learn more</p>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 rounded-2xl ${cond.color} p-6 flex flex-col items-center text-center text-white overflow-y-auto`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 mb-3">
            {conditionIcons[index]}
          </div>
          <h3 className="font-serif text-base font-bold italic mb-2">
            {cond.title}
          </h3>
          <p className="text-white/90 text-xs leading-relaxed flex-1">
            {cond.backText}
          </p>
          <p className="text-white/70 text-xs mt-2">Click to close</p>
        </div>
      </motion.div>
    </div>
  )
}

/* ── Satisfaction Points ───────────────────────── */

const satisfactionPoints = [
  "Immaculate fleet of luxury vehicles",
  "Exceptional customer service 24/7",
  "Clean cars guaranteed every time",
  "Unforgettable Miami experience",
]

/* ── Main Page Component ─────────────────────── */

export default function VehicleDetailsPage() {
  const params = useParams()
  const vehicleId = params.id as string
  const vehicleData = getVehicleData(vehicleId)
  const [selectedImage, setSelectedImage] = useState(0)
  const [hoveredSpec, setHoveredSpec] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#f5f5f5] overflow-x-hidden">
      <LuxuryHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-12">
        <Link
          href="/car-rental"
          className="inline-flex items-center gap-2 text-foreground/50 hover:text-primary text-sm tracking-wide mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Fleet
        </Link>

        {/* Vehicle Title and Price */}
        <div className="mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight font-sans uppercase"
          >
            {vehicleData.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl md:text-3xl font-bold text-primary mt-2"
          >
            {vehicleData.price} USD / DAY
          </motion.p>
        </div>

        {/* Description */}
        <div className="mb-8">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-foreground/70 max-w-2xl leading-relaxed"
          >
            {vehicleData.description}
          </motion.p>
        </div>

        {/* Car Image with Brand Watermark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full max-w-5xl mx-auto mb-8"
        >
          {/* Brand Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.08, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold font-serif text-foreground whitespace-nowrap select-none"
            >
              {vehicleData.brand}
            </motion.span>
          </div>

          {/* Main Car Image */}
          <div className="relative aspect-[16/7] z-10">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-8 bg-foreground/25 blur-2xl rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-xl tracking-widest">CAR IMAGE</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gallery Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-4 mb-12"
        >
          {vehicleData.gallery.map((image: any, index: number) => (
            <motion.button
              key={image.id}
              onClick={() => setSelectedImage(index)}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`relative w-32 h-24 md:w-40 md:h-28 rounded-lg overflow-hidden transition-all duration-300 ${
                selectedImage === index
                  ? "ring-2 ring-primary ring-offset-2 shadow-lg"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-300 to-gray-500 flex items-center justify-center">
                <span className="text-gray-600 text-xs tracking-wide">{image.label}</span>
              </div>
              {selectedImage === index && (
                <motion.div
                  layoutId="selectedImage"
                  className="absolute inset-0 border-2 border-primary rounded-lg"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 bg-transparent border-2 border-foreground text-foreground font-semibold rounded-full hover:bg-foreground hover:text-background transition-all duration-300 min-w-[200px]"
          >
            <span className="flex items-center justify-center gap-2">
              <FileText className="h-5 w-5" />
              SEE CONDITIONS
            </span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 min-w-[200px]"
          >
            <span className="flex items-center justify-center gap-2">
              <CreditCard className="h-5 w-5" />
              {"BOOK & PAY NOW"}
            </span>
          </motion.button>
          <motion.a
            href="https://wa.me/13053109327"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 bg-foreground text-background font-semibold rounded-full hover:bg-foreground/80 transition-all duration-300 min-w-[200px] text-center"
          >
            <span className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              BOOK IN WHATSAPP
            </span>
          </motion.a>
        </motion.div>
      </section>

      {/* Vehicle Specifications - 4 columns with vertical dividers */}
      <section className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          >
            {vehicleData.specs.map((spec: any, index: number) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.7 }}
                onMouseEnter={() => setHoveredSpec(index)}
                onMouseLeave={() => setHoveredSpec(null)}
                className="relative px-8 py-10 text-center group cursor-default"
              >
                {/* Vertical divider */}
                {index < vehicleData.specs.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    className="hidden lg:block absolute right-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-foreground/15 to-transparent origin-top"
                  />
                )}

                {/* Hover glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredSpec === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-2 bg-gradient-to-b from-primary/5 to-transparent rounded-2xl pointer-events-none"
                />

                {/* Title with underline */}
                <div className="relative inline-block mb-6">
                  <motion.h3
                    className="text-xl font-bold text-foreground tracking-wide font-serif italic relative z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {spec.title}
                  </motion.h3>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.15, duration: 0.5 }}
                  />
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="text-sm text-foreground/60 leading-relaxed"
                >
                  {spec.description}
                </motion.p>

                {/* Bottom accent on hover */}
                <motion.div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredSpec === index ? 60 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rental Conditions - Important Details Flip Cards */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-3 text-primary text-sm tracking-[0.3em] uppercase font-semibold">
                <span className="w-8 h-px bg-primary" />
                RENTAL CONDITIONS
                <span className="w-8 h-px bg-primary" />
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 italic">
                Important Details
              </h2>
              <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
                Click on any card to learn more about our rental policies and conditions
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rentalConditions.map((cond, i) => (
              <ScrollReveal key={cond.title} delay={i * 50}>
                <FlipCard cond={cond} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* You Can Also Rent */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground italic">
                You Can Also Rent
              </h2>
              <p className="text-muted-foreground mt-4">
                Explore our other premium luxury collections
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicleData.alternativeBrands.map((alt: any, i: number) => (
              <ScrollReveal key={alt.name} delay={i * 100}>
                <Link
                  href={`/car-rental/vehicle/${alt.name}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                  onClick={(e) => {
                    e.preventDefault()
                    window.location.href = `/car-rental/vehicle/${alt.name}`
                  }}
                >
                  {/* Colored top bar */}
                  <div className={`h-1.5 ${alt.color}`} />

                  {/* Image placeholder */}
                  <div className="relative aspect-[4/3] mx-4 mt-4 bg-gradient-to-br from-muted to-muted/40 rounded-xl flex items-center justify-center overflow-hidden">
                    <span className="text-muted-foreground/30 text-sm tracking-widest">IMAGE</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-3">
                      <span className="text-foreground text-sm font-medium flex items-center gap-1">
                        {"Explore"} <ArrowLeft className="h-3.5 w-3.5 rotate-[135deg]" />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {alt.displayName}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">{alt.category}</p>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                      <div>
                        <p className="text-muted-foreground text-xs">Power</p>
                        <p className="text-sm font-semibold text-primary">{alt.power}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs">Starting from</p>
                        <p className="text-sm font-bold text-foreground">{alt.price}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Satisfaction Guarantee */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <div>
              <ScrollReveal>
                <span className="inline-flex items-center gap-3 text-primary text-sm tracking-[0.3em] uppercase font-semibold">
                  <span className="w-8 h-px bg-primary" />
                  OUR PROMISE
                </span>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 leading-tight text-balance">
                  {"Abrakadabra's 100% Satisfaction Guarantee"}
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-muted-foreground mt-6 leading-relaxed">
                  {"Abrakadabra - Miami Exotic Car Rentals ensures your complete satisfaction. Our fleet of immaculate Lamborghini's and Rolls Royces amongst other luxury brands guarantees an unforgettable customer service and top-notch experience. We take pride in delivering clean cars and exceptional service, making your Miami journey truly extraordinary."}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p className="text-muted-foreground/70 mt-4 text-sm italic leading-relaxed">
                  {"If you're looking to rent a Lamborghini or Rolls Royce in Miami, choose us for 100% satisfaction in every ride. Come to Abrakadabra - Miami Exotic Car Rentals and experience the epitome of luxury, style, and satisfaction."}
                </p>
              </ScrollReveal>

              <div className="mt-8 flex flex-col gap-3">
                {satisfactionPoints.map((point, i) => (
                  <ScrollReveal key={point} delay={350 + i * 80}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary">
                        <Check className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-primary">{point}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <ScrollReveal direction="left" delay={200}>
              <div className="relative">
                <div className="relative aspect-[3/4] bg-muted rounded-2xl overflow-hidden">
                  <div className="absolute inset-4 bg-background rounded-xl shadow-inner flex flex-col items-center justify-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-primary/20" />
                    <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center">
                      <span className="text-muted-foreground/40 text-xs tracking-widest">IMAGE</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-muted-foreground/10 rounded-full" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <LuxuryFooter />
    </main>
  )
}
