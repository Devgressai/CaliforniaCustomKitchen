# WebP Conversion Guide for AV's Cabinets

## 🎯 **Overview**
This guide will help you convert all images to WebP format for optimal performance and SEO benefits.

---

## 🚀 **Quick Start**

### **1. Install WebP Tools**
```bash
# macOS
brew install webp

# Ubuntu/Debian
sudo apt-get install webp

# Windows
# Download from: https://developers.google.com/speed/webp/download
```

### **2. Run Conversion Script**
```bash
# Convert all images to WebP
npm run convert-webp

# Or run directly
node scripts/convert-to-webp.js
```

---

## 📊 **Benefits of WebP**

### **Performance Improvements**
- **25-35% smaller file sizes** compared to JPEG
- **50% smaller** than PNG for photographic content
- **Faster page loading** and better Core Web Vitals
- **Reduced bandwidth usage** for mobile users

### **SEO Benefits**
- **Better PageSpeed scores** (Google ranking factor)
- **Improved user experience** metrics
- **Reduced bounce rate** from faster loading
- **Better mobile performance** scores

### **Technical Benefits**
- **Modern format** with wide browser support
- **Lossless and lossy compression** options
- **Transparency support** like PNG
- **Animation support** like GIF

---

## 🔧 **How It Works**

### **1. Image Conversion Process**
The script automatically:
- ✅ Scans all images in `public/images/` directory
- ✅ Converts JPG, PNG, TIFF, BMP to WebP
- ✅ Maintains original quality (85% by default)
- ✅ Preserves directory structure
- ✅ Skips existing WebP files (unless overwrite enabled)

### **2. Code Update Process**
The script automatically updates:
- ✅ All page components (`src/app/`)
- ✅ All service area pages
- ✅ All service pages
- ✅ All component files
- ✅ Image metadata files

### **3. Fallback Support**
- ✅ WebP images with JPG fallbacks
- ✅ Graceful degradation for older browsers
- ✅ Error handling for missing images

---

## 📁 **File Structure After Conversion**

```
public/images/
├── portfolio/
│   ├── atherton-walnut-inset-kitchen.webp
│   ├── atherton-walnut-inset-kitchen.jpg (fallback)
│   └── ...
├── services/
│   ├── custom-kitchens-hero.webp
│   ├── custom-kitchens-hero.jpg (fallback)
│   └── ...
└── ...
```

---

## ⚙️ **Configuration Options**

### **Quality Settings**
Edit `scripts/convert-to-webp.js`:
```javascript
const QUALITY = 85; // WebP quality (0-100)
const OVERWRITE = false; // Overwrite existing WebP files
```

### **Supported Formats**
- ✅ `.jpg` / `.jpeg`
- ✅ `.png`
- ✅ `.tiff`
- ✅ `.bmp`

---

## 🧪 **Testing Your WebP Images**

### **1. Check Image Loading**
```bash
# Start development server
npm run dev

# Visit pages and verify images load
```

### **2. Verify WebP Support**
Open browser dev tools and check:
- Network tab shows `.webp` files loading
- No 404 errors for image files
- Images display correctly

### **3. Test Fallbacks**
- Disable WebP support in browser
- Verify JPG fallbacks load correctly

---

## 🔍 **Troubleshooting**

### **Common Issues**

#### **1. cwebp Not Found**
```bash
# Install WebP tools
brew install webp  # macOS
sudo apt-get install webp  # Ubuntu
```

#### **2. Permission Errors**
```bash
# Make script executable
chmod +x scripts/convert-to-webp.js
```

#### **3. Images Not Loading**
- Check file paths are correct
- Verify WebP files were created
- Check browser console for errors

#### **4. Large File Sizes**
- Reduce quality setting in script
- Use lossless compression for graphics
- Optimize source images first

---

## 📈 **Performance Monitoring**

### **Before Conversion**
- Run Lighthouse audit
- Check PageSpeed Insights
- Note current image sizes

### **After Conversion**
- Re-run performance tests
- Compare file sizes
- Verify Core Web Vitals improvement

---

## 🎨 **Best Practices**

### **1. Image Optimization**
- Use appropriate quality settings (80-90 for photos)
- Consider lossless for graphics with text
- Test different quality levels

### **2. Fallback Strategy**
- Always provide JPG fallbacks
- Test in older browsers
- Monitor error rates

### **3. SEO Considerations**
- Use descriptive filenames
- Include alt text for all images
- Optimize for target keywords

---

## 🚀 **Deployment**

### **1. Pre-deployment**
```bash
# Convert all images
npm run convert-webp

# Test locally
npm run dev

# Build for production
npm run build
```

### **2. Production Considerations**
- Verify all images load correctly
- Check CDN supports WebP
- Monitor performance metrics

---

## 📊 **Expected Results**

### **File Size Reductions**
- **Portfolio images**: 25-35% smaller
- **Service images**: 30-40% smaller
- **Process images**: 20-30% smaller
- **Overall site**: 25-30% faster loading

### **Performance Improvements**
- **Lighthouse Performance**: +10-15 points
- **First Contentful Paint**: 20-30% faster
- **Largest Contentful Paint**: 25-35% faster
- **Cumulative Layout Shift**: Improved

---

## 🎯 **Next Steps**

1. **Download images** from current website
2. **Run conversion script** to create WebP versions
3. **Test thoroughly** on different devices/browsers
4. **Deploy to production** and monitor performance
5. **Update image references** as needed

---

## 💡 **Pro Tips**

- **Batch process** images for efficiency
- **Use lossless** for graphics with text
- **Monitor file sizes** to avoid over-compression
- **Test on mobile** devices for performance
- **Keep originals** as backups

---

## 🆘 **Support**

If you encounter issues:
1. Check the troubleshooting section
2. Verify WebP tools are installed
3. Check file permissions
4. Review console errors
5. Test with a small batch first

---

**Ready to optimize your images? Run `npm run convert-webp` to get started!** 🚀
