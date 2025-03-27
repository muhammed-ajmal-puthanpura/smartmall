"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import AuthPage from "./auth-page"

export default function AuthPageWithTheme() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <AuthPage />
      <Toaster />
    </ThemeProvider>
  )
}

