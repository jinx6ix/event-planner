"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import blogData from "@/lib/blog-data.json"
import { notFound } from "next/navigation"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { language } = useLanguage()
  const t = translations[language]
  const post = blogData.posts.find((p) => p.id === params.slug)

  if (!post) {
    notFound()
  }

  const title = language === "ar" ? post.titleAr : post.title
  const content = language === "ar" ? post.contentAr : post.content
  const category = language === "ar" ? post.categoryAr : post.category

  const relatedPosts = blogData.posts
    .filter((p) => p.id !== post.id && (language === "ar" ? p.categoryAr : p.category) === category)
    .slice(0, 3)

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={post.image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-white">
            <Button asChild variant="ghost" className="text-white hover:text-white/80 -ml-4">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.common.backToHome}
              </Link>
            </Button>

            <div className="inline-block px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
              {category}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-balance">{title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>
                  {post.readTime} {t.blog.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3 space-y-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                    {language === "ar" ? post.excerptAr : post.excerpt}
                  </p>

                  <div className="mt-8 space-y-6 text-foreground leading-relaxed">
                    {content.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="text-pretty">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Share Section */}
                <div className="pt-8 border-t border-border">
                  <div className="flex items-center gap-4">
                    <span className="font-semibold flex items-center gap-2">
                      <Share2 className="h-5 w-5" />
                      {t.blog.shareArticle}:
                    </span>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="rounded-full bg-transparent"
                        aria-label="Share on Facebook"
                      >
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Facebook className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="rounded-full bg-transparent"
                        aria-label="Share on Twitter"
                      >
                        <a
                          href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="rounded-full bg-transparent"
                        aria-label="Share on LinkedIn"
                      >
                        <a
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1 space-y-8">
                {/* Author Card */}
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{post.author}</p>
                        <p className="text-sm text-muted-foreground">Event Specialist</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Categories */}
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <h3 className="font-semibold text-lg">{t.blog.categories}</h3>
                    <div className="flex flex-wrap gap-2">
                      {[...new Set(blogData.posts.map((p) => (language === "ar" ? p.categoryAr : p.category)))].map(
                        (cat) => (
                          <Link
                            key={cat}
                            href="/blog"
                            className="px-3 py-1 bg-muted hover:bg-muted/80 rounded-full text-sm transition-colors"
                          >
                            {cat}
                          </Link>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="pt-6 space-y-4">
                    <h3 className="font-semibold text-lg">Ready to Plan Your Event?</h3>
                    <p className="text-sm text-primary-foreground/90">
                      Contact us today for a free consultation and let's create something extraordinary.
                    </p>
                    <Button asChild variant="secondary" className="w-full">
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t.blog.relatedPosts}</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={language === "ar" ? relatedPost.titleAr : relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 space-y-3">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {language === "ar" ? relatedPost.categoryAr : relatedPost.category}
                      </span>
                      <h3 className="text-xl font-semibold leading-tight line-clamp-2">
                        {language === "ar" ? relatedPost.titleAr : relatedPost.title}
                      </h3>
                      <Button asChild variant="ghost" className="p-0 h-auto font-semibold group/btn">
                        <Link href={`/blog/${relatedPost.id}`} className="flex items-center gap-2">
                          {t.blog.readMore}
                          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
