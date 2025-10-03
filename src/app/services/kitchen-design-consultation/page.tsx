import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: "Kitchen Design Consultation | Professional Design Services | PineWood Cabinets",
  description: "Get expert kitchen design consultation from our professional designers. Space planning, material selection, and design guidance for your dream kitchen.",
  keywords: [
    'kitchen design consultation',
    'kitchen designer',
    'kitchen design services',
    'kitchen planning',
    'space planning',
    'kitchen design advice',
    'design consultation',
    'kitchen design expert'
  ],
  openGraph: {
    title: "Kitchen Design Consultation | PineWood Cabinets",
    description: "Get expert kitchen design consultation from our professional designers. Space planning, material selection, and design guidance.",
    images: ['/images/services/kitchen-design-consultation-hero.webp'],
  },
}

const consultationTypes = [
  {
    title: 'Initial Design Consultation',
    description: 'Comprehensive assessment of your space, needs, and vision with professional design recommendations.',
    duration: '2-3 hours',
    includes: ['Space analysis', 'Needs assessment', 'Design concepts', 'Material recommendations', 'Budget guidance'],
    price: '$500',
    deliverables: ['Design brief', 'Material samples', 'Layout suggestions', 'Next steps plan']
  },
  {
    title: 'Detailed Design Development',
    description: 'Complete design development with 3D renderings, detailed specifications, and material selections.',
    duration: '1-2 weeks',
    includes: ['3D renderings', 'Detailed drawings', 'Material selection', 'Color schemes', 'Lighting plan'],
    price: '$2,500',
    deliverables: ['3D visualizations', 'Technical drawings', 'Material specifications', 'Implementation plan']
  },
  {
    title: 'Design Review & Refinement',
    description: 'Review and refine existing designs with professional feedback and optimization recommendations.',
    duration: '1-2 days',
    includes: ['Design review', 'Optimization suggestions', 'Material alternatives', 'Cost analysis'],
    price: '$750',
    deliverables: ['Refined design', 'Updated specifications', 'Cost breakdown', 'Implementation timeline']
  },
  {
    title: 'Project Management Consultation',
    description: 'Ongoing design support throughout your project with regular check-ins and problem-solving.',
    duration: 'Project duration',
    includes: ['Regular check-ins', 'Problem solving', 'Quality control', 'Timeline management'],
    price: '$200/hour',
    deliverables: ['Ongoing support', 'Progress reports', 'Issue resolution', 'Final walkthrough']
  }
]

const designServices = [
  {
    service: 'Space Planning',
    description: 'Optimize your kitchen layout for maximum functionality and flow.',
    benefits: ['Improved workflow', 'Better storage', 'Enhanced safety', 'Increased value']
  },
  {
    service: 'Material Selection',
    description: 'Choose the perfect materials that balance beauty, durability, and budget.',
    benefits: ['Quality materials', 'Cost optimization', 'Aesthetic appeal', 'Long-term value']
  },
  {
    service: 'Color & Finish Coordination',
    description: 'Create harmonious color schemes and finish combinations throughout your kitchen.',
    benefits: ['Visual harmony', 'Personal style', 'Timeless appeal', 'Resale value']
  },
  {
    service: 'Lighting Design',
    description: 'Design lighting that enhances both functionality and ambiance.',
    benefits: ['Task lighting', 'Ambient lighting', 'Energy efficiency', 'Mood enhancement']
  }
]

const consultationProcess = [
  {
    step: 'Pre-Consultation Preparation',
    description: 'We gather information about your space, needs, and preferences to make the most of our time together.',
    duration: '1-2 days',
    activities: ['Space measurements', 'Lifestyle assessment', 'Style preferences', 'Budget discussion']
  },
  {
    step: 'On-Site Consultation',
    description: 'Comprehensive on-site assessment of your space with detailed analysis and recommendations.',
    duration: '2-3 hours',
    activities: ['Space analysis', 'Needs discussion', 'Design concepts', 'Material review']
  },
  {
    step: 'Design Development',
    description: 'Creation of detailed design solutions based on consultation findings and your preferences.',
    duration: '1-2 weeks',
    activities: ['3D modeling', 'Material selection', 'Specification writing', 'Cost analysis']
  },
  {
    step: 'Presentation & Refinement',
    description: 'Presentation of design solutions with opportunity for feedback and refinement.',
    duration: '1-2 days',
    activities: ['Design presentation', 'Feedback collection', 'Refinement process', 'Final approval']
  }
]

const testimonials = [
  {
    name: 'Jennifer Walsh',
    location: 'Marin County, CA',
    project: 'Complete Kitchen Design',
    quote: 'The design consultation was incredibly valuable. The designer helped us see possibilities we never considered and created a plan that perfectly fits our lifestyle.',
    rating: 5
  },
  {
    name: 'Robert Chen',
    location: 'Silicon Valley, CA',
    project: 'Space Planning Consultation',
    quote: 'Professional, insightful, and creative. The consultation gave us confidence in our design decisions and saved us from costly mistakes.',
    rating: 5
  },
  {
    name: 'Maria Rodriguez',
    location: 'Los Angeles, CA',
    project: 'Material Selection',
    quote: 'The material selection guidance was spot-on. We got exactly the look we wanted while staying within our budget.',
    rating: 5
  }
]

export default function KitchenDesignConsultationPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Services', href: '/services' },
              { name: 'Kitchen Design Consultation', href: '/services/kitchen-design-consultation', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Kitchen Design Consultation"
        subtitle="Expert Design Guidance"
        description="Get professional kitchen design consultation from our experienced designers. We'll help you create the perfect kitchen that fits your lifestyle, budget, and aesthetic preferences."
        imageSrc="services/kitchen-design-consultation-hero.webp"
        imageAlt="Professional kitchen designer working on design plans and material samples"
        primaryCTA={{
          text: "Schedule Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Design Gallery",
          href: "/portfolio"
        }}
      />

      {/* Consultation Types */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Consultation Services
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Choose the consultation service that best fits your needs and project scope.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultationTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-2xl font-semibold text-charcoal mb-4">{type.title}</h3>
                <p className="text-charcoal/70 mb-6">{type.description}</p>
                
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-charcoal">Includes:</h4>
                  <ul className="space-y-2">
                    {type.includes.map((item, i) => (
                      <li key={i} className="flex items-center text-charcoal/70">
                        <span className="w-1.5 h-1.5 bg-deep-green rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-charcoal">Deliverables:</h4>
                  <ul className="space-y-2">
                    {type.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center text-charcoal/70">
                        <span className="w-1.5 h-1.5 bg-deep-green rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-french-gray/20">
                  <div>
                    <p className="text-sm text-charcoal/70">Duration</p>
                    <p className="font-semibold text-charcoal">{type.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-charcoal/70">Investment</p>
                    <p className="text-2xl font-bold text-deep-green">{type.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Design Services
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our comprehensive design services cover every aspect of your kitchen project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-deep-green rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">{service.service}</h3>
                <p className="text-charcoal/70 mb-4">{service.description}</p>
                <ul className="space-y-1 text-sm text-charcoal/60">
                  {service.benefits.map((benefit, i) => (
                    <li key={i}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Our Consultation Process
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We follow a structured process to ensure you get maximum value from your design consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultationProcess.map((step, index) => (
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
              Hear from homeowners who have benefited from our design consultation services.
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
              Design Consultation FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about our kitchen design consultation services.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What should I prepare for my consultation?</h3>
              <p className="text-charcoal/70">
                Before your consultation, think about your lifestyle needs, cooking habits, and design preferences. Gather inspiration photos and have a budget range in mind. We'll provide a detailed preparation guide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Do you offer virtual consultations?</h3>
              <p className="text-charcoal/70">
                Yes, we offer virtual consultations for initial design discussions and material reviews. However, we recommend on-site consultations for space planning and detailed design work.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can I get a second opinion on my design?</h3>
              <p className="text-charcoal/70">
                Absolutely. We offer design review consultations where we can evaluate existing designs and provide alternative solutions or refinements to better meet your needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What if I'm not satisfied with the design?</h3>
              <p className="text-charcoal/70">
                We work closely with you throughout the design process and include revision rounds in our detailed design packages. Our goal is to create a design you absolutely love.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Design Your Dream Kitchen?"
        description="Schedule a consultation with our expert designers and start creating the kitchen you've always wanted."
        primaryCTA={{
          text: "Schedule Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Design Gallery",
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
            "name": "Kitchen Design Consultation",
            "description": "Get expert kitchen design consultation from our professional designers. Space planning, material selection, and design guidance.",
            "provider": {
              "@type": "Organization",
              "name": "PineWood Cabinets",
              "url": "https://california-custom-kitchen.vercel.app"
            },
            "areaServed": {
              "@type": "State",
              "name": "California"
            },
            "serviceType": "Kitchen Design Consultation",
            "offers": {
              "@type": "Offer",
              "description": "Kitchen design consultation services starting at $500",
              "priceRange": "$500 - $2,500"
            }
          })
        }}
      />
    </>
  )
}
