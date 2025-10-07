import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  Cake,
  Heart,
  Baby,
  Church,
  Briefcase,
  Gift,
  Star,
  Users,
  MapPin,
  CheckCircle2,
  Sparkles,
  Calendar,
  ArrowRight,
} from "lucide-react"
import { generateSEO } from "@/lib/seo-config"
import blogData from "@/lib/blog-data.json"
import { OrganizationSchema, BreadcrumbSchema } from "@/components/structured-data"

export const metadata = generateSEO("home")

export default function HomePage() {
  const services = [
    {
      title: "Birthday Celebrations",
      titleAr: "احتفالات أعياد الميلاد",
      description: "Milestone moments deserve extraordinary celebrations",
      descriptionAr: "اللحظات المهمة تستحق احتفالات استثنائية",
      href: "/services/birthday",
      image: "/luxury-birthday-party-dubai-balloons-cake.jpg",
      icon: <Cake className="h-6 w-6" />,
    },
    {
      title: "Anniversary Events",
      titleAr: "فعاليات الذكرى السنوية",
      description: "Celebrate love with timeless elegance",
      descriptionAr: "احتفل بالحب بأناقة خالدة",
      href: "/services/anniversary",
      image: "/romantic-anniversary-dinner-dubai-roses.jpg",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      title: "Gender Reveal Parties",
      titleAr: "حفلات الكشف عن الجنس",
      description: "Unveil your joy in spectacular style",
      descriptionAr: "اكشف عن فرحتك بأسلوب مذهل",
      href: "/services/gender-reveal",
      image: "/gender-reveal-party-pink-blue-balloons.jpg",
      icon: <Baby className="h-6 w-6" />,
    },
    {
      title: "Wedding Celebrations",
      titleAr: "احتفالات الزفاف",
      description: "Your dream wedding, flawlessly executed",
      descriptionAr: "زفاف أحلامك، منفذ بشكل لا تشوبه شائبة",
      href: "/services/wedding",
      image: "/luxury-wedding-dubai-venue-flowers.jpg",
      icon: <Church className="h-6 w-6" />,
    },
    {
      title: "Corporate Events",
      titleAr: "الفعاليات المؤسسية",
      description: "Professional events that make an impact",
      descriptionAr: "فعاليات احترافية تترك أثراً",
      href: "/services/corporate",
      image: "/corporate-event-conference-dubai-professional.jpg",
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      title: "Baby Showers",
      titleAr: "حفلات استقبال المولود",
      description: "Welcoming new life with joy and style",
      descriptionAr: "الترحيب بحياة جديدة بفرح وأناقة",
      href: "/services/baby-shower",
      image: "/baby-shower-party-decorations-pastel.jpg",
      icon: <Gift className="h-6 w-6" />,
    },
  ]

  const whyChooseUs = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Planning Team",
      titleAr: "فريق تخطيط خبير",
      description: "Seasoned professionals with years of experience in luxury event management",
      descriptionAr: "محترفون متمرسون بسنوات من الخبرة في إدارة الفعاليات الفاخرة",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Bespoke Experiences",
      titleAr: "تجارب مخصصة",
      description: "Every event is uniquely crafted to reflect your personal style and vision",
      descriptionAr: "كل حدث مصمم بشكل فريد ليعكس أسلوبك ورؤيتك الشخصية",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Dubai Expertise",
      titleAr: "خبرة دبي",
      description: "Deep knowledge of Dubai's finest venues, vendors, and cultural nuances",
      descriptionAr: "معرفة عميقة بأفضل الأماكن والموردين والفروق الثقافية في دبي",
    },
    {
      icon: <CheckCircle2 className="h-8 w-8" />,
      title: "Seamless Execution",
      titleAr: "تنفيذ سلس",
      description: "Flawless coordination from concept to completion, stress-free for you",
      descriptionAr: "تنسيق لا تشوبه شائبة من المفهوم إلى الإنجاز، بدون ضغوط عليك",
    },
  ]

  const testimonials = [
    {
      name: "Fatima Al-Mansouri",
      nameAr: "فاطمة المنصوري",
      event: "Wedding",
      eventAr: "زفاف",
      text: "Luxe Events made our wedding day absolutely perfect. Every detail was flawlessly executed, and our guests are still talking about it months later!",
      textAr:
        "جعلت لوكس إيفنتس يوم زفافنا مثالياً تماماً. تم تنفيذ كل التفاصيل بشكل لا تشوبه شائبة، ولا يزال ضيوفنا يتحدثون عنه بعد أشهر!",
      rating: 5,
    },
    {
      name: "Mohammed Hassan",
      nameAr: "محمد حسن",
      event: "Corporate Event",
      eventAr: "حدث مؤسسي",
      text: "Professional, creative, and incredibly organized. They transformed our product launch into an unforgettable experience.",
      textAr: "محترفون ومبدعون ومنظمون بشكل لا يصدق. حولوا إطلاق منتجنا إلى تجربة لا تُنسى.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      nameAr: "سارة جونسون",
      event: "Birthday Party",
      eventAr: "حفلة عيد ميلاد",
      text: "They brought my vision to life and exceeded all expectations. The attention to detail was remarkable!",
      textAr: "أحيوا رؤيتي وتجاوزوا كل التوقعات. كان الاهتمام بالتفاصيل رائعاً!",
      rating: 5,
    },
  ]

  const recentBlogs = blogData.posts.slice(0, 3)

  return (
    <div className="min-h-screen">
      <OrganizationSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://luxuryeventsdubai.ae" }]} />

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Kids-Winter-Festival-Dubai-Expo-1024x768.jpg"
            alt="Luxury Event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium">Dubai&apos;s Premier Event Planning Company</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
              Crafting Unforgettable Moments
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto text-balance">
              Premier Event Planning in the Heart of Dubai
            </p>

            <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto text-pretty">
              From intimate celebrations to grand affairs, we bring your vision to life with unparalleled elegance and
              precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Our Signature Services</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Exceptional experiences tailored to your vision
            </p>
          </div>

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

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Why Choose Luxe Events Dubai</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Excellence in every detail, passion in every celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6 space-y-4">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full text-primary">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground text-balance">Real experiences from real celebrations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-pretty italic">&quot;{testimonial.text}&quot;</p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Latest Insights & Inspiration</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Expert tips and trends from the world of luxury events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentBlogs.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.readTime} min read</span>
                  </div>
                  <h3 className="text-xl font-semibold leading-tight text-balance line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 text-pretty">
                    {post.excerpt}
                  </p>
                  <Button asChild variant="ghost" className="p-0 h-auto font-semibold group/btn">
                    <Link href={`/blog/${post.id}`} className="flex items-center gap-2">
                      Read More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Ready to Create Something Extraordinary?</h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed text-balance">
              Let&apos;s bring your vision to life. Contact us today for a free consultation and discover how we can make
              your event unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
