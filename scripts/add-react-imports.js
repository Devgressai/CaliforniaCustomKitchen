const fs = require('fs');
const path = require('path');

// Function to add React import to a file
function addReactImport(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if React is already imported
    if (content.includes('import React')) {
      return false;
    }
    
    // Add React import at the top
    const lines = content.split('\n');
    const importIndex = lines.findIndex(line => line.startsWith('import '));
    
    if (importIndex !== -1) {
      lines.splice(importIndex, 0, "import React from 'react'");
      content = lines.join('\n');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Added React import to: ${filePath}`);
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
  if (addReactImport(page)) {
    fixedCount++;
  }
}

console.log(`Added React import to ${fixedCount} files.`);
