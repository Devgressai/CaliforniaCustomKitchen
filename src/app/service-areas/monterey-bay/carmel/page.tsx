import { Metadata } from 'next'
import { ServiceAreaPageLayout } from '@/components/PageLayout'
import { ServiceAreaHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature } from '@/components/ContentSection'
import { generateServiceSchema } from '@/components/StructuredData'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens Carmel | Kitchen Design & Cabinetry | PineWood Cabinets',
  description: 'Luxury custom kitchens and bespoke cabinetry for Carmel homes. Expert kitchen design and construction serving Carmel-by-the-Sea and Monterey Bay area.',
  keywords: [
    'custom kitchens carmel',
    'kitchen design carmel',
    'cabinetry carmel',
    'carmel by the sea kitchens',
    'monterey bay kitchen design',
    'luxury kitchens carmel',
    'custom cabinetry carmel'
  ],
  openGraph: {
    title: 'Custom Kitchens Carmel | Kitchen Design & Cabinetry | PineWood Cabinets',
    description: 'Luxury custom kitchens and bespoke cabinetry for Carmel homes in Monterey Bay.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Carmel",
  "Luxury custom kitchens and bespoke cabinetry for Carmel homes in Monterey Bay",
  "Kitchen Design & Cabinetry",
  ["Carmel, CA", "Carmel-by-the-Sea, CA", "Monterey Bay, CA"]
)

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Monterey Bay', href: '/service-areas/monterey-bay' },
  { name: 'Carmel', href: '/service-areas/monterey-bay/carmel' }
]

export default function CarmelPage() {
  return (
    <ServiceAreaPageLayout
      location="Carmel"
      service="Kitchen Design & Cabinetry"
      structuredData={{ service: serviceSchema }}
    >
      <Breadcrumbs items={breadcrumbs} />
      
      <ServiceAreaHero
        location="Carmel"
        service="Kitchen Design & Cabinetry"
        description="Serving Carmel's distinguished homeowners with luxury custom kitchens and bespoke cabinetry that reflect the artistic heritage and coastal elegance of this iconic Monterey Bay community."
        imageSrc="service-areas/carmel-kitchen-hero.webp"
        imageAlt="Luxury custom kitchen in Carmel home with artistic design and coastal elegance"
      />

      {/* Carmel Kitchen Services Overview */}
      <ContentSection background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Carmel Kitchen Excellence"
              description="Carmel-by-the-Sea represents the pinnacle of artistic sophistication and coastal luxury. This world-renowned community attracts discerning homeowners who appreciate both natural beauty and refined craftsmanship. Our Carmel kitchen clients understand that true elegance lies in creating spaces that honor both the community's artistic heritage and their own sophisticated lifestyle."
            />
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              From the charming cottages of Carmel-by-the-Sea to the grand estates overlooking the Pacific, Carmel's diverse residential landscape demands custom kitchen solutions that seamlessly blend artistic heritage with luxury functionality and uncompromising quality.
            </p>
            <Grid columns={2} gap="md">
              <Card>
                <h3 className="font-semibold text-charcoal mb-2">Kitchen Projects</h3>
                <p className="text-2xl font-bold text-brass">200+</p>
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
              src="/images/service-areas/carmel-kitchen-overview.webp"
              alt="Luxury custom kitchen in Carmel home with artistic design and coastal elegance"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </ContentSection>

      {/* Kitchen Services */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Kitchen Services for Carmel"
          description="Our comprehensive kitchen design and construction services are tailored to meet the unique needs of Carmel's diverse architectural styles and artistic community."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchens</h3>
            <p className="text-charcoal/70 mb-4">
              Complete custom kitchen transformation from design to completion, tailored to your Carmel home's unique character and artistic vision.
            </p>
            <Link href="/service-areas/monterey-bay/carmel/custom-kitchen" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinets</h3>
            <p className="text-charcoal/70 mb-4">
              Bespoke cabinetry solutions that combine artistic design with luxury functionality for your Carmel home.
            </p>
            <Link href="/service-areas/monterey-bay/carmel/kitchen-cabinets" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Design</h3>
            <p className="text-charcoal/70 mb-4">
              Professional kitchen design consultation and planning services for your Carmel home renovation.
            </p>
            <Link href="/service-areas/monterey-bay/carmel/kitchen-design" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Remodel</h3>
            <p className="text-charcoal/70 mb-4">
              Complete kitchen remodeling services that transform your Carmel home while preserving its artistic character.
            </p>
            <Link href="/service-areas/monterey-bay/carmel/kitchen-remodel" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>
        </Grid>
      </ContentSection>

      {/* Carmel Kitchen Philosophy */}
      <ContentSection background="charcoal" padding="xl" className="text-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Designed for Carmel Living"
              description="Carmel's unique artistic heritage and coastal environment creates distinct requirements for kitchen projects. Our approach honors the community's character while delivering the functionality and elegance modern residents demand."
              className="text-ivory"
            />
            <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
              From morning coffee in a charming cottage to evening entertaining in a grand estate, every kitchen decision reflects an understanding of how Carmel residents truly live and enjoy their artistic coastal lifestyle.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Artistic Integration</h3>
              <p className="text-ivory/80">Kitchen designs that celebrate Carmel's artistic heritage while providing modern functionality and luxury.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Coastal Adaptation</h3>
              <p className="text-ivory/80">Custom solutions that work with Carmel's unique coastal environment and architectural character.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Luxury Functionality</h3>
              <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of Carmel residents.</p>
            </Card>
          </div>
        </div>
      </ContentSection>
    </ServiceAreaPageLayout>
  )
}
