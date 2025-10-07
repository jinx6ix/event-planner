import type React from "react"
import type { Metadata } from "next"
import { generateSEO } from "@/lib/seo-config"

export const metadata: Metadata = generateSEO("contact")

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
