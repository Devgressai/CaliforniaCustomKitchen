// Test script to check if the import path works
const fs = require('fs');
const path = require('path');

// Check if the PageLayout file exists
const pageLayoutPath = './src/components/PageLayout.tsx';
if (fs.existsSync(pageLayoutPath)) {
  console.log('✓ PageLayout file exists');
} else {
  console.log('✗ PageLayout file does not exist');
}

// Check if the import path resolves correctly
const resolvedPath = path.resolve(pageLayoutPath);
console.log('Resolved path:', resolvedPath);

// Check if the file can be read
try {
  const content = fs.readFileSync(resolvedPath, 'utf8');
  console.log('✓ File can be read, length:', content.length);
} catch (error) {
  console.log('✗ Error reading file:', error.message);
}

// Check if there are any obvious syntax errors in the import
const serviceAreaPageContent = fs.readFileSync('./src/app/service-areas/alameda/custom-kitchen/page.tsx', 'utf8');
const importLine = serviceAreaPageContent.split('\n').find(line => line.includes('ServiceAreaPageLayout'));
console.log('Import line:', importLine);
