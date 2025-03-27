import { Car, Headphones, MapPin, ShoppingCart, Users, Clock, Sparkles, Shield, Leaf, Trophy } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: <Headphones className="h-10 w-10 text-primary" />,
    title: "AI Shopping Assistant",
    description: "Get personalized recommendations and shopping guidance from our AI assistant.",
  },
 
  {
    icon: <Car className="h-10 w-10 text-primary" />,
    title: "Smart Parking",
    description: "Real-time parking availability and automatic slot booking.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Queue Management",
    description: "Virtual queuing system with real-time wait time predictions.",
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: "Personalized Deals",
    description: "Get deals and discounts tailored to your shopping preferences.",
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    title: "Smart Checkout",
    description: "Scan & Go checkout with contactless payment options.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Safety Features",
    description: "Emergency assistance and child tracking for peace of mind.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Social Shopping",
    description: "Shop with friends and share your experiences in real-time.",
  },
  {
    icon: <Trophy className="h-10 w-10 text-primary" />,
    title: "Gamification",
    description: "Earn points and rewards for shopping and using smart features.",
  },
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: "Eco-Friendly Shopping",
    description: "Discover sustainable brands and track your carbon footprint.",
  },
]

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Smart Mall Features</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the innovative features that make our mall the smartest shopping destination.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

