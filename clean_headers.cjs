const fs = require('fs');
const path = require('path');
const pagesDir = 'c:/reactproject/aaawebsite/src/pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove imports
  content = content.replace(/import\s+\{\s*Header\s*\}\s+from\s+['"].*?header['"];?\r?\n?/g, '');
  content = content.replace(/import\s+\{\s*HeaderUtilityBar\s*\}\s+from\s+['"].*?header-utility-bar['"];?\r?\n?/g, '');
  content = content.replace(/import\s+\{\s*NewsletterFooter\s*\}\s+from\s+['"].*?newsletter-footer['"];?\r?\n?/g, '');
  
  // Remove components
  content = content.replace(/<HeaderUtilityBar\s*\/>\s*/g, '');
  content = content.replace(/<Header\s*\/>\s*/g, '');
  content = content.replace(/<NewsletterFooter\s*\/>\s*/g, '');

  fs.writeFileSync(filePath, content);
  console.log('Cleaned ' + file);
});
