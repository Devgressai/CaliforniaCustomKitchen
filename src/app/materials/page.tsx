import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'

import { MaterialsPageLayout } from '@/components/PageLayout'
import { MaterialsHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature, ProcessStep } from '@/components/ContentSection'
export const metadata: Metadata = {
  title: "Premium Materials | Custom Kitchen Cabinetry Woods & Finishes",
  description: "Explore our curated selection of premium hardwoods, exotic veneers, and museum-grade finishes. Sustainable sourcing meets uncompromising quality for California's finest homes.",
  keywords: [
    'premium hardwoods',
    'custom cabinetry materials',
    'exotic wood veneers',
    'sustainable lumber',
    'museum-grade finishes',
    'FSC certified wood',
    'luxury kitchen materials'
  ],
  openGraph: {
    title: "Premium Materials | PineWood Cabinets",
    description: "Curated selection of premium hardwoods and museum-grade finishes for custom cabinetry.",
    images: ['/images/materials-hero.webp'],
  },
}

export default function MaterialsPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Materials', href: '/materials', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Materials as Art"
        subtitle="Curated Excellence"
        description="From sustainably harvested American hardwoods to exotic species from responsibly managed forests worldwide, our material palette reflects both environmental stewardship and uncompromising quality."
        imageSrc="/images/materials-hero.webp"
        imageAlt="Premium hardwood lumber selection showing grain patterns and natural beauty"
        primaryCTA={{
          text: "Schedule Material Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Material Applications",
          href: "/portfolio"
        }}
      />

      {/* Executive Overview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-8 text-balance">
              Material Intelligence: The Foundation of Excellence
            </h1>
            <div className="prose-luxury">
              <p className="text-xl leading-relaxed text-charcoal/80 mb-8">
                The selection of materials forms the foundation of every exceptional piece of cabinetry we create. Our approach to material sourcing reflects decades of accumulated knowledge about wood behavior, finishing chemistry, and the long-term performance characteristics that distinguish heirloom furniture from mere cabinetry. We maintain relationships with premier lumber suppliers, sustainable forest managers, and specialty mills worldwide, ensuring access to the finest materials available while supporting responsible forestry practices.
              </p>
              <p className="text-lg leading-relaxed text-charcoal/70 mb-6">
                Our material library encompasses over 40 species of domestic and exotic hardwoods, each selected for specific characteristics that make them ideal for different applications within the luxury cabinetry environment. From the dimensional stability of quarter-sawn white oak to the dramatic grain patterns of figured walnut, from the marine-grade durability of teak to the sustainable beauty of reclaimed chestnut, every species in our collection has earned its place through proven performance and aesthetic excellence.
              </p>
              <p className="text-base leading-relaxed text-charcoal/70">
                Beyond wood selection, our expertise extends to advanced finishing systems, hardware curation, and the integration of contemporary materials like engineered stone, metals, and glass. This comprehensive approach ensures that every element of your cabinetry project works in harmony to create pieces that will maintain their beauty and functionality for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Sourcing Philosophy */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-charcoal mb-8">
                Sustainable Sourcing: Environmental Stewardship
              </h2>
              <div className="prose-luxury">
                <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
                  Our commitment to environmental stewardship guides every aspect of our material sourcing. We work exclusively with suppliers who share our values of responsible forest management, supporting both the long-term health of forest ecosystems and the communities that depend on them. This approach ensures that the beauty we create today doesn't compromise the natural resources available to future generations.
                </p>
                <p className="text-base leading-relaxed text-charcoal/70 mb-6">
                  Our FSC (Forest Stewardship Council) certification reflects our commitment to sourcing materials from forests that are managed according to strict environmental, social, and economic standards. This certification process includes regular third-party audits of our supply chain, ensuring that every piece of lumber we use can be traced back to responsibly managed forests.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">FSC Chain of Custody certification ensuring traceable, sustainable sourcing</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Direct relationships with family-owned mills supporting local forest economies</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Reclaimed and salvaged materials preserving historical resources</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Carbon-neutral shipping and packaging using renewable materials</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/sustainable-forest-management.webp"
                alt="Sustainable forest management showing responsible harvesting practices for premium hardwood lumber"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Hardwood Collection */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Premium Hardwood Collection
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our curated selection of domestic and exotic hardwoods, each chosen for specific performance characteristics and aesthetic qualities that define luxury cabinetry.
            </p>
          </div>

          {/* Domestic Hardwoods */}
          <div className="mb-20">
            <h3 className="font-display text-3xl font-bold text-charcoal mb-12 text-center">
              American Hardwood Heritage
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  name: 'Quarter-Sawn White Oak',
                  latin: 'Quercus alba',
                  origin: 'Pennsylvania & Ohio',
                  characteristics: 'Exceptional dimensional stability with distinctive ray fleck patterns. The quarter-sawing process cuts perpendicular to growth rings, minimizing seasonal movement while showcasing the wood\'s natural medullary rays.',
                  applications: 'Face frames, door construction, architectural millwork',
                  sustainability: 'FSC-certified from managed forests with 60+ year rotation cycles',
                  image: '/images/materials/quarter-sawn-white-oak.webp',
                  specs: {
                    density: '0.68 g/cm³',
                    janka: '1,360 lbf',
                    movement: 'Low (4.0% radial)',
                    workability: 'Excellent'
                  }
                },
                {
                  name: 'Black Walnut',
                  latin: 'Juglans nigra',
                  origin: 'Midwest & Appalachian Regions',
                  characteristics: 'Rich chocolate-brown heartwood with occasional purple undertones. Exceptional grain character ranging from straight to highly figured, with natural color variation that deepens with age and light exposure.',
                  applications: 'Premium door panels, drawer fronts, decorative veneers',
                  sustainability: 'Sustainably harvested from managed woodlands supporting local economies',
                  image: '/images/materials/black-walnut-lumber.webp',
                  specs: {
                    density: '0.55 g/cm³',
                    janka: '1,010 lbf',
                    movement: 'Moderate (5.5% radial)',
                    workability: 'Excellent'
                  }
                },
                {
                  name: 'Hard Maple',
                  latin: 'Acer saccharum',
                  origin: 'Great Lakes & Northeast',
                  characteristics: 'Fine, even grain structure with natural light coloration ideal for both natural and painted finishes. Exceptional hardness and wear resistance make it perfect for high-use applications.',
                  applications: 'Painted cabinetry, drawer boxes, structural components',
                  sustainability: 'Abundant renewable resource from well-managed northern forests',
                  image: '/images/materials/hard-maple-lumber.webp',
                  specs: {
                    density: '0.63 g/cm³',
                    janka: '1,450 lbf',
                    movement: 'Moderate (4.8% radial)',
                    workability: 'Good'
                  }
                },
                {
                  name: 'American Cherry',
                  latin: 'Prunus serotina',
                  origin: 'Pennsylvania & Virginia',
                  characteristics: 'Warm reddish-brown heartwood that deepens dramatically with UV exposure. Smooth grain with occasional gum pockets and mineral streaks that add character without compromising structural integrity.',
                  applications: 'Traditional cabinetry, raised panels, decorative elements',
                  sustainability: 'Selectively harvested from mixed hardwood forests',
                  image: '/images/materials/american-cherry-lumber.webp',
                  specs: {
                    density: '0.50 g/cm³',
                    janka: '995 lbf',
                    movement: 'Low (3.7% radial)',
                    workability: 'Excellent'
                  }
                }
              ].map((wood, index) => (
                <div key={index} className="bg-grain p-8 rounded-lg border border-french-gray/20">
                  <div className="relative aspect-[4/3] mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={wood.image}
                      alt={`${wood.name} lumber showing grain pattern and natural characteristics`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-display text-xl font-bold text-charcoal mb-2">
                    {wood.name}
                  </h4>
                  <p className="text-sm text-charcoal/60 italic mb-1">{wood.latin}</p>
                  <p className="text-sm text-brass font-medium mb-4">{wood.origin}</p>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    {wood.characteristics}
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-charcoal/70">
                      <strong>Applications:</strong> {wood.applications}
                    </p>
                    <p className="text-sm text-charcoal/70">
                      <strong>Sustainability:</strong> {wood.sustainability}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs text-charcoal/60">
                    <div>
                      <span className="font-medium">Density:</span> {wood.specs.density}
                    </div>
                    <div>
                      <span className="font-medium">Janka:</span> {wood.specs.janka}
                    </div>
                    <div>
                      <span className="font-medium">Movement:</span> {wood.specs.movement}
                    </div>
                    <div>
                      <span className="font-medium">Workability:</span> {wood.specs.workability}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exotic Species */}
          <div>
            <h3 className="font-display text-3xl font-bold text-charcoal mb-12 text-center">
              Exotic Species Collection
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Brazilian Rosewood',
                  latin: 'Dalbergia nigra',
                  origin: 'Brazil (CITES Certified)',
                  description: 'Deep purple-brown with dramatic black streaks. Available only from certified reclaimed sources.',
                  image: '/images/materials/brazilian-rosewood.webp'
                },
                {
                  name: 'Zebrawood',
                  latin: 'Microberlinia brazzavillensis',
                  origin: 'Central Africa',
                  description: 'Distinctive alternating light and dark stripes create dramatic visual impact in accent applications.',
                  image: '/images/materials/zebrawood-veneer.webp'
                },
                {
                  name: 'Wenge',
                  latin: 'Millettia laurentii',
                  origin: 'Central Africa',
                  description: 'Deep chocolate brown with fine black veining. Exceptional density and contemporary appeal.',
                  image: '/images/materials/wenge-lumber.webp'
                },
                {
                  name: 'European Beech',
                  latin: 'Fagus sylvatica',
                  origin: 'Germany & Austria',
                  description: 'Fine, even grain with natural steaming creating warm honey tones. Superior for bent laminations.',
                  image: '/images/materials/european-beech.webp'
                },
                {
                  name: 'Teak',
                  latin: 'Tectona grandis',
                  origin: 'Myanmar (Plantation)',
                  description: 'Marine-grade durability with natural oils providing weather resistance for coastal applications.',
                  image: '/images/materials/plantation-teak.webp'
                },
                {
                  name: 'Bubinga',
                  latin: 'Guibourtia tessmannii',
                  origin: 'Central Africa',
                  description: 'Rich reddish-brown with purple undertones and occasional figure patterns creating luxury appeal.',
                  image: '/images/materials/bubinga-veneer.webp'
                }
              ].map((wood, index) => (
                <div key={index} className="bg-charcoal text-ivory p-6 rounded-lg">
                  <div className="relative aspect-[4/3] mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={wood.image}
                      alt={`${wood.name} showing distinctive grain pattern and color characteristics`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-display text-lg font-bold mb-1">
                    {wood.name}
                  </h4>
                  <p className="text-xs text-french-gray italic mb-1">{wood.latin}</p>
                  <p className="text-xs text-brass font-medium mb-3">{wood.origin}</p>
                  <p className="text-sm text-french-gray leading-relaxed">
                    {wood.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reclaimed & Historical Materials */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Reclaimed & Historical Materials
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Preserving architectural heritage through the careful reclamation and restoration of historical lumber, giving new life to materials with centuries of character.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative">
              <Image
                src="/images/materials/reclaimed-chestnut-beams.webp"
                alt="Reclaimed American chestnut beams being restored for custom cabinetry applications"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-6">
                American Chestnut Revival
              </h3>
              <div className="prose-luxury">
                <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
                  Before the chestnut blight of the early 20th century, American chestnut was one of the most important timber species in eastern North America. Today, we carefully source reclaimed chestnut from historic structures, giving this magnificent wood new life in contemporary cabinetry while preserving its historical significance.
                </p>
                <p className="text-base leading-relaxed text-charcoal/70 mb-6">
                  Our reclaimed chestnut comes from barns, mills, and other structures dating back to the 18th and 19th centuries. Each piece carries the patina of age and the character marks of its previous life, creating cabinetry with unmatched depth and authenticity.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Structural restoration and stabilization of historical lumber</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Documentation of provenance and historical significance</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Careful processing to preserve character while ensuring structural integrity</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Integration with contemporary construction methods and hardware</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Reclaimed Heart Pine',
                period: '1800s-1900s',
                source: 'Southern mills & warehouses',
                characteristics: 'Tight growth rings from old-growth trees, exceptional hardness and resin content',
                applications: 'Flooring integration, rustic cabinetry, accent panels'
              },
              {
                title: 'Barn Wood Oak',
                period: '1850s-1920s',
                source: 'Midwest agricultural structures',
                characteristics: 'Weathered patina, nail holes and saw marks adding authentic character',
                applications: 'Rustic kitchen designs, wine storage, architectural accents'
              },
              {
                title: 'Factory Maple',
                period: '1900s-1950s',
                source: 'Industrial mill flooring',
                characteristics: 'Dense, wear-resistant surface from decades of industrial use',
                applications: 'Contemporary designs celebrating industrial heritage'
              }
            ].map((material, index) => (
              <div key={index} className="bg-ivory p-6 rounded-lg border border-french-gray/20">
                <h4 className="font-display text-lg font-bold text-charcoal mb-2">
                  {material.title}
                </h4>
                <div className="space-y-2 text-sm text-charcoal/70 mb-4">
                  <p><strong>Period:</strong> {material.period}</p>
                  <p><strong>Source:</strong> {material.source}</p>
                </div>
                <p className="text-sm text-charcoal/80 leading-relaxed mb-3">
                  {material.characteristics}
                </p>
                <p className="text-xs text-charcoal/60">
                  <strong>Applications:</strong> {material.applications}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Finishing Systems */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Advanced Finishing Systems
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our finishing processes transform raw lumber into surfaces that rival museum-quality furniture, providing both protection and beauty that will endure for generations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-6">
                Museum-Grade Finishing Environment
              </h3>
              <div className="prose-luxury">
                <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
                  Our 2,000-square-foot finishing facility maintains pharmaceutical-grade environmental controls, ensuring flawless surface quality that meets the most demanding standards. Temperature and humidity controls eliminate the variables that can compromise finish quality, while advanced air filtration systems prevent contamination during the critical curing process.
                </p>
                <p className="text-base leading-relaxed text-charcoal/70 mb-6">
                  Every surface undergoes meticulous preparation through progressive sanding grits, ensuring perfect smoothness and uniform stain acceptance. Our finishing craftsmen are trained in both traditional hand-rubbing techniques and contemporary spray application methods, allowing us to achieve any desired sheen level and surface character.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Climate-controlled environment with ±2°F temperature stability</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">HEPA filtration system removing 99.97% of airborne particles</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Positive air pressure preventing dust infiltration during curing</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">LED lighting system providing accurate color evaluation throughout process</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/materials/finishing-booth-process.webp"
                alt="Museum-grade finishing booth showing precision spray application and environmental controls"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="bg-charcoal text-ivory p-12 rounded-lg mb-16">
            <h3 className="font-display text-2xl font-bold mb-8 text-center">
              Finishing System Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-display text-lg font-semibold mb-4 text-brass">
                  Natural Oil Finishes
                </h4>
                <ul className="space-y-2 text-french-gray text-sm">
                  <li>• Tung oil for deep penetration and natural protection</li>
                  <li>• Danish oil for enhanced durability and easy maintenance</li>
                  <li>• Hand-rubbed application for authentic feel and appearance</li>
                  <li>• Multiple thin coats building depth and protection</li>
                  <li>• Renewable and repairable for long-term maintenance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold mb-4 text-brass">
                  Lacquer Systems
                </h4>
                <ul className="space-y-2 text-french-gray text-sm">
                  <li>• Pre-catalyzed lacquer for superior durability</li>
                  <li>• Conversion varnish for maximum chemical resistance</li>
                  <li>• Multiple sheen levels from matte to high gloss</li>
                  <li>• Fast cure times for efficient production schedules</li>
                  <li>• Professional repair capabilities for long-term service</li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold mb-4 text-brass">
                  Specialty Coatings
                </h4>
                <ul className="space-y-2 text-french-gray text-sm">
                  <li>• UV-resistant topcoats for coastal environments</li>
                  <li>• Anti-microbial additives for health-conscious applications</li>
                  <li>• Nano-ceramic coatings for extreme durability</li>
                  <li>• Water-based systems for low-VOC environments</li>
                  <li>• Custom color matching for specific design requirements</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-grain p-8 rounded-lg border border-french-gray/20">
              <h4 className="font-display text-xl font-bold text-charcoal mb-6">
                Surface Preparation Process
              </h4>
              <div className="space-y-4 text-charcoal/70">
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-brass rounded-full flex items-center justify-center text-xs font-bold text-ivory mr-3 flex-shrink-0 mt-1">1</span>
                  <div>
                    <p className="font-medium text-charcoal mb-1">Initial Sanding (120 grit)</p>
                    <p className="text-sm">Removal of mill marks and surface imperfections</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-brass rounded-full flex items-center justify-center text-xs font-bold text-ivory mr-3 flex-shrink-0 mt-1">2</span>
                  <div>
                    <p className="font-medium text-charcoal mb-1">Progressive Sanding (150, 180, 220 grit)</p>
                    <p className="text-sm">Gradual refinement creating perfectly smooth surface</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-brass rounded-full flex items-center justify-center text-xs font-bold text-ivory mr-3 flex-shrink-0 mt-1">3</span>
                  <div>
                    <p className="font-medium text-charcoal mb-1">Grain Raising & Re-sanding</p>
                    <p className="text-sm">Water application followed by final 220 grit sanding</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-brass rounded-full flex items-center justify-center text-xs font-bold text-ivory mr-3 flex-shrink-0 mt-1">4</span>
                  <div>
                    <p className="font-medium text-charcoal mb-1">Final Preparation (320 grit)</p>
                    <p className="text-sm">Ultra-smooth surface ready for stain application</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-brass rounded-full flex items-center justify-center text-xs font-bold text-ivory mr-3 flex-shrink-0 mt-1">5</span>
                  <div>
                    <p className="font-medium text-charcoal mb-1">Tack Cloth Cleaning</p>
                    <p className="text-sm">Complete removal of dust and debris before finishing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-deep-green text-ivory p-8 rounded-lg">
              <h4 className="font-display text-xl font-bold mb-6">
                Quality Control Standards
              </h4>
              <div className="space-y-4 text-french-gray">
                <p>
                  <strong className="text-brass">Color Consistency:</strong> Spectrophotometer verification ensuring perfect color matching across all components throughout production.
                </p>
                <p>
                  <strong className="text-brass">Surface Quality:</strong> Microscopic inspection for any imperfections, with rejection standards exceeding furniture industry norms.
                </p>
                <p>
                  <strong className="text-brass">Durability Testing:</strong> Accelerated aging tests simulating years of use to verify long-term performance characteristics.
                </p>
                <p>
                  <strong className="text-brass">Environmental Testing:</strong> Climate chamber testing ensuring stability under varying temperature and humidity conditions.
                </p>
                <p>
                  <strong className="text-brass">Chemical Resistance:</strong> Testing against common household chemicals and cleaning products for superior durability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware & Accessories */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Premium Hardware & Accessories
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              The finest cabinetry deserves hardware that matches its quality. Our curated selection includes the world's premier manufacturers, ensuring smooth operation and lasting beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                brand: 'Blum',
                specialty: 'Austrian Engineering Excellence',
                products: 'Soft-close hinges, drawer slides, lift systems',
                features: 'Whisper-quiet operation, 100,000+ cycle testing, lifetime warranty'
              },
              {
                brand: 'Häfele',
                specialty: 'German Innovation',
                products: 'Specialty hardware, organizational systems, lighting',
                features: 'Modular design, premium finishes, architectural integration'
              },
              {
                brand: 'Salice',
                specialty: 'Italian Design',
                products: 'Concealed hinges, sliding systems, cabinet accessories',
                features: 'Invisible installation, smooth operation, contemporary aesthetics'
              },
              {
                brand: 'Custom Forged',
                specialty: 'Artisan Metalwork',
                products: 'Hand-forged pulls, custom hardware, decorative elements',
                features: 'Unique designs, traditional techniques, heirloom quality'
              }
            ].map((brand, index) => (
              <div key={index} className="bg-ivory p-6 rounded-lg border border-french-gray/20 text-center">
                <h3 className="font-display text-lg font-bold text-charcoal mb-2">
                  {brand.brand}
                </h3>
                <p className="text-sm text-brass font-medium mb-3">
                  {brand.specialty}
                </p>
                <p className="text-sm text-charcoal/80 mb-3">
                  {brand.products}
                </p>
                <p className="text-xs text-charcoal/60 leading-relaxed">
                  {brand.features}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-charcoal text-ivory p-12 rounded-lg">
            <h3 className="font-display text-2xl font-bold mb-8 text-center">
              Hardware Finish Options
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'Brushed Brass', color: 'bg-gradient-to-br from-yellow-600 to-yellow-800' },
                { name: 'Polished Chrome', color: 'bg-gradient-to-br from-gray-300 to-gray-500' },
                { name: 'Satin Nickel', color: 'bg-gradient-to-br from-gray-400 to-gray-600' },
                { name: 'Oil-Rubbed Bronze', color: 'bg-gradient-to-br from-amber-900 to-gray-900' },
                { name: 'Matte Black', color: 'bg-gradient-to-br from-gray-800 to-black' },
                { name: 'Antique Copper', color: 'bg-gradient-to-br from-orange-800 to-red-900' }
              ].map((finish, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 ${finish.color} rounded-lg mx-auto mb-3 shadow-lg`}></div>
                  <p className="text-sm text-french-gray">{finish.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Care & Maintenance */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Care & Maintenance: Preserving Beauty
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Proper care ensures your investment in premium materials and craftsmanship will provide beauty and functionality for generations to come.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-grain p-8 rounded-lg border border-french-gray/20">
              <h3 className="font-display text-xl font-bold text-charcoal mb-6">
                Daily Care Practices
              </h3>
              <div className="space-y-4 text-charcoal/70">
                <p>
                  <strong>Gentle Cleaning:</strong> Use only pH-neutral cleaners and microfiber cloths. Avoid harsh chemicals, abrasive cleaners, and excessive moisture that can damage finishes.
                </p>
                <p>
                  <strong>Immediate Spill Response:</strong> Clean spills immediately to prevent staining or finish damage. Blot rather than wipe to avoid spreading liquids across the surface.
                </p>
                <p>
                  <strong>Hardware Maintenance:</strong> Periodically clean hardware with appropriate metal cleaners and lubricate moving parts with manufacturer-recommended lubricants.
                </p>
                <p>
                  <strong>Environmental Control:</strong> Maintain indoor humidity between 30-50% to minimize wood movement and prevent finish cracking or checking.
                </p>
              </div>
            </div>

            <div className="bg-charcoal text-ivory p-8 rounded-lg">
              <h3 className="font-display text-xl font-bold mb-6">
                Long-Term Preservation
              </h3>
              <div className="space-y-4 text-french-gray">
                <p>
                  <strong className="text-brass">Annual Conditioning:</strong> Professional assessment and conditioning treatments to maintain finish integrity and wood moisture content.
                </p>
                <p>
                  <strong className="text-brass">Hardware Adjustment:</strong> Annual adjustment of hinges, slides, and latches to maintain smooth operation and prevent wear.
                </p>
                <p>
                  <strong className="text-brass">Finish Renewal:</strong> Periodic professional refinishing to restore original beauty and protection, typically every 10-15 years.
                </p>
                <p>
                  <strong className="text-brass">Damage Prevention:</strong> Use cutting boards, trivets, and protective pads to prevent scratches, burns, and water damage.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-grain p-12 rounded-lg">
            <h3 className="font-display text-2xl font-bold text-charcoal mb-8 text-center">
              Seasonal Maintenance Calendar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  season: 'Spring',
                  tasks: ['Deep cleaning and inspection', 'Hardware lubrication', 'Humidity level adjustment', 'Touch-up small scratches']
                },
                {
                  season: 'Summer',
                  tasks: ['UV protection assessment', 'Coastal environment inspection', 'Air conditioning coordination', 'Vacation home preparation']
                },
                {
                  season: 'Fall',
                  tasks: ['Pre-heating season check', 'Hardware adjustment', 'Finish condition assessment', 'Professional maintenance scheduling']
                },
                {
                  season: 'Winter',
                  tasks: ['Humidity monitoring', 'Heating system coordination', 'Static electricity prevention', 'Holiday entertaining preparation']
                }
              ].map((period, index) => (
                <div key={index} className="text-center">
                  <h4 className="font-display text-lg font-semibold text-charcoal mb-4">
                    {period.season}
                  </h4>
                  <ul className="text-sm text-charcoal/70 space-y-2">
                    {period.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start">
                        <span className="w-1 h-1 bg-brass rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Material Selection Process */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Material Selection Process
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our collaborative approach to material selection ensures that every choice supports both your aesthetic vision and functional requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: '01',
                title: 'Lifestyle Assessment',
                description: 'Understanding your daily routines, entertaining patterns, and long-term goals to identify materials that will serve your needs perfectly.',
                icon: '🏠'
              },
              {
                step: '02',
                title: 'Environmental Analysis',
                description: 'Evaluating your home\'s climate conditions, natural light exposure, and architectural context to select materials that will thrive in your specific environment.',
                icon: '🌡️'
              },
              {
                step: '03',
                title: 'Aesthetic Integration',
                description: 'Coordinating material selections with your interior design vision, existing finishes, and architectural elements for seamless integration.',
                icon: '🎨'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-ivory rounded-full flex items-center justify-center mx-auto mb-6 border border-french-gray/20">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <div className="text-brass font-bold text-lg mb-2">{step.step}</div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-4">
                  {step.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-ivory p-12 rounded-lg">
            <h3 className="font-display text-2xl font-bold text-charcoal mb-8 text-center">
              Material Sample Library
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/materials/sample-library-consultation.webp"
                  alt="Material sample library consultation showing wood species, finishes, and hardware options"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
                  Our comprehensive material library allows you to experience the look, feel, and characteristics of different wood species, finishes, and hardware options before making your final selections.
                </p>
                <div className="space-y-4 text-charcoal/70">
                  <div className="flex items-start">
                    <span className="w-3 h-3 bg-brass rounded-full mt-1 mr-3 flex-shrink-0"></span>
                    <span>Over 200 wood and finish combinations available for evaluation</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-3 h-3 bg-brass rounded-full mt-1 mr-3 flex-shrink-0"></span>
                    <span>Full-size door samples showing grain matching and construction details</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-3 h-3 bg-brass rounded-full mt-1 mr-3 flex-shrink-0"></span>
                    <span>Hardware displays with operating mechanisms for hands-on evaluation</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-3 h-3 bg-brass rounded-full mt-1 mr-3 flex-shrink-0"></span>
                    <span>Take-home samples for evaluation in your home's lighting conditions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Experience Material Excellence"
        description="Schedule a private consultation to explore our material library and discover the perfect combination of wood species, finishes, and hardware for your custom cabinetry project."
        primaryCTA={{
          text: "Schedule Material Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Material Applications",
          href: "/portfolio"
        }}
        background="dark"
      />
    </>
  )
}
