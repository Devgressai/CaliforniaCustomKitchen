// Test script to fix the import issue
const fs = require('fs');
const path = require('path');

// Read the problematic file
const filePath = './src/app/service-areas/alameda/custom-kitchen/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Check if there are any syntax issues
console.log('File length:', content.length);

// Check for any obvious syntax errors
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('ServiceAreaPageLayout')) {
    console.log(`Line ${i + 1}: ${line}`);
    console.log(`Previous line: ${lines[i - 1]}`);
    console.log(`Next line: ${lines[i + 1]}`);
  }
}

// Check if there are any missing semicolons or other syntax issues
const importLines = lines.filter(line => line.includes('import'));
console.log('Import lines:');
importLines.forEach((line, index) => {
  console.log(`${index + 1}: ${line}`);
});
