const fs = require('fs');
const path = require('path');

// Function to clean function names
function cleanFunctionName(name) {
  return name.replace(/[^a-zA-Z0-9]/g, '');
}

// Find all St. Helena pages and fix function names
const stHelenaPages = [
  'src/app/service-areas/st-helena/custom-kitchen/page.tsx',
  'src/app/service-areas/st-helena/kitchen-design/page.tsx',
  'src/app/service-areas/st-helena/kitchen-cabinets/page.tsx',
  'src/app/service-areas/st-helena/kitchen-remodel/page.tsx'
];

stHelenaPages.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix function names
    content = content.replace(
      /export default function (\w+)St\.HelenaPage\(\)/g,
      'export default function $1StHelenaPage()'
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed function names in ${filePath}`);
  }
});

console.log('Fixed all St. Helena function names');
