import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Custom Kitchens Los Altos | Luxury Cabinetry Silicon Valley | PineWood Cabinets',
  description: 'Museum-grade custom kitchens and bespoke cabinetry for Los Altos\' most prestigious family homes. Serving Silicon Valley\'s luxury market with uncompromising craftsmanship since 2006.',
  keywords: [
    'custom kitchens Los Altos',
    'luxury cabinetry Silicon Valley',
    'bespoke cabinetry Los Altos',
    'custom kitchen cabinets Los Altos',
    'architectural millwork Silicon Valley',
    'luxury kitchen design Los Altos',
    'custom cabinets Los Altos',
    'high-end kitchen renovation',
    'premium cabinetry Los Altos',
    'custom millwork Silicon Valley',
    'kitchen design consultation Los Altos',
    'luxury home renovation Silicon Valley',
    'custom storage solutions Los Altos',
    'wine cellar design Los Altos',
    'kitchen remodeling Los Altos'
  ],
  openGraph: {
    title: 'Custom Kitchens Los Altos | Luxury Cabinetry Silicon Valley',
    description: 'Museum-grade custom kitchens and bespoke cabinetry for Los Altos\' most prestigious family homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Los Altos",
  "Museum-grade custom kitchens and bespoke cabinetry for Los Altos' most prestigious family homes in Silicon Valley",
  "Custom Kitchens",
  ["Los Altos, CA", "Silicon Valley, CA", "Palo Alto, CA", "Mountain View, CA", "Cupertino, CA"]
)

export default function LosAltosPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Custom Kitchens Los Altos"
        subtitle="Museum-Grade Cabinetry for Silicon Valley's Family Luxury"
        description="Serving Los Altos' discerning families with uncompromising craftsmanship and luxury kitchen design since 2006."
        imageSrc="service-areas/los-altos-hero.webp"
        imageAlt="Luxury custom kitchen in Los Altos family home with premium cabinetry and modern design"
      />

      {/* Los Altos Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in los-altos</h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Los Altos represents the pinnacle of Silicon Valley family living—where suburban tranquility meets sophisticated luxury. Our Los Altos clients understand that true elegance lies in creating spaces that serve both the practical needs of family life and the refined tastes of successful professionals.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From traditional ranch homes to contemporary architectural masterpieces, Los Altos' diverse residential landscape demands cabinetry solutions that seamlessly blend family functionality with luxury design and uncompromising quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Population</h3>
                  <p className="text-2xl font-bold text-brass">31,000+</p>
                  <p className="text-sm text-charcoal/70">Family residents</p>
                </div>
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Median Home Value</h3>
                  <p className="text-2xl font-bold text-brass">$3.8M+</p>
                  <p className="text-sm text-charcoal/70">Luxury family market</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/service-areas/los-altos-overview.webp"
                alt="Los Altos neighborhood landscape with luxury family homes and tree-lined streets"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Family Living Expertise */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in los-altos</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our deep understanding of Los Altos' unique family lifestyle and luxury market enables us to deliver cabinetry solutions that perfectly complement both practical family needs and sophisticated living standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Family Functionality</h3>
              <p className="text-charcoal/70 mb-4">
                Los Altos families demand kitchens that can handle everything from busy weekday mornings to large family gatherings and entertaining.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Durable materials</li>
                <li>• Ample storage</li>
                <li>• Multi-functional spaces</li>
                <li>• Easy maintenance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Luxury Standards</h3>
              <p className="text-charcoal/70 mb-4">
                Los Altos' luxury market demands the highest standards in materials, craftsmanship, and design sophistication.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Premium materials</li>
                <li>• Custom details</li>
                <li>• Professional appliances</li>
                <li>• Architectural integration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Tech Integration</h3>
              <p className="text-charcoal/70 mb-4">
                Silicon Valley families expect seamless technology integration that supports their connected lifestyle and work-from-home needs.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Smart home systems</li>
                <li>• Charging stations</li>
                <li>• Work spaces</li>
                <li>• Entertainment systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Los Altos Neighborhoods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in los-altos</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From the historic downtown to the exclusive hillside estates, we serve all of Los Altos' most prestigious neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Downtown Los Altos',
              'Hillside Estates',
              'Loyola Corners',
              'Rancho San Antonio',
              'Foothill Estates',
              'Cuesta Park',
              'Coventry Court',
              'Hillview',
              'Meadowbrook',
              'Oak Grove',
              'San Antonio Road',
              'University Avenue'
            ].map((neighborhood) => (
              <div key={neighborhood} className="bg-ivory p-6 rounded-lg shadow-sm border border-french-gray/20 text-center hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-charcoal mb-2">{neighborhood}</h3>
                <p className="text-sm text-charcoal/70">Custom cabinetry services</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Design Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in los-altos</h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Los Altos' unique family-focused environment creates distinct requirements for luxury kitchen design. Our approach honors the practical needs of family life while delivering the sophistication and quality that defines Silicon Valley luxury.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning breakfast routines to evening family dinners and weekend entertaining, every design decision reflects an understanding of how Los Altos families truly live and create lasting memories in their homes.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Family Functionality</h3>
                <p className="text-ivory/80">Designs that support the practical needs of busy family life while maintaining luxury standards.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Durable Luxury</h3>
                <p className="text-ivory/80">Materials and finishes that withstand family use while maintaining their beauty and sophistication.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Tech Integration</h3>
                <p className="text-ivory/80">Seamless integration of modern technology that supports the connected Silicon Valley lifestyle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in los-altos</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of custom kitchens and cabinetry projects throughout Los Altos' most prestigious family neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/los-altos-family-kitchen.webp"
                alt="Family kitchen in Los Altos with custom cabinetry and functional design for busy family life"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Family Hub</h3>
                <p className="text-charcoal/70 mb-4">Designed for busy family life with ample storage, durable materials, and functional layout.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Family Design</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Durable Materials</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/los-altos-luxury-kitchen.webp"
                alt="Luxury kitchen in Los Altos with premium cabinetry and sophisticated design"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Luxury Family</h3>
                <p className="text-charcoal/70 mb-4">Sophisticated design that balances family functionality with luxury aesthetics and premium materials.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Premium Materials</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Sophisticated Design</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/los-altos-tech-kitchen.webp"
                alt="Tech-integrated kitchen in Los Altos with smart home features and modern design"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Tech Family</h3>
                <p className="text-charcoal/70 mb-4">Smart home integrated kitchen designed for the modern Silicon Valley family lifestyle.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Smart Home</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Tech Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Lifestyle Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in los-altos</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our Los Altos kitchens are designed to support the unique family lifestyle and values of this special Silicon Valley community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Family Functionality</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Durable materials that withstand daily family use and busy schedules</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Ample storage solutions for family supplies, school materials, and household items</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Multi-functional spaces that adapt to different family activities and needs</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Entertainment Ready</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Open layouts perfect for family gatherings and entertaining</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Professional-grade appliances for serious cooking and hosting</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Integrated wine storage and bar areas for adult entertaining</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Tech Integration</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Smart home systems that support the connected Silicon Valley lifestyle</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Integrated charging stations and connectivity for all family devices</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Work-from-home integration and quiet spaces for professional needs</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Educational Support</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Study areas and homework stations integrated into kitchen design</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Storage solutions for school supplies, projects, and educational materials</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Flexible spaces that support different learning styles and activities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in los-altos</h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchen design in Los Altos
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you balance family functionality with luxury design in Los Altos?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Los Altos families need kitchens that can handle daily wear and tear while maintaining luxury aesthetics. We use durable, high-quality materials that are both beautiful and practical. This includes scratch-resistant finishes, easy-to-clean surfaces, and robust hardware. We design with family traffic patterns in mind, ensuring high-use areas are reinforced while maintaining the sophisticated look our clients expect.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle Los Altos' diverse architectural styles?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Los Altos' architectural diversity requires expertise in multiple styles, from traditional ranch homes to contemporary masterpieces. We study each home's unique character and create cabinetry that enhances rather than competes with the existing architecture. Whether it's a mid-century modern or a traditional colonial, we ensure our designs feel like they were always meant to be there.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's your approach to tech integration for Silicon Valley families?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Silicon Valley families expect seamless technology integration. We work with smart home systems, integrate charging stations, and design spaces that support work-from-home needs. This includes hidden cable management, integrated lighting controls, and cabinetry that accommodates modern devices while maintaining clean aesthetics. We stay current with the latest smart home technologies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle Los Altos' family-focused lifestyle requirements?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Los Altos families have unique needs including homework stations, storage for school supplies, and spaces that support different family activities. We design flexible layouts that can adapt to changing family needs, include ample storage for family supplies, and create spaces that support both individual work and family togetherness. We also consider safety features and child-friendly design elements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Create Your Los Altos Dream Kitchen?"
        description="Join Los Altos' most discerning families who have chosen PineWood Cabinets for their custom cabinetry needs. Schedule a private consultation to discuss how we can bring your vision to life with uncompromising craftsmanship."
        primaryCTA={{
          text: "Schedule Consultation",
          href: "/contact"
        }}
      />
    </>
  )
}
