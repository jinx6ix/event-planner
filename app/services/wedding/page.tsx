import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Church, Heart, Users, Camera, Utensils, Music, ArrowRight } from "lucide-react"
import { generateSEO } from "@/lib/seo-config"

export const metadata = generateSEO("wedding")

export default function WeddingPage() {
  const features = [
    {
      icon: <Church className="h-6 w-6" />,
      title: "Full Wedding Planning",
      description: "Complete coordination from engagement to honeymoon, handling every detail",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Venue Sourcing",
      description: "Access to Dubai's most prestigious wedding venues and hidden gems",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Vendor Coordination",
      description: "Curated network of top photographers, florists, caterers, and entertainers",
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Design & Styling",
      description: "Bespoke wedding design reflecting your unique style and vision",
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Day-of Coordination",
      description: "Seamless execution ensuring you enjoy every moment stress-free",
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: "Honeymoon Planning",
      description: "Romantic getaway planning to start your married life perfectly",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/luxury-wedding-dubai-venue-flowers.jpg"
            alt="Wedding Planning Dubai"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">Wedding Planning in Dubai</h1>
            <p className="text-xl md:text-2xl leading-relaxed text-balance">Your dream wedding, flawlessly executed</p>
            <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto text-pretty">
              From intimate ceremonies to grand receptions, we orchestrate every detail of your perfect wedding day.
              Experience luxury wedding planning in Dubai with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Plan Your Wedding
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
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Comprehensive Wedding Services</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Everything you need for your perfect Dubai wedding
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

      {/* Venue Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Dubai Wedding Venues</h2>
            <p className="text-xl text-muted-foreground text-balance">Stunning locations for every wedding style</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Beachfront Resorts",
                desc: "Stunning ocean views and golden sands for romantic seaside ceremonies",
                image: "/beach-wedding-dubai-resort.jpg",
              },
              {
                title: "Luxury Hotels",
                desc: "Elegant ballrooms and rooftop terraces in Dubai's iconic hotels",
                image: "/luxury-hotel-wedding-ballroom-dubai.jpg",
              },
              {
                title: "Desert Venues",
                desc: "Magical desert settings with traditional Arabian hospitality",
                image: "/desert-wedding-venue-dubai.jpg",
              },
              {
                title: "Garden Venues",
                desc: "Lush gardens and outdoor spaces for intimate garden weddings",
                image: "/garden-wedding-venue-dubai.jpg",
              },
            ].map((venue, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={venue.image || "/placeholder.svg"}
                    alt={venue.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-2xl font-semibold">{venue.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{venue.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Begin Your Forever</h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed text-balance">
              Let us create the wedding of your dreams in Dubai. Contact us for a complimentary consultation and venue
              tour.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Schedule Consultation
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
