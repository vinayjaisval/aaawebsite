const fs = require('fs');
const path = require('path');

const pagesDir = 'c:/reactproject/aaawebsite/src/pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx') && f !== 'HomePage.tsx' && f !== 'HomePageOld.tsx');

let report = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
  const fontClasses = [];
  
  // Find font-related patterns
  const patterns = [
    /font-family/g,
    /font-sans/g,
    /font-serif/g,
    /font-mono/g,
    /text-\[[\d\.]+px\]/g,
    /text-\[[\d\.]+rem\]/g,
    /text-xs|text-sm|text-base|text-lg|text-xl|text-2xl|text-3xl|text-4xl|text-5xl/g,
    /font-normal|font-medium|font-semibold|font-bold|font-extrabold|font-black/g
  ];
  
  patterns.forEach(p => {
    const matches = content.match(p);
    if (matches) fontClasses.push(...matches);
  });
  
  report.push({ file, fontClasses: [...new Set(fontClasses)].join(', ') });
});

console.log(JSON.stringify(report, null, 2));
