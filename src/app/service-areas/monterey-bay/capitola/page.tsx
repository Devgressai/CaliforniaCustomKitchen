import { Metadata } from 'next'
import { ServiceAreaPageLayout } from '@/components/PageLayout'
import { ServiceAreaHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature } from '@/components/ContentSection'
import { generateServiceSchema } from '@/components/StructuredData'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens Capitola | Kitchen Design & Cabinetry | PineWood Cabinets',
  description: 'Luxury custom kitchens and bespoke cabinetry for Capitola homes. Expert kitchen design and construction serving this charming beach town community with museum-grade craftsmanship.',
  keywords: [
    'custom kitchens capitola',
    'kitchen design capitola',
    'cabinetry capitola',
    'capitola kitchens',
    'monterey bay kitchen design',
    'luxury kitchens capitola',
    'custom cabinetry capitola',
    'kitchen remodeling capitola',
    'bespoke kitchens capitola',
    'beach town kitchens capitola'
  ],
  openGraph: {
    title: 'Custom Kitchens Capitola | Kitchen Design & Cabinetry | PineWood Cabinets',
    description: 'Luxury custom kitchens and bespoke cabinetry for Capitola homes in Monterey Bay.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Capitola",
  "Luxury custom kitchens and bespoke cabinetry for Capitola homes in Monterey Bay",
  "Kitchen Design & Cabinetry",
  ["Capitola, CA", "Monterey Bay, CA", "Santa Cruz, CA"]
)

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Monterey Bay', href: '/service-areas/monterey-bay' },
  { name: 'Capitola', href: '/service-areas/monterey-bay/capitola' }
]

export default function CapitolaPage() {
  return (
    <ServiceAreaPageLayout
      location="Capitola"
      service="Kitchen Design & Cabinetry"
      structuredData={{ service: serviceSchema }}
    >
      <Breadcrumbs items={breadcrumbs} />
      
      <ServiceAreaHero
        location="Capitola"
        service="Kitchen Design & Cabinetry"
        description="Serving Capitola's charming beach town community with luxury custom kitchens and bespoke cabinetry that celebrate the colorful architecture, coastal beauty, and relaxed lifestyle of this beloved Monterey Bay destination."
        imageSrc="service-areas/capitola-kitchen-hero.webp"
        imageAlt="Luxury custom kitchen in Capitola home with colorful beach town design"
      />

      {/* Capitola Kitchen Services Overview */}
      <ContentSection background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Capitola Kitchen Excellence"
              description="Capitola represents the perfect blend of beach town charm and coastal sophistication. This beloved Monterey Bay community attracts discerning homeowners who appreciate both the colorful architecture and relaxed beach lifestyle. Our Capitola kitchen clients understand that true elegance lies in creating spaces that reflect the community's vibrant character while providing the functionality and comfort that modern living demands."
            />
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              From charming Victorian beach cottages to modern coastal homes, Capitola's diverse residential landscape demands custom kitchen solutions that seamlessly blend beach town charm with contemporary functionality and uncompromising quality. The community's proximity to the beach, the colorful downtown, and the relaxed coastal setting creates unique opportunities for kitchen designs that celebrate both indoor and outdoor living while maintaining the highest standards of luxury and sophistication.
            </p>
            <Grid columns={2} gap="md">
              <Card>
                <h3 className="font-semibold text-charcoal mb-2">Kitchen Projects</h3>
                <p className="text-2xl font-bold text-brass">160+</p>
                <p className="text-sm text-charcoal/70">Completed projects</p>
              </Card>
              <Card>
                <h3 className="font-semibold text-charcoal mb-2">Craftsmanship</h3>
                <p className="text-2xl font-bold text-brass">20+</p>
                <p className="text-sm text-charcoal/70">Years experience</p>
              </Card>
            </Grid>
          </div>
          <div className="relative">
            <img
              src="/images/service-areas/capitola-kitchen-overview.webp"
              alt="Luxury custom kitchen in Capitola home with colorful beach town design"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </ContentSection>

      {/* Kitchen Services */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Kitchen Services for Capitola"
          description="Our comprehensive kitchen design and construction services are tailored to meet the unique needs of Capitola's diverse architectural styles and beach town lifestyle."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchens</h3>
            <p className="text-charcoal/70 mb-4">
              Complete custom kitchen transformation from design to completion, tailored to your Capitola home's unique character and beach town lifestyle.
            </p>
            <Link href="/service-areas/monterey-bay/capitola/custom-kitchen" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinets</h3>
            <p className="text-charcoal/70 mb-4">
              Bespoke cabinetry solutions that combine beach town charm with luxury functionality for your Capitola home.
            </p>
            <Link href="/service-areas/monterey-bay/capitola/kitchen-cabinets" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Design</h3>
            <p className="text-charcoal/70 mb-4">
              Professional kitchen design consultation and planning services for your Capitola home renovation.
            </p>
            <Link href="/service-areas/monterey-bay/capitola/kitchen-design" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Remodel</h3>
            <p className="text-charcoal/70 mb-4">
              Complete kitchen remodeling services that transform your Capitola home while preserving its beach town character.
            </p>
            <Link href="/service-areas/monterey-bay/capitola/kitchen-remodel" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>
        </Grid>
      </ContentSection>

      {/* Capitola Kitchen Process */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Our Kitchen Design Process"
          description="Our proven kitchen design process ensures your Capitola project exceeds expectations and perfectly reflects your vision while respecting the beach town character of your home."
          centered
          className="mb-16"
        />

        <Grid columns={4} gap="lg">
          <Feature
            icon={<span className="text-2xl font-bold text-brass">1</span>}
            title="Beach Town Consultation"
            description="Comprehensive consultation to understand your vision, needs, and budget for your Capitola kitchen project, with special attention to beach town lifestyle requirements."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">2</span>}
            title="Design Development"
            description="Creation of detailed design plans and 3D renderings for your Capitola kitchen project, incorporating your preferences while respecting the home's beach town character."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">3</span>}
            title="Construction"
            description="Professional construction and installation of your approved Capitola kitchen design, with careful attention to beach town preservation and quality craftsmanship."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">4</span>}
            title="Final Walkthrough"
            description="Comprehensive final walkthrough and project completion for your Capitola kitchen project, ensuring everything meets our high standards and beach town requirements."
          />
        </Grid>
      </ContentSection>

      {/* Capitola Kitchen Philosophy */}
      <ContentSection background="charcoal" padding="xl" className="text-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Designed for Capitola Living"
              description="Capitola's unique beach town character and coastal environment creates distinct requirements for kitchen projects. Our approach honors the community's vibrant heritage while delivering the functionality and elegance that modern living demands."
              className="text-ivory"
            />
            <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
              From morning coffee overlooking the beach to evening entertaining that celebrates the community's relaxed coastal spirit, every kitchen decision reflects an understanding of how Capitola residents truly live and enjoy their beach town lifestyle. The community's proximity to the ocean, the colorful downtown, and the relaxed coastal setting creates unique opportunities for kitchen designs that celebrate both indoor and outdoor living while maintaining the highest standards of luxury and sophistication.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Beach Town Integration</h3>
              <p className="text-ivory/80">Kitchen designs that celebrate Capitola's beach town heritage while providing modern functionality and coastal sophistication.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Coastal Adaptation</h3>
              <p className="text-ivory/80">Custom solutions that work with Capitola's unique coastal environment and colorful architectural styles.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Relaxed Elegance</h3>
              <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste and beach town lifestyle of Capitola residents.</p>
            </Card>
          </div>
        </div>
      </ContentSection>

      {/* Featured Kitchen Projects */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Featured Capitola Kitchen Projects"
          description="Explore our portfolio of kitchen projects throughout Capitola's most charming neighborhoods, showcasing our ability to work with various architectural styles while preserving beach town character."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/capitola-kitchen-1.webp"
              alt="Luxury custom kitchen in Capitola home with beach views"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Beach Views</h3>
              <p className="text-charcoal/70 mb-4">Luxury kitchen with stunning beach views that celebrates Capitola's coastal heritage and relaxed beach town charm.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Beach Views</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Coastal Heritage</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/capitola-kitchen-2.webp"
              alt="Colorful kitchen in Capitola home with beach town design"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Colorful Beach Town</h3>
              <p className="text-charcoal/70 mb-4">Vibrant kitchen design that showcases Capitola's colorful architecture and beach town sophistication.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Colorful Design</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Beach Town</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/capitola-kitchen-3.webp"
              alt="Modern kitchen in Capitola home with contemporary coastal design"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Modern Coastal</h3>
              <p className="text-charcoal/70 mb-4">Contemporary kitchen that seamlessly blends modern functionality with Capitola's coastal aesthetic and beach town charm.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Modern Design</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Coastal Aesthetic</span>
              </div>
            </div>
          </Card>
        </Grid>
      </ContentSection>

      {/* Capitola Kitchen Materials */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Premium Materials for Capitola Kitchens"
          description="We use only the finest materials and finishes to ensure your Capitola kitchen stands the test of time while maintaining its beauty and functionality in the coastal environment."
          centered
          className="mb-16"
        />

        <Grid columns={2} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Coastal Hardwood Cabinetry</h3>
            <p className="text-charcoal/70 mb-4">
              Custom hardwood cabinetry crafted from premium woods that complement Capitola's beach town character. Each piece is hand-finished to perfection and built to last for generations while respecting the home's coastal heritage.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Cherry, Maple, Oak, Walnut with coastal finishes</li>
              <li>• Hand-finished surfaces with traditional techniques</li>
              <li>• Custom hardware options</li>
              <li>• Soft-close mechanisms</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Natural Stone Countertops</h3>
            <p className="text-charcoal/70 mb-4">
              Beautiful natural stone countertops including granite, marble, and quartz that add elegance and durability to your Capitola kitchen while complementing the beach town character.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Granite, Marble, Quartz with coastal appeal</li>
              <li>• Custom edge profiles</li>
              <li>• Seamless installation</li>
              <li>• Easy maintenance for coastal homes</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Premium Appliances</h3>
            <p className="text-charcoal/70 mb-4">
              High-end appliances from leading manufacturers that combine performance with style, perfectly integrated into your custom kitchen design while respecting the beach town character of your Capitola home.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Wolf, Sub-Zero, Viking with coastal integration</li>
              <li>• Custom panel integration</li>
              <li>• Smart home compatibility</li>
              <li>• Energy efficient options</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Hardware</h3>
            <p className="text-charcoal/70 mb-4">
              Hand-selected hardware and fixtures that add the perfect finishing touches to your Capitola kitchen, from cabinet pulls to faucets and lighting, all designed to complement the beach town aesthetic.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Designer cabinet hardware with coastal appeal</li>
              <li>• Premium faucets with beach inspiration</li>
              <li>• Custom lighting that celebrates beach town character</li>
              <li>• Finishing touches that reflect coastal heritage</li>
            </ul>
          </Card>
        </Grid>
      </ContentSection>

      {/* Beach Town Kitchen Features */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Beach Town Kitchen Features"
          description="Special features and design elements that make Capitola kitchens unique and perfectly suited to the beach town lifestyle."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Outdoor Living Integration</h3>
            <p className="text-charcoal/70 mb-4">
              Seamless integration with outdoor living spaces including outdoor kitchens, dining areas, and entertainment spaces that take advantage of Capitola's year-round mild climate.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Outdoor kitchen integration</li>
              <li>• Seamless indoor-outdoor flow</li>
              <li>• Outdoor dining areas</li>
              <li>• Entertainment spaces</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Coastal Color Palettes</h3>
            <p className="text-charcoal/70 mb-4">
              Beautiful coastal color palettes inspired by the ocean, sand, and sky that create a sense of calm and relaxation in your Capitola kitchen.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Ocean-inspired blues and greens</li>
              <li>• Sand and driftwood tones</li>
              <li>• Sky and cloud whites</li>
              <li>• Natural wood finishes</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Beach Town Entertaining</h3>
            <p className="text-charcoal/70 mb-4">
              Spacious entertaining areas designed for hosting beach parties, casual gatherings, and social events that are central to Capitola's beach town culture.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Large island seating areas</li>
              <li>• Open concept layouts</li>
              <li>• Casual dining spaces</li>
              <li>• Beverage and bar centers</li>
            </ul>
          </Card>
        </Grid>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection background="white" padding="xl" maxWidth="2xl">
        <SectionHeader
          title="Capitola Kitchen FAQ"
          description="Common questions about kitchen services in Capitola"
          centered
          className="mb-16"
        />

        <div className="space-y-8">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a kitchen project take in Capitola?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              A complete kitchen project in Capitola typically takes 6-12 weeks from start to finish, depending on the scope of work and beach town requirements. This includes 2-3 weeks for design and planning, 1-2 weeks for permits and preparation, 4-6 weeks for construction and installation, and 1-2 weeks for finishing and cleanup. We work efficiently to minimize disruption to your beach town lifestyle while ensuring the highest quality results and coastal standards.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do I need permits for my Capitola kitchen project?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Most kitchen projects in Capitola require permits, especially if you're making structural changes, moving electrical or plumbing, or making modifications that affect the home's systems. We handle all permit applications and inspections as part of our comprehensive service, ensuring your project meets all local building codes and regulations. This is particularly important in Capitola due to the coastal character of many homes and the beach town environment.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle beach town requirements in Capitola?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              We take special care to meet the beach town requirements of Capitola homes while maintaining functionality. This includes working with coastal materials, selecting finishes that complement the home's architectural style, and ensuring the highest standards of craftsmanship. We're experienced in working with various beach town styles and can help you create a kitchen that honors the home's coastal heritage while meeting modern luxury needs.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Can you work with my home's beach town character?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Absolutely! We love working with Capitola's beach town homes and are experienced in preserving their character while modernizing functionality. Whether you have a Victorian beach cottage, modern coastal home, or any other beach town style, we work closely with you to create a kitchen that respects the home's coastal heritage while providing the modern luxury amenities you need. We can help you navigate any beach town requirements and ensure your project enhances rather than detracts from the home's beach town value.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">What makes your Capitola kitchen projects special?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Our Capitola kitchen projects are special because we understand the unique character of this beach town community. We work with a wide range of architectural styles, from Victorian beach cottages to modern coastal homes, and we're experienced in incorporating beach town elements and coastal sophistication into our designs. Our attention to detail, commitment to quality, and understanding of beach town living create kitchens that are both beautiful and functional, perfectly suited to the Capitola lifestyle.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do you offer eco-friendly options for Capitola kitchens?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Yes, we offer a wide range of eco-friendly options that are perfect for Capitola's environmentally conscious community. This includes sustainable materials, energy-efficient appliances, low-VOC finishes, and water-saving fixtures. We can help you create a kitchen that not only looks beautiful but also aligns with your environmental values and contributes to a more sustainable future, all while maintaining the beach town character of your home.
            </p>
          </Card>
        </div>
      </ContentSection>
    </ServiceAreaPageLayout>
  )
}
