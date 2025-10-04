const fs = require('fs');
const path = require('path');

// Function to add breadcrumbs to a portfolio page
function addBreadcrumbsToPortfolioPage(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if breadcrumbs already exist
    if (content.includes('Breadcrumbs') || content.includes('LocationBreadcrumbs')) {
      console.log(`Skipping ${filePath} - breadcrumbs already exist`);
      return;
    }
    
    // Parse the path to determine breadcrumb structure
    const pathParts = filePath.split('/');
    const portfolioIndex = pathParts.indexOf('portfolio');
    const relevantParts = pathParts.slice(portfolioIndex + 1);
    
    // Remove 'page.tsx' from the end
    const pathSegments = relevantParts.filter(part => part !== 'page.tsx');
    
    // Generate breadcrumb items
    const breadcrumbItems = [];
    let currentPath = '/portfolio';
    
    // Add Portfolio as first item
    breadcrumbItems.push({ name: 'Portfolio', href: '/portfolio' });
    
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
        'atherton-tech-executive-estate': 'Atherton Tech Executive Estate',
        'beverly-hills-modern-kitchen': 'Beverly Hills Modern Kitchen',
        'lake-tahoe-lodge-kitchen': 'Lake Tahoe Lodge Kitchen',
        'malibu-coastal-kitchen': 'Malibu Coastal Kitchen',
        'montecito-wine-country-kitchen': 'Montecito Wine Country Kitchen',
        'palo-alto-tech-executive-kitchen': 'Palo Alto Tech Executive Kitchen'
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

// Function to recursively find all portfolio pages
function findPortfolioPages(dir) {
  const pages = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item === 'page.tsx' && currentDir.includes('portfolio')) {
        pages.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return pages;
}

// Main execution
const portfolioDir = path.join(__dirname, '..', 'src', 'app', 'portfolio');
const pages = findPortfolioPages(portfolioDir);

console.log(`Found ${pages.length} portfolio pages`);

// Process each page
let processed = 0;
for (const page of pages) {
  addBreadcrumbsToPortfolioPage(page);
  processed++;
}

console.log(`Completed processing ${processed} pages`);
