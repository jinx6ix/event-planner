import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://luxuryeventsdubai.ae"
  const currentDate = new Date()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ]

  // Service pages
  const services = ["birthday", "anniversary", "gender-reveal", "wedding", "corporate", "baby-shower"]
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }))

  // Blog posts
  const blogSlugs = [
    "ultimate-guide-dubai-birthday-parties",
    "top-wedding-venues-dubai-2025",
    "creative-gender-reveal-ideas",
    "corporate-event-trends-2025",
    "anniversary-celebration-ideas-dubai",
    "baby-shower-planning-guide",
    "luxury-event-venues-dubai",
  ]
  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages, ...blogPages]
}
