const fs = require('fs');
const path = require('path');

// New Monterey Bay cities to add
const newMontereyBayCities = [
  'carmel-valley',
  'capitola', 
  'aptos',
  'marina',
  'del-rey-oaks',
  'scotts-valley',
  'soquel',
  'la-selva-beach'
];

// Services to create pages for
const services = [
  'custom-kitchen',
  'kitchen-design', 
  'kitchen-cabinets',
  'kitchen-remodel'
];

// City display names and descriptions
const cityInfo = {
  'carmel-valley': {
    displayName: 'Carmel Valley',
    description: 'Nestled in the rolling hills of Monterey County, Carmel Valley represents the pinnacle of California wine country living. This exclusive enclave is home to some of the most prestigious estates and custom homes in the region, where residents enjoy the perfect blend of rural tranquility and sophisticated luxury.',
    characteristics: 'wine country estates, rolling hills, exclusive residential community, equestrian properties, custom homes, luxury ranches',
    nearbyAreas: 'Carmel, Monterey, Pebble Beach, Big Sur',
    marketFocus: 'luxury wine country estates, custom ranch homes, equestrian properties, high-end residential developments'
  },
  'capitola': {
    displayName: 'Capitola',
    description: 'This charming beach town along the Santa Cruz coastline offers a unique blend of coastal sophistication and artistic flair. Capitola\'s colorful architecture and vibrant community create the perfect backdrop for custom homes that celebrate both ocean views and creative expression.',
    characteristics: 'beach town charm, colorful architecture, artistic community, coastal views, walkable downtown, family-friendly',
    nearbyAreas: 'Santa Cruz, Aptos, Soquel, La Selva Beach',
    marketFocus: 'coastal luxury homes, beachfront properties, custom beach cottages, artistic residences'
  },
  'aptos': {
    displayName: 'Aptos',
    description: 'Aptos represents the perfect balance of coastal living and forested tranquility. This affluent community offers residents stunning ocean views, redwood forests, and a sophisticated lifestyle that attracts discerning homeowners seeking both natural beauty and luxury amenities.',
    characteristics: 'coastal redwood setting, ocean views, affluent community, forested hills, luxury homes, natural beauty',
    nearbyAreas: 'Capitola, Santa Cruz, Soquel, La Selva Beach',
    marketFocus: 'coastal luxury estates, forested custom homes, ocean-view properties, high-end residential developments'
  },
  'marina': {
    displayName: 'Marina',
    description: 'Marina is experiencing a renaissance as one of Monterey Bay\'s most promising luxury development areas. With its proximity to world-class golf courses, pristine beaches, and the Monterey Peninsula, Marina offers exceptional opportunities for custom home development and luxury living.',
    characteristics: 'growing luxury market, golf course proximity, beach access, development opportunities, modern amenities, strategic location',
    nearbyAreas: 'Monterey, Seaside, Pacific Grove, Pebble Beach',
    marketFocus: 'new luxury developments, golf course homes, custom beach properties, modern luxury residences'
  },
  'del-rey-oaks': {
    displayName: 'Del Rey Oaks',
    description: 'This small, exclusive community offers the perfect blend of privacy and convenience. Del Rey Oaks residents enjoy a quiet, upscale lifestyle while being minutes away from the cultural attractions and natural beauty of the Monterey Peninsula.',
    characteristics: 'exclusive small community, privacy, convenience, upscale lifestyle, quiet streets, family-oriented',
    nearbyAreas: 'Monterey, Seaside, Marina, Pacific Grove',
    marketFocus: 'exclusive custom homes, private estates, family-oriented luxury residences, quiet luxury living'
  },
  'scotts-valley': {
    displayName: 'Scotts Valley',
    description: 'Nestled in the Santa Cruz Mountains, Scotts Valley offers a unique blend of mountain living and Silicon Valley accessibility. This family-oriented community attracts tech professionals and families seeking custom homes that combine natural beauty with modern convenience.',
    characteristics: 'mountain setting, Silicon Valley proximity, family-oriented, tech professionals, custom homes, natural beauty',
    nearbyAreas: 'Santa Cruz, Felton, Boulder Creek, Ben Lomond',
    marketFocus: 'mountain custom homes, tech professional residences, family-oriented luxury homes, modern mountain living'
  },
  'soquel': {
    displayName: 'Soquel',
    description: 'Soquel embodies the quintessential California coastal lifestyle, where redwood forests meet the Pacific Ocean. This charming community offers residents the perfect setting for custom homes that celebrate both natural beauty and sophisticated living.',
    characteristics: 'redwood forests, coastal setting, charming community, natural beauty, custom homes, California lifestyle',
    nearbyAreas: 'Capitola, Aptos, Santa Cruz, La Selva Beach',
    marketFocus: 'coastal custom homes, redwood forest properties, luxury beach cottages, natural setting residences'
  },
  'la-selva-beach': {
    displayName: 'La Selva Beach',
    description: 'La Selva Beach represents the pinnacle of exclusive coastal living along the Monterey Bay. This private beach community offers residents unparalleled ocean access and privacy, making it one of the most sought-after locations for luxury custom homes in the region.',
    characteristics: 'exclusive beach community, private beach access, luxury homes, privacy, oceanfront properties, prestigious location',
    nearbyAreas: 'Aptos, Capitola, Soquel, Santa Cruz',
    marketFocus: 'exclusive beachfront estates, private beach homes, luxury oceanfront properties, prestigious coastal residences'
  }
};

// Service descriptions and focus areas
const serviceInfo = {
  'custom-kitchen': {
    title: 'Custom Kitchen',
    description: 'Bespoke kitchen design and construction',
    focus: 'custom design, luxury materials, personalized functionality, unique layouts, premium finishes'
  },
  'kitchen-design': {
    title: 'Kitchen Design', 
    description: 'Professional kitchen design and consultation services',
    focus: 'design consultation, space planning, material selection, layout optimization, design visualization'
  },
  'kitchen-cabinets': {
    title: 'Kitchen Cabinets',
    description: 'Custom cabinet manufacturing and installation',
    focus: 'custom cabinetry, premium materials, precise craftsmanship, storage solutions, hardware selection'
  },
  'kitchen-remodel': {
    title: 'Kitchen Remodel',
    description: 'Complete kitchen renovation and remodeling services',
    focus: 'full renovation, structural updates, modern functionality, luxury finishes, complete transformation'
  }
};

// Generate page content
function generatePageContent(city, service) {
  const cityData = cityInfo[city];
  const serviceData = serviceInfo[service];
  
  return `import { Metadata } from 'next'
import { ServiceAreaPageLayout } from '@/components/PageLayout'
import { ServiceAreaHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature } from '@/components/ContentSection'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: '${serviceData.title} ${cityData.displayName} | Custom Kitchen Services | PineWood Cabinets',
  description: 'Professional ${serviceData.description.toLowerCase()} for ${cityData.displayName} luxury homes. Expert kitchen services serving Monterey Bay with museum-grade craftsmanship.',
  keywords: [
    '${service.toLowerCase().replace('-', ' ')} ${cityData.displayName.toLowerCase()}',
    '${service.toLowerCase().replace('-', ' ')} ${cityData.displayName.toLowerCase()} CA',
    'custom kitchen ${cityData.displayName.toLowerCase()}',
    'luxury cabinetry ${cityData.displayName.toLowerCase()}',
    'kitchen design ${cityData.displayName.toLowerCase()}',
    '${cityData.characteristics.split(', ').slice(0, 3).join(', ')}',
    'Monterey Bay kitchen services',
    '${cityData.nearbyAreas.split(', ').slice(0, 2).join(', ')} kitchen design'
  ],
  openGraph: {
    title: '${serviceData.title} ${cityData.displayName} | Custom Kitchen Services | PineWood Cabinets',
    description: 'Professional ${serviceData.description.toLowerCase()} for ${cityData.displayName} luxury homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "${serviceData.title} ${cityData.displayName}",
  "Professional ${serviceData.description.toLowerCase()} for ${cityData.displayName} luxury homes in Monterey Bay",
  "${serviceData.title}",
  ["${cityData.displayName}, CA", "Monterey Bay, CA", "${cityData.nearbyAreas.split(', ').slice(0, 3).join(', ')}"]
)

export default function ${serviceData.title.replace(/\s+/g, '')}${cityData.displayName.replace(/\s+/g, '')}Page() {
  return (
    <ServiceAreaPageLayout
      location="${cityData.displayName}"
      service="${serviceData.title}"
      structuredData={{ service: serviceSchema }}
    >
      <ServiceAreaHero
        location="${cityData.displayName}"
        service="${serviceData.title}"
        description="Serving ${cityData.displayName}'s discerning homeowners with ${serviceData.description.toLowerCase()} that transform Monterey Bay homes into luxury culinary spaces."
        imageSrc="service-areas/${city}-${service}-hero.webp"
        imageAlt="Custom ${service.toLowerCase().replace('-', ' ')} in ${cityData.displayName} home with Monterey Bay views and luxury finishes"
      />

      {/* ${cityData.displayName} ${serviceData.title} Overview */}
      <ContentSection background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="${cityData.displayName} ${serviceData.title} Excellence"
              description="${cityData.description} Our ${cityData.displayName} ${service.toLowerCase().replace('-', ' ')} clients understand that true elegance lies in creating spaces that honor both the community's unique character and their own sophisticated lifestyle."
            />
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              From ${cityData.characteristics.split(', ').slice(0, 2).join(' and ')}, ${cityData.displayName}'s diverse residential landscape demands ${service.toLowerCase().replace('-', ' ')} solutions that seamlessly blend ${cityData.characteristics.split(', ').slice(2, 4).join(' and ')} with luxury functionality and uncompromising quality.
            </p>
            <Grid columns={2} gap="md">
              <Card>
                <h3 className="font-semibold text-charcoal mb-2">${serviceData.title} Projects</h3>
                <p className="text-2xl font-bold text-brass">150+</p>
                <p className="text-sm text-charcoal/70">Completed projects</p>
              </Card>
              <Card>
                <h3 className="font-semibold text-charcoal mb-2">Craftsmanship</h3>
                <p className="text-2xl font-bold text-brass">20+</p>
                <p className="text-sm text-charcoal/70">Years experience</p>
              </Card>
            </Grid>
          </div>
          <div className="relative">
            <img
              src="/images/service-areas/${city}-${service}-overview.webp"
              alt="Custom ${service.toLowerCase().replace('-', ' ')} in ${cityData.displayName} home with Monterey Bay views and luxury finishes"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </ContentSection>

      {/* ${serviceData.title} Services */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="${serviceData.title} Services for ${cityData.displayName}"
          description="Our comprehensive ${serviceData.description.toLowerCase()} are tailored to meet the unique needs of ${cityData.displayName}'s diverse architectural styles and Monterey Bay lifestyle."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Complete ${serviceData.title}</h3>
            <p className="text-charcoal/70 mb-4">
              Full ${service.toLowerCase().replace('-', ' ')} transformation from design to completion, tailored to your ${cityData.displayName} home's unique character and your lifestyle needs.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Design consultation</li>
              <li>• Custom planning</li>
              <li>• Material selection</li>
              <li>• Professional installation</li>
              <li>• Quality assurance</li>
              <li>• Final finishing</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Luxury ${serviceData.title}</h3>
            <p className="text-charcoal/70 mb-4">
              Premium ${service.toLowerCase().replace('-', ' ')} services that elevate your ${cityData.displayName} home with museum-grade materials and craftsmanship.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Premium materials</li>
              <li>• Custom design</li>
              <li>• Expert craftsmanship</li>
              <li>• Luxury finishes</li>
              <li>• Quality guarantee</li>
              <li>• White-glove service</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom ${serviceData.title}</h3>
            <p className="text-charcoal/70 mb-4">
              Bespoke ${service.toLowerCase().replace('-', ' ')} solutions designed specifically for your ${cityData.displayName} home's unique requirements and aesthetic vision.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Bespoke design</li>
              <li>• Custom solutions</li>
              <li>• Personal consultation</li>
              <li>• Unique materials</li>
              <li>• Tailored functionality</li>
              <li>• Exclusive finishes</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Modern ${serviceData.title}</h3>
            <p className="text-charcoal/70 mb-4">
              Contemporary ${service.toLowerCase().replace('-', ' ')} designs that bring your ${cityData.displayName} home up to current standards while maintaining its unique character.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Contemporary design</li>
              <li>• Modern functionality</li>
              <li>• Smart integration</li>
              <li>• Energy efficiency</li>
              <li>• Current trends</li>
              <li>• Technology integration</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Traditional ${serviceData.title}</h3>
            <p className="text-charcoal/70 mb-4">
              Classic ${service.toLowerCase().replace('-', ' ')} designs that honor traditional craftsmanship while providing modern functionality for your ${cityData.displayName} home.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Traditional design</li>
              <li>• Classic materials</li>
              <li>• Time-honored techniques</li>
              <li>• Period details</li>
              <li>• Heritage finishes</li>
              <li>• Authentic craftsmanship</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Eco-Friendly ${serviceData.title}</h3>
            <p className="text-charcoal/70 mb-4">
              Sustainable ${service.toLowerCase().replace('-', ' ')} solutions that combine environmental responsibility with luxury living in your ${cityData.displayName} home.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Sustainable materials</li>
              <li>• Eco-friendly finishes</li>
              <li>• Energy efficiency</li>
              <li>• Green technology</li>
              <li>• Environmental responsibility</li>
              <li>• Healthy living</li>
            </ul>
          </Card>
        </Grid>
      </ContentSection>

      {/* ${serviceData.title} Process */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Our ${serviceData.title} Process"
          description="Our proven ${service.toLowerCase().replace('-', ' ')} process ensures your ${cityData.displayName} project exceeds expectations and perfectly reflects your vision."
          centered
          className="mb-16"
        />

        <Grid columns={4} gap="lg">
          <Feature
            icon={<span className="text-2xl font-bold text-brass">1</span>}
            title="Initial Consultation"
            description="Comprehensive consultation to understand your vision, needs, and budget for your ${cityData.displayName} ${service.toLowerCase().replace('-', ' ')} project."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">2</span>}
            title="Design Development"
            description="Creation of detailed design plans and 3D renderings for your ${cityData.displayName} ${service.toLowerCase().replace('-', ' ')} project."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">3</span>}
            title="Construction"
            description="Professional construction and installation of your approved ${cityData.displayName} ${service.toLowerCase().replace('-', ' ')} design."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">4</span>}
            title="Final Walkthrough"
            description="Comprehensive final walkthrough and project completion for your ${cityData.displayName} ${service.toLowerCase().replace('-', ' ')} project."
          />
        </Grid>
      </ContentSection>

      {/* Monterey Bay ${serviceData.title} Philosophy */}
      <ContentSection background="charcoal" padding="xl" className="text-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Designed for ${cityData.displayName} Living"
              description="${cityData.displayName}'s unique Monterey Bay environment creates distinct requirements for ${service.toLowerCase().replace('-', ' ')} projects. Our approach honors the community's character while delivering the functionality and elegance modern residents demand."
              className="text-ivory"
            />
            <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
              From morning coffee with ${cityData.characteristics.split(', ')[0]} to evening entertaining that showcases the home's refined character, every ${service.toLowerCase().replace('-', ' ')} decision reflects an understanding of how ${cityData.displayName} residents truly live and enjoy their ${cityData.characteristics.split(', ')[1]} lifestyle.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Monterey Bay Integration</h3>
              <p className="text-ivory/80">${serviceData.title} designs that maximize Monterey Bay views and coastal beauty while maintaining functionality and aesthetic appeal.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">${cityData.displayName} Adaptation</h3>
              <p className="text-ivory/80">Custom solutions that work with the natural ${cityData.characteristics.split(', ')[0]} environment and ${cityData.characteristics.split(', ')[1]} challenges.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Luxury Functionality</h3>
              <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of ${cityData.displayName} residents.</p>
            </Card>
          </div>
        </div>
      </ContentSection>

      {/* Featured ${serviceData.title} Projects */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Featured ${cityData.displayName} ${serviceData.title} Projects"
          description="Explore our portfolio of ${service.toLowerCase().replace('-', ' ')} projects throughout ${cityData.displayName}'s most prestigious Monterey Bay neighborhoods."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/${city}-${service}-1.webp"
              alt="Custom ${service.toLowerCase().replace('-', ' ')} in ${cityData.displayName} with Monterey Bay views and luxury finishes"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Monterey Bay Views</h3>
              <p className="text-charcoal/70 mb-4">${serviceData.title} that maximizes Monterey Bay and coastal views while maintaining functionality and luxury.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">View Integration</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Custom Design</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/${city}-${service}-2.webp"
              alt="Traditional ${service.toLowerCase().replace('-', ' ')} in ${cityData.displayName} with classic design and sophisticated finishes"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Traditional Sophistication</h3>
              <p className="text-charcoal/70 mb-4">Classic ${service.toLowerCase().replace('-', ' ')} with traditional details and sophisticated finishes throughout.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Traditional Design</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Sophisticated Finishes</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/${city}-${service}-3.webp"
              alt="Contemporary ${service.toLowerCase().replace('-', ' ')} in ${cityData.displayName} with modern design and clean lines"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Contemporary Luxury</h3>
              <p className="text-charcoal/70 mb-4">Modern ${service.toLowerCase().replace('-', ' ')} with clean lines and premium materials for sophisticated living.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Modern Design</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Premium Materials</span>
              </div>
            </div>
          </Card>
        </Grid>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection background="white" padding="xl" maxWidth="2xl">
        <SectionHeader
          title="${cityData.displayName} ${serviceData.title} FAQ"
          description="Common questions about ${service.toLowerCase().replace('-', ' ')} services in ${cityData.displayName}"
          centered
          className="mb-16"
        />

        <div className="space-y-8">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a ${service.toLowerCase().replace('-', ' ')} project take?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              A complete ${service.toLowerCase().replace('-', ' ')} project in ${cityData.displayName} typically takes 6-10 weeks from start to finish. This includes 2-3 weeks for design and planning, 1-2 weeks for preparation, 3-5 weeks for construction and installation, and 1-2 weeks for finishing and cleanup. The timeline may vary depending on the scope of work and any unexpected issues that arise.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do I need permits for my ${service.toLowerCase().replace('-', ' ')} project?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Most ${service.toLowerCase().replace('-', ' ')} projects in ${cityData.displayName} require permits, especially if you're making structural changes, moving electrical or plumbing, or making modifications that affect the home's systems. We handle all permit applications and inspections as part of our comprehensive ${service.toLowerCase().replace('-', ' ')} service. This ensures your project meets all local building codes and regulations.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Can I live in my home during the ${service.toLowerCase().replace('-', ' ')} project?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Yes, most of our ${cityData.displayName} ${service.toLowerCase().replace('-', ' ')} clients choose to stay in their homes during the project. We work to minimize disruption by setting up temporary facilities, protecting other areas of your home, and maintaining a clean, organized work environment. We'll discuss your specific needs and preferences during the planning phase.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">What's included in your ${service.toLowerCase().replace('-', ' ')} service?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Our complete ${service.toLowerCase().replace('-', ' ')} service includes design consultation, 3D renderings, permit coordination, custom planning, material selection, professional installation, quality control, and final cleanup. We also provide project management and ongoing support throughout the entire process to ensure your ${cityData.displayName} project exceeds expectations.
            </p>
          </Card>
        </div>
      </ContentSection>
    </ServiceAreaPageLayout>
  )
}`;
}

// Create directories and files
function createServicePages() {
  const baseDir = path.join(__dirname, '..', 'src', 'app', 'service-areas', 'monterey-bay');
  
  // Create monterey-bay directory if it doesn't exist
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
  }

  let totalPages = 0;
  
  // Generate pages for each city and service combination
  newMontereyBayCities.forEach(city => {
    const cityDir = path.join(baseDir, city);
    
    // Create city directory if it doesn't exist
    if (!fs.existsSync(cityDir)) {
      fs.mkdirSync(cityDir, { recursive: true });
    }
    
    services.forEach(service => {
      const serviceDir = path.join(cityDir, service);
      
      // Create service directory if it doesn't exist
      if (!fs.existsSync(serviceDir)) {
        fs.mkdirSync(serviceDir, { recursive: true });
      }
      
      const pagePath = path.join(serviceDir, 'page.tsx');
      const content = generatePageContent(city, service);
      
      // Write the page file
      fs.writeFileSync(pagePath, content);
      totalPages++;
      
      console.log(`Created: ${pagePath}`);
    });
  });
  
  console.log(`\\n✅ Successfully created ${totalPages} service pages for ${newMontereyBayCities.length} new Monterey Bay cities!`);
  console.log(`\\nCities: ${newMontereyBayCities.join(', ')}`);
  console.log(`Services: ${services.join(', ')}`);
  console.log(`\\nTotal pages created: ${totalPages}`);
}

// Run the script
createServicePages();
