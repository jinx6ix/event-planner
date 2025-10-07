import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Heart, Sparkles, Music, Camera, Utensils, Gift, ArrowRight } from "lucide-react"
import { generateSEO } from "@/lib/seo-config"

export const metadata = generateSEO("anniversary")

export default function AnniversaryPage() {
  const features = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Romantic Venue Styling",
      description: "Elegant setups with candles, flowers, and personalized touches for intimate celebrations",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Personalized Decor",
      description: "Custom decorations reflecting your unique love story and journey together",
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Gourmet Dining Experiences",
      description: "Private chef services and curated menus from Dubai's finest restaurants",
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: "Live Music & Entertainment",
      description: "String quartets, jazz bands, or your favorite songs performed live",
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Memory Lane Displays",
      description: "Photo galleries and video montages celebrating your years together",
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Luxury Gift Coordination",
      description: "Thoughtful surprises and special touches to make the day extra memorable",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/romantic-anniversary-dinner-dubai-roses.jpg"
            alt="Anniversary Event Planning Dubai"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">Anniversary Event Planning in Dubai</h1>
            <p className="text-xl md:text-2xl leading-relaxed text-balance">Celebrate love with timeless elegance</p>
            <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto text-pretty">
              Honor your journey together with a beautifully orchestrated anniversary celebration that reflects your
              unique love story. From intimate dinners to grand parties, we create romantic experiences in Dubai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Plan Your Anniversary
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Anniversary Celebration Services</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Creating romantic moments that honor your love story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4">
                  <div className="inline-flex p-3 bg-primary/10 rounded-full text-primary">{feature.icon}</div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ideas Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Anniversary Celebration Ideas</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Romantic experiences tailored to your preferences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Intimate Dinner for Two",
                desc: "Private dining experience at Dubai's most romantic venues with personalized menus",
                image: "/romantic-dinner-dubai.jpg",
              },
              {
                title: "Yacht Celebration",
                desc: "Sunset cruise on a luxury yacht with champagne, gourmet dining, and stunning views",
                image: "/luxury-yacht-dubai-sunset.jpg",
              },
              {
                title: "Desert Romance",
                desc: "Private desert camp with traditional entertainment, stargazing, and Arabian hospitality",
                image: "/desert-dinner-dubai-romantic.jpg",
              },
              {
                title: "Grand Anniversary Party",
                desc: "Elegant celebration with family and friends at Dubai's finest ballrooms and venues",
                image: "/elegant-party-ballroom-dubai.jpg",
              },
            ].map((idea, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={idea.image || "/placeholder.svg"}
                    alt={idea.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-2xl font-semibold">{idea.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{idea.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Celebrate Your Love Story</h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed text-balance">
              Let us create a romantic anniversary celebration that honors your journey together. Contact us for a free
              consultation.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Book Consultation
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
