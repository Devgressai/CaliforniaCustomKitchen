import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Custom Kitchen Builder in Homewood | Luxury Cabinetry | AV\'s Cabinets',
  description: 'Custom kitchen builder in Homewood specializing in luxury cabinetry for Lake Tahoe\'s most serene lakefront communities. European craftsmanship meets peaceful mountain living.',
  keywords: 'custom kitchen builder Homewood, luxury cabinetry Lake Tahoe, custom kitchens Homewood, kitchen renovation Homewood, bespoke cabinetry Lake Tahoe',
  openGraph: {
    title: 'Custom Kitchen Builder in Homewood | Luxury Cabinetry | AV\'s Cabinets',
    description: 'Custom kitchen builder in Homewood specializing in luxury cabinetry for Lake Tahoe\'s most serene lakefront communities.',
    type: 'website',
  },
}

const localProjects = [
  {
    title: 'Homewood Lakefront Retreat Kitchen',
    location: 'Homewood, CA',
    description: 'A serene lakefront kitchen renovation featuring custom maple cabinetry and panoramic lake views. Designed to maximize the peaceful lakefront setting while providing luxury functionality.',
    imageSrc: '/images/portfolio/homewood-lakefront-kitchen.webp',
    imageAlt: 'Custom lakefront kitchen with panoramic Lake Tahoe views in Homewood',
    year: '2024'
  },
  {
    title: 'Mountain Serenity Homewood Kitchen',
    location: 'Homewood, CA',
    description: 'A peaceful mountain kitchen with clean lines and premium materials. Perfect for the serene Homewood lifestyle with integrated outdoor living spaces.',
    imageSrc: '/images/portfolio/homewood-mountain-kitchen.webp',
    imageAlt: 'Mountain serenity kitchen in Homewood with peaceful design',
    year: '2024'
  },
  {
    title: 'Traditional Homewood Cabin Kitchen',
    location: 'Homewood, CA',
    description: 'A classic traditional cabin kitchen renovation with handcrafted details and natural finishes. Designed for peaceful family gatherings and mountain living in Homewood.',
    imageSrc: '/images/portfolio/homewood-traditional-kitchen.webp',
    imageAlt: 'Traditional cabin kitchen in Homewood with handcrafted details',
    year: '2023'
  }
]

const localArchitecture = [
  {
    style: 'Lakefront Retreat',
    description: 'Homewood\'s lakefront homes feature peaceful proportions, natural materials, and expansive lake views. Our cabinetry complements these elements with serene designs and premium materials that enhance the tranquil setting.',
    characteristics: ['Peaceful proportions', 'Natural materials', 'Lake views', 'Serene design']
  },
  {
    style: 'Mountain Serenity',
    description: 'Mountain serenity homes in Homewood embrace clean lines with natural textures and calming finishes. Our cabinetry honors this aesthetic with minimalist designs and authentic materials that reflect the peaceful environment.',
    characteristics: ['Clean lines', 'Natural textures', 'Calming finishes', 'Minimalist design']
  },
  {
    style: 'Traditional Cabin',
    description: 'Traditional cabin homes feature warm wood tones, handcrafted details, and cozy living spaces. Our cabinetry integrates seamlessly with these spaces, offering traditional craftsmanship and authentic materials that honor the mountain heritage.',
    characteristics: ['Warm wood tones', 'Handcrafted details', 'Cozy spaces', 'Traditional craftsmanship']
  }
]

const localInsights = [
  {
    title: 'Peaceful Lakefront Living',
    description: 'Homewood residents value the serene lakefront environment and peaceful outdoor recreation. We design cabinetry that supports this lifestyle while providing the luxury and functionality expected in tranquil lakefront estates.',
    icon: '🏔️'
  },
  {
    title: 'Intimate Entertaining',
    description: 'Many Homewood homes are designed for intimate entertaining, with cozy spaces and integrated indoor-outdoor living. We create cabinetry that supports this lifestyle with elegant storage and serving solutions.',
    icon: '🍽️'
  },
  {
    title: 'Serene Luxury',
    description: 'Homewood residents expect the finest materials and finishes. We work exclusively with premium hardwoods, custom hardware, and luxury finishes that meet the highest standards of peaceful luxury.',
    icon: '💎'
  },
  {
    title: 'Natural Harmony',
    description: 'The lakefront environment requires special consideration for views and natural light. We use materials and finishes that complement the natural setting while maintaining luxury aesthetics.',
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

const homewoodConsiderations = [
  {
    title: 'Serene Lake Views',
    description: 'Maximizing lake views while maintaining privacy and functionality requires careful planning of cabinet placement and window treatments.',
    details: ['Strategic cabinet heights', 'Reflective surfaces', 'Minimal visual obstruction', 'Natural light optimization']
  },
  {
    title: 'Peaceful Living',
    description: 'Designing for peaceful living requires cabinetry that enhances the serene environment while maintaining beauty and functionality.',
    details: ['Calming materials', 'Soft finishes', 'Quiet hardware', 'Harmonious design']
  },
  {
    title: 'Intimate Spaces',
    description: 'Many Homewood homes feature intimate entertaining areas that require cabinetry designed for both functionality and aesthetic appeal.',
    details: ['Wine storage solutions', 'Serving areas', 'Integrated appliances', 'Flexible storage']
  },
  {
    title: 'Natural Integration',
    description: 'Seamless integration with nature requires cabinetry that complements both interior and exterior design elements.',
    details: ['Natural materials', 'Consistent design language', 'Outdoor storage solutions', 'Transitional spaces']
  }
]

const localMaterials = [
  {
    name: 'Maple',
    description: 'Light, clean maple is perfect for Homewood\'s serene aesthetic, providing both beauty and tranquility.',
    characteristics: ['Light color', 'Clean appearance', 'Serene appeal', 'Natural beauty']
  },
  {
    name: 'Cherry',
    description: 'Warm cherry offers a classic look that ages beautifully and complements the traditional architecture of Homewood.',
    characteristics: ['Classic appearance', 'Aging properties', 'Warm tones', 'Traditional appeal']
  },
  {
    name: 'Oak',
    description: 'Classic oak provides durability and timeless beauty that complements the peaceful mountain setting.',
    characteristics: ['Classic appearance', 'Excellent durability', 'Timeless appeal', 'Natural beauty']
  }
]

const faqs = [
  {
    question: 'How long does a custom kitchen project take in Homewood?',
    answer: 'Custom kitchen projects in Homewood typically take 12-16 weeks from design approval to completion. This timeline accounts for the unique challenges of lakefront construction, including weather considerations and the need for materials that can withstand Tahoe\'s climate while maintaining the peaceful environment. We work closely with local contractors and suppliers to ensure efficient project delivery while maintaining our high standards of craftsmanship.'
  },
  {
    question: 'What are the most popular kitchen styles in Homewood?',
    answer: 'Homewood homeowners favor lakefront retreat, mountain serenity, and traditional cabin styles. Lakefront retreat emphasizes peaceful proportions and natural materials to complement the stunning lake views. Mountain serenity combines clean lines with natural textures, while traditional cabin style honors the area\'s heritage with warm wood tones and handcrafted details. Each style is carefully adapted to maximize the connection between indoor and outdoor living spaces while maintaining the serene character of the area.'
  },
  {
    question: 'How do you handle the unique challenges of peaceful lakefront construction?',
    answer: 'Peaceful lakefront construction in Homewood requires special consideration for views, natural light, and maintaining the serene environment. We design cabinetry with strategic heights to maximize lake views while maintaining functionality. We use materials and finishes that can withstand humidity and temperature fluctuations, and we work with specialized hardware that performs well in the mountain environment. Every project includes careful planning for the unique logistics of lakefront access and construction while ensuring the space maintains its peaceful character.'
  },
  {
    question: 'What materials work best for Homewood\'s serene lifestyle?',
    answer: 'Homewood\'s peaceful lifestyle requires materials that complement the serene environment while maintaining beauty and durability. We recommend calming wood species like maple, cherry, and oak, which provide natural beauty without overwhelming the space. All cabinetry is properly sealed and finished to protect against moisture, and we use hardware specifically designed for quiet operation. We also consider the impact of natural light on finishes in homes with extensive lake views.'
  },
  {
    question: 'Do you work with local contractors and suppliers in Homewood?',
    answer: 'Yes, we have established relationships with local contractors, suppliers, and tradespeople throughout the Homewood area. These partnerships ensure efficient project delivery and access to materials that are well-suited to the local climate and building requirements. Our local network includes specialized craftspeople who understand the unique challenges of lakefront construction and can provide the expertise needed for peaceful projects.'
  },
  {
    question: 'How do you approach kitchen design for intimate entertaining in Homewood?',
    answer: 'Intimate entertaining in Homewood requires kitchens designed for both functionality and social interaction. We create cozy floor plans that flow seamlessly into living and outdoor spaces, with cabinetry that supports intimate gatherings. This includes wine storage solutions, integrated serving areas, and flexible storage for seasonal use. We also consider the acoustics and sight lines that make entertaining enjoyable, ensuring the kitchen becomes the heart of the home for both intimate family meals and small gatherings while maintaining the peaceful character of the area.'
  }
]

export default function HomewoodPage() {
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
            <li className="text-charcoal">Homewood</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/portfolio/gallery-luxury-custom-kitchen-26-sacramento-california.webp"
            alt="Custom kitchen builder in Homewood with stunning lake views"
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
            Custom Kitchen Builder in Homewood
          </h1>
          <p className="text-xl md:text-2xl text-ivory/90 leading-relaxed mb-8 max-w-3xl mx-auto text-balance">
            Luxury custom kitchens and bespoke cabinetry for Lake Tahoe's most serene lakefront communities. European craftsmanship meets peaceful mountain living.
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
                Homewood's Premier Kitchen Builder
              </h2>
              <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                Homewood represents the pinnacle of serene Lake Tahoe living, where peaceful lakefront communities meet the natural beauty of the Sierra Nevada mountains. As the area's most trusted custom kitchen builder, we understand the unique demands of this tranquil community.
              </p>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
                Our clients in Homewood are discerning homeowners who value both luxury and tranquility. They seek kitchen spaces that not only provide exceptional functionality but also serve as the heart of their peaceful family life and intimate entertainment. With panoramic lake views and mountain vistas as the backdrop, every kitchen we create must complement this extraordinary serene setting.
              </p>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                We specialize in creating kitchens that seamlessly integrate with the natural environment while providing the luxury and sophistication expected in Homewood's most peaceful homes. Our approach combines European craftsmanship with an understanding of serene living, ensuring every project exceeds expectations.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-27-sacramento-california.webp"
                alt="Serene kitchen design in Homewood"
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
              Our Design Philosophy for Homewood
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Every kitchen we create in Homewood is designed to honor the serene beauty of Lake Tahoe while providing the luxury and functionality our clients demand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏔️</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-4">Serene Integration</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We design kitchens that feel naturally integrated with the peaceful environment, using materials and finishes that complement the serene setting.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌊</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-4">Peaceful Lakefront Living</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our designs maximize the connection to the lake, with strategic placement and materials that enhance rather than obstruct the stunning views.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-4">Serene Craftsmanship</h3>
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
              Homewood Architectural Styles
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We understand the diverse architectural landscape of Homewood and design cabinetry that complements each unique style.
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
              Featured Homewood Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Discover our latest custom kitchen projects in Homewood's most serene neighborhoods.
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
              Understanding Homewood Living
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our deep understanding of Homewood's unique lifestyle informs every design decision we make.
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
              Homewood-Specific Considerations
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Every project in Homewood requires special attention to the unique challenges and opportunities of this serene location.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {homewoodConsiderations.map((consideration, index) => (
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
              Materials Perfect for Homewood
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We carefully select materials that complement Homewood's serene environment while providing lasting beauty and durability.
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
              Our Process for Homewood Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We've refined our process specifically for Homewood's unique requirements and our clients' peaceful lifestyle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-ivory">1</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-4">Initial Consultation</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We begin with a comprehensive consultation to understand your vision, lifestyle, and the unique characteristics of your Homewood property.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-ivory">2</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-4">Design Development</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our design team creates detailed plans that maximize your lake views while ensuring optimal functionality for your peaceful lifestyle.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-ivory">3</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-4">Fabrication</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our skilled craftspeople build your cabinetry using traditional techniques and premium materials selected for Tahoe\'s climate.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-ivory">4</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-4">Installation</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our experienced installation team ensures perfect fit and finish, working around your schedule and the unique logistics of lakefront access.
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
              Common questions about custom kitchen projects in Homewood.
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
            Ready to Transform Your Homewood Kitchen?
          </h2>
          <p className="text-xl text-ivory/90 leading-relaxed mb-12 max-w-3xl mx-auto">
            Let's discuss your vision for the perfect custom kitchen that honors the serene beauty of Lake Tahoe while providing the luxury and functionality you deserve.
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
            {neighborhoods.filter(n => n !== 'Homewood').map((neighborhood, index) => (
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
            "name": "AV's Cabinets - Custom Kitchen Builder in Homewood",
            "description": "Custom kitchen builder in Homewood specializing in luxury cabinetry for Lake Tahoe's most serene lakefront communities.",
            "url": "https://avscabinets.com/service-areas/lake-tahoe/homewood",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Homewood",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.0800",
              "longitude": "-120.1600"
            },
            "areaServed": {
              "@type": "City",
              "name": "Homewood, CA"
            },
            "serviceType": "Custom Kitchen Design and Cabinetry",
            "priceRange": "$$$"
          })
        }}
      />
    </main>
  )
}
