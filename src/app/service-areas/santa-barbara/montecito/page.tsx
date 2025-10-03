import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { ProjectGrid } from '@/components/ProjectGrid'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Custom Kitchen Cabinets Montecito CA | Luxury Cabinetry Santa Barbara",
  description: "Bespoke cabinetry & architectural millwork for Montecito's most exclusive estates. Serving Santa Barbara's elite with museum-grade craftsmanship since 2006.",
  keywords: [
    'custom kitchens Montecito',
    'luxury cabinetry Santa Barbara',
    'bespoke millwork Montecito CA',
    'high-end kitchen design',
    'custom cabinets entertainment industry',
    'architectural millwork Montecito',
    'luxury estate renovations Santa Barbara'
  ],
  openGraph: {
    title: "Custom Kitchen Cabinets Montecito CA | AV's Cabinets",
    description: "Bespoke cabinetry for Montecito's most discerning homeowners. Serving Santa Barbara's elite with uncompromising craftsmanship.",
    images: ['/images/montecito-estate-kitchen-hero.webp'],
  },
}

const montecitoProjects = [
  {
    id: 1,
    title: 'Mediterranean Revival Estate',
    location: 'Montecito, CA',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-11-sacramento-california.webp',
    alt: 'Custom Mediterranean-style kitchen with hand-carved details in Montecito estate',
    description: 'Hand-carved walnut cabinetry with old-world craftsmanship for a Hollywood producer\'s historic estate.'
  },
  {
    id: 2,
    title: 'Coastal Contemporary Kitchen',
    location: 'Montecito, CA',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-12-sacramento-california.webp',
    alt: 'Contemporary kitchen with ocean views and integrated wine storage in Montecito',
    description: 'Seamless indoor-outdoor integration with climate-controlled wine storage for a tech entrepreneur\'s retreat.'
  },
  {
    id: 3,
    title: 'Spanish Colonial Revival',
    location: 'Montecito, CA',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-13-sacramento-california.webp',
    alt: 'Restored Spanish Colonial kitchen with period-appropriate cabinetry in historic Montecito home',
    description: 'Authentic restoration honoring 1920s architecture while incorporating modern functionality for daily living.'
  }
]

export default function MontecitoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AV's Cabinets - Montecito",
            "description": "Custom kitchen cabinets and luxury cabinetry for Montecito, California",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/santa-barbara/montecito",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Montecito",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "34.4361",
              "longitude": "-119.6364"
            },
            "areaServed": {
              "@type": "City",
              "name": "Montecito",
              "sameAs": "https://en.wikipedia.org/wiki/Montecito,_California"
            },
            "serviceType": [
              "Custom Kitchen Cabinets",
              "Luxury Cabinetry",
              "Architectural Millwork",
              "Historic Restoration"
            ]
          })
        }}
      />

      <HeroQuiet
        title="Montecito's Artisan of Choice"
        subtitle="Coastal Elegance & Timeless Craft"
        description="Where Mediterranean romance meets California sophistication. Bespoke cabinetry for Santa Barbara's most exclusive enclave, crafted with reverence for both tradition and innovation."
        imageSrc="/images/montecito-estate-kitchen-hero.webp"
        imageAlt="Luxury custom kitchen overlooking Pacific Ocean in Montecito estate with hand-carved cabinetry"
        primaryCTA={{
          text: "Schedule Private Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Montecito Portfolio",
          href: "/portfolio?location=montecito"
        }}
      />

      {/* Executive Overview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-8 text-balance">
              Custom Cabinetry for Montecito's Cultural Elite
            </h1>
            <div className="prose-luxury">
              <p className="text-xl leading-relaxed text-charcoal/80 mb-8">
                Nestled between the Santa Ynez Mountains and the Pacific Ocean, Montecito stands as California's most refined coastal community—a sanctuary where entertainment industry luminaries, literary figures, and cultural philanthropists have created some of America's most beautiful homes. Since 2006, AV's Cabinets has served as the preferred artisan for this discerning community, creating custom kitchens and architectural millwork that honor both the region's Mediterranean heritage and its residents' sophisticated sensibilities.
              </p>
              <p className="text-lg leading-relaxed text-charcoal/70 mb-6">
                Our Montecito clients represent the pinnacle of creative achievement—Academy Award winners, bestselling authors, renowned directors, and cultural tastemakers who understand that true luxury lies in authenticity, craftsmanship, and the kind of understated elegance that improves with time. They seek not mere status symbols, but heirloom pieces that will grace their homes for generations while supporting the rituals of gracious living that define the Montecito lifestyle.
              </p>
              <p className="text-base leading-relaxed text-charcoal/70">
                In this community where privacy is paramount and quality is never compromised, we have earned our reputation through discretion, excellence, and an unwavering commitment to creating cabinetry that feels as natural and enduring as the ancient oaks that dot the Montecito landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Montecito Design Philosophy */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-charcoal mb-8">
                Mediterranean Soul, California Spirit
              </h2>
              <div className="prose-luxury">
                <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
                  Montecito's architectural DNA traces back to the early 20th century, when visionary architects like George Washington Smith and Reginald Johnson created the distinctive Mediterranean Revival style that defines the community's character. Our design philosophy honors this heritage while embracing the indoor-outdoor lifestyle and natural beauty that make coastal California living so compelling.
                </p>
                <p className="text-base leading-relaxed text-charcoal/70 mb-6">
                  We understand that Montecito residents live at the intersection of culture and nature, tradition and innovation. They appreciate the romance of hand-forged iron hardware and the warmth of aged walnut, but they also value the convenience of modern appliances and smart home technology. Our work reflects this duality, creating kitchens that feel both timeless and thoroughly contemporary.
                </p>
                <p className="text-base leading-relaxed text-charcoal/70">
                  The result is cabinetry that captures the essence of Mediterranean craftsmanship—the attention to proportion, the celebration of natural materials, the integration with landscape—while incorporating the functionality and innovation that define California living at its finest.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/montecito-mediterranean-influence.webp"
                alt="Mediterranean-inspired custom cabinetry design elements for Montecito estate kitchen"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Material Mastery for Coastal Living */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Materials Mastery: Coastal Resilience Meets Timeless Beauty
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Montecito's coastal environment demands materials and finishes that can withstand salt air and humidity while maintaining their beauty for decades. Our expertise in marine-grade finishing and climate-appropriate material selection ensures lasting performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-charcoal text-ivory p-8 rounded-lg">
              <h3 className="font-display text-2xl font-bold mb-6">
                Climate-Conscious Wood Selection
              </h3>
              <div className="space-y-4 text-french-gray">
                <p>
                  <strong className="text-brass">Teak & Mahogany:</strong> Marine-grade hardwoods with natural oil content that resists moisture and salt air exposure while developing beautiful patina over time.
                </p>
                <p>
                  <strong className="text-brass">Reclaimed Heart Pine:</strong> Salvaged from historic structures, providing character and stability that only comes with centuries of seasoning.
                </p>
                <p>
                  <strong className="text-brass">Quarter-Sawn White Oak:</strong> Superior dimensional stability in varying humidity conditions, with ray fleck patterns that complement Mediterranean aesthetics.
                </p>
                <p>
                  <strong className="text-brass">Walnut Burl Veneers:</strong> Dramatic grain patterns from California black walnut, celebrating the region's native species while providing stunning visual impact.
                </p>
              </div>
            </div>

            <div className="bg-deep-green text-ivory p-8 rounded-lg">
              <h3 className="font-display text-2xl font-bold mb-6">
                Advanced Coastal Finishing Systems
              </h3>
              <div className="space-y-4 text-french-gray">
                <p>
                  <strong className="text-brass">Marine Varnish Systems:</strong> Multi-coat applications designed for yacht construction, providing superior protection against coastal conditions.
                </p>
                <p>
                  <strong className="text-brass">UV-Resistant Topcoats:</strong> Advanced formulations that prevent fading and degradation from intense California sunlight.
                </p>
                <p>
                  <strong className="text-brass">Moisture Barrier Technology:</strong> Specialized sealers that prevent humidity infiltration while allowing wood to breathe naturally.
                </p>
                <p>
                  <strong className="text-brass">Hand-Rubbed Oil Finishes:</strong> Traditional techniques using tung oil and carnauba wax for surfaces that improve with age and use.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-grain p-12 rounded-lg">
            <h3 className="font-display text-3xl font-bold text-charcoal mb-8 text-center">
              The Montecito Material Palette: A Symphony of Texture and Tone
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-800 to-amber-900 rounded-lg mx-auto mb-4 shadow-lg"></div>
                <h4 className="font-display text-lg font-semibold text-charcoal mb-2">Warm Walnut Tones</h4>
                <p className="text-sm text-charcoal/70">Rich chocolate browns with golden undertones that capture the warmth of Mediterranean sunlight</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-stone-300 to-stone-500 rounded-lg mx-auto mb-4 shadow-lg"></div>
                <h4 className="font-display text-lg font-semibold text-charcoal mb-2">Coastal Limestone</h4>
                <p className="text-sm text-charcoal/70">Soft grays and creams that echo the Santa Barbara coastline and complement ocean views</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-lg mx-auto mb-4 shadow-lg"></div>
                <h4 className="font-display text-lg font-semibent text-charcoal mb-2">Sage & Olive</h4>
                <p className="text-sm text-charcoal/70">Muted greens inspired by Mediterranean olive groves and native California chaparral</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering for Coastal Environments */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/images/montecito-coastal-engineering.webp"
                alt="Specialized engineering solutions for coastal cabinetry in Montecito homes"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl font-bold text-charcoal mb-8">
                Engineering Excellence for Coastal Conditions
              </h2>
              <div className="prose-luxury">
                <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
                  Montecito's proximity to the Pacific Ocean creates unique challenges for custom cabinetry. Salt air, fluctuating humidity levels, and intense UV exposure require specialized engineering solutions that go far beyond standard construction methods.
                </p>
                
                <h3 className="font-display text-xl font-semibold text-charcoal mb-4">
                  Moisture Management Systems
                </h3>
                <ul className="space-y-3 text-charcoal/70 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Vapor Barriers:</strong> Advanced membrane systems that prevent moisture infiltration while allowing natural wood movement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Ventilation Integration:</strong> Concealed air circulation systems that prevent condensation and mold growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Drainage Systems:</strong> Hidden channels that direct any moisture away from wood surfaces</span>
                  </li>
                </ul>

                <h3 className="font-display text-xl font-semibold text-charcoal mb-4">
                  Structural Reinforcement
                </h3>
                <p className="text-base leading-relaxed text-charcoal/70">
                  Our coastal construction methods include stainless steel reinforcement in high-stress areas, marine-grade adhesives that maintain bond strength in varying conditions, and expansion joints that accommodate seasonal movement without compromising structural integrity or aesthetic appearance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Montecito Lifestyle Integration */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Designed for the Montecito Lifestyle
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From intimate dinner parties with fellow creatives to large-scale charitable galas, our kitchens adapt to the sophisticated entertaining culture that defines Montecito society.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-charcoal text-ivory p-8 rounded-lg">
              <h3 className="font-display text-xl font-bold mb-6">
                Creative Professional Needs
              </h3>
              <div className="space-y-4 text-french-gray">
                <p>
                  <strong className="text-brass">Inspiration Spaces:</strong> Dedicated areas for cookbook collections, art displays, and creative inspiration that fuel culinary creativity.
                </p>
                <p>
                  <strong className="text-brass">Flexible Work Areas:</strong> Adaptable surfaces that can serve as writing desks, art stations, or business meeting spaces when needed.
                </p>
                <p>
                  <strong className="text-brass">Technology Integration:</strong> Seamless incorporation of video conferencing, sound systems, and smart home controls for busy creative professionals.
                </p>
              </div>
            </div>

            <div className="bg-deep-green text-ivory p-8 rounded-lg">
              <h3 className="font-display text-xl font-bold mb-6">
                Philanthropic Entertaining
              </h3>
              <div className="space-y-4 text-french-gray">
                <p>
                  <strong className="text-brass">Gala Preparation:</strong> Commercial-grade equipment and extensive prep areas for large-scale charitable events and fundraisers.
                </p>
                <p>
                  <strong className="text-brass">Service Coordination:</strong> Butler's pantries and service areas that support professional catering while maintaining elegant aesthetics.
                </p>
                <p>
                  <strong className="text-brass">Display Systems:</strong> Integrated showcases for auction items, art pieces, and cultural artifacts during fundraising events.
                </p>
              </div>
            </div>

            <div className="bg-oxblood text-ivory p-8 rounded-lg">
              <h3 className="font-display text-xl font-bold mb-6">
                Coastal Living Integration
              </h3>
              <div className="space-y-4 text-french-gray">
                <p>
                  <strong className="text-brass">Indoor-Outdoor Flow:</strong> Seamless transitions to outdoor kitchens, dining areas, and entertaining spaces with ocean views.
                </p>
                <p>
                  <strong className="text-brass">Beach House Functionality:</strong> Specialized storage for beach gear, outdoor entertaining supplies, and seasonal equipment.
                </p>
                <p>
                  <strong className="text-brass">Garden Integration:</strong> Herb gardens, produce storage, and preservation areas for estate-grown ingredients and local farmers market finds.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-grain p-12 rounded-lg">
            <h3 className="font-display text-3xl font-bold text-charcoal mb-8 text-center">
              Case Study: Entertainment Industry Executive's Coastal Retreat
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/montecito-entertainment-executive-kitchen.webp"
                  alt="Custom kitchen for entertainment industry executive in Montecito featuring ocean views and smart technology"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
                  For a prominent film producer's oceanfront estate, we created a kitchen that seamlessly balances the demands of industry networking with the tranquility of coastal living.
                </p>
                <div className="space-y-4 text-charcoal/70">
                  <div className="flex items-start">
                    <span className="w-3 h-3 bg-brass rounded-full mt-1 mr-3 flex-shrink-0"></span>
                    <span><strong>Challenge:</strong> Create screening room catering capabilities while maintaining residential warmth and ocean view access</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-3 h-3 bg-brass rounded-full mt-1 mr-3 flex-shrink-0"></span>
                    <span><strong>Solution:</strong> Retractable wall system opening to ocean terrace with integrated projection equipment storage</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-3 h-3 bg-brass rounded-full mt-1 mr-3 flex-shrink-0"></span>
                    <span><strong>Innovation:</strong> Salt-air resistant finishes with UV protection for exposed cabinetry elements</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-3 h-3 bg-brass rounded-full mt-1 mr-3 flex-shrink-0"></span>
                    <span><strong>Result:</strong> A space that transforms from intimate family kitchen to industry gathering place with Pacific Ocean backdrop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Montecito Projects */}
      <ProjectGrid
        projects={montecitoProjects}
        title="Recent Montecito Commissions"
        description="Each project represents a unique collaboration with cultural leaders and creative visionaries, creating spaces that honor both Mediterranean heritage and contemporary California living."
      />

      {/* Historic Preservation & Modern Innovation */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-6">
              Historic Preservation Meets Modern Innovation
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Many of Montecito's most prestigious properties are historic estates requiring sensitive restoration that honors architectural heritage while incorporating contemporary functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="font-display text-2xl font-bold mb-6">
                Architectural Heritage Stewardship
              </h3>
              <div className="prose-luxury">
                <p className="text-base leading-relaxed text-french-gray mb-4">
                  Our restoration work on Montecito's historic estates requires deep understanding of period-appropriate construction methods, materials, and proportional relationships. We work closely with preservation architects and historical societies to ensure our interventions respect and enhance original architectural intent.
                </p>
                <p className="text-base leading-relaxed text-french-gray mb-6">
                  This might involve recreating hand-forged hardware using traditional blacksmithing techniques, sourcing reclaimed materials that match original construction, or developing custom millwork profiles that complement existing architectural details while accommodating modern appliances and functionality.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-french-gray">Period-accurate joinery methods using traditional hand tools and techniques</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-french-gray">Historically appropriate material selections with modern performance characteristics</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-french-gray">Invisible integration of modern conveniences within historic architectural frameworks</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/montecito-historic-restoration-detail.webp"
                alt="Historic restoration details showing period-appropriate cabinetry craftsmanship in Montecito estate"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Spanish Colonial Revival',
                period: '1920s-1930s',
                characteristics: 'Hand-carved details, wrought iron hardware, warm wood tones, arched openings, tile integration',
                approach: 'Recreation of period millwork profiles using traditional joinery with hidden modern functionality'
              },
              {
                title: 'Mediterranean Revival',
                period: '1910s-1920s',
                characteristics: 'Classical proportions, natural materials, indoor-outdoor integration, courtyard orientation',
                approach: 'Authentic material sourcing with contemporary engineering for improved durability and performance'
              },
              {
                title: 'Monterey Colonial',
                period: '1930s-1940s',
                characteristics: 'Adobe-inspired forms, wooden balconies, red tile roofs, rustic beam ceilings',
                approach: 'Rustic aesthetic with refined craftsmanship and seamless technology integration'
              }
            ].map((style, index) => (
              <div key={index} className="bg-deep-green/20 p-6 rounded-lg border border-french-gray/20">
                <h4 className="font-display text-lg font-bold mb-2">
                  {style.title}
                </h4>
                <p className="text-brass text-sm mb-3">
                  {style.period}
                </p>
                <p className="text-french-gray text-sm leading-relaxed mb-4">
                  <strong>Characteristics:</strong> {style.characteristics}
                </p>
                <p className="text-french-gray text-sm leading-relaxed">
                  <strong>Our Approach:</strong> {style.approach}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wine Culture & Storage Solutions */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Wine Culture & Connoisseurship
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Montecito's proximity to Santa Barbara County's renowned wine regions makes sophisticated wine storage and serving capabilities essential elements of luxury kitchen design.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative">
              <Image
                src="/images/montecito-wine-storage-system.webp"
                alt="Custom wine storage and serving area integrated into Montecito kitchen design"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-6">
                Integrated Wine Programs
              </h3>
              <div className="prose-luxury">
                <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
                  Our Montecito clients often maintain extensive wine collections that require sophisticated storage, serving, and display capabilities. We design integrated wine programs that support both daily enjoyment and serious collecting while maintaining the aesthetic integrity of the overall kitchen design.
                </p>
                
                <h4 className="font-display text-lg font-semibold text-charcoal mb-4">
                  Climate-Controlled Storage Solutions
                </h4>
                <ul className="space-y-3 text-charcoal/70 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Temperature Zones:</strong> Multiple climate zones for different wine types and aging requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Humidity Control:</strong> Precision humidity management to protect cork integrity and prevent label damage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Vibration Isolation:</strong> Advanced mounting systems that protect wines from kitchen activity and coastal seismic conditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>UV Protection:</strong> Specialized glazing and lighting that prevent light damage while allowing display visibility</span>
                  </li>
                </ul>

                <h4 className="font-display text-lg font-semibold text-charcoal mb-4">
                  Serving & Entertainment Features
                </h4>
                <p className="text-base leading-relaxed text-charcoal/70">
                  Integrated serving stations with temperature-controlled storage for opened bottles, specialized glassware organization for different wine types, and tasting areas with proper lighting and ventilation for serious wine evaluation and entertaining.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-charcoal text-ivory p-12 rounded-lg">
            <h3 className="font-display text-2xl font-bold mb-8 text-center">
              Santa Barbara County Wine Integration
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="font-display text-lg font-semibold mb-4 text-brass">
                  Local Vineyard Connections
                </h4>
                <p className="text-french-gray text-sm leading-relaxed">
                  Custom storage solutions for wines from nearby estates like Screaming Eagle, Sine Qua Non, and Au Bon Climat, with specialized racking for different bottle sizes and shapes.
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-display text-lg font-semibold mb-4 text-brass">
                  Tasting Room Aesthetics
                </h4>
                <p className="text-french-gray text-sm leading-relaxed">
                  Design elements inspired by Santa Barbara County tasting rooms, including reclaimed barrel wood, natural stone surfaces, and vineyard-view sight lines where possible.
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-display text-lg font-semibold mb-4 text-brass">
                  Collector Services
                </h4>
                <p className="text-french-gray text-sm leading-relaxed">
                  Inventory management systems, insurance-grade security features, and specialized handling equipment for rare and valuable bottles in serious collections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Discretion */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Privacy & Discretion: The Montecito Standard
            </h2>
            <p className="text-xl text-charcoal/80">
              Working with high-profile clients in the entertainment industry and cultural sphere requires the highest levels of discretion, security awareness, and professional confidentiality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-ivory p-8 rounded-lg border border-french-gray/20">
              <h3 className="font-display text-xl font-bold text-charcoal mb-6">
                Confidentiality Protocols
              </h3>
              <div className="space-y-4 text-charcoal/70">
                <p>
                  <strong>Non-Disclosure Agreements:</strong> Comprehensive NDAs signed by all team members before project commencement, covering all aspects of client information and project details.
                </p>
                <p>
                  <strong>Secure Communication:</strong> Encrypted communication channels and secure file sharing systems for all project documentation and correspondence.
                </p>
                <p>
                  <strong>Discreet Installation:</strong> Unmarked vehicles, minimal signage, and coordination with existing security and household staff to maintain privacy during construction.
                </p>
                <p>
                  <strong>Media Restrictions:</strong> Strict policies regarding photography, social media, and publicity, with all project documentation remaining confidential unless explicitly authorized.
                </p>
              </div>
            </div>

            <div className="bg-charcoal text-ivory p-8 rounded-lg">
              <h3 className="font-display text-xl font-bold mb-6">
                Security Integration
              </h3>
              <div className="space-y-4 text-french-gray">
                <p>
                  <strong className="text-brass">Access Control:</strong> Integration with existing home security systems including biometric locks, hidden compartments, and panic room features.
                </p>
                <p>
                  <strong className="text-brass">Surveillance Accommodation:</strong> Discrete integration of security cameras and monitoring equipment without compromising aesthetic design.
                </p>
                <p>
                  <strong className="text-brass">Safe Room Features:</strong> Specialized construction for secure storage areas, panic rooms, and communication centers as required.
                </p>
                <p>
                  <strong className="text-brass">Emergency Protocols:</strong> Coordination with security teams and emergency response procedures during installation and service visits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions - Montecito Specific */}
      <section className="py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-charcoal/80">
              Answers to common questions from Montecito homeowners about custom cabinetry in coastal environments.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "How do you address the unique challenges of Montecito's coastal environment?",
                answer: "Montecito's proximity to the Pacific Ocean creates specific challenges including salt air exposure, fluctuating humidity levels, and intense UV radiation. We address these through specialized material selection including marine-grade hardwoods and finishes, advanced moisture barrier systems, UV-resistant topcoats, and enhanced ventilation integration. Our finishing processes include multi-stage sealing systems that provide superior protection while maintaining the natural beauty of the wood. We also employ stainless steel hardware and fasteners that resist corrosion in salt air environments."
              },
              {
                question: "What experience do you have working with entertainment industry professionals and high-profile clients?",
                answer: "We have extensive experience serving Montecito's entertainment industry community, including Academy Award winners, prominent directors, and cultural philanthropists. Our team understands the unique requirements of high-profile clients including absolute discretion, flexible scheduling around production schedules, and the ability to accommodate both intimate family living and large-scale industry entertaining. All team members sign comprehensive NDAs, and we maintain strict confidentiality protocols throughout all phases of the project."
              },
              {
                question: "How do you balance historic preservation requirements with modern functionality?",
                answer: "Many of Montecito's finest properties are historic estates requiring sensitive restoration approaches. We work closely with preservation architects and historical societies to ensure our interventions are both historically appropriate and functionally superior. This often involves recreating period-appropriate millwork profiles using traditional joinery methods, sourcing historically accurate materials with modern performance characteristics, and invisibly integrating contemporary appliances and technology within historic architectural frameworks. Our craftsmen are trained in traditional techniques including hand-carving and period-appropriate finishing methods."
              },
              {
                question: "What wine storage and serving capabilities do you incorporate for Montecito clients?",
                answer: "Given Montecito's proximity to Santa Barbara County's renowned wine regions, sophisticated wine programs are essential. We design climate-controlled storage with multiple temperature zones, precision humidity control, vibration isolation systems, and UV protection. Our wine serving areas include temperature-controlled storage for opened bottles, specialized glassware organization, and tasting areas with proper lighting and ventilation. We can accommodate everything from casual wine enjoyment to serious collecting with inventory management systems and insurance-grade security features."
              },
              {
                question: "How do you ensure privacy and security during installation in high-profile homes?",
                answer: "Privacy and security are paramount when working with prominent clients. We use unmarked vehicles, coordinate with existing security and household staff, maintain minimal exterior signage, and work within established security protocols. Our installation teams are trained in discretion and confidentiality, and we can accommodate special scheduling requirements including evening and weekend work to minimize disruption. All team members undergo background checks and sign comprehensive confidentiality agreements before beginning work."
              },
              {
                question: "What is the typical timeline and investment range for Montecito projects?",
                answer: "Montecito projects typically range from $300,000 to $1.2 million depending on scope, materials, and complexity. Historic restoration projects may require additional time for research, permits, and specialized craftsmanship. Timelines generally span 4-8 months from initial consultation to completion, with design phases often taking longer due to the collaborative nature of working with architects, designers, and preservation specialists. We provide detailed project schedules that accommodate the complex coordination required for luxury estate projects."
              },
              {
                question: "How do you integrate indoor-outdoor living elements that define California coastal lifestyle?",
                answer: "Indoor-outdoor integration is central to Montecito living. We design seamless transitions to outdoor kitchens and dining areas, incorporate weather-resistant materials and finishes for semi-exposed areas, create storage solutions for outdoor entertaining equipment, and integrate with landscape design for herb gardens and outdoor dining preparation areas. Our designs often include retractable elements, outdoor-rated cabinetry components, and specialized ventilation systems that support the open-air lifestyle while maintaining interior comfort and functionality."
              },
              {
                question: "What ongoing maintenance and support do you provide for coastal installations?",
                answer: "Coastal environments require specialized maintenance approaches. We offer comprehensive maintenance programs including seasonal conditioning treatments, humidity and salt air exposure assessments, hardware lubrication and adjustment, finish protection and touch-up services, and emergency response for weather-related issues. Our maintenance programs are designed to preserve your investment and ensure optimal performance in Montecito's unique coastal environment. We also provide guidance on daily care practices that help maintain the beauty and functionality of your cabinetry between professional maintenance visits."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-grain p-8 rounded-lg border border-french-gray/20">
                <h3 className="font-display text-xl font-semibold text-charcoal mb-4">
                  {faq.question}
                </h3>
                <p className="text-charcoal/80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Begin Your Montecito Kitchen Journey"
        description="Join Montecito's cultural elite who have chosen AV's Cabinets for their custom cabinetry needs. Experience the perfect blend of Mediterranean romance and California innovation in your dream kitchen."
        primaryCTA={{
          text: "Schedule Private Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Montecito Portfolio",
          href: "/portfolio?location=montecito"
        }}
        background="dark"
      />
    </>
  )
}
