# AV's Cabinets - Luxury Custom Cabinetry Website

A premium Next.js website for AV's Cabinets, featuring museum-grade custom kitchens and bespoke cabinetry for California's wealthiest neighborhoods. Built with cutting-edge technology and optimized for ultra-high-net-worth clientele.

## 🏆 Overview

This website targets California's most exclusive communities, including:
- **Silicon Valley**: Atherton, Palo Alto, Hillsborough, Los Altos Hills
- **Marin County**: Belvedere, Tiburon, Ross, Kentfield  
- **Lake Tahoe**: Martis Camp, Lahontan, Schaffer's Mill
- **Central Coast**: Carmel, Pebble Beach, Montecito, Big Sur
- **Los Angeles**: Bel Air, Beverly Hills, Holmby Hills, Malibu
- **Orange County**: Newport Coast, Laguna Beach, Corona del Mar
- **San Diego**: Rancho Santa Fe, La Jolla

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🛠 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX for rich content pages
- **Images**: Next.js optimized images with SEO-friendly naming
- **SEO**: Advanced schema markup, sitemaps, breadcrumbs
- **Performance**: ISR, image optimization, lazy loading

## 🎨 Design System

### Color Palette
- **Deep Green**: `#0E3B2E` - Primary brand color
- **Oxblood**: `#5A2A2A` - Accent color for luxury appeal
- **Ivory**: `#F5F1E8` - Background and light elements
- **French Gray**: `#B9B6AE` - Secondary text and borders
- **Charcoal**: `#1F1F1F` - Primary text color
- **Brass**: `#B08D57` - Accent details (sparingly used)

### Typography
- **Display**: Libre Baskerville (serif) - Headlines and luxury appeal
- **Body**: Inter (sans-serif) - Clean, readable body text
- **Generous spacing**: 1.7 line-height for readability
- **Hierarchical scales**: Carefully crafted size relationships

### Brand Voice
- **Understated luxury**: Quiet confidence over ostentation
- **Craftsmanship-first**: Technical expertise with artistic sensibility
- **Stewardship**: Environmental and cultural responsibility
- **Heritage**: Traditional techniques with modern innovation

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── service-areas/           # Location-specific landing pages
│   │   ├── silicon-valley/
│   │   │   ├── atherton/        # Ultra-high-net-worth community
│   │   │   ├── palo-alto/
│   │   │   └── ...
│   │   ├── marin/
│   │   ├── los-angeles/
│   │   └── ...
│   ├── services/                # Service offering pages
│   │   ├── custom-kitchens/
│   │   ├── bespoke-cabinetry/
│   │   └── ...
│   ├── portfolio/               # Project case studies
│   ├── materials/               # Materials & finishes
│   ├── process/                 # 6-phase methodology
│   └── ...
├── components/                   # Reusable UI components
│   ├── OptimizedImage.tsx       # SEO-optimized image component
│   ├── StructuredData.tsx       # Schema.org markup
│   ├── Breadcrumbs.tsx          # Navigation breadcrumbs
│   └── ...
├── lib/                         # Utility functions
│   └── images.ts                # Image metadata & SEO mapping
└── ...

public/images/                    # Organized image assets
├── portfolio/                   # Project photography
├── services/                    # Service illustrations
├── materials/                   # Wood samples & processes
├── process/                     # Workflow documentation
└── service-areas/               # Location-specific imagery
```

## 📊 SEO Optimization

### Image SEO
All images follow strict naming conventions:
- **Pattern**: `[location]-[material/style]-[room/function].jpg`
- **Example**: `atherton-walnut-inset-kitchen.jpg`
- **Alt Text**: Descriptive, location-aware, keyword-rich
- **Local Storage**: No hotlinking, all images served locally

### Schema Markup
- **Organization**: Company information and contact details
- **LocalBusiness**: Location-specific business listings
- **Breadcrumbs**: Navigation structure for search engines
- **Product/Service**: Detailed service offerings
- **Article**: Blog posts and case studies

### Technical SEO
- **Sitemap**: Auto-generated with priority weighting
- **Robots.txt**: Proper crawling instructions
- **Meta Tags**: Comprehensive title, description, keywords
- **Open Graph**: Social media optimization
- **Core Web Vitals**: Optimized for performance metrics

## 🎯 Content Strategy

### Word Count Requirements
Every page contains **minimum 3,000 words** of unique, high-quality content using this structure:

1. **Executive Overview** (150-250 words)
2. **Design Philosophy** (350-500 words)
3. **Material Intelligence** (350-500 words)
4. **Engineering & Tolerances** (250-400 words)
5. **Process** (300-450 words)
6. **Regional/Lifestyle Fit** (400-600 words)
7. **Casework Applications** (250-400 words)
8. **Care & Longevity** (200-350 words)
9. **Collaboration** (200-350 words)
10. **Mini-Guides** (3-5 essays, 150-250 each)
11. **FAQ** (10-14 Q&As, 100-180 each)
12. **Calls-to-Action**

### Internal Linking Strategy
- **Regional Clusters**: Geographic proximity linking
- **Service Cross-Links**: Related service offerings
- **Portfolio Integration**: Project showcases
- **Authority Building**: Expert content interconnection

## 🌟 Key Features

### Advanced Components
- **OptimizedImage**: Automatic SEO optimization, lazy loading, responsive sizing
- **HeroQuiet**: Understated luxury hero sections with subtle animations
- **ProjectGrid**: Portfolio showcase with hover effects and priority loading
- **ServiceCard**: Service offerings with integrated CTAs
- **StructuredData**: Automatic schema markup generation
- **Breadcrumbs**: SEO-friendly navigation with location awareness

### Performance Optimizations
- **Image Optimization**: WebP/AVIF formats, responsive sizing
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Images and components load on demand
- **Caching**: Aggressive caching strategies for static content
- **Compression**: Gzip/Brotli compression for text assets

### Accessibility
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader optimization
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliance
- **Focus Management**: Visible focus indicators

## 🎨 Brand Implementation

### Luxury Positioning
- **Quiet Luxury**: Understated elegance over flashy displays
- **Craftsmanship Focus**: Technical expertise and artistic skill
- **Heritage Respect**: Traditional methods with modern innovation
- **Environmental Stewardship**: Sustainable practices and materials

### Target Audience
- **Ultra-High-Net-Worth Individuals**: $50M+ net worth
- **Tech Industry Leaders**: Silicon Valley executives and founders
- **Entertainment Industry**: Hollywood producers, directors, talent
- **Professional Services**: Top-tier attorneys, doctors, consultants
- **Real Estate Developers**: Luxury residential developers
- **Interior Design Trade**: High-end residential designers

### Content Tone
- **Professional Confidence**: Expertise without arrogance
- **Technical Precision**: Detailed specifications and processes
- **Cultural Sophistication**: Understanding of luxury lifestyle
- **Environmental Consciousness**: Sustainable practices emphasis
- **Regional Awareness**: Local architectural and cultural knowledge

## 🔧 Development Guidelines

### Component Standards
- **TypeScript**: Strict typing for all components
- **Responsive Design**: Mobile-first, progressive enhancement
- **Performance**: Lazy loading, code splitting, optimization
- **Accessibility**: WCAG 2.1 AA compliance minimum
- **SEO**: Structured data, semantic HTML, meta optimization

### Content Management
- **MDX Files**: Rich content with React component integration
- **Image Optimization**: Automatic compression and format conversion
- **SEO Metadata**: Comprehensive meta tag and schema generation
- **Internal Linking**: Automatic cross-reference suggestions
- **Performance Monitoring**: Core Web Vitals tracking

### Quality Assurance
- **TypeScript**: Compile-time error checking
- **ESLint**: Code quality and consistency
- **Prettier**: Automatic code formatting
- **Testing**: Component and integration testing
- **Performance**: Lighthouse auditing and optimization

## 📈 Analytics & Tracking

### Key Metrics
- **Organic Traffic**: Search engine visibility
- **Conversion Rate**: Consultation request submissions
- **Page Performance**: Core Web Vitals scores
- **User Engagement**: Time on site, pages per session
- **Geographic Distribution**: Traffic by luxury market areas

### Goal Tracking
- **Primary**: Private consultation requests
- **Secondary**: Portfolio page engagement
- **Tertiary**: Showroom visit scheduling
- **Qualified Leads**: High-value neighborhood traffic

## 🚀 Deployment

### Production Environment
- **Platform**: Vercel (recommended) or Netlify
- **Domain**: Custom domain with SSL certificate
- **CDN**: Global content delivery network
- **Analytics**: Google Analytics 4 integration
- **Search Console**: Google Search Console setup

### Environment Variables
```bash
NEXT_PUBLIC_SITE_URL=https://avscabinets.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
# Add other environment variables as needed
```

### Build Optimization
```bash
# Production build with optimization
npm run build

# Analyze bundle size
npm run analyze

# Performance audit
npm run lighthouse
```

## 📞 Contact & Support

For technical questions or customization requests:
- **Development**: Technical implementation and optimization
- **Content**: SEO content strategy and creation
- **Design**: Brand implementation and user experience

---

**Built with precision for California's most discerning clientele. Every detail crafted for luxury market success.**
