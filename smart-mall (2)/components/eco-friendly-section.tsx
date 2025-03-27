import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Battery, Leaf, Recycle, Zap } from "lucide-react"

export function EcoFriendlySection() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Eco-Friendly Shopping</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover sustainable brands, track your carbon footprint, and make environmentally conscious shopping
              decisions.
            </p>
          </div>
        </div>

        <div className="grid gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <CardHeader>
              <Leaf className="h-8 w-8 text-green-600 dark:text-green-400 mb-2" />
              <CardTitle>Sustainable Brands</CardTitle>
              <CardDescription>Discover eco-friendly and sustainable brands in our mall</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant="outline"
                      className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800"
                    >
                      Eco-Certified
                    </Badge>
                    <span className="font-medium">GreenLife</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Level 2</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant="outline"
                      className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800"
                    >
                      Eco-Certified
                    </Badge>
                    <span className="font-medium">Sustainable Threads</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Level 1</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant="outline"
                      className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800"
                    >
                      Eco-Certified
                    </Badge>
                    <span className="font-medium">EcoTech</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Level 3</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/eco/brands">View All Sustainable Brands</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <CardHeader>
              <Recycle className="h-8 w-8 text-green-600 dark:text-green-400 mb-2" />
              <CardTitle>Carbon Footprint Tracker</CardTitle>
              <CardDescription>Track the environmental impact of your shopping habits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">-15%</div>
                  <p className="text-sm text-muted-foreground">Carbon footprint reduction this month</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Eco-friendly purchases</span>
                    <span className="font-medium">12 items</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Plastic saved</span>
                    <span className="font-medium">2.3 kg</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>CO₂ emissions saved</span>
                    <span className="font-medium">18.5 kg</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/eco/footprint">View Detailed Footprint</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <CardHeader>
              <Zap className="h-8 w-8 text-green-600 dark:text-green-400 mb-2" />
              <CardTitle>EV Charging Stations</CardTitle>
              <CardDescription>Find and reserve electric vehicle charging stations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Parking Level A</h3>
                    <p className="text-sm text-muted-foreground">4 stations available</p>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800"
                  >
                    <Battery className="h-3 w-3 mr-1" />
                    Fast Charge
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Parking Level C</h3>
                    <p className="text-sm text-muted-foreground">2 stations available</p>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800"
                  >
                    <Battery className="h-3 w-3 mr-1" />
                    Standard
                  </Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/eco/ev-charging">Reserve Charging Station</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-center pt-4">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
            <Link href="/eco">
              Explore Eco-Friendly Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

