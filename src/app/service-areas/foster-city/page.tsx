import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Custom Kitchens Foster City | Luxury Cabinetry Peninsula | PineWood Cabinets',
  description: 'Museum-grade custom kitchens and bespoke cabinetry for Foster City\'s most prestigious homes. Serving Peninsula\'s luxury market with uncompromising craftsmanship since 2006.',
  keywords: [
    'custom kitchens Foster City',
    'luxury cabinetry Peninsula',
    'bespoke cabinetry Foster City',
    'custom kitchen cabinets Foster City',
    'architectural millwork Peninsula',
    'luxury kitchen design Foster City',
    'custom cabinets Foster City',
    'high-end kitchen renovation',
    'premium cabinetry Foster City',
    'custom millwork Peninsula',
    'kitchen design consultation Foster City',
    'luxury home renovation Peninsula',
    'custom storage solutions Foster City',
    'wine cellar design Foster City',
    'kitchen remodeling Foster City'
  ],
  openGraph: {
    title: 'Custom Kitchens Foster City | Luxury Cabinetry Peninsula',
    description: 'Museum-grade custom kitchens and bespoke cabinetry for Foster City\'s most prestigious homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Foster City",
  "Museum-grade custom kitchens and bespoke cabinetry for Foster City's most prestigious homes in Peninsula",
  "Custom Kitchens",
  ["Foster City, CA", "Peninsula, CA", "San Mateo, CA", "Redwood City, CA", "Belmont, CA"]
)

export default function FosterCityPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Custom Kitchens Foster City"
        subtitle="Museum-Grade Cabinetry for Peninsula Luxury"
        description="Serving Foster City's discerning homeowners with uncompromising craftsmanship and luxury kitchen design since 2006."
        imageSrc="service-areas/foster-city-hero.webp"
        imageAlt="Luxury custom kitchen in Foster City home with premium cabinetry and Peninsula views"
      />

      {/* Foster City Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Foster City's Premier Kitchen Destination
              </h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Foster City represents the sophisticated heart of Peninsula living—where suburban tranquility meets refined luxury. Our Foster City clients understand that true elegance lies in creating spaces that honor both the neighborhood's charming character and their own sophisticated lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From traditional family homes to contemporary architectural gems, Foster City's diverse residential landscape demands cabinetry solutions that seamlessly blend suburban comfort with luxury design and uncompromising quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Population</h3>
                  <p className="text-2xl font-bold text-brass">35,000+</p>
                  <p className="text-sm text-charcoal/70">Peninsula residents</p>
                </div>
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Median Home Value</h3>
                  <p className="text-2xl font-bold text-brass">$1.4M+</p>
                  <p className="text-sm text-charcoal/70">Peninsula luxury market</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/service-areas/foster-city-overview.webp"
                alt="Foster City neighborhood landscape with luxury homes and Peninsula views"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Peninsula Living Expertise */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Peninsula Living Expertise
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our deep understanding of Foster City's unique Peninsula environment enables us to deliver cabinetry solutions that perfectly complement both the neighborhood's character and sophisticated living standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Peninsula Integration</h3>
              <p className="text-charcoal/70 mb-4">
                Foster City's Peninsula setting requires cabinetry that works with the natural environment and maximizes views while maintaining functionality.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• View maximization</li>
                <li>• Natural integration</li>
                <li>• Peninsula aesthetics</li>
                <li>• Custom solutions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Suburban Luxury</h3>
              <p className="text-charcoal/70 mb-4">
                Foster City's suburban setting requires cabinetry that balances family functionality with sophisticated design and luxury materials.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Family-friendly durability</li>
                <li>• Sophisticated aesthetics</li>
                <li>• Premium materials</li>
                <li>• Custom details</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Entertainment Focus</h3>
              <p className="text-charcoal/70 mb-4">
                Foster City's social lifestyle demands kitchens that can host both intimate family meals and larger social gatherings.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Flexible layouts</li>
                <li>• Professional appliances</li>
                <li>• Wine storage</li>
                <li>• Outdoor integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Foster City Neighborhoods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Foster City Neighborhoods We Serve
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From the historic downtown to the exclusive hillside communities, we serve all of Foster City's most prestigious neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Downtown Foster City',
              'Foster City Hills',
              'Foster City Valley',
              'Foster City Ridge',
              'Foster City Park',
              'Foster City Woods',
              'Foster City Heights',
              'Foster City Gardens',
              'Foster City Estates',
              'Foster City Bay',
              'Foster City Shores',
              'Foster City Marina'
            ].map((neighborhood) => (
              <div key={neighborhood} className="bg-ivory p-6 rounded-lg shadow-sm border border-french-gray/20 text-center hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-charcoal mb-2">{neighborhood}</h3>
                <p className="text-sm text-charcoal/70">Custom cabinetry services</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Peninsula Design Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Designed for Peninsula Living
              </h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Foster City's unique Peninsula environment creates distinct requirements for luxury kitchen design. Our approach honors the neighborhood's character while delivering the functionality and elegance modern residents demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with Peninsula views to evening entertaining that showcases the home's refined character, every design decision reflects an understanding of how Foster City residents truly live and enjoy their Peninsula lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">View Integration</h3>
                <p className="text-ivory/80">Designs that maximize Peninsula and bay views while maintaining functionality and aesthetic appeal.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Peninsula Adaptation</h3>
                <p className="text-ivory/80">Custom solutions that work with the natural Peninsula environment and challenges.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Suburban Luxury</h3>
                <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of Foster City residents.</p>
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
              Featured Foster City Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of custom kitchens and cabinetry projects throughout Foster City's most prestigious Peninsula neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/foster-city-peninsula-kitchen.webp"
                alt="Peninsula kitchen in Foster City with custom cabinetry and bay views"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Peninsula Views</h3>
                <p className="text-charcoal/70 mb-4">Custom kitchen design that maximizes Peninsula and bay views while maintaining functionality and luxury.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Peninsula Views</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Bay Design</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/foster-city-traditional-kitchen.webp"
                alt="Traditional kitchen in Foster City with classic cabinetry and sophisticated design"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Traditional Sophistication</h3>
                <p className="text-charcoal/70 mb-4">Classic kitchen design with traditional details and sophisticated finishes throughout.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Traditional Design</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Sophisticated Finishes</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/foster-city-contemporary-kitchen.webp"
                alt="Contemporary kitchen in Foster City with modern cabinetry and clean design"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Contemporary Luxury</h3>
                <p className="text-charcoal/70 mb-4">Modern kitchen design with clean lines and premium materials for sophisticated living.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Modern Design</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Premium Materials</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Peninsula Lifestyle Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Peninsula Lifestyle Features
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our Foster City kitchens are designed to support the unique Peninsula lifestyle and values of this special community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">View Maximization</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Strategic cabinet placement that preserves Peninsula and bay views</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Low-profile designs that don't obstruct sightlines</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Reflective surfaces that enhance natural light and views</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Peninsula Adaptation</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Custom solutions that work with the natural Peninsula environment and challenges</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Structural considerations for Peninsula construction and stability</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Access solutions for challenging Peninsula locations</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Suburban Luxury</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Premium materials and finishes that reflect sophisticated taste</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Custom hardware and decorative elements that add luxury touches</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">High-end finishes that maintain beauty over time</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Entertainment Excellence</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Flexible layouts perfect for both intimate and larger gatherings</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Integrated wine storage and bar areas for sophisticated entertaining</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Professional-grade appliances for serious cooking and hosting</p>
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
              Foster City Kitchen Design FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchen design in Foster City
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle Foster City's Peninsula construction challenges?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Foster City's Peninsula locations often present unique structural and access challenges. We work closely with local contractors and engineers to ensure our cabinetry installations are properly supported and accessible. This includes custom mounting systems, reinforced wall attachments, and careful consideration of seismic requirements. Our project management approach includes detailed site analysis and coordination with all trades to ensure smooth installation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you maximize views while maintaining functionality?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                View maximization is crucial in Foster City. We design low-profile cabinetry that doesn't obstruct sightlines, use reflective surfaces to enhance natural light, and strategically place storage to preserve panoramic views. We often incorporate glass-front cabinets and open shelving that maintains functionality while keeping views open. The key is balancing storage needs with view preservation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's your approach to Foster City's suburban lifestyle requirements?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Foster City's suburban setting requires special consideration for family life, entertaining, and maintenance. We design with family needs in mind, including storage for household supplies, durable materials for daily use, and spaces that support both individual and family activities. We also consider the home's relationship to outdoor spaces and neighborhood character.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle Foster City's diverse architectural styles?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Foster City's architectural diversity requires expertise in multiple styles, from traditional to contemporary. We study each home's unique character and create cabinetry that enhances rather than competes with the existing architecture. Whether it's a mid-century modern or a traditional colonial, we ensure our designs feel like they were always meant to be there.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Create Your Foster City Dream Kitchen?"
        description="Join Foster City's most discerning homeowners who have chosen PineWood Cabinets for their custom cabinetry needs. Schedule a private consultation to discuss how we can bring your vision to life with uncompromising craftsmanship."
        primaryCTA={{
          text: "Schedule Consultation",
          href: "/contact"
        }}
      />
    </>
  )
}