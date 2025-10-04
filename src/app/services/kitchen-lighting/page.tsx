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
  title: "Kitchen Lighting Design | LED Under Cabinet & Task Lighting | PineWood Cabinets",
  description: "Professional kitchen lighting design including LED under cabinet lighting, task lighting, and ambient lighting. Create the perfect lighting for your custom kitchen.",
  keywords: [
    'kitchen lighting design',
    'under cabinet lighting',
    'kitchen task lighting',
    'LED kitchen lighting',
    'kitchen lighting installation',
    'kitchen lighting fixtures',
    'ambient kitchen lighting',
    'kitchen lighting consultant'
  ],
  openGraph: {
    title: "Kitchen Lighting Design | PineWood Cabinets",
    description: "Professional kitchen lighting design including LED under cabinet lighting, task lighting, and ambient lighting.",
    images: ['/images/services/kitchen-lighting-hero.webp'],
  },
}

const lightingTypes = [
  {
    title: 'Under Cabinet Lighting',
    description: 'LED strip lighting installed under cabinets to provide task lighting for countertops and workspaces.',
    features: ['LED technology', 'Energy efficient', 'Dimmable options', 'Easy installation', 'Long lifespan'],
    benefits: ['Task illumination', 'Energy savings', 'Modern appearance', 'Easy maintenance'],
    priceRange: '$200 - $800 per cabinet',
    installation: 'Professional installation included'
  },
  {
    title: 'Pendant Lighting',
    description: 'Decorative pendant lights suspended over islands, peninsulas, and dining areas for both function and style.',
    features: ['Various styles', 'Adjustable height', 'Multiple finishes', 'Dimmable options', 'Custom sizing'],
    benefits: ['Focal point', 'Task lighting', 'Ambient lighting', 'Style enhancement'],
    priceRange: '$150 - $1,200 per fixture',
    installation: 'Professional installation included'
  },
  {
    title: 'Recessed Lighting',
    description: 'Flush-mounted ceiling lights that provide general illumination throughout the kitchen without taking up visual space.',
    features: ['Flush mounting', 'Adjustable direction', 'Energy efficient', 'Clean appearance', 'Versatile placement'],
    benefits: ['General illumination', 'Space saving', 'Modern look', 'Flexible positioning'],
    priceRange: '$100 - $400 per fixture',
    installation: 'Professional installation included'
  },
  {
    title: 'Cabinet Interior Lighting',
    description: 'LED lighting inside cabinets and drawers to illuminate contents and create a premium feel.',
    features: ['Motion sensors', 'Battery powered', 'Easy installation', 'Warm white LED', 'Automatic shutoff'],
    benefits: ['Content visibility', 'Premium feel', 'Convenience', 'Energy efficient'],
    priceRange: '$50 - $200 per cabinet',
    installation: 'Professional installation included'
  }
]

const lightingDesigns = [
  {
    design: 'Task Lighting',
    description: 'Focused lighting for specific work areas like food preparation, cooking, and cleaning.',
    applications: ['Under cabinet strips', 'Pendant lights over island', 'Track lighting', 'Recessed spotlights'],
    benefits: ['Improved visibility', 'Reduced eye strain', 'Better safety', 'Enhanced productivity']
  },
  {
    design: 'Ambient Lighting',
    description: 'General lighting that provides overall illumination and sets the mood in your kitchen.',
    applications: ['Recessed ceiling lights', 'Chandeliers', 'Wall sconces', 'Cove lighting'],
    benefits: ['Overall illumination', 'Mood setting', 'Space definition', 'Visual comfort']
  },
  {
    design: 'Accent Lighting',
    description: 'Decorative lighting that highlights architectural features, artwork, or design elements.',
    applications: ['Cabinet toe kick lighting', 'Display lighting', 'Under counter lighting', 'Wall grazing'],
    benefits: ['Visual interest', 'Depth creation', 'Feature highlighting', 'Dramatic effect']
  },
  {
    design: 'Smart Lighting',
    description: 'Intelligent lighting systems with automation, dimming, and color temperature control.',
    applications: ['Smart switches', 'Color changing LEDs', 'Motion sensors', 'Voice control'],
    benefits: ['Convenience', 'Energy savings', 'Customization', 'Modern technology']
  }
]

const lightingProcess = [
  {
    step: 'Lighting Assessment',
    description: 'Evaluate your current lighting, natural light sources, and identify areas that need improvement.',
    duration: '1-2 hours',
    activities: ['Current lighting analysis', 'Natural light assessment', 'Task area identification', 'Power requirements']
  },
  {
    step: 'Design Development',
    description: 'Create a comprehensive lighting plan that addresses all your needs and preferences.',
    duration: '1-2 weeks',
    activities: ['Lighting layout', 'Fixture selection', 'Control planning', 'Cost estimation']
  },
  {
    step: 'Installation Planning',
    description: 'Coordinate with electricians and plan the installation process to minimize disruption.',
    duration: '1-2 days',
    activities: ['Electrical planning', 'Timeline coordination', 'Material ordering', 'Installation scheduling']
  },
  {
    step: 'Installation & Testing',
    description: 'Professional installation of all lighting fixtures with thorough testing and adjustment.',
    duration: '1-3 days',
    activities: ['Fixture installation', 'Wiring connections', 'Testing and adjustment', 'Final walkthrough']
  }
]

const testimonials = [
  {
    name: 'David Kim',
    location: 'San Jose, CA',
    project: 'Complete Kitchen Lighting',
    quote: 'The under cabinet lighting transformed our kitchen. It\'s so much easier to cook and the LED strips look amazing.',
    rating: 5
  },
  {
    name: 'Jennifer Walsh',
    location: 'Marin County, CA',
    project: 'Pendant Lighting Installation',
    quote: 'The pendant lights over our island are perfect. They provide great task lighting and look beautiful.',
    rating: 5
  },
  {
    name: 'Robert Chen',
    location: 'Los Angeles, CA',
    project: 'Smart Lighting System',
    quote: 'The smart lighting system is incredible. We can control everything from our phone and the automation is so convenient.',
    rating: 5
  }
]

export default function KitchenLightingPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Services', href: '/services' },
              { name: 'Kitchen Lighting Design', href: '/services/kitchen-lighting', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Kitchen Lighting Design"
        subtitle="Illuminate Your Space"
        description="Create the perfect lighting for your kitchen with our professional lighting design services. From task lighting to ambient illumination, we'll transform your space."
        imageSrc="services/kitchen-lighting-hero.webp"
        imageAlt="Beautiful kitchen with professional lighting including under cabinet LED strips and pendant lights"
        primaryCTA={{
          text: "Design Your Lighting",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Lighting Gallery",
          href: "/portfolio"
        }}
      />

      {/* Lighting Types */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Premium Kitchen Design Services</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Choose from our comprehensive selection of kitchen lighting solutions designed for function and style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lightingTypes.map((type, index) => (
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
                    <h4 className="font-semibold text-charcoal mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.benefits.map((benefit, i) => (
                        <span key={i} className="px-3 py-1 bg-french-gray/20 text-charcoal rounded-full text-sm">
                          {benefit}
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
                    <p className="text-sm text-charcoal/70">Installation</p>
                    <p className="font-semibold text-charcoal">{type.installation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lighting Designs */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Premium Kitchen Design Services</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our lighting designs are tailored to create the perfect atmosphere and functionality for your kitchen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {lightingDesigns.map((design, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20 text-center">
                <div className="w-16 h-16 bg-deep-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-deep-green rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">{design.design}</h3>
                <p className="text-charcoal/70 mb-4">{design.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-charcoal text-sm mb-2">Applications:</h4>
                    <ul className="space-y-1 text-sm text-charcoal/60">
                      {design.applications.map((application, i) => (
                        <li key={i}>• {application}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-charcoal text-sm mb-2">Benefits:</h4>
                    <ul className="space-y-1 text-sm text-charcoal/60">
                      {design.benefits.map((benefit, i) => (
                        <li key={i}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lighting Process */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Premium Kitchen Design Services</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your kitchen lighting is perfectly designed and installed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {lightingProcess.map((step, index) => (
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Premium Kitchen Design Services</h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Hear from homeowners who have transformed their kitchens with our lighting solutions.
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
              Common questions about our kitchen lighting design services.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What types of lighting do I need in my kitchen?</h3>
              <p className="text-charcoal/70">
                A well-lit kitchen typically includes task lighting (under cabinets), ambient lighting (ceiling fixtures), and accent lighting (decorative elements). We'll assess your space and recommend the perfect combination.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Are LED lights worth the investment?</h3>
              <p className="text-charcoal/70">
                Yes, LED lights are highly recommended for kitchens. They're energy-efficient, long-lasting, provide excellent light quality, and come in various color temperatures to match your preferences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can you install lighting in existing kitchens?</h3>
              <p className="text-charcoal/70">
                Yes, we can install lighting in existing kitchens. We'll work with your current electrical setup and make any necessary modifications to accommodate new lighting fixtures.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Do you offer smart lighting options?</h3>
              <p className="text-charcoal/70">
                Yes, we offer smart lighting systems with dimming, color temperature control, and automation features. These systems can be controlled via smartphone apps or voice assistants.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Illuminate Your Kitchen?"
        description="Let our lighting experts design the perfect lighting solution for your kitchen that combines beauty and functionality."
        primaryCTA={{
          text: "Design Your Lighting",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Lighting Gallery",
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
            "name": "Kitchen Lighting Design",
            "description": "Professional kitchen lighting design including LED under cabinet lighting, task lighting, and ambient lighting.",
            "provider": {
              "@type": "Organization",
              "name": "PineWood Cabinets",
              "url": "https://california-custom-kitchen.vercel.app"
            },
            "areaServed": {
              "@type": "State",
              "name": "California"
            },
            "serviceType": "Kitchen Lighting Design",
            "offers": {
              "@type": "Offer",
              "description": "Kitchen lighting design services starting at $50 per fixture",
              "priceRange": "$50 - $1,200 per fixture"
            }
          })
        }}
      />
    </>
  )
}
