import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirsToScan = [
  path.join(__dirname, 'src', 'assets', 'images'),
  path.join(__dirname, 'public', 'blogs-images'),
  path.join(__dirname, 'public', 'images')
];

const processDirectory = async (dir) => {
  if (!fs.existsSync(dir)) return;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(fullPath).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        try {
          const stats = fs.statSync(fullPath);
          // Only process images larger than 200KB
          if (stats.size > 200 * 1024) {
            console.log(`Optimizing: ${fullPath} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
            const tempPath = fullPath + '.tmp';
            
            let image = sharp(fullPath);
            const metadata = await image.metadata();
            
            // Resize if it's too large (max 1920 width)
            if (metadata.width > 1920) {
              image = image.resize(1920, null, { withoutEnlargement: true });
            }
            
            if (ext === '.jpg' || ext === '.jpeg') {
              image = image.jpeg({ quality: 75, progressive: true });
            } else if (ext === '.png') {
              image = image.png({ quality: 80, compressionLevel: 9 });
            } else if (ext === '.webp') {
              image = image.webp({ quality: 80 });
            }
            
            await image.toFile(tempPath);
            fs.renameSync(tempPath, fullPath);
            
            const newStats = fs.statSync(fullPath);
            console.log(`Saved: ${(newStats.size / 1024 / 1024).toFixed(2)} MB`);
          }
        } catch (error) {
          console.error(`Failed to process ${fullPath}:`, error.message);
        }
      }
    }
  }
};

const run = async () => {
  for (const dir of dirsToScan) {
    console.log(`Scanning directory: ${dir}`);
    await processDirectory(dir);
  }
  console.log("Optimization complete!");
};

run();
