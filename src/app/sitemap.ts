import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://avscabinets.com'
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
    '/service-areas'
  ]

  // Service pages
  const servicePages = [
    '/services/custom-kitchens',
    '/services/bespoke-cabinetry',
    '/services/architectural-millwork',
    '/services/paneling',
    '/services/wine-rooms',
    '/services/vanities',
    '/services/libraries-closets-offices'
  ]

  // Service area pages - main regions
  const serviceAreaPages = [
    '/service-areas/lake-tahoe-truckee',
    '/service-areas/silicon-valley',
    '/service-areas/marin',
    '/service-areas/east-bay',
    '/service-areas/sacramento-foothills',
    '/service-areas/central-coast',
    '/service-areas/los-angeles',
    '/service-areas/santa-barbara',
    '/service-areas/san-diego',
    '/service-areas/orange-county'
  ]

  // Service area sub-pages - high-value neighborhoods
  const serviceAreaSubPages = [
    // Lake Tahoe & Truckee
    '/service-areas/lake-tahoe-truckee/martis-camp',
    '/service-areas/lake-tahoe-truckee/lahontan',
    '/service-areas/lake-tahoe-truckee/schaffers-mill',
    
    // Silicon Valley
    '/service-areas/silicon-valley/atherton',
    '/service-areas/silicon-valley/hillsborough',
    '/service-areas/silicon-valley/los-altos-hills',
    '/service-areas/silicon-valley/palo-alto',
    '/service-areas/silicon-valley/portola-valley',
    '/service-areas/silicon-valley/woodside',
    
    // Marin
    '/service-areas/marin/belvedere',
    '/service-areas/marin/tiburon',
    '/service-areas/marin/ross',
    '/service-areas/marin/kentfield',
    
    // East Bay
    '/service-areas/east-bay/berkeley-claremont-elmwood',
    '/service-areas/east-bay/orinda',
    '/service-areas/east-bay/lafayette',
    
    // Sacramento Foothills
    '/service-areas/sacramento-foothills/granite-bay',
    '/service-areas/sacramento-foothills/loomis',
    '/service-areas/sacramento-foothills/newcastle',
    
    // Central Coast
    '/service-areas/central-coast/carmel',
    '/service-areas/central-coast/carmel-valley',
    '/service-areas/central-coast/monterey',
    '/service-areas/central-coast/pebble-beach',
    '/service-areas/central-coast/big-sur',
    '/service-areas/central-coast/santa-cruz',
    
    // Los Angeles
    '/service-areas/los-angeles/bel-air',
    '/service-areas/los-angeles/holmby-hills',
    '/service-areas/los-angeles/beverly-hills',
    '/service-areas/los-angeles/beverly-park',
    '/service-areas/los-angeles/brentwood',
    '/service-areas/los-angeles/pacific-palisades',
    '/service-areas/los-angeles/hollywood-hills',
    '/service-areas/los-angeles/malibu',
    
    // Santa Barbara
    '/service-areas/santa-barbara/montecito',
    '/service-areas/santa-barbara/hope-ranch',
    
    // San Diego
    '/service-areas/san-diego/rancho-santa-fe',
    '/service-areas/san-diego/la-jolla',
    
    // Orange County
    '/service-areas/orange-county/newport-coast',
    '/service-areas/orange-county/laguna-beach',
    '/service-areas/orange-county/corona-del-mar'
  ]

  // Portfolio pages (sample - would be dynamic in real implementation)
  const portfolioPages = [
    '/portfolio/atherton-tech-executive-estate',
    '/portfolio/montecito-mediterranean-revival',
    '/portfolio/martis-camp-mountain-retreat',
    '/portfolio/pebble-beach-contemporary',
    '/portfolio/bel-air-modern-luxury',
    '/portfolio/malibu-coastal-estate'
  ]

  // Journal pages (sample - would be dynamic in real implementation)
  const journalPages = [
    '/journal/grain-matching-techniques',
    '/journal/sustainable-hardwood-sourcing',
    '/journal/smart-home-integration',
    '/journal/coastal-cabinetry-considerations',
    '/journal/historic-restoration-methods',
    '/journal/luxury-kitchen-trends-2024'
  ]

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...servicePages,
    ...serviceAreaPages,
    ...serviceAreaSubPages,
    ...portfolioPages,
    ...journalPages
  ]

  return allPages.map((page) => {
    // Determine priority based on page type
    let priority = 0.5
    let changeFrequency: 'yearly' | 'monthly' | 'weekly' = 'monthly'

    if (page === '') {
      priority = 1.0
      changeFrequency = 'weekly'
    } else if (page.startsWith('/service-areas/') && page.split('/').length === 4) {
      // High-value neighborhood pages
      priority = 0.9
      changeFrequency = 'monthly'
    } else if (page.startsWith('/services/')) {
      priority = 0.8
      changeFrequency = 'monthly'
    } else if (page.startsWith('/service-areas/')) {
      priority = 0.7
      changeFrequency = 'monthly'
    } else if (page.startsWith('/portfolio/')) {
      priority = 0.7
      changeFrequency = 'yearly'
    } else if (page.startsWith('/journal/')) {
      priority = 0.6
      changeFrequency = 'monthly'
    } else if (['/process', '/materials', '/about'].includes(page)) {
      priority = 0.8
      changeFrequency = 'monthly'
    }

    return {
      url: `${baseUrl}${page}`,
      lastModified: currentDate,
      changeFrequency,
      priority
    }
  })
}
