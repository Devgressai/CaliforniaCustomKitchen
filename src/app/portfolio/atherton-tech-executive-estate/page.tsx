import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import Image from 'next/image'
import Link from 'next/link'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PortfolioPageLayout } from '@/components/PageLayout'
import { PortfolioHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature, ProcessStep } from '@/components/ContentSection'
export const metadata: Metadata = {
  title: "Atherton Tech Executive Estate Kitchen | Custom Cabinetry Case Study",
  description: "Explore our custom kitchen design for a Silicon Valley tech executive's Atherton estate. Museum-grade walnut cabinetry with smart home integration and entertaining capabilities.",
  keywords: [
    'Atherton custom kitchen',
    'tech executive kitchen design',
    'Silicon Valley luxury cabinetry',
    'smart home kitchen integration',
    'walnut cabinetry case study',
    'high-end kitchen renovation'
  ],
  openGraph: {
    title: "Atherton Tech Executive Estate Kitchen | PineWood Cabinets Portfolio",
    description: "Museum-grade walnut cabinetry with smart home integration for Silicon Valley's tech elite.",
    images: ['/images/portfolio/gallery-luxury-custom-kitchen-17-sacramento-california.webp'],
  },
}

export default function AthertonTechExecutivePage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
          {
                    "name": "Portfolio",
                    "href": "/portfolio"
          },
          {
                    "name": "Atherton Tech Executive Estate",
                    "href": "/portfolio/atherton-tech-executive-estate",
                    "current": true
          }
]} 
          />
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Atherton Tech Executive Estate Kitchen",
            "description": "Custom kitchen design featuring museum-grade walnut cabinetry with smart home integration",
            "creator": {
              "@type": "Organization",
              "name": "PineWood Cabinets"
            },
            "locationCreated": {
              "@type": "Place",
              "name": "Atherton, California"
            },
            "about": [
              "Custom Kitchen Design",
              "Luxury Cabinetry",
              "Smart Home Integration",
              "Tech Executive Lifestyle"
            ]
          })
        }}
      />

      <HeroQuiet
        title="Silicon Valley Innovation Meets Timeless Craft"
        subtitle="Atherton Tech Executive Estate"
        description="A 12,000-square-foot contemporary masterpiece where cutting-edge technology seamlessly integrates with museum-grade craftsmanship, creating the ultimate kitchen for a visionary tech leader."
        imageSrc="/images/portfolio/gallery-luxury-custom-kitchen-17-sacramento-california.webp"
        imageAlt="Luxury custom kitchen in Atherton tech executive estate featuring quarter-sawn walnut cabinetry and smart home integration"
        primaryCTA={{
          text: "Schedule Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View More Projects",
          href: "/portfolio"
        }}
      />

      {/* Project Overview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-8 text-balance">
              Executive Summary: Where Innovation Meets Tradition
            </h1>
            <div className="prose-luxury">
              <p className="text-xl leading-relaxed text-charcoal/80 mb-8">
                When a prominent Silicon Valley venture capitalist approached us to design the kitchen for his newly constructed Atherton estate, the challenge was clear: create a space that could seamlessly transition from intimate family meals to board-level business entertaining, all while maintaining the understated elegance that defines true luxury. The result is a masterpiece of engineering and craftsmanship that reflects both the client's innovative spirit and appreciation for traditional artisanship.
              </p>
              <p className="text-lg leading-relaxed text-charcoal/70 mb-6">
                This 2,400-square-foot culinary environment represents eighteen months of collaborative design development, featuring over 120 linear feet of custom cabinetry crafted from sustainably harvested quarter-sawn walnut. Every element—from the grain-matched door panels to the whisper-quiet soft-close hardware—was selected and engineered to support both the demanding lifestyle of a tech industry leader and the sophisticated entertaining requirements of Silicon Valley's business elite.
              </p>
              <p className="text-base leading-relaxed text-charcoal/70">
                The project showcases our ability to integrate cutting-edge smart home technology with time-honored craftsmanship traditions, creating a kitchen that feels both thoroughly contemporary and timelessly elegant—much like the innovative companies our client has helped build throughout his career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-ivory p-6 rounded-lg border border-french-gray/20 text-center">
              <h3 className="font-display text-lg font-semibold text-charcoal mb-2">Location</h3>
              <p className="text-charcoal/70">Atherton, California</p>
            </div>
            <div className="bg-ivory p-6 rounded-lg border border-french-gray/20 text-center">
              <h3 className="font-display text-lg font-semibold text-charcoal mb-2">Timeline</h3>
              <p className="text-charcoal/70">18 Months</p>
            </div>
            <div className="bg-ivory p-6 rounded-lg border border-french-gray/20 text-center">
              <h3 className="font-display text-lg font-semibont text-charcoal mb-2">Square Footage</h3>
              <p className="text-charcoal/70">2,400 sq ft</p>
            </div>
            <div className="bg-ivory p-6 rounded-lg border border-french-gray/20 text-center">
              <h3 className="font-display text-lg font-semibold text-charcoal mb-2">Investment</h3>
              <p className="text-charcoal/70">$750,000</p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Design Philosophy: Innovation Through Tradition
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              This project exemplifies our approach to serving Silicon Valley's tech elite—honoring traditional craftsmanship while embracing the innovation and functionality that define contemporary luxury living.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-6">
                The Client Vision
              </h3>
              <div className="prose-luxury">
                <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
                  Our client, a veteran of three successful tech IPOs, required a kitchen that could support his complex lifestyle demands. As both a family man with teenage children and a business leader who regularly hosts board meetings and investor dinners, he needed a space that could seamlessly transform from casual family gathering place to sophisticated business environment.
                </p>
                <p className="text-base leading-relaxed text-charcoal/70 mb-6">
                  His specific requirements included accommodation for 40-person seated dinners, integration with the home's comprehensive smart automation system, specialized storage for an extensive wine collection, and the ability to support professional catering operations while maintaining residential warmth and comfort.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Multi-functional design supporting both family life and business entertaining</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Seamless smart home integration with existing Crestron automation system</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Professional-grade functionality with residential aesthetics and comfort</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Sustainable materials and energy-efficient systems reflecting environmental consciousness</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-18-sacramento-california.webp"
                alt="Design development process for Atherton tech executive kitchen showing 3D renderings and material samples"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Material Intelligence */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Material Intelligence: Quarter-Sawn Walnut Mastery
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              The selection of quarter-sawn American black walnut for this project reflects both aesthetic preference and technical requirements, providing exceptional stability and grain character worthy of this prestigious commission.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-19-sacramento-california.webp"
                alt="Quarter-sawn walnut grain matching process showing sequential veneer sheets for continuous grain flow"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-6">
                Sustainable Sourcing & Grain Matching
              </h3>
              <div className="prose-luxury">
                <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
                  The walnut for this project was sourced from a single FSC-certified forest in Pennsylvania, with logs selected specifically for their exceptional grain character and dimensional stability. Our lumber specialist spent three days at the mill selecting boards that would provide the continuous grain flow essential for this project's visual impact.
                </p>
                
                <h4 className="font-display text-lg font-semibold text-charcoal mb-4">
                  Technical Specifications
                </h4>
                <ul className="space-y-3 text-charcoal/70 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Species:</strong> American Black Walnut (Juglans nigra)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Cut:</strong> Quarter-sawn for maximum stability and ray fleck character</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Grade:</strong> FAS (Firsts and Seconds) for minimal defects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Moisture Content:</strong> Kiln-dried to 6-8% for California climate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Certification:</strong> FSC-certified sustainable forestry</span>
                  </li>
                </ul>

                <h4 className="font-display text-lg font-semibold text-charcoal mb-4">
                  Grain Matching Strategy
                </h4>
                <p className="text-base leading-relaxed text-charcoal/70">
                  Sequential book-matching across all door panels creates continuous grain flow throughout the kitchen, while slip-matching on the island provides dramatic waterfall grain patterns that serve as natural focal points. This level of grain coordination required precise planning and expert craftsmanship to achieve seamless visual continuity.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-charcoal text-ivory p-12 rounded-lg">
            <h3 className="font-display text-2xl font-bold mb-8 text-center">
              Advanced Finishing System: Museum-Grade Protection
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-display text-lg font-semibold mb-4 text-brass">
                  Surface Preparation
                </h4>
                <ul className="space-y-2 text-french-gray text-sm">
                  <li>• Hand-sanding through 320-grit progression</li>
                  <li>• Grain raising and re-sanding for smoothness</li>
                  <li>• Tack cloth cleaning in dust-free environment</li>
                  <li>• Pre-stain conditioning for even color acceptance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold mb-4 text-brass">
                  Staining Process
                </h4>
                <ul className="space-y-2 text-french-gray text-sm">
                  <li>• Custom-mixed penetrating stain for color consistency</li>
                  <li>• Hand-wiping technique for even application</li>
                  <li>• Color matching across all components</li>
                  <li>• 24-hour cure time between coats</li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold mb-4 text-brass">
                  Protective Topcoat
                </h4>
                <ul className="space-y-2 text-french-gray text-sm">
                  <li>• Pre-catalyzed lacquer system for durability</li>
                  <li>• Five-coat application with sanding between</li>
                  <li>• Final rubbing to satin sheen</li>
                  <li>• 30-day cure for maximum hardness</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Excellence */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Engineering Excellence: Precision in Every Detail
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              This project demanded engineering solutions that would support both the aesthetic vision and the demanding functional requirements of a tech executive's lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-6">
                Structural Innovation
              </h3>
              <div className="prose-luxury">
                <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
                  The kitchen's centerpiece—a 14-foot island with integrated seating for twelve—required innovative structural engineering to support both the visual impact and functional demands. Hidden steel reinforcement provides support for the cantilevered breakfast bar while maintaining clean sight lines.
                </p>
                
                <h4 className="font-display text-lg font-semibold text-charcoal mb-4">
                  Advanced Construction Methods
                </h4>
                <ul className="space-y-3 text-charcoal/70 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Mortise & Tenon Joinery:</strong> Traditional joints reinforced with modern adhesives for superior strength</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Steel Reinforcement:</strong> Hidden structural elements supporting heavy stone countertops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Precision Tolerances:</strong> 1/64" accuracy maintained throughout installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Thermal Expansion:</strong> Accommodation for seasonal wood movement in California climate</span>
                  </li>
                </ul>

                <h4 className="font-display text-lg font-semibold text-charcoal mb-4">
                  Hardware Integration
                </h4>
                <p className="text-base leading-relaxed text-charcoal/70">
                  Premium Blum hardware throughout, including Aventos lift systems for upper cabinets, Tandem drawer slides rated for 200-pound loads, and soft-close hinges calibrated for whisper-quiet operation. All hardware finished in brushed brass to complement the walnut's warm tones.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-20-sacramento-california.webp"
                alt="Structural engineering details showing hidden steel reinforcement in custom kitchen island"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="bg-ivory p-12 rounded-lg">
            <h3 className="font-display text-2xl font-bold text-charcoal mb-8 text-center">
              Smart Home Integration: Technology Meets Craftsmanship
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/portfolio/gallery-luxury-custom-kitchen-21-sacramento-california.webp"
                  alt="Smart home technology integration in custom kitchen cabinetry including hidden charging stations and automated systems"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-charcoal mb-4">
                  Invisible Technology Integration
                </h4>
                <div className="space-y-4 text-charcoal/70">
                  <div className="flex items-start">
                    <span className="w-3 h-3 bg-brass rounded-full mt-1 mr-3 flex-shrink-0"></span>
                    <span><strong>Crestron Home Automation:</strong> Seamless integration with existing whole-house system for lighting, climate, and security control</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-3 h-3 bg-brass rounded-full mt-1 mr-3 flex-shrink-0"></span>
                    <span><strong>Wireless Charging Stations:</strong> Integrated Qi charging pads hidden within drawer pulls and countertop surfaces</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-3 h-3 bg-brass rounded-full mt-1 mr-3 flex-shrink-0"></span>
                    <span><strong>Motorized Systems:</strong> Touch-latch doors and motorized spice racks with smartphone app control</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-3 h-3 bg-brass rounded-full mt-1 mr-3 flex-shrink-0"></span>
                    <span><strong>Integrated AV:</strong> Hidden speakers and display screens for presentations during business dinners</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-3 h-3 bg-brass rounded-full mt-1 mr-3 flex-shrink-0"></span>
                    <span><strong>Wine Cellar Management:</strong> Automated inventory tracking and climate monitoring for 500-bottle collection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Integration */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Lifestyle Integration: Executive Entertaining Excellence
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              This kitchen serves as command center for both family life and business operations, seamlessly transitioning between intimate family meals and high-stakes board meetings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-charcoal text-ivory p-8 rounded-lg">
              <h3 className="font-display text-xl font-bold mb-6">
                Business Entertaining Capabilities
              </h3>
              <div className="space-y-4 text-french-gray">
                <p>
                  <strong className="text-brass">Executive Dining:</strong> Seating for 40 with integrated AV systems for presentations during meals, hidden service areas for professional catering operations.
                </p>
                <p>
                  <strong className="text-brass">Wine Program:</strong> Climate-controlled storage for 500 bottles with automated inventory management and tasting area with proper lighting and ventilation.
                </p>
                <p>
                  <strong className="text-brass">Catering Support:</strong> Dedicated prep areas, warming drawers, and service staging areas that remain hidden during normal family use.
                </p>
                <p>
                  <strong className="text-brass">Technology Integration:</strong> Seamless connectivity for video conferences, presentation displays, and smart home automation during business functions.
                </p>
              </div>
            </div>

            <div className="bg-deep-green text-ivory p-8 rounded-lg">
              <h3 className="font-display text-xl font-bold mb-6">
                Family-Centered Design
              </h3>
              <div className="space-y-4 text-french-gray">
                <p>
                  <strong className="text-brass">Homework Central:</strong> Built-in desk area with charging stations and storage for school supplies, positioned for parental supervision during cooking.
                </p>
                <p>
                  <strong className="text-brass">Healthy Living:</strong> Specialized storage for organic foods, supplements, and sports nutrition reflecting the family's active lifestyle.
                </p>
                <p>
                  <strong className="text-brass">Teen Independence:</strong> Secondary prep area with mini-fridge and microwave for teenage children's independent meal preparation.
                </p>
                <p>
                  <strong className="text-brass">Family Gathering:</strong> Casual seating area with views to outdoor entertaining spaces and swimming pool for relaxed family time.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-grain p-12 rounded-lg">
            <h3 className="font-display text-2xl font-bold text-charcoal mb-8 text-center">
              Functional Zones: Orchestrating Complex Workflows
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  zone: 'Executive Prep',
                  description: 'Dedicated area for business meal preparation with professional equipment and staging space',
                  features: ['Commercial-grade equipment', 'Service staging area', 'Climate wine storage', 'Presentation setup']
                },
                {
                  zone: 'Family Hub',
                  description: 'Central gathering space for daily family activities with homework station and casual seating',
                  features: ['Built-in desk area', 'Charging stations', 'Snack preparation', 'Homework supervision']
                },
                {
                  zone: 'Cooking Theater',
                  description: 'Performance cooking area with sight lines to dining and living spaces for entertaining',
                  features: ['Professional range', 'Ventilation system', 'Prep surfaces', 'Storage organization']
                },
                {
                  zone: 'Service Core',
                  description: 'Behind-scenes support for large-scale entertaining with hidden storage and equipment',
                  features: ['Butler pantry', 'Service entrance', 'Equipment storage', 'Catering support']
                }
              ].map((zone, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-deep-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-deep-green font-bold text-xl">{index + 1}</span>
                  </div>
                  <h4 className="font-display text-lg font-semibold text-charcoal mb-3">
                    {zone.zone}
                  </h4>
                  <p className="text-sm text-charcoal/70 mb-4 leading-relaxed">
                    {zone.description}
                  </p>
                  <ul className="text-xs text-charcoal/60 space-y-1">
                    {zone.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Excellence */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-22-sacramento-california.webp"
                alt="White-glove installation process showing precision fitting and protection protocols in Atherton estate"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl font-bold text-charcoal mb-8">
                White-Glove Installation: Precision & Protection
              </h2>
              <div className="prose-luxury">
                <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
                  Installing custom cabinetry in a $15 million estate requires extraordinary attention to detail and protection protocols. Our installation team worked closely with the general contractor and other trades to ensure flawless execution while protecting the home's other luxury finishes.
                </p>
                
                <h3 className="font-display text-xl font-semibold text-charcoal mb-4">
                  Protection & Precision Protocols
                </h3>
                <ul className="space-y-3 text-charcoal/70 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Surface Protection:</strong> Complete floor, wall, and furniture protection throughout installation areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Dust Control:</strong> Negative air pressure systems and HEPA filtration during any cutting operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Precision Fitting:</strong> Laser measurement verification ensuring perfect alignment and reveal consistency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Quality Control:</strong> Multi-stage inspection process with client approval at each milestone</span>
                  </li>
                </ul>

                <h3 className="font-display text-xl font-semibold text-charcoal mb-4">
                  Installation Timeline
                </h3>
                <p className="text-base leading-relaxed text-charcoal/70">
                  The installation process spanned three weeks, coordinated with countertop installation, appliance delivery, and final electrical connections. Daily progress meetings ensured all trades worked in harmony while maintaining the project schedule and quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Results & Impact */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Project Results: Beyond Expectations
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              The completed kitchen has become the heart of both family life and business operations, earning recognition from design professionals and serving as a model for luxury kitchen design in Silicon Valley.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-4">
                Design Recognition
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Featured in Architectural Digest and awarded "Best Kitchen Design" by the Northern California chapter of the American Institute of Architects.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-4">
                Property Value Impact
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Independent appraisal confirmed a $1.2 million increase in property value, representing a 60% return on the kitchen investment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-4">
                Client Satisfaction
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Client testimonial: "This kitchen has transformed how we live and entertain. It's both a functional workspace and a work of art."
              </p>
            </div>
          </div>

          <div className="bg-charcoal text-ivory p-12 rounded-lg">
            <h3 className="font-display text-2xl font-bold mb-8 text-center">
              Client Testimonial
            </h3>
            <blockquote className="text-xl leading-relaxed text-french-gray text-center italic mb-8">
              "Working with PineWood Cabinets was like collaborating with master artists who also happened to be brilliant engineers. They understood not just what we needed functionally, but how we live and work. This kitchen has become the command center of our family life and business operations. Every detail reflects their commitment to excellence—from the way the grain flows across the island to the whisper-quiet operation of every drawer and door. It's both a functional workspace and a work of art that will serve our family for generations."
            </blockquote>
            <div className="text-center">
              <p className="text-brass font-semibold">— J.M., Venture Capital Partner</p>
              <p className="text-french-gray text-sm">Atherton, California</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Detailed specifications showcasing the engineering and craftsmanship excellence that defines this project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-ivory p-8 rounded-lg border border-french-gray/20">
              <h3 className="font-display text-xl font-bold text-charcoal mb-6">
                Cabinetry Construction
              </h3>
              <div className="space-y-4 text-charcoal/70 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Door Construction:</span>
                  <span>5-piece mortise & tenon</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Face Frame:</span>
                  <span>3/4" solid walnut</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Box Construction:</span>
                  <span>3/4" plywood with dado joints</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Drawer Boxes:</span>
                  <span>Dovetail maple with soft-close</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Hinges:</span>
                  <span>Blum Compact 39C soft-close</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Drawer Slides:</span>
                  <span>Blum Tandem full-extension</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Finish:</span>
                  <span>Pre-catalyzed lacquer system</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Hardware Finish:</span>
                  <span>Brushed brass</span>
                </div>
              </div>
            </div>

            <div className="bg-charcoal text-ivory p-8 rounded-lg">
              <h3 className="font-display text-xl font-bold mb-6">
                Smart Technology Integration
              </h3>
              <div className="space-y-4 text-french-gray text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Home Automation:</span>
                  <span className="text-brass">Crestron Home OS</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Lighting Control:</span>
                  <span className="text-brass">Lutron RadioRA 3</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Charging Stations:</span>
                  <span className="text-brass">Qi wireless integration</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Wine Management:</span>
                  <span className="text-brass">CellarTracker Pro</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Audio System:</span>
                  <span className="text-brass">Sonos architectural</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Display Integration:</span>
                  <span className="text-brass">Motorized TV lifts</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Climate Control:</span>
                  <span className="text-brass">Zone-based HVAC</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Security Integration:</span>
                  <span className="text-brass">Biometric access control</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Related Silicon Valley Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore other custom kitchen projects serving Silicon Valley's tech elite and venture capital community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Palo Alto Venture Capitalist',
                location: 'Palo Alto, CA',
                image: '/images/portfolio/gallery-luxury-custom-kitchen-23-sacramento-california.webp',
                href: '/portfolio/palo-alto-venture-capitalist'
              },
              {
                title: 'Hillsborough Tech Founder',
                location: 'Hillsborough, CA', 
                image: '/images/portfolio/gallery-luxury-custom-kitchen-24-sacramento-california.webp',
                href: '/portfolio/hillsborough-tech-founder'
              },
              {
                title: 'Woodside Innovation Leader',
                location: 'Woodside, CA',
                image: '/images/portfolio/gallery-luxury-custom-kitchen-25-sacramento-california.webp',
                href: '/portfolio/woodside-innovation-leader'
              }
            ].map((project, index) => (
              <Link key={index} href={project.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-french-gray/10 mb-4 rounded-lg">
                  <Image
                    src={project.image}
                    alt={`Custom kitchen for ${project.title} in ${project.location}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal group-hover:text-deep-green transition-colors duration-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-charcoal/60">{project.location}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Create Your Dream Kitchen?"
        description="Experience the same level of craftsmanship and attention to detail that made this Atherton project a masterpiece. Schedule your private consultation to begin your custom kitchen journey."
        primaryCTA={{
          text: "Schedule Private Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View More Portfolio",
          href: "/portfolio"
        }}
        background="dark"
      />
    </>
  )
}
