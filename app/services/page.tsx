import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cake, Heart, Baby, Church, Briefcase, Gift, ArrowRight } from "lucide-react"
import { generateSEO } from "@/lib/seo-config"

export const metadata = generateSEO("services")

export default function ServicesPage() {
  const services = [
    {
      title: "Birthday Celebrations",
      description:
        "Milestone moments deserve extraordinary celebrations with custom themes and unforgettable experiences",
      href: "/services/birthday",
      image: "/luxury-birthday-party-dubai-balloons-cake.jpg",
      icon: <Cake className="h-6 w-6" />,
    },
    {
      title: "Anniversary Events",
      description: "Celebrate love with timeless elegance through romantic venues and personalized touches",
      href: "/services/anniversary",
      image: "/romantic-anniversary-dinner-dubai-roses.jpg",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      title: "Gender Reveal Parties",
      description: "Unveil your joy in spectacular style with creative reveals and stunning photography",
      href: "/services/gender-reveal",
      image: "/gender-reveal-party-pink-blue-balloons.jpg",
      icon: <Baby className="h-6 w-6" />,
    },
    {
      title: "Wedding Celebrations",
      description: "Your dream wedding, flawlessly executed from intimate ceremonies to grand receptions",
      href: "/services/wedding",
      image: "/luxury-wedding-dubai-venue-flowers.jpg",
      icon: <Church className="h-6 w-6" />,
    },
    {
      title: "Corporate Events",
      description: "Professional events that make an impact with expert planning and seamless execution",
      href: "/services/corporate",
      image: "/corporate-event-conference-dubai-professional.jpg",
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      title: "Baby Showers",
      description: "Welcoming new life with joy and style through beautiful themes and memorable celebrations",
      href: "/services/baby-shower",
      image: "/baby-shower-party-decorations-pastel.jpg",
      icon: <Gift className="h-6 w-6" />,
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">Our Event Planning Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
              Comprehensive event planning solutions in Dubai for every celebration. From birthdays to corporate events,
              we create unforgettable experiences tailored to your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.href}
                title={service.title}
                description={service.description}
                href={service.href}
                image={service.image}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Plan Your Perfect Event?</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Contact us today for a free consultation and let's create something extraordinary together.
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
