import { Metadata } from 'next'
import { ServiceAreaPageLayout } from '@/components/PageLayout'
import { ServiceAreaHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature } from '@/components/ContentSection'
import { generateServiceSchema } from '@/components/StructuredData'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens La Selva Beach | Kitchen Design & Cabinetry | PineWood Cabinets',
  description: 'Luxury custom kitchens and bespoke cabinetry for La Selva Beach homes. Expert kitchen design and construction serving this coastal community with museum-grade craftsmanship.',
  keywords: [
    'custom kitchens la selva beach',
    'kitchen design la selva beach',
    'cabinetry la selva beach',
    'la selva beach kitchens',
    'monterey bay kitchen design',
    'luxury kitchens la selva beach',
    'custom cabinetry la selva beach',
    'kitchen remodeling la selva beach',
    'bespoke kitchens la selva beach',
    'coastal kitchens la selva beach'
  ],
  openGraph: {
    title: 'Custom Kitchens La Selva Beach | Kitchen Design & Cabinetry | PineWood Cabinets',
    description: 'Luxury custom kitchens and bespoke cabinetry for La Selva Beach homes in Monterey Bay.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens La Selva Beach",
  "Luxury custom kitchens and bespoke cabinetry for La Selva Beach homes in Monterey Bay",
  "Kitchen Design & Cabinetry",
  ["La Selva Beach, CA", "Monterey Bay, CA", "Santa Cruz, CA"]
)

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Monterey Bay', href: '/service-areas/monterey-bay' },
  { name: 'La Selva Beach', href: '/service-areas/monterey-bay/la-selva-beach' }
]

export default function LaSelvaBeachPage() {
  return (
    <ServiceAreaPageLayout
      location="La Selva Beach"
      service="Kitchen Design & Cabinetry"
      structuredData={{ service: serviceSchema }}
    >
      <Breadcrumbs items={breadcrumbs} />
      
      <ServiceAreaHero
        location="La Selva Beach"
        service="Kitchen Design & Cabinetry"
        description="Serving La Selva Beach's coastal community with luxury custom kitchens and bespoke cabinetry that celebrate the beach access, coastal beauty, and relaxed lifestyle of this charming Monterey Bay destination."
        imageSrc="service-areas/la-selva-beach-kitchen-hero.webp"
        imageAlt="Luxury custom kitchen in La Selva Beach home with coastal design and beach access"
      />

      {/* La Selva Beach Kitchen Services Overview */}
      <ContentSection background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="La Selva Beach Kitchen Excellence"
              description="La Selva Beach represents the perfect blend of coastal living and beach community charm. This beloved Monterey Bay community attracts discerning homeowners who appreciate both the beach access and the relaxed coastal lifestyle. Our La Selva Beach kitchen clients understand that true elegance lies in creating spaces that reflect the community's coastal character while providing the functionality and comfort that modern living demands."
            />
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              From charming beach cottages to modern coastal homes, La Selva Beach's diverse residential landscape demands custom kitchen solutions that seamlessly blend coastal charm with contemporary functionality and uncompromising quality. The community's proximity to the beach, the coastal dunes, and the relaxed setting creates unique opportunities for kitchen designs that celebrate both indoor and outdoor living while maintaining the highest standards of luxury and sophistication.
            </p>
            <Grid columns={2} gap="md">
              <Card>
                <h3 className="font-semibold text-charcoal mb-2">Kitchen Projects</h3>
                <p className="text-2xl font-bold text-brass">100+</p>
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
              src="/images/service-areas/la-selva-beach-kitchen-overview.webp"
              alt="Luxury custom kitchen in La Selva Beach home with coastal design and beach access"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </ContentSection>

      {/* Kitchen Services */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Kitchen Services for La Selva Beach"
          description="Our comprehensive kitchen design and construction services are tailored to meet the unique needs of La Selva Beach's diverse architectural styles and coastal lifestyle."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchens</h3>
            <p className="text-charcoal/70 mb-4">
              Complete custom kitchen transformation from design to completion, tailored to your La Selva Beach home's unique character and coastal lifestyle.
            </p>
            <Link href="/service-areas/monterey-bay/la-selva-beach/custom-kitchen" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinets</h3>
            <p className="text-charcoal/70 mb-4">
              Bespoke cabinetry solutions that combine coastal charm with luxury functionality for your La Selva Beach home.
            </p>
            <Link href="/service-areas/monterey-bay/la-selva-beach/kitchen-cabinets" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Design</h3>
            <p className="text-charcoal/70 mb-4">
              Professional kitchen design consultation and planning services for your La Selva Beach home renovation.
            </p>
            <Link href="/service-areas/monterey-bay/la-selva-beach/kitchen-design" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Remodel</h3>
            <p className="text-charcoal/70 mb-4">
              Complete kitchen remodeling services that transform your La Selva Beach home while preserving its coastal character.
            </p>
            <Link href="/service-areas/monterey-bay/la-selva-beach/kitchen-remodel" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>
        </Grid>
      </ContentSection>

      {/* La Selva Beach Kitchen Process */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Our Kitchen Design Process"
          description="Our proven kitchen design process ensures your La Selva Beach project exceeds expectations and perfectly reflects your vision while respecting the coastal character of your home."
          centered
          className="mb-16"
        />

        <Grid columns={4} gap="lg">
          <Feature
            icon={<span className="text-2xl font-bold text-brass">1</span>}
            title="Coastal Consultation"
            description="Comprehensive consultation to understand your vision, needs, and budget for your La Selva Beach kitchen project, with special attention to coastal lifestyle requirements."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">2</span>}
            title="Design Development"
            description="Creation of detailed design plans and 3D renderings for your La Selva Beach kitchen project, incorporating your preferences while respecting the home's coastal character."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">3</span>}
            title="Construction"
            description="Professional construction and installation of your approved La Selva Beach kitchen design, with careful attention to coastal preservation and quality craftsmanship."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">4</span>}
            title="Final Walkthrough"
            description="Comprehensive final walkthrough and project completion for your La Selva Beach kitchen project, ensuring everything meets our high standards and coastal requirements."
          />
        </Grid>
      </ContentSection>

      {/* La Selva Beach Kitchen Philosophy */}
      <ContentSection background="charcoal" padding="xl" className="text-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Designed for La Selva Beach Living"
              description="La Selva Beach's unique coastal character and beach environment creates distinct requirements for kitchen projects. Our approach honors the community's beach heritage while delivering the functionality and elegance that modern living demands."
              className="text-ivory"
            />
            <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
              From morning coffee with ocean views to evening entertaining that celebrates the community's coastal spirit, every kitchen decision reflects an understanding of how La Selva Beach residents truly live and enjoy their beach town lifestyle. The community's proximity to the ocean, the coastal dunes, and the relaxed setting creates unique opportunities for kitchen designs that celebrate both indoor and outdoor living while maintaining the highest standards of luxury and sophistication.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Coastal Integration</h3>
              <p className="text-ivory/80">Kitchen designs that celebrate La Selva Beach's coastal heritage while providing modern functionality and beach sophistication.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Beach Adaptation</h3>
              <p className="text-ivory/80">Custom solutions that work with La Selva Beach's unique beach environment and coastal architectural styles.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Relaxed Elegance</h3>
              <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste and coastal lifestyle of La Selva Beach residents.</p>
            </Card>
          </div>
        </div>
      </ContentSection>

      {/* Featured Kitchen Projects */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Featured La Selva Beach Kitchen Projects"
          description="Explore our portfolio of kitchen projects throughout La Selva Beach's most charming coastal neighborhoods, showcasing our ability to work with various architectural styles while preserving coastal character."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/la-selva-beach-kitchen-1.webp"
              alt="Luxury custom kitchen in La Selva Beach home with beach views"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Beach Views</h3>
              <p className="text-charcoal/70 mb-4">Luxury kitchen with stunning beach views that celebrates La Selva Beach's coastal heritage and relaxed beach town charm.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Beach Views</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Coastal Heritage</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/la-selva-beach-kitchen-2.webp"
              alt="Coastal kitchen in La Selva Beach home with beach town design"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Coastal Charm</h3>
              <p className="text-charcoal/70 mb-4">Kitchen design that showcases La Selva Beach's coastal charm with beach access and relaxed sophistication.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Coastal Charm</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Beach Access</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/la-selva-beach-kitchen-3.webp"
              alt="Modern kitchen in La Selva Beach home with contemporary coastal design"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Modern Coastal</h3>
              <p className="text-charcoal/70 mb-4">Contemporary kitchen that seamlessly blends modern functionality with La Selva Beach's coastal aesthetic and beach town charm.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Modern Design</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Coastal Aesthetic</span>
              </div>
            </div>
          </Card>
        </Grid>
      </ContentSection>

      {/* La Selva Beach Kitchen Materials */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Premium Materials for La Selva Beach Kitchens"
          description="We use only the finest materials and finishes to ensure your La Selva Beach kitchen stands the test of time while maintaining its beauty and functionality in the coastal environment."
          centered
          className="mb-16"
        />

        <Grid columns={2} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Coastal Hardwood Cabinetry</h3>
            <p className="text-charcoal/70 mb-4">
              Custom hardwood cabinetry crafted from premium woods that complement La Selva Beach's coastal character. Each piece is hand-finished to perfection and built to last for generations while respecting the home's beach heritage.
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
              Beautiful natural stone countertops including granite, marble, and quartz that add elegance and durability to your La Selva Beach kitchen while complementing the coastal character.
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
              High-end appliances from leading manufacturers that combine performance with style, perfectly integrated into your custom kitchen design while respecting the coastal character of your La Selva Beach home.
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
              Hand-selected hardware and fixtures that add the perfect finishing touches to your La Selva Beach kitchen, from cabinet pulls to faucets and lighting, all designed to complement the coastal aesthetic.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Designer cabinet hardware with coastal appeal</li>
              <li>• Premium faucets with beach inspiration</li>
              <li>• Custom lighting that celebrates coastal character</li>
              <li>• Finishing touches that reflect beach heritage</li>
            </ul>
          </Card>
        </Grid>
      </ContentSection>

      {/* Coastal Kitchen Features */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Coastal Kitchen Features"
          description="Special features and design elements that make La Selva Beach kitchens unique and perfectly suited to the coastal lifestyle."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Beach Access Integration</h3>
            <p className="text-charcoal/70 mb-4">
              Seamless integration with beach access including outdoor showers, storage for beach gear, and easy-clean surfaces that accommodate the sandy beach lifestyle.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Outdoor shower integration</li>
              <li>• Beach gear storage</li>
              <li>• Easy-clean surfaces</li>
              <li>• Sand-resistant finishes</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Coastal Color Palettes</h3>
            <p className="text-charcoal/70 mb-4">
              Beautiful coastal color palettes inspired by the ocean, sand, and sky that create a sense of calm and relaxation in your La Selva Beach kitchen.
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
              Spacious entertaining areas designed for hosting beach parties, casual gatherings, and social events that are central to La Selva Beach's coastal culture.
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
          title="La Selva Beach Kitchen FAQ"
          description="Common questions about kitchen services in La Selva Beach"
          centered
          className="mb-16"
        />

        <div className="space-y-8">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a kitchen project take in La Selva Beach?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              A complete kitchen project in La Selva Beach typically takes 6-12 weeks from start to finish, depending on the scope of work and coastal requirements. This includes 2-3 weeks for design and planning, 1-2 weeks for permits and preparation, 4-6 weeks for construction and installation, and 1-2 weeks for finishing and cleanup. We work efficiently to minimize disruption to your coastal lifestyle while ensuring the highest quality results and beach standards.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do I need permits for my La Selva Beach kitchen project?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Most kitchen projects in La Selva Beach require permits, especially if you're making structural changes, moving electrical or plumbing, or making modifications that affect the home's systems. We handle all permit applications and inspections as part of our comprehensive service, ensuring your project meets all local building codes and regulations. This is particularly important in La Selva Beach due to the coastal character of many homes and the beach environment.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle coastal requirements in La Selva Beach?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              We take special care to meet the coastal requirements of La Selva Beach homes while maintaining functionality. This includes working with coastal materials, selecting finishes that complement the home's architectural style, and ensuring the highest standards of craftsmanship. We're experienced in working with various coastal styles and can help you create a kitchen that honors the home's beach heritage while meeting modern luxury needs.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Can you work with my home's coastal character?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Absolutely! We love working with La Selva Beach's coastal homes and are experienced in preserving their character while modernizing functionality. Whether you have a beach cottage, modern coastal home, or any other coastal style, we work closely with you to create a kitchen that respects the home's beach heritage while providing the modern luxury amenities you need. We can help you navigate any coastal requirements and ensure your project enhances rather than detracts from the home's coastal value.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">What makes your La Selva Beach kitchen projects special?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Our La Selva Beach kitchen projects are special because we understand the unique character of this coastal community. We work with a wide range of architectural styles, from beach cottages to modern coastal homes, and we're experienced in incorporating coastal elements and beach sophistication into our designs. Our attention to detail, commitment to quality, and understanding of coastal living create kitchens that are both beautiful and functional, perfectly suited to the La Selva Beach lifestyle.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do you offer eco-friendly options for La Selva Beach kitchens?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Yes, we offer a wide range of eco-friendly options that are perfect for La Selva Beach's environmentally conscious community. This includes sustainable materials, energy-efficient appliances, low-VOC finishes, and water-saving fixtures. We can help you create a kitchen that not only looks beautiful but also aligns with your environmental values and contributes to a more sustainable future, all while maintaining the coastal character of your home.
            </p>
          </Card>
        </div>
      </ContentSection>
    </ServiceAreaPageLayout>
  )
}
