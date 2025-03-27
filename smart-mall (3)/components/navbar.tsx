"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  Building2,
  Car,
  CircleUser,
  Clock,
  Headphones,
  Leaf,
  MapPin,
  Menu,
  ShoppingBag,
  ShoppingCart,
  Users,
  
} from "lucide-react"

const mainNavItems = [
  {
    title: "Features",
    href: "/features",
    icon: <Building2 className="h-4 w-4 mr-2" />,
  },
  {
    title: "Smart Parking",
    href: "/parking",
    icon: <Car className="h-4 w-4 mr-2" />,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: <Clock className="h-4 w-4 mr-2" />,
  },
  {
    title: "Offers",
    href: "/offers",
    icon: <ShoppingCart className="h-4 w-4 mr-2" />,
  },
]

const featureNavItems = [
  {
    title: "Shopping Assistant",
    href: "/assistant",
    description: "AI-powered shopping recommendations and guidance",
    icon: <Headphones className="h-5 w-5" />,
  },
  {
    title: "Smart Checkout",
    href: "/checkout",
    description: "Scan & Go checkout with contactless payments",
    icon: <ShoppingCart className="h-5 w-5" />,
  },
  {
    title: "Social Shopping",
    href: "/social",
    description: "Shop with friends and share your experiences",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Eco-Friendly Shopping",
    href: "#EcoFriendlySection",
    description: "Sustainable brands and carbon footprint tracking",
    icon: <Leaf className="h-5 w-5" />,
  },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>SmartMall</SheetTitle>
                <SheetDescription>AI-powered shopping experience</SheetDescription>
              </SheetHeader>
              <nav className="grid gap-4 py-6">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center px-2 py-1 text-lg font-medium transition-colors hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-muted-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                ))}
                <div className="my-2 h-px bg-border" />
                {featureNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center px-2 py-1 text-lg font-medium transition-colors hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-muted-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6" />
            <span className="font-bold inline-block">SmartMall</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {mainNavItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <div className="flex items-center">
                        {item.icon}
                        {item.title}
                      </div>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuTrigger>More</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {featureNavItems.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              {item.icon}
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://v0-signup-and-signin-page.vercel.app/">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Link>
          </Button>
          <Button className="hidden md:flex" asChild>
            <Link href="/assistant">
              <Headphones className="mr-2 h-4 w-4" />
              AI Assistant
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

