const fs = require('fs');
const path = require('path');

// Function to update a page to use standardized layout components
function standardizePage(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already standardized
    if (content.includes('ServiceAreaPageLayout') || 
        content.includes('ServicePageLayout') || 
        content.includes('MaterialsPageLayout') ||
        content.includes('PortfolioPageLayout') ||
        content.includes('JournalPageLayout') ||
        content.includes('ProcessPageLayout')) {
      console.log(`Skipping ${filePath} - already standardized`);
      return;
    }
    
    let newContent = content;
    
    // Determine page type based on path
    const pathParts = filePath.split('/');
    let pageType = '';
    let location = '';
    let service = '';
    let material = '';
    let project = '';
    let article = '';
    let process = '';
    
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
    } else if (pathParts.includes('materials')) {
      pageType = 'materials';
      const materialsIndex = pathParts.indexOf('materials');
      const relevantParts = pathParts.slice(materialsIndex + 1).filter(part => part !== 'page.tsx');
      if (relevantParts.length > 0) {
        material = relevantParts[0];
      }
    } else if (pathParts.includes('portfolio')) {
      pageType = 'portfolio';
      const portfolioIndex = pathParts.indexOf('portfolio');
      const relevantParts = pathParts.slice(portfolioIndex + 1).filter(part => part !== 'page.tsx');
      if (relevantParts.length > 0) {
        project = relevantParts[0];
      }
    } else if (pathParts.includes('journal')) {
      pageType = 'journal';
      const journalIndex = pathParts.indexOf('journal');
      const relevantParts = pathParts.slice(journalIndex + 1).filter(part => part !== 'page.tsx');
      if (relevantParts.length > 0) {
        article = relevantParts[0];
      }
    } else if (pathParts.includes('process')) {
      pageType = 'process';
      const processIndex = pathParts.indexOf('process');
      const relevantParts = pathParts.slice(processIndex + 1).filter(part => part !== 'page.tsx');
      if (relevantParts.length > 0) {
        process = relevantParts[0];
      }
    }
    
    // Update imports
    const importUpdates = {
      'HeroQuiet': 'ServiceAreaHero',
      'Hero': 'StandardHero',
      'CTASection': 'CTASection', // Keep as is
      'StructuredData': 'StructuredData', // Keep as is
      'Breadcrumbs': 'Breadcrumbs' // Keep as is
    };
    
    // Add new imports
    let newImports = '';
    if (pageType === 'service-area') {
      newImports = `import { ServiceAreaPageLayout } from '@/components/PageLayout'\nimport { ServiceAreaHero } from '@/components/StandardHero'\nimport { ContentSection, SectionHeader, Grid, Card, Feature, ProcessStep } from '@/components/ContentSection'\n`;
    } else if (pageType === 'service') {
      newImports = `import { ServicePageLayout } from '@/components/PageLayout'\nimport { ServiceHero } from '@/components/StandardHero'\nimport { ContentSection, SectionHeader, Grid, Card, Feature, ProcessStep } from '@/components/ContentSection'\n`;
    } else if (pageType === 'materials') {
      newImports = `import { MaterialsPageLayout } from '@/components/PageLayout'\nimport { MaterialsHero } from '@/components/StandardHero'\nimport { ContentSection, SectionHeader, Grid, Card, Feature, ProcessStep } from '@/components/ContentSection'\n`;
    } else if (pageType === 'portfolio') {
      newImports = `import { PortfolioPageLayout } from '@/components/PageLayout'\nimport { PortfolioHero } from '@/components/StandardHero'\nimport { ContentSection, SectionHeader, Grid, Card, Feature, ProcessStep } from '@/components/ContentSection'\n`;
    } else if (pageType === 'journal') {
      newImports = `import { JournalPageLayout } from '@/components/PageLayout'\nimport { JournalHero } from '@/components/StandardHero'\nimport { ContentSection, SectionHeader, Grid, Card, Feature, ProcessStep } from '@/components/ContentSection'\n`;
    } else if (pageType === 'process') {
      newImports = `import { ProcessPageLayout } from '@/components/PageLayout'\nimport { ProcessHero } from '@/components/StandardHero'\nimport { ContentSection, SectionHeader, Grid, Card, Feature, ProcessStep } from '@/components/ContentSection'\n`;
    }
    
    // Add new imports after existing imports
    const importRegex = /import.*from.*['"][^'"]*['"];?\s*\n/g;
    const imports = newContent.match(importRegex) || [];
    if (imports.length > 0) {
      const lastImport = imports[imports.length - 1];
      const lastImportIndex = newContent.lastIndexOf(lastImport);
      const insertIndex = lastImportIndex + lastImport.length;
      newContent = newContent.slice(0, insertIndex) + newImports + newContent.slice(insertIndex);
    }
    
    // Update component structure based on page type
    if (pageType === 'service-area' && location && service) {
      // Update service area page
      const componentStartRegex = /(export default function.*?\{[\s\S]*?return\s*\(\s*<>)/;
      const componentMatch = newContent.match(componentStartRegex);
      
      if (componentMatch) {
        const layoutWrapper = `<ServiceAreaPageLayout
      location="${location}"
      service="${service}"
      structuredData={{ service: serviceSchema }}
    >`;
        
        newContent = newContent.replace(componentStartRegex, componentMatch[0] + layoutWrapper);
        
        // Close the layout wrapper at the end
        const endRegex = /(\s*<\/>\s*\)\s*\)\s*\}\s*$)/;
        newContent = newContent.replace(endRegex, '\n    </ServiceAreaPageLayout>\n  )\n}');
      }
    }
    
    // Write the updated content
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Standardized ${filePath}`);
    
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
  standardizePage(page);
  processed++;
  
  if (processed % 50 === 0) {
    console.log(`Processed ${processed}/${pages.length} pages`);
  }
}

console.log(`Completed processing ${processed} pages`);
