import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Kitchen Design Carmel-by-the-Sea | Custom Kitchen Design | PineWood Cabinets',
  description: 'Custom kitchen design for Carmel-by-the-Sea luxury homes. Expert kitchen designers serving Monterey County with bespoke design solutions.',
  keywords: [
    'kitchen design Carmel-by-the-Sea',
    'custom kitchen design Carmel-by-the-Sea',
    'kitchen designer Carmel-by-the-Sea',
    'kitchen design Carmel',
    'kitchen design Big Sur',
    'kitchen design Monterey',
    'kitchen design Pacific Grove',
    'kitchen design Pebble Beach',
    'kitchen design Seaside',
    'kitchen design Marina',
    'kitchen design Salinas',
    'kitchen design Watsonville',
    'kitchen design Santa Cruz',
    'kitchen design Monterey County'
  ],
  openGraph: {
    title: 'Kitchen Design Carmel-by-the-Sea | Custom Kitchen Design | PineWood Cabinets',
    description: 'Custom kitchen design for Carmel-by-the-Sea luxury homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Kitchen Design Carmel-by-the-Sea",
  "Custom kitchen design for Carmel-by-the-Sea luxury homes in Monterey County",
  "Kitchen Design",
  ["Carmel-by-the-Sea, CA", "Carmel, CA", "Big Sur, CA", "Monterey, CA", "Pacific Grove, CA"]
)

export default function KitchenDesignCarmelByTheSeaPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Kitchen Design Carmel-by-the-Sea"
        subtitle="Custom Kitchen Design"
        description="Serving Carmel-by-the-Sea's discerning homeowners with bespoke kitchen design services that transform Monterey County homes into luxury culinary spaces."
        imageSrc="service-areas/carmel-by-the-sea-kitchen-design-hero.webp"
        imageAlt="Custom kitchen design in Carmel-by-the-Sea home with ocean views and luxury finishes"
      />

      {/* Carmel-by-the-Sea Kitchen Design Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Carmel-by-the-Sea Kitchen Design Excellence
              </h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Carmel-by-the-Sea represents the sophisticated heart of California's Central Coast—where coastal elegance meets refined luxury. Our Carmel-by-the-Sea kitchen design clients understand that true elegance lies in creating spaces that honor both the neighborhood's unique character and their own sophisticated lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From historic cottages to contemporary architectural gems, Carmel-by-the-Sea's diverse residential landscape demands kitchen design solutions that seamlessly blend coastal sophistication with luxury functionality and uncompromising quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Design Projects</h3>
                  <p className="text-2xl font-bold text-brass">225+</p>
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
                src="/images/service-areas/carmel-by-the-sea-kitchen-design-overview.webp"
                alt="Custom kitchen design in Carmel-by-the-Sea home with ocean views and luxury finishes"
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
              Kitchen Design Services for Carmel-by-the-Sea
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our comprehensive kitchen design services are tailored to meet the unique needs of Carmel-by-the-Sea's diverse architectural styles and coastal lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchen Design</h3>
              <p className="text-charcoal/70 mb-4">
                Bespoke kitchen design tailored specifically for your Carmel-by-the-Sea home's unique character and your lifestyle needs.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Design consultation</li>
                <li>• 3D renderings</li>
                <li>• Space planning</li>
                <li>• Material selection</li>
                <li>• Layout optimization</li>
                <li>• Style coordination</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Renovation Design</h3>
              <p className="text-charcoal/70 mb-4">
                Complete kitchen renovation design services that transform your Carmel-by-the-Sea kitchen while preserving its architectural integrity.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Structural planning</li>
                <li>• Electrical design</li>
                <li>• Plumbing layout</li>
                <li>• Flooring selection</li>
                <li>• Lighting design</li>
                <li>• Color coordination</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Expansion Design</h3>
              <p className="text-charcoal/70 mb-4">
                Strategic expansion design for your Carmel-by-the-Sea kitchen space to improve functionality and accommodate your growing needs.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Space planning</li>
                <li>• Structural design</li>
                <li>• Permit coordination</li>
                <li>• Custom solutions</li>
                <li>• Seamless integration</li>
                <li>• Quality planning</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Modernization Design</h3>
              <p className="text-charcoal/70 mb-4">
                Modern design updates that bring your Carmel-by-the-Sea kitchen up to current standards while maintaining its unique character.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Smart home integration</li>
                <li>• Energy-efficient planning</li>
                <li>• Modern fixture selection</li>
                <li>• Updated electrical design</li>
                <li>• Contemporary finishes</li>
                <li>• Technology integration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Restoration Design</h3>
              <p className="text-charcoal/70 mb-4">
                Expert restoration design for historic and vintage Carmel-by-the-Sea kitchens to preserve their original beauty and character.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Historical research</li>
                <li>• Period-appropriate materials</li>
                <li>• Craftsmanship planning</li>
                <li>• Hardware replication</li>
                <li>• Finish restoration</li>
                <li>• Modern functionality</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Consultation</h3>
              <p className="text-charcoal/70 mb-4">
                Professional consultation services to help you plan and design your Carmel-by-the-Sea kitchen project with confidence.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Needs assessment</li>
                <li>• Style guidance</li>
                <li>• Budget planning</li>
                <li>• Timeline coordination</li>
                <li>• Material recommendations</li>
                <li>• Project management</li>
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
              Our proven design process ensures your Carmel-by-the-Sea kitchen design exceeds expectations and perfectly reflects your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Initial Consultation</h3>
              <p className="text-charcoal/70 mb-4">Comprehensive consultation to understand your vision, needs, and budget for your Carmel-by-the-Sea kitchen design.</p>
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
              <p className="text-charcoal/70 mb-4">Creation of detailed design plans and 3D renderings for your Carmel-by-the-Sea kitchen design.</p>
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
              <p className="text-charcoal/70 mb-4">Collaborative refinement of your Carmel-by-the-Sea kitchen design based on your feedback and preferences.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Design revisions</li>
                <li>• Material adjustments</li>
                <li>• Layout refinements</li>
                <li>• Final approval</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Implementation</h3>
              <p className="text-charcoal/70 mb-4">Professional implementation and project management for your approved Carmel-by-the-Sea kitchen design.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Project management</li>
                <li>• Quality control</li>
                <li>• Progress updates</li>
                <li>• Final walkthrough</li>
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
                Designed for Carmel-by-the-Sea Living
              </h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Carmel-by-the-Sea's unique coastal environment creates distinct requirements for kitchen design. Our approach honors the neighborhood's character while delivering the functionality and elegance modern residents demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with ocean views to evening entertaining that showcases the home's refined character, every design decision reflects an understanding of how Carmel-by-the-Sea residents truly live and enjoy their coastal lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Ocean Integration</h3>
                <p className="text-ivory/80">Kitchen designs that maximize ocean and bay views while maintaining functionality and aesthetic appeal.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Coastal Adaptation</h3>
                <p className="text-ivory/80">Custom solutions that work with the natural coastal environment and challenges.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Luxury Functionality</h3>
                <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of Carmel-by-the-Sea residents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Design Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Featured Carmel-by-the-Sea Kitchen Design Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of kitchen design projects throughout Carmel-by-the-Sea's most prestigious coastal neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/carmel-by-the-sea-kitchen-design-1.webp"
                alt="Custom kitchen design in Carmel-by-the-Sea with ocean views and luxury finishes"
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
                src="/images/portfolio/carmel-by-the-sea-kitchen-design-2.webp"
                alt="Traditional kitchen design in Carmel-by-the-Sea with classic design and sophisticated finishes"
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
                src="/images/portfolio/carmel-by-the-sea-kitchen-design-3.webp"
                alt="Contemporary kitchen design in Carmel-by-the-Sea with modern design and clean lines"
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
              Carmel-by-the-Sea Kitchen Design FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about kitchen design services in Carmel-by-the-Sea
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How long does the kitchen design process take?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                The kitchen design process in Carmel-by-the-Sea typically takes 4-6 weeks from initial consultation to final design approval. This includes 1 week for consultation and needs assessment, 2-3 weeks for design development and 3D renderings, and 1-2 weeks for design refinement based on your feedback. The timeline may vary depending on the complexity of the project.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Do you provide 3D renderings?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Yes, we provide detailed 3D renderings for all Carmel-by-the-Sea kitchen design projects. These renderings help you visualize your new kitchen from multiple angles and make informed decisions about materials, colors, and layout. We also provide virtual walkthroughs so you can experience the space before construction begins.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can you work with my existing kitchen layout?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Yes, we can work with your existing Carmel-by-the-Sea kitchen layout or create a completely new design. We'll assess your current space, understand your needs and preferences, and either optimize the existing layout or propose a new design that better suits your lifestyle. We always consider structural limitations and budget constraints.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What design styles do you specialize in?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We specialize in all major kitchen design styles for Carmel-by-the-Sea homes, including traditional, transitional, contemporary, modern, farmhouse, and industrial. Our design team has extensive experience working with various architectural styles and can create a design that perfectly complements your home's character while meeting your functional needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Design Your Dream Kitchen in Carmel-by-the-Sea?"
        description="Join Carmel-by-the-Sea's most discerning homeowners who have chosen PineWood Cabinets for their kitchen design needs. Schedule a private consultation to discuss how we can bring your vision to life with bespoke design services."
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
