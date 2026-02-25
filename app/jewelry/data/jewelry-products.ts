export type JewelryProduct = {
  id: number
  name: string
  price: number
  material: "gold" | "diamonds" | "emeralds" | "rubies"
  type: "rings" | "necklaces" | "bracelets" | "earrings" | "chains" | "charms" | "pendants"
  image: string
  collection: string
  isNew?: boolean
  description?: string
  specs?: Record<string, string>
}

export const allProducts: JewelryProduct[] = [
  {
    id: 1,
    name: "Emerald and diamond earrings",
    price: 724, // TEMP si no tienes el precio real
    material: "emeralds",
    type: "rings",
    image: "/jewelry/emerald-and-diamond-earrings.png",
    collection: "Rings",
    description: "Elegant emerald accents framed with bright stones. Crafted for a clean luxury look.",
    specs: {
      stone: "Emerald + Stones",
      finish: "Polished",
      style: "Classic",
    },
  },
  {
    id: 2,
    name: "Minnie Mouse Emerald Earrings",
    price: 724, // TEMP
    material: "emeralds",
    type: "rings",
    image: "/jewelry/minnie-mouse-emerald-earrings.png",
    collection: "Rings",
    description: "Playful geometry with emerald tone details and refined setting.",
    specs: {
      stone: "Emerald tone",
      finish: "Polished",
      style: "Modern",
    },
  },
  {
    id: 3,
    name: "emerald tear",
    price: 724, // TEMP
    material: "emeralds",
    type: "rings",
    image: "/jewelry/emerald-tear.png",
    collection: "Rings",
    description: "A sculpted tear silhouette with luminous green centerpiece.",
    specs: {
      stone: "Green stone",
      finish: "Polished",
      style: "Statement",
    },
  },
  {
    id: 4,
    name: "Green scales",
    price: 580, // TEMP
    material: "emeralds",
    type: "rings",
    image: "/jewelry/green-scales.png",
    collection: "Rings",
    description: "Circular emerald-inspired motif with elegant contrast setting.",
    specs: {
      stone: "Green stones",
      finish: "Polished",
      style: "Modern",
    },
  },
  {
    id: 5,
    name: "Green Flash",
    price: 580, // TEMP
    material: "emeralds",
    type: "rings",
    image: "/jewelry/green-flash.webp",
    collection: "Rings",
    description: "Emerald cut flash with halo shine for a crisp luxury feel.",
    specs: {
      stone: "Emerald cut",
      finish: "Polished",
      style: "Classic",
    },
  },
  {
    id: 6,
    name: "Green Flower",
    price: 580, // TEMP
    material: "emeralds",
    type: "rings",
    image: "/jewelry/green-flower.png",
    collection: "Rings",
    description: "Floral cluster inspired ring with vivid green sparkle.",
    specs: {
      stone: "Green stones",
      finish: "Polished",
      style: "Floral",
    },
  },
  {
    id: 7,
    name: "TEAR RING",
    price: 724, // ✅ visible en screenshot
    material: "emeralds",
    type: "rings",
    image: "/jewelry/tear-ring.webp",
    collection: "Rings",
    isNew: true,
    description: "Modern tear silhouette with clean luxury finishing. Designed for standout styling.",
    specs: {
      stone: "Green stone",
      finish: "Polished",
      style: "Signature",
    },
  },
  {
    id: 8,
    name: "Magic Ring",
    price: 580, // ✅ visible en screenshot
    material: "emeralds",
    type: "rings",
    image: "/jewelry/magic-ring.webp",
    collection: "Rings",
    isNew: true,
    description: "A refined minimal ring with an elegant green focal detail.",
    specs: {
      stone: "Green stone",
      finish: "Polished",
      style: "Minimal",
    },
  },
  {
    id: 9,
    name: "Lagrime Greem",
    price: 724, // TEMP
    material: "emeralds",
    type: "rings",
    image: "/jewelry/lagrime-greem.webp",
    collection: "Rings",
    description: "Teardrop centerpiece with halo shine. Classic and timeless.",
    specs: {
      stone: "Green stone",
      finish: "Polished",
      style: "Classic",
    },
  },
]