import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Custom Kitchens Belvedere | Luxury Cabinetry Marin County | PineWood Cabinets',
  description: 'Museum-grade custom kitchens and bespoke cabinetry for Belvedere\'s most prestigious island homes. Serving Marin County\'s luxury market with uncompromising craftsmanship since 2006.',
  keywords: [
    'custom kitchens Belvedere',
    'luxury cabinetry Marin County',
    'bespoke cabinetry Belvedere',
    'custom kitchen cabinets Belvedere',
    'architectural millwork Marin County',
    'luxury kitchen design Belvedere',
    'custom cabinets Belvedere',
    'high-end kitchen renovation',
    'premium cabinetry Belvedere',
    'custom millwork Marin County',
    'kitchen design consultation Belvedere',
    'luxury home renovation Marin County',
    'custom storage solutions Belvedere',
    'wine cellar design Belvedere',
    'kitchen remodeling Belvedere'
  ],
  openGraph: {
    title: 'Custom Kitchens Belvedere | Luxury Cabinetry Marin County',
    description: 'Museum-grade custom kitchens and bespoke cabinetry for Belvedere\'s most prestigious island homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Belvedere",
  "Museum-grade custom kitchens and bespoke cabinetry for Belvedere's most prestigious island homes in Marin County",
  "Custom Kitchens",
  ["Belvedere, CA", "Marin County, CA", "Tiburon, CA", "Sausalito, CA", "Mill Valley, CA"]
)

export default function BelvederePage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Custom Kitchens Belvedere"
        subtitle="Museum-Grade Cabinetry for Marin County's Most Exclusive Island"
        description="Serving Belvedere's discerning homeowners with uncompromising craftsmanship and luxury kitchen design since 2006."
        imageSrc="service-areas/belvedere-hero.webp"
        imageAlt="Luxury custom kitchen in Belvedere island home with premium cabinetry and panoramic bay views"
      />

      {/* Belvedere Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in belvedere</h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Perched on its own private island in Richardson Bay, Belvedere represents the absolute pinnacle of Marin County luxury living—where exclusivity meets breathtaking natural beauty. Our Belvedere clients understand that true elegance lies in creating spaces that honor both the island's unique character and their own sophisticated lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From the historic Mediterranean villas to the contemporary architectural masterpieces, Belvedere's diverse yet cohesive architectural landscape demands cabinetry solutions that reflect the highest standards of craftsmanship and design excellence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Population</h3>
                  <p className="text-2xl font-bold text-brass">2,100+</p>
                  <p className="text-sm text-charcoal/70">Exclusive residents</p>
                </div>
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Median Home Value</h3>
                  <p className="text-2xl font-bold text-brass">$4.2M+</p>
                  <p className="text-sm text-charcoal/70">Ultra-luxury market</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/service-areas/belvedere-overview.webp"
                alt="Belvedere island landscape with luxury homes and panoramic bay views"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Island Living Expertise */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in belvedere</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our intimate knowledge of Belvedere's unique island environment and ultra-luxury market enables us to deliver cabinetry solutions that perfectly complement both the exclusive setting and the highest standards of living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Ultra-Luxury Standards</h3>
              <p className="text-charcoal/70 mb-4">
                Belvedere's exclusive island setting demands the absolute highest standards in materials, craftsmanship, and design sophistication.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Museum-grade materials</li>
                <li>• Handcrafted details</li>
                <li>• Custom hardware</li>
                <li>• Architectural integration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Island Architecture</h3>
              <p className="text-charcoal/70 mb-4">
                Belvedere's unique architectural heritage requires cabinetry that honors both historic character and contemporary luxury standards.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Mediterranean influences</li>
                <li>• Contemporary minimalism</li>
                <li>• Historic preservation</li>
                <li>• Custom millwork</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Entertainment Excellence</h3>
              <p className="text-charcoal/70 mb-4">
                Belvedere's social lifestyle demands kitchens that can host the most sophisticated gatherings and intimate family moments.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Grand entertaining spaces</li>
                <li>• Professional-grade appliances</li>
                <li>• Wine cellar integration</li>
                <li>• Outdoor coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Belvedere Neighborhoods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in belvedere</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From the historic downtown to the exclusive hillside estates, we serve all of Belvedere's most prestigious neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Belvedere Island',
              'Hillside Estates',
              'Waterfront Properties',
              'Historic District',
              'Mediterranean Villas',
              'Contemporary Homes',
              'Bay View Properties',
              'Private Estates',
              'Gated Communities',
              'Historic Mansions',
              'Modern Masterpieces',
              'Architectural Landmarks'
            ].map((neighborhood) => (
              <div key={neighborhood} className="bg-ivory p-6 rounded-lg shadow-sm border border-french-gray/20 text-center hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-charcoal mb-2">{neighborhood}</h3>
                <p className="text-sm text-charcoal/70">Custom cabinetry services</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Island Design Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in belvedere</h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Belvedere's unique island setting creates distinct requirements for ultra-luxury kitchen design. Our approach honors the island's exclusive character while delivering the highest standards of functionality and elegance.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with panoramic bay views to evening entertaining that showcases the island's natural beauty, every design decision reflects an understanding of how Belvedere residents truly live and enjoy their exclusive lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Exclusive Materials</h3>
                <p className="text-ivory/80">Only the finest materials and finishes that meet the highest standards of luxury and durability for island living.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Architectural Harmony</h3>
                <p className="text-ivory/80">Designs that seamlessly integrate with Belvedere's diverse architectural heritage while meeting modern luxury standards.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Entertainment Focus</h3>
                <p className="text-ivory/80">Spaces designed for the most sophisticated entertaining and intimate family moments that define island living.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in belvedere</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of custom kitchens and cabinetry projects throughout Belvedere's most prestigious island neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/belvedere-mediterranean-kitchen.webp"
                alt="Mediterranean-style luxury kitchen in Belvedere with custom cabinetry and island views"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Mediterranean Villa</h3>
                <p className="text-charcoal/70 mb-4">Historic Mediterranean-style kitchen with custom millwork and period-appropriate details.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Custom Millwork</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Historic Details</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/belvedere-contemporary-kitchen.webp"
                alt="Contemporary luxury kitchen in Belvedere with modern design and panoramic views"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Contemporary Masterpiece</h3>
                <p className="text-charcoal/70 mb-4">Modern architectural kitchen with clean lines and premium materials maximizing island views.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">European Walnut</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Modern Design</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/belvedere-entertainment-kitchen.webp"
                alt="Entertainment-focused kitchen in Belvedere with integrated wine storage and bar area"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Entertainment Palace</h3>
                <p className="text-charcoal/70 mb-4">Grand entertaining kitchen with integrated wine cellar and seamless indoor-outdoor flow.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Wine Cellar</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Entertainment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Island Lifestyle Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in belvedere</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our Belvedere kitchens are designed to support the unique island lifestyle and ultra-luxury values of this exclusive community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Ultra-Luxury Materials</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Exotic hardwoods and rare materials from around the world</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Handcrafted hardware and custom metalwork</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Museum-grade finishes and detailing</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Entertainment Excellence</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Grand layouts perfect for sophisticated entertaining</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Integrated wine cellars and tasting rooms</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Professional-grade appliances for serious cooking</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Architectural Integration</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Seamless integration with historic and contemporary architecture</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Custom millwork that matches existing details</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Preservation of historic character while adding modern functionality</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Island Privacy</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Designs that respect the island's exclusive and private character</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Discrete service areas and staff accommodations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Security considerations for high-profile residents</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in belvedere</h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchen design in Belvedere
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle Belvedere's ultra-luxury market expectations?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Belvedere's ultra-luxury market demands the absolute highest standards in every aspect of our work. We use only the finest materials, employ master craftsmen, and maintain the strictest quality control. Our designs must meet both aesthetic and functional requirements that exceed typical luxury standards. We work with the most exclusive suppliers and often create completely custom solutions that can't be found elsewhere.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you work with Belvedere's diverse architectural styles?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Belvedere's architectural diversity requires deep expertise in multiple styles. We study each home's unique character and create cabinetry that enhances rather than competes with the existing architecture. Whether it's a historic Mediterranean villa or a contemporary masterpiece, we ensure our designs feel like they were always meant to be there. We often work with architects and designers to ensure perfect integration.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's your approach to privacy and security in Belvedere?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Belvedere's exclusive nature requires special consideration for privacy and security. We design discrete service areas, consider sightlines for privacy, and can incorporate security features into our cabinetry designs. We work with security consultants when needed and understand the importance of maintaining discretion for high-profile residents. Our project management includes strict confidentiality protocols.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you coordinate with other luxury trades in Belvedere?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Belvedere projects often involve multiple high-end trades including architects, interior designers, landscape architects, and specialty contractors. We excel at coordination and collaboration, ensuring our cabinetry integrates seamlessly with all other elements. We provide detailed schedules, maintain regular communication, and often serve as the central coordination point for complex projects. Our goal is seamless integration and exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Create Your Belvedere Dream Kitchen?"
        description="Join Belvedere's most discerning homeowners who have chosen PineWood Cabinets for their custom cabinetry needs. Schedule a private consultation to discuss how we can bring your vision to life with uncompromising craftsmanship."
        primaryCTA={{
          text: "Schedule Consultation",
          href: "/contact"
        }}
      />
    </>
  )
}
