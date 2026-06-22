import fs from 'fs';
import path from 'path';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // Regex to match trapped metadata inside an import block
  // It looks like:
  // import {
  //
  // export const metadata = { ... };
  //
  //    FaUserPlus,

  const trappedRegex = /(import\s+\{[^}]*?)\n*export\s+const\s+metadata\s*=\s*\{([\s\S]*?)\};\n*([\s\S]*?\})/g;

  content = content.replace(trappedRegex, (match, before, metaContent, after) => {
    changed = true;
    return `${before}${after}\n\nexport const metadata = {${metaContent}};\n`;
  });

  // Also catch if it was inserted in the middle of a single line import?
  // My script did: const importEndIndex = content.lastIndexOf('import '); endOfImportLine = content.indexOf('\n', importEndIndex);
  // It inserted after the newline of the line that contained the last 'import '.
  // So if it was `import {\n` it inserted after `import {\n`.
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed syntax in: ${filePath}`);
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
walkDir('./src/blogs');
