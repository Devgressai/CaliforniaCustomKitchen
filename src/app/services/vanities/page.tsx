import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Vanities | Bathroom Vanity Design | AV\'s Cabinets California',
  description: 'Custom bathroom vanities for California\'s most prestigious homes. AV\'s Cabinets creates bespoke vanities with premium materials and master craftsmanship.',
  keywords: 'custom vanities, bathroom vanities, luxury vanities, custom bathroom design, vanity cabinets California',
  openGraph: {
    title: 'Custom Vanities | Bathroom Vanity Design | AV\'s Cabinets California',
    description: 'Custom bathroom vanities for California\'s most prestigious homes with premium materials and master craftsmanship.',
    type: 'website',
  },
}

const vanityTypes = [
  {
    name: 'Master Bathroom Vanities',
    description: 'Luxurious master bathroom vanities designed for the most discerning clients. Each vanity is custom-crafted to provide both exceptional beauty and superior functionality in your private sanctuary.',
    features: ['Custom sizing', 'Premium materials', 'Integrated storage', 'Luxury finishes'],
    applications: ['Master bathrooms', 'Luxury homes', 'Primary suites', 'Spa-like spaces'],
    imageSrc: 'services/master-bathroom-vanity.webp',
    imageAlt: 'Luxurious master bathroom vanity with custom cabinetry'
  },
  {
    name: 'Guest Bathroom Vanities',
    description: 'Elegant guest bathroom vanities that make a lasting impression on your visitors. Designed to complement your home\'s style while providing practical storage and functionality.',
    features: ['Elegant design', 'Practical storage', 'Guest-friendly', 'Style coordination'],
    applications: ['Guest bathrooms', 'Powder rooms', 'Hall bathrooms', 'Entertaining spaces'],
    imageSrc: 'services/guest-bathroom-vanity.webp',
    imageAlt: 'Elegant guest bathroom vanity with practical storage'
  },
  {
    name: 'Double Vanities',
    description: 'Spacious double vanities designed for couples who value both personal space and shared functionality. Each side is custom-designed to meet individual needs while maintaining visual harmony.',
    features: ['Dual functionality', 'Personal space', 'Shared storage', 'Harmonious design'],
    applications: ['Master bathrooms', 'Couples\' spaces', 'Large bathrooms', 'Shared spaces'],
    imageSrc: 'services/double-vanity-bathroom.webp',
    imageAlt: 'Custom double vanity with dual functionality'
  },
  {
    name: 'Floating Vanities',
    description: 'Modern floating vanities that create a sense of space and contemporary elegance. Perfect for contemporary bathrooms where clean lines and minimalist design are desired.',
    features: ['Space-enhancing', 'Contemporary design', 'Easy cleaning', 'Modern aesthetic'],
    applications: ['Contemporary bathrooms', 'Small spaces', 'Modern homes', 'Minimalist design'],
    imageSrc: 'services/floating-vanity-bathroom.webp',
    imageAlt: 'Modern floating vanity with contemporary design'
  }
]

const vanityFeatures = [
  {
    title: 'Custom Sizing',
    description: 'Every vanity is custom-sized to fit your specific space and requirements. We work with your exact measurements to ensure perfect fit and maximum functionality.',
    benefits: ['Perfect fit', 'Maximum storage', 'Custom proportions', 'No wasted space']
  },
  {
    title: 'Premium Materials',
    description: 'We use only the finest hardwoods and materials for our vanities, ensuring that each piece will last for generations. Our material selection process considers both beauty and durability.',
    benefits: ['Durability', 'Beauty', 'Long-lasting', 'Premium quality']
  },
  {
    title: 'Integrated Storage',
    description: 'Smart storage solutions are integrated into every vanity design. From hidden compartments to organized drawers, we create storage that works for your specific needs.',
    benefits: ['Smart organization', 'Hidden storage', 'Easy access', 'Custom solutions']
  },
  {
    title: 'Soft-Close Hardware',
    description: 'All our vanities feature premium soft-close hardware that ensures drawers and doors close silently and smoothly. This attention to detail enhances the daily experience of using your vanity.',
    benefits: ['Silent operation', 'Smooth movement', 'Durability', 'Luxury feel']
  },
  {
    title: 'Moisture Resistance',
    description: 'Bathroom vanities require special consideration for moisture resistance. We use appropriate materials and finishes that withstand the humid bathroom environment.',
    benefits: ['Moisture resistance', 'Durability', 'Long-lasting finish', 'Bathroom-appropriate']
  },
  {
    title: 'Custom Finishes',
    description: 'Every vanity can be finished to match your design vision. From natural wood finishes to painted surfaces, we create the perfect look for your bathroom.',
    benefits: ['Custom appearance', 'Design flexibility', 'Perfect match', 'Versatile options']
  }
]

const materials = [
  {
    name: 'Walnut',
    description: 'Rich walnut offers exceptional beauty and workability for bathroom vanities. Its rich color and fine grain create a luxurious appearance that enhances any bathroom space.',
    characteristics: ['Rich color', 'Fine grain', 'Excellent workability', 'Luxurious appearance'],
    bestFor: ['Master bathrooms', 'Luxury applications', 'Formal spaces', 'Contemporary design']
  },
  {
    name: 'Oak',
    description: 'Classic oak provides excellent durability and a traditional appearance that works well with most bathroom styles. Its strength and stability make it perfect for bathroom applications.',
    characteristics: ['Excellent durability', 'Traditional appearance', 'Structural strength', 'Stability'],
    bestFor: ['Traditional bathrooms', 'High-traffic areas', 'Classic design', 'Durability needs']
  },
  {
    name: 'Cherry',
    description: 'Cherry wood provides a warm, elegant appearance that deepens in color over time. Its smooth grain and workability make it perfect for detailed vanity designs.',
    characteristics: ['Warm color', 'Smooth grain', 'Color deepening', 'Excellent workability'],
    bestFor: ['Traditional bathrooms', 'Warm aesthetics', 'Detailed designs', 'Elegant spaces']
  },
  {
    name: 'Maple',
    description: 'Light, clean appearance with subtle grain patterns makes maple perfect for contemporary and transitional bathroom vanities. Its durability and versatility make it a popular choice.',
    characteristics: ['Light appearance', 'Subtle grain', 'Durability', 'Versatility'],
    bestFor: ['Contemporary bathrooms', 'Light aesthetics', 'Modern design', 'Versatile styling']
  },
  {
    name: 'Pine',
    description: 'Traditional pine provides a classic appearance and excellent workability for painted vanities. Its light color and straight grain make it perfect for traditional and cottage-style bathrooms.',
    characteristics: ['Classic appearance', 'Light color', 'Straight grain', 'Excellent workability'],
    bestFor: ['Painted vanities', 'Traditional design', 'Cottage style', 'Budget-conscious projects']
  },
  {
    name: 'Teak',
    description: 'Natural oils in teak provide excellent moisture resistance, making it perfect for bathroom applications. Its golden color and tight grain create a sophisticated appearance.',
    characteristics: ['Moisture resistance', 'Natural oils', 'Golden color', 'Tight grain'],
    bestFor: ['High-moisture areas', 'Contemporary design', 'Natural resistance', 'Sophisticated look']
  }
]

const processSteps = [
  {
    step: 1,
    title: 'Bathroom Assessment',
    description: 'We begin with a comprehensive assessment of your bathroom space, including measurements, plumbing requirements, and design preferences. This helps us understand your vision and create the perfect vanity solution.',
    duration: '1-2 days',
    deliverables: ['Space measurements', 'Plumbing analysis', 'Design preferences', 'Material options']
  },
  {
    step: 2,
    title: 'Design Development',
    description: 'Our design team creates detailed plans for your vanity, including storage solutions, hardware selection, and finish choices. We present multiple design options with material samples.',
    duration: '2-3 weeks',
    deliverables: ['Detailed drawings', 'Storage solutions', 'Material samples', '3D renderings']
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
    description: 'Our master craftsmen hand-craft your vanity using traditional techniques and premium materials. Each piece is carefully constructed to ensure the highest quality and attention to detail.',
    duration: '4-6 weeks',
    deliverables: ['Hand-crafted vanity', 'Quality control', 'Progress updates', 'Final inspection']
  },
  {
    step: 5,
    title: 'Installation',
    description: 'Our experienced installation team carefully installs your vanity with precision and care. We ensure every piece fits perfectly and works seamlessly with your plumbing.',
    duration: '1-2 days',
    deliverables: ['Professional installation', 'Plumbing connection', 'Quality inspection', 'Final adjustments']
  },
  {
    step: 6,
    title: 'Final Setup',
    description: 'We complete the final setup of your vanity, including hardware installation and any necessary adjustments. We provide care instructions and maintenance tips.',
    duration: '1 day',
    deliverables: ['Final setup', 'Hardware installation', 'Care instructions', 'Warranty information']
  }
]

const testimonials = [
  {
    quote: "The master bathroom vanity AV's Cabinets created for us is absolutely stunning. The custom sizing and storage solutions make our morning routine so much more enjoyable.",
    author: "Lisa Rodriguez",
    location: "Beverly Hills, CA",
    project: "Master Bathroom Vanity"
  },
  {
    quote: "The floating vanity in our guest bathroom is perfect. It creates so much more space and the contemporary design is exactly what we wanted.",
    author: "Michael Chen",
    location: "Pacific Heights, San Francisco",
    project: "Floating Guest Vanity"
  },
  {
    quote: "The double vanity they designed for our master bathroom is perfect for our needs. Each side is customized for our individual preferences while maintaining a cohesive look.",
    author: "Sarah Williams",
    location: "Atherton, CA",
    project: "Double Master Vanity"
  }
]

export default function VanitiesPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Custom Vanities
            </h1>
            <p className="text-xl md:text-2xl text-french-gray leading-relaxed mb-8">
              Transform your bathroom with custom vanities that combine exceptional beauty with superior functionality. From master bathrooms to guest powder rooms, we create vanities that enhance your daily routine.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Custom Sizing</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Premium Materials</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Integrated Storage</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Moisture Resistance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vanity Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Vanity Types
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our custom vanity services cover every bathroom application, from luxurious master bathrooms to elegant guest powder rooms that make a lasting impression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vanityTypes.map((type, index) => (
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

      {/* Vanity Features */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Signature Features
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Every custom vanity we create includes these signature features that ensure exceptional beauty, functionality, and durability in your bathroom environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vanityFeatures.map((feature, index) => (
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
              We work exclusively with the finest hardwoods and materials for our custom vanities, each selected for its unique character, durability, and suitability for bathroom environments.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Our Process
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Every custom vanity project follows our rigorous six-phase process, ensuring exceptional quality and a seamless client experience from initial assessment to final installation.
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
              The satisfaction of our clients is the ultimate measure of our success. Here's what they say about their custom vanity experience.
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
            Ready to Transform Your Bathroom?
          </h2>
          <p className="text-xl text-charcoal/80 mb-12 max-w-3xl mx-auto">
            Let's discuss how we can create the perfect custom vanity that enhances your bathroom's beauty and functionality.
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
