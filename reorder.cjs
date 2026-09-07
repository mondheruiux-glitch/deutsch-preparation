const fs = require('fs');
const text = fs.readFileSync('src/data/sprechen.ts', 'utf-8');
const startMatch = 'export const sprechenTopics: Topic[] = [\n  {\n';
const endMatch = '\n  }\n];\n';

const startIndex = text.indexOf(startMatch);
const endIndex = text.indexOf(endMatch);

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find start or end match');
  process.exit(1);
}

const prefix = text.substring(0, startIndex + startMatch.length - '  {\n'.length);
const suffix = '\n];\n';

const inner = text.substring(startIndex + '  {\n'.length, endIndex);
const parts = inner.split('\n  },\n  {\n');

const objects = parts.map(p => '  {\n' + p + '\n  }');

const getObjId = (objStr) => {
    const match = objStr.match(/id:\s*'(\d+)'/);
    return match ? match[1] : null;
};

const map = {};
objects.forEach(obj => {
    map[getObjId(obj)] = obj;
});

const desiredOrder = ['8', '9', '10', '5', '6', '2', '1', '3', '4', '7', '11', '12'];
const newObjects = desiredOrder.map(id => map[id]);

const newContent = prefix + newObjects.join(',\n') + suffix;
fs.writeFileSync('src/data/sprechen.ts', newContent);
console.log('Reordered successfully!');
