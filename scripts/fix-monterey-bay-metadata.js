const fs = require('fs');
const path = require('path');

// Function to fix Monterey Bay metadata in a file
function fixMontereyBayMetadata(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix the regex patterns in metadata
    content = content.replace(
      /openGraph: \{\s*title: '\[\^'\]\+',\s*description: '\[\^'\]\+',\s*type: 'website',\s*\},/g,
      `openGraph: {
    title: 'Custom Kitchen Services | PineWood Cabinets',
    description: 'Professional bespoke kitchen design and construction for Monterey Bay luxury homes.',
    type: 'website',
  },`
    );

    // Also fix if the title and description are missing
    if (content.includes("title: '[^']+',") && content.includes("description: '[^']+',")) {
      content = content.replace(/title: '\[\^'\]\+',/g, "title: 'Custom Kitchen Services | PineWood Cabinets',");
      content = content.replace(/description: '\[\^'\]\+',/g, "description: 'Professional bespoke kitchen design and construction for Monterey Bay luxury homes.',");
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed Monterey Bay metadata in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all Monterey Bay pages
function findMontereyBayPages(dir) {
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

// Find all Monterey Bay pages
const montereyBayPages = findMontereyBayPages('./src/app/service-areas/monterey-bay');
console.log(`Found ${montereyBayPages.length} Monterey Bay pages`);

// Fix metadata in all Monterey Bay pages
let fixedCount = 0;
for (const page of montereyBayPages) {
  if (fixMontereyBayMetadata(page)) {
    fixedCount++;
  }
}

console.log(`Fixed Monterey Bay metadata in ${fixedCount} files`);
