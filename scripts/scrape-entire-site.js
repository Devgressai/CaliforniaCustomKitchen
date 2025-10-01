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
const OVERWRITE = true; // Overwrite existing files
const MAX_CONCURRENT = 5; // Max concurrent downloads
const DELAY_BETWEEN_REQUESTS = 500; // Delay in ms

// Track progress
const downloadedImages = new Set();
const failedImages = new Set();
const visitedPages = new Set();
const pagesToVisit = new Set();
const allImages = new Set();

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

// Function to download a file with retry logic
function downloadFile(url, filePath, retries = 3) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https:') ? https : http;
    
    const attemptDownload = (attempt) => {
      const file = fs.createWriteStream(filePath);
      
      protocol.get(url, (response) => {
        if (response.statusCode === 200) {
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        } else if (response.statusCode === 301 || response.statusCode === 302) {
          // Handle redirects
          file.close();
          fs.unlink(filePath, () => {});
          const redirectUrl = response.headers.location;
          if (redirectUrl) {
            const absoluteUrl = new URL(redirectUrl, url).href;
            attemptDownload(attempt);
          } else {
            reject(new Error(`HTTP ${response.statusCode} - No redirect location`));
          }
        } else {
          file.close();
          fs.unlink(filePath, () => {});
          if (attempt < retries) {
            setTimeout(() => attemptDownload(attempt + 1), 1000);
          } else {
            reject(new Error(`HTTP ${response.statusCode}`));
          }
        }
      }).on('error', (err) => {
        file.close();
        fs.unlink(filePath, () => {});
        if (attempt < retries) {
          setTimeout(() => attemptDownload(attempt + 1), 1000);
        } else {
          reject(err);
        }
      });
    };
    
    attemptDownload(1);
  });
}

// Function to scrape a page for images and links
async function scrapePage(pageUrl) {
  return new Promise((resolve, reject) => {
    const protocol = pageUrl.startsWith('https:') ? https : http;
    
    protocol.get(pageUrl, (response) => {
      let data = '';
      
      response.on('data', (chunk) => {
        data += chunk;
      });
      
      response.on('end', () => {
        const images = [];
        const links = [];
        
        // Extract image URLs from various patterns
        const imagePatterns = [
          /<img[^>]+src=["']([^"']+)["'][^>]*>/gi,
          /<img[^>]+data-src=["']([^"']+)["'][^>]*>/gi,
          /<img[^>]+data-lazy=["']([^"']+)["'][^>]*>/gi,
          /<img[^>]+data-original=["']([^"']+)["'][^>]*>/gi,
          /background-image:\s*url\(["']?([^"')]+)["']?\)/gi,
          /<source[^>]+srcset=["']([^"']+)["'][^>]*>/gi,
          /<source[^>]+src=["']([^"']+)["'][^>]*>/gi,
          /data-bg=["']([^"']+)["']/gi,
          /data-background=["']([^"']+)["']/gi
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
              try {
                imageUrl = new URL(imageUrl, pageUrl).href;
              } catch (e) {
                continue;
              }
            }
            
            // Filter for image files and same domain
            if (imageUrl.match(/\.(jpg|jpeg|png|gif|webp|svg|bmp|tiff)(\?.*)?$/i) && 
                imageUrl.includes('avscabinets.com')) {
              images.push(imageUrl);
            }
          }
        });
        
        // Extract page links for further crawling
        const linkPatterns = [
          /<a[^>]+href=["']([^"']+)["'][^>]*>/gi,
          /<link[^>]+href=["']([^"']+)["'][^>]*>/gi
        ];
        
        linkPatterns.forEach(pattern => {
          let match;
          while ((match = pattern.exec(data)) !== null) {
            let linkUrl = match[1];
            
            // Convert relative URLs to absolute
            if (linkUrl.startsWith('/')) {
              linkUrl = BASE_URL + linkUrl;
            } else if (linkUrl.startsWith('./')) {
              linkUrl = pageUrl.replace(/\/[^\/]*$/, '/') + linkUrl.substring(2);
            } else if (!linkUrl.startsWith('http')) {
              try {
                linkUrl = new URL(linkUrl, pageUrl).href;
              } catch (e) {
                continue;
              }
            }
            
            // Only include same domain links
            if (linkUrl.includes('avscabinets.com') && 
                !linkUrl.includes('#') && 
                !linkUrl.includes('mailto:') && 
                !linkUrl.includes('tel:')) {
              links.push(linkUrl);
            }
          }
        });
        
        resolve({ images: [...new Set(images)], links: [...new Set(links)] });
      });
    }).on('error', reject);
  });
}

// Function to generate SEO-friendly filename
function generateFilename(imageUrl, index) {
  const url = new URL(imageUrl);
  const pathname = url.pathname;
  const filename = path.basename(pathname);
  
  // Remove query parameters
  const cleanFilename = filename.split('?')[0];
  
  // Generate SEO-friendly name based on URL path
  let seoName = cleanFilename;
  
  // Extract meaningful parts from URL
  const pathParts = pathname.split('/').filter(part => part && part !== 'wp-content' && part !== 'uploads');
  
  if (pathParts.length > 1) {
    const category = pathParts[pathParts.length - 2];
    const baseName = pathParts[pathParts.length - 1];
    
    // Map categories to our directory structure
    const categoryMap = {
      'gallery': 'portfolio',
      'kitchens': 'portfolio',
      'vanities': 'services',
      'entertainment': 'services',
      'bars': 'services',
      'doors': 'services',
      'ceilings': 'services',
      'wood': 'materials',
      'contemporary': 'portfolio',
      'portfolio': 'portfolio',
      'services': 'services',
      'materials': 'materials',
      'process': 'process',
      'about': 'about',
      'contact': 'contact',
      'journal': 'journal',
      'team': 'team'
    };
    
    const mappedCategory = categoryMap[category] || 'portfolio';
    seoName = `${mappedCategory}-${baseName}`;
  } else {
    seoName = `image-${index + 1}-${cleanFilename}`;
  }
  
  // Ensure .jpg extension for WebP conversion
  if (!seoName.match(/\.(jpg|jpeg|png|gif|webp|bmp|tiff)$/i)) {
    seoName += '.jpg';
  }
  
  return seoName;
}

// Function to determine category based on URL
function getCategory(imageUrl) {
  const url = new URL(imageUrl);
  const pathname = url.pathname;
  
  // Check for specific patterns in URL
  if (pathname.includes('/gallery/') || pathname.includes('/kitchens/') || pathname.includes('/contemporary/')) {
    return 'portfolio';
  } else if (pathname.includes('/vanities/') || pathname.includes('/entertainment/') || 
             pathname.includes('/bars/') || pathname.includes('/doors/') || 
             pathname.includes('/ceilings/') || pathname.includes('/services/')) {
    return 'services';
  } else if (pathname.includes('/wood/') || pathname.includes('/materials/')) {
    return 'materials';
  } else if (pathname.includes('/process/')) {
    return 'process';
  } else if (pathname.includes('/about/') || pathname.includes('/team/')) {
    return 'about';
  } else if (pathname.includes('/contact/')) {
    return 'contact';
  } else if (pathname.includes('/journal/') || pathname.includes('/blog/')) {
    return 'journal';
  } else if (pathname.includes('/service-areas/')) {
    return 'service-areas';
  } else if (pathname.includes('/hero/') || pathname === '/') {
    return 'hero';
  }
  
  return 'portfolio'; // Default category
}

// Function to download images with concurrency control
async function downloadImages(images) {
  const downloadQueue = [];
  let activeDownloads = 0;
  
  for (let i = 0; i < images.length; i++) {
    const imageUrl = images[i];
    
    if (downloadedImages.has(imageUrl)) {
      continue;
    }
    
    const downloadPromise = (async () => {
      try {
        const category = getCategory(imageUrl);
        const filename = generateFilename(imageUrl, i);
        const filePath = path.join(OUTPUT_DIR, category, filename);
        
        // Skip if file exists and not overwriting
        if (!OVERWRITE && fs.existsSync(filePath)) {
          console.log(`   ⏭️  Skipping existing: ${filename}`);
          downloadedImages.add(imageUrl);
          return;
        }
        
        console.log(`   📥 Downloading: ${filename}`);
        await downloadFile(imageUrl, filePath);
        
        downloadedImages.add(imageUrl);
        console.log(`   ✅ Downloaded: ${filename}`);
        
        // Small delay to be respectful to the server
        await new Promise(resolve => setTimeout(resolve, DELAY_BETWEEN_REQUESTS));
        
      } catch (error) {
        console.error(`   ❌ Failed to download ${imageUrl}: ${error.message}`);
        failedImages.add(imageUrl);
      }
    })();
    
    downloadQueue.push(downloadPromise);
    
    // Control concurrency
    if (downloadQueue.length >= MAX_CONCURRENT) {
      await Promise.all(downloadQueue.splice(0, MAX_CONCURRENT));
    }
  }
  
  // Wait for remaining downloads
  await Promise.all(downloadQueue);
}

// Main scraping function
async function scrapeEntireSite() {
  console.log('🚀 Starting comprehensive site scraping from avscabinets.com...\n');
  
  try {
    // Start with homepage
    pagesToVisit.add(BASE_URL);
    pagesToVisit.add(`${BASE_URL}/gallery/`);
    pagesToVisit.add(`${BASE_URL}/about/`);
    pagesToVisit.add(`${BASE_URL}/contact/`);
    pagesToVisit.add(`${BASE_URL}/services/`);
    pagesToVisit.add(`${BASE_URL}/portfolio/`);
    pagesToVisit.add(`${BASE_URL}/materials/`);
    pagesToVisit.add(`${BASE_URL}/process/`);
    pagesToVisit.add(`${BASE_URL}/journal/`);
    pagesToVisit.add(`${BASE_URL}/showroom/`);
    
    let totalImages = 0;
    let pageCount = 0;
    
    // Crawl all pages
    while (pagesToVisit.size > 0) {
      const currentPage = Array.from(pagesToVisit)[0];
      pagesToVisit.delete(currentPage);
      
      if (visitedPages.has(currentPage)) {
        continue;
      }
      
      try {
        console.log(`🔍 Scraping page ${++pageCount}: ${currentPage}`);
        visitedPages.add(currentPage);
        
        const { images, links } = await scrapePage(currentPage);
        
        if (images.length > 0) {
          console.log(`   📸 Found ${images.length} images`);
          images.forEach(img => allImages.add(img));
          totalImages += images.length;
        }
        
        // Add new links to crawl queue
        links.forEach(link => {
          if (!visitedPages.has(link) && !pagesToVisit.has(link)) {
            pagesToVisit.add(link);
          }
        });
        
        console.log(`   🔗 Found ${links.length} links to crawl`);
        
        // Small delay between page requests
        await new Promise(resolve => setTimeout(resolve, DELAY_BETWEEN_REQUESTS));
        
      } catch (error) {
        console.error(`❌ Failed to scrape ${currentPage}: ${error.message}`);
      }
    }
    
    console.log(`\n📊 Crawling complete! Found ${totalImages} total images across ${pageCount} pages\n`);
    
    // Download all images
    if (allImages.size > 0) {
      console.log('📥 Starting image downloads...\n');
      await downloadImages(Array.from(allImages));
    }
    
    // Summary
    console.log('\n✨ Scraping complete!\n');
    console.log(`📊 Final Summary:`);
    console.log(`   Pages crawled: ${pageCount}`);
    console.log(`   Total images found: ${totalImages}`);
    console.log(`   Successfully downloaded: ${downloadedImages.size}`);
    console.log(`   Failed downloads: ${failedImages.size}`);
    console.log(`   Images saved to: ${OUTPUT_DIR}\n`);
    
    if (failedImages.size > 0) {
      console.log('❌ Failed images:');
      Array.from(failedImages).slice(0, 10).forEach(url => console.log(`   ${url}`));
      if (failedImages.size > 10) {
        console.log(`   ... and ${failedImages.size - 10} more`);
      }
      console.log('');
    }
    
    // Convert to WebP
    if (downloadedImages.size > 0) {
      console.log('🔄 Converting downloaded images to WebP...');
      const { execSync } = require('child_process');
      
      try {
        execSync('npm run convert-webp', { stdio: 'inherit' });
        console.log('✅ WebP conversion complete!');
      } catch (error) {
        console.error('❌ WebP conversion failed:', error.message);
      }
    }
    
  } catch (error) {
    console.error('❌ Scraping failed:', error.message);
    process.exit(1);
  }
}

// Run the scraper
if (require.main === module) {
  scrapeEntireSite();
}

module.exports = { scrapeEntireSite, downloadFile, generateFilename, getCategory };
