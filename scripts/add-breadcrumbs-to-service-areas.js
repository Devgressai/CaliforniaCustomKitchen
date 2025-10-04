const fs = require('fs');
const path = require('path');

// Function to add breadcrumbs to a service area page
function addBreadcrumbsToServiceAreaPage(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if breadcrumbs already exist
    if (content.includes('Breadcrumbs') || content.includes('LocationBreadcrumbs')) {
      console.log(`Skipping ${filePath} - breadcrumbs already exist`);
      return;
    }
    
    // Parse the path to determine breadcrumb structure
    const pathParts = filePath.split('/');
    const serviceAreaIndex = pathParts.indexOf('service-areas');
    const relevantParts = pathParts.slice(serviceAreaIndex + 1);
    
    // Remove 'page.tsx' from the end
    const pathSegments = relevantParts.filter(part => part !== 'page.tsx');
    
    // Generate breadcrumb items
    const breadcrumbItems = [];
    let currentPath = '/service-areas';
    
    // Add Service Areas as first item
    breadcrumbItems.push({ name: 'Service Areas', href: '/service-areas' });
    
    // Add each path segment
    for (let i = 0; i < pathSegments.length; i++) {
      const segment = pathSegments[i];
      currentPath += `/${segment}`;
      
      // Convert kebab-case to title case
      let name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      // Handle special cases
      const specialCases = {
        'service-areas': 'Service Areas',
        'silicon-valley': 'Silicon Valley',
        'santa-barbara': 'Santa Barbara',
        'lake-tahoe-truckee': 'Lake Tahoe & Truckee',
        'los-angeles': 'Los Angeles',
        'orange-county': 'Orange County',
        'san-diego': 'San Diego',
        'east-bay': 'East Bay',
        'sacramento-foothills': 'Sacramento Foothills',
        'central-coast': 'Central Coast',
        'custom-kitchens': 'Custom Kitchens',
        'bespoke-cabinetry': 'Bespoke Cabinetry',
        'architectural-millwork': 'Architectural Millwork',
        'wine-rooms': 'Wine Rooms',
        'libraries-closets-offices': 'Libraries, Closets & Offices',
        'los-altos-hills': 'Los Altos Hills',
        'portola-valley': 'Portola Valley',
        'berkeley-claremont-elmwood': 'Berkeley (Claremont & Elmwood)',
        'granite-bay': 'Granite Bay',
        'carmel-valley': 'Carmel Valley',
        'pebble-beach': 'Pebble Beach',
        'big-sur': 'Big Sur',
        'santa-cruz': 'Santa Cruz',
        'bel-air': 'Bel Air',
        'holmby-hills': 'Holmby Hills',
        'beverly-hills': 'Beverly Hills',
        'beverly-park': 'Beverly Park',
        'pacific-palisades': 'Pacific Palisades',
        'hollywood-hills': 'Hollywood Hills',
        'hope-ranch': 'Hope Ranch',
        'rancho-santa-fe': 'Rancho Santa Fe',
        'la-jolla': 'La Jolla',
        'newport-coast': 'Newport Coast',
        'laguna-beach': 'Laguna Beach',
        'corona-del-mar': 'Corona del Mar',
        'martis-camp': 'Martis Camp',
        'schaffers-mill': 'Schaffer\'s Mill',
        'kitchen-remodel': 'Kitchen Remodel',
        'kitchen-design': 'Kitchen Design',
        'kitchen-cabinets': 'Kitchen Cabinets',
        'custom-kitchen': 'Custom Kitchen'
      };
      
      if (specialCases[segment]) {
        name = specialCases[segment];
      }
      
      const isLast = i === pathSegments.length - 1;
      breadcrumbItems.push({
        name,
        href: currentPath,
        current: isLast
      });
    }
    
    // Add Breadcrumbs import if not present
    let newContent = content;
    if (!content.includes("import { Breadcrumbs }")) {
      // Find the last import statement
      const importRegex = /import.*from.*['"][^'"]*['"];?\s*\n/g;
      const imports = content.match(importRegex) || [];
      const lastImport = imports[imports.length - 1];
      
      if (lastImport) {
        const lastImportIndex = content.lastIndexOf(lastImport);
        const insertIndex = lastImportIndex + lastImport.length;
        newContent = content.slice(0, insertIndex) + 
          "import { Breadcrumbs } from '@/components/Breadcrumbs'\n" + 
          content.slice(insertIndex);
      }
    }
    
    // Add breadcrumbs section after StructuredData
    const structuredDataRegex = /(<StructuredData[^>]*\/>)/;
    const match = newContent.match(structuredDataRegex);
    
    if (match) {
      const breadcrumbSection = `
      
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={${JSON.stringify(breadcrumbItems, null, 12)}} 
          />
        </div>
      </section>`;
      
      newContent = newContent.replace(match[0], match[0] + breadcrumbSection);
    }
    
    // Write the updated content
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Added breadcrumbs to ${filePath}`);
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find all service area pages
function findServiceAreaPages(dir) {
  const pages = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item === 'page.tsx' && currentDir.includes('service-areas')) {
        pages.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return pages;
}

// Main execution
const serviceAreasDir = path.join(__dirname, '..', 'src', 'app', 'service-areas');
const pages = findServiceAreaPages(serviceAreasDir);

console.log(`Found ${pages.length} service area pages`);

// Process each page
let processed = 0;
for (const page of pages) {
  addBreadcrumbsToServiceAreaPage(page);
  processed++;
  
  if (processed % 50 === 0) {
    console.log(`Processed ${processed}/${pages.length} pages`);
  }
}

console.log(`Completed processing ${processed} pages`);
