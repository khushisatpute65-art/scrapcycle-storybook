const fs = require('fs');

function examine(filename) {
  if (!fs.existsSync(filename)) {
    console.log('Not found:', filename);
    return;
  }
  const content = JSON.parse(fs.readFileSync(filename, 'utf8'));
  console.log('=== FILE:', filename, '===');
  const vids = [];
  function rec(obj, path = '') {
    for (const [k, v] of Object.entries(obj)) {
      if (k === '$extensions' && v && v['com.figma.variableId']) {
        vids.push({ path, vid: v['com.figma.variableId'] });
      } else if (v && typeof v === 'object') {
        const ext = v['$extensions'] || v['extensions'] || {};
        if (ext['com.figma.variableId']) {
          vids.push({ path: path ? path + '.' + k : k, vid: ext['com.figma.variableId'], val: v['$value'] || v['value'] });
        }
        rec(v, path ? path + '.' + k : k);
      }
    }
  }
  rec(content);
  console.log('Total variable IDs found:', vids.length);
  console.log('Sample IDs:', vids.slice(0, 8));
  const interesting = vids.filter(v => ['VariableID:16:12', 'VariableID:17:75', 'VariableID:17:46', 'VariableID:17:77', 'VariableID:17:48', 'VariableID:17:35', 'VariableID:17:64'].includes(v.vid));
  if (interesting.length > 0) {
    console.log('>>> MATCHED INTERESTING VARIABLE IDs:', interesting);
  }
}

examine('base-palette-tokens.json');
examine('foundational-tokens.json');
examine('C:/Users/khush/OneDrive/Downloads/ScrapCycle_Semantic_Light.json');
examine('C:/Users/khush/OneDrive/Downloads/ScrapCycle_Semantic_Dark.json');
examine('C:/Users/khush/OneDrive/Downloads/ScrapCycle_Semantic_Palette.json');
examine('C:/Users/khush/OneDrive/Downloads/ScrapCycle_Semantic_Light_WORKING_FORMAT.json');
examine('C:/Users/khush/OneDrive/Downloads/ScrapCycle_Semantic_Light_CORRECT.json');
examine('C:/Users/khush/OneDrive/Downloads/semantic-palette-figma-import.json');
examine('C:/Users/khush/OneDrive/Downloads/semantic light.json');
examine('C:/Users/khush/OneDrive/Downloads/genz-news-semantic-palette-figma.json');
examine('C:/Users/khush/OneDrive/Downloads/base-palette (1).json');
