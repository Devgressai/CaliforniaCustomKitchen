import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens Palo Alto | Luxury Cabinetry Silicon Valley | AV\'s Cabinets',
  description: 'Custom kitchens and luxury cabinetry for Palo Alto\'s most discerning residents. AV\'s Cabinets brings European craftsmanship to Silicon Valley\'s tech elite.',
  keywords: 'custom kitchens Palo Alto, luxury cabinetry Silicon Valley, Palo Alto kitchen design, custom cabinets Palo Alto, high-end kitchens Palo Alto',
  openGraph: {
    title: 'Custom Kitchens Palo Alto | Luxury Cabinetry Silicon Valley | AV\'s Cabinets',
    description: 'Custom kitchens and luxury cabinetry for Palo Alto\'s most discerning residents.',
    type: 'website',
  },
}

const localProjects = [
  {
    title: 'Professor\'s Estate Kitchen',
    location: 'Professorville, Palo Alto',
    description: 'A sophisticated kitchen renovation for a Stanford professor, featuring custom walnut cabinetry and integrated smart home technology.',
    imageSrc: 'portfolio/palo-alto-professor-kitchen.webp',
    imageAlt: 'Custom walnut kitchen in Palo Alto professor\'s home',
    year: '2024'
  },
  {
    title: 'Tech Executive Modern Kitchen',
    location: 'Crescent Park, Palo Alto',
    description: 'Ultra-modern kitchen design with minimalist cabinetry and premium materials for a Silicon Valley tech executive.',
    imageSrc: 'portfolio/palo-alto-tech-kitchen.webp',
    imageAlt: 'Modern minimalist kitchen in Palo Alto tech executive home',
    year: '2024'
  },
  {
    title: 'Historic Home Restoration',
    location: 'Old Palo Alto',
    description: 'Careful restoration of period-appropriate cabinetry in a 1920s Craftsman home, maintaining architectural integrity.',
    imageSrc: 'portfolio/palo-alto-historic-kitchen.webp',
    imageAlt: 'Restored historic kitchen in Palo Alto Craftsman home',
    year: '2023'
  }
]

const localArchitecture = [
  {
    style: 'Mid-Century Modern',
    description: 'Palo Alto\'s Mid-Century Modern homes feature clean lines, large windows, and integration with nature. Our cabinetry complements these architectural elements with minimalist designs and premium materials.',
    characteristics: ['Clean geometric lines', 'Natural wood integration', 'Seamless indoor-outdoor flow', 'Built-in storage solutions']
  },
  {
    style: 'Craftsman',
    description: 'The Craftsman style emphasizes handcrafted details and natural materials. Our custom cabinetry honors this tradition with traditional joinery techniques and carefully selected hardwoods.',
    characteristics: ['Hand-carved details', 'Natural wood finishes', 'Built-in seating', 'Traditional hardware']
  },
  {
    style: 'Contemporary',
    description: 'Modern Palo Alto homes embrace contemporary design with open floor plans and high-tech amenities. Our cabinetry integrates seamlessly with smart home systems and modern appliances.',
    characteristics: ['Smart home integration', 'Hidden storage', 'Premium finishes', 'Custom sizing']
  }
]

const localInsights = [
  {
    title: 'Tech-Forward Design',
    description: 'Palo Alto residents often require integrated technology solutions, from hidden charging stations to smart home automation. We design cabinetry that seamlessly incorporates these modern conveniences.',
    icon: '💻'
  },
  {
    title: 'Academic Community',
    description: 'Many of our Palo Alto clients are academics and researchers who value quiet, contemplative spaces. We create kitchens that serve as both functional workspaces and peaceful retreats.',
    icon: '📚'
  },
  {
    title: 'Environmental Consciousness',
    description: 'Palo Alto\'s commitment to sustainability aligns with our eco-friendly practices. We source sustainable materials and use environmentally responsible finishing processes.',
    icon: '🌱'
  },
  {
    title: 'Multi-Generational Living',
    description: 'Many Palo Alto homes accommodate multiple generations. We design flexible cabinetry solutions that adapt to changing family needs and accessibility requirements.',
    icon: '👨‍👩‍👧‍👦'
  }
]

export default function PaloAltoPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Custom Kitchens Palo Alto
            </h1>
            <p className="text-xl md:text-2xl text-french-gray leading-relaxed mb-8">
              Serving Palo Alto's most discerning residents with custom kitchens and luxury cabinetry that reflects the city's unique blend of academic excellence and technological innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Silicon Valley</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Tech Elite</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Academic Community</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Sustainable Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Palo Alto Expertise
              </h2>
              <div className="prose-luxury text-charcoal/80 mb-8">
                <p>
                  Palo Alto represents the perfect intersection of academic tradition and technological innovation. Our custom cabinetry solutions honor both aspects of this unique community, creating kitchens that serve as both functional workspaces and elegant gathering spaces.
                </p>
                <p>
                  We understand the specific needs of Palo Alto residents, from Stanford faculty requiring quiet, contemplative spaces to tech executives needing integrated smart home solutions. Our designs seamlessly blend traditional craftsmanship with modern functionality.
                </p>
                <p>
                  Our local knowledge extends to Palo Alto's diverse architectural styles, from historic Craftsman homes to contemporary Mid-Century Modern residences. We work closely with each client to ensure our cabinetry complements their home's unique character while meeting their specific lifestyle requirements.
                </p>
              </div>
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">15+ Years</h4>
                  <p className="text-sm text-charcoal/70">Serving Palo Alto</p>
                </div>
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">50+ Projects</h4>
                  <p className="text-sm text-charcoal/70">Completed in Palo Alto</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Local Team</h4>
                  <p className="text-sm text-charcoal/70">Dedicated project managers</p>
                </div>
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Quick Response</h4>
                  <p className="text-sm text-charcoal/70">24-hour consultation booking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Projects */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Palo Alto Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our recent work in Palo Alto, showcasing how we've transformed kitchens and living spaces throughout the city's most prestigious neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localProjects.map((project, index) => (
              <article key={project.title} className="bg-white rounded-lg shadow-sm border border-french-gray/20 overflow-hidden group hover:shadow-lg transition-all duration-300">
                <Link href={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, '-')}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-french-gray/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-ivory">
                        <h3 className="text-xl font-semibold mb-2 font-display px-4">{project.title}</h3>
                        <p className="text-sm opacity-90">{project.location}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-charcoal/60">{project.year}</span>
                      <span className="text-sm text-deep-green font-medium">View Details →</span>
                    </div>
                    
                    <h3 className="font-display text-lg font-semibold text-charcoal mb-3 group-hover:text-deep-green transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-charcoal/80 leading-relaxed text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Local Architecture */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Palo Alto Architecture
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Palo Alto's diverse architectural styles require specialized cabinetry solutions. We understand how to work with each style to create harmonious, functional spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {localArchitecture.map((style, index) => (
              <div key={style.style} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-xl font-semibold text-charcoal mb-4 font-display">
                  {style.style}
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  {style.description}
                </p>
                <ul className="space-y-2">
                  {style.characteristics.map((characteristic, i) => (
                    <li key={i} className="flex items-center text-sm text-charcoal/70">
                      <div className="w-1.5 h-1.5 bg-deep-green rounded-full mr-2 flex-shrink-0" />
                      {characteristic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Insights */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Palo Alto Insights
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Understanding the unique characteristics of Palo Alto helps us create cabinetry solutions that truly serve our clients' needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localInsights.map((insight, index) => (
              <div key={insight.title} className="text-center">
                <div className="text-4xl mb-4">{insight.icon}</div>
                <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                  {insight.title}
                </h3>
                <p className="text-french-gray text-sm leading-relaxed">
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Palo Alto Neighborhoods
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We serve all of Palo Alto's prestigious neighborhoods, from historic Professorville to modern Crescent Park.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Professorville',
              'Crescent Park',
              'Old Palo Alto',
              'Downtown North',
              'Midtown',
              'Barron Park',
              'Palo Alto Hills',
              'Duveneck/St. Francis'
            ].map((neighborhood) => (
              <div key={neighborhood} className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20 text-center hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-charcoal mb-2">{neighborhood}</h3>
                <p className="text-sm text-charcoal/70">Custom cabinetry services</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Palo Alto FAQ
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Common questions about our services in Palo Alto and the Silicon Valley area.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                Do you work with Stanford faculty and staff?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Yes, we have extensive experience working with Stanford faculty and staff. We understand the unique needs of academic professionals, including the need for quiet, contemplative spaces and integrated technology solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                Can you integrate smart home technology into kitchen designs?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Absolutely. We specialize in integrating smart home technology seamlessly into our cabinetry designs, including hidden charging stations, smart lighting controls, and automated storage solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                Do you work with historic homes in Palo Alto?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Yes, we have extensive experience working with historic homes throughout Palo Alto. We understand the importance of maintaining architectural integrity while modernizing functionality, and we work closely with preservation guidelines.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                What is the typical timeline for a Palo Alto project?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Most Palo Alto projects take 6-8 months from consultation to completion. This includes 2-3 months for design and planning, 3-4 months for fabrication, and 2-3 weeks for installation. We can work around academic schedules and tech industry timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Ready to Transform Your Palo Alto Home?
          </h2>
          <p className="text-xl text-french-gray mb-12 max-w-3xl mx-auto">
            Let's discuss how we can create the perfect kitchen or cabinetry solution for your Palo Alto home, combining traditional craftsmanship with modern innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-ivory text-deep-green px-8 py-4 rounded font-medium hover:bg-ivory/90 transition-colors">
              Schedule Palo Alto Consultation
            </Link>
            <Link href="/portfolio" className="border border-ivory text-ivory px-8 py-4 rounded font-medium hover:bg-ivory hover:text-deep-green transition-colors">
              View Palo Alto Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
