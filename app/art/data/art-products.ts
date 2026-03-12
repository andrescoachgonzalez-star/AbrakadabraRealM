export interface ArtProduct {
  id: string
  slug: string
  title: string
  price: number
  originalPrice?: number
  onSale?: boolean
  stock: number
  category: string
  description: string
  images: string[]
}

export const artProducts: ArtProduct[] = [

  {
    id: "lion",
    slug: "the-lion",
    title: "THE LION",
    price: 7194,
    originalPrice: 14388,
    onSale: true,
    stock: 1,
    category: "ART",
    description:
      `"The Lion" is a work born on the island of Ibiza, Spain, a place that offers peace and a source of inspiration. The artist channels the energy of this paradise into her work, representing the lion as a symbol of improvement, courage and struggle.

The creation is a tribute to the beauty of Ibiza and a manifestation of the connection between the artist, the island and its passion for art.

Every stroke and color in the work "The Lion" captures the essence of the lion, a powerful metaphor for the artist as a tireless fighter. Each brush stroke narrates a personal story of courage and victory.

The piece not only captures the majesty of the lion but also the determination of the artist to transcend limits. Through this work an intimate connection between the spirit of the lion and the creativity of the artist is revealed.`,
    images: [
      "/art/thelion-art.webp",
      "/art/thelion-1.webp",
      "/art/thelion-2.webp",
      "/art/thelion-3.webp"
    ]
  },

  {
    id: "breath",
    slug: "breath-of-life",
    title: "BREATH OF LIFE",
    price: 10000,
    stock: 1,
    category: "ART",
    description:
      `"Breath of Life" captures universal creative spirit and the balance of the terrestrial world.

The work fuses plants, animals and humans in a network of positive energy. This abstract painting symbolizes the creation and union of living beings connecting them in harmony.

The piece visualizes natural interaction between earth and the universe including elements such as wind, fire, water and earth.`,
    images: [
      "/art/breath-art.webp",
      "/art/breath-1.webp",
      "/art/breath-2.webp",
      "/art/breath-3.webp"
    ]
  },

  {
    id: "four-elements",
    slug: "the-four-elements",
    title: "THE FOUR ELEMENTS",
    price: 2000,
    stock: 4,
    category: "ART",
    description:
      `"The Four Elements" reflects the cosmic conception of Mayan culture based on a triadic harmony.

The Mayan universe is composed of three planes: the sky, the earth and the underworld each extending in four directions.

The work abstracts this idea incorporating symbols such as ceibas, birds, types of corn and sacred colors.`,
    images: [
      "/art/fourelements-art.webp",
      "/art/fourelements-1.webp",
      "/art/fourelements-2.webp",
      "/art/fourelements-3.webp"
    ]
  },

  {
    id: "eter",
    slug: "eter",
    title: "ETER",
    price: 1200,
    stock: 1,
    category: "ART",
    description:
      `The energy of the ether is a constant current that springs from the depths of the universe establishing an essential union between humanity and the creative process of cosmos.

This intangible and powerful entity known as "ether" is considered the very soul of the world breathing life and meaning into everything that exists.

Each manifestation of life finds its origin in this primordial energy.`,
    images: [
      "/art/eter-art.webp",
      "/art/eter-1.webp",
      "/art/eter-2.webp"
    ]
  },

  {
    id: "water-life",
    slug: "water-of-life",
    title: "WATER OF LIFE",
    price: 4000,
    stock: 1,
    category: "ART",
    description:
      `This abstract work embodies the concept of water as a primary element of creation representing life and togetherness.

Water transcends its chemical composition to become a symbol loaded with meaning connecting plants animals and people in one interconnected network.

The notion that water has perception and emotion is ingrained in this interpretation.`,
    images: [
      "/art/wateroflife-art.webp",
      "/art/wateroflife-1.webp",
      "/art/wateroflife-2.webp"
    ]
  },

  {
    id: "xchel",
    slug: "xchel",
    title: "XCHEL",
    price: 1200,
    stock: 1,
    category: "ART",
    description:
      `"Ixchel" is a tribute to the Mayan goddess of the moon, love, pregnancy, medicine and textile work.

The work summarizes the essence of Ixchel fusing spiritual history with powerful stones like obsidian which open paths towards abundance and absorb negative energies.

This artistic representation symbolizes the gestation of love and medicine revitalizing the soul and eliminating energy blockages.`,
    images: [
      "/art/xchel-art.webp",
      "/art/xchel-1.webp",
      "/art/xchel-2.webp"
    ]
  },

  {
    id: "feeling",
    slug: "feeling",
    title: "FEELING",
    price: 4000,
    stock: 1,
    category: "ART",
    description:
      `"Feeling" delves into the emotional nature of people and how art becomes a channel to express what words sometimes cannot.

Emotions are often hidden and art becomes the ideal way to release them.

Each color and stroke in the work transmits joy sadness love balance and placidity enriching the connection between art and human beings.`,
    images: [
      "/art/feeling-art.webp",
      "/art/feeling-1.webp",
      "/art/feeling-2.webp"
    ]
  },

  {
    id: "emotional-lips",
    slug: "emotional-lips",
    title: "EMOTIONAL LIPS",
    price: 8768,
    originalPrice: 17536,
    onSale: true,
    stock: 1,
    category: "ART",
    description:
      `Through the lips I can understand the opening or narrow-mindedness what I want or do not want.

Lips can perceive tensions worries sorrows or fears.

The mouth is the manifestation of personality appetites desires hopes and character traits allowing openness to everything new: sensations ideas and impressions.`,
    images: [
      "/art/emotionallips-art.webp",
      "/art/emotionallips-1.webp",
      "/art/emotionallips-2.webp"
    ]
  }

]

export function getArtProduct(slug: string) {
  return artProducts.find((product) => product.slug === slug)
}

export function getAllArtProducts() {
  return artProducts
}