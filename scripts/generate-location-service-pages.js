const fs = require('fs');
const path = require('path');

// All cities that need their 4 service pages created
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
  { name: 'Palm Springs', region: 'Southern California', path: 'palm-springs' }
];

const services = [
  { name: 'Custom Kitchen', slug: 'custom-kitchen', description: 'Custom kitchen design and cabinetry' },
  { name: 'Kitchen Design', slug: 'kitchen-design', description: 'Luxury kitchen design services' },
  { name: 'Kitchen Cabinets', slug: 'kitchen-cabinets', description: 'Custom kitchen cabinets and cabinetry' },
  { name: 'Kitchen Remodel', slug: 'kitchen-remodel', description: 'Complete kitchen remodeling services' }
];

// Template for page content
function generatePageContent(city, service, region) {
  const citySlug = city.name.toLowerCase().replace(/\s+/g, '-');
  const serviceTitle = `${service.name} ${city.name}`;
  const serviceDescription = `${service.description} for ${city.name} luxury homes`;
  
  return `import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: '${serviceTitle} | ${service.name} | PineWood Cabinets',
  description: '${serviceDescription}. Expert craftsmen serving ${region} with luxury kitchen solutions.',
  keywords: [
    '${service.slug} ${citySlug}',
    '${service.slug} ${citySlug}',
    'luxury ${service.slug} ${citySlug}',
    'custom ${service.slug} ${citySlug}',
    '${service.slug} ${region.toLowerCase()}',
    '${service.slug} California'
  ],
  openGraph: {
    title: '${serviceTitle} | ${service.name} | PineWood Cabinets',
    description: '${serviceDescription}.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "${serviceTitle}",
  "${serviceDescription} for ${city.name} luxury homes in ${region}",
  "${service.name}",
  ["${city.name}, CA", "${region}, CA", "California"]
)

export default function ${service.name.replace(/\s+/g, '')}${city.name.replace(/\s+/g, '')}Page() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="${serviceTitle}"
        subtitle="${service.name}"
        description="Serving ${city.name}'s most discerning homeowners with ${service.description} that transform ${region} homes into luxury culinary spaces."
        imageSrc="service-areas/${citySlug}-${service.slug}-hero.webp"
        imageAlt="${service.name} in ${city.name} home with luxury finishes and ${region} views"
      />

      {/* ${city.name} ${service.name} Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                ${city.name} ${service.name} Excellence
              </h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                ${city.name} represents the pinnacle of ${region} luxury—where sophistication meets refined elegance. Our ${city.name} ${service.slug} clients understand that true luxury lies in creating spaces that honor both the neighborhood's unique character and their own sophisticated lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From historic estates to contemporary architectural gems, ${city.name}'s diverse residential landscape demands ${service.slug} solutions that seamlessly blend ${region} sophistication with luxury functionality and uncompromising quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">${service.name} Projects</h3>
                  <p className="text-2xl font-bold text-brass">200+</p>
                  <p className="text-sm text-charcoal/70">Completed projects</p>
                </div>
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Craftsmanship</h3>
                  <p className="text-2xl font-bold text-brass">20+</p>
                  <p className="text-sm text-charcoal/70">Years experience</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/service-areas/${citySlug}-${service.slug}-overview.webp"
                alt="${service.name} in ${city.name} home with luxury finishes and ${region} views"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ${service.name} Services */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              ${service.name} Services for ${city.name}
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our comprehensive ${service.slug} services are tailored to meet the unique needs of ${city.name}'s diverse architectural styles and ${region} lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Complete ${service.name}</h3>
              <p className="text-charcoal/70 mb-4">
                Full ${service.slug} from concept to completion, tailored to your ${city.name} home's unique character and your lifestyle needs.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Design consultation</li>
                <li>• 3D renderings</li>
                <li>• Custom solutions</li>
                <li>• Material selection</li>
                <li>• Project management</li>
                <li>• Quality installation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">${service.name} Renovation</h3>
              <p className="text-charcoal/70 mb-4">
                Comprehensive renovation services that update your ${city.name} ${service.slug} while preserving its architectural integrity and character.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Structural updates</li>
                <li>• Electrical work</li>
                <li>• Plumbing updates</li>
                <li>• Flooring installation</li>
                <li>• Lighting design</li>
                <li>• Paint and finishes</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">${service.name} Refresh</h3>
              <p className="text-charcoal/70 mb-4">
                Cosmetic updates that give your ${city.name} ${service.slug} a fresh, modern look without the complexity of a full renovation.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Design updates</li>
                <li>• Hardware updates</li>
                <li>• Material replacement</li>
                <li>• Finish updates</li>
                <li>• Color coordination</li>
                <li>• Lighting upgrades</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">${service.name} Expansion</h3>
              <p className="text-charcoal/70 mb-4">
                Strategic expansion of your ${city.name} ${service.slug} space to improve functionality and accommodate your growing needs.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Space planning</li>
                <li>• Structural modifications</li>
                <li>• Permit coordination</li>
                <li>• Custom solutions</li>
                <li>• Seamless integration</li>
                <li>• Quality construction</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">${service.name} Modernization</h3>
              <p className="text-charcoal/70 mb-4">
                Modern updates that bring your ${city.name} ${service.slug} up to current standards while maintaining its unique character.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Smart home integration</li>
                <li>• Energy-efficient solutions</li>
                <li>• Modern fixtures</li>
                <li>• Updated electrical</li>
                <li>• Contemporary finishes</li>
                <li>• Technology integration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">${service.name} Restoration</h3>
              <p className="text-charcoal/70 mb-4">
                Expert restoration of historic and vintage ${city.name} ${service.slug} to preserve their original beauty and character.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Historical research</li>
                <li>• Period-appropriate materials</li>
                <li>• Craftsmanship restoration</li>
                <li>• Hardware replication</li>
                <li>• Finish restoration</li>
                <li>• Modern functionality</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Our ${service.name} Process
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our proven process ensures your ${city.name} ${service.slug} exceeds expectations and perfectly reflects your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Initial Consultation</h3>
              <p className="text-charcoal/70 mb-4">Comprehensive consultation to understand your vision, needs, and budget for your ${city.name} ${service.slug}.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Needs assessment</li>
                <li>• Style preferences</li>
                <li>• Budget planning</li>
                <li>• Timeline discussion</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Design Development</h3>
              <p className="text-charcoal/70 mb-4">Creation of detailed design plans and 3D renderings for your ${city.name} ${service.slug}.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Space planning</li>
                <li>• 3D renderings</li>
                <li>• Material selection</li>
                <li>• Layout optimization</li>
                <li>• Technology integration</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Construction</h3>
              <p className="text-charcoal/70 mb-4">Professional construction and installation of your approved ${city.name} ${service.slug} design.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Demolition</li>
                <li>• Structural work</li>
                <li>• Installation</li>
                <li>• Quality control</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Final Walkthrough</h3>
              <p className="text-charcoal/70 mb-4">Comprehensive final walkthrough and project completion for your ${city.name} ${service.slug}.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Final inspection</li>
                <li>• Functionality test</li>
                <li>• Cleanup</li>
                <li>• Project handover</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ${region} Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Designed for ${city.name} Living
              </h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                ${city.name}'s unique ${region} environment creates distinct requirements for ${service.slug}. Our approach honors the neighborhood's character while delivering the functionality and elegance modern residents demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with ${region} views to evening entertaining that showcases the home's refined character, every decision reflects an understanding of how ${city.name} residents truly live and enjoy their ${region} lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">${region} Integration</h3>
                <p className="text-ivory/80">${service.name} solutions that maximize ${region} views while maintaining functionality and aesthetic appeal.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">${region} Adaptation</h3>
                <p className="text-ivory/80">Custom solutions that work with the natural ${region} environment and challenges.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Luxury Functionality</h3>
                <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of ${city.name} residents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured ${service.name} Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Featured ${city.name} ${service.name} Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of ${service.slug} projects throughout ${city.name}'s most prestigious ${region} neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/${citySlug}-${service.slug}-1.webp"
                alt="${service.name} in ${city.name} home with ${region} views and luxury finishes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">${region} Views</h3>
                <p className="text-charcoal/70 mb-4">${service.name} that maximizes ${region} views while maintaining functionality and luxury.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">View Integration</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Custom Design</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/${citySlug}-${service.slug}-2.webp"
                alt="Traditional ${service.slug} in ${city.name} with classic design and sophisticated finishes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Traditional Sophistication</h3>
                <p className="text-charcoal/70 mb-4">Classic ${service.slug} with traditional details and sophisticated finishes throughout.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Traditional Design</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Sophisticated Finishes</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/${citySlug}-${service.slug}-3.webp"
                alt="Contemporary ${service.slug} in ${city.name} with modern design and clean lines"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Contemporary Luxury</h3>
                <p className="text-charcoal/70 mb-4">Modern ${service.slug} with clean lines and premium materials for sophisticated living.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Modern Design</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Premium Materials</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              ${city.name} ${service.name} FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about ${service.slug} services in ${city.name}
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a ${service.slug} take?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                A complete ${service.slug} in ${city.name} typically takes 8-12 weeks from start to finish. This includes 2-3 weeks for design and planning, 1-2 weeks for demolition and preparation, 4-6 weeks for construction and installation, and 1-2 weeks for finishing and cleanup. The timeline may vary depending on the scope of work and any unexpected issues that arise.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Do I need permits for my ${service.slug}?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Most ${service.slug} projects in ${city.name} require permits, especially if you're moving walls, changing electrical or plumbing, or making structural modifications. We handle all permit applications and inspections as part of our comprehensive ${service.slug} service. This ensures your project meets all local building codes and regulations.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can I live in my home during the project?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Yes, most of our ${city.name} ${service.slug} clients choose to stay in their homes during the project. We work to minimize disruption by setting up temporary facilities, protecting other areas of your home, and maintaining a clean, organized work environment. We'll discuss your specific needs and preferences during the planning phase.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's included in your ${service.slug} service?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our complete ${service.slug} service includes design consultation, 3D renderings, permit coordination, demolition, structural work, custom solutions, material installation, electrical and plumbing work, flooring, lighting, painting, and final cleanup. We also provide project management and quality control throughout the entire process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Create Your Dream ${service.name} in ${city.name}?"
        description="Join ${city.name}'s most discerning homeowners who have chosen PineWood Cabinets for their ${service.slug} needs. Schedule a private consultation to discuss how we can bring your vision to life with comprehensive ${service.slug} services."
        primaryCTA={{
          text: "Schedule Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Portfolio",
          href: "/portfolio"
        }}
      />
    </>
  )
}`;
}

// Generate all pages
function generateAllPages() {
  cities.forEach(city => {
    services.forEach(service => {
      const citySlug = city.name.toLowerCase().replace(/\s+/g, '-');
      const dirPath = `src/app/service-areas/${city.path}/${service.slug}`;
      const filePath = `${dirPath}/page.tsx`;
      
      // Create directory if it doesn't exist
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      
      // Generate page content
      const content = generatePageContent(city, service, city.region);
      
      // Write file
      fs.writeFileSync(filePath, content);
      console.log(`Generated: ${filePath}`);
    });
  });
}

// Run the generator
generateAllPages();
console.log('All pages generated successfully!');
