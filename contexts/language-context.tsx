"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, getTranslation } from "@/lib/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: ReturnType<typeof getTranslation>
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [isRTL, setIsRTL] = useState(false)

  useEffect(() => {
    // Load language from localStorage
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && (savedLang === "en" || savedLang === "ar")) {
      setLanguageState(savedLang)
      setIsRTL(savedLang === "ar")
      document.documentElement.lang = savedLang
      document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr"
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    setIsRTL(lang === "ar")
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
  }

  const t = getTranslation(language)

  return <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
