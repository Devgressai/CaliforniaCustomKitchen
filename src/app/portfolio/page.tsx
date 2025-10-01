import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio | Custom Kitchens & Bespoke Cabinetry | AV\'s Cabinets',
  description: 'Explore our portfolio of custom kitchens, bespoke cabinetry, and architectural millwork for California\'s most discerning clientele. Museum-grade craftsmanship meets contemporary design.',
  keywords: 'custom kitchen portfolio, bespoke cabinetry, architectural millwork, luxury kitchens, California cabinetry, inset doors, custom millwork',
  openGraph: {
    title: 'Portfolio | AV\'s Cabinets - Custom Kitchens & Bespoke Cabinetry',
    description: 'Discover our portfolio of custom kitchens, bespoke cabinetry, and architectural millwork for California\'s most discerning clientele.',
    type: 'website',
  },
}

const portfolioProjects = [
  {
    slug: 'atherton-tech-executive-estate',
    title: 'Atherton Tech Executive Estate',
    location: 'Atherton, CA',
    category: 'Custom Kitchen',
    year: '2024',
    description: 'A symphony of quarter-sawn walnut and hand-forged brass, this kitchen exemplifies our commitment to grain-matching and proportion in Silicon Valley\'s most discerning community.',
    imageSrc: 'portfolio/atherton-walnut-inset-kitchen.webp',
    imageAlt: 'Custom inset walnut cabinetry in Atherton kitchen with brass hardware',
    features: ['Inset door construction', 'Quarter-sawn walnut', 'Hand-forged brass hardware', 'Museum-grade finishing'],
    architect: 'Studio McGee',
    timeline: '6 months',
    budget: 'Premium'
  },
  {
    slug: 'montecito-wine-library',
    title: 'Montecito Wine Library',
    location: 'Montecito, CA',
    category: 'Architectural Millwork',
    year: '2024',
    description: 'Where oenophilia meets bibliophilia—custom millwork creating a seamless transition between wine storage and literary sanctuary.',
    imageSrc: 'portfolio/montecito-wine-library.webp',
    imageAlt: 'Floor-to-ceiling wine storage with integrated library in Montecito estate',
    features: ['Climate-controlled wine storage', 'Integrated library system', 'Hand-carved moldings', 'Reclaimed oak construction'],
    architect: 'Applegate-Tran Interiors',
    timeline: '8 months',
    budget: 'Premium'
  },
  {
    slug: 'martis-camp-paneling',
    title: 'Martis Camp Study',
    location: 'Truckee, CA',
    category: 'Paneling',
    year: '2023',
    description: 'Reclaimed American chestnut paneling brings gravitas and warmth to this mountain retreat, honoring both craftsmanship traditions and environmental stewardship.',
    imageSrc: 'portfolio/martis-camp-study-paneling.webp',
    imageAlt: 'Reclaimed chestnut wall paneling in Lake Tahoe mountain home study',
    features: ['Reclaimed American chestnut', 'Traditional raised panels', 'Hand-rubbed finish', 'Sustainable sourcing'],
    architect: 'Marmol Radziner',
    timeline: '4 months',
    budget: 'Premium'
  },
  {
    slug: 'bel-air-master-suite',
    title: 'Bel Air Master Suite',
    location: 'Bel Air, CA',
    category: 'Bespoke Cabinetry',
    year: '2024',
    description: 'A master suite transformation featuring custom wardrobes, built-in seating, and integrated storage solutions that disappear into the architecture.',
    imageSrc: 'portfolio/bel-air-master-suite.webp',
    imageAlt: 'Custom master suite cabinetry with integrated storage in Bel Air home',
    features: ['Hidden storage systems', 'LED integration', 'Push-to-open mechanisms', 'Custom sizing'],
    architect: 'Kelly Wearstler',
    timeline: '5 months',
    budget: 'Premium'
  },
  {
    slug: 'pacific-heights-dining',
    title: 'Pacific Heights Dining Room',
    location: 'San Francisco, CA',
    category: 'Architectural Millwork',
    year: '2023',
    description: 'Coffered ceiling and intricate moldings transform this Victorian-era dining room into a contemporary masterpiece of proportion and detail.',
    imageSrc: 'portfolio/pacific-heights-dining.webp',
    imageAlt: 'Coffered ceiling and crown molding in Pacific Heights dining room',
    features: ['Hand-carved coffers', 'Period-accurate profiles', 'Seamless installation', 'Restoration expertise'],
    architect: 'Fougeron Architecture',
    timeline: '3 months',
    budget: 'Premium'
  },
  {
    slug: 'malibu-beach-house',
    title: 'Malibu Beach House Kitchen',
    location: 'Malibu, CA',
    category: 'Custom Kitchen',
    year: '2024',
    description: 'Ocean views meet culinary excellence in this beachfront kitchen featuring teak cabinetry and marine-grade hardware designed for coastal living.',
    imageSrc: 'portfolio/malibu-beach-kitchen.webp',
    imageAlt: 'Ocean-view kitchen with teak cabinetry in Malibu beach house',
    features: ['Teak construction', 'Marine-grade hardware', 'Salt-air resistant finish', 'Custom ventilation'],
    architect: 'Walker Workshop',
    timeline: '7 months',
    budget: 'Premium'
  }
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-french-gray leading-relaxed mb-8">
              A curated collection of custom kitchens, bespoke cabinetry, and architectural millwork that defines California's most luxurious homes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Custom Kitchens</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Bespoke Cabinetry</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Architectural Millwork</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Paneling</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {portfolioProjects.map((project, index) => (
              <article 
                key={project.slug} 
                className="group bg-white rounded-lg shadow-sm border border-french-gray/20 hover:shadow-lg transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Link href={`/portfolio/${project.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-french-gray/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-ivory">
                        <h3 className="text-2xl font-semibold mb-2 font-display">{project.title}</h3>
                        <p className="text-sm opacity-90">{project.location} • {project.year}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm tracking-wide uppercase text-deep-green font-medium">
                        {project.category}
                      </span>
                      <span className="text-sm text-charcoal/60">
                        {project.timeline}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-xl font-semibold text-charcoal mb-3 group-hover:text-deep-green transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-charcoal/80 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      {project.features.slice(0, 2).map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-charcoal/70">
                          <div className="w-1.5 h-1.5 bg-deep-green rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-charcoal/60">
                      <span>Architect: {project.architect}</span>
                      <span className="text-deep-green font-medium">View Details →</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Our Design Process
            </h2>
            <p className="text-xl text-charcoal/80 mb-12 leading-relaxed">
              Every project in our portfolio follows a rigorous, six-phase journey, ensuring unparalleled precision and a seamless client experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center text-ivory text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Consultation</h3>
                <p className="text-charcoal/70 text-sm">Understanding your lifestyle, aesthetic preferences, and functional requirements through detailed consultation.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center text-ivory text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Conceptual Design</h3>
                <p className="text-charcoal/70 text-sm">Creating initial concepts that integrate your vision with our expertise in proportion and craftsmanship.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center text-ivory text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Design Development</h3>
                <p className="text-charcoal/70 text-sm">Refining designs with detailed drawings, material selections, and technical specifications.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center text-ivory text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Specifications</h3>
                <p className="text-charcoal/70 text-sm">Finalizing all details including hardware, finishes, and installation requirements.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center text-ivory text-2xl font-bold mx-auto mb-4">5</div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Fabrication</h3>
                <p className="text-charcoal/70 text-sm">Hand-crafting your cabinetry in our workshop using traditional techniques and premium materials.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center text-ivory text-2xl font-bold mx-auto mb-4">6</div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Installation</h3>
                <p className="text-charcoal/70 text-sm">White-glove installation and final adjustments to ensure perfect fit and finish.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Showcase */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Materials & Craftsmanship
              </h2>
              <div className="prose-luxury text-charcoal/80 mb-8">
                <p>
                  Our portfolio showcases the finest materials sourced from around the world, each selected for its unique character, durability, and beauty. From quarter-sawn walnut with its distinctive grain patterns to reclaimed American chestnut with its rich patina, every material tells a story.
                </p>
                <p>
                  We work exclusively with premium hardwoods, including walnut, oak, cherry, and mahogany, as well as exotic species like teak and rosewood. Our finishing process involves multiple hand-applied coats of high-quality lacquers and oils, creating surfaces that are both beautiful and durable.
                </p>
                <p>
                  Hardware selection is equally important, with each piece chosen for its quality, functionality, and aesthetic contribution. We source from the finest manufacturers worldwide, including Blum, Hettich, and custom-forged pieces from local artisans.
                </p>
              </div>
              <Link href="/materials" className="btn-primary">
                Explore Our Materials
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Walnut</h4>
                  <p className="text-sm text-charcoal/70">Rich, warm tones with distinctive grain patterns</p>
                </div>
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Oak</h4>
                  <p className="text-sm text-charcoal/70">Classic strength and timeless beauty</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Cherry</h4>
                  <p className="text-sm text-charcoal/70">Deepens in color over time with use</p>
                </div>
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Teak</h4>
                  <p className="text-sm text-charcoal/70">Natural oils provide weather resistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Client Testimonials
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              The satisfaction of our clients is the ultimate measure of our success. Here's what they say about working with AV's Cabinets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-ivory/10 p-8 rounded-lg">
              <p className="text-french-gray mb-6 italic">
                "AV's Cabinets transformed our kitchen into a work of art. The attention to detail and craftsmanship is simply extraordinary. Every day, I'm reminded of the care that went into creating this space."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-deep-green rounded-full flex items-center justify-center text-ivory font-bold mr-4">
                  S
                </div>
                <div>
                  <h4 className="font-semibold text-ivory">Sarah Chen</h4>
                  <p className="text-sm text-french-gray">Atherton, CA</p>
                </div>
              </div>
            </div>

            <div className="bg-ivory/10 p-8 rounded-lg">
              <p className="text-french-gray mb-6 italic">
                "The wine library they created for us is absolutely stunning. It's not just storage—it's a statement piece that perfectly complements our home's architecture."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-deep-green rounded-full flex items-center justify-center text-ivory font-bold mr-4">
                  M
                </div>
                <div>
                  <h4 className="font-semibold text-ivory">Michael Rodriguez</h4>
                  <p className="text-sm text-french-gray">Montecito, CA</p>
                </div>
              </div>
            </div>

            <div className="bg-ivory/10 p-8 rounded-lg">
              <p className="text-french-gray mb-6 italic">
                "Working with AV's Cabinets was a pleasure from start to finish. Their process is transparent, their craftsmanship is impeccable, and the final result exceeded our expectations."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-deep-green rounded-full flex items-center justify-center text-ivory font-bold mr-4">
                  J
                </div>
                <div>
                  <h4 className="font-semibold text-ivory">Jennifer Walsh</h4>
                  <p className="text-sm text-french-gray">Bel Air, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
            Ready to Create Your Masterpiece?
          </h2>
          <p className="text-xl text-charcoal/80 mb-12 max-w-3xl mx-auto">
            Every project in our portfolio began with a conversation. Let's discuss how we can bring your vision to life with the finest materials and time-honored craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Request a Private Consultation
            </Link>
            <Link href="/process" className="btn-ghost">
              Learn About Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
