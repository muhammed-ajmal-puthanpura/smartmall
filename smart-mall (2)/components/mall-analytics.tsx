"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts"
import { Users, ShoppingBag, Clock, TrendingUp } from "lucide-react"

// Mock data for mall analytics
const hourlyData = [
  { time: "8AM", visitors: 120, sales: 1200, avgTime: 25 },
  { time: "9AM", visitors: 240, sales: 2400, avgTime: 30 },
  { time: "10AM", visitors: 380, sales: 4100, avgTime: 45 },
  { time: "11AM", visitors: 520, sales: 6200, avgTime: 55 },
  { time: "12PM", visitors: 650, sales: 8500, avgTime: 60 },
  { time: "1PM", visitors: 780, sales: 9800, avgTime: 65 },
  { time: "2PM", visitors: 720, sales: 8900, avgTime: 60 },
  { time: "3PM", visitors: 680, sales: 7600, avgTime: 55 },
  { time: "4PM", visitors: 540, sales: 6300, avgTime: 50 },
  { time: "5PM", visitors: 480, sales: 5800, avgTime: 45 },
  { time: "6PM", visitors: 600, sales: 7200, avgTime: 50 },
  { time: "7PM", visitors: 750, sales: 9000, avgTime: 55 },
  { time: "8PM", visitors: 820, sales: 9500, avgTime: 60 },
  { time: "9PM", visitors: 600, sales: 7000, avgTime: 45 },
  { time: "10PM", visitors: 350, sales: 4200, avgTime: 35 },
]

const dailyData = [
  { day: "Mon", visitors: 4500, sales: 65000, avgTime: 48 },
  { day: "Tue", visitors: 4200, sales: 62000, avgTime: 45 },
  { day: "Wed", visitors: 4800, sales: 68000, avgTime: 50 },
  { day: "Thu", visitors: 5100, sales: 72000, avgTime: 52 },
  { day: "Fri", visitors: 6500, sales: 85000, avgTime: 55 },
  { day: "Sat", visitors: 8200, sales: 120000, avgTime: 65 },
  { day: "Sun", visitors: 7800, sales: 110000, avgTime: 60 },
]

const storeData = [
  { name: "Fashion Store", visitors: 1200, sales: 25000 },
  { name: "Electronics", visitors: 950, sales: 42000 },
  { name: "Home Goods", visitors: 850, sales: 18000 },
  { name: "Food Court", visitors: 2100, sales: 15000 },
  { name: "Bookstore", visitors: 650, sales: 9000 },
  { name: "Sports", visitors: 780, sales: 16000 },
  { name: "Jewelry", visitors: 420, sales: 38000 },
]

export function MallAnalytics() {
  const [timeframe, setTimeframe] = useState("hourly")
  const data = timeframe === "hourly" ? hourlyData : dailyData

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Real-Time Mall Analytics</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get insights into mall traffic, sales, and customer behavior to plan your visit efficiently.
            </p>
          </div>
        </div>

        <div className="grid gap-6 py-8 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,320</div>
              <p className="text-xs text-muted-foreground">+12% from yesterday</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$124,580</div>
              <p className="text-xs text-muted-foreground">+8% from yesterday</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Time Spent</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">52 min</div>
              <p className="text-xs text-muted-foreground">+5% from yesterday</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Occupancy</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68%</div>
              <p className="text-xs text-muted-foreground">Moderate crowd level</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="traffic" className="w-full py-8">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="traffic">Traffic</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="time">Time Spent</TabsTrigger>
              <TabsTrigger value="stores">Stores</TabsTrigger>
            </TabsList>
            <div className="flex items-center space-x-2">
              <TabsList>
                <TabsTrigger
                  value="hourly"
                  onClick={() => setTimeframe("hourly")}
                  className={timeframe === "hourly" ? "bg-primary text-primary-foreground" : ""}
                >
                  Hourly
                </TabsTrigger>
                <TabsTrigger
                  value="daily"
                  onClick={() => setTimeframe("daily")}
                  className={timeframe === "daily" ? "bg-primary text-primary-foreground" : ""}
                >
                  Daily
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          <TabsContent value="traffic">
            <Card>
              <CardHeader>
                <CardTitle>Visitor Traffic</CardTitle>
                <CardDescription>
                  {timeframe === "hourly"
                    ? "Number of visitors per hour today"
                    : "Number of visitors per day this week"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    visitors: {
                      label: "Visitors",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey={timeframe === "hourly" ? "time" : "day"} />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="visitors"
                        stroke="var(--color-visitors)"
                        fill="var(--color-visitors)"
                        fillOpacity={0.2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="sales">
            <Card>
              <CardHeader>
                <CardTitle>Sales Data</CardTitle>
                <CardDescription>
                  {timeframe === "hourly" ? "Sales volume per hour today ($)" : "Sales volume per day this week ($)"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    sales: {
                      label: "Sales ($)",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey={timeframe === "hourly" ? "time" : "day"} />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line type="monotone" dataKey="sales" stroke="var(--color-sales)" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="time">
            <Card>
              <CardHeader>
                <CardTitle>Average Time Spent</CardTitle>
                <CardDescription>
                  {timeframe === "hourly"
                    ? "Average time spent by visitors per hour (minutes)"
                    : "Average time spent by visitors per day (minutes)"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    avgTime: {
                      label: "Time (minutes)",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey={timeframe === "hourly" ? "time" : "day"} />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line type="monotone" dataKey="avgTime" stroke="var(--color-avgTime)" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="stores">
            <Card>
              <CardHeader>
                <CardTitle>Store Performance</CardTitle>
                <CardDescription>Visitors and sales by store</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    visitors: {
                      label: "Visitors",
                      color: "hsl(var(--chart-1))",
                    },
                    sales: {
                      label: "Sales ($)",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={storeData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis yAxisId="left" orientation="left" stroke="var(--color-visitors)" />
                      <YAxis yAxisId="right" orientation="right" stroke="var(--color-sales)" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar yAxisId="left" dataKey="visitors" fill="var(--color-visitors)" name="Visitors" />
                      <Bar yAxisId="right" dataKey="sales" fill="var(--color-sales)" name="Sales ($)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

