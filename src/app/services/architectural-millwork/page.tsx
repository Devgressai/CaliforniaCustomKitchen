import { Metadata } from 'next'
import Link from 'next/link'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ServicePageLayout } from '@/components/PageLayout'
import { ServiceHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature, ProcessStep } from '@/components/ContentSection'
export const metadata: Metadata = {
  title: 'Architectural Millwork | Custom Woodwork | AV\'s Cabinets California',
  description: 'Custom architectural millwork for California\'s most prestigious homes. AV\'s Cabinets creates bespoke woodwork including coffered ceilings, moldings, and custom millwork.',
  keywords: 'architectural millwork, custom woodwork, coffered ceilings, crown molding, custom millwork, luxury millwork California',
  openGraph: {
    title: 'Architectural Millwork | Custom Woodwork | AV\'s Cabinets California',
    description: 'Custom architectural millwork for California\'s most prestigious homes with master craftsmanship.',
    type: 'website',
  },
}

const millworkTypes = [
  {
    name: 'Coffered Ceilings',
    description: 'Transform your ceilings into architectural masterpieces with our custom coffered ceiling designs. Each coffered ceiling is hand-crafted to complement your home\'s architectural style while adding dramatic visual impact.',
    features: ['Hand-carved details', 'Custom profiles', 'Seamless installation', 'Period-appropriate design'],
    applications: ['Dining rooms', 'Living rooms', 'Libraries', 'Master bedrooms'],
    imageSrc: 'services/coffered-ceilings.webp',
    imageAlt: 'Custom coffered ceiling with hand-carved details'
  },
  {
    name: 'Crown Molding',
    description: 'Add elegance and sophistication to any room with our custom crown molding designs. We create period-appropriate profiles that enhance your home\'s architectural character while providing a seamless, professional installation.',
    features: ['Period-appropriate profiles', 'Seamless joints', 'Custom sizing', 'Professional installation'],
    applications: ['Living rooms', 'Dining rooms', 'Bedrooms', 'Hallways'],
    imageSrc: 'services/crown-molding.webp',
    imageAlt: 'Custom crown molding installation in luxury home'
  },
  {
    name: 'Wainscoting',
    description: 'Protect your walls while adding architectural interest with our custom wainscoting designs. From traditional raised panels to contemporary flat panels, we create wainscoting that complements your home\'s style.',
    features: ['Custom panel designs', 'Premium materials', 'Seamless installation', 'Versatile styles'],
    applications: ['Dining rooms', 'Hallways', 'Powder rooms', 'Home offices'],
    imageSrc: 'services/wainscoting.webp',
    imageAlt: 'Custom wainscoting with raised panel design'
  },
  {
    name: 'Built-in Bookcases',
    description: 'Create the perfect library or study with our custom built-in bookcases. Each bookcase is designed to fit your specific space and style, providing both storage and display opportunities while enhancing your home\'s architecture.',
    features: ['Custom sizing', 'Integrated lighting', 'Adjustable shelves', 'Hidden storage'],
    applications: ['Libraries', 'Home offices', 'Living rooms', 'Studies'],
    imageSrc: 'services/built-in-bookcases.webp',
    imageAlt: 'Custom built-in bookcases with integrated lighting'
  }
]

const millworkFeatures = [
  {
    title: 'Hand-Carved Details',
    description: 'Our master craftsmen use traditional hand-carving techniques to create intricate details that add character and authenticity to your millwork. Each piece is unique and reflects the skill of the artisan who created it.',
    benefits: ['Unique character', 'Traditional craftsmanship', 'Authentic details', 'Artisan quality']
  },
  {
    title: 'Period-Accurate Profiles',
    description: 'We study historical architectural styles to ensure our millwork profiles are period-accurate and authentic. Whether you\'re working with a Victorian, Craftsman, or contemporary home, we create millwork that fits perfectly.',
    benefits: ['Historical accuracy', 'Authentic appearance', 'Period-appropriate design', 'Architectural integrity']
  },
  {
    title: 'Seamless Installation',
    description: 'Our experienced installation team ensures that every piece of millwork fits perfectly and creates seamless joints. We take pride in installation work that looks like it was always part of the original architecture.',
    benefits: ['Perfect fit', 'Seamless joints', 'Professional appearance', 'Long-lasting installation']
  },
  {
    title: 'Custom Sizing',
    description: 'Every piece of millwork is custom-sized to fit your specific space and requirements. We work with your exact measurements to ensure perfect fit and maximum visual impact.',
    benefits: ['Perfect fit', 'Custom proportions', 'Maximum impact', 'No wasted space']
  },
  {
    title: 'Premium Materials',
    description: 'We use only the finest hardwoods and materials for our millwork, ensuring that each piece will last for generations. Our material selection process considers both beauty and durability.',
    benefits: ['Durability', 'Beauty', 'Long-lasting', 'Premium quality']
  },
  {
    title: 'Restoration Expertise',
    description: 'Our team includes specialists in millwork restoration who can repair, refinish, or recreate damaged or missing millwork elements. We understand the importance of preserving architectural heritage.',
    benefits: ['Heritage preservation', 'Expert restoration', 'Historical accuracy', 'Long-term value']
  }
]

const materials = [
  {
    name: 'Oak',
    description: 'Classic oak provides excellent durability and a traditional appearance that works well with most architectural styles. Its prominent grain and strength make it perfect for structural millwork elements.',
    characteristics: ['Excellent durability', 'Traditional appearance', 'Prominent grain', 'Structural strength'],
    bestFor: ['Crown molding', 'Wainscoting', 'Built-ins', 'Restoration work']
  },
  {
    name: 'Walnut',
    description: 'Rich walnut offers exceptional beauty and workability, making it perfect for detailed millwork. Its rich color and fine grain create a luxurious appearance that enhances any space.',
    characteristics: ['Rich color', 'Fine grain', 'Excellent workability', 'Luxurious appearance'],
    bestFor: ['Coffered ceilings', 'Crown molding', 'Built-ins', 'Decorative elements']
  },
  {
    name: 'Cherry',
    description: 'Cherry wood provides a warm, elegant appearance that deepens in color over time. Its smooth grain and workability make it perfect for detailed millwork and decorative elements.',
    characteristics: ['Warm color', 'Smooth grain', 'Color deepening', 'Excellent workability'],
    bestFor: ['Crown molding', 'Wainscoting', 'Built-ins', 'Decorative trim']
  },
  {
    name: 'Mahogany',
    description: 'Luxurious mahogany offers exceptional beauty and durability for high-end millwork. Its rich, reddish-brown color and fine grain create a sophisticated appearance perfect for formal spaces.',
    characteristics: ['Luxurious appearance', 'Rich color', 'Fine grain', 'Exceptional durability'],
    bestFor: ['Coffered ceilings', 'Crown molding', 'Built-ins', 'Formal spaces']
  },
  {
    name: 'Pine',
    description: 'Traditional pine provides a classic appearance and excellent workability for millwork. Its light color and straight grain make it perfect for painted millwork and traditional designs.',
    characteristics: ['Classic appearance', 'Light color', 'Straight grain', 'Excellent workability'],
    bestFor: ['Painted millwork', 'Traditional designs', 'Crown molding', 'Wainscoting']
  },
  {
    name: 'Poplar',
    description: 'Versatile poplar offers excellent workability and a consistent appearance that works well for painted millwork. Its stability and ease of working make it perfect for detailed profiles and decorative elements.',
    characteristics: ['Excellent workability', 'Consistent appearance', 'Stability', 'Easy to work'],
    bestFor: ['Painted millwork', 'Detailed profiles', 'Decorative elements', 'Crown molding']
  }
]

const processSteps = [
  {
    step: 1,
    title: 'Architectural Assessment',
    description: 'We begin with a comprehensive assessment of your home\'s architectural style and existing millwork. This includes measuring spaces, identifying period details, and understanding your vision for the project.',
    duration: '1-2 days',
    deliverables: ['Space measurements', 'Style analysis', 'Existing millwork inventory', 'Design recommendations']
  },
  {
    step: 2,
    title: 'Design Development',
    description: 'Our design team creates detailed drawings and profiles that complement your home\'s architecture. We present multiple design options with material samples and finish choices.',
    duration: '2-3 weeks',
    deliverables: ['Detailed drawings', 'Profile samples', 'Material selections', '3D renderings']
  },
  {
    step: 3,
    title: 'Fabrication Planning',
    description: 'We develop a detailed fabrication plan that includes material ordering, tooling requirements, and production scheduling. This ensures efficient production and timely delivery.',
    duration: '1-2 weeks',
    deliverables: ['Fabrication plan', 'Material orders', 'Production schedule', 'Quality standards']
  },
  {
    step: 4,
    title: 'Hand-Crafting',
    description: 'Our master craftsmen hand-craft each piece of millwork using traditional techniques and premium materials. Each piece is carefully constructed to ensure the highest quality and attention to detail.',
    duration: '8-12 weeks',
    deliverables: ['Hand-crafted millwork', 'Quality control', 'Progress updates', 'Final inspection']
  },
  {
    step: 5,
    title: 'Installation',
    description: 'Our experienced installation team carefully installs your millwork with precision and care. We ensure every piece fits perfectly and creates seamless joints that look like original architecture.',
    duration: '1-2 weeks',
    deliverables: ['Professional installation', 'Seamless joints', 'Quality inspection', 'Final adjustments']
  },
  {
    step: 6,
    title: 'Finishing',
    description: 'We apply the final finishes to your millwork, ensuring a perfect match with your existing woodwork. This includes staining, sealing, and any necessary touch-ups.',
    duration: '3-5 days',
    deliverables: ['Final finishing', 'Color matching', 'Quality inspection', 'Care instructions']
  }
]

const testimonials = [
  {
    quote: "The coffered ceiling in our dining room is absolutely stunning. The hand-carved details and perfect installation make it look like it was always part of the original architecture.",
    author: "David Thompson",
    location: "Pacific Heights, San Francisco",
    project: "Coffered Ceiling"
  },
  {
    quote: "PineWood Cabinets restored the crown molding throughout our Victorian home to its original glory. Their attention to historical detail and craftsmanship is remarkable.",
    author: "Lisa Martinez",
    location: "Beverly Hills, CA",
    project: "Crown Molding Restoration"
  },
  {
    quote: "The built-in bookcases they created for our library are not only beautiful but incredibly functional. The integrated lighting and adjustable shelves make it perfect for our collection.",
    author: "Robert Chen",
    location: "Atherton, CA",
    project: "Built-in Bookcases"
  }
]

export default function ArchitecturalMillworkPage() {
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
              From coffered ceilings to intricate moldings, our architectural millwork transforms spaces into architectural statements worthy of the finest estates.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Hand-Carved Details</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Period-Accurate Profiles</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Seamless Installation</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Restoration Expertise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Millwork Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Premium Kitchen Design Services</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our architectural millwork services cover every aspect of custom woodwork, from structural elements to decorative details that enhance your home\'s architectural character.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {millworkTypes.map((type, index) => (
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

      {/* Millwork Features */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Premium Kitchen Design Services</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Every piece of architectural millwork we create includes these signature features that define true craftsmanship and ensure exceptional quality and authenticity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {millworkFeatures.map((feature, index) => (
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
              We work exclusively with the finest hardwoods and materials for our architectural millwork, each selected for its unique character, workability, and durability.
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
              Every architectural millwork project follows our rigorous six-phase process, ensuring unparalleled precision and a seamless client experience from initial assessment to final finishing.
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
              The satisfaction of our clients is the ultimate measure of our success. Here's what they say about their architectural millwork experience.
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
            Let's discuss how we can create custom architectural millwork that enhances your home's character and adds timeless beauty to your spaces.
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
