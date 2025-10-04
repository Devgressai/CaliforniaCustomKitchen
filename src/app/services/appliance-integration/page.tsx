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
  title: "Kitchen Appliance Integration | Built-in Appliances & Custom Installation | PineWood Cabinets",
  description: "Professional kitchen appliance integration services. Seamlessly integrate built-in appliances with custom cabinetry for a cohesive, high-end kitchen design.",
  keywords: [
    'kitchen appliance integration',
    'built-in appliances',
    'appliance installation',
    'custom appliance cabinets',
    'kitchen appliance design',
    'appliance paneling',
    'integrated appliances',
    'kitchen appliance consultant'
  ],
  openGraph: {
    title: "Kitchen Appliance Integration | PineWood Cabinets",
    description: "Professional kitchen appliance integration services. Seamlessly integrate built-in appliances with custom cabinetry.",
    images: ['/images/services/appliance-integration-hero.webp'],
  },
}

const applianceTypes = [
  {
    title: 'Refrigerator Integration',
    description: 'Seamlessly integrate refrigerators with custom cabinetry and paneling for a built-in appearance.',
    features: ['Custom paneling', 'Precise measurements', 'Ventilation planning', 'Door alignment', 'Hardware matching'],
    brands: ['Sub-Zero', 'Viking', 'Thermador', 'Miele', 'Bosch', 'GE Monogram'],
    priceRange: '$2,000 - $8,000',
    timeline: '1-2 weeks'
  },
  {
    title: 'Dishwasher Integration',
    description: 'Hide dishwashers behind custom cabinet panels that match your kitchen design perfectly.',
    features: ['Custom panels', 'Hidden controls', 'Seamless appearance', 'Easy access', 'Sound dampening'],
    brands: ['Bosch', 'Miele', 'KitchenAid', 'Whirlpool', 'Samsung', 'LG'],
    priceRange: '$800 - $3,000',
    timeline: '3-5 days'
  },
  {
    title: 'Range & Oven Integration',
    description: 'Integrate ranges and ovens with custom cabinetry and ventilation systems for a professional look.',
    features: ['Custom surrounds', 'Ventilation integration', 'Safety compliance', 'Gas line coordination', 'Electrical planning'],
    brands: ['Wolf', 'Viking', 'Thermador', 'Dacor', 'Jenn-Air', 'GE Monogram'],
    priceRange: '$1,500 - $6,000',
    timeline: '1-2 weeks'
  },
  {
    title: 'Microwave Integration',
    description: 'Built-in microwave installation with custom cabinetry for a clean, integrated appearance.',
    features: ['Built-in installation', 'Custom trim', 'Ventilation planning', 'Electrical coordination', 'Door integration'],
    brands: ['Sharp', 'Panasonic', 'GE', 'Whirlpool', 'KitchenAid', 'Bosch'],
    priceRange: '$600 - $2,500',
    timeline: '2-3 days'
  },
  {
    title: 'Wine Refrigerator Integration',
    description: 'Custom wine refrigerator installation with specialized cabinetry and climate control considerations.',
    features: ['Climate control', 'Custom cabinetry', 'Ventilation planning', 'Temperature monitoring', 'Display lighting'],
    brands: ['Sub-Zero', 'Viking', 'Thermador', 'U-Line', 'Avanti', 'Danby'],
    priceRange: '$1,200 - $5,000',
    timeline: '1-2 weeks'
  },
  {
    title: 'Coffee Machine Integration',
    description: 'Built-in coffee machine installation with custom cabinetry and plumbing integration.',
    features: ['Plumbing integration', 'Custom cabinetry', 'Water line installation', 'Drainage planning', 'Electrical coordination'],
    brands: ['Miele', 'Thermador', 'Bosch', 'GE Monogram', 'KitchenAid', 'Wolf'],
    priceRange: '$1,000 - $4,000',
    timeline: '1-2 weeks'
  }
]

const integrationServices = [
  {
    service: 'Appliance Selection',
    description: 'Professional guidance in selecting appliances that fit your space, budget, and design preferences.',
    includes: ['Space planning', 'Brand recommendations', 'Feature analysis', 'Budget optimization'],
    duration: '1-2 hours'
  },
  {
    service: 'Custom Cabinetry',
    description: 'Design and build custom cabinetry to perfectly integrate appliances with your kitchen design.',
    includes: ['Custom design', 'Precise fabrication', 'Panel matching', 'Hardware coordination'],
    duration: '2-4 weeks'
  },
  {
    service: 'Installation & Integration',
    description: 'Professional installation of appliances with custom cabinetry and proper connections.',
    includes: ['Appliance installation', 'Cabinetry integration', 'Connection setup', 'Testing and adjustment'],
    duration: '1-3 days'
  },
  {
    service: 'Ventilation Planning',
    description: 'Design and install proper ventilation systems for integrated appliances.',
    includes: ['Ventilation design', 'Ductwork planning', 'Fan installation', 'Air quality optimization'],
    duration: '1-2 days'
  }
]

const integrationProcess = [
  {
    step: 'Appliance Planning',
    description: 'Assess your space, needs, and preferences to select the perfect appliances for integration.',
    duration: '1-2 weeks',
    activities: ['Space analysis', 'Appliance selection', 'Design planning', 'Budget planning']
  },
  {
    step: 'Custom Design',
    description: 'Design custom cabinetry and integration solutions that seamlessly incorporate your appliances.',
    duration: '2-3 weeks',
    activities: ['Cabinetry design', 'Panel design', 'Hardware selection', '3D visualization']
  },
  {
    step: 'Fabrication',
    description: 'Build custom cabinetry and panels to exact specifications for perfect appliance integration.',
    duration: '3-4 weeks',
    activities: ['Cabinetry fabrication', 'Panel creation', 'Hardware installation', 'Quality control']
  },
  {
    step: 'Installation',
    description: 'Professional installation of appliances and custom cabinetry with proper connections and testing.',
    duration: '1-3 days',
    activities: ['Appliance installation', 'Cabinetry integration', 'Connection setup', 'Final testing']
  }
]

const testimonials = [
  {
    name: 'Michael Rodriguez',
    location: 'Beverly Hills, CA',
    project: 'Complete Appliance Integration',
    quote: 'The appliance integration is flawless. Our refrigerator and dishwasher are completely hidden behind custom panels that match our cabinets perfectly.',
    rating: 5
  },
  {
    name: 'Sarah Chen',
    location: 'Palo Alto, CA',
    project: 'Wine Refrigerator Integration',
    quote: 'The wine refrigerator integration is incredible. It looks like it was always part of the original design and the climate control is perfect.',
    rating: 5
  },
  {
    name: 'David Kim',
    location: 'San Francisco, CA',
    project: 'Range Integration',
    quote: 'The range integration with custom cabinetry and ventilation is outstanding. It looks professional and functions perfectly.',
    rating: 5
  }
]

export default function ApplianceIntegrationPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Services', href: '/services' },
              { name: 'Kitchen Appliance Integration', href: '/services/appliance-integration', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Kitchen Appliance Integration"
        subtitle="Seamless Design"
        description="Integrate your kitchen appliances seamlessly with custom cabinetry and professional installation. Create a cohesive, high-end kitchen design with built-in appliances."
        imageSrc="services/appliance-integration-hero.webp"
        imageAlt="Beautiful kitchen with integrated appliances including built-in refrigerator and dishwasher with custom cabinetry"
        primaryCTA={{
          text: "Plan Your Integration",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Integration Gallery",
          href: "/portfolio"
        }}
      />

      {/* Appliance Types */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Appliance Integration Types
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We integrate all types of kitchen appliances with custom cabinetry for a seamless, built-in appearance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applianceTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-2xl font-semibold text-charcoal mb-4">{type.title}</h3>
                <p className="text-charcoal/70 mb-6">{type.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.features.map((feature, i) => (
                        <span key={i} className="px-3 py-1 bg-deep-green/10 text-deep-green rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Brands:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.brands.map((brand, i) => (
                        <span key={i} className="px-3 py-1 bg-french-gray/20 text-charcoal rounded-full text-sm">
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
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

      {/* Integration Services */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Integration Services
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our comprehensive services ensure perfect appliance integration with your custom cabinetry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationServices.map((service, index) => (
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

      {/* Integration Process */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Our Integration Process
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We follow a systematic approach to ensure perfect appliance integration with your custom cabinetry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationProcess.map((step, index) => (
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
                  <p className="text-sm font-medium text-charcoal">Activities:</p>
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

      {/* Testimonials */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              What Our Clients Say
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Hear from homeowners who have achieved seamless appliance integration in their kitchens.
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
              Appliance Integration FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about our kitchen appliance integration services.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can you integrate any brand of appliance?</h3>
              <p className="text-charcoal/70">
                Yes, we work with all major appliance brands including Sub-Zero, Viking, Thermador, Miele, Bosch, and many others. We'll help you select the best appliances for your space and budget.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How much does appliance integration cost?</h3>
              <p className="text-charcoal/70">
                Integration costs vary based on the appliance type and complexity. Refrigerator integration typically costs $2,000-$8,000, while dishwasher integration ranges from $800-$3,000. We provide detailed estimates during consultation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Do you handle all the electrical and plumbing connections?</h3>
              <p className="text-charcoal/70">
                Yes, we coordinate all electrical and plumbing connections as part of our integration services. We work with licensed professionals to ensure all connections are properly installed and meet code requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can you integrate appliances in existing kitchens?</h3>
              <p className="text-charcoal/70">
                Yes, we can integrate appliances in existing kitchens. We'll assess your current setup and make any necessary modifications to accommodate the new appliances and custom cabinetry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Integrate Your Appliances?"
        description="Let our experts create seamless appliance integration that transforms your kitchen into a cohesive, high-end space."
        primaryCTA={{
          text: "Plan Your Integration",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Integration Gallery",
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
            "name": "Kitchen Appliance Integration",
            "description": "Professional kitchen appliance integration services. Seamlessly integrate built-in appliances with custom cabinetry.",
            "provider": {
              "@type": "Organization",
              "name": "PineWood Cabinets",
              "url": "https://california-custom-kitchen.vercel.app"
            },
            "areaServed": {
              "@type": "State",
              "name": "California"
            },
            "serviceType": "Kitchen Appliance Integration",
            "offers": {
              "@type": "Offer",
              "description": "Kitchen appliance integration services starting at $600",
              "priceRange": "$600 - $8,000"
            }
          })
        }}
      />
    </>
  )
}
