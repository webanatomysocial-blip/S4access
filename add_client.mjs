import fs from 'fs';
import path from 'path';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  const requiresClient = /useState|useEffect|useRef|useMemo|useCallback|useContext|window\.|document\.|useRouter|usePathname|useSearchParams|useLocation|useParams|onClick=|onChange=|onSubmit=/.test(content);
  const hasUseClient = /^['"]use client['"];?/.test(content);

  if (requiresClient && !hasUseClient) {
    content = '"use client";\n\n' + content;
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Added 'use client' to: ${filePath}`);
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

walkDir('./src/components');
walkDir('./src/app');
walkDir('./src/blogs');
walkDir('./src/coustomer-pages');

console.log("Client script completed.");
