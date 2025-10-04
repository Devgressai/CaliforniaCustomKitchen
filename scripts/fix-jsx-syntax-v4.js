const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax issues
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove malformed fragment wrappers around ServiceAreaPageLayout
    // Pattern: <ServiceAreaPageLayout ... > ... </> )
    const fragmentPattern = /(<ServiceAreaPageLayout[^>]*>[\s\S]*?)(\s*<\/>\s*\)\s*)$/gm;
    if (fragmentPattern.test(content)) {
      content = content.replace(fragmentPattern, '$1\n  )\n}');
      modified = true;
    }

    // Fix 2: Fix missing closing tag for ServiceAreaPageLayout
    // Pattern: ... /> </> )
    const missingClosingPattern = /(\s*\/>\s*<\/>\s*\)\s*)$/gm;
    if (missingClosingPattern.test(content)) {
      content = content.replace(missingClosingPattern, '\n  )\n}');
      modified = true;
    }

    // Fix 3: Fix any remaining malformed JSX structure
    // Look for patterns like: ... /> </> ) }
    const malformedPattern = /(\s*\/>\s*<\/>\s*\)\s*\}\s*)$/gm;
    if (malformedPattern.test(content)) {
      content = content.replace(malformedPattern, '\n  )\n}');
      modified = true;
    }

    // Fix 4: Ensure proper closing of ServiceAreaPageLayout
    // Look for: ... /> </> ) and replace with proper closing
    const properClosingPattern = /(\s*\/>\s*<\/>\s*\)\s*)$/gm;
    if (properClosingPattern.test(content)) {
      content = content.replace(properClosingPattern, '\n  )\n}');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX syntax in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all service area pages
function findServiceAreaPages(dir) {
  const pages = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item === 'page.tsx') {
        pages.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return pages;
}

// Main execution
const serviceAreasDir = path.join(__dirname, '../src/app/service-areas');
const pages = findServiceAreaPages(serviceAreasDir);

console.log(`Found ${pages.length} service area pages to check...`);

let fixedCount = 0;
for (const page of pages) {
  if (fixJSXSyntax(page)) {
    fixedCount++;
  }
}

console.log(`Fixed JSX syntax in ${fixedCount} files.`);
