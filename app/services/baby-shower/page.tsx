import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Baby, Gift, Camera, Cake, Users, Heart, ArrowRight } from "lucide-react"
import { generateSEO } from "@/lib/seo-config"

export const metadata = generateSEO("babyShower")

export default function BabyShowerPage() {
  const features = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Theme Development",
      description: "Custom themes from classic to modern, tailored to your style and preferences",
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Venue Decoration",
      description: "Beautiful setups with balloons, banners, centerpieces, and personalized touches",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Games & Activities",
      description: "Fun and engaging games that entertain guests and create memories",
    },
    {
      icon: <Cake className="h-6 w-6" />,
      title: "Catering & Desserts",
      description: "Delicious menus and themed treats perfect for your celebration",
    },
    {
      icon: <Baby className="h-6 w-6" />,
      title: "Gift Registry Coordination",
      description: "Help guests choose perfect gifts with organized registry management",
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Keepsake Creation",
      description: "Memory books, photo booths, and mementos for lasting memories",
    },
  ]

  const themes = [
    {
      title: "Woodland Creatures",
      desc: "Adorable forest animals with natural, earthy tones",
    },
    {
      title: "Twinkle Twinkle Little Star",
      desc: "Celestial theme with stars, moons, and dreamy decorations",
    },
    {
      title: "Safari Adventure",
      desc: "Jungle animals and tropical greenery for an adventurous celebration",
    },
    {
      title: "Nautical Theme",
      desc: "Anchors, sailboats, and ocean-inspired decorations",
    },
    {
      title: "Boho Chic",
      desc: "Macramé, pampas grass, and neutral tones for modern elegance",
    },
    {
      title: "Rainbow Baby",
      desc: "Colorful celebration of hope and joy with rainbow decorations",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/baby-shower-party-decorations-pastel.jpg"
            alt="Baby Shower Planning Dubai"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">Baby Shower Planning in Dubai</h1>
            <p className="text-xl md:text-2xl leading-relaxed text-balance">Welcoming new life with joy and style</p>
            <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto text-pretty">
              Celebrate the upcoming arrival with a beautifully designed baby shower that honors this precious
              milestone. From intimate gatherings to grand celebrations, we create memorable moments in Dubai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Plan Your Baby Shower
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
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Baby Shower Services</h2>
            <p className="text-xl text-muted-foreground text-balance">Complete planning for your special celebration</p>
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

      {/* Themes Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Popular Baby Shower Themes</h2>
            <p className="text-xl text-muted-foreground text-balance">Beautiful themes for your Dubai baby shower</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {themes.map((theme, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-3">
                  <h3 className="text-xl font-semibold">{theme.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{theme.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Celebrate Your Bundle of Joy</h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed text-balance">
              Let us create a beautiful baby shower that celebrates this special time. Contact us for a free
              consultation.
            </p>
            <Button asChild size="lg" variant="secondary">
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
