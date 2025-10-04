// Test script to check JSX parsing
const fs = require('fs');
const path = require('path');

// Read the problematic file
const filePath = './src/app/service-areas/alameda/custom-kitchen/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Check if there are any syntax issues around the JSX
const lines = content.split('\n');
for (let i = 40; i < 60; i++) {
  if (lines[i]) {
    console.log(`Line ${i + 1}: ${lines[i]}`);
  }
}

// Check if there are any missing semicolons or other syntax issues
console.log('\nChecking for syntax issues...');

// Check if there are any missing semicolons
const functionLine = lines.find(line => line.includes('export default function'));
if (functionLine) {
  console.log('Function line:', functionLine);
  if (!functionLine.endsWith('{')) {
    console.log('WARNING: Function line might be missing opening brace');
  }
}

// Check if there are any missing return statements
const returnLine = lines.find(line => line.includes('return ('));
if (returnLine) {
  console.log('Return line:', returnLine);
} else {
  console.log('WARNING: No return statement found');
}

// Check if there are any missing semicolons in the function
const functionIndex = lines.findIndex(line => line.includes('export default function'));
if (functionIndex !== -1) {
  console.log('\nFunction context:');
  for (let i = functionIndex - 2; i < functionIndex + 5; i++) {
    if (lines[i]) {
      console.log(`Line ${i + 1}: ${lines[i]}`);
    }
  }
}
