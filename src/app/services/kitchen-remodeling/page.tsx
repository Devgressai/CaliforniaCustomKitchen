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
  title: "Kitchen Remodeling Services | Complete Kitchen Renovations | PineWood Cabinets",
  description: "Transform your kitchen with our comprehensive remodeling services. From design to installation, PineWood Cabinets delivers complete kitchen renovations across California.",
  keywords: [
    'kitchen remodeling',
    'kitchen renovation',
    'complete kitchen remodel',
    'kitchen design and build',
    'kitchen contractor',
    'kitchen renovation services',
    'custom kitchen remodeling',
    'luxury kitchen renovation'
  ],
  openGraph: {
    title: "Kitchen Remodeling Services | PineWood Cabinets",
    description: "Complete kitchen renovation services from design to installation. Transform your space with our expert remodeling team.",
    images: ['/images/services/kitchen-remodeling-hero.webp'],
  },
}

const remodelingProcess = [
  {
    phase: 'Initial Consultation',
    description: 'We begin with a comprehensive consultation to understand your vision, lifestyle needs, and budget. Our design team evaluates your current space and discusses your goals for the renovation.',
    duration: '1-2 weeks',
    deliverables: ['Design brief', 'Space analysis', 'Budget planning', 'Timeline development']
  },
  {
    phase: 'Design Development',
    description: 'Our designers create detailed 3D renderings and material selections tailored to your preferences. We explore layout options, cabinet configurations, and finish combinations.',
    duration: '2-3 weeks',
    deliverables: ['3D renderings', 'Material samples', 'Layout options', 'Detailed specifications']
  },
  {
    phase: 'Project Planning',
    description: 'We develop a comprehensive project plan including permits, timeline, and coordination with subcontractors. Every detail is planned to ensure smooth execution.',
    duration: '1-2 weeks',
    deliverables: ['Project timeline', 'Permit applications', 'Contractor coordination', 'Material ordering']
  },
  {
    phase: 'Demolition & Preparation',
    description: 'Our experienced team carefully removes existing elements while protecting your home. We prepare the space for new installations with precision and care.',
    duration: '3-5 days',
    deliverables: ['Safe demolition', 'Site protection', 'Waste removal', 'Surface preparation']
  },
  {
    phase: 'Installation & Construction',
    description: 'Our master craftsmen install your new kitchen with meticulous attention to detail. Every cabinet, countertop, and fixture is installed to perfection.',
    duration: '2-4 weeks',
    deliverables: ['Cabinet installation', 'Countertop fitting', 'Appliance integration', 'Hardware installation']
  },
  {
    phase: 'Finishing & Final Inspection',
    description: 'We complete all finishing touches, conduct thorough quality inspections, and ensure every detail meets our exacting standards before project completion.',
    duration: '3-5 days',
    deliverables: ['Final finishing', 'Quality inspection', 'Cleanup', 'Walkthrough']
  }
]

const remodelingServices = [
  {
    title: 'Complete Kitchen Renovation',
    description: 'Full kitchen transformation including layout changes, new cabinets, countertops, appliances, and finishes.',
    features: ['Layout redesign', 'New cabinetry', 'Countertop replacement', 'Appliance upgrades', 'Flooring updates'],
    startingPrice: '$75,000',
    timeline: '8-12 weeks'
  },
  {
    title: 'Cabinet Refacing & Refinishing',
    description: 'Update your existing kitchen with new cabinet doors, drawer fronts, and finishes while keeping the current layout.',
    features: ['Door replacement', 'Drawer front updates', 'Hardware replacement', 'Finish refinishing', 'Interior organization'],
    startingPrice: '$25,000',
    timeline: '4-6 weeks'
  },
  {
    title: 'Kitchen Layout Redesign',
    description: 'Optimize your kitchen\'s functionality with a new layout, improved workflow, and enhanced storage solutions.',
    features: ['Layout planning', 'Workflow optimization', 'Storage solutions', 'Island design', 'Lighting planning'],
    startingPrice: '$45,000',
    timeline: '6-8 weeks'
  },
  {
    title: 'Luxury Kitchen Upgrade',
    description: 'High-end kitchen renovation with premium materials, custom features, and luxury appliances for discerning clients.',
    features: ['Custom cabinetry', 'Premium materials', 'Luxury appliances', 'Custom features', 'High-end finishes'],
    startingPrice: '$150,000',
    timeline: '12-16 weeks'
  }
]

const popularFeatures = [
  {
    feature: 'Custom Cabinetry',
    description: 'Handcrafted cabinets designed specifically for your space and lifestyle needs.',
    benefits: ['Perfect fit', 'Custom storage', 'Unique design', 'Quality construction']
  },
  {
    feature: 'Premium Countertops',
    description: 'High-quality countertop materials including quartz, granite, and natural stone.',
    benefits: ['Durability', 'Beauty', 'Easy maintenance', 'Value addition']
  },
  {
    feature: 'Smart Storage Solutions',
    description: 'Innovative storage systems that maximize space and improve organization.',
    benefits: ['Space efficiency', 'Organization', 'Accessibility', 'Customization']
  },
  {
    feature: 'Energy-Efficient Appliances',
    description: 'Modern appliances that reduce energy consumption while improving functionality.',
    benefits: ['Cost savings', 'Environmental impact', 'Modern features', 'Reliability']
  }
]

const testimonials = [
  {
    name: 'Sarah Chen',
    location: 'Palo Alto, CA',
    project: 'Complete Kitchen Renovation',
    quote: 'PineWood Cabinets transformed our outdated kitchen into a modern masterpiece. The attention to detail and quality of work exceeded our expectations.',
    rating: 5
  },
  {
    name: 'Michael Rodriguez',
    location: 'Beverly Hills, CA',
    project: 'Luxury Kitchen Upgrade',
    quote: 'The team\'s expertise in luxury kitchen design is unmatched. Our new kitchen is not only beautiful but incredibly functional.',
    rating: 5
  },
  {
    name: 'Jennifer Thompson',
    location: 'San Francisco, CA',
    project: 'Kitchen Layout Redesign',
    quote: 'They completely reimagined our kitchen layout and created the perfect space for our family. Highly recommend their services.',
    rating: 5
  }
]

export default function KitchenRemodelingPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Services', href: '/services' },
              { name: 'Kitchen Remodeling', href: '/services/kitchen-remodeling', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Kitchen Remodeling"
        subtitle="Complete Transformations"
        description="Transform your kitchen into the heart of your home with our comprehensive remodeling services. From design to installation, we handle every detail of your renovation."
        imageSrc="services/kitchen-remodeling-hero.webp"
        imageAlt="Beautiful kitchen remodeling project showing before and after transformation"
        primaryCTA={{
          text: "Start Your Remodel",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Process",
          href: "/process"
        }}
      />

      {/* Our Process */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Our Remodeling Process
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We follow a proven 6-phase process to ensure your kitchen remodeling project is completed on time, on budget, and to your exact specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remodelingProcess.map((phase, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-deep-green text-ivory rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal">{phase.phase}</h3>
                </div>
                <p className="text-charcoal/70 mb-4">{phase.description}</p>
                <div className="text-sm text-deep-green font-medium mb-2">
                  Duration: {phase.duration}
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-charcoal">Deliverables:</p>
                  <ul className="text-sm text-charcoal/70 space-y-1">
                    {phase.deliverables.map((item, i) => (
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

      {/* Remodeling Services */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Remodeling Services
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Choose from our comprehensive range of kitchen remodeling services, each designed to meet different needs and budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {remodelingServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-2xl font-semibold text-charcoal mb-4">{service.title}</h3>
                <p className="text-charcoal/70 mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-charcoal">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-charcoal/70">
                        <span className="w-1.5 h-1.5 bg-deep-green rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-french-gray/20">
                  <div>
                    <p className="text-sm text-charcoal/70">Starting at</p>
                    <p className="text-2xl font-bold text-deep-green">{service.startingPrice}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-charcoal/70">Timeline</p>
                    <p className="font-semibold text-charcoal">{service.timeline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Features */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Popular Remodeling Features
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Discover the most popular features that homeowners choose for their kitchen remodels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-deep-green rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">{feature.feature}</h3>
                <p className="text-charcoal/70 mb-4">{feature.description}</p>
                <ul className="space-y-1 text-sm text-charcoal/60">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i}>• {benefit}</li>
                  ))}
                </ul>
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
              Hear from homeowners who have transformed their kitchens with our remodeling services.
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about our kitchen remodeling services.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a kitchen remodel take?</h3>
              <p className="text-charcoal/70">
                The timeline depends on the scope of work. A complete renovation typically takes 8-12 weeks, while cabinet refacing can be completed in 4-6 weeks. We provide detailed timelines during the planning phase.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Do you handle permits and inspections?</h3>
              <p className="text-charcoal/70">
                Yes, we handle all necessary permits and coordinate inspections throughout the project. Our team is experienced with local building codes and requirements across California.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can I live in my home during the remodel?</h3>
              <p className="text-charcoal/70">
                In most cases, yes. We take measures to minimize disruption and maintain a clean, safe work environment. For major renovations, we may recommend temporary relocation for certain phases.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What warranties do you provide?</h3>
              <p className="text-charcoal/70">
                We provide comprehensive warranties on all workmanship and materials. Custom cabinetry comes with a lifetime warranty, and installation work is covered for 5 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Kitchen?"
        description="Let's discuss your vision and create a kitchen that perfectly suits your lifestyle and needs."
        primaryCTA={{
          text: "Start Your Remodel",
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
            "@type": "Service",
            "name": "Kitchen Remodeling Services",
            "description": "Complete kitchen renovation services from design to installation. Transform your space with our expert remodeling team.",
            "provider": {
              "@type": "Organization",
              "name": "PineWood Cabinets",
              "url": "https://california-custom-kitchen.vercel.app"
            },
            "areaServed": {
              "@type": "State",
              "name": "California"
            },
            "serviceType": "Kitchen Remodeling",
            "offers": {
              "@type": "Offer",
              "description": "Kitchen remodeling services starting at $25,000",
              "priceRange": "$25,000 - $150,000+"
            }
          })
        }}
      />
    </>
  )
}
