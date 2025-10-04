import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Kitchen Design Fremont | Custom Kitchen Design | PineWood Cabinets',
  description: 'Custom kitchen design services for Fremont luxury homes. Expert kitchen designers serving East Bay with bespoke design and luxury finishes.',
  keywords: [
    'kitchen design Fremont',
    'custom kitchen design Fremont',
    'kitchen designer Fremont',
    'kitchen design East Bay',
    'kitchen design Hayward',
    'kitchen design Union City',
    'kitchen design Newark',
    'kitchen design Castro Valley',
    'kitchen design San Leandro',
    'kitchen design Alameda',
    'kitchen design Berkeley',
    'kitchen design Oakland',
    'kitchen design San Francisco',
    'kitchen design San Jose',
    'kitchen design Pleasanton'
  ],
  openGraph: {
    title: 'Kitchen Design Fremont | Custom Kitchen Design | PineWood Cabinets',
    description: 'Custom kitchen design services for Fremont luxury homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Kitchen Design Fremont",
  "Custom kitchen design services for Fremont luxury homes in East Bay",
  "Kitchen Design",
  ["Fremont, CA", "East Bay, CA", "Hayward, CA", "Union City, CA", "Newark, CA"]
)

export default function KitchenDesignFremontPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Kitchen Design Fremont"
        subtitle="Custom Kitchen Design"
        description="Serving Fremont's discerning homeowners with bespoke kitchen design services that transform East Bay homes into luxury culinary spaces."
        imageSrc="service-areas/fremont-kitchen-design-hero.webp"
        imageAlt="Custom kitchen design in Fremont home with East Bay views and luxury finishes"
      />

      {/* Fremont Kitchen Design Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Fremont Kitchen Design Excellence
              </h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Fremont represents the dynamic heart of East Bay living—where suburban charm meets urban sophistication. Our Fremont kitchen design clients understand that true elegance lies in creating spaces that honor both the neighborhood's unique character and their own sophisticated lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From traditional family homes to contemporary architectural gems, Fremont's diverse residential landscape demands kitchen design solutions that seamlessly blend suburban comfort with luxury functionality and uncompromising quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Design Projects</h3>
                  <p className="text-2xl font-bold text-brass">425+</p>
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
                src="/images/service-areas/fremont-kitchen-design-overview.webp"
                alt="Custom kitchen design in Fremont home with East Bay views and luxury finishes"
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
              Kitchen Design Services for Fremont
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our comprehensive kitchen design services are tailored to meet the unique needs of Fremont's diverse architectural styles and East Bay lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchen Design</h3>
              <p className="text-charcoal/70 mb-4">
                Bespoke kitchen design tailored specifically for your Fremont home's unique character and your lifestyle needs.
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
                Comprehensive design services for kitchen renovations that update your Fremont kitchen while preserving its architectural integrity.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Structural analysis</li>
                <li>• Design planning</li>
                <li>• Material coordination</li>
                <li>• Layout optimization</li>
                <li>• Style integration</li>
                <li>• Project management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Expansion Design</h3>
              <p className="text-charcoal/70 mb-4">
                Strategic design for kitchen expansions that improve functionality and accommodate your growing needs in Fremont.
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
                Modern design updates that bring your Fremont kitchen up to current standards while maintaining its unique character.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Smart home integration</li>
                <li>• Energy-efficient planning</li>
                <li>• Modern fixture design</li>
                <li>• Updated electrical design</li>
                <li>• Contemporary finishes</li>
                <li>• Technology integration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Restoration Design</h3>
              <p className="text-charcoal/70 mb-4">
                Expert design for restoration of historic and vintage Fremont kitchens to preserve their original beauty and character.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Historical research</li>
                <li>• Period-appropriate design</li>
                <li>• Craftsmanship planning</li>
                <li>• Hardware replication</li>
                <li>• Finish restoration</li>
                <li>• Modern functionality</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Consultation</h3>
              <p className="text-charcoal/70 mb-4">
                Professional consultation services to help you plan and design your ideal Fremont kitchen space.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Needs assessment</li>
                <li>• Style consultation</li>
                <li>• Budget planning</li>
                <li>• Timeline discussion</li>
                <li>• Material guidance</li>
                <li>• Project planning</li>
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
              Our proven design process ensures your Fremont kitchen design exceeds expectations and perfectly reflects your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Initial Consultation</h3>
              <p className="text-charcoal/70 mb-4">Comprehensive consultation to understand your vision, needs, and budget for your Fremont kitchen design.</p>
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
              <p className="text-charcoal/70 mb-4">Creation of detailed design plans and 3D renderings for your Fremont kitchen design.</p>
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
              <p className="text-charcoal/70 mb-4">Collaborative refinement of your Fremont kitchen design to ensure it perfectly meets your needs.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Design review</li>
                <li>• Client feedback</li>
                <li>• Design adjustments</li>
                <li>• Final approval</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Design Implementation</h3>
              <p className="text-charcoal/70 mb-4">Ongoing design support and coordination throughout the implementation of your Fremont kitchen design.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Design coordination</li>
                <li>• Material selection</li>
                <li>• Quality control</li>
                <li>• Final walkthrough</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* East Bay Design Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Designed for Fremont Living
              </h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Fremont's unique East Bay environment creates distinct requirements for kitchen design. Our approach honors the neighborhood's character while delivering the functionality and elegance modern residents demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with East Bay views to evening entertaining that showcases the home's refined character, every design decision reflects an understanding of how Fremont residents truly live and enjoy their suburban lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">East Bay Integration</h3>
                <p className="text-ivory/80">Kitchen designs that maximize East Bay and valley views while maintaining functionality and aesthetic appeal.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Suburban Adaptation</h3>
                <p className="text-ivory/80">Custom solutions that work with the natural East Bay environment and challenges.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Luxury Functionality</h3>
                <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of Fremont residents.</p>
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
              Featured Fremont Kitchen Design Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of kitchen design projects throughout Fremont's most prestigious East Bay neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/fremont-kitchen-design-1.webp"
                alt="Custom kitchen design in Fremont with East Bay views and luxury finishes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">East Bay Views</h3>
                <p className="text-charcoal/70 mb-4">Kitchen design that maximizes East Bay and valley views while maintaining functionality and luxury.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">View Integration</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Custom Design</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/fremont-kitchen-design-2.webp"
                alt="Traditional kitchen design in Fremont with classic design and sophisticated finishes"
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
                src="/images/portfolio/fremont-kitchen-design-3.webp"
                alt="Contemporary kitchen design in Fremont with modern design and clean lines"
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
              Fremont Kitchen Design FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about kitchen design services in Fremont
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How long does the kitchen design process take?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                The kitchen design process in Fremont typically takes 2-4 weeks from initial consultation to final design approval. This includes 1 week for consultation and needs assessment, 1-2 weeks for design development and 3D renderings, and 1 week for design refinement and final approval. The timeline may vary depending on the complexity of the project and any custom requirements.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's included in your kitchen design service?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our comprehensive kitchen design service for Fremont homes includes initial consultation, space planning, 3D renderings, material selection, layout optimization, style coordination, and ongoing design support throughout the project. We also provide detailed specifications and material lists to ensure accurate implementation of your design.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can you work with existing kitchen layouts?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Yes, we can work with existing kitchen layouts in your Fremont home. We'll analyze the current space, identify opportunities for improvement, and create a design that maximizes functionality while respecting the existing architectural elements. This approach often provides the best balance of cost-effectiveness and dramatic improvement.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Do you provide 3D renderings?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Yes, we provide detailed 3D renderings for all our Fremont kitchen design projects. These renderings allow you to visualize your new kitchen from multiple angles and make informed decisions about materials, finishes, and layout. The 3D renderings are updated throughout the design process to reflect any changes or refinements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Fremont Kitchen with Custom Design?"
        description="Join Fremont's most discerning homeowners who have chosen PineWood Cabinets for their kitchen design needs. Schedule a private consultation to discuss how we can bring your vision to life with bespoke design and craftsmanship."
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