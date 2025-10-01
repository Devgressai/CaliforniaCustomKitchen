#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

// Configuration
const BASE_URL = 'https://avscabinets.com';
const OUTPUT_DIR = path.join(__dirname, '../public/images');
const QUALITY = 85; // WebP quality
const OVERWRITE = false; // Set to true to overwrite existing files

// Track downloaded images
const downloadedImages = new Set();
const failedImages = new Set();

// Create output directories
const directories = [
  'portfolio',
  'services', 
  'process',
  'materials',
  'about',
  'contact',
  'journal',
  'team',
  'service-areas',
  'hero'
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
        fs.unlink(filePath, () => {}); // Delete empty file
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(filePath, () => {}); // Delete empty file
      reject(err);
    });
  });
}

// Function to scrape a page for images
async function scrapePageImages(pageUrl) {
  return new Promise((resolve, reject) => {
    const protocol = pageUrl.startsWith('https:') ? https : http;
    
    protocol.get(pageUrl, (response) => {
      let data = '';
      
      response.on('data', (chunk) => {
        data += chunk;
      });
      
      response.on('end', () => {
        const images = [];
        
        // Extract image URLs from various patterns
        const imagePatterns = [
          /<img[^>]+src=["']([^"']+)["'][^>]*>/gi,
          /background-image:\s*url\(["']?([^"')]+)["']?\)/gi,
          /<source[^>]+srcset=["']([^"']+)["'][^>]*>/gi,
          /data-src=["']([^"']+)["']/gi,
          /data-lazy=["']([^"']+)["']/gi
        ];
        
        imagePatterns.forEach(pattern => {
          let match;
          while ((match = pattern.exec(data)) !== null) {
            let imageUrl = match[1];
            
            // Convert relative URLs to absolute
            if (imageUrl.startsWith('/')) {
              imageUrl = BASE_URL + imageUrl;
            } else if (imageUrl.startsWith('./')) {
              imageUrl = pageUrl.replace(/\/[^\/]*$/, '/') + imageUrl.substring(2);
            } else if (!imageUrl.startsWith('http')) {
              imageUrl = new URL(imageUrl, pageUrl).href;
            }
            
            // Filter out non-image files and external images
            if (imageUrl.match(/\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i) && 
                imageUrl.includes('avscabinets.com')) {
              images.push(imageUrl);
            }
          }
        });
        
        resolve([...new Set(images)]); // Remove duplicates
      });
    }).on('error', reject);
  });
}

// Function to get all pages from the website
async function getAllPages() {
  const pages = [
    BASE_URL,
    `${BASE_URL}/gallery/`,
    `${BASE_URL}/about/`,
    `${BASE_URL}/contact/`,
    `${BASE_URL}/services/`,
    `${BASE_URL}/portfolio/`,
    `${BASE_URL}/materials/`,
    `${BASE_URL}/process/`,
    `${BASE_URL}/journal/`,
    `${BASE_URL}/showroom/`
  ];
  
  // Add service area pages
  const serviceAreas = [
    'silicon-valley', 'los-angeles', 'san-francisco', 'central-coast',
    'santa-barbara', 'lake-tahoe', 'truckee', 'napa-valley',
    'sonoma-county', 'marin-county', 'orange-county', 'san-diego-county',
    'palm-springs', 'la-jolla'
  ];
  
  serviceAreas.forEach(area => {
    pages.push(`${BASE_URL}/service-areas/${area}/`);
  });
  
  // Add service pages
  const services = [
    'custom-kitchens', 'bespoke-cabinetry', 'architectural-millwork',
    'paneling', 'wine-rooms', 'vanities', 'libraries-closets-offices'
  ];
  
  services.forEach(service => {
    pages.push(`${BASE_URL}/services/${service}/`);
  });
  
  return pages;
}

// Function to generate SEO-friendly filename
function generateFilename(imageUrl, category = 'portfolio') {
  const url = new URL(imageUrl);
  const pathname = url.pathname;
  const filename = path.basename(pathname);
  
  // Remove query parameters
  const cleanFilename = filename.split('?')[0];
  
  // Generate SEO-friendly name based on URL path
  let seoName = cleanFilename;
  
  if (pathname.includes('/gallery/')) {
    seoName = `gallery-${cleanFilename}`;
  } else if (pathname.includes('/portfolio/')) {
    seoName = `portfolio-${cleanFilename}`;
  } else if (pathname.includes('/services/')) {
    seoName = `services-${cleanFilename}`;
  } else if (pathname.includes('/materials/')) {
    seoName = `materials-${cleanFilename}`;
  } else if (pathname.includes('/process/')) {
    seoName = `process-${cleanFilename}`;
  } else if (pathname.includes('/about/')) {
    seoName = `about-${cleanFilename}`;
  } else if (pathname.includes('/contact/')) {
    seoName = `contact-${cleanFilename}`;
  } else if (pathname.includes('/journal/')) {
    seoName = `journal-${cleanFilename}`;
  } else if (pathname.includes('/team/')) {
    seoName = `team-${cleanFilename}`;
  } else if (pathname.includes('/service-areas/')) {
    const areaMatch = pathname.match(/\/service-areas\/([^\/]+)/);
    if (areaMatch) {
      seoName = `${areaMatch[1]}-${cleanFilename}`;
    }
  }
  
  // Ensure .jpg extension for WebP conversion
  if (!seoName.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
    seoName += '.jpg';
  }
  
  return seoName;
}

// Function to determine category based on URL
function getCategory(imageUrl) {
  const url = new URL(imageUrl);
  const pathname = url.pathname;
  
  if (pathname.includes('/gallery/') || pathname.includes('/portfolio/')) {
    return 'portfolio';
  } else if (pathname.includes('/services/')) {
    return 'services';
  } else if (pathname.includes('/materials/')) {
    return 'materials';
  } else if (pathname.includes('/process/')) {
    return 'process';
  } else if (pathname.includes('/about/') || pathname.includes('/team/')) {
    return 'about';
  } else if (pathname.includes('/contact/')) {
    return 'contact';
  } else if (pathname.includes('/journal/')) {
    return 'journal';
  } else if (pathname.includes('/service-areas/')) {
    return 'service-areas';
  } else if (pathname.includes('/hero/') || pathname === '/') {
    return 'hero';
  }
  
  return 'portfolio'; // Default category
}

// Main scraping function
async function scrapeAllImages() {
  console.log('🚀 Starting image scraping from avscabinets.com...\n');
  
  try {
    // Get all pages to scrape
    const pages = await getAllPages();
    console.log(`📄 Found ${pages.length} pages to scrape\n`);
    
    let totalImages = 0;
    let downloadedCount = 0;
    
    // Scrape each page
    for (const pageUrl of pages) {
      try {
        console.log(`🔍 Scraping: ${pageUrl}`);
        const images = await scrapePageImages(pageUrl);
        
        if (images.length > 0) {
          console.log(`   Found ${images.length} images`);
          totalImages += images.length;
          
          // Download each image
          for (const imageUrl of images) {
            if (downloadedImages.has(imageUrl)) {
              continue; // Skip already downloaded images
            }
            
            try {
              const category = getCategory(imageUrl);
              const filename = generateFilename(imageUrl, category);
              const filePath = path.join(OUTPUT_DIR, category, filename);
              
              // Skip if file exists and not overwriting
              if (!OVERWRITE && fs.existsSync(filePath)) {
                console.log(`   ⏭️  Skipping existing: ${filename}`);
                downloadedImages.add(imageUrl);
                continue;
              }
              
              console.log(`   📥 Downloading: ${filename}`);
              await downloadFile(imageUrl, filePath);
              
              downloadedImages.add(imageUrl);
              downloadedCount++;
              
              // Small delay to be respectful to the server
              await new Promise(resolve => setTimeout(resolve, 100));
              
            } catch (error) {
              console.error(`   ❌ Failed to download ${imageUrl}: ${error.message}`);
              failedImages.add(imageUrl);
            }
          }
        } else {
          console.log(`   No images found`);
        }
        
        console.log(''); // Empty line for readability
        
      } catch (error) {
        console.error(`❌ Failed to scrape ${pageUrl}: ${error.message}\n`);
      }
    }
    
    // Summary
    console.log('✨ Scraping complete!\n');
    console.log(`📊 Summary:`);
    console.log(`   Total images found: ${totalImages}`);
    console.log(`   Successfully downloaded: ${downloadedCount}`);
    console.log(`   Failed downloads: ${failedImages.size}`);
    console.log(`   Images saved to: ${OUTPUT_DIR}\n`);
    
    if (failedImages.size > 0) {
      console.log('❌ Failed images:');
      failedImages.forEach(url => console.log(`   ${url}`));
      console.log('');
    }
    
    // Convert to WebP
    console.log('🔄 Converting downloaded images to WebP...');
    const { execSync } = require('child_process');
    
    try {
      execSync('npm run convert-webp', { stdio: 'inherit' });
      console.log('✅ WebP conversion complete!');
    } catch (error) {
      console.error('❌ WebP conversion failed:', error.message);
    }
    
  } catch (error) {
    console.error('❌ Scraping failed:', error.message);
    process.exit(1);
  }
}

// Run the scraper
if (require.main === module) {
  scrapeAllImages();
}

module.exports = { scrapeAllImages, downloadFile, generateFilename, getCategory };
