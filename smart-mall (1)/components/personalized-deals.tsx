"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Heart, Star, Store } from "lucide-react"

// Mock deals data
const featuredDeals = [
  {
    id: 1,
    title: "50% Off Premium Headphones",
    store: "ElectroTech",
    originalPrice: 199.99,
    discountedPrice: 99.99,
    discount: 50,
    image: "/placeholder.svg?height=200&width=300",
    expiresIn: "2 days",
    matchScore: 95,
  },
  {
    id: 2,
    title: "Buy 1 Get 1 Free on All T-Shirts",
    store: "Fashion Hub",
    originalPrice: 29.99,
    discountedPrice: 29.99,
    discount: 50,
    image: "/placeholder.svg?height=200&width=300",
    expiresIn: "1 day",
    matchScore: 88,
  },
  {
    id: 3,
    title: "30% Off Luxury Skincare Products",
    store: "Beauty Essentials",
    originalPrice: 89.99,
    discountedPrice: 62.99,
    discount: 30,
    image: "/placeholder.svg?height=200&width=300",
    expiresIn: "3 days",
    matchScore: 92,
  },
  {
    id: 4,
    title: "20% Off All Sports Equipment",
    store: "Active Life",
    originalPrice: 149.99,
    discountedPrice: 119.99,
    discount: 20,
    image: "/placeholder.svg?height=200&width=300",
    expiresIn: "5 days",
    matchScore: 85,
  },
]

const recommendedDeals = [
  {
    id: 5,
    title: "40% Off Designer Watches",
    store: "Luxury Time",
    originalPrice: 299.99,
    discountedPrice: 179.99,
    discount: 40,
    image: "/placeholder.svg?height=200&width=300",
    expiresIn: "4 days",
    matchScore: 97,
  },
  {
    id: 6,
    title: "25% Off Premium Coffee Beans",
    store: "Coffee Culture",
    originalPrice: 24.99,
    discountedPrice: 18.74,
    discount: 25,
    image: "/placeholder.svg?height=200&width=300",
    expiresIn: "2 days",
    matchScore: 94,
  },
  {
    id: 7,
    title: "15% Off Bestselling Books",
    store: "Book Haven",
    originalPrice: 19.99,
    discountedPrice: 16.99,
    discount: 15,
    image: "/placeholder.svg?height=200&width=300",
    expiresIn: "7 days",
    matchScore: 91,
  },
  {
    id: 8,
    title: "Buy 2 Get 1 Free on All Accessories",
    store: "Style Studio",
    originalPrice: 39.99,
    discountedPrice: 26.66,
    discount: 33,
    image: "/placeholder.svg?height=200&width=300",
    expiresIn: "3 days",
    matchScore: 89,
  },
]

export function PersonalizedDeals() {
  const [savedDeals, setSavedDeals] = useState<number[]>([])

  const toggleSaveDeal = (dealId: number) => {
    if (savedDeals.includes(dealId)) {
      setSavedDeals(savedDeals.filter((id) => id !== dealId))
    } else {
      setSavedDeals([...savedDeals, dealId])
    }
  }

  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Personalized Deals & Discounts</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              AI-powered deals tailored to your shopping preferences and history.
            </p>
          </div>
        </div>

        <Tabs defaultValue="featured" className="w-full py-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="featured">Featured Deals</TabsTrigger>
            <TabsTrigger value="recommended">Recommended For You</TabsTrigger>
          </TabsList>
          <TabsContent value="featured" className="py-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredDeals.map((deal) => (
                <Card key={deal.id} className="overflow-hidden">
                  <div className="relative">
                    <img src={deal.image || "/placeholder.svg"} alt={deal.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-2 right-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full bg-background/80 backdrop-blur-sm"
                        onClick={() => toggleSaveDeal(deal.id)}
                      >
                        <Heart
                          className={`h-5 w-5 ${savedDeals.includes(deal.id) ? "fill-red-500 text-red-500" : ""}`}
                        />
                        <span className="sr-only">Save deal</span>
                      </Button>
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-primary text-primary-foreground">{deal.discount}% OFF</Badge>
                    </div>
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="line-clamp-1">{deal.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Store className="h-4 w-4 mr-1" />
                      {deal.store}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm line-through text-muted-foreground">
                          ${deal.originalPrice.toFixed(2)}
                        </span>
                        <span className="font-bold text-lg">${deal.discountedPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center">
                        <Badge variant="outline" className="bg-primary/10">
                          <Star className="h-3 w-3 mr-1 fill-primary text-primary" />
                          {deal.matchScore}% match
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      Expires in {deal.expiresIn}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full" variant="outline" asChild>
                      <Link href={`/deals/${deal.id}`}>View Deal</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="recommended" className="py-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {recommendedDeals.map((deal) => (
                <Card key={deal.id} className="overflow-hidden">
                  <div className="relative">
                    <img src={deal.image || "/placeholder.svg"} alt={deal.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-2 right-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full bg-background/80 backdrop-blur-sm"
                        onClick={() => toggleSaveDeal(deal.id)}
                      >
                        <Heart
                          className={`h-5 w-5 ${savedDeals.includes(deal.id) ? "fill-red-500 text-red-500" : ""}`}
                        />
                        <span className="sr-only">Save deal</span>
                      </Button>
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-primary text-primary-foreground">{deal.discount}% OFF</Badge>
                    </div>
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="line-clamp-1">{deal.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Store className="h-4 w-4 mr-1" />
                      {deal.store}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm line-through text-muted-foreground">
                          ${deal.originalPrice.toFixed(2)}
                        </span>
                        <span className="font-bold text-lg">${deal.discountedPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center">
                        <Badge variant="outline" className="bg-primary/10">
                          <Star className="h-3 w-3 mr-1 fill-primary text-primary" />
                          {deal.matchScore}% match
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      Expires in {deal.expiresIn}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full" variant="outline" asChild>
                      <Link href={`/deals/${deal.id}`}>View Deal</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center pt-4">
          <Button size="lg" asChild>
            <Link href="/deals">
              View All Deals
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

