import { Metadata } from 'next'
import { ServiceAreaPageLayout } from '@/components/PageLayout'
import { ServiceAreaHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card } from '@/components/ContentSection'
import { generateServiceSchema } from '@/components/StructuredData'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens Carmel by the Sea | Kitchen Design & Cabinetry | PineWood Cabinets',
  description: 'Luxury custom kitchens and bespoke cabinetry for Carmel-by-the-Sea homes. Expert kitchen design and construction serving this iconic Monterey Bay community.',
  keywords: [
    'custom kitchens carmel by the sea',
    'kitchen design carmel by the sea',
    'cabinetry carmel by the sea',
    'carmel by the sea kitchens',
    'monterey bay kitchen design',
    'luxury kitchens carmel by the sea'
  ],
  openGraph: {
    title: 'Custom Kitchens Carmel by the Sea | Kitchen Design & Cabinetry | PineWood Cabinets',
    description: 'Luxury custom kitchens and bespoke cabinetry for Carmel-by-the-Sea homes in Monterey Bay.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Carmel by the Sea",
  "Luxury custom kitchens and bespoke cabinetry for Carmel-by-the-Sea homes in Monterey Bay",
  "Kitchen Design & Cabinetry",
  ["Carmel-by-the-Sea, CA", "Carmel, CA", "Monterey Bay, CA"]
)

export default function CarmelByTheSeaPage() {
  return (
    <ServiceAreaPageLayout
      location="Carmel-by-the-Sea"
      service="Kitchen Design & Cabinetry"
      structuredData={{ service: serviceSchema }}
    >
      <ServiceAreaHero
        location="Carmel-by-the-Sea"
        service="Kitchen Design & Cabinetry"
        description="Serving Carmel-by-the-Sea's distinguished homeowners with luxury custom kitchens and bespoke cabinetry that reflect the artistic heritage and coastal elegance of this iconic Monterey Bay community."
        imageSrc="service-areas/carmel-by-the-sea-kitchen-hero.webp"
        imageAlt="Luxury custom kitchen in Carmel-by-the-Sea home with artistic design and coastal elegance"
      />

      <ContentSection background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Carmel-by-the-Sea Kitchen Excellence"
              description="Carmel-by-the-Sea represents the pinnacle of artistic sophistication and coastal luxury. This world-renowned community attracts discerning homeowners who appreciate both natural beauty and refined craftsmanship."
            />
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              From the charming cottages to the grand estates overlooking the Pacific, Carmel-by-the-Sea's diverse residential landscape demands custom kitchen solutions that seamlessly blend artistic heritage with luxury functionality.
            </p>
          </div>
          <div className="relative">
            <img
              src="/images/service-areas/carmel-by-the-sea-kitchen-overview.webp"
              alt="Luxury custom kitchen in Carmel-by-the-Sea home"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </ContentSection>

      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Kitchen Services for Carmel-by-the-Sea"
          description="Our comprehensive kitchen design and construction services are tailored to meet the unique needs of Carmel-by-the-Sea's diverse architectural styles."
          centered
          className="mb-16"
        />

        <Grid columns={2} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchens</h3>
            <p className="text-charcoal/70 mb-4">
              Complete custom kitchen transformation tailored to your Carmel-by-the-Sea home's unique character.
            </p>
            <Link href="/service-areas/monterey-bay/carmel-by-the-sea/custom-kitchen" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinets</h3>
            <p className="text-charcoal/70 mb-4">
              Bespoke cabinetry solutions that combine artistic design with luxury functionality.
            </p>
            <Link href="/service-areas/monterey-bay/carmel-by-the-sea/kitchen-cabinets" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Design</h3>
            <p className="text-charcoal/70 mb-4">
              Professional kitchen design consultation and planning services.
            </p>
            <Link href="/service-areas/monterey-bay/carmel-by-the-sea/kitchen-design" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Remodel</h3>
            <p className="text-charcoal/70 mb-4">
              Complete kitchen remodeling services that preserve your home's artistic character.
            </p>
            <Link href="/service-areas/monterey-bay/carmel-by-the-sea/kitchen-remodel" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>
        </Grid>
      </ContentSection>
    </ServiceAreaPageLayout>
  )
}
