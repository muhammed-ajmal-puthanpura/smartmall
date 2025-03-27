import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { MallAnalytics } from "@/components/mall-analytics"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <MallAnalytics />
      </main>
      <Footer />
    </div>
  )
}

