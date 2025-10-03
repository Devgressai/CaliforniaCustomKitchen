import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Custom Kitchens Berkeley | Luxury Cabinetry East Bay | PineWood Cabinets',
  description: 'Museum-grade custom kitchens and bespoke cabinetry for Berkeley\'s most prestigious homes. Serving East Bay\'s luxury market with uncompromising craftsmanship since 2006.',
  keywords: [
    'custom kitchens Berkeley',
    'luxury cabinetry East Bay',
    'bespoke cabinetry Berkeley',
    'custom kitchen cabinets Berkeley',
    'architectural millwork East Bay',
    'luxury kitchen design Berkeley',
    'custom cabinets Berkeley',
    'high-end kitchen renovation',
    'premium cabinetry Berkeley',
    'custom millwork East Bay',
    'kitchen design consultation Berkeley',
    'luxury home renovation East Bay',
    'custom storage solutions Berkeley',
    'wine cellar design Berkeley',
    'kitchen remodeling Berkeley'
  ],
  openGraph: {
    title: 'Custom Kitchens Berkeley | Luxury Cabinetry East Bay',
    description: 'Museum-grade custom kitchens and bespoke cabinetry for Berkeley\'s most prestigious homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Berkeley",
  "Museum-grade custom kitchens and bespoke cabinetry for Berkeley's most prestigious homes in East Bay",
  "Custom Kitchens",
  ["Berkeley, CA", "East Bay, CA", "Oakland, CA", "Albany, CA", "El Cerrito, CA"]
)

export default function BerkeleyPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Custom Kitchens Berkeley"
        subtitle="Museum-Grade Cabinetry for East Bay Luxury"
        description="Serving Berkeley's discerning homeowners with uncompromising craftsmanship and luxury kitchen design since 2006."
        imageSrc="service-areas/berkeley-hero.webp"
        imageAlt="Luxury custom kitchen in Berkeley home with premium cabinetry and East Bay views"
      />

      {/* Berkeley Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Berkeley's Premier Kitchen Destination
              </h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Berkeley represents the sophisticated heart of East Bay living—where intellectual culture meets refined luxury. Our Berkeley clients understand that true elegance lies in creating spaces that honor both the neighborhood's unique character and their own sophisticated lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From Craftsman homes to contemporary architectural gems, Berkeley's diverse residential landscape demands cabinetry solutions that seamlessly blend intellectual sophistication with luxury design and uncompromising quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Population</h3>
                  <p className="text-2xl font-bold text-brass">124,000+</p>
                  <p className="text-sm text-charcoal/70">East Bay residents</p>
                </div>
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Median Home Value</h3>
                  <p className="text-2xl font-bold text-brass">$1.4M+</p>
                  <p className="text-sm text-charcoal/70">East Bay luxury market</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/service-areas/berkeley-overview.webp"
                alt="Berkeley neighborhood landscape with luxury homes and East Bay views"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* East Bay Living Expertise */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              East Bay Living Expertise
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our deep understanding of Berkeley's unique East Bay environment enables us to deliver cabinetry solutions that perfectly complement both the neighborhood's character and sophisticated living standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">East Bay Integration</h3>
              <p className="text-charcoal/70 mb-4">
                Berkeley's East Bay setting requires cabinetry that works with the natural environment and maximizes views while maintaining functionality.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• View maximization</li>
                <li>• Natural integration</li>
                <li>• East Bay aesthetics</li>
                <li>• Custom solutions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Intellectual Sophistication</h3>
              <p className="text-charcoal/70 mb-4">
                Berkeley's intellectual culture requires cabinetry that balances academic sophistication with practical functionality and luxury materials.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Academic aesthetics</li>
                <li>• Sophisticated design</li>
                <li>• Premium materials</li>
                <li>• Custom details</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Entertainment Focus</h3>
              <p className="text-charcoal/70 mb-4">
                Berkeley's social lifestyle demands kitchens that can host both intimate intellectual discussions and larger social gatherings.
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

      {/* Berkeley Neighborhoods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Berkeley Neighborhoods We Serve
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From the historic downtown to the exclusive hillside communities, we serve all of Berkeley's most prestigious neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Downtown Berkeley',
              'North Berkeley',
              'South Berkeley',
              'West Berkeley',
              'East Berkeley',
              'Berkeley Hills',
              'Elmwood',
              'Rockridge',
              'Claremont',
              'Piedmont',
              'Thousand Oaks',
              'Cragmont'
            ].map((neighborhood) => (
              <div key={neighborhood} className="bg-ivory p-6 rounded-lg shadow-sm border border-french-gray/20 text-center hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-charcoal mb-2">{neighborhood}</h3>
                <p className="text-sm text-charcoal/70">Custom cabinetry services</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* East Bay Design Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Designed for East Bay Living
              </h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Berkeley's unique East Bay environment creates distinct requirements for luxury kitchen design. Our approach honors the neighborhood's character while delivering the functionality and elegance modern residents demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with East Bay views to evening entertaining that showcases the home's refined character, every design decision reflects an understanding of how Berkeley residents truly live and enjoy their East Bay lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">View Integration</h3>
                <p className="text-ivory/80">Designs that maximize East Bay and hillside views while maintaining functionality and aesthetic appeal.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">East Bay Adaptation</h3>
                <p className="text-ivory/80">Custom solutions that work with the natural East Bay environment and challenges.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Intellectual Luxury</h3>
                <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of Berkeley residents.</p>
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
              Featured Berkeley Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of custom kitchens and cabinetry projects throughout Berkeley's most prestigious East Bay neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/berkeley-east-bay-kitchen.webp"
                alt="East Bay kitchen in Berkeley with custom cabinetry and hillside views"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">East Bay Views</h3>
                <p className="text-charcoal/70 mb-4">Custom kitchen design that maximizes East Bay and hillside views while maintaining functionality and luxury.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">East Bay Views</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Hillside Design</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/berkeley-craftsman-kitchen.webp"
                alt="Craftsman kitchen in Berkeley with classic cabinetry and sophisticated design"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Craftsman Sophistication</h3>
                <p className="text-charcoal/70 mb-4">Classic kitchen design with Craftsman details and sophisticated finishes throughout.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Craftsman Design</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Sophisticated Finishes</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/berkeley-contemporary-kitchen.webp"
                alt="Contemporary kitchen in Berkeley with modern cabinetry and clean design"
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

      {/* East Bay Lifestyle Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              East Bay Lifestyle Features
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our Berkeley kitchens are designed to support the unique East Bay lifestyle and values of this special community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">View Maximization</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Strategic cabinet placement that preserves East Bay and hillside views</p>
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
              <h3 className="text-2xl font-semibold text-charcoal mb-6">East Bay Adaptation</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Custom solutions that work with the natural East Bay environment and challenges</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Structural considerations for East Bay construction and stability</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Access solutions for challenging East Bay locations</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Intellectual Luxury</h3>
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
              Berkeley Kitchen Design FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchen design in Berkeley
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle Berkeley's East Bay construction challenges?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Berkeley's East Bay locations often present unique structural and access challenges. We work closely with local contractors and engineers to ensure our cabinetry installations are properly supported and accessible. This includes custom mounting systems, reinforced wall attachments, and careful consideration of seismic requirements. Our project management approach includes detailed site analysis and coordination with all trades to ensure smooth installation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you maximize views while maintaining functionality?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                View maximization is crucial in Berkeley. We design low-profile cabinetry that doesn't obstruct sightlines, use reflective surfaces to enhance natural light, and strategically place storage to preserve panoramic views. We often incorporate glass-front cabinets and open shelving that maintains functionality while keeping views open. The key is balancing storage needs with view preservation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's your approach to Berkeley's intellectual lifestyle requirements?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Berkeley's intellectual culture requires special consideration for academic life, entertaining, and maintenance. We design with intellectual needs in mind, including storage for books and academic materials, durable materials for daily use, and spaces that support both individual and social activities. We also consider the home's relationship to outdoor spaces and neighborhood character.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle Berkeley's diverse architectural styles?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Berkeley's architectural diversity requires expertise in multiple styles, from Craftsman to contemporary. We study each home's unique character and create cabinetry that enhances rather than competes with the existing architecture. Whether it's a Craftsman or a modern home, we ensure our designs feel like they were always meant to be there.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Create Your Berkeley Dream Kitchen?"
        description="Join Berkeley's most discerning homeowners who have chosen PineWood Cabinets for their custom cabinetry needs. Schedule a private consultation to discuss how we can bring your vision to life with uncompromising craftsmanship."
        primaryCTA={{
          text: "Schedule Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Portfolio",
          href: "/portfolio"
        }}
      />
    </>
  )
}