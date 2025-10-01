import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens Pacific Heights | Luxury Cabinetry San Francisco | AV\'s Cabinets',
  description: 'Custom kitchens and luxury cabinetry for Pacific Heights\' most prestigious Victorian and Edwardian homes. AV\'s Cabinets brings European craftsmanship to San Francisco\'s elite.',
  keywords: 'custom kitchens Pacific Heights, luxury cabinetry San Francisco, Pacific Heights kitchen design, custom cabinets San Francisco, Victorian kitchen design',
  openGraph: {
    title: 'Custom Kitchens Pacific Heights | Luxury Cabinetry San Francisco | AV\'s Cabinets',
    description: 'Custom kitchens and luxury cabinetry for Pacific Heights\' most prestigious Victorian and Edwardian homes.',
    type: 'website',
  },
}

const localProjects = [
  {
    title: 'Victorian Mansion Kitchen',
    location: 'Pacific Heights, San Francisco',
    description: 'A stunning kitchen renovation in a historic Victorian mansion, featuring custom walnut cabinetry that honors the home\'s architectural heritage while modernizing functionality.',
    imageSrc: 'portfolio/pacific-heights-victorian-kitchen.webp',
    imageAlt: 'Custom walnut kitchen in Pacific Heights Victorian mansion',
    year: '2024'
  },
  {
    title: 'Edwardian Estate Kitchen',
    location: 'Pacific Heights, San Francisco',
    description: 'A sophisticated kitchen design for an Edwardian estate, featuring period-appropriate details and premium materials that complement the home\'s architectural style.',
    imageSrc: 'portfolio/pacific-heights-edwardian-kitchen.webp',
    imageAlt: 'Edwardian estate kitchen in Pacific Heights with period details',
    year: '2024'
  },
  {
    title: 'Modern Victorian Renovation',
    location: 'Pacific Heights, San Francisco',
    description: 'A contemporary kitchen renovation in a Victorian home, featuring modern cabinetry that respects the home\'s historic character while providing contemporary functionality.',
    imageSrc: 'portfolio/pacific-heights-modern-victorian-kitchen.webp',
    imageAlt: 'Modern Victorian kitchen renovation in Pacific Heights',
    year: '2023'
  }
]

const localArchitecture = [
  {
    style: 'Victorian',
    description: 'Pacific Heights\' iconic Victorian homes feature ornate details and rich materials. Our cabinetry complements these elements with hand-carved details, period-appropriate hardware, and rich wood finishes.',
    characteristics: ['Hand-carved details', 'Rich wood tones', 'Period hardware', 'Ornate moldings']
  },
  {
    style: 'Edwardian',
    description: 'Edwardian homes in Pacific Heights feature elegant proportions and refined details. Our cabinetry enhances these spaces with sophisticated designs and premium materials that honor the architectural style.',
    characteristics: ['Elegant proportions', 'Refined details', 'Premium materials', 'Sophisticated design']
  },
  {
    style: 'Contemporary',
    description: 'Contemporary Pacific Heights homes embrace modern design while respecting the neighborhood\'s architectural heritage. Our cabinetry integrates seamlessly with these spaces, offering clean lines and luxury finishes.',
    characteristics: ['Clean lines', 'Luxury finishes', 'Modern hardware', 'Integrated appliances']
  }
]

const localInsights = [
  {
    title: 'Historic Preservation',
    description: 'Many Pacific Heights homes are historic landmarks requiring careful preservation. We work with preservation guidelines to ensure our cabinetry respects the home\'s architectural integrity while modernizing functionality.',
    icon: '🏛️'
  },
  {
    title: 'Tech Industry',
    description: 'Many Pacific Heights residents work in the tech industry and require integrated technology solutions. We design cabinetry that seamlessly incorporates smart home systems and modern conveniences.',
    icon: '💻'
  },
  {
    title: 'Luxury Lifestyle',
    description: 'Pacific Heights residents expect the finest materials and finishes. We work exclusively with premium hardwoods, custom hardware, and luxury finishes that meet the highest standards.',
    icon: '💎'
  },
  {
    title: 'Entertainment Spaces',
    description: 'Many Pacific Heights homes feature formal entertaining areas that require specialized cabinetry for wine storage, bar areas, and serving solutions. We create integrated solutions for these spaces.',
    icon: '🍷'
  }
]

export default function PacificHeightsPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Custom Kitchens Pacific Heights
            </h1>
            <p className="text-xl md:text-2xl text-french-gray leading-relaxed mb-8">
              Serving Pacific Heights\' most prestigious Victorian and Edwardian homes with custom kitchens and luxury cabinetry that honors architectural heritage while providing modern functionality.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Historic Homes</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Victorian Architecture</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Tech Elite</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Preservation</span>
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
                Pacific Heights Expertise
              </h2>
              <div className="prose-luxury text-charcoal/80 mb-8">
                <p>
                  Pacific Heights represents the pinnacle of San Francisco\'s architectural heritage, with its stunning Victorian and Edwardian homes. Our custom cabinetry solutions are designed to honor this architectural legacy while providing the modern functionality that today\'s residents demand.
                </p>
                <p>
                  We understand the unique challenges of working with historic homes, from navigating preservation guidelines to integrating modern amenities while maintaining architectural integrity. Our designs respect the home\'s original character while providing the luxury and functionality our clients expect.
                </p>
                <p>
                  Our local knowledge extends to Pacific Heights\' diverse architectural styles, from ornate Victorian mansions to elegant Edwardian estates. We work closely with each client to ensure our cabinetry complements their home\'s unique character while meeting their specific lifestyle requirements.
                </p>
              </div>
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">22+ Years</h4>
                  <p className="text-sm text-charcoal/70">Serving Pacific Heights</p>
                </div>
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">90+ Projects</h4>
                  <p className="text-sm text-charcoal/70">Completed in Pacific Heights</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Historic Expertise</h4>
                  <p className="text-sm text-charcoal/70">Preservation guidelines</p>
                </div>
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Period Details</h4>
                  <p className="text-sm text-charcoal/70">Authentic craftsmanship</p>
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
              Pacific Heights Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our recent work in Pacific Heights, showcasing how we\'ve transformed kitchens and living spaces throughout the neighborhood\'s most prestigious historic homes.
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
              Pacific Heights Architecture
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Pacific Heights\' diverse architectural styles require specialized cabinetry solutions. We understand how to work with each style to create harmonious, functional spaces.
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
              Pacific Heights Insights
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Understanding the unique characteristics of Pacific Heights helps us create cabinetry solutions that truly serve our clients\' needs.
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
              Pacific Heights Neighborhoods
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We serve all of Pacific Heights\' prestigious neighborhoods, from the historic Fillmore District to the elegant Presidio Heights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Fillmore District',
              'Presidio Heights',
              'Lyon Street',
              'Broadway',
              'California Street',
              'Sacramento Street',
              'Jackson Street',
              'Washington Street'
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
              Pacific Heights FAQ
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Common questions about our services in Pacific Heights and the San Francisco area.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                Do you work with historic preservation guidelines?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Yes, we have extensive experience working with historic preservation guidelines in Pacific Heights. We work closely with preservation architects and city officials to ensure our designs comply with all requirements while modernizing functionality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                Can you integrate modern technology into historic homes?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Absolutely. We specialize in integrating modern technology seamlessly into historic homes, including smart home systems, hidden charging stations, and automated storage solutions that don\'t compromise the home\'s architectural integrity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                Do you work with tech industry clients?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Yes, we have extensive experience working with tech industry professionals in Pacific Heights. We understand the need for integrated technology solutions and flexible workspaces that support both work and lifestyle needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                What is the typical timeline for a Pacific Heights project?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Most Pacific Heights projects take 6-8 months from consultation to completion. This includes 2-3 months for design and planning, 3-4 months for fabrication, and 2-3 weeks for installation. We can work around busy schedules and tech industry timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Ready to Transform Your Pacific Heights Home?
          </h2>
          <p className="text-xl text-french-gray mb-12 max-w-3xl mx-auto">
            Let\'s discuss how we can create the perfect kitchen or cabinetry solution for your Pacific Heights home, combining historic preservation with modern luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-ivory text-deep-green px-8 py-4 rounded font-medium hover:bg-ivory/90 transition-colors">
              Schedule Pacific Heights Consultation
            </Link>
            <Link href="/portfolio" className="border border-ivory text-ivory px-8 py-4 rounded font-medium hover:bg-ivory hover:text-deep-green transition-colors">
              View Pacific Heights Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
