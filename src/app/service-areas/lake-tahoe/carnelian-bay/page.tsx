import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Custom Kitchen Builder in Carnelian Bay | Luxury Cabinetry | AV\'s Cabinets',
  description: 'Custom kitchen builder in Carnelian Bay specializing in luxury cabinetry for Lake Tahoe\'s most exclusive lakefront estates. European craftsmanship meets pristine mountain living.',
  keywords: 'custom kitchen builder Carnelian Bay, luxury cabinetry Lake Tahoe, custom kitchens Carnelian Bay, kitchen renovation Carnelian Bay, bespoke cabinetry Lake Tahoe',
  openGraph: {
    title: 'Custom Kitchen Builder in Carnelian Bay | Luxury Cabinetry | AV\'s Cabinets',
    description: 'Custom kitchen builder in Carnelian Bay specializing in luxury cabinetry for Lake Tahoe\'s most exclusive lakefront estates.',
    type: 'website',
  },
}

const localProjects = [
  {
    title: 'Carnelian Bay Waterfront Estate Kitchen',
    location: 'Carnelian Bay, CA',
    description: 'A magnificent waterfront kitchen renovation featuring custom cherry cabinetry and panoramic lake views. Designed to maximize the pristine beauty of Carnelian Bay while providing luxury functionality.',
    imageSrc: '/images/portfolio/carnelian-bay-waterfront-kitchen.webp',
    imageAlt: 'Custom waterfront kitchen with panoramic Lake Tahoe views in Carnelian Bay',
    year: '2024'
  },
  {
    title: 'Mountain Lodge Carnelian Bay Kitchen',
    location: 'Carnelian Bay, CA',
    description: 'A rustic mountain lodge kitchen with handcrafted details and premium materials. Perfect for the sophisticated Carnelian Bay lifestyle with integrated outdoor living spaces.',
    imageSrc: '/images/portfolio/carnelian-bay-mountain-lodge-kitchen.webp',
    imageAlt: 'Mountain lodge kitchen in Carnelian Bay with rustic design',
    year: '2024'
  },
  {
    title: 'Contemporary Carnelian Bay Kitchen',
    location: 'Carnelian Bay, CA',
    description: 'A sleek contemporary kitchen renovation with clean lines and luxury finishes. Designed for entertaining and family gatherings in the heart of Carnelian Bay.',
    imageSrc: '/images/portfolio/carnelian-bay-contemporary-kitchen.webp',
    imageAlt: 'Contemporary kitchen in Carnelian Bay with modern design',
    year: '2023'
  }
]

const localArchitecture = [
  {
    style: 'Waterfront Contemporary',
    description: 'Carnelian Bay\'s waterfront homes feature floor-to-ceiling windows, natural stone, and open floor plans that showcase the crystal-clear lake views. Our cabinetry complements these elements with minimalist designs and premium materials that enhance the connection to nature.',
    characteristics: ['Floor-to-ceiling windows', 'Natural stone', 'Crystal-clear views', 'Minimalist design']
  },
  {
    style: 'Mountain Lodge',
    description: 'Mountain lodge homes in Carnelian Bay embrace rustic elegance, natural textures, and sophisticated finishes. Our cabinetry honors this aesthetic with hand-crafted details and authentic materials that reflect the mountain environment.',
    characteristics: ['Rustic elegance', 'Natural textures', 'Hand-crafted details', 'Authentic materials']
  },
  {
    style: 'Modern Alpine',
    description: 'Modern alpine homes feature clean lines, warm wood tones, and contemporary finishes. Our cabinetry integrates seamlessly with these spaces, offering modern functionality and premium materials that honor the area\'s natural beauty.',
    characteristics: ['Clean lines', 'Warm wood tones', 'Contemporary finishes', 'Modern functionality']
  }
]

const localInsights = [
  {
    title: 'Pristine Lakefront Living',
    description: 'Carnelian Bay residents value the pristine lakefront environment and outdoor living. We design cabinetry that enhances this connection while providing the luxury and functionality expected in exclusive lakefront estates.',
    icon: '🏔️'
  },
  {
    title: 'Sophisticated Entertaining',
    description: 'Many Carnelian Bay homes are designed for sophisticated entertaining, with open floor plans and integrated indoor-outdoor living. We create cabinetry that supports this lifestyle with elegant storage and serving solutions.',
    icon: '🍽️'
  },
  {
    title: 'Exclusive Luxury',
    description: 'Carnelian Bay residents expect the finest materials and finishes. We work exclusively with premium hardwoods, custom hardware, and luxury finishes that meet the highest standards of exclusivity.',
    icon: '💎'
  },
  {
    title: 'Natural Harmony',
    description: 'The pristine lakefront environment requires special consideration for views and natural light. We use materials and finishes that complement the natural setting while maintaining luxury aesthetics.',
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

const carnelianBayConsiderations = [
  {
    title: 'Pristine Lake Views',
    description: 'Maximizing the crystal-clear lake views while maintaining privacy and functionality requires careful planning of cabinet placement and window treatments.',
    details: ['Strategic cabinet heights', 'Reflective surfaces', 'Minimal visual obstruction', 'Natural light optimization']
  },
  {
    title: 'Exclusive Access',
    description: 'Carnelian Bay\'s exclusive location requires special consideration for material delivery and installation logistics, ensuring minimal disruption to the pristine environment.',
    details: ['Specialized delivery methods', 'Minimal environmental impact', 'Coordinated installation', 'Preservation of privacy']
  },
  {
    title: 'Sophisticated Entertaining',
    description: 'Many Carnelian Bay homes feature large entertaining areas that require cabinetry designed for both functionality and aesthetic appeal.',
    details: ['Wine storage solutions', 'Serving areas', 'Integrated appliances', 'Flexible storage']
  },
  {
    title: 'Year-Round Living',
    description: 'Seamless year-round living requires cabinetry that can handle both summer entertaining and winter coziness.',
    details: ['Seasonal adaptability', 'Durable materials', 'Flexible design', 'Comfort considerations']
  }
]

const localMaterials = [
  {
    name: 'Cherry',
    description: 'Rich, warm cherry is perfect for Carnelian Bay\'s sophisticated aesthetic, providing both beauty and durability.',
    characteristics: ['Rich color tones', 'Warm grain patterns', 'Excellent durability', 'Sophisticated appeal']
  },
  {
    name: 'Maple',
    description: 'Light, clean maple provides a modern contrast while maintaining the natural aesthetic of the lakefront environment.',
    characteristics: ['Light color', 'Clean appearance', 'Modern appeal', 'Versatile finish options']
  },
  {
    name: 'Oak',
    description: 'Classic oak offers timeless beauty that complements both traditional and contemporary designs in Carnelian Bay.',
    characteristics: ['Timeless beauty', 'Classic grain', 'Versatile styling', 'Durable construction']
  }
]

const faqs = [
  {
    question: 'How long does a custom kitchen project take in Carnelian Bay?',
    answer: 'Custom kitchen projects in Carnelian Bay typically take 14-18 weeks from design approval to completion. This extended timeline accounts for the unique challenges of exclusive lakefront construction, including specialized delivery methods, environmental considerations, and the need for materials that can withstand Tahoe\'s climate while maintaining the pristine environment. We work closely with local contractors and suppliers to ensure efficient project delivery while maintaining our high standards of craftsmanship.'
  },
  {
    question: 'What are the most popular kitchen styles in Carnelian Bay?',
    answer: 'Carnelian Bay homeowners favor waterfront contemporary, mountain lodge, and modern alpine styles. Waterfront contemporary emphasizes clean lines and natural materials to complement the crystal-clear lake views. Mountain lodge combines rustic elements with sophisticated design, while modern alpine style offers contemporary functionality with natural materials. Each style is carefully adapted to maximize the connection between indoor and outdoor living spaces while maintaining the exclusive character of the area.'
  },
  {
    question: 'How do you handle the unique challenges of exclusive lakefront construction?',
    answer: 'Exclusive lakefront construction in Carnelian Bay requires special consideration for environmental impact, privacy, and access. We design cabinetry with strategic heights to maximize lake views while maintaining functionality. We use materials and finishes that can withstand humidity and temperature fluctuations, and we work with specialized delivery methods that minimize environmental impact. Every project includes careful planning for the unique logistics of exclusive lakefront access and construction.'
  },
  {
    question: 'What materials work best for Carnelian Bay\'s exclusive environment?',
    answer: 'Carnelian Bay\'s exclusive lakefront location requires materials that can withstand temperature fluctuations and humidity changes while maintaining the pristine environment. We recommend stable wood species like cherry, maple, and oak, which are less prone to expansion and contraction. All cabinetry is properly sealed and finished to protect against moisture, and we use hardware specifically designed for lakefront environments. We also consider the impact of UV exposure on finishes in homes with extensive natural light.'
  },
  {
    question: 'Do you work with local contractors and suppliers in Carnelian Bay?',
    answer: 'Yes, we have established relationships with local contractors, suppliers, and tradespeople throughout the Carnelian Bay area. These partnerships ensure efficient project delivery and access to materials that are well-suited to the local climate and building requirements. Our local network includes specialized craftspeople who understand the unique challenges of exclusive lakefront construction and can provide the expertise needed for complex projects while maintaining the pristine environment.'
  },
  {
    question: 'How do you approach kitchen design for sophisticated entertaining in Carnelian Bay?',
    answer: 'Carnelian Bay\'s sophisticated entertaining lifestyle requires kitchens designed for both functionality and social interaction. We create open floor plans that flow seamlessly into living and outdoor spaces, with cabinetry that supports large-scale entertaining. This includes wine storage solutions, integrated serving areas, and flexible storage for seasonal use. We also consider the acoustics and sight lines that make entertaining enjoyable, ensuring the kitchen becomes the heart of the home for both intimate gatherings and large parties while maintaining the exclusive character of the area.'
  }
]

export default function CarnelianBayPage() {
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
            <li className="text-charcoal">Carnelian Bay</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/portfolio/gallery-luxury-custom-kitchen-17-sacramento-california.webp"
            alt="Custom kitchen builder in Carnelian Bay with stunning lake views"
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
            Custom Kitchen Builder in Carnelian Bay
          </h1>
          <p className="text-xl md:text-2xl text-ivory/90 leading-relaxed mb-8 max-w-3xl mx-auto text-balance">
            Luxury custom kitchens and bespoke cabinetry for Lake Tahoe's most exclusive lakefront estates. European craftsmanship meets pristine mountain living.
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
                Carnelian Bay's Premier Kitchen Builder
              </h2>
              <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                Carnelian Bay represents the pinnacle of exclusive Lake Tahoe living, where pristine lakefront estates meet the natural beauty of the Sierra Nevada mountains. As the area's most trusted custom kitchen builder, we understand the unique demands of this prestigious community.
              </p>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
                Our clients in Carnelian Bay are discerning homeowners who demand nothing less than perfection. They seek kitchen spaces that not only provide exceptional functionality but also serve as the heart of their sophisticated entertainment and family life. With crystal-clear lake views and mountain vistas as the backdrop, every kitchen we create must complement this extraordinary setting.
              </p>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                We specialize in creating kitchens that seamlessly integrate with the pristine environment while providing the luxury and sophistication expected in Carnelian Bay's most exclusive homes. Our approach combines European craftsmanship with an understanding of exclusive lakefront living, ensuring every project exceeds expectations.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-18-sacramento-california.webp"
                alt="Mountain lodge kitchen design in Carnelian Bay"
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
              Our Design Philosophy for Carnelian Bay
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Every kitchen we create in Carnelian Bay is designed to honor the pristine beauty of Lake Tahoe while providing the luxury and functionality our clients demand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏔️</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-4">Pristine Integration</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We design kitchens that feel naturally integrated with the pristine lakefront environment, using materials and finishes that complement the natural setting.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌊</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-4">Exclusive Lakefront Living</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our designs maximize the connection to the crystal-clear lake, with strategic placement and materials that enhance rather than obstruct the stunning views.
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
              Carnelian Bay Architectural Styles
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We understand the diverse architectural landscape of Carnelian Bay and design cabinetry that complements each unique style.
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
              Featured Carnelian Bay Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Discover our latest custom kitchen projects in Carnelian Bay's most exclusive neighborhoods.
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
              Understanding Carnelian Bay Living
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our deep understanding of Carnelian Bay's unique lifestyle informs every design decision we make.
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
              Carnelian Bay-Specific Considerations
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Every project in Carnelian Bay requires special attention to the unique challenges and opportunities of this exclusive location.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {carnelianBayConsiderations.map((consideration, index) => (
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
              Materials Perfect for Carnelian Bay
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We carefully select materials that complement Carnelian Bay's pristine environment while providing lasting beauty and durability.
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
              Our Process for Carnelian Bay Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We've refined our process specifically for Carnelian Bay's unique requirements and our clients' high expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-ivory">1</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-4">Initial Consultation</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We begin with a comprehensive consultation to understand your vision, lifestyle, and the unique characteristics of your Carnelian Bay property.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-ivory">2</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-4">Design Development</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our design team creates detailed plans that maximize your lake views while ensuring optimal functionality for your lifestyle.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-ivory">3</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-4">Fabrication</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our skilled craftspeople build your cabinetry using traditional techniques and premium materials selected for Tahoe's climate.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-ivory">4</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-4">Installation</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our experienced installation team ensures perfect fit and finish, working around your schedule and the unique logistics of exclusive lakefront access.
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
              Common questions about custom kitchen projects in Carnelian Bay.
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
            Ready to Transform Your Carnelian Bay Kitchen?
          </h2>
          <p className="text-xl text-ivory/90 leading-relaxed mb-12 max-w-3xl mx-auto">
            Let's discuss your vision for the perfect custom kitchen that honors the pristine beauty of Lake Tahoe while providing the luxury and functionality you deserve.
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
            {neighborhoods.filter(n => n !== 'Carnelian Bay').map((neighborhood, index) => (
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
            "name": "AV's Cabinets - Custom Kitchen Builder in Carnelian Bay",
            "description": "Custom kitchen builder in Carnelian Bay specializing in luxury cabinetry for Lake Tahoe's most exclusive lakefront estates.",
            "url": "https://avscabinets.com/service-areas/lake-tahoe/carnelian-bay",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Carnelian Bay",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.2250",
              "longitude": "-120.0814"
            },
            "areaServed": {
              "@type": "City",
              "name": "Carnelian Bay, CA"
            },
            "serviceType": "Custom Kitchen Design and Cabinetry",
            "priceRange": "$$$"
          })
        }}
      />
    </main>
  )
}
