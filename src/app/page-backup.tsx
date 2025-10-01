import { HeroQuiet } from '@/components/HeroQuiet'
import { ProjectGrid } from '@/components/ProjectGrid'
import { ServiceCard } from '@/components/ServiceCard'
import { CTASection } from '@/components/CTASection'
import { OptimizedImage } from '@/components/OptimizedImage'
import Link from 'next/link'

// Sample projects data
const featuredProjects = [
  {
    slug: 'atherton-estate-kitchen',
    title: 'Atherton Estate Kitchen',
    location: 'Atherton, CA',
    category: 'Custom Kitchen',
    imageSrc: 'portfolio/atherton-walnut-inset-kitchen.jpg',
    imageAlt: 'Custom inset walnut cabinetry in Atherton kitchen with brass hardware',
    description: 'A symphony of quarter-sawn walnut and hand-forged brass, this kitchen exemplifies our commitment to grain-matching and proportion in Silicon Valley\'s most discerning community.'
  },
  {
    slug: 'montecito-wine-library',
    title: 'Montecito Wine Library',
    location: 'Montecito, CA',
    category: 'Architectural Millwork',
    imageSrc: 'portfolio/montecito-wine-library.jpg',
    imageAlt: 'Floor-to-ceiling wine storage with integrated library in Montecito estate',
    description: 'Where oenophilia meets bibliophilia—custom millwork creating a seamless transition between wine storage and literary sanctuary.'
  },
  {
    slug: 'martis-camp-paneling',
    title: 'Martis Camp Study',
    location: 'Truckee, CA',
    category: 'Paneling',
    imageSrc: 'portfolio/martis-camp-study-paneling.jpg',
    imageAlt: 'Reclaimed chestnut wall paneling in Lake Tahoe mountain home study',
    description: 'Reclaimed American chestnut paneling brings gravitas and warmth to this mountain retreat, honoring both craftsmanship traditions and environmental stewardship.'
  }
]

const services = [
  {
    title: 'Custom Kitchens',
    description: 'The heart of the home deserves nothing less than perfection. Our custom kitchens blend functionality with artistry, creating spaces that serve both daily rituals and grand entertaining.',
    imageSrc: 'services/custom-kitchens-hero.jpg',
    imageAlt: 'Luxury custom kitchen with marble countertops and walnut cabinetry',
    href: '/services/custom-kitchens',
    features: ['Inset door construction', 'Soft-close hardware', 'Grain-matched veneers', 'Museum-grade finishing']
  },
  {
    title: 'Bespoke Cabinetry',
    description: 'Beyond kitchens, we craft storage solutions that disappear into architecture while maximizing both beauty and utility throughout your home.',
    imageSrc: 'services/bespoke-cabinetry-hero.jpg',
    imageAlt: 'Built-in entertainment center with hidden storage in living room',
    href: '/services/bespoke-cabinetry',
    features: ['Invisible hinges', 'Push-to-open mechanisms', 'LED integration', 'Custom sizing']
  },
  {
    title: 'Architectural Millwork',
    description: 'From coffered ceilings to intricate moldings, our millwork transforms spaces into architectural statements worthy of the finest estates.',
    imageSrc: 'services/architectural-millwork-hero.jpg',
    imageAlt: 'Coffered ceiling and crown molding in formal dining room',
    href: '/services/architectural-millwork',
    features: ['Hand-carved details', 'Period-accurate profiles', 'Seamless installation', 'Restoration expertise']
  }
]

export default function HomePage() {
  return (
    <>
      <HeroQuiet
        title="Quiet Luxury in Every Detail"
        subtitle="Custom Cabinetry & Millwork"
        description="Museum-grade craftsmanship for California's most discerning homes. Where stewardship meets artistry, and every joint speaks to generations of tradition."
        imageSrc="hero-atherton-kitchen.jpg"
        imageAlt="Luxury kitchen with custom walnut cabinetry and marble island in Atherton estate"
        primaryCTA={{
          text: "Request Private Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Portfolio",
          href: "/portfolio"
        }}
      />

      {/* Philosophy Section */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-8 text-balance">
              Craftsmanship as Stewardship
            </h2>
            <div className="prose-luxury mx-auto">
              <p className="text-xl leading-relaxed text-charcoal/80 mb-8">
                Since 2006, AV's Cabinets has served as guardians of an ancient craft, creating bespoke cabinetry and architectural millwork that honors both tradition and innovation. Our workshop in California's heartland combines time-tested joinery techniques with contemporary design sensibilities, producing pieces that will grace homes for generations.
              </p>
              <p className="text-lg leading-relaxed text-charcoal/70">
                Every project begins with understanding—of your lifestyle, your home's architecture, and the materials that will become part of your daily experience. We believe in quiet luxury: craftsmanship so refined it speaks in whispers, not shouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Eight principles that guide every project, from initial consultation to white-glove installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Museum-Grade Finishing',
                description: 'Our finishing booth maintains pharmaceutical-grade air quality, ensuring flawless surfaces that rival gallery pieces.'
              },
              {
                title: 'Precision Tolerances',
                description: 'CNC precision meets hand-crafted perfection. Every measurement verified to 1/64" accuracy before installation.'
              },
              {
                title: 'Grain-Matched Veneers',
                description: 'Sequential veneer matching creates seamless wood grain flow across doors, drawers, and fixed panels.'
              },
              {
                title: 'Architectural Integration',
                description: 'Our pieces don\'t just fit your space—they become part of its architectural DNA, as if they\'ve always belonged.'
              },
              {
                title: 'Sustainable Sourcing',
                description: 'FSC-certified hardwoods and eco-conscious finishing materials reflect our commitment to environmental stewardship.'
              },
              {
                title: 'White-Glove Installation',
                description: 'Our master installers treat your home with reverence, protecting surfaces and minimizing disruption throughout.'
              },
              {
                title: 'Designer Collaboration',
                description: 'We work seamlessly with architects and interior designers, translating vision into reality with technical expertise.'
              },
              {
                title: 'Generational Warranty',
                description: 'Confidence in our craftsmanship extends beyond traditional warranties—we stand behind our work for decades.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-deep-green rounded-full" />
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-4">
                  {value.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <ProjectGrid
        projects={featuredProjects}
        title="Recent Commissions"
        description="Each project tells a story of collaboration, craftsmanship, and the pursuit of perfection in California's most prestigious communities."
        showAll={true}
      />

      {/* Services Overview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Our Services
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From concept to completion, we offer comprehensive cabinetry and millwork services tailored to the most discerning clientele.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/services" className="btn-ghost">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
                Our Process
              </h2>
              <p className="text-xl text-french-gray leading-relaxed mb-8">
                Six carefully orchestrated phases ensure every project exceeds expectations, from initial consultation to final installation.
              </p>
              
              <div className="space-y-6">
                {[
                  { phase: '01', title: 'Discovery & Consultation', description: 'Understanding your vision, lifestyle, and architectural context' },
                  { phase: '02', title: 'Design Development', description: 'Collaborative refinement of concepts with shop drawings and 3D visualization' },
                  { phase: '03', title: 'Material Selection', description: 'Curating the finest hardwoods, veneers, and hardware for your project' }
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <span className="text-brass font-display text-lg font-bold flex-shrink-0">
                      {step.phase}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-french-gray leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/process" className="btn-primary bg-ivory text-deep-green hover:bg-ivory/90">
                  Learn About Our Process
                </Link>
              </div>
            </div>

            <div className="relative">
              <OptimizedImage
                filename="process/workshop-craftsmanship.jpg"
                alt="Master craftsman working on custom cabinetry in AV's Cabinets workshop"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Serving California's Premier Communities
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From Silicon Valley estates to Lake Tahoe retreats, we bring museum-grade craftsmanship to California's most exclusive neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: 'Silicon Valley', href: '/service-areas/silicon-valley', communities: 'Atherton, Palo Alto, Woodside' },
              { name: 'Marin County', href: '/service-areas/marin', communities: 'Belvedere, Tiburon, Ross' },
              { name: 'Lake Tahoe', href: '/service-areas/lake-tahoe-truckee', communities: 'Martis Camp, Lahontan' },
              { name: 'Central Coast', href: '/service-areas/central-coast', communities: 'Carmel, Pebble Beach' },
              { name: 'Los Angeles', href: '/service-areas/los-angeles', communities: 'Bel Air, Beverly Hills' }
            ].map((area, index) => (
              <Link
                key={index}
                href={area.href}
                className="group p-6 bg-ivory border border-french-gray/20 hover:border-deep-green/30 transition-all duration-300 hover:shadow-lg text-center"
              >
                <h3 className="font-display text-lg font-semibold text-charcoal group-hover:text-deep-green transition-colors duration-200 mb-2">
                  {area.name}
                </h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  {area.communities}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/service-areas" className="btn-ghost">
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Begin Your Journey"
        description="Every masterpiece begins with a conversation. Schedule a private consultation to discuss how we can bring your vision to life with uncompromising craftsmanship."
        primaryCTA={{
          text: "Request Private Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Visit Our Showroom",
          href: "/showroom"
        }}
        background="dark"
      />
    </>
  )
}
