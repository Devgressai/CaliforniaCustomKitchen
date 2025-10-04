import { Metadata } from 'next'
import Link from 'next/link'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JournalPageLayout } from '@/components/PageLayout'
import { JournalHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature, ProcessStep } from '@/components/ContentSection'
export const metadata: Metadata = {
  title: 'Journal | Kitchen Design Trends & Insights | PineWood Cabinets',
  description: 'Explore our journal for the latest kitchen design trends, cabinetry insights, and luxury home design inspiration from PineWood Cabinets master craftsmen.',
  keywords: 'kitchen design trends, cabinetry insights, luxury home design, kitchen inspiration, custom cabinetry blog, design tips',
  openGraph: {
    title: 'Journal | Kitchen Design Trends & Insights | PineWood Cabinets',
    description: 'Explore our journal for the latest kitchen design trends, cabinetry insights, and luxury home design inspiration.',
    type: 'website',
  },
}

const blogPosts = [
  {
    slug: '2025-kitchen-trends-what-californias-elite-are-choosing',
    title: '2025 Kitchen Trends: What California\'s Elite Are Choosing',
    excerpt: 'Discover the latest kitchen design trends that are captivating California\'s wealthiest communities, from bold color palettes to smart technology integration.',
    imageSrc: 'journal/2025-kitchen-trends.webp',
    imageAlt: 'Modern luxury kitchen showcasing 2025 design trends',
    category: 'Design Trends',
    date: 'January 15, 2025',
    readTime: '8 min read',
    featured: true
  },
  {
    slug: 'sustainable-luxury-eco-friendly-materials-in-high-end-kitchens',
    title: 'Sustainable Luxury: Eco-Friendly Materials in High-End Kitchens',
    excerpt: 'How luxury kitchen design is embracing sustainability without compromising on aesthetics or quality, featuring our latest eco-friendly material innovations.',
    imageSrc: 'journal/sustainable-luxury-kitchens.webp',
    imageAlt: 'Eco-friendly luxury kitchen with sustainable materials',
    category: 'Sustainability',
    date: 'January 10, 2025',
    readTime: '6 min read',
    featured: false
  },
  {
    slug: 'hidden-storage-solutions-for-modern-california-homes',
    title: 'Hidden Storage Solutions for Modern California Homes',
    excerpt: 'Maximize your kitchen\'s functionality with innovative hidden storage solutions that maintain clean lines while providing ample space for all your needs.',
    imageSrc: 'journal/hidden-storage-solutions.webp',
    imageAlt: 'Kitchen with hidden storage solutions and pull-out systems',
    category: 'Functionality',
    date: 'January 5, 2025',
    readTime: '7 min read',
    featured: false
  },
  {
    slug: 'the-art-of-grain-matching-in-custom-cabinetry',
    title: 'The Art of Grain Matching in Custom Cabinetry',
    excerpt: 'Learn about the meticulous process of grain matching in premium cabinetry, a technique that separates truly exceptional work from the ordinary.',
    imageSrc: 'journal/grain-matching-cabinetry.webp',
    imageAlt: 'Close-up of grain-matched walnut cabinetry showing seamless wood grain flow',
    category: 'Craftsmanship',
    date: 'December 28, 2024',
    readTime: '9 min read',
    featured: false
  },
  {
    slug: 'working-with-architects-a-designers-guide',
    title: 'Working with Architects: A Designer\'s Guide',
    excerpt: 'Essential tips for homeowners on how to effectively collaborate with architects and designers to achieve your dream kitchen vision.',
    imageSrc: 'journal/architect-collaboration.webp',
    imageAlt: 'Architect and designer reviewing kitchen plans together',
    category: 'Design Process',
    date: 'December 20, 2024',
    readTime: '5 min read',
    featured: false
  },
  {
    slug: 'kitchen-lighting-illuminating-your-custom-cabinetry',
    title: 'Kitchen Lighting: Illuminating Your Custom Cabinetry',
    excerpt: 'Master the art of kitchen lighting to showcase your custom cabinetry and create the perfect ambiance for cooking and entertaining.',
    imageSrc: 'journal/kitchen-lighting-design.webp',
    imageAlt: 'Beautifully lit custom kitchen with strategic lighting design',
    category: 'Design Tips',
    date: 'December 15, 2024',
    readTime: '6 min read',
    featured: false
  },
  {
    slug: 'maintenance-tips-for-luxury-kitchen-cabinets',
    title: 'Maintenance Tips for Luxury Kitchen Cabinets',
    excerpt: 'Keep your custom cabinetry looking pristine with our expert maintenance guide, ensuring your investment lasts for generations.',
    imageSrc: 'journal/cabinet-maintenance.webp',
    imageAlt: 'Well-maintained luxury kitchen cabinets showing proper care techniques',
    category: 'Care & Maintenance',
    date: 'December 10, 2024',
    readTime: '4 min read',
    featured: false
  },
  {
    slug: 'budget-planning-for-custom-kitchen-projects',
    title: 'Budget Planning for Custom Kitchen Projects',
    excerpt: 'Navigate the financial aspects of your custom kitchen project with our comprehensive guide to budgeting and cost planning.',
    imageSrc: 'journal/kitchen-budget-planning.webp',
    imageAlt: 'Planning documents and budget sheets for custom kitchen project',
    category: 'Planning',
    date: 'December 5, 2024',
    readTime: '7 min read',
    featured: false
  },
  {
    slug: 'timeline-expectations-from-design-to-installation',
    title: 'Timeline Expectations: From Design to Installation',
    excerpt: 'Understand the complete timeline of a custom kitchen project, from initial consultation to final installation and finishing touches.',
    imageSrc: 'journal/project-timeline.webp',
    imageAlt: 'Project timeline visualization showing design to installation phases',
    category: 'Process',
    date: 'November 28, 2024',
    readTime: '5 min read',
    featured: false
  },
  {
    slug: 'client-success-stories-before-and-after-transformations',
    title: 'Client Success Stories: Before and After Transformations',
    excerpt: 'Explore stunning before and after transformations from our recent projects, showcasing the dramatic impact of custom cabinetry.',
    imageSrc: 'journal/before-after-kitchen.webp',
    imageAlt: 'Before and after photos of kitchen transformation',
    category: 'Portfolio',
    date: 'November 20, 2024',
    readTime: '8 min read',
    featured: false
  }
]

const categories = [
  'All Posts',
  'Design Trends',
  'Sustainability',
  'Functionality',
  'Craftsmanship',
  'Design Process',
  'Design Tips',
  'Care & Maintenance',
  'Planning',
  'Process',
  'Portfolio'
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Featured Article
            </h2>
          </div>

          {blogPosts.filter(post => post.featured).map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-lg border border-french-gray/20 overflow-hidden mb-16">
              <Link href={`/journal/${post.slug}`} className="block">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden bg-french-gray/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-ivory">
                        <h3 className="text-3xl font-semibold mb-2 font-display">{post.title}</h3>
                        <p className="text-sm opacity-90">{post.category} • {post.date}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <span className="bg-deep-green text-ivory px-3 py-1 rounded-full text-sm font-medium mr-4">
                        {post.category}
                      </span>
                      <span className="text-charcoal/60 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h3 className="font-display text-3xl font-bold text-charcoal mb-6 group-hover:text-deep-green transition-colors duration-200">
                      {post.title}
                    </h3>
                    
                    <p className="text-charcoal/80 leading-relaxed mb-6 text-lg">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-charcoal/60 text-sm">{post.date}</span>
                      <span className="text-deep-green font-medium group-hover:underline">
                        Read Full Article →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === 'All Posts'
                    ? 'bg-deep-green text-ivory'
                    : 'bg-white text-charcoal hover:bg-deep-green hover:text-ivory border border-french-gray/20'
                }`}
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Latest Articles
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Stay informed with our latest insights on kitchen design, cabinetry trends, and luxury home inspiration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <article 
                key={post.slug} 
                className="group bg-white rounded-lg shadow-sm border border-french-gray/20 hover:shadow-lg transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Link href={`/journal/${post.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-french-gray/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-ivory">
                        <h3 className="text-xl font-semibold mb-2 font-display px-4">{post.title}</h3>
                        <p className="text-sm opacity-90">{post.category}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-deep-green/20 text-deep-green px-2 py-1 rounded-full text-xs font-medium mr-3">
                        {post.category}
                      </span>
                      <span className="text-charcoal/60 text-xs">{post.readTime}</span>
                    </div>
                    
                    <h3 className="font-display text-xl font-semibold text-charcoal mb-3 group-hover:text-deep-green transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-charcoal/80 leading-relaxed mb-4 line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-charcoal/60">
                      <span>{post.date}</span>
                      <span className="text-deep-green font-medium group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Stay Informed
            </h2>
            <p className="text-xl text-french-gray mb-12 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest design trends, project insights, and exclusive content from our master craftsmen.
            </p>

            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-charcoal focus:ring-2 focus:ring-deep-green focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-ivory text-deep-green px-8 py-3 rounded-lg font-medium hover:bg-ivory/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-french-gray text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Popular Topics
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our most popular content categories and discover insights that matter to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center text-ivory text-2xl font-bold mx-auto mb-4">🎨</div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">Design Trends</h3>
              <p className="text-charcoal/70 text-sm mb-4">Latest trends in luxury kitchen design</p>
              <Link href="/journal?category=design-trends" className="text-deep-green text-sm font-medium hover:underline">
                View Articles →
              </Link>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center text-ivory text-2xl font-bold mx-auto mb-4">🔨</div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">Craftsmanship</h3>
              <p className="text-charcoal/70 text-sm mb-4">Behind-the-scenes look at our process</p>
              <Link href="/journal?category=craftsmanship" className="text-deep-green text-sm font-medium hover:underline">
                View Articles →
              </Link>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center text-ivory text-2xl font-bold mx-auto mb-4">💡</div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">Design Tips</h3>
              <p className="text-charcoal/70 text-sm mb-4">Expert advice for your project</p>
              <Link href="/journal?category=design-tips" className="text-deep-green text-sm font-medium hover:underline">
                View Articles →
              </Link>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center text-ivory text-2xl font-bold mx-auto mb-4">🌱</div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">Sustainability</h3>
              <p className="text-charcoal/70 text-sm mb-4">Eco-friendly design solutions</p>
              <Link href="/journal?category=sustainability" className="text-deep-green text-sm font-medium hover:underline">
                View Articles →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-charcoal/80 mb-12 max-w-3xl mx-auto">
            Inspired by our journal? Let's discuss how we can bring your vision to life with the finest materials and time-honored craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Request a Consultation
            </Link>
            <Link href="/portfolio" className="btn-ghost">
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
