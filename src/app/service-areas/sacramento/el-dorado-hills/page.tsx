import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Custom Kitchens El Dorado Hills | Luxury Cabinetry | AV\'s Cabinets',
  description: 'Custom kitchens and luxury cabinetry for El Dorado Hills. AV\'s Cabinets brings European craftsmanship to Sacramento\'s premier master-planned community.',
  keywords: 'custom kitchens El Dorado Hills, luxury cabinetry El Dorado Hills, master-planned community kitchens, golf course homes El Dorado Hills',
  openGraph: {
    title: 'Custom Kitchens El Dorado Hills | AV\'s Cabinets',
    description: 'Custom kitchens and luxury cabinetry for El Dorado Hills.',
    type: 'website',
  },
}

const elDoradoHillsProjects = [
  {
    id: 1,
    title: 'Serrano Country Club Estate',
    location: 'El Dorado Hills, CA',
    description: 'A magnificent estate kitchen renovation featuring custom cherry cabinetry and granite countertops. Designed for entertaining with an integrated wine cellar and butler\'s pantry.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-67-sacramento-california.webp',
    alt: 'Serrano Country Club estate kitchen with custom cherry cabinetry',
    year: '2024'
  },
  {
    id: 2,
    title: 'Lake Hillside Contemporary',
    location: 'El Dorado Hills, CA',
    description: 'A contemporary kitchen renovation featuring custom maple cabinetry and quartz countertops. Perfect for the modern lifestyle with panoramic lake views.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-68-sacramento-california.webp',
    alt: 'Lake Hillside contemporary kitchen with custom maple cabinetry',
    year: '2024'
  },
  {
    id: 3,
    title: 'Folsom Lake View Kitchen',
    location: 'El Dorado Hills, CA',
    description: 'A luxury kitchen renovation featuring custom walnut cabinetry and marble accents. Designed to maximize the stunning Folsom Lake views.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-69-sacramento-california.webp',
    alt: 'Folsom Lake view kitchen with custom walnut cabinetry',
    year: '2023'
  }
]

const elDoradoHillsFeatures = [
  {
    feature: 'Master-Planned Community',
    description: 'El Dorado Hills is a carefully planned community with excellent infrastructure, amenities, and architectural guidelines that ensure property values and quality of life.',
    details: ['Golf courses', 'Parks and trails', 'Shopping centers', 'Top-rated schools']
  },
  {
    feature: 'Rolling Hills Setting',
    description: 'The community\'s rolling hills provide stunning views and unique building opportunities, requiring specialized design expertise for hillside properties.',
    details: ['Hillside construction', 'View maximization', 'Terrace integration', 'Landscaping coordination']
  },
  {
    feature: 'Luxury Amenities',
    description: 'El Dorado Hills offers world-class amenities including golf courses, country clubs, and recreational facilities that influence home design and lifestyle.',
    details: ['Golf course access', 'Country club membership', 'Recreation facilities', 'Social events']
  },
  {
    feature: 'Growing Tech Economy',
    description: 'The community\'s proximity to Sacramento and Silicon Valley has attracted tech professionals, increasing demand for modern, high-tech kitchen features.',
    details: ['Smart home integration', 'Modern appliances', 'Tech-friendly design', 'Entertainment features']
  }
]

const elDoradoHillsFAQ = [
  {
    question: 'What makes El Dorado Hills kitchens unique?',
    answer: 'El Dorado Hills kitchens are characterized by their blend of luxury and functionality, often featuring high-end materials, smart home integration, and designs that maximize the community\'s rolling hills and golf course views. The master-planned nature of the community also influences design standards and expectations.'
  },
  {
    question: 'How do you handle hillside properties in El Dorado Hills?',
    answer: 'We\'re experienced in working with hillside properties and understand the unique challenges and opportunities they present. We design kitchens that maximize views, work with the natural slope, and integrate seamlessly with outdoor living spaces.'
  },
  {
    question: 'Do you work with El Dorado Hills\' architectural guidelines?',
    answer: 'Yes, we\'re familiar with El Dorado Hills\' architectural guidelines and ensure all our designs comply with community standards while maintaining our high standards of craftsmanship and luxury.'
  },
  {
    question: 'What materials work best in El Dorado Hills homes?',
    answer: 'El Dorado Hills homes work beautifully with premium materials like cherry, walnut, and maple. We also incorporate stone and tile elements that complement the community\'s luxury aesthetic and rolling hills setting.'
  },
  {
    question: 'How do you maximize golf course and lake views?',
    answer: 'We design kitchens with large windows, open layouts, and strategic placement of cabinetry to ensure unobstructed views. We also use materials and colors that complement the natural environment and enhance the connection to the outdoors.'
  },
  {
    question: 'Do you work with the country club lifestyle?',
    answer: 'Yes, we understand the country club lifestyle and design kitchens that support entertaining, wine storage, and the social aspects of country club living. We also ensure our designs complement the community\'s luxury amenities.'
  }
]

export default function ElDoradoHillsPage() {
  return (
    
      <!-- SEO-Optimized Heading Structure -->
      <div className="heading-structure" style="display: none;">
        <h1>Custom Kitchens in el-dorado-hills | Luxury Cabinetry</h1>
        <h2>Luxury Kitchen Design in el-dorado-hills</h2><h2>Premium Materials & Craftsmanship</h2><h2>Local Kitchen Design Expertise</h2><h2>Custom Kitchen Services</h2><h2>Why Choose Us for el-dorado-hills Kitchens</h2><h2>Frequently Asked Questions</h2>
        <h3>Custom Kitchen Design</h3><h3>Bespoke Cabinetry Services</h3><h3>Kitchen Remodeling</h3><h3>Cabinet Hardware Selection</h3><h3>Kitchen Lighting Design</h3><h3>Appliance Integration</h3>
      </div>
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">Custom Kitchens in el-dorado-hills | Luxury Cabinetry</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-french-gray">
              Luxury cabinetry and custom kitchens for El Dorado Hills. Where European craftsmanship meets Sacramento\'s premier master-planned community.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Master-Planned Community
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Golf Course Views
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Rolling Hills
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Luxury Amenities
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in el-dorado-hills</h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              El Dorado Hills represents the pinnacle of master-planned community living in the Sacramento area. With its rolling hills, golf courses, and luxury amenities, this community offers unparalleled opportunities for sophisticated kitchen design that celebrates both natural beauty and modern luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {elDoradoHillsFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-charcoal mb-4">{feature.feature}</h3>
                <p className="text-charcoal/70 mb-4 leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-sm text-charcoal/60">
                      <div className="w-2 h-2 bg-deep-green rounded-full mr-3"></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in el-dorado-hills</h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              Each project represents a unique collaboration with El Dorado Hills homeowners, creating spaces that honor both the community\'s luxury standards and individual lifestyle needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {elDoradoHillsProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden bg-french-gray/10 rounded-lg mb-6">
                  <Image
                    src={project.imageSrc}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-charcoal group-hover:text-deep-green transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-charcoal/70">{project.location} • {project.year}</p>
                  <p className="text-charcoal/80 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* El Dorado Hills Lifestyle */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in el-dorado-hills</h2>
              <p className="text-xl text-charcoal/80 mb-8 leading-relaxed">
                El Dorado Hills offers a unique lifestyle that combines luxury amenities with natural beauty. Our kitchens are designed to support this lifestyle, from entertaining at the country club to enjoying the rolling hills and golf course views.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Country Club Living</h3>
                    <p className="text-charcoal/70">Kitchens designed for entertaining with wine storage, butler\'s pantries, and features that support the social aspects of country club living.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Golf Course Views</h3>
                    <p className="text-charcoal/70">Designs that maximize golf course and lake views with large windows, open layouts, and materials that complement the natural environment.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Tech Integration</h3>
                    <p className="text-charcoal/70">Smart home features and modern appliances that support the tech-savvy lifestyle of El Dorado Hills residents.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-70-sacramento-california.webp"
                alt="El Dorado Hills lifestyle kitchen with golf course views"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-grain">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in el-dorado-hills</h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchens in El Dorado Hills.
            </p>
          </div>

          <div className="space-y-8">
            {elDoradoHillsFAQ.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-french-gray/20">
                <h3 className="text-xl font-semibold text-charcoal mb-4">{faq.question}</h3>
                <p className="text-charcoal/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-deep-green text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Luxury Kitchen Design in el-dorado-hills</h2>
          <p className="text-xl text-ivory/90 mb-12 max-w-4xl mx-auto">
            Join the ranks of El Dorado Hills homeowners who have chosen AV\'s Cabinets for their luxury kitchen renovations. Experience the perfect blend of European craftsmanship and master-planned community living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-ivory text-deep-green px-8 py-4 rounded font-medium hover:bg-ivory/90 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/portfolio" 
              className="border border-ivory text-ivory px-8 py-4 rounded font-medium hover:bg-ivory hover:text-deep-green transition-colors"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
