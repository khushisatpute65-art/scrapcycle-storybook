import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const baseTokensPath = path.join(projectRoot, 'base-palette-tokens.json');
const foundTokensPath = path.join(projectRoot, 'foundational-tokens.json');
const outputCssPath = path.join(projectRoot, 'src', 'styles', 'figma-tokens.css');

const baseTokens = JSON.parse(fs.readFileSync(baseTokensPath, 'utf8'));
const foundTokens = JSON.parse(fs.readFileSync(foundTokensPath, 'utf8'));

const cssRules = [];
const tokenMetadata = {
  colors: {},
  radii: {},
  gap: {},
  padding: {},
  opacity: {},
  maxWidth: {},
  variableIdMap: {}
};

// Process base palette tokens
function processBaseTokens(obj, currentPath = []) {
  for (const [key, val] of Object.entries(obj)) {
    if (key === '$extensions') continue;
    if (val && typeof val === 'object') {
      if ('$value' in val || 'value' in val) {
        const valueObj = val['$value'] !== undefined ? val['$value'] : val['value'];
        const ext = val['$extensions'] || val['extensions'] || {};
        const varId = ext['com.figma.variableId'];
        
        let hex = '';
        if (typeof valueObj === 'object' && valueObj.hex) {
          hex = valueObj.hex;
        } else if (typeof valueObj === 'string') {
          hex = valueObj;
        }

        const colorFamily = currentPath[0] || 'base';
        const colorShade = key;
        const varName = colorFamily === 'base' ? `--uedp-base-${colorShade}` : `--uedp-${colorFamily}-${colorShade}`;
        
        cssRules.push(`  ${varName}: ${hex};`);
        
        if (!tokenMetadata.colors[colorFamily]) {
          tokenMetadata.colors[colorFamily] = [];
        }
        tokenMetadata.colors[colorFamily].push({
          name: varName,
          shade: colorShade,
          hex,
          varId
        });

        if (varId) {
          tokenMetadata.variableIdMap[varId] = {
            varName,
            value: hex,
            type: 'color'
          };
        }
      } else {
        processBaseTokens(val, [...currentPath, key]);
      }
    }
  }
}

// Process foundational tokens
function processFoundationalTokens(obj, currentPath = []) {
  for (const [key, val] of Object.entries(obj)) {
    if (key === '$extensions') continue;
    if (val && typeof val === 'object') {
      if ('$value' in val || 'value' in val) {
        const rawValue = val['$value'] !== undefined ? val['$value'] : val['value'];
        const ext = val['$extensions'] || val['extensions'] || {};
        const varId = ext['com.figma.variableId'];
        const group = currentPath[0]; // 'border radius', 'gap', 'padding', 'opacity', 'max-w'

        let cssVal = '';
        let primaryVarName = '';
        const aliases = [];

        const normalizedKey = key.replace(',', '-');

        if (group === 'border radius') {
          cssVal = `${rawValue}px`;
          primaryVarName = `--uedp-${normalizedKey}`; // e.g. --uedp-rounded-3xl
          aliases.push(`--uedp-border-radius-${normalizedKey}`);
          tokenMetadata.radii[normalizedKey] = { name: primaryVarName, value: cssVal, raw: rawValue, varId };
        } else if (group === 'gap') {
          cssVal = `${rawValue}px`;
          primaryVarName = `--uedp-${normalizedKey}`; // e.g. --uedp-gap-4
          tokenMetadata.gap[normalizedKey] = { name: primaryVarName, value: cssVal, raw: rawValue, varId };
        } else if (group === 'padding') {
          cssVal = `${rawValue}px`;
          primaryVarName = `--uedp-padding-${normalizedKey.replace(/^p-/, '')}`; // e.g. --uedp-padding-6
          aliases.push(`--uedp-${normalizedKey}`); // e.g. --uedp-p-6
          tokenMetadata.padding[normalizedKey] = { name: primaryVarName, value: cssVal, raw: rawValue, varId };
        } else if (group === 'opacity') {
          cssVal = `${(rawValue / 100).toFixed(2).replace(/\.?0+$/, '')}`;
          primaryVarName = `--uedp-${normalizedKey}`; // e.g. --uedp-opacity-50
          tokenMetadata.opacity[normalizedKey] = { name: primaryVarName, value: cssVal, raw: rawValue, varId };
        } else if (group === 'max-w') {
          cssVal = `${rawValue}px`;
          primaryVarName = `--uedp-${normalizedKey}`; // e.g. --uedp-max-w-md
          tokenMetadata.maxWidth[normalizedKey] = { name: primaryVarName, value: cssVal, raw: rawValue, varId };
        }

        if (primaryVarName) {
          cssRules.push(`  ${primaryVarName}: ${cssVal};`);
          for (const alias of aliases) {
            cssRules.push(`  ${alias}: var(${primaryVarName});`);
          }
          if (varId) {
            tokenMetadata.variableIdMap[varId] = {
              varName: primaryVarName,
              value: cssVal,
              type: group
            };
          }
        }
      } else {
        processFoundationalTokens(val, [...currentPath, key]);
      }
    }
  }
}

processBaseTokens(baseTokens);
processFoundationalTokens(foundTokens);

const cssContent = `/**
 * Figma Design System - Synchronized Design Tokens
 * Generated automatically from base-palette-tokens.json and foundational-tokens.json
 */

:root {
  /* ==========================================================================
     BASE PALETTE COLOR TOKENS
     ========================================================================== */
${cssRules.filter(r => !r.includes('rounded') && !r.includes('gap') && !r.includes('padding') && !r.includes('p-') && !r.includes('opacity') && !r.includes('max-w')).join('\n')}

  /* ==========================================================================
     FOUNDATIONAL GEOMETRY & SPACING TOKENS
     ========================================================================== */
${cssRules.filter(r => r.includes('rounded') || r.includes('gap') || r.includes('padding') || r.includes('p-') || r.includes('opacity') || r.includes('max-w')).join('\n')}
}
`;

fs.mkdirSync(path.dirname(outputCssPath), { recursive: true });
fs.writeFileSync(outputCssPath, cssContent, 'utf8');

const metaPath = path.join(projectRoot, 'src', 'styles', 'tokens-metadata.json');
fs.writeFileSync(metaPath, JSON.stringify(tokenMetadata, null, 2), 'utf8');

console.log(`Generated ${outputCssPath} with ${cssRules.length} CSS token declarations.`);
