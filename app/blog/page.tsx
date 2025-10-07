"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowRight, Search, Calendar, Clock, User } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import blogData from "@/lib/blog-data.json"
import { useState } from "react"

export default function BlogPage() {
  const { t, language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogData.posts.filter((post) => {
    const title = language === "ar" ? post.titleAr : post.title
    const excerpt = language === "ar" ? post.excerptAr : post.excerpt
    const category = language === "ar" ? post.categoryAr : post.category
    const searchLower = searchQuery.toLowerCase()

    return (
      title.toLowerCase().includes(searchLower) ||
      excerpt.toLowerCase().includes(searchLower) ||
      category.toLowerCase().includes(searchLower)
    )
  })

  const categories = [...new Set(blogData.posts.map((post) => (language === "ar" ? post.categoryAr : post.category)))]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">{t.blog.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">{t.blog.subtitle}</p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto pt-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={searchQuery === "" ? "default" : "outline"}
              onClick={() => setSearchQuery("")}
              className="rounded-full"
            >
              All Articles
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                onClick={() => setSearchQuery(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={language === "ar" ? post.titleAr : post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                        {language === "ar" ? post.categoryAr : post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>
                          {post.readTime} {t.blog.readTime}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold leading-tight text-balance line-clamp-2">
                      {language === "ar" ? post.titleAr : post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed line-clamp-3 text-pretty">
                      {language === "ar" ? post.excerptAr : post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t border-border">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <Button asChild variant="ghost" className="p-0 h-auto font-semibold group/btn">
                      <Link href={`/blog/${post.id}`} className="flex items-center gap-2">
                        {t.blog.readMore}
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Plan Your Event?</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Let our expert team bring your vision to life. Contact us today for a free consultation.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
