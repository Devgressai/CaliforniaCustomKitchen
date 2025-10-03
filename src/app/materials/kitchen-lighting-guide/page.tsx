import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: "Kitchen Lighting Guide | LED, Task & Ambient Lighting | PineWood Cabinets",
  description: "Complete guide to kitchen lighting including LED, task, and ambient lighting. Learn how to design the perfect lighting for your kitchen.",
  keywords: [
    'kitchen lighting guide',
    'kitchen lighting design',
    'LED kitchen lighting',
    'task lighting',
    'ambient lighting',
    'kitchen lighting tips',
    'kitchen lighting ideas',
    'kitchen lighting fixtures'
  ],
  openGraph: {
    title: "Kitchen Lighting Guide | PineWood Cabinets",
    description: "Complete guide to kitchen lighting including LED, task, and ambient lighting.",
    images: ['/images/materials/kitchen-lighting-guide-hero.webp'],
  },
}

const lightingTypes = [
  {
    name: 'Task Lighting',
    description: 'Task lighting provides focused illumination for specific work areas like food preparation, cooking, and cleaning.',
    features: ['Under cabinet strips', 'Pendant lights', 'Track lighting', 'Recessed spotlights'],
    bestFor: 'Food preparation, cooking, cleaning areas'
  },
  {
    name: 'Ambient Lighting',
    description: 'Ambient lighting provides overall illumination and sets the mood in your kitchen.',
    features: ['Recessed ceiling lights', 'Chandeliers', 'Wall sconces', 'Cove lighting'],
    bestFor: 'General illumination, mood setting'
  },
  {
    name: 'Accent Lighting',
    description: 'Accent lighting highlights architectural features, artwork, or design elements.',
    features: ['Cabinet toe kick lighting', 'Display lighting', 'Under counter lighting'],
    bestFor: 'Highlighting features, creating depth'
  }
]

export default function KitchenLightingGuidePage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Materials', href: '/materials' },
              { name: 'Kitchen Lighting Guide', href: '/materials/kitchen-lighting-guide', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Kitchen Lighting Guide"
        subtitle="Complete Guide to Kitchen Lighting"
        description="Learn about different types of kitchen lighting including LED, task, and ambient lighting. Discover how to design the perfect lighting for your kitchen."
        imageSrc="materials/kitchen-lighting-guide-hero.webp"
        imageAlt="Beautiful kitchen with professional lighting design"
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
              Designing the Perfect Kitchen Lighting
            </h2>
            <p className="text-xl text-charcoal/80">
              Good lighting is essential for a functional and beautiful kitchen. The right lighting design can enhance safety, improve functionality, and create the perfect ambiance for cooking and entertaining.
            </p>
          </div>
        </div>
      </section>

      {/* Lighting Types */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Types of Kitchen Lighting
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore the different types of kitchen lighting and their unique purposes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lightingTypes.map((lighting, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-2xl font-semibold text-charcoal mb-4">{lighting.name}</h3>
                <p className="text-charcoal/70 mb-6">{lighting.description}</p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-charcoal">Features:</h4>
                  <ul className="space-y-2">
                    {lighting.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-charcoal/70">
                        <span className="w-1.5 h-1.5 bg-deep-green rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 p-4 bg-deep-green/10 rounded-lg">
                  <p className="text-deep-green font-semibold">Best For: {lighting.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Design Your Kitchen Lighting?"
        description="Let's discuss your vision and create the perfect lighting design for your kitchen."
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
