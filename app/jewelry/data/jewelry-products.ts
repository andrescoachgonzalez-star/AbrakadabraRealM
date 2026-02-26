export type JewelryProduct = {
  id: number
  name: string
  price: number
  material: "gold" | "diamonds" | "emeralds" | "rubies"
  type:
    | "rings"
    | "necklaces"
    | "bracelets"
    | "earrings"
    | "chains"
    | "charms"
    | "pendants"
  image: string

  // ✅ NUEVO: galería real (main + thumbnails)
  images?: string[]

  collection: string
  isNew?: boolean

  // ✅ puede ser corta o larga (como tu página vieja)
  description?: string

  // (opcional) specs
  specs?: Record<string, string>
}

export const allProducts: JewelryProduct[] = [
  {
    id: 1,
    name: "Emerald and diamond earrings",
    price: 724,
    material: "emeralds",

    // ✅ corregido: esto son aretes, no anillos
    type: "earrings",

    image: "/jewelry/emerald-and-diamond-earrings.png",

    
    images: [
      "/jewelry/emerald-and-diamond-earrings.png",
      "/jewelry/emerald-and-diamond-earrings-2.png",
      "/jewelry/emerald-and-diamond-earrings-3.png",
    ],


    collection: "Earrings",


    description: `Elegant unisex earrings crafted in 18K gold, featuring round natural emeralds selected for their depth and brilliance. Each stone is framed by brilliant-cut diamonds that enhance its luminosity with understated luxury.

Inspired by timeless design, this piece blends classic sophistication with modern elegance — perfect for special occasions or to elevate any look with distinction.`,

    specs: {
      stone: "Natural emeralds + diamonds",
      metal: "18K gold",
      finish: "Polished",
      style: "Classic",
    },
  },

  {
    id: 2,
    name: "Minnie Mouse Emerald Earrings",
    price: 724,
    material: "emeralds",

    // ✅ corregido: aretes
    type: "earrings",

    image: "/jewelry/minnie-mouse-emerald-earrings.png",


    images: [
      "/jewelry/minnie-mouse-emerald-earrings.png",
      "/jewelry/minnie-mouse-emerald-earrings-2.png",
      "/jewelry/minnie-mouse-emerald-earrings-3.png",
      "/jewelry/minnie-mouse-emerald-earrings-4.png",
    ],

    collection: "Earrings",
    description:
      "Playful geometry with emerald tone details and refined setting.",
    specs: {
      stone: "Emerald tone",
      finish: "Polished",
      style: "Modern",
    },
  },

  {
    id: 3,
    name: "Emerald Tear",
    price: 724,
    material: "emeralds",

    // ✅ si este producto realmente es un anillo, déjalo como rings.
    // Si también es arete, cambia a earrings.
    type: "rings",

    image: "/jewelry/emerald-tear.png",

    // opcional
    images: ["/jewelry/emerald-tear.png"],

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
    name: "Green Scales",
    price: 580,
    material: "emeralds",
    type: "rings",
    image: "/jewelry/green-scales.png",
    images: ["/jewelry/green-scales.png"],
    collection: "Rings",
    description:
      "Circular emerald-inspired motif with elegant contrast setting.",
    specs: {
      stone: "Green stones",
      finish: "Polished",
      style: "Modern",
    },
  },

  {
    id: 5,
    name: "Green Flash",
    price: 580,
    material: "emeralds",
    type: "rings",
    image: "/jewelry/green-flash.webp",
    images: ["/jewelry/green-flash.webp"],
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
    price: 580,
    material: "emeralds",
    type: "rings",
    image: "/jewelry/green-flower.png",
    images: ["/jewelry/green-flower.png"],
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
    price: 724,
    material: "emeralds",
    type: "rings",
    image: "/jewelry/tear-ring.webp",
    images: ["/jewelry/tear-ring.webp"],
    collection: "Rings",
    isNew: true,
    description:
      "Modern tear silhouette with clean luxury finishing. Designed for standout styling.",
    specs: {
      stone: "Green stone",
      finish: "Polished",
      style: "Signature",
    },
  },

  {
    id: 8,
    name: "Magic Ring",
    price: 580,
    material: "emeralds",
    type: "rings",
    image: "/jewelry/magic-ring.webp",
    images: ["/jewelry/magic-ring.webp"],
    collection: "Rings",
    isNew: true,
    description:
      "A refined minimal ring with an elegant green focal detail.",
    specs: {
      stone: "Green stone",
      finish: "Polished",
      style: "Minimal",
    },
  },

  {
    id: 9,
    name: "Lagrime Greem",
    price: 724,
    material: "emeralds",
    type: "rings",
    image: "/jewelry/lagrime-greem.webp",
    images: ["/jewelry/lagrime-greem.webp"],
    collection: "Rings",
    description: "Teardrop centerpiece with halo shine. Classic and timeless.",
    specs: {
      stone: "Green stone",
      finish: "Polished",
      style: "Classic",
    },
  },
]