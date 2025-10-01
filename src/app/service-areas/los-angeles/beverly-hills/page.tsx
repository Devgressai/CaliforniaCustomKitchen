import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens Beverly Hills | Luxury Cabinetry Los Angeles | AV\'s Cabinets',
  description: 'Custom kitchens and luxury cabinetry for Beverly Hills\' most prestigious residents. AV\'s Cabinets brings European craftsmanship to Hollywood\'s elite.',
  keywords: 'custom kitchens Beverly Hills, luxury cabinetry Los Angeles, Beverly Hills kitchen design, custom cabinets Beverly Hills, high-end kitchens Beverly Hills',
  openGraph: {
    title: 'Custom Kitchens Beverly Hills | Luxury Cabinetry Los Angeles | AV\'s Cabinets',
    description: 'Custom kitchens and luxury cabinetry for Beverly Hills\' most prestigious residents.',
    type: 'website',
  },
}

const localProjects = [
  {
    title: 'Hollywood Executive Kitchen',
    location: 'Beverly Hills, CA',
    description: 'A stunning kitchen renovation for a major studio executive, featuring custom walnut cabinetry and integrated entertainment systems.',
    imageSrc: 'portfolio/beverly-hills-executive-kitchen.jpg',
    imageAlt: 'Luxury kitchen in Beverly Hills executive home',
    year: '2024'
  },
  {
    title: 'Entertainment Industry Chef\'s Kitchen',
    location: 'Beverly Hills, CA',
    description: 'Professional-grade kitchen designed for a celebrity chef, with commercial-quality appliances and custom storage solutions.',
    imageSrc: 'portfolio/beverly-hills-chef-kitchen.jpg',
    imageAlt: 'Professional chef\'s kitchen in Beverly Hills',
    year: '2024'
  },
  {
    title: 'Historic Estate Restoration',
    location: 'Beverly Hills, CA',
    description: 'Careful restoration of a 1920s Spanish Colonial Revival home, maintaining period authenticity while modernizing functionality.',
    imageSrc: 'portfolio/beverly-hills-historic-kitchen.jpg',
    imageAlt: 'Restored historic kitchen in Beverly Hills Spanish Colonial home',
    year: '2023'
  }
]

const localArchitecture = [
  {
    style: 'Spanish Colonial Revival',
    description: 'Beverly Hills\' iconic Spanish Colonial Revival homes feature ornate details and warm materials. Our cabinetry complements these elements with hand-carved details and rich wood finishes.',
    characteristics: ['Hand-carved details', 'Warm wood tones', 'Ornate hardware', 'Built-in seating']
  },
  {
    style: 'Modern Contemporary',
    description: 'Contemporary Beverly Hills homes embrace clean lines and luxury materials. Our cabinetry integrates seamlessly with these modern spaces, offering minimalist designs and premium finishes.',
    characteristics: ['Clean lines', 'Premium materials', 'Hidden storage', 'Smart home integration']
  },
  {
    style: 'Mediterranean',
    description: 'Mediterranean-style homes in Beverly Hills feature open floor plans and natural materials. Our cabinetry enhances these spaces with rustic elegance and functional design.',
    characteristics: ['Natural materials', 'Rustic finishes', 'Open shelving', 'Integrated appliances']
  }
]

const localInsights = [
  {
    title: 'Entertainment Industry',
    description: 'Many Beverly Hills residents work in entertainment and require spaces that can accommodate both intimate family meals and large-scale entertaining. We design flexible solutions for both needs.',
    icon: '🎬'
  },
  {
    title: 'Celebrity Privacy',
    description: 'Privacy and security are paramount for our Beverly Hills clients. We design cabinetry that can accommodate security systems and provide discreet storage for valuable items.',
    icon: '🔒'
  },
  {
    title: 'Luxury Lifestyle',
    description: 'Beverly Hills residents expect the finest materials and finishes. We work exclusively with premium hardwoods, custom hardware, and luxury finishes that meet the highest standards.',
    icon: '💎'
  },
  {
    title: 'Entertainment Spaces',
    description: 'Many Beverly Hills homes feature entertainment areas that require specialized cabinetry for wine storage, bar areas, and media equipment. We create integrated solutions for these spaces.',
    icon: '🍷'
  }
]

export default function BeverlyHillsPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Custom Kitchens Beverly Hills
            </h1>
            <p className="text-xl md:text-2xl text-french-gray leading-relaxed mb-8">
              Serving Beverly Hills\' most prestigious residents with custom kitchens and luxury cabinetry that reflects the city\'s unique blend of Hollywood glamour and architectural excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Hollywood Elite</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Luxury Lifestyle</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Entertainment Industry</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Historic Estates</span>
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
                Beverly Hills Expertise
              </h2>
              <div className="prose-luxury text-charcoal/80 mb-8">
                <p>
                  Beverly Hills represents the pinnacle of luxury living in Los Angeles. Our custom cabinetry solutions are designed to meet the exacting standards of this prestigious community, where every detail matters and quality is never compromised.
                </p>
                <p>
                  We understand the unique needs of Beverly Hills residents, from entertainment industry professionals requiring spaces for both intimate family meals and large-scale entertaining to historic estate owners seeking to preserve architectural integrity while modernizing functionality.
                </p>
                <p>
                  Our local knowledge extends to Beverly Hills\' diverse architectural styles, from iconic Spanish Colonial Revival homes to contemporary masterpieces. We work closely with each client to ensure our cabinetry complements their home\'s unique character while meeting their specific lifestyle requirements.
                </p>
              </div>
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">20+ Years</h4>
                  <p className="text-sm text-charcoal/70">Serving Beverly Hills</p>
                </div>
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">100+ Projects</h4>
                  <p className="text-sm text-charcoal/70">Completed in Beverly Hills</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Celebrity Clients</h4>
                  <p className="text-sm text-charcoal/70">Discrete, professional service</p>
                </div>
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Luxury Standards</h4>
                  <p className="text-sm text-charcoal/70">Highest quality materials</p>
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
              Beverly Hills Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our recent work in Beverly Hills, showcasing how we\'ve transformed kitchens and living spaces throughout the city\'s most prestigious neighborhoods.
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
              Beverly Hills Architecture
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Beverly Hills\' diverse architectural styles require specialized cabinetry solutions. We understand how to work with each style to create harmonious, functional spaces.
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
              Beverly Hills Insights
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Understanding the unique characteristics of Beverly Hills helps us create cabinetry solutions that truly serve our clients\' needs.
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
              Beverly Hills Neighborhoods
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We serve all of Beverly Hills\' prestigious neighborhoods, from the historic Flats to the exclusive Trousdale Estates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'The Flats',
              'Trousdale Estates',
              'Beverly Hills Post Office',
              'Beverly Hills Gateway',
              'Beverly Hills Triangle',
              'Beverly Hills Crest',
              'Beverly Hills Park',
              'Beverly Hills Heights'
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
              Beverly Hills FAQ
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Common questions about our services in Beverly Hills and the Los Angeles area.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                Do you work with celebrity clients?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Yes, we have extensive experience working with high-profile clients in Beverly Hills. We maintain strict confidentiality and provide discrete, professional service that respects our clients\' privacy needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                Can you work with historic Beverly Hills homes?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Absolutely. We have extensive experience working with historic homes throughout Beverly Hills, including Spanish Colonial Revival and Mediterranean styles. We understand the importance of maintaining architectural integrity while modernizing functionality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                Do you offer security features for high-value homes?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Yes, we can integrate security features into our cabinetry designs, including hidden safes, secure storage areas, and discreet access points for security systems. We work with your security team to ensure all requirements are met.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                What is the typical timeline for a Beverly Hills project?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Most Beverly Hills projects take 6-8 months from consultation to completion. This includes 2-3 months for design and planning, 3-4 months for fabrication, and 2-3 weeks for installation. We can work around busy schedules and entertainment industry timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Ready to Transform Your Beverly Hills Home?
          </h2>
          <p className="text-xl text-french-gray mb-12 max-w-3xl mx-auto">
            Let\'s discuss how we can create the perfect kitchen or cabinetry solution for your Beverly Hills home, combining traditional craftsmanship with modern luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-ivory text-deep-green px-8 py-4 rounded font-medium hover:bg-ivory/90 transition-colors">
              Schedule Beverly Hills Consultation
            </Link>
            <Link href="/portfolio" className="border border-ivory text-ivory px-8 py-4 rounded font-medium hover:bg-ivory hover:text-deep-green transition-colors">
              View Beverly Hills Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
