import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Paneling | Wall Paneling Design | AV\'s Cabinets California',
  description: 'Custom wall paneling for California\'s most prestigious homes. AV\'s Cabinets creates bespoke paneling including raised panels, wainscoting, and custom wall treatments.',
  keywords: 'custom paneling, wall paneling, raised panels, wainscoting, custom wall treatments, luxury paneling California',
  openGraph: {
    title: 'Custom Paneling | Wall Paneling Design | AV\'s Cabinets California',
    description: 'Custom wall paneling for California\'s most prestigious homes with master craftsmanship.',
    type: 'website',
  },
}

const panelingTypes = [
  {
    name: 'Raised Panels',
    description: 'Classic raised panel construction creates depth and dimension on your walls. Each panel is carefully crafted with traditional joinery techniques to create a timeless, elegant appearance that enhances any space.',
    features: ['Traditional joinery', 'Depth and dimension', 'Timeless elegance', 'Custom sizing'],
    applications: ['Dining rooms', 'Libraries', 'Studies', 'Master bedrooms'],
    imageSrc: 'services/raised-panels.webp',
    imageAlt: 'Custom raised panel wall treatment in luxury home'
  },
  {
    name: 'Flat Panels',
    description: 'Clean, contemporary flat panels provide a modern alternative to traditional raised panels. Perfect for contemporary homes or when you want a more minimalist approach to wall treatment.',
    features: ['Clean lines', 'Contemporary design', 'Minimalist approach', 'Versatile styling'],
    applications: ['Living rooms', 'Home offices', 'Contemporary spaces', 'Modern bedrooms'],
    imageSrc: 'services/flat-panels.webp',
    imageAlt: 'Modern flat panel wall treatment with clean lines'
  },
  {
    name: 'Beadboard',
    description: 'Traditional beadboard paneling adds character and charm to any space. Perfect for creating a cozy, cottage-like atmosphere or adding texture to contemporary designs.',
    features: ['Traditional charm', 'Textured appearance', 'Versatile styling', 'Easy maintenance'],
    applications: ['Powder rooms', 'Kitchens', 'Mudrooms', 'Cottage-style spaces'],
    imageSrc: 'services/beadboard-paneling.webp',
    imageAlt: 'Traditional beadboard paneling in powder room'
  },
  {
    name: 'Board and Batten',
    description: 'Rustic board and batten paneling creates a warm, inviting atmosphere. Perfect for creating a cozy, country-style feel or adding architectural interest to contemporary spaces.',
    features: ['Rustic charm', 'Warm atmosphere', 'Architectural interest', 'Versatile design'],
    applications: ['Family rooms', 'Mudrooms', 'Bedrooms', 'Country-style spaces'],
    imageSrc: 'services/board-batten-paneling.webp',
    imageAlt: 'Rustic board and batten paneling treatment'
  }
]

const panelingFeatures = [
  {
    title: 'Custom Sizing',
    description: 'Every panel is custom-sized to fit your specific space and requirements. We work with your exact measurements to ensure perfect fit and maximum visual impact.',
    benefits: ['Perfect fit', 'Custom proportions', 'Maximum impact', 'No wasted space']
  },
  {
    title: 'Premium Materials',
    description: 'We use only the finest hardwoods and materials for our paneling, ensuring that each piece will last for generations. Our material selection process considers both beauty and durability.',
    benefits: ['Durability', 'Beauty', 'Long-lasting', 'Premium quality']
  },
  {
    title: 'Traditional Joinery',
    description: 'Our paneling is constructed using traditional joinery techniques that ensure strength and durability. Each joint is carefully crafted to create a seamless, professional appearance.',
    benefits: ['Strength', 'Durability', 'Professional appearance', 'Traditional craftsmanship']
  },
  {
    title: 'Seamless Installation',
    description: 'Our experienced installation team ensures that every panel fits perfectly and creates seamless joints. We take pride in installation work that looks like it was always part of the original architecture.',
    benefits: ['Perfect fit', 'Seamless joints', 'Professional appearance', 'Long-lasting installation']
  },
  {
    title: 'Custom Profiles',
    description: 'We can create custom profiles and details that match your home\'s architectural style. Whether you\'re working with a Victorian, Craftsman, or contemporary home, we create paneling that fits perfectly.',
    benefits: ['Custom design', 'Architectural harmony', 'Unique character', 'Perfect match']
  },
  {
    title: 'Versatile Finishing',
    description: 'Our paneling can be finished in a variety of ways to match your design vision. From natural wood finishes to painted surfaces, we create the perfect look for your space.',
    benefits: ['Versatile options', 'Custom finishes', 'Design flexibility', 'Perfect match']
  }
]

const materials = [
  {
    name: 'Oak',
    description: 'Classic oak provides excellent durability and a traditional appearance that works well with most architectural styles. Its prominent grain and strength make it perfect for paneling applications.',
    characteristics: ['Excellent durability', 'Traditional appearance', 'Prominent grain', 'Structural strength'],
    bestFor: ['Raised panels', 'Wainscoting', 'Traditional spaces', 'High-traffic areas']
  },
  {
    name: 'Walnut',
    description: 'Rich walnut offers exceptional beauty and workability, making it perfect for detailed paneling. Its rich color and fine grain create a luxurious appearance that enhances any space.',
    characteristics: ['Rich color', 'Fine grain', 'Excellent workability', 'Luxurious appearance'],
    bestFor: ['Raised panels', 'Formal spaces', 'Luxury applications', 'Decorative elements']
  },
  {
    name: 'Cherry',
    description: 'Cherry wood provides a warm, elegant appearance that deepens in color over time. Its smooth grain and workability make it perfect for detailed paneling and decorative elements.',
    characteristics: ['Warm color', 'Smooth grain', 'Color deepening', 'Excellent workability'],
    bestFor: ['Raised panels', 'Wainscoting', 'Formal spaces', 'Decorative trim']
  },
  {
    name: 'Pine',
    description: 'Traditional pine provides a classic appearance and excellent workability for paneling. Its light color and straight grain make it perfect for painted paneling and traditional designs.',
    characteristics: ['Classic appearance', 'Light color', 'Straight grain', 'Excellent workability'],
    bestFor: ['Painted paneling', 'Traditional designs', 'Cottage-style spaces', 'Budget-conscious projects']
  },
  {
    name: 'Poplar',
    description: 'Versatile poplar offers excellent workability and a consistent appearance that works well for painted paneling. Its stability and ease of working make it perfect for detailed profiles.',
    characteristics: ['Excellent workability', 'Consistent appearance', 'Stability', 'Easy to work'],
    bestFor: ['Painted paneling', 'Detailed profiles', 'Contemporary spaces', 'Cost-effective solutions']
  },
  {
    name: 'Cedar',
    description: 'Aromatic cedar provides natural insect resistance and a pleasant scent. Its light color and straight grain make it perfect for closets, storage areas, and spaces where natural resistance is desired.',
    characteristics: ['Natural insect resistance', 'Pleasant scent', 'Light color', 'Straight grain'],
    bestFor: ['Closets', 'Storage areas', 'Cedar chests', 'Natural resistance needs']
  }
]

const processSteps = [
  {
    step: 1,
    title: 'Space Assessment',
    description: 'We begin with a comprehensive assessment of your space, including measurements, architectural style, and design preferences. This helps us understand your vision and create the perfect paneling solution.',
    duration: '1-2 days',
    deliverables: ['Space measurements', 'Style analysis', 'Design recommendations', 'Material options']
  },
  {
    step: 2,
    title: 'Design Development',
    description: 'Our design team creates detailed drawings and profiles that complement your space and architectural style. We present multiple design options with material samples and finish choices.',
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
    description: 'Our master craftsmen hand-craft each panel using traditional techniques and premium materials. Each piece is carefully constructed to ensure the highest quality and attention to detail.',
    duration: '6-10 weeks',
    deliverables: ['Hand-crafted panels', 'Quality control', 'Progress updates', 'Final inspection']
  },
  {
    step: 5,
    title: 'Installation',
    description: 'Our experienced installation team carefully installs your paneling with precision and care. We ensure every panel fits perfectly and creates seamless joints that look like original architecture.',
    duration: '1-2 weeks',
    deliverables: ['Professional installation', 'Seamless joints', 'Quality inspection', 'Final adjustments']
  },
  {
    step: 6,
    title: 'Finishing',
    description: 'We apply the final finishes to your paneling, ensuring a perfect match with your existing woodwork. This includes staining, sealing, and any necessary touch-ups.',
    duration: '3-5 days',
    deliverables: ['Final finishing', 'Color matching', 'Quality inspection', 'Care instructions']
  }
]

const testimonials = [
  {
    quote: "The raised panel treatment in our dining room is absolutely stunning. The traditional joinery and perfect installation make it look like it was always part of the original architecture.",
    author: "Margaret Williams",
    location: "Pacific Heights, San Francisco",
    project: "Raised Panel Dining Room"
  },
  {
    quote: "The beadboard paneling in our powder room adds so much character and charm. The quality and attention to detail is exactly what we expected from PineWood Cabinets.",
    author: "James Anderson",
    location: "Beverly Hills, CA",
    project: "Beadboard Powder Room"
  },
  {
    quote: "The board and batten treatment in our family room creates the perfect cozy atmosphere. The installation was flawless and the finish is beautiful.",
    author: "Sarah Davis",
    location: "Atherton, CA",
    project: "Board and Batten Family Room"
  }
]

export default function PanelingPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Custom Paneling
            </h1>
            <p className="text-xl md:text-2xl text-french-gray leading-relaxed mb-8">
              Transform your walls with custom paneling that adds character, warmth, and architectural interest to any space. From traditional raised panels to contemporary flat panels, we create wall treatments that enhance your home's beauty.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Raised Panels</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Custom Sizing</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Traditional Joinery</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Seamless Installation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Paneling Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Paneling Types
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our custom paneling services cover every style and application, from traditional raised panels to contemporary flat panels that enhance your home's architectural character.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {panelingTypes.map((type, index) => (
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

      {/* Paneling Features */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Signature Features
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Every piece of custom paneling we create includes these signature features that define true craftsmanship and ensure exceptional quality and durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {panelingFeatures.map((feature, index) => (
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
              We work exclusively with the finest hardwoods and materials for our custom paneling, each selected for its unique character, workability, and durability.
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
              Every custom paneling project follows our rigorous six-phase process, ensuring unparalleled precision and a seamless client experience from initial assessment to final finishing.
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
              The satisfaction of our clients is the ultimate measure of our success. Here's what they say about their custom paneling experience.
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
            Ready to Transform Your Walls?
          </h2>
          <p className="text-xl text-charcoal/80 mb-12 max-w-3xl mx-auto">
            Let's discuss how we can create custom paneling that adds character, warmth, and architectural interest to your spaces.
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
