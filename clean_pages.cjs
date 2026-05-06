const fs = require('fs');
const path = require('path');

const pagesDir = 'c:/reactproject/aaawebsite/src/pages';
const files = fs.readdirSync(pagesDir).filter(f => 
  f.endsWith('.tsx') && f !== 'HomePage.tsx' && f !== 'HomePageOld.tsx'
);

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Remove the "INSTITUTIONAL ARCHITECTURAL WATERMARK" fixed overlay (big AAA TECH text)
  content = content.replace(
    /\s*\{\/\* --- INSTITUTIONAL ARCHITECTURAL WATERMARK --- \*\/\}[\s\S]*?<\/div>\s*\n/,
    '\n'
  );

  // Remove the "FLOATING INSTITUTIONAL SIDE-INDEX" 
  content = content.replace(
    /\s*\{\/\* --- FLOATING INSTITUTIONAL SIDE-INDEX --- \*\/\}[\s\S]*?<\/div>\s*\n/,
    '\n'
  );

  // Clean up outer wrapper: remove custom overrides that fight with global styles
  // Replace complex wrapper with clean standard wrapper
  content = content.replace(
    /className="min-h-screen bg-white text-black transition-colors overflow-x-hidden font-sans selection:bg-aaa-primary\/10 relative"/g,
    'className="min-h-screen bg-white"'
  );

  // Remove font-black from breadcrumb navs (should be font-bold max)
  content = content.replace(/\bfont-black\b/g, 'font-bold');

  // Fix text-[0.65rem] back to something readable - these tiny breadcrumb labels
  content = content.replace(/text-\[0\.65rem\]/g, 'text-xs');
  content = content.replace(/text-\[0\.7rem\]/g, 'text-xs');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Cleaned: ' + file);
  } else {
    console.log('Skipped: ' + file);
  }
});

console.log('Done.');
