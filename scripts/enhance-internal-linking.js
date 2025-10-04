const fs = require('fs');
const path = require('path');

// Function to enhance internal linking in a page
function enhanceInternalLinking(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already enhanced
    if (content.includes('InternalLink') || content.includes('enhanced-linking')) {
      console.log(`Skipping ${filePath} - already enhanced`);
      return;
    }
    
    let newContent = content;
    
    // Determine page type and add relevant internal links
    const pathParts = filePath.split('/');
    let pageType = '';
    let location = '';
    let service = '';
    
    if (pathParts.includes('service-areas')) {
      pageType = 'service-area';
      const serviceAreaIndex = pathParts.indexOf('service-areas');
      const relevantParts = pathParts.slice(serviceAreaIndex + 1).filter(part => part !== 'page.tsx');
      
      if (relevantParts.length >= 2) {
        location = relevantParts[0];
        service = relevantParts[1];
      } else if (relevantParts.length === 1) {
        location = relevantParts[0];
      }
    } else if (pathParts.includes('services')) {
      pageType = 'service';
      const serviceIndex = pathParts.indexOf('services');
      const relevantParts = pathParts.slice(serviceIndex + 1).filter(part => part !== 'page.tsx');
      if (relevantParts.length > 0) {
        service = relevantParts[0];
      }
    }
    
    // Add internal linking section based on page type
    if (pageType === 'service-area' && location && service) {
      // Add related services and locations section
      const internalLinksSection = `
      
      {/* Related Services & Locations */}
      <ContentSection background="gray" padding="lg">
        <SectionHeader
          title="Related Services & Locations"
          description="Explore our comprehensive kitchen services and other locations we serve"
          centered
          className="mb-12"
        />
        
        <Grid columns={2} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Other ${location} Services</h3>
            <div className="space-y-3">
              <Link href="/service-areas/${location}/custom-kitchen" className="block text-deep-green hover:text-charcoal transition-colors">
                Custom Kitchens ${location}
              </Link>
              <Link href="/service-areas/${location}/kitchen-design" className="block text-deep-green hover:text-charcoal transition-colors">
                Kitchen Design ${location}
              </Link>
              <Link href="/service-areas/${location}/kitchen-cabinets" className="block text-deep-green hover:text-charcoal transition-colors">
                Kitchen Cabinets ${location}
              </Link>
            </div>
          </Card>
          
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Nearby Locations</h3>
            <div className="space-y-3">
              <Link href="/service-areas" className="block text-deep-green hover:text-charcoal transition-colors">
                All Service Areas
              </Link>
              <Link href="/services/${service.toLowerCase().replace(/\s+/g, '-')}" className="block text-deep-green hover:text-charcoal transition-colors">
                ${service} Services
              </Link>
              <Link href="/portfolio" className="block text-deep-green hover:text-charcoal transition-colors">
                View Our Portfolio
              </Link>
            </div>
          </Card>
        </Grid>
      </ContentSection>`;
      
      // Add Link import if not present
      if (!content.includes("import Link from 'next/link'")) {
        const importRegex = /import.*from.*['"][^'"]*['"];?\s*\n/g;
        const imports = newContent.match(importRegex) || [];
        const lastImport = imports[imports.length - 1];
        
        if (lastImport) {
          const lastImportIndex = newContent.lastIndexOf(lastImport);
          const insertIndex = lastImportIndex + lastImport.length;
          newContent = newContent.slice(0, insertIndex) + 
            "import Link from 'next/link'\n" + 
            newContent.slice(insertIndex);
        }
      }
      
      // Insert before the closing ServiceAreaPageLayout
      const closingTag = '</ServiceAreaPageLayout>';
      const closingIndex = newContent.lastIndexOf(closingTag);
      if (closingIndex !== -1) {
        newContent = newContent.slice(0, closingIndex) + internalLinksSection + '\n    ' + newContent.slice(closingIndex);
      }
    } else if (pageType === 'service' && service) {
      // Add related services section
      const internalLinksSection = `
      
      {/* Related Services */}
      <ContentSection background="gray" padding="lg">
        <SectionHeader
          title="Related Services"
          description="Explore our comprehensive range of kitchen and cabinetry services"
          centered
          className="mb-12"
        />
        
        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Core Services</h3>
            <div className="space-y-3">
              <Link href="/services/custom-kitchens" className="block text-deep-green hover:text-charcoal transition-colors">
                Custom Kitchens
              </Link>
              <Link href="/services/bespoke-cabinetry" className="block text-deep-green hover:text-charcoal transition-colors">
                Bespoke Cabinetry
              </Link>
              <Link href="/services/kitchen-remodeling" className="block text-deep-green hover:text-charcoal transition-colors">
                Kitchen Remodeling
              </Link>
            </div>
          </Card>
          
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Specialized Services</h3>
            <div className="space-y-3">
              <Link href="/services/architectural-millwork" className="block text-deep-green hover:text-charcoal transition-colors">
                Architectural Millwork
              </Link>
              <Link href="/services/wine-rooms" className="block text-deep-green hover:text-charcoal transition-colors">
                Wine Rooms
              </Link>
              <Link href="/services/custom-storage" className="block text-deep-green hover:text-charcoal transition-colors">
                Custom Storage
              </Link>
            </div>
          </Card>
          
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Design & Planning</h3>
            <div className="space-y-3">
              <Link href="/services/kitchen-design-consultation" className="block text-deep-green hover:text-charcoal transition-colors">
                Design Consultation
              </Link>
              <Link href="/services/kitchen-lighting" className="block text-deep-green hover:text-charcoal transition-colors">
                Kitchen Lighting
              </Link>
              <Link href="/services/cabinet-hardware" className="block text-deep-green hover:text-charcoal transition-colors">
                Cabinet Hardware
              </Link>
            </div>
          </Card>
        </Grid>
      </ContentSection>`;
      
      // Add Link import if not present
      if (!content.includes("import Link from 'next/link'")) {
        const importRegex = /import.*from.*['"][^'"]*['"];?\s*\n/g;
        const imports = newContent.match(importRegex) || [];
        const lastImport = imports[imports.length - 1];
        
        if (lastImport) {
          const lastImportIndex = newContent.lastIndexOf(lastImport);
          const insertIndex = lastImportIndex + lastImport.length;
          newContent = newContent.slice(0, insertIndex) + 
            "import Link from 'next/link'\n" + 
            newContent.slice(insertIndex);
        }
      }
      
      // Insert before the closing ServicePageLayout
      const closingTag = '</ServicePageLayout>';
      const closingIndex = newContent.lastIndexOf(closingTag);
      if (closingIndex !== -1) {
        newContent = newContent.slice(0, closingIndex) + internalLinksSection + '\n    ' + newContent.slice(closingIndex);
      }
    }
    
    // Write the updated content
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Enhanced internal linking for ${filePath}`);
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find all page files
function findPageFiles(dir) {
  const pages = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item === 'page.tsx' && !fullPath.includes('node_modules')) {
        pages.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return pages;
}

// Main execution
const appDir = path.join(__dirname, '..', 'src', 'app');
const pages = findPageFiles(appDir);

console.log(`Found ${pages.length} page files`);

// Process each page
let processed = 0;
for (const page of pages) {
  enhanceInternalLinking(page);
  processed++;
  
  if (processed % 50 === 0) {
    console.log(`Processed ${processed}/${pages.length} pages`);
  }
}

console.log(`Completed processing ${processed} pages`);
