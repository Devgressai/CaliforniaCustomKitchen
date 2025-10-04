import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'

import { MaterialsPageLayout } from '@/components/PageLayout'
import { MaterialsHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature, ProcessStep } from '@/components/ContentSection'
export const metadata: Metadata = {
  title: "Wood Species Guide | Cabinet Wood Types & Characteristics | PineWood Cabinets",
  description: "Complete guide to wood species for kitchen cabinets. Learn about different wood types, characteristics, and how to choose the right wood for your custom cabinets.",
  keywords: [
    'wood species guide',
    'cabinet wood types',
    'kitchen cabinet wood',
    'wood characteristics',
    'custom cabinet wood',
    'wood selection guide',
    'cabinet materials',
    'wood species comparison'
  ],
  openGraph: {
    title: "Wood Species Guide | PineWood Cabinets",
    description: "Complete guide to wood species for kitchen cabinets. Learn about different wood types and characteristics.",
    images: ['/images/materials/wood-species-guide-hero.webp'],
  },
}

const woodSpecies = [
  {
    name: 'Oak',
    description: 'Oak is one of the most popular choices for kitchen cabinets due to its durability, beautiful grain patterns, and versatility. It comes in two main varieties: red oak and white oak.',
    characteristics: [
      'Durable and long-lasting',
      'Beautiful grain patterns',
      'Takes stain well',
      'Resistant to wear and tear',
      'Available in various grades'
    ],
    colors: ['Light to medium brown', 'Reddish tones (red oak)', 'Golden tones (white oak)'],
    hardness: 'Hard',
    price: 'Moderate',
    bestFor: 'Traditional and transitional kitchens',
    image: '/images/materials/oak-cabinetry.webp'
  },
  {
    name: 'Maple',
    description: 'Maple is known for its smooth, uniform grain and light color, making it perfect for modern and contemporary kitchen designs. It\'s also very durable and takes paint exceptionally well.',
    characteristics: [
      'Smooth, uniform grain',
      'Light, consistent color',
      'Excellent for painting',
      'Very durable',
      'Minimal grain pattern'
    ],
    colors: ['Light cream to white', 'Occasional reddish streaks'],
    hardness: 'Hard',
    price: 'Moderate to High',
    bestFor: 'Modern and contemporary kitchens',
    image: '/images/materials/maple-cabinetry.webp'
  },
  {
    name: 'Cherry',
    description: 'Cherry wood is prized for its rich, warm color and beautiful grain patterns. It darkens naturally over time, developing a deeper, more luxurious appearance.',
    characteristics: [
      'Rich, warm color',
      'Beautiful grain patterns',
      'Darkens with age',
      'Smooth finish',
      'Distinctive character'
    ],
    colors: ['Light pink to deep red', 'Darkens to reddish-brown'],
    hardness: 'Medium',
    price: 'High',
    bestFor: 'Traditional and luxury kitchens',
    image: '/images/materials/cherry-cabinetry.webp'
  },
  {
    name: 'Walnut',
    description: 'Walnut is a premium wood species known for its rich, dark color and beautiful grain patterns. It\'s often used in high-end kitchen designs for its luxurious appearance.',
    characteristics: [
      'Rich, dark color',
      'Beautiful grain patterns',
      'Luxurious appearance',
      'Distinctive character',
      'Premium quality'
    ],
    colors: ['Dark brown to black', 'Occasional lighter streaks'],
    hardness: 'Hard',
    price: 'High',
    bestFor: 'Luxury and high-end kitchens',
    image: '/images/materials/walnut-cabinetry.webp'
  },
  {
    name: 'Hickory',
    description: 'Hickory is one of the hardest domestic wood species, making it extremely durable for kitchen cabinets. It has a distinctive grain pattern and natural color variations.',
    characteristics: [
      'Extremely hard and durable',
      'Distinctive grain pattern',
      'Natural color variations',
      'Rustic appearance',
      'Very strong'
    ],
    colors: ['Light to medium brown', 'Natural color variations'],
    hardness: 'Very Hard',
    price: 'Moderate',
    bestFor: 'Rustic and country kitchens',
    image: '/images/materials/hickory-cabinetry.webp'
  },
  {
    name: 'Alder',
    description: 'Alder is a softer wood species that\'s easy to work with and takes stain well. It\'s often used as a more affordable alternative to cherry or oak.',
    characteristics: [
      'Softer and easier to work with',
      'Takes stain well',
      'Affordable option',
      'Smooth grain',
      'Light color'
    ],
    colors: ['Light brown to reddish-brown', 'Takes stain well'],
    hardness: 'Soft',
    price: 'Low to Moderate',
    bestFor: 'Budget-conscious projects',
    image: '/images/materials/alder-cabinetry.webp'
  }
]

const selectionTips = [
  {
    tip: 'Consider Your Style',
    description: 'Choose wood species that complement your kitchen\'s design style. Traditional kitchens work well with oak or cherry, while modern kitchens often use maple or walnut.',
    category: 'Style'
  },
  {
    tip: 'Think About Maintenance',
    description: 'Consider how much maintenance you\'re willing to do. Some woods require more care than others, especially those with natural color variations.',
    category: 'Maintenance'
  },
  {
    tip: 'Consider Your Budget',
    description: 'Wood species vary significantly in price. Set a budget and choose the best wood within your price range that meets your design needs.',
    category: 'Budget'
  },
  {
    tip: 'Think About Durability',
    description: 'Consider how much wear and tear your cabinets will experience. Harder woods like hickory and oak are more durable for high-traffic areas.',
    category: 'Durability'
  },
  {
    tip: 'Consider Color Preferences',
    description: 'Think about the color you want for your cabinets. Some woods have natural color variations, while others are more consistent.',
    category: 'Color'
  },
  {
    tip: 'Think About Finishing',
    description: 'Consider whether you want to stain, paint, or leave the wood natural. Some woods take stain better than others, while others are better for painting.',
    category: 'Finishing'
  }
]

export default function WoodSpeciesGuidePage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Materials', href: '/materials' },
              { name: 'Wood Species Guide', href: '/materials/wood-species-guide', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Wood Species Guide"
        subtitle="Complete Guide to Cabinet Wood Types"
        description="Learn about different wood species for kitchen cabinets, their characteristics, and how to choose the right wood for your custom cabinets. From oak to walnut, discover the perfect wood for your kitchen."
        imageSrc="materials/wood-species-guide-hero.webp"
        imageAlt="Beautiful wood grain patterns showcasing different wood species for kitchen cabinets"
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Materials",
          href: "/materials"
        }}
      />

      {/* Introduction */}
      <section className="py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Choosing the Right Wood for Your Cabinets
            </h2>
            <p className="text-xl text-charcoal/80">
              The choice of wood species is one of the most important decisions when designing custom kitchen cabinets. Each wood type has unique characteristics, colors, and grain patterns that can significantly impact the look and feel of your kitchen.
            </p>
          </div>
        </div>
      </section>

      {/* Wood Species */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Popular Wood Species for Kitchen Cabinets
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore the most popular wood species used in custom kitchen cabinets and their unique characteristics.
            </p>
          </div>

          <div className="space-y-16">
            {woodSpecies.map((wood, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-semibold text-charcoal mb-4">{wood.name}</h3>
                    <p className="text-charcoal/70 mb-6 text-lg">{wood.description}</p>
                    
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-charcoal">Characteristics:</h4>
                      <ul className="space-y-2">
                        {wood.characteristics.map((characteristic, i) => (
                          <li key={i} className="flex items-center text-charcoal/70">
                            <span className="w-1.5 h-1.5 bg-deep-green rounded-full mr-3"></span>
                            {characteristic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div>
                        <h4 className="font-semibold text-charcoal mb-2">Colors:</h4>
                        <p className="text-charcoal/70 text-sm">{wood.colors.join(', ')}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal mb-2">Hardness:</h4>
                        <p className="text-charcoal/70 text-sm">{wood.hardness}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal mb-2">Price:</h4>
                        <p className="text-charcoal/70 text-sm">{wood.price}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal mb-2">Best For:</h4>
                        <p className="text-charcoal/70 text-sm">{wood.bestFor}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={wood.image}
                      alt={`${wood.name} cabinetry`}
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

      {/* Selection Tips */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              How to Choose the Right Wood
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Follow these tips to select the perfect wood species for your kitchen cabinets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectionTips.map((tip, index) => (
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
            Ready to Choose Your Wood?
          </h2>
          <p className="text-xl text-french-gray mb-8">
            Choosing the right wood species for your kitchen cabinets is an important decision that will impact the look, feel, and longevity of your kitchen. Our team at PineWood Cabinets is here to help you select the perfect wood for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-deep-green text-ivory rounded-lg font-semibold hover:bg-deep-green/90 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/materials"
              className="px-8 py-3 border border-ivory text-ivory rounded-lg font-semibold hover:bg-ivory/10 transition-colors"
            >
              View Our Materials
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Kitchen?"
        description="Let's discuss your vision and create custom cabinets with the perfect wood species for your kitchen."
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Materials",
          href: "/materials"
        }}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Wood Species Guide for Kitchen Cabinets",
            "description": "Complete guide to wood species for kitchen cabinets. Learn about different wood types, characteristics, and how to choose the right wood for your custom cabinets.",
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
            "image": "https://california-custom-kitchen.vercel.app/images/materials/wood-species-guide-hero.webp",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://california-custom-kitchen.vercel.app/materials/wood-species-guide"
            }
          })
        }}
      />
    </>
  )
}
