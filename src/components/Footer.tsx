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
    'Northern California': [
      { name: 'Silicon Valley', href: '/service-areas/silicon-valley' },
      { name: 'Atherton', href: '/service-areas/silicon-valley/atherton' },
      { name: 'Palo Alto', href: '/service-areas/silicon-valley/palo-alto' },
      { name: 'Marin County', href: '/service-areas/marin-county' },
      { name: 'Sacramento', href: '/service-areas/sacramento' },
      { name: 'Auburn', href: '/service-areas/sacramento/auburn' },
      { name: 'El Dorado Hills', href: '/service-areas/sacramento/el-dorado-hills' },
      { name: 'Grass Valley', href: '/service-areas/sacramento/grass-valley' },
      { name: 'Loomis', href: '/service-areas/sacramento/loomis' },
      { name: 'Nevada City', href: '/service-areas/sacramento/nevada-city' },
      { name: 'Newcastle', href: '/service-areas/sacramento/newcastle' },
      { name: 'Roseville', href: '/service-areas/sacramento/roseville' },
      { name: 'Napa Valley', href: '/service-areas/napa-valley' },
      { name: 'Sonoma County', href: '/service-areas/sonoma-county' },
      { name: 'Truckee', href: '/service-areas/truckee' },
      { name: 'San Francisco', href: '/service-areas/san-francisco' },
      { name: 'Pacific Heights', href: '/service-areas/san-francisco/pacific-heights' },
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-bold">AV's Cabinets</span>
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

          {/* Service Areas - Northern California */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Northern California</h3>
            <ul className="space-y-2">
              {footerNavigation.serviceAreas['Northern California'].map((item) => (
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

          {/* Service Areas - Central & Southern California */}
          <div>
            <div className="mb-6">
              <h3 className="font-display text-lg font-semibold mb-4">Central California</h3>
              <ul className="space-y-2 mb-6">
                {footerNavigation.serviceAreas['Central California'].map((item) => (
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

            <div>
              <h3 className="font-display text-lg font-semibold mb-4">Southern California</h3>
              <ul className="space-y-2">
                {footerNavigation.serviceAreas['Southern California'].map((item) => (
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
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-french-gray/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-french-gray">
              © {new Date().getFullYear()} AV's Cabinets. All rights reserved.
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
