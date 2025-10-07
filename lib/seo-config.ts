export interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonical?: string
}

export const defaultSEO: SEOConfig = {
  title: "Luxe Events Dubai | Premier Event Planning Services in Dubai",
  description:
    "Dubai's leading event planning company specializing in birthdays, anniversaries, gender reveals, weddings, corporate events, and baby showers. Expert luxury event management in UAE.",
  keywords: [
    "event planning dubai",
    "dubai event planner",
    "birthday party planner dubai",
    "wedding planner dubai",
    "corporate events dubai",
    "anniversary celebration dubai",
    "gender reveal party dubai",
    "baby shower planner dubai",
    "luxury events uae",
    "event management dubai",
    "party planner dubai",
    "dubai celebrations",
    "event organizer dubai",
    "professional event planning",
    "dubai party services",
  ],
  ogImage: "/og-image.jpg",
}

export const pageSEO = {
  home: {
    title: "Luxe Events Dubai | Premier Event Planning & Party Services in Dubai",
    description:
      "Transform your celebrations with Dubai's premier event planning company. Specializing in birthdays, weddings, anniversaries, gender reveals, corporate events & baby showers. Expert luxury event management.",
    keywords: [
      "event planning dubai",
      "dubai event planner",
      "luxury event planning uae",
      "party planner dubai",
      "celebration planning dubai",
      "event management company dubai",
      "professional event organizer dubai",
      "dubai party services",
      "best event planner dubai",
      "premium event planning",
    ],
  },
  services: {
    title: "Event Planning Services Dubai | Birthdays, Weddings & Corporate Events",
    description:
      "Comprehensive event planning services in Dubai: Birthday parties, weddings, anniversaries, gender reveals, corporate events, and baby showers. Professional, luxury event management.",
    keywords: [
      "event services dubai",
      "party planning services",
      "wedding planning dubai",
      "corporate event planning",
      "birthday party services dubai",
      "event management services",
    ],
  },
  birthday: {
    title: "Birthday Party Planner Dubai | Luxury Birthday Celebrations UAE",
    description:
      "Create unforgettable birthday celebrations in Dubai. Expert birthday party planning with custom themes, venue selection, entertainment, and catering. Kids & adult birthday parties.",
    keywords: [
      "birthday party planner dubai",
      "birthday celebration dubai",
      "kids birthday party dubai",
      "adult birthday party planner",
      "birthday event planning uae",
      "luxury birthday parties dubai",
      "birthday party organizer dubai",
      "themed birthday parties dubai",
      "milestone birthday celebration",
      "dubai birthday venues",
    ],
  },
  anniversary: {
    title: "Anniversary Event Planner Dubai | Romantic Celebration Planning UAE",
    description:
      "Celebrate your love story with elegant anniversary events in Dubai. Professional planning for wedding anniversaries, romantic dinners, and milestone celebrations.",
    keywords: [
      "anniversary planner dubai",
      "wedding anniversary celebration dubai",
      "romantic event planning uae",
      "anniversary party dubai",
      "milestone anniversary celebration",
      "anniversary dinner dubai",
      "couples celebration dubai",
    ],
  },
  genderReveal: {
    title: "Gender Reveal Party Planner Dubai | Creative Baby Gender Reveals UAE",
    description:
      "Spectacular gender reveal parties in Dubai. Creative concepts, stunning decorations, photography, and unforgettable reveal moments for your special announcement.",
    keywords: [
      "gender reveal party dubai",
      "gender reveal planner uae",
      "baby gender reveal dubai",
      "gender reveal ideas dubai",
      "gender reveal event planning",
      "creative gender reveals dubai",
      "gender reveal photography dubai",
    ],
  },
  wedding: {
    title: "Wedding Planner Dubai | Luxury Wedding Planning Services UAE",
    description:
      "Your dream wedding, flawlessly executed. Full-service wedding planning in Dubai including venue selection, vendor coordination, design, and day-of management.",
    keywords: [
      "wedding planner dubai",
      "dubai wedding planning",
      "luxury wedding dubai",
      "wedding coordinator uae",
      "destination wedding dubai",
      "wedding event management",
      "dubai wedding venues",
      "professional wedding planner",
    ],
  },
  corporate: {
    title: "Corporate Event Planner Dubai | Business Events & Conferences UAE",
    description:
      "Professional corporate event planning in Dubai. Conferences, team building, product launches, gala dinners, and executive retreats. Elevate your brand with expert event management.",
    keywords: [
      "corporate event planner dubai",
      "business event planning uae",
      "conference planning dubai",
      "corporate party dubai",
      "team building events dubai",
      "product launch dubai",
      "gala dinner planning",
      "corporate event management",
    ],
  },
  babyShower: {
    title: "Baby Shower Planner Dubai | Beautiful Baby Shower Events UAE",
    description:
      "Celebrate new beginnings with elegant baby shower planning in Dubai. Custom themes, decorations, games, catering, and memorable celebrations for mom-to-be.",
    keywords: [
      "baby shower planner dubai",
      "baby shower dubai",
      "baby shower event planning uae",
      "baby shower themes dubai",
      "baby shower organizer",
      "baby celebration dubai",
      "baby shower venues dubai",
    ],
  },
  about: {
    title: "About Luxe Events Dubai | Expert Event Planning Team UAE",
    description:
      "Meet Dubai's premier event planning team. Over a decade of experience creating unforgettable celebrations. Learn about our mission, values, and commitment to excellence.",
    keywords: [
      "about luxe events dubai",
      "event planning company dubai",
      "professional event planners",
      "dubai event team",
      "event planning expertise",
    ],
  },
  blog: {
    title: "Event Planning Blog Dubai | Tips, Trends & Inspiration UAE",
    description:
      "Expert event planning advice, latest trends, and inspiration for your Dubai celebrations. Tips for birthdays, weddings, corporate events, and more from industry professionals.",
    keywords: [
      "event planning blog dubai",
      "party planning tips",
      "event trends dubai",
      "celebration ideas uae",
      "event planning advice",
      "dubai event inspiration",
    ],
  },
  contact: {
    title: "Contact Luxe Events Dubai | Get Your Free Event Planning Consultation",
    description:
      "Ready to plan your perfect event in Dubai? Contact our expert team for a free consultation. Professional event planning services for all occasions.",
    keywords: [
      "contact event planner dubai",
      "event planning consultation",
      "book event planner dubai",
      "event planning inquiry",
      "dubai event contact",
    ],
  },
}

export function generateMetadata(config: SEOConfig) {
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords.join(", "),
    openGraph: {
      title: config.title,
      description: config.description,
      images: config.ogImage ? [config.ogImage] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: config.ogImage ? [config.ogImage] : [],
    },
    alternates: {
      canonical: config.canonical,
    },
  }
}

export function generateSEO(page: keyof typeof pageSEO) {
  return generateMetadata(pageSEO[page])
}
