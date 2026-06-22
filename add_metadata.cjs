const fs = require("fs");
const glob = require("glob");

const dirs = glob.sync("src/app/customer-success/*/page.jsx");

dirs.forEach((file) => {
  let content = fs.readFileSync(file, "utf8");
  
  // Find the first image import, e.g., import img10 from ...
  const imgImportMatch = content.match(/import\s+([a-zA-Z0-9_]+)\s+from\s+['"][^'"]+\.(jpg|png|webp|jpeg)['"]/);
  if (imgImportMatch) {
    const imgVar = imgImportMatch[1];
    
    // Check if metadata exists
    if (content.includes("export const metadata = {")) {
      // Add openGraph inside metadata
      content = content.replace(
        /export const metadata = {([\s\S]*?)};/,
        (match, inner) => {
          if (inner.includes("openGraph")) return match; // already has it
          
          return `export const metadata = {${inner}  openGraph: {\n    images: [\n      { url: ${imgVar}.src }\n    ]\n  }\n};`;
        }
      );
      fs.writeFileSync(file, content, "utf8");
      console.log("Updated metadata in " + file);
    } else {
      console.log("No metadata found in " + file);
      const meta = `\nexport const metadata = {\n  title: "s4access Customer Success",\n  description: "s4access Customer Success Stories",\n  openGraph: {\n    images: [{ url: ${imgVar}.src }]\n  }\n};\n`;
      const lastImportMatch = [...content.matchAll(/import.*['"];?/g)].pop();
      if (lastImportMatch) {
        const insertPos = lastImportMatch.index + lastImportMatch[0].length;
        content = content.slice(0, insertPos) + "\n" + meta + content.slice(insertPos);
        fs.writeFileSync(file, content, "utf8");
        console.log("Added metadata to " + file);
      }
    }
  } else {
    console.log("No image import found in " + file);
  }
});
