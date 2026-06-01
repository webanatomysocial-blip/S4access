import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { writeFileSync, readFileSync } from 'fs';

// Static routes from main.jsx
const staticRoutes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/customer-success', changefreq: 'monthly', priority: 0.8 },
  { url: '/insights', changefreq: 'weekly', priority: 0.9 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/s4-access-architecture-design', changefreq: 'monthly', priority: 0.7 },
  { url: '/careers', changefreq: 'monthly', priority: 0.7 },
  { url: '/sap-access-management-review', changefreq: 'monthly', priority: 0.7 },
  { url: '/sod-strategy-approach', changefreq: 'monthly', priority: 0.7 },
  { url: '/sap-access-management-automation', changefreq: 'monthly', priority: 0.7 },
  { url: '/sap-s4-access-implementation', changefreq: 'monthly', priority: 0.7 },
  { url: '/sod-role-redesign', changefreq: 'monthly', priority: 0.7 },
  { url: '/reorganisation-ma-projects', changefreq: 'monthly', priority: 0.7 },
  { url: '/outsourced-access-management', changefreq: 'monthly', priority: 0.7 },
  { url: '/authorisation-concept-owner', changefreq: 'monthly', priority: 0.7 },
  { url: '/security-architect', changefreq: 'monthly', priority: 0.7 },
  { url: '/access-risk-sod-management', changefreq: 'monthly', priority: 0.7 },
  { url: '/ff-log-review-automation', changefreq: 'monthly', priority: 0.7 },
  { url: '/sap-license-optimisation', changefreq: 'monthly', priority: 0.7 },
  { url: '/s4accessprojects', changefreq: 'monthly', priority: 0.7 },
  { url: '/customer-success/sap-authorisation-concept-owner', changefreq: 'monthly', priority: 0.7 },
  { url: '/customer-success/s4-access-management-review', changefreq: 'monthly', priority: 0.7 },
  { url: '/customer-success/s4-transition-analysis', changefreq: 'monthly', priority: 0.7 },
  { url: '/customer-success/s4-hana-fiori-transformation', changefreq: 'monthly', priority: 0.7 },
  { url: '/customer-success/stabilising-sap-access-at-scale', changefreq: 'monthly', priority: 0.7 },
  { url: '/customer-success/sam-service', changefreq: 'monthly', priority: 0.7 },
  { url: '/customer-success/sap-ucon-implementation', changefreq: 'monthly', priority: 0.7 },
  { url: '/customer-success/sap-s4hana-access-management-transformation', changefreq: 'monthly', priority: 0.7 },
];

// Generate sitemap
(async () => {
  // Parse dynamic blog routes from blogMetadata (reading the file directly to avoid import issues with .jpg files in Node.js)
  const dynamicBlogRoutes = [];
  try {
    const metadataContent = readFileSync('./src/blogs/metadata.js', 'utf8');
    // Remove single line comments to avoid processing commented-out blogs
    const cleanContent = metadataContent
      .split('\n')
      .filter(line => !line.trim().startsWith('//'))
      .join('\n');

    const blogBlockRegex = /\{[\s\S]*?slug:\s*["']([^"']+)["'][\s\S]*?date:\s*["']([^"']+)["'][\s\S]*?\}/g;
    let match;
    while ((match = blogBlockRegex.exec(cleanContent)) !== null) {
      const slug = match[1];
      const date = match[2];
      dynamicBlogRoutes.push({
        url: `/blogs/${slug}`,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: date,
      });
    }
  } catch (err) {
    console.error('Error parsing blogs metadata for sitemap:', err);
  }

  const allRoutes = [...staticRoutes, ...dynamicBlogRoutes];

  try {
    const stream = new SitemapStream({ hostname: 'https://s4access.com' });
    const sitemapXml = await streamToPromise(Readable.from(allRoutes).pipe(stream)).then(data => data.toString());

    writeFileSync('dist/sitemap.xml', sitemapXml);
    console.log('Sitemap generated successfully at dist/sitemap.xml');
  } catch (err) {
    console.error('Error building sitemap:', err);
  }
})();