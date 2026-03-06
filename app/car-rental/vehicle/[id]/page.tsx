"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useParams } from "next/navigation"
import { useState, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
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
      { name: "ferrari-f8-spider", displayName: "Ferrari F8", category: "Hybrid Supercar", power: "819 HP", price: "$2,999/day", color: "bg-yellow-500" },
    ],
  },

  // ✅ Lamborghini titles correctos (basado en tus carpetas)
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
      { title: "SAFETY", description: "Anti-lock brakes, stability control, and six different airbags keep occupants safe in the Lamborghini Huracan." },
      { title: "TRANSMISSION", description: "7-speed dual-clutch transmission (LDF) for fast and smooth shifts." },
      { title: "ENGINE", description: "V10 engine delivering thrilling performance and an iconic sound." },
      { title: "PERFORMANCE", description: "Supercar acceleration and top speed with razor-sharp handling." },
    ],
    alternativeBrands: [
      { name: "rolls-royce-dawn", displayName: "Rolls Royce Dawn", category: "Luxury Convertible", power: "563 HP", price: "$899/day", color: "bg-purple-500" },
      { name: "ferrari-f8-spider", displayName: "Ferrari F8", category: "Hybrid Supercar", power: "819 HP", price: "$2,999/day", color: "bg-red-500" },
      { name: "bentley-continental-gt", displayName: "Bentley Continental", category: "Luxury Coupe", power: "626 HP", price: "$899/day", color: "bg-blue-600" },
      { name: "mclaren-gt", displayName: "McLaren GT", category: "Sports Car", power: "640 HP", price: "$699/day", color: "bg-yellow-500" },
    ],
  },

  "lamborghini-huracan-rojo": {
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
      { title: "SAFETY", description: "Anti-lock brakes, stability control, and multiple airbags for protection." },
      { title: "TRANSMISSION", description: "7-speed dual-clutch transmission for instant response." },
      { title: "ENGINE", description: "High-revving V10 for pure supercar emotion." },
      { title: "PERFORMANCE", description: "Rapid acceleration with signature Lamborghini handling." },
    ],
    alternativeBrands: [
      { name: "lamborghini-huracan", displayName: "Lamborghini Huracan", category: "Supercar", power: "V10", price: "$799/day", color: "bg-red-500" },
      { name: "lamborghini-huracan-gris", displayName: "Lamborghini Huracan", category: "Supercar", power: "V10", price: "$999/day", color: "bg-slate-500" },
      { name: "lamborghini-evo-sto-yellow", displayName: "Lamborghini EVO STO", category: "Track", power: "V10", price: "$1,999/day", color: "bg-yellow-500" },
      { name: "lamborghini-urus-white", displayName: "Lamborghini Urus", category: "SUV", power: "Twin-Turbo", price: "$899/day", color: "bg-neutral-300" },
    ],
  },

  "lamborghini-huracan-gris": {
    name: "LAMBORGHINI HURACAN",
    price: "999,00",
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
      { title: "SAFETY", description: "Advanced stability control, ABS, and airbags." },
      { title: "TRANSMISSION", description: "7-speed dual-clutch transmission." },
      { title: "ENGINE", description: "Naturally aspirated V10 power." },
      { title: "PERFORMANCE", description: "Supercar performance with daily comfort." },
    ],
    alternativeBrands: [
      { name: "lamborghini-huracan-rojo", displayName: "Lamborghini Huracan", category: "Supercar", power: "V10", price: "$799/day", color: "bg-red-500" },
      { name: "lamborghini-huracan-evo-black", displayName: "Huracan EVO", category: "Supercar", power: "V10", price: "$999/day", color: "bg-neutral-900" },
      { name: "lamborghini-evo-spyder-blue", displayName: "Evo Spyder", category: "Convertible", power: "V10", price: "$899/day", color: "bg-sky-500" },
      { name: "lamborghini-urus-s-green", displayName: "Urus S", category: "SUV", power: "Twin-Turbo", price: "$999/day", color: "bg-green-500" },
    ],
  },

  // ✅ si en tu app todavía existe la ruta /vehicle/lamborghini-huracan-white
  "lamborghini-huracan-white": {
    name: "LAMBORGHINI HURACAN",
    price: "999,00",
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
      { title: "SAFETY", description: "Advanced stability control, ABS, and airbags." },
      { title: "TRANSMISSION", description: "7-speed dual-clutch transmission." },
      { title: "ENGINE", description: "Naturally aspirated V10 power." },
      { title: "PERFORMANCE", description: "Supercar performance with daily comfort." },
    ],
    alternativeBrands: [
      { name: "lamborghini-huracan", displayName: "Lamborghini Huracan", category: "Supercar", power: "V10", price: "$799/day", color: "bg-red-500" },
      { name: "lamborghini-huracan-gris", displayName: "Lamborghini Huracan", category: "Supercar", power: "V10", price: "$999/day", color: "bg-slate-500" },
      { name: "lamborghini-huracan-evo-green", displayName: "Huracan EVO", category: "Supercar", power: "V10", price: "$999/day", color: "bg-green-500" },
      { name: "lamborghini-urus-white", displayName: "Lamborghini Urus", category: "SUV", power: "Twin-Turbo", price: "$899/day", color: "bg-neutral-300" },
    ],
  },

  "lamborghini-evo-spyder-blue": {
    name: "LAMBORGHINI EVO SPYDER",
    price: "899,00",
    brand: "LAMBORGHINI",
    description:
      "The Lamborghini Evo Spyder combines open-top driving with supercar performance and unmistakable Lamborghini design.",
    gallery: [
      { id: 1, label: "Side View" },
      { id: 2, label: "Front View" },
      { id: 3, label: "Interior" },
      { id: 4, label: "Dashboard" },
    ],
    specs: [
      { title: "SAFETY", description: "Advanced safety systems and stability control." },
      { title: "TRANSMISSION", description: "7-speed dual-clutch transmission for fast shifts." },
      { title: "ENGINE", description: "High-performance engine tuned for supercar thrills." },
      { title: "PERFORMANCE", description: "Exhilarating acceleration with open-top freedom." },
    ],
    alternativeBrands: [
      { name: "lamborghini-huracan", displayName: "Lamborghini Huracan", category: "Supercar", power: "V10", price: "$799/day", color: "bg-red-500" },
      { name: "lamborghini-evo-sto-yellow", displayName: "Lamborghini EVO STO", category: "Track", power: "V10", price: "$1,999/day", color: "bg-yellow-500" },
      { name: "mclaren-gt", displayName: "McLaren GT", category: "Sports Car", power: "640 HP", price: "$699/day", color: "bg-yellow-500" },
      { name: "ferrari-f8-spider", displayName: "Ferrari F8", category: "Supercar", power: "710 HP", price: "$2,999/day", color: "bg-red-500" },
    ],
  },

  "lamborghini-evo-sto-yellow": {
    name: "LAMBORGHINI EVO STO",
    price: "1.999,00",
    brand: "LAMBORGHINI",
    description:
      "The Lamborghini EVO STO is a track-focused supercar built for maximum performance, aero efficiency, and pure driving excitement.",
    gallery: [
      { id: 1, label: "Side View" },
      { id: 2, label: "Front View" },
      { id: 3, label: "Interior" },
      { id: 4, label: "Dashboard" },
    ],
    specs: [
      { title: "SAFETY", description: "High-performance braking and stability systems." },
      { title: "TRANSMISSION", description: "Lightning-fast dual-clutch transmission." },
      { title: "ENGINE", description: "V10 power optimized for track dominance." },
      { title: "PERFORMANCE", description: "Extreme handling and acceleration with race-ready aero." },
    ],
    alternativeBrands: [
      { name: "lamborghini-huracan", displayName: "Lamborghini Huracan", category: "Supercar", power: "V10", price: "$799/day", color: "bg-red-500" },
      { name: "lamborghini-huracan-evo-black", displayName: "Huracan EVO", category: "Supercar", power: "V10", price: "$999/day", color: "bg-neutral-900" },
      { name: "ferrari-f8-spider", displayName: "Ferrari F8", category: "Supercar", power: "710 HP", price: "$2,999/day", color: "bg-red-500" },
      { name: "mclaren-gt", displayName: "McLaren GT", category: "Sports Car", power: "640 HP", price: "$699/day", color: "bg-yellow-500" },
    ],
  },

  "lamborghini-huracan-evo-black": {
    name: "LAMBORGHINI HURACAN EVO",
    price: "999,00",
    brand: "LAMBORGHINI",
    description:
      "The Lamborghini Huracan EVO blends extreme performance with refined aerodynamics and cutting-edge driving technology.",
    gallery: [
      { id: 1, label: "Side View" },
      { id: 2, label: "Front View" },
      { id: 3, label: "Interior" },
      { id: 4, label: "Dashboard" },
    ],
    specs: [
      { title: "SAFETY", description: "Stability control, ABS, and advanced braking." },
      { title: "TRANSMISSION", description: "Dual-clutch transmission for seamless speed." },
      { title: "ENGINE", description: "V10 performance with Lamborghini character." },
      { title: "PERFORMANCE", description: "Sharp handling and aggressive acceleration." },
    ],
    alternativeBrands: [
      { name: "lamborghini-huracan", displayName: "Lamborghini Huracan", category: "Supercar", power: "V10", price: "$799/day", color: "bg-red-500" },
      { name: "lamborghini-huracan-gris", displayName: "Lamborghini Huracan", category: "Supercar", power: "V10", price: "$999/day", color: "bg-slate-500" },
      { name: "lamborghini-evo-sto-yellow", displayName: "EVO STO", category: "Track", power: "V10", price: "$1,999/day", color: "bg-yellow-500" },
      { name: "lamborghini-urus-dark-grey", displayName: "Urus", category: "SUV", power: "Twin-Turbo", price: "$799/day", color: "bg-neutral-900" },
    ],
  },

  "lamborghini-huracan-evo-green": {
    name: "LAMBORGHINI HURACAN EVO",
    price: "999,00",
    brand: "LAMBORGHINI",
    description:
      "The Lamborghini Huracan EVO blends extreme performance with refined aerodynamics and cutting-edge driving technology.",
    gallery: [
      { id: 1, label: "Side View" },
      { id: 2, label: "Front View" },
      { id: 3, label: "Interior" },
      { id: 4, label: "Dashboard" },
    ],
    specs: [
      { title: "SAFETY", description: "Stability control, ABS, and advanced braking." },
      { title: "TRANSMISSION", description: "Dual-clutch transmission for seamless speed." },
      { title: "ENGINE", description: "V10 performance with Lamborghini character." },
      { title: "PERFORMANCE", description: "Sharp handling and aggressive acceleration." },
    ],
    alternativeBrands: [
      { name: "lamborghini-huracan", displayName: "Lamborghini Huracan", category: "Supercar", power: "V10", price: "$799/day", color: "bg-red-500" },
      { name: "lamborghini-urus-s-green", displayName: "Urus S", category: "SUV", power: "Twin-Turbo", price: "$999/day", color: "bg-green-500" },
      { name: "lamborghini-evo-sto-yellow", displayName: "EVO STO", category: "Track", power: "V10", price: "$1,999/day", color: "bg-yellow-500" },
      { name: "ferrari-f8-spider", displayName: "Ferrari F8", category: "Supercar", power: "710 HP", price: "$2,999/day", color: "bg-red-500" },
    ],
  },

  "lamborghini-urus-dark-grey": {
    name: "LAMBORGHINI URUS",
    price: "799,00",
    brand: "LAMBORGHINI",
    description:
      "The Lamborghini Urus is a super SUV that combines luxury, comfort and thrilling performance in a bold design.",
    gallery: [
      { id: 1, label: "Side View" },
      { id: 2, label: "Front View" },
      { id: 3, label: "Interior" },
      { id: 4, label: "Dashboard" },
    ],
    specs: [
      { title: "SAFETY", description: "Advanced driver assistance systems and stability control." },
      { title: "TRANSMISSION", description: "Smooth automatic transmission designed for power delivery." },
      { title: "ENGINE", description: "High-performance engine built for SUV dominance." },
      { title: "PERFORMANCE", description: "Supercar-like acceleration in a luxury SUV." },
    ],
    alternativeBrands: [
      { name: "lamborghini-urus-white", displayName: "Urus", category: "SUV", power: "Twin-Turbo", price: "$899/day", color: "bg-neutral-300" },
      { name: "lamborghini-urus-blue", displayName: "Urus", category: "SUV", power: "Twin-Turbo", price: "$1,199/day", color: "bg-blue-600" },
      { name: "lamborghini-urus-s-green", displayName: "Urus S", category: "SUV", power: "Twin-Turbo", price: "$999/day", color: "bg-green-500" },
      { name: "rolls-royce-cullinan-silver", displayName: "Cullinan", category: "Luxury SUV", power: "V12", price: "$999/day", color: "bg-slate-500" },
    ],
  },

  "lamborghini-urus-white": {
    name: "LAMBORGHINI URUS",
    price: "899,00",
    brand: "LAMBORGHINI",
    description:
      "The Lamborghini Urus is a super SUV that combines luxury, comfort and thrilling performance in a bold design.",
    gallery: [
      { id: 1, label: "Side View" },
      { id: 2, label: "Front View" },
      { id: 3, label: "Interior" },
      { id: 4, label: "Dashboard" },
    ],
    specs: [
      { title: "SAFETY", description: "Advanced driver assistance systems and stability control." },
      { title: "TRANSMISSION", description: "Smooth automatic transmission designed for power delivery." },
      { title: "ENGINE", description: "High-performance engine built for SUV dominance." },
      { title: "PERFORMANCE", description: "Supercar-like acceleration in a luxury SUV." },
    ],
    alternativeBrands: [
      { name: "lamborghini-urus-dark-grey", displayName: "Urus", category: "SUV", power: "Twin-Turbo", price: "$799/day", color: "bg-neutral-900" },
      { name: "lamborghini-urus-blue", displayName: "Urus", category: "SUV", power: "Twin-Turbo", price: "$1,199/day", color: "bg-blue-600" },
      { name: "lamborghini-urus-s-green", displayName: "Urus S", category: "SUV", power: "Twin-Turbo", price: "$999/day", color: "bg-green-500" },
      { name: "rolls-royce-cullinan-white", displayName: "Cullinan", category: "Luxury SUV", power: "V12", price: "$999/day", color: "bg-neutral-300" },
    ],
  },

  "lamborghini-urus-grey": {
    name: "LAMBORGHINI URUS",
    price: "899,00",
    brand: "LAMBORGHINI",
    description:
      "The Lamborghini Urus is a super SUV that combines luxury, comfort and thrilling performance in a bold design.",
    gallery: [
      { id: 1, label: "Side View" },
      { id: 2, label: "Front View" },
      { id: 3, label: "Interior" },
      { id: 4, label: "Dashboard" },
    ],
    specs: [
      { title: "SAFETY", description: "Advanced driver assistance systems and stability control." },
      { title: "TRANSMISSION", description: "Smooth automatic transmission designed for power delivery." },
      { title: "ENGINE", description: "High-performance engine built for SUV dominance." },
      { title: "PERFORMANCE", description: "Supercar-like acceleration in a luxury SUV." },
    ],
    alternativeBrands: [
      { name: "lamborghini-urus-dark-grey", displayName: "Urus", category: "SUV", power: "Twin-Turbo", price: "$799/day", color: "bg-neutral-900" },
      { name: "lamborghini-urus-white", displayName: "Urus", category: "SUV", power: "Twin-Turbo", price: "$899/day", color: "bg-neutral-300" },
      { name: "lamborghini-urus-s-green", displayName: "Urus S", category: "SUV", power: "Twin-Turbo", price: "$999/day", color: "bg-green-500" },
      { name: "bentley-azure-bentayga", displayName: "Bentayga", category: "Luxury SUV", power: "542 HP", price: "$899/day", color: "bg-blue-600" },
    ],
  },

  "lamborghini-urus-blue": {
    name: "LAMBORGHINI URUS",
    price: "1.199,00",
    brand: "LAMBORGHINI",
    description:
      "The Lamborghini Urus is a super SUV that combines luxury, comfort and thrilling performance in a bold design.",
    gallery: [
      { id: 1, label: "Side View" },
      { id: 2, label: "Front View" },
      { id: 3, label: "Interior" },
      { id: 4, label: "Dashboard" },
    ],
    specs: [
      { title: "SAFETY", description: "Advanced driver assistance systems and stability control." },
      { title: "TRANSMISSION", description: "Smooth automatic transmission designed for power delivery." },
      { title: "ENGINE", description: "High-performance engine built for SUV dominance." },
      { title: "PERFORMANCE", description: "Supercar-like acceleration in a luxury SUV." },
    ],
    alternativeBrands: [
      { name: "lamborghini-urus-dark-grey", displayName: "Urus", category: "SUV", power: "Twin-Turbo", price: "$799/day", color: "bg-neutral-900" },
      { name: "lamborghini-urus-white", displayName: "Urus", category: "SUV", power: "Twin-Turbo", price: "$899/day", color: "bg-neutral-300" },
      { name: "lamborghini-urus-s-green", displayName: "Urus S", category: "SUV", power: "Twin-Turbo", price: "$999/day", color: "bg-green-500" },
      { name: "rolls-royce-cullinan-silver", displayName: "Cullinan", category: "Luxury SUV", power: "V12", price: "$999/day", color: "bg-slate-500" },
    ],
  },

  "lamborghini-urus-s-green": {
    name: "LAMBORGHINI URUS S",
    price: "999,00",
    brand: "LAMBORGHINI",
    description:
      "The Lamborghini Urus S is the refined evolution of the super SUV, combining luxury, technology, and exhilarating performance.",
    gallery: [
      { id: 1, label: "Side View" },
      { id: 2, label: "Front View" },
      { id: 3, label: "Interior" },
      { id: 4, label: "Dashboard" },
    ],
    specs: [
      { title: "SAFETY", description: "Advanced driver assistance systems and stability control." },
      { title: "TRANSMISSION", description: "Smooth automatic transmission designed for power delivery." },
      { title: "ENGINE", description: "High-performance engine built for SUV dominance." },
      { title: "PERFORMANCE", description: "Supercar-like acceleration in a luxury SUV." },
    ],
    alternativeBrands: [
      { name: "lamborghini-urus-dark-grey", displayName: "Urus", category: "SUV", power: "Twin-Turbo", price: "$799/day", color: "bg-neutral-900" },
      { name: "lamborghini-urus-white", displayName: "Urus", category: "SUV", power: "Twin-Turbo", price: "$899/day", color: "bg-neutral-300" },
      { name: "lamborghini-urus-blue", displayName: "Urus", category: "SUV", power: "Twin-Turbo", price: "$1,199/day", color: "bg-blue-600" },
      { name: "bentley-azure-bentayga", displayName: "Bentayga", category: "Luxury SUV", power: "542 HP", price: "$899/day", color: "bg-blue-600" },
    ],
  },

  // ✅ alias por si en tu sistema aún usas este id
  "lamborghini-urus-green": {
    name: "LAMBORGHINI URUS S",
    price: "999,00",
    brand: "LAMBORGHINI",
    description:
      "The Lamborghini Urus S is the refined evolution of the super SUV, combining luxury, technology, and exhilarating performance.",
    gallery: [
      { id: 1, label: "Side View" },
      { id: 2, label: "Front View" },
      { id: 3, label: "Interior" },
      { id: 4, label: "Dashboard" },
    ],
    specs: [
      { title: "SAFETY", description: "Advanced driver assistance systems and stability control." },
      { title: "TRANSMISSION", description: "Smooth automatic transmission designed for power delivery." },
      { title: "ENGINE", description: "High-performance engine built for SUV dominance." },
      { title: "PERFORMANCE", description: "Supercar-like acceleration in a luxury SUV." },
    ],
    alternativeBrands: [
      { name: "lamborghini-urus-dark-grey", displayName: "Urus", category: "SUV", power: "Twin-Turbo", price: "$799/day", color: "bg-neutral-900" },
      { name: "lamborghini-urus-white", displayName: "Urus", category: "SUV", power: "Twin-Turbo", price: "$899/day", color: "bg-neutral-300" },
      { name: "lamborghini-urus-blue", displayName: "Urus", category: "SUV", power: "Twin-Turbo", price: "$1,199/day", color: "bg-blue-600" },
      { name: "bentley-azure-bentayga", displayName: "Bentayga", category: "Luxury SUV", power: "542 HP", price: "$899/day", color: "bg-blue-600" },
    ],
  },
}

/* ── Images (ALL photos, exact names) ─────────────────────── */

const IMG = "/Images-Cars"

type ImgConfig = {
  hero: string
  images: string[]
}

const imgByVehicleId: Record<string, ImgConfig> = {
  // ── Bentley ─────────────────
  "bentley-azure-bentayga": {
    hero: `${IMG}/Bentley-Carros/Bentley_Azure_Bentayga/Bentley-Azzure-Bentayga.webp`,
    images: [
      `${IMG}/Bentley-Carros/Bentley_Azure_Bentayga/Bentley-Azzure-Bentayga.webp`,
      `${IMG}/Bentley-Carros/Bentley_Azure_Bentayga/Bentley-Azzure-Bentayga-1.webp`,
      `${IMG}/Bentley-Carros/Bentley_Azure_Bentayga/Bentley-Azzure-Bentayga-2.webp`,
      `${IMG}/Bentley-Carros/Bentley_Azure_Bentayga/Bentley-Azzure-Bentayga-3.webp`,
      `${IMG}/Bentley-Carros/Bentley_Azure_Bentayga/Bentley-Azzure-Bentayga-4.webp`,
      `${IMG}/Bentley-Carros/Bentley_Azure_Bentayga/Bentley-Azzure-Bentayga-5.webp`,
    ],
  },
  "bentley-continental-gt": {
    hero: `${IMG}/Bentley-Carros/Bentley_Continental_GT/Bentley-GT.webp`,
    images: [
      `${IMG}/Bentley-Carros/Bentley_Continental_GT/Bentley-GT.webp`,
      `${IMG}/Bentley-Carros/Bentley_Continental_GT/Bentley-GT-1.webp`,
      `${IMG}/Bentley-Carros/Bentley_Continental_GT/Bentley-GT-2.webp`,
      `${IMG}/Bentley-Carros/Bentley_Continental_GT/Bentley-GT-3.webp`,
    ],
  },
  "bentley-flying-spur": {
    hero: `${IMG}/Bentley-Carros/Bentley_Flying_Spur/BentleyFlyingSpur.webp`,
    images: [
      `${IMG}/Bentley-Carros/Bentley_Flying_Spur/BentleyFlyingSpur.webp`,
      `${IMG}/Bentley-Carros/Bentley_Flying_Spur/BentleyFlyingSpur-1.webp`,
      `${IMG}/Bentley-Carros/Bentley_Flying_Spur/BentleyFlyingSpur-2.webp`,
      `${IMG}/Bentley-Carros/Bentley_Flying_Spur/BentleyFlyingSpur-3.webp`,
      `${IMG}/Bentley-Carros/Bentley_Flying_Spur/BentleyFlyingSpur-4.webp`,
    ],
  },

  // ── BMW ─────────────────────
  "bmw-7-series-740i": {
    hero: `${IMG}/Bmw-Carros/BMW_7_Series_740i/BMW-7-Series-740i.webp`,
    images: [
      `${IMG}/Bmw-Carros/BMW_7_Series_740i/BMW-7-Series-740i.webp`,
      `${IMG}/Bmw-Carros/BMW_7_Series_740i/BMW-7-Series-740i-1.webp`,
      `${IMG}/Bmw-Carros/BMW_7_Series_740i/BMW-7-Series-740i-2.webp`,
      `${IMG}/Bmw-Carros/BMW_7_Series_740i/BMW-7-Series-740i-3.webp`,
      `${IMG}/Bmw-Carros/BMW_7_Series_740i/BMW-7-Series-740i-4.webp`,
    ],
  },

  // ── Corvette ─────────────────
  "corvette-c8-2023-blue": {
    hero: `${IMG}/Corvette-Carros/Corvette_C8_2023_Azul/Corvette_C8_2023_Azul.webp`,
    images: [
      `${IMG}/Corvette-Carros/Corvette_C8_2023_Azul/Corvette_C8_2023_Azul.webp`,
      `${IMG}/Corvette-Carros/Corvette_C8_2023_Azul/Corvette_C8_2023_Azul-1.webp`,
      `${IMG}/Corvette-Carros/Corvette_C8_2023_Azul/Corvette_C8_2023_Azul-2.webp`,
      `${IMG}/Corvette-Carros/Corvette_C8_2023_Azul/Corvette_C8_2023_Azul-3.webp`,
      `${IMG}/Corvette-Carros/Corvette_C8_2023_Azul/Corvette_C8_2023_Azul-4.webp`,
    ],
  },
  "corvette-c8-2024-red": {
    hero: `${IMG}/Corvette-Carros/Corvette_C8_2024_Rojo/Corvette_C8_2024_Rojo.webp`,
    images: [
      `${IMG}/Corvette-Carros/Corvette_C8_2024_Rojo/Corvette_C8_2024_Rojo.webp`,
      `${IMG}/Corvette-Carros/Corvette_C8_2024_Rojo/Corvette_C8_2024_Rojo-1.png`,
      `${IMG}/Corvette-Carros/Corvette_C8_2024_Rojo/Corvette_C8_2024_Rojo-2.webp`,
      `${IMG}/Corvette-Carros/Corvette_C8_2024_Rojo/Corvette_C8_2024_Rojo-3.webp`,
      `${IMG}/Corvette-Carros/Corvette_C8_2024_Rojo/Corvette_C8_2024_Rojo-4.webp`,
      `${IMG}/Corvette-Carros/Corvette_C8_2024_Rojo/Corvette_C8_2024_Rojo-5.webp`,
      `${IMG}/Corvette-Carros/Corvette_C8_2024_Rojo/Corvette_C8_2024_Rojo-6.webp`,
      `${IMG}/Corvette-Carros/Corvette_C8_2024_Rojo/Corvette_C8_2024_Rojo-7.webp`,
    ],
  },
  "corvette-c8-2024-Green": {
    hero: `${IMG}/Corvette-Carros/Corvette_C8_2024_Verde/Corvette_C8_2024_Verde.webp`,
    images: [
      `${IMG}/Corvette-Carros/Corvette_C8_2024_Verde/Corvette_C8_2024_Verde.webp`,
      `${IMG}/Corvette-Carros/Corvette_C8_2024_Verde/Corvette_C8_2024_Verde-1.webp`,
      `${IMG}/Corvette-Carros/Corvette_C8_2024_Verde/Corvette_C8_2024_Verde-2.webp`,
    ],
  },

  // ── Ferrari ──────────────────
  "ferrari-f8-spider": {
    hero: `${IMG}/Ferrari-Carros/Ferarri_F8_Spider/FerrariF8.webp`,
    images: [
      `${IMG}/Ferrari-Carros/Ferarri_F8_Spider/FerrariF8.webp`,
      `${IMG}/Ferrari-Carros/Ferarri_F8_Spider/FerrariF8-1.webp`,
      `${IMG}/Ferrari-Carros/Ferarri_F8_Spider/FerrariF8-2.webp`,
      `${IMG}/Ferrari-Carros/Ferarri_F8_Spider/FerrariF8-3.webp`,
    ],
  },

  // ── McLaren ──────────────────
  "mclaren-gt": {
    hero: `${IMG}/Maclaren-Carros/Mclaren_GT/McLaren-GT-1.webp`,
    images: [
      `${IMG}/Maclaren-Carros/Mclaren_GT/McLaren-GT-1.webp`,
      `${IMG}/Maclaren-Carros/Mclaren_GT/McLaren-GT-2.webp`,
      `${IMG}/Maclaren-Carros/Mclaren_GT/McLaren-GT-3.webp`,
      `${IMG}/Maclaren-Carros/Mclaren_GT/McLaren-GT-4.webp`,
    ],
  },

  // ── Mercedes ─────────────────
  "mercedes-benz-g63": {
    hero: `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_G63/Mercedes-G63.webp`,
    images: [
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_G63/Mercedes-G63.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_G63/Mercedes-G63-1.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_G63/Mercedes-G63-2.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_G63/Mercedes-G63-3.webp`,
    ],
  },
  "mercedes-benz-g63-brabus": {
    hero: `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_G63_Brabus/MercedesG63Brabus.webp`,
    images: [
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_G63_Brabus/MercedesG63Brabus.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_G63_Brabus/MercedesG63Brabus-1.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_G63_Brabus/MercedesG63Brabus-2.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_G63_Brabus/MercedesG63Brabus-3.webp`,
    ],
  },
  "mercedes-benz-g550": {
    hero: `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_G550/Mercedes-G550.webp`,
    images: [
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_G550/Mercedes-G550.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_G550/Mercedes-G550-1.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_G550/Mercedes-G550-2.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_G550/Mercedes-G550-3.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_G550/Mercedes-G550-4.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_G550/Mercedes-G550-5.webp`,
    ],
  },
  "mercedes-benz-maybach": {
    hero: `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_Maybach/MercedesMaybach.webp`,
    images: [
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_Maybach/MercedesMaybach.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_Maybach/MercedesMaybach-1.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_Maybach/MercedesMaybach-2.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_Maybach/MercedesMaybach-3.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_Maybach/MercedesMaybach-4.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_Maybach/MercedesMaybach-5.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_Maybach/MercedesMaybach-6.webp`,
    ],
  },
  "mercedes-benz-s580": {
    hero: `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_S580/Mercedes-Benz-S580.webp`,
    images: [
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_S580/Mercedes-Benz-S580.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_S580/Mercedes-Benz-S580-1.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_S580/Mercedes-Benz-S580-2.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_S580/Mercedes-Benz-S580-3.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_S580/Mercedes-Benz-S580-4.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_S580/Mercedes-Benz-S580-5.webp`,
      `${IMG}/Mercedes-Benz-Carros/Mercedes_Benz_S580/Mercedes-Benz-S580-6.webp`,
    ],
  },

  // ✅ ── Lamborghini (solo esta parte fue corregida) ──────────────
  "lamborghini-evo-spyder-blue": {
    hero: `${IMG}/Lamborguini-Carros/Lamborghini_Evo_Spyder/Lamborghini-Azul.webp`,
    images: [
      `${IMG}/Lamborguini-Carros/Lamborghini_Evo_Spyder/Lamborghini-Azul.webp`,
    ],
  },

  "lamborghini-evo-sto-yellow": {
    hero: `${IMG}/Lamborguini-Carros/Lamborghini_EVO_STO/Lamborghini-EVO-STO-Yellow.webp`,
    images: [
      `${IMG}/Lamborguini-Carros/Lamborghini_EVO_STO/Lamborghini-EVO-STO-Yellow.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_EVO_STO/Yellow.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_EVO_STO/Yellow-1.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_EVO_STO/Yellow-2.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_EVO_STO/Yellow-3.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_EVO_STO/Yellow-4.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_EVO_STO/Yellow-5.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_EVO_STO/Yellow-6.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_EVO_STO/Yellow-7.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_EVO_STO/Yellow-8.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_EVO_STO/Yellow-9.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_EVO_STO/Yellow-10.webp`,
    ],
  },

  // Huracan principal (ROJO) → para que el card de 799 quede bien
  "lamborghini-huracan": {
    hero: `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_Rojo/Lamborghini-Rojo.webp`,
    images: [
      `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_Rojo/Lamborghini-Rojo.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_Rojo/Rojo-1.webp`,
    ],
  },
  "lamborghini-huracan-rojo": {
    hero: `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_Rojo/Lamborghini-Rojo.webp`,
    images: [
      `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_Rojo/Lamborghini-Rojo.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_Rojo/Rojo-1.webp`,
    ],
  },

  // Huracan “white” en tu sistema → lo mapeamos a la carpeta Gris
  "lamborghini-huracan-white": {
    hero: `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_Gris/HuracanGray.webp`,
    images: [
      `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_Gris/HuracanGray.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_Gris/Grey-1.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_Gris/Grey-2.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_Gris/Grey-3.webp`,
    ],
  },
  "lamborghini-huracan-gris": {
    hero: `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_Gris/HuracanGray.webp`,
    images: [
      `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_Gris/HuracanGray.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_Gris/Grey-1.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_Gris/Grey-2.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_Gris/Grey-3.webp`,
    ],
  },

  "lamborghini-huracan-evo-black": {
    hero: `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_EVO_Negro/Lamborghini-Huracan-EVO-Negro.webp`,
    images: [
      `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_EVO_Negro/Lamborghini-Huracan-EVO-Negro.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_EVO_Negro/Negro-1.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_EVO_Negro/Negro-2.webp`,
    ],
  },

  "lamborghini-huracan-evo-green": {
    hero: `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_EVO_Verde/Lamborghini-Huracan-EVO-Verde.webp`,
    images: [
      `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_EVO_Verde/Lamborghini-Huracan-EVO-Verde.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_EVO_Verde/Verde-1.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_EVO_Verde/Verde-2.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_EVO_Verde/Verde-3.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_EVO_Verde/Verde-4.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Huracan_EVO_Verde/Verde-5.webp`,
    ],
  },

  "lamborghini-urus-grey": {
    hero: `${IMG}/Lamborguini-Carros/Lamborghini_Urus_1/Lamborghini-Urus-1.webp`,
    images: [
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_1/Lamborghini-Urus-1.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_1/Lamborghini-Urus-1-1.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_1/Urus-1-Negro.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_1/Urus-2-Negro.webp`,
    ],
  },

  "lamborghini-urus-blue": {
    hero: `${IMG}/Lamborguini-Carros/Lamborghini_Urus_Azul/Lamborghini-Urus-Azul.webp`,
    images: [
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_Azul/Lamborghini-Urus-Azul.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_Azul/Urus-Azul-1.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_Azul/Urus-Azul-2.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_Azul/Urus-Azul-3.webp`,
    ],
  },

  "lamborghini-urus-white": {
    hero: `${IMG}/Lamborguini-Carros/Lamborghini_Urus_Blanco/Lamborghini-URUS-white.webp`,
    images: [
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_Blanco/Lamborghini-URUS-white.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_Blanco/White-1.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_Blanco/White-2.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_Blanco/White-3.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_Blanco/White-4.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_Blanco/White-5.webp`,
    ],
  },

  "lamborghini-urus-dark-grey": {
    hero: `${IMG}/Lamborguini-Carros/Lamborghini_Urus_Negro/Urus-Negro.webp`,
    images: [
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_Negro/Urus-Negro.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_Negro/Urus-Negro-1.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_Negro/Urus-Negro-2.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_Negro/Urus-Negro-3.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_Negro/Urus-Negro-4.webp`,
    ],
  },

  "lamborghini-urus-s-green": {
    hero: `${IMG}/Lamborguini-Carros/Lamborghini_Urus_S_Verde/Lamborghini-Urus_S_Verde.webp`,
    images: [
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_S_Verde/Lamborghini-Urus_S_Verde.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_S_Verde/Green-1.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_S_Verde/Green-2.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_S_Verde/Green-3.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_S_Verde/Green-4.webp`,
    ],
  },

  // alias
  "lamborghini-urus-green": {
    hero: `${IMG}/Lamborguini-Carros/Lamborghini_Urus_S_Verde/Lamborghini-Urus_S_Verde.webp`,
    images: [
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_S_Verde/Lamborghini-Urus_S_Verde.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_S_Verde/Green-1.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_S_Verde/Green-2.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_S_Verde/Green-3.webp`,
      `${IMG}/Lamborguini-Carros/Lamborghini_Urus_S_Verde/Green-4.webp`,
    ],
  },

  // ── Rolls Royce ──────────────
  "rolls-royce-dawn": {
    hero: `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Dawn/RollsRoyceDawn.webp`,
    images: [
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Dawn/RollsRoyceDawn.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Dawn/RollsRoyceDawn-1.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Dawn/RollsRoyceDawn-2.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Dawn/RollsRoyceDawn-3.webp`,
    ],
  },
  "rolls-royce-cullinan-white": {
    hero: `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Blanco/RollsRoyceCullinanBlanco.webp`,
    images: [
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Blanco/RollsRoyceCullinanBlanco.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Blanco/RollsRoyceCullinanBlanco-1.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Blanco/RollsRoyceCullinanBlanco-2.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Blanco/RollsRoyceCullinanBlanco-3.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Blanco/RollsRoyceCullinanBlanco-4.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Blanco/RollsRoyceCullinanBlanco-5.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Blanco/RollsRoyceCullinanBlanco-6.webp`,
    ],
  },
  "rolls-royce-cullinan-black-1": {
    hero: `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Negro/RollsRoyceCullinan-Negro.webp`,
    images: [
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Negro/RollsRoyceCullinan-Negro.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Negro/RollsRoyceCullinan-Negro-1.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Negro/RollsRoyceCullinan-Negro-2.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Negro/RollsRoyceCullinan-Negro-3.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Negro/RollsRoyceCullinan-Negro-4.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Negro/RollsRoyceCullinan-Negro-5.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Negro/RollsRoyceCullinan-Negro-6.webp`,
    ],
  },
  "rolls-royce-cullinan-black-2": {
    hero: `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Negro_2/RollsRoyceCullinan-Black-2.webp`,
    images: [
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Negro_2/RollsRoyceCullinan-Black-2.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Negro_2/RollsRoyceCullinan-Black-2-1.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Negro_2/RollsRoyceCullinan-Black-2-2.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Negro_2/RollsRoyceCullinan-Black-2-3.webp`,
    ],
  },
  "rolls-royce-cullinan-silver": {
    hero: `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Gris/RollsRoyceCullinan-Gris.webp`,
    images: [
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Gris/RollsRoyceCullinan-Gris.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Gris/RollsRoyceCullinan-Gris-1.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Cullinan_Gris/RollsRoyceCullinan-Gris-2.webp`,
    ],
  },
  "rolls-royce-ghost": {
    hero: `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Ghost/RollsRoyceGhost.webp`,
    images: [
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Ghost/RollsRoyceGhost.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Ghost/RollsRoyceGhost-2.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Ghost/RollsRoyceGhost-3.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Ghost/RollsRoyceGhost-4.webp`,
    ],
  },
  "rolls-royce-phantom": {
    hero: `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Phantom/RollsRoycePhantom.webp`,
    images: [
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Phantom/RollsRoycePhantom.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Phantom/RollsRoycePhantom-1.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Phantom/RollsRoycePhantom-2.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Phantom/RollsRoycePhantom-3.webp`,
    ],
  },
  "rolls-royce-wraith": {
    hero: `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Wraith/RollsRoyceWraith.webp`,
    images: [
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Wraith/RollsRoyceWraith.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Wraith/RollsRoyceWraith-1.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Wraith/RollsRoyceWraith-2.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Wraith/RollsRoyceWraith-3.webp`,
      `${IMG}/Rolls-Royce-Carros/Rolls_Royce_Wraith/RollsRoyceWraith-4.webp`,
    ],
  },
}

/* ── helpers ─────────────────────────────── */

const getVehicleData = (id: string) => {
  const base = vehiclesData[id]
    ? vehiclesData[id]
    : (() => {
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
            { name: "ferrari-f8-spider", displayName: "Ferrari F8", category: "Hybrid Supercar", power: "819 HP", price: "$2,999/day", color: "bg-yellow-500" },
          ],
        }
      })()

  const imgs = imgByVehicleId[id]
  const images = imgs?.images || []
  const hero = imgs?.hero || null

  const gallery = images.map((src, idx) => ({
    id: idx + 1,
    label: base.gallery?.[idx]?.label || `Photo ${idx + 1}`,
    _src: src,
  }))

  return {
    ...base,
    _hero: hero,
    gallery,
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

  const selectedSrc = vehicleData.gallery?.[selectedImage]?._src || vehicleData._hero

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
              <div className="relative w-full h-full bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 rounded-lg flex items-center justify-center overflow-hidden">
                {!selectedSrc && (
                  <span className="text-muted-foreground text-xl tracking-widest">CAR IMAGE</span>
                )}

                {selectedSrc && (
                  <Image
                    src={selectedSrc}
                    alt={vehicleData.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 1000px"
                    className="object-contain p-6 drop-shadow-xl"
                  />
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gallery Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-4 mb-12 overflow-x-auto pb-2"
        >
          {vehicleData.gallery.map((image: any, index: number) => (
            <motion.button
              key={image.id}
              onClick={() => setSelectedImage(index)}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`relative w-32 h-24 md:w-40 md:h-28 rounded-lg overflow-hidden transition-all duration-300 shrink-0 ${
                selectedImage === index
                  ? "ring-2 ring-primary ring-offset-2 shadow-lg"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-300 to-gray-500 flex items-center justify-center overflow-hidden">
                {!image._src && (
                  <span className="text-gray-600 text-xs tracking-wide">{image.label}</span>
                )}

                {image._src && (
                  <Image
                    src={image._src}
                    alt={`${vehicleData.name} - ${image.label}`}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                )}
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

      {/* Vehicle Specifications */}
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
                {index < vehicleData.specs.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    className="hidden lg:block absolute right-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-foreground/15 to-transparent origin-top"
                  />
                )}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredSpec === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-2 bg-gradient-to-b from-primary/5 to-transparent rounded-2xl pointer-events-none"
                />

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

      {/* Rental Conditions */}
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
            {vehicleData.alternativeBrands.map((alt: any, i: number) => {
              const altImg = imgByVehicleId[alt.name]?.hero || null

              return (
                <ScrollReveal key={alt.name} delay={i * 100}>
                  <Link
                    href={`/car-rental/vehicle/${alt.name}`}
                    className="group block overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                    onClick={(e) => {
                      e.preventDefault()
                      window.location.href = `/car-rental/vehicle/${alt.name}`
                    }}
                  >
                    <div className={`h-1.5 ${alt.color}`} />

                    <div className="relative aspect-[4/3] mx-4 mt-4 bg-gradient-to-br from-muted to-muted/40 rounded-xl flex items-center justify-center overflow-hidden">
                      {!altImg && (
                        <span className="text-muted-foreground/30 text-sm tracking-widest">IMAGE</span>
                      )}

                      {altImg && (
                        <Image
                          src={altImg}
                          alt={alt.displayName}
                          fill
                          sizes="(max-width: 1024px) 50vw, 25vw"
                          className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                        />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-3">
                        <span className="text-foreground text-sm font-medium flex items-center gap-1">
                          {"Explore"} <ArrowLeft className="h-3.5 w-3.5 rotate-[135deg]" />
                        </span>
                      </div>
                    </div>

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
              )
            })}
          </div>
        </div>
      </section>

      {/* Satisfaction Guarantee */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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