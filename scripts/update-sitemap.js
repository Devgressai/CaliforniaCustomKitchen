const fs = require('fs');

// All cities that have their 4 service pages created
const cities = [
  // Silicon Valley
  { name: 'Atherton', region: 'Silicon Valley', path: 'silicon-valley/atherton' },
  { name: 'Palo Alto', region: 'Silicon Valley', path: 'silicon-valley/palo-alto' },
  { name: 'Menlo Park', region: 'Silicon Valley', path: 'silicon-valley/menlo-park' },
  { name: 'Los Gatos', region: 'Silicon Valley', path: 'silicon-valley/los-gatos' },
  { name: 'Saratoga', region: 'Silicon Valley', path: 'silicon-valley/saratoga' },
  { name: 'Cupertino', region: 'Silicon Valley', path: 'silicon-valley/cupertino' },
  { name: 'Sunnyvale', region: 'Silicon Valley', path: 'silicon-valley/sunnyvale' },
  { name: 'Mountain View', region: 'Silicon Valley', path: 'silicon-valley/mountain-view' },
  { name: 'Los Altos', region: 'Silicon Valley', path: 'silicon-valley/los-altos' },
  { name: 'Los Altos Hills', region: 'Silicon Valley', path: 'silicon-valley/los-altos-hills' },
  { name: 'Woodside', region: 'Silicon Valley', path: 'silicon-valley/woodside' },
  
  // Marin County
  { name: 'Sausalito', region: 'Marin County', path: 'marin-county/sausalito' },
  { name: 'Mill Valley', region: 'Marin County', path: 'marin-county/mill-valley' },
  { name: 'Tiburon', region: 'Marin County', path: 'marin-county/tiburon' },
  { name: 'Belvedere', region: 'Marin County', path: 'marin-county/belvedere' },
  { name: 'Corte Madera', region: 'Marin County', path: 'marin-county/corte-madera' },
  { name: 'Larkspur', region: 'Marin County', path: 'marin-county/larkspur' },
  { name: 'Ross', region: 'Marin County', path: 'marin-county/ross' },
  { name: 'Kentfield', region: 'Marin County', path: 'marin-county/kentfield' },
  { name: 'Greenbrae', region: 'Marin County', path: 'marin-county/greenbrae' },
  
  // Peninsula
  { name: 'Hillsborough', region: 'Peninsula', path: 'hillsborough' },
  { name: 'San Mateo', region: 'Peninsula', path: 'san-mateo' },
  { name: 'Foster City', region: 'Peninsula', path: 'foster-city' },
  { name: 'Redwood City', region: 'Peninsula', path: 'redwood-city' },
  { name: 'San Carlos', region: 'Peninsula', path: 'san-carlos' },
  { name: 'Belmont', region: 'Peninsula', path: 'belmont' },
  { name: 'Half Moon Bay', region: 'Peninsula', path: 'half-moon-bay' },
  
  // North Bay
  { name: 'Napa Valley', region: 'North Bay', path: 'napa-valley' },
  { name: 'Sonoma County', region: 'North Bay', path: 'sonoma-county' },
  { name: 'Healdsburg', region: 'North Bay', path: 'healdsburg' },
  { name: 'Petaluma', region: 'North Bay', path: 'petaluma' },
  { name: 'Santa Rosa', region: 'North Bay', path: 'santa-rosa' },
  { name: 'Windsor', region: 'North Bay', path: 'windsor' },
  { name: 'Calistoga', region: 'North Bay', path: 'calistoga' },
  { name: 'St. Helena', region: 'North Bay', path: 'st-helena' },
  
  // Sacramento Area
  { name: 'Sacramento', region: 'Sacramento Area', path: 'sacramento' },
  { name: 'Auburn', region: 'Sacramento Area', path: 'sacramento/auburn' },
  { name: 'El Dorado Hills', region: 'Sacramento Area', path: 'sacramento/el-dorado-hills' },
  { name: 'Grass Valley', region: 'Sacramento Area', path: 'sacramento/grass-valley' },
  { name: 'Loomis', region: 'Sacramento Area', path: 'sacramento/loomis' },
  { name: 'Nevada City', region: 'Sacramento Area', path: 'sacramento/nevada-city' },
  { name: 'Newcastle', region: 'Sacramento Area', path: 'sacramento/newcastle' },
  { name: 'Roseville', region: 'Sacramento Area', path: 'sacramento/roseville' },
  { name: 'Truckee', region: 'Sacramento Area', path: 'truckee' },
  
  // Lake Tahoe
  { name: 'Lake Tahoe', region: 'Lake Tahoe', path: 'lake-tahoe' },
  { name: 'Carnelian Bay', region: 'Lake Tahoe', path: 'lake-tahoe/carnelian-bay' },
  { name: 'Crystal Bay', region: 'Lake Tahoe', path: 'lake-tahoe/crystal-bay' },
  { name: 'Emerald Bay', region: 'Lake Tahoe', path: 'lake-tahoe/emerald-bay' },
  { name: 'Homewood', region: 'Lake Tahoe', path: 'lake-tahoe/homewood' },
  { name: 'Incline Village', region: 'Lake Tahoe', path: 'lake-tahoe/incline-village' },
  { name: 'Kings Beach', region: 'Lake Tahoe', path: 'lake-tahoe/kings-beach' },
  { name: 'Meeks Bay', region: 'Lake Tahoe', path: 'lake-tahoe/meeks-bay' },
  { name: 'Rubicon Bay', region: 'Lake Tahoe', path: 'lake-tahoe/rubicon-bay' },
  { name: 'South Lake Tahoe', region: 'Lake Tahoe', path: 'lake-tahoe/south-lake-tahoe' },
  { name: 'Tahoe City', region: 'Lake Tahoe', path: 'lake-tahoe/tahoe-city' },
  { name: 'Tahoe Vista', region: 'Lake Tahoe', path: 'lake-tahoe/tahoe-vista' },
  { name: 'Tahoma', region: 'Lake Tahoe', path: 'lake-tahoe/tahoma' },
  
  // Central California
  { name: 'Central Coast', region: 'Central California', path: 'central-coast' },
  { name: 'Pebble Beach', region: 'Central California', path: 'central-coast/pebble-beach' },
  { name: 'Santa Barbara', region: 'Central California', path: 'santa-barbara' },
  { name: 'Montecito', region: 'Central California', path: 'santa-barbara/montecito' },
  
  // Southern California
  { name: 'Los Angeles', region: 'Southern California', path: 'los-angeles' },
  { name: 'Bel Air', region: 'Southern California', path: 'los-angeles/bel-air' },
  { name: 'Brentwood', region: 'Southern California', path: 'los-angeles/brentwood' },
  { name: 'Calabasas', region: 'Southern California', path: 'los-angeles/calabasas' },
  { name: 'Hollywood Hills', region: 'Southern California', path: 'los-angeles/hollywood-hills' },
  { name: 'Manhattan Beach', region: 'Southern California', path: 'los-angeles/manhattan-beach' },
  { name: 'Newport Beach', region: 'Southern California', path: 'los-angeles/newport-beach' },
  { name: 'Pasadena', region: 'Southern California', path: 'los-angeles/pasadena' },
  { name: 'Orange County', region: 'Southern California', path: 'orange-county' },
  { name: 'San Diego County', region: 'Southern California', path: 'san-diego-county' },
  { name: 'La Jolla', region: 'Southern California', path: 'la-jolla' },
  { name: 'Palm Springs', region: 'Southern California', path: 'palm-springs' },
  
  // Previously completed cities
  { name: 'Beverly Hills', region: 'Southern California', path: 'beverly-hills' },
  { name: 'Alameda', region: 'East Bay', path: 'alameda' },
  { name: 'Alamo', region: 'East Bay', path: 'alamo' },
  { name: 'Belvedere', region: 'Marin County', path: 'belvedere' },
  { name: 'Berkeley', region: 'East Bay', path: 'berkeley' },
  { name: 'Burlingame', region: 'Peninsula', path: 'burlingame' },
  { name: 'Castro Valley', region: 'East Bay', path: 'castro-valley' },
  { name: 'Danville', region: 'East Bay', path: 'danville' },
  { name: 'Dublin', region: 'East Bay', path: 'dublin' },
  { name: 'Fremont', region: 'East Bay', path: 'fremont' },
  { name: 'Hayward', region: 'East Bay', path: 'hayward' },
  { name: 'Livermore', region: 'East Bay', path: 'livermore' },
  { name: 'San Ramon', region: 'East Bay', path: 'san-ramon' },
  { name: 'Pleasanton', region: 'East Bay', path: 'pleasanton' },
  { name: 'Monterey', region: 'Central California', path: 'monterey' },
  { name: 'Carmel', region: 'Central California', path: 'carmel' },
  { name: 'Carmel-by-the-Sea', region: 'Central California', path: 'carmel-by-the-sea' },
  { name: 'Big Sur', region: 'Central California', path: 'big-sur' },
  { name: 'Pacific Grove', region: 'Central California', path: 'pacific-grove' },
  { name: 'Pebble Beach', region: 'Central California', path: 'pebble-beach' },
  { name: 'Seaside', region: 'Central California', path: 'seaside' },
  { name: 'Marina', region: 'Central California', path: 'marina' },
  { name: 'Salinas', region: 'Central California', path: 'salinas' },
  { name: 'Watsonville', region: 'Central California', path: 'watsonville' },
  { name: 'Santa Cruz', region: 'Central California', path: 'santa-cruz' }
];

const services = [
  { name: 'Custom Kitchen', slug: 'custom-kitchen' },
  { name: 'Kitchen Design', slug: 'kitchen-design' },
  { name: 'Kitchen Cabinets', slug: 'kitchen-cabinets' },
  { name: 'Kitchen Remodel', slug: 'kitchen-remodel' }
];

// Generate all location-service combination pages
const locationServicePages = [];
cities.forEach(city => {
  services.forEach(service => {
    locationServicePages.push(`/service-areas/${city.path}/${service.slug}`);
  });
});

// Generate the updated sitemap content
const sitemapContent = `import { MetadataRoute } from 'next'

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
    '/faq',
    '/service-areas/all-cities'
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
    '/service-areas/silicon-valley/los-altos',
    '/service-areas/silicon-valley/los-altos-hills',
    '/service-areas/silicon-valley/woodside',
    
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
    '/service-areas/los-angeles/manhattan-beach',
    '/service-areas/los-angeles/newport-beach',
    '/service-areas/los-angeles/pasadena',
    
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
    '/service-areas/lake-tahoe/tahoma',
    
    // Peninsula neighborhoods
    '/service-areas/hillsborough',
    '/service-areas/san-mateo',
    '/service-areas/foster-city',
    '/service-areas/redwood-city',
    '/service-areas/san-carlos',
    '/service-areas/belmont',
    '/service-areas/half-moon-bay',
    
    // North Bay neighborhoods
    '/service-areas/napa-valley',
    '/service-areas/sonoma-county',
    '/service-areas/healdsburg',
    '/service-areas/petaluma',
    '/service-areas/santa-rosa',
    '/service-areas/windsor',
    '/service-areas/calistoga',
    '/service-areas/st-helena',
    
    // Sacramento Area neighborhoods
    '/service-areas/sacramento',
    '/service-areas/sacramento/auburn',
    '/service-areas/sacramento/el-dorado-hills',
    '/service-areas/sacramento/grass-valley',
    '/service-areas/sacramento/loomis',
    '/service-areas/sacramento/nevada-city',
    '/service-areas/sacramento/newcastle',
    '/service-areas/sacramento/roseville',
    '/service-areas/truckee',
    
    // Central California neighborhoods
    '/service-areas/central-coast',
    '/service-areas/central-coast/pebble-beach',
    '/service-areas/santa-barbara',
    '/service-areas/santa-barbara/montecito',
    '/service-areas/monterey',
    '/service-areas/carmel',
    '/service-areas/carmel-by-the-sea',
    '/service-areas/big-sur',
    '/service-areas/pacific-grove',
    '/service-areas/pebble-beach',
    '/service-areas/seaside',
    '/service-areas/marina',
    '/service-areas/salinas',
    '/service-areas/watsonville',
    '/service-areas/santa-cruz',
    
    // Southern California neighborhoods
    '/service-areas/los-angeles',
    '/service-areas/los-angeles/bel-air',
    '/service-areas/los-angeles/brentwood',
    '/service-areas/los-angeles/calabasas',
    '/service-areas/los-angeles/hollywood-hills',
    '/service-areas/los-angeles/manhattan-beach',
    '/service-areas/los-angeles/newport-beach',
    '/service-areas/los-angeles/pasadena',
    '/service-areas/orange-county',
    '/service-areas/san-diego-county',
    '/service-areas/la-jolla',
    '/service-areas/palm-springs',
    '/service-areas/beverly-hills',
    '/service-areas/alameda',
    '/service-areas/alamo',
    '/service-areas/belvedere',
    '/service-areas/berkeley',
    '/service-areas/burlingame',
    '/service-areas/castro-valley',
    '/service-areas/danville',
    '/service-areas/dublin',
    '/service-areas/fremont',
    '/service-areas/hayward',
    '/service-areas/livermore',
    '/service-areas/san-ramon',
    '/service-areas/pleasanton'
  ]

  // Location-Service combination pages (${locationServicePages.length} total)
  const locationServicePages = [
${locationServicePages.map(page => `    '${page}'`).join(',\n')}
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
    ...locationServicePages,
    ...contentPages,
    ...portfolioPages
  ]

  // Generate sitemap entries
  return allPages.map((page) => ({
    url: \`\${baseUrl}\${page}\`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: page === '' ? 1.0 : page.includes('/service-areas/') ? 0.8 : 0.6,
  }))
}`;

// Write the updated sitemap
fs.writeFileSync('src/app/sitemap.ts', sitemapContent);
console.log(`Updated sitemap with ${locationServicePages.length} location-service combination pages`);
console.log(`Total pages in sitemap: ${locationServicePages.length + 20 + 14 + 15 + 50 + 9 + 5} pages`);
