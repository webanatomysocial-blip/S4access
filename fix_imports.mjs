import fs from 'fs';
import path from 'path';

function getDepth(filePath) {
  // relative to src
  const relPath = path.relative('./src', filePath);
  // count number of separators
  const parts = relPath.split(path.sep);
  return parts.length - 1; // 1 for app/page.jsx, 2 for app/contact/page.jsx, 3 for app/services/sub/page.jsx
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  const depth = getDepth(filePath);
  const prefixPath = '../'.repeat(depth);

  // Fix relative imports: from '../components/ to from '../../components/
  // The original files were in src/pages (depth 1). 
  // Now they are at depth. We need to add (depth - 1) times '../'
  if (depth > 1) {
    const extra = '../'.repeat(depth - 1);
    const regex = /from\s+['"]\.\.\/([^'"]+)['"]/g;
    content = content.replace(regex, (match, p1) => {
      // if it's already fixed, don't fix again
      if (p1.startsWith('../')) return match; 
      changed = true;
      return `from '${extra}../${p1}'`;
    });
    
    // Also fix import x from '../...'
    const regex2 = /import\s+([^\{]+)\s+from\s+['"]\.\.\/([^'"]+)['"]/g;
    content = content.replace(regex2, (match, p1, p2) => {
       if (p2.startsWith('../')) return match;
       changed = true;
       return `import ${p1} from '${extra}../${p2}'`;
    });
  }

  // Also fix import './pages/Contact.jsx' to NextJS imports? No, that's inside main.jsx.

  // Extract Helmet metadata
  if (content.includes('<Helmet>')) {
    const titleMatch = content.match(/<title>([^<]+)<\/title>/);
    const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/);
    
    let title = titleMatch ? titleMatch[1] : '';
    let desc = descMatch ? descMatch[1] : '';

    // Remove Helmet tags
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
    content = content.replace(/import\s+\{\s*Helmet\s*\}\s+from\s+['"]react-helmet-async['"];?\n?/g, '');
    content = content.replace(/import\s+\{\s*Helmet\s*\}\s+from\s+['"]react-helmet['"];?\n?/g, '');
    
    if (title || desc) {
      let metadataCode = `\nexport const metadata = {\n`;
      if (title) metadataCode += `  title: ${JSON.stringify(title)},\n`;
      if (desc) metadataCode += `  description: ${JSON.stringify(desc)},\n`;
      metadataCode += `};\n\n`;
      
      // insert after imports
      const importEndIndex = content.lastIndexOf('import ');
      if (importEndIndex === -1) {
        content = metadataCode + content;
      } else {
        const endOfImportLine = content.indexOf('\n', importEndIndex);
        content = content.slice(0, endOfImportLine + 1) + metadataCode + content.slice(endOfImportLine + 1);
      }
    }
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed: ${filePath}`);
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
