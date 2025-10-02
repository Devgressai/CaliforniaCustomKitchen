import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Areas | AV\'s Cabinets - Custom Kitchen Builder California',
  description: 'Discover all the California communities we serve. From Silicon Valley to Lake Tahoe, Los Angeles to Sacramento - we provide custom kitchen and cabinetry services throughout California.',
  keywords: 'service areas, California kitchen builder, custom cabinets, Silicon Valley, Lake Tahoe, Los Angeles, Sacramento, Marin County, Napa Valley',
  openGraph: {
    title: 'Service Areas | AV\'s Cabinets - Custom Kitchen Builder California',
    description: 'Discover all the California communities we serve. From Silicon Valley to Lake Tahoe, Los Angeles to Sacramento - we provide custom kitchen and cabinetry services throughout California.',
    type: 'website',
  },
}

const serviceAreas = {
  'Northern California': [
    { name: 'Silicon Valley', href: '/service-areas/silicon-valley', description: 'Tech capital featuring luxury homes and modern design' },
    { name: 'Atherton', href: '/service-areas/silicon-valley/atherton', description: 'Most expensive zip code in America' },
    { name: 'Palo Alto', href: '/service-areas/silicon-valley/palo-alto', description: 'Historic university town with diverse architecture' },
    { name: 'Marin County', href: '/service-areas/marin-county', description: 'Natural beauty meets luxury living' },
    { name: 'Sacramento', href: '/service-areas/sacramento', description: 'Capital city with historic charm' },
    { name: 'Auburn', href: '/service-areas/sacramento/auburn', description: 'Historic gold rush town with modern amenities' },
    { name: 'El Dorado Hills', href: '/service-areas/sacramento/el-dorado-hills', description: 'Master-planned community with luxury homes' },
    { name: 'Grass Valley', href: '/service-areas/sacramento/grass-valley', description: 'Historic mining town with Victorian architecture' },
    { name: 'Loomis', href: '/service-areas/sacramento/loomis', description: 'Rural charm with equestrian properties' },
    { name: 'Nevada City', href: '/service-areas/sacramento/nevada-city', description: 'Historic gold rush town with artistic community' },
    { name: 'Newcastle', href: '/service-areas/sacramento/newcastle', description: 'Rural community with vineyard properties' },
    { name: 'Roseville', href: '/service-areas/sacramento/roseville', description: 'Growing city with diverse neighborhoods' },
    { name: 'Napa Valley', href: '/service-areas/napa-valley', description: 'Wine country luxury and vineyard estates' },
    { name: 'Sonoma County', href: '/service-areas/sonoma-county', description: 'Wine country with diverse landscapes' },
    { name: 'Truckee', href: '/service-areas/truckee', description: 'Mountain town with rustic luxury' },
    { name: 'San Francisco', href: '/service-areas/san-francisco', description: 'Historic city with diverse architecture' },
    { name: 'Pacific Heights', href: '/service-areas/san-francisco/pacific-heights', description: 'Historic neighborhood with Victorian homes' },
  ],
  'Lake Tahoe': [
    { name: 'Lake Tahoe', href: '/service-areas/lake-tahoe', description: 'Premier mountain lake destination' },
    { name: 'Carnelian Bay', href: '/service-areas/lake-tahoe/carnelian-bay', description: 'Exclusive lakefront community' },
    { name: 'Crystal Bay', href: '/service-areas/lake-tahoe/crystal-bay', description: 'Historic gaming community with lake views' },
    { name: 'Emerald Bay', href: '/service-areas/lake-tahoe/emerald-bay', description: 'Iconic bay with luxury lakefront estates' },
    { name: 'Homewood', href: '/service-areas/lake-tahoe/homewood', description: 'Ski-in/ski-out luxury mountain homes' },
    { name: 'Incline Village', href: '/service-areas/lake-tahoe/incline-village', description: 'Exclusive Nevada-side lakefront community' },
    { name: 'Kings Beach', href: '/service-areas/lake-tahoe/kings-beach', description: 'Family-friendly lakefront community' },
    { name: 'Meeks Bay', href: '/service-areas/lake-tahoe/meeks-bay', description: 'Secluded bay with luxury lakefront homes' },
    { name: 'Rubicon Bay', href: '/service-areas/lake-tahoe/rubicon-bay', description: 'Exclusive bay with pristine lakefront' },
    { name: 'South Lake Tahoe', href: '/service-areas/lake-tahoe/south-lake-tahoe', description: 'Year-round resort community' },
    { name: 'Tahoe City', href: '/service-areas/lake-tahoe/tahoe-city', description: 'Historic town with lakefront properties' },
    { name: 'Tahoe Vista', href: '/service-areas/lake-tahoe/tahoe-vista', description: 'Quiet community with lake access' },
    { name: 'Tahoma', href: '/service-areas/lake-tahoe/tahoma', description: 'Secluded community with mountain views' },
  ],
  'Central California': [
    { name: 'Central Coast', href: '/service-areas/central-coast', description: 'Stunning coastline with luxury beach homes' },
    { name: 'Pebble Beach', href: '/service-areas/central-coast/pebble-beach', description: 'Exclusive golf community with ocean views' },
    { name: 'Santa Barbara', href: '/service-areas/santa-barbara', description: 'American Riviera with Spanish architecture' },
    { name: 'Montecito', href: '/service-areas/santa-barbara/montecito', description: 'Ultra-exclusive celebrity enclave' },
  ],
  'Southern California': [
    { name: 'Los Angeles', href: '/service-areas/los-angeles', description: 'Entertainment capital with diverse luxury homes' },
    { name: 'Beverly Hills', href: '/service-areas/los-angeles/beverly-hills', description: 'Iconic luxury destination' },
    { name: 'Bel Air', href: '/service-areas/los-angeles/bel-air', description: 'Ultra-exclusive gated community' },
    { name: 'Brentwood', href: '/service-areas/los-angeles/brentwood', description: 'Prestigious neighborhood with Mediterranean homes' },
    { name: 'Calabasas', href: '/service-areas/los-angeles/calabasas', description: 'Family-friendly luxury community' },
    { name: 'Hollywood Hills', href: '/service-areas/los-angeles/hollywood-hills', description: 'Iconic hillside estates with city views' },
    { name: 'Malibu', href: '/service-areas/los-angeles/malibu', description: 'Exclusive beachfront community' },
    { name: 'Manhattan Beach', href: '/service-areas/los-angeles/manhattan-beach', description: 'Family-friendly beach community' },
    { name: 'Newport Beach', href: '/service-areas/los-angeles/newport-beach', description: 'Luxury harbor community' },
    { name: 'Pasadena', href: '/service-areas/los-angeles/pasadena', description: 'Historic city with Craftsman architecture' },
    { name: 'Orange County', href: '/service-areas/orange-county', description: 'Diverse luxury communities' },
    { name: 'San Diego County', href: '/service-areas/san-diego-county', description: 'Perfect weather with luxury coastal living' },
    { name: 'La Jolla', href: '/service-areas/la-jolla', description: 'Exclusive coastal community' },
    { name: 'Palm Springs', href: '/service-areas/palm-springs', description: 'Desert luxury with mid-century modern design' },
  ],
}

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="bg-charcoal text-ivory py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
              Service Areas
            </h1>
            <p className="text-xl text-french-gray max-w-3xl mx-auto mb-8">
              We proudly serve California's most prestigious communities with museum-grade custom kitchens, 
              bespoke cabinetry, and architectural millwork. From Silicon Valley to Lake Tahoe, 
              Los Angeles to Sacramento - discover where we create exceptional spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-deep-green hover:bg-oxblood text-ivory px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/portfolio"
                className="border border-ivory text-ivory hover:bg-ivory hover:text-charcoal px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas by Region */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {Object.entries(serviceAreas).map(([region, areas]) => (
            <div key={region} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 font-display">
                {region}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {areas.map((area) => (
                  <Link
                    key={area.name}
                    href={area.href}
                    className="block bg-white p-6 rounded-lg shadow-sm border border-french-gray/20 hover:shadow-md transition-all duration-300 group"
                  >
                    <h3 className="font-semibold text-charcoal mb-2 group-hover:text-deep-green transition-colors duration-200">
                      {area.name}
                    </h3>
                    <p className="text-sm text-charcoal/70 mb-3">
                      {area.description}
                    </p>
                    <p className="text-xs text-deep-green font-medium group-hover:text-oxblood transition-colors duration-200">
                      View Details →
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Ready to Transform Your Kitchen?
          </h2>
          <p className="text-xl text-french-gray mb-8 max-w-3xl mx-auto">
            Whether you're in Silicon Valley, Lake Tahoe, Los Angeles, or anywhere in between, 
            we're here to create the custom kitchen of your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-deep-green hover:bg-oxblood text-ivory px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Started Today
            </Link>
            <Link
              href="/process"
              className="border border-ivory text-ivory hover:bg-ivory hover:text-charcoal px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Learn Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom Kitchen and Cabinetry Services",
            "description": "Museum-grade custom kitchens, bespoke cabinetry, and architectural millwork for California's finest homes",
            "provider": {
              "@type": "Organization",
              "name": "AV's Cabinets",
              "url": "https://avscabinets.com"
            },
            "areaServed": Object.values(serviceAreas).flat().map(area => ({
              "@type": "Place",
              "name": area.name
            })),
            "serviceType": "Custom Kitchen Design and Installation"
          })
        }}
      />
    </div>
  )
}
