"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { Navigation } from "@/components/navigation"

export default function ContactClientPage() {
  const { language } = useLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    guests: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitStatus("success")
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      date: "",
      guests: "",
      message: "",
    })

    setTimeout(() => setSubmitStatus("idle"), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20">
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 text-balance text-primary">
            {language === "en" ? "Get in Touch" : "تواصل معنا"}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {language === "en" ? "Let's start planning your perfect celebration" : "لنبدأ في التخطيط لاحتفالك المثالي"}
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-3xl mb-8 text-primary">
                  {language === "en" ? "Contact Information" : "معلومات الاتصال"}
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{language === "en" ? "Office Location" : "موقع المكتب"}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {language === "en"
                          ? "Dubai Marina, Marina Plaza, Tower 1, Office 2304, Dubai, UAE"
                          : "دبي مارينا، مارينا بلازا، برج 1، مكتب 2304، دبي، الإمارات"}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{language === "en" ? "Phone" : "الهاتف"}</h3>
                      <p className="text-muted-foreground">+971 4 123 4567</p>
                      <p className="text-muted-foreground">+971 50 123 4567</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{language === "en" ? "Email" : "البريد الإلكتروني"}</h3>
                      <p className="text-muted-foreground">info@luxuryeventsdubai.ae</p>
                      <p className="text-muted-foreground">events@luxuryeventsdubai.ae</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{language === "en" ? "Business Hours" : "ساعات العمل"}</h3>
                      <p className="text-muted-foreground">
                        {language === "en"
                          ? "Sunday - Thursday: 9:00 AM - 6:00 PM"
                          : "الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً"}
                      </p>
                      <p className="text-muted-foreground">
                        {language === "en" ? "Saturday: 10:00 AM - 4:00 PM" : "السبت: 10:00 صباحاً - 4:00 مساءً"}
                      </p>
                      <p className="text-muted-foreground">{language === "en" ? "Friday: Closed" : "الجمعة: مغلق"}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-64 bg-muted rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <MapPin className="w-12 h-12" />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border rounded-lg p-8">
                <h2 className="font-serif text-3xl mb-2 text-primary">
                  {language === "en" ? "Send Us a Message" : "أرسل لنا رسالة"}
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {language === "en"
                    ? "Fill out the form below and our team will get back to you within 24 hours."
                    : "املأ النموذج أدناه وسيتواصل معك فريقنا خلال 24 ساعة."}
                </p>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    {language === "en"
                      ? "Thank you! Your message has been sent successfully. We will contact you soon."
                      : "شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك قريباً."}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {language === "en" ? "Full Name *" : "الاسم الكامل *"}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={language === "en" ? "John Smith" : "أحمد محمد"}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        {language === "en" ? "Email Address *" : "البريد الإلكتروني *"}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        {language === "en" ? "Phone Number *" : "رقم الهاتف *"}
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium mb-2">
                        {language === "en" ? "Event Type *" : "نوع الحدث *"}
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                        className="w-full h-10 px-3 rounded-md border border-input bg-background"
                      >
                        <option value="">{language === "en" ? "Select event type" : "اختر نوع الحدث"}</option>
                        <option value="birthday">{language === "en" ? "Birthday Party" : "حفلة عيد ميلاد"}</option>
                        <option value="anniversary">{language === "en" ? "Anniversary" : "ذكرى سنوية"}</option>
                        <option value="gender-reveal">{language === "en" ? "Gender Reveal" : "الكشف عن الجنس"}</option>
                        <option value="wedding">{language === "en" ? "Wedding" : "زفاف"}</option>
                        <option value="corporate">{language === "en" ? "Corporate Event" : "حدث مؤسسي"}</option>
                        <option value="baby-shower">{language === "en" ? "Baby Shower" : "حفل استقبال المولود"}</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium mb-2">
                        {language === "en" ? "Preferred Date" : "التاريخ المفضل"}
                      </label>
                      <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} />
                    </div>
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium mb-2">
                        {language === "en" ? "Number of Guests" : "عدد الضيوف"}
                      </label>
                      <Input
                        id="guests"
                        name="guests"
                        type="number"
                        value={formData.guests}
                        onChange={handleChange}
                        placeholder="50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {language === "en" ? "Message *" : "الرسالة *"}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder={
                        language === "en"
                          ? "Tell us about your event vision, budget, and any specific requirements..."
                          : "أخبرنا عن رؤيتك للحدث والميزانية وأي متطلبات محددة..."
                      }
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-lg">
                    {isSubmitting ? (
                      language === "en" ? (
                        "Sending..."
                      ) : (
                        "جارٍ الإرسال..."
                      )
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {language === "en" ? "Send Message" : "إرسال الرسالة"}
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl text-center mb-12 text-primary">
            {language === "en" ? "Frequently Asked Questions" : "الأسئلة الشائعة"}
          </h2>
          <div className="space-y-6">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2">
                {language === "en" ? "How far in advance should I book?" : "كم من الوقت مسبقاً يجب أن أحجز؟"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "We recommend booking 3-6 months in advance for most events. For weddings and large corporate events, 12-18 months is ideal. However, we can accommodate shorter timelines based on availability."
                  : "نوصي بالحجز قبل 3-6 أشهر لمعظم الفعاليات. بالنسبة لحفلات الزفاف والفعاليات المؤسسية الكبيرة، 12-18 شهراً مثالي. ومع ذلك، يمكننا استيعاب جداول زمنية أقصر بناءً على التوفر."}
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2">
                {language === "en"
                  ? "What is included in your event planning services?"
                  : "ما الذي يتضمنه خدمات تخطيط الفعاليات الخاصة بكم؟"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "Our full-service planning includes venue selection, theme development, vendor coordination, décor design, catering management, entertainment booking, timeline creation, and on-site coordination. We customize packages based on your needs."
                  : "يتضمن تخطيطنا الشامل اختيار المكان، وتطوير الموضوع، وتنسيق الموردين، وتصميم الديكور، وإدارة تقديم الطعام، وحجز الترفيه، وإنشاء الجدول الزمني، والتنسيق في الموقع. نقوم بتخصيص الباقات بناءً على احتياجاتك."}
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2">
                {language === "en" ? "Do you work with specific budgets?" : "هل تعملون مع ميزانيات محددة؟"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "Yes! We work with various budgets and pride ourselves on maximizing value. During our consultation, we discuss your budget and create a plan that delivers exceptional results within your financial parameters."
                  : "نعم! نعمل مع ميزانيات مختلفة ونفخر بتعظيم القيمة. خلال استشارتنا، نناقش ميزانيتك ونضع خطة تقدم نتائج استثنائية ضمن معاييرك المالية."}
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2">
                {language === "en"
                  ? "Can you accommodate cultural and religious requirements?"
                  : "هل يمكنكم استيعاب المتطلبات الثقافية والدينية؟"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "Absolutely. Our team is experienced in planning events that respect and celebrate diverse cultural and religious traditions. We ensure all aspects of your event align with your values and requirements."
                  : "بالتأكيد. فريقنا ذو خبرة في تخطيط الفعاليات التي تحترم وتحتفل بالتقاليد الثقافية والدينية المتنوعة. نضمن أن جميع جوانب حدثك تتماشى مع قيمك ومتطلباتك."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
