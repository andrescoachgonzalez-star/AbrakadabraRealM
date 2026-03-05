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

  // ✅ galería real (main + thumbnails)
  images?: string[]

  collection: string
  isNew?: boolean

  description?: string
  specs?: Record<string, string>
}

export const allProducts: JewelryProduct[] = [

  {
    id: 1,
    name: "Emerald and diamond earrings",
    price: 724,
    material: "emeralds",
    type: "earrings",
    image: "/jewelry/emerald-and-diamond-earrings.png",
    images: [
      "/jewelry/emerald-and-diamond-earrings.png",
      "/jewelry/emerald-and-diamond-earrings-2.png",
      "/jewelry/emerald-and-diamond-earrings-3.png",
    ],
    collection: "Earrings",
    description: `Elegant piece crafted in 18K gold, featuring natural emeralds selected for their depth and brilliance. Brilliant-cut diamonds enhance the luminosity with understated luxury.`,
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
    type: "earrings",
    image: "/jewelry/minnie-mouse-emerald-earrings.png",
    images: [
      "/jewelry/minnie-mouse-emerald-earrings.png",
      "/jewelry/minnie-mouse-emerald-earrings-3.png",
      "/jewelry/minnie-mouse-emerald-earrings-4.png",
    ],
    collection: "Earrings",
    description: `Charming and sophisticated piece in 18K gold. A natural Colombian emerald (Boyacá) stands out, delicately framed by brilliant-cut diamonds for refined sparkle.`,
    specs: {
      stone: "Emerald tone",
      metal: "18K gold",
      finish: "Polished",
      style: "Modern",
    },
  },

  {
    id: 3,
    name: "Emerald Tear",
    price: 724,
    material: "emeralds",
    type: "earrings",
    image: "/jewelry/emerald-tear.png",
    images: [
      "/jewelry/emerald-tear.png",
      "/jewelry/emerald-tear2.png",
      "/jewelry/emerald-tear3.png",
      "/jewelry/emerald-tear4.png",
    ],
    collection: "Earrings",
    description: `Elegant and refined design crafted in 18K gold, featuring carefully selected natural emeralds from Boyacá, Colombia, chosen for clarity and vibrant brilliance.`,
    specs: {
      stone: "Green stone",
      metal: "18K gold",
      finish: "Polished",
      style: "Statement",
    },
  },

  {
    id: 4,
    name: "Green Scales",
    price: 580,
    material: "emeralds",
    type: "earrings",
    image: "/jewelry/green-scales.png",
    images: [
      "/jewelry/green-scales.png",
      "/jewelry/green-scales2.png",
      "/jewelry/green-scales3.png",
    ],
    collection: "Earrings",
    description: `Modern precision meets timeless luxury. Crafted in 18K gold with crystalline emeralds from Boyacá, Colombia, cut and calibrated for a clean, elegant silhouette.`,
    specs: {
      stone: "Green stones",
      metal: "18K gold",
      finish: "Polished",
      style: "Modern",
    },
  },

  {
    id: 5,
    name: "Green Flash",
    price: 580,
    material: "emeralds",
    type: "earrings",
    image: "/jewelry/green-flash.webp",
    images: [
      "/jewelry/green-flash.webp",
      "/jewelry/green-flash2.webp",
      "/jewelry/green-flash3.webp",
      "/jewelry/green-flash4.webp",
    ],
    collection: "Earrings",
    description: `Exclusive 18K gold design featuring a harmonious combination of square-cut emeralds and natural round diamonds. A refined, luminous piece made to stand out.`,
    specs: {
      stone: "Emerald cut",
      metal: "18K gold",
      finish: "Polished",
      style: "Classic",
    },
  },

  {
    id: 6,
    name: "Green Flower",
    price: 580,
    material: "emeralds",
    type: "earrings",
    image: "/jewelry/green-flower.png",
    images: ["/jewelry/green-flower.png", "/jewelry/green-flower2.webp"],
    collection: "Earrings",
    description: `Inspired by a layered floral silhouette, crafted with premium Colombian emeralds from Boyacá and finished in 18K gold for an elegant, artistic statement.`,
    specs: {
      stone: "Green stones",
      metal: "18K gold",
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
    images: [
      "/jewelry/tear-ring.webp",
      "/jewelry/tear-ring2.webp",
      "/jewelry/tear-ring3.webp",
      "/jewelry/tear-ring4.webp",
    ],
    collection: "Rings",
    isNew: true,
    description: `Crafted in 18K gold with natural diamonds and deep green emeralds from Boyacá, Colombia. A timeless drop-inspired silhouette with signature elegance.`,
    specs: {
      stone: "Green stone",
      metal: "18K gold",
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
    images: [
      "/jewelry/magic-ring.webp",
      "/jewelry/magic-ring2.webp",
      "/jewelry/magic-ring3.webp",
      "/jewelry/magic-ring4.webp",
    ],
    collection: "Rings",
    isNew: true,
    description: `18K gold design featuring a round natural emerald from Boyacá, Colombia, surrounded by brilliant natural diamonds that elevate its sparkle and presence.`,
    specs: {
      stone: "Green stone",
      metal: "18K gold",
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
    images: [
      "/jewelry/lagrime-greem.webp",
      "/jewelry/lagrime-greem2.webp",
      "/jewelry/lagrime-greem3.webp",
      "/jewelry/lagrime-greem4.webp",
    ],
    collection: "Rings",
    description: `A sophisticated 18K gold piece where the natural emerald takes center stage, enhanced by brilliant natural diamonds for a balanced, timeless look.`,
    specs: {
      stone: "Green stone",
      metal: "18K gold",
      finish: "Polished",
      style: "Classic",
    },
  },

  {
    id: 10,
    name: "OM GREEN",
    price: 0,
    material: "emeralds",
    type: "necklaces",
    image: "/jewelry/om-green.jpg",
    images: ["/jewelry/om-green.jpg",
            "/jewelry/om-green2.jpg"
            ],
    collection: "Necklaces",
    description: `Designed with a bold yet refined aesthetic, this extraordinary piece is created for those who seek to wear luxury with meaning. Crafted in 18K yellow gold, the pendant weighs 15.6 grams and measures 45 mm in width by 65 mm in height, giving it a commanding presence balanced by timeless elegance.`,
    specs: {
      metal: "18K gold (suggested)",
      stone: "Green stones + diamond accents (suggested)",
      finish: "Polished",
      style: "Symbol",
    },
  },

  {
    id: 11,
    name: "emerald cross",
    price: 0,
    material: "emeralds",
    type: "necklaces",
    image: "/jewelry/emerald-cross.png",
    images: ["/jewelry/emerald-cross.png",
            "/jewelry/emerald-cross2.png",
            "/jewelry/emerald-cross3.png",
            ],
    collection: "Necklaces",
    description: `This majestic emerald cross is a spiritual creation that celebrates the natural beauty and legacy of Colombian emeralds. The piece is composed of 16 round crystalline emeralds, carefully selected and set within a delicate Italian 18K gold frame, enhancing their brilliance while preserving a refined and elegant balance.`,
    specs: {
      stone: "Emerald tone",
      metal: "Gold tone (suggested)",
      finish: "Polished",
      style: "Cross",
    },
  },

  {
    id: 12,
    name: "EMERALD PENDANT",
    price: 0,
    material: "emeralds",
    type: "necklaces",
    image: "/jewelry/emerald-pendant.webp",
    images: ["/jewelry/emerald-pendant.webp",
            "/jewelry/emerald-pendant2.webp",
            "/jewelry/emerald-pendant3.webp",
            "/jewelry/emerald-pendant4.webp"
            ],
    collection: "Necklaces",
    description: `This elegant pendant featuring a rectangular emerald stands out for its crystalline beauty and minimalist sophistication. The precisely cut emerald is secured at its four corners by delicate Italian 18K gold prongs, elevating the gemstone and allowing light to pass freely through it, enhancing its natural brilliance and clarity.`,
    specs: {
      stone: "Emerald cut (green)",
      metal: "Gold tone (suggested)",
      finish: "Polished",
      style: "Pendant",
    },
  },

  {
    id: 13,
    name: "Said Round Green",
    price: 0,
    material: "emeralds",
    type: "necklaces",
    image: "/jewelry/said-round-green.webp",
    images: ["/jewelry/said-round-green.webp",
            "/jewelry/said-round-green2.webp",
            "/jewelry/said-round-green3.webp",
            ],
    collection: "Necklaces",
    description: `This exquisite round medal beautifully combines the brilliance of 18 sparkling diamonds with the magnetic intensity of a central Colombian emerald, which becomes the focal point of this distinctive piece. Its elegant and understated design radiates refinement and quiet sophistication, capturing a subtle sense of spirituality and mysticism.`,
    specs: {
      stone: "Green stone",
      metal: "Gold tone (suggested)",
      finish: "Polished",
      style: "Round pendant",
    },
  },

  {
    id: 14,
    name: "SAID FLOWER",
    price: 0,
    material: "emeralds",
    type: "necklaces",
    image: "/jewelry/said-flower.webp",
    images: ["/jewelry/said-flower.webp",
            "/jewelry/said-flower2.webp",
            "/jewelry/said-flower3.webp",
            ],
    collection: "Necklaces",
    description: `This exclusive design features 17 carefully selected emeralds of varying sizes, harmoniously arranged to recreate the natural structure and elegance of the flower. Each gemstone radiates the intense green hue that defines Colombian emeralds, a timeless symbol of luxury, authenticity, and natural beauty.

Finely crafted in 18K Italian gold, the piece reveals a warm and enduring brilliance that enhances its feminine character and refined elegance.`,
    specs: {
      stone: "Green stones",
      metal: "Gold tone (suggested)",
      finish: "Polished",
      style: "Floral",
    },
  },

  {
    id: 15,
    name: "DIAMOND PENDANT",
    price: 0,
    material: "diamonds",
    type: "necklaces",
    image: "/jewelry/diamond-pendant.webp",
    images: ["/jewelry/diamond-pendant.webp",
            "/jewelry/diamond-pendant2.webp",
            "/jewelry/diamond-pendant3.webp"
            ],
    collection: "Necklaces",
    description: `This exquisite gold cross beautifully combines the elegance of 10 brilliant diamonds (approximately 0.30 ct) with the vibrant presence of a 1.0 ct round emerald set at its center. The luminous brilliance of the diamonds harmonizes with the deep green intensity of the emerald, creating a delicate yet captivating contrast.`,
    specs: {
      stone: "Diamond accents (suggested)",
      metal: "Gold tone (suggested)",
      finish: "Polished",
      style: "Cross",
    },
  },

  {
    id: 16,
    name: "I SAID BIG TEAR",
    price: 0,
    material: "emeralds",
    type: "necklaces",
    image: "/jewelry/i-said-big-tear.webp",
    images: ["/jewelry/i-said-big-tear.webp",
            "/jewelry/i-said-big-tear2.webp",
            "/jewelry/i-said-big-tear3.webp"
    ],
    collection: "Necklaces",
    description: `This exceptional emerald pendant is distinguished by its elegant drop-shaped silhouette, delicately embraced by an Italian 18K gold setting that follows the natural contours of the gemstone. The frame enhances the emerald’s organic form, allowing its beauty and brilliance to be fully appreciated.`,
    specs: {
      stone: "Green stone",
      metal: "Gold tone (suggested)",
      finish: "Polished",
      style: "Tear",
    },
  },

  {
    id: 17,
    name: "MINI CROSS CHARM",
    price: 0,
    material: "emeralds",
    type: "necklaces",
    image: "/jewelry/mini-cross-charm.png",
    images: ["/jewelry/mini-cross-charm.png",
            "/jewelry/mini-cross-charm2.webp",
            "/jewelry/mini-cross-charm3.webp",
            "/jewelry/mini-cross-charm4.webp"
    ],
    collection: "Necklaces",
    description: `Discover this elegant emerald cross — a refined symbol of spirituality, strength, and timeless faith. Its delicate design is composed of 11 round emeralds, carefully set in 18K Italian gold, creating a harmonious balance between subtle brilliance and understated sophistication.`,
    specs: {
      stone: "Green stones",
      metal: "Gold tone (suggested)",
      finish: "Polished",
      style: "Mini cross",
    },
  },

  {
    id: 18,
    name: "SQUARE CHARM",
    price: 799,
    material: "emeralds",
    type: "necklaces",
    image: "/jewelry/square-charm.webp",
    images: ["/jewelry/square-charm.webp",
            "/jewelry/square-charm2.webp",
            "/jewelry/square-charm3.webp",
            "/jewelry/square-charm4.webp"
    ],
    collection: "Necklaces",
    description: `Discover timeless sophistication with this exclusive square pendant, crafted in 18K gold and adorned with a natural emerald of exceptional beauty, sourced from the legendary mines of Boyacá, Colombia.

Its clean, geometric silhouette reflects modern elegance, while the emerald — carefully selected for its clarity and vibrant green intensity — becomes the focal point of the design.`,
    specs: {
      stone: "Green stone (square/emerald style)",
      metal: "Gold tone (suggested)",
      finish: "Polished",
      style: "Geometric",
    },
  },

  {
    id: 19,
    name: "PISTOL CHARM",
    price: 931,
    material: "gold",
    type: "necklaces",
    image: "/jewelry/pistol-charm.webp",
    images: ["/jewelry/pistol-charm.webp",
            "/jewelry/pistol-charm2.webp",
            "/jewelry/pistol-charm3.webp",
            "/jewelry/pistol-charm4.webp"
    ],
    collection: "Necklaces",
    description: `Discover this striking sculptural pendant, crafted in 18K gold, where bold design meets timeless luxury. This exclusive three-dimensional creation stands out for its meticulous detailing and contemporary artistic expression, transforming a powerful silhouette into a refined piece of wearable art.`,
    specs: {
      metal: "Gold tone (suggested)",
      stone: "Green accents (suggested)",
      finish: "Polished",
      style: "Statement charm",
    },
  },

  {
    id: 20,
    name: "I SAID TEAR",
    price: 1000,
    material: "emeralds",
    type: "necklaces",
    image: "/jewelry/i-said-tear.webp",
    images: ["/jewelry/i-said-tear.webp",
            "/jewelry/i-said-tear2.webp",
            "/jewelry/i-said-tear3.webp",
            "/jewelry/i-said-tear4.webp",
    ],
    collection: "Necklaces",
    description: `Discover the refined elegance of this 18K gold pendant, distinguished by its graceful teardrop silhouette and sophisticated composition. This exclusive design features three exceptional emeralds sourced from the renowned mines of Boyacá, Colombia, with a total weight of 1.50 ct, beautifully complemented by two brilliant diamonds that enhance its luminosity.`,
    specs: {
      stone: "Green stones",
      metal: "Gold tone (suggested)",
      finish: "Polished",
      style: "Drop",
    },
  },

  {
    id: 21,
    name: "SAID Green Rectangular",
    price: 379,
    material: "emeralds",
    type: "necklaces",
    image: "/jewelry/said-green-rectangular.webp",
    images: ["/jewelry/said-green-rectangular.webp",
            "/jewelry/said-green-rectangular2.webp",
            "/jewelry/said-green-rectangular3.webp",
            "/jewelry/said-green-rectangular5.webp"
    ],
    collection: "Necklaces",
    description: `Discover the elegance and quiet sophistication of this exclusive emerald pendant, enhanced by delicate diamonds that accentuate its natural brilliance. The rectangular emerald, softly curved at the edges and weighing approximately 0.60 ct, becomes the luminous focal point of this refined creation.`,
    specs: {
      stone: "Green rectangular stone",
      metal: "Gold tone (suggested)",
      finish: "Polished",
      style: "Pendant",
    },
  },

  {
    id: 22,
    name: "RUBY CROSS CHARM",
    price: 424,
    material: "rubies",
    type: "necklaces",
    image: "/jewelry/ruby-cross-charm.webp",
    images: ["/jewelry/ruby-cross-charm.webp",
            "/jewelry/ruby-cross-charm2.webp",
            "/jewelry/ruby-cross-charm3.webp",
            "/jewelry/ruby-cross-charm4.webp"
    ],
    collection: "Necklaces",
    description: `This 18K gold cross is an exquisite jewel that beautifully combines elegance with profound spiritual meaning. Adorned with 16 natural rubies (2 mm each, approximately 0.50 ct total weight), the piece radiates a captivating contrast between the vibrant red of the gemstones and the warm, timeless glow of polished gold.`,
    specs: {
      stone: "Ruby tone",
      metal: "Gold tone (suggested)",
      finish: "Polished",
      style: "Cross",
    },
  },
  {
    id: 23,
    name: "Turkish Bracelet",
    price: 320,
    material: "emeralds",
    type: "bracelets",
    image: "/jewelry/turkish-bracelet.webp",
    images: [
      "/jewelry/turkish-bracelet.webp",
      "/jewelry/turkish-bracelet3.webp",
      "/jewelry/turkish-bracelet4.webp",
    ],
    collection: "Bracelets",
    isNew: true,
    description: `This elegant bead bracelet beautifully combines tradition with timeless sophistication. Crafted with 18K gold beads, the design features a central round natural emerald, carefully selected from the legendary mines of Boyacá, Colombia, and shaped with artisanal precision.`,
    specs: {
      stone: "Natural emerald",
      metal: "18K gold",
      finish: "Polished",
      style: "Minimal",
    },
  },

  {
    id: 24,
    name: "Thai Bracelet",
    price: 650,
    material: "emeralds",
    type: "bracelets",
    image: "/jewelry/thai-bracelet.webp",
    images: [
      "/jewelry/thai-bracelet.webp",
      "/jewelry/thai-bracelet2.webp",
      "/jewelry/thai-bracelet3.webp",
      "/jewelry/thai-bracelet4.webp",
    ],
    collection: "Bracelets",
    isNew: true,
    description: `This exceptional bracelet embodies the essence of haute jewelry, blending luxury and elegance with a refined Thai-inspired design that radiates sophistication and timeless class. Crafted in 18K gold, the piece is adorned with natural round emeralds and brilliant diamonds, achieving a harmonious balance between brilliance and delicate refinement.`,
    specs: {
      stone: "Emerald stones",
      metal: "18K gold",
      finish: "Polished",
      style: "Classic",
    },
  },

  {
    id: 25,
    name: "Emerald Bracelet",
    price: 471,
    material: "emeralds",
    type: "bracelets",
    image: "/jewelry/emerald-bracelet.webp",
    images: [
      "/jewelry/emerald-bracelet.webp",
      "/jewelry/emerald-bracelet2.webp",
      "/jewelry/emerald-bracelet3.webp",
    ],
    collection: "Bracelets",
    description: `This elegant bracelet showcases a unique and sophisticated design, crafted in 18K gold and centered around a dazzling natural emerald carefully selected from the prestigious mines of Boyacá, Colombia. The round-cut emerald adds a distinctive brilliance, enhancing the timeless beauty and refined character of this exceptional jewel.`,
    specs: {
      stone: "Green emerald",
      metal: "18K gold",
      finish: "Polished",
      style: "Minimal",
    },
  },

  {
    id: 26,
    name: "Emerald Tennis Bracelet",
    price: 3695,
    material: "emeralds",
    type: "bracelets",
    image: "/jewelry/emerald-tennis-bracelet.webp",
    images: [
      "/jewelry/emerald-tennis-bracelet.webp",
    //   "/jewelry/emerald-tennis-bracelet2.webp",
    //   "/jewelry/emerald-tennis-bracelet3.webp",
    //   "/jewelry/emerald-tennis-bracelet4.webp",
    ],
    collection: "Bracelets",
    description: `This exquisite emerald tennis bracelet showcases the harmony between refined craftsmanship and natural beauty. Each 18K gold link holds a perfectly cut and polished emerald, carefully sourced from the legendary mines of Boyacá, Colombia.

The vibrant green brilliance of the emeralds contrasts beautifully with the warm glow of gold, creating a jewel that embodies both delicacy and strength.`,
    specs: {
      stone: "Emerald row",
      metal: "18K gold",
      finish: "Polished",
      style: "Tennis",
    },
  }
]