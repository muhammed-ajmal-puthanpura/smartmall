import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { MallAnalytics } from "@/components/mall-analytics"
import { ShoppingAssistant } from "@/components/shopping-assistant"
import { SmartParkingPreview } from "@/components/smart-parking-preview"
import { PersonalizedDeals } from "@/components/personalized-deals"
import { EcoFriendlySection } from "@/components/eco-friendly-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <MallAnalytics />
        <ShoppingAssistant />
        <SmartParkingPreview />
        <PersonalizedDeals />
        <EcoFriendlySection />
      </main>
      <Footer />
    </div>
  )
}

