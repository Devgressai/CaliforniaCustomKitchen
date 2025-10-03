import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Custom Kitchens Los Altos Hills | Luxury Cabinetry Silicon Valley | PineWood Cabinets',
  description: 'Museum-grade custom kitchens and bespoke cabinetry for Los Altos Hills\' most prestigious estate homes. Serving Silicon Valley\'s ultra-luxury market with uncompromising craftsmanship since 2006.',
  keywords: [
    'custom kitchens Los Altos Hills',
    'luxury cabinetry Silicon Valley',
    'bespoke cabinetry Los Altos Hills',
    'custom kitchen cabinets Los Altos Hills',
    'architectural millwork Silicon Valley',
    'luxury kitchen design Los Altos Hills',
    'custom cabinets Los Altos Hills',
    'high-end kitchen renovation',
    'premium cabinetry Los Altos Hills',
    'custom millwork Silicon Valley',
    'kitchen design consultation Los Altos Hills',
    'luxury home renovation Silicon Valley',
    'custom storage solutions Los Altos Hills',
    'wine cellar design Los Altos Hills',
    'kitchen remodeling Los Altos Hills'
  ],
  openGraph: {
    title: 'Custom Kitchens Los Altos Hills | Luxury Cabinetry Silicon Valley',
    description: 'Museum-grade custom kitchens and bespoke cabinetry for Los Altos Hills\' most prestigious estate homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Los Altos Hills",
  "Museum-grade custom kitchens and bespoke cabinetry for Los Altos Hills' most prestigious estate homes in Silicon Valley",
  "Custom Kitchens",
  ["Los Altos Hills, CA", "Silicon Valley, CA", "Los Altos, CA", "Palo Alto, CA", "Mountain View, CA"]
)

export default function LosAltosHillsPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Custom Kitchens Los Altos Hills"
        subtitle="Museum-Grade Cabinetry for Silicon Valley's Ultra-Luxury Estates"
        description="Serving Los Altos Hills' most discerning residents with uncompromising craftsmanship and luxury kitchen design since 2006."
        imageSrc="service-areas/los-altos-hills-hero.webp"
        imageAlt="Luxury custom kitchen in Los Altos Hills estate home with premium cabinetry and panoramic views"
      />

      {/* Los Altos Hills Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Los Altos Hills' Premier Estate Kitchen Destination
              </h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Los Altos Hills represents the absolute pinnacle of Silicon Valley luxury living—where sprawling estates meet breathtaking natural beauty. Our Los Altos Hills clients understand that true elegance lies in creating spaces that honor both the property's magnificent setting and their own sophisticated lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From contemporary architectural masterpieces to traditional estate homes, Los Altos Hills' diverse yet cohesive luxury landscape demands cabinetry solutions that reflect the highest standards of craftsmanship and design excellence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Population</h3>
                  <p className="text-2xl font-bold text-brass">8,000+</p>
                  <p className="text-sm text-charcoal/70">Ultra-luxury residents</p>
                </div>
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Median Home Value</h3>
                  <p className="text-2xl font-bold text-brass">$5.2M+</p>
                  <p className="text-sm text-charcoal/70">Ultra-luxury estate market</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/service-areas/los-altos-hills-overview.webp"
                alt="Los Altos Hills estate landscape with luxury homes and panoramic Silicon Valley views"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Estate Living Expertise */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Estate Living Expertise
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our intimate knowledge of Los Altos Hills' unique estate environment and ultra-luxury market enables us to deliver cabinetry solutions that perfectly complement both the magnificent setting and the highest standards of living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Ultra-Luxury Standards</h3>
              <p className="text-charcoal/70 mb-4">
                Los Altos Hills' exclusive estate setting demands the absolute highest standards in materials, craftsmanship, and design sophistication.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Museum-grade materials</li>
                <li>• Handcrafted details</li>
                <li>• Custom hardware</li>
                <li>• Architectural integration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Estate Architecture</h3>
              <p className="text-charcoal/70 mb-4">
                Los Altos Hills' diverse architectural heritage requires cabinetry that honors both historic character and contemporary luxury standards.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Contemporary masterpieces</li>
                <li>• Traditional estates</li>
                <li>• Custom millwork</li>
                <li>• Architectural harmony</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Entertainment Excellence</h3>
              <p className="text-charcoal/70 mb-4">
                Los Altos Hills' social lifestyle demands kitchens that can host the most sophisticated gatherings and intimate family moments.
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

      {/* Los Altos Hills Neighborhoods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Los Altos Hills Neighborhoods We Serve
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From the historic estates to the contemporary masterpieces, we serve all of Los Altos Hills' most prestigious neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Estate District',
              'Hillside Estates',
              'Ridgeview',
              'Skyline Boulevard',
              'Foothill Estates',
              'Crestview',
              'Hillcrest',
              'Mountain View Estates',
              'Valley View',
              'Sunset Hills',
              'Oak Grove Estates',
              'Pine Ridge'
            ].map((neighborhood) => (
              <div key={neighborhood} className="bg-ivory p-6 rounded-lg shadow-sm border border-french-gray/20 text-center hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-charcoal mb-2">{neighborhood}</h3>
                <p className="text-sm text-charcoal/70">Custom cabinetry services</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estate Design Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Designed for Estate Living
              </h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Los Altos Hills' unique estate environment creates distinct requirements for ultra-luxury kitchen design. Our approach honors the property's magnificent setting while delivering the highest standards of functionality and elegance.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with panoramic Silicon Valley views to evening entertaining that showcases the estate's natural beauty, every design decision reflects an understanding of how Los Altos Hills residents truly live and enjoy their exclusive lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Exclusive Materials</h3>
                <p className="text-ivory/80">Only the finest materials and finishes that meet the highest standards of luxury and durability for estate living.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Architectural Harmony</h3>
                <p className="text-ivory/80">Designs that seamlessly integrate with Los Altos Hills' diverse architectural heritage while meeting modern luxury standards.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Entertainment Focus</h3>
                <p className="text-ivory/80">Spaces designed for the most sophisticated entertaining and intimate family moments that define estate living.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Featured Los Altos Hills Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of custom kitchens and cabinetry projects throughout Los Altos Hills' most prestigious estate neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/los-altos-hills-contemporary-kitchen.webp"
                alt="Contemporary estate kitchen in Los Altos Hills with custom cabinetry and panoramic views"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Contemporary Estate</h3>
                <p className="text-charcoal/70 mb-4">Modern architectural masterpiece with custom cabinetry and panoramic Silicon Valley views.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Modern Design</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Panoramic Views</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/los-altos-hills-traditional-kitchen.webp"
                alt="Traditional estate kitchen in Los Altos Hills with classic cabinetry and luxury details"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Traditional Estate</h3>
                <p className="text-charcoal/70 mb-4">Classic estate kitchen with traditional details and luxury finishes throughout.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Traditional Details</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Luxury Finishes</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/los-altos-hills-entertainment-kitchen.webp"
                alt="Entertainment-focused kitchen in Los Altos Hills with integrated wine cellar and bar area"
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

      {/* Estate Lifestyle Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Estate Lifestyle Features
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our Los Altos Hills kitchens are designed to support the unique estate lifestyle and ultra-luxury values of this exclusive community.
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
                  <p className="text-charcoal/70">Professional-grade appliances for serious entertaining</p>
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
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Estate Privacy</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Designs that respect the estate's exclusive and private character</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Los Altos Hills Kitchen Design FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchen design in Los Altos Hills
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle Los Altos Hills' ultra-luxury market expectations?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Los Altos Hills' ultra-luxury market demands the absolute highest standards in every aspect of our work. We use only the finest materials, employ master craftsmen, and maintain the strictest quality control. Our designs must meet both aesthetic and functional requirements that exceed typical luxury standards. We work with the most exclusive suppliers and often create completely custom solutions that can't be found elsewhere.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you work with Los Altos Hills' diverse architectural styles?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Los Altos Hills' architectural diversity requires deep expertise in multiple styles. We study each home's unique character and create cabinetry that enhances rather than competes with the existing architecture. Whether it's a historic estate or a contemporary masterpiece, we ensure our designs feel like they were always meant to be there. We often work with architects and designers to ensure perfect integration.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's your approach to privacy and security in Los Altos Hills?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Los Altos Hills' exclusive nature requires special consideration for privacy and security. We design discrete service areas, consider sightlines for privacy, and can incorporate security features into our cabinetry designs. We work with security consultants when needed and understand the importance of maintaining discretion for high-profile residents. Our project management includes strict confidentiality protocols.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you coordinate with other luxury trades in Los Altos Hills?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Los Altos Hills projects often involve multiple high-end trades including architects, interior designers, landscape architects, and specialty contractors. We excel at coordination and collaboration, ensuring our cabinetry integrates seamlessly with all other elements. We provide detailed schedules, maintain regular communication, and often serve as the central coordination point for complex projects. Our goal is seamless integration and exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Create Your Los Altos Hills Dream Kitchen?"
        description="Join Los Altos Hills' most discerning residents who have chosen PineWood Cabinets for their custom cabinetry needs. Schedule a private consultation to discuss how we can bring your vision to life with uncompromising craftsmanship."
        primaryCTA={{
          text: "Schedule Consultation",
          href: "/contact"
        }}
      />
    </>
  )
}
