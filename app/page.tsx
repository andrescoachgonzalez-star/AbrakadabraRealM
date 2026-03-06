import { LuxuryHeader } from "@/components/luxury-header"
import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { SubscribeSection } from "@/components/subscribe-section"
import { RentalSection } from "@/components/rental-section"
import { TeamSection } from "@/components/team-section"
import { FaqSection } from "@/components/faq-section"
import { LuxuryFooter } from "@/components/luxury-footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <LuxuryHeader />
      <HeroSection />
      <CategoriesSection />
      {/* cambiar cuando ya se tenga back para hacer la suscripcion */}
      {/* <SubscribeSection /> */}
      <RentalSection />
      <TeamSection />
      <FaqSection />
      <LuxuryFooter />
    </main>
  )
}
