const fs = require('fs');

const base = JSON.parse(fs.readFileSync('base-palette-tokens.json', 'utf8'));
const found = JSON.parse(fs.readFileSync('foundational-tokens.json', 'utf8'));

function collectTokens(obj, prefix = 'uedp') {
  const tokens = [];
  function walk(curr, path) {
    for (const [key, val] of Object.entries(curr)) {
      if (key === '$extensions') continue;
      if (val && typeof val === 'object') {
        if ('$value' in val || 'value' in val) {
          const v = val['$value'] !== undefined ? val['$value'] : val['value'];
          const type = val['$type'] || val['type'] || 'string';
          const ext = val['$extensions'] || val['extensions'] || {};
          const varId = ext['com.figma.variableId'];
          // Normalize css variable name:
          // e.g. ["uedp", "border radius", "rounded-3xl"] -> --uedp-rounded-3xl or --uedp-border-radius-rounded-3xl
          // Let's check prefix rules:
          // If key already starts with rounded or gap or padding
          let cleanPath = [...path, key].map(s => s.toLowerCase().replace(/\s+/g, '-'));
          // In prompt example: `--uedp-slate-900`, `--uedp-rounded-3xl`, `--uedp-gap-4`, `--uedp-padding-6`
          // If path has 'border-radius' and key is 'rounded-3xl', prompt used '--uedp-rounded-3xl' or '--uedp-border-radius-3xl'
          // Let's see all foundational token paths:
          tokens.push({
            path: cleanPath,
            rawKey: key,
            category: path[0] || 'base',
            value: v,
            type,
            varId
          });
        } else {
          walk(val, [...path, key]);
        }
      }
    }
  }
  walk(obj, []);
  return tokens;
}

const baseTokens = collectTokens(base);
const foundTokens = collectTokens(found);

console.log('Base tokens count:', baseTokens.length);
console.log('Sample base tokens:');
baseTokens.slice(0, 15).forEach(t => console.log(`--uedp-${t.path.join('-')}: ${typeof t.value === 'object' ? t.value.hex : t.value} (${t.varId})`));

console.log('\nFoundational tokens count:', foundTokens.length);
console.log('Sample foundational tokens:');
foundTokens.forEach(t => {
  // Let's see what path is:
  console.log(`Path: [${t.path.join(', ')}] => value: ${t.value} (${t.varId})`);
});
