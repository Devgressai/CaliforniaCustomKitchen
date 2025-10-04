import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Kitchen Design Pebble Beach | Custom Kitchen Design | PineWood Cabinets',
  description: 'Custom kitchen design for Pebble Beach luxury homes. Expert kitchen designers serving Monterey County with bespoke design services.',
  keywords: [
    'kitchen design Pebble Beach',
    'custom kitchen design Pebble Beach',
    'kitchen designer Pebble Beach',
    'kitchen design Carmel',
    'kitchen design Monterey',
    'kitchen design Big Sur',
    'kitchen design Pacific Grove',
    'kitchen design Seaside',
    'kitchen design Marina',
    'kitchen design Salinas',
    'kitchen design Watsonville',
    'kitchen design Santa Cruz',
    'kitchen design Monterey County'
  ],
  openGraph: {
    title: 'Kitchen Design Pebble Beach | Custom Kitchen Design | PineWood Cabinets',
    description: 'Custom kitchen design for Pebble Beach luxury homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Kitchen Design Pebble Beach",
  "Custom kitchen design for Pebble Beach luxury homes in Monterey County",
  "Kitchen Design",
  ["Pebble Beach, CA", "Carmel, CA", "Monterey, CA", "Big Sur, CA", "Pacific Grove, CA"]
)

export default function KitchenDesignPebbleBeachPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Kitchen Design Pebble Beach"
        subtitle="Custom Kitchen Design"
        description="Serving Pebble Beach's discerning homeowners with custom kitchen design services that transform Monterey County homes into luxury culinary spaces."
        imageSrc="service-areas/pebble-beach-kitchen-design-hero.webp"
        imageAlt="Custom kitchen design in Pebble Beach home with ocean views and luxury finishes"
      />

      {/* Pebble Beach Kitchen Design Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Pebble Beach Kitchen Design Excellence
              </h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Pebble Beach represents the sophisticated heart of California's Central Coast—where coastal elegance meets refined luxury. Our Pebble Beach kitchen design clients understand that true elegance lies in creating spaces that honor both the neighborhood's unique character and their own sophisticated lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From historic cottages to contemporary architectural gems, Pebble Beach's diverse residential landscape demands kitchen design solutions that seamlessly blend coastal sophistication with luxury functionality and uncompromising quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Design Projects</h3>
                  <p className="text-2xl font-bold text-brass">175+</p>
                  <p className="text-sm text-charcoal/70">Completed designs</p>
                </div>
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Craftsmanship</h3>
                  <p className="text-2xl font-bold text-brass">20+</p>
                  <p className="text-sm text-charcoal/70">Years experience</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/service-areas/pebble-beach-kitchen-design-overview.webp"
                alt="Custom kitchen design in Pebble Beach home with ocean views and luxury finishes"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Design Services */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Kitchen Design Services for Pebble Beach
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our comprehensive kitchen design services are tailored to meet the unique needs of Pebble Beach's diverse architectural styles and coastal lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Complete Kitchen Design</h3>
              <p className="text-charcoal/70 mb-4">
                Full kitchen design from concept to completion, tailored to your Pebble Beach home's unique character and your lifestyle needs.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Design consultation</li>
                <li>• Space planning</li>
                <li>• 3D renderings</li>
                <li>• Material selection</li>
                <li>• Layout optimization</li>
                <li>• Style coordination</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Renovation Design</h3>
              <p className="text-charcoal/70 mb-4">
                Design services for kitchen renovations that update your Pebble Beach kitchen while preserving its architectural integrity and character.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Renovation planning</li>
                <li>• Structural design</li>
                <li>• Layout optimization</li>
                <li>• Material selection</li>
                <li>• Style coordination</li>
                <li>• Functionality design</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Remodel Design</h3>
              <p className="text-charcoal/70 mb-4">
                Design services for kitchen remodels that transform your Pebble Beach kitchen while maintaining its unique character and charm.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Remodel planning</li>
                <li>• Space reconfiguration</li>
                <li>• Custom solutions</li>
                <li>• Material selection</li>
                <li>• Style coordination</li>
                <li>• Functionality design</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Refresh Design</h3>
              <p className="text-charcoal/70 mb-4">
                Design services for kitchen refreshes that give your Pebble Beach kitchen a fresh, modern look without the complexity of a full renovation.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Refresh planning</li>
                <li>• Cosmetic updates</li>
                <li>• Material selection</li>
                <li>• Style coordination</li>
                <li>• Functionality design</li>
                <li>• Cost optimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Expansion Design</h3>
              <p className="text-charcoal/70 mb-4">
                Design services for kitchen expansions that improve functionality and accommodate your growing needs in Pebble Beach.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Expansion planning</li>
                <li>• Space optimization</li>
                <li>• Structural design</li>
                <li>• Layout optimization</li>
                <li>• Style coordination</li>
                <li>• Functionality design</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Modernization Design</h3>
              <p className="text-charcoal/70 mb-4">
                Design services for kitchen modernizations that bring your Pebble Beach kitchen up to current standards while maintaining its unique character.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Modernization planning</li>
                <li>• Technology integration</li>
                <li>• Material selection</li>
                <li>• Style coordination</li>
                <li>• Functionality design</li>
                <li>• Energy efficiency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Our Kitchen Design Process
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our proven design process ensures your Pebble Beach kitchen design exceeds expectations and perfectly reflects your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Initial Consultation</h3>
              <p className="text-charcoal/70 mb-4">Comprehensive consultation to understand your vision, needs, and budget for your Pebble Beach kitchen design.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Needs assessment</li>
                <li>• Style preferences</li>
                <li>• Budget planning</li>
                <li>• Timeline discussion</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Design Development</h3>
              <p className="text-charcoal/70 mb-4">Creation of detailed design plans and 3D renderings for your Pebble Beach kitchen design.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Space planning</li>
                <li>• 3D renderings</li>
                <li>• Material selection</li>
                <li>• Layout optimization</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Design Refinement</h3>
              <p className="text-charcoal/70 mb-4">Refinement of your Pebble Beach kitchen design based on your feedback and preferences.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Design revisions</li>
                <li>• Material adjustments</li>
                <li>• Layout refinements</li>
                <li>• Final approval</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Design Implementation</h3>
              <p className="text-charcoal/70 mb-4">Implementation of your approved Pebble Beach kitchen design with professional construction and installation.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Construction oversight</li>
                <li>• Quality control</li>
                <li>• Final walkthrough</li>
                <li>• Project completion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coastal Design Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Designed for Pebble Beach Living
              </h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Pebble Beach's unique coastal environment creates distinct requirements for kitchen design. Our approach honors the neighborhood's character while delivering the functionality and elegance modern residents demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with ocean views to evening entertaining that showcases the home's refined character, every design decision reflects an understanding of how Pebble Beach residents truly live and enjoy their coastal lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Ocean Integration</h3>
                <p className="text-ivory/80">Designs that maximize ocean and bay views while maintaining functionality and aesthetic appeal.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Coastal Adaptation</h3>
                <p className="text-ivory/80">Custom solutions that work with the natural coastal environment and challenges.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Luxury Functionality</h3>
                <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of Pebble Beach residents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Kitchen Design Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Featured Pebble Beach Kitchen Design Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of kitchen design projects throughout Pebble Beach's most prestigious coastal neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/pebble-beach-kitchen-design-1.webp"
                alt="Custom kitchen design in Pebble Beach home with ocean views and luxury finishes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Ocean Views</h3>
                <p className="text-charcoal/70 mb-4">Kitchen design that maximizes ocean and bay views while maintaining functionality and luxury.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">View Integration</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Custom Design</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/pebble-beach-kitchen-design-2.webp"
                alt="Traditional kitchen design in Pebble Beach with classic design and sophisticated finishes"
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
                src="/images/portfolio/pebble-beach-kitchen-design-3.webp"
                alt="Contemporary kitchen design in Pebble Beach with modern design and clean lines"
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

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Pebble Beach Kitchen Design FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about kitchen design services in Pebble Beach
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a kitchen design take?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                A complete kitchen design in Pebble Beach typically takes 4-6 weeks from start to finish. This includes 1-2 weeks for initial consultation and needs assessment, 2-3 weeks for design development and 3D renderings, and 1-2 weeks for design refinement and final approval. The timeline may vary depending on the complexity of the project and your specific requirements.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Do I need permits for my kitchen design?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Most kitchen designs in Pebble Beach require permits, especially if you're moving walls, changing electrical or plumbing, or making structural modifications. We handle all permit applications and inspections as part of our comprehensive kitchen design service. This ensures your project meets all local building codes and regulations.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can I see my kitchen design before construction?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Yes, we provide detailed 3D renderings and design plans for your Pebble Beach kitchen design before any construction begins. This allows you to visualize the final result and make any necessary adjustments to ensure the design perfectly matches your vision and needs.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's included in your kitchen design service?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our complete kitchen design service includes design consultation, space planning, 3D renderings, material selection, layout optimization, style coordination, functionality design, and construction oversight. We also provide project management and quality control throughout the entire process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Design Your Dream Kitchen in Pebble Beach?"
        description="Join Pebble Beach's most discerning homeowners who have chosen PineWood Cabinets for their kitchen design needs. Schedule a private consultation to discuss how we can bring your vision to life with bespoke design and craftsmanship."
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
