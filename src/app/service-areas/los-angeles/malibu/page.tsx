import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens Malibu | Luxury Cabinetry Beach Homes | AV\'s Cabinets',
  description: 'Custom kitchens and luxury cabinetry for Malibu\'s beachfront estates. AV\'s Cabinets brings coastal luxury design to California\'s most exclusive beach community.',
  keywords: 'custom kitchens Malibu, luxury cabinetry Malibu, beach home kitchen design, custom cabinets Malibu, coastal kitchen design',
  openGraph: {
    title: 'Custom Kitchens Malibu | Luxury Cabinetry Beach Homes | AV\'s Cabinets',
    description: 'Custom kitchens and luxury cabinetry for Malibu\'s beachfront estates.',
    type: 'website',
  },
}

const localProjects = [
  {
    title: 'Beachfront Estate Kitchen',
    location: 'Malibu, CA',
    description: 'A stunning ocean-view kitchen featuring teak cabinetry and marine-grade hardware, designed to withstand coastal conditions while maintaining luxury aesthetics.',
    imageSrc: 'portfolio/malibu-beachfront-kitchen.webp',
    imageAlt: 'Ocean-view kitchen with teak cabinetry in Malibu beachfront estate',
    year: '2024'
  },
  {
    title: 'Celebrity Beach House',
    location: 'Malibu, CA',
    description: 'A sophisticated kitchen renovation for a Hollywood celebrity, featuring custom walnut cabinetry and integrated entertainment systems with ocean views.',
    imageSrc: 'portfolio/malibu-celebrity-kitchen.webp',
    imageAlt: 'Celebrity beach house kitchen in Malibu with ocean views',
    year: '2024'
  },
  {
    title: 'Modern Cliffside Home',
    location: 'Malibu, CA',
    description: 'Contemporary kitchen design for a modern cliffside home, featuring minimalist cabinetry and premium materials that complement the dramatic ocean setting.',
    imageSrc: 'portfolio/malibu-cliffside-kitchen.webp',
    imageAlt: 'Modern cliffside kitchen in Malibu with minimalist design',
    year: '2023'
  }
]

const localArchitecture = [
  {
    style: 'Modern Coastal',
    description: 'Malibu\'s modern coastal homes feature clean lines and natural materials that complement the ocean setting. Our cabinetry enhances these spaces with minimalist designs and weather-resistant finishes.',
    characteristics: ['Clean lines', 'Natural materials', 'Weather resistance', 'Ocean views']
  },
  {
    style: 'Mediterranean Revival',
    description: 'Mediterranean Revival homes in Malibu embrace the coastal lifestyle with open floor plans and natural materials. Our cabinetry complements these spaces with rustic elegance and functional design.',
    characteristics: ['Rustic finishes', 'Natural wood', 'Open shelving', 'Integrated appliances']
  },
  {
    style: 'Contemporary',
    description: 'Contemporary Malibu homes feature dramatic architecture and premium materials. Our cabinetry integrates seamlessly with these modern spaces, offering minimalist designs and luxury finishes.',
    characteristics: ['Minimalist design', 'Premium materials', 'Hidden storage', 'Smart home integration']
  }
]

const localInsights = [
  {
    title: 'Coastal Environment',
    description: 'Malibu\'s coastal environment requires special consideration for salt air, humidity, and temperature fluctuations. We use marine-grade materials and finishes that withstand these conditions.',
    icon: '🌊'
  },
  {
    title: 'Entertainment Focus',
    description: 'Many Malibu homes are designed for entertaining, with open floor plans and integrated indoor-outdoor living. We create cabinetry that supports this lifestyle with flexible storage and serving solutions.',
    icon: '🍽️'
  },
  {
    title: 'Celebrity Privacy',
    description: 'Privacy and security are paramount for our Malibu clients. We design cabinetry that can accommodate security systems and provide discreet storage for valuable items.',
    icon: '🔒'
  },
  {
    title: 'Luxury Lifestyle',
    description: 'Malibu residents expect the finest materials and finishes. We work exclusively with premium hardwoods, custom hardware, and luxury finishes that meet the highest standards.',
    icon: '💎'
  }
]

export default function MalibuPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Custom Kitchens Malibu
            </h1>
            <p className="text-xl md:text-2xl text-french-gray leading-relaxed mb-8">
              Serving Malibu\'s most prestigious beachfront estates with custom kitchens and luxury cabinetry that embraces the coastal lifestyle while maintaining the highest standards of craftsmanship.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Beachfront Estates</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Coastal Luxury</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Ocean Views</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Marine Grade</span>
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
                Malibu Expertise
              </h2>
              <div className="prose-luxury text-charcoal/80 mb-8">
                <p>
                  Malibu represents the pinnacle of coastal luxury living in California. Our custom cabinetry solutions are designed to meet the unique challenges of beachfront living while maintaining the highest standards of luxury and functionality.
                </p>
                <p>
                  We understand the specific needs of Malibu residents, from the corrosive effects of salt air to the desire for seamless indoor-outdoor living. Our designs incorporate marine-grade materials and finishes that withstand coastal conditions while providing the luxury experience our clients expect.
                </p>
                <p>
                  Our local knowledge extends to Malibu\'s diverse architectural styles, from modern coastal homes to Mediterranean Revival estates. We work closely with each client to ensure our cabinetry complements their home\'s unique character while meeting their specific lifestyle requirements.
                </p>
              </div>
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">18+ Years</h4>
                  <p className="text-sm text-charcoal/70">Serving Malibu</p>
                </div>
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">75+ Projects</h4>
                  <p className="text-sm text-charcoal/70">Completed in Malibu</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Marine Grade</h4>
                  <p className="text-sm text-charcoal/70">Weather-resistant materials</p>
                </div>
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Coastal Design</h4>
                  <p className="text-sm text-charcoal/70">Ocean-inspired aesthetics</p>
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
              Malibu Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our recent work in Malibu, showcasing how we\'ve transformed kitchens and living spaces throughout the city\'s most prestigious beachfront neighborhoods.
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
              Malibu Architecture
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Malibu\'s diverse architectural styles require specialized cabinetry solutions. We understand how to work with each style to create harmonious, functional spaces.
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
              Malibu Insights
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Understanding the unique characteristics of Malibu helps us create cabinetry solutions that truly serve our clients\' needs.
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
              Malibu Neighborhoods
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We serve all of Malibu\'s prestigious neighborhoods, from the exclusive Carbon Beach to the serene Point Dume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Carbon Beach',
              'Point Dume',
              'Malibu Colony',
              'Broad Beach',
              'Zuma Beach',
              'Paradise Cove',
              'Malibu West',
              'Malibu Knolls'
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
              Malibu FAQ
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Common questions about our services in Malibu and the coastal area.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                How do you handle salt air and humidity in Malibu?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                We use marine-grade materials and finishes specifically designed for coastal environments. This includes stainless steel hardware, moisture-resistant finishes, and materials that won\'t corrode or warp in salt air conditions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                Can you design for indoor-outdoor living?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Absolutely. Many Malibu homes feature seamless indoor-outdoor living. We design cabinetry that works with these spaces, including weather-resistant outdoor kitchen components and storage solutions that support entertaining.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                Do you work with celebrity clients in Malibu?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Yes, we have extensive experience working with high-profile clients in Malibu. We maintain strict confidentiality and provide discrete, professional service that respects our clients\' privacy needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                What is the typical timeline for a Malibu project?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Most Malibu projects take 6-8 months from consultation to completion. This includes 2-3 months for design and planning, 3-4 months for fabrication, and 2-3 weeks for installation. We can work around busy schedules and entertainment industry timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Ready to Transform Your Malibu Home?
          </h2>
          <p className="text-xl text-french-gray mb-12 max-w-3xl mx-auto">
            Let\'s discuss how we can create the perfect kitchen or cabinetry solution for your Malibu home, combining coastal luxury with traditional craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-ivory text-deep-green px-8 py-4 rounded font-medium hover:bg-ivory/90 transition-colors">
              Schedule Malibu Consultation
            </Link>
            <Link href="/portfolio" className="border border-ivory text-ivory px-8 py-4 rounded font-medium hover:bg-ivory hover:text-deep-green transition-colors">
              View Malibu Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
