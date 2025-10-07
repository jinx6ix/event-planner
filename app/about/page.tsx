import type { Metadata } from "next"
import Image from "next/image"
import { Award, Users, Calendar, Heart } from "lucide-react"
import { generateSEO } from "@/lib/seo-config"
import { BreadcrumbSchema } from "@/components/structured-data"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = generateSEO("about")

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://luxuryeventsdubai.ae" },
          { name: "About", url: "https://luxuryeventsdubai.ae/about" },
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/luxury-event-planning-team-dubai.jpg"
          alt="Luxury Events Dubai Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 text-balance">About Luxury Events Dubai</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Creating unforgettable moments in the heart of Dubai since 2015
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 text-primary">Our Story</h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Founded in 2015, Luxury Events Dubai has grown from a passionate vision into one of the UAE&apos;s most
                  trusted event planning companies. We specialize in creating bespoke celebrations that reflect the
                  unique spirit of Dubai—where tradition meets innovation, and luxury knows no bounds.
                </p>
                <p>
                  Our journey began with a simple belief: every celebration deserves to be extraordinary. From intimate
                  gatherings to grand galas, we bring the same dedication, creativity, and attention to detail that has
                  made us the preferred choice for discerning clients across the Emirates.
                </p>
                <p>
                  Today, we&apos;re proud to have orchestrated over 2,000 successful events, each one a testament to our
                  commitment to excellence. Our team of experienced planners, designers, and coordinators work
                  tirelessly to transform your vision into reality, ensuring every moment is perfect.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/dubai-event-planning-office-luxury.jpg"
                alt="Luxury Events Dubai Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-serif text-primary mb-2">2000+</div>
              <div className="text-muted-foreground">Events Planned</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-primary">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl mb-3">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We pursue perfection in every detail, ensuring your event exceeds expectations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-2xl mb-3">Passion</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our love for creating memorable moments drives everything we do.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-serif text-2xl mb-3">Partnership</h3>
              <p className="text-muted-foreground leading-relaxed">
                We work closely with you, treating your celebration as our own.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl mb-3">Reliability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Count on us to deliver flawlessly, on time, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-6 text-primary">Meet Our Team</h2>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of event specialists brings together decades of combined experience in luxury event
            planning, design, and execution.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/event-planner-professional-woman-dubai.jpg"
                  alt="Sarah Al-Mansouri - Lead Event Planner"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl mb-1">Sarah Al-Mansouri</h3>
              <p className="text-primary mb-2">Lead Event Planner</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                15 years of experience creating luxury celebrations across the UAE
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/event-designer-creative-director-dubai.jpg"
                  alt="Mohammed Hassan - Creative Director"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl mb-1">Mohammed Hassan</h3>
              <p className="text-primary mb-2">Creative Director</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Award-winning designer specializing in bespoke event aesthetics
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/event-coordinator-logistics-expert-dubai.jpg"
                  alt="Layla Ahmed - Operations Manager"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl mb-1">Layla Ahmed</h3>
              <p className="text-primary mb-2">Operations Manager</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Expert in seamless event execution and vendor coordination
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-primary">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Let&apos;s bring your vision to life with our expertise and passion for perfection.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
