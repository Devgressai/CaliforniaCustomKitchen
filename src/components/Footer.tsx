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
  ],
  regions: [
    { name: 'Silicon Valley', href: '/service-areas/silicon-valley' },
    { name: 'Marin County', href: '/service-areas/marin-county' },
    { name: 'Lake Tahoe', href: '/service-areas/lake-tahoe' },
    { name: 'Central Coast', href: '/service-areas/central-coast' },
    { name: 'Los Angeles', href: '/service-areas/los-angeles' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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

          {/* Service Areas */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Service Areas</h3>
            <ul className="space-y-3">
              {footerNavigation.regions.map((item) => (
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
