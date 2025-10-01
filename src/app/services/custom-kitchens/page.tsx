import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens | Luxury Kitchen Design | AV\'s Cabinets California',
  description: 'Custom kitchens designed for California\'s most discerning clientele. AV\'s Cabinets creates bespoke kitchen solutions with premium materials and master craftsmanship.',
  keywords: 'custom kitchens, luxury kitchen design, bespoke kitchen cabinetry, custom kitchen cabinets, kitchen renovation, premium kitchen design California',
  openGraph: {
    title: 'Custom Kitchens | Luxury Kitchen Design | AV\'s Cabinets California',
    description: 'Custom kitchens designed for California\'s most discerning clientele with premium materials and master craftsmanship.',
    type: 'website',
  },
}

const kitchenStyles = [
  {
    name: 'Modern Contemporary',
    description: 'Clean lines, minimalist design, and premium materials define our contemporary kitchens. Perfect for tech executives and design-forward clients who appreciate understated luxury.',
    features: ['Frameless construction', 'Hidden hardware', 'Integrated appliances', 'Premium finishes'],
    imageSrc: 'services/modern-contemporary-kitchen.jpg',
    imageAlt: 'Modern contemporary kitchen with clean lines and premium materials'
  },
  {
    name: 'Traditional Inset',
    description: 'Classic inset door construction with traditional joinery techniques. Our traditional kitchens honor timeless design principles while incorporating modern functionality and premium materials.',
    features: ['Inset door construction', 'Traditional joinery', 'Period-appropriate hardware', 'Hand-carved details'],
    imageSrc: 'services/traditional-inset-kitchen.jpg',
    imageAlt: 'Traditional inset kitchen with classic joinery and period details'
  },
  {
    name: 'Transitional',
    description: 'The perfect balance between traditional and contemporary design. Our transitional kitchens blend classic proportions with modern conveniences, creating spaces that feel both timeless and current.',
    features: ['Classic proportions', 'Modern conveniences', 'Mixed materials', 'Versatile design'],
    imageSrc: 'services/transitional-kitchen.jpg',
    imageAlt: 'Transitional kitchen blending traditional and contemporary elements'
  },
  {
    name: 'Mediterranean',
    description: 'Inspired by the coastal regions of the Mediterranean, our Mediterranean kitchens feature warm materials, rustic finishes, and open shelving that creates a welcoming, family-oriented atmosphere.',
    features: ['Warm wood tones', 'Rustic finishes', 'Open shelving', 'Natural materials'],
    imageSrc: 'services/mediterranean-kitchen.jpg',
    imageAlt: 'Mediterranean kitchen with warm wood tones and rustic finishes'
  }
]

const kitchenFeatures = [
  {
    title: 'Inset Door Construction',
    description: 'Our signature inset door construction creates a flush, seamless appearance that defines true luxury cabinetry. Each door and drawer front sits perfectly within the frame, requiring precise craftsmanship and attention to detail.',
    benefits: ['Seamless appearance', 'Premium aesthetic', 'Traditional craftsmanship', 'Durability']
  },
  {
    title: 'Soft-Close Hardware',
    description: 'All our kitchens feature premium soft-close hardware that ensures drawers and doors close silently and smoothly. This attention to detail enhances the daily experience of using your kitchen.',
    benefits: ['Silent operation', 'Smooth movement', 'Durability', 'Luxury feel']
  },
  {
    title: 'Grain-Matched Veneers',
    description: 'We carefully select and match wood grain patterns across doors, drawers, and fixed panels to create a continuous flow of natural beauty throughout your kitchen.',
    benefits: ['Visual continuity', 'Natural beauty', 'Premium appearance', 'Custom selection']
  },
  {
    title: 'Museum-Grade Finishing',
    description: 'Our finishing process involves multiple hand-applied coats of high-quality lacquers and oils, creating surfaces that are both beautiful and durable enough to withstand daily use.',
    benefits: ['Durability', 'Beauty', 'Easy maintenance', 'Long-lasting finish']
  },
  {
    title: 'Custom Sizing',
    description: 'Every cabinet is custom-sized to fit your specific space and needs. We work with your exact measurements to ensure perfect fit and maximum functionality.',
    benefits: ['Perfect fit', 'Maximum storage', 'Custom functionality', 'No wasted space']
  },
  {
    title: 'Integrated Appliances',
    description: 'We seamlessly integrate appliances into your cabinetry design, creating a cohesive look while maintaining full functionality and easy access.',
    benefits: ['Seamless design', 'Full functionality', 'Easy access', 'Cohesive appearance']
  }
]

const materials = [
  {
    name: 'Walnut',
    description: 'Rich, warm tones with distinctive grain patterns make walnut our most popular choice for luxury kitchens. Its natural beauty and durability make it perfect for both traditional and contemporary designs.',
    characteristics: ['Rich color', 'Distinctive grain', 'Durability', 'Versatility'],
    priceRange: 'Premium'
  },
  {
    name: 'Oak',
    description: 'Classic strength and timeless beauty define oak cabinetry. Available in both red and white varieties, oak provides excellent durability and a traditional aesthetic that never goes out of style.',
    characteristics: ['Classic appearance', 'Excellent durability', 'Traditional aesthetic', 'Timeless appeal'],
    priceRange: 'Premium'
  },
  {
    name: 'Cherry',
    description: 'Cherry wood deepens in color over time with exposure to light, creating a beautiful patina that enhances its natural beauty. Its smooth grain and rich color make it perfect for traditional and transitional designs.',
    characteristics: ['Color deepening', 'Smooth grain', 'Rich color', 'Natural patina'],
    priceRange: 'Premium'
  },
  {
    name: 'Mahogany',
    description: 'Luxurious mahogany offers exceptional beauty and durability. Its rich, reddish-brown color and fine grain make it perfect for formal kitchens and entertaining spaces.',
    characteristics: ['Luxurious appearance', 'Rich color', 'Fine grain', 'Exceptional durability'],
    priceRange: 'Premium'
  },
  {
    name: 'Teak',
    description: 'Natural oils in teak provide excellent weather resistance, making it perfect for kitchens with outdoor access or high humidity. Its golden color and tight grain create a sophisticated appearance.',
    characteristics: ['Weather resistance', 'Natural oils', 'Golden color', 'Tight grain'],
    priceRange: 'Premium'
  },
  {
    name: 'Maple',
    description: 'Light, clean appearance with subtle grain patterns makes maple perfect for contemporary and transitional kitchens. Its durability and versatility make it a popular choice for modern designs.',
    characteristics: ['Light appearance', 'Subtle grain', 'Durability', 'Versatility'],
    priceRange: 'Premium'
  }
]

const processSteps = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'We begin with a comprehensive consultation to understand your vision, lifestyle, and functional requirements. This includes discussing your cooking habits, entertaining needs, and aesthetic preferences.',
    duration: '2-3 hours',
    deliverables: ['Lifestyle assessment', 'Space analysis', 'Design preferences', 'Budget discussion']
  },
  {
    step: 2,
    title: 'Conceptual Design',
    description: 'Our design team creates initial concepts that integrate your vision with our expertise in proportion and functionality. We present multiple design options with detailed drawings and material samples.',
    duration: '2-3 weeks',
    deliverables: ['Design concepts', 'Space planning', 'Material samples', '3D renderings']
  },
  {
    step: 3,
    title: 'Design Development',
    description: 'We refine the chosen design with detailed drawings, material selections, and technical specifications. This phase includes finalizing all details and ensuring the design meets your exact requirements.',
    duration: '3-4 weeks',
    deliverables: ['Detailed drawings', 'Material selections', 'Hardware specifications', 'Final renderings']
  },
  {
    step: 4,
    title: 'Fabrication',
    description: 'Our master craftsmen hand-craft your kitchen using traditional techniques and premium materials. Each piece is carefully constructed to ensure the highest quality and attention to detail.',
    duration: '12-16 weeks',
    deliverables: ['Custom cabinetry', 'Quality control', 'Progress updates', 'Final inspection']
  },
  {
    step: 5,
    title: 'Installation',
    description: 'Our experienced installation team carefully installs your kitchen with precision and care. We ensure every detail is perfect and that the installation meets our exacting standards.',
    duration: '1-2 weeks',
    deliverables: ['Professional installation', 'Final adjustments', 'Quality inspection', 'Client walkthrough']
  },
  {
    step: 6,
    title: 'Final Walkthrough',
    description: 'We conduct a comprehensive walkthrough to ensure everything meets your expectations. We provide care instructions and maintenance tips to help you enjoy your new kitchen for years to come.',
    duration: '1-2 hours',
    deliverables: ['Final inspection', 'Care instructions', 'Warranty information', 'Maintenance tips']
  }
]

const testimonials = [
  {
    quote: "AV's Cabinets transformed our kitchen into a work of art. The attention to detail and craftsmanship is simply extraordinary. Every day, I'm reminded of the care that went into creating this space.",
    author: "Sarah Chen",
    location: "Atherton, CA",
    project: "Modern Contemporary Kitchen"
  },
  {
    quote: "The traditional inset construction and grain matching in our kitchen is absolutely stunning. It's exactly what we envisioned, and the quality exceeds our expectations.",
    author: "Michael Rodriguez",
    location: "Montecito, CA",
    project: "Traditional Inset Kitchen"
  },
  {
    quote: "Working with AV's Cabinets was a pleasure from start to finish. Their process is transparent, their craftsmanship is impeccable, and the final result exceeded our expectations.",
    author: "Jennifer Walsh",
    location: "Bel Air, CA",
    project: "Transitional Kitchen"
  }
]

export default function CustomKitchensPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Custom Kitchens
            </h1>
            <p className="text-xl md:text-2xl text-french-gray leading-relaxed mb-8">
              The heart of the home deserves nothing less than perfection. Our custom kitchens blend functionality with artistry, creating spaces that serve both daily rituals and grand entertaining.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Inset Construction</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Premium Materials</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Custom Sizing</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Museum-Grade Finishing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Styles */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Kitchen Styles
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From modern contemporary to traditional inset, we create kitchens that reflect your personal style while maintaining the highest standards of craftsmanship and functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {kitchenStyles.map((style, index) => (
              <div key={style.name} className="bg-white rounded-lg shadow-sm border border-french-gray/20 overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden bg-french-gray/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-ivory">
                      <h3 className="text-2xl font-semibold mb-2 font-display">{style.name}</h3>
                      <p className="text-sm opacity-90">Custom Design</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="font-display text-2xl font-semibold text-charcoal mb-4 group-hover:text-deep-green transition-colors duration-200">
                    {style.name}
                  </h3>
                  
                  <p className="text-charcoal/80 leading-relaxed mb-6">
                    {style.description}
                  </p>

                  <div className="space-y-2">
                    {style.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-charcoal/70">
                        <div className="w-1.5 h-1.5 bg-deep-green rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen Features */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Signature Features
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Every custom kitchen we create includes these signature features that define true luxury cabinetry and ensure exceptional quality and functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kitchenFeatures.map((feature, index) => (
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Premium Materials
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We work exclusively with the finest hardwoods and materials, each selected for its unique character, durability, and beauty. Every material tells a story and contributes to the overall aesthetic of your kitchen.
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
                <div className="space-y-2 mb-4">
                  {material.characteristics.map((characteristic, i) => (
                    <div key={i} className="flex items-center text-sm text-charcoal/70">
                      <div className="w-1.5 h-1.5 bg-deep-green rounded-full mr-2 flex-shrink-0" />
                      {characteristic}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-deep-green font-medium">
                  {material.priceRange} Range
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Our Process
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Every custom kitchen follows our rigorous six-phase process, ensuring unparalleled precision and a seamless client experience from initial consultation to final installation.
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Client Testimonials
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              The satisfaction of our clients is the ultimate measure of our success. Here's what they say about their custom kitchen experience.
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
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
            Ready to Create Your Dream Kitchen?
          </h2>
          <p className="text-xl text-charcoal/80 mb-12 max-w-3xl mx-auto">
            Let's discuss how we can bring your vision to life with the finest materials, traditional craftsmanship, and modern functionality.
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
