import { Metadata } from 'next'
import { OptimizedImage } from '@/components/OptimizedImage'
import { StructuredData } from '@/components/StructuredData'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Luxury Kitchen Design Trends 2025 | California Custom Kitchens | PineWood Cabinets",
  description: "Discover the latest luxury kitchen design trends for 2025. From smart technology integration to sustainable materials, explore what's shaping California's most expensive homes.",
  keywords: [
    'luxury kitchen design trends 2025',
    'custom kitchen trends California',
    'high-end kitchen design',
    'kitchen design ideas 2025',
    'luxury kitchen cabinets',
    'kitchen renovation trends',
    'custom kitchen design',
    'kitchen design inspiration',
    'luxury home design',
    'kitchen technology trends'
  ],
  openGraph: {
    title: "Luxury Kitchen Design Trends 2025 | PineWood Cabinets",
    description: "Discover the latest luxury kitchen design trends for 2025. From smart technology integration to sustainable materials.",
    type: 'article',
    publishedTime: '2024-12-19T00:00:00.000Z',
    authors: ['PineWood Cabinets'],
    images: ['/images/journal/luxury-kitchen-trends-2025-hero.webp'],
  },
}

const trends = [
  {
    title: "Smart Technology Integration",
    description: "The future of luxury kitchens lies in seamless technology integration that enhances functionality without compromising aesthetics.",
    details: [
      "Motorized cabinet doors and drawers with touch-to-open technology",
      "Integrated charging stations and wireless power solutions",
      "Smart lighting systems that adapt to natural light and user preferences",
      "Voice-activated appliances and hands-free operation",
      "Automated wine storage with temperature and humidity control",
      "Hidden entertainment systems and built-in speakers"
    ],
    image: "smart-kitchen-technology-2025.webp",
    alt: "Smart kitchen technology integration showing automated systems and touch controls"
  },
  {
    title: "Sustainable Luxury Materials",
    description: "Eco-conscious design meets uncompromising luxury with innovative sustainable materials and responsible sourcing.",
    details: [
      "FSC-certified hardwoods from responsibly managed forests",
      "Reclaimed and salvaged wood from historic structures",
      "Bamboo and other rapidly renewable materials",
      "Low-VOC finishes and adhesives for healthier indoor air",
      "Recycled glass countertops and backsplashes",
      "Locally sourced materials to reduce carbon footprint"
    ],
    image: "sustainable-luxury-materials-2025.webp",
    alt: "Sustainable luxury materials showing reclaimed wood and eco-friendly finishes"
  },
  {
    title: "Minimalist Maximalism",
    description: "The art of creating maximum impact with minimal elements through carefully curated design and hidden functionality.",
    details: [
      "Clean lines and uncluttered surfaces with hidden storage solutions",
      "Integrated appliances that disappear into cabinetry",
      "Monochromatic color palettes with strategic pops of color",
      "Floating elements and cantilevered designs",
      "Concealed lighting and invisible hardware",
      "Multi-functional spaces that adapt to different uses"
    ],
    image: "minimalist-maximalism-kitchen-2025.webp",
    alt: "Minimalist maximalism kitchen design with clean lines and hidden functionality"
  },
  {
    title: "Biophilic Design Elements",
    description: "Bringing nature indoors through organic materials, natural textures, and living elements that promote wellness.",
    details: [
      "Live edge wood countertops and natural stone surfaces",
      "Indoor herb gardens and vertical plant walls",
      "Natural fiber textiles and organic materials",
      "Large windows and skylights for abundant natural light",
      "Water features and natural sound elements",
      "Earth tones and nature-inspired color palettes"
    ],
    image: "biophilic-kitchen-design-2025.webp",
    alt: "Biophilic kitchen design with natural materials and living elements"
  },
  {
    title: "Professional-Grade Appliances",
    description: "Commercial-quality appliances seamlessly integrated into residential spaces for serious culinary enthusiasts.",
    details: [
      "Professional ranges and ovens with restaurant-quality performance",
      "Commercial-grade refrigeration and wine storage",
      "Integrated coffee systems and beverage centers",
      "Steam ovens and sous vide capabilities",
      "Induction cooktops with precise temperature control",
      "Dishwashers with commercial-grade cleaning power"
    ],
    image: "professional-grade-appliances-2025.webp",
    alt: "Professional-grade kitchen appliances integrated into luxury residential design"
  },
  {
    title: "Multi-Zone Functionality",
    description: "Creating distinct zones within the kitchen for different activities while maintaining visual cohesion.",
    details: [
      "Separate prep, cooking, and serving areas",
      "Dedicated coffee and beverage stations",
      "Breakfast nooks and casual dining areas",
      "Home office and homework stations",
      "Entertainment and social gathering spaces",
      "Pantry and storage organization systems"
    ],
    image: "multi-zone-kitchen-functionality-2025.webp",
    alt: "Multi-zone kitchen design with distinct functional areas"
  }
]

const materials = [
  {
    name: "Quarter-Sawn White Oak",
    description: "The gold standard for luxury cabinetry with its distinctive ray fleck patterns and exceptional durability.",
    characteristics: ["Distinctive grain patterns", "Exceptional stability", "Takes stain beautifully", "Timeless appeal"],
    applications: ["Kitchen cabinets", "Island construction", "Custom millwork", "Built-in storage"]
  },
  {
    name: "Figured Black Walnut",
    description: "Rich chocolate tones with dramatic grain patterns that create one-of-a-kind visual interest.",
    characteristics: ["Rich color variation", "Dramatic grain patterns", "Natural luster", "Premium appearance"],
    applications: ["Feature cabinets", "Accent walls", "Custom furniture", "Decorative elements"]
  },
  {
    name: "Reclaimed Chestnut",
    description: "Historic American chestnut with unique character and environmental responsibility.",
    characteristics: ["Unique character marks", "Environmental sustainability", "Historical significance", "One-of-a-kind appearance"],
    applications: ["Rustic elements", "Accent features", "Custom millwork", "Historic restoration"]
  },
  {
    name: "Exotic Veneers",
    description: "Rare and exotic wood species for the most discerning clients seeking unique beauty.",
    characteristics: ["Rare and exclusive", "Unique grain patterns", "Premium pricing", "Collector appeal"],
    applications: ["Feature panels", "Accent doors", "Custom furniture", "Decorative elements"]
  }
]

const technologies = [
  {
    name: "Smart Home Integration",
    description: "Seamless connectivity with home automation systems for ultimate convenience and control.",
    features: ["Voice control", "Mobile app integration", "Automated scheduling", "Energy monitoring"]
  },
  {
    name: "Advanced Lighting Systems",
    description: "Intelligent lighting that adapts to natural light and user preferences for optimal ambiance.",
    features: ["Color temperature adjustment", "Motion sensors", "Dimming controls", "Scene programming"]
  },
  {
    name: "Climate-Controlled Storage",
    description: "Precise temperature and humidity control for wine, cheese, and other temperature-sensitive items.",
    features: ["Dual-zone cooling", "Humidity control", "Digital displays", "Alarm systems"]
  },
  {
    name: "Touchless Technology",
    description: "Hygienic and convenient operation through touchless controls and motion sensors.",
    features: ["Motion-activated faucets", "Touchless cabinet opening", "Voice commands", "Gesture controls"]
  }
]

export default function LuxuryKitchenTrends2025() {
  const articleSchema = {
    headline: "Luxury Kitchen Design Trends 2025",
    description: "Discover the latest luxury kitchen design trends for 2025. From smart technology integration to sustainable materials, explore what's shaping California's most expensive homes.",
    author: {
      name: "PineWood Cabinets",
      type: "Organization" as const
    },
    publisher: {
      name: "PineWood Cabinets",
      description: "Custom kitchens, bespoke cabinetry, and architectural millwork for California's finest homes",
      url: "https://california-custom-kitchen.vercel.app"
    },
    datePublished: "2024-12-19T00:00:00.000Z",
    dateModified: "2024-12-19T00:00:00.000Z",
    image: ["/images/journal/luxury-kitchen-trends-2025-hero.webp"],
    articleSection: "Kitchen Design",
    wordCount: 2500
  }

  return (
    <>
      <StructuredData article={articleSchema} />
      
      <article className="min-h-screen bg-ivory">
        {/* Hero Section */}
        <section className="relative py-24 bg-charcoal text-ivory">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
                Luxury Kitchen Design Trends 2025
              </h1>
              <p className="text-xl md:text-2xl text-french-gray leading-relaxed mb-8">
                Discover the cutting-edge design trends shaping California's most prestigious kitchens. From smart technology integration to sustainable luxury materials, explore what's defining the future of high-end kitchen design.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Smart Technology</span>
                <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Sustainable Luxury</span>
                <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Minimalist Design</span>
                <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Biophilic Elements</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-24 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="prose-luxury">
              <p className="text-xl leading-relaxed text-charcoal/80 mb-8">
                As we look toward 2025, luxury kitchen design is evolving to meet the changing needs of California's most discerning homeowners. The convergence of technology, sustainability, and timeless craftsmanship is creating new possibilities for kitchen spaces that are both functional and breathtakingly beautiful.
              </p>
              <p className="text-lg leading-relaxed text-charcoal/70 mb-6">
                From Silicon Valley tech executives to Beverly Hills entertainment industry leaders, our clients are demanding kitchens that not only reflect their personal style but also incorporate the latest innovations in design, technology, and sustainability. This comprehensive guide explores the trends that will define luxury kitchen design in 2025 and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Main Trends */}
        <section className="py-24 bg-grain">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                The Six Defining Trends of 2025
              </h2>
              <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
                These trends represent the future of luxury kitchen design, combining innovation with timeless appeal.
              </p>
            </div>

            <div className="space-y-24">
              {trends.map((trend, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl font-semibold text-charcoal mb-6 font-display">
                        {trend.title}
                      </h3>
                      <p className="text-lg leading-relaxed text-charcoal/80 mb-8">
                        {trend.description}
                      </p>
                      <ul className="space-y-3">
                        {trend.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start text-charcoal/70">
                            <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <OptimizedImage
                        filename={trend.image}
                        alt={trend.alt}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials Spotlight */}
        <section className="py-24 bg-ivory">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Premium Materials for 2025
              </h2>
              <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
                The materials that will define luxury kitchen design in 2025, from time-honored classics to innovative new options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {materials.map((material, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                  <h3 className="text-2xl font-semibold text-charcoal mb-4 font-display">
                    {material.name}
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed mb-6">
                    {material.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-charcoal mb-3">Key Characteristics:</h4>
                    <ul className="space-y-2">
                      {material.characteristics.map((characteristic, charIndex) => (
                        <li key={charIndex} className="flex items-center text-charcoal/70">
                          <span className="w-1.5 h-1.5 bg-brass rounded-full mr-3 flex-shrink-0"></span>
                          {characteristic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-charcoal mb-3">Best Applications:</h4>
                    <ul className="space-y-2">
                      {material.applications.map((application, appIndex) => (
                        <li key={appIndex} className="flex items-center text-charcoal/70">
                          <span className="w-1.5 h-1.5 bg-brass rounded-full mr-3 flex-shrink-0"></span>
                          {application}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Integration */}
        <section className="py-24 bg-charcoal text-ivory">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Smart Technology for Luxury Kitchens
              </h2>
              <p className="text-xl text-french-gray max-w-3xl mx-auto">
                The technology that's transforming luxury kitchens into intelligent, connected spaces that anticipate your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-deep-green/20 p-6 rounded-lg border border-french-gray/20">
                  <h3 className="text-xl font-semibold text-ivory mb-4 font-display">
                    {tech.name}
                  </h3>
                  <p className="text-french-gray leading-relaxed mb-6">
                    {tech.description}
                  </p>
                  <ul className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-french-gray flex items-start">
                        <span className="w-1 h-1 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Considerations */}
        <section className="py-24 bg-grain">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Regional Design Considerations
              </h2>
              <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
                How these trends adapt to California's diverse luxury markets, from Silicon Valley to Beverly Hills.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-2xl font-semibold text-charcoal mb-4 font-display">
                  Silicon Valley
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Tech executives prioritize smart home integration, sustainable materials, and multi-functional spaces that support both work and family life.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li>• Advanced smart home systems</li>
                  <li>• Sustainable and eco-friendly materials</li>
                  <li>• Integrated home office spaces</li>
                  <li>• Minimalist, technology-forward design</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-2xl font-semibold text-charcoal mb-4 font-display">
                  Beverly Hills
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Entertainment industry leaders favor dramatic design elements, professional-grade appliances, and spaces designed for entertaining.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li>• Professional-grade appliances</li>
                  <li>• Dramatic architectural elements</li>
                  <li>• Entertainment-focused design</li>
                  <li>• Luxury materials and finishes</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-2xl font-semibold text-charcoal mb-4 font-display">
                  Marin County
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  Marin residents embrace biophilic design, natural materials, and spaces that connect with the surrounding landscape.
                </p>
                <ul className="space-y-2 text-charcoal/70">
                  <li>• Biophilic design elements</li>
                  <li>• Natural and organic materials</li>
                  <li>• Indoor-outdoor connectivity</li>
                  <li>• Wellness-focused design</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="py-24 bg-ivory">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Implementing 2025 Trends in Your Kitchen
              </h2>
              <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
                A practical guide to incorporating these trends into your luxury kitchen renovation or new construction project.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-charcoal mb-6 font-display">
                  Planning Your 2025 Kitchen
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-brass rounded-full flex items-center justify-center text-ivory font-bold text-sm mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="text-lg font-semibold text-charcoal mb-2">Assess Your Needs</h4>
                      <p className="text-charcoal/70">Evaluate your lifestyle, entertaining habits, and daily routines to determine which trends align with your needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-brass rounded-full flex items-center justify-center text-ivory font-bold text-sm mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="text-lg font-semibold text-charcoal mb-2">Set Your Budget</h4>
                      <p className="text-charcoal/70">Establish a realistic budget that accounts for premium materials, smart technology, and professional installation.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-brass rounded-full flex items-center justify-center text-ivory font-bold text-sm mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="text-lg font-semibold text-charcoal mb-2">Choose Your Team</h4>
                      <p className="text-charcoal/70">Work with experienced professionals who understand luxury design and can execute complex installations.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-brass rounded-full flex items-center justify-center text-ivory font-bold text-sm mr-4 flex-shrink-0">4</div>
                    <div>
                      <h4 className="text-lg font-semibold text-charcoal mb-2">Plan for the Future</h4>
                      <p className="text-charcoal/70">Design with flexibility in mind, allowing for technology updates and lifestyle changes over time.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-charcoal mb-6 font-display">
                  Key Considerations
                </h3>
                <div className="space-y-6">
                  <div className="bg-french-gray/10 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-charcoal mb-3">Technology Integration</h4>
                    <p className="text-charcoal/70 mb-4">Plan for smart home systems during the design phase to ensure seamless integration and avoid costly retrofits.</p>
                    <ul className="space-y-2 text-sm text-charcoal/70">
                      <li>• Pre-wire for smart systems</li>
                      <li>• Plan for charging stations</li>
                      <li>• Consider future technology needs</li>
                    </ul>
                  </div>
                  <div className="bg-french-gray/10 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-charcoal mb-3">Material Selection</h4>
                    <p className="text-charcoal/70 mb-4">Choose materials that balance beauty, durability, and sustainability while fitting your design aesthetic.</p>
                    <ul className="space-y-2 text-sm text-charcoal/70">
                      <li>• Consider maintenance requirements</li>
                      <li>• Evaluate environmental impact</li>
                      <li>• Plan for long-term durability</li>
                    </ul>
                  </div>
                  <div className="bg-french-gray/10 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-charcoal mb-3">Functionality First</h4>
                    <p className="text-charcoal/70 mb-4">Ensure your kitchen design prioritizes functionality while incorporating the latest trends and technologies.</p>
                    <ul className="space-y-2 text-sm text-charcoal/70">
                      <li>• Optimize workflow and efficiency</li>
                      <li>• Plan for storage and organization</li>
                      <li>• Consider accessibility needs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-charcoal text-ivory">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Ready to Create Your 2025 Kitchen?
            </h2>
            <p className="text-xl text-french-gray mb-12 max-w-3xl mx-auto">
              Let's discuss how we can incorporate these cutting-edge trends into your luxury kitchen design. Our team of expert designers and craftsmen will help you create a space that's both timeless and forward-thinking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-ivory text-deep-green px-8 py-4 rounded font-medium hover:bg-ivory/90 transition-colors">
                Schedule Design Consultation
              </Link>
              <Link href="/portfolio" className="border border-ivory text-ivory px-8 py-4 rounded font-medium hover:bg-ivory hover:text-deep-green transition-colors">
                View Our Portfolio
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
