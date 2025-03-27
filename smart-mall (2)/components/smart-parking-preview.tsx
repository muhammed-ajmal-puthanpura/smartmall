"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Car, Clock, MapPin, ArrowRight } from "lucide-react"

// Mock parking data
const parkingLevels = [
  { id: "A", name: "Level A", total: 120, available: 32, reserved: 8 },
  { id: "B", name: "Level B", total: 150, available: 45, reserved: 12 },
  { id: "C", name: "Level C", total: 100, available: 5, reserved: 3 },
]

export function SmartParkingPreview() {
  const [selectedLevel, setSelectedLevel] = useState("A")
  const currentLevel = parkingLevels.find((level) => level.id === selectedLevel)

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Smart Parking System</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find and reserve parking spots in real-time with our IoT-enabled smart parking system.
            </p>
          </div>
        </div>

        <div className="grid gap-6 py-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Parking Availability</CardTitle>
              <CardDescription>Real-time parking slot availability across all levels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex space-x-2">
                {parkingLevels.map((level) => (
                  <Button
                    key={level.id}
                    variant={selectedLevel === level.id ? "default" : "outline"}
                    onClick={() => setSelectedLevel(level.id)}
                  >
                    {level.name}
                  </Button>
                ))}
              </div>

              {currentLevel && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Available Spots</h3>
                      <div className="text-3xl font-bold">{currentLevel.available}</div>
                    </div>
                    <div>
                      <h3 className="font-medium">Reserved Spots</h3>
                      <div className="text-3xl font-bold">{currentLevel.reserved}</div>
                    </div>
                    <div>
                      <h3 className="font-medium">Total Capacity</h3>
                      <div className="text-3xl font-bold">{currentLevel.total}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Occupancy</span>
                      <span>
                        {Math.round(((currentLevel.total - currentLevel.available) / currentLevel.total) * 100)}%
                      </span>
                    </div>
                    <Progress value={((currentLevel.total - currentLevel.available) / currentLevel.total) * 100} />
                  </div>

                  <div className="grid grid-cols-5 gap-2">
                    {Array.from({ length: 20 }).map((_, i) => {
                      const isAvailable = i < currentLevel.available
                      const isReserved = !isAvailable && i < currentLevel.available + currentLevel.reserved

                      return (
                        <div
                          key={i}
                          className={`aspect-square rounded-md flex items-center justify-center ${
                            isAvailable
                              ? "bg-green-500/20 text-green-600 border border-green-500"
                              : isReserved
                                ? "bg-yellow-500/20 text-yellow-600 border border-yellow-500"
                                : "bg-red-500/20 text-red-600 border border-red-500"
                          }`}
                        >
                          <Car className="h-5 w-5" />
                        </div>
                      )
                    })}
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm">Available</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span className="text-sm">Reserved</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span className="text-sm">Occupied</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button className="w-full">Reserve a Parking Spot</Button>
            </CardFooter>
          </Card>

          <div className="flex flex-col gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Estimated Arrival Time</CardTitle>
                <CardDescription>Based on current traffic conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">12 min</h3>
                      <p className="text-sm text-muted-foreground">From your current location</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    Navigate
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Parking</CardTitle>
                <CardDescription>AI-suggested parking based on your destination</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-full bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Level B, Zone 3</h3>
                        <p className="text-sm text-muted-foreground">Closest to Fashion Hub</p>
                      </div>
                    </div>
                    <Badge>Recommended</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-full bg-muted">
                        <MapPin className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium">Level A, Zone 1</h3>
                        <p className="text-sm text-muted-foreground">Near main entrance</p>
                      </div>
                    </div>
                    <Badge variant="outline">Alternative</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Options
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <Button size="lg" asChild>
            <Link href="/parking">
              Explore Full Parking System
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

