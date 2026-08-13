import { LuxuryHeader } from "@/components/luxury-header"
import { JewelryHero } from "@/components/jewelry/jewelry-hero"
import { GemstoneShowcase } from "@/components/jewelry/gemstone-showcase"
import { MaterialSections } from "@/components/jewelry/material-sections"
import { CollectionTypes } from "@/components/jewelry/collection-types"
import { FeaturedPieces } from "@/components/jewelry/featured-pieces"
import { PersonalizationSection } from "@/components/jewelry/personalization-section"
import { TestimonialsSection } from "@/components/jewelry/testimonials-section"
import { InstagramBenefitsSection } from "@/components/jewelry/instagram-benefits-section"
import { ExclusiveInvitation } from "@/components/jewelry/exclusive-invitation"
import { LuxuryFooter } from "@/components/luxury-footer"

export const metadata = {
  title: "Jewelry Collection | Abrakadabra Realm",
  description: "Discover our exclusive collection of fine jewelry. Gold, diamonds, emeralds, and rubies crafted into timeless pieces of art.",
}

export default function JewelryPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <LuxuryHeader />
      <JewelryHero />
      <GemstoneShowcase />
      <MaterialSections />
      <CollectionTypes />
      <FeaturedPieces />
      <ExclusiveInvitation />
      <PersonalizationSection />
      <TestimonialsSection />
      <InstagramBenefitsSection />
      <LuxuryFooter />
    </main>
  )
}
