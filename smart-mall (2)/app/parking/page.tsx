import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { SmartParkingPreview } from "@/components/smart-parking-preview"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <SmartParkingPreview />
      </main>
      <Footer />
    </div>
  )
}

