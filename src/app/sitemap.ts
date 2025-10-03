import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://california-custom-kitchen.vercel.app'
  const currentDate = new Date()

  // Static pages
  const staticPages = [
    '',
    '/portfolio',
    '/services',
    '/process',
    '/materials',
    '/about',
    '/journal',
    '/showroom',
    '/contact',
    '/service-areas',
    '/faq'
  ]

  // Service pages
  const servicePages = [
    '/services/custom-kitchens',
    '/services/bespoke-cabinetry',
    '/services/architectural-millwork',
    '/services/paneling',
    '/services/wine-rooms',
    '/services/vanities',
    '/services/libraries-closets-offices',
    '/services/kitchen-remodeling',
    '/services/cabinet-refacing',
    '/services/custom-storage',
    '/services/kitchen-design-consultation',
    '/services/cabinet-hardware',
    '/services/kitchen-lighting',
    '/services/appliance-integration'
  ]

  // Service area pages - main regions
  const serviceAreaPages = [
    '/service-areas/san-francisco',
    '/service-areas/silicon-valley',
    '/service-areas/marin-county',
    '/service-areas/oakland',
    '/service-areas/berkeley',
    '/service-areas/hillsborough',
    '/service-areas/lake-tahoe',
    '/service-areas/sacramento',
    '/service-areas/napa-valley',
    '/service-areas/sonoma-county',
    '/service-areas/central-coast',
    '/service-areas/santa-barbara',
    '/service-areas/los-angeles',
    '/service-areas/san-diego-county',
    '/service-areas/orange-county'
  ]

  // Service area sub-pages - high-value neighborhoods
  const serviceAreaSubPages = [
    // San Francisco neighborhoods
    '/service-areas/san-francisco/pacific-heights',
    '/service-areas/san-francisco/nob-hill',
    '/service-areas/san-francisco/marina-district',
    '/service-areas/san-francisco/castro-district',
    '/service-areas/san-francisco/richmond-district',
    '/service-areas/san-francisco/soma',
    '/service-areas/san-francisco/mission-district',
    '/service-areas/san-francisco/hayes-valley',
    '/service-areas/san-francisco/noe-valley',
    
    // Silicon Valley neighborhoods
    '/service-areas/silicon-valley/atherton',
    '/service-areas/silicon-valley/palo-alto',
    '/service-areas/silicon-valley/menlo-park',
    '/service-areas/silicon-valley/los-gatos',
    '/service-areas/silicon-valley/saratoga',
    '/service-areas/silicon-valley/cupertino',
    '/service-areas/silicon-valley/sunnyvale',
    '/service-areas/silicon-valley/mountain-view',
    '/service-areas/silicon-valley/woodside',
    '/service-areas/silicon-valley/los-altos',
    '/service-areas/silicon-valley/los-altos-hills',
    
    // Marin County neighborhoods
    '/service-areas/marin-county/sausalito',
    '/service-areas/marin-county/mill-valley',
    '/service-areas/marin-county/tiburon',
    '/service-areas/marin-county/belvedere',
    '/service-areas/marin-county/corte-madera',
    '/service-areas/marin-county/larkspur',
    '/service-areas/marin-county/ross',
    '/service-areas/marin-county/kentfield',
    '/service-areas/marin-county/greenbrae',
    
    // Los Angeles neighborhoods
    '/service-areas/los-angeles/beverly-hills',
    '/service-areas/los-angeles/bel-air',
    '/service-areas/los-angeles/malibu',
    '/service-areas/los-angeles/west-hollywood',
    '/service-areas/los-angeles/santa-monica',
    '/service-areas/los-angeles/venice',
    '/service-areas/los-angeles/century-city',
    '/service-areas/los-angeles/encino',
    '/service-areas/los-angeles/trousdale-estates',
    '/service-areas/los-angeles/palos-verdes-estates',
    '/service-areas/los-angeles/brentwood',
    '/service-areas/los-angeles/calabasas',
    '/service-areas/los-angeles/hollywood-hills',
    '/service-areas/los-angeles/pasadena',
    '/service-areas/los-angeles/manhattan-beach',
    '/service-areas/los-angeles/newport-beach',
    
    // San Diego neighborhoods
    '/service-areas/san-diego-county/del-mar',
    '/service-areas/san-diego-county/encinitas',
    '/service-areas/san-diego-county/carlsbad',
    '/service-areas/san-diego-county/solana-beach',
    '/service-areas/san-diego-county/rancho-santa-fe',
    
    // Lake Tahoe neighborhoods
    '/service-areas/lake-tahoe/carnelian-bay',
    '/service-areas/lake-tahoe/crystal-bay',
    '/service-areas/lake-tahoe/emerald-bay',
    '/service-areas/lake-tahoe/homewood',
    '/service-areas/lake-tahoe/incline-village',
    '/service-areas/lake-tahoe/kings-beach',
    '/service-areas/lake-tahoe/meeks-bay',
    '/service-areas/lake-tahoe/rubicon-bay',
    '/service-areas/lake-tahoe/south-lake-tahoe',
    '/service-areas/lake-tahoe/tahoe-city',
    '/service-areas/lake-tahoe/tahoe-vista',
    '/service-areas/lake-tahoe/tahoma'
  ]

  // Content pages
  const contentPages = [
    '/journal/luxury-kitchen-design-trends-2025',
    '/journal/kitchen-design-trends-2025',
    '/materials/premium-hardwood-guide',
    '/materials/wood-species-guide',
    '/materials/cabinet-hardware-guide',
    '/materials/kitchen-lighting-guide',
    '/materials/kitchen-appliance-guide',
    '/process/kitchen-layout-guide',
    '/process/kitchen-renovation-costs'
  ]

  // Portfolio pages
  const portfolioPages = [
    '/portfolio/beverly-hills-modern-kitchen',
    '/portfolio/malibu-coastal-kitchen',
    '/portfolio/palo-alto-tech-executive-kitchen',
    '/portfolio/montecito-wine-country-kitchen',
    '/portfolio/lake-tahoe-lodge-kitchen'
  ]

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...servicePages,
    ...serviceAreaPages,
    ...serviceAreaSubPages,
    ...contentPages,
    ...portfolioPages
  ]

  // Generate sitemap entries
  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: page === '' ? 1.0 : page.includes('/service-areas/') ? 0.8 : 0.6,
  }))
}