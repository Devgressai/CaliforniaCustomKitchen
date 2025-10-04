import Link from 'next/link'

const footerNavigation = {
  services: [
    { name: 'Custom Kitchens', href: '/services/custom-kitchens' },
    { name: 'Bespoke Cabinetry', href: '/services/bespoke-cabinetry' },
    { name: 'Architectural Millwork', href: '/services/architectural-millwork' },
    { name: 'Paneling', href: '/services/paneling' },
    { name: 'Wine Rooms', href: '/services/wine-rooms' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Process', href: '/process' },
    { name: 'Materials', href: '/materials' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Journal', href: '/journal' },
    { name: 'Service Areas', href: '/service-areas' },
  ],
  serviceAreas: {
    'San Francisco Bay Area': [
      { name: 'San Francisco', href: '/service-areas/san-francisco' },
      { name: 'Pacific Heights', href: '/service-areas/san-francisco/pacific-heights' },
      { name: 'Nob Hill', href: '/service-areas/san-francisco/nob-hill' },
      { name: 'Marina District', href: '/service-areas/san-francisco/marina-district' },
      { name: 'Castro District', href: '/service-areas/san-francisco/castro-district' },
      { name: 'Richmond District', href: '/service-areas/san-francisco/richmond-district' },
      { name: 'SOMA', href: '/service-areas/san-francisco/soma' },
      { name: 'Mission District', href: '/service-areas/san-francisco/mission-district' },
      { name: 'Hayes Valley', href: '/service-areas/san-francisco/hayes-valley' },
      { name: 'Noe Valley', href: '/service-areas/san-francisco/noe-valley' },
    ],
    'Silicon Valley': [
      { name: 'Silicon Valley', href: '/service-areas/silicon-valley' },
      { name: 'Atherton', href: '/service-areas/silicon-valley/atherton' },
      { name: 'Palo Alto', href: '/service-areas/silicon-valley/palo-alto' },
      { name: 'Menlo Park', href: '/service-areas/silicon-valley/menlo-park' },
      { name: 'Los Gatos', href: '/service-areas/silicon-valley/los-gatos' },
      { name: 'Saratoga', href: '/service-areas/silicon-valley/saratoga' },
      { name: 'Cupertino', href: '/service-areas/silicon-valley/cupertino' },
      { name: 'Sunnyvale', href: '/service-areas/silicon-valley/sunnyvale' },
      { name: 'Mountain View', href: '/service-areas/silicon-valley/mountain-view' },
      { name: 'Los Altos', href: '/service-areas/silicon-valley/los-altos' },
      { name: 'Los Altos Hills', href: '/service-areas/silicon-valley/los-altos-hills' },
      { name: 'Woodside', href: '/service-areas/silicon-valley/woodside' },
    ],
    'Marin County': [
      { name: 'Marin County', href: '/service-areas/marin-county' },
      { name: 'Sausalito', href: '/service-areas/marin-county/sausalito' },
      { name: 'Mill Valley', href: '/service-areas/marin-county/mill-valley' },
      { name: 'Tiburon', href: '/service-areas/marin-county/tiburon' },
      { name: 'Belvedere', href: '/service-areas/marin-county/belvedere' },
      { name: 'Corte Madera', href: '/service-areas/marin-county/corte-madera' },
      { name: 'Larkspur', href: '/service-areas/marin-county/larkspur' },
      { name: 'Ross', href: '/service-areas/marin-county/ross' },
      { name: 'Kentfield', href: '/service-areas/marin-county/kentfield' },
      { name: 'Greenbrae', href: '/service-areas/marin-county/greenbrae' },
    ],
    'East Bay': [
      { name: 'Oakland', href: '/service-areas/oakland' },
      { name: 'Berkeley', href: '/service-areas/berkeley' },
      { name: 'Piedmont', href: '/service-areas/piedmont' },
      { name: 'Orinda', href: '/service-areas/orinda' },
      { name: 'Lafayette', href: '/service-areas/lafayette' },
      { name: 'Moraga', href: '/service-areas/moraga' },
      { name: 'Walnut Creek', href: '/service-areas/walnut-creek' },
      { name: 'Danville', href: '/service-areas/danville' },
      { name: 'Alamo', href: '/service-areas/alamo' },
      { name: 'San Ramon', href: '/service-areas/san-ramon' },
    ],
    'Peninsula': [
      { name: 'Hillsborough', href: '/service-areas/hillsborough' },
      { name: 'Burlingame', href: '/service-areas/burlingame' },
      { name: 'San Mateo', href: '/service-areas/san-mateo' },
      { name: 'Foster City', href: '/service-areas/foster-city' },
      { name: 'Redwood City', href: '/service-areas/redwood-city' },
      { name: 'San Carlos', href: '/service-areas/san-carlos' },
      { name: 'Belmont', href: '/service-areas/belmont' },
      { name: 'Half Moon Bay', href: '/service-areas/half-moon-bay' },
    ],
    'North Bay': [
      { name: 'Napa Valley', href: '/service-areas/napa-valley' },
      { name: 'Sonoma County', href: '/service-areas/sonoma-county' },
      { name: 'Healdsburg', href: '/service-areas/healdsburg' },
      { name: 'Petaluma', href: '/service-areas/petaluma' },
      { name: 'Santa Rosa', href: '/service-areas/santa-rosa' },
      { name: 'Windsor', href: '/service-areas/windsor' },
      { name: 'Calistoga', href: '/service-areas/calistoga' },
      { name: 'St. Helena', href: '/service-areas/st-helena' },
    ],
    'Sacramento Area': [
      { name: 'Sacramento', href: '/service-areas/sacramento' },
      { name: 'Auburn', href: '/service-areas/sacramento/auburn' },
      { name: 'El Dorado Hills', href: '/service-areas/sacramento/el-dorado-hills' },
      { name: 'Grass Valley', href: '/service-areas/sacramento/grass-valley' },
      { name: 'Loomis', href: '/service-areas/sacramento/loomis' },
      { name: 'Nevada City', href: '/service-areas/sacramento/nevada-city' },
      { name: 'Newcastle', href: '/service-areas/sacramento/newcastle' },
      { name: 'Roseville', href: '/service-areas/sacramento/roseville' },
      { name: 'Truckee', href: '/service-areas/truckee' },
    ],
    'Lake Tahoe': [
      { name: 'Lake Tahoe', href: '/service-areas/lake-tahoe' },
      { name: 'Carnelian Bay', href: '/service-areas/lake-tahoe/carnelian-bay' },
      { name: 'Crystal Bay', href: '/service-areas/lake-tahoe/crystal-bay' },
      { name: 'Emerald Bay', href: '/service-areas/lake-tahoe/emerald-bay' },
      { name: 'Homewood', href: '/service-areas/lake-tahoe/homewood' },
      { name: 'Incline Village', href: '/service-areas/lake-tahoe/incline-village' },
      { name: 'Kings Beach', href: '/service-areas/lake-tahoe/kings-beach' },
      { name: 'Meeks Bay', href: '/service-areas/lake-tahoe/meeks-bay' },
      { name: 'Rubicon Bay', href: '/service-areas/lake-tahoe/rubicon-bay' },
      { name: 'South Lake Tahoe', href: '/service-areas/lake-tahoe/south-lake-tahoe' },
      { name: 'Tahoe City', href: '/service-areas/lake-tahoe/tahoe-city' },
      { name: 'Tahoe Vista', href: '/service-areas/lake-tahoe/tahoe-vista' },
      { name: 'Tahoma', href: '/service-areas/lake-tahoe/tahoma' },
    ],
    'Monterey Bay': [
      { name: 'Carmel', href: '/service-areas/monterey-bay/carmel' },
      { name: 'Carmel by the Sea', href: '/service-areas/monterey-bay/carmel-by-the-sea' },
      { name: 'Big Sur', href: '/service-areas/monterey-bay/big-sur' },
      { name: 'Seaside', href: '/service-areas/monterey-bay/seaside' },
      { name: 'Santa Cruz', href: '/service-areas/monterey-bay/santa-cruz' },
      { name: 'Monterey', href: '/service-areas/monterey-bay/monterey' },
      { name: 'Pacific Grove', href: '/service-areas/monterey-bay/pacific-grove' },
      { name: 'Pebble Beach', href: '/service-areas/monterey-bay/pebble-beach' },
      { name: 'Carmel Valley', href: '/service-areas/monterey-bay/carmel-valley' },
      { name: 'Capitola', href: '/service-areas/monterey-bay/capitola' },
      { name: 'Aptos', href: '/service-areas/monterey-bay/aptos' },
      { name: 'Marina', href: '/service-areas/monterey-bay/marina' },
      { name: 'Del Rey Oaks', href: '/service-areas/monterey-bay/del-rey-oaks' },
      { name: 'Scotts Valley', href: '/service-areas/monterey-bay/scotts-valley' },
      { name: 'Soquel', href: '/service-areas/monterey-bay/soquel' },
      { name: 'La Selva Beach', href: '/service-areas/monterey-bay/la-selva-beach' },
    ],
    'Central California': [
      { name: 'Central Coast', href: '/service-areas/central-coast' },
      { name: 'Santa Barbara', href: '/service-areas/santa-barbara' },
      { name: 'Montecito', href: '/service-areas/santa-barbara/montecito' },
    ],
    'Southern California': [
      { name: 'Los Angeles', href: '/service-areas/los-angeles' },
      { name: 'Beverly Hills', href: '/service-areas/los-angeles/beverly-hills' },
      { name: 'Bel Air', href: '/service-areas/los-angeles/bel-air' },
      { name: 'Brentwood', href: '/service-areas/los-angeles/brentwood' },
      { name: 'Calabasas', href: '/service-areas/los-angeles/calabasas' },
      { name: 'Hollywood Hills', href: '/service-areas/los-angeles/hollywood-hills' },
      { name: 'Malibu', href: '/service-areas/los-angeles/malibu' },
      { name: 'Manhattan Beach', href: '/service-areas/los-angeles/manhattan-beach' },
      { name: 'Newport Beach', href: '/service-areas/los-angeles/newport-beach' },
      { name: 'Pasadena', href: '/service-areas/los-angeles/pasadena' },
      { name: 'Orange County', href: '/service-areas/orange-county' },
      { name: 'San Diego County', href: '/service-areas/san-diego-county' },
      { name: 'La Jolla', href: '/service-areas/la-jolla' },
      { name: 'Palm Springs', href: '/service-areas/palm-springs' },
    ],
  },
}

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-bold">PineWood Cabinets</span>
            </Link>
            <p className="mt-4 text-french-gray leading-relaxed">
              Museum-grade custom kitchens, bespoke cabinetry, and architectural millwork 
              for California's finest homes since 2006.
            </p>
            <div className="mt-6">
              <p className="text-sm text-french-gray mb-2">By Appointment Only</p>
              <p className="text-sm text-french-gray">Serving California's Premier Communities</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-french-gray hover:text-ivory transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-french-gray hover:text-ivory transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas - San Francisco Bay Area */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">San Francisco Bay Area</h3>
            <ul className="space-y-2">
              {footerNavigation.serviceAreas['San Francisco Bay Area'].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-french-gray hover:text-ivory transition-colors duration-200 text-xs"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas - Silicon Valley */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Silicon Valley</h3>
            <ul className="space-y-2">
              {footerNavigation.serviceAreas['Silicon Valley'].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-french-gray hover:text-ivory transition-colors duration-200 text-xs"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas - Marin County */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Marin County</h3>
            <ul className="space-y-2">
              {footerNavigation.serviceAreas['Marin County'].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-french-gray hover:text-ivory transition-colors duration-200 text-xs"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas - East Bay */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">East Bay</h3>
            <ul className="space-y-2">
              {footerNavigation.serviceAreas['East Bay'].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-french-gray hover:text-ivory transition-colors duration-200 text-xs"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas - Peninsula */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Peninsula</h3>
            <ul className="space-y-2">
              {footerNavigation.serviceAreas['Peninsula'].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-french-gray hover:text-ivory transition-colors duration-200 text-xs"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas - North Bay */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">North Bay</h3>
            <ul className="space-y-2">
              {footerNavigation.serviceAreas['North Bay'].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-french-gray hover:text-ivory transition-colors duration-200 text-xs"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas - Sacramento Area */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Sacramento Area</h3>
            <ul className="space-y-2">
              {footerNavigation.serviceAreas['Sacramento Area'].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-french-gray hover:text-ivory transition-colors duration-200 text-xs"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas - Lake Tahoe */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Lake Tahoe</h3>
            <ul className="space-y-2">
              {footerNavigation.serviceAreas['Lake Tahoe'].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-french-gray hover:text-ivory transition-colors duration-200 text-xs"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas - Monterey Bay */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Monterey Bay</h3>
            <ul className="space-y-2">
              {footerNavigation.serviceAreas['Monterey Bay'].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-french-gray hover:text-ivory transition-colors duration-200 text-xs"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-french-gray/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-french-gray">
              © {new Date().getFullYear()} PineWood Cabinets. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy" className="text-sm text-french-gray hover:text-ivory transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-french-gray hover:text-ivory transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
