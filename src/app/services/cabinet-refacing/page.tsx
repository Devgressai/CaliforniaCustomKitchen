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
  title: "Cabinet Refacing Services | Kitchen Cabinet Refacing | PineWood Cabinets",
  description: "Transform your kitchen with cabinet refacing services. Update doors, drawer fronts, and hardware while keeping your existing layout. Cost-effective kitchen makeover.",
  keywords: [
    'cabinet refacing',
    'kitchen cabinet refacing',
    'cabinet door replacement',
    'cabinet refinishing',
    'kitchen makeover',
    'cabinet update',
    'kitchen renovation',
    'cabinet refacing cost'
  ],
  openGraph: {
    title: "Cabinet Refacing Services | PineWood Cabinets",
    description: "Transform your kitchen with cabinet refacing. Update doors, drawer fronts, and hardware while keeping your existing layout.",
    images: ['/images/services/cabinet-refacing-hero.webp'],
  },
}

const refacingProcess = [
  {
    step: 'Assessment & Planning',
    description: 'We evaluate your existing cabinets and create a detailed plan for the refacing project, including door styles, finishes, and hardware options.',
    duration: '1-2 days',
    deliverables: ['Cabinet assessment', 'Design options', 'Material selection', 'Project timeline']
  },
  {
    step: 'Door & Drawer Front Fabrication',
    description: 'Our craftsmen create new doors and drawer fronts to match your specifications, using high-quality materials and precise measurements.',
    duration: '2-3 weeks',
    deliverables: ['Custom doors', 'Drawer fronts', 'Quality inspection', 'Hardware preparation']
  },
  {
    step: 'Cabinet Preparation',
    description: 'We prepare your existing cabinet boxes by cleaning, sanding, and making any necessary repairs to ensure a perfect fit for new components.',
    duration: '1-2 days',
    deliverables: ['Surface preparation', 'Repairs', 'Cleaning', 'Priming']
  },
  {
    step: 'Installation & Finishing',
    description: 'New doors, drawer fronts, and hardware are installed with precision. We ensure everything fits perfectly and functions smoothly.',
    duration: '2-3 days',
    deliverables: ['Door installation', 'Hardware mounting', 'Final adjustments', 'Quality check']
  }
]

const refacingOptions = [
  {
    title: 'Complete Cabinet Refacing',
    description: 'Full refacing including doors, drawer fronts, end panels, and hardware replacement.',
    includes: ['New doors', 'Drawer fronts', 'End panels', 'Hardware', 'Hinges', 'Soft-close mechanisms'],
    priceRange: '$15,000 - $35,000',
    timeline: '3-4 weeks'
  },
  {
    title: 'Door & Drawer Front Replacement',
    description: 'Replace only doors and drawer fronts while keeping existing cabinet boxes and hardware.',
    includes: ['New doors', 'Drawer fronts', 'Hinge adjustment', 'Basic hardware'],
    priceRange: '$8,000 - $20,000',
    timeline: '2-3 weeks'
  },
  {
    title: 'Cabinet Refinishing',
    description: 'Refinish existing doors and drawer fronts with new stain or paint while keeping the same style.',
    includes: ['Surface preparation', 'Staining/painting', 'Protective coating', 'Hardware cleaning'],
    priceRange: '$5,000 - $15,000',
    timeline: '1-2 weeks'
  },
  {
    title: 'Hardware & Accessories Update',
    description: 'Update cabinet hardware, add organizational accessories, and install soft-close mechanisms.',
    includes: ['New hardware', 'Organizational inserts', 'Soft-close upgrades', 'Drawer slides'],
    priceRange: '$2,000 - $8,000',
    timeline: '3-5 days'
  }
]

const doorStyles = [
  {
    style: 'Shaker',
    description: 'Classic, clean lines with recessed center panels. Timeless design that works in any kitchen style.',
    characteristics: ['Recessed panels', 'Clean lines', 'Versatile', 'Traditional appeal']
  },
  {
    style: 'Raised Panel',
    description: 'Elegant raised center panels that add depth and sophistication to your kitchen cabinets.',
    characteristics: ['Raised center', 'Elegant detail', 'Formal appearance', 'Classic design']
  },
  {
    style: 'Flat Panel',
    description: 'Modern, minimalist design with smooth, flat surfaces. Perfect for contemporary and transitional kitchens.',
    characteristics: ['Smooth surface', 'Modern look', 'Minimalist', 'Contemporary appeal']
  },
  {
    style: 'Glass Front',
    description: 'Beautiful glass panels that showcase your dishes and add visual interest to your kitchen.',
    characteristics: ['Glass panels', 'Display capability', 'Light transmission', 'Elegant appearance']
  }
]

const benefits = [
  {
    benefit: 'Cost Effective',
    description: 'Refacing costs 50-70% less than replacing cabinets while achieving a similar visual impact.',
    savings: 'Save $20,000 - $40,000'
  },
  {
    benefit: 'Faster Timeline',
    description: 'Complete your kitchen makeover in 2-4 weeks instead of 8-12 weeks for full replacement.',
    savings: 'Save 6-8 weeks'
  },
  {
    benefit: 'Less Disruption',
    description: 'Minimal demolition and construction means less mess and disruption to your daily routine.',
    savings: 'Minimal downtime'
  },
  {
    benefit: 'Eco-Friendly',
    description: 'Reduce waste by reusing existing cabinet boxes and only replacing what needs updating.',
    savings: 'Reduce waste by 80%'
  }
]

export default function CabinetRefacingPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Services', href: '/services' },
              { name: 'Cabinet Refacing', href: '/services/cabinet-refacing', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Cabinet Refacing"
        subtitle="Transform Without Replacement"
        description="Give your kitchen a complete makeover with cabinet refacing. Update doors, drawer fronts, and hardware while keeping your existing layout and saving thousands."
        imageSrc="services/cabinet-refacing-hero.webp"
        imageAlt="Beautiful cabinet refacing project showing before and after transformation"
        primaryCTA={{
          text: "Get Refacing Quote",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Refacing Gallery",
          href: "/portfolio"
        }}
      />

      {/* Benefits Section */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Premium Kitchen Design Services</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Cabinet refacing offers the perfect balance of transformation and value, giving you a beautiful new kitchen at a fraction of the cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-deep-green rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">{benefit.benefit}</h3>
                <p className="text-charcoal/70 mb-4">{benefit.description}</p>
                <div className="text-deep-green font-semibold">{benefit.savings}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refacing Process */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Premium Kitchen Design Services</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We follow a proven 4-step process to ensure your cabinet refacing project is completed efficiently and to the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {refacingProcess.map((step, index) => (
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

      {/* Refacing Options */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Premium Kitchen Design Services</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Choose the refacing option that best fits your needs and budget. Each option is designed to maximize your investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {refacingOptions.map((option, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-2xl font-semibold text-charcoal mb-4">{option.title}</h3>
                <p className="text-charcoal/70 mb-6">{option.description}</p>
                
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-charcoal">Includes:</h4>
                  <ul className="space-y-2">
                    {option.includes.map((item, i) => (
                      <li key={i} className="flex items-center text-charcoal/70">
                        <span className="w-1.5 h-1.5 bg-deep-green rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-french-gray/20">
                  <div>
                    <p className="text-sm text-charcoal/70">Price Range</p>
                    <p className="text-2xl font-bold text-deep-green">{option.priceRange}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-charcoal/70">Timeline</p>
                    <p className="font-semibold text-charcoal">{option.timeline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Door Styles */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Premium Kitchen Design Services</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Choose from our extensive selection of door styles to match your kitchen's design aesthetic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doorStyles.map((style, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20 text-center">
                <div className="w-16 h-16 bg-deep-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-deep-green rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">{style.style}</h3>
                <p className="text-charcoal/70 mb-4">{style.description}</p>
                <ul className="space-y-1 text-sm text-charcoal/60">
                  {style.characteristics.map((characteristic, i) => (
                    <li key={i}>• {characteristic}</li>
                  ))}
                </ul>
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
              Common questions about our cabinet refacing services.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How much does cabinet refacing cost?</h3>
              <p className="text-charcoal/70">
                Cabinet refacing typically costs $5,000 to $35,000 depending on the scope of work. This is 50-70% less than full cabinet replacement while achieving similar visual results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How long does cabinet refacing take?</h3>
              <p className="text-charcoal/70">
                Most refacing projects are completed in 2-4 weeks, compared to 8-12 weeks for full cabinet replacement. The exact timeline depends on the scope of work and material availability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can I change the cabinet layout during refacing?</h3>
              <p className="text-charcoal/70">
                Cabinet refacing keeps your existing layout. If you want to change the layout, we recommend a full kitchen renovation. We can discuss both options during your consultation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What if my cabinets are in poor condition?</h3>
              <p className="text-charcoal/70">
                We assess cabinet condition during consultation. If boxes are damaged beyond repair, we may recommend partial replacement or full renovation. Most cabinets can be refaced successfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Cabinets?"
        description="Get a free consultation and see how cabinet refacing can transform your kitchen at a fraction of the cost of replacement."
        primaryCTA={{
          text: "Get Free Quote",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Refacing Gallery",
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
            "name": "Cabinet Refacing Services",
            "description": "Transform your kitchen with cabinet refacing. Update doors, drawer fronts, and hardware while keeping your existing layout.",
            "provider": {
              "@type": "Organization",
              "name": "PineWood Cabinets",
              "url": "https://california-custom-kitchen.vercel.app"
            },
            "areaServed": {
              "@type": "State",
              "name": "California"
            },
            "serviceType": "Cabinet Refacing",
            "offers": {
              "@type": "Offer",
              "description": "Cabinet refacing services starting at $5,000",
              "priceRange": "$5,000 - $35,000"
            }
          })
        }}
      />
    </>
  )
}
