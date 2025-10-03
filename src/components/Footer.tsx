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
    'Central California': [
      { name: 'Central Coast', href: '/service-areas/central-coast' },
      { name: 'Pebble Beach', href: '/service-areas/central-coast/pebble-beach' },
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block">
                <span className="font-display text-3xl font-bold">PineWood Cabinets</span>
              </Link>
              <p className="mt-6 text-french-gray leading-relaxed text-lg">
                Museum-grade custom kitchens, bespoke cabinetry, and architectural millwork 
                for California's finest homes since 2006.
              </p>
              <div className="mt-8 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full"></div>
                  <p className="text-french-gray">By Appointment Only</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full"></div>
                  <p className="text-french-gray">Serving California's Premier Communities</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full"></div>
                  <p className="text-french-gray">Licensed & Insured</p>
                </div>
              </div>
            </div>

            {/* Services & Company */}
            <div className="lg:col-span-1">
              <h3 className="font-display text-xl font-semibold mb-8 text-ivory">Services</h3>
              <ul className="space-y-4">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-french-gray hover:text-ivory transition-colors duration-200 text-base hover:translate-x-1 transform transition-transform"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <h3 className="font-display text-xl font-semibold mb-8 text-ivory mt-12">Company</h3>
              <ul className="space-y-4">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-french-gray hover:text-ivory transition-colors duration-200 text-base hover:translate-x-1 transform transition-transform"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas - Primary Markets */}
            <div className="lg:col-span-2">
              <h3 className="font-display text-xl font-semibold mb-8 text-ivory">Service Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Bay Area */}
                <div>
                  <h4 className="font-semibold text-brass mb-4 text-lg">San Francisco Bay Area</h4>
                  <ul className="space-y-2">
                    {footerNavigation.serviceAreas['San Francisco Bay Area'].slice(0, 6).map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-french-gray hover:text-ivory transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform block"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/service-areas"
                        className="text-brass hover:text-ivory transition-colors duration-200 text-sm font-medium hover:translate-x-1 transform transition-transform block"
                      >
                        View All Areas →
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Silicon Valley */}
                <div>
                  <h4 className="font-semibold text-brass mb-4 text-lg">Silicon Valley</h4>
                  <ul className="space-y-2">
                    {footerNavigation.serviceAreas['Silicon Valley'].slice(0, 6).map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-french-gray hover:text-ivory transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform block"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/service-areas"
                        className="text-brass hover:text-ivory transition-colors duration-200 text-sm font-medium hover:translate-x-1 transform transition-transform block"
                      >
                        View All Areas →
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Southern California */}
                <div>
                  <h4 className="font-semibold text-brass mb-4 text-lg">Southern California</h4>
                  <ul className="space-y-2">
                    {footerNavigation.serviceAreas['Southern California'].slice(0, 6).map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-french-gray hover:text-ivory transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform block"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/service-areas"
                        className="text-brass hover:text-ivory transition-colors duration-200 text-sm font-medium hover:translate-x-1 transform transition-transform block"
                      >
                        View All Areas →
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Other Areas */}
                <div>
                  <h4 className="font-semibold text-brass mb-4 text-lg">Other Areas</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/service-areas/marin-county"
                        className="text-french-gray hover:text-ivory transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform block"
                      >
                        Marin County
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service-areas/lake-tahoe"
                        className="text-french-gray hover:text-ivory transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform block"
                      >
                        Lake Tahoe
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service-areas/sacramento"
                        className="text-french-gray hover:text-ivory transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform block"
                      >
                        Sacramento Area
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service-areas/central-coast"
                        className="text-french-gray hover:text-ivory transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform block"
                      >
                        Central Coast
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service-areas"
                        className="text-brass hover:text-ivory transition-colors duration-200 text-sm font-medium hover:translate-x-1 transform transition-transform block"
                      >
                        View All Areas →
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-12 border-t border-french-gray/20">
          <div className="text-center">
            <h3 className="font-display text-2xl font-semibold mb-4 text-ivory">Ready to Create Your Dream Kitchen?</h3>
            <p className="text-french-gray mb-8 max-w-2xl mx-auto">
              Schedule a private consultation with our master craftsmen to discuss your custom kitchen vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-brass hover:bg-brass/90 text-charcoal font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/portfolio"
                className="border border-french-gray hover:border-ivory text-ivory hover:text-ivory font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-8 border-t border-french-gray/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-french-gray">
                © {new Date().getFullYear()} PineWood Cabinets. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-sm text-french-gray hover:text-ivory transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-french-gray hover:text-ivory transition-colors duration-200">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-french-gray">
                Crafting Excellence Since 2006
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
