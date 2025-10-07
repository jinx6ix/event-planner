import Script from "next/script"

interface OrganizationSchemaProps {
  language?: "en" | "ar"
}

export function OrganizationSchema({ language = "en" }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EventPlanner",
    name: "Luxury Events Dubai",
    alternateName: language === "ar" ? "لاكشري إيفنتس دبي" : "Luxury Events Dubai",
    url: "https://luxuryeventsdubai.ae",
    logo: "https://luxuryeventsdubai.ae/logo.png",
    image: "https://luxuryeventsdubai.ae/luxury-event-planning-team-dubai.jpg",
    description:
      language === "ar"
        ? "شركة تخطيط الفعاليات الرائدة في دبي متخصصة في حفلات أعياد الميلاد والزفاف والذكرى السنوية والكشف عن الجنس والفعاليات المؤسسية وحفلات استقبال المولود"
        : "Dubai's leading event planning company specializing in birthdays, weddings, anniversaries, gender reveals, corporate events, and baby showers",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Marina Plaza, Tower 1, Office 2304",
      addressLocality: "Dubai Marina",
      addressRegion: "Dubai",
      postalCode: "00000",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.0772,
      longitude: 55.1398,
    },
    telephone: "+971-4-123-4567",
    email: "info@luxuryeventsdubai.ae",
    priceRange: "$$$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/luxuryeventsdubai",
      "https://www.instagram.com/luxuryeventsdubai",
      "https://www.linkedin.com/company/luxuryeventsdubai",
      "https://twitter.com/luxuryeventsdxb",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "287",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
  }

  return (
    <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schema)}
    </Script>
  )
}

interface ServiceSchemaProps {
  serviceName: string
  serviceNameAr: string
  description: string
  descriptionAr: string
  serviceType: string
  language?: "en" | "ar"
}

export function ServiceSchema({
  serviceName,
  serviceNameAr,
  description,
  descriptionAr,
  serviceType,
  language = "en",
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceType,
    name: language === "ar" ? serviceNameAr : serviceName,
    description: language === "ar" ? descriptionAr : description,
    provider: {
      "@type": "EventPlanner",
      name: "Luxury Events Dubai",
      url: "https://luxuryeventsdubai.ae",
      telephone: "+971-4-123-4567",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `https://luxuryeventsdubai.ae/services/${serviceType}`,
    },
  }

  return (
    <Script id={`service-schema-${serviceType}`} type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schema)}
    </Script>
  )
}

interface BlogPostSchemaProps {
  title: string
  description: string
  author: string
  datePublished: string
  image: string
  url: string
}

export function BlogPostSchema({ title, description, author, datePublished, image, url }: BlogPostSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: `https://luxuryeventsdubai.ae${image}`,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Luxury Events Dubai",
      logo: {
        "@type": "ImageObject",
        url: "https://luxuryeventsdubai.ae/logo.png",
      },
    },
    datePublished: datePublished,
    dateModified: datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  }

  return (
    <Script id="blog-post-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schema)}
    </Script>
  )
}

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <Script id="breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schema)}
    </Script>
  )
}
