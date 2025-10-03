import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: "Kitchen Design Trends 2025 | Top Kitchen Design Ideas | PineWood Cabinets",
  description: "Discover the top kitchen design trends for 2025. From smart technology to sustainable materials, explore the latest kitchen design ideas and inspiration.",
  keywords: [
    'kitchen design trends 2025',
    'kitchen design ideas',
    'kitchen trends',
    'modern kitchen design',
    'kitchen inspiration',
    'kitchen design tips',
    'kitchen renovation ideas',
    'kitchen design blog'
  ],
  openGraph: {
    title: "Kitchen Design Trends 2025 | PineWood Cabinets",
    description: "Discover the top kitchen design trends for 2025. From smart technology to sustainable materials, explore the latest kitchen design ideas.",
    images: ['/images/journal/kitchen-design-trends-2025-hero.webp'],
  },
}

const trends = [
  {
    title: 'Smart Kitchen Technology',
    description: 'The integration of smart home technology into kitchen design is one of the biggest trends of 2024. From voice-controlled appliances to automated lighting systems, technology is making kitchens more convenient and efficient than ever.',
    features: [
      'Voice-controlled appliances',
      'Automated lighting systems',
      'Smart faucets and dispensers',
      'Integrated charging stations',
      'App-controlled cooking'
    ],
    image: '/images/journal/smart-kitchen-technology.webp',
    benefits: 'Increased convenience, energy efficiency, and modern functionality'
  },
  {
    title: 'Sustainable Materials',
    description: 'Eco-friendly and sustainable materials are becoming increasingly popular in kitchen design. Homeowners are choosing materials that are not only beautiful but also environmentally responsible.',
    features: [
      'Reclaimed wood cabinetry',
      'Recycled glass countertops',
      'Bamboo flooring',
      'Low-VOC finishes',
      'Energy-efficient appliances'
    ],
    image: '/images/journal/sustainable-materials.webp',
    benefits: 'Environmental responsibility, unique character, and long-term value'
  },
  {
    title: 'Mixed Material Combinations',
    description: 'Combining different materials and textures is a major trend in 2024. This approach creates visual interest and allows for more personalized kitchen designs.',
    features: [
      'Wood and metal combinations',
      'Natural stone and concrete',
      'Glass and wood accents',
      'Mixed hardware finishes',
      'Textured surfaces'
    ],
    image: '/images/journal/mixed-materials.webp',
    benefits: 'Visual interest, personalization, and unique character'
  },
  {
    title: 'Larger Islands and Multi-Functional Spaces',
    description: 'Kitchen islands are becoming larger and more functional, serving as cooking, dining, and work spaces. This trend reflects the changing role of the kitchen as the heart of the home.',
    features: [
      'Oversized islands',
      'Built-in seating',
      'Integrated storage',
      'Multi-level surfaces',
      'Work-from-home functionality'
    ],
    image: '/images/journal/larger-islands.webp',
    benefits: 'Increased functionality, social interaction, and space efficiency'
  },
  {
    title: 'Bold Color Choices',
    description: 'While white and neutral kitchens remain popular, bold color choices are making a comeback in 2024. Homeowners are embracing color to create unique and personalized spaces.',
    features: [
      'Dark cabinetry',
      'Bold accent walls',
      'Colored appliances',
      'Vibrant backsplashes',
      'Mixed color palettes'
    ],
    image: '/images/journal/bold-colors.webp',
    benefits: 'Personal expression, visual impact, and unique character'
  },
  {
    title: 'Hidden Storage Solutions',
    description: 'Maximizing storage while maintaining a clean, uncluttered appearance is a key trend. Hidden storage solutions help keep kitchens organized and visually appealing.',
    features: [
      'Appliance garages',
      'Hidden pantries',
      'Pull-out storage',
      'Concealed trash bins',
      'Integrated organizers'
    ],
    image: '/images/journal/hidden-storage.webp',
    benefits: 'Clean appearance, increased organization, and space efficiency'
  }
]

const tips = [
  {
    tip: 'Plan for Technology',
    description: 'When designing your kitchen, consider how technology will be integrated. Plan for wiring, outlets, and smart home systems early in the design process.',
    category: 'Planning'
  },
  {
    tip: 'Choose Sustainable Materials',
    description: 'Look for materials that are environmentally friendly and sustainable. Consider reclaimed wood, recycled materials, and low-VOC finishes.',
    category: 'Materials'
  },
  {
    tip: 'Mix Materials Thoughtfully',
    description: 'When combining different materials, ensure they complement each other and create a cohesive design. Consider texture, color, and finish compatibility.',
    category: 'Design'
  },
  {
    tip: 'Maximize Island Functionality',
    description: 'Design your island to serve multiple purposes. Include storage, seating, and work surfaces to maximize functionality and social interaction.',
    category: 'Layout'
  },
  {
    tip: 'Use Color Strategically',
    description: 'If you want to incorporate bold colors, use them strategically. Consider accent walls, colored appliances, or vibrant backsplashes rather than overwhelming the space.',
    category: 'Color'
  },
  {
    tip: 'Invest in Hidden Storage',
    description: 'Plan for hidden storage solutions to keep your kitchen organized and visually appealing. Consider appliance garages, hidden pantries, and integrated organizers.',
    category: 'Storage'
  }
]

export default function KitchenDesignTrends2024Page() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Journal', href: '/journal' },
              { name: 'Kitchen Design Trends 2024', href: '/journal/kitchen-design-trends-2024', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Kitchen Design Trends 2025"
        subtitle="Top Kitchen Design Ideas"
        description="Discover the top kitchen design trends for 2025. From smart technology to sustainable materials, explore the latest kitchen design ideas and inspiration for your next project."
        imageSrc="journal/kitchen-design-trends-2025-hero.webp"
        imageAlt="Beautiful modern kitchen showcasing 2024 design trends"
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Portfolio",
          href: "/portfolio"
        }}
      />

      {/* Introduction */}
      <section className="py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              The Future of Kitchen Design
            </h2>
            <p className="text-xl text-charcoal/80">
              As we move through 2025, kitchen design continues to evolve with new trends that reflect our changing lifestyles, technological advances, and environmental consciousness. This year's trends focus on functionality, sustainability, and personal expression.
            </p>
          </div>
        </div>
      </section>

      {/* Trends */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Top Kitchen Design Trends for 2025
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore the most popular kitchen design trends that are shaping the industry this year.
            </p>
          </div>

          <div className="space-y-16">
            {trends.map((trend, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-semibold text-charcoal mb-4">{trend.title}</h3>
                    <p className="text-charcoal/70 mb-6 text-lg">{trend.description}</p>
                    
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-charcoal">Key Features:</h4>
                      <ul className="space-y-2">
                        {trend.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-charcoal/70">
                            <span className="w-1.5 h-1.5 bg-deep-green rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 p-4 bg-deep-green/10 rounded-lg">
                      <p className="text-deep-green font-semibold">Benefits: {trend.benefits}</p>
                    </div>
                  </div>
                  
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={trend.image}
                      alt={trend.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Design Tips for 2024
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Practical tips to help you incorporate the latest trends into your kitchen design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-deep-green/10 text-deep-green rounded-full text-sm font-semibold mr-3">
                    {tip.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">{tip.tip}</h3>
                <p className="text-charcoal/70">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Ready to Embrace 2025 Trends?
            </h2>
            <p className="text-xl text-french-gray mb-8">
              Whether you're planning a complete kitchen renovation or looking to update specific elements, incorporating these 2025 trends can help create a kitchen that's both beautiful and functional. Our team at PineWood Cabinets is here to help you bring your vision to life.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-deep-green text-ivory rounded-lg font-semibold hover:bg-deep-green/90 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-3 border border-ivory text-ivory rounded-lg font-semibold hover:bg-ivory/10 transition-colors"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Kitchen?"
        description="Let's discuss your vision and create a custom kitchen that incorporates the latest 2024 trends."
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Portfolio",
          href: "/portfolio"
        }}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Kitchen Design Trends 2024",
            "description": "Discover the top kitchen design trends for 2024. From smart technology to sustainable materials, explore the latest kitchen design ideas and inspiration.",
            "author": {
              "@type": "Organization",
              "name": "PineWood Cabinets",
              "url": "https://california-custom-kitchen.vercel.app"
            },
            "publisher": {
              "@type": "Organization",
              "name": "PineWood Cabinets",
              "url": "https://california-custom-kitchen.vercel.app"
            },
            "datePublished": "2024-01-01",
            "dateModified": "2024-01-01",
            "image": "https://california-custom-kitchen.vercel.app/images/journal/kitchen-design-trends-2024-hero.webp",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://california-custom-kitchen.vercel.app/journal/kitchen-design-trends-2024"
            }
          })
        }}
      />
    </>
  )
}
