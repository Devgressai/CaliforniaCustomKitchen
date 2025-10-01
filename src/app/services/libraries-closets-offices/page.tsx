import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Libraries, Closets & Offices | Custom Storage Solutions | AV\'s Cabinets California',
  description: 'Custom libraries, closets, and home offices for California\'s most prestigious homes. AV\'s Cabinets creates bespoke storage solutions with premium materials and master craftsmanship.',
  keywords: 'custom libraries, walk-in closets, home offices, built-in storage, custom storage solutions, luxury closets California',
  openGraph: {
    title: 'Libraries, Closets & Offices | Custom Storage Solutions | AV\'s Cabinets California',
    description: 'Custom libraries, closets, and home offices for California\'s most prestigious homes with premium materials and master craftsmanship.',
    type: 'website',
  },
}

const spaceTypes = [
  {
    name: 'Custom Libraries',
    description: 'Transform your home into a literary sanctuary with our custom library designs. From floor-to-ceiling built-in bookcases to cozy reading nooks, we create spaces that celebrate the written word.',
    features: ['Floor-to-ceiling shelving', 'Integrated lighting', 'Rolling ladders', 'Hidden storage'],
    applications: ['Home libraries', 'Studies', 'Reading rooms', 'Intellectual spaces'],
    imageSrc: 'services/custom-library-design.jpg',
    imageAlt: 'Custom library with floor-to-ceiling built-in bookcases'
  },
  {
    name: 'Walk-in Closets',
    description: 'Create the ultimate dressing experience with our custom walk-in closet designs. Every detail is designed to enhance your daily routine while providing organized storage for your wardrobe.',
    features: ['Custom organization', 'Integrated lighting', 'Island storage', 'Seating areas'],
    applications: ['Master bedrooms', 'Dressing rooms', 'Wardrobe storage', 'Luxury spaces'],
    imageSrc: 'services/walk-in-closet-design.jpg',
    imageAlt: 'Luxury walk-in closet with custom organization system'
  },
  {
    name: 'Home Offices',
    description: 'Design productive workspaces that inspire creativity and efficiency. Our custom home offices combine functionality with beauty, creating environments that support both work and well-being.',
    features: ['Built-in desks', 'File storage', 'Cable management', 'Ergonomic design'],
    applications: ['Home offices', 'Studies', 'Workspaces', 'Professional environments'],
    imageSrc: 'services/home-office-design.jpg',
    imageAlt: 'Custom home office with built-in desk and storage'
  },
  {
    name: 'Media Rooms',
    description: 'Create the ultimate entertainment experience with our custom media room designs. From hidden equipment storage to integrated seating, we design spaces that enhance your viewing experience.',
    features: ['Hidden equipment storage', 'Integrated seating', 'Acoustic considerations', 'Cable management'],
    applications: ['Media rooms', 'Home theaters', 'Entertainment spaces', 'Family rooms'],
    imageSrc: 'services/media-room-design.jpg',
    imageAlt: 'Custom media room with integrated storage and seating'
  }
]

const storageFeatures = [
  {
    title: 'Custom Organization',
    description: 'Every storage solution is designed around your specific needs and lifestyle. We create organization systems that work for you, not against you, making daily routines more efficient and enjoyable.',
    benefits: ['Personalized design', 'Efficient organization', 'Lifestyle integration', 'Daily convenience']
  },
  {
    title: 'Integrated Lighting',
    description: 'Proper lighting is essential for any storage space. We integrate LED lighting systems that provide both ambient and task lighting, enhancing both functionality and aesthetics.',
    benefits: ['Enhanced visibility', 'Energy efficiency', 'Ambient lighting', 'Task lighting']
  },
  {
    title: 'Hidden Storage',
    description: 'Maximize your space with hidden storage solutions that keep your belongings organized while maintaining a clean, uncluttered appearance. From secret compartments to pull-out systems.',
    benefits: ['Space maximization', 'Clean appearance', 'Secret storage', 'Pull-out systems']
  },
  {
    title: 'Cable Management',
    description: 'Keep your technology organized and accessible with integrated cable management systems. We design solutions that hide wires while maintaining easy access for maintenance and upgrades.',
    benefits: ['Clean appearance', 'Easy maintenance', 'Technology integration', 'Future-proofing']
  },
  {
    title: 'Ergonomic Design',
    description: 'Our storage solutions are designed with ergonomics in mind, ensuring that frequently used items are easily accessible and that the space supports healthy posture and movement.',
    benefits: ['Comfortable access', 'Healthy posture', 'Efficient movement', 'User-friendly design']
  },
  {
    title: 'Premium Materials',
    description: 'We use only the finest hardwoods and materials for our storage solutions, ensuring that each piece will last for generations while maintaining its beauty and functionality.',
    benefits: ['Durability', 'Beauty', 'Long-lasting', 'Premium quality']
  }
]

const materials = [
  {
    name: 'Walnut',
    description: 'Rich walnut offers exceptional beauty and workability for storage solutions. Its rich color and fine grain create a luxurious appearance that enhances any space.',
    characteristics: ['Rich color', 'Fine grain', 'Excellent workability', 'Luxurious appearance'],
    bestFor: ['Libraries', 'Home offices', 'Luxury applications', 'Formal spaces']
  },
  {
    name: 'Oak',
    description: 'Classic oak provides excellent durability and a traditional appearance that works well with most storage applications. Its strength and stability make it perfect for heavy-duty storage.',
    characteristics: ['Excellent durability', 'Traditional appearance', 'Structural strength', 'Stability'],
    bestFor: ['Libraries', 'Heavy-duty storage', 'Traditional design', 'High-traffic areas']
  },
  {
    name: 'Cherry',
    description: 'Cherry wood provides a warm, elegant appearance that deepens in color over time. Its smooth grain and workability make it perfect for detailed storage designs.',
    characteristics: ['Warm color', 'Smooth grain', 'Color deepening', 'Excellent workability'],
    bestFor: ['Libraries', 'Home offices', 'Warm aesthetics', 'Detailed designs']
  },
  {
    name: 'Maple',
    description: 'Light, clean appearance with subtle grain patterns makes maple perfect for contemporary and transitional storage solutions. Its durability and versatility make it a popular choice.',
    characteristics: ['Light appearance', 'Subtle grain', 'Durability', 'Versatility'],
    bestFor: ['Contemporary spaces', 'Light aesthetics', 'Modern design', 'Versatile styling']
  },
  {
    name: 'Pine',
    description: 'Traditional pine provides a classic appearance and excellent workability for storage solutions. Its light color and straight grain make it perfect for painted storage and traditional designs.',
    characteristics: ['Classic appearance', 'Light color', 'Straight grain', 'Excellent workability'],
    bestFor: ['Painted storage', 'Traditional design', 'Cottage style', 'Budget-conscious projects']
  },
  {
    name: 'Cedar',
    description: 'Aromatic cedar provides natural insect resistance and a pleasant scent that enhances storage areas. Its light color and straight grain make it perfect for closet applications.',
    characteristics: ['Natural insect resistance', 'Pleasant scent', 'Light color', 'Straight grain'],
    bestFor: ['Closets', 'Storage areas', 'Natural resistance', 'Aromatic benefits']
  }
]

const processSteps = [
  {
    step: 1,
    title: 'Space Assessment',
    description: 'We begin with a comprehensive assessment of your space, including measurements, usage patterns, and storage needs. This helps us understand your vision and create the perfect storage solution.',
    duration: '1-2 days',
    deliverables: ['Space measurements', 'Usage analysis', 'Storage requirements', 'Design recommendations']
  },
  {
    step: 2,
    title: 'Design Development',
    description: 'Our design team creates detailed plans for your storage solution, including organization systems, lighting, and any additional features. We present multiple design options with material samples.',
    duration: '2-3 weeks',
    deliverables: ['Detailed drawings', 'Organization systems', 'Material samples', '3D renderings']
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
    description: 'Our master craftsmen hand-craft your storage solution using traditional techniques and premium materials. Each piece is carefully constructed to ensure the highest quality and attention to detail.',
    duration: '6-10 weeks',
    deliverables: ['Hand-crafted storage', 'Quality control', 'Progress updates', 'Final inspection']
  },
  {
    step: 5,
    title: 'Installation',
    description: 'Our experienced installation team carefully installs your storage solution with precision and care. We ensure every piece fits perfectly and functions seamlessly.',
    duration: '1-2 weeks',
    deliverables: ['Professional installation', 'Seamless fit', 'Quality inspection', 'Final adjustments']
  },
  {
    step: 6,
    title: 'Final Setup',
    description: 'We complete the final setup of your storage solution, including lighting, hardware, and any additional features. We provide organization tips and maintenance instructions.',
    duration: '1-2 days',
    deliverables: ['Final setup', 'Lighting installation', 'Organization tips', 'Maintenance instructions']
  }
]

const testimonials = [
  {
    quote: "The library AV's Cabinets created for us is absolutely magnificent. The floor-to-ceiling bookcases and rolling ladder make it feel like a scene from a movie. It's our favorite room in the house.",
    author: "Dr. Margaret Thompson",
    location: "Pacific Heights, San Francisco",
    project: "Custom Library"
  },
  {
    quote: "The walk-in closet they designed is a dream come true. Every item has its place, and the organization system makes getting ready in the morning so much more enjoyable.",
    author: "Jennifer Martinez",
    location: "Beverly Hills, CA",
    project: "Walk-in Closet"
  },
  {
    quote: "The home office they created is perfect for my work-from-home needs. The built-in desk and storage solutions make it both functional and beautiful.",
    author: "Robert Chen",
    location: "Atherton, CA",
    project: "Home Office"
  }
]

export default function LibrariesClosetsOfficesPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Libraries, Closets & Offices
            </h1>
            <p className="text-xl md:text-2xl text-french-gray leading-relaxed mb-8">
              Create the ultimate storage and workspace solutions with our custom libraries, closets, and home offices. From floor-to-ceiling bookcases to organized walk-in closets, we design spaces that enhance your daily life.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Custom Organization</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Integrated Lighting</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Hidden Storage</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Premium Materials</span>
            </div>
          </div>
        </div>
      </section>

      {/* Space Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Space Types
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our custom storage solutions cover every aspect of home organization, from intellectual spaces to practical storage that enhances your daily routine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spaceTypes.map((type, index) => (
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

      {/* Storage Features */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Signature Features
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Every storage solution we create includes these signature features that ensure exceptional organization, functionality, and beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storageFeatures.map((feature, index) => (
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
              We work exclusively with the finest hardwoods and materials for our storage solutions, each selected for its unique character, durability, and suitability for specific applications.
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
              Every storage solution project follows our rigorous six-phase process, ensuring exceptional organization and a seamless client experience from initial assessment to final setup.
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
              The satisfaction of our clients is the ultimate measure of our success. Here's what they say about their storage solution experience.
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
            Ready to Organize Your Space?
          </h2>
          <p className="text-xl text-charcoal/80 mb-12 max-w-3xl mx-auto">
            Let's discuss how we can create the perfect storage solution that enhances your daily routine and brings order to your space.
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
