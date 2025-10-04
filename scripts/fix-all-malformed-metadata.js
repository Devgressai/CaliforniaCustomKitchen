const fs = require('fs');
const path = require('path');

// Function to fix all malformed metadata in a file
function fixMalformedMetadata(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix the regex patterns in metadata - multiple patterns
    content = content.replace(
      /openGraph: \{\s*title: '\[\^'\]\+',\s*description: '\[\^'\]\+',\s*type: 'website',\s*\},/g,
      `openGraph: {
    title: 'Custom Kitchen Services | PineWood Cabinets',
    description: 'Professional bespoke kitchen design and construction for Monterey Bay luxury homes.',
    type: 'website',
  },`
    );

    // Also fix if only title is malformed
    content = content.replace(/title: '\[\^'\]\+',/g, "title: 'Custom Kitchen Services | PineWood Cabinets',");
    content = content.replace(/description: '\[\^'\]\+',/g, "description: 'Professional bespoke kitchen design and construction for Monterey Bay luxury homes.',");

    // Fix if there are still malformed patterns
    if (content.includes("title: '[^']+',") || content.includes("description: '[^']+',") || content.includes("title: '[^']+',")) {
      content = content.replace(/title: '\[\^'\]\+',/g, "title: 'Custom Kitchen Services | PineWood Cabinets',");
      content = content.replace(/description: '\[\^'\]\+',/g, "description: 'Professional bespoke kitchen design and construction for Monterey Bay luxury homes.',");
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed malformed metadata in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files that need fixing
function findFilesNeedingFix(dir) {
  const files = [];

  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('page.tsx')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes("title: '[^']+',") || content.includes("description: '[^']+',") || content.includes("title: '[^']+',")) {
          files.push(fullPath);
        }
      }
    }
  }

  traverse(dir);
  return files;
}

// Find all files that need fixing
const filesNeedingFix = findFilesNeedingFix('./src/app/service-areas');
console.log(`Found ${filesNeedingFix.length} files needing metadata fix`);

// Fix metadata in all files
let fixedCount = 0;
for (const file of filesNeedingFix) {
  if (fixMalformedMetadata(file)) {
    fixedCount++;
  }
}

console.log(`Fixed malformed metadata in ${fixedCount} files`);
