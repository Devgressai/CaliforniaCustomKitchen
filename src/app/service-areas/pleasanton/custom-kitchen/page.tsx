import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Custom Kitchen Pleasanton | Luxury Kitchen Design | PineWood Cabinets',
  description: 'Custom kitchen design and cabinetry for Pleasanton luxury homes. Expert craftsmen serving East Bay with bespoke kitchen solutions.',
  keywords: [
    'custom kitchen Pleasanton',
    'kitchen design Pleasanton',
    'custom cabinetry Pleasanton',
    'kitchen cabinets Pleasanton',
    'custom kitchen East Bay',
    'custom kitchen Dublin',
    'custom kitchen San Ramon',
    'custom kitchen Livermore',
    'custom kitchen Danville',
    'custom kitchen Fremont',
    'custom kitchen Hayward',
    'custom kitchen Castro Valley',
    'custom kitchen San Leandro',
    'custom kitchen Union City',
    'custom kitchen Newark'
  ],
  openGraph: {
    title: 'Custom Kitchen Pleasanton | Luxury Kitchen Design | PineWood Cabinets',
    description: 'Custom kitchen design and cabinetry for Pleasanton luxury homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchen Pleasanton",
  "Custom kitchen design and cabinetry for Pleasanton luxury homes in East Bay",
  "Custom Kitchens",
  ["Pleasanton, CA", "East Bay, CA", "Dublin, CA", "San Ramon, CA", "Livermore, CA"]
)

export default function CustomKitchenPleasantonPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Custom Kitchen Pleasanton"
        subtitle="Luxury Kitchen Design"
        description="Serving Pleasanton's discerning homeowners with bespoke kitchen design and cabinetry that transforms East Bay homes into luxury culinary spaces."
        imageSrc="service-areas/pleasanton-custom-kitchen-hero.webp"
        imageAlt="Custom kitchen in Pleasanton home with East Bay views and luxury finishes"
      />

      {/* Pleasanton Custom Kitchen Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in custom-kitchen</h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Pleasanton represents the sophisticated heart of East Bay living—where suburban elegance meets refined luxury. Our Pleasanton custom kitchen clients understand that true elegance lies in creating spaces that honor both the neighborhood's unique character and their own sophisticated lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From traditional estates to contemporary architectural gems, Pleasanton's diverse residential landscape demands custom kitchen solutions that seamlessly blend suburban sophistication with luxury functionality and uncompromising quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Kitchen Projects</h3>
                  <p className="text-2xl font-bold text-brass">450+</p>
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
                src="/images/service-areas/pleasanton-custom-kitchen-overview.webp"
                alt="Custom kitchen in Pleasanton home with East Bay views and luxury finishes"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Kitchen Services */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in custom-kitchen</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our comprehensive custom kitchen services are tailored to meet the unique needs of Pleasanton's diverse architectural styles and East Bay lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchen Design</h3>
              <p className="text-charcoal/70 mb-4">
                Bespoke kitchen design tailored specifically for your Pleasanton home's unique character and your lifestyle needs.
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
              <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Cabinetry</h3>
              <p className="text-charcoal/70 mb-4">
                Hand-crafted custom cabinetry designed and built specifically for your Pleasanton kitchen space and requirements.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Custom measurements</li>
                <li>• Premium materials</li>
                <li>• Hand-crafted construction</li>
                <li>• Professional installation</li>
                <li>• Quality guarantee</li>
                <li>• Maintenance support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Renovation</h3>
              <p className="text-charcoal/70 mb-4">
                Complete kitchen renovation services that transform your Pleasanton kitchen while preserving its architectural integrity.
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
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Expansion</h3>
              <p className="text-charcoal/70 mb-4">
                Strategic expansion of your Pleasanton kitchen space to improve functionality and accommodate your growing needs.
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
                Modern updates that bring your Pleasanton kitchen up to current standards while maintaining its unique character.
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
                Expert restoration of historic and vintage Pleasanton kitchens to preserve their original beauty and character.
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in custom-kitchen</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our proven design process ensures your Pleasanton custom kitchen exceeds expectations and perfectly reflects your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Initial Consultation</h3>
              <p className="text-charcoal/70 mb-4">Comprehensive consultation to understand your vision, needs, and budget for your Pleasanton custom kitchen.</p>
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
              <p className="text-charcoal/70 mb-4">Creation of detailed design plans and 3D renderings for your Pleasanton custom kitchen.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Space planning</li>
                <li>• 3D renderings</li>
                <li>• Material selection</li>
                <li>• Layout optimization</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Fabrication</h3>
              <p className="text-charcoal/70 mb-4">Hand-crafted construction of your approved Pleasanton custom kitchen design in our workshop.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Material preparation</li>
                <li>• Precision cutting</li>
                <li>• Assembly</li>
                <li>• Quality control</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Installation</h3>
              <p className="text-charcoal/70 mb-4">Professional installation and final walkthrough for your Pleasanton custom kitchen.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Site preparation</li>
                <li>• Cabinet installation</li>
                <li>• Hardware installation</li>
                <li>• Final inspection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* East Bay Kitchen Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in custom-kitchen</h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Pleasanton's unique East Bay environment creates distinct requirements for custom kitchens. Our approach honors the neighborhood's character while delivering the functionality and elegance modern residents demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with East Bay views to evening entertaining that showcases the home's refined character, every design decision reflects an understanding of how Pleasanton residents truly live and enjoy their suburban lifestyle.
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
                <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of Pleasanton residents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Kitchen Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in custom-kitchen</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of custom kitchen projects throughout Pleasanton's most prestigious East Bay neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/pleasanton-custom-kitchen-1.webp"
                alt="Custom kitchen in Pleasanton with East Bay views and luxury finishes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">East Bay Views</h3>
                <p className="text-charcoal/70 mb-4">Custom kitchen that maximizes East Bay and valley views while maintaining functionality and luxury.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">View Integration</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Custom Design</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/pleasanton-custom-kitchen-2.webp"
                alt="Traditional custom kitchen in Pleasanton with classic design and sophisticated finishes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Traditional Sophistication</h3>
                <p className="text-charcoal/70 mb-4">Classic custom kitchen with traditional details and sophisticated finishes throughout.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Traditional Design</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Sophisticated Finishes</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/pleasanton-custom-kitchen-3.webp"
                alt="Contemporary custom kitchen in Pleasanton with modern design and clean lines"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Contemporary Luxury</h3>
                <p className="text-charcoal/70 mb-4">Modern custom kitchen with clean lines and premium materials for sophisticated living.</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in custom-kitchen</h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchen services in Pleasanton
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a custom kitchen project take?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                A complete custom kitchen project in Pleasanton typically takes 10-16 weeks from start to finish. This includes 2-3 weeks for design and planning, 6-10 weeks for fabrication in our workshop, and 2-3 weeks for installation and finishing. The timeline may vary depending on the complexity of the design and any custom features.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What makes your custom kitchens different?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our Pleasanton custom kitchens are hand-crafted in our workshop using only the finest materials and traditional techniques. Each kitchen is designed specifically for your space and lifestyle, ensuring perfect fit and functionality. We also provide comprehensive project management and quality control throughout the entire process.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can you work with existing appliances?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Yes, we can design your Pleasanton custom kitchen to work with your existing appliances, or we can help you select new ones that perfectly complement your design. We work with all major appliance brands and can provide recommendations based on your cooking style and preferences.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Do you offer design consultation services?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Yes, we offer comprehensive design consultation services for Pleasanton custom kitchens. This includes space planning, material selection, color coordination, and 3D renderings to help you visualize your new kitchen before construction begins. Our design team works closely with you to ensure every detail meets your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Create Your Dream Custom Kitchen in Pleasanton?"
        description="Join Pleasanton's most discerning homeowners who have chosen PineWood Cabinets for their custom kitchen needs. Schedule a private consultation to discuss how we can bring your vision to life with bespoke design and craftsmanship."
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
