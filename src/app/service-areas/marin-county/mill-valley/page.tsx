import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Custom Kitchens Mill Valley | Luxury Cabinetry Marin County | PineWood Cabinets',
  description: 'Museum-grade custom kitchens and bespoke cabinetry for Mill Valley\'s most prestigious homes. Serving Marin County\'s luxury market with uncompromising craftsmanship since 2006.',
  keywords: [
    'custom kitchens Mill Valley',
    'luxury cabinetry Marin County',
    'bespoke cabinetry Mill Valley',
    'custom kitchen cabinets Mill Valley',
    'architectural millwork Marin County',
    'luxury kitchen design Mill Valley',
    'custom cabinets Mill Valley',
    'high-end kitchen renovation',
    'premium cabinetry Mill Valley',
    'custom millwork Marin County',
    'kitchen design consultation Mill Valley',
    'luxury home renovation Marin County',
    'custom storage solutions Mill Valley',
    'wine cellar design Mill Valley',
    'kitchen remodeling Mill Valley'
  ],
  openGraph: {
    title: 'Custom Kitchens Mill Valley | Luxury Cabinetry Marin County',
    description: 'Museum-grade custom kitchens and bespoke cabinetry for Mill Valley\'s most prestigious homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Mill Valley",
  "Museum-grade custom kitchens and bespoke cabinetry for Mill Valley's most prestigious homes in Marin County",
  "Custom Kitchens",
  ["Mill Valley, CA", "Marin County, CA", "Sausalito, CA", "Tiburon, CA", "Belvedere, CA"]
)

export default function MillValleyPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Custom Kitchens Mill Valley"
        subtitle="Museum-Grade Cabinetry for Marin County's Most Prestigious Homes"
        description="Serving Mill Valley's discerning homeowners with uncompromising craftsmanship and luxury kitchen design since 2006."
        image="/images/service-areas/mill-valley-hero.webp"
        imageAlt="Luxury custom kitchen in Mill Valley home with premium cabinetry and architectural millwork"
      />

      {/* Mill Valley Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Mill Valley's Premier Custom Kitchen Destination
              </h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Nestled at the base of Mount Tamalpais, Mill Valley represents the pinnacle of Marin County living—where natural beauty meets sophisticated luxury. Our Mill Valley clients understand that true elegance lies in the seamless integration of form and function, where every detail reflects their refined taste and commitment to quality.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From the historic downtown's charming cottages to the hillside estates with panoramic bay views, Mill Valley's diverse architectural landscape demands cabinetry solutions that honor both tradition and innovation. Our custom kitchens serve as the heart of these exceptional homes, where families gather, entertain, and create lasting memories.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Population</h3>
                  <p className="text-2xl font-bold text-brass">14,000+</p>
                  <p className="text-sm text-charcoal/70">Affluent residents</p>
                </div>
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Median Home Value</h3>
                  <p className="text-2xl font-bold text-brass">$2.1M+</p>
                  <p className="text-sm text-charcoal/70">Luxury market</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/service-areas/mill-valley-overview.webp"
                alt="Mill Valley landscape with Mount Tamalpais in background showing luxury residential area"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Deep Local Expertise in Mill Valley
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our intimate knowledge of Mill Valley's unique character, architectural styles, and luxury market enables us to deliver cabinetry solutions that perfectly complement each home's distinctive personality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Architectural Harmony</h3>
              <p className="text-charcoal/70 mb-4">
                From Craftsman bungalows to contemporary hillside retreats, we understand how to design cabinetry that respects Mill Valley's architectural diversity while meeting modern lifestyle demands.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Craftsman-style built-ins</li>
                <li>• Contemporary minimalist designs</li>
                <li>• Traditional shaker profiles</li>
                <li>• Custom hardware selection</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Natural Integration</h3>
              <p className="text-charcoal/70 mb-4">
                Mill Valley's connection to nature inspires our material choices and design philosophy, creating kitchens that feel like natural extensions of the surrounding landscape.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Sustainable wood species</li>
                <li>• Natural finish options</li>
                <li>• Biophilic design elements</li>
                <li>• Indoor-outdoor flow</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Luxury Lifestyle</h3>
              <p className="text-charcoal/70 mb-4">
                Our Mill Valley clients expect the same level of sophistication in their kitchens that they experience in their professional and social lives.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Entertaining-focused layouts</li>
                <li>• Professional-grade appliances</li>
                <li>• Wine storage solutions</li>
                <li>• Smart home integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mill Valley Neighborhoods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Mill Valley Neighborhoods We Serve
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From the historic downtown to the exclusive hillside communities, we serve all of Mill Valley's most prestigious neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Downtown Mill Valley',
              'Old Mill Park',
              'Strawberry',
              'Tamalpais Valley',
              'Homestead Valley',
              'Blithedale Canyon',
              'Marin City',
              'Muir Woods',
              'Muir Beach',
              'Stinson Beach',
              'Bolinas',
              'Fairfax'
            ].map((neighborhood) => (
              <div key={neighborhood} className="bg-ivory p-6 rounded-lg shadow-sm border border-french-gray/20 text-center hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-charcoal mb-2">{neighborhood}</h3>
                <p className="text-sm text-charcoal/70">Custom cabinetry services</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Designed for Mill Valley Living
              </h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Mill Valley's unique blend of natural beauty, artistic community, and sophisticated lifestyle creates distinct requirements for luxury kitchen design. Our approach honors this special character while delivering the functionality and elegance our clients demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From the morning coffee ritual with views of Mount Tamalpais to evening dinner parties that flow seamlessly from kitchen to outdoor living spaces, every design decision reflects an understanding of how Mill Valley residents truly live and entertain.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Natural Materials</h3>
                <p className="text-ivory/80">Premium hardwoods and natural stone that complement Mill Valley's organic aesthetic and environmental consciousness.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Flexible Layouts</h3>
                <p className="text-ivory/80">Adaptable spaces that accommodate both intimate family meals and larger social gatherings typical of Mill Valley's community-oriented lifestyle.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Artisanal Details</h3>
                <p className="text-ivory/80">Handcrafted elements that reflect Mill Valley's appreciation for artistic excellence and individual expression.</p>
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
              Featured Mill Valley Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of custom kitchens and cabinetry projects throughout Mill Valley's most prestigious neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/mill-valley-craftsman-kitchen.webp"
                alt="Craftsman-style custom kitchen in Mill Valley with built-in cabinetry and natural wood finishes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Craftsman Bungalow Kitchen</h3>
                <p className="text-charcoal/70 mb-4">Historic downtown Mill Valley home featuring custom built-ins and period-appropriate hardware.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Quarter-sawn Oak</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Built-in Storage</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/mill-valley-contemporary-kitchen.webp"
                alt="Contemporary luxury kitchen in Mill Valley hillside home with panoramic bay views"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Hillside Contemporary</h3>
                <p className="text-charcoal/70 mb-4">Modern kitchen design with clean lines and premium materials, maximizing natural light and views.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">European Walnut</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Island Design</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/mill-valley-wine-kitchen.webp"
                alt="Luxury kitchen with integrated wine storage in Mill Valley home"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Wine Enthusiast's Kitchen</h3>
                <p className="text-charcoal/70 mb-4">Custom wine storage and tasting area integrated seamlessly into the main kitchen space.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Wine Storage</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Climate Control</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mill Valley Lifestyle */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Mill Valley Lifestyle Features
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our Mill Valley kitchens are designed to support the unique lifestyle and values of this special community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Outdoor Living Integration</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Seamless indoor-outdoor flow with large sliding doors and matching outdoor cabinetry</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Outdoor kitchen integration for year-round entertaining</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Natural material selection that weathers beautifully</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Entertainment Focus</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Open-concept layouts perfect for social gatherings</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Integrated wine storage and bar areas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Professional-grade appliances for serious cooking</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Environmental Consciousness</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Sustainable and reclaimed wood options</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Low-VOC finishes and adhesives</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Energy-efficient lighting integration</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Artistic Expression</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Custom art display and storage solutions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Unique hardware and decorative elements</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Collaboration with local artisans and craftspeople</p>
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
              Mill Valley Kitchen Design FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchen design in Mill Valley
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle Mill Valley's hillside construction challenges?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Mill Valley's hillside locations often present unique structural and access challenges. We work closely with local contractors and engineers to ensure our cabinetry installations are properly supported and accessible. This includes custom mounting systems, reinforced wall attachments, and careful consideration of seismic requirements. Our project management approach includes detailed site analysis and coordination with all trades to ensure smooth installation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What materials work best in Mill Valley's climate?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Mill Valley's moderate climate with occasional fog and humidity requires careful material selection. We recommend stable hardwoods like quarter-sawn oak, cherry, and walnut that resist warping. For coastal-influenced areas, we often suggest marine-grade finishes and stainless steel hardware. We also consider the home's orientation and ventilation when selecting materials to ensure long-term durability and beauty.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you integrate with Mill Valley's historic architecture?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Many Mill Valley homes have historic character that we carefully preserve and enhance. We study the original architectural details and create cabinetry that complements the existing style while meeting modern needs. This might include matching moldings, period-appropriate hardware, or custom details that reference the home's era. We work with local preservation guidelines and often collaborate with historic consultants when needed.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's your timeline for Mill Valley projects?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Typical Mill Valley projects range from 8-16 weeks depending on complexity and scope. Custom cabinetry fabrication takes 6-8 weeks, with additional time for installation and finishing. We coordinate closely with other trades and can often work around your schedule. For historic homes or complex structural requirements, we build in additional time for careful planning and execution. We provide detailed project schedules and regular updates throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Create Your Mill Valley Dream Kitchen?"
        description="Join Mill Valley's most discerning homeowners who have chosen PineWood Cabinets for their custom cabinetry needs. Schedule a private consultation to discuss how we can bring your vision to life with uncompromising craftsmanship."
        primaryButtonText="Schedule Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="View Portfolio"
        secondaryButtonHref="/portfolio"
      />
    </>
  )
}
