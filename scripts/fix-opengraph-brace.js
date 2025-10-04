const fs = require('fs');
const path = require('path');

// Function to fix openGraph closing brace in a file
function fixOpenGraphBrace(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix the specific pattern where openGraph is missing a closing brace
    // Pattern: type: 'website', followed by }, (missing closing brace for openGraph)
    const openGraphPattern = /(openGraph: \{\s*title: '[^']+',\s*description: '[^']+',\s*type: 'website',)(\s*\},)/g;
    if (openGraphPattern.test(content)) {
      content = content.replace(openGraphPattern, "$1\n  },");
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed openGraph brace in: ${filePath}`);
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

// Fix openGraph brace in all service area pages
let fixedCount = 0;
for (const page of serviceAreaPages) {
  if (fixOpenGraphBrace(page)) {
    fixedCount++;
  }
}

console.log(`Fixed openGraph brace in ${fixedCount} files`);
