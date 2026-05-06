const fs = require('fs');
const path = require('path');

const pagesDir = 'c:/reactproject/aaawebsite/src/pages';
const files = fs.readdirSync(pagesDir).filter(f => 
  f.endsWith('.tsx') && f !== 'HomePage.tsx' && f !== 'HomePageOld.tsx'
);

// aaa-dev uses root 20px. Bootstrap rem scale:
// body = 0.8rem = 16px
// text-sm = 0.75rem = 15px → use 0.75rem
// We'll normalise rogue px sizes that clearly don't match aaa-dev

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // 1. Replace rogue tiny sizes used for breadcrumb/label that should be 0.7rem (14px equivalent)
  //    text-[9px], text-[10px] → these are used in "INSTITUTIONAL BREADCRUMB" artifacts, normalize
  content = content.replace(/text-\[9px\]/g, 'text-[0.65rem]');
  content = content.replace(/text-\[10px\]/g, 'text-[0.7rem]');
  content = content.replace(/text-\[11px\]/g, 'text-[0.75rem]');
  content = content.replace(/text-\[12px\]/g, 'text-[0.8rem]');
  content = content.replace(/text-\[12\.5px\]/g, 'text-[0.8rem]');
  content = content.replace(/text-\[13px\]/g, 'text-[0.85rem]');
  content = content.replace(/text-\[13\.5px\]/g, 'text-[0.85rem]');
  content = content.replace(/text-\[14px\]/g, 'text-[0.9rem]');
  content = content.replace(/text-\[14\.5px\]/g, 'text-[0.9rem]');
  content = content.replace(/text-\[15px\]/g, 'text-[0.95rem]');
  content = content.replace(/text-\[15\.5px\]/g, 'text-[0.95rem]');
  content = content.replace(/text-\[16px\]/g, 'text-[1rem]');
  content = content.replace(/text-\[17px\]/g, 'text-[1.05rem]');
  content = content.replace(/text-\[17\.5px\]/g, 'text-[1.05rem]');
  content = content.replace(/text-\[18px\]/g, 'text-[1.1rem]');
  content = content.replace(/text-\[20px\]/g, 'text-[1.2rem]');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Fixed: ' + file);
  } else {
    console.log('No change: ' + file);
  }
});

console.log('\nDone.');
