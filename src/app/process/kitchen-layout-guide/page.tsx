import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'

import { ProcessPageLayout } from '@/components/PageLayout'
import { ProcessHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature, ProcessStep } from '@/components/ContentSection'
export const metadata: Metadata = {
  title: "Kitchen Layout Guide | Kitchen Design Layouts & Planning | PineWood Cabinets",
  description: "Complete guide to kitchen layouts and design planning. Learn about different kitchen layout types, design principles, and how to plan the perfect kitchen for your space.",
  keywords: [
    'kitchen layout guide',
    'kitchen design layouts',
    'kitchen planning',
    'kitchen layout types',
    'kitchen design principles',
    'kitchen space planning',
    'kitchen layout ideas',
    'kitchen design guide'
  ],
  openGraph: {
    title: "Kitchen Layout Guide | PineWood Cabinets",
    description: "Complete guide to kitchen layouts and design planning. Learn about different kitchen layout types and design principles.",
    images: ['/images/process/kitchen-layout-guide-hero.webp'],
  },
}

const layoutTypes = [
  {
    name: 'L-Shaped Kitchen',
    description: 'The L-shaped kitchen is one of the most popular layouts, featuring cabinets and appliances along two adjacent walls forming an L shape. This layout is ideal for small to medium-sized kitchens and provides excellent workflow.',
    characteristics: [
      'Efficient workflow triangle',
      'Good for small to medium spaces',
      'Flexible design options',
      'Easy to add an island',
      'Cost-effective'
    ],
    pros: ['Efficient use of space', 'Good workflow', 'Flexible design', 'Easy to expand'],
    cons: ['Limited counter space', 'Can feel cramped in small spaces'],
    bestFor: 'Small to medium kitchens, open concept living',
    image: '/images/process/l-shaped-kitchen.webp'
  },
  {
    name: 'U-Shaped Kitchen',
    description: 'The U-shaped kitchen features cabinets and appliances along three walls, creating a U shape. This layout provides maximum storage and counter space, making it ideal for larger kitchens and serious cooks.',
    characteristics: [
      'Maximum storage and counter space',
      'Efficient workflow triangle',
      'Good for larger kitchens',
      'Can accommodate multiple cooks',
      'High storage capacity'
    ],
    pros: ['Maximum storage', 'Efficient workflow', 'Good for multiple cooks', 'High counter space'],
    cons: ['Can feel closed in', 'Requires more space', 'Higher cost'],
    bestFor: 'Large kitchens, serious cooks, families',
    image: '/images/process/u-shaped-kitchen.webp'
  },
  {
    name: 'Galley Kitchen',
    description: 'The galley kitchen features cabinets and appliances along two parallel walls, creating a corridor-like space. This layout is ideal for narrow spaces and provides excellent workflow efficiency.',
    characteristics: [
      'Efficient for narrow spaces',
      'Excellent workflow',
      'Cost-effective',
      'Easy to clean',
      'Good for one cook'
    ],
    pros: ['Efficient workflow', 'Good for narrow spaces', 'Cost-effective', 'Easy to clean'],
    cons: ['Limited storage', 'Can feel cramped', 'Not good for multiple cooks'],
    bestFor: 'Narrow spaces, small kitchens, single cooks',
    image: '/images/process/galley-kitchen.webp'
  },
  {
    name: 'Island Kitchen',
    description: 'The island kitchen features a freestanding island in the center of the kitchen, providing additional storage, counter space, and seating. This layout is ideal for open concept living and entertaining.',
    characteristics: [
      'Additional storage and counter space',
      'Good for entertaining',
      'Flexible design options',
      'Can include seating',
      'Open concept friendly'
    ],
    pros: ['Additional storage', 'Good for entertaining', 'Flexible design', 'Can include seating'],
    cons: ['Requires more space', 'Higher cost', 'Can disrupt workflow'],
    bestFor: 'Open concept living, entertaining, large kitchens',
    image: '/images/process/island-kitchen.webp'
  },
  {
    name: 'Peninsula Kitchen',
    description: 'The peninsula kitchen features a connected counter that extends from the main kitchen area, providing additional storage and counter space while maintaining an open feel.',
    characteristics: [
      'Connected to main kitchen',
      'Additional storage and counter space',
      'Good for entertaining',
      'Maintains open feel',
      'Flexible design options'
    ],
    pros: ['Additional storage', 'Good for entertaining', 'Maintains open feel', 'Flexible design'],
    cons: ['Requires more space', 'Higher cost', 'Can disrupt workflow'],
    bestFor: 'Open concept living, entertaining, medium to large kitchens',
    image: '/images/process/peninsula-kitchen.webp'
  }
]

const designPrinciples = [
  {
    principle: 'The Work Triangle',
    description: 'The work triangle is the foundation of good kitchen design, connecting the three main work areas: the sink, refrigerator, and stove. The total distance of the triangle should be between 12 and 26 feet.',
    tips: [
      'Keep the triangle compact but not cramped',
      'Avoid placing obstacles in the triangle',
      'Consider the primary cook\'s workflow',
      'Plan for multiple cooks if needed'
    ]
  },
  {
    principle: 'Storage Planning',
    description: 'Effective storage planning ensures that everything has a place and is easily accessible. Consider your cooking habits and storage needs when planning your kitchen layout.',
    tips: [
      'Plan for different types of storage',
      'Consider your cooking habits',
      'Plan for future needs',
      'Use vertical space effectively'
    ]
  },
  {
    principle: 'Lighting Design',
    description: 'Good lighting is essential for a functional kitchen. Plan for task lighting, ambient lighting, and accent lighting to create a well-lit and inviting space.',
    tips: [
      'Plan for task lighting over work areas',
      'Include ambient lighting for overall illumination',
      'Consider natural light sources',
      'Plan for lighting controls'
    ]
  },
  {
    principle: 'Traffic Flow',
    description: 'Consider how people will move through your kitchen and plan the layout to accommodate traffic flow while maintaining efficient workflow.',
    tips: [
      'Plan for main traffic patterns',
      'Avoid blocking work areas',
      'Consider multiple entry points',
      'Plan for entertaining flow'
    ]
  }
]

const planningSteps = [
  {
    step: 'Assess Your Space',
    description: 'Measure your kitchen space and identify any structural limitations or opportunities. Consider the existing layout and how it can be improved.',
    activities: [
      'Measure all dimensions',
      'Identify structural elements',
      'Note existing utilities',
      'Consider traffic patterns'
    ]
  },
  {
    step: 'Define Your Needs',
    description: 'Think about how you use your kitchen and what features are most important to you. Consider your cooking habits, storage needs, and entertaining requirements.',
    activities: [
      'List your cooking habits',
      'Identify storage needs',
      'Consider entertaining requirements',
      'Think about future needs'
    ]
  },
  {
    step: 'Choose Your Layout',
    description: 'Select the kitchen layout that best fits your space and needs. Consider the pros and cons of each layout type and how it will work in your space.',
    activities: [
      'Compare layout options',
      'Consider your space constraints',
      'Think about your lifestyle',
      'Plan for future changes'
    ]
  },
  {
    step: 'Plan the Details',
    description: 'Work out the details of your kitchen design, including cabinet placement, appliance selection, and finishing touches. Consider the work triangle and traffic flow.',
    activities: [
      'Plan cabinet placement',
      'Select appliances',
      'Plan lighting',
      'Choose finishes'
    ]
  }
]

export default function KitchenLayoutGuidePage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Process', href: '/process' },
              { name: 'Kitchen Layout Guide', href: '/process/kitchen-layout-guide', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Kitchen Layout Guide"
        subtitle="Complete Guide to Kitchen Design Layouts"
        description="Learn about different kitchen layout types, design principles, and how to plan the perfect kitchen for your space. From L-shaped to island kitchens, discover the ideal layout for your needs."
        imageSrc="process/kitchen-layout-guide-hero.webp"
        imageAlt="Beautiful kitchen layout showcasing different design options and space planning"
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Process",
          href: "/process"
        }}
      />

      {/* Introduction */}
      <section className="py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Planning Your Perfect Kitchen Layout
            </h2>
            <p className="text-xl text-charcoal/80">
              The layout of your kitchen is the foundation of good design. It determines how efficiently you can work, how much storage you have, and how well your kitchen functions for your lifestyle. This guide will help you understand different layout options and design principles.
            </p>
          </div>
        </div>
      </section>

      {/* Layout Types */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Popular Kitchen Layout Types
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore the most popular kitchen layout types and find the one that best fits your space and needs.
            </p>
          </div>

          <div className="space-y-16">
            {layoutTypes.map((layout, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-semibold text-charcoal mb-4">{layout.name}</h3>
                    <p className="text-charcoal/70 mb-6 text-lg">{layout.description}</p>
                    
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-charcoal">Characteristics:</h4>
                      <ul className="space-y-2">
                        {layout.characteristics.map((characteristic, i) => (
                          <li key={i} className="flex items-center text-charcoal/70">
                            <span className="w-1.5 h-1.5 bg-deep-green rounded-full mr-3"></span>
                            {characteristic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div>
                        <h4 className="font-semibold text-charcoal mb-2">Pros:</h4>
                        <ul className="text-charcoal/70 text-sm space-y-1">
                          {layout.pros.map((pro, i) => (
                            <li key={i}>• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal mb-2">Cons:</h4>
                        <ul className="text-charcoal/70 text-sm space-y-1">
                          {layout.cons.map((con, i) => (
                            <li key={i}>• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-deep-green/10 rounded-lg">
                      <p className="text-deep-green font-semibold">Best For: {layout.bestFor}</p>
                    </div>
                  </div>
                  
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={layout.image}
                      alt={`${layout.name} layout`}
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

      {/* Design Principles */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Kitchen Design Principles
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Follow these fundamental design principles to create a functional and beautiful kitchen layout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designPrinciples.map((principle, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-2xl font-semibold text-charcoal mb-4">{principle.principle}</h3>
                <p className="text-charcoal/70 mb-6">{principle.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-charcoal">Tips:</h4>
                  <ul className="space-y-2">
                    {principle.tips.map((tip, i) => (
                      <li key={i} className="flex items-center text-charcoal/70">
                        <span className="w-1.5 h-1.5 bg-deep-green rounded-full mr-3"></span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Steps */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Kitchen Planning Steps
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Follow these steps to plan your perfect kitchen layout and design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {planningSteps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-deep-green text-ivory rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal">{step.step}</h3>
                </div>
                <p className="text-charcoal/70 mb-4">{step.description}</p>
                
                <div className="space-y-1">
                  <h4 className="font-semibold text-charcoal text-sm">Activities:</h4>
                  <ul className="text-sm text-charcoal/70 space-y-1">
                    {step.activities.map((activity, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-deep-green rounded-full mr-2"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Ready to Plan Your Kitchen?
          </h2>
          <p className="text-xl text-french-gray mb-8">
            Planning your kitchen layout is an important step in creating a functional and beautiful space. Our team at PineWood Cabinets is here to help you design the perfect kitchen for your needs and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-deep-green text-ivory rounded-lg font-semibold hover:bg-deep-green/90 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/process"
              className="px-8 py-3 border border-ivory text-ivory rounded-lg font-semibold hover:bg-ivory/10 transition-colors"
            >
              View Our Process
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Kitchen?"
        description="Let's discuss your vision and create a custom kitchen layout that perfectly fits your space and needs."
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Process",
          href: "/process"
        }}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Kitchen Layout Guide - Complete Guide to Kitchen Design Layouts",
            "description": "Complete guide to kitchen layouts and design planning. Learn about different kitchen layout types, design principles, and how to plan the perfect kitchen for your space.",
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
            "image": "https://california-custom-kitchen.vercel.app/images/process/kitchen-layout-guide-hero.webp",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://california-custom-kitchen.vercel.app/process/kitchen-layout-guide"
            }
          })
        }}
      />
    </>
  )
}
