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
  title: "Cabinet Hardware | Knobs, Pulls & Hinges | PineWood Cabinets",
  description: "Complete cabinet hardware solutions including knobs, pulls, hinges, and soft-close mechanisms. Premium hardware for your custom kitchen cabinets.",
  keywords: [
    'cabinet hardware',
    'cabinet knobs',
    'cabinet pulls',
    'cabinet hinges',
    'soft close hardware',
    'kitchen hardware',
    'cabinet handles',
    'hardware installation'
  ],
  openGraph: {
    title: "Cabinet Hardware | PineWood Cabinets",
    description: "Complete cabinet hardware solutions including knobs, pulls, hinges, and soft-close mechanisms.",
    images: ['/images/services/cabinet-hardware-hero.webp'],
  },
}

const hardwareTypes = [
  {
    title: 'Cabinet Knobs',
    description: 'Classic round knobs in various styles, materials, and finishes to complement your kitchen design.',
    materials: ['Brass', 'Stainless Steel', 'Bronze', 'Nickel', 'Wood', 'Ceramic'],
    styles: ['Traditional', 'Modern', 'Rustic', 'Industrial', 'Minimalist'],
    priceRange: '$5 - $50 each',
    installation: 'Professional installation included'
  },
  {
    title: 'Cabinet Pulls',
    description: 'Horizontal pulls in various lengths and styles, perfect for drawers and larger cabinet doors.',
    materials: ['Brass', 'Stainless Steel', 'Bronze', 'Nickel', 'Wood', 'Glass'],
    styles: ['Bar pulls', 'Cup pulls', 'Tab pulls', 'Ring pulls', 'Edge pulls'],
    priceRange: '$8 - $75 each',
    installation: 'Professional installation included'
  },
  {
    title: 'Cabinet Hinges',
    description: 'High-quality hinges including soft-close mechanisms for smooth, quiet cabinet operation.',
    types: ['Soft-close', 'Self-closing', 'Overlay', 'Inset', 'Concealed'],
    features: ['Quiet operation', 'Smooth closing', 'Adjustable', 'Durable'],
    priceRange: '$15 - $45 each',
    installation: 'Professional installation included'
  },
  {
    title: 'Drawer Slides',
    description: 'Full-extension drawer slides with soft-close mechanisms for smooth, quiet drawer operation.',
    types: ['Soft-close', 'Full-extension', 'Heavy-duty', 'Undermount', 'Side-mount'],
    features: ['Smooth operation', 'Quiet closing', 'Full access', 'Weight capacity'],
    priceRange: '$25 - $85 each',
    installation: 'Professional installation included'
  }
]

const hardwareStyles = [
  {
    style: 'Traditional',
    description: 'Classic designs with ornate details and warm finishes that complement traditional kitchen styles.',
    characteristics: ['Ornate details', 'Warm finishes', 'Classic shapes', 'Timeless appeal'],
    finishes: ['Antique brass', 'Oil-rubbed bronze', 'Polished nickel', 'Brushed brass']
  },
  {
    style: 'Modern',
    description: 'Clean, minimalist designs with sleek lines and contemporary finishes.',
    characteristics: ['Clean lines', 'Minimalist design', 'Sleek finishes', 'Contemporary appeal'],
    finishes: ['Brushed nickel', 'Matte black', 'Chrome', 'Satin brass']
  },
  {
    style: 'Rustic',
    description: 'Natural materials and distressed finishes that add warmth and character to your kitchen.',
    characteristics: ['Natural materials', 'Distressed finishes', 'Organic shapes', 'Warm textures'],
    finishes: ['Weathered brass', 'Rustic bronze', 'Natural wood', 'Hammered metal']
  },
  {
    style: 'Industrial',
    description: 'Bold, functional designs with raw materials and industrial-inspired finishes.',
    characteristics: ['Raw materials', 'Bold designs', 'Functional appeal', 'Urban aesthetic'],
    finishes: ['Raw steel', 'Brushed aluminum', 'Black iron', 'Copper']
  }
]

const installationServices = [
  {
    service: 'Hardware Selection',
    description: 'Professional guidance in selecting the perfect hardware for your kitchen style and budget.',
    includes: ['Style consultation', 'Material selection', 'Finish coordination', 'Budget planning'],
    duration: '1-2 hours'
  },
  {
    service: 'Hardware Installation',
    description: 'Professional installation of all cabinet hardware with precise measurements and alignment.',
    includes: ['Precise drilling', 'Proper alignment', 'Quality installation', 'Final adjustments'],
    duration: '1-2 days'
  },
  {
    service: 'Hardware Upgrade',
    description: 'Upgrade existing hardware with new knobs, pulls, and mechanisms for a fresh look.',
    includes: ['Hardware removal', 'New installation', 'Hole patching', 'Finish touch-up'],
    duration: '1-2 days'
  },
  {
    service: 'Soft-Close Conversion',
    description: 'Convert existing cabinets to soft-close operation with new hinges and drawer slides.',
    includes: ['Hinge replacement', 'Drawer slide upgrade', 'Adjustment', 'Testing'],
    duration: '1 day'
  }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'San Francisco, CA',
    project: 'Hardware Upgrade',
    quote: 'The new hardware completely transformed our kitchen. The soft-close mechanisms are amazing and the knobs are beautiful.',
    rating: 5
  },
  {
    name: 'Michael Davis',
    location: 'Los Angeles, CA',
    project: 'Complete Hardware Installation',
    quote: 'Professional installation and great selection. The team helped us choose the perfect hardware for our modern kitchen.',
    rating: 5
  },
  {
    name: 'Lisa Chen',
    location: 'Palo Alto, CA',
    project: 'Soft-Close Conversion',
    quote: 'Converting to soft-close was the best decision. Our kitchen is now so much quieter and more pleasant to use.',
    rating: 5
  }
]

export default function CabinetHardwarePage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Services', href: '/services' },
              { name: 'Cabinet Hardware', href: '/services/cabinet-hardware', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Cabinet Hardware"
        subtitle="Perfect Finishing Touch"
        description="Complete your kitchen with premium cabinet hardware. From knobs and pulls to hinges and soft-close mechanisms, we provide the perfect finishing touch for your custom cabinets."
        imageSrc="services/cabinet-hardware-hero.webp"
        imageAlt="Beautiful cabinet hardware including knobs, pulls, and hinges displayed on a kitchen counter"
        primaryCTA={{
          text: "Select Hardware",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Hardware Gallery",
          href: "/portfolio"
        }}
      />

      {/* Hardware Types */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Premium Kitchen Design Services</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Complete your kitchen with our extensive selection of premium cabinet hardware.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hardwareTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-2xl font-semibold text-charcoal mb-4">{type.title}</h3>
                <p className="text-charcoal/70 mb-6">{type.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Materials:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.materials?.map((material, i) => (
                        <span key={i} className="px-3 py-1 bg-deep-green/10 text-deep-green rounded-full text-sm">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Styles:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.styles?.map((style, i) => (
                        <span key={i} className="px-3 py-1 bg-french-gray/20 text-charcoal rounded-full text-sm">
                          {style}
                        </span>
                      ))}
                    </div>
                  </div>

                  {type.types && (
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Types:</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.types.map((typeItem, i) => (
                          <span key={i} className="px-3 py-1 bg-french-gray/20 text-charcoal rounded-full text-sm">
                            {typeItem}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {type.features && (
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.features.map((feature, i) => (
                          <span key={i} className="px-3 py-1 bg-french-gray/20 text-charcoal rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-french-gray/20">
                  <div>
                    <p className="text-sm text-charcoal/70">Price Range</p>
                    <p className="text-xl font-bold text-deep-green">{type.priceRange}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-charcoal/70">Installation</p>
                    <p className="font-semibold text-charcoal">{type.installation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Styles */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Premium Kitchen Design Services</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Choose from our curated collection of hardware styles to match your kitchen's aesthetic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hardwareStyles.map((style, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20 text-center">
                <div className="w-16 h-16 bg-deep-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-deep-green rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">{style.style}</h3>
                <p className="text-charcoal/70 mb-4">{style.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-charcoal text-sm mb-2">Characteristics:</h4>
                    <ul className="space-y-1 text-sm text-charcoal/60">
                      {style.characteristics.map((characteristic, i) => (
                        <li key={i}>• {characteristic}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-charcoal text-sm mb-2">Popular Finishes:</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {style.finishes.map((finish, i) => (
                        <span key={i} className="px-2 py-1 bg-french-gray/20 text-charcoal rounded text-xs">
                          {finish}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Services */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Premium Kitchen Design Services</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Professional hardware installation services to ensure perfect fit and function.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {installationServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-xl font-semibold text-charcoal mb-4">{service.service}</h3>
                <p className="text-charcoal/70 mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-charcoal">Includes:</h4>
                  <ul className="space-y-2">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-center text-charcoal/70">
                        <span className="w-1.5 h-1.5 bg-deep-green rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center pt-4 border-t border-french-gray/20">
                  <p className="text-sm text-charcoal/70">Duration</p>
                  <p className="font-semibold text-charcoal">{service.duration}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Premium Kitchen Design Services</h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Hear from homeowners who have enhanced their kitchens with our hardware solutions.
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Premium Kitchen Design Services</h2>
            <p className="text-xl text-charcoal/80">
              Common questions about our cabinet hardware services.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do I choose the right hardware style?</h3>
              <p className="text-charcoal/70">
                Consider your kitchen's overall style, cabinet finish, and personal preferences. We provide consultation services to help you select hardware that complements your design and fits your budget.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can you install hardware on existing cabinets?</h3>
              <p className="text-charcoal/70">
                Yes, we can install new hardware on existing cabinets. We'll handle drilling, alignment, and any necessary adjustments to ensure perfect fit and function.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's the difference between knobs and pulls?</h3>
              <p className="text-charcoal/70">
                Knobs are typically used for cabinet doors and smaller drawers, while pulls are better for larger drawers and can provide better grip. We can help you decide which works best for your specific cabinets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Do you offer soft-close conversion services?</h3>
              <p className="text-charcoal/70">
                Yes, we can convert existing cabinets to soft-close operation by replacing hinges and drawer slides. This upgrade significantly improves the user experience and reduces wear on cabinets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Complete Your Kitchen?"
        description="Choose the perfect hardware to finish your custom kitchen cabinets and create the look you've always wanted."
        primaryCTA={{
          text: "Select Hardware",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Hardware Gallery",
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
            "name": "Cabinet Hardware Services",
            "description": "Complete cabinet hardware solutions including knobs, pulls, hinges, and soft-close mechanisms.",
            "provider": {
              "@type": "Organization",
              "name": "PineWood Cabinets",
              "url": "https://california-custom-kitchen.vercel.app"
            },
            "areaServed": {
              "@type": "State",
              "name": "California"
            },
            "serviceType": "Cabinet Hardware",
            "offers": {
              "@type": "Offer",
              "description": "Cabinet hardware services starting at $5 per piece",
              "priceRange": "$5 - $85 per piece"
            }
          })
        }}
      />
    </>
  )
}
