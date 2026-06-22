import fs from 'fs';
import path from 'path';

function getDepth(filePath) {
  const relPath = path.relative('./src', filePath);
  const parts = relPath.split(path.sep);
  return parts.length - 1;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  const depth = getDepth(filePath);

  if (depth > 1) {
    const extra = '../'.repeat(depth - 1);
    
    // Fix import "../css/..."
    const regex1 = /import\s+['"]\.\.\/css\/([^'"]+)['"]/g;
    content = content.replace(regex1, (match, p1) => {
      changed = true;
      return `import '${extra}../css/${p1}'`;
    });

    // Also fix import from '../blogs/blogs-images/...' inside blogs/[slug] which had depth 3!
    // But blogs/[slug]/page.jsx doesn't import images directly. The components in src/blogs/ do.
    // wait, the components in src/blogs/ are depth 1. So they don't need extra `../`.

    // Any other `../` imports missing? like `../blogs/`?
    const regex2 = /import\s+(?:[^'"]+\s+from\s+)?['"]\.\.\/(blogs|pages|coustomer-pages|css)\/([^'"]+)['"]/g;
    content = content.replace(regex2, (match, folder, file) => {
       // if already has multiple `../`, don't replace
       if (match.includes('../../')) return match;
       changed = true;
       // We replace `../folder/file` with `extra + ../folder/file`
       return match.replace(`../${folder}`, `${extra}../${folder}`);
    });
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed CSS in: ${filePath}`);
  }
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

walkDir('./src/app');
