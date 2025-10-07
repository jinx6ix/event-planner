"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button variant="ghost" size="sm" onClick={() => setLanguage(language === "en" ? "ar" : "en")} className="gap-2">
      <Languages className="h-4 w-4" />
      <span className="font-medium">{language === "en" ? "العربية" : "English"}</span>
    </Button>
  )
}
