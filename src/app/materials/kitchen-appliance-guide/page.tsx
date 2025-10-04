import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Breadcrumbs } from '@/components/Breadcrumbs'

import { MaterialsPageLayout } from '@/components/PageLayout'
import { MaterialsHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature, ProcessStep } from '@/components/ContentSection'
export const metadata: Metadata = {
  title: "Kitchen Appliance Guide | Appliances for Custom Kitchens | PineWood Cabinets",
  description: "Complete guide to kitchen appliances including ranges, refrigerators, dishwashers, and more. Learn how to choose the right appliances for your custom kitchen.",
  keywords: [
    'kitchen appliance guide',
    'kitchen appliances',
    'custom kitchen appliances',
    'kitchen appliance selection',
    'kitchen appliance brands',
    'kitchen appliance integration',
    'kitchen appliance tips',
    'kitchen appliance guide'
  ],
  openGraph: {
    title: "Kitchen Appliance Guide | PineWood Cabinets",
    description: "Complete guide to kitchen appliances including ranges, refrigerators, dishwashers, and more.",
    images: ['/images/materials/kitchen-appliance-guide-hero.webp'],
  },
}

const applianceTypes = [
  {
    name: 'Ranges & Ovens',
    description: 'The heart of your kitchen, ranges and ovens come in various sizes and fuel types to suit your cooking needs.',
    features: ['Gas and electric options', 'Various sizes', 'Convection capabilities', 'Self-cleaning options'],
    bestFor: 'Cooking, baking, roasting'
  },
  {
    name: 'Refrigerators',
    description: 'Essential for food storage, refrigerators come in various configurations and sizes to fit your space and needs.',
    features: ['Various configurations', 'Energy efficient', 'Smart features', 'Custom paneling options'],
    bestFor: 'Food storage, beverage cooling'
  },
  {
    name: 'Dishwashers',
    description: 'Modern dishwashers offer quiet operation, energy efficiency, and various cycle options for different cleaning needs.',
    features: ['Quiet operation', 'Energy efficient', 'Various cycles', 'Custom paneling options'],
    bestFor: 'Dish cleaning, convenience'
  }
]

export default function KitchenApplianceGuidePage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Materials', href: '/materials' },
              { name: 'Kitchen Appliance Guide', href: '/materials/kitchen-appliance-guide', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Kitchen Appliance Guide"
        subtitle="Complete Guide to Kitchen Appliances"
        description="Learn about different types of kitchen appliances including ranges, refrigerators, dishwashers, and more. Discover how to choose the right appliances for your custom kitchen."
        imageSrc="materials/kitchen-appliance-guide-hero.webp"
        imageAlt="Beautiful kitchen with integrated appliances"
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
              Choosing the Right Kitchen Appliances
            </h2>
            <p className="text-xl text-charcoal/80">
              Kitchen appliances are essential for functionality and can significantly impact your cooking experience. The right appliances can enhance efficiency, improve performance, and complement your kitchen design.
            </p>
          </div>
        </div>
      </section>

      {/* Appliance Types */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Types of Kitchen Appliances
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore the different types of kitchen appliances and their unique features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applianceTypes.map((appliance, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-2xl font-semibold text-charcoal mb-4">{appliance.name}</h3>
                <p className="text-charcoal/70 mb-6">{appliance.description}</p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-charcoal">Features:</h4>
                  <ul className="space-y-2">
                    {appliance.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-charcoal/70">
                        <span className="w-1.5 h-1.5 bg-deep-green rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 p-4 bg-deep-green/10 rounded-lg">
                  <p className="text-deep-green font-semibold">Best For: {appliance.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Choose Your Appliances?"
        description="Let's discuss your vision and help you select the perfect appliances for your custom kitchen."
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Materials",
          href: "/materials"
        }}
      />
    </>
  )
}
