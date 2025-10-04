import { Metadata } from 'next'
import Link from 'next/link'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JournalPageLayout } from '@/components/PageLayout'
import { JournalHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature, ProcessStep } from '@/components/ContentSection'

export const metadata: Metadata = {
  title: 'Kitchen Design Journal | Trends & Insights | PineWood',
  description: 'Expert insights on kitchen design trends, cabinetry craftsmanship, and luxury home inspiration from PineWood Cabinets master craftsmen.',
  keywords: 'kitchen design trends, cabinetry insights, luxury home design, kitchen inspiration, custom cabinetry blog, design tips',
  openGraph: {
    title: 'Kitchen Design Journal | Trends & Insights | PineWood',
    description: 'Expert insights on kitchen design trends, cabinetry craftsmanship, and luxury home inspiration.',
    type: 'website',
  },
}

const blogPosts = [
  {
    "slug": "kitchen-design-trends-2025-what-california-elite-are-choosing",
    "title": "Kitchen Design Trends 2025: What California Elite Are Choosing",
    "excerpt": "Discover the latest kitchen design trends that are captivating California's wealthiest communities, from bold color palettes to smart technology integration.",
    "imageSrc": "journal/kitchen-design-trends-2025-what-california-elite-are-choosing.webp",
    "imageAlt": "Modern luxury kitchen showcasing 2025 design trends",
    "category": "Design Trends",
    "date": "January 1, 2025",
    "readTime": "8 min read",
    "featured": true
  },
  {
    "slug": "minimalist-kitchen-design-less-is-more-in-luxury-homes",
    "title": "Minimalist Kitchen Design: Less is More in Luxury Homes",
    "excerpt": "Explore how minimalist design principles create sophisticated, functional kitchens that emphasize quality over quantity in luxury home design.",
    "imageSrc": "journal/minimalist-kitchen-design-less-is-more-in-luxury-homes.webp",
    "imageAlt": "Minimalist luxury kitchen with clean lines and premium materials",
    "category": "Design Trends",
    "date": "January 2, 2025",
    "readTime": "7 min read",
    "featured": false
  },
  {
    "slug": "biophilic-kitchen-design-bringing-nature-indoors",
    "title": "Biophilic Kitchen Design: Bringing Nature Indoors",
    "excerpt": "Learn how biophilic design principles integrate natural elements into luxury kitchens, creating spaces that connect homeowners with nature.",
    "imageSrc": "journal/biophilic-kitchen-design-bringing-nature-indoors.webp",
    "imageAlt": "Kitchen with natural wood elements and indoor plants",
    "category": "Design Trends",
    "date": "January 3, 2025",
    "readTime": "6 min read",
    "featured": false
  },
  {
    "slug": "smart-kitchen-technology-integration-trends",
    "title": "Smart Kitchen Technology Integration Trends",
    "excerpt": "Discover how smart technology is revolutionizing luxury kitchen design, from voice-activated appliances to automated lighting systems.",
    "imageSrc": "journal/smart-kitchen-technology-integration-trends.webp",
    "imageAlt": "Smart kitchen with integrated technology and modern appliances",
    "category": "Technology & Innovation",
    "date": "January 6, 2025",
    "readTime": "8 min read",
    "featured": false
  },
  {
    "slug": "color-psychology-in-luxury-kitchen-design",
    "title": "Color Psychology in Luxury Kitchen Design",
    "excerpt": "Understand how color choices impact mood and functionality in luxury kitchens, with expert insights on creating harmonious color schemes.",
    "imageSrc": "journal/color-psychology-in-luxury-kitchen-design.webp",
    "imageAlt": "Luxury kitchen with carefully selected color palette",
    "category": "Design Trends",
    "date": "January 7, 2025",
    "readTime": "6 min read",
    "featured": false
  },
  {
    "slug": "premium-hardwood-species-for-custom-cabinetry",
    "title": "Premium Hardwood Species for Custom Cabinetry",
    "excerpt": "Explore the finest hardwood species used in custom cabinetry, from exotic imports to domestic favorites, and their unique characteristics.",
    "imageSrc": "journal/premium-hardwood-species-for-custom-cabinetry.webp",
    "imageAlt": "Close-up of premium hardwood grain patterns in custom cabinetry",
    "category": "Materials & Finishes",
    "date": "January 15, 2025",
    "readTime": "9 min read",
    "featured": true
  },
  {
    "slug": "quartz-vs-granite-countertop-material-comparison",
    "title": "Quartz vs. Granite: Countertop Material Comparison",
    "excerpt": "Compare quartz and granite countertops for luxury kitchens, examining durability, maintenance, aesthetics, and cost considerations.",
    "imageSrc": "journal/quartz-vs-granite-countertop-material-comparison.webp",
    "imageAlt": "Comparison of quartz and granite countertop materials",
    "category": "Materials & Finishes",
    "date": "January 16, 2025",
    "readTime": "7 min read",
    "featured": false
  },
  {
    "slug": "hidden-storage-solutions-for-modern-kitchens",
    "title": "Hidden Storage Solutions for Modern Kitchens",
    "excerpt": "Maximize your kitchen's functionality with innovative hidden storage solutions that maintain clean lines while providing ample space.",
    "imageSrc": "journal/hidden-storage-solutions-for-modern-kitchens.webp",
    "imageAlt": "Kitchen with hidden storage solutions and pull-out systems",
    "category": "Functionality & Storage",
    "date": "January 29, 2025",
    "readTime": "7 min read",
    "featured": false
  },
  {
    "slug": "the-art-of-hand-crafted-cabinetry",
    "title": "The Art of Hand-Crafted Cabinetry",
    "excerpt": "Discover the meticulous craftsmanship behind hand-crafted cabinetry and how it elevates luxury kitchen design to museum-quality standards.",
    "imageSrc": "journal/the-art-of-hand-crafted-cabinetry.webp",
    "imageAlt": "Master craftsman working on custom cabinetry",
    "category": "Craftsmanship & Process",
    "date": "February 12, 2025",
    "readTime": "9 min read",
    "featured": true
  },
  {
    "slug": "silicon-valley-kitchen-design-tech-forward-luxury",
    "title": "Silicon Valley Kitchen Design: Tech-Forward Luxury",
    "excerpt": "Explore how Silicon Valley's tech elite are designing kitchens that seamlessly integrate cutting-edge technology with luxury aesthetics.",
    "imageSrc": "journal/silicon-valley-kitchen-design-tech-forward-luxury.webp",
    "imageAlt": "Modern tech-forward kitchen in Silicon Valley home",
    "category": "Regional & Lifestyle",
    "date": "February 26, 2025",
    "readTime": "8 min read",
    "featured": false
  },
  {
    "slug": "kitchen-design-consultation-what-to-expect",
    "title": "Kitchen Design Consultation: What to Expect",
    "excerpt": "Prepare for your kitchen design consultation with expert insights on the process, questions to ask, and how to maximize your investment.",
    "imageSrc": "journal/kitchen-design-consultation-what-to-expect.webp",
    "imageAlt": "Design consultation meeting with kitchen designer",
    "category": "Planning & Design Process",
    "date": "March 12, 2025",
    "readTime": "6 min read",
    "featured": false
  },
  {
    "slug": "daily-maintenance-tips-for-custom-cabinetry",
    "title": "Daily Maintenance Tips for Custom Cabinetry",
    "excerpt": "Essential daily maintenance tips to preserve your custom cabinetry investment and keep your luxury kitchen looking pristine for years.",
    "imageSrc": "journal/daily-maintenance-tips-for-custom-cabinetry.webp",
    "imageAlt": "Proper maintenance of custom cabinetry",
    "category": "Maintenance & Care",
    "date": "March 26, 2025",
    "readTime": "5 min read",
    "featured": false
  },
  {
    "slug": "smart-kitchen-appliances-integration",
    "title": "Smart Kitchen Appliances Integration",
    "excerpt": "Learn how to integrate smart appliances into your luxury kitchen design for enhanced functionality and modern convenience.",
    "imageSrc": "journal/smart-kitchen-appliances-integration.webp",
    "imageAlt": "Smart appliances integrated into luxury kitchen",
    "category": "Technology & Innovation",
    "date": "April 9, 2025",
    "readTime": "7 min read",
    "featured": false
  },
  {
    "slug": "sustainable-kitchen-design-principles",
    "title": "Sustainable Kitchen Design Principles",
    "excerpt": "Discover how sustainable design principles can be applied to luxury kitchens without compromising on aesthetics or functionality.",
    "imageSrc": "journal/sustainable-kitchen-design-principles.webp",
    "imageAlt": "Sustainable luxury kitchen with eco-friendly materials",
    "category": "Sustainability & Environment",
    "date": "April 23, 2025",
    "readTime": "8 min read",
    "featured": true
  },
  {
    "slug": "before-and-after-silicon-valley-tech-executive-kitchen",
    "title": "Before and After: Silicon Valley Tech Executive Kitchen",
    "excerpt": "See the dramatic transformation of a Silicon Valley tech executive's kitchen, from outdated to cutting-edge luxury design.",
    "imageSrc": "journal/before-and-after-silicon-valley-tech-executive-kitchen.webp",
    "imageAlt": "Before and after photos of Silicon Valley kitchen transformation",
    "category": "Client Stories & Case Studies",
    "date": "May 7, 2025",
    "readTime": "8 min read",
    "featured": true
  }
]

const categories = [
  "All Posts",
  "Design Trends",
  "Materials & Finishes",
  "Functionality & Storage",
  "Craftsmanship & Process",
  "Regional & Lifestyle",
  "Planning & Design Process",
  "Maintenance & Care",
  "Technology & Innovation",
  "Sustainability & Environment",
  "Client Stories & Case Studies"
]

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Journal
            </h1>
            <p className="text-xl md:text-2xl text-french-gray leading-relaxed mb-8">
              Insights, inspiration, and expertise from our master craftsmen. Stay informed about the latest trends in luxury kitchen design and cabinetry.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Design Trends</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Craftsmanship</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Inspiration</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Expert Tips</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={`/images/${blogPosts[0].imageSrc}`}
                  alt={blogPosts[0].imageAlt}
                  className="w-full h-96 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-deep-green text-ivory px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-deep-green text-sm font-medium">{blogPosts[0].category}</span>
                  <span className="text-gray-400 text-sm">•</span>
                  <span className="text-gray-500 text-sm">{blogPosts[0].date}</span>
                  <span className="text-gray-400 text-sm">•</span>
                  <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4 font-display">
                  {blogPosts[0].title}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <Link
                  href={`/journal/${blogPosts[0].slug}`}
                  className="inline-flex items-center text-deep-green hover:text-charcoal transition-colors font-medium"
                >
                  Read Full Article
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-white text-charcoal rounded-full hover:bg-deep-green hover:text-ivory transition-colors font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.slug} className="bg-white overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={`/images/${post.imageSrc}`}
                    alt={post.imageAlt}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-deep-green text-ivory px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3 font-display">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/journal/${post.slug}`}
                    className="inline-flex items-center text-deep-green hover:text-charcoal transition-colors font-medium"
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 font-display">
            Stay Informed
          </h2>
          <p className="text-xl text-french-gray mb-8 leading-relaxed">
            Get the latest insights on luxury kitchen design trends, craftsmanship techniques, and exclusive project showcases delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-ivory placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-deep-green"
            />
            <button className="px-8 py-3 bg-deep-green text-ivory rounded-lg hover:bg-deep-green/90 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}