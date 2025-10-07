# Luxury Events Dubai - Premium Event Planning Website

A comprehensive, SEO-optimized event planning website for Dubai's luxury event market. Built with Next.js 15, featuring full Arabic translation, structured data for search engines, and a modern, elegant design.

## 🌟 Features

### Core Functionality
- **Bilingual Support**: Complete English and Arabic translations with RTL support
- **6 Event Services**: Birthday, Anniversary, Gender Reveal, Wedding, Corporate Events, Baby Shower
- **Blog System**: 7 comprehensive articles with full SEO optimization
- **Contact System**: Functional contact form with validation
- **Responsive Design**: Mobile-first approach with elegant desktop layouts

### SEO Optimization
- **Comprehensive Metadata**: Unique meta titles, descriptions, and keywords for every page
- **Structured Data**: JSON-LD schema markup for Organization, Services, Blog Posts, and Breadcrumbs
- **Sitemap & Robots.txt**: Automated generation for search engine crawling
- **Dubai-Specific Keywords**: Targeted optimization for local search rankings
- **Performance Optimized**: Fast loading times with Next.js optimization
- **PWA Support**: Progressive Web App manifest for mobile installation

### Design System
- **Luxury Aesthetic**: Champagne gold, deep teal, and bronze color palette
- **Typography**: Elegant Cormorant Garamond serif with Arabic font support
- **Smooth Animations**: Subtle transitions and hover effects
- **Accessible**: WCAG compliant with proper ARIA labels and semantic HTML

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download the project**
   \`\`\`bash
   # If using v0, click "Download ZIP" or push to GitHub
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open in browser**
   \`\`\`
   http://localhost:3000
   \`\`\`

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
├── app/
│   ├── about/              # About page
│   ├── blog/               # Blog listing and individual posts
│   ├── contact/            # Contact page with form
│   ├── services/           # Service pages (6 event types)
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Homepage
│   ├── sitemap.ts          # Dynamic sitemap generation
│   └── robots.ts           # Robots.txt configuration
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── footer.tsx          # Site footer
│   ├── language-switcher.tsx  # EN/AR toggle
│   ├── navigation.tsx      # Main navigation
│   ├── service-card.tsx    # Service display cards
│   └── structured-data.tsx # SEO schema components
├── contexts/
│   └── language-context.tsx   # Language state management
├── lib/
│   ├── blog-data.json      # Blog posts content (EN/AR)
│   ├── seo-config.ts       # SEO metadata configuration
│   ├── translations.ts     # UI translations
│   └── utils.ts            # Utility functions
├── public/
│   ├── images/             # Event photos and assets
│   └── manifest.json       # PWA manifest
└── README.md
\`\`\`

## 🎨 Design Tokens

### Colors
- **Primary**: `#C9A961` (Champagne Gold) - Luxury and elegance
- **Accent**: `#2C7A7B` (Deep Teal) - Sophistication
- **Secondary**: `#9B6B3F` (Bronze) - Warmth
- **Background**: `#FFFBF5` (Warm White) - Clean canvas
- **Foreground**: `#1A1A1A` (Charcoal) - Readability

### Typography
- **Headings**: Cormorant Garamond (Serif) - Elegant and luxurious
- **Body**: System fonts with Arabic support - Readable and performant
- **Arabic**: Noto Sans Arabic - Proper RTL support

## 🔍 SEO Features

### Page-Specific Optimization

Each page includes:
- Unique meta title (50-60 characters)
- Compelling meta description (150-160 characters)
- Targeted keywords for Dubai market
- Open Graph tags for social sharing
- Twitter Card metadata
- Canonical URLs

### Structured Data

- **Organization Schema**: Company information, contact details, ratings
- **Service Schema**: Individual service descriptions and availability
- **Blog Post Schema**: Article metadata for rich snippets
- **Breadcrumb Schema**: Navigation hierarchy for search results

### Keywords Strategy

**Primary Keywords**:
- Event planning Dubai
- Luxury events Dubai
- Birthday party planner Dubai
- Wedding planner Dubai
- Corporate events Dubai

**Long-tail Keywords**:
- Best event planning company in Dubai
- Luxury birthday party planner Dubai Marina
- Professional wedding planner UAE
- Gender reveal party ideas Dubai
- Corporate event management Dubai

## 🌐 Translation System

### How It Works

1. **Language Context**: React Context API manages language state
2. **Persistent Selection**: localStorage saves user preference
3. **RTL Support**: Automatic text direction switching
4. **Complete Coverage**: All UI text and content translated

### Adding Translations

Edit `lib/translations.ts`:

\`\`\`typescript
export const translations = {
  en: {
    newKey: "English text",
  },
  ar: {
    newKey: "النص العربي",
  },
}
\`\`\`

## 📝 Blog Management

### Adding New Blog Posts

Edit `lib/blog-data.json`:

\`\`\`json
{
  "id": "unique-slug",
  "title": "English Title",
  "titleAr": "العنوان العربي",
  "excerpt": "Short description...",
  "excerptAr": "وصف قصير...",
  "content": "Full article content...",
  "contentAr": "محتوى المقال الكامل...",
  "image": "/path-to-image.jpg",
  "category": "Category Name",
  "categoryAr": "اسم الفئة",
  "author": "Author Name",
  "date": "2025-01-15",
  "readTime": 8
}
\`\`\`

## 🎯 Performance Optimization

### Implemented Optimizations

- **Next.js Image Optimization**: Automatic image resizing and WebP conversion
- **Font Optimization**: Subset fonts with `display: swap`
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Images load as they enter viewport
- **Minimal JavaScript**: Server components where possible
- **CSS Optimization**: Tailwind CSS with purging

### Performance Metrics Goals

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1440px

## 🔧 Customization

### Changing Colors

Edit `app/globals.css`:

\`\`\`css
@theme inline {
  --color-primary: #C9A961;
  --color-accent: #2C7A7B;
  /* ... other colors */
}
\`\`\`

### Changing Fonts

Edit `app/layout.tsx`:

\`\`\`typescript
import { Cute_Font as Your_Font } from 'next/font/google'

const yourFont = Your_Font({
  subsets: ["latin"],
  variable: "--font-your-font",
})
\`\`\`

### Adding Services

1. Create new service page in `app/services/[service-name]/page.tsx`
2. Add SEO config in `lib/seo-config.ts`
3. Add service card to homepage
4. Update sitemap in `app/sitemap.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

\`\`\`bash
npm run build
npm start
\`\`\`

Deploy the `.next` folder and `public` directory.

## 📊 Analytics Integration

Add analytics in `app/layout.tsx`:

\`\`\`typescript
// Google Analytics
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  `}
</Script>
\`\`\`

## 🔒 Security

- No sensitive data in client-side code
- Form validation on client and server
- HTTPS enforced in production
- Content Security Policy headers recommended

## 📞 Support & Contact

For questions or customization requests:
- Email: info@luxuryeventsdubai.ae
- Phone: +971 4 123 4567

## 📄 License

This project is proprietary and confidential.

## 🙏 Acknowledgments

- Built with Next.js 15
- UI components from shadcn/ui
- Icons from Lucide React
- Fonts from Google Fonts
- Images generated for demonstration purposes

---

**Version**: 1.0.0  
**Last Updated**: January 2025  
**Built with**: Next.js 15, React 19, TypeScript, Tailwind CSS v4
