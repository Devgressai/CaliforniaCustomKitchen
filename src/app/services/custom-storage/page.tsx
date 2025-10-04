import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'

import { ServicePageLayout } from '@/components/PageLayout'
import { ServiceHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature, ProcessStep } from '@/components/ContentSection'
export const metadata: Metadata = {
  title: "Custom Storage Solutions | Built-in Storage & Organization | PineWood Cabinets",
  description: "Maximize your space with custom storage solutions. Built-in cabinets, walk-in closets, pantry organization, and custom storage systems designed for your lifestyle.",
  keywords: [
    'custom storage solutions',
    'built-in storage',
    'walk-in closet design',
    'pantry organization',
    'custom cabinets',
    'storage systems',
    'closet organization',
    'home organization'
  ],
  openGraph: {
    title: "Custom Storage Solutions | PineWood Cabinets",
    description: "Maximize your space with custom storage solutions. Built-in cabinets, walk-in closets, and pantry organization systems.",
    images: ['/images/services/custom-storage-hero.webp'],
  },
}

const storageTypes = [
  {
    title: 'Walk-in Closets',
    description: 'Transform your closet into a luxury dressing room with custom organization systems, lighting, and premium finishes.',
    features: ['Custom shelving', 'Drawer systems', 'Hanging rods', 'Lighting', 'Mirrors', 'Seating'],
    priceRange: '$15,000 - $50,000',
    timeline: '3-5 weeks'
  },
  {
    title: 'Pantry Organization',
    description: 'Create the ultimate pantry with custom shelving, pull-out drawers, and specialized storage for every item.',
    features: ['Pull-out shelves', 'Spice racks', 'Bulk storage', 'Appliance storage', 'Labeling system', 'Lighting'],
    priceRange: '$8,000 - $25,000',
    timeline: '2-3 weeks'
  },
  {
    title: 'Home Office Storage',
    description: 'Design custom storage solutions for your home office with built-in desks, filing systems, and display areas.',
    features: ['Built-in desk', 'File cabinets', 'Display shelves', 'Cable management', 'Lighting', 'Seating'],
    priceRange: '$10,000 - $35,000',
    timeline: '3-4 weeks'
  },
  {
    title: 'Mudroom & Entry Storage',
    description: 'Create organized entry spaces with custom cubbies, coat storage, shoe storage, and seating solutions.',
    features: ['Coat storage', 'Shoe cubbies', 'Bench seating', 'Hooks & baskets', 'Lockers', 'Mirrors'],
    priceRange: '$5,000 - $20,000',
    timeline: '2-3 weeks'
  },
  {
    title: 'Laundry Room Storage',
    description: 'Maximize your laundry room with custom cabinets, folding stations, and specialized storage for cleaning supplies.',
    features: ['Folding station', 'Hanging rods', 'Supply storage', 'Hamper systems', 'Counter space', 'Lighting'],
    priceRange: '$8,000 - $25,000',
    timeline: '2-3 weeks'
  },
  {
    title: 'Media & Entertainment Storage',
    description: 'Design custom entertainment centers and media storage that complements your home\'s aesthetic.',
    features: ['TV mounting', 'Component storage', 'Cable management', 'Display shelves', 'Lighting', 'Sound optimization'],
    priceRange: '$12,000 - $40,000',
    timeline: '3-4 weeks'
  }
]

const organizationSystems = [
  {
    system: 'Pull-out Shelves',
    description: 'Maximize accessibility with full-extension pull-out shelves that bring everything to you.',
    benefits: ['Easy access', 'Space efficiency', 'Organization', 'Visibility']
  },
  {
    system: 'Drawer Systems',
    description: 'Custom drawer configurations designed for specific items like jewelry, ties, or kitchen utensils.',
    benefits: ['Custom sizing', 'Organization', 'Protection', 'Accessibility']
  },
  {
    system: 'Hanging Systems',
    description: 'Adjustable hanging rods and hooks that adapt to your changing storage needs.',
    benefits: ['Flexibility', 'Adjustability', 'Space maximization', 'Easy reconfiguration']
  },
  {
    system: 'Lighting Integration',
    description: 'LED lighting systems that illuminate your storage areas and enhance functionality.',
    benefits: ['Visibility', 'Ambiance', 'Energy efficiency', 'Modern appeal']
  }
]

const designProcess = [
  {
    step: 'Space Assessment',
    description: 'We evaluate your space, lifestyle needs, and storage requirements to create a comprehensive plan.',
    duration: '1-2 days',
    deliverables: ['Space analysis', 'Needs assessment', 'Design brief', 'Budget planning']
  },
  {
    step: 'Custom Design',
    description: 'Our designers create detailed 3D renderings and material selections tailored to your specific needs.',
    duration: '1-2 weeks',
    deliverables: ['3D renderings', 'Material samples', 'Layout options', 'Detailed specifications']
  },
  {
    step: 'Fabrication',
    description: 'Our craftsmen build your custom storage solutions using premium materials and precise measurements.',
    duration: '2-4 weeks',
    deliverables: ['Custom fabrication', 'Quality inspection', 'Hardware preparation', 'Finishing']
  },
  {
    step: 'Installation',
    description: 'Professional installation with attention to detail, ensuring everything fits perfectly and functions smoothly.',
    duration: '3-5 days',
    deliverables: ['Professional installation', 'Final adjustments', 'Quality check', 'Walkthrough']
  }
]

const testimonials = [
  {
    name: 'Lisa Martinez',
    location: 'San Francisco, CA',
    project: 'Walk-in Closet',
    quote: 'My new walk-in closet is absolutely stunning. The organization systems have completely transformed how I manage my wardrobe.',
    rating: 5
  },
  {
    name: 'David Kim',
    location: 'Los Angeles, CA',
    project: 'Pantry Organization',
    quote: 'The custom pantry organization system has made cooking so much more enjoyable. Everything has its place and is easily accessible.',
    rating: 5
  },
  {
    name: 'Rachel Thompson',
    location: 'Palo Alto, CA',
    project: 'Home Office Storage',
    quote: 'The built-in office storage has created the perfect workspace. It\'s both functional and beautiful.',
    rating: 5
  }
]

export default function CustomStoragePage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Services', href: '/services' },
              { name: 'Custom Storage Solutions', href: '/services/custom-storage', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Storage Solutions"
        subtitle="Maximize Your Space"
        description="Transform every room in your home with custom storage solutions designed for your lifestyle. From walk-in closets to pantry organization, we create storage that works."
        imageSrc="services/custom-storage-hero.webp"
        imageAlt="Beautiful custom walk-in closet with organized storage systems"
        primaryCTA={{
          text: "Design Your Storage",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Storage Gallery",
          href: "/portfolio"
        }}
      />

      {/* Storage Types */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Storage Solutions
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From walk-in closets to pantry organization, we create custom storage solutions for every room in your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storageTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-2xl font-semibold text-charcoal mb-4">{type.title}</h3>
                <p className="text-charcoal/70 mb-6">{type.description}</p>
                
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-charcoal">Features:</h4>
                  <ul className="space-y-2">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-charcoal/70">
                        <span className="w-1.5 h-1.5 bg-deep-green rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-french-gray/20">
                  <div>
                    <p className="text-sm text-charcoal/70">Price Range</p>
                    <p className="text-xl font-bold text-deep-green">{type.priceRange}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-charcoal/70">Timeline</p>
                    <p className="font-semibold text-charcoal">{type.timeline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Systems */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Organization Systems
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our custom organization systems are designed to maximize efficiency and make your life easier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {organizationSystems.map((system, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-deep-green rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">{system.system}</h3>
                <p className="text-charcoal/70 mb-4">{system.description}</p>
                <ul className="space-y-1 text-sm text-charcoal/60">
                  {system.benefits.map((benefit, i) => (
                    <li key={i}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Our Design Process
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We follow a proven 4-step process to ensure your custom storage solution perfectly fits your needs and space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-deep-green text-ivory rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal">{step.step}</h3>
                </div>
                <p className="text-charcoal/70 mb-4">{step.description}</p>
                <div className="text-sm text-deep-green font-medium mb-2">
                  Duration: {step.duration}
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-charcoal">Deliverables:</p>
                  <ul className="text-sm text-charcoal/70 space-y-1">
                    {step.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-deep-green rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              What Our Clients Say
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Hear from homeowners who have transformed their spaces with our custom storage solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-charcoal/50 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-french-gray mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-ivory">{testimonial.name}</p>
                  <p className="text-french-gray text-sm">{testimonial.location}</p>
                  <p className="text-deep-green text-sm">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Storage Solutions FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about our custom storage solutions.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How much do custom storage solutions cost?</h3>
              <p className="text-charcoal/70">
                Custom storage solutions range from $5,000 to $50,000 depending on the scope and complexity. We provide detailed estimates during consultation based on your specific needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can you work with existing spaces?</h3>
              <p className="text-charcoal/70">
                Yes, we specialize in maximizing existing spaces. We can work with your current layout and create storage solutions that fit perfectly within your space constraints.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Do you offer organization consulting?</h3>
              <p className="text-charcoal/70">
                Yes, we provide organization consulting as part of our design process. We help you determine the best storage solutions for your lifestyle and belongings.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What materials do you use for storage solutions?</h3>
              <p className="text-charcoal/70">
                We use high-quality materials including solid wood, plywood, and premium hardware. All materials are selected for durability and aesthetic appeal to match your home's style.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Maximize Your Space?"
        description="Let's design custom storage solutions that transform how you use every room in your home."
        primaryCTA={{
          text: "Start Your Design",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Storage Gallery",
          href: "/portfolio"
        }}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom Storage Solutions",
            "description": "Maximize your space with custom storage solutions. Built-in cabinets, walk-in closets, and pantry organization systems.",
            "provider": {
              "@type": "Organization",
              "name": "PineWood Cabinets",
              "url": "https://california-custom-kitchen.vercel.app"
            },
            "areaServed": {
              "@type": "State",
              "name": "California"
            },
            "serviceType": "Custom Storage Solutions",
            "offers": {
              "@type": "Offer",
              "description": "Custom storage solutions starting at $5,000",
              "priceRange": "$5,000 - $50,000"
            }
          })
        }}
      />
    </>
  )
}
