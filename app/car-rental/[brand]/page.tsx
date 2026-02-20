"use client"

import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, X, ChevronRight } from "lucide-react"
import { LuxuryHeader } from "@/components/luxury-header"

const brandsData: Record<string, any> = {
  "mercedes-benz": {
    displayName: "MERCEDES BENZ",
    category: "SUV / Sedan",
    power: "577 HP",
    available: 5,
    vehicles: [
      { id: "mercedes-benz-g-wagon-amg", name: "G-Wagon AMG", price: "899,00" },
      { id: "mercedes-benz-g-wagon-black", name: "G-Wagon Black", price: "899,00" },
      { id: "mercedes-benz-amg-gt-silver", name: "AMG GT Silver", price: "799,00" },
      { id: "mercedes-benz-s-class-maybach", name: "S-Class Maybach", price: "1.099,00" },
      { id: "mercedes-benz-maybach-gls", name: "Maybach GLS", price: "1.299,00" },
    ],
  },
  corvette: {
    displayName: "CORVETTE C8",
    category: "Sports Car",
    power: "495 HP",
    available: 3,
    vehicles: [
      { id: "corvette-stingray-red", name: "Stingray Red", price: "599,00" },
      { id: "corvette-stingray-yellow", name: "Stingray Yellow", price: "599,00" },
      { id: "corvette-stingray-blue", name: "Stingray Blue", price: "599,00" },
    ],
  },
  lamborghini: {
    displayName: "LAMBORGHINI",
    category: "Super Sports",
    power: "770 HP",
    available: 11,
    vehicles: [
      { id: "lamborghini-urus-green", name: "Urus Green", price: "999,00" },
      { id: "lamborghini-huracan-yellow", name: "Huracan Yellow", price: "1.299,00" },
      { id: "lamborghini-huracan-orange", name: "Huracan Orange", price: "1.299,00" },
      { id: "lamborghini-aventador-red", name: "Aventador Red", price: "1.999,00" },
      { id: "lamborghini-aventador-black", name: "Aventador Black", price: "1.999,00" },
      { id: "lamborghini-urus-white", name: "Urus White", price: "999,00" },
      { id: "lamborghini-huracan-blue", name: "Huracan Blue", price: "1.299,00" },
      { id: "lamborghini-revuelto-green", name: "Revuelto Green", price: "2.499,00" },
      { id: "lamborghini-urus-grey", name: "Urus Grey", price: "999,00" },
      { id: "lamborghini-huracan-purple", name: "Huracan Purple", price: "1.299,00" },
      { id: "lamborghini-aventador-gold", name: "Aventador Gold", price: "2.199,00" },
    ],
  },
  bentley: {
    displayName: "BENTLEY",
    category: "Luxury Coupe",
    power: "626 HP",
    available: 3,
    vehicles: [
      { id: "bentley-continental-gt", name: "Continental GT", price: "899,00" },
      { id: "bentley-flying-spur", name: "Flying Spur", price: "999,00" },
      { id: "bentley-bentayga", name: "Bentayga", price: "1.199,00" },
    ],
  },
  ferrari: {
    displayName: "FERRARI",
    category: "Hybrid Supercar",
    power: "819 HP",
    available: 1,
    vehicles: [{ id: "ferrari-sf90-stradale", name: "SF90 Stradale", price: "2.999,00" }],
  },
  "rolls-royce": {
    displayName: "ROLLS ROYCE",
    category: "Ultra Luxury",
    power: "563 HP",
    available: 2,
    vehicles: [
      { id: "rolls-royce-dawn", name: "Dawn", price: "899,00" },
      { id: "rolls-royce-ghost", name: "Ghost", price: "1.199,00" },
    ],
  },
  mclaren: {
    displayName: "McLAREN",
    category: "Supercar",
    power: "710 HP",
    available: 1,
    vehicles: [{ id: "mclaren-720s", name: "720S", price: "1.499,00" }],
  },
  porsche: {
    displayName: "PORSCHE",
    category: "Performance",
    power: "640 HP",
    available: 4,
    vehicles: [
      { id: "porsche-911-turbo-s", name: "911 Turbo S", price: "699,00" },
      { id: "porsche-taycan", name: "Taycan", price: "599,00" },
      { id: "porsche-cayenne-turbo", name: "Cayenne Turbo", price: "499,00" },
      { id: "porsche-panamera", name: "Panamera", price: "549,00" },
    ],
  },
}

export default function BrandPage() {
  const params = useParams()
  const router = useRouter()
  const brandName = params.brand as string
  const brandData = brandsData[brandName] || brandsData["lamborghini"]

  return (
    <main className="min-h-screen bg-foreground overflow-x-hidden">
      <LuxuryHeader />

      {/* Dark honeycomb background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundColor: "#3a3a3a",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fillRule='evenodd'%3E%3Cg fill='%23808080' fillOpacity='0.15'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen pt-28 pb-16 px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          {/* Close button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => router.push("/car-rental")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background hover:bg-background/20 transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Brand Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-background tracking-wide mb-12"
          >
            {brandData.displayName}
          </motion.h1>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandData.vehicles.map((vehicle: any, index: number) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <Link
                  href={`/car-rental/vehicle/${vehicle.id}`}
                  className="group block overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden m-4 rounded-xl shadow-inner">
                    <span className="text-muted-foreground/30 text-sm tracking-widest">IMAGE</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                      <span className="text-foreground text-sm font-medium flex items-center gap-1">
                        View Details <ChevronRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-5 pb-5">
                    <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-primary font-semibold mt-1">
                      {vehicle.price} USD / Day
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-14 text-center"
          >
            <Link
              href="/car-rental"
              className="inline-flex items-center gap-2 text-background/50 hover:text-primary text-sm tracking-wide transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Fleet
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
