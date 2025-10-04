// Test script to check import resolution
const fs = require('fs');
const path = require('path');

// Check if the TestPageLayout file exists
const testPageLayoutPath = './src/components/TestPageLayout.tsx';
if (fs.existsSync(testPageLayoutPath)) {
  console.log('✓ TestPageLayout file exists');
  
  // Check if the file can be read
  try {
    const content = fs.readFileSync(testPageLayoutPath, 'utf8');
    console.log('✓ File can be read, length:', content.length);
    
    // Check if the ServiceAreaPageLayout function is defined
    if (content.includes('export function ServiceAreaPageLayout')) {
      console.log('✓ ServiceAreaPageLayout function found');
    } else {
      console.log('✗ ServiceAreaPageLayout function not found');
    }
  } catch (error) {
    console.log('✗ Error reading file:', error.message);
  }
} else {
  console.log('✗ TestPageLayout file does not exist');
}

// Check if the import path resolves correctly
const importPath = '../../../../../components/TestPageLayout';
const resolvedPath = path.resolve('./src/app/service-areas/alameda/custom-kitchen', importPath);
console.log('Resolved import path:', resolvedPath);

// Check if the resolved path exists
if (fs.existsSync(resolvedPath)) {
  console.log('✓ Resolved path exists');
} else {
  console.log('✗ Resolved path does not exist');
}
