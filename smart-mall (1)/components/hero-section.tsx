import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, ShoppingBag, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                The Future of Shopping is Here
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Experience the world's most advanced AI-powered shopping mall with personalized recommendations, AR
                navigation, and smart services.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/stores">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Explore Stores
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/navigation">
                  <MapPin className="mr-2 h-4 w-4" />
                  AR Navigation
                </Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center space-x-1">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Smart Parking</span>
              </div>
              <div className="flex items-center space-x-1">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Personalized Deals</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[450px] w-full overflow-hidden rounded-xl bg-muted">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/20" />
               <img
        src="https://a.cdn-hotels.com/gdcs/production86/d1619/5dfcd0fa-db2f-45b5-8790-48a7ada61081.jpg"
        alt="Social Shopping"
      />
      <div/>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/80 to-background/0">
                <div className="space-y-2">
                  <h3 className="font-bold text-xl">Discover the Smart Mall Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    Our AI-powered mall adapts to your preferences and helps you navigate, shop, and enjoy your time
                    efficiently.
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/features">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </section>
  )
}

