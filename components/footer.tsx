"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  const serviceLinks = [
    { href: "/services/birthday", label: t.services.birthday.name },
    { href: "/services/anniversary", label: t.services.anniversary.name },
    { href: "/services/gender-reveal", label: t.services.genderReveal.name },
    { href: "/services/wedding", label: t.services.wedding.name },
    { href: "/services/corporate", label: t.services.corporate.name },
    { href: "/services/baby-shower", label: t.services.babyShower.name },
  ]

  const quickLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">Luxe Events</div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">{t.footer.tagline}</p>
            <div className="flex gap-3 pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.services}</h3>
            <ul className="space-y-3">
              {serviceLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.contact.contactInfo}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>{t.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>{t.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>{t.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="max-w-md mx-auto text-center space-y-4">
            <h3 className="font-semibold text-lg">{t.footer.newsletter}</h3>
            <p className="text-sm text-primary-foreground/80">{t.footer.newsletterDesc}</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="secondary">{t.footer.subscribe}</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
