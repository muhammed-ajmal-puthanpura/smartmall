import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { PersonalizedDeals } from "@/components/personalized-deals"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PersonalizedDeals />
      </main>
      <Footer />
    </div>
  )
}

