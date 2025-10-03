import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: "Cabinet Hardware Guide | Knobs, Pulls & Hinges Guide | PineWood Cabinets",
  description: "Complete guide to cabinet hardware including knobs, pulls, hinges, and drawer slides. Learn how to choose the right hardware for your kitchen cabinets.",
  keywords: [
    'cabinet hardware guide',
    'kitchen cabinet hardware',
    'cabinet knobs',
    'cabinet pulls',
    'cabinet hinges',
    'drawer slides',
    'kitchen hardware',
    'cabinet hardware selection'
  ],
  openGraph: {
    title: "Cabinet Hardware Guide | PineWood Cabinets",
    description: "Complete guide to cabinet hardware including knobs, pulls, hinges, and drawer slides.",
    images: ['/images/materials/cabinet-hardware-guide-hero.webp'],
  },
}

const hardwareTypes = [
  {
    name: 'Cabinet Knobs',
    description: 'Cabinet knobs are small, round hardware pieces that are typically used for cabinet doors and smaller drawers. They come in various styles, materials, and finishes.',
    characteristics: [
      'Small and compact',
      'Easy to install',
      'Wide variety of styles',
      'Cost-effective',
      'Good for traditional designs'
    ],
    materials: ['Brass', 'Stainless Steel', 'Bronze', 'Nickel', 'Wood', 'Ceramic'],
    bestFor: 'Cabinet doors, small drawers, traditional kitchens',
    image: '/images/materials/cabinet-knobs.webp'
  },
  {
    name: 'Cabinet Pulls',
    description: 'Cabinet pulls are horizontal hardware pieces that are typically used for drawers and larger cabinet doors. They provide better grip and are easier to use.',
    characteristics: [
      'Better grip and leverage',
      'Easier to use',
      'Good for larger drawers',
      'Modern appearance',
      'Various lengths available'
    ],
    materials: ['Brass', 'Stainless Steel', 'Bronze', 'Nickel', 'Wood', 'Glass'],
    bestFor: 'Drawers, large cabinet doors, modern kitchens',
    image: '/images/materials/cabinet-pulls.webp'
  },
  {
    name: 'Cabinet Hinges',
    description: 'Cabinet hinges are essential hardware that allows cabinet doors to open and close smoothly. They come in various types including soft-close and self-closing options.',
    characteristics: [
      'Smooth operation',
      'Various types available',
      'Easy to adjust',
      'Durable construction',
      'Hidden or visible options'
    ],
    materials: ['Steel', 'Brass', 'Stainless Steel', 'Zinc'],
    bestFor: 'All cabinet doors, soft-close functionality',
    image: '/images/materials/cabinet-hinges.webp'
  },
  {
    name: 'Drawer Slides',
    description: 'Drawer slides are hardware that allows drawers to open and close smoothly. They come in various types including side-mount, under-mount, and full-extension options.',
    characteristics: [
      'Smooth drawer operation',
      'Various mounting options',
      'Weight capacity ratings',
      'Extension options',
      'Soft-close available'
    ],
    materials: ['Steel', 'Ball bearings', 'Roller systems'],
    bestFor: 'All drawer types, smooth operation',
    image: '/images/materials/drawer-slides.webp'
  }
]

const selectionTips = [
  {
    tip: 'Consider Your Style',
    description: 'Choose hardware that complements your kitchen\'s design style. Traditional kitchens work well with ornate knobs, while modern kitchens often use sleek pulls.',
    category: 'Style'
  },
  {
    tip: 'Think About Functionality',
    description: 'Consider how you\'ll use your cabinets. Pulls are easier to use for larger drawers, while knobs work well for doors and smaller drawers.',
    category: 'Functionality'
  },
  {
    tip: 'Match Your Finishes',
    description: 'Choose hardware finishes that complement your other kitchen elements like faucets, lighting, and appliances for a cohesive look.',
    category: 'Finishes'
  },
  {
    tip: 'Consider Your Budget',
    description: 'Hardware prices vary significantly. Set a budget and choose the best hardware within your price range that meets your design needs.',
    category: 'Budget'
  },
  {
    tip: 'Think About Maintenance',
    description: 'Consider how much maintenance you\'re willing to do. Some finishes require more care than others, especially those that can tarnish or scratch.',
    category: 'Maintenance'
  },
  {
    tip: 'Plan for the Future',
    description: 'Choose hardware that will stand the test of time. Classic styles and quality materials will look good for years to come.',
    category: 'Longevity'
  }
]

export default function CabinetHardwareGuidePage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Materials', href: '/materials' },
              { name: 'Cabinet Hardware Guide', href: '/materials/cabinet-hardware-guide', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Cabinet Hardware Guide"
        subtitle="Complete Guide to Cabinet Hardware"
        description="Learn about different types of cabinet hardware including knobs, pulls, hinges, and drawer slides. Discover how to choose the right hardware for your kitchen cabinets."
        imageSrc="materials/cabinet-hardware-guide-hero.webp"
        imageAlt="Beautiful cabinet hardware including knobs, pulls, and hinges displayed on a kitchen counter"
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
              Choosing the Right Cabinet Hardware
            </h2>
            <p className="text-xl text-charcoal/80">
              Cabinet hardware is the finishing touch that can make or break your kitchen design. The right hardware can enhance functionality, improve aesthetics, and tie together your entire kitchen design.
            </p>
          </div>
        </div>
      </section>

      {/* Hardware Types */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Types of Cabinet Hardware
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore the different types of cabinet hardware and their unique characteristics.
            </p>
          </div>

          <div className="space-y-16">
            {hardwareTypes.map((hardware, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-semibold text-charcoal mb-4">{hardware.name}</h3>
                    <p className="text-charcoal/70 mb-6 text-lg">{hardware.description}</p>
                    
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-charcoal">Characteristics:</h4>
                      <ul className="space-y-2">
                        {hardware.characteristics.map((characteristic, i) => (
                          <li key={i} className="flex items-center text-charcoal/70">
                            <span className="w-1.5 h-1.5 bg-deep-green rounded-full mr-3"></span>
                            {characteristic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div>
                        <h4 className="font-semibold text-charcoal mb-2">Materials:</h4>
                        <p className="text-charcoal/70 text-sm">{hardware.materials.join(', ')}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal mb-2">Best For:</h4>
                        <p className="text-charcoal/70 text-sm">{hardware.bestFor}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={hardware.image}
                      alt={`${hardware.name} hardware`}
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
              How to Choose Cabinet Hardware
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Follow these tips to select the perfect hardware for your kitchen cabinets.
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

      <CTASection
        title="Ready to Choose Your Hardware?"
        description="Let's discuss your vision and help you select the perfect hardware for your custom kitchen cabinets."
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
