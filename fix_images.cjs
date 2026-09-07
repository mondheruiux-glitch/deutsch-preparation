const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src/assets/images');
const destDir = path.join(__dirname, 'public/images/a1-bildwortschatz');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jpg'));
if (files.length === 0) {
  console.log("No images found in src/assets/images");
  process.exit(0);
}

// Map them roughly
const map = {
  1: files.find(f => f.includes('family')) || files[0],
  2: files.find(f => f.includes('wohnen')) || files[0],
  3: files.find(f => f.includes('clothes')) || files[0],
  4: files.find(f => f.includes('dress')) || files[0],
  5: files.find(f => f.includes('essen')) || files[0],
  11: files.find(f => f.includes('einkaufen')) || files[0],
  12: files.find(f => f.includes('car')) || files[0],
  15: files.find(f => f.includes('freizeit')) || files[0],
  16: files.find(f => f.includes('hiking')) || files[0],
  18: files.find(f => f.includes('furniture')) || files[0],
  20: files.find(f => f.includes('train')) || files[0]
};

for (let i = 1; i <= 24; i++) {
  let fileToCopy = map[i];
  if (!fileToCopy) {
     fileToCopy = files[i % files.length];
  }
  
  fs.copyFileSync(path.join(srcDir, fileToCopy), path.join(destDir, `${i}.jpg`));
}
console.log("Images copied to public/images/a1-bildwortschatz");
