const fs = require('fs');
const path = require('path');

// Internal linking strategy
const internalLinks = {
  // Service pages cross-links
  'services/custom-kitchens': [
    { text: 'bespoke cabinetry', href: '/services/bespoke-cabinetry' },
    { text: 'kitchen remodeling', href: '/services/kitchen-remodeling' },
    { text: 'cabinet hardware', href: '/services/cabinet-hardware' },
    { text: 'kitchen lighting', href: '/services/kitchen-lighting' },
    { text: 'appliance integration', href: '/services/appliance-integration' },
    { text: 'custom storage', href: '/services/custom-storage' },
    { text: 'kitchen design consultation', href: '/services/kitchen-design-consultation' }
  ],
  
  'services/bespoke-cabinetry': [
    { text: 'custom kitchens', href: '/services/custom-kitchens' },
    { text: 'architectural millwork', href: '/services/architectural-millwork' },
    { text: 'libraries closets offices', href: '/services/libraries-closets-offices' },
    { text: 'wine rooms', href: '/services/wine-rooms' },
    { text: 'vanities', href: '/services/vanities' },
    { text: 'paneling', href: '/services/paneling' }
  ],
  
  'services/kitchen-remodeling': [
    { text: 'custom kitchens', href: '/services/custom-kitchens' },
    { text: 'cabinet refacing', href: '/services/cabinet-refacing' },
    { text: 'kitchen design consultation', href: '/services/kitchen-design-consultation' },
    { text: 'kitchen lighting', href: '/services/kitchen-lighting' },
    { text: 'appliance integration', href: '/services/appliance-integration' }
  ],
  
  // Regional cross-links
  'service-areas/silicon-valley': [
    { text: 'Atherton', href: '/service-areas/silicon-valley/atherton' },
    { text: 'Palo Alto', href: '/service-areas/silicon-valley/palo-alto' },
    { text: 'Los Altos', href: '/service-areas/silicon-valley/los-altos' },
    { text: 'Menlo Park', href: '/service-areas/silicon-valley/menlo-park' },
    { text: 'Woodside', href: '/service-areas/silicon-valley/woodside' }
  ],
  
  'service-areas/marin-county': [
    { text: 'Mill Valley', href: '/service-areas/marin-county/mill-valley' },
    { text: 'Tiburon', href: '/service-areas/marin-county/tiburon' },
    { text: 'Sausalito', href: '/service-areas/marin-county/sausalito' },
    { text: 'Ross', href: '/service-areas/marin-county/ross' },
    { text: 'Kentfield', href: '/service-areas/marin-county/kentfield' }
  ],
  
  'service-areas/monterey-bay': [
    { text: 'Carmel', href: '/service-areas/monterey-bay/carmel' },
    { text: 'Monterey', href: '/service-areas/monterey-bay/monterey' },
    { text: 'Pebble Beach', href: '/service-areas/monterey-bay/pebble-beach' },
    { text: 'Pacific Grove', href: '/service-areas/monterey-bay/pacific-grove' },
    { text: 'Santa Cruz', href: '/service-areas/monterey-bay/santa-cruz' }
  ],
  
  // Blog cross-links
  'journal': [
    { text: 'kitchen design trends', href: '/journal/kitchen-design-trends-2025-what-california-elite-are-choosing' },
    { text: 'premium materials', href: '/journal/premium-hardwood-species-for-custom-cabinetry' },
    { text: 'storage solutions', href: '/journal/hidden-storage-solutions-for-modern-kitchens' },
    { text: 'craftsmanship', href: '/journal/the-art-of-hand-crafted-cabinetry' },
    { text: 'sustainability', href: '/journal/sustainable-kitchen-design-principles' }
  ],
  
  // Materials cross-links
  'materials': [
    { text: 'premium hardwood guide', href: '/materials/premium-hardwood-guide' },
    { text: 'wood species guide', href: '/materials/wood-species-guide' },
    { text: 'cabinet hardware guide', href: '/materials/cabinet-hardware-guide' },
    { text: 'kitchen appliance guide', href: '/materials/kitchen-appliance-guide' },
    { text: 'kitchen lighting guide', href: '/materials/kitchen-lighting-guide' }
  ],
  
  // Process cross-links
  'process': [
    { text: 'kitchen layout guide', href: '/process/kitchen-layout-guide' },
    { text: 'kitchen renovation costs', href: '/process/kitchen-renovation-costs' }
  ],
  
  // Portfolio cross-links
  'portfolio': [
    { text: 'Atherton tech executive estate', href: '/portfolio/atherton-tech-executive-estate' },
    { text: 'Beverly Hills modern kitchen', href: '/portfolio/beverly-hills-modern-kitchen' },
    { text: 'Lake Tahoe lodge kitchen', href: '/portfolio/lake-tahoe-lodge-kitchen' },
    { text: 'Malibu coastal kitchen', href: '/portfolio/malibu-coastal-kitchen' },
    { text: 'Montecito wine country kitchen', href: '/portfolio/montecito-wine-country-kitchen' },
    { text: 'Palo Alto tech executive kitchen', href: '/portfolio/palo-alto-tech-executive-kitchen' }
  ]
};

// Function to add internal links to a page
function addInternalLinks(filePath, pageType) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Get the appropriate links for this page type
    const links = internalLinks[pageType] || [];
    
    if (links.length === 0) return;
    
    // Find the main content section and add internal links
    const contentSectionRegex = /<div className="prose prose-lg max-w-none">([\s\S]*?)<\/div>/;
    const match = content.match(contentSectionRegex);
    
    if (match) {
      const contentSection = match[1];
      
      // Add internal links section before the closing div
      const internalLinksSection = `
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold text-charcoal mb-4">Related Services & Resources</h3>
          <div className="flex flex-wrap gap-2">
            ${links.map(link => 
              `<a href="${link.href}" className="inline-block bg-white text-deep-green px-4 py-2 rounded-full hover:bg-deep-green hover:text-white transition-colors text-sm font-medium">${link.text}</a>`
            ).join('')}
          </div>
        </div>
      `;
      
      const updatedContent = content.replace(
        contentSectionRegex,
        `<div className="prose prose-lg max-w-none">${contentSection}${internalLinksSection}</div>`
      );
      
      fs.writeFileSync(filePath, updatedContent);
      console.log(`Added internal links to: ${filePath}`);
    }
  } catch (error) {
    console.log(`Error processing ${filePath}:`, error.message);
  }
}

// Function to process all pages
function processAllPages() {
  const baseDir = path.join(__dirname, '..', 'src', 'app');
  
  // Process service pages
  const servicesDir = path.join(baseDir, 'services');
  if (fs.existsSync(servicesDir)) {
    const serviceFiles = fs.readdirSync(servicesDir);
    serviceFiles.forEach(file => {
      if (file === 'page.tsx') {
        addInternalLinks(path.join(servicesDir, file), 'services/custom-kitchens');
      } else if (fs.statSync(path.join(servicesDir, file)).isDirectory()) {
        const pageFile = path.join(servicesDir, file, 'page.tsx');
        if (fs.existsSync(pageFile)) {
          addInternalLinks(pageFile, `services/${file}`);
        }
      }
    });
  }
  
  // Process service area pages
  const serviceAreasDir = path.join(baseDir, 'service-areas');
  if (fs.existsSync(serviceAreasDir)) {
    const regionDirs = fs.readdirSync(serviceAreasDir);
    regionDirs.forEach(region => {
      const regionPath = path.join(serviceAreasDir, region);
      if (fs.statSync(regionPath).isDirectory()) {
        const pageFile = path.join(regionPath, 'page.tsx');
        if (fs.existsSync(pageFile)) {
          addInternalLinks(pageFile, `service-areas/${region}`);
        }
      }
    });
  }
  
  // Process other main pages
  const mainPages = [
    { file: path.join(baseDir, 'journal', 'page.tsx'), type: 'journal' },
    { file: path.join(baseDir, 'materials', 'page.tsx'), type: 'materials' },
    { file: path.join(baseDir, 'process', 'page.tsx'), type: 'process' },
    { file: path.join(baseDir, 'portfolio', 'page.tsx'), type: 'portfolio' }
  ];
  
  mainPages.forEach(({ file, type }) => {
    if (fs.existsSync(file)) {
      addInternalLinks(file, type);
    }
  });
  
  console.log('Internal linking enhancement completed!');
}

// Run the script
processAllPages();
