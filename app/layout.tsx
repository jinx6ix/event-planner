import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Noto_Sans_Arabic } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { defaultSEO, generateMetadata } from "@/lib/seo-config"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-arabic",
  display: "swap",
})

export const metadata: Metadata = generateMetadata(defaultSEO)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#C9A961" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${cormorant.variable} ${notoArabic.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
