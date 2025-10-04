import { Metadata } from 'next'
import Link from 'next/link'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ServicePageLayout } from '@/components/PageLayout'
import { ServiceHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature, ProcessStep } from '@/components/ContentSection'
export const metadata: Metadata = {
  title: 'Wine Rooms | Custom Wine Cellars | AV\'s Cabinets California',
  description: 'Custom wine rooms and cellars for California\'s most discerning collectors. AV\'s Cabinets creates bespoke wine storage solutions with climate control and premium materials.',
  keywords: 'wine rooms, custom wine cellars, wine storage, climate controlled wine rooms, luxury wine cellars California',
  openGraph: {
    title: 'Wine Rooms | Custom Wine Cellars | AV\'s Cabinets California',
    description: 'Custom wine rooms and cellars for California\'s most discerning collectors with climate control and premium materials.',
    type: 'website',
  },
}

const wineRoomTypes = [
  {
    name: 'Climate-Controlled Cellars',
    description: 'Professional-grade wine cellars with precise temperature and humidity control. Perfect for serious collectors who require optimal storage conditions for their valuable wine collections.',
    features: ['Precise climate control', 'Professional racking', 'Security systems', 'Display lighting'],
    applications: ['Serious collectors', 'Investment wines', 'Long-term storage', 'Professional collections'],
    imageSrc: 'services/climate-controlled-wine-cellar.webp',
    imageAlt: 'Climate-controlled wine cellar with professional racking system'
  },
  {
    name: 'Tasting Rooms',
    description: 'Elegant tasting rooms that combine storage with entertaining. Perfect for wine enthusiasts who want to showcase their collection while providing a sophisticated space for tastings and entertaining.',
    features: ['Integrated storage', 'Tasting areas', 'Display lighting', 'Entertaining space'],
    applications: ['Wine enthusiasts', 'Entertaining', 'Tastings', 'Social gatherings'],
    imageSrc: 'services/wine-tasting-room.webp',
    imageAlt: 'Elegant wine tasting room with integrated storage and seating'
  },
  {
    name: 'Wine Walls',
    description: 'Dramatic wine walls that serve as both storage and art. Perfect for contemporary homes where wine storage becomes a focal point and conversation piece.',
    features: ['Dramatic display', 'Space-efficient', 'Contemporary design', 'Focal point'],
    applications: ['Contemporary homes', 'Space efficiency', 'Artistic display', 'Modern design'],
    imageSrc: 'services/wine-wall-display.webp',
    imageAlt: 'Dramatic wine wall display in contemporary home'
  },
  {
    name: 'Wine Closets',
    description: 'Compact wine storage solutions that maximize space efficiency. Perfect for smaller collections or when space is limited, providing organized storage without taking up valuable square footage.',
    features: ['Space-efficient', 'Organized storage', 'Compact design', 'Easy access'],
    applications: ['Smaller collections', 'Limited space', 'Apartment living', 'Starter collections'],
    imageSrc: 'services/wine-closet-storage.webp',
    imageAlt: 'Compact wine closet with organized storage system'
  }
]

const wineRoomFeatures = [
  {
    title: 'Climate Control Systems',
    description: 'Professional-grade climate control systems maintain precise temperature and humidity levels essential for proper wine storage. Our systems are designed for reliability and energy efficiency.',
    benefits: ['Precise control', 'Energy efficient', 'Reliable operation', 'Professional grade']
  },
  {
    title: 'Custom Racking Systems',
    description: 'Hand-crafted racking systems designed specifically for your collection. Each rack is custom-sized and positioned to maximize storage capacity while providing easy access to your wines.',
    benefits: ['Custom sizing', 'Maximum storage', 'Easy access', 'Hand-crafted quality']
  },
  {
    title: 'Display Lighting',
    description: 'Specialized lighting systems that showcase your collection while protecting your wines from harmful UV rays. Our lighting enhances the beauty of your wines without compromising their quality.',
    benefits: ['UV protection', 'Enhanced display', 'Energy efficient', 'Custom design']
  },
  {
    title: 'Security Features',
    description: 'Integrated security systems protect your valuable collection. From locking mechanisms to alarm integration, we ensure your wines are secure while maintaining easy access for daily use.',
    benefits: ['Collection security', 'Easy access', 'Alarm integration', 'Peace of mind']
  },
  {
    title: 'Inventory Management',
    description: 'Built-in inventory management systems help you track your collection. From simple labeling systems to digital inventory management, we create solutions that work for your needs.',
    benefits: ['Collection tracking', 'Easy organization', 'Digital options', 'Custom solutions']
  },
  {
    title: 'Tasting Areas',
    description: 'Integrated tasting areas provide the perfect space for enjoying your wines. From simple counter spaces to full tasting rooms, we create spaces that enhance your wine experience.',
    benefits: ['Integrated design', 'Entertaining space', 'Custom sizing', 'Luxury experience']
  }
]

const materials = [
  {
    name: 'Redwood',
    description: 'Traditional redwood provides excellent stability and resistance to moisture, making it perfect for wine storage applications. Its natural beauty and durability make it a popular choice for wine cellars.',
    characteristics: ['Moisture resistance', 'Natural beauty', 'Excellent stability', 'Traditional choice'],
    bestFor: ['Wine racking', 'Cellar construction', 'Traditional cellars', 'Moisture resistance']
  },
  {
    name: 'Cedar',
    description: 'Aromatic cedar provides natural insect resistance and a pleasant scent that enhances the wine storage experience. Its light color and straight grain make it perfect for wine storage applications.',
    characteristics: ['Natural insect resistance', 'Pleasant scent', 'Light color', 'Straight grain'],
    bestFor: ['Wine racking', 'Closet storage', 'Aromatic benefits', 'Natural resistance']
  },
  {
    name: 'Mahogany',
    description: 'Luxurious mahogany offers exceptional beauty and durability for high-end wine storage. Its rich color and fine grain create a sophisticated appearance perfect for premium wine cellars.',
    characteristics: ['Luxurious appearance', 'Rich color', 'Fine grain', 'Exceptional durability'],
    bestFor: ['Premium cellars', 'Display areas', 'Luxury applications', 'Formal spaces']
  },
  {
    name: 'Oak',
    description: 'Classic oak provides excellent durability and a traditional appearance that works well with most wine storage applications. Its strength and stability make it perfect for structural elements.',
    characteristics: ['Excellent durability', 'Traditional appearance', 'Structural strength', 'Stability'],
    bestFor: ['Structural elements', 'Traditional cellars', 'Heavy-duty applications', 'Classic design']
  },
  {
    name: 'Walnut',
    description: 'Rich walnut offers exceptional beauty and workability for detailed wine storage elements. Its rich color and fine grain create a luxurious appearance that enhances any wine room.',
    characteristics: ['Rich color', 'Fine grain', 'Excellent workability', 'Luxurious appearance'],
    bestFor: ['Display elements', 'Tasting areas', 'Luxury applications', 'Decorative details']
  },
  {
    name: 'Stainless Steel',
    description: 'Modern stainless steel provides a contemporary look and excellent durability for wine storage applications. Its clean lines and resistance to corrosion make it perfect for modern wine rooms.',
    characteristics: ['Contemporary look', 'Corrosion resistance', 'Clean lines', 'Modern design'],
    bestFor: ['Modern wine rooms', 'Contemporary design', 'Durability', 'Clean aesthetics']
  }
]

const processSteps = [
  {
    step: 1,
    title: 'Collection Assessment',
    description: 'We begin with a comprehensive assessment of your wine collection, including bottle counts, storage requirements, and future growth plans. This helps us design the perfect storage solution.',
    duration: '1-2 days',
    deliverables: ['Collection inventory', 'Storage requirements', 'Growth projections', 'Design recommendations']
  },
  {
    step: 2,
    title: 'Climate Analysis',
    description: 'We analyze your space\'s climate conditions and requirements to determine the best climate control solution. This includes temperature, humidity, and ventilation considerations.',
    duration: '1-2 weeks',
    deliverables: ['Climate analysis', 'System specifications', 'Energy requirements', 'Installation plan']
  },
  {
    step: 3,
    title: 'Design Development',
    description: 'Our design team creates detailed plans for your wine room, including racking systems, climate control, lighting, and any additional features. We present multiple design options with material samples.',
    duration: '2-3 weeks',
    deliverables: ['Detailed drawings', 'Racking designs', 'Material samples', '3D renderings']
  },
  {
    step: 4,
    title: 'System Installation',
    description: 'We install the climate control system and prepare the space for your wine room. This includes electrical work, plumbing, and any necessary structural modifications.',
    duration: '2-3 weeks',
    deliverables: ['Climate control system', 'Electrical work', 'Plumbing', 'Space preparation']
  },
  {
    step: 5,
    title: 'Racking Installation',
    description: 'Our experienced team installs your custom racking system with precision and care. Each rack is positioned for optimal storage and easy access to your collection.',
    duration: '1-2 weeks',
    deliverables: ['Custom racking', 'Professional installation', 'Quality inspection', 'Final adjustments']
  },
  {
    step: 6,
    title: 'Final Setup',
    description: 'We complete the final setup of your wine room, including lighting, security systems, and any additional features. We provide training on climate control and maintenance.',
    duration: '3-5 days',
    deliverables: ['Final setup', 'System training', 'Maintenance instructions', 'Warranty information']
  }
]

const testimonials = [
  {
    quote: "The wine cellar PineWood Cabinets created for us is absolutely perfect. The climate control is precise, the racking is beautiful, and our collection has never been better organized.",
    author: "Robert Martinez",
    location: "Napa Valley, CA",
    project: "Climate-Controlled Wine Cellar"
  },
  {
    quote: "The tasting room they designed is the perfect space for entertaining. The integrated storage and seating area make it easy to enjoy our wines with friends and family.",
    author: "Jennifer Thompson",
    location: "Beverly Hills, CA",
    project: "Wine Tasting Room"
  },
  {
    quote: "The wine wall in our living room is a true conversation piece. It's not just storage - it's art. The lighting and design make our collection the focal point of the room.",
    author: "David Chen",
    location: "Pacific Heights, San Francisco",
    project: "Wine Wall Display"
  }
]

export default function WineRoomsPage() {
  return (
    
      <!-- SEO-Optimized Heading Structure -->
      <div className="heading-structure" style="display: none;">
        <h1>Custom Kitchens California | Luxury Kitchen Design</h1>
        <h2>Premium Kitchen Design Services</h2><h2>Luxury Kitchen Styles & Materials</h2><h2>Custom Kitchen Features & Benefits</h2><h2>Why Choose Our Custom Kitchens</h2><h2>Kitchen Design Process</h2><h2>Frequently Asked Questions</h2>
        <h3>Modern Contemporary Kitchens</h3><h3>Traditional Inset Kitchens</h3><h3>Transitional Kitchen Design</h3><h3>Mediterranean Kitchen Style</h3><h3>Premium Materials Selection</h3><h3>Custom Features & Hardware</h3>
      </div>
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">Custom Kitchens California | Luxury Kitchen Design</h1>
            <p className="text-xl md:text-2xl text-french-gray leading-relaxed mb-8">
              Create the ultimate wine storage solution with our custom wine rooms and cellars. From climate-controlled cellars to elegant tasting rooms, we design spaces that protect and showcase your collection.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Climate Control</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Custom Racking</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Display Lighting</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Security Features</span>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Room Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Premium Kitchen Design Services</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From climate-controlled cellars to elegant tasting rooms, we create wine storage solutions that meet your specific needs and enhance your wine experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wineRoomTypes.map((type, index) => (
              <div key={type.name} className="bg-white rounded-lg shadow-sm border border-french-gray/20 overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden bg-french-gray/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-ivory">
                      <h3 className="text-2xl font-semibold mb-2 font-display">{type.name}</h3>
                      <p className="text-sm opacity-90">Custom Design</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="font-display text-2xl font-semibold text-charcoal mb-4 group-hover:text-deep-green transition-colors duration-200">
                    {type.name}
                  </h3>
                  
                  <p className="text-charcoal/80 leading-relaxed mb-6">
                    {type.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Features</h4>
                      <ul className="space-y-1">
                        {type.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-charcoal/70">
                            <div className="w-1.5 h-1.5 bg-deep-green rounded-full mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Applications</h4>
                      <ul className="space-y-1">
                        {type.applications.map((application, i) => (
                          <li key={i} className="flex items-center text-sm text-charcoal/70">
                            <div className="w-1.5 h-1.5 bg-deep-green rounded-full mr-2 flex-shrink-0" />
                            {application}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wine Room Features */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Premium Kitchen Design Services</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Every wine room we create includes these signature features that ensure optimal storage conditions and enhance your wine experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wineRoomFeatures.map((feature, index) => (
              <div key={feature.title} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-xl font-semibold text-charcoal mb-4 font-display">
                  {feature.title}
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-charcoal/70">
                      <div className="w-1.5 h-1.5 bg-deep-green rounded-full mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Premium Kitchen Design Services</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We work exclusively with the finest materials for our wine rooms, each selected for its unique properties and suitability for wine storage applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <div key={material.name} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-xl font-semibold text-charcoal mb-4 font-display">
                  {material.name}
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  {material.description}
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Characteristics</h4>
                    <ul className="space-y-1">
                      {material.characteristics.map((characteristic, i) => (
                        <li key={i} className="flex items-center text-sm text-charcoal/70">
                          <div className="w-1.5 h-1.5 bg-deep-green rounded-full mr-2 flex-shrink-0" />
                          {characteristic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">Best For</h4>
                    <ul className="space-y-1">
                      {material.bestFor.map((use, i) => (
                        <li key={i} className="flex items-center text-sm text-charcoal/70">
                          <div className="w-1.5 h-1.5 bg-deep-green rounded-full mr-2 flex-shrink-0" />
                          {use}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Premium Kitchen Design Services</h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Every wine room project follows our rigorous six-phase process, ensuring optimal storage conditions and a seamless client experience from initial assessment to final setup.
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={step.step} className="flex items-start space-x-8">
                <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center text-ivory text-2xl font-bold flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-ivory mb-4 font-display">
                    {step.title}
                  </h3>
                  <p className="text-french-gray leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-ivory mb-2">Duration</h4>
                      <p className="text-french-gray text-sm">{step.duration}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-ivory mb-2">Deliverables</h4>
                      <ul className="text-french-gray text-sm space-y-1">
                        {step.deliverables.map((deliverable, i) => (
                          <li key={i}>• {deliverable}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Premium Kitchen Design Services</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              The satisfaction of our clients is the ultimate measure of our success. Here's what they say about their wine room experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <p className="text-charcoal/80 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-french-gray/20 pt-4">
                  <h4 className="font-semibold text-charcoal mb-1">{testimonial.author}</h4>
                  <p className="text-sm text-charcoal/60 mb-1">{testimonial.location}</p>
                  <p className="text-sm text-deep-green font-medium">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Premium Kitchen Design Services</h2>
          <p className="text-xl text-charcoal/80 mb-12 max-w-3xl mx-auto">
            Let's discuss how we can create the perfect wine storage solution that protects and showcases your collection while enhancing your wine experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Request a Consultation
            </Link>
            <Link href="/portfolio" className="btn-ghost">
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
