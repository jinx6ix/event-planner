import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Briefcase, Users, Presentation, Trophy, Lightbulb, Target, ArrowRight } from "lucide-react"
import { generateSEO } from "@/lib/seo-config"

export const metadata = generateSEO("corporate")

export default function CorporatePage() {
  const features = [
    {
      icon: <Presentation className="h-6 w-6" />,
      title: "Conference Planning",
      description: "Full-service conference management from venue to technology and speaker coordination",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Building Events",
      description: "Engaging activities and experiences that strengthen team bonds and boost morale",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Product Launches",
      description: "Impactful launch events that generate buzz and showcase your innovation",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Gala Dinners",
      description: "Elegant corporate galas and award ceremonies that celebrate achievements",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Brand Activations",
      description: "Experiential marketing events that create memorable brand connections",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Executive Retreats",
      description: "Strategic planning sessions in inspiring Dubai locations",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/corporate-event-conference-dubai-professional.jpg"
            alt="Corporate Event Planning Dubai"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">Corporate Event Planning in Dubai</h1>
            <p className="text-xl md:text-2xl leading-relaxed text-balance">Professional events that make an impact</p>
            <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto text-pretty">
              Elevate your brand with sophisticated corporate events that engage, inspire, and deliver results. From
              conferences to team building, we create professional experiences in Dubai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Plan Your Event
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
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Corporate Event Services</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Comprehensive solutions for business events in Dubai
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

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Why Choose Us for Corporate Events</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Professional expertise for successful business events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "ROI-Focused Planning",
                desc: "We align every event element with your business objectives and measure success",
              },
              {
                title: "Dubai Market Expertise",
                desc: "Deep understanding of Dubai's business culture and corporate event landscape",
              },
              {
                title: "Vendor Relationships",
                desc: "Established partnerships with premium venues, caterers, and technology providers",
              },
              {
                title: "Seamless Execution",
                desc: "Professional coordination ensuring flawless events that reflect your brand",
              },
            ].map((benefit, index) => (
              <Card key={index}>
                <CardContent className="pt-6 space-y-3">
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Elevate Your Corporate Events</h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed text-balance">
              Partner with Dubai's premier corporate event planning team. Contact us to discuss your next business
              event.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Request Proposal
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
