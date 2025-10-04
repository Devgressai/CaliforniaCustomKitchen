const fs = require('fs');
const path = require('path');

// Function to add breadcrumbs to a service page
function addBreadcrumbsToServicePage(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if breadcrumbs already exist
    if (content.includes('Breadcrumbs') || content.includes('LocationBreadcrumbs')) {
      console.log(`Skipping ${filePath} - breadcrumbs already exist`);
      return;
    }
    
    // Parse the path to determine breadcrumb structure
    const pathParts = filePath.split('/');
    const serviceIndex = pathParts.indexOf('services');
    const relevantParts = pathParts.slice(serviceIndex + 1);
    
    // Remove 'page.tsx' from the end
    const pathSegments = relevantParts.filter(part => part !== 'page.tsx');
    
    // Generate breadcrumb items
    const breadcrumbItems = [];
    let currentPath = '/services';
    
    // Add Services as first item
    breadcrumbItems.push({ name: 'Services', href: '/services' });
    
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
        'custom-kitchens': 'Custom Kitchens',
        'bespoke-cabinetry': 'Bespoke Cabinetry',
        'architectural-millwork': 'Architectural Millwork',
        'wine-rooms': 'Wine Rooms',
        'libraries-closets-offices': 'Libraries, Closets & Offices',
        'kitchen-design-consultation': 'Kitchen Design Consultation',
        'cabinet-hardware': 'Cabinet Hardware',
        'kitchen-lighting': 'Kitchen Lighting',
        'appliance-integration': 'Appliance Integration',
        'cabinet-refacing': 'Cabinet Refacing',
        'custom-storage': 'Custom Storage',
        'kitchen-remodeling': 'Kitchen Remodeling'
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
    
    // Add breadcrumbs section after any existing structured data or at the beginning of the component
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
    } else {
      // If no structured data, add breadcrumbs at the beginning of the component
      const componentStartRegex = /(export default function.*?\{[\s\S]*?return\s*\(\s*<>)/;
      const componentMatch = newContent.match(componentStartRegex);
      
      if (componentMatch) {
        const breadcrumbSection = `
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={${JSON.stringify(breadcrumbItems, null, 12)}} 
          />
        </div>
      </section>`;
        
        newContent = newContent.replace(componentMatch[0], componentMatch[0] + breadcrumbSection);
      }
    }
    
    // Write the updated content
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Added breadcrumbs to ${filePath}`);
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find all service pages
function findServicePages(dir) {
  const pages = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item === 'page.tsx' && currentDir.includes('services')) {
        pages.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return pages;
}

// Main execution
const servicesDir = path.join(__dirname, '..', 'src', 'app', 'services');
const pages = findServicePages(servicesDir);

console.log(`Found ${pages.length} service pages`);

// Process each page
let processed = 0;
for (const page of pages) {
  addBreadcrumbsToServicePage(page);
  processed++;
}

console.log(`Completed processing ${processed} pages`);
