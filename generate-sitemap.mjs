import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { blogMetadata } from './src/blogs/metadata.js';
import { Readable } from 'stream';

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
];

// Generate sitemap
(async () => {
  try {
    // Get dynamic blog routes from blogMetadata
    const dynamicBlogRoutes = blogMetadata.map(blog => ({
      url: `/blogs/${blog.slug}`,
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: blog.date || new Date().toISOString(),
    }));

    const allRoutes = [...staticRoutes, ...dynamicBlogRoutes];

    const stream = new SitemapStream({ hostname: 'https://s4access.com' });

    // Return a promise that resolves when the stream is finished
    const data = await streamToPromise(Readable.from(allRoutes).pipe(stream));
    
    // Write to file
    createWriteStream('dist/sitemap.xml').write(data);
    console.log('Sitemap generated at dist/sitemap.xml');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
})();
