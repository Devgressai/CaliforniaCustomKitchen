#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

// Configuration
const OUTPUT_DIR = path.join(__dirname, '../public/images');
const QUALITY = 85; // WebP quality
const OVERWRITE = true; // Overwrite existing files

// Create output directories
const directories = [
  'portfolio', 'services', 'process', 'materials', 
  'about', 'contact', 'journal', 'team', 
  'service-areas', 'hero', 'gallery'
];

directories.forEach(dir => {
  const dirPath = path.join(OUTPUT_DIR, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// Function to download a file
function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https:') ? https : http;
    
    const file = fs.createWriteStream(filePath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        file.close();
        fs.unlink(filePath, () => {});
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

// Function to generate filename from URL
function generateFilename(imageUrl, index, category = 'portfolio') {
  const url = new URL(imageUrl);
  const pathname = url.pathname;
  const filename = path.basename(pathname);
  
  // Remove query parameters
  const cleanFilename = filename.split('?')[0];
  
  // Generate SEO-friendly name
  let seoName = cleanFilename;
  
  if (cleanFilename && cleanFilename !== '') {
    seoName = `${category}-${index + 1}-${cleanFilename}`;
  } else {
    seoName = `${category}-${index + 1}-image.jpg`;
  }
  
  // Ensure .jpg extension for WebP conversion
  if (!seoName.match(/\.(jpg|jpeg|png|gif|webp|bmp|tiff)$/i)) {
    seoName += '.jpg';
  }
  
  return seoName;
}

// Function to determine category from URL or user input
function getCategory(imageUrl, userCategory = null) {
  if (userCategory) {
    return userCategory;
  }
  
  const url = new URL(imageUrl);
  const pathname = url.pathname.toLowerCase();
  
  if (pathname.includes('kitchen') || pathname.includes('gallery') || pathname.includes('contemporary')) {
    return 'portfolio';
  } else if (pathname.includes('vanity') || pathname.includes('entertainment') || 
             pathname.includes('bar') || pathname.includes('door') || 
             pathname.includes('ceiling') || pathname.includes('service')) {
    return 'services';
  } else if (pathname.includes('wood') || pathname.includes('material')) {
    return 'materials';
  } else if (pathname.includes('process') || pathname.includes('workshop')) {
    return 'process';
  } else if (pathname.includes('about') || pathname.includes('team')) {
    return 'about';
  } else if (pathname.includes('contact')) {
    return 'contact';
  } else if (pathname.includes('journal') || pathname.includes('blog')) {
    return 'journal';
  }
  
  return 'portfolio'; // Default category
}

// Main download function
async function downloadImages(imageUrls, category = 'portfolio') {
  console.log(`🚀 Starting quick download of ${imageUrls.length} images...\n`);
  
  let downloadedCount = 0;
  let failedCount = 0;
  
  for (let i = 0; i < imageUrls.length; i++) {
    const imageUrl = imageUrls[i].trim();
    
    if (!imageUrl) continue;
    
    try {
      const imageCategory = getCategory(imageUrl, category);
      const filename = generateFilename(imageUrl, i, imageCategory);
      const filePath = path.join(OUTPUT_DIR, imageCategory, filename);
      
      // Skip if file exists and not overwriting
      if (!OVERWRITE && fs.existsSync(filePath)) {
        console.log(`   ⏭️  Skipping existing: ${filename}`);
        continue;
      }
      
      console.log(`   📥 Downloading: ${filename}`);
      await downloadFile(imageUrl, filePath);
      
      downloadedCount++;
      console.log(`   ✅ Downloaded: ${filename}`);
      
    } catch (error) {
      console.error(`   ❌ Failed to download ${imageUrl}: ${error.message}`);
      failedCount++;
    }
  }
  
  console.log(`\n📊 Download Summary:`);
  console.log(`   Successfully downloaded: ${downloadedCount}`);
  console.log(`   Failed downloads: ${failedCount}`);
  console.log(`   Images saved to: ${OUTPUT_DIR}\n`);
  
  return { downloadedCount, failedCount };
}

// Function to convert downloaded images to WebP
async function convertToWebP() {
  console.log('🔄 Converting downloaded images to WebP...');
  const { execSync } = require('child_process');
  
  try {
    execSync('npm run convert-webp', { stdio: 'inherit' });
    console.log('✅ WebP conversion complete!');
  } catch (error) {
    console.error('❌ WebP conversion failed:', error.message);
  }
}

// Main function
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('🚀 Quick Image Download Tool for AV\'s Cabinets\n');
    console.log('Usage:');
    console.log('  node scripts/quick-download.js <category> <image_url1> <image_url2> ...');
    console.log('');
    console.log('Categories: portfolio, services, materials, process, about, contact, journal, team');
    console.log('');
    console.log('Example:');
    console.log('  node scripts/quick-download.js portfolio https://avscabinets.com/image1.jpg https://avscabinets.com/image2.jpg');
    console.log('');
    console.log('Or provide URLs in a file:');
    console.log('  node scripts/quick-download.js portfolio --file urls.txt');
    return;
  }
  
  let category = 'portfolio';
  let imageUrls = [];
  
  if (args[0] === '--file') {
    // Read URLs from file
    const filename = args[1];
    if (!fs.existsSync(filename)) {
      console.error(`❌ File not found: ${filename}`);
      return;
    }
    
    const content = fs.readFileSync(filename, 'utf8');
    imageUrls = content.split('\n').filter(url => url.trim());
    category = args[2] || 'portfolio';
  } else {
    // URLs provided as arguments
    category = args[0];
    imageUrls = args.slice(1);
  }
  
  if (imageUrls.length === 0) {
    console.error('❌ No image URLs provided');
    return;
  }
  
  console.log(`📁 Category: ${category}`);
  console.log(`📸 Images to download: ${imageUrls.length}\n`);
  
  // Download images
  const result = await downloadImages(imageUrls, category);
  
  // Convert to WebP
  if (result.downloadedCount > 0) {
    await convertToWebP();
  }
  
  console.log('✨ Quick download complete!');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { downloadImages, downloadFile, generateFilename, getCategory };
