import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Baby, Sparkles, Camera, Users, Cake, Gift, ArrowRight } from "lucide-react"
import { generateSEO } from "@/lib/seo-config"

export const metadata = generateSEO("genderReveal")

export default function GenderRevealPage() {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Creative Reveal Concepts",
      description: "Unique and memorable ways to announce your baby's gender, from smoke bombs to confetti cannons",
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Themed Decorations",
      description: "Beautiful pink and blue setups with balloons, banners, and personalized touches",
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Photography Packages",
      description: "Professional photographers to capture the magical moment and reactions",
    },
    {
      icon: <Cake className="h-6 w-6" />,
      title: "Catering Services",
      description: "Delicious treats and themed refreshments for your guests",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Interactive Activities",
      description: "Games, photo booths, and entertainment to engage your guests",
    },
    {
      icon: <Baby className="h-6 w-6" />,
      title: "Social Media Content",
      description: "Shareable moments and professional content for your announcement",
    },
  ]

  const revealIdeas = [
    {
      title: "Smoke Bomb Reveal",
      desc: "Colorful smoke in pink or blue creates a dramatic and photogenic moment",
    },
    {
      title: "Confetti Cannon",
      desc: "Shower of pink or blue confetti for an exciting group reveal",
    },
    {
      title: "Balloon Pop",
      desc: "Giant black balloon filled with pink or blue confetti or smaller balloons",
    },
    {
      title: "Cake Cutting",
      desc: "Elegant cake with colored filling revealed when you cut the first slice",
    },
    {
      title: "Paint Splash",
      desc: "Throw paint-filled balloons at a canvas for an artistic reveal",
    },
    {
      title: "Fireworks Display",
      desc: "Spectacular pink or blue fireworks lighting up the Dubai sky",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/gender-reveal-party-pink-blue-balloons.jpg"
            alt="Gender Reveal Party Planning Dubai"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">Gender Reveal Party Planning in Dubai</h1>
            <p className="text-xl md:text-2xl leading-relaxed text-balance">Unveil your joy in spectacular style</p>
            <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto text-pretty">
              Create magical moments with our creative gender reveal celebrations that surprise and delight your loved
              ones. From intimate gatherings to grand reveals, we make your announcement unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Plan Your Reveal
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
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Gender Reveal Services</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Everything you need for a memorable gender reveal party
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

      {/* Reveal Ideas Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Creative Reveal Ideas</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Popular gender reveal concepts for your Dubai celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {revealIdeas.map((idea, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-3">
                  <h3 className="text-xl font-semibold">{idea.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{idea.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">Planning Tips</h2>
              <p className="text-xl text-muted-foreground text-balance">Expert advice for your gender reveal party</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Choose the Right Timing",
                  desc: "Most parents reveal between 18-20 weeks when the gender is confirmed. Consider your energy levels and schedule.",
                },
                {
                  title: "Keep It a Secret",
                  desc: "Have your doctor write the gender in a sealed envelope and give it to your event planner or a trusted friend.",
                },
                {
                  title: "Consider Your Guests",
                  desc: "Think about who you want present for this special moment - intimate family or a larger celebration.",
                },
                {
                  title: "Plan for Photos",
                  desc: "Hire a professional photographer to capture genuine reactions and the reveal moment.",
                },
                {
                  title: "Have a Backup Plan",
                  desc: "Dubai weather can be unpredictable. Have indoor alternatives for outdoor reveals.",
                },
              ].map((tip, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{tip.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Ready to Reveal Your Joy?</h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed text-balance">
              Let us create a magical gender reveal celebration that you and your loved ones will cherish forever.
              Contact us today!
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Start Planning
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
