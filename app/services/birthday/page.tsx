import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle2, Cake, Users, Music, Camera, Utensils, Gift, ArrowRight } from "lucide-react"
import { generateSEO } from "@/lib/seo-config"

export const metadata = generateSEO("birthday")

export default function BirthdayPage() {
  const features = [
    {
      icon: <Cake className="h-6 w-6" />,
      title: "Custom Theme Design",
      description: "Unique themes tailored to your personality and preferences, from elegant to whimsical",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Venue Selection & Setup",
      description: "Perfect locations across Dubai with complete decoration and setup services",
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: "Entertainment Coordination",
      description: "DJs, live bands, performers, and activities to keep guests engaged",
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Catering & Cake Design",
      description: "Gourmet menus and custom cakes from Dubai's finest culinary experts",
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Photography & Videography",
      description: "Professional capture of every precious moment and milestone",
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Guest Management",
      description: "Invitations, RSVPs, seating arrangements, and gift coordination",
    },
  ]

  const packages = [
    {
      name: "Essential",
      price: "Starting from AED 5,000",
      features: [
        "Venue consultation",
        "Basic decoration package",
        "Cake coordination",
        "Up to 30 guests",
        "2-hour event duration",
      ],
    },
    {
      name: "Premium",
      price: "Starting from AED 12,000",
      features: [
        "Full venue setup",
        "Custom theme design",
        "Entertainment coordination",
        "Catering services",
        "Up to 75 guests",
        "4-hour event duration",
        "Photography package",
      ],
      popular: true,
    },
    {
      name: "Luxury",
      price: "Starting from AED 25,000",
      features: [
        "Exclusive venue booking",
        "Bespoke theme creation",
        "Premium entertainment",
        "Gourmet catering",
        "Unlimited guests",
        "Full-day event",
        "Photo & video coverage",
        "Dedicated event coordinator",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/luxury-birthday-party-dubai-balloons-cake.jpg"
            alt="Birthday Party Planning Dubai"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">Birthday Party Planning in Dubai</h1>
            <p className="text-xl md:text-2xl leading-relaxed text-balance">
              Milestone moments deserve extraordinary celebrations
            </p>
            <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto text-pretty">
              Transform your special day into an unforgettable experience with our bespoke birthday planning services.
              From intimate gatherings to grand celebrations, we create magical moments in Dubai's finest venues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Plan Your Birthday
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
            <h2 className="text-4xl md:text-5xl font-bold text-balance">What We Offer</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Comprehensive birthday party planning services in Dubai
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

      {/* Packages Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Birthday Party Packages</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Choose the perfect package for your celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? "border-primary shadow-xl scale-105" : ""}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <CardContent className="pt-8 space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold">{pkg.name}</h3>
                    <p className="text-3xl font-bold text-primary">{pkg.price}</p>
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full" variant={pkg.popular ? "default" : "outline"}>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Our Planning Process</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Simple steps to your perfect birthday celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Consultation", desc: "Share your vision and preferences" },
              { step: "02", title: "Planning", desc: "We design your perfect celebration" },
              { step: "03", title: "Coordination", desc: "We handle all the details" },
              { step: "04", title: "Celebration", desc: "Enjoy your stress-free event" },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-pretty">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Ready to Plan Your Birthday Party?</h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed text-balance">
              Contact us today for a free consultation and let's create an unforgettable birthday celebration in Dubai.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Book Free Consultation
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
