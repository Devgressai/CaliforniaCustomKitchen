const fs = require('fs');
const path = require('path');

// Function to remove React import from a file
function removeReactImport(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if React is imported
    if (!content.includes("import React from 'react'")) {
      return false;
    }
    
    // Remove React import
    content = content.replace(/import React from 'react'\n/, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Removed React import from: ${filePath}`);
    return true;
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
  if (removeReactImport(page)) {
    fixedCount++;
  }
}

console.log(`Removed React import from ${fixedCount} files.`);
