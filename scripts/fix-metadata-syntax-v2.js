const fs = require('fs');
const path = require('path');

// Function to fix metadata syntax in a file
function fixMetadataSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing brace in openGraph - look for the pattern where openGraph ends with type: 'website', but no closing brace
    const openGraphPattern = /(openGraph: \{\s*title: '[^']+',\s*description: '[^']+',\s*type: 'website',)(\s*\},)/g;
    if (openGraphPattern.test(content)) {
      content = content.replace(openGraphPattern, "openGraph: {\n    title: '[^']+',\n    description: '[^']+',\n    type: 'website',\n  },\n");
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed metadata syntax in: ${filePath}`);
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
      } else if (item.endsWith('page.tsx')) {
        pages.push(fullPath);
      }
    }
  }

  traverse(dir);
  return pages;
}

// Find all service area pages
const serviceAreaPages = findServiceAreaPages('./src/app/service-areas');
console.log(`Found ${serviceAreaPages.length} service area pages`);

// Fix metadata syntax in all service area pages
let fixedCount = 0;
for (const page of serviceAreaPages) {
  if (fixMetadataSyntax(page)) {
    fixedCount++;
  }
}

console.log(`Fixed metadata syntax in ${fixedCount} files`);
