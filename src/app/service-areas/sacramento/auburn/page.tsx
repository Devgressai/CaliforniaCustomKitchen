import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Custom Kitchens Auburn | Luxury Cabinetry | AV\'s Cabinets',
  description: 'Custom kitchens and luxury cabinetry for Auburn. AV\'s Cabinets brings European craftsmanship to Sacramento\'s historic foothill community.',
  keywords: 'custom kitchens Auburn, luxury cabinetry Auburn, foothill community kitchens, Gold Rush heritage kitchens Auburn',
  openGraph: {
    title: 'Custom Kitchens Auburn | AV\'s Cabinets',
    description: 'Custom kitchens and luxury cabinetry for Auburn.',
    type: 'website',
  },
}

const auburnProjects = [
  {
    id: 1,
    title: 'Foothill Estate Kitchen',
    location: 'Auburn, CA',
    description: 'A magnificent foothill estate kitchen renovation featuring custom pine cabinetry and stone accents. Perfect for Auburn\'s mountain location and outdoor lifestyle.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-83-sacramento-california.webp',
    alt: 'Foothill estate kitchen in Auburn with custom pine cabinetry',
    year: '2024'
  },
  {
    id: 2,
    title: 'Gold Rush Heritage Kitchen',
    location: 'Auburn, CA',
    description: 'A historic Gold Rush kitchen renovation featuring custom oak cabinetry and period-appropriate details. Perfect for Auburn\'s historic heritage and downtown charm.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-84-sacramento-california.webp',
    alt: 'Gold Rush heritage kitchen in Auburn with custom oak cabinetry',
    year: '2024'
  },
  {
    id: 3,
    title: 'Mountain View Kitchen',
    location: 'Auburn, CA',
    description: 'A contemporary mountain view kitchen renovation featuring custom maple cabinetry and granite countertops. Perfect for Auburn\'s scenic views and outdoor recreation.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-85-sacramento-california.webp',
    alt: 'Mountain view kitchen in Auburn with custom maple cabinetry',
    year: '2023'
  }
]

const auburnFeatures = [
  {
    feature: 'Historic Gold Rush Heritage',
    description: 'Auburn is rich in Gold Rush history, with historic downtown and buildings that influence kitchen design with period-appropriate details and traditional craftsmanship.',
    details: ['Historic downtown', 'Gold Rush buildings', 'Period details', 'Traditional craftsmanship']
  },
  {
    feature: 'Foothill Location',
    description: 'The community\'s foothill location provides stunning mountain views and outdoor recreation opportunities that influence kitchen design and lifestyle.',
    details: ['Mountain views', 'Outdoor recreation', 'Hiking trails', 'Natural beauty']
  },
  {
    feature: 'Outdoor Recreation',
    description: 'Auburn\'s proximity to outdoor recreation creates unique needs for kitchen design that can support an active outdoor lifestyle.',
    details: ['Hiking gear storage', 'Outdoor entertaining', 'Mudroom features', 'Active lifestyle']
  },
  {
    feature: 'Small Town Charm',
    description: 'The community\'s small town charm creates opportunities for kitchen design that celebrates local character and community values.',
    details: ['Local character', 'Community values', 'Small town atmosphere', 'Historic charm']
  }
]

const auburnFAQ = [
  {
    question: 'What makes Auburn kitchens unique?',
    answer: 'Auburn kitchens are characterized by their blend of historic charm and outdoor lifestyle, often featuring period-appropriate details, mountain views, and designs that complement the community\'s Gold Rush heritage and foothill location.'
  },
  {
    question: 'How do you handle the historic heritage?',
    answer: 'We\'re experienced in working with historic homes and understand how to preserve architectural integrity while incorporating modern functionality. We use period-appropriate materials and techniques while ensuring contemporary comfort and luxury.'
  },
  {
    question: 'Do you work with foothill properties?',
    answer: 'Yes, we\'re experienced in working with foothill properties and understand how to design kitchens that can handle the unique challenges and opportunities of mountain living while maintaining luxury standards.'
  },
  {
    question: 'What materials work best in Auburn homes?',
    answer: 'Auburn homes work beautifully with natural materials like pine, oak, and maple that complement the foothill setting. We also incorporate stone and tile elements that can handle the demands of mountain living.'
  },
  {
    question: 'How do you maximize mountain views?',
    answer: 'We design kitchens with large windows, open layouts, and strategic placement of cabinetry to ensure unobstructed mountain views. We also use materials and colors that complement the natural environment.'
  },
  {
    question: 'Do you work with outdoor recreation needs?',
    answer: 'Yes, we understand the outdoor recreation lifestyle and design kitchens with features like mudroom areas, gear storage, and layouts that support an active outdoor lifestyle while maintaining luxury aesthetics.'
  }
]

export default function AuburnPage() {
  return (
    
      <!-- SEO-Optimized Heading Structure -->
      <div className="heading-structure" style="display: none;">
        <h1>Custom Kitchens in auburn | Luxury Cabinetry</h1>
        <h2>Luxury Kitchen Design in auburn</h2><h2>Premium Materials & Craftsmanship</h2><h2>Local Kitchen Design Expertise</h2><h2>Custom Kitchen Services</h2><h2>Why Choose Us for auburn Kitchens</h2><h2>Frequently Asked Questions</h2>
        <h3>Custom Kitchen Design</h3><h3>Bespoke Cabinetry Services</h3><h3>Kitchen Remodeling</h3><h3>Cabinet Hardware Selection</h3><h3>Kitchen Lighting Design</h3><h3>Appliance Integration</h3>
      </div>
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">Custom Kitchens in auburn | Luxury Cabinetry</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-french-gray">
              Luxury cabinetry and custom kitchens for Auburn. Where European craftsmanship meets Sacramento\'s historic foothill community.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Gold Rush Heritage
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Foothill Location
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Outdoor Recreation
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Small Town Charm
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in auburn</h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              Auburn represents the perfect blend of historic charm and outdoor lifestyle in the Sacramento area. With its Gold Rush heritage, foothill location, and outdoor recreation opportunities, this community offers unique opportunities for kitchen design that celebrates both history and natural beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {auburnFeatures.map((feature, index) => (
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in auburn</h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              Each project represents a unique collaboration with Auburn homeowners, creating spaces that honor both the community\'s historic heritage and outdoor lifestyle needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auburnProjects.map((project) => (
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

      {/* Auburn Lifestyle */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in auburn</h2>
              <p className="text-xl text-charcoal/80 mb-8 leading-relaxed">
                Auburn offers a unique lifestyle that combines historic charm with outdoor adventure. Our kitchens are designed to support this lifestyle, from exploring the Gold Rush heritage to enjoying mountain views and outdoor recreation.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Historic Heritage</h3>
                    <p className="text-charcoal/70">Kitchens designed to celebrate Auburn\'s Gold Rush heritage with period-appropriate details, traditional craftsmanship, and materials that honor the historic downtown and buildings.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Outdoor Adventure</h3>
                    <p className="text-charcoal/70">Designs that support outdoor recreation with mudroom features, gear storage, and layouts that can handle the demands of an active outdoor lifestyle.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Mountain Views</h3>
                    <p className="text-charcoal/70">Designs that maximize mountain views and natural beauty with large windows, open layouts, and materials that complement the foothill setting.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-86-sacramento-california.webp"
                alt="Auburn foothill lifestyle kitchen with mountain views"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in auburn</h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchens in Auburn.
            </p>
          </div>

          <div className="space-y-8">
            {auburnFAQ.map((faq, index) => (
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Luxury Kitchen Design in auburn</h2>
          <p className="text-xl text-ivory/90 mb-12 max-w-4xl mx-auto">
            Join the ranks of Auburn homeowners who have chosen AV\'s Cabinets for their luxury kitchen renovations. Experience the perfect blend of European craftsmanship and historic foothill living.
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
