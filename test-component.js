// Test script to check if ServiceAreaPageLayout can be imported
const fs = require('fs');

// Read the PageLayout file
const pageLayoutContent = fs.readFileSync('./src/components/PageLayout.tsx', 'utf8');
console.log('PageLayout file length:', pageLayoutContent.length);

// Check if ServiceAreaPageLayout is defined
if (pageLayoutContent.includes('export function ServiceAreaPageLayout')) {
  console.log('✓ ServiceAreaPageLayout function found');
} else {
  console.log('✗ ServiceAreaPageLayout function not found');
}

// Check if there are any syntax errors
if (pageLayoutContent.includes('export function ServiceAreaPageLayout({')) {
  console.log('✓ ServiceAreaPageLayout function definition looks correct');
} else {
  console.log('✗ ServiceAreaPageLayout function definition looks incorrect');
}

// Check for any obvious syntax errors
const lines = pageLayoutContent.split('\n');
let braceCount = 0;
let parenCount = 0;
let bracketCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let j = 0; j < line.length; j++) {
    const char = line[j];
    if (char === '{') braceCount++;
    if (char === '}') braceCount--;
    if (char === '(') parenCount++;
    if (char === ')') parenCount--;
    if (char === '[') bracketCount++;
    if (char === ']') bracketCount--;
  }
}

console.log('Brace balance:', braceCount);
console.log('Parenthesis balance:', parenCount);
console.log('Bracket balance:', bracketCount);
