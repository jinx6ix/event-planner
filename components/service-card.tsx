"use client"

import type React from "react"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  href: string
  image: string
  icon?: React.ReactNode
}

export function ServiceCard({ title, description, href, image, icon }: ServiceCardProps) {
  const { t } = useLanguage()

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {icon && (
          <div className="absolute top-4 right-4 p-3 bg-primary/90 rounded-full text-primary-foreground">{icon}</div>
        )}
      </div>
      <CardContent className="p-6 space-y-4">
        <h3 className="text-2xl font-semibold text-balance">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-pretty">{description}</p>
        <Button asChild variant="ghost" className="group/btn p-0 h-auto font-semibold">
          <Link href={href} className="flex items-center gap-2">
            {t.common.learnMore}
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
