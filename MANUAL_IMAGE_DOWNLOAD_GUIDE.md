# Manual Image Download Guide for AV's Cabinets

## 🎯 **Current Situation**
The automated scraper found limited images because your current website structure is different from the new site. Here's how to manually download all images from avscabinets.com.

---

## 🚀 **Step-by-Step Process**

### **1. Visit Your Gallery Page**
Go to: **https://avscabinets.com/gallery/**

### **2. Download Images by Category**

#### **Kitchens Section**
1. Click on "Kitchens" in the gallery
2. Right-click each image → "Save image as..."
3. Save to: `public/images/portfolio/`
4. Rename with SEO-friendly names:
   - `kitchen-1.jpg`, `kitchen-2.jpg`, etc.
   - Or descriptive names: `custom-walnut-kitchen.jpg`

#### **Vanities Section**
1. Click on "Vanities" in the gallery
2. Right-click each image → "Save image as..."
3. Save to: `public/images/services/`
4. Rename: `vanity-1.jpg`, `vanity-2.jpg`, etc.

#### **Entertainment Section**
1. Click on "Entertainment" in the gallery
2. Right-click each image → "Save image as..."
3. Save to: `public/images/services/`
4. Rename: `entertainment-center-1.jpg`, etc.

#### **Bars Section**
1. Click on "Bars" in the gallery
2. Right-click each image → "Save image as..."
3. Save to: `public/images/services/`
4. Rename: `custom-bar-1.jpg`, etc.

#### **Doors Section**
1. Click on "Doors" in the gallery
2. Right-click each image → "Save image as..."
3. Save to: `public/images/services/`
4. Rename: `custom-door-1.jpg`, etc.

#### **Wood Section**
1. Click on "Wood" in the gallery
2. Right-click each image → "Save image as..."
3. Save to: `public/images/materials/`
4. Rename: `wood-sample-1.jpg`, etc.

#### **Ceilings Section**
1. Click on "Ceilings" in the gallery
2. Right-click each image → "Save image as..."
3. Save to: `public/images/services/`
4. Rename: `ceiling-millwork-1.jpg`, etc.

#### **Contemporary Section**
1. Click on "Contemporary" in the gallery
2. Right-click each image → "Save image as..."
3. Save to: `public/images/portfolio/`
4. Rename: `contemporary-kitchen-1.jpg`, etc.

---

## 📁 **Directory Organization**

### **Portfolio Images** → `public/images/portfolio/`
- Kitchen projects
- Contemporary designs
- Before/after shots
- Project showcases

### **Services Images** → `public/images/services/`
- Vanities
- Entertainment centers
- Bars
- Doors
- Ceilings
- Custom cabinetry

### **Materials Images** → `public/images/materials/`
- Wood samples
- Grain patterns
- Finish examples
- Hardware options

### **Process Images** → `public/images/process/`
- Workshop photos
- Craftsmanship details
- Installation process
- Quality control

---

## 🏷️ **SEO-Friendly Naming Convention**

### **Format**: `[category]-[description]-[number].jpg`

#### **Examples:**
- `portfolio-custom-walnut-kitchen-1.jpg`
- `services-master-bathroom-vanity-2.jpg`
- `materials-quarter-sawn-oak-grain.jpg`
- `process-workshop-craftsmanship-1.jpg`
- `portfolio-contemporary-kitchen-3.jpg`

### **Keywords to Include:**
- **Materials**: walnut, oak, cherry, maple, mahogany
- **Styles**: contemporary, traditional, modern, transitional
- **Rooms**: kitchen, bathroom, living-room, dining-room
- **Features**: custom, luxury, premium, bespoke

---

## 🔄 **After Downloading**

### **1. Convert to WebP**
```bash
npm run convert-webp
```

### **2. Test the Website**
```bash
npm run dev
```

### **3. Verify Images Load**
- Check all pages load correctly
- Verify images display properly
- Test on mobile devices

---

## 📊 **Expected Image Counts**

### **Target Numbers:**
- **Portfolio**: 50-100+ images
- **Services**: 30-50+ images
- **Materials**: 20-30+ images
- **Process**: 10-20+ images
- **Total**: 110-200+ images

### **Quality Requirements:**
- **Minimum size**: 800x600px
- **Recommended**: 1200x800px or larger
- **Format**: JPG or PNG
- **Quality**: High resolution for luxury appeal

---

## 💡 **Pro Tips**

### **1. Batch Download**
- Use browser extensions for bulk downloads
- Download entire galleries at once
- Organize by category as you download

### **2. Image Optimization**
- Resize large images before converting to WebP
- Use descriptive filenames for SEO
- Include location names for local SEO

### **3. Organization**
- Create subfolders for different projects
- Use consistent naming patterns
- Keep originals as backups

---

## 🎯 **Priority Order**

### **High Priority (Download First):**
1. **Kitchen portfolio images** - Main showcase
2. **Vanity images** - Service page content
3. **Wood samples** - Materials page
4. **Workshop photos** - Process page

### **Medium Priority:**
1. **Entertainment centers** - Service content
2. **Custom bars** - Service content
3. **Door designs** - Service content

### **Low Priority:**
1. **Ceiling details** - Supporting content
2. **Contemporary designs** - Additional portfolio

---

## 🆘 **Troubleshooting**

### **If Images Won't Download:**
1. Try right-clicking and "Open image in new tab"
2. Copy image URL and paste in address bar
3. Use browser developer tools to find image URLs
4. Try different browsers (Chrome, Firefox, Safari)

### **If Images Are Low Quality:**
1. Look for higher resolution versions
2. Check if there are "View full size" options
3. Try different gallery sections
4. Look for "Download" or "Full resolution" links

---

## 📋 **Checklist**

- [ ] Download all kitchen images
- [ ] Download all vanity images
- [ ] Download all entertainment center images
- [ ] Download all bar images
- [ ] Download all door images
- [ ] Download all wood sample images
- [ ] Download all ceiling images
- [ ] Download all contemporary images
- [ ] Rename all images with SEO-friendly names
- [ ] Organize into proper directories
- [ ] Convert all images to WebP
- [ ] Test website with new images
- [ ] Verify all images load correctly

---

**Ready to start downloading? Begin with the kitchen images in your gallery!** 🚀
