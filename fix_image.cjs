const fs = require('fs');
let data = fs.readFileSync('src/data/sprechen.ts', 'utf8');

data = data.replace(
  "import img6 from '../assets/images/topic6_train_1788358898226.jpg';",
  "import img6 from '../assets/images/topic6_bahnhof_1788511638708.jpg';"
);

fs.writeFileSync('src/data/sprechen.ts', data);
console.log('Image fixed');
