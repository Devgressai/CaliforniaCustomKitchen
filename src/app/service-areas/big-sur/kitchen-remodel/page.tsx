import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Kitchen Remodel Big Sur | Custom Kitchen Remodeling | PineWood Cabinets',
  description: 'Custom kitchen remodeling for Big Sur luxury homes. Expert kitchen remodelers serving Monterey County with complete renovation services.',
  keywords: [
    'kitchen remodel Big Sur',
    'kitchen remodeling Big Sur',
    'kitchen renovation Big Sur',
    'kitchen remodel Carmel',
    'kitchen remodel Monterey',
    'kitchen remodel Pacific Grove',
    'kitchen remodel Pebble Beach',
    'kitchen remodel Seaside',
    'kitchen remodel Marina',
    'kitchen remodel Salinas',
    'kitchen remodel Watsonville',
    'kitchen remodel Santa Cruz',
    'kitchen remodel Monterey County'
  ],
  openGraph: {
    title: 'Kitchen Remodel Big Sur | Custom Kitchen Remodeling | PineWood Cabinets',
    description: 'Custom kitchen remodeling for Big Sur luxury homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Kitchen Remodel Big Sur",
  "Custom kitchen remodeling for Big Sur luxury homes in Monterey County",
  "Kitchen Remodeling",
  ["Big Sur, CA", "Carmel, CA", "Monterey, CA", "Pacific Grove, CA", "Pebble Beach, CA"]
)

export default function KitchenRemodelBigSurPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Kitchen Remodel Big Sur"
        subtitle="Custom Kitchen Remodeling"
        description="Serving Big Sur's discerning homeowners with complete kitchen remodeling services that transform Monterey County homes into luxury culinary spaces."
        imageSrc="service-areas/big-sur-kitchen-remodel-hero.webp"
        imageAlt="Custom kitchen remodel in Big Sur home with ocean views and luxury finishes"
      />

      {/* Big Sur Kitchen Remodel Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in kitchen-remodel</h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Big Sur represents the sophisticated heart of California's Central Coast—where coastal elegance meets refined luxury. Our Big Sur kitchen remodel clients understand that true elegance lies in creating spaces that honor both the neighborhood's unique character and their own sophisticated lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From historic cottages to contemporary architectural gems, Big Sur's diverse residential landscape demands kitchen remodel solutions that seamlessly blend coastal sophistication with luxury functionality and uncompromising quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Remodel Projects</h3>
                  <p className="text-2xl font-bold text-brass">175+</p>
                  <p className="text-sm text-charcoal/70">Completed remodels</p>
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
                src="/images/service-areas/big-sur-kitchen-remodel-overview.webp"
                alt="Custom kitchen remodel in Big Sur home with ocean views and luxury finishes"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Remodel Services */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in kitchen-remodel</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our comprehensive kitchen remodel services are tailored to meet the unique needs of Big Sur's diverse architectural styles and coastal lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Complete Kitchen Remodel</h3>
              <p className="text-charcoal/70 mb-4">
                Full kitchen transformation from design to completion, tailored to your Big Sur home's unique character and your lifestyle needs.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Design consultation</li>
                <li>• Demolition and prep</li>
                <li>• Custom cabinetry</li>
                <li>• Countertop installation</li>
                <li>• Appliance integration</li>
                <li>• Final finishing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Renovation</h3>
              <p className="text-charcoal/70 mb-4">
                Comprehensive renovation services that update your Big Sur kitchen while preserving its architectural integrity and character.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Structural updates</li>
                <li>• Electrical work</li>
                <li>• Plumbing updates</li>
                <li>• Flooring installation</li>
                <li>• Lighting design</li>
                <li>• Paint and finishes</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Refresh</h3>
              <p className="text-charcoal/70 mb-4">
                Cosmetic updates that give your Big Sur kitchen a fresh, modern look without the complexity of a full remodel.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Cabinet refacing</li>
                <li>• Hardware updates</li>
                <li>• Countertop replacement</li>
                <li>• Backsplash installation</li>
                <li>• Paint updates</li>
                <li>• Lighting upgrades</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Expansion</h3>
              <p className="text-charcoal/70 mb-4">
                Strategic expansion of your Big Sur kitchen space to improve functionality and accommodate your growing needs.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Space planning</li>
                <li>• Structural modifications</li>
                <li>• Permit coordination</li>
                <li>• Custom solutions</li>
                <li>• Seamless integration</li>
                <li>• Quality construction</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Modernization</h3>
              <p className="text-charcoal/70 mb-4">
                Modern updates that bring your Big Sur kitchen up to current standards while maintaining its unique character.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Smart home integration</li>
                <li>• Energy-efficient appliances</li>
                <li>• Modern fixtures</li>
                <li>• Updated electrical</li>
                <li>• Contemporary finishes</li>
                <li>• Technology integration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Restoration</h3>
              <p className="text-charcoal/70 mb-4">
                Expert restoration of historic and vintage Big Sur kitchens to preserve their original beauty and character.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Historical research</li>
                <li>• Period-appropriate materials</li>
                <li>• Craftsmanship restoration</li>
                <li>• Hardware replication</li>
                <li>• Finish restoration</li>
                <li>• Modern functionality</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Remodel Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in kitchen-remodel</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our proven remodel process ensures your Big Sur kitchen transformation exceeds expectations and perfectly reflects your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Initial Consultation</h3>
              <p className="text-charcoal/70 mb-4">Comprehensive consultation to understand your vision, needs, and budget for your Big Sur kitchen remodel.</p>
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
              <p className="text-charcoal/70 mb-4">Creation of detailed design plans and 3D renderings for your Big Sur kitchen remodel.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Space planning</li>
                <li>• 3D renderings</li>
                <li>• Material selection</li>
                <li>• Layout optimization</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Construction</h3>
              <p className="text-charcoal/70 mb-4">Professional construction and installation of your approved Big Sur kitchen remodel design.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Demolition</li>
                <li>• Structural work</li>
                <li>• Installation</li>
                <li>• Quality control</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Final Walkthrough</h3>
              <p className="text-charcoal/70 mb-4">Comprehensive final walkthrough and project completion for your Big Sur kitchen remodel.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Final inspection</li>
                <li>• Functionality test</li>
                <li>• Cleanup</li>
                <li>• Project handover</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coastal Remodel Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in kitchen-remodel</h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Big Sur's unique coastal environment creates distinct requirements for kitchen remodels. Our approach honors the neighborhood's character while delivering the functionality and elegance modern residents demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with ocean views to evening entertaining that showcases the home's refined character, every remodel decision reflects an understanding of how Big Sur residents truly live and enjoy their coastal lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Ocean Integration</h3>
                <p className="text-ivory/80">Remodel designs that maximize ocean and bay views while maintaining functionality and aesthetic appeal.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Coastal Adaptation</h3>
                <p className="text-ivory/80">Custom solutions that work with the natural coastal environment and challenges.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Luxury Functionality</h3>
                <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of Big Sur residents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Remodel Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in kitchen-remodel</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of kitchen remodel projects throughout Big Sur's most prestigious coastal neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/big-sur-kitchen-remodel-1.webp"
                alt="Custom kitchen remodel in Big Sur home with ocean views and luxury finishes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Ocean Views</h3>
                <p className="text-charcoal/70 mb-4">Kitchen remodel that maximizes ocean and bay views while maintaining functionality and luxury.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">View Integration</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Custom Remodel</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/big-sur-kitchen-remodel-2.webp"
                alt="Traditional kitchen remodel in Big Sur with classic design and sophisticated finishes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Traditional Sophistication</h3>
                <p className="text-charcoal/70 mb-4">Classic kitchen remodel with traditional details and sophisticated finishes throughout.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Traditional Design</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Sophisticated Finishes</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/big-sur-kitchen-remodel-3.webp"
                alt="Contemporary kitchen remodel in Big Sur with modern design and clean lines"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Contemporary Luxury</h3>
                <p className="text-charcoal/70 mb-4">Modern kitchen remodel with clean lines and premium materials for sophisticated living.</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in kitchen-remodel</h2>
            <p className="text-xl text-charcoal/80">
              Common questions about kitchen remodel services in Big Sur
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a kitchen remodel take?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                A complete kitchen remodel in Big Sur typically takes 8-12 weeks from start to finish. This includes 2-3 weeks for design and planning, 1-2 weeks for demolition and preparation, 4-6 weeks for construction and installation, and 1-2 weeks for finishing and cleanup. The timeline may vary depending on the scope of work and any unexpected issues that arise.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Do I need permits for my kitchen remodel?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Most kitchen remodels in Big Sur require permits, especially if you're moving walls, changing electrical or plumbing, or making structural modifications. We handle all permit applications and inspections as part of our comprehensive remodel service. This ensures your project meets all local building codes and regulations.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can I live in my home during the remodel?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Yes, most of our Big Sur kitchen remodel clients choose to stay in their homes during the project. We work to minimize disruption by setting up temporary kitchen facilities, protecting other areas of your home, and maintaining a clean, organized work environment. We'll discuss your specific needs and preferences during the planning phase.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's included in your kitchen remodel service?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our complete kitchen remodel service includes design consultation, 3D renderings, permit coordination, demolition, structural work, custom cabinetry, countertop installation, appliance integration, electrical and plumbing work, flooring, lighting, painting, and final cleanup. We also provide project management and quality control throughout the entire process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Big Sur Kitchen with a Complete Remodel?"
        description="Join Big Sur's most discerning homeowners who have chosen PineWood Cabinets for their kitchen remodel needs. Schedule a private consultation to discuss how we can bring your vision to life with comprehensive remodeling services."
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
