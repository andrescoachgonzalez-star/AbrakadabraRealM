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
      { id: "mercedes-benz-s580", name: "Mercedes Benz S580", price: "399,00" },
      { id: "mercedes-benz-g550", name: "Mercedes Benz G550", price: "499,00" },
      { id: "mercedes-benz-g63", name: "Mercedes Benz G63", price: "699,00" },
      { id: "mercedes-benz-maybach", name: "Mercedes Benz Maybach", price: "899,00" },
      { id: "mercedes-benz-g63-brabus", name: "Mercedes Benz G63 Brabus", price: "999,00" },
],
  },
  corvette: {
    displayName: "CORVETTE C8",
    category: "Sports Car",
    power: "495 HP",
    available: 3,
   vehicles: [
     { id: "corvette-c8-2024-red", name: "Corvette C8 2024", price: "449,00" },
     { id: "corvette-c8-2024-mint", name: "Corvette C8 2024", price: "449,00" },
     { id: "corvette-c8-2023-blue", name: "Corvette C8 2023", price: "449,00" },
    ],
  },
  lamborghini: {
    displayName: "LAMBORGHINI",
    category: "Super Sports",
    power: "770 HP",
    available: 11,
    vehicles: [
      { id: "lamborghini-huracan-white", name: "Lamborghini Huracan", price: "799,00" },
      { id: "lamborghini-evo-spyder-blue", name: "Lamborghini Evo Spyder", price: "899,00" },
      { id: "lamborghini-huracan-orange", name: "Lamborghini Huracan", price: "999,00" },
      { id: "lamborghini-huracan-evo-green", name: "Lamborghini Huracan EVO", price: "999,00" },
      { id: "lamborghini-huracan-evo-black", name: "Lamborghini Huracan EVO", price: "999,00" },
      { id: "lamborghini-evo-sto-yellow", name: "Lamborghini EVO STO", price: "1.999,00" },
      { id: "lamborghini-urus-dark-grey", name: "Lamborghini Urus", price: "799,00" },
      { id: "lamborghini-urus-white", name: "Lamborghini Urus", price: "899,00" },
      { id: "lamborghini-urus-grey", name: "Lamborghini Urus", price: "899,00" },
      { id: "lamborghini-urus-s-green", name: "Lamborghini Urus S", price: "999,00" },
      { id: "lamborghini-urus-blue", name: "Lamborghini Urus", price: "1.199,00" },
],
  },
  bentley: {
    displayName: "BENTLEY",
    category: "Luxury Coupe",
    power: "626 HP",
    available: 3,
   vehicles: [
      { id: "bentley-flying-spur", name: "Bentley Flying Spur", price: "799,00" },
      { id: "bentley-azure-bentayga", name: "Bentley Azure Bentayga", price: "1.100,00" },
      { id: "bentley-continental-gt", name: "Bentley Continental GT", price: "1.120,00" },
    ],
  },
  ferrari: {
    displayName: "FERRARI",
    category: "Hybrid Supercar",
    power: "819 HP",
    available: 1,
    vehicles: [
  { id: "ferrari-f8-spider", name: "Ferarri F8 Spider", price: "2.599,00" }],
  },
  "rolls-royce": {
    displayName: "ROLLS ROYCE",
    category: "Ultra Luxury",
    power: "563 HP",
    available: 8,
    vehicles: [
      { id: "rolls-royce-dawn", name: "Rolls Royce Dawn", price: "899,00" },
      { id: "rolls-royce-cullinan-white", name: "Rolls Royce Cullinan", price: "1.199,00" },
      { id: "rolls-royce-cullinan-black-1", name: "Rolls Royce Cullinan", price: "1.199,00" },
      { id: "rolls-royce-cullinan-black-2", name: "Rolls Royce Cullinan", price: "1.399,00" },
      { id: "rolls-royce-cullinan-silver", name: "Rolls Royce Cullinan", price: "1.399,00" },
      { id: "rolls-royce-wraith", name: "Rolls Royce Wraith", price: "1.099,00" },
      { id: "rolls-royce-ghost", name: "Rolls Royce Ghost", price: "1.200,00" },
      { id: "rolls-royce-phantom", name: "Rolls Royce Phantom", price: "2.500,00" },
    ],
  },
  mclaren: {
    displayName: "McLAREN",
    category: "Supercar",
    power: "710 HP",
    available: 1,
    vehicles: [
  { id: "mclaren-gt", name: "McLaren GT", price: "899,00" }],
  },
  bmw: {
    displayName: "BMW",
    category: "Luxury Sedan",
    power: "375 HP",
    available: 1,
    vehicles: [
    { id: "bmw-7-series-740i", name: "BMW 7 Series 740i", price: "399,00" }, ],
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
