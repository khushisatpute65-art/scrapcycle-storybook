import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

console.log('🚀 [Deploy-Vercel] Starting deployment preparation and verification...');

// 1. Check tokens and sync
console.log('📦 1. Synchronizing Figma tokens...');
execSync('node scripts/generate-tokens.js', { cwd: projectRoot, stdio: 'inherit' });

// 2. TypeScript compilation check
console.log('🔍 2. Running TypeScript compilation check...');
try {
  execSync('npx.cmd tsc --noEmit', { cwd: projectRoot, stdio: 'inherit' });
  console.log('✅ TypeScript check passed cleanly (0 errors).');
} catch (e) {
  console.error('❌ TypeScript check failed:', e.message);
  process.exit(1);
}

// 3. Storybook static build
console.log('🏗️  3. Building static Storybook bundle for Vercel...');
try {
  execSync('npx.cmd storybook build -o storybook-static', { cwd: projectRoot, stdio: 'inherit' });
  console.log('✅ Storybook static build successful! Output written to storybook-static/');
} catch (e) {
  console.error('❌ Storybook build failed:', e.message);
  process.exit(1);
}

// 4. Verify storybook-static output
const staticDir = path.join(projectRoot, 'storybook-static');
if (fs.existsSync(path.join(staticDir, 'index.html')) && fs.existsSync(path.join(staticDir, 'iframe.html'))) {
  console.log('🎉 Verification passed! All build artifacts (index.html, iframe.html) exist.');
  console.log('✨ Ready to deploy to Vercel with command: `npx vercel deploy --prod`');
} else {
  console.error('❌ Missing expected static output in storybook-static/');
  process.exit(1);
}
