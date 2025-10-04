import { Metadata } from 'next'
import { ServiceAreaPageLayout } from '@/components/PageLayout'
import { ServiceAreaHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature } from '@/components/ContentSection'
import { generateServiceSchema } from '@/components/StructuredData'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens Marina | Kitchen Design & Cabinetry | PineWood Cabinets',
  description: 'Luxury custom kitchens and bespoke cabinetry for Marina homes. Expert kitchen design and construction serving this coastal community with museum-grade craftsmanship.',
  keywords: [
    'custom kitchens marina',
    'kitchen design marina',
    'cabinetry marina',
    'marina kitchens',
    'monterey bay kitchen design',
    'luxury kitchens marina',
    'custom cabinetry marina',
    'kitchen remodeling marina',
    'bespoke kitchens marina',
    'coastal kitchens marina'
  ],
  openGraph: {
    title: 'Custom Kitchens Marina | Kitchen Design & Cabinetry | PineWood Cabinets',
    description: 'Luxury custom kitchens and bespoke cabinetry for Marina homes in Monterey Bay.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Marina",
  "Luxury custom kitchens and bespoke cabinetry for Marina homes in Monterey Bay",
  "Kitchen Design & Cabinetry",
  ["Marina, CA", "Monterey Bay, CA", "Monterey, CA"]
)

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Monterey Bay', href: '/service-areas/monterey-bay' },
  { name: 'Marina', href: '/service-areas/monterey-bay/marina' }
]

export default function MarinaPage() {
  return (
    <ServiceAreaPageLayout
      location="Marina"
      service="Kitchen Design & Cabinetry"
      structuredData={{ service: serviceSchema }}
    >
      <Breadcrumbs items={breadcrumbs} />
      
      <ServiceAreaHero
        location="Marina"
        service="Kitchen Design & Cabinetry"
        description="Serving Marina's coastal community with luxury custom kitchens and bespoke cabinetry that celebrate the beach access, coastal beauty, and relaxed lifestyle of this charming Monterey Bay destination."
        imageSrc="service-areas/marina-kitchen-hero.webp"
        imageAlt="Luxury custom kitchen in Marina home with coastal design and beach access"
      />

      {/* Marina Kitchen Services Overview */}
      <ContentSection background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Marina Kitchen Excellence"
              description="Marina represents the perfect blend of coastal living and community charm. This beloved Monterey Bay community attracts discerning homeowners who appreciate both the beach access and the relaxed coastal lifestyle. Our Marina kitchen clients understand that true elegance lies in creating spaces that reflect the community's coastal character while providing the functionality and comfort that modern living demands."
            />
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              From charming beach cottages to modern coastal homes, Marina's diverse residential landscape demands custom kitchen solutions that seamlessly blend coastal charm with contemporary functionality and uncompromising quality. The community's proximity to the beach, the coastal dunes, and the relaxed setting creates unique opportunities for kitchen designs that celebrate both indoor and outdoor living while maintaining the highest standards of luxury and sophistication.
            </p>
            <Grid columns={2} gap="md">
              <Card>
                <h3 className="font-semibold text-charcoal mb-2">Kitchen Projects</h3>
                <p className="text-2xl font-bold text-brass">130+</p>
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
              src="/images/service-areas/marina-kitchen-overview.webp"
              alt="Luxury custom kitchen in Marina home with coastal design and beach access"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </ContentSection>

      {/* Kitchen Services */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Kitchen Services for Marina"
          description="Our comprehensive kitchen design and construction services are tailored to meet the unique needs of Marina's diverse architectural styles and coastal lifestyle."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchens</h3>
            <p className="text-charcoal/70 mb-4">
              Complete custom kitchen transformation from design to completion, tailored to your Marina home's unique character and coastal lifestyle.
            </p>
            <Link href="/service-areas/monterey-bay/marina/custom-kitchen" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinets</h3>
            <p className="text-charcoal/70 mb-4">
              Bespoke cabinetry solutions that combine coastal charm with luxury functionality for your Marina home.
            </p>
            <Link href="/service-areas/monterey-bay/marina/kitchen-cabinets" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Design</h3>
            <p className="text-charcoal/70 mb-4">
              Professional kitchen design consultation and planning services for your Marina home renovation.
            </p>
            <Link href="/service-areas/monterey-bay/marina/kitchen-design" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Remodel</h3>
            <p className="text-charcoal/70 mb-4">
              Complete kitchen remodeling services that transform your Marina home while preserving its coastal character.
            </p>
            <Link href="/service-areas/monterey-bay/marina/kitchen-remodel" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>
        </Grid>
      </ContentSection>

      {/* Marina Kitchen Process */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Our Kitchen Design Process"
          description="Our proven kitchen design process ensures your Marina project exceeds expectations and perfectly reflects your vision while respecting the coastal character of your home."
          centered
          className="mb-16"
        />

        <Grid columns={4} gap="lg">
          <Feature
            icon={<span className="text-2xl font-bold text-brass">1</span>}
            title="Coastal Consultation"
            description="Comprehensive consultation to understand your vision, needs, and budget for your Marina kitchen project, with special attention to coastal lifestyle requirements."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">2</span>}
            title="Design Development"
            description="Creation of detailed design plans and 3D renderings for your Marina kitchen project, incorporating your preferences while respecting the home's coastal character."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">3</span>}
            title="Construction"
            description="Professional construction and installation of your approved Marina kitchen design, with careful attention to coastal preservation and quality craftsmanship."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">4</span>}
            title="Final Walkthrough"
            description="Comprehensive final walkthrough and project completion for your Marina kitchen project, ensuring everything meets our high standards and coastal requirements."
          />
        </Grid>
      </ContentSection>

      {/* Marina Kitchen Philosophy */}
      <ContentSection background="charcoal" padding="xl" className="text-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Designed for Marina Living"
              description="Marina's unique coastal character and beach environment creates distinct requirements for kitchen projects. Our approach honors the community's beach heritage while delivering the functionality and elegance that modern living demands."
              className="text-ivory"
            />
            <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
              From morning coffee with ocean views to evening entertaining that celebrates the community's coastal spirit, every kitchen decision reflects an understanding of how Marina residents truly live and enjoy their beach town lifestyle. The community's proximity to the ocean, the coastal dunes, and the relaxed setting creates unique opportunities for kitchen designs that celebrate both indoor and outdoor living while maintaining the highest standards of luxury and sophistication.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Coastal Integration</h3>
              <p className="text-ivory/80">Kitchen designs that celebrate Marina's coastal heritage while providing modern functionality and beach sophistication.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Beach Adaptation</h3>
              <p className="text-ivory/80">Custom solutions that work with Marina's unique beach environment and coastal architectural styles.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Relaxed Elegance</h3>
              <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste and coastal lifestyle of Marina residents.</p>
            </Card>
          </div>
        </div>
      </ContentSection>

      {/* Featured Kitchen Projects */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Featured Marina Kitchen Projects"
          description="Explore our portfolio of kitchen projects throughout Marina's most charming coastal neighborhoods, showcasing our ability to work with various architectural styles while preserving coastal character."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/marina-kitchen-1.webp"
              alt="Luxury custom kitchen in Marina home with beach views"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Beach Views</h3>
              <p className="text-charcoal/70 mb-4">Luxury kitchen with stunning beach views that celebrates Marina's coastal heritage and relaxed beach town charm.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Beach Views</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Coastal Heritage</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/marina-kitchen-2.webp"
              alt="Coastal kitchen in Marina home with beach town design"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Coastal Charm</h3>
              <p className="text-charcoal/70 mb-4">Kitchen design that showcases Marina's coastal charm with beach access and relaxed sophistication.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Coastal Charm</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Beach Access</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/marina-kitchen-3.webp"
              alt="Modern kitchen in Marina home with contemporary coastal design"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Modern Coastal</h3>
              <p className="text-charcoal/70 mb-4">Contemporary kitchen that seamlessly blends modern functionality with Marina's coastal aesthetic and beach town charm.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Modern Design</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Coastal Aesthetic</span>
              </div>
            </div>
          </Card>
        </Grid>
      </ContentSection>

      {/* Marina Kitchen Materials */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Premium Materials for Marina Kitchens"
          description="We use only the finest materials and finishes to ensure your Marina kitchen stands the test of time while maintaining its beauty and functionality in the coastal environment."
          centered
          className="mb-16"
        />

        <Grid columns={2} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Coastal Hardwood Cabinetry</h3>
            <p className="text-charcoal/70 mb-4">
              Custom hardwood cabinetry crafted from premium woods that complement Marina's coastal character. Each piece is hand-finished to perfection and built to last for generations while respecting the home's beach heritage.
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
              Beautiful natural stone countertops including granite, marble, and quartz that add elegance and durability to your Marina kitchen while complementing the coastal character.
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
              High-end appliances from leading manufacturers that combine performance with style, perfectly integrated into your custom kitchen design while respecting the coastal character of your Marina home.
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
              Hand-selected hardware and fixtures that add the perfect finishing touches to your Marina kitchen, from cabinet pulls to faucets and lighting, all designed to complement the coastal aesthetic.
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
          description="Special features and design elements that make Marina kitchens unique and perfectly suited to the coastal lifestyle."
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
              Beautiful coastal color palettes inspired by the ocean, sand, and sky that create a sense of calm and relaxation in your Marina kitchen.
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
              Spacious entertaining areas designed for hosting beach parties, casual gatherings, and social events that are central to Marina's coastal culture.
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
          title="Marina Kitchen FAQ"
          description="Common questions about kitchen services in Marina"
          centered
          className="mb-16"
        />

        <div className="space-y-8">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a kitchen project take in Marina?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              A complete kitchen project in Marina typically takes 6-12 weeks from start to finish, depending on the scope of work and coastal requirements. This includes 2-3 weeks for design and planning, 1-2 weeks for permits and preparation, 4-6 weeks for construction and installation, and 1-2 weeks for finishing and cleanup. We work efficiently to minimize disruption to your coastal lifestyle while ensuring the highest quality results and beach standards.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do I need permits for my Marina kitchen project?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Most kitchen projects in Marina require permits, especially if you're making structural changes, moving electrical or plumbing, or making modifications that affect the home's systems. We handle all permit applications and inspections as part of our comprehensive service, ensuring your project meets all local building codes and regulations. This is particularly important in Marina due to the coastal character of many homes and the beach environment.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle coastal requirements in Marina?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              We take special care to meet the coastal requirements of Marina homes while maintaining functionality. This includes working with coastal materials, selecting finishes that complement the home's architectural style, and ensuring the highest standards of craftsmanship. We're experienced in working with various coastal styles and can help you create a kitchen that honors the home's beach heritage while meeting modern luxury needs.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Can you work with my home's coastal character?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Absolutely! We love working with Marina's coastal homes and are experienced in preserving their character while modernizing functionality. Whether you have a beach cottage, modern coastal home, or any other coastal style, we work closely with you to create a kitchen that respects the home's beach heritage while providing the modern luxury amenities you need. We can help you navigate any coastal requirements and ensure your project enhances rather than detracts from the home's coastal value.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">What makes your Marina kitchen projects special?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Our Marina kitchen projects are special because we understand the unique character of this coastal community. We work with a wide range of architectural styles, from beach cottages to modern coastal homes, and we're experienced in incorporating coastal elements and beach sophistication into our designs. Our attention to detail, commitment to quality, and understanding of coastal living create kitchens that are both beautiful and functional, perfectly suited to the Marina lifestyle.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do you offer eco-friendly options for Marina kitchens?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Yes, we offer a wide range of eco-friendly options that are perfect for Marina's environmentally conscious community. This includes sustainable materials, energy-efficient appliances, low-VOC finishes, and water-saving fixtures. We can help you create a kitchen that not only looks beautiful but also aligns with your environmental values and contributes to a more sustainable future, all while maintaining the coastal character of your home.
            </p>
          </Card>
        </div>
      </ContentSection>
    </ServiceAreaPageLayout>
  )
}
