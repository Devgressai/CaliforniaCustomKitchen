import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Kitchen Cabinets San Carlos | Kitchen Cabinets | PineWood Cabinets',
  description: 'Custom kitchen cabinets and cabinetry for San Carlos luxury homes. Expert craftsmen serving Peninsula with luxury kitchen solutions.',
  keywords: [
    'kitchen-cabinets san-carlos',
    'kitchen-cabinets san-carlos',
    'luxury kitchen-cabinets san-carlos',
    'custom kitchen-cabinets san-carlos',
    'kitchen-cabinets peninsula',
    'kitchen-cabinets California'
  ],
  openGraph: {
    title: 'Kitchen Cabinets San Carlos | Kitchen Cabinets | PineWood Cabinets',
    description: 'Custom kitchen cabinets and cabinetry for San Carlos luxury homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Kitchen Cabinets San Carlos",
  "Custom kitchen cabinets and cabinetry for San Carlos luxury homes for San Carlos luxury homes in Peninsula",
  "Kitchen Cabinets",
  ["San Carlos, CA", "Peninsula, CA", "California"]
)

export default function KitchenCabinetsSanCarlosPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Kitchen Cabinets San Carlos"
        subtitle="Kitchen Cabinets"
        description="Serving San Carlos's most discerning homeowners with Custom kitchen cabinets and cabinetry that transform Peninsula homes into luxury culinary spaces."
        imageSrc="service-areas/san-carlos-kitchen-cabinets-hero.webp"
        imageAlt="Kitchen Cabinets in San Carlos home with luxury finishes and Peninsula views"
      />

      {/* San Carlos Kitchen Cabinets Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                San Carlos Kitchen Cabinets Excellence
              </h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                San Carlos represents the pinnacle of Peninsula luxury—where sophistication meets refined elegance. Our San Carlos kitchen-cabinets clients understand that true luxury lies in creating spaces that honor both the neighborhood's unique character and their own sophisticated lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From historic estates to contemporary architectural gems, San Carlos's diverse residential landscape demands kitchen-cabinets solutions that seamlessly blend Peninsula sophistication with luxury functionality and uncompromising quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Kitchen Cabinets Projects</h3>
                  <p className="text-2xl font-bold text-brass">200+</p>
                  <p className="text-sm text-charcoal/70">Completed projects</p>
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
                src="/images/service-areas/san-carlos-kitchen-cabinets-overview.webp"
                alt="Kitchen Cabinets in San Carlos home with luxury finishes and Peninsula views"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Cabinets Services */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Kitchen Cabinets Services for San Carlos
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our comprehensive kitchen-cabinets services are tailored to meet the unique needs of San Carlos's diverse architectural styles and Peninsula lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Complete Kitchen Cabinets</h3>
              <p className="text-charcoal/70 mb-4">
                Full kitchen-cabinets from concept to completion, tailored to your San Carlos home's unique character and your lifestyle needs.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Design consultation</li>
                <li>• 3D renderings</li>
                <li>• Custom solutions</li>
                <li>• Material selection</li>
                <li>• Project management</li>
                <li>• Quality installation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinets Renovation</h3>
              <p className="text-charcoal/70 mb-4">
                Comprehensive renovation services that update your San Carlos kitchen-cabinets while preserving its architectural integrity and character.
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
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinets Refresh</h3>
              <p className="text-charcoal/70 mb-4">
                Cosmetic updates that give your San Carlos kitchen-cabinets a fresh, modern look without the complexity of a full renovation.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Design updates</li>
                <li>• Hardware updates</li>
                <li>• Material replacement</li>
                <li>• Finish updates</li>
                <li>• Color coordination</li>
                <li>• Lighting upgrades</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinets Expansion</h3>
              <p className="text-charcoal/70 mb-4">
                Strategic expansion of your San Carlos kitchen-cabinets space to improve functionality and accommodate your growing needs.
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
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinets Modernization</h3>
              <p className="text-charcoal/70 mb-4">
                Modern updates that bring your San Carlos kitchen-cabinets up to current standards while maintaining its unique character.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Smart home integration</li>
                <li>• Energy-efficient solutions</li>
                <li>• Modern fixtures</li>
                <li>• Updated electrical</li>
                <li>• Contemporary finishes</li>
                <li>• Technology integration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinets Restoration</h3>
              <p className="text-charcoal/70 mb-4">
                Expert restoration of historic and vintage San Carlos kitchen-cabinets to preserve their original beauty and character.
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

      {/* Design Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Our Kitchen Cabinets Process
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our proven process ensures your San Carlos kitchen-cabinets exceeds expectations and perfectly reflects your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Initial Consultation</h3>
              <p className="text-charcoal/70 mb-4">Comprehensive consultation to understand your vision, needs, and budget for your San Carlos kitchen-cabinets.</p>
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
              <p className="text-charcoal/70 mb-4">Creation of detailed design plans and 3D renderings for your San Carlos kitchen-cabinets.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Space planning</li>
                <li>• 3D renderings</li>
                <li>• Material selection</li>
                <li>• Layout optimization</li>
                <li>• Technology integration</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Construction</h3>
              <p className="text-charcoal/70 mb-4">Professional construction and installation of your approved San Carlos kitchen-cabinets design.</p>
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
              <p className="text-charcoal/70 mb-4">Comprehensive final walkthrough and project completion for your San Carlos kitchen-cabinets.</p>
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

      {/* Peninsula Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Designed for San Carlos Living
              </h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                San Carlos's unique Peninsula environment creates distinct requirements for kitchen-cabinets. Our approach honors the neighborhood's character while delivering the functionality and elegance modern residents demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with Peninsula views to evening entertaining that showcases the home's refined character, every decision reflects an understanding of how San Carlos residents truly live and enjoy their Peninsula lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Peninsula Integration</h3>
                <p className="text-ivory/80">Kitchen Cabinets solutions that maximize Peninsula views while maintaining functionality and aesthetic appeal.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Peninsula Adaptation</h3>
                <p className="text-ivory/80">Custom solutions that work with the natural Peninsula environment and challenges.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Luxury Functionality</h3>
                <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of San Carlos residents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Kitchen Cabinets Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Featured San Carlos Kitchen Cabinets Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of kitchen-cabinets projects throughout San Carlos's most prestigious Peninsula neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/san-carlos-kitchen-cabinets-1.webp"
                alt="Kitchen Cabinets in San Carlos home with Peninsula views and luxury finishes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Peninsula Views</h3>
                <p className="text-charcoal/70 mb-4">Kitchen Cabinets that maximizes Peninsula views while maintaining functionality and luxury.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">View Integration</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Custom Design</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/san-carlos-kitchen-cabinets-2.webp"
                alt="Traditional kitchen-cabinets in San Carlos with classic design and sophisticated finishes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Traditional Sophistication</h3>
                <p className="text-charcoal/70 mb-4">Classic kitchen-cabinets with traditional details and sophisticated finishes throughout.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Traditional Design</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Sophisticated Finishes</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/san-carlos-kitchen-cabinets-3.webp"
                alt="Contemporary kitchen-cabinets in San Carlos with modern design and clean lines"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Contemporary Luxury</h3>
                <p className="text-charcoal/70 mb-4">Modern kitchen-cabinets with clean lines and premium materials for sophisticated living.</p>
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
              San Carlos Kitchen Cabinets FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about kitchen-cabinets services in San Carlos
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a kitchen-cabinets take?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                A complete kitchen-cabinets in San Carlos typically takes 8-12 weeks from start to finish. This includes 2-3 weeks for design and planning, 1-2 weeks for demolition and preparation, 4-6 weeks for construction and installation, and 1-2 weeks for finishing and cleanup. The timeline may vary depending on the scope of work and any unexpected issues that arise.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Do I need permits for my kitchen-cabinets?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Most kitchen-cabinets projects in San Carlos require permits, especially if you're moving walls, changing electrical or plumbing, or making structural modifications. We handle all permit applications and inspections as part of our comprehensive kitchen-cabinets service. This ensures your project meets all local building codes and regulations.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can I live in my home during the project?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Yes, most of our San Carlos kitchen-cabinets clients choose to stay in their homes during the project. We work to minimize disruption by setting up temporary facilities, protecting other areas of your home, and maintaining a clean, organized work environment. We'll discuss your specific needs and preferences during the planning phase.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's included in your kitchen-cabinets service?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our complete kitchen-cabinets service includes design consultation, 3D renderings, permit coordination, demolition, structural work, custom solutions, material installation, electrical and plumbing work, flooring, lighting, painting, and final cleanup. We also provide project management and quality control throughout the entire process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Create Your Dream Kitchen Cabinets in San Carlos?"
        description="Join San Carlos's most discerning homeowners who have chosen PineWood Cabinets for their kitchen-cabinets needs. Schedule a private consultation to discuss how we can bring your vision to life with comprehensive kitchen-cabinets services."
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