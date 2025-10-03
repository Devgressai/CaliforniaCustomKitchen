import { Metadata } from 'next'
import { OptimizedImage } from '@/components/OptimizedImage'
import { StructuredData } from '@/components/StructuredData'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Premium Hardwood Guide for Custom Kitchens | California Luxury Cabinetry | PineWood Cabinets",
  description: "Complete guide to premium hardwoods for custom kitchen cabinetry. Learn about wood species, grain patterns, durability, and applications for California's luxury homes.",
  keywords: [
    'premium hardwood guide',
    'custom kitchen wood species',
    'luxury cabinetry materials',
    'hardwood lumber California',
    'kitchen cabinet wood types',
    'wood grain patterns',
    'custom millwork materials',
    'kitchen design materials',
    'luxury home materials',
    'cabinet wood selection'
  ],
  openGraph: {
    title: "Premium Hardwood Guide for Custom Kitchens | PineWood Cabinets",
    description: "Complete guide to premium hardwoods for custom kitchen cabinetry. Learn about wood species, grain patterns, and applications.",
    type: 'article',
    publishedTime: '2024-12-19T00:00:00.000Z',
    authors: ['PineWood Cabinets'],
    images: ['/images/materials/premium-hardwood-guide-hero.webp'],
  },
}

const woodSpecies = [
  {
    name: "Quarter-Sawn White Oak",
    scientificName: "Quercus alba",
    origin: "Eastern United States",
    description: "The gold standard for luxury cabinetry, quarter-sawn white oak features distinctive ray fleck patterns and exceptional stability.",
    characteristics: {
      color: "Light tan to medium brown with distinctive ray fleck patterns",
      grain: "Straight, coarse, with prominent ray flecks",
      hardness: "1360 Janka (Hard)",
      stability: "Excellent",
      workability: "Good with sharp tools"
    },
    applications: [
      "Kitchen cabinets and islands",
      "Custom millwork and trim",
      "Built-in storage solutions",
      "Furniture and casework"
    ],
    advantages: [
      "Distinctive and beautiful grain patterns",
      "Excellent dimensional stability",
      "Takes stain and finish beautifully",
      "Durable and long-lasting",
      "Timeless appeal and versatility"
    ],
    considerations: [
      "Higher cost due to quarter-sawn processing",
      "Requires sharp tools for best results",
      "Grain can be challenging for beginners"
    ],
    image: "quarter-sawn-white-oak.webp",
    alt: "Quarter-sawn white oak lumber showing distinctive ray fleck patterns and grain structure"
  },
  {
    name: "Figured Black Walnut",
    scientificName: "Juglans nigra",
    origin: "Eastern United States",
    description: "Rich chocolate tones with dramatic grain patterns create one-of-a-kind visual interest and luxury appeal.",
    characteristics: {
      color: "Rich chocolate brown to purplish-black heartwood with lighter sapwood",
      grain: "Straight to irregular with occasional waves and curls",
      hardness: "1010 Janka (Medium-Hard)",
      stability: "Good",
      workability: "Excellent"
    },
    applications: [
      "Feature cabinets and accent pieces",
      "Kitchen islands and focal points",
      "Custom furniture and built-ins",
      "Decorative millwork and trim"
    ],
    advantages: [
      "Rich, luxurious appearance",
      "Excellent workability",
      "Beautiful natural color variation",
      "Takes finish exceptionally well",
      "Distinctive grain patterns"
    ],
    considerations: [
      "Color can darken over time",
      "Sapwood contrast may be undesirable",
      "Higher cost for figured grades"
    ],
    image: "black-walnut-lumber.webp",
    alt: "Premium black walnut lumber displaying rich chocolate tones and figured grain patterns"
  },
  {
    name: "American Cherry",
    scientificName: "Prunus serotina",
    origin: "Eastern United States",
    description: "Warm reddish-brown heartwood that darkens beautifully with age, creating a rich patina over time.",
    characteristics: {
      color: "Light pinkish-brown to reddish-brown heartwood, creamy white sapwood",
      grain: "Straight, fine, uniform texture",
      hardness: "950 Janka (Medium-Hard)",
      stability: "Good",
      workability: "Excellent"
    },
    applications: [
      "Traditional and transitional kitchens",
      "Custom millwork and trim",
      "Built-in storage and shelving",
      "Furniture and casework"
    ],
    advantages: [
      "Beautiful color that improves with age",
      "Excellent workability",
      "Consistent grain pattern",
      "Takes stain and finish well",
      "Classic, timeless appeal"
    ],
    considerations: [
      "Color changes significantly over time",
      "Sapwood contrast can be pronounced",
      "May require UV protection"
    ],
    image: "american-cherry-lumber.webp",
    alt: "American cherry lumber displaying warm reddish-brown heartwood and smooth grain"
  },
  {
    name: "Hard Maple",
    scientificName: "Acer saccharum",
    origin: "Northeastern United States",
    description: "Fine, even grain structure ideal for painted finishes and contemporary designs requiring clean, uniform appearance.",
    characteristics: {
      color: "Creamy white to light reddish-brown",
      grain: "Straight, fine, uniform texture",
      hardness: "1450 Janka (Very Hard)",
      stability: "Excellent",
      workability: "Good with sharp tools"
    },
    applications: [
      "Painted kitchen cabinets",
      "Contemporary and modern designs",
      "Custom millwork and trim",
      "Furniture and casework"
    ],
    advantages: [
      "Extremely hard and durable",
      "Excellent for painted finishes",
      "Consistent appearance",
      "Good dimensional stability",
      "Versatile and adaptable"
    ],
    considerations: [
      "Requires sharp tools for best results",
      "Can be challenging to work with",
      "May show tool marks if not handled properly"
    ],
    image: "hard-maple-lumber.webp",
    alt: "Hard maple lumber showing fine even grain structure ideal for painted finishes"
  },
  {
    name: "Reclaimed Chestnut",
    scientificName: "Castanea dentata",
    origin: "Historic American forests",
    description: "Historic American chestnut with unique character marks and environmental responsibility from reclaimed sources.",
    characteristics: {
      color: "Light to medium brown with natural aging and patina",
      grain: "Straight to irregular with character marks",
      hardness: "540 Janka (Soft)",
      stability: "Good (when properly dried)",
      workability: "Excellent"
    },
    applications: [
      "Rustic and traditional elements",
      "Accent features and trim",
      "Custom millwork and paneling",
      "Historic restoration projects"
    ],
    advantages: [
      "Unique character and history",
      "Environmental sustainability",
      "Beautiful natural patina",
      "Excellent workability",
      "One-of-a-kind appearance"
    ],
    considerations: [
      "Variable quality and condition",
      "May require extensive preparation",
      "Limited availability",
      "Higher cost due to rarity"
    ],
    image: "reclaimed-chestnut-beams.webp",
    alt: "Reclaimed American chestnut beams being restored for custom cabinetry applications"
  },
  {
    name: "European Beech",
    scientificName: "Fagus sylvatica",
    origin: "Europe",
    description: "Fine even grain with warm honey tones from the steaming process, offering excellent workability and consistency.",
    characteristics: {
      color: "Light cream to pinkish-brown with warm honey tones",
      grain: "Straight, fine, uniform texture",
      hardness: "1300 Janka (Hard)",
      stability: "Good",
      workability: "Excellent"
    },
    applications: [
      "Contemporary kitchen designs",
      "Custom millwork and trim",
      "Built-in storage solutions",
      "Furniture and casework"
    ],
    advantages: [
      "Consistent, uniform appearance",
      "Excellent workability",
      "Takes stain and finish well",
      "Good dimensional stability",
      "Versatile and adaptable"
    ],
    considerations: [
      "Color can vary between batches",
      "May require careful selection",
      "Higher cost for premium grades"
    ],
    image: "european-beech.webp",
    alt: "European beech lumber with fine even grain and warm honey tones from steaming process"
  }
]

const exoticSpecies = [
  {
    name: "Brazilian Rosewood",
    scientificName: "Dalbergia nigra",
    origin: "Brazil",
    description: "Deep purple-brown color with dramatic black streaks, one of the most sought-after exotic woods.",
    characteristics: {
      color: "Deep purple-brown with black streaks",
      grain: "Straight to irregular with dramatic figure",
      hardness: "2720 Janka (Extremely Hard)",
      stability: "Excellent",
      workability: "Good with sharp tools"
    },
    applications: [
      "Feature panels and accent pieces",
      "Custom furniture and built-ins",
      "Decorative millwork",
      "Collector pieces"
    ],
    image: "brazilian-rosewood.webp",
    alt: "Brazilian rosewood veneer showing deep purple-brown color with dramatic black streaks"
  },
  {
    name: "Zebrawood",
    scientificName: "Microberlinia brazzavillensis",
    origin: "Central Africa",
    description: "Distinctive alternating light and dark stripe patterns create dramatic visual impact.",
    characteristics: {
      color: "Light golden-brown with dark brown stripes",
      grain: "Straight with distinctive striping",
      hardness: "1570 Janka (Hard)",
      stability: "Good",
      workability: "Good with sharp tools"
    },
    applications: [
      "Feature doors and panels",
      "Accent elements",
      "Custom furniture",
      "Decorative millwork"
    ],
    image: "zebrawood-veneer.webp",
    alt: "Zebrawood veneer displaying distinctive alternating light and dark stripe patterns"
  },
  {
    name: "Wenge",
    scientificName: "Millettia laurentii",
    origin: "Central Africa",
    description: "Deep chocolate brown color with fine black veining, creating a sophisticated, modern appearance.",
    characteristics: {
      color: "Deep chocolate brown with fine black veining",
      grain: "Straight with fine texture",
      hardness: "1630 Janka (Hard)",
      stability: "Good",
      workability: "Good with sharp tools"
    },
    applications: [
      "Contemporary designs",
      "Feature elements",
      "Custom furniture",
      "Modern millwork"
    ],
    image: "wenge-lumber.webp",
    alt: "Wenge lumber showing deep chocolate brown color with fine black veining"
  },
  {
    name: "Bubinga",
    scientificName: "Guibourtia spp.",
    origin: "Central Africa",
    description: "Rich reddish-brown color with purple undertones and beautiful figure patterns.",
    characteristics: {
      color: "Rich reddish-brown with purple undertones",
      grain: "Straight to irregular with figure",
      hardness: "1980 Janka (Very Hard)",
      stability: "Good",
      workability: "Good with sharp tools"
    },
    applications: [
      "Feature panels and doors",
      "Custom furniture",
      "Decorative millwork",
      "Accent elements"
    ],
    image: "bubinga-veneer.webp",
    alt: "Bubinga veneer displaying rich reddish-brown color with purple undertones and figure patterns"
  }
]

const finishingOptions = [
  {
    name: "Natural Oil Finish",
    description: "Enhances the natural beauty of wood while providing protection and easy maintenance.",
    characteristics: [
      "Enhances natural grain and color",
      "Easy to maintain and repair",
      "Food-safe and non-toxic",
      "Requires periodic reapplication",
      "Natural, matte appearance"
    ],
    bestFor: ["Kitchen cabinets", "Cutting boards", "Food contact surfaces", "Traditional designs"]
  },
  {
    name: "Lacquer Finish",
    description: "High-gloss, durable finish that provides maximum protection and a luxurious appearance.",
    characteristics: [
      "High-gloss, mirror-like appearance",
      "Excellent durability and protection",
      "Easy to clean and maintain",
      "Can be repaired and refinished",
      "Professional, luxury look"
    ],
    bestFor: ["High-end kitchens", "Contemporary designs", "High-traffic areas", "Luxury applications"]
  },
  {
    name: "Conversion Varnish",
    description: "Industrial-grade finish offering exceptional durability and chemical resistance.",
    characteristics: [
      "Extremely durable and chemical-resistant",
      "Excellent color retention",
      "Hard, protective surface",
      "Professional application required",
      "Long-lasting protection"
    ],
    bestFor: ["Commercial applications", "High-traffic areas", "Durable surfaces", "Professional settings"]
  },
  {
    name: "Stained Finish",
    description: "Custom color application that enhances or changes the natural wood color.",
    characteristics: [
      "Custom color matching",
      "Enhances or changes wood color",
      "Maintains wood grain visibility",
      "Wide range of color options",
      "Professional color consistency"
    ],
    bestFor: ["Color matching", "Design coordination", "Custom aesthetics", "Brand consistency"]
  }
]

export default function PremiumHardwoodGuide() {
  const articleSchema = {
    headline: "Premium Hardwood Guide for Custom Kitchens",
    description: "Complete guide to premium hardwoods for custom kitchen cabinetry. Learn about wood species, grain patterns, durability, and applications for California's luxury homes.",
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
    image: ["/images/materials/premium-hardwood-guide-hero.webp"],
    articleSection: "Materials Guide",
    wordCount: 3000
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
                Premium Hardwood Guide for Custom Kitchens
              </h1>
              <p className="text-xl md:text-2xl text-french-gray leading-relaxed mb-8">
                Discover the finest hardwoods for luxury kitchen cabinetry. From classic American species to exotic imports, learn about the materials that define California's most prestigious kitchens.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Wood Species</span>
                <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Grain Patterns</span>
                <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Durability</span>
                <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Applications</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-24 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="prose-luxury">
              <p className="text-xl leading-relaxed text-charcoal/80 mb-8">
                The choice of hardwood species is one of the most important decisions in creating a custom kitchen. Each wood species brings its own unique character, grain patterns, and working properties that will define the look, feel, and longevity of your cabinetry.
              </p>
              <p className="text-lg leading-relaxed text-charcoal/70 mb-6">
                From the timeless elegance of quarter-sawn white oak to the rich warmth of American cherry, the right wood selection can elevate your kitchen from beautiful to extraordinary. This comprehensive guide explores the premium hardwoods we use in our custom cabinetry, helping you make informed decisions for your luxury kitchen project.
              </p>
            </div>
          </div>
        </section>

        {/* Main Wood Species */}
        <section className="py-24 bg-grain">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Premium American Hardwoods
              </h2>
              <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
                The finest hardwoods from American forests, each offering unique characteristics and applications for luxury cabinetry.
              </p>
            </div>

            <div className="space-y-24">
              {woodSpecies.map((wood, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                      <h3 className="text-3xl font-semibold text-charcoal mb-4 font-display">
                        {wood.name}
                      </h3>
                      <p className="text-sm text-charcoal/60 mb-4">
                        <em>{wood.scientificName}</em> • {wood.origin}
                      </p>
                      <p className="text-lg leading-relaxed text-charcoal/80 mb-8">
                        {wood.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h4 className="text-lg font-semibold text-charcoal mb-3">Characteristics</h4>
                          <ul className="space-y-2 text-sm text-charcoal/70">
                            <li><strong>Color:</strong> {wood.characteristics.color}</li>
                            <li><strong>Grain:</strong> {wood.characteristics.grain}</li>
                            <li><strong>Hardness:</strong> {wood.characteristics.hardness}</li>
                            <li><strong>Stability:</strong> {wood.characteristics.stability}</li>
                            <li><strong>Workability:</strong> {wood.characteristics.workability}</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-charcoal mb-3">Applications</h4>
                          <ul className="space-y-2 text-sm text-charcoal/70">
                            {wood.applications.map((app, appIndex) => (
                              <li key={appIndex} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {app}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-charcoal mb-3">Advantages</h4>
                          <ul className="space-y-2 text-sm text-charcoal/70">
                            {wood.advantages.map((advantage, advIndex) => (
                              <li key={advIndex} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-deep-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {advantage}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-charcoal mb-3">Considerations</h4>
                          <ul className="space-y-2 text-sm text-charcoal/70">
                            {wood.considerations.map((consideration, conIndex) => (
                              <li key={conIndex} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-oxblood rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {consideration}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <OptimizedImage
                        filename={wood.image}
                        alt={wood.alt}
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

        {/* Exotic Species */}
        <section className="py-24 bg-ivory">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Exotic Hardwood Species
              </h2>
              <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
                Rare and exotic woods from around the world, perfect for creating one-of-a-kind luxury cabinetry and accent pieces.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {exoticSpecies.map((wood, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
                  <div className="aspect-video rounded-lg overflow-hidden mb-6">
                    <OptimizedImage
                      filename={wood.image}
                      alt={wood.alt}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2 font-display">
                    {wood.name}
                  </h3>
                  <p className="text-sm text-charcoal/60 mb-4">
                    <em>{wood.scientificName}</em>
                  </p>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    {wood.description}
                  </p>
                  <div className="space-y-2 text-sm text-charcoal/70">
                    <div><strong>Color:</strong> {wood.characteristics.color}</div>
                    <div><strong>Grain:</strong> {wood.characteristics.grain}</div>
                    <div><strong>Hardness:</strong> {wood.characteristics.hardness}</div>
                    <div><strong>Stability:</strong> {wood.characteristics.stability}</div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-charcoal mb-2">Applications</h4>
                    <ul className="space-y-1 text-xs text-charcoal/70">
                      {wood.applications.map((app, appIndex) => (
                        <li key={appIndex} className="flex items-start">
                          <span className="w-1 h-1 bg-brass rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Finishing Options */}
        <section className="py-24 bg-charcoal text-ivory">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Finishing Options
              </h2>
              <p className="text-xl text-french-gray max-w-3xl mx-auto">
                The right finish enhances the natural beauty of wood while providing protection and durability for your luxury cabinetry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {finishingOptions.map((finish, index) => (
                <div key={index} className="bg-deep-green/20 p-8 rounded-lg border border-french-gray/20">
                  <h3 className="text-2xl font-semibold text-ivory mb-4 font-display">
                    {finish.name}
                  </h3>
                  <p className="text-french-gray leading-relaxed mb-6">
                    {finish.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-ivory mb-3">Characteristics</h4>
                    <ul className="space-y-2">
                      {finish.characteristics.map((characteristic, charIndex) => (
                        <li key={charIndex} className="flex items-start text-french-gray text-sm">
                          <span className="w-1.5 h-1.5 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {characteristic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-ivory mb-3">Best For</h4>
                    <ul className="space-y-2">
                      {finish.bestFor.map((use, useIndex) => (
                        <li key={useIndex} className="flex items-start text-french-gray text-sm">
                          <span className="w-1.5 h-1.5 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {use}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selection Guide */}
        <section className="py-24 bg-grain">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Choosing the Right Wood
              </h2>
              <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
                A practical guide to selecting the perfect hardwood species for your custom kitchen project.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-charcoal mb-6 font-display">
                  Design Considerations
                </h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
                    <h4 className="text-lg font-semibold text-charcoal mb-3">Style and Aesthetic</h4>
                    <p className="text-charcoal/70 mb-4">Consider the overall design style of your kitchen and home.</p>
                    <ul className="space-y-2 text-sm text-charcoal/70">
                      <li>• Traditional: Cherry, Oak, Walnut</li>
                      <li>• Contemporary: Maple, Beech, Exotic species</li>
                      <li>• Rustic: Reclaimed Chestnut, Oak</li>
                      <li>• Modern: Wenge, Zebrawood, Figured species</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
                    <h4 className="text-lg font-semibold text-charcoal mb-3">Durability Requirements</h4>
                    <p className="text-charcoal/70 mb-4">Consider the level of use and wear your cabinets will experience.</p>
                    <ul className="space-y-2 text-sm text-charcoal/70">
                      <li>• High-traffic: Hard Maple, Oak, Exotic species</li>
                      <li>• Moderate use: Cherry, Walnut, Beech</li>
                      <li>• Decorative: Reclaimed Chestnut, Figured species</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
                    <h4 className="text-lg font-semibold text-charcoal mb-3">Budget Considerations</h4>
                    <p className="text-charcoal/70 mb-4">Wood species vary significantly in cost and availability.</p>
                    <ul className="space-y-2 text-sm text-charcoal/70">
                      <li>• Premium: Exotic species, Figured grades</li>
                      <li>• Mid-range: Cherry, Walnut, Quarter-sawn Oak</li>
                      <li>• Value: Hard Maple, Beech, Standard Oak</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-charcoal mb-6 font-display">
                  Technical Considerations
                </h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
                    <h4 className="text-lg font-semibold text-charcoal mb-3">Environmental Factors</h4>
                    <p className="text-charcoal/70 mb-4">Consider your local climate and environmental conditions.</p>
                    <ul className="space-y-2 text-sm text-charcoal/70">
                      <li>• Humidity changes: Stable species like Oak</li>
                      <li>• Temperature variations: Dense hardwoods</li>
                      <li>• UV exposure: Species with good color retention</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
                    <h4 className="text-lg font-semibold text-charcoal mb-3">Maintenance Requirements</h4>
                    <p className="text-charcoal/70 mb-4">Consider the ongoing care and maintenance needs.</p>
                    <ul className="space-y-2 text-sm text-charcoal/70">
                      <li>• Low maintenance: Dense hardwoods with stable finishes</li>
                      <li>• Regular care: Natural oil finishes</li>
                      <li>• Professional maintenance: Exotic species</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
                    <h4 className="text-lg font-semibold text-charcoal mb-3">Availability and Lead Times</h4>
                    <p className="text-charcoal/70 mb-4">Consider the availability and sourcing requirements.</p>
                    <ul className="space-y-2 text-sm text-charcoal/70">
                      <li>• Readily available: Common American species</li>
                      <li>• Special order: Exotic species, Figured grades</li>
                      <li>• Limited availability: Reclaimed materials</li>
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
              Ready to Choose Your Wood?
            </h2>
            <p className="text-xl text-french-gray mb-12 max-w-3xl mx-auto">
              Let our expert team help you select the perfect hardwood species for your custom kitchen. We'll guide you through the selection process and show you samples of each wood species.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-ivory text-deep-green px-8 py-4 rounded font-medium hover:bg-ivory/90 transition-colors">
                Schedule Material Consultation
              </Link>
              <Link href="/materials" className="border border-ivory text-ivory px-8 py-4 rounded font-medium hover:bg-ivory hover:text-deep-green transition-colors">
                View All Materials
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
