import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'All Service Areas | Custom Kitchen Design California | PineWood Cabinets',
  description: 'Complete list of all California cities and regions where PineWood Cabinets provides custom kitchen design, bespoke cabinetry, and luxury millwork services.',
  keywords: [
    'custom kitchen California',
    'kitchen design all cities',
    'luxury cabinetry California',
    'bespoke millwork California',
    'kitchen remodel California',
    'custom cabinets California'
  ],
  openGraph: {
    title: 'All Service Areas | Custom Kitchen Design California',
    description: 'Complete list of all California cities and regions where PineWood Cabinets provides custom kitchen design services.',
    type: 'website',
  },
}

const cities = [
  // Los Angeles Area
  { name: 'Beverly Hills', region: 'Los Angeles', href: '/service-areas/beverly-hills' },
  { name: 'Malibu', region: 'Los Angeles', href: '/service-areas/malibu' },
  { name: 'Bel Air', region: 'Los Angeles', href: '/service-areas/bel-air' },
  { name: 'Brentwood', region: 'Los Angeles', href: '/service-areas/brentwood' },
  { name: 'Calabasas', region: 'Los Angeles', href: '/service-areas/calabasas' },
  { name: 'Century City', region: 'Los Angeles', href: '/service-areas/century-city' },
  { name: 'Encino', region: 'Los Angeles', href: '/service-areas/encino' },
  { name: 'Hollywood Hills', region: 'Los Angeles', href: '/service-areas/hollywood-hills' },
  { name: 'Manhattan Beach', region: 'Los Angeles', href: '/service-areas/manhattan-beach' },
  { name: 'Newport Beach', region: 'Los Angeles', href: '/service-areas/newport-beach' },
  { name: 'Palos Verdes Estates', region: 'Los Angeles', href: '/service-areas/palos-verdes-estates' },
  { name: 'Pasadena', region: 'Los Angeles', href: '/service-areas/pasadena' },
  { name: 'Santa Monica', region: 'Los Angeles', href: '/service-areas/santa-monica' },
  { name: 'Trousdale Estates', region: 'Los Angeles', href: '/service-areas/trousdale-estates' },
  { name: 'Venice', region: 'Los Angeles', href: '/service-areas/venice' },
  { name: 'West Hollywood', region: 'Los Angeles', href: '/service-areas/west-hollywood' },

  // San Francisco Bay Area
  { name: 'San Francisco', region: 'San Francisco Bay Area', href: '/service-areas/san-francisco' },
  { name: 'Pacific Heights', region: 'San Francisco Bay Area', href: '/service-areas/pacific-heights' },
  { name: 'Nob Hill', region: 'San Francisco Bay Area', href: '/service-areas/nob-hill' },
  { name: 'Marina District', region: 'San Francisco Bay Area', href: '/service-areas/marina-district' },
  { name: 'Castro District', region: 'San Francisco Bay Area', href: '/service-areas/castro-district' },
  { name: 'Richmond District', region: 'San Francisco Bay Area', href: '/service-areas/richmond-district' },
  { name: 'SOMA', region: 'San Francisco Bay Area', href: '/service-areas/soma' },
  { name: 'Mission District', region: 'San Francisco Bay Area', href: '/service-areas/mission-district' },
  { name: 'Hayes Valley', region: 'San Francisco Bay Area', href: '/service-areas/hayes-valley' },
  { name: 'Noe Valley', region: 'San Francisco Bay Area', href: '/service-areas/noe-valley' },

  // Silicon Valley
  { name: 'Palo Alto', region: 'Silicon Valley', href: '/service-areas/palo-alto' },
  { name: 'Atherton', region: 'Silicon Valley', href: '/service-areas/atherton' },
  { name: 'Los Altos', region: 'Silicon Valley', href: '/service-areas/los-altos' },
  { name: 'Los Altos Hills', region: 'Silicon Valley', href: '/service-areas/los-altos-hills' },
  { name: 'Los Gatos', region: 'Silicon Valley', href: '/service-areas/los-gatos' },
  { name: 'Menlo Park', region: 'Silicon Valley', href: '/service-areas/menlo-park' },
  { name: 'Mountain View', region: 'Silicon Valley', href: '/service-areas/mountain-view' },
  { name: 'Saratoga', region: 'Silicon Valley', href: '/service-areas/saratoga' },
  { name: 'Sunnyvale', region: 'Silicon Valley', href: '/service-areas/sunnyvale' },
  { name: 'Woodside', region: 'Silicon Valley', href: '/service-areas/woodside' },
  { name: 'Cupertino', region: 'Silicon Valley', href: '/service-areas/cupertino' },

  // Marin County
  { name: 'Mill Valley', region: 'Marin County', href: '/service-areas/mill-valley' },
  { name: 'Tiburon', region: 'Marin County', href: '/service-areas/tiburon' },
  { name: 'Belvedere', region: 'Marin County', href: '/service-areas/belvedere' },
  { name: 'Corte Madera', region: 'Marin County', href: '/service-areas/corte-madera' },
  { name: 'Sausalito', region: 'Marin County', href: '/service-areas/sausalito' },

  // East Bay
  { name: 'Oakland', region: 'East Bay', href: '/service-areas/oakland' },
  { name: 'Berkeley', region: 'East Bay', href: '/service-areas/berkeley' },
  { name: 'Alameda', region: 'East Bay', href: '/service-areas/alameda' },
  { name: 'Piedmont', region: 'East Bay', href: '/service-areas/piedmont' },
  { name: 'Alamo', region: 'East Bay', href: '/service-areas/alamo' },
  { name: 'Danville', region: 'East Bay', href: '/service-areas/danville' },
  { name: 'Dublin', region: 'East Bay', href: '/service-areas/dublin' },
  { name: 'Fremont', region: 'East Bay', href: '/service-areas/fremont' },
  { name: 'Hayward', region: 'East Bay', href: '/service-areas/hayward' },
  { name: 'Lafayette', region: 'East Bay', href: '/service-areas/lafayette' },
  { name: 'Livermore', region: 'East Bay', href: '/service-areas/livermore' },
  { name: 'Moraga', region: 'East Bay', href: '/service-areas/moraga' },
  { name: 'Newark', region: 'East Bay', href: '/service-areas/newark' },
  { name: 'Orinda', region: 'East Bay', href: '/service-areas/orinda' },
  { name: 'Pleasanton', region: 'East Bay', href: '/service-areas/pleasanton' },
  { name: 'San Leandro', region: 'East Bay', href: '/service-areas/san-leandro' },
  { name: 'San Ramon', region: 'East Bay', href: '/service-areas/san-ramon' },
  { name: 'Union City', region: 'East Bay', href: '/service-areas/union-city' },
  { name: 'Walnut Creek', region: 'East Bay', href: '/service-areas/walnut-creek' },
  { name: 'Castro Valley', region: 'East Bay', href: '/service-areas/castro-valley' },

  // Peninsula
  { name: 'Burlingame', region: 'Peninsula', href: '/service-areas/burlingame' },
  { name: 'Foster City', region: 'Peninsula', href: '/service-areas/foster-city' },
  { name: 'Hillsborough', region: 'Peninsula', href: '/service-areas/hillsborough' },
  { name: 'Redwood City', region: 'Peninsula', href: '/service-areas/redwood-city' },
  { name: 'San Mateo', region: 'Peninsula', href: '/service-areas/san-mateo' },

  // Central Coast
  { name: 'Santa Barbara', region: 'Central Coast', href: '/service-areas/santa-barbara' },
  { name: 'Montecito', region: 'Central Coast', href: '/service-areas/montecito' },
  { name: 'Monterey', region: 'Central Coast', href: '/service-areas/monterey' },
  { name: 'Carmel', region: 'Central Coast', href: '/service-areas/carmel' },
  { name: 'Carmel by the Sea', region: 'Central Coast', href: '/service-areas/carmel-by-the-sea' },
  { name: 'Big Sur', region: 'Central Coast', href: '/service-areas/big-sur' },

  // San Diego County
  { name: 'La Jolla', region: 'San Diego County', href: '/service-areas/la-jolla' },
  { name: 'Carlsbad', region: 'San Diego County', href: '/service-areas/carlsbad' },
  { name: 'Del Mar', region: 'San Diego County', href: '/service-areas/del-mar' },
  { name: 'Encinitas', region: 'San Diego County', href: '/service-areas/encinitas' },
  { name: 'Rancho Santa Fe', region: 'San Diego County', href: '/service-areas/rancho-santa-fe' },
  { name: 'Solana Beach', region: 'San Diego County', href: '/service-areas/solana-beach' },

  // Orange County
  { name: 'Irvine', region: 'Orange County', href: '/service-areas/irvine' },
  { name: 'Anaheim', region: 'Orange County', href: '/service-areas/anaheim' },
  { name: 'Santa Ana', region: 'Orange County', href: '/service-areas/santa-ana' },

  // Sacramento Area
  { name: 'Sacramento', region: 'Sacramento Area', href: '/service-areas/sacramento' },
  { name: 'Auburn', region: 'Sacramento Area', href: '/service-areas/auburn' },
  { name: 'El Dorado Hills', region: 'Sacramento Area', href: '/service-areas/el-dorado-hills' },
  { name: 'Grass Valley', region: 'Sacramento Area', href: '/service-areas/grass-valley' },
  { name: 'Loomis', region: 'Sacramento Area', href: '/service-areas/loomis' },
  { name: 'Nevada City', region: 'Sacramento Area', href: '/service-areas/nevada-city' },
  { name: 'Newcastle', region: 'Sacramento Area', href: '/service-areas/newcastle' },
  { name: 'Roseville', region: 'Sacramento Area', href: '/service-areas/roseville' },

  // Lake Tahoe
  { name: 'South Lake Tahoe', region: 'Lake Tahoe', href: '/service-areas/south-lake-tahoe' },
  { name: 'Tahoe City', region: 'Lake Tahoe', href: '/service-areas/tahoe-city' },
  { name: 'Incline Village', region: 'Lake Tahoe', href: '/service-areas/incline-village' },
  { name: 'Carnelian Bay', region: 'Lake Tahoe', href: '/service-areas/carnelian-bay' },
  { name: 'Crystal Bay', region: 'Lake Tahoe', href: '/service-areas/crystal-bay' },
  { name: 'Emerald Bay', region: 'Lake Tahoe', href: '/service-areas/emerald-bay' },
  { name: 'Homewood', region: 'Lake Tahoe', href: '/service-areas/homewood' },
  { name: 'Kings Beach', region: 'Lake Tahoe', href: '/service-areas/kings-beach' },
  { name: 'Meeks Bay', region: 'Lake Tahoe', href: '/service-areas/meeks-bay' },
  { name: 'Rubicon Bay', region: 'Lake Tahoe', href: '/service-areas/rubicon-bay' },
  { name: 'Tahoe Vista', region: 'Lake Tahoe', href: '/service-areas/tahoe-vista' },
  { name: 'Tahoma', region: 'Lake Tahoe', href: '/service-areas/tahoma' },

  // Wine Country
  { name: 'Napa Valley', region: 'Wine Country', href: '/service-areas/napa-valley' },
  { name: 'Sonoma County', region: 'Wine Country', href: '/service-areas/sonoma-county' },
  { name: 'Healdsburg', region: 'Wine Country', href: '/service-areas/healdsburg' },
  { name: 'Petaluma', region: 'Wine Country', href: '/service-areas/petaluma' },

  // Other Areas
  { name: 'Truckee', region: 'Sierra Nevada', href: '/service-areas/truckee' },
  { name: 'Palm Springs', region: 'Desert', href: '/service-areas/palm-springs' },
  { name: 'Bakersfield', region: 'Central Valley', href: '/service-areas/bakersfield' },
  { name: 'Fresno', region: 'Central Valley', href: '/service-areas/fresno' },
  { name: 'Riverside', region: 'Inland Empire', href: '/service-areas/riverside' },
  { name: 'Stockton', region: 'Central Valley', href: '/service-areas/stockton' },
]

export default function AllCitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">Custom Kitchens in all-cities | Luxury Cabinetry</h1>
            <p className="text-xl text-ivory/90 max-w-3xl mx-auto">
              PineWood Cabinets serves California's most prestigious communities with museum-grade custom kitchen design, bespoke cabinetry, and architectural millwork.
            </p>
          </div>
        </div>
      </section>

      {/* Cities by Region */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in all-cities</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From Beverly Hills to Big Sur, we provide luxury kitchen design services throughout California's most exclusive communities.
            </p>
          </div>

          {/* Group cities by region */}
          {Object.entries(
            cities.reduce((acc, city) => {
              if (!acc[city.region]) acc[city.region] = []
              acc[city.region].push(city)
              return acc
            }, {} as Record<string, typeof cities>)
          ).map(([region, regionCities]) => (
            <div key={region} className="mb-16">
              <h3 className="text-2xl font-bold text-charcoal mb-8 border-b border-french-gray/20 pb-4">
                {region}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {regionCities.map((city) => (
                  <Link
                    key={city.name}
                    href={city.href}
                    className="group p-4 rounded-lg border border-french-gray/20 hover:border-brass/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="text-charcoal group-hover:text-brass transition-colors duration-300">
                      <h4 className="font-semibold text-lg mb-1">{city.name}</h4>
                      <p className="text-sm text-charcoal/70">Custom Kitchen Design</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in all-cities</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Each city offers our complete range of luxury kitchen and cabinetry services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchen</h3>
              <p className="text-charcoal/70 mb-4">Museum-grade custom kitchen design and cabinetry</p>
              <Link href="/services/custom-kitchens" className="text-brass hover:text-brass/80 font-medium">
                Learn More →
              </Link>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Design</h3>
              <p className="text-charcoal/70 mb-4">Professional kitchen design and space planning</p>
              <Link href="/services/kitchen-design-consultation" className="text-brass hover:text-brass/80 font-medium">
                Learn More →
              </Link>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinets</h3>
              <p className="text-charcoal/70 mb-4">Custom cabinet design and installation</p>
              <Link href="/services/custom-kitchens" className="text-brass hover:text-brass/80 font-medium">
                Learn More →
              </Link>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Remodel</h3>
              <p className="text-charcoal/70 mb-4">Complete kitchen renovation and remodeling</p>
              <Link href="/services/kitchen-remodeling" className="text-brass hover:text-brass/80 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
