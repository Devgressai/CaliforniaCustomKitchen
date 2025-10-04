const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax errors in service area pages
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the malformed JSX structure - remove extra fragment wrapper
    content = content.replace(
      /return \(\s*<ServiceAreaPageLayout/g,
      'return (\n    <ServiceAreaPageLayout'
    );
    
    // Fix the closing - remove extra fragment wrapper
    content = content.replace(
      /\/>\s*<\/>\s*\)\s*\)\s*}/g,
      '/>\n  )\n}'
    );
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find and fix all service area pages
function fixAllServiceAreaPages() {
  const serviceAreasDir = path.join(__dirname, '..', 'src', 'app', 'service-areas');
  let fixedCount = 0;
  let errorCount = 0;
  
  function processDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        // Recursively process subdirectories
        processDirectory(itemPath);
      } else if (item === 'page.tsx') {
        // This is a page file, try to fix it
        if (fixJSXSyntax(itemPath)) {
          fixedCount++;
        } else {
          errorCount++;
        }
      }
    }
  }
  
  processDirectory(serviceAreasDir);
  
  console.log(`\n✅ Fixed ${fixedCount} files`);
  if (errorCount > 0) {
    console.log(`❌ ${errorCount} files had errors`);
  }
}

// Run the fix
fixAllServiceAreaPages();
