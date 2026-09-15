const fs = require('fs');

const base = JSON.parse(fs.readFileSync('base-palette-tokens.json', 'utf8'));
const found = JSON.parse(fs.readFileSync('foundational-tokens.json', 'utf8'));

const varMap = {};

function scan(obj, path = []) {
  for (const k of Object.keys(obj)) {
    if (k === '$extensions') continue;
    const item = obj[k];
    if (item && typeof item === 'object') {
      if ('$value' in item || 'value' in item) {
        const ext = item['$extensions'] || item['extensions'] || {};
        const vid = ext['com.figma.variableId'];
        const val = item['$value'] !== undefined ? item['$value'] : item['value'];
        const type = item['$type'] || item['type'];
        // format name to css variable name: e.g. uedp-slate-900, uedp-border-radius-lg, uedp-rounded-3xl, etc.
        const tokenName = ['uedp', ...path, k].join('-').toLowerCase().replace(/\s+/g, '-');
        if (vid) {
          varMap[vid] = { tokenName: `--${tokenName}`, val, type, path: [...path, k] };
        }
      } else {
        scan(item, [...path, k]);
      }
    }
  }
}

scan(base);
scan(found);

console.log('Total mapped variables:', Object.keys(varMap).length);
console.log('Sample mappings:');
Object.entries(varMap).slice(0, 10).forEach(([k, v]) => console.log(k, '=>', v.tokenName, '=', v.val));

console.log('\nVariableID:16:12 =>', varMap['VariableID:16:12']);
console.log('VariableID:17:48 =>', varMap['VariableID:17:48']);
console.log('VariableID:17:64 =>', varMap['VariableID:17:64']);

const figma = JSON.parse(fs.readFileSync('figma_file.json', 'utf8'));
const compSet = figma.document.children.find(p => p.id === '12:10').children[0];
console.log('\nCompSet:', compSet.name);
compSet.children.forEach(child => {
  console.log('\nVariant:', child.name);
  console.log('boundVariables:', JSON.stringify(child.boundVariables, null, 2));
  console.log('fills:', JSON.stringify(child.fills, null, 2));
  console.log('padding:', child.paddingLeft, child.paddingRight, child.paddingTop, child.paddingBottom);
  console.log('itemSpacing:', child.itemSpacing);
  console.log('cornerRadius:', child.cornerRadius);
  if (child.children) {
    child.children.forEach(textChild => {
      console.log('  textChild:', textChild.name, 'characters:', textChild.characters);
      console.log('  text fills:', JSON.stringify(textChild.fills, null, 2));
      console.log('  text style:', JSON.stringify(textChild.style, null, 2));
      console.log('  text boundVariables:', JSON.stringify(textChild.boundVariables, null, 2));
    });
  }
});
