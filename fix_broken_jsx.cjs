const fs = require('fs');
const path = require('path');

const pagesDir = 'c:/reactproject/aaawebsite/src/pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Normalize line endings first
  content = content.replace(/\r\n/g, '\n');

  // Remove broken orphaned JSX left by previous cleanup script
  // Pattern 1: standalone TECH div + orphaned closing tags after our clean wrapper
  content = content.replace(
    /(<div className="min-h-screen bg-white">)\n\s*<div className="absolute bottom.*?TECH<\/div>\n\s*<\/div>\n\s*\)\)}\n\s*<\/div>\n/s,
    '$1\n'
  );

  // Remove floating INSTITUTIONAL WATERMARK block if it somehow still exists
  content = content.replace(
    /\{\/\* --- INSTITUTIONAL ARCHITECTURAL WATERMARK --- \*\/\}[\s\S]*?<\/div>\s*\n\s*\n/g,
    ''
  );

  // Remove floating SIDE-INDEX block if it somehow still exists  
  content = content.replace(
    /\{\/\* --- FLOATING INSTITUTIONAL SIDE-INDEX --- \*\/\}[\s\S]*?<\/div>\s*\n\s*\n/g,
    ''
  );

  // Clean <main className="relative z-10"> → just <main>
  content = content.replace(/<main className="relative z-10">/g, '<main>');

  if (content !== original) {
    // Write back with \r\n to keep Windows line endings
    fs.writeFileSync(filePath, content);
    console.log('Fixed: ' + file);
  } else {
    console.log('No change: ' + file);
  }
});

console.log('Done.');
