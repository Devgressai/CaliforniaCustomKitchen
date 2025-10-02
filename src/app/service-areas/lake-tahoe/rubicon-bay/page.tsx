import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Custom Kitchen Builder in Rubicon Bay | Luxury Cabinetry | AV\'s Cabinets',
  description: 'Custom kitchen builder in Rubicon Bay specializing in luxury cabinetry for Lake Tahoe\'s most exclusive west shore communities. European craftsmanship meets pristine mountain living.',
  keywords: 'custom kitchen builder Rubicon Bay, luxury cabinetry Lake Tahoe, custom kitchens Rubicon Bay, kitchen renovation Rubicon Bay, bespoke cabinetry Lake Tahoe',
  openGraph: {
    title: 'Custom Kitchen Builder in Rubicon Bay | Luxury Cabinetry | AV\'s Cabinets',
    description: 'Custom kitchen builder in Rubicon Bay specializing in luxury cabinetry for Lake Tahoe\'s most exclusive west shore communities.',
    type: 'website',
  },
}

const localProjects = [
  {
    title: 'Rubicon Bay West Shore Estate Kitchen',
    location: 'Rubicon Bay, CA',
    description: 'A magnificent west shore estate kitchen renovation featuring custom walnut cabinetry and panoramic lake views. Designed to maximize the stunning west shore setting while providing luxury functionality.',
    imageSrc: '/images/portfolio/rubicon-bay-west-shore-kitchen.webp',
    imageAlt: 'Custom west shore estate kitchen with panoramic Lake Tahoe views in Rubicon Bay',
    year: '2024'
  },
  {
    title: 'Mountain Contemporary Rubicon Bay Kitchen',
    location: 'Rubicon Bay, CA',
    description: 'A sophisticated mountain contemporary kitchen with clean lines and premium materials. Perfect for the luxury Rubicon Bay lifestyle with integrated outdoor living spaces.',
    imageSrc: '/images/portfolio/rubicon-bay-contemporary-kitchen.webp',
    imageAlt: 'Mountain contemporary kitchen in Rubicon Bay with sophisticated design',
    year: '2024'
  },
  {
    title: 'Traditional Rubicon Bay Cabin Kitchen',
    location: 'Rubicon Bay, CA',
    description: 'A classic traditional cabin kitchen renovation with handcrafted details and natural finishes. Designed for elegant family gatherings and mountain living in Rubicon Bay.',
    imageSrc: '/images/portfolio/rubicon-bay-traditional-kitchen.webp',
    imageAlt: 'Traditional cabin kitchen in Rubicon Bay with handcrafted details',
    year: '2023'
  }
]

const localArchitecture = [
  {
    style: 'West Shore Estate',
    description: 'Rubicon Bay\'s west shore estates feature grand proportions, natural materials, and expansive lake views. Our cabinetry complements these elements with sophisticated designs and premium materials that enhance the west shore setting.',
    characteristics: ['Grand proportions', 'Natural materials', 'Lake views', 'Sophisticated design']
  },
  {
    style: 'Mountain Contemporary',
    description: 'Mountain contemporary homes in Rubicon Bay embrace clean lines with natural textures and premium finishes. Our cabinetry honors this aesthetic with modern designs and authentic materials that reflect the mountain environment.',
    characteristics: ['Clean lines', 'Natural textures', 'Premium finishes', 'Modern design']
  },
  {
    style: 'Traditional Alpine',
    description: 'Traditional alpine homes feature warm wood tones, handcrafted details, and elegant living spaces. Our cabinetry integrates seamlessly with these spaces, offering traditional craftsmanship and authentic materials that honor the mountain heritage.',
    characteristics: ['Warm wood tones', 'Handcrafted details', 'Elegant spaces', 'Traditional craftsmanship']
  }
]

const localInsights = [
  {
    title: 'West Shore Luxury Living',
    description: 'Rubicon Bay residents value the exclusive west shore lifestyle and outdoor recreation. We design cabinetry that supports this lifestyle while providing the luxury and functionality expected in west shore estates.',
    icon: '🏔️'
  },
  {
    title: 'Sophisticated Entertaining',
    description: 'Many Rubicon Bay homes are designed for sophisticated entertaining, with grand spaces and integrated indoor-outdoor living. We create cabinetry that supports this lifestyle with elegant storage and serving solutions.',
    icon: '🍽️'
  },
  {
    title: 'Exclusive Luxury',
    description: 'Rubicon Bay residents expect the finest materials and finishes. We work exclusively with premium hardwoods, custom hardware, and luxury finishes that meet the highest standards of west shore luxury.',
    icon: '💎'
  },
  {
    title: 'Natural Integration',
    description: 'The west shore environment requires special consideration for views and natural light. We use materials and finishes that complement the natural setting while maintaining luxury aesthetics.',
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

const rubiconBayConsiderations = [
  {
    title: 'West Shore Views',
    description: 'Maximizing west shore lake views while maintaining privacy and functionality requires careful planning of cabinet placement and window treatments.',
    details: ['Strategic cabinet heights', 'Reflective surfaces', 'Minimal visual obstruction', 'Natural light optimization']
  },
  {
    title: 'Exclusive Access',
    description: 'Rubicon Bay\'s exclusive west shore location requires special consideration for material delivery and installation logistics.',
    details: ['Specialized delivery methods', 'Minimal environmental impact', 'Coordinated installation', 'Preservation of privacy']
  },
  {
    title: 'Luxury Entertaining',
    description: 'Many Rubicon Bay homes feature grand entertaining areas that require cabinetry designed for both functionality and aesthetic appeal.',
    details: ['Wine storage solutions', 'Serving areas', 'Integrated appliances', 'Flexible storage']
  },
  {
    title: 'West Shore Integration',
    description: 'Seamless west shore living requires cabinetry that complements both interior and exterior design elements.',
    details: ['Weather-resistant materials', 'Consistent design language', 'Outdoor storage solutions', 'Transitional spaces']
  }
]

const localMaterials = [
  {
    name: 'Walnut',
    description: 'Rich, warm walnut is perfect for Rubicon Bay\'s sophisticated west shore aesthetic, providing both beauty and durability.',
    characteristics: ['Rich grain patterns', 'Warm color tones', 'Excellent durability', 'Sophisticated appeal']
  },
  {
    name: 'Cherry',
    description: 'Cherry wood offers a classic look that ages beautifully and complements the traditional architecture of Rubicon Bay.',
    characteristics: ['Classic appearance', 'Aging properties', 'Smooth grain', 'Traditional appeal']
  },
  {
    name: 'Maple',
    description: 'Light, clean maple provides a modern contrast to darker woods while maintaining the natural aesthetic.',
    characteristics: ['Light color', 'Clean appearance', 'Modern appeal', 'Versatile finish options']
  }
]

const faqs = [
  {
    question: 'How long does a custom kitchen project take in Rubicon Bay?',
    answer: 'Custom kitchen projects in Rubicon Bay typically take 14-18 weeks from design approval to completion. This extended timeline accounts for the unique challenges of west shore construction, including weather considerations, exclusive access logistics, and the need for materials that can withstand Tahoe\'s climate while maintaining the pristine environment. We work closely with local contractors and suppliers to ensure efficient project delivery while maintaining our high standards of craftsmanship.'
  },
  {
    question: 'What are the most popular kitchen styles in Rubicon Bay?',
    answer: 'Rubicon Bay homeowners favor west shore estate, mountain contemporary, and traditional alpine styles. West shore estate emphasizes grand proportions and natural materials to complement the stunning lake views. Mountain contemporary combines clean lines with natural textures, while traditional alpine style honors the area\'s heritage with warm wood tones and handcrafted details. Each style is carefully adapted to maximize the connection between indoor and outdoor living spaces while maintaining the exclusive character of the area.'
  },
  {
    question: 'How do you handle the unique challenges of west shore construction?',
    answer: 'West shore construction in Rubicon Bay requires special consideration for environmental impact, privacy, and access. We design cabinetry with strategic heights to maximize lake views while maintaining functionality. We use materials and finishes that can withstand humidity and temperature fluctuations, and we work with specialized delivery methods that minimize environmental impact. Every project includes careful planning for the unique logistics of exclusive west shore access and construction.'
  },
  {
    question: 'What materials work best for Rubicon Bay\'s west shore environment?',
    answer: 'Rubicon Bay\'s exclusive west shore location requires materials that can withstand temperature fluctuations and humidity changes while maintaining the pristine environment. We recommend stable wood species like walnut, cherry, and maple, which are less prone to expansion and contraction. All cabinetry is properly sealed and finished to protect against moisture, and we use hardware specifically designed for lakefront environments. We also consider the impact of UV exposure on finishes in homes with extensive natural light.'
  },
  {
    question: 'Do you work with local contractors and suppliers in Rubicon Bay?',
    answer: 'Yes, we have established relationships with local contractors, suppliers, and tradespeople throughout the Rubicon Bay area. These partnerships ensure efficient project delivery and access to materials that are well-suited to the local climate and building requirements. Our local network includes specialized craftspeople who understand the unique challenges of west shore construction and can provide the expertise needed for complex projects while maintaining the pristine environment.'
  },
  {
    question: 'How do you approach kitchen design for sophisticated entertaining in Rubicon Bay?',
    answer: 'Sophisticated entertaining in Rubicon Bay requires kitchens designed for both functionality and social interaction. We create grand floor plans that flow seamlessly into living and outdoor spaces, with cabinetry that supports large-scale entertaining. This includes wine storage solutions, integrated serving areas, and flexible storage for seasonal use. We also consider the acoustics and sight lines that make entertaining enjoyable, ensuring the kitchen becomes the heart of the home for both intimate gatherings and large parties while maintaining the exclusive character of the area.'
  }
]

export default function RubiconBayPage() {
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
            <li className="text-charcoal">Rubicon Bay</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/portfolio/gallery-luxury-custom-kitchen-32-sacramento-california.webp"
            alt="Custom kitchen builder in Rubicon Bay with stunning west shore views"
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
            Custom Kitchen Builder in Rubicon Bay
          </h1>
          <p className="text-xl md:text-2xl text-ivory/90 leading-relaxed mb-8 max-w-3xl mx-auto text-balance">
            Luxury custom kitchens and bespoke cabinetry for Lake Tahoe's most exclusive west shore communities. European craftsmanship meets pristine mountain living.
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
                Rubicon Bay's Premier Kitchen Builder
              </h2>
              <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                Rubicon Bay represents the pinnacle of exclusive west shore living, where prestigious mountain estates meet the natural beauty of the Sierra Nevada mountains. As the area's most trusted custom kitchen builder, we understand the unique demands of this exclusive community.
              </p>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
                Our clients in Rubicon Bay are discerning homeowners who demand nothing less than perfection. They seek kitchen spaces that not only provide exceptional functionality but also serve as the heart of their sophisticated entertainment and family life. With panoramic west shore lake views and mountain vistas as the backdrop, every kitchen we create must complement this extraordinary setting.
              </p>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                We specialize in creating kitchens that seamlessly integrate with the west shore environment while providing the luxury and sophistication expected in Rubicon Bay's most exclusive homes. Our approach combines European craftsmanship with an understanding of west shore luxury living, ensuring every project exceeds expectations.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-33-sacramento-california.webp"
                alt="West shore estate kitchen design in Rubicon Bay"
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
              Our Design Philosophy for Rubicon Bay
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Every kitchen we create in Rubicon Bay is designed to honor the west shore beauty of Lake Tahoe while providing the luxury and functionality our clients demand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏔️</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-4">West Shore Integration</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We design kitchens that feel naturally integrated with the west shore environment, using materials and finishes that complement the exclusive setting.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌊</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-4">Exclusive Lakefront Living</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our designs maximize the connection to the west shore lake, with strategic placement and materials that enhance rather than obstruct the stunning views.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-4">Exclusive Craftsmanship</h3>
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
              Rubicon Bay Architectural Styles
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We understand the diverse architectural landscape of Rubicon Bay and design cabinetry that complements each unique style.
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
              Featured Rubicon Bay Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Discover our latest custom kitchen projects in Rubicon Bay's most exclusive neighborhoods.
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
              Understanding Rubicon Bay Living
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our deep understanding of Rubicon Bay's unique lifestyle informs every design decision we make.
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
              Rubicon Bay-Specific Considerations
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Every project in Rubicon Bay requires special attention to the unique challenges and opportunities of this exclusive location.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rubiconBayConsiderations.map((consideration, index) => (
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
              Materials Perfect for Rubicon Bay
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We carefully select materials that complement Rubicon Bay's west shore environment while providing lasting beauty and durability.
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
              Our Process for Rubicon Bay Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We've refined our process specifically for Rubicon Bay's unique requirements and our clients' high expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-ivory">1</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-4">Initial Consultation</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We begin with a comprehensive consultation to understand your vision, lifestyle, and the unique characteristics of your Rubicon Bay property.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-ivory">2</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-4">Design Development</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our design team creates detailed plans that maximize your west shore lake views while ensuring optimal functionality for your lifestyle.
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
                Our experienced installation team ensures perfect fit and finish, working around your schedule and the unique logistics of west shore access.
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
              Common questions about custom kitchen projects in Rubicon Bay.
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
            Ready to Transform Your Rubicon Bay Kitchen?
          </h2>
          <p className="text-xl text-ivory/90 leading-relaxed mb-12 max-w-3xl mx-auto">
            Let's discuss your vision for the perfect custom kitchen that honors the west shore beauty of Lake Tahoe while providing the luxury and functionality you deserve.
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
            {neighborhoods.filter(n => n !== 'Rubicon Bay').map((neighborhood, index) => (
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
            "name": "AV's Cabinets - Custom Kitchen Builder in Rubicon Bay",
            "description": "Custom kitchen builder in Rubicon Bay specializing in luxury cabinetry for Lake Tahoe's most exclusive west shore communities.",
            "url": "https://avscabinets.com/service-areas/lake-tahoe/rubicon-bay",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Rubicon Bay",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.0200",
              "longitude": "-120.1100"
            },
            "areaServed": {
              "@type": "City",
              "name": "Rubicon Bay, CA"
            },
            "serviceType": "Custom Kitchen Design and Cabinetry",
            "priceRange": "$$$"
          })
        }}
      />
    </main>
  )
}
