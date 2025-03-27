"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Mic, Send, ShoppingBag, Clock, Sparkles, ThumbsUp, ThumbsDown } from "lucide-react"

// Mock recommended products
const recommendedProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    store: "ElectroTech",
    price: 199.99,
    discount: 15,
    image: "/placeholder.svg?height=80&width=80",
    match: 98,
  },
  {
    id: 2,
    name: "Designer Leather Jacket",
    store: "Fashion Hub",
    price: 299.99,
    discount: 0,
    image: "/placeholder.svg?height=80&width=80",
    match: 95,
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    store: "GadgetWorld",
    price: 149.99,
    discount: 10,
    image: "/placeholder.svg?height=80&width=80",
    match: 92,
  },
  {
    id: 4,
    name: "Organic Skincare Set",
    store: "Beauty Essentials",
    price: 89.99,
    discount: 20,
    image: "/placeholder.svg?height=80&width=80",
    match: 90,
  },
]

// Mock best shopping times
const bestTimes = [
  { day: "Monday", time: "10:00 AM - 12:00 PM", crowdLevel: "Low" },
  { day: "Tuesday", time: "2:00 PM - 4:00 PM", crowdLevel: "Low" },
  { day: "Wednesday", time: "11:00 AM - 1:00 PM", crowdLevel: "Medium" },
  { day: "Thursday", time: "3:00 PM - 5:00 PM", crowdLevel: "Low" },
  { day: "Friday", time: "10:00 AM - 12:00 PM", crowdLevel: "Medium" },
  { day: "Saturday", time: "10:00 AM - 11:00 AM", crowdLevel: "Low" },
  { day: "Sunday", time: "7:00 PM - 9:00 PM", crowdLevel: "Low" },
]

// Mock chat messages
const initialMessages = [
  {
    role: "assistant",
    content: "Hello! I'm your AI shopping assistant. How can I help you today?",
  },
]

export function ShoppingAssistant() {
  const [messages, setMessages] = useState(initialMessages)
  const [inputValue, setInputValue] = useState("")
  const [isRecording, setIsRecording] = useState(false)

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    setMessages([...messages, { role: "user", content: inputValue }])

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `I can help you with that! Based on your shopping history and preferences, I recommend checking out the new arrivals at Fashion Hub and ElectroTech. Would you like me to show you some specific items?`,
        },
      ])
    }, 1000)

    setInputValue("")
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)

    if (!isRecording) {
      // Simulate voice recording and response
      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "user", content: "Where can I find the best deals on electronics?" }])

        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content:
                "The best deals on electronics right now are at ElectroTech on the 2nd floor. They're having a 15% off sale on all wireless headphones and smart watches. Would you like me to show you the way there?",
            },
          ])
          setIsRecording(false)
        }, 1000)
      }, 2000)
    }
  }

  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">AI Shopping Assistant</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get personalized recommendations, find the best shopping times, and get real-time assistance.
            </p>
          </div>
        </div>

        <Tabs defaultValue="chat" className="w-full py-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="chat">Chat Assistant</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="best-times">Best Shopping Times</TabsTrigger>
          </TabsList>
          <TabsContent value="chat" className="py-4">
            <Card>
              <CardHeader>
                <CardTitle>AI Shopping Assistant</CardTitle>
                <CardDescription>
                  Ask questions about products, stores, or get personalized recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-[400px] overflow-y-auto space-y-4 p-4 rounded-lg border bg-background">
                    {messages.map((message, index) => (
                      <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[80%] rounded-lg p-4 ${
                            message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}
                        >
                          {message.role === "assistant" && (
                            <div className="flex items-center space-x-2 mb-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src="/placeholder.svg" alt="AI" />
                                <AvatarFallback>AI</AvatarFallback>
                              </Avatar>
                              <span className="text-sm font-medium">Mall Assistant</span>
                            </div>
                          )}
                          <p>{message.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center space-x-2">
                <Input
                  placeholder="Ask anything about the mall or shopping..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage()
                    }
                  }}
                />
                <Button size="icon" onClick={handleSendMessage}>
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
                <Button size="icon" variant={isRecording ? "destructive" : "outline"} onClick={toggleRecording}>
                  <Mic className="h-4 w-4" />
                  <span className="sr-only">{isRecording ? "Stop recording" : "Start recording"}</span>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="recommendations" className="py-4">
            <Card>
              <CardHeader>
                <CardTitle>Personalized Recommendations</CardTitle>
                <CardDescription>Products recommended based on your preferences and shopping history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 sm:grid-cols-2">
                  {recommendedProducts.map((product) => (
                    <div key={product.id} className="flex items-start space-x-4">
                      <div className="w-20 h-20 rounded-md overflow-hidden bg-muted">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{product.name}</h3>
                          <Badge variant="outline" className="ml-2">
                            {product.match}% match
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{product.store}</p>
                        <div className="flex items-center space-x-2">
                          {product.discount > 0 ? (
                            <>
                              <span className="text-sm line-through text-muted-foreground">
                                ${product.price.toFixed(2)}
                              </span>
                              <span className="font-bold">
                                ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                              </span>
                              <Badge variant="destructive" className="text-xs">
                                {product.discount}% OFF
                              </Badge>
                            </>
                          ) : (
                            <span className="font-bold">${product.price.toFixed(2)}</span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 pt-1">
                          <Button variant="ghost" size="sm">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            Like
                          </Button>
                          <Button variant="ghost" size="sm">
                            <ThumbsDown className="h-4 w-4 mr-1" />
                            Dislike
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  View All Recommendations
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="best-times" className="py-4">
            <Card>
              <CardHeader>
                <CardTitle>Best Shopping Times</CardTitle>
                <CardDescription>
                  AI-predicted optimal times to visit the mall based on historical and real-time data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bestTimes.map((time, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-full bg-primary/10">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{time.day}</h3>
                          <p className="text-sm text-muted-foreground">{time.time}</p>
                        </div>
                      </div>
                      <Badge
                        variant={
                          time.crowdLevel === "Low"
                            ? "outline"
                            : time.crowdLevel === "Medium"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {time.crowdLevel} Crowd
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Get Personalized Schedule
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

