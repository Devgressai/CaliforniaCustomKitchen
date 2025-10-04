import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Custom Kitchens Roseville | Luxury Cabinetry | AV\'s Cabinets',
  description: 'Custom kitchens and luxury cabinetry for Roseville. AV\'s Cabinets brings European craftsmanship to Sacramento\'s fastest-growing city.',
  keywords: 'custom kitchens Roseville, luxury cabinetry Roseville, growing city kitchens, family-friendly kitchens Roseville',
  openGraph: {
    title: 'Custom Kitchens Roseville | AV\'s Cabinets',
    description: 'Custom kitchens and luxury cabinetry for Roseville.',
    type: 'website',
  },
}

const rosevilleProjects = [
  {
    id: 1,
    title: 'West Roseville Contemporary',
    location: 'Roseville, CA',
    description: 'A contemporary kitchen renovation featuring custom maple cabinetry and quartz countertops. Perfect for the modern lifestyle of Roseville\'s growing community.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-71-sacramento-california.webp',
    alt: 'West Roseville contemporary kitchen with custom maple cabinetry',
    year: '2024'
  },
  {
    id: 2,
    title: 'Granite Bay Estate Kitchen',
    location: 'Roseville, CA',
    description: 'A luxury estate kitchen renovation featuring custom cherry cabinetry and granite countertops. Designed for entertaining with an integrated wine storage area.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-72-sacramento-california.webp',
    alt: 'Granite Bay estate kitchen with custom cherry cabinetry',
    year: '2024'
  },
  {
    id: 3,
    title: 'Sunrise Ranch Kitchen',
    location: 'Roseville, CA',
    description: 'A family-friendly kitchen renovation featuring custom oak cabinetry and durable finishes. Perfect for Roseville\'s active families and growing community.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-73-sacramento-california.webp',
    alt: 'Sunrise Ranch family kitchen with custom oak cabinetry',
    year: '2023'
  }
]

const rosevilleFeatures = [
  {
    feature: 'Fastest Growing City',
    description: 'Roseville is one of the fastest-growing cities in California, with excellent schools, shopping, and amenities that attract families and professionals.',
    details: ['Top-rated schools', 'Shopping centers', 'Recreation facilities', 'Growing economy']
  },
  {
    feature: 'Family-Friendly Community',
    description: 'The community\'s focus on families creates unique opportunities for kitchen design that supports busy family life and entertaining.',
    details: ['Family gatherings', 'Homework stations', 'Durable materials', 'Easy maintenance']
  },
  {
    feature: 'Excellent Schools',
    description: 'Roseville\'s excellent school system attracts families, creating demand for kitchens that support educational activities and family life.',
    details: ['Homework areas', 'Study spaces', 'Family organization', 'Educational support']
  },
  {
    feature: 'Shopping and Amenities',
    description: 'The city\'s shopping centers and amenities provide convenient access to high-end appliances and materials for luxury kitchen renovations.',
    details: ['Shopping access', 'Material sourcing', 'Appliance selection', 'Design inspiration']
  }
]

const rosevilleFAQ = [
  {
    question: 'What makes Roseville kitchens unique?',
    answer: 'Roseville kitchens are characterized by their blend of modern functionality and family-friendly design, often featuring durable materials, smart storage solutions, and designs that support the active lifestyle of growing families in this fast-growing community.'
  },
  {
    question: 'How do you handle the growing community aspect?',
    answer: 'We understand that Roseville is a growing community with diverse needs. We design kitchens that can adapt to changing family needs while maintaining luxury standards and modern functionality.'
  },
  {
    question: 'Do you work with family-friendly design?',
    answer: 'Yes, we specialize in family-friendly design that combines luxury with practicality. We use durable materials, smart storage solutions, and designs that support busy family life while maintaining high-end aesthetics.'
  },
  {
    question: 'What materials work best in Roseville homes?',
    answer: 'Roseville homes work beautifully with a variety of materials, from traditional oak and cherry to modern maple and walnut. We choose materials that complement the home\'s style while providing durability for active family life.'
  },
  {
    question: 'How do you maximize space in growing families?',
    answer: 'We design kitchens with smart storage solutions, flexible layouts, and features that can adapt to changing family needs. We also ensure the design supports both daily family life and entertaining.'
  },
  {
    question: 'Do you work with the school district proximity?',
    answer: 'Yes, we understand the importance of education in Roseville and design kitchens that support homework, study, and educational activities while maintaining luxury standards and family functionality.'
  }
]

export default function RosevillePage() {
  return (
    
      <!-- SEO-Optimized Heading Structure -->
      <div className="heading-structure" style="display: none;">
        <h1>Custom Kitchens in roseville | Luxury Cabinetry</h1>
        <h2>Luxury Kitchen Design in roseville</h2><h2>Premium Materials & Craftsmanship</h2><h2>Local Kitchen Design Expertise</h2><h2>Custom Kitchen Services</h2><h2>Why Choose Us for roseville Kitchens</h2><h2>Frequently Asked Questions</h2>
        <h3>Custom Kitchen Design</h3><h3>Bespoke Cabinetry Services</h3><h3>Kitchen Remodeling</h3><h3>Cabinet Hardware Selection</h3><h3>Kitchen Lighting Design</h3><h3>Appliance Integration</h3>
      </div>
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">Custom Kitchens in roseville | Luxury Cabinetry</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-french-gray">
              Luxury cabinetry and custom kitchens for Roseville. Where European craftsmanship meets Sacramento\'s fastest-growing city.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Fastest Growing City
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Family-Friendly
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Excellent Schools
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Modern Amenities
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in roseville</h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              Roseville represents the perfect blend of growth and quality of life in the Sacramento area. With its excellent schools, shopping, and family-friendly atmosphere, this community offers unique opportunities for kitchen design that supports both modern living and family values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rosevilleFeatures.map((feature, index) => (
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in roseville</h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              Each project represents a unique collaboration with Roseville homeowners, creating spaces that honor both the community\'s family values and modern lifestyle needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rosevilleProjects.map((project) => (
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

      {/* Roseville Lifestyle */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in roseville</h2>
              <p className="text-xl text-charcoal/80 mb-8 leading-relaxed">
                Roseville offers a unique lifestyle that combines modern amenities with family values. Our kitchens are designed to support this lifestyle, from busy family mornings to weekend entertaining and educational activities.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Family-Centered Design</h3>
                    <p className="text-charcoal/70">Kitchens designed for family life with homework areas, durable materials, and layouts that support both daily activities and special occasions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Modern Amenities</h3>
                    <p className="text-charcoal/70">Smart home features and modern appliances that support the tech-savvy lifestyle of Roseville\'s growing community while maintaining family functionality.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Educational Support</h3>
                    <p className="text-charcoal/70">Designs that support homework, study, and educational activities while maintaining luxury standards and family-friendly functionality.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-74-sacramento-california.webp"
                alt="Roseville family kitchen with modern amenities"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in roseville</h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchens in Roseville.
            </p>
          </div>

          <div className="space-y-8">
            {rosevilleFAQ.map((faq, index) => (
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Luxury Kitchen Design in roseville</h2>
          <p className="text-xl text-ivory/90 mb-12 max-w-4xl mx-auto">
            Join the ranks of Roseville homeowners who have chosen AV\'s Cabinets for their luxury kitchen renovations. Experience the perfect blend of European craftsmanship and family-friendly design.
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
