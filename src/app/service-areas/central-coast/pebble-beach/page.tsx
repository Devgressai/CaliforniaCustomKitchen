import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { LocationBreadcrumbs } from '@/components/Breadcrumbs'
import { StructuredData, generateLocalBusinessSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: "Custom Kitchen Cabinets Pebble Beach CA | Luxury Cabinetry Central Coast",
  description: "Museum-grade custom kitchens & architectural millwork for Pebble Beach's most exclusive estates. Serving Central Coast's elite with uncompromising craftsmanship since 2006.",
  keywords: [
    'custom kitchens Pebble Beach',
    'luxury cabinetry Central Coast',
    'bespoke millwork Pebble Beach CA',
    'high-end kitchen design',
    'custom cabinets golf course homes',
    'architectural millwork Pebble Beach',
    'luxury estate renovations Monterey'
  ],
  openGraph: {
    title: "Custom Kitchen Cabinets Pebble Beach CA | PineWood Cabinets",
    description: "Museum-grade custom kitchens for Pebble Beach's most discerning homeowners. Serving Central Coast's elite with uncompromising craftsmanship.",
    images: ['/images/pebble-beach-estate-kitchen-hero.webp'],
  },
}

export default function PebbleBeachPage() {
  const localBusinessSchema = generateLocalBusinessSchema("Pebble Beach, California", {
    lat: "36.5683",
    lng: "-121.9461"
  })

  return (
    <>
      <StructuredData localBusiness={localBusinessSchema} />

      <HeroQuiet
        title="Pebble Beach's Artisan of Choice"
        subtitle="Coastal Elegance & Championship Luxury"
        description="Where world-class golf meets museum-grade craftsmanship. Bespoke cabinetry for the Central Coast's most prestigious addresses, crafted with reverence for both natural beauty and architectural excellence."
        imageSrc="pebble-beach-modern-luxury-kitchen.webp"
        imageAlt="Modern luxury kitchen cabinetry in Pebble Beach estate with large glass windows"
        primaryCTA={{
          text: "Schedule Private Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Pebble Beach Portfolio",
          href: "/portfolio?location=pebble-beach"
        }}
      />

      {/* Breadcrumbs */}
      <div className="bg-ivory py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <LocationBreadcrumbs pathname="/service-areas/central-coast/pebble-beach" />
        </div>
      </div>

      {/* Executive Overview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-8 text-balance">Custom Kitchens in pebble-beach | Luxury Cabinetry</h1>
            <div className="prose-luxury">
              <p className="text-xl leading-relaxed text-charcoal/80 mb-8">
                Perched dramatically above the Pacific Ocean, Pebble Beach represents the pinnacle of American luxury living—a place where world-class golf, breathtaking natural beauty, and architectural excellence converge. Since 2006, PineWood Cabinets has served as the preferred cabinetry artisan for this legendary community, creating custom kitchens and architectural millwork that honor both the dramatic coastal setting and the sophisticated lifestyle of residents who have achieved success at the highest levels.
              </p>
              <p className="text-lg leading-relaxed text-charcoal/70 mb-6">
                Our Pebble Beach clients include golf legends, technology innovators, entertainment industry luminaries, and business titans who understand that true luxury lies in the marriage of exceptional craftsmanship with functional beauty. They seek not mere status symbols, but heirloom pieces that will enhance their daily lives while complementing the natural splendor that defines this extraordinary coastal enclave.
              </p>
              <p className="text-base leading-relaxed text-charcoal/70">
                In this community where privacy is paramount and quality is never compromised, we have earned our reputation through discretion, excellence, and an unwavering commitment to creating cabinetry that feels as natural and enduring as the ancient Monterey pines that frame the legendary golf courses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coastal Design Philosophy */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">Luxury Kitchen Design in pebble-beach</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From intimate family gatherings to championship celebrations, our kitchens adapt to the unique rhythms of Pebble Beach's world-class lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-charcoal text-ivory p-8 rounded-lg">
              <h3 className="font-display text-xl font-bold mb-6">
                Golf Tournament Entertaining
              </h3>
              <div className="space-y-4 text-french-gray">
                <p>
                  <strong className="text-brass">Championship Hosting:</strong> Kitchens designed to accommodate large gatherings during major tournaments, with professional-grade equipment and extensive prep areas.
                </p>
                <p>
                  <strong className="text-brass">Outdoor Integration:</strong> Seamless connections to outdoor entertaining spaces with ocean and golf course views, supporting the indoor-outdoor lifestyle.
                </p>
                <p>
                  <strong className="text-brass">Wine Program Excellence:</strong> Sophisticated storage and serving capabilities for extensive wine collections, with climate control for coastal conditions.
                </p>
                <p>
                  <strong className="text-brass">Catering Support:</strong> Professional staging areas and service coordination for high-level corporate and charity events.
                </p>
              </div>
            </div>

            <div className="bg-deep-green text-ivory p-8 rounded-lg">
              <h3 className="font-display text-xl font-bold mb-6">
                Coastal Living Integration
              </h3>
              <div className="space-y-4 text-french-gray">
                <p>
                  <strong className="text-brass">Ocean View Optimization:</strong> Kitchen layouts that maximize sight lines to the Pacific while maintaining functional efficiency.
                </p>
                <p>
                  <strong className="text-brass">Salt Air Resistance:</strong> Specialized materials and finishes engineered to withstand coastal environmental conditions.
                </p>
                <p>
                  <strong className="text-brass">Natural Light Celebration:</strong> Design strategies that capture and enhance the dramatic natural lighting conditions.
                </p>
                <p>
                  <strong className="text-brass">Seasonal Adaptability:</strong> Storage and functionality that adapts to both intimate winter gatherings and expansive summer entertaining.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-ivory p-12 rounded-lg">
            <h3 className="font-display text-2xl font-bold text-charcoal mb-8 text-center">
              The Pebble Beach Difference: Luxury Without Compromise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Championship Standards',
                  description: 'Every detail meets the exacting standards expected in a community that hosts the world\'s most prestigious golf tournaments',
                  features: ['Museum-grade finishing', 'Precision tolerances', 'Premium materials', 'White-glove service']
                },
                {
                  title: 'Coastal Engineering',
                  description: 'Specialized construction methods and materials designed to thrive in the unique Monterey Peninsula environment',
                  features: ['Salt-air resistance', 'Moisture management', 'UV protection', 'Seismic considerations']
                },
                {
                  title: 'Lifestyle Integration',
                  description: 'Designs that seamlessly support both intimate family living and world-class entertaining requirements',
                  features: ['Flexible functionality', 'Professional equipment', 'Service coordination', 'Privacy protection']
                }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <h4 className="font-display text-lg font-semibold text-charcoal mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-charcoal/80 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="text-xs text-charcoal/60 space-y-1">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Experience Pebble Beach Excellence"
        description="Join the legendary residents of Pebble Beach who have chosen PineWood Cabinets for their custom cabinetry needs. Discover how we can create spaces worthy of this extraordinary coastal community."
        primaryCTA={{
          text: "Schedule Private Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Pebble Beach Portfolio",
          href: "/portfolio?location=pebble-beach"
        }}
        background="dark"
      />
    </>
  )
}
