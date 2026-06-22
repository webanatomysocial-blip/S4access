import fs from 'fs';
import path from 'path';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // Replace react-router-dom Link import
  if (content.includes("react-router-dom")) {
    content = content.replace(/import\s+\{.*Link.*\}\s+from\s+['"]react-router-dom['"];?/g, 'import Link from "next/link";');
    content = content.replace(/<Link\s+to=/g, '<Link href=');
    content = content.replace(/import\s+\{\s*\}\s+from\s+['"]react-router-dom['"];?\n?/g, '');
    changed = true;
  }

  // Replace img tags
  if (content.includes("<img ")) {
    content = content.replace(/<img /g, '<Image ');
    if (!content.includes('import Image from "next/image"')) {
      content = 'import Image from "next/image";\n' + content;
    }
    changed = true;
  }

  // Remove Header and Footer imports and tags (useful for pages)
  if (filePath.includes('src/pages') || filePath.includes('src/blogs') || filePath.includes('src/coustomer-pages')) {
    if (content.includes("<Header />") || content.includes("<Footer />") || content.includes("Header") || content.includes("Footer")) {
      content = content.replace(/import\s+Header\s+from\s+['"].*Header(\.jsx)?['"];?\n?/g, '');
      content = content.replace(/import\s+Footer\s+from\s+['"].*Footer(\.jsx)?['"];?\n?/g, '');
      content = content.replace(/<Header\s*\/>\n?/g, '');
      content = content.replace(/<Footer\s*\/>\n?/g, '');
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated: ${filePath}`);
  }
}

function walkDir(dir) {
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

walkDir('./src/components');
walkDir('./src/pages');
walkDir('./src/blogs');
walkDir('./src/coustomer-pages');

console.log("Migration script completed.");
