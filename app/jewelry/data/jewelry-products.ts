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
      "/jewelry/minnie-mouse-emerald-earrings-3.png",
      "/jewelry/minnie-mouse-emerald-earrings-4.png",
    ],

    collection: "Earrings",
    description:
      `Charming and sophisticated, these 18K gold earrings reinterpret an iconic silhouette with fine jewelry craftsmanship. At the center, a natural Colombian emerald from the Boyacá mines radiates vibrant green tones, delicately framed by brilliant-cut diamonds that enhance its luminosity.

A playful yet elegant design that blends timeless inspiration with modern refinement — perfect for collectors or for adding a distinctive touch to special occasions.`,
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


    type: "rings",

    image: "/jewelry/emerald-tear.png",
    

    // opcional
    images: ["/jewelry/emerald-tear.png",
            "/jewelry/emerald-tear2.png",
            "/jewelry/emerald-tear3.png",
            "/jewelry/emerald-tear4.png"
            ],

    collection: "Rings",
    description: `Elegant and refined, these teardrop earrings are crafted in 18K gold and designed to embody balance and timeless sophistication. Each piece features carefully selected natural emeralds from the renowned Boyacá mines in Colombia, chosen for their clarity and vibrant brilliance.`,
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
    images: ["/jewelry/green-scales.png",
            "/jewelry/green-scales2.png",
            "/jewelry/green-scales3.png",
            ],

    collection: "Rings",
    description:
      'These unique fine earrings blend modern precision with timeless luxury. Crafted in 18K gold, they feature crystalline emeralds from the renowned mines of Boyacá, Colombia. Each gemstone is carefully cut and calibrated to achieve a flawless balance of style, accuracy, and elegance.',
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
    images: ["/jewelry/green-flash.webp",
            "/jewelry/green-flash2.webp",
            "/jewelry/green-flash3.webp",
            "/jewelry/green-flash4.webp",
    ],
    collection: "Rings",
    description: `These exclusive earrings stand out for their unique and sophisticated design, crafted in 18K gold and featuring a harmonious combination of square-cut emeralds and natural round diamonds. The precision-cut emeralds reveal exceptional clarity and vibrant color, while delicately set diamonds enhance their brilliance with refined elegance.`,
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


    images: ["/jewelry/green-flower.png",
            "/jewelry/green-flower2.webp",
            ],


    collection: "Rings",
    description: `Introducing our Dahlia Flower Earrings, inspired by the vibrant Mexican dahlia, admired for its layered petals and natural elegance, enhanced with a subtle touch of emerald green. These exquisite jewels are crafted using premium Colombian emeralds sourced directly from the renowned mines of Boyacá and meticulously shaped by expert jewelers with exceptional precision and artistry.`,
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


    images: ["/jewelry/tear-ring.webp",
        "/jewelry/tear-ring2.webp",
        "/jewelry/tear-ring3.webp",
        "/jewelry/tear-ring4.webp"

    ],

    collection: "Rings",
    isNew: true,
    description:
      "This exclusive ring, crafted in 18K gold, brings together the purity of natural diamonds and the deep green intensity of emeralds sourced from the legendary mines of Boyacá, Colombia. Designed in size 7, its elegant drop-shaped silhouette draws inspiration from classical jewelry design, embodying timeless sophistication in every detail.",
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


    images: ["/jewelry/magic-ring.webp",
            "/jewelry/magic-ring2.webp",
            "/jewelry/magic-ring3.webp",
            "/jewelry/magic-ring4.webp"
            ],

    collection: "Rings",
    isNew: true,
    description:
      `This women’s ring beautifully combines classic elegance with modern sophistication. Crafted in 18K gold, it features a round natural emerald sourced from the renowned mines of Boyacá, Colombia, carefully shaped with artisanal precision. The gemstone is surrounded by brilliant natural diamonds that delicately frame and enhance its brilliance, elevating both its presence and elegance.`,
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

    images: ["/jewelry/lagrime-greem.webp",
            "/jewelry/lagrime-greem2.webp",
            "/jewelry/lagrime-greem3.webp",
            "/jewelry/lagrime-greem4.webp"
            ],

    collection: "Rings",
    description: `This sophisticated ring is a true masterpiece, where the natural emerald takes center stage, surrounded by brilliant natural diamonds that enhance its radiance and beauty. Crafted in 18K gold, the design harmoniously combines luxury, symbolism, and timeless elegance.`,
    specs: {
      stone: "Green stone",
      finish: "Polished",
      style: "Classic",
    },
  },
]