import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Custom Kitchen Builder in Tahoe Vista | Luxury Cabinetry | AV\'s Cabinets',
  description: 'Custom kitchen builder in Tahoe Vista specializing in luxury cabinetry for Lake Tahoe\'s most charming lakefront communities. European craftsmanship meets mountain living.',
  keywords: 'custom kitchen builder Tahoe Vista, luxury cabinetry Lake Tahoe, custom kitchens Tahoe Vista, kitchen renovation Tahoe Vista, bespoke cabinetry Lake Tahoe',
  openGraph: {
    title: 'Custom Kitchen Builder in Tahoe Vista | Luxury Cabinetry | AV\'s Cabinets',
    description: 'Custom kitchen builder in Tahoe Vista specializing in luxury cabinetry for Lake Tahoe\'s most charming lakefront communities.',
    type: 'website',
  },
}

const localProjects = [
  {
    title: 'Tahoe Vista Lakefront Kitchen',
    location: 'Tahoe Vista, CA',
    description: 'A charming lakefront kitchen renovation featuring custom oak cabinetry and panoramic lake views. Designed to maximize the stunning lakefront setting while providing family functionality.',
    imageSrc: '/images/portfolio/tahoe-vista-lakefront-kitchen.webp',
    imageAlt: 'Custom lakefront kitchen with panoramic Lake Tahoe views in Tahoe Vista',
    year: '2024'
  },
  {
    title: 'Mountain Contemporary Tahoe Vista Kitchen',
    location: 'Tahoe Vista, CA',
    description: 'A sleek mountain contemporary kitchen with clean lines and premium materials. Perfect for the active Tahoe Vista lifestyle with integrated outdoor living spaces.',
    imageSrc: '/images/portfolio/tahoe-vista-contemporary-kitchen.webp',
    imageAlt: 'Mountain contemporary kitchen in Tahoe Vista with modern design',
    year: '2024'
  },
  {
    title: 'Traditional Tahoe Vista Cabin Kitchen',
    location: 'Tahoe Vista, CA',
    description: 'A classic traditional cabin kitchen renovation with handcrafted details and natural finishes. Designed for cozy family gatherings and mountain living in Tahoe Vista.',
    imageSrc: '/images/portfolio/tahoe-vista-traditional-kitchen.webp',
    imageAlt: 'Traditional cabin kitchen in Tahoe Vista with handcrafted details',
    year: '2023'
  }
]

const localArchitecture = [
  {
    style: 'Lakefront Family',
    description: 'Tahoe Vista\'s lakefront homes feature open floor plans, durable materials, and spaces designed for family living. Our cabinetry complements these elements with functional designs and premium materials that can handle the demands of family life.',
    characteristics: ['Open floor plans', 'Durable materials', 'Family-friendly design', 'Lakefront living']
  },
  {
    style: 'Mountain Contemporary',
    description: 'Mountain contemporary homes in Tahoe Vista embrace clean lines with natural materials and modern finishes. Our cabinetry honors this aesthetic with sleek designs and premium finishes that reflect the active lifestyle.',
    characteristics: ['Clean lines', 'Natural materials', 'Modern finishes', 'Sleek functionality']
  },
  {
    style: 'Traditional Cabin',
    description: 'Traditional cabin homes feature warm wood tones, handcrafted details, and cozy living spaces. Our cabinetry integrates seamlessly with these spaces, offering traditional craftsmanship and authentic materials that honor the mountain heritage.',
    characteristics: ['Warm wood tones', 'Handcrafted details', 'Cozy spaces', 'Traditional craftsmanship']
  }
]

const localInsights = [
  {
    title: 'Family Lakefront Living',
    description: 'Tahoe Vista residents value the connection to the lake and outdoor recreation. We design cabinetry that supports this lifestyle while providing the durability and functionality needed for active families.',
    icon: '🏔️'
  },
  {
    title: 'Community Entertaining',
    description: 'Many Tahoe Vista homes are designed for community entertaining, with open floor plans and integrated indoor-outdoor living. We create cabinetry that supports this lifestyle with flexible storage and serving solutions.',
    icon: '🍽️'
  },
  {
    title: 'Quality Living',
    description: 'Tahoe Vista residents expect quality materials and finishes that can withstand active family life. We work with premium hardwoods, durable hardware, and finishes that meet the demands of mountain living.',
    icon: '💎'
  },
  {
    title: 'Natural Connection',
    description: 'The lakefront environment requires special consideration for views and natural light. We use materials and finishes that complement the natural setting while maintaining functionality for active families.',
    icon: '🌲'
  }
]

const neighborhoods = [
  'Tahoe City',
  'Carnelian Bay',
  'Kings Beach',
  'Incline Village',
  'Crystal Bay',
  'Tahoe Vista',
  'Homewood',
  'Tahoma',
  'Meeks Bay',
  'Rubicon Bay',
  'Emerald Bay',
  'South Lake Tahoe'
]

const tahoeVistaConsiderations = [
  {
    title: 'Lakefront Views',
    description: 'Maximizing lake views while maintaining privacy and functionality requires careful planning of cabinet placement and window treatments.',
    details: ['Strategic cabinet heights', 'Reflective surfaces', 'Minimal visual obstruction', 'Natural light optimization']
  },
  {
    title: 'Family Durability',
    description: 'Designing for active family life requires cabinetry that can withstand daily use while maintaining beauty and functionality.',
    details: ['Durable materials', 'Easy maintenance', 'Child-safe hardware', 'Flexible storage']
  },
  {
    title: 'Community Spaces',
    description: 'Many Tahoe Vista homes feature large entertaining areas that require cabinetry designed for both functionality and social interaction.',
    details: ['Serving areas', 'Beverage storage', 'Integrated appliances', 'Flexible layouts']
  },
  {
    title: 'Outdoor Integration',
    description: 'Seamless indoor-outdoor living requires cabinetry that complements both interior and exterior design elements.',
    details: ['Weather-resistant materials', 'Consistent design', 'Outdoor storage', 'Transitional spaces']
  }
]

const localMaterials = [
  {
    name: 'Oak',
    description: 'Classic oak is perfect for Tahoe Vista\'s family-oriented aesthetic, providing both beauty and durability for active living.',
    characteristics: ['Classic appearance', 'Excellent durability', 'Family-friendly', 'Timeless appeal']
  },
  {
    name: 'Maple',
    description: 'Light, clean maple provides a modern look while maintaining the natural aesthetic of the lakefront environment.',
    characteristics: ['Light color', 'Clean appearance', 'Modern appeal', 'Easy maintenance']
  },
  {
    name: 'Pine',
    description: 'Warm pine offers a rustic charm that complements the mountain setting while providing affordability for family budgets.',
    characteristics: ['Warm color', 'Rustic charm', 'Affordable option', 'Natural beauty']
  }
]

const faqs = [
  {
    question: 'How long does a custom kitchen project take in Tahoe Vista?',
    answer: 'Custom kitchen projects in Tahoe Vista typically take 10-14 weeks from design approval to completion. This timeline accounts for the unique challenges of lakefront construction, including weather considerations and the need for materials that can withstand Tahoe\'s climate while meeting family needs. We work closely with local contractors and suppliers to ensure efficient project delivery while maintaining our high standards of craftsmanship.'
  },
  {
    question: 'What are the most popular kitchen styles in Tahoe Vista?',
    answer: 'Tahoe Vista homeowners favor lakefront family, mountain contemporary, and traditional cabin styles. Lakefront family emphasizes open floor plans and durable materials to accommodate active family life. Mountain contemporary combines clean lines with natural materials, while traditional cabin style honors the area\'s heritage with warm wood tones and handcrafted details. Each style is carefully adapted to maximize the connection between indoor and outdoor living spaces while meeting the practical needs of family life.'
  },
  {
    question: 'How do you handle the unique challenges of lakefront construction?',
    answer: 'Lakefront construction in Tahoe Vista requires special consideration for views, natural light, and weather exposure. We design cabinetry with strategic heights to maximize lake views while maintaining functionality. We use materials and finishes that can withstand humidity and temperature fluctuations, and we work with specialized hardware that performs well in the mountain environment. Every project includes careful planning for the unique logistics of lakefront access and construction while ensuring the space meets the needs of active families.'
  },
  {
    question: 'What materials work best for Tahoe Vista\'s family lifestyle?',
    answer: 'Tahoe Vista\'s active family lifestyle requires materials that can withstand daily use while maintaining beauty. We recommend durable wood species like oak, maple, and pine, which are less prone to damage and easy to maintain. All cabinetry is properly sealed and finished to protect against moisture and daily wear, and we use hardware specifically designed for family use. We also consider the impact of UV exposure on finishes in homes with extensive natural light.'
  },
  {
    question: 'Do you work with local contractors and suppliers in Tahoe Vista?',
    answer: 'Yes, we have established relationships with local contractors, suppliers, and tradespeople throughout the Tahoe Vista area. These partnerships ensure efficient project delivery and access to materials that are well-suited to the local climate and building requirements. Our local network includes specialized craftspeople who understand the unique challenges of lakefront construction and can provide the expertise needed for family-oriented projects.'
  },
  {
    question: 'How do you approach kitchen design for community entertaining in Tahoe Vista?',
    answer: 'Community entertaining in Tahoe Vista requires kitchens designed for both functionality and social interaction. We create open floor plans that flow seamlessly into living and outdoor spaces, with cabinetry that supports large-scale family gatherings. This includes serving areas, beverage storage, and flexible storage for seasonal use. We also consider the acoustics and sight lines that make entertaining enjoyable, ensuring the kitchen becomes the heart of the home for both intimate family meals and large community gatherings.'
  }
]

export default function TahoeVistaPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="bg-french-gray/10 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-deep-green hover:text-deep-green/80">Home</Link></li>
            <li className="text-charcoal/60">/</li>
            <li><Link href="/service-areas" className="text-deep-green hover:text-deep-green/80">Service Areas</Link></li>
            <li className="text-charcoal/60">/</li>
            <li><Link href="/service-areas/lake-tahoe" className="text-deep-green hover:text-deep-green/80">Lake Tahoe</Link></li>
            <li className="text-charcoal/60">/</li>
            <li className="text-charcoal">Tahoe Vista</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/portfolio/gallery-luxury-custom-kitchen-24-sacramento-california.webp"
            alt="Custom kitchen builder in Tahoe Vista with stunning lake views"
            fill
            priority={true}
            quality={95}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/40" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-ivory mb-6 text-balance">
            Custom Kitchen Builder in Tahoe Vista
          </h1>
          <p className="text-xl md:text-2xl text-ivory/90 leading-relaxed mb-8 max-w-3xl mx-auto text-balance">
            Luxury custom kitchens and bespoke cabinetry for Lake Tahoe's most charming lakefront communities. European craftsmanship meets mountain living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary bg-ivory text-deep-green hover:bg-ivory/90"
            >
              Request Consultation
            </Link>
            <Link
              href="/portfolio"
              className="btn-ghost border-ivory text-ivory hover:bg-ivory hover:text-deep-green"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Executive Overview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
                Tahoe Vista's Premier Kitchen Builder
              </h2>
              <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                Tahoe Vista represents the heart of charming Lake Tahoe living, where family-friendly lakefront communities meet the natural beauty of the Sierra Nevada mountains. As the area's most trusted custom kitchen builder, we understand the unique demands of this vibrant community.
              </p>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
                Our clients in Tahoe Vista are active families who demand both functionality and beauty in their kitchen spaces. They seek kitchen designs that not only provide exceptional functionality but also serve as the heart of their family life and community entertainment. With panoramic lake views and mountain vistas as the backdrop, every kitchen we create must complement this extraordinary setting while meeting the practical needs of family living.
              </p>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                We specialize in creating kitchens that seamlessly integrate with the natural environment while providing the durability and functionality expected in Tahoe Vista's most active homes. Our approach combines European craftsmanship with an understanding of family living, ensuring every project exceeds expectations.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-25-sacramento-california.webp"
                alt="Family kitchen design in Tahoe Vista"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Our Design Philosophy for Tahoe Vista
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Every kitchen we create in Tahoe Vista is designed to honor the natural beauty of Lake Tahoe while providing the durability and functionality families need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏔️</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-4">Family Integration</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We design kitchens that feel naturally integrated with family life, using materials and finishes that can handle the demands of active living.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌊</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-4">Lakefront Living</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our designs maximize the connection to the lake, with strategic placement and materials that enhance rather than obstruct the stunning views.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-4">Quality Craftsmanship</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Every detail reflects our commitment to excellence, from hand-selected materials to precision joinery that will last for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Architecture */}
      <section className="py-24 bg-french-gray/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Tahoe Vista Architectural Styles
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We understand the diverse architectural landscape of Tahoe Vista and design cabinetry that complements each unique style.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {localArchitecture.map((style, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="font-display text-2xl font-semibold text-charcoal mb-4">{style.style}</h3>
                <p className="text-charcoal/70 leading-relaxed mb-6">{style.description}</p>
                <ul className="space-y-2">
                  {style.characteristics.map((characteristic, idx) => (
                    <li key={idx} className="flex items-center text-charcoal/70">
                      <span className="w-2 h-2 bg-deep-green rounded-full mr-3"></span>
                      {characteristic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Featured Tahoe Vista Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Discover our latest custom kitchen projects in Tahoe Vista's most charming neighborhoods.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-deep-green font-medium">Custom Kitchen</span>
                    <span className="text-sm text-charcoal/60">{project.year}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-3">{project.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Insights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Understanding Tahoe Vista Living
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our deep understanding of Tahoe Vista's unique lifestyle informs every design decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {localInsights.map((insight, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-4xl">{insight.icon}</div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-charcoal mb-3">{insight.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{insight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Considerations */}
      <section className="py-24 bg-french-gray/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Tahoe Vista-Specific Considerations
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Every project in Tahoe Vista requires special attention to the unique challenges and opportunities of this charming location.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tahoeVistaConsiderations.map((consideration, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="font-display text-2xl font-semibold text-charcoal mb-4">{consideration.title}</h3>
                <p className="text-charcoal/70 leading-relaxed mb-6">{consideration.description}</p>
                <ul className="space-y-2">
                  {consideration.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-charcoal/70">
                      <span className="w-2 h-2 bg-deep-green rounded-full mr-3"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Selection */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Materials Perfect for Tahoe Vista
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We carefully select materials that complement Tahoe Vista's family lifestyle while providing lasting beauty and durability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {localMaterials.map((material, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌲</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-charcoal mb-4">{material.name}</h3>
                <p className="text-charcoal/70 leading-relaxed mb-6">{material.description}</p>
                <ul className="space-y-2">
                  {material.characteristics.map((characteristic, idx) => (
                    <li key={idx} className="text-sm text-charcoal/60">
                      {characteristic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Our Process for Tahoe Vista Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We've refined our process specifically for Tahoe Vista's unique requirements and our clients' family needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-ivory">1</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-4">Initial Consultation</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We begin with a comprehensive consultation to understand your family's needs, lifestyle, and the unique characteristics of your Tahoe Vista property.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-ivory">2</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-4">Design Development</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our design team creates detailed plans that maximize your lake views while ensuring optimal functionality for your family's lifestyle.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-ivory">3</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-4">Fabrication</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our skilled craftspeople build your cabinetry using traditional techniques and premium materials selected for family use and Tahoe's climate.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-ivory">4</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-4">Installation</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our experienced installation team ensures perfect fit and finish, working around your family's schedule and the unique logistics of lakefront access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-french-gray/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchen projects in Tahoe Vista.
            </p>
          </div>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="font-display text-xl font-semibold text-charcoal mb-4">{faq.question}</h3>
                <p className="text-charcoal/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-deep-green">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ivory mb-6">
            Ready to Transform Your Tahoe Vista Kitchen?
          </h2>
          <p className="text-xl text-ivory/90 leading-relaxed mb-12 max-w-3xl mx-auto">
            Let's discuss your vision for the perfect custom kitchen that honors the natural beauty of Lake Tahoe while providing the functionality your family needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary bg-ivory text-deep-green hover:bg-ivory/90"
            >
              Request Private Consultation
            </Link>
            <Link
              href="/portfolio"
              className="btn-ghost border-ivory text-ivory hover:bg-ivory hover:text-deep-green"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Related Neighborhoods */}
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-charcoal mb-4">
              Other Lake Tahoe Neighborhoods We Serve
            </h2>
            <p className="text-charcoal/80">
              We provide custom kitchen services throughout the Lake Tahoe region.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {neighborhoods.filter(n => n !== 'Tahoe Vista').map((neighborhood, index) => (
              <Link
                key={index}
                href={`/service-areas/lake-tahoe/${neighborhood.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-sm font-medium text-charcoal">{neighborhood}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "PineWood Cabinets - Custom Kitchen Builder in Tahoe Vista",
            "description": "Custom kitchen builder in Tahoe Vista specializing in luxury cabinetry for Lake Tahoe's most charming lakefront communities.",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/lake-tahoe/tahoe-vista",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tahoe Vista",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.2400",
              "longitude": "-120.0500"
            },
            "areaServed": {
              "@type": "City",
              "name": "Tahoe Vista, CA"
            },
            "serviceType": "Custom Kitchen Design and Cabinetry",
            "priceRange": "$$$"
          })
        }}
      />
    </main>
  )
}
